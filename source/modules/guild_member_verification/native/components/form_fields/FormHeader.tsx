// Module ID: 9745
// Function ID: 9746
// Name: FormHeader
// Dependencies: [19, 502, 21, 4481, 5479, 709, 1296, 2]
// Exports: default

// Module 9745 (FormHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import importDefaultResult from "createTextStyle" /* 5479 */;

require = arg1;
noopAll;
createCacheKey = { fieldHeader: null };
createCacheKey = {};
let merged = Object.assign(importDefaultResult(require("sum").Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
createCacheKey.paddingBottom = 8;
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [callback().fieldHeader, merged.style];
  obj.style = items;
  obj.children = children.children;
  return jsx(Button.LegacyText, {});
};
