import Header from '../header';
import DisplayJobs from '../displayJobs';
import FilterSection from '../filterSection';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import './index.css';

const Jobs = ()=> {

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
                        <DisplayJobs/>
                    </div>
            </div>

        </div>
    )
}




export default Jobs;
