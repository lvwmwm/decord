// Module ID: 17229
// Function ID: 17230
// Name: BountiesScrollRecapFooter
// Dependencies: [19, 17, 5171, 21, 5170, 575, 1377, 1113, 5781, 9634, 504, 5295, 2]
// Exports: BountiesScrollRecapFooter, BountiesScrollRecapFooterGradient

// Module 17229 (BountiesScrollRecapFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import BountiesScrollGradientRive2 from "BountiesScrollGradientRive" /* 5295 */;
import Text_Text from "Text/Text" /* 5781 */;
import OrbsIcon from "OrbsIcon" /* 9634 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let num;
  const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 }, orbRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, rive: { flex: 1, width: "100%" }, orbAmount: { marginTop: num } };
  ({ flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  num = 0;
  const obj4 = PlatformUtils;
  if (obj4.isIOS()) {
    num = 6;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export function BountiesScrollRecapFooter(orbAmount) {
  let items;
  let items1;
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.d6Rrn6);
  const obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: items };
  items = [hasOwnProperty(Text_Text.Text, { variant: "body-sm/medium", color: "text-brand", accessible: false, children: stringResult }), ];
  const obj2 = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: items1 };
  items1 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  const obj3 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  const Text = Text_Text.Text;
  items1[1] = hasOwnProperty(Text, obj3);
  items[1] = metroRequire(View, obj2);
  return metroRequire(View, obj);
}
export function BountiesScrollRecapFooterGradient() {
  let BountiesScrollGradientRive;
  let str;
  let useReducedMotion;
  const items = [AccessibilityStore];
  const tmp = closure_7();
  const obj2 = { style: tmp.rive, children: hasOwnProperty(BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str }) };
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  str = "play";
  BountiesScrollGradientRive = BountiesScrollGradientRive2.BountiesScrollGradientRive;
  const tmp4 = View;
  if (stateFromStores) {
    str = "halt";
  }
  return hasOwnProperty(tmp4, obj2);
}
