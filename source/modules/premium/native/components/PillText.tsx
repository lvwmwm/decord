// Module ID: 12422
// Function ID: 96451
// Name: PillText
// Dependencies: [653, 33, 4130, 689, 12423, 4554, 4126, 2]
// Exports: default

// Module 12422 (PillText)
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
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: importDefault(12423)() };
  items = [tmp.pillTextContainer, style];
  const tmp2 = importDefault(12423)();
  obj = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText };
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
  return jsx(importDefault(4554), { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.pillText, children: pillText });
};
