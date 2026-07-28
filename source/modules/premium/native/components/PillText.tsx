// Module ID: 12443
// Function ID: 96437
// Name: PillText
// Dependencies: [653, 33, 4165, 689, 12444, 4589, 4161, 2]
// Exports: default

// Module 12443 (PillText)
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
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: importDefault(12444)() };
  items = [tmp.pillTextContainer, style];
  const tmp2 = importDefault(12444)();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj.children = jsx(require(4161) /* Text */.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(importDefault(4589), { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};
