import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


 const DashBoard = () => {
    const[topic,setTopic] = useState([]);
    
    const navigate = useNavigate();
    useEffect(() => {
        const fetchTopic = async() => {
           try {
              const res = await axios({
                url: 'http://localhost:5000/dashBoard',
                method: 'get',
              });
              setTopic(res.data.fetchedTopics);
            } catch (error) {
              console.error(error);
            }
         }
         fetchTopic();
       });
     
       return (
         <div className="dashboard-container">
            <header>
               <button className="logout-button" onClick={() => {
                 localStorage.removeItem("user");
                 navigate('/');
               }}>Logout</button>
            </header>
            <div className="dashboard">
                   <header>
                     <h3>Topics</h3>
                   </header>
                   <div className="Topic-container">
                      {
                       topic.length > 0 && topic.map(item => {
                          return <li key={item._id}>
                            <span>{item.topicName}</span><br/>
                            <span>{100}%</span>
                           </li>
                       })
                      }
                   </div>
               </div>
            </div>
       )
     }

export default DashBoard