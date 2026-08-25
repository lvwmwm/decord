// Module ID: 9595
// Function ID: 9596
// Dependencies: [19, 21, 8980, 4826, 2]

// Module 9595
import LinearGradientDefault from "LinearGradient" /* 4826 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8980 */;
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
