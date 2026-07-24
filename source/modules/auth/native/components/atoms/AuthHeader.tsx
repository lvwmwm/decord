// Module ID: 9257
// Function ID: 72346
// Name: AuthHeader
// Dependencies: [31, 653, 33, 4130, 5052, 689, 1273, 2]
// Exports: default

// Module 9257 (AuthHeader)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose["textAlign"] = "center";
_createForOfIteratorHelperLoose.header = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  style = [_createForOfIteratorHelperLoose().header, ];
  style[1] = style;
  return jsx(require(1273) /* Button */.LegacyText, { style, accessibilityRole: "header", children });
};
