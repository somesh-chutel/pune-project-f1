import Header from '../header';
import DisplayJobs from '../displayJobs';
import FilterSection from '../filterSection';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import './index.css';

const Jobs = ()=> {
    const [allValues,setValues] = useState({
        jobsList : []
    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const fetchJobsData = async ()=>{

            const api = "https://apis.ccbp.in/jobs";

            const options = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
              }


              const response = await fetch(api,options);

              const data = await response.json();

              console.log(data.jobs);

              if(response.ok===true){
                setValues({...allValues,jobsList : data.jobs})
              }

        }


        fetchJobsData();


    },[]);


    return (

        <div>
            <Header/>

            <div className='filter-display-all-jobs-cont'>
                    <div className='filter-section-cont'>
                        <FilterSection/>
                    </div>
                    <div className='display-all-jobs-cont'>
                        <input placeholder='Search' type="search" className='form-control my-input'/>
                        <ul className='jobs-list-cont'>
                                {
                                   allValues.jobsList.map(each=>

                                    <DisplayJobs jobsItem = {each} key={each.id}/>
                                   ) 
                                }

                        </ul>
                        
                    </div>
            </div>

        </div>
    )
}




export default Jobs;
