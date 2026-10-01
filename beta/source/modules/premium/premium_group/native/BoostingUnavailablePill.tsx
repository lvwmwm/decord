// Module ID: 13054
// Function ID: 13055
// Name: BoostingUnavailablePill
// Dependencies: [17, 4502, 21, 4836, 576, 4800, 13055, 1981, 1115, 3199, 4832, 2]
// Exports: default

// Module 13054 (BoostingUnavailablePill)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import _modDef3199 from "module_3199" /* 3199 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4502 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
function handlePress() {
  let formatToPlainString;
  let obj2;
  let prop;
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  const obj = { aboutText: formatToPlainString(prop, obj2) };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(13055, dependencyMap.paths);
  const intl = intl2.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { premiumGroupProductName: closure_5() };
  prop = _modDef3199["5xN/C1"];
  openLazy(tmp2, "PremiumGroupEducationActionSheet", obj);
}
({ TouchableOpacity: c3, View: closure_4 } = react_native);
let closure_5 = PremiumGroupConstants.getPremiumGroupProductName;
const jsx = Fragment.jsx;
let obj = { premiumGroupBanner: obj2, pgUnavailable: { flex: 1, justifyContent: "center" }, pgUnavailableText: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", gap: 12, padding: 12, justifyContent: "center", borderColor: nativeDefault.colors.STATUS_WARNING, borderWidth: 1, borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/BoostingUnavailablePill.tsx");

export default function BoostingUnavailablePill(style) {
  let intl;
  style = style.style;
  const tmp = closure_7();
  const items = [tmp.premiumGroupBanner, style];
  ({ variant: "text-md/normal", color: "interactive-text-active", style: tmp.pgUnavailableText, children: intl.string(intl2.t["5nrJDO"]) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <_false activeOpacity={0.7} onPress={handlePress}>{null}</_false>;
};
