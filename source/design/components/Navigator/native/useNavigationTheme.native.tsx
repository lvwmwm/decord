// Module ID: 5585
// Function ID: 47402
// Name: useNavigationTheme
// Dependencies: []
// Exports: useNavigationTheme

// Module 5585 (useNavigationTheme)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = function useNavigationTheme(theme) {
  const arg1 = theme;
  const token = arg1(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).colors.TEXT_STRONG, theme);
  const importDefault = token;
  const obj = arg1(dependencyMap[1]);
  const token1 = arg1(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).colors.BORDER_SUBTLE, theme);
  const dependencyMap = token1;
  const obj2 = arg1(dependencyMap[1]);
  const token2 = arg1(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const React = token2;
  const obj3 = arg1(dependencyMap[1]);
  const token3 = arg1(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).colors.TEXT_MUTED, theme);
  const obj4 = arg1(dependencyMap[1]);
  const token4 = arg1(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return React.useMemo(() => {
    let obj = { dark: arg0(token1[3]).isThemeDark(arg0) };
    obj = { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 };
    obj.colors = obj;
    return obj;
  }, items);
};
