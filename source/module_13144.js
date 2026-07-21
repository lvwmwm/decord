// Module ID: 13144
// Function ID: 99534
// Dependencies: [1644167219, 1275068467, 1828716595]

// Module 13144
let tmp = !require(dependencyMap[0]);
if (tmp) {
  tmp = !require(dependencyMap[1])(() => 7 !== Object.defineProperty(require(dependencyMap[2])("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
