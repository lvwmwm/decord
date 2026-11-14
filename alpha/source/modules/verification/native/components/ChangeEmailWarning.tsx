// Module ID: 7750
// Function ID: 7751
// Name: ChangeEmailWarning
// Dependencies: [19, 17, 1388, 7744, 1072, 21, 5306, 575, 1502, 504, 1256, 1092, 7751, 5929, 1113, 5936, 7740, 2]
// Exports: default

// Module 7750 (ChangeEmailWarning)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import VerificationConstants from "VerificationConstants" /* 7744 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const hcArticle = VerificationConstants.COMMON_SCAMS_EDUCATION_HC_ARTICLE;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, body: obj4, buttonContainer: obj5 };
obj2 = { flex: 1, padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailWarning.tsx");

export default function ChangeEmailWarning(changeEmailReason) {
  let currentUser;
  let intl;
  let intl4;
  let intl5;
  let items2;
  let items3;
  let items4;
  let obj4;
  changeEmailReason = changeEmailReason.changeEmailReason;
  const tmp = closure_11();
  let obj = changeEmailReason(1502);
  navigation = obj.useNavigation();
  let obj2 = changeEmailReason(504);
  const items = [UserStore];
  const items1 = [navigation, changeEmailReason];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj3 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: closure_10(closure_4, obj4) };
    obj4 = { style: tmp.container, children: items2 };
    items2 = [closure_9(changeEmailReason(7751).TrafficConeSpotIllustration, {}), , , ];
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(changeEmailReason(1113).t.hhR7gX) };
    const Text = tmp2(5929).Text;
    intl = tmp2(1113).intl;
    items2[1] = closure_9(Text, obj5);
    const obj6 = { style: tmp.body, accessibilityRole: "header", variant: "body-md/normal", color: "mobile-text-heading-primary", children: items3 };
    const Text2 = tmp2(5929).Text;
    const intl2 = tmp2(1113).intl;
    const obj7 = { hcArticle };
    items3 = [intl2.format(changeEmailReason(1113).t.rqWXUf, obj7), "\n\n", ];
    const intl3 = tmp2(1113).intl;
    items3[2] = intl3.string(changeEmailReason(1113).t["3LW10C"]);
    items2[2] = closure_10(Text2, obj6);
    const obj8 = { style: tmp.buttonContainer, children: items4 };
    const obj9 = { size: "md", variant: "tertiary", text: intl4.string(changeEmailReason(1113).t.rwTBFs), onPress: tmp6, shrink: true };
    const Button = tmp2(5936).Button;
    intl4 = tmp2(1113).intl;
    items4 = [closure_9(Button, obj9), ];
    const obj10 = {
      size: "md",
      variant: "primary",
      text: intl5.string(changeEmailReason(1113).t["ETE/oC"]),
      onPress() {
          const obj = navigation(dependencyMap[16]);
          return obj.close();
        },
      shrink: true
    };
    const Button2 = tmp2(5936).Button;
    intl5 = tmp2(1113).intl;
    items4[1] = closure_9(Button2, obj10);
    items2[3] = closure_10(closure_4, obj8);
    tmp7 = closure_9(closure_5, obj3);
  }
  return tmp7;
};
