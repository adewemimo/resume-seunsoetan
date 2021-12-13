const Experience = function (props) {
  console.log('experience----', props);
  const { company, website, jobTitle, location, date } = props;
  

  return (
    <div className="experience-container">
      <h4>
        {company},
        <span>
          {location}-{jobTitle}
        </span>
      </h4>
      <p className="p-style">{website}</p>
      <p className="p-style">{date}</p>
    </div>
  );
};

export default Experience;
