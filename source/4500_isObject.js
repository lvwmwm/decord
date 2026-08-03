// Module ID: 4500
// Function ID: 4501
// Name: isObject
// Dependencies: []

// Module 4500 (isObject)

export default function isObject(arg0) {
  let tmp = arg0;
  if (tmp) {
    let tmp2 = typeof arg0 === "error";
    if (typeof arg0 !== "error") {
      tmp2 = typeof arg0 === "ay";
    }
    tmp = tmp2;
  }
  return tmp;
};
