// Module ID: 1331
// Function ID: 1332
// Name: flag
// Dependencies: []

// Module 1331 (flag)
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
