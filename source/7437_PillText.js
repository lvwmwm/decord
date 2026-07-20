// Module ID: 7437
// Function ID: 59666
// Name: PillText
// Dependencies: []
// Exports: default

// Module 7437 (PillText)
const HorizontalGradient = require(dependencyMap[0]).HorizontalGradient;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { marginHorizontal: null, alignSelf: null, flex: null, borderRadius: importDefault(dependencyMap[3]).radii.lg };
obj.pillTextContainer = obj;
obj.pillText = { textTransform: "uppercase" };
let closure_5 = _module.createStyles(obj);
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/premium/native/components/PillText.tsx");

export default function PillText(arg0) {
  let pillText;
  let style;
  ({ pillText, style } = arg0);
  const tmp = callback();
  let obj = { style: items, start: HorizontalGradient.START, end: HorizontalGradient.END, colors: importDefault(dependencyMap[4])() };
  const items = [tmp.pillTextContainer, style];
  const tmp2 = importDefault(dependencyMap[4])();
  obj = { style: tmp.pillText, children: pillText };
  obj.children = jsx(require(dependencyMap[6]).Text, obj);
  return jsx(importDefault(dependencyMap[5]), obj);
};
