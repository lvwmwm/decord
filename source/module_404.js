// Module ID: 404
// Function ID: 5793
// Dependencies: []

// Module 404
if (importDefault(dependencyMap[0])) {
  const constants = importDefault(dependencyMap[0]).getConstants();
  let obj = {};
  ({ isRTL: obj3.isRTL, doLeftAndRightSwapInRTL: obj3.doLeftAndRightSwapInRTL, localeIdentifier: obj3.localeIdentifier } = constants);
  const importDefaultResult = importDefault(dependencyMap[0]);
} else {
  obj = { seconds: true, nanos: true };
}
obj = {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (importDefault(dependencyMap[0])) {
      importDefault(dependencyMap[0]).allowRTL(arg0);
      const obj = importDefault(dependencyMap[0]);
    }
  },
  forceRTL(arg0) {
    if (importDefault(dependencyMap[0])) {
      importDefault(dependencyMap[0]).forceRTL(arg0);
      const obj = importDefault(dependencyMap[0]);
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (importDefault(dependencyMap[0])) {
      const result = importDefault(dependencyMap[0]).swapLeftAndRightInRTL(arg0);
      const obj = importDefault(dependencyMap[0]);
    }
  }
};
({ isRTL: obj4.isRTL, doLeftAndRightSwapInRTL: obj4.doLeftAndRightSwapInRTL } = obj);

export default obj;
