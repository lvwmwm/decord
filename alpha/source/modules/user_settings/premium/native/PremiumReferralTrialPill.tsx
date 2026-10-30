// Module ID: 15242
// Function ID: 15243
// Name: PremiumReferralTrialPill
// Dependencies: [17, 21, 5009, 575, 5619, 1114, 2]
// Exports: PremiumReferralTrialPill

// Module 15242 (PremiumReferralTrialPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { pillParent: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }, pillParentExtraMargin: { display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 36, marginBottom: 20 }, pillContainer: obj2, text: { color: "#AC46C3", paddingHorizontal: 1, paddingBottom: 2, textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", margin: 8, paddingHorizontal: 8, overflow: "visible" };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumReferralTrialPill.tsx");

export const PremiumReferralTrialPill = (hasExtraMargin) => {
  let str;
  hasExtraMargin = hasExtraMargin.hasExtraMargin;
  const tmp = closure_4();
  ({ variant: "text-xs/bold", style: tmp.text, children: str.toUpperCase() });
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  str = intl.string(intl2.t.Y1q7js);
  return <View style={hasExtraMargin ? tmp.pillParentExtraMargin : tmp.pillParent}>{null}</View>;
};
