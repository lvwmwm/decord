// Module ID: 16957
// Function ID: 16958
// Name: BountiesScrollRecapFooter
// Dependencies: [19, 17, 5015, 21, 5014, 575, 1375, 7148, 1113, 5624, 9532, 504, 5149, 2]
// Exports: BountiesScrollRecapFooter, BountiesScrollRecapFooterGradient

// Module 16957 (BountiesScrollRecapFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import BountiesScrollGradientRive2 from "BountiesScrollGradientRive" /* 5149 */;
import Text_Text from "Text/Text" /* 5624 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import OrbsIcon from "OrbsIcon" /* 9532 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let num;
  const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 }, headerLabel: { textTransform: "uppercase" }, orbRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, rive: { flex: 1, width: "100%" }, orbAmount: { marginTop: num } };
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
  let items2;
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("BountiesScrollRecapFooter", "text-xs/bold");
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.d6Rrn6);
  const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: items, accessible: false, children: stringResult };
  items = [tmp.headerLabel, typeConsolidationEyebrow.style];
  const obj2 = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: items1 };
  items1 = [hasOwnProperty(Text_Text.Text, obj3), ];
  const obj4 = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: items2 };
  items2 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  const obj5 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  const Text = Text_Text.Text;
  items2[1] = hasOwnProperty(Text, obj5);
  items1[1] = metroRequire(View, obj4);
  return metroRequire(View, obj2);
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
