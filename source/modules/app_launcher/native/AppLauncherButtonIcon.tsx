// Module ID: 11379
// Function ID: 88474
// Name: AppLauncherButtonIcon
// Dependencies: [31, 27, 33, 3996, 1555, 10227, 7472, 2]
// Exports: AppLauncherButtonIcon

// Module 11379 (AppLauncherButtonIcon)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  let obj = Object.create(null);
  obj.style = 0;
  const merged = Object.assign(style, obj);
  obj = { style: { overflow: "hidden" } };
  if (tmp3 === require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER) {
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    const obj1 = {};
    const obj2 = { rotate: "45deg" };
    const items1 = [obj2];
    obj1.transform = items1;
    items[1] = obj1;
    obj["style"] = items;
    let tmp12 = jsx(require(10227) /* PlusLargeIcon */.PlusLargeIcon, {});
  } else {
    const obj3 = { style };
    const merged2 = Object.assign(merged);
    tmp12 = jsx(require(7472) /* AppsIcon */.AppsIcon, { style });
  }
  obj.children = tmp12;
  return <View style={{ overflow: "hidden" }} />;
};
