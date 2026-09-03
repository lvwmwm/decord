// Module ID: 9237
// Function ID: 9238
// Dependencies: [19, 21, 8935, 4941, 2]

// Module 9237
import LinearGradientDefault from "LinearGradient" /* 4941 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8935 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const memoResult = importAllResult.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
