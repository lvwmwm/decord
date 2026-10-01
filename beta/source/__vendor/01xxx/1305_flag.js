// Module ID: 1305
// Function ID: 1306
// Name: flag
// Dependencies: []

// Module 1305 (flag)
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
