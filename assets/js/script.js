let id = document.getElementById("id_no");
let fname = document.getElementById("name");
let post = document.getElementById("post");
let btn = document.getElementById("btn");

// table data

let student_list = document.getElementById("student_list");

let td_id = document.getElementById("td_id");
let td_name = document.getElementById("td_name");
let td_post = document.getElementById("td_post");

let handleForm = () => {
  td_id.innerHTML = id.value;
  td_name.innerHTML = fname.value;
  td_post.innerHTML = post.value;
  //   console.log(fname.value);
  //   console.log(post.value);
};

btn.addEventListener("click", handleForm);
