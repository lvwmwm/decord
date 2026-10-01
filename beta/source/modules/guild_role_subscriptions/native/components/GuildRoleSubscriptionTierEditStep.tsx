// Module ID: 17561
// Function ID: 17562
// Name: GuildRoleSubscriptionTierEditStep
// Dependencies: [19, 17, 21, 4836, 576, 6544, 4832, 14762, 1115, 1613, 5281, 1485, 2]
// Exports: default

// Module 17561 (GuildRoleSubscriptionTierEditStep)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useNavigation from "useNavigation" /* 1485 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import FormSeparatorDefault from "FormSeparator" /* 14762 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function Header(arg0) {
  let description;
  let items;
  let title;
  ({ description, title } = arg0);
  const tmp = closure_8();
  const obj = { top: true, style: tmp.headerContainer, children: items };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [, , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  items[0] = metroRequire(Text_Text.Text, obj2);
  const obj3 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items[1] = metroRequire(Text_Text.Text, obj3);
  const obj4 = { style: tmp.separator };
  items[2] = metroRequire(FormSeparatorDefault, obj4);
  return metroImportDefault(SafeAreaPaddingView, obj);
}
function Footer(arg0) {
  let canProceedToNextStep;
  let items;
  let nextStep;
  let obj3;
  let onProceed;
  let stringResult;
  let submitting;
  let tmp5;
  ({ canProceedToNextStep, nextStep, onProceed, submitting } = arg0);
  const tmp = closure_8();
  if (null == nextStep) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t["4cAsqe"]);
    tmp5 = require;
  } else {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t["bm6P5/"]);
    tmp5 = require;
  }
  const obj = { style: items, children: metroRequire(tmp5(5281).Button, obj3) };
  items = [tmp.footerContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
  obj3 = { loading: submitting, disabled: !canProceedToNextStep, text: stringResult, onPress: onProceed };
  return metroRequire(React3, obj);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, scrollContainer: { flexGrow: 1 }, headerContainer: { position: "relative", paddingTop: 48, paddingBottom: 8, paddingHorizontal: 16, alignItems: "center" }, title: { marginTop: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, separator: { marginTop: 24 }, footerContainer: { width: "100%", padding: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierEditStep.tsx");

export default function GuildRoleSubscriptionTierEditStep(scrollable) {
  let items1;
  let items2;
  let items3;
  let obj6;
  scrollable = scrollable.scrollable;
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp2 = closure_8();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const nextStep = merged.nextStep;
  const onProceed = merged.onProceed;
  const items = [navigation, nextStep, onProceed];
  const callback = react.useCallback(() => {
    if (null != onProceed) {
      tmp();
    } else if (null != nextStep) {
      navigation.push(tmp2);
    }
  }, items);
  const tmp5 = metroImportDefault;
  const tmp6 = React3;
  if (false !== scrollable) {
    const obj2 = { style: tmp2.container, children: items1 };
    const obj3 = {};
    const merged1 = Object.assign(merged);
    items1 = [metroRequire(Header, obj3), , ];
    const obj4 = { keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, alwaysBounceVertical: false, contentContainerStyle: items2, children: merged.children };
    items2 = [tmp2.scrollContainer];
    items1[1] = metroRequire(hasOwnProperty, obj4);
    const obj5 = { onProceed: callback };
    const merged2 = Object.assign(merged);
    items1[2] = metroRequire(Footer, obj5);
    obj6 = obj2;
  } else {
    obj6 = { style: tmp2.container, children: items3 };
    const obj7 = {};
    const merged3 = Object.assign(merged);
    items3 = [metroRequire(Header, obj7), merged.children, ];
    const obj8 = { onProceed: callback };
    const merged4 = Object.assign(merged);
    items3[2] = metroRequire(Footer, obj8);
  }
  return tmp5(tmp6, obj6);
};
