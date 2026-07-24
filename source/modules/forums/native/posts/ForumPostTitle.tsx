// Module ID: 11170
// Function ID: 86943
// Name: ForumPostTitle
// Dependencies: [31, 33, 4130, 478, 4126, 2]
// Exports: default

// Module 11170 (ForumPostTitle)
import "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: 6 };
let tmp3 = null;
if (isWindows.isIOS()) {
  const obj1 = { lineHeight: 22 };
  tmp3 = obj1;
}
const merged = Object.assign(tmp3);
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default function ForumPostTitle(arg0) {
  let ellipsizeMode;
  let hasUnreads;
  let lineClamp;
  let onTextLayout;
  let title;
  ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
  let str = "text-muted";
  if (hasUnreads) {
    str = "mobile-text-heading-primary";
  }
  const obj = { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: _createForOfIteratorHelperLoose().title, onTextLayout, children: title };
  return jsx(require(4126) /* Text */.Text, { variant: "text-md/semibold", color: str, lineClamp, ellipsizeMode, style: _createForOfIteratorHelperLoose().title, onTextLayout, children: title });
};
