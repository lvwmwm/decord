// Module ID: 11568
// Function ID: 11569
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 8919, 5747, 2]

// Module 11568 (UserProfileGradientContainer)
import Fragment from "Fragment" /* 21 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8919 */;
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
