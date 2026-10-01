// Module ID: 7683
// Function ID: 7684
// Name: UserProfileFixedBackground
// Dependencies: [32, 19, 17, 21, 4540, 7684, 7685, 5293, 2]

// Module 7683 (UserProfileFixedBackground)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4540 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import useUserProfileColors from "useUserProfileColors" /* 7684 */;
import useUserProfileGradientColors from "useUserProfileGradientColors" /* 7685 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let style;

let closure_4;
let hasOwnProperty;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const memoResult = react.memo((style) => {
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
