const reverseString = function(string) {
    reversed = "";
    for(i = string.length; i >= 0; i--) {
        reversed += string.charAt(i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
