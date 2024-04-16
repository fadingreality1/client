import React, { useEffect, useState } from "react";
import ApiConnector from "../../api/apiConnector";
import ApiEndpoints from "../../api/apiEndpoints";
import AppPaths from "../../lib/appPaths";
import './feed.css';

import {
	MDBCard,
	MDBContainer,
	MDBCol,
	MDBIcon,
	MDBRipple,
	MDBRow,
} from "mdb-react-ui-kit";
import CreatePost from "./createPost";

const Feed = () => {

	const [feed, setFeed] = useState([]);
	const [modal, setModal] = useState(false);

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
		// fetchFeeds();
	}, []);

	return (
		<div className="check">
			<button
				// onClick={() => { window.location.href = AppPaths.CREATE_POST }}
				onClick={() => { setModal((prev) => !prev) }}
				className="btn btn-outline-warning btn-block my-1 mt-4 button"
				data-toggle="modal" data-target="#exampleModal"
			>
				Add Post
			</button>
			<CreatePost modal={modal} setModal={setModal} />
			fwenfkjwefn
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
