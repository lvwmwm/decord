// Module ID: 12400
// Function ID: 96267
// Name: PillText
// Dependencies: [653, 33, 4131, 689, 12401, 4555, 4127, 2]
// Exports: default

// Module 12400 (PillText)
import { HorizontalGradient } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { paddingHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, justifyContent: "center" };
obj.pillTextContainer = obj;
obj.pillText = { textTransform: "uppercase" };
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  let pillText;
  let style;
  ({ pillText, style } = arg0);
  const tmp = callback();
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: importDefault(12401)() };
  items = [tmp.pillTextContainer, style];
  const tmp2 = importDefault(12401)();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj.children = jsx(require(4127) /* Text */.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(importDefault(4555), { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};
