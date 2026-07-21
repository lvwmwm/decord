// Module ID: 14867
// Function ID: 111988
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: []
// Exports: default

// Module 14867 (GuildThemeNuxPreviewGraphic)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { <string:3426225039>: 282616.8, <string:1373108578>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013279449704941, <string:1449460740>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012573041413367434, <string:1559994538>: true, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  let obj = { "Null": null, "Null": null, style: callback().container };
  obj = {};
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.themeSettings = tmp4;
  obj.children = jsx(importDefault(dependencyMap[5]), obj);
  return <View {...obj} />;
};
