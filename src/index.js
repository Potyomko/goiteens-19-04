const BASE_URL = 'http://localhost:3000'
// GET /students - повернути всіх студентів.
// GET /students/:id - повернути студента за ідентифікатором.
// POST /students - додати нового студента.
// PUT /students/:id - оновити інформацію про студента за ідентифікатором.
// PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.
// DELETE /students/:id - видалити студента за ідентифікатором.
// GET /students?age=:age - повернути всіх студентів з вказаним віком.
// GET /students?name=:name - повернути всіх студентів з вказаним ім'ям.
// GET /students?email=:email - повернути студента з вказаною електронною поштою.
// GET /students?phone=:phone - повернути студента з вказаним номером телефону.

 // GET /students - повернути всіх студентів.

 async function getStudents() {
 const res = await fetch(`${BASE_URL}/students`)
 const student =  await res.json()
 const articles = await student.articles
 return console.log(student);
 }
 getStudents()

// GET /students/:id - повернути студента за ідентифікатором.

async function getStudentsById(studensId) {
  const res = await fetch(`${BASE_URL}/students/${studensId}`)
  const student =  await res.json()
 const articles = await student.articles
 return console.log(student);
     }

     getStudentsById(1)
 

 // POST /students - додати нового студента.


 const newstudent = {
  name: "Veronika",
  age: 13,
  email: "vnpotomko@gmail.com",
  phone: "+380682891773"
 }

 async function postStudent (newstudent) {
      const options ={
          method: "POST",
         headers: {
          'Content-type': 'application/json'
       
        },
         body: JSON.stringify(newstudent)
       }
       const res = await fetch(`${BASE_URL}/students`, options)
       const student =  await res.json()
       const articles = await student.articles
       return console.log(student);
}

postStudens(newstudent)

// PUT /students/:id - оновити інформацію про студента за ідентифікатором.
const update = {
  
     name: "Veronika",
  age: 13,
  email: "vnpotomko@gmail.com",
  phone: "+380682891773"
  
}
async function updateById(update, studentsId) {
  const options = {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
  }
  
  const res = await fetch(`${BASE_URL}/students/${studentsId}`, options)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}
updateById(update, 2);


// // PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.\



const updateget = {
  name: "Zlata",
  age: 8,
}
async function updatePatchById(update, studentsId) {
  const options = {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
  }
  const res = await fetch(`${BASE_URL}/students/${studentsId}`, options)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}


updatePatchById( updateget, 3)



// DELETE /students/:id - видалити студента за ідентифікатором.

async function deleteStudentsById (moviesId) {
  const res = await fetch(`${BASE_URL}/students/${moviesId}`, {method:'DELETE'})
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
    }
  
    deleteStudentsById(3)
  
// GET /students?age=:age - повернути всіх студентів з вказаним віком.


async  function getStudentsByAge(age) {
  const res = await fetch(`${BASE_URL}/students?age=${age}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

getStudentsByAge(13)


//GET /students?name=:name - повернути всіх студентів з вказаним ім'ям.

async function getStudentsByName(name) {
  const res = await  fetch(`${BASE_URL}/students?name=${name}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

getStudentsByName("John Doe")


// GET /students?email=:email - повернути студента з вказаною електронною поштою.

async function getStudentsByEmail(email) {
  const res = await fetch(`${BASE_URL}/students?email=${email}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

getStudentsByEmail("john.doe@example.com")

// GET /students?phone=:phone - повернути студента з вказаним номером телефону.

async  function getStudentsByPhone(phone) {
  const res = await fetch(`${BASE_URL}/students?phone=${phone}`)
    const student =  await res.json()
    const articles = await student.articles
    return console.log(student);
}

getStudentsByPhone("555-1234")