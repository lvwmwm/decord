// Module ID: 1329
// Function ID: 1330
// Name: flag
// Dependencies: []

// Module 1329 (flag)
let flag = tmp;
if (flag) {
  try {
    Object.defineProperty || false({}, "a", { value: 1 });
    flag = tmp;
  } catch (err) {
    flag = false;
  }
}

export default flag;
