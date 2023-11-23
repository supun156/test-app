import React, {useState, useEffect} from 'react';
import { URL } from '../App';
import axios from 'axios';

const TaskList = () => {
    const [taskData, setTaskData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllData();
    }, [])

    const getAllData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${URL}/posts`);
            setTaskData(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div>
        <h1 className='head-title'>Task List</h1>
        <h4>Number of items : {taskData.length}</h4>
        {loading ? (
            <h1>Loading.....</h1>
        ) : (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                
                <tbody>
                    {taskData.map((task, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{task.title}</td>
                            <td>{task.body}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        )}
        
        </div>
    )
}

export default TaskList
