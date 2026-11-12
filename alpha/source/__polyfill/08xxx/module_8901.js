// Module ID: 8901
// Function ID: 8902
// Dependencies: []

// Module 8901
const obj = { 0: null, 5: "PentaxModelID", 555: "LevelInfo" };
const obj2 = {
  name: "PentaxVersion",
  description(join) {
    return join.join(".");
  }
};
obj[0] = obj2;

export default obj;
