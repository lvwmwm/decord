// Module ID: 12088
// Function ID: 12089
// Dependencies: [19, 21, 8689, 4677, 2]

// Module 12088
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
  const colors = require(8689) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(importDefault(4677), { colors, style, children });
});
const result = require("useUserProfileGradientColors").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
