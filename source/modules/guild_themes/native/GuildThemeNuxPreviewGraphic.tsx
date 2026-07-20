// Module ID: 14860
// Function ID: 111964
// Name: GuildThemeNuxPreviewGraphic
// Dependencies: [0, 0]
// Exports: default

// Module 14860 (GuildThemeNuxPreviewGraphic)
import "result";
import { View } from "result";

const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { <string:2972715822>: 282616.8, <string:1373108578>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013279449704967, <string:1449460733>: -10135298184851456, <string:1559994538>: null, marginBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxPreviewGraphic.tsx");

export default function GuildThemeNuxPreviewGraphic(arg0) {
  let isPersonal;
  let themeSettings;
  ({ themeSettings, isPersonal } = arg0);
  let obj = { "Null": "showAllButtonUnderline", "Null": "ynfFaI", style: callback().container };
  obj = {};
  let tmp4 = null;
  if (!isPersonal) {
    tmp4 = themeSettings;
  }
  obj.themeSettings = tmp4;
  obj.children = jsx(importDefault(dependencyMap[5]), obj);
  return <View {...obj} />;
};
