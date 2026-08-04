// Module ID: 9367
// Function ID: 9368
// Dependencies: [19, 21, 8755, 4706, 2]

// Module 9367
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = require(8755) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(importDefault(4706), { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
