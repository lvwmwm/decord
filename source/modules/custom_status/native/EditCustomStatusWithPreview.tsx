// Module ID: 11880
// Function ID: 91982
// Name: ClearInputButton
// Dependencies: []
// Exports: default

// Module 11880 (ClearInputButton)
function ClearInputButton(onPress) {
  let obj = { style: { -1604933020: true, 1289705979: true }, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[11]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[11]).t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = {};
  obj = { source: importDefault(dependencyMap[13]), style: callback3().closeIcon, size: arg1(dependencyMap[12]).Icon.Sizes.SMALL };
  obj.children = callback2(arg1(dependencyMap[12]).Icon, obj);
  return callback2(arg1(dependencyMap[10]).PressableOpacity, obj);
}
function EditCustomStatusWithPreview(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  const onClose = navigation.onClose;
  const importDefault = onClose;
  const analyticsLocations = navigation.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let _prompt = navigation.prompt;
  let callback;
  let React;
  let View;
  let closure_6;
  let STATUS_MAX_LENGTH;
  let tmp20;
  let first2;
  let closure_10;
  let EmojiIntention;
  callback = undefined;
  let ref1;
  let callback3;
  let ClearInputButton;
  let EditCustomStatusWithPreview;
  let closure_17;
  let memo;
  let callback7;
  if (null == _prompt) {
    _prompt = importDefault(dependencyMap[14])();
  }
  const ref = React.useRef(_prompt);
  callback = ref;
  const items = [analyticsLocations];
  const effect = React.useEffect(() => {
    let obj = onClose(analyticsLocations[15]);
    obj = { type: first2.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(tmp20.OPEN_MODAL, obj);
  }, items);
  const tmp6 = callback3();
  let obj = arg1(dependencyMap[16]);
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = arg1(dependencyMap[17]);
  const items1 = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items1, () => tmp14.getCurrentUser());
  React = stateFromStores;
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let str = "";
  if (null != state) {
    str = state;
  }
  const tmp12 = callback(React.useState(str), 2);
  const first = tmp12[0];
  View = first;
  closure_6 = tmp14;
  let emoji;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  let tmp17 = null;
  if (null != emoji) {
    tmp17 = emoji;
  }
  const tmp18 = callback(React.useState(tmp17), 2);
  const first1 = tmp18[0];
  STATUS_MAX_LENGTH = first1;
  tmp20 = tmp18[1];
  const tmp21 = callback(React.useState(importDefault(dependencyMap[18])()), 2);
  first2 = tmp21[0];
  closure_10 = tmp21[1];
  if (null != ref.current) {
    const current = ref.current;
    let labelResult = current.label();
  } else {
    const intl = arg1(dependencyMap[11]).intl;
    labelResult = intl.string(arg1(dependencyMap[11]).t.xod367);
  }
  EmojiIntention = labelResult;
  const items2 = [first, first1, first2, onClose, analyticsLocations];
  callback = React.useCallback(() => {
    const obj = { text: first, emojiInfo: first1, clearAfter: first2, analyticsLocations };
    const current = ref.current;
    let tmp2;
    if (null != current) {
      tmp2 = current;
    }
    obj.prompt = tmp2;
    onClose(analyticsLocations[19])(obj);
    const AccessibilityAnnouncer = navigation(analyticsLocations[20]).AccessibilityAnnouncer;
    const intl = navigation(analyticsLocations[11]).intl;
    AccessibilityAnnouncer.announce(intl.string(navigation(analyticsLocations[11]).t.Og40Yn));
    onClose();
  }, items2);
  const items3 = [onClose];
  const callback1 = React.useCallback(() => {
    onClose(analyticsLocations[21])();
    const AccessibilityAnnouncer = navigation(analyticsLocations[20]).AccessibilityAnnouncer;
    const intl = navigation(analyticsLocations[11]).intl;
    AccessibilityAnnouncer.announce(intl.string(navigation(analyticsLocations[11]).t.YdUwBS));
    onClose();
  }, items3);
  ref1 = React.useRef(null);
  const callback2 = React.useCallback(() => {
    let obj = navigation(analyticsLocations[22]);
    obj = { ref: ref1, delay: 500 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  callback3 = callback2;
  const items4 = [callback2];
  callback3 = React.useCallback((id) => {
    const obj = { id: id.id };
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          let str2 = id.surrogates;
        }
        obj.name = str2;
        obj.animated = id.animated;
        tmp(obj);
        callback2();
      }
    }
    const name = id.name;
    str2 = "";
    if (null != name) {
      str2 = name;
    }
  }, items4);
  ClearInputButton = callback3;
  const items5 = [callback3, callback2];
  const items6 = [tmp20, tmp12[1]];
  const callback4 = React.useCallback(() => {
    let obj = navigation(analyticsLocations[23]);
    obj = { onPressEmoji: callback3, onClose: callback2, pickerIntention: labelResult.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items5);
  const callback5 = React.useCallback(() => {
    tmp20(null);
    tmp14("");
  }, items6);
  const ref2 = React.useRef(null);
  EditCustomStatusWithPreview = ref2;
  const callback6 = React.useCallback(() => {
    const current = ref2.current;
    if (null != current) {
      current.blur();
    }
  }, []);
  closure_17 = React.useRef({ statusText: first, statusEmoji: first1, clearAfter: first2 });
  const items7 = [first, first1, first2];
  memo = React.useMemo(() => {
    let tmp = first !== ref.current.statusText;
    if (!tmp) {
      tmp = first1 !== ref.current.statusEmoji;
    }
    if (!tmp) {
      tmp = first2 !== ref.current.clearAfter;
    }
    return tmp;
  }, items7);
  const items8 = [memo, onClose];
  callback7 = React.useCallback(() => {
    const obj = { hasEdits: memo, onHasEdits: navigation(analyticsLocations[25]).dismissKeyboard, resetPending: closure_10, onConfirm: onClose };
    onClose(analyticsLocations[24])(obj);
  }, items8);
  const items9 = [stateFromStores, first, first1, labelResult];
  const items10 = [navigation, callback, memo, callback7];
  const memo1 = React.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { user: stateFromStores, pendingStatusText: first, pendingStatusEmoji: first1, placeholderText: labelResult };
      tmp = callback(onClose(analyticsLocations[26]), obj);
    }
    return tmp;
  }, items9);
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerRight() {
        const obj = {};
        const intl = callback(closure_2[11]).intl;
        obj.label = intl.string(callback(closure_2[11]).t.R3BPH+);
        obj.onPress = callback2;
        obj.disabled = !closure_18;
        return callback2(callback(closure_2[27]).HeaderTextButton, obj);
      },
      headerLeft: navigation(analyticsLocations[28]).getHeaderCloseButton(callback7)
    };
    navigation.setOptions(obj);
  }, items10);
  let tmp40Result = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "always" };
    obj = { style: tmp6.container };
    obj1 = { style: tmp6.previewContainer, children: memo1 };
    const items11 = [callback(View, obj1), , , ];
    const obj2 = { style: tmp6.statusSection };
    const obj3 = { style: tmp6.statusSectionHeader };
    const obj4 = {};
    const intl2 = arg1(dependencyMap[11]).intl;
    obj4.children = intl2.string(arg1(dependencyMap[11]).t.zOdg0A);
    obj3.children = callback(arg1(dependencyMap[30]).Text, obj4);
    const items12 = [callback(View, obj3), ];
    const obj5 = { style: tmp6.statusInput };
    const obj6 = { style: tmp6.statusInputRow };
    const obj7 = { ref: ref1 };
    const intl3 = arg1(dependencyMap[11]).intl;
    obj7.accessibilityLabel = intl3.string(arg1(dependencyMap[11]).t.WkfRZP);
    const obj8 = {};
    let name;
    if (null != first1) {
      name = first1.name;
    }
    obj8.text = name;
    obj7.accessibilityValue = obj8;
    obj7.accessibilityRole = "button";
    obj7.onPress = callback4;
    const obj9 = { emoji: first1, size: 20, style: tmp6.emoji, withPlaceholder: true };
    obj7.children = callback(importDefault(dependencyMap[31]), obj9);
    const items13 = [callback(arg1(dependencyMap[10]).PressableOpacity, obj7), , ];
    const obj10 = { ref: ref2, maxLength: STATUS_MAX_LENGTH, placeholder: labelResult, placeholderTextColor: tmp6.inputPlaceholder.color };
    const intl4 = arg1(dependencyMap[11]).intl;
    obj10.accessibilityLabel = intl4.string(arg1(dependencyMap[11]).t.xalUlT);
    obj10.onSubmitEditing = callback6;
    obj10.style = tmp6.status;
    obj10.value = first;
    obj10.onChange = tmp14;
    obj10.autoCorrect = false;
    obj10.showBorder = false;
    obj10.showTopContainer = false;
    obj10.autoCapitalize = "none";
    obj10.inputTextStyle = tmp6.statusText;
    obj10.multiline = true;
    obj10.submitBehavior = "blurAndSubmit";
    obj10.returnKeyType = "done";
    obj10.autoFocus = true;
    items13[1] = callback(importDefault(dependencyMap[32]), obj10);
    let tmp65 = null != first1 || "" !== first;
    if (tmp65) {
      const obj11 = { onPress: callback5 };
      tmp65 = callback(ClearInputButton, obj11);
    }
    items13[2] = tmp65;
    obj6.children = items13;
    obj5.children = ref1(View, obj6);
    items12[1] = callback(View, obj5);
    obj2.children = items12;
    items11[1] = ref1(View, obj2);
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl5 = arg1(dependencyMap[11]).intl;
    obj13.label = intl5.string(arg1(dependencyMap[11]).t.+14vvU);
    obj13.arrow = true;
    obj13.onPress = function onPress() {
      let obj = navigation(analyticsLocations[25]);
      obj.dismissKeyboard();
      obj = { initialValue: first2, onChange: closure_10 };
      onClose(analyticsLocations[35]).openLazy(navigation(analyticsLocations[37])(analyticsLocations[36], analyticsLocations.paths), "ClearAfterOptionsActionSheet", obj);
    };
    const obj14 = { variant: "text-sm/medium", children: importDefault(dependencyMap[38])(first2) };
    obj13.trailing = callback(arg1(dependencyMap[30]).Text, obj14);
    obj12.children = callback(arg1(dependencyMap[34]).TableRow, obj13);
    items11[2] = callback(arg1(dependencyMap[33]).TableRowGroup, obj12);
    let tmp74 = null != customStatusActivity;
    if (tmp74) {
      const obj15 = { hasIcons: true };
      const obj16 = {};
      const obj17 = { color: importDefault(dependencyMap[9]).colors.TEXT_FEEDBACK_CRITICAL };
      obj16.icon = callback(arg1(dependencyMap[39]).TrashIcon, obj17);
      const intl6 = arg1(dependencyMap[11]).intl;
      obj16.label = intl6.string(arg1(dependencyMap[11]).t.wO53tu);
      obj16.onPress = callback1;
      obj16.variant = "danger";
      obj15.children = callback(arg1(dependencyMap[34]).TableRow, obj16);
      tmp74 = callback(arg1(dependencyMap[33]).TableRowGroup, obj15);
    }
    items11[3] = tmp74;
    obj.children = items11;
    obj.children = ref1(View, obj);
    tmp40Result = callback(arg1(dependencyMap[29]).KeyboardAwareScrollView, obj);
    const tmp40 = callback;
    const tmp43 = ref1;
    const tmp44 = View;
    const tmp47 = ref1;
    const tmp48 = View;
    const tmp52 = callback;
    const tmp53 = View;
    const tmp54 = ref1;
    const tmp55 = View;
    const tmp56 = callback;
    const tmp62 = importDefault(dependencyMap[32]);
  }
  return tmp40Result;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const STATUS_MAX_LENGTH = arg1(dependencyMap[4]).STATUS_MAX_LENGTH;
