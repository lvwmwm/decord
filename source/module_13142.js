// Module ID: 13142
// Function ID: 99512
// Dependencies: [1610612787, 1241514035, 4294967295]

// Module 13142
let tmp = !require(dependencyMap[0]);
if (tmp) {
  tmp = !require(dependencyMap[1])(() => 7 !== Object.defineProperty(require(dependencyMap[2])("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
