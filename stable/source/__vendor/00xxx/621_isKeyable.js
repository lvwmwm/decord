// Module ID: 621
// Function ID: 622
// Name: isKeyable
// Dependencies: []

// Module 621 (isKeyable)

export default function isKeyable(str) {
  if (typeof str !== "string") {
    if (typeof str !== "number") {
      if (typeof str !== "symbol") {
        let tmp;
        if (typeof str !== "boolean") {
          tmp = null === str;
        }
        return tmp;
      }
    }
  }
  tmp = "__proto__" !== str;
};
