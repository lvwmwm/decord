// Module ID: 17708
// Function ID: 17709
// Name: CustomTypingIndicatorEditScreen
// Dependencies: [5, 32, 19, 17, 1385, 1072, 5016, 21, 5170, 575, 5003, 1398, 1113, 4028, 1500, 7420, 1499, 504, 2171, 7445, 17705, 7674, 5000, 1252, 13998, 1407, 6015, 5406, 17709, 2118, 17710, 8842, 8839, 7247, 6611, 16809, 13999, 10060, 14010, 6205, 5783, 17711, 7159, 7071, 2185, 6191, 5790, 9646, 10038, 17756, 10441, 2]
// Exports: default

// Module 17708 (CustomTypingIndicatorEditScreen)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import user from "user" /* 1398 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1407 */;
import Link from "Link" /* 1500 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5000 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7420 */;
import openPremiumModalDefault from "openPremiumModal" /* 10060 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3, c4, constants3;

let c10;
let c9;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function CustomTypingIndicatorEditScreenContent(mode) {
  let TableRow2;
  let TrailingText;
  let TrailingText2;
  let _undefined;
  let c19;
  let closure_4;
  let closure_5;
  let closure_9;
  let first1;
  let first2;
  let first3;
  let fn;
  let format;
  let formatToPlainStringResult;
  let intl;
  let intl11;
  let intl12;
  let intl2;
  let intl6;
  let intl8;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let k6c2yP;
  let obj19;
  let obj20;
  let obj22;
  let obj5;
  let onChange;
  let onChange2;
  let string;
  let string2Result;
  let stringResult;
  let tmp2Result6;
  let tmp33;
  let tmp42Result;
  let tmp7Result4;
  let tmp7Result5;
  mode = mode.mode;
  let analyticsLocations;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_9 = undefined;
  first2 = undefined;
  constants3 = undefined;
  first3 = undefined;
  onChange2 = undefined;
  closure_15 = undefined;
  let memo1;
  closure_17 = undefined;
  c19 = undefined;
  let tmp = closure_15();
  const tmp2 = mode;
  let tmp3 = analyticsLocations;
  let obj = mode(analyticsLocations[16]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = mode(analyticsLocations[17]);
  items = [first1];
  const stateFromStores = obj2.useStateFromStores(items, () => first1.getCurrentUser());
  let tmp7 = nativeStackNavigation;
  let obj3 = nativeStackNavigation(analyticsLocations[18]);
  let result = obj3.canUsePremiumProfileCustomization(stateFromStores);
  const tmp9 = nativeStackNavigation(analyticsLocations[15]);
  analyticsLocations = tmp9(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EDITOR).analyticsLocations;
  const tmp2Result = tmp2(tmp3[20]);
  const enabled = tmp2Result.useCustomTypingIndicatorNewPresetsConfig("CustomTypingIndicatorEditScreen").enabled;
  const tmp2Result4 = tmp2(tmp3[21]);
  const tmp11 = _slicedToArray(tmp2Result4.useSelectedDismissibleContent(enabled ? memo1 : closure_17), 2);
  _slicedToArray = tmp12;
  let tmp42Result2 = tmp11[0] === tmp2(tmp3[10]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_STYLING_BADGE;
  react = tmp42Result2;
  const items1 = [tmp12];
  const callback = react.useCallback(() => {
    closure_4(ContentDismissActionType.TAKE_ACTION);
    const obj = UserSettingsProtoActionCreators;
    obj.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE);
  }, items1);
  const items2 = [analyticsLocations];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location_stack: analyticsLocations };
    obj.track(c9.TYPING_INDICATOR_EDIT_SCREEN_OPENED, obj2);
  }, items2);
  const tmp2Result5 = tmp2(tmp3[24]);
  const first = _slicedToArray(react.useState(tmp2Result5.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  [first1, closure_9] = react.useState(() => {
    let emojis;
    const obj = CustomTypingIndicatorTypes;
    const tmp3 = first;
    if (obj.hasCustomTypingIndicatorEmojis(first.emojis)) {
      emojis = tmp3.emojis;
    } else {
      const _Array = Array;
      const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
      emojis = ArrayResult.fill(null);
    }
    return emojis;
  });
  [first2, constants3] = react.useState(first.typingSuggestion);
  [first3, onChange2] = react.useState(first.animation);
  const items3 = [first1];
  const memo = react.useMemo(() => first1.filter((item) => null != item), items3);
  const tmp23 = memo.length === tmp2(tmp3[25]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  closure_15 = tmp23;
  const items4 = [tmp23, memo, first2, first3];
  memo1 = react.useMemo(() => ({ emojis: closure_15 ? memo : [], typingSuggestion: first2, animation: first3 }), items4);
  const tmp25 = tmp7(tmp3[26])(memo1, first);
  closure_17 = tmp26;
  const items5 = [first2, enabled, tmp42Result2, callback];
  const callback1 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_9((arr) => arr.map((item, index) => {
      let tmp;
      if (index === closure_1_0) {
        tmp = closure_1_1;
      } else {
        tmp = item;
      }
      return tmp;
    }));
  }, []);
  const items6 = [memo, first3];
  const callback2 = react.useCallback(() => {
    let obj2;
    let prop;
    let tmp7;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { initialValue: first2, presets: obj2.getCustomTypingIndicatorSuggestionPresets(enabled), onChange, highlightedPresets: prop, onDismiss: tmp7 };
    ActionSheetActionCreatorsDefault;
    const tmp4 = asyncRequire(17709, dependencyMap.paths);
    prop = undefined;
    obj2 = CustomTypingIndicatorUtils;
    if (closure_5) {
      prop = CustomTypingIndicatorUtils.NEW_TYPING_SUGGESTION_PRESETS;
    }
    tmp7 = undefined;
    if (closure_5) {
      tmp7 = callback;
    }
    openLazy(tmp4, "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items5);
  const callback3 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emojis: memo, initialAnimation: first3, onChange: onChange2 };
    obj.openLazy(asyncRequire(17710, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", obj2);
  }, items6);
  const ref = react.useRef(null);
  const items7 = [analyticsLocations, enabled];
  const items8 = [analyticsLocations];
  const callback4 = react.useCallback(() => {
    if (ref.current == null) {
      const obj = CustomTypingIndicatorUtils;
      ref.current = obj.getSurpriseMeEmojiPool();
    }
    const obj2 = CustomTypingIndicatorUtils;
    closure_9(obj2.pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj3 = CustomTypingIndicatorUtils;
    onChange(obj3.getRandomCustomTypingIndicatorSuggestion(enabled));
    const obj4 = CustomTypingIndicatorUtils;
    onChange2(obj4.getRandomCustomTypingIndicatorAnimation());
    const obj5 = AnalyticsUtilsDefault;
    const obj6 = { location_stack: analyticsLocations };
    obj5.track(c9.TYPING_INDICATOR_STYLE_SURPRISE_ME, obj6);
  }, items7);
  const callback5 = react.useCallback(() => {
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    closure_9(ArrayResult.fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const obj = { location_stack: analyticsLocations };
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(c9.TYPING_INDICATOR_STYLE_REMOVED, obj);
  }, items8);
  [tmp33, c19] = _slicedToArray(react.useState(false), 2);
  const tmp32 = _slicedToArray(react.useState(false), 2);
  let closure_20 = react.useRef(false);
  const items9 = [tmp26, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback6 = react.useCallback(enabled(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj4;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        let v0;
        let firstFieldErrorMessage;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            analyticsLocations = tmp;
            v0 = 0;
            mode = undefined;
            firstFieldErrorMessage = undefined;
            const tmp74 = closure_17;
            if (tmp74) {
              if (!ref.current) {
                let tmp35 = null;
                const tmp31 = v0(analyticsLocations[26]);
                if (!tmp31(memo1, mode(analyticsLocations[25]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp35 = memo1;
                }
                if ("try_it_out" === mode) {
                  const obj9 = mode(analyticsLocations[31]);
                  const result = obj9.setTryItOutCustomTypingIndicatorStyle(tmp35);
                } else if ("profile_pending" === tmp36) {
                  const obj3 = { customTypingIndicatorStyle: tmp35 };
                  const obj7 = mode(analyticsLocations[32]);
                  obj7.setPendingChanges(obj3);
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj5 = { typingIndicatorStyle: tmp35 };
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: obj4.saveProfileAndAccountChanges(obj5), done: false };
                  obj4 = mode(analyticsLocations[33]);
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          mode = value;
          closure_130_20.current = false;
          closure_130_19(false);
          let ok;
          if (mode != null) {
            ok = mode.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != mode) {
              const self = this;
              const self2 = this;
              const aPIError = new mode(analyticsLocations[34]).APIError(mode);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            const tmp19 = mode(analyticsLocations[35]);
            mode = firstFieldErrorMessage;
            const showGenericProfileUpdateFailureToast = tmp19.showGenericProfileUpdateFailureToast;
            if (firstFieldErrorMessage == null) {
              const intl = mode(analyticsLocations[12]).intl;
              mode = intl.string(mode(analyticsLocations[12]).t["84MExs"]);
            }
            const result1 = showGenericProfileUpdateFailureToast(mode);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          }
        }
        const obj12 = { location_stack: closure_130_2 };
        const track = v0(analyticsLocations[23]).track;
        const TYPING_INDICATOR_STYLE_APPLIED = constants.TYPING_INDICATOR_STYLE_APPLIED;
        const tmp51 = v0(analyticsLocations[23]);
        const obj11 = mode(analyticsLocations[36]);
        const merged = Object.assign(obj11.getTypingIndicatorStyleAnalytics(closure_130_16));
        track(TYPING_INDICATOR_STYLE_APPLIED, obj12);
        if (closure_130_1.isFocused()) {
          closure_130_1.goBack();
        }
      } catch (tmp64) {
        c4 = 3;
        throw tmp64;
      }
    }
  }), items9);
  const items10 = [analyticsLocations];
  const tmp36 = memo;
  let obj4 = { style: tmp.screen, children: items16 };
  const container = tmp.container;
  const callback7 = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations };
    obj2 = { section: first2.SETTINGS_TYPING_INDICATOR };
    openPremiumModalDefault(obj);
  }, items10);
  const tmp38 = callback;
  if (tmp25) {
    obj5 = container;
  } else {
    obj5 = { paddingBottom: 90 };
    let merged = Object.assign(container);
  }
  let obj6 = { contentContainerStyle: obj5, children: items11 };
  let obj7 = { style: tmp.previewContainer, children: tmp42Result };
  tmp42Result = null != stateFromStores;
  if (tmp42Result) {
    let obj8 = { username: tmp7Result4.getName(null, null, stateFromStores), config: memo1, justifyCenter: true };
    const tmp7Result = tmp7(tmp3[38]);
    tmp7Result4 = tmp7(tmp3[39]);
    tmp42Result = tmp42(tmp7Result, obj8);
  }
  items11 = [tmp42(tmp37, obj7), , , ];
  let obj9 = { style: tmp.section, children: items12 };
  let obj10 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: intl.string(tmp7(tmp3[13])["l8CZ7+"]) };
  const Text = tmp2(tmp3[40]).Text;
  intl = tmp2(tmp3[12]).intl;
  items12 = [tmp42(Text, obj10), tmp42(tmp7(tmp3[41]), { emojis: first1, onChange: callback1 }), ];
  const TableRowGroup = tmp2(tmp3[42]).TableRowGroup;
  let obj11 = { label: intl2.string(tmp7(tmp3[13]).iVKTbA), arrow: true, disabled: !tmp23, trailing: tmp42(TrailingText, { text: stringResult }), onPress: callback3 };
  const TableRow = tmp2(tmp3[43]).TableRow;
  intl2 = tmp2(tmp3[12]).intl;
  TrailingText = tmp2(tmp3[43]).TableRow.TrailingText;
  if (tmp2(tmp3[11]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[12]).intl;
    stringResult = intl5.string(tmp7(tmp3[13])["gyL/ce"]);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[12]).intl;
    stringResult = intl4.string(tmp7(tmp3[13]).EgekTm);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[12]).intl;
    stringResult = intl3.string(tmp7(tmp3[13])["8t5EiI"]);
  } else if (tmp2(tmp3[11]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl14 = tmp2(tmp3[12]).intl;
    stringResult = intl14.string(tmp2(tmp3[12]).t.PoWNfe);
  }
  let obj12 = { hasIcons: false, children: tmp42(TableRow, obj11) };
  items12[2] = onChange2(TableRowGroup, obj12);
  items11[1] = tmp36(first, obj9);
  const obj13 = { style: tmp.section, children: items14 };
  const obj14 = { style: tmp.sectionHeader, children: items13 };
  const obj15 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: intl6.string(tmp7(tmp3[13]).BGCQqw) };
  const Text2 = tmp2(tmp3[40]).Text;
  intl6 = tmp2(tmp3[12]).intl;
  items13 = [tmp42(Text2, obj15), ];
  if (tmp42Result2) {
    const obj16 = { variant: "body-sm/semibold", color: "text-brand", children: formatToPlainStringResult.toLocaleUpperCase(tmp2(tmp3[12]).intl.currentLocale) };
    const Text3 = tmp2(tmp3[40]).Text;
    const intl7 = tmp2(tmp3[12]).intl;
    const formatToPlainString = intl7.formatToPlainString;
    const obj17 = { count: tmp2(tmp3[24]).NEW_TYPING_SUGGESTION_PRESETS.length };
    const uL4ClK = tmp2(tmp3[12]).t.uL4ClK;
    formatToPlainStringResult = formatToPlainString(uL4ClK, obj17);
    tmp42Result2 = tmp42(Text3, obj16);
  }
  items13[1] = tmp42Result2;
  items14 = [tmp36(tmp37, obj14), , ];
  const obj18 = { hasIcons: false, children: onChange2(TableRow2, obj19) };
  const TableRowGroup2 = tmp2(tmp3[42]).TableRowGroup;
  obj19 = { label: intl8.string(tmp7(tmp3[13])["X+ijyw"]), arrow: true, trailing: onChange2(TrailingText2, obj20), onPress: callback2 };
  TableRow2 = tmp2(tmp3[43]).TableRow;
  intl8 = tmp2(tmp3[12]).intl;
  obj20 = { text: string(tmp2Result6.getCustomTypingIndicatorSuggestionMessage(first2)) };
  TrailingText2 = tmp2(tmp3[43]).TableRow.TrailingText;
  const intl9 = tmp2(tmp3[12]).intl;
  string = intl9.string;
  tmp2Result6 = tmp2(tmp3[24]);
  items14[1] = onChange2(TableRowGroup2, obj18);
  const obj21 = { style: tmp.description, variant: "body-xs/normal", color: "text-muted", includeFontPadding: true, children: format(k6c2yP, obj22) };
  const Text4 = tmp2(tmp3[40]).Text;
  const intl10 = tmp2(tmp3[12]).intl;
  format = intl10.format;
  obj22 = { helpCenterUrl: tmp7Result5.getArticleURL(constants3.CUSTOM_TYPING_INDICATOR) };
  k6c2yP = tmp7(tmp3[13]).k6c2yP;
  tmp7Result5 = tmp7(tmp3[44]);
  items14[2] = onChange2(Text4, obj21);
  items11[2] = tmp36(first, obj13);
  const obj23 = { spacing: 8, children: items15 };
  const Stack = tmp2(tmp3[45]).Stack;
  const obj24 = { variant: "secondary", size: "lg", icon: onChange2(tmp2(tmp3[47]).DiceIcon, {}), text: intl11.string(tmp7(tmp3[13]).q4045h), onPress: callback4 };
  const Button = tmp2(tmp3[46]).Button;
  intl11 = tmp2(tmp3[12]).intl;
  items15 = [tmp42(Button, obj24), ];
  const obj25 = { variant: "secondary", size: "lg", icon: onChange2(tmp2(tmp3[48]).DenyIcon, {}), text: intl12.string(tmp7(tmp3[13])["UnIf+S"]), onPress: callback5 };
  const Button2 = tmp2(tmp3[46]).Button;
  intl12 = tmp2(tmp3[12]).intl;
  items15[1] = onChange2(Button2, obj25);
  items11[3] = tmp36(Stack, obj23);
  items16 = [tmp36(tmp38, obj6), ];
  const obj26 = { visible: !tmp25, disabled: tmp33, loading: tmp33, text: string2Result, onPress: callback6, renderButton: fn };
  const tmp7Result6 = tmp7(tmp3[49]);
  const intl13 = tmp2(tmp3[12]).intl;
  const string2 = intl13.string;
  if (!result && "try_it_out" !== mode) {
    string2Result = string2(tmp2(tmp3[12]).t.pj0XBN);
  } else {
    string2Result = string2(tmp7(tmp3[13])["6ZxPAQ"]);
  }
  if (!result && "try_it_out" !== mode) {
    callback6 = callback7;
  }
  fn = undefined;
  if (!result && "try_it_out" !== mode) {
    fn = (arg0) => {
      let onPress;
      let text;
      ({ text, onPress } = arg0);
      return onChange2(nativeStackNavigation(analyticsLocations[50]), { text, onPress });
    };
  }
  items16[1] = onChange2(tmp7Result6, obj26);
  return tmp36(first, obj4);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1 }, container: obj2, previewContainer: obj3, section: obj4, sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, description: obj5 };
obj2 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { rowGap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
let items = [dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_STYLING_BADGE];
let closure_17 = [];
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default function CustomTypingIndicatorEditScreen() {
  let analyticsLocations;
  let mode;
  const obj = Link;
  let params = obj.useRoute().params;
  if (params == null) {
    params = {};
  }
  ({ analyticsLocations, mode } = params);
  const tmpResult = useAnalyticsLocations;
  const locationStackFromLocationContext = tmpResult.useLocationStackFromLocationContext();
  const AnalyticsLocationProvider = tmp(7420).AnalyticsLocationProvider;
  if (analyticsLocations == null) {
    analyticsLocations = locationStackFromLocationContext;
  }
  const obj2 = { value: analyticsLocations, children: map1(CustomTypingIndicatorEditScreenContent, { mode }) };
  return map1(AnalyticsLocationProvider, obj2);
};
