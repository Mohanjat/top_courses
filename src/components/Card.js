import React, { useCallback, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({course,likedCourses,setLikedCourses}){

    let info = course.description.substring(0,100) + "...";

    const [fcLike,setFcLike] = useState(true);

    function clickHandler(){

        fcLike ? setFcLike(false) : setFcLike(true);

        //agr allready liked h to unlike kr do
        if(likedCourses.includes(course.id)){
            //now filter all the values based on the id 
            setLikedCourses((prev) => prev.filter((currId) => (currId != course.id)));
            toast.warning("Like Removed");
        }
        else{
            //course ko like kr do
            if(likedCourses.length == 0){
                setLikedCourses([course.id]);
            }
            else{
                //non empty h to do prev value ke saath new value bhi add kr do
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("Liked Successfully")
        }
    }

    return (
        <div className="card">
            <img className="card_image" src={course.image.url} alt="course image" ></img>

           
            <button className="card_btn" onClick={clickHandler}>
                {
                    fcLike ? <FcLikePlaceholder className="like_btn"></FcLikePlaceholder> : <FcLike className="like_btn" ></FcLike>
                }
                
            </button>
         
            <div className="card_info" >
                <h4 className="card_title" >{course.title}</h4>      
                <p className="card_description" >{info}</p>
            </div>

        </div>
    )

}

export default Card;