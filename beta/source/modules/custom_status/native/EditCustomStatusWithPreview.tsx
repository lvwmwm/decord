// Module ID: 10576
// Function ID: 10577
// Name: EditCustomStatusWithPreview
// Dependencies: [32, 19, 17, 1372, 10577, 1074, 1375, 21, 4836, 576, 5435, 1115, 1177, 6359, 10578, 1241, 8819, 504, 10579, 10580, 4685, 10582, 5275, 10583, 6402, 10608, 10384, 4701, 10610, 7288, 5936, 4832, 10353, 8061, 5999, 5917, 4800, 10771, 1981, 10773, 4790, 1365, 1627, 5039, 6421, 2]
// Exports: default

// Module 10576 (EditCustomStatusWithPreview)
import nativeDefault from "native" /* 576 */;
import intl7 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import shared from "shared" /* 4685 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import react_native from "react-native" /* 5275 */;
import Pressables from "Pressables" /* 5435 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import AssetRegistryDefault from "AssetRegistry" /* 6359 */;
import maybeShowDiscardChangesAlertDefault from "maybeShowDiscardChangesAlert" /* 10384 */;
import Constants2 from "Constants" /* 10577 */;
import setCustomStatusDefault from "setCustomStatus" /* 10580 */;
import removeCustomStatusDefault from "removeCustomStatus" /* 10582 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import CustomStatusPreviewDefault from "CustomStatusPreview" /* 10610 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let maxLength;

let Fonts;
let c10;
let c9;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function ClearInputButton(onPress) {
  let Icon;
  let intl;
  let obj2;
  onPress = onPress.onPress;
  const obj = { style: { borderRadius: 10, paddingLeft: 8 }, accessibilityRole: "button", accessibilityLabel: intl.string(intl7.t.VkKicb), onPress, hitSlop: { top: 8, bottom: 8, right: 8 }, children: map1(Icon, obj2) };
  const tmp = closure_15();
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl7.intl;
  obj2 = { source: AssetRegistryDefault, style: tmp.closeIcon, size: native.Icon.Sizes.SMALL };
  Icon = native.Icon;
  return map1(PressableOpacity, obj);
}
function EditCustomStatusWithPreview(navigation) {
  let TableRow;
  let TableRow2;
  let Text;
  let Text2;
  let TrashIcon;
  let closure_8;
  let first;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items12;
  let items13;
  let items14;
  let items7;
  let labelResult;
  let obj11;
  let obj13;
  let obj14;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let obj24;
  let obj9;
  let placeholderText;
  navigation = navigation.navigation;
  const onClose = navigation.onClose;
  const analyticsLocations = navigation.analyticsLocations;
  let _prompt = navigation.prompt;
  let stateFromStores;
  let value;
  let closure_6;
  let first1;
  maxLength = undefined;
  let first2;
  let onChange;
  let c11;
  let callback;
  let ref1;
  let callback2;
  let callback3;
  let ref2;
  let ref;
  let memo;
  let callback7;
  let obj = stateFromStores;
  const useRef = stateFromStores.useRef;
  if (null == _prompt) {
    let tmp = onClose;
    let tmp2 = analyticsLocations;
    _prompt = onClose(analyticsLocations[14])();
  }
  ref = useRef(_prompt);
  const items = [analyticsLocations];
  const effect = obj.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: onChange.EDIT_CUSTOM_STATUS_MODAL_WITH_PREVIEW, location_stack: analyticsLocations };
    obj.track(first2.OPEN_MODAL, obj2);
  }, items);
  const tmp5 = callback3();
  let obj2 = navigation(analyticsLocations[16]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let obj3 = navigation(analyticsLocations[17]);
  const items1 = [first1];
  stateFromStores = obj3.useStateFromStores(items1, () => first1.getCurrentUser());
  let str;
  const useState = obj.useState;
  const tmp11 = onClose(analyticsLocations[18])();
  if (customStatusActivity != null) {
    str = customStatusActivity.state;
  }
  if (str == null) {
    str = "";
  }
  const tmp13 = ref(useState(str), 2);
  value = tmp13[0];
  closure_6 = tmp15;
  let emoji;
  const useState2 = obj.useState;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  if (emoji == null) {
    emoji = null;
  }
  const tmp12Result = ref(useState2(emoji), 2);
  first1 = tmp12Result[0];
  maxLength = tmp19;
  const tmp12Result2 = ref(obj.useState(tmp11), 2);
  first2 = tmp12Result2[0];
  onChange = tmp12Result2[1];
  if (null != ref.current) {
    let current = ref.current;
    labelResult = current.label();
  } else {
    let intl = tmp6(tmp7[11]).intl;
    labelResult = intl.string(tmp6(tmp7[11]).t.xod367);
  }
  c11 = labelResult;
  const items2 = [value, first1, first2, onClose, analyticsLocations];
  callback = obj.useCallback(() => {
    let current;
    const obj = { text, emojiInfo: first1, clearAfter: first2, analyticsLocations, prompt: current };
    current = ref.current;
    const tmp2 = setCustomStatusDefault;
    tmp2(obj);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl7.intl;
    announce(intl.string(intl7.t.Og40Yn));
    onClose();
  }, items2);
  const items3 = [onClose];
  const callback1 = obj.useCallback(() => {
    removeCustomStatusDefault();
    const timerId = setTimeout(() => {
      const AccessibilityAnnouncer = navigation(analyticsLocations[20]).AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = navigation(analyticsLocations[11]).intl;
      announce(intl.string(navigation(analyticsLocations[11]).t.YdUwBS));
    }, 300);
    onClose();
  }, items3);
  ref1 = obj.useRef(null);
  callback2 = obj.useCallback(() => {
    const obj = react_native;
    const obj2 = { ref: ref1, delay: 500 };
    const result = obj.setAccessibilityFocus(obj2);
  }, []);
  const items4 = [callback2];
  callback3 = obj.useCallback((id) => {
    let str2;
    const obj = { id: id.id, name: null, animated: null };
    if (null == id.id) {
      if (null != id.surrogates) {
        if ("" !== id.surrogates) {
          str2 = id.surrogates;
        }
        obj.name = str2;
        obj.animated = id.animated;
        tmp(obj);
        callback2();
      }
    }
    str2 = id.name;
    if (str2 == null) {
      str2 = "";
    }
  }, items4);
  const items5 = [callback3, callback2];
  const items6 = [tmp12Result[1], tmp13[1]];
  const callback4 = obj.useCallback(() => {
    const obj = openEmojiPickerActionSheet;
    const obj2 = { onPressEmoji: callback3, onClose: callback2, pickerIntention: EmojiIntention.STATUS };
    const result = obj.openEmojiPickerActionSheet(obj2);
  }, items5);
  const callback5 = obj.useCallback(() => {
    closure_8(null);
    closure_6("");
  }, items6);
  ref2 = obj.useRef(null);
  const ref3 = obj.useRef(null);
  const insets = tmp10(tmp7[24])({ includeKeyboardHeight: true, isKeyboardAwareOnIOS: false }).insets;
  const obj4 = { insets, inputs: items7, scrollViewRef: ref3 };
  items7 = [{ ref: ref2 }];
  const onFocus = tmp10(tmp7[25])(obj4).onFocus;
  const callback6 = obj.useCallback(() => {
    const current = ref2.current;
    if (current != null) {
      current.blur();
    }
  }, []);
  ref = obj.useRef({ statusText: value, statusEmoji: first1, clearAfter: first2 });
  const items8 = [value, first1, first2];
  memo = obj.useMemo(() => first !== ref.current.statusText || first1 !== tmp.current.statusEmoji || first2 !== tmp.current.clearAfter, items8);
  const items9 = [memo, onClose];
  callback7 = obj.useCallback(() => {
    const obj = { hasEdits: memo, onHasEdits: ChatInputUtils.dismissKeyboard, resetPending: unpackModuleId, onConfirm: onClose };
    const tmp = maybeShowDiscardChangesAlertDefault;
    tmp(obj);
  }, items9);
  const items10 = [stateFromStores, value, first1, labelResult];
  const items11 = [navigation, callback, memo, callback7];
  const memo1 = obj.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { user: tmp, pendingStatusText, pendingStatusEmoji: first1, placeholderText };
      tmp2 = map1(CustomStatusPreviewDefault, obj);
    }
    return tmp2;
  }, items10);
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let intl;
        const obj = { label: intl.string(navigation(analyticsLocations[11]).t["R3BPH+"]), onPress, disabled: !memo };
        const HeaderTextButton = navigation(analyticsLocations[29]).HeaderTextButton;
        intl = navigation(analyticsLocations[11]).intl;
        return ref1(HeaderTextButton, obj);
      },
      headerLeft: obj2.getHeaderCloseButton(callback7)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items11);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp48Result4;
    const obj5 = { style: tmp5.container, children: items12 };
    const obj6 = { style: tmp5.previewContainer, children: memo1 };
    items12 = [ref1(closure_6, obj6), , , ];
    const obj7 = { style: tmp5.statusSection, children: items13 };
    const obj8 = { style: tmp5.statusSectionHeader, children: ref1(Text2, obj9) };
    obj9 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: intl5.string(navigation(analyticsLocations[11]).t.zOdg0A) };
    Text2 = tmp6(tmp7[31]).Text;
    intl5 = tmp6(tmp7[11]).intl;
    items13 = [ref1(closure_6, obj8), ];
    const obj10 = { style: tmp5.statusInput, children: callback2(closure_6, obj11) };
    obj11 = { style: tmp5.statusInputRow, children: items14 };
    const obj12 = { ref: ref1, accessibilityLabel: intl6.string(navigation(analyticsLocations[11]).t.WkfRZP), accessibilityValue: obj13, accessibilityRole: "button", onPress: callback4, children: ref1(onClose(analyticsLocations[32]), obj14) };
    const PressableOpacity = tmp6(tmp7[10]).PressableOpacity;
    intl6 = tmp6(tmp7[11]).intl;
    let name;
    if (first1 != null) {
      name = first1.name;
    }
    obj13 = { text: name };
    obj14 = { emoji: first1, size: 20, style: tmp5.emoji, withPlaceholder: true };
    items14 = [ref1(PressableOpacity, obj12), , ];
    const obj15 = { ref: ref2, maxLength, placeholder: labelResult, placeholderTextColor: tmp5.inputPlaceholder.color, accessibilityLabel: intl2.string(navigation(analyticsLocations[11]).t.xalUlT), onSubmitEditing: callback6, onFocus, style: tmp5.status, value, onChange: tmp13[1], autoCorrect: false, showBorder: false, showTopContainer: false, autoCapitalize: "none", inputTextStyle: tmp5.statusText, multiline: true, submitBehavior: "blurAndSubmit", returnKeyType: "done", autoFocus: true };
    const tmp10Result = onClose(analyticsLocations[33]);
    intl2 = tmp6(tmp7[11]).intl;
    items14[1] = ref1(tmp10Result, obj15);
    let tmp48Result = null != first1;
    if (!tmp48Result) {
      let str2 = "";
      tmp48Result = "" !== value;
    }
    if (tmp48Result) {
      const obj16 = { onPress: callback5 };
      tmp48Result = tmp48(ref2, obj16);
    }
    items14[2] = tmp48Result;
    items13[1] = ref1(closure_6, obj10);
    items12[1] = callback2(closure_6, obj7);
    const obj17 = { hasIcons: false, children: ref1(TableRow, obj18) };
    const TableRowGroup = tmp6(tmp7[34]).TableRowGroup;
    obj18 = {
      label: intl3.string(navigation(analyticsLocations[11]).t["+14vvU"]),
      arrow: true,
      onPress() {
          const obj = ChatInputUtils;
          obj.dismissKeyboard();
          const obj2 = ActionSheetActionCreatorsDefault;
          const obj3 = { initialValue: first2, onChange };
          obj2.openLazy(asyncRequire(10771, dependencyMap.paths), "ClearAfterOptionsActionSheet", obj3);
        },
      trailing: ref1(Text, obj19)
    };
    TableRow = tmp6(tmp7[35]).TableRow;
    intl3 = tmp6(tmp7[11]).intl;
    obj19 = { variant: "text-sm/medium", children: onClose(analyticsLocations[39])(first2) };
    Text = tmp6(tmp7[31]).Text;
    items12[2] = ref1(TableRowGroup, obj17);
    let tmp48Result3 = null != customStatusActivity;
    if (tmp48Result3) {
      const obj20 = { hasIcons: true, children: ref1(TableRow2, obj21) };
      const TableRowGroup2 = tmp6(tmp7[34]).TableRowGroup;
      obj21 = { icon: ref1(TrashIcon, obj22), label: intl4.string(navigation(analyticsLocations[11]).t.wO53tu), onPress: callback1, variant: "danger" };
      TableRow2 = tmp6(tmp7[35]).TableRow;
      obj22 = { color: onClose(analyticsLocations[9]).colors.TEXT_FEEDBACK_CRITICAL };
      TrashIcon = tmp6(tmp7[40]).TrashIcon;
      intl4 = tmp6(tmp7[11]).intl;
      tmp48Result3 = tmp48(TableRowGroup2, obj20);
    }
    items12[3] = tmp48Result3;
    const tmp46Result = callback2(closure_6, obj5);
    const tmp6Result = navigation(analyticsLocations[41]);
    if (tmp6Result.isAndroid()) {
      const obj23 = { ref: ref3, keyboardShouldPersistTaps: "always", contentContainerStyle: obj24, children: tmp46Result };
      obj24 = { paddingBottom: insets.bottom };
      tmp48Result4 = tmp48(value, obj23);
    } else {
      const obj25 = { keyboardShouldPersistTaps: "always", children: tmp46Result };
      tmp48Result4 = tmp48(tmp6(tmp7[42]).KeyboardAwareScrollView, obj25);
    }
    return tmp48Result4;
  }
}
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native2);
const STATUS_MAX_LENGTH = Constants2.STATUS_MAX_LENGTH;
({ AnalyticEvents: c9, AnalyticsSections: c10, NOOP: unpackModuleId, Fonts } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexGrow: 1, padding: 16, rowGap: 24 }, statusSection: { rowGap: 8 }, statusInput: obj2, statusInputRow: { flexDirection: "row", alignItems: "center" }, emoji: { marginRight: 8 }, status: obj3, statusText: obj4, inputPlaceholder: obj5, previewContainer: obj6, closeIcon: obj7, statusSectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } };
obj2 = { flexDirection: "column", rowGap: 4, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 12 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_STRONG, lineHeight: 16, flexGrow: 1, alignSelf: "flex-start", paddingVertical: 0, paddingHorizontal: 0 };
obj4 = { fontSize: 16, fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_STRONG, flexGrow: 1, height: "auto", textAlignVertical: "center" };
obj5 = { color: nativeDefault.colors.TEXT_MUTED };
obj6 = { alignItems: "center" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, flexShrink: 0 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/custom_status/native/EditCustomStatusWithPreview.tsx");

export default function EditCustomStatusWithPreviewModal(analyticsLocations) {
  let obj3;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const _prompt = analyticsLocations.prompt;
  const items = [analyticsLocations, _prompt];
  const memo = react.useMemo(() => {
    let intl;
    let obj2;
    let obj3;
    let obj = { root: obj2 };
    obj2 = {
      title: intl.string(intl7.t.Iuzg8R),
      headerTitle() {
        let intl;
        const obj = { title: intl.string(analyticsLocations(closure_1_2[11]).t.Iuzg8R) };
        const GenericHeaderTitle = analyticsLocations(closure_1_2[29]).GenericHeaderTitle;
        intl = analyticsLocations(closure_1_2[11]).intl;
        return closure_1_13(GenericHeaderTitle, obj);
      },
      headerLeft: obj3.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
      ignoreKeyboard: true,
      render(arg0, navigation) {
        const obj = { navigation, onClose: _prompt(closure_2_2[43]).pop, analyticsLocations, prompt: _prompt };
        return closure_2_13(closure_2_17, obj);
      }
    };
    intl = intl7.intl;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
  let obj = { initialRouteName: "root", screens: memo, headerStatusBarHeight: 12, headerStyle: obj3 };
  const Navigator = analyticsLocations(6421).Navigator;
  let obj2 = analyticsLocations(1365);
  obj3 = undefined;
  const tmp2 = closure_13;
  const tmp3Result = analyticsLocations(1365);
  if (!tmp3Result.isAndroid()) {
    obj3 = { height: 56 };
  }
  return tmp2(Navigator, obj);
};
