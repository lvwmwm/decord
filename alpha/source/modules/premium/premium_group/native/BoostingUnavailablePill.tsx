// Module ID: 15398
// Function ID: 15399
// Name: BoostingUnavailablePill
// Dependencies: [17, 2060, 21, 5014, 575, 5258, 15399, 1994, 1113, 3288, 5624, 2]
// Exports: default

// Module 15398 (BoostingUnavailablePill)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 2060 */;
import _modDef3288 from "module_3288" /* 3288 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
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
  const tmp2 = asyncRequire(15399, dependencyMap.paths);
  const intl = intl2.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { premiumGroupProductName: closure_5() };
  prop = _modDef3288["5xN/C1"];
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
