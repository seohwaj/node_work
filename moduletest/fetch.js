const axios = require('axios');
let url = 'http://localhost:3000/posts';
let data = {"id": "5", "title": "test axios update"};

axiosDelete(); // 호이스팅(끌어올리기)

// fetch delete(삭제)
function fetchDelete() {
  fetch(url + '/4', {
    method: "delete"
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// axios delete(삭제)
function axiosDelete() {
  axios.delete(url + '/3')
  .then(json => console.log(json.data))
}

// fetch put(수정)
function fetchPut() {
  fetch(url + '/4', {
    method: "put",
    headers: {"content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// axios put(수정)
function axiosPut() {
  axios.put(url + '/4', data)
  .then(json => console.log(json.data))
}

// fetch post(생성)
function fetchPost() {
  fetch(url, {
    method: "post",
    headers: {"content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => console.log(json))
}

// axios post(생성)
function axiosPost() {
  axios.post(url, data)
  .then(json => console.log(json.data))
}

// fetch get(조회)
function fetchGet() {
  fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
}

// axios get(조회)
function axiosGet() {
  axios.get(url)
  .then(json => console.log(json.data))
}