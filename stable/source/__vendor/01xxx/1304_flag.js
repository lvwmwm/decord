// Module ID: 1304
// Function ID: 1305
// Name: flag
// Dependencies: []

// Module 1304 (flag)
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
