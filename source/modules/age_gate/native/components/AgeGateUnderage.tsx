// Module ID: 14771
// Function ID: 112665
// Name: AgeGateUnderage
// Dependencies: [31, 27, 653, 33, 4130, 689, 9197, 1456, 5087, 5093, 1212, 9222, 9225, 5807, 9221, 5459, 1920, 4126, 4543, 2]
// Exports: default

// Module 14771 (AgeGateUnderage)
import result from "result";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { alignItems: "center", justifyContent: "center", flex: 1, padding: 16, paddingTop: 0 };
  let num = 0;
  if (arg0) {
    num = 80;
  }
  obj.paddingBottom = num;
  obj.backgroundColor = importDefault(689).colors.BACKGROUND_BASE_LOW;
  obj.container = obj;
  obj.header = { marginTop: 16 };
  obj.body = { marginTop: 8, lineHeight: 20, textAlign: "center" };
  obj.buttonWrapper = { width: "100%", marginTop: 24 };
  return obj;
});
const result = require("ME").fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default function AgeGateUnderage(onClose) {
  let existingUser;
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
  let navigation;
  const tmp = existingUser(flag2[6])();
  const tmp2 = callback3(tmp);
  let obj = onClose(flag2[7]);
  navigation = obj.useNavigation();
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = navigation.useLayoutEffect(() => {
    const obj = {};
    if (existingUser) {
      let fn = () => null;
    } else {
      fn = onClose(flag2[8]).getHeaderBackButton(onClose);
      const obj2 = onClose(flag2[8]);
    }
    obj.headerLeft = fn;
    obj.gestureEnabled = !flag2;
    navigation.setOptions(obj);
  }, items);
  let obj1 = onClose(flag2[9]);
  obj1.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  const intl = onClose(flag2[10]).intl;
  const string = intl.string;
  const t = onClose(flag2[10]).t;
  if (existingUser) {
    let stringResult = string(t["NR/zrG"]);
  } else {
    stringResult = string(t.nCB6Ga);
  }
  obj = { style: tmp2.container };
  let tmp9 = null;
  if (!tmp) {
    tmp9 = callback(existingUser(flag2[11]), {});
  }
  const items1 = [tmp9, callback(existingUser(flag2[12]), {}), callback(onClose(flag2[13]).ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp2.header, children: stringResult };
  items1[3] = callback(existingUser(flag2[14]), obj);
  obj1 = { style: tmp2.body, variant: "text-md/medium", color: "interactive-text-default" };
  const intl2 = onClose(flag2[10]).intl;
  if (flag) {
    let stringResult1 = intl2.string(tmp14(tmp15[10]).t.GDQgHL);
  } else {
    let obj2 = {};
    if (null == underageMessage) {
      const intl3 = onClose(flag2[10]).intl;
      underageMessage = intl3.string(onClose(flag2[10]).t.WqEH4D);
    }
    obj2.underageMessage = underageMessage;
    let obj6 = existingUser(flag2[16]);
    obj2.helpURL = obj6.getArticleURL(HelpdeskArticles.AGE_GATE);
    stringResult1 = intl2.format(tmp14(tmp15[10]).t.b0QzXe, obj2);
  }
  obj1.children = stringResult1;
  items1[4] = callback(onClose(flag2[15]).TextWithIOSLinkWorkaround, obj1);
  let tmp22 = null;
  if (existingUser) {
    const obj3 = {};
    const obj4 = { style: tmp2.body, variant: "text-md/medium", color: "interactive-text-default" };
    const intl4 = onClose(flag2[10]).intl;
    const obj5 = { days: 30 };
    obj4.children = intl4.format(onClose(flag2[10]).t["3axQdB"], obj5);
    const items2 = [callback(onClose(flag2[17]).Text, obj4), ];
    obj6 = { style: tmp2.buttonWrapper };
    const obj7 = { onPress: onClose };
    const intl5 = onClose(flag2[10]).intl;
    obj7.text = intl5.string(onClose(flag2[10]).t.JhDw5o);
    obj7.grow = true;
    obj6.children = callback(onClose(flag2[18]).Button, obj7);
    items2[1] = callback(View, obj6);
    obj3.children = items2;
    tmp22 = callback2(closure_7, obj3);
  }
  items1[5] = tmp22;
  obj.children = items1;
  return callback2(View, obj);
};
