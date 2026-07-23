// Module ID: 467
// Function ID: 6148
// Name: SHORT
// Dependencies: [468]

// Module 467 (SHORT)
const constants = require("ToastAndroid").getConstants();

export default {
  SHORT: constants.SHORT,
  LONG: constants.LONG,
  TOP: constants.TOP,
  BOTTOM: constants.BOTTOM,
  CENTER: constants.CENTER,
  show(arg0, arg1) {
    importDefault(468).show(arg0, arg1);
  },
  showWithGravity(arg0, arg1, arg2) {
    importDefault(468).showWithGravity(arg0, arg1, arg2);
  },
  showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4) {
    const result = importDefault(468).showWithGravityAndOffset(arg0, arg1, arg2, arg3, arg4);
  }
};
