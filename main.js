// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// ----- isAdmin() -----
console.log("\n----- isAdmin -----");


function isAdmin(user) {
    return user.userRole === "ADMIN";
}

console.log(isAdmin({
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
}));




// ----- getEmail() -----
console.log("\n----- getEmail -----");


function getEmail(user) {

   return (user.firstName + "." + user.lastName + "@codeimmersives.com").toLowerCase();

}

console.log(getEmail({
    firstName: 'Brian',
    lastName: 'Carela'
}));




// ----- getPlaylistLength() -----
console.log("\n----- getPlaylistLength -----");


function getPlaylistLength(playList) {
    return playList.songs.length;
}

console.log(getPlaylistLength({
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}))




// ----- getHardestHomework() -----
console.log("\n----- getHardestHomework -----");


function getHardestHomework(homework) {
    let lowestAverageScore = 100;
    let hardestHw = "";
    // console.log(homework[0]["averageScore"]);
    // console.log(lowestAverageScore);
    // console.log(homework.averageScore)

    if (homework.length === 0) {
        return "";
    }

    for (i = 0; i < homework.length; i++) {

        if (homework[i].averageScore < lowestAverageScore) {
            lowestAverageScore = homework[i]["averageScore"];
            hardestHw = homework[i].name;
            console.log(homework[i]);
            console.log(hardestHw);
        }
    }
    console.log(hardestHw);
    return hardestHw;
}

console.log(getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]));

console.log(getHardestHomework([]))

// ['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']
// should return:
// {
//     'Jimothy': '123-456-7890',
//     'Maria': '000-000-0000',
//     'Karl': '999-888-7766'
// }



// ----- createPhonebook() -----
console.log("\n----- createPhonebook -----");




function createPhonebook(namesArr, phonesArr) {
    
    let phonebook = {};
    // let  = null;
    // let phone = null;

    for (i = 0; i < namesArr.length; i++) {
        phonebook[namesArr[i]] = phonesArr[i];
    }
    console.log(phonebook);
    return phonebook;
}



console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']));













// phonebook[namesArray[I]] = numbersArray[I] // note from class





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};