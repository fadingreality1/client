import React, { useState } from 'react'
import ApiEndpoints from '../../api/apiEndpoints';
import ApiConnector from '../../api/apiConnector';
import { useForm } from 'react-hook-form';

const CreatePost = (props) => {
    const [description, setDesription] = useState('');
    const [file, setFile] = useState(null);
    const [postData, setPostData] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
      } = useForm();

    const image = watch("image");
    const handleClick = async(postData) => {

        console.log('postdata ',postData)
        console.log(image)
        const formData = new FormData();
        formData.append("image", image[0]);
        delete postData["image"];
        Object.keys(postData).forEach((key) => {
        formData.append(key, postData[key]);
        });

        const successLoginData = await ApiConnector.sendPostRequest(
            ApiEndpoints.CREATE_POST,
            formData,
            true,
            true
        );
        console.log(successLoginData)
}

    return (
        <>
            <form onSubmit={handleSubmit(handleClick)}>
                <input
                    type="file"
                    name="image"
                    {...register("image", { required: true })}
                />

                <input type='text' name='description' {...register("description", { required: true })}/>

                <button type='submit'>Add Post</button>
            </form>
        </>
    )
}

export default CreatePost;

