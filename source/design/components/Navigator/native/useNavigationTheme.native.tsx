// Module ID: 5586
// Function ID: 47422
// Name: useNavigationTheme
// Dependencies: [31, 3834, 689, 3976, 2]
// Exports: useNavigationTheme

// Module 5586 (useNavigationTheme)
import result from "result";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export const useNavigationTheme = function useNavigationTheme(theme) {
  const _require = theme;
  token = _require(token1[1]).useToken(token(token1[2]).colors.TEXT_STRONG, theme);
  let obj = _require(token1[1]);
  token1 = _require(token1[1]).useToken(token(token1[2]).colors.BORDER_SUBTLE, theme);
  const obj2 = _require(token1[1]);
  const token2 = _require(token1[1]).useToken(token(token1[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj3 = _require(token1[1]);
  const token3 = _require(token1[1]).useToken(token(token1[2]).colors.TEXT_MUTED, theme);
  const obj4 = _require(token1[1]);
  const token4 = _require(token1[1]).useToken(token(token1[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return token2.useMemo(() => {
    let obj = { dark: theme(token1[3]).isThemeDark(theme) };
    obj = { primary: token, background: "transparent", border: token1, card: token2, text: token3, notification: token4 };
    obj.colors = obj;
    return obj;
  }, items);
};
