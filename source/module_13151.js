// Module ID: 13151
// Function ID: 99567
// Dependencies: []

// Module 13151
let tmp = !require(dependencyMap[0]);
if (tmp) {
  tmp = !require(dependencyMap[1])(() => 7 !== Object.defineProperty(require(dependencyMap[2])("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
