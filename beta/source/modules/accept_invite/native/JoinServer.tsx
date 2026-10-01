// Module ID: 6398
// Function ID: 6399
// Name: JoinServer
// Dependencies: [19, 17, 6399, 21, 4836, 576, 6400, 4832, 1115, 6402, 1485, 1479, 6023, 5281, 2]
// Exports: default

// Module 6398 (JoinServer)
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import Text_Text from "Text/Text" /* 4832 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp2;
const FreeFormInputGroupDefault = tmp2(6023);
class OrSeparator {
  constructor() {
    let intl;
    let items1;
    const tmp = closure_11();
    const obj2 = { style: tmp.separator, children: items };
    const obj = useTypeConsolidationTextTransform;
    const obj3 = { style: tmp.innerSeparator };
    const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("JoinServer");
    items = [metroImportAll(React3, obj3), , ];
    const obj4 = { style: items1, variant: "text-sm/semibold", color: "text-muted", children: intl.string(intl10.t.HEuagM) };
    items1 = [tmp.orText, typeConsolidationTextTransform];
    const Text = Text_Text.Text;
    intl = intl10.intl;
    items[1] = metroImportAll(Text, obj4);
    const obj5 = { style: tmp.innerSeparator };
    items[2] = metroImportAll(React3, obj5);
    return React4(React3, obj2);
  }
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: metroRequire, CreateGuildModalStates: metroImportDefault } = CreateGuildConstants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { growSpacing: obj2, container: obj3, textInput: obj4, innerSeparator: obj5, separator: { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" }, orText: obj6, header: { textAlign: "center" }, description: { textAlign: "center", marginTop: 8, marginBottom: 32 }, exampleText: { marginTop: 8 } };
obj2 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.lg };
obj5 = { height: 1, flexGrow: 2, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_8, textTransform: "uppercase" };
const unpackModuleId = createStyles(obj);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
const placeholder = items[0];
const result = size.fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  let error;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let inviteString;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj10;
  let onDone;
  let onInviteChange;
  let submitting;
  ({ onDone, submitting } = arg0);
  navigation = undefined;
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = closure_11();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  items = [navigation];
  const height = useWindowDimensionsDefault().height;
  const obj2 = { keyboardShouldPersistTaps: "handled", contentContainerStyle: items1, children: items4 };
  items1 = [tmp.container, ];
  const obj3 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16 };
  const callback = react.useCallback(() => {
    navigation.push(metroImportDefault.JOIN_STUDENT_HUB);
  }, items);
  items1[1] = obj3;
  let tmp7Result = null;
  const tmp8 = closure_5;
  if (height > closure_6) {
    const obj4 = { children: items2 };
    const obj5 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(navigation(1115).t.jlfuFW) };
    const Text = tmp4(4832).Text;
    intl = tmp4(1115).intl;
    items2 = [closure_8(Text, obj5), ];
    const obj6 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(navigation(1115).t.lVvN3A) };
    const Text2 = tmp4(4832).Text;
    intl2 = tmp4(1115).intl;
    items2[1] = closure_8(Text2, obj6);
    tmp7Result = tmp7(closure_10, obj4);
  }
  const obj7 = { children: items3 };
  items3 = [tmp7Result, , ];
  const obj8 = { label: intl3.string(navigation(1115).t.qreV25), error, value: inviteString, onChangeText: onInviteChange, placeholder, accessibilityLabel: intl4.string(navigation(1115).t.qreV25), autoFocus: true, autoCapitalize: "none", autoCorrect: false, returnKeyType: "join", textStyle: tmp.textInput, onSubmitEditing: onDone };
  const tmp2Result = FreeFormInputGroupDefault;
  intl3 = tmp4(1115).intl;
  intl4 = tmp4(1115).intl;
  items3[1] = closure_8(tmp2Result, obj8);
  const obj9 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted", children: intl5.format(navigation(1115).t.vwWaTe, obj10) };
  const Text3 = tmp4(4832).Text;
  intl5 = tmp4(1115).intl;
  obj10 = {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-default", children };
      return closure_1_8(navigation(dependencyMap[7]).Text, obj, arg1);
    }
  };
  items3[2] = closure_8(Text3, obj9);
  items4 = [closure_9(closure_4, obj7), ];
  const obj11 = { children: items5 };
  items5 = [, , , ];
  const obj12 = { style: tmp.growSpacing };
  items5[0] = closure_8(closure_4, obj12);
  const obj13 = { size: "lg", text: intl6.string(navigation(1115).t["+H/coT"]), accessibilityLabel: intl7.string(navigation(1115).t["+H/coT"]), loading: submitting, disabled: submitting, onPress: onDone };
  const Button = tmp4(5281).Button;
  intl6 = tmp4(1115).intl;
  intl7 = tmp4(1115).intl;
  items5[1] = closure_8(Button, obj13);
  items5[2] = closure_8(OrSeparator, {});
  const obj14 = { size: "lg", variant: "secondary", text: intl8.string(navigation(1115).t["MOqX/G"]), accessibilityLabel: intl9.string(navigation(1115).t["MOqX/G"]), onPress: callback };
  const Button2 = tmp4(5281).Button;
  intl8 = tmp4(1115).intl;
  intl9 = tmp4(1115).intl;
  items5[3] = closure_8(Button2, obj14);
  items4[1] = closure_9(closure_10, obj11);
  return closure_9(tmp8, obj2);
};
export { OrSeparator };
