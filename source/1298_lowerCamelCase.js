// Module ID: 1298
// Function ID: 15172
// Name: lowerCamelCase
// Dependencies: []

// Module 1298 (lowerCamelCase)
arg5.lowerCamelCase = function lowerCamelCase(name) {
  const items = [];
  let flag = false;
  let num = 0;
  if (0 < name.length) {
    do {
      let str = name.charAt(num);
      let tmp = num;
      let flag2 = true;
      if ("_" != str) {
        let obj = /\d/;
        if (obj.test(str)) {
          let arr = items.push(str);
          flag2 = true;
        } else if (flag) {
          arr = items.push(str.toUpperCase());
          flag2 = false;
        } else if (0 == num) {
          let arr1 = items.push(str.toLowerCase());
          flag2 = flag;
        } else {
          let arr2 = items.push(str);
          flag2 = flag;
        }
      }
      num = num + 1;
      flag = flag2;
    } while (num < name.length);
  }
  return items.join("");
};
