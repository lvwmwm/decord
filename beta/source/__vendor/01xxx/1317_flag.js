// Module ID: 1317
// Function ID: 1318
// Name: flag
// Dependencies: []

// Module 1317 (flag)
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
