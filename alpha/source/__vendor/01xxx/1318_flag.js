// Module ID: 1318
// Function ID: 1319
// Name: flag
// Dependencies: []

// Module 1318 (flag)
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
