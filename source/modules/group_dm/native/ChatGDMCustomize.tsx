// Module ID: 10162
// Function ID: 78546
// Dependencies: [5, 57, 31, 27, 1348, 33, 4130, 689, 5160, 566, 4320, 5450, 1392, 10163, 4140, 1212, 3831, 7507, 10164, 4660, 4126, 7512, 4543, 10166, 2]

// Module 10162
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ ScrollView: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, alignSelf: "center" };
obj.iconUploader = _createForOfIteratorHelperLoose;
obj.iconClear = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "center" };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "center" };
obj.textInput = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { marginVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.rateLimitedContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8, flexDirection: "row", alignItems: "center" };
obj.rateLimitedText = { fontSize: 12, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { fontSize: 12, color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId) => {
  let c12;
  let tmp23;
  channelId = channelId.channelId;
  const onFinish = channelId.onFinish;
  let callback;
  let ref;
  let first;
  let c6;
  let first1;
  let c8;
  callback = undefined;
  let first2;
  let callback2;
  c12 = undefined;
  let c13;
  const tmp = callback2();
  let obj = channelId(stateFromStores[9]);
  const items = [c8];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getChannel(channelId));
  const tmp2 = onFinish(stateFromStores[10])(stateFromStores);
  let str = "";
  if (null != tmp2) {
    str = tmp2;
  }
  const tmp3 = onFinish(stateFromStores[11])(str);
  callback = tmp3;
  ref = first.useRef(null);
  const tmp5 = ref(first.useState(undefined), 2);
  first = tmp5[0];
  let tmp6 = null != first;
  if (tmp6) {
    tmp6 = first.length > 0;
  }
  if (tmp6) {
    tmp6 = first !== tmp3;
  }
  c6 = tmp6;
  const tmp7 = ref(first.useState(undefined), 2);
  first1 = tmp7[0];
  c8 = tmp9;
  if (first1 !== "CLEARED_ICON") {
    let tmp11 = first1;
    if (null == first1) {
      let icon;
      if (null != stateFromStores) {
        icon = stateFromStores.icon;
      }
      tmp11 = icon;
    }
    const tmp10 = tmp11;
  }
  let isManagedResult;
  if (null != stateFromStores) {
    isManagedResult = stateFromStores.isManaged();
  }
  let tmp15 = tmp14;
  if (true !== isManagedResult) {
    let tmp16 = null != first1 && first1 !== "CLEARED_ICON";
    if (!tmp16) {
      let icon1;
      if (null != stateFromStores) {
        icon1 = stateFromStores.icon;
      }
      tmp16 = null != icon1;
    }
    tmp15 = tmp16;
  }
  const items1 = [stateFromStores, channelId];
  const memo = first.useMemo(() => ({
    makeURL(icon) {
      let applicationId;
      let obj = onFinish(stateFromStores[12]);
      obj = { id: outer1_0, icon };
      if (null != outer1_2) {
        applicationId = outer1_2.getApplicationId();
      }
      obj.applicationId = applicationId;
      obj.size = 64;
      return obj.getChannelIconURL(obj);
    },
    clear() {
      let icon;
      if (null != outer1_2) {
        icon = outer1_2.icon;
      }
      let str;
      if (null != icon) {
        str = "CLEARED_ICON";
      }
      outer1_8(str);
    }
  }), items1);
  const items2 = [tmp6, first1];
  callback = first.useCallback(() => null != first1 || c6, items2);
  const tmp20 = ref(first.useState(null), 2);
  first2 = tmp20[0];
  callback2 = tmp20[1];
  [tmp23, c12] = ref(first.useState(false), 2);
  const tmp24 = onFinish(stateFromStores[13]);
  const tmp24Result = tmp24();
  c13 = tmp24Result;
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [tmp24Result, channelId, first, first1, onFinish];
  const items4 = [tmp3];
  const callback1 = first.useCallback(callback(tmp24), items3);
  const effect = first.useEffect(() => {
    if (null != ref.current) {
      const current = ref.current;
      current.setText(c3);
    }
  }, items4);
  const items5 = [first2];
  const effect1 = first.useEffect(() => {
    if (null != first2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => outer1_11(null), 1000 * first2);
    }
  }, items5);
  const imperativeHandle = first.useImperativeHandle(arg1, () => ({ hasUnsavedChanges: callback }));
  if (null == stateFromStores) {
    obj = { style: tmp.container };
    let tmp51Result = callback(c6, obj);
  } else {
    obj = { style: tmp.container };
    const obj1 = { paddingHorizontal: onFinish(stateFromStores[7]).space.PX_16, paddingBottom: onFinish(stateFromStores[8])({ includeKeyboardHeight: true }).insets.bottom };
    obj.contentContainerStyle = obj1;
    const obj2 = { style: tmp.iconUploader, onUpload: tmp9, icon: tmp10, makeURL: memo.makeURL, disabled: !tmp14 };
    const items6 = [callback(onFinish(stateFromStores[18]), obj2), , , , ];
    let tmp33 = null;
    if (tmp15) {
      const obj3 = { onPress: memo.clear, accessibilityRole: "button" };
      const obj4 = { style: tmp.iconClear, variant: "text-sm/semibold", color: "text-link" };
      const intl = channelId(stateFromStores[15]).intl;
      obj4.children = intl.string(channelId(stateFromStores[15]).t["uY+Nk/"]);
      obj3.children = callback(channelId(stateFromStores[20]).Text, obj4);
      tmp33 = callback(channelId(stateFromStores[19]).PressableOpacity, obj3);
    }
    items6[1] = tmp33;
    const obj5 = { style: tmp.textInput };
    const obj6 = { ref };
    const intl2 = channelId(stateFromStores[15]).intl;
    obj6.label = intl2.string(channelId(stateFromStores[15]).t.GEGW3P);
    obj6.placeholder = str;
    obj6.onChange = tmp5[1];
    obj6.isDisabled = tmp23;
    obj6.isClearable = true;
    obj5.children = callback(channelId(stateFromStores[21]).TextInput, obj6);
    items6[2] = callback(first1, obj5);
    const obj7 = { onPress: callback1 };
    const intl3 = channelId(stateFromStores[15]).intl;
    obj7.text = intl3.string(channelId(stateFromStores[15]).t.K344S7);
    let str3 = "secondary";
    if (callback()) {
      str3 = "primary";
    }
    obj7.variant = str3;
    obj7.disabled = !callback() || null != first2;
    obj7.loading = tmp23;
    items6[3] = callback(channelId(stateFromStores[22]).Button, obj7);
    let tmp39 = null;
    if (null != first2) {
      const obj8 = { style: tmp.rateLimitedContainer };
      const obj9 = { variant: "text-sm/semibold", color: "text-feedback-critical" };
      const intl4 = channelId(stateFromStores[15]).intl;
      obj9.children = intl4.string(channelId(stateFromStores[15]).t.Whhv4w);
      const items7 = [callback(channelId(stateFromStores[20]).Text, obj9), ];
      const obj10 = { style: tmp.rateLimitedText };
      const _Date = Date;
      obj10.deadline = Date.now() + 1000 * first2;
      items7[1] = callback(onFinish(stateFromStores[23]), obj10);
      obj8.children = items7;
      tmp39 = first2(first1, obj8);
      const tmp46 = onFinish(stateFromStores[23]);
    }
    items6[4] = tmp39;
    obj.children = items6;
    tmp51Result = first2(c6, obj);
    const tmp34 = callback;
    const tmp38 = !callback() || null != first2;
    const tmp51 = first2;
    const tmp52 = c6;
  }
  return tmp51Result;
}));
const result = require("result").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default memoResult;
