// Module ID: 10247
// Function ID: 79211
// Name: HighlightText
// Dependencies: []
// Exports: default

// Module 10247 (HighlightText)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { fontFamily: arg1(dependencyMap[1]).Fonts.PRIMARY_BOLD, backgroundColor: arg1(dependencyMap[4]).hexOpacityToRgba(importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300, 0.3), color: importDefault(dependencyMap[5]).colors.TEXT_STRONG };
obj.text = obj;
let closure_3 = obj.createStyles(obj);
const obj4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[6]).LegacyText, { style: callback().text, children: children.children });
};
