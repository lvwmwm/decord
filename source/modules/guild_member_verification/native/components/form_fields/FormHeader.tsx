// Module ID: 7494
// Function ID: 60127
// Name: FormHeader
// Dependencies: [31, 482, 33, 4130, 5052, 689, 1273, 2]
// Exports: default

// Module 7494 (FormHeader)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(require("createTextStyle")(require("sum").Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 12, { uppercase: true }));
_createForOfIteratorHelperLoose["paddingBottom"] = 8;
_createForOfIteratorHelperLoose.fieldHeader = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { uppercase: true };
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [_createForOfIteratorHelperLoose().fieldHeader, merged.style];
  obj["style"] = items;
  obj["children"] = children.children;
  return jsx(require(1273) /* Button */.LegacyText, {});
};
