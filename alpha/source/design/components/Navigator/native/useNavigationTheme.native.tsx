// Module ID: 7590
// Function ID: 7591
// Name: useNavigationTheme
// Dependencies: [19, 5902, 575, 5313, 1503, 2]
// Exports: useNavigationTheme

// Module 7590 (useNavigationTheme)
import Link from "Link" /* 1503 */;
import shared from "shared" /* 5313 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigationTheme.native.tsx");

export function useNavigationTheme(theme) {
  let token;
  let token1;
  _require = theme;
  let obj = require("useToken");
  token = obj.useToken(token(token1[2]).colors.TEXT_STRONG, theme);
  let obj2 = require("useToken");
  token1 = obj2.useToken(token(token1[2]).colors.BORDER_SUBTLE, theme);
  const obj3 = require("useToken");
  const token2 = obj3.useToken(token(token1[2]).colors.MOBILE_ACTIONSHEET_BACKGROUND, theme);
  const obj4 = require("useToken");
  const token3 = obj4.useToken(token(token1[2]).colors.TEXT_MUTED, theme);
  const obj5 = require("useToken");
  const token4 = obj5.useToken(token(token1[2]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, theme);
  const items = [token1, token2, token4, token, token3, theme];
  return token2.useMemo(() => {
    let obj2;
    const obj = { dark: obj2.isThemeDark(theme), colors: obj3, fonts: Link.DefaultTheme.fonts };
    obj2 = shared;
    return obj;
  }, items);
}
