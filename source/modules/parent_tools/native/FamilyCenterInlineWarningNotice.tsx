// Module ID: 13777
// Function ID: 105639
// Name: FamilyCenterInlineWarningNotice
// Dependencies: [31, 27, 33, 4130, 689, 7576, 5459, 2]
// Exports: default

// Module 13777 (FamilyCenterInlineWarningNotice)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "flex-start", gap: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_FEEDBACK_WARNING, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { flex: 1, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  let style;
  let text;
  ({ text, style } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: items };
  items = [tmp.container, style];
  obj = { size: "sm", color: importDefault(689).colors.ICON_FEEDBACK_WARNING };
  const items1 = [callback(require(7576) /* WarningIcon */.WarningIcon, obj), ];
  obj = { variant: "text-sm/medium", color: "text-strong", style: tmp.text, children: text };
  items1[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
  obj.children = items1;
  return callback2(View, obj);
};
