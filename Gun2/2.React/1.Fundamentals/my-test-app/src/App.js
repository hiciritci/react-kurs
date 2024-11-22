import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "./features/Counter/count";
import { changeTheme } from "./features/theme";
import { getTodo } from "./features/todo";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
    const count = useSelector((store) => store.counter.count);
    const themeValue = useSelector((store) => store.theme.value);
    const dispatch = useDispatch();

    const data = useSelector((store) => store.todo.data);
    const isLoading = useSelector((store) => store.todo.isLoading);
    const error = useSelector((store) => store.todo.error);

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    return (
        <>
            {isLoading ? (<p>loading....</p>) : null}
            {error ? (<p style={{ color: "red" }}>{error}</p>) : null}
            <p>Hello World!{count}</p>
            <button onClick={() => dispatch(changeTheme())}>Change Theme</button>
            <p>Theme: {themeValue}</p>

            <button onClick={() => dispatch(getTodo())}>Get Todo List</button>


            <Calculate />
        </>
    )
}

function Calculate() {
    const count = useSelector((store) => store.counter.count);
    const [num, setNum] = useState(0);
    const isLoading = false;
    const dispatch = useDispatch();

    function checkLoading() {
        if (isLoading) {
            return (<p>loading...</p>)
        } else {
            return (
                <>
                    <input onChange={(e) => setNum(e.target.value)} />
                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(incrementByValue(+num))}>+{num}</button>
                    {/* <button onClick={incrementAsync}>+Async</button>  */}
                </>
            )
        }
    }

    return (
        <>
            <p>Calculate App</p>
            <p>{count}</p>
            {checkLoading()}
        </>

    )
}

async function getTodos() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return result.data;
}

function Todo() {

    const val = useQuery({
        queryKey: ["todo"],
        queryFn: getTodos,
        enabled: false,
        staleTime: 0,
    });
    console.log(val);
    return (
        <>
        </>
    )
}


const reducer = (state, action) => {
    if (action.type === "increment") {
        return { count: state.count + 1 }
    }
}


export function MyCountReduder() {

    const [state, dispatch] = useReducer(reducer,initialState);
    const increment = () => {
        setCount(prev => prev + 1)
    }
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
        </>
    )
}

export default App;