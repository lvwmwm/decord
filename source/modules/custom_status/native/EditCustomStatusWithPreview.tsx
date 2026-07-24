// Module ID: 11927
// Function ID: 92322
// Name: ClearInputButton
// Dependencies: [57, 31, 27, 1849, 11928, 653, 1852, 33, 4130, 689, 4660, 1212, 1273, 9042, 11929, 675, 8283, 566, 11930, 11931, 3976, 11933, 4539, 9362, 5160, 9862, 9147, 3989, 11934, 9158, 5087, 4126, 9125, 7644, 5501, 5165, 4098, 11937, 1934, 11939, 4089, 478, 1571, 4337, 5517, 2]
// Exports: default

// Module 11927 (ClearInputButton)
import _slicedToArray from "_slicedToArray";
import Text from "Text";
import get_ActivityIndicator from "getHighestActiveScreenIndex";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { STATUS_MAX_LENGTH } from "StatusTypes";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "module_7644";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function ClearInputButton(onPress) {
  let obj = { style: { borderRadius: 10, paddingLeft: 8 }, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  obj = { source: importDefault(9042), style: _createForOfIteratorHelperLoose().closeIcon, size: require(1273) /* Button */.Icon.Sizes.SMALL };
  obj.children = callback(require(1273) /* Button */.Icon, obj);
  return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
}
function EditCustomStatusWithPreview(navigation) {
  navigation = navigation.navigation;
  const onClose = navigation.onClose;
  const analyticsLocations = navigation.analyticsLocations;
  let _prompt = navigation.prompt;
  let ref;
  let stateFromStores;
  let first;
  let c6;
  let first1;
  let c8;
  let first2;
  let closure_10;
  let c11;
  let callback;
  let ref1;
  let callback2;
  let callback3;
  let ref2;
  let closure_17;
  let memo;
  let callback7;
  if (null == _prompt) {
    _prompt = onClose(analyticsLocations[14])();
  }
  ref = stateFromStores.useRef(_prompt);
  const items = [analyticsLocations];
  const effect = stateFromStores.useEffect(() => {
    let obj = onClose(analyticsLocations[15]);
    obj = { type: constants.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(first2.OPEN_MODAL, obj);
  }, items);
  const tmp6 = callback3();
  let obj = navigation(analyticsLocations[16]);
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = navigation(analyticsLocations[17]);
  const items1 = [first1];
  stateFromStores = obj1.useStateFromStores(items1, () => first1.getCurrentUser());
  let state;
  if (null != customStatusActivity) {
    state = customStatusActivity.state;
  }
  let str = "";
  if (null != state) {
    str = state;
  }
  const tmp12 = ref(stateFromStores.useState(str), 2);
  first = tmp12[0];
  c6 = tmp14;
  let emoji;
  if (null != customStatusActivity) {
    emoji = customStatusActivity.emoji;
  }
  let tmp17 = null;
  if (null != emoji) {
    tmp17 = emoji;
  }
  const tmp18 = ref(stateFromStores.useState(tmp17), 2);
  first1 = tmp18[0];
  c8 = tmp20;
  const tmp21 = ref(stateFromStores.useState(onClose(analyticsLocations[18])()), 2);
  first2 = tmp21[0];
  closure_10 = tmp21[1];
  if (null != ref.current) {
    let current = ref.current;
    let labelResult = current.label();
  } else {
    let intl = navigation(analyticsLocations[11]).intl;
    labelResult = intl.string(navigation(analyticsLocations[11]).t.xod367);
  }
  c11 = labelResult;
  const items2 = [first, first1, first2, onClose, analyticsLocations];
  callback = stateFromStores.useCallback(() => {
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
  const callback1 = stateFromStores.useCallback(() => {
    onClose(analyticsLocations[21])();
    const AccessibilityAnnouncer = navigation(analyticsLocations[20]).AccessibilityAnnouncer;
    const intl = navigation(analyticsLocations[11]).intl;
    AccessibilityAnnouncer.announce(intl.string(navigation(analyticsLocations[11]).t.YdUwBS));
    onClose();
  }, items3);
  ref1 = stateFromStores.useRef(null);
  callback2 = stateFromStores.useCallback(() => {
    let obj = navigation(analyticsLocations[22]);
    obj = { ref: ref1, delay: 500 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  const items4 = [callback2];
  callback3 = stateFromStores.useCallback((id) => {
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
  const items5 = [callback3, callback2];
  const items6 = [tmp18[1], tmp12[1]];
  const callback4 = stateFromStores.useCallback(() => {
    let obj = navigation(analyticsLocations[23]);
    obj = { onPressEmoji: callback3, onClose: callback2, pickerIntention: callback.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items5);
  const callback5 = stateFromStores.useCallback(() => {
    _undefined2(null);
    _undefined("");
  }, items6);
  ref2 = stateFromStores.useRef(null);
  const ref3 = stateFromStores.useRef(null);
  const insets = onClose(analyticsLocations[24])({ includeKeyboardHeight: true, isKeyboardAwareOnIOS: false }).insets;
  const items7 = [{ ref: ref2 }];
  const callback6 = stateFromStores.useCallback(() => {
    const current = ref2.current;
    if (null != current) {
      current.blur();
    }
  }, []);
  closure_17 = stateFromStores.useRef({ statusText: first, statusEmoji: first1, clearAfter: first2 });
  const items8 = [first, first1, first2];
  memo = stateFromStores.useMemo(() => {
    let tmp = first !== ref.current.statusText;
    if (!tmp) {
      tmp = first1 !== ref.current.statusEmoji;
    }
    if (!tmp) {
      tmp = first2 !== ref.current.clearAfter;
    }
    return tmp;
  }, items8);
  const items9 = [memo, onClose];
  callback7 = stateFromStores.useCallback(() => {
    const obj = { hasEdits: memo, onHasEdits: navigation(analyticsLocations[27]).dismissKeyboard, resetPending: c11, onConfirm: onClose };
    onClose(analyticsLocations[26])(obj);
  }, items9);
  const items10 = [stateFromStores, first, first1, labelResult];
  const items11 = [navigation, callback, memo, callback7];
  const memo1 = stateFromStores.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { user: stateFromStores, pendingStatusText: first, pendingStatusEmoji: first1, placeholderText: c11 };
      tmp = ref1(onClose(analyticsLocations[28]), obj);
    }
    return tmp;
  }, items10);
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = {};
        const intl = navigation(analyticsLocations[11]).intl;
        obj.label = intl.string(navigation(analyticsLocations[11]).t["R3BPH+"]);
        obj.onPress = outer1_12;
        obj.disabled = !outer1_18;
        return ref1(navigation(analyticsLocations[29]).HeaderTextButton, obj);
      },
      headerLeft: navigation(analyticsLocations[30]).getHeaderCloseButton(callback7)
    };
    navigation.setOptions(obj);
  }, items11);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: tmp6.container };
    obj = { style: tmp6.previewContainer, children: memo1 };
    const items12 = [ref1(c6, obj), , , ];
    obj1 = { style: tmp6.statusSection };
    const obj2 = { style: tmp6.statusSectionHeader };
    const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default" };
    const intl5 = navigation(analyticsLocations[11]).intl;
    obj3.children = intl5.string(navigation(analyticsLocations[11]).t.zOdg0A);
    obj2.children = ref1(navigation(analyticsLocations[31]).Text, obj3);
    const items13 = [ref1(c6, obj2), ];
    const obj4 = { style: tmp6.statusInput };
    const obj5 = { style: tmp6.statusInputRow };
    const obj6 = { ref: ref1 };
    const intl6 = navigation(analyticsLocations[11]).intl;
    obj6.accessibilityLabel = intl6.string(navigation(analyticsLocations[11]).t.WkfRZP);
    const obj7 = {};
    let name;
    if (null != first1) {
      name = first1.name;
    }
    obj7.text = name;
    obj6.accessibilityValue = obj7;
    obj6.accessibilityRole = "button";
    obj6.onPress = callback4;
    const obj8 = { emoji: first1, size: 20, style: tmp6.emoji, withPlaceholder: true };
    obj6.children = ref1(onClose(analyticsLocations[32]), obj8);
    const items14 = [ref1(navigation(analyticsLocations[10]).PressableOpacity, obj6), , ];
    const obj9 = { ref: ref2, maxLength: c8, placeholder: labelResult, placeholderTextColor: tmp6.inputPlaceholder.color };
    const intl2 = navigation(analyticsLocations[11]).intl;
    obj9.accessibilityLabel = intl2.string(navigation(analyticsLocations[11]).t.xalUlT);
    obj9.onSubmitEditing = callback6;
    obj9.onFocus = onClose(analyticsLocations[25])({ insets, inputs: items7, scrollViewRef: ref3 }).onFocus;
    obj9.style = tmp6.status;
    obj9.value = first;
    obj9.onChange = tmp14;
    obj9.autoCorrect = false;
    obj9.showBorder = false;
    obj9.showTopContainer = false;
    obj9.autoCapitalize = "none";
    obj9.inputTextStyle = tmp6.statusText;
    obj9.multiline = true;
    obj9.submitBehavior = "blurAndSubmit";
    obj9.returnKeyType = "done";
    obj9.autoFocus = true;
    items14[1] = ref1(onClose(analyticsLocations[33]), obj9);
    let tmp48 = null != first1 || "" !== first;
    if (tmp48) {
      const obj10 = { onPress: callback5 };
      tmp48 = ref1(ref2, obj10);
    }
    items14[2] = tmp48;
    obj5.children = items14;
    obj4.children = callback2(c6, obj5);
    items13[1] = ref1(c6, obj4);
    obj1.children = items13;
    items12[1] = callback2(c6, obj1);
    let obj11 = { hasIcons: false };
    const obj12 = {};
    const intl3 = navigation(analyticsLocations[11]).intl;
    obj12.label = intl3.string(navigation(analyticsLocations[11]).t["+14vvU"]);
    obj12.arrow = true;
    obj12.onPress = function onPress() {
      let obj = navigation(analyticsLocations[27]);
      obj.dismissKeyboard();
      obj = { initialValue: first2, onChange: closure_10 };
      onClose(analyticsLocations[36]).openLazy(navigation(analyticsLocations[38])(analyticsLocations[37], analyticsLocations.paths), "ClearAfterOptionsActionSheet", obj);
    };
    const obj13 = { variant: "text-sm/medium", children: onClose(analyticsLocations[39])(first2) };
    obj12.trailing = ref1(navigation(analyticsLocations[31]).Text, obj13);
    obj11.children = ref1(navigation(analyticsLocations[35]).TableRow, obj12);
    items12[2] = ref1(navigation(analyticsLocations[34]).TableRowGroup, obj11);
    let tmp57 = null != customStatusActivity;
    if (tmp57) {
      const obj14 = { hasIcons: true };
      const obj15 = {};
      const obj16 = { color: onClose(analyticsLocations[9]).colors.TEXT_FEEDBACK_CRITICAL };
      obj15.icon = ref1(navigation(analyticsLocations[40]).TrashIcon, obj16);
      const intl4 = navigation(analyticsLocations[11]).intl;
      obj15.label = intl4.string(navigation(analyticsLocations[11]).t.wO53tu);
      obj15.onPress = callback1;
      obj15.variant = "danger";
      obj14.children = ref1(navigation(analyticsLocations[35]).TableRow, obj15);
      tmp57 = ref1(navigation(analyticsLocations[34]).TableRowGroup, obj14);
    }
    items12[3] = tmp57;
    obj.children = items12;
    const tmp72Result = callback2(c6, obj);
    obj11 = navigation(analyticsLocations[41]);
    if (obj11.isAndroid()) {
      const obj17 = { ref: ref3, keyboardShouldPersistTaps: "always" };
      const obj18 = { paddingBottom: insets.bottom };
      obj17.contentContainerStyle = obj18;
      obj17.children = tmp72Result;
      let tmp67Result = tmp67(first, obj17);
    } else {
      const obj19 = { keyboardShouldPersistTaps: "always", children: tmp72Result };
      tmp67Result = tmp67(navigation(analyticsLocations[42]).KeyboardAwareScrollView, obj19);
    }
    return tmp67Result;
  }
  const tmp9 = onClose(analyticsLocations[18])();
}
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_9, AnalyticsSections: closure_10, NOOP: closure_11 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flexGrow: 1, padding: 16, rowGap: 24 }, statusSection: { rowGap: 8 } };
_createForOfIteratorHelperLoose = { flexDirection: "column", rowGap: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: 12 };
_createForOfIteratorHelperLoose.statusInput = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.statusInputRow = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.emoji = { marginRight: 8 };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
_createForOfIteratorHelperLoose.status = obj1;
let obj2 = { fontSize: 16, lineHeight: 20, fontFamily: ME.Fonts.PRIMARY_MEDIUM, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
_createForOfIteratorHelperLoose.statusText = obj2;
_createForOfIteratorHelperLoose.inputPlaceholder = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.previewContainer = { alignItems: "center" };
let obj3 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj4 = { alignItems: "center" };
_createForOfIteratorHelperLoose.closeIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
_createForOfIteratorHelperLoose.statusSectionHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const items = [analyticsLocations, _prompt];
  const memo = React.useMemo(() => (function getScreens(analyticsLocations, _prompt) {
    let closure_0 = analyticsLocations;
    let closure_1 = _prompt;
    let obj = {};
    obj = {};
    let intl = analyticsLocations(outer2_2[11]).intl;
    obj.title = intl.string(analyticsLocations(outer2_2[11]).t.Iuzg8R);
    obj.headerTitle = function headerTitle() {
      const obj = {};
      const intl = analyticsLocations(outer3_2[11]).intl;
      obj.title = intl.string(analyticsLocations(outer3_2[11]).t.Iuzg8R);
      return outer3_13(analyticsLocations(outer3_2[29]).GenericHeaderTitle, obj);
    };
    obj.headerLeft = analyticsLocations(outer2_2[30]).getHeaderCloseButton(_prompt(outer2_2[43]).pop);
    obj.ignoreKeyboard = true;
    obj.render = function render(arg0, navigation) {
      return outer3_13(outer3_17, { navigation, onClose: _prompt(outer3_2[43]).pop, analyticsLocations: closure_0, prompt: closure_1 });
    };
    obj.root = obj;
    return obj;
  })(analyticsLocations, _prompt), items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: 12 };
  const obj2 = analyticsLocations(478);
  const tmp2 = closure_13;
  let tmp3;
  if (!obj3.isAndroid()) {
    obj = { height: 56 };
    tmp3 = obj;
  }
  obj.headerStyle = tmp3;
  return tmp2(analyticsLocations(5517).Navigator, obj);
};
