// Module ID: 8078
// Function ID: 8079
// Dependencies: []

// Module 8078
const obj = { 0: null, 5: "PentaxModelID", 555: "LevelInfo" };
const obj2 = {
  name: "PentaxVersion",
  description(join) {
    return join.join(".");
  }
};
obj[0] = obj2;

export default obj;
