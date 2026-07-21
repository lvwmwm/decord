// Module ID: 8499
// Function ID: 67837
// Dependencies: []

// Module 8499
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo((style) => {
  let bannerHeight;
  let gradientHeight;
  let primaryColor;
  let secondaryColor;
  style = style.style;
  ({ gradientHeight, bannerHeight } = style);
  let obj = arg1(dependencyMap[4]);
  const themeContext = obj.useThemeContext();
  ({ primaryColor, secondaryColor } = themeContext);
  const gradientFallbackBackground = arg1(dependencyMap[5]).useUserProfileColors({ theme: themeContext.theme, primaryColor, secondaryColor }).gradientFallbackBackground;
  const obj2 = arg1(dependencyMap[5]);
  const obj3 = arg1(dependencyMap[6]);
  const first = callback(arg1(dependencyMap[6]).useUserProfileGradientColors(primaryColor, secondaryColor, gradientFallbackBackground), 2)[0];
  if (null != primaryColor) {
    if (null != secondaryColor) {
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.min(1, Math.max(0, bannerHeight / gradientHeight));
      obj = {};
      const items = [first, first, tmp4];
      obj.colors = items;
      const items1 = [0.229, bound, 1];
      obj.locations = items1;
      const items2 = [closure_4.absoluteFill, style];
      obj.style = items2;
      obj.pointerEvents = "none";
      return jsx(importDefault(dependencyMap[7]), obj);
    }
  }
  style = [closure_4.absoluteFill, { backgroundColor: gradientFallbackBackground }, ];
  style[2] = style;
  return <closure_5 style={style} pointerEvents="none" />;
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_profile/native/UserProfileFixedBackground.tsx");

export default memoResult;
