let form = document.getElementById("loginForm")
let enteredUsername = document.getElementById("username")
let enteredPassword = document.getElementById("password")
let message = document.getElementById("message")
form.addEventListener("submit",async function(event){
    event.preventDefault()
    message.classList.remove("error", "success");
    const username = enteredUsername.value
    const password = enteredPassword.value
    try{
        const response = await axios.post(
        "https://dummyjson.com/auth/login",
            {
            "username": username,
            "password": password
            }
        );
        let userToken = response.data.accessToken;
        localStorage.setItem("userToken", userToken)
        message.classList.add("success");
        message.textContent = `Welcome ${username}`
        form.style.display = "none";
    }catch (error){
            message.classList.add("error");
            message.textContent = `The username : ${username} or The password ${password} you entered is wrong`
        }
})