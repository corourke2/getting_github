async function getting_github() {
    var response = await fetch("https://api.github.com/users/corourke2");
    var coder_data = await response.json();
    return coder_data
}

console.log(getting_github());