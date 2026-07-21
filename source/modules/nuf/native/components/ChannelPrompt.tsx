// Module ID: 11769
// Function ID: 91363
// Name: ChannelPrompt
// Dependencies: []
// Exports: default

// Module 11769 (ChannelPrompt)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { marginTop: arg1(dependencyMap[8]).NAV_BAR_HEIGHT, flex: 1 };
obj.safePadding = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.guildIcon = { alignSelf: "center" };
obj.guildName = {};
obj.title = {};
obj.subTitle = {};
obj.topicInput = { marginTop: 24 };
obj.buttonWrapper = { marginTop: 8 };
obj.error = { marginTop: 4 };
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/nuf/native/components/ChannelPrompt.tsx");

export default function ChannelPrompt(guildId) {
  let obj2;
  let tmp7;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const hasBack = guildId.hasBack;
  const importDefault = hasBack;
  const hasSkip = guildId.hasSkip;
  const dependencyMap = hasSkip;
  const onCancel = guildId.onCancel;
  let callback = onCancel;
  const onSuccess = guildId.onSuccess;
  const callback2 = onSuccess;
  const tmp2 = callback4();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const tmp4 = callback2(React.useState(""), 2);
  const first = tmp4[0];
  const React = first;
  [tmp7, closure_6] = callback2(React.useState(false), 2);
  const tmp6 = callback2(React.useState(false), 2);
  [obj2, closure_7] = callback2(React.useState(null), 2);
  obj2 = arg1(dependencyMap[10]);
  const navigation = obj2.useNavigation();
  let closure_8 = navigation;
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    if (hasBack) {
      let fn = guildId(hasSkip[11]).getHeaderBackButton(onCancel);
      const obj2 = guildId(hasSkip[11]);
    } else {
      fn = () => null;
    }
    obj.headerLeft = fn;
    if (hasSkip) {
      const intl = guildId(hasSkip[12]).intl;
      let fn2 = guildId(hasSkip[11]).getHeaderTextButton(intl.string(guildId(hasSkip[12]).t.5Wxrcd), onSuccess);
      const obj3 = guildId(hasSkip[11]);
    } else {
      fn2 = () => null;
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [guildId, onSuccess, first];
  callback = React.useCallback(callback(tmp), items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { top: true, style: tmp2.safePadding };
    obj = { style: tmp2.flex };
    const obj1 = { top: 0 };
    obj.contentInset = obj1;
    obj.contentContainerStyle = tmp2.contentContainer;
    obj2 = { style: tmp2.guildIcon, value: stateFromStores.name };
    let guildIconURL = null;
    if (null != stateFromStores.icon) {
      let obj7 = importDefault(dependencyMap[17]);
      const obj3 = {};
      ({ id: obj9.id, icon: obj9.icon } = stateFromStores);
      obj3.canAnimate = true;
      obj3.size = 128;
      guildIconURL = obj7.getGuildIconURL(obj3);
    }
    obj2.icon = guildIconURL;
    obj2.selected = true;
    const items3 = [callback3(importDefault(dependencyMap[16]), obj2), , , , , , ];
    const obj4 = { style: tmp2.guildName, children: stateFromStores.name };
    items3[1] = callback3(arg1(dependencyMap[18]).Text, obj4);
    const obj5 = { Opened: 24, marginVertical: 24, marginStart: null, marginEnd: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp2.title };
    const intl = arg1(dependencyMap[12]).intl;
    obj5.children = intl.string(arg1(dependencyMap[12]).t.8VRa7d);
    items3[2] = callback3(arg1(dependencyMap[18]).Text, obj5);
    const obj6 = { style: tmp2.subTitle };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj6.children = intl2.string(arg1(dependencyMap[12]).t.+855Pm);
    items3[3] = callback3(arg1(dependencyMap[18]).Text, obj6);
    obj7 = { style: tmp2.topicInput };
    const tmp16 = closure_11;
    const tmp17 = closure_6;
    const tmp19 = importDefault(dependencyMap[16]);
    const tmp23 = callback3;
    const intl3 = arg1(dependencyMap[12]).intl;
    obj7.label = intl3.string(arg1(dependencyMap[12]).t.bY20tU);
    obj7.value = first;
    let firstFieldErrorMessage;
    if (null != obj1) {
      firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
    }
    obj7.error = firstFieldErrorMessage;
    obj7.onChangeText = tmp4[1];
    obj7.onSubmitEditing = callback;
    obj7.maxLength = 100;
    const intl4 = arg1(dependencyMap[12]).intl;
    obj7.placeholder = intl4.string(arg1(dependencyMap[12]).t.xGOYA8);
    obj7.returnKeyType = "done";
    obj7.autoFocus = true;
    items3[4] = tmp23(importDefault(dependencyMap[19]), obj7);
    const obj8 = { style: tmp2.buttonWrapper };
    const obj9 = { size: "md", text: guildId.buttonText, onPress: callback, loading: tmp7, disabled: tmp7, grow: true };
    obj8.children = callback3(arg1(dependencyMap[20]).Button, obj9);
    items3[5] = callback3(closure_7, obj8);
    let tmp34Result = null;
    if (null != obj1) {
      tmp34Result = null;
      if (obj1.hasFieldErrors()) {
        const obj10 = { style: tmp2.error };
        let anyErrorMessage;
        if (null != obj1) {
          anyErrorMessage = obj1.getAnyErrorMessage();
        }
        obj10.children = anyErrorMessage;
        tmp34Result = callback3(importDefault(dependencyMap[21]), obj10);
        const tmp34 = callback3;
        const tmp37 = importDefault(dependencyMap[21]);
      }
    }
    items3[6] = tmp34Result;
    obj.children = items3;
    obj.children = tmp16(tmp17, obj);
    tmp13Result = tmp13(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
    const tmp27 = importDefault(dependencyMap[19]);
  }
  return tmp13Result;
};
