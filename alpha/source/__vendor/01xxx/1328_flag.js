// Module ID: 1328
// Function ID: 1329
// Name: flag
// Dependencies: []

// Module 1328 (flag)
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
