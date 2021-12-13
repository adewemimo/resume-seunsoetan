const Skills = function(props) {
    const { skills } = props;
    const skillsList = skills.map(skill => <span key={skill}>{skill}</span>);

    return (
        <div className="skills">
            <h1>Skills</h1>
            {skillsList}
        </div>
    );

};

export default Skills;