import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperiance from './WorkExperiance'
import EmploymentType from './EmploymentType'
function Sidebar({handleChange,handleClick}) {
  return (
    <div>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingData handleChange={handleChange}/>
        <WorkExperiance handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar