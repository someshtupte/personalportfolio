import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "WhatsApp Clone",
        tags: [ "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/whatsapp-clone.png"),
        },
    },
    {
        id: 2,
        name: "Real Estate Mern Project",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/real-estate.png"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/real-estate-property.png"),
        },
    },
    {
        id: 4,
        name: "Realtime Weather-App",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/realtime-weather-app.png"),
        },
    }

];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
