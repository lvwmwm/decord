// Module ID: 11780
// Function ID: 91425
// Name: ChannelPrompt
// Dependencies: [5, 57, 31, 27, 1907, 1838, 33, 4130, 5084, 566, 1456, 5087, 1212, 4140, 4029, 5121, 5515, 1392, 4126, 9000, 4543, 9004, 2]
// Exports: default

// Module 11780 (ChannelPrompt)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
({ ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
_createForOfIteratorHelperLoose.safePadding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.guildIcon = { alignSelf: "center" };
_createForOfIteratorHelperLoose.guildName = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.title = { marginTop: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.subTitle = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.topicInput = { marginTop: 24 };
_createForOfIteratorHelperLoose.buttonWrapper = { marginTop: 8 };
_createForOfIteratorHelperLoose.error = { marginTop: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/nuf/native/components/ChannelPrompt.tsx");

export default function ChannelPrompt(guildId) {
  let closure_6;
  let closure_7;
  let obj2;
  let tmp7;
  guildId = guildId.guildId;
  const hasBack = guildId.hasBack;
  const hasSkip = guildId.hasSkip;
  const onCancel = guildId.onCancel;
  const onSuccess = guildId.onSuccess;
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = guildId(hasSkip[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getGuild(guildId));
  const tmp4 = onSuccess(first.useState(""), 2);
  first = tmp4[0];
  [tmp7, closure_6] = onSuccess(first.useState(false), 2);
  const tmp6 = onSuccess(first.useState(false), 2);
  [obj2, closure_7] = onSuccess(first.useState(null), 2);
  obj2 = guildId(hasSkip[10]);
  const navigation = obj2.useNavigation();
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = first.useLayoutEffect(() => {
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
      let fn2 = guildId(hasSkip[11]).getHeaderTextButton(intl.string(guildId(hasSkip[12]).t["5Wxrcd"]), onSuccess);
      const obj3 = guildId(hasSkip[11]);
    } else {
      fn2 = () => null;
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [guildId, onSuccess, first];
  const callback = first.useCallback(onCancel(tmp), items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { top: true, style: tmp2.safePadding };
    obj = { style: tmp2.flex, contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    const obj1 = { top: 0 };
    obj.contentInset = obj1;
    obj.contentContainerStyle = tmp2.contentContainer;
    obj2 = { style: tmp2.guildIcon, value: stateFromStores.name };
    let guildIconURL = null;
    if (null != stateFromStores.icon) {
      let obj7 = hasBack(hasSkip[17]);
      let obj3 = {};
      ({ id: obj9.id, icon: obj9.icon } = stateFromStores);
      obj3.canAnimate = true;
      obj3.size = 128;
      guildIconURL = obj7.getGuildIconURL(obj3);
    }
    obj2.icon = guildIconURL;
    obj2.selected = true;
    const items3 = [callback(hasBack(hasSkip[16]), obj2), , , , , , ];
    const obj4 = { style: tmp2.guildName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items3[1] = callback(guildId(hasSkip[18]).Text, obj4);
    const obj5 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    let intl = guildId(hasSkip[12]).intl;
    obj5.children = intl.string(guildId(hasSkip[12]).t["8VRa7d"]);
    items3[2] = callback(guildId(hasSkip[18]).Text, obj5);
    const obj6 = { style: tmp2.subTitle, variant: "text-sm/medium", color: "text-default" };
    const intl2 = guildId(hasSkip[12]).intl;
    obj6.children = intl2.string(guildId(hasSkip[12]).t["+855Pm"]);
    items3[3] = callback(guildId(hasSkip[18]).Text, obj6);
    obj7 = { style: tmp2.topicInput };
    const tmp16 = closure_11;
    const tmp17 = closure_6;
    const tmp19 = hasBack(hasSkip[16]);
    const tmp23 = callback;
    const intl3 = guildId(hasSkip[12]).intl;
    obj7.label = intl3.string(guildId(hasSkip[12]).t.bY20tU);
    obj7.value = first;
    let firstFieldErrorMessage;
    if (null != obj1) {
      firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
    }
    obj7.error = firstFieldErrorMessage;
    obj7.onChangeText = tmp4[1];
    obj7.onSubmitEditing = callback;
    obj7.maxLength = 100;
    const intl4 = guildId(hasSkip[12]).intl;
    obj7.placeholder = intl4.string(guildId(hasSkip[12]).t.xGOYA8);
    obj7.returnKeyType = "done";
    obj7.autoFocus = true;
    items3[4] = tmp23(hasBack(hasSkip[19]), obj7);
    const obj8 = { style: tmp2.buttonWrapper };
    const obj9 = { size: "md", text: guildId.buttonText, onPress: callback, loading: tmp7, disabled: tmp7, grow: true };
    obj8.children = callback(guildId(hasSkip[20]).Button, obj9);
    items3[5] = callback(closure_7, obj8);
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
        tmp34Result = callback(hasBack(hasSkip[21]), obj10);
        const tmp34 = callback;
        const tmp37 = hasBack(hasSkip[21]);
      }
    }
    items3[6] = tmp34Result;
    obj.children = items3;
    obj.children = tmp16(tmp17, obj);
    tmp13Result = tmp13(guildId(hasSkip[15]).SafeAreaPaddingView, obj);
    const tmp27 = hasBack(hasSkip[19]);
  }
  return tmp13Result;
};
