// Module ID: 8724
// Function ID: 8725
// Name: AuthHeader
// Dependencies: [19, 676, 21, 4444, 5408, 712, 1297, 2]
// Exports: default

// Module 8724 (AuthHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importDefaultResult from "createTextStyle" /* 5408 */;

require = arg1;
noopAll;
createCacheKey = { header: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(require("ME").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  style = [callback().header, ];
  style[1] = style;
  return jsx(Button.LegacyText, { style, accessibilityRole: "header", children });
};
