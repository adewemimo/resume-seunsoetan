const Education = function(props) {
  const {school, course, date} = props;
  return (
    <div className="education-container">
        <h4>{school} <span>{course}</span></h4>
        <p>{date}</p>
    </div>
  );
};

export default Education;