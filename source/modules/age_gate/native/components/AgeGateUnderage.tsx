// Module ID: 14645
// Function ID: 110426
// Name: AgeGateUnderage
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14645 (AgeGateUnderage)
import closure_3 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { HelpdeskArticles } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = __exportStarResult1);
let closure_9 = __exportStarResult1.createStyles((arg0) => {
  let obj = {};
  obj = {};
  let num = 0;
  if (arg0) {
    num = 80;
  }
  obj.paddingBottom = num;
  obj.backgroundColor = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW;
  obj.container = obj;
  obj.header = { marginTop: 16 };
  obj.body = {};
  obj.buttonWrapper = {};
  return obj;
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_gate/native/components/AgeGateUnderage.tsx");

export default function AgeGateUnderage(onClose) {
  let existingUser;
  let underageMessage;
  onClose = onClose.onClose;
  const arg1 = onClose;
  ({ underageMessage, existingUser } = onClose);
  if (existingUser === undefined) {
    existingUser = false;
  }
  const importDefault = existingUser;
  let flag = onClose.fromRegister;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onClose.disableSwipe;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const dependencyMap = flag2;
  let React;
  const tmp = importDefault(dependencyMap[6])();
  const tmp2 = callback3(tmp);
  let obj = arg1(dependencyMap[7]);
  const navigation = obj.useNavigation();
  React = navigation;
  const items = [onClose, existingUser, navigation, flag2];
  const layoutEffect = React.useLayoutEffect(() => {
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
  let obj1 = arg1(dependencyMap[9]);
  obj1.useNavigatorBackPressHandler(() => {
    onClose();
    return true;
  });
  const intl = arg1(dependencyMap[10]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[10]).t;
  if (existingUser) {
    let stringResult = string(t.NR/zrG);
  } else {
    stringResult = string(t.nCB6Ga);
  }
  obj = { style: tmp2.container };
  let tmp9 = null;
  if (!tmp) {
    tmp9 = callback(importDefault(dependencyMap[11]), {});
  }
  const items1 = [tmp9, callback(importDefault(dependencyMap[12]), {}), callback(arg1(dependencyMap[13]).ShieldSpotIllustration, {}), , , ];
  obj = { style: tmp2.header, children: stringResult };
  items1[3] = callback(importDefault(dependencyMap[14]), obj);
  obj1 = { "Null": 0, "Null": 1929379840, "Null": 0, style: tmp2.body };
  const intl2 = arg1(dependencyMap[10]).intl;
  if (flag) {
    let stringResult1 = intl2.string(tmp14(tmp15[10]).t.GDQgHL);
  } else {
    const obj2 = {};
    if (null == underageMessage) {
      const intl3 = arg1(dependencyMap[10]).intl;
      underageMessage = intl3.string(arg1(dependencyMap[10]).t.WqEH4D);
    }
    obj2.underageMessage = underageMessage;
    let obj6 = importDefault(dependencyMap[16]);
    obj2.helpURL = obj6.getArticleURL(HelpdeskArticles.AGE_GATE);
    stringResult1 = intl2.format(tmp14(tmp15[10]).t.b0QzXe, obj2);
  }
  obj1.children = stringResult1;
  items1[4] = callback(arg1(dependencyMap[15]).TextWithIOSLinkWorkaround, obj1);
  let tmp22 = null;
  if (existingUser) {
    const obj3 = {};
    const obj4 = { "Null": 0, "Null": 1929379840, "Null": 0, style: tmp2.body };
    const intl4 = arg1(dependencyMap[10]).intl;
    const obj5 = { days: 30 };
    obj4.children = intl4.format(arg1(dependencyMap[10]).t.3axQdB, obj5);
    const items2 = [callback(arg1(dependencyMap[17]).Text, obj4), ];
    obj6 = { style: tmp2.buttonWrapper };
    const obj7 = { onPress: onClose };
    const intl5 = arg1(dependencyMap[10]).intl;
    obj7.text = intl5.string(arg1(dependencyMap[10]).t.JhDw5o);
    obj7.grow = true;
    obj6.children = callback(arg1(dependencyMap[18]).Button, obj7);
    items2[1] = callback(View, obj6);
    obj3.children = items2;
    tmp22 = callback2(closure_7, obj3);
  }
  items1[5] = tmp22;
  obj.children = items1;
  return callback2(View, obj);
};
