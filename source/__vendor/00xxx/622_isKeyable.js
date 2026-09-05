// Module ID: 622
// Function ID: 623
// Name: isKeyable
// Dependencies: []

// Module 622 (isKeyable)

export default function isKeyable(str) {
  if (typeof str !== "string") {
    if (typeof str !== "number") {
      if (typeof str !== "symbol") {
        if (typeof str !== "boolean") {
          let tmp = null === str;
        }
        return tmp;
      }
    }
  }
  tmp = "__proto__" !== str;
};
