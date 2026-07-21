// Module ID: 14870
// Function ID: 112022
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: []
// Exports: default

// Module 14870 (GuildThemeNuxPreviewGraphic)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { "Bool(false)": "isArray", "Bool(false)": "constructor", "Bool(false)": "call", "Bool(false)": "isArray", marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  let obj = { "Null": "Array", "Null": "label_type", style: callback().container };
  obj = {};
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.themeSettings = tmp4;
  obj.children = jsx(importDefault(dependencyMap[5]), obj);
  return <View {...obj} />;
};