const tmp2 = arg1(dependencyMap[5]);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, NOOP: closure_10 } = tmp2);
const EmojiIntention = arg1(dependencyMap[6]).EmojiIntention;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: {}, statusSection: { rowGap: 8 } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[9]).radii.lg };
obj.statusInput = obj;
obj.statusInputRow = { -9223372036854775808: true, filter: true };
obj.emoji = { marginRight: 8 };
const obj1 = { "Null": "message", "Null": "row", "Null": 16, "Null": 24, "Null": "center", "Null": null, color: importDefault(dependencyMap[9]).colors.TEXT_STRONG };
obj.status = obj1;
const obj2 = { paddingHorizontal: "flex-end", ti: "center", category: "row", r: 0, op: -127.334, ddd: 10, context: "absolute", fontFamily: tmp2.Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[9]).colors.TEXT_STRONG };
obj.statusText = obj2;
const tmp3 = arg1(dependencyMap[7]);
obj.inputPlaceholder = { color: importDefault(dependencyMap[9]).colors.TEXT_MUTED };
const merged = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_LOW);
obj.previewContainer = { alignItems: "center" };
const obj3 = { color: importDefault(dependencyMap[9]).colors.TEXT_MUTED };
const obj4 = { alignItems: "center" };
obj.closeIcon = { tintColor: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
obj.statusSectionHeader = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
let closure_14 = obj.createStyles(obj);
const obj5 = { tintColor: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const arg1 = analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const importDefault = _prompt;
  const items = [analyticsLocations, _prompt];
  const memo = React.useMemo(() => function getScreens(analyticsLocations, _prompt) {
    let obj = {};
    obj = {};
    const intl = analyticsLocations(closure_2[11]).intl;
    obj.title = intl.string(analyticsLocations(closure_2[11]).t.Iuzg8R);
    obj.headerTitle = function headerTitle() {
      const obj = {};
      const intl = arg0(closure_2[11]).intl;
      obj.title = intl.string(arg0(closure_2[11]).t.Iuzg8R);
      return callback(arg0(closure_2[27]).GenericHeaderTitle, obj);
    };
    obj.headerLeft = analyticsLocations(closure_2[28]).getHeaderCloseButton(_prompt(closure_2[40]).pop);
    obj.ignoreKeyboard = true;
    obj.render = function render(arg0, navigation) {
      return callback(closure_16, { navigation, onClose: navigation(closure_2[40]).pop, analyticsLocations: arg0, prompt: navigation });
    };
    obj.root = obj;
    return obj;
  }(analyticsLocations, _prompt), items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: 12 };
  const obj2 = arg1(dependencyMap[42]);
  const tmp2 = closure_12;
  let tmp3;
  if (!obj3.isAndroid()) {
    obj = { height: 56 };
    tmp3 = obj;
  }
  obj.headerStyle = tmp3;
  return tmp2(arg1(dependencyMap[41]).Navigator, obj);
};
