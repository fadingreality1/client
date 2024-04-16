import React, { useEffect, useState } from "react";
import ApiConnector from "../../api/apiConnector";
import ApiEndpoints from "../../api/apiEndpoints";
import AppPaths from "../../lib/appPaths";
import {
	MDBCard,
	MDBContainer,
	MDBCol,
	MDBIcon,
	MDBRipple,
	MDBRow,
} from "mdb-react-ui-kit";

const Feed = () => {
	const style = {
		width: "50rem",
		height: "50rem",
	};

	const button = {
		width: "5rem"
	}

	const center = {
		marginTop: "20px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	};

	const [feed, setFeed] = useState([]);

	const fetchFeeds = async () => {
		const feedData = await ApiConnector.sendGetRequest(ApiEndpoints.FEED);

		feedData.map((element) => {
			const obj = {
				author: element.author,
				image: element.image,
				description: element.description,
			};
			setFeed((prev) => [...prev, obj]);
		});
	};

	useEffect(() => {
		fetchFeeds();
	}, []);

	return (
		<div style={center}>
			<button
				onClick={() => { window.location.href = AppPaths.CREATE_POST }}
				className="btn btn-outline-warning btn-block my-1 mt-4"
				style={button}
			>
				Add Post
			</button>

			{feed.length > 0 &&
				feed.map((ele) => {
					return (
						<div>
							<MDBContainer className="py-5">
								<MDBCard
									className="px-3 pt-3"
									style={{ maxWidth: "32rem" }}
								>
									<div>
										<MDBRow className="mb-3">
											<MDBCol col="6">
												<MDBIcon
													fas
													icon="plane"
													className="me-1"
												/>
												{ele.author}
											</MDBCol>
										</MDBRow>
										<MDBRipple
											className="bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4"
											rippleTag="div"
											rippleColor="light"
										>
											<img
												src={ele.image}
												className="img-fluid"
											/>
											<div
												className="mask"
												style={{
													backgroundColor:
														"rgba(251, 251, 251, 0.15)",
												}}
											></div>
										</MDBRipple>
										<p>{ele.description}</p>
									</div>
								</MDBCard>
							</MDBContainer>
						</div>
					);
				})}
		</div>
	);
};

export default Feed;
