// Module ID: 11889
// Function ID: 92064
// Dependencies: []

// Module 11889
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo((arg0) => {
  let children;
  let containerStyle;
  let fallbackBackground;
  let primaryColor;
  let secondaryColor;
  ({ primaryColor, secondaryColor, fallbackBackground, containerStyle, children } = arg0);
  const colors = arg1(dependencyMap[2]).useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground);
  return jsx(importDefault(dependencyMap[3]), { colors, style, children });
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/native/UserProfileGradientContainer.tsx");

export default memoResult;
