// Module ID: 9218
// Function ID: 72092
// Name: OrSeparator
// Dependencies: []
// Exports: default

// Module 9218 (OrSeparator)
class OrSeparator {
  constructor() {
    tmp = closure_11();
    obj = { style: tmp.separator };
    obj = { style: tmp.innerSeparator };
    items = [, , ];
    items[0] = jsx(View, obj);
    obj1 = { delete: 1404174337, dispatch: null, raw: null };
    obj1.style = tmp.orText;
    intl = arg1(dependencyMap[7]).intl;
    obj1.children = intl.string(arg1(dependencyMap[7]).t.HEuagM);
    items[1] = jsx(arg1(dependencyMap[6]).Text, obj1);
    obj2 = { style: tmp.innerSeparator };
    items[2] = jsx(View, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ CREATE_GUILD_SMALL_SCREEN_MAX_HEIGHT: closure_6, CreateGuildModalStates: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flexGrow: 2, minHeight: importDefault(dependencyMap[5]).space.PX_24 };
obj.growSpacing = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.container = { flexGrow: 2, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
const obj1 = { flexGrow: 2, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.textInput = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
const obj3 = { onPress: null, name: null, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.innerSeparator = obj3;
obj.separator = { 1453996901: null, -1973307556: "\u{1F937}\u{1F3FF}", 1654826833: true, -699287860: null };
const obj4 = { flex: "press", accessible: "toggle_existing_reaction_button", withSpring: "react", marginHorizontal: importDefault(dependencyMap[5]).space.PX_8 };
obj.orText = obj4;
obj.header = { textAlign: "center" };
obj.description = {};
obj.exampleText = { marginTop: 8 };
let closure_11 = obj.createStyles(obj);
const items = [null, null, null];
let closure_13 = items[0];
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.lg };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/accept_invite/native/JoinServer.tsx");

export default function JoinServer(arg0) {
  let error;
  let inviteString;
  let onDone;
  let onInviteChange;
  let submitting;
  ({ onDone, submitting } = arg0);
  ({ error, inviteString, onInviteChange } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  obj = { keyboardShouldPersistTaps: "handled" };
  const items1 = [tmp.container, ];
  obj = {};
  const callback = React.useCallback(() => {
    navigation.push(constants.JOIN_STUDENT_HUB);
  }, items);
  obj.paddingBottom = importDefault(dependencyMap[8])().insets.bottom + importDefault(dependencyMap[5]).space.PX_16;
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = {};
  let tmp8 = null;
  if (importDefault(dependencyMap[10])().height > closure_6) {
    const obj2 = {};
    const obj3 = { style: tmp.header };
    const intl = arg1(dependencyMap[7]).intl;
    obj3.children = intl.string(arg1(dependencyMap[7]).t.jlfuFW);
    const items2 = [callback(arg1(dependencyMap[6]).Text, obj3), ];
    const obj4 = { style: tmp.description };
    const intl2 = arg1(dependencyMap[7]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[7]).t.lVvN3A);
    items2[1] = callback(arg1(dependencyMap[6]).Text, obj4);
    obj2.children = items2;
    tmp8 = callback2(closure_10, obj2);
  }
  const items3 = [tmp8, , ];
  const obj5 = {};
  const intl3 = arg1(dependencyMap[7]).intl;
  obj5.label = intl3.string(arg1(dependencyMap[7]).t.qreV25);
  obj5.error = error;
  obj5.value = inviteString;
  obj5.onChangeText = onInviteChange;
  obj5.placeholder = closure_13;
  const intl4 = arg1(dependencyMap[7]).intl;
  obj5.accessibilityLabel = intl4.string(arg1(dependencyMap[7]).t.qreV25);
  obj5.autoFocus = true;
  obj5.autoCapitalize = "none";
  obj5.autoCorrect = false;
  obj5.returnKeyType = "join";
  obj5.textStyle = tmp.textInput;
  obj5.onSubmitEditing = onDone;
  items3[1] = callback(importDefault(dependencyMap[11]), obj5);
  const obj6 = { style: tmp.exampleText };
  const intl5 = arg1(dependencyMap[7]).intl;
  obj6.children = intl5.format(arg1(dependencyMap[7]).t.vwWaTe, {
    example1: items[0],
    example2: items[1],
    example3: items[2],
    exampleHook(children) {
      return callback(navigation(closure_2[6]).Text, { children }, arg1);
    }
  });
  items3[2] = callback(arg1(dependencyMap[6]).Text, obj6);
  obj1.children = items3;
  const items4 = [callback2(closure_4, obj1), ];
  const obj8 = {};
  const items5 = [callback(closure_4, { style: tmp.growSpacing }), , , ];
  const obj10 = { size: "lg" };
  const intl6 = arg1(dependencyMap[7]).intl;
  obj10.text = intl6.string(arg1(dependencyMap[7]).t.+H/coT);
  const intl7 = arg1(dependencyMap[7]).intl;
  obj10.accessibilityLabel = intl7.string(arg1(dependencyMap[7]).t.+H/coT);
  obj10.loading = submitting;
  obj10.disabled = submitting;
  obj10.onPress = onDone;
  items5[1] = callback(arg1(dependencyMap[12]).Button, obj10);
  items5[2] = callback(OrSeparator, {});
  const obj11 = {};
  const intl8 = arg1(dependencyMap[7]).intl;
  obj11.text = intl8.string(arg1(dependencyMap[7]).t.MOqX/G);
  const intl9 = arg1(dependencyMap[7]).intl;
  obj11.accessibilityLabel = intl9.string(arg1(dependencyMap[7]).t.MOqX/G);
  obj11.onPress = callback;
  items5[3] = callback(arg1(dependencyMap[12]).Button, obj11);
  obj8.children = items5;
  items4[1] = callback2(closure_10, obj8);
  obj.children = items4;
  return callback2(closure_5, obj);
};
export { OrSeparator };
