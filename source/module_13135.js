// Module ID: 13135
// Function ID: 99489
// Dependencies: []

// Module 13135
let tmp = !require(dependencyMap[0]);
if (tmp) {
  tmp = !require(dependencyMap[1])(() => 7 !== Object.defineProperty(require(dependencyMap[2])("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
