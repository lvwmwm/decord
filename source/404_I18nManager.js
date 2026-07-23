// Module ID: 404
// Function ID: 5793
// Name: I18nManager
// Dependencies: [405]

// Module 404 (I18nManager)
if (require("I18nManager")) {
  const constants = require("I18nManager").getConstants();
  let obj = {};
  ({ isRTL: obj3.isRTL, doLeftAndRightSwapInRTL: obj3.doLeftAndRightSwapInRTL, localeIdentifier: obj3.localeIdentifier } = constants);
  const importDefaultResult = require("I18nManager");
} else {
  obj = { isRTL: false, doLeftAndRightSwapInRTL: true };
}
obj = {
  getConstants() {
    return obj;
  },
  allowRTL(arg0) {
    if (importDefault(405)) {
      importDefault(405).allowRTL(arg0);
      const obj = importDefault(405);
    }
  },
  forceRTL(arg0) {
    if (importDefault(405)) {
      importDefault(405).forceRTL(arg0);
      const obj = importDefault(405);
    }
  },
  swapLeftAndRightInRTL(arg0) {
    if (importDefault(405)) {
      const result = importDefault(405).swapLeftAndRightInRTL(arg0);
      const obj = importDefault(405);
    }
  }
};
({ isRTL: obj4.isRTL, doLeftAndRightSwapInRTL: obj4.doLeftAndRightSwapInRTL } = obj);

export default obj;
