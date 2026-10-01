// Module ID: 5937
// Function ID: 5938
// Name: HeaderDebugOverlay
// Dependencies: [19, 17, 21, 4836, 576, 5938, 4832, 2]
// Exports: default

// Module 5937 (HeaderDebugOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useDesignToggleDefault from "useDesignToggle" /* 5938 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { "os-drawn": "OS-Drawn", "custom-drawn": "Custom-Drawn", "js-stack": "JS Stack", sheet: "Sheet", bespoke: "Bespoke" };
let createStyles = createStyles_mod;
let obj = { tintWash: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.15 }, badgeContainer: { position: "absolute", bottom: 2, right: 4, pointerEvents: "none" }, badge: obj2, "color-os-drawn": obj3, "color-custom-drawn": obj4, "color-js-stack": obj5, "color-sheet": { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, "color-bespoke": { backgroundColor: nativeDefault.colors.STATUS_WARNING } };
obj2 = { paddingHorizontal: 4, paddingVertical: 1, borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.TEXT_LINK };
obj4 = { backgroundColor: nativeDefault.colors.STATUS_DANGER };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/HeaderDebugOverlay.native.tsx");

export default function useHeaderDebugOverlay(arg0, arg1) {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj5;
  const tmp2 = useDesignToggleDefault("show_header_debug_info");
  const tmp3 = closure_8();
  if (tmp2) {
    let tmp6 = arg1;
    const _HermesInternal = HermesInternal;
    const tmp8 = tmp3["color-" + arg0];
    if (arg1 == null) {
      tmp6 = closure_7[arg0];
    }
    const obj2 = { style: items };
    items = [tmp3.tintWash, tmp8];
    const obj = { children: items1 };
    items1 = [React3(View, obj2), ];
    const obj3 = { style: tmp3.badgeContainer, children: React3(View, obj4) };
    obj4 = { style: items2, children: React3(Text_Text.Text, obj5) };
    items2 = [tmp3.badge, tmp8];
    obj5 = { variant: "text-xs/bold", color: "text-overlay-light", children: tmp6 };
    items1[1] = React3(View, obj3);
    return metroRequire(hasOwnProperty, obj);
  } else {
    return null;
  }
};
