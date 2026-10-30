// Module ID: 8802
// Function ID: 8803
// Name: UserProfileFixedBackground
// Dependencies: [32, 19, 17, 21, 5075, 8803, 8804, 5582, 2]

// Module 8802 (UserProfileFixedBackground)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 5075 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import useUserProfileColors from "useUserProfileColors" /* 8803 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 8804 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const memoResult = react.memo(function UserProfileFixedBackground(style) {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  let theme;
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  const obj2 = useUserProfileColors;
  const gradientFallbackBackground = obj2.useUserProfileColors({ theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj3 = useUserProfileGradientColors;
  const first = _slicedToArray(obj3.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
  _slicedToArray(obj3.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      const items = [first, first, tmp5];
      const items1 = [0, bound, 1];
      const items2 = [React3.absoluteFill, style];
      return jsx(LinearGradientDefault, { colors: items, locations: items1, style: items2, pointerEvents: "none" });
    }
  }
  const items3 = [React3.absoluteFill, { backgroundColor: gradientFallbackBackground }, style];
  return <hasOwnProperty style={items3} pointerEvents="none" />;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;
