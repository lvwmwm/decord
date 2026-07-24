// Module ID: 8551
// Function ID: 68116
// Dependencies: [57, 31, 27, 33, 3842, 8284, 8552, 4554, 2]

// Module 8551
import _slicedToArray from "_slicedToArray";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
const memoResult = require("result").memo((style) => {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  let obj = require(3842) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor } = themeContext);
  const gradientFallbackBackground = require(8284) /* useUserProfileColors */.useUserProfileColors({ theme: themeContext.theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj2 = require(8284) /* useUserProfileColors */;
  const obj3 = require(8552) /* useUserProfileGradientColors */;
  const first = callback(require(8552) /* useUserProfileGradientColors */.useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      obj = {};
      const items = [first, first, tmp4];
      obj.colors = items;
      const items1 = [0, bound, 1];
      obj.locations = items1;
      const items2 = [closure_4.absoluteFill, style];
      obj.style = items2;
      obj.pointerEvents = "none";
      return jsx(importDefault(4554), {});
    }
  }
  style = [closure_4.absoluteFill, { backgroundColor: gradientFallbackBackground }, ];
  style[2] = style;
  return <closure_5 style={style} pointerEvents="none" />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;
