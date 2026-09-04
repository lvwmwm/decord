// Module ID: 6914
// Function ID: 6915
// Name: AuthHeader
// Dependencies: [19, 673, 21, 4481, 5479, 709, 1296, 2]
// Exports: default

// Module 6914 (AuthHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importDefaultResult from "createTextStyle" /* 5479 */;

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
