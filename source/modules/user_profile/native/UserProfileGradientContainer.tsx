// Module ID: 11956
// Function ID: 92384
// Dependencies: [31, 33, 8350, 4589, 2]

// Module 11956
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = require(8350) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(importDefault(4589), { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
