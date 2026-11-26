// Module ID: 1319
// Function ID: 1320
// Name: flag
// Dependencies: []

// Module 1319 (flag)
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
