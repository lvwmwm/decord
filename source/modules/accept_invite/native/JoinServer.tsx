// Module ID: 9262
// Function ID: 72355
// Name: OrSeparator
// Dependencies: [31, 27, 9263, 33, 4130, 689, 4126, 1212, 5160, 1456, 1450, 9039, 4543, 2]
// Exports: default

// Module 9262 (OrSeparator)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
class OrSeparator {
  constructor() {
    tmp = c11();
    obj = { style: tmp.separator };
    obj = { style: tmp.innerSeparator };
    items = [, , ];
    items[0] = jsx(View, obj);
    obj1 = { style: null, variant: "text-sm/semibold", color: "text-muted" };
    obj1.style = tmp.orText;
    intl = require("getSystemLocale").intl;
    obj1.children = intl.string(require("getSystemLocale").t.HEuagM);
    items[1] = jsx(require("Text").Text, obj1);
    obj2 = { style: tmp.innerSeparator };
    items[2] = jsx(View, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: closure_6, CreateGuildModalStates: closure_7 } = NUXGuildTemplatesAnalytics);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.growSpacing = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { flexGrow: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { flexGrow: 2, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.textInput = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj3 = { height: 1, flexGrow: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.innerSeparator = obj3;
_createForOfIteratorHelperLoose.separator = { paddingVertical: 12, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj4 = { textAlign: "center", marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, textTransform: "uppercase" };
_createForOfIteratorHelperLoose.orText = obj4;
_createForOfIteratorHelperLoose.header = { textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginTop: 8, marginBottom: 32 };
_createForOfIteratorHelperLoose.exampleText = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = ["https://discord.gg/hTKzmak", "hTKzmak", "https://discord.gg/wumpus-friends"];
let closure_13 = items[0];
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
const result = require("NUXGuildTemplatesAnalytics").fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  let error;
  let inviteString;
  let onDone;
  let onInviteChange;
  let submitting;
  ({ onDone, submitting } = arg0);
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  obj = { keyboardShouldPersistTaps: "handled" };
  const items1 = [tmp.container, ];
  obj = {};
  const callback = React.useCallback(() => {
    navigation.push(outer1_7.JOIN_STUDENT_HUB);
  }, items);
  obj.paddingBottom = importDefault(5160)().insets.bottom + importDefault(689).space.PX_16;
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = {};
  let tmp8 = null;
  if (importDefault(1450)().height > closure_6) {
    const obj2 = {};
    const obj3 = { style: tmp.header, accessibilityRole: "header", variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
    const intl = navigation(1212).intl;
    obj3.children = intl.string(navigation(1212).t.jlfuFW);
    const items2 = [callback(navigation(4126).Text, obj3), ];
    const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
    const intl2 = navigation(1212).intl;
    obj4.children = intl2.string(navigation(1212).t.lVvN3A);
    items2[1] = callback(navigation(4126).Text, obj4);
    obj2.children = items2;
    tmp8 = callback2(closure_10, obj2);
  }
  const items3 = [tmp8, , ];
  const obj5 = {};
  const intl3 = navigation(1212).intl;
  obj5.label = intl3.string(navigation(1212).t.qreV25);
  obj5.error = error;
  obj5.value = inviteString;
  obj5.onChangeText = onInviteChange;
  obj5.placeholder = closure_13;
  const intl4 = navigation(1212).intl;
  obj5.accessibilityLabel = intl4.string(navigation(1212).t.qreV25);
  obj5.autoFocus = true;
  obj5.autoCapitalize = "none";
  obj5.autoCorrect = false;
  obj5.returnKeyType = "join";
  obj5.textStyle = tmp.textInput;
  obj5.onSubmitEditing = onDone;
  items3[1] = callback(importDefault(9039), obj5);
  const obj6 = { style: tmp.exampleText, variant: "text-sm/medium", color: "text-muted" };
  const intl5 = navigation(1212).intl;
  obj6.children = intl5.format(navigation(1212).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children) {
      const obj = { variant: "text-sm/medium", color: "text-default", children };
      return outer1_8(navigation(outer1_2[6]).Text, obj, arg1);
    }
  });
  items3[2] = callback(navigation(4126).Text, obj6);
  obj1.children = items3;
  const items4 = [callback2(closure_4, obj1), ];
  const obj8 = {};
  const items5 = [callback(closure_4, { style: tmp.growSpacing }), , , ];
  const obj10 = { size: "lg" };
  const intl6 = navigation(1212).intl;
  obj10.text = intl6.string(navigation(1212).t["+H/coT"]);
  const intl7 = navigation(1212).intl;
  obj10.accessibilityLabel = intl7.string(navigation(1212).t["+H/coT"]);
  obj10.loading = submitting;
  obj10.disabled = submitting;
  obj10.onPress = onDone;
  items5[1] = callback(navigation(4543).Button, obj10);
  items5[2] = callback(OrSeparator, {});
  const obj11 = { size: "lg", variant: "secondary" };
  const intl8 = navigation(1212).intl;
  obj11.text = intl8.string(navigation(1212).t["MOqX/G"]);
  const intl9 = navigation(1212).intl;
  obj11.accessibilityLabel = intl9.string(navigation(1212).t["MOqX/G"]);
  obj11.onPress = callback;
  items5[3] = callback(navigation(4543).Button, obj11);
  obj8.children = items5;
  items4[1] = callback2(closure_10, obj8);
  obj.children = items4;
  return callback2(closure_5, obj);
};
export { OrSeparator };
