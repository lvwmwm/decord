// Module ID: 9464
// Function ID: 9465
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 8536, 5830, 2]

// Module 9464 (UserProfileGradientContainer)
import Fragment from "Fragment" /* 21 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8536 */;
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
