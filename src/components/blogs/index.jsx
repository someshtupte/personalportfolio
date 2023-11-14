import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="John Doe"
                    date="11 Nov 2023"
                    image={Blog1}
                    title="This is my first blog post on this website"
                    description="This is the first blog post I am writing on this website. This is my personal portfolio website"
                />
            </div>
        </Section>
    );
};

export default Blogs;
