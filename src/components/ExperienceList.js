import Experience from "./Experience";

const ExperienceList = function(props) {

    const experienceList = props.experiences.map(experience => <Experience  key={experience.id} {...experience}/>);
    return (
        <>
        <h1>Experience</h1>
        {experienceList}
        </>
    )

}

export default ExperienceList;