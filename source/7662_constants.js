// Module ID: 7662
// Function ID: 60895
// Name: constants
// Dependencies: [27]

// Module 7662 (constants)
const obj = { SLIDER_DEFAULT_INITIAL_VALUE: 0, MARGIN_HORIZONTAL_PADDING: 0.05, STEP_NUMBER_TEXT_FONT_SMALL: 8, STEP_NUMBER_TEXT_FONT_BIG: 12, LIMIT_MIN_VALUE: Number.MIN_SAFE_INTEGER, LIMIT_MAX_VALUE: Number.MAX_SAFE_INTEGER };
let num = 1000;
if ("android" === require("get ActivityIndicator").Platform.OS) {
  num = 128;
}
obj.DEFAULT_STEP_RESOLUTION = num;

export const constants = obj;
