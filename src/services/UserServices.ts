import axios from "axios";
import {User} from "@/interfaces/Users";

export const getUsers = async(): Promise<User[]> =>{
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );
    return response.data;
};