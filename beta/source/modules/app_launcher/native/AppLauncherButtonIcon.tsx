// Module ID: 11726
// Function ID: 11727
// Name: AppLauncherButtonIcon
// Dependencies: [19, 17, 21, 4703, 1611, 10413, 5374, 2]
// Exports: AppLauncherButtonIcon

// Module 11726 (AppLauncherButtonIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1611 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4703 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  let items;
  let items1;
  let tmp4Result;
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const tmp3 = useKeyboardTypeDefault();
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const obj2 = { style: items };
    const PlusLargeIcon = tmp6(10413).PlusLargeIcon;
    const merged1 = Object.assign(merged);
    items = [style, ];
    const obj3 = { transform: items1 };
    items1 = [{ rotate: "45deg" }];
    items[1] = obj3;
    tmp4Result = tmp4(PlusLargeIcon, obj2);
  } else {
    const obj4 = { style };
    const AppsIcon = tmp6(5374).AppsIcon;
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(AppsIcon, obj4);
  }
  return <tmp5 style={{ overflow: "hidden" }}>{tmp4Result}</tmp5>;
};
