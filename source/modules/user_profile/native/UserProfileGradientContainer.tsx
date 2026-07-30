// Module ID: 11974
// Function ID: 11975
// Dependencies: [19, 21, 8371, 4611, 2]

// Module 11974
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
  const colors = require(8371) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(importDefault(4611), { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
