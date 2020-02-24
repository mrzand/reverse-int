module.exports = function reverse(n) {
    n = Math.abs(n);
    var str = String(n)
        .split("")
        .reverse()
        .join("");
    var newStr = str;
    if (str.charAt(str.length - 1) == "0") newStr = str.slice(0, -1);
    if (str.charAt(str[0]) == "0") newStr = str.slice(1);
    return newStr;
};
