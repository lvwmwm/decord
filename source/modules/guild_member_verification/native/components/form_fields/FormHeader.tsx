// Module ID: 8954
// Function ID: 8955
// Name: FormHeader
// Dependencies: [19, 505, 21, 4255, 5189, 712, 1297, 2]
// Exports: default

// Module 8954 (FormHeader)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";

const require = arg1;
createCacheKey = { fieldHeader: null };
createCacheKey = {};
let merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_EXTRABOLD, require("Themes").colors.TEXT_SUBTLE, 12, { uppercase: true }));
createCacheKey.paddingBottom = 8;
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  const merged = Object.assign(children, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [createCacheKey().fieldHeader, merged.style];
  obj.style = items;
  obj.children = children.children;
  return jsx(require(1297) /* Button */.LegacyText, {});
};
