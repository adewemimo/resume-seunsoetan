import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import Skills from "./Skills";


const MainSection = function(props) {
    const {skills, experiences, educations} = props;
    return (
        <div className="main-section">
        <Skills skills={skills}/>
        <ExperienceList experiences={experiences} />
        <EducationList educations={educations} />
        </div>
    );
}

export default MainSection;