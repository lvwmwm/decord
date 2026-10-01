// Module ID: 15611
// Function ID: 15612
// Name: AgeGateUnderage
// Dependencies: [19, 17, 1074, 21, 4836, 576, 6363, 1485, 5936, 5942, 1115, 6394, 6397, 7872, 6393, 4832, 2111, 5281, 2]
// Exports: default

// Module 15611 (AgeGateUnderage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 0;
  if (arg0) {
    num = 80;
  }
  const obj = { container: { alignItems: "center", justifyContent: "center", flex: 1, padding: 16, paddingTop: 0, paddingBottom: num, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: { marginTop: 16 }, body: { marginTop: 8, lineHeight: 20, textAlign: "center" }, buttonWrapper: { width: "100%", marginTop: 24 } };
  ({ alignItems: "center", justifyContent: "center", flex: 1, padding: 16, paddingTop: 0, paddingBottom: num, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  return obj;
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default function AgeGateUnderage(onClose) {
  let Button;
  let existingUser;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let obj10;
  let stringResult;
  let stringResult1;
  let tmpResult;
  let underageMessage;
  onClose = onClose.onClose;
  ({ underageMessage, existingUser } = onClose);
  if (existingUser === undefined) {
    existingUser = false;
  }
  let flag = onClose.fromRegister;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onClose.disableSwipe;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp3 = existingUser(flag2[6])();
  const tmp4 = closure_9(tmp3);
  let obj = onClose(flag2[7]);
  navigation = obj.useNavigation();
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let fn;
    const setOptions = navigation.setOptions;
    if (existingUser) {
      fn = () => null;
    } else {
      const obj = NavigatorHeader;
      fn = obj.getHeaderBackButton(onClose);
    }
    const obj2 = { headerLeft: fn, gestureEnabled: !flag2 };
    setOptions(obj2);
  }, items);
  let obj2 = onClose(flag2[9]);
  obj2.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  const intl = onClose(flag2[10]).intl;
  const string = intl.string;
  const t = onClose(flag2[10]).t;
  if (existingUser) {
    stringResult = string(t["NR/zrG"]);
  } else {
    stringResult = string(t.nCB6Ga);
  }
  let tmp12 = null;
  const obj3 = { style: tmp4.container, children: items1 };
  if (!tmp3) {
    tmp12 = closure_6(tmp(tmp2[11]), {});
  }
  items1 = [tmp12, closure_6(tmp(tmp2[12]), {}), closure_6(onClose(tmp2[13]).ShieldSpotIllustration, {}), , , ];
  const obj4 = { style: tmp4.header, children: stringResult };
  items1[3] = closure_6(existingUser(flag2[14]), obj4);
  const obj5 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult1 };
  const Text = tmp5(tmp2[15]).Text;
  const intl2 = tmp5(tmp2[10]).intl;
  if (flag) {
    stringResult1 = intl2.string(tmp5(tmp2[10]).t.GDQgHL);
  } else {
    const format = intl2.format;
    const b0QzXe = tmp5(tmp2[10]).t.b0QzXe;
    if (underageMessage == null) {
      const intl3 = tmp5(tmp2[10]).intl;
      underageMessage = intl3.string(tmp5(tmp2[10]).t.WqEH4D);
    }
    const obj6 = { underageMessage, helpURL: tmpResult.getArticleURL(HelpdeskArticles.AGE_GATE) };
    tmpResult = existingUser(flag2[16]);
    stringResult1 = format(b0QzXe, obj6);
  }
  items1[4] = closure_6(Text, obj5);
  let tmp10Result = null;
  if (existingUser) {
    const obj7 = { children: items2 };
    const obj8 = { style: tmp4.body, variant: "text-md/medium", color: "interactive-text-default", children: intl4.format(onClose(flag2[10]).t["3axQdB"], { days: 30 }) };
    const Text2 = tmp5(tmp2[15]).Text;
    intl4 = tmp5(tmp2[10]).intl;
    items2 = [closure_6(Text2, obj8), ];
    const obj9 = { style: tmp4.buttonWrapper, children: closure_6(Button, obj10) };
    obj10 = { onPress: onClose, text: intl5.string(onClose(flag2[10]).t.JhDw5o), grow: true };
    Button = tmp5(tmp2[17]).Button;
    intl5 = tmp5(tmp2[10]).intl;
    items2[1] = closure_6(View, obj9);
    tmp10Result = tmp10(closure_7, obj7);
  }
  items1[5] = tmp10Result;
  return closure_8(View, obj3);
};
