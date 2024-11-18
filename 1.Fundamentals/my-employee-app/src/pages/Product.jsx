import axios from "axios";
import { useEffect, useState } from "react";

function Product(){
    const [products, setProducts] = useState([]);
    const [inputs,setInputs]=useState({});
function setChance(e){
    const name =e.target.name;
    const value=e.target.value;
    setInputs(prev=>({...prev,[name]:value}))
}

    const getAll=async()=>{
        const result=await axios.get("http://localhost:8000/products")
    }
    useEffect(()=>{
        getAll();
    },[])

    return(
        <>
        <div>
            FirstName:<input type="text"/>
            LastName :<input type="text"/>
            Profession:<input type="text"/>
            Salary:<input type="text"/>
            <button>Save</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Profession</th>
                    <th>Salary</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {products.map((val, i)=> {
                    return(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.profession}</td>
                            <td>{val.salary}</td>
                            <td>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Product;