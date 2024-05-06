import React, { useState } from "react";
import Card from "./Card"

function Cards({courses,category}){

    const [likedCourses,setLikedCourses] = useState([]);
    
    function getCourses() {
        //if category ki value all ho to sbka ek array create kr aur return kr do
        if(category === "All"){
            // Initialize an empty array to store all courses
            let allCourses = [];
        
            // Loop over each category in courses.data
            Object.values(courses).forEach(array => {
                // Concatenate the courses from each category to allCourses
                array.forEach(oneCourse => {
                    allCourses.push(oneCourse);
                });
            });
        
            // Return the combined array of all courses
            return allCourses;
        }
        else{
            //category m sirf specific button ka data h to wo to already api m uska array bna hua h
            //so we can return it directly
            return courses[category];
        }
    }
   

    return (
        <div className="cards">
           {
             getCourses().map((course)=>(
                <Card key={course.id} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} ></Card>
             ))
           }
        </div>
    )
        
}

export default Cards