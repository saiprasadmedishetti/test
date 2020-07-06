import axios from "axios";
function fetch_cached() {
  const hasUsers = localStorage.getItem("users");
  if (hasUsers) {
    return hasUsers;
  } else {
    console.log("from api");
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => localStorage.setItem("users", JSON.stringify(res.data)))
      .catch((error) => console.log(error));
  }
}

fetch_cached();
