var row = 3
var col = 3

for (var i = 0; i < row; i++) {
    var a = ""
    for (var j = 0; j < col; j++) {
        a += "*"
    }
    console.log(a)
}


var row = 4
for (var i = 0; i < row; i++) {
    var b = 1
    var a = ""
    for (var j = 0; j < col; j++) {
        a += b
        b++
    }

    console.log(a)
}


var a = ""
for (var i = 0; i < row; i++) {

    for (var j = 0; j < 1; j++) {
        a += "*"
    }
    console.log(a)
}



// var n = 5   // +prompt("Enter any number:")
// for (var i = 0; i < n; i++) {
//     var b = 1
//     var a = ""
//     for (var j = 0; j < n; j++) {
//         a += b
//         b++
//     }

//     console.log(a)
// }


// for (var i = 1; i < 11; i++) {
//     for (var j = 0; j < 1; j++) {
//         console.log(i, "X", i, " = ", i * i)
//     }
// }


// var a = ""
// var b = 1
// for (var i = 0; i < 4; i++) {
    
    
//     for (var j = 0; j < 1; j++) {
//         a += b
//         b++
//     }
    
//     console.log(a)
// }


// var a="****"

// for (var i = 4; i > 0; i--) {
//     var b = ""
//     for (var j = 0; j < 1; j++) {
//         b += a.slice(0,i)
//         console.log(b)
        
//     }
    
// }