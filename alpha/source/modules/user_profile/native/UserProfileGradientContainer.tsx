// Module ID: 10773
// Function ID: 10774
// Name: UserProfileGradientContainer
// Dependencies: [19, 21, 7867, 5477, 2]

// Module 10773 (UserProfileGradientContainer)
import LinearGradientDefault from "LinearGradient" /* 5477 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 7867 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default noop.memo((arg0) => {
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = useUserProfileGradientColors.useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(LinearGradientDefault, { colors, style, children });
});
