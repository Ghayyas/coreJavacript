//Simple Call function 
"use strict"

//call back function;

//Simple Function 

function run(a, success, error) {

    if (success && typeof success === 'function') {
        if (a == 'a') {
            var d = 'b comes after a';
            success(d);
        }

    }
    if (error && typeof error === 'function') {
        if (typeof a !== 'string') {
            throw new Error("First Argument Must be String");
            // error("String not Supported");
        }

        if (typeof a == 'undefined') {
            console.warn('First Argument is undefined');
            error("undefined is undefined");
        }
    }


}

run(1, (s) => {
    console.log('s', s);
}, (e) => {
    console.log('e', e); //Every times returns errors because 1st argument is number

});

//thora complex

function fileChanged() {
    var ele = document.getElementById('file');
    var fileN = ele.files[0];
    if (fileN.type !== 'image/jpeg') {
        throw new Error("Only jpeg file must be selected");
    } else {
        console.warn("Hahaha.. select to kr lia ab kya krega beta?? :D ");
    }
}