import Education from "./Education";

const EducationList = function(props) {
    const educationList = props.educations.map(education => <Education  key ={education.id} {...education}/>);

    return (
        <>
        <h1>Education</h1>
        {educationList}
        </>
        
    );
}

export default EducationList;