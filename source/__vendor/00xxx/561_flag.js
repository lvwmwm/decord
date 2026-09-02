// Module ID: 561
// Function ID: 562
// Name: flag
// Dependencies: []

// Module 561 (flag)
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
