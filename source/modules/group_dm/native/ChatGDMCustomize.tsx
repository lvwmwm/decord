// Module ID: 10153
// Function ID: 78482
// Dependencies: []

// Module 10153
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ ScrollView: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.container = obj;
obj1 = { marginTop: importDefault(dependencyMap[7]).space.PX_24, alignSelf: "center" };
obj.iconUploader = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.iconClear = { marginTop: importDefault(dependencyMap[7]).space.PX_8, alignSelf: "center" };
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, alignSelf: "center" };
obj.textInput = { marginVertical: importDefault(dependencyMap[7]).space.PX_16 };
const obj3 = { marginVertical: importDefault(dependencyMap[7]).space.PX_16 };
obj.rateLimitedContainer = { marginTop: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8, flexDirection: "row", alignItems: "center" };
const obj4 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8, flexDirection: "row", alignItems: "center" };
obj.rateLimitedText = { fontSize: 12, color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL };
let closure_11 = obj1.createStyles(obj);
const obj5 = { fontSize: 12, color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId) => {
  let tmp23;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const onFinish = channelId.onFinish;
  const importDefault = onFinish;
  let callback;
  let callback2;
  let importAllResult;
  let tmp6;
  let first1;
  let closure_8;
  callback = undefined;
  let first2;
  let callback3;
  let closure_12;
  let tmp24Result;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => tmp9.getChannel(channelId));
  const dependencyMap = stateFromStores;
  const tmp2 = importDefault(dependencyMap[10])(stateFromStores);
  let str = "";
  if (null != tmp2) {
    str = tmp2;
  }
  const tmp3 = importDefault(dependencyMap[11])(str);
  callback = tmp3;
  const ref = importAllResult.useRef(null);
  callback2 = ref;
  const tmp5 = callback2(importAllResult.useState(undefined), 2);
  const first = tmp5[0];
  importAllResult = first;
  tmp6 = null != first;
  if (tmp6) {
    tmp6 = first.length > 0;
  }
  if (tmp6) {
    tmp6 = first !== tmp3;
  }
  const tmp7 = callback2(importAllResult.useState(undefined), 2);
  first1 = tmp7[0];
  closure_8 = tmp9;
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
  const memo = importAllResult.useMemo(() => ({
    makeURL(icon) {
      let applicationId;
      let obj = callback(applicationId[12]);
      obj = { id: closure_0, icon };
      if (null != applicationId) {
        applicationId = applicationId.getApplicationId();
      }
      obj.applicationId = applicationId;
      obj.size = 64;
      return obj.getChannelIconURL(obj);
    },
    clear() {
      let icon;
      if (null != applicationId) {
        icon = applicationId.icon;
      }
      let str;
      if (null != icon) {
        str = "CLEARED_ICON";
      }
      closure_8(str);
    }
  }), items1);
  const items2 = [tmp6, first1];
  callback = importAllResult.useCallback(() => null != first1 || tmp6, items2);
  const tmp20 = callback2(importAllResult.useState(null), 2);
  first2 = tmp20[0];
  callback3 = tmp20[1];
  [tmp23, closure_12] = callback2(importAllResult.useState(false), 2);
  const tmp24 = importDefault(dependencyMap[13]);
  tmp24Result = tmp24();
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [tmp24Result, channelId, first, first1, onFinish];
  const items4 = [tmp3];
  const callback1 = importAllResult.useCallback(callback(tmp24), items3);
  const effect = importAllResult.useEffect(() => {
    if (null != ref.current) {
      const current = ref.current;
      current.setText(tmp3);
    }
  }, items4);
  const items5 = [first2];
  const effect1 = importAllResult.useEffect(() => {
    if (null != first2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(null), 1000 * first2);
    }
  }, items5);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ hasUnsavedChanges: callback }));
  if (null == stateFromStores) {
    obj = { style: tmp.container };
    let tmp51Result = callback(tmp6, obj);
  } else {
    obj = { style: tmp.container };
    const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[8])({ includeKeyboardHeight: true }).insets.bottom };
    obj.contentContainerStyle = obj1;
    const obj2 = { style: tmp.iconUploader, onUpload: tmp9, icon: tmp10, makeURL: memo.makeURL, disabled: !tmp14 };
    const items6 = [callback(importDefault(dependencyMap[18]), obj2), , , , ];
    let tmp33 = null;
    if (tmp15) {
      const obj3 = { onPress: memo.clear, accessibilityRole: "button" };
      const obj4 = { "Null": false, "Null": false, "Null": false, style: tmp.iconClear };
      const intl = arg1(dependencyMap[15]).intl;
      obj4.children = intl.string(arg1(dependencyMap[15]).t.uY+Nk/);
      obj3.children = callback(arg1(dependencyMap[20]).Text, obj4);
      tmp33 = callback(arg1(dependencyMap[19]).PressableOpacity, obj3);
    }
    items6[1] = tmp33;
    const obj5 = { style: tmp.textInput };
    const obj6 = { ref };
    const intl2 = arg1(dependencyMap[15]).intl;
    obj6.label = intl2.string(arg1(dependencyMap[15]).t.GEGW3P);
    obj6.placeholder = str;
    obj6.onChange = tmp5[1];
    obj6.isDisabled = tmp23;
    obj6.isClearable = true;
    obj5.children = callback(arg1(dependencyMap[21]).TextInput, obj6);
    items6[2] = callback(first1, obj5);
    const obj7 = { onPress: callback1 };
    const intl3 = arg1(dependencyMap[15]).intl;
    obj7.text = intl3.string(arg1(dependencyMap[15]).t.K344S7);
    let str3 = "secondary";
    if (callback()) {
      str3 = "primary";
    }
    obj7.variant = str3;
    obj7.disabled = !callback() || null != first2;
    obj7.loading = tmp23;
    items6[3] = callback(arg1(dependencyMap[22]).Button, obj7);
    let tmp39 = null;
    if (null != first2) {
      const obj8 = { style: tmp.rateLimitedContainer };
      const obj9 = {};
      const intl4 = arg1(dependencyMap[15]).intl;
      obj9.children = intl4.string(arg1(dependencyMap[15]).t.Whhv4w);
      const items7 = [callback(arg1(dependencyMap[20]).Text, obj9), ];
      const obj10 = { style: tmp.rateLimitedText };
      const _Date = Date;
      obj10.deadline = Date.now() + 1000 * first2;
      items7[1] = callback(importDefault(dependencyMap[23]), obj10);
      obj8.children = items7;
      tmp39 = first2(first1, obj8);
      const tmp46 = importDefault(dependencyMap[23]);
    }
    items6[4] = tmp39;
    obj.children = items6;
    tmp51Result = first2(tmp6, obj);
    const tmp34 = callback;
    const tmp38 = !callback() || null != first2;
    const tmp51 = first2;
    const tmp52 = tmp6;
  }
  return tmp51Result;
}));
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default memoResult;
