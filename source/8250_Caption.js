// Module ID: 8250
// Function ID: 65093
// Name: Caption
// Dependencies: []
// Exports: Caption

// Module 8250 (Caption)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[2]).jsx;
const _module = require(dependencyMap[3]);
let obj = {};
obj = { fontFamily: require(dependencyMap[1]).Fonts.PRIMARY_BOLD, color: importDefault(dependencyMap[4]).colors.WHITE, fontSize: 12 };
obj.captionText = obj;
const obj1 = {};
const _module1 = require(dependencyMap[5]);
obj1.backgroundColor = _module1.hexWithOpacity(importDefault(dependencyMap[4]).unsafe_rawColors.PRIMARY_700, 0.5);
obj1.borderRadius = importDefault(dependencyMap[4]).radii.xs;
obj.labelContainer = obj1;
let closure_4 = _module.createStyles(obj);
const _module2 = require(dependencyMap[7]);
const result = _module2.fileFinishedImporting("modules/media/native/Caption.tsx");

export const Caption = function Caption(arg0) {
  let label;
  let style;
  let textStyle;
  ({ label, style, textStyle } = arg0);
  const tmp = callback();
  const items = [tmp.labelContainer, style];
  const items1 = [tmp.captionText, textStyle];
  return <View style={items}>{jsx(require(dependencyMap[6]).LegacyText, { style: items1, children: label })}</View>;
};
