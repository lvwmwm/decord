// Module ID: 14878
// Function ID: 112065
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: []
// Exports: default

// Module 14878 (GuildThemeNuxPreviewGraphic)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { display: "isArray", sv-FI: "y", is_pip_mode: "title", isAgeRestrictedClassificationReference: "r", marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  let obj = { y: "BG_GRADIENT_NEON_NIGHTS_3", getRow: 100, style: callback().container };
  obj = {};
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.themeSettings = tmp4;
  obj.children = jsx(importDefault(dependencyMap[5]), obj);
  return <View {...obj} />;
};
