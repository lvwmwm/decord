// Module ID: 13466
// Function ID: 102236
// Name: DisplayNameStylesColorSwatch
// Dependencies: []
// Exports: default

// Module 13466 (DisplayNameStylesColorSwatch)
const View = require(dependencyMap[0]).View;
const jsx = require(dependencyMap[1]).jsx;
const _module = require(dependencyMap[2]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[3]).radii.xs };
obj.colorSwatch = obj;
obj.gummySwatch = { "Null": null, "Null": null };
let closure_5 = _module.createStyles(obj);
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx");

export default function DisplayNameStylesColorSwatch(colors) {
  colors = colors.colors;
  const tmp = callback();
  if (colors.effectId === require(dependencyMap[4]).DisplayNameEffect.GUMMY) {
    if (colors.length > 0) {
      let obj = {};
      const items = [, ];
      ({ colorSwatch: arr3[0], gummySwatch: arr3[1] } = tmp);
      obj.style = items;
      obj = { colors };
      obj.children = jsx(importDefault(dependencyMap[5]), obj);
      return <View {...obj} />;
    }
  }
  if (colors.length >= 2) {
    const obj1 = { colors: colors.map((color) => callback(closure_2[7]).int2hex(color)), start: {}, end: {}, style: tmp.colorSwatch };
    return jsx(importDefault(dependencyMap[6]), obj1);
  } else {
    let str = "#000000";
    if (colors.length > 0) {
      obj = require(dependencyMap[7]);
      str = obj.int2hex(colors[0]);
    }
    const obj2 = {};
    const items1 = [tmp.colorSwatch, ];
    const obj3 = { backgroundColor: str };
    items1[1] = obj3;
    obj2.style = items1;
    return <View {...obj2} />;
  }
};
