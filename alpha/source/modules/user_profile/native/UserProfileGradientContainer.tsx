// Module ID: 11584
// Function ID: 11585
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 8953, 5723, 2]

// Module 11584 (UserProfileGradientContainer)
import Fragment from "Fragment" /* 21 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8953 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function UserProfileGradientContainer(arg0) {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const obj = useUserProfileGradientColors;
  const colors = obj.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
