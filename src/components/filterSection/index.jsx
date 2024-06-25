import "./index.css";

const empTypeList = [
  {
    label: "Full Time",
    empId: "FULLTIME",
  },
  {
    label: "Part Time",
    empId: "PARTTIME",
  },
  {
    label: "Freelance",
    empId: "FREELANCE",
  },
  {
    label: "Internship",
    empId: "INTERNSHIP",
  },
];

const FilterSection = () => {
  return (
        <>

            <ul>
                {empTypeList.map(each=>(

                        <li>
                            <input id={each.empId} type="checkbox" />
                            <label htmlFor={each.empId}>{each.label}</label>
                        </li>

                ))}
            </ul>
        
        </>

  )
};

export default FilterSection;
