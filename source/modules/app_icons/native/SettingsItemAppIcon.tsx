// Module ID: 14232
// Function ID: 107565
// Name: SettingsItemAppIcon
// Dependencies: []
// Exports: default

// Module 14232 (SettingsItemAppIcon)
importAll(dependencyMap[0]);
const getIconById = arg1(dependencyMap[1]).getIconById;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.icon = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(dependencyMap[4]).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = arg1(dependencyMap[5]);
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = callback();
  if (currentAppIcon !== arg1(dependencyMap[6]).FreemiumAppIconIds.DEFAULT) {
    if (null != tmp5) {
      obj = { style: tmp3.icon, id: currentAppIcon, size: 32 };
      let tmp10 = jsx(importDefault(dependencyMap[8]), obj);
    }
    return tmp10;
  }
  obj = { color: INTERACTIVE_ICON_DEFAULT };
  tmp10 = jsx(arg1(dependencyMap[7]).ClydeIcon, obj);
};
