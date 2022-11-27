// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName: createUser
parameters: 2 strings (firstName, lastName)

return: object
{
    firstName: string
    lastName: string
} 



*/

function createUser(firstName, lastName){
    let user = {
        firstName,
        lastName,
    }
    return user
}

console.log(createUser('Tyler', 'Morgan'))
console.log(createUser('John', 'Wick'))

function setAge(user, age){
    user.age = age
    return user
}

console.log(setAge(createUser('Tyler', 'Morgan'), 25))
console.log(setAge({firstName: 'Tyler', lastName: 'Morgan'}, 25))


function incrementAge(user){
    user.age = user.age + 1
    return user
}

console.log(incrementAge(createUser('Tyler', 'Morgan')))
console.log(incrementAge({firstName: 'Tyler', lastName: 'Morgan'}))


function fixCar(car){
    car.needsMaintence = false
    return car
}

console.log(fixCar(
{
    make: 'Mazda',
    model: 'RX8',
    Year: 2008,
    needsMaintence: true
}))


function addGrades(student, newGrades){
    
    for(let i = 0; i < newGrades.length; i++){
        student.grades.push(newGrades[i])
    }

    return student
}

let student = {
    name: 'Tyler Morgan',
    email: 'Tylermorgan@codeimmersives.com',
    grades: [80]
}

let newGrades = [88, 90, 75, 85, 94, 80, 70, 91, 78]

console.log(addGrades(student, newGrades))


function getDataType(object, key){
    let keytype = key
    keytype = typeof object[key]
    return keytype
}

console.log(getDataType)


function addTodo(todo, newTodo){
    todo.push(newTodo)
    return todo
}

const playlist = {
    title: 'Vibez',
    duration: 5,
    songs: [
        {
            title: 'Evil Fantasy',
            artist: 'Freddie Dredd',
            duration: 2,
        },
        {
            title: 'Money & Love',
            artist: 'Wiz Kid',
            duration: 3
        }
    ]
}

function newSong(title, artist, duration){
    const song = {
        title: title,
        artist: artist,
        duration: duration
    }
    return song
}

function addSong(playlist, song){
    playlist.duration = playlist.duration + song.duration
    playlist.song.push(song)
    return playlist
}













// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
