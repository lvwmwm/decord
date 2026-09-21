// Module ID: 1309
// Function ID: 1310
// Name: flag
// Dependencies: []

// Module 1309 (flag)
let flag = tmp;
if (Object.defineProperty || false) {
  try {
    tmp({}, "a", { value: 1 });
    flag = tmp;
  } catch (err) {
    flag = false;
  }
}

export default flag;
