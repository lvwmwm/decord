// Module ID: 11900
// Function ID: 92084
// Name: ClearInputButton
// Dependencies: [57, 31, 27, 1849, 11901, 653, 1852, 33, 4130, 689, 4660, 1212, 1273, 9003, 11902, 675, 8239, 566, 11903, 11904, 3976, 11906, 4539, 9326, 9111, 3989, 11907, 9122, 5087, 1571, 4126, 9087, 7503, 5503, 5165, 4098, 11910, 1934, 11912, 4089, 4337, 5519, 478, 2]
// Exports: default

// Module 11900 (ClearInputButton)
import _slicedToArray from "_slicedToArray";
import ActivityEmoji from "ActivityEmoji";
import { View } from "GenericHeaderTitle";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { STATUS_MAX_LENGTH } from "StatusTypes";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "TableRowGroupTitle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function ClearInputButton(onPress) {
  let obj = { style: { borderRadius: 10, paddingLeft: 8 }, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.VkKicb);
  obj.onPress = onPress.onPress;
  obj.hitSlop = { top: 8, bottom: 8, right: 8 };
  obj = { source: importDefault(9003), style: _createForOfIteratorHelperLoose().closeIcon, size: require(1273) /* Button */.Icon.Sizes.SMALL };
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
    obj = { type: first2.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(_undefined2.OPEN_MODAL, obj);
  }, items);
  const tmp6 = callback2();
  let obj = navigation(analyticsLocations[16]);
  const customStatusActivity = obj.useCustomStatusActivity();
  let obj1 = navigation(analyticsLocations[17]);
  const items1 = [c6];
  stateFromStores = obj1.useStateFromStores(items1, () => _undefined.getCurrentUser());
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
    obj = { onPressEmoji: callback3, onClose: callback2, pickerIntention: _undefined3.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items5);
  const callback5 = stateFromStores.useCallback(() => {
    _undefined2(null);
    _undefined("");
  }, items6);
  ref2 = stateFromStores.useRef(null);
  const callback6 = stateFromStores.useCallback(() => {
    const current = ref2.current;
    if (null != current) {
      current.blur();
    }
  }, []);
  closure_17 = stateFromStores.useRef({ statusText: first, statusEmoji: first1, clearAfter: first2 });
  const items7 = [first, first1, first2];
  memo = stateFromStores.useMemo(() => {
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
  callback7 = stateFromStores.useCallback(() => {
    const obj = { hasEdits: memo, onHasEdits: navigation(analyticsLocations[25]).dismissKeyboard, resetPending: closure_10, onConfirm: onClose };
    onClose(analyticsLocations[24])(obj);
  }, items8);
  const items9 = [stateFromStores, first, first1, labelResult];
  const items10 = [navigation, callback, memo, callback7];
  const memo1 = stateFromStores.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { user: stateFromStores, pendingStatusText: first, pendingStatusEmoji: first1, placeholderText: c11 };
      tmp = callback(onClose(analyticsLocations[26]), obj);
    }
    return tmp;
  }, items9);
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = {};
        const intl = navigation(analyticsLocations[11]).intl;
        obj.label = intl.string(navigation(analyticsLocations[11]).t["R3BPH+"]);
        obj.onPress = outer1_12;
        obj.disabled = !outer1_18;
        return callback(navigation(analyticsLocations[27]).HeaderTextButton, obj);
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
    const items11 = [callback(first, obj1), , , ];
    const obj2 = { style: tmp6.statusSection };
    const obj3 = { style: tmp6.statusSectionHeader };
    const obj4 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default" };
    const intl2 = navigation(analyticsLocations[11]).intl;
    obj4.children = intl2.string(navigation(analyticsLocations[11]).t.zOdg0A);
    obj3.children = callback(navigation(analyticsLocations[30]).Text, obj4);
    const items12 = [callback(first, obj3), ];
    const obj5 = { style: tmp6.statusInput };
    const obj6 = { style: tmp6.statusInputRow };
    const obj7 = { ref: ref1 };
    const intl3 = navigation(analyticsLocations[11]).intl;
    obj7.accessibilityLabel = intl3.string(navigation(analyticsLocations[11]).t.WkfRZP);
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
    obj7.children = callback(onClose(analyticsLocations[31]), obj9);
    const items13 = [callback(navigation(analyticsLocations[10]).PressableOpacity, obj7), , ];
    const obj10 = { ref: ref2, maxLength: first1, placeholder: labelResult, placeholderTextColor: tmp6.inputPlaceholder.color };
    const intl4 = navigation(analyticsLocations[11]).intl;
    obj10.accessibilityLabel = intl4.string(navigation(analyticsLocations[11]).t.xalUlT);
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
    items13[1] = callback(onClose(analyticsLocations[32]), obj10);
    let tmp65 = null != first1 || "" !== first;
    if (tmp65) {
      const obj11 = { onPress: callback5 };
      tmp65 = callback(callback3, obj11);
    }
    items13[2] = tmp65;
    obj6.children = items13;
    obj5.children = ref1(first, obj6);
    items12[1] = callback(first, obj5);
    obj2.children = items12;
    items11[1] = ref1(first, obj2);
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl5 = navigation(analyticsLocations[11]).intl;
    obj13.label = intl5.string(navigation(analyticsLocations[11]).t["+14vvU"]);
    obj13.arrow = true;
    obj13.onPress = function onPress() {
      let obj = navigation(analyticsLocations[25]);
      obj.dismissKeyboard();
      obj = { initialValue: first2, onChange: closure_10 };
      onClose(analyticsLocations[35]).openLazy(navigation(analyticsLocations[37])(analyticsLocations[36], analyticsLocations.paths), "ClearAfterOptionsActionSheet", obj);
    };
    const obj14 = { variant: "text-sm/medium", children: onClose(analyticsLocations[38])(first2) };
    obj13.trailing = callback(navigation(analyticsLocations[30]).Text, obj14);
    obj12.children = callback(navigation(analyticsLocations[34]).TableRow, obj13);
    items11[2] = callback(navigation(analyticsLocations[33]).TableRowGroup, obj12);
    let tmp74 = null != customStatusActivity;
    if (tmp74) {
      const obj15 = { hasIcons: true };
      const obj16 = {};
      const obj17 = { color: onClose(analyticsLocations[9]).colors.TEXT_FEEDBACK_CRITICAL };
      obj16.icon = callback(navigation(analyticsLocations[39]).TrashIcon, obj17);
      const intl6 = navigation(analyticsLocations[11]).intl;
      obj16.label = intl6.string(navigation(analyticsLocations[11]).t.wO53tu);
      obj16.onPress = callback1;
      obj16.variant = "danger";
      obj15.children = callback(navigation(analyticsLocations[34]).TableRow, obj16);
      tmp74 = callback(navigation(analyticsLocations[33]).TableRowGroup, obj15);
    }
    items11[3] = tmp74;
    obj.children = items11;
    obj.children = ref1(first, obj);
    tmp40Result = callback(navigation(analyticsLocations[29]).KeyboardAwareScrollView, obj);
    const tmp40 = callback;
    const tmp43 = ref1;
    const tmp44 = first;
    const tmp47 = ref1;
    const tmp48 = first;
    const tmp52 = callback;
    const tmp53 = first;
    const tmp54 = ref1;
    const tmp55 = first;
    const tmp56 = callback;
    const tmp62 = onClose(analyticsLocations[32]);
  }
  return tmp40Result;
}
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, NOOP: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
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
      return outer3_12(analyticsLocations(outer3_2[27]).GenericHeaderTitle, obj);
    };
    obj.headerLeft = analyticsLocations(outer2_2[28]).getHeaderCloseButton(_prompt(outer2_2[40]).pop);
    obj.ignoreKeyboard = true;
    obj.render = function render(arg0, navigation) {
      return outer3_12(outer3_16, { navigation, onClose: _prompt(outer3_2[40]).pop, analyticsLocations: closure_0, prompt: closure_1 });
    };
    obj.root = obj;
    return obj;
  })(analyticsLocations, _prompt), items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: 12 };
  const obj2 = analyticsLocations(478);
  const tmp2 = closure_12;
  let tmp3;
  if (!obj3.isAndroid()) {
    obj = { height: 56 };
    tmp3 = obj;
  }
  obj.headerStyle = tmp3;
  return tmp2(analyticsLocations(5519).Navigator, obj);
};
