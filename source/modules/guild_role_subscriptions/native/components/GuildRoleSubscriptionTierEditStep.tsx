// Module ID: 16303
// Function ID: 125801
// Name: Header
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16303 (Header)
import closure_3 from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

function Header(arg0) {
  let description;
  let title;
  ({ description, title } = arg0);
  const tmp = result();
  let obj = { top: true, style: tmp.headerContainer };
  obj = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title, children: title };
  const items = [callback(arg1(dependencyMap[6]).Text, obj), , ];
  obj = { style: tmp.subtitle, children: description };
  items[1] = callback(arg1(dependencyMap[6]).Text, obj);
  items[2] = callback(importDefault(dependencyMap[7]), { style: tmp.separator });
  obj.children = items;
  return callback2(arg1(dependencyMap[5]).SafeAreaPaddingView, obj);
}
function Footer(arg0) {
  let canProceedToNextStep;
  let nextStep;
  let onProceed;
  let submitting;
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  if (null == nextStep) {
    const intl2 = arg1(dependencyMap[8]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[8]).t.4cAsqe);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.bm6P5/);
  }
  let obj = {};
  const items = [result().footerContainer, ];
  obj = { paddingBottom: importDefault(dependencyMap[9])().bottom };
  items[1] = obj;
  obj.style = items;
  obj = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
  obj.children = callback(arg1(dependencyMap[10]).Button, obj);
  return callback(closure_4, obj);
}
({ View: closure_4, ScrollView: closure_5 } = result);
({ jsx: closure_6, jsxs: closure_7 } = result);
result = {};
result = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOW, height: "100%" };
result.container = result;
result.scrollContainer = { flexGrow: 1 };
result.headerContainer = {};
result.title = {};
result.subtitle = {};
result.separator = { marginTop: 24 };
result.footerContainer = {};
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  let obj = Object.create(null);
  obj.scrollable = 0;
  const merged = Object.assign(scrollable, obj);
  const tmp3 = result();
  obj = arg1(dependencyMap[11]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const nextStep = merged.nextStep;
  const importDefault = nextStep;
  const onProceed = merged.onProceed;
  const dependencyMap = onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = React.useCallback(() => {
    if (null != onProceed) {
      onProceed();
    } else if (null != nextStep) {
      navigation.push(nextStep);
    }
  }, items);
  if (false !== scrollable.scrollable) {
    obj = { style: tmp3.container };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    const items1 = [callback(Header, obj1), , ];
    const obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
    const items2 = [tmp3.scrollContainer];
    obj2.contentContainerStyle = items2;
    obj2.children = merged.children;
    items1[1] = callback(closure_5, obj2);
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3["onProceed"] = callback;
    items1[2] = callback(Footer, obj3);
    obj.children = items1;
    let obj4 = obj;
  } else {
    obj4 = { style: tmp3.container };
    const obj5 = {};
    const merged3 = Object.assign(merged);
    const items3 = [callback(Header, obj5), merged.children, ];
    const obj6 = {};
    const merged4 = Object.assign(merged);
    obj6["onProceed"] = callback;
    items3[2] = callback(Footer, obj6);
    obj4.children = items3;
  }
  return closure_7(closure_4, obj4);
};
