// Module ID: 17613
// Function ID: 17614
// Name: CustomTypingIndicatorEditScreen
// Dependencies: [5, 32, 19, 17, 1385, 1072, 5016, 21, 5170, 575, 5003, 1398, 1113, 4026, 1500, 7410, 1499, 504, 2171, 7435, 17610, 7664, 1252, 13940, 1407, 6010, 5404, 17614, 2118, 17615, 8830, 8827, 7239, 6604, 16721, 13941, 10043, 13952, 6199, 5781, 17616, 7151, 7063, 2185, 6185, 5788, 9631, 10021, 17661, 10426, 2]
// Exports: default

// Module 17613 (CustomTypingIndicatorEditScreen)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import user from "user" /* 1398 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1407 */;
import Link from "Link" /* 1500 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7410 */;
import openPremiumModalDefault from "openPremiumModal" /* 10043 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 13940 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3, c4;

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
  let c18;
  let closure_4;
  let closure_5;
  let currentUser;
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
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
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
  let tmp32;
  let tmp41Result;
  let tmp7Result4;
  let tmp7Result5;
  mode = mode.mode;
  let analyticsLocations;
  _slicedToArray = undefined;
  first1 = undefined;
  currentUser = undefined;
  first2 = undefined;
  onChange = undefined;
  first3 = undefined;
  onChange2 = undefined;
  let memo1;
  let closure_16;
  let ref;
  c18 = undefined;
  let tmp = memo1();
  const tmp2 = mode;
  let tmp3 = analyticsLocations;
  let obj = mode(analyticsLocations[16]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = mode(analyticsLocations[17]);
  items = [currentUser];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = nativeStackNavigation(analyticsLocations[18]);
  let result = obj3.canUsePremiumProfileCustomization(stateFromStores);
  const tmp9 = nativeStackNavigation(analyticsLocations[15]);
  analyticsLocations = tmp9(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EDITOR).analyticsLocations;
  const tmp2Result = tmp2(tmp3[20]);
  const enabled = tmp2Result.useCustomTypingIndicatorNewPresetsConfig("CustomTypingIndicatorEditScreen").enabled;
  const tmp2Result4 = tmp2(tmp3[21]);
  const tmp11 = _slicedToArray(tmp2Result4.useSelectedDismissibleContent(enabled ? closure_16 : ref), 2);
  _slicedToArray = tmp12;
  let tmp41Result2 = tmp11[0] === tmp2(tmp3[10]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_STYLING_BADGE;
  react = tmp41Result2;
  const items1 = [analyticsLocations];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location_stack: analyticsLocations };
    obj.track(first2.TYPING_INDICATOR_EDIT_SCREEN_OPENED, obj2);
  }, items1);
  const tmp2Result5 = tmp2(tmp3[23]);
  const first = _slicedToArray(react.useState(tmp2Result5.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  [first1, currentUser] = react.useState(() => {
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
  [first2, onChange] = react.useState(first.typingSuggestion);
  [first3, onChange2] = react.useState(first.animation);
  const items2 = [first1];
  const memo = react.useMemo(() => first1.filter((item) => null != item), items2);
  const tmp22 = memo.length === tmp2(tmp3[24]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  let closure_14 = tmp22;
  const items3 = [tmp22, memo, first2, first3];
  memo1 = react.useMemo(() => ({ emojis: closure_14 ? memo : [], typingSuggestion: first2, animation: first3 }), items3);
  const tmp24 = nativeStackNavigation(tmp3[25])(memo1, first);
  closure_16 = tmp25;
  const items4 = [first2, enabled, tmp41Result2, tmp12];
  const callback = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = currentUser((arr) => arr.map((item, index) => {
      let tmp;
      if (index === closure_1_0) {
        tmp = closure_1_1;
      } else {
        tmp = item;
      }
      return tmp;
    }));
  }, []);
  const items5 = [memo, first3];
  const callback1 = react.useCallback(() => {
    let fn;
    let obj2;
    let prop;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { initialValue: first2, presets: obj2.getCustomTypingIndicatorSuggestionPresets(enabled), onChange, highlightedPresets: prop, onDismiss: fn };
    ActionSheetActionCreatorsDefault;
    const tmp4 = asyncRequire(17614, dependencyMap.paths);
    prop = undefined;
    obj2 = CustomTypingIndicatorUtils;
    if (closure_5) {
      prop = CustomTypingIndicatorUtils.NEW_TYPING_SUGGESTION_PRESETS;
    }
    fn = undefined;
    if (closure_5) {
      fn = () => closure_1_4(constants.TAKE_ACTION);
    }
    openLazy(tmp4, "CustomTypingIndicatorTypingSuggestionPickerSheet", obj);
  }, items4);
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emojis: memo, initialAnimation: first3, onChange: onChange2 };
    obj.openLazy(asyncRequire(17615, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", obj2);
  }, items5);
  ref = react.useRef(null);
  const items6 = [analyticsLocations, enabled];
  const items7 = [analyticsLocations];
  const callback3 = react.useCallback(() => {
    if (ref.current == null) {
      const obj = CustomTypingIndicatorUtils;
      ref.current = obj.getSurpriseMeEmojiPool();
    }
    const obj2 = CustomTypingIndicatorUtils;
    currentUser(obj2.pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj3 = CustomTypingIndicatorUtils;
    onChange(obj3.getRandomCustomTypingIndicatorSuggestion(enabled));
    const obj4 = CustomTypingIndicatorUtils;
    onChange2(obj4.getRandomCustomTypingIndicatorAnimation());
    const obj5 = AnalyticsUtilsDefault;
    const obj6 = { location_stack: analyticsLocations };
    obj5.track(first2.TYPING_INDICATOR_STYLE_SURPRISE_ME, obj6);
  }, items6);
  const callback4 = react.useCallback(() => {
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    currentUser(ArrayResult.fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const obj = { location_stack: analyticsLocations };
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(first2.TYPING_INDICATOR_STYLE_REMOVED, obj);
  }, items7);
  let tmp31 = _slicedToArray(react.useState(false), 2);
  [tmp32, c18] = tmp31;
  let closure_19 = react.useRef(false);
  const items8 = [tmp25, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback5 = react.useCallback(enabled(function*(arg0, value) {
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
        return { value: "HermesInternal", done: null };
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
            const tmp74 = closure_16;
            if (tmp74) {
              if (!ref.current) {
                let tmp35 = null;
                const tmp31 = v0(analyticsLocations[25]);
                if (!tmp31(memo1, mode(analyticsLocations[24]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp35 = memo1;
                }
                if ("try_it_out" === mode) {
                  const obj9 = mode(analyticsLocations[30]);
                  const result = obj9.setTryItOutCustomTypingIndicatorStyle(tmp35);
                } else if ("profile_pending" === tmp36) {
                  const obj3 = { customTypingIndicatorStyle: tmp35 };
                  const obj7 = mode(analyticsLocations[31]);
                  obj7.setPendingChanges(obj3);
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj5 = { typingIndicatorStyle: tmp35 };
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: obj4.saveProfileAndAccountChanges(obj5), done: false };
                  obj4 = mode(analyticsLocations[32]);
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
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
          closure_130_19.current = false;
          closure_130_18(false);
          let ok;
          if (mode != null) {
            ok = mode.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != mode) {
              const self = this;
              const self2 = this;
              const aPIError = new mode(analyticsLocations[33]).APIError(mode);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            const tmp19 = mode(analyticsLocations[34]);
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
        const track = v0(analyticsLocations[22]).track;
        const TYPING_INDICATOR_STYLE_APPLIED = constants.TYPING_INDICATOR_STYLE_APPLIED;
        const tmp51 = v0(analyticsLocations[22]);
        const obj11 = mode(analyticsLocations[35]);
        const merged = Object.assign(obj11.getTypingIndicatorStyleAnalytics(closure_130_15));
        track(TYPING_INDICATOR_STYLE_APPLIED, obj12);
        if (closure_130_1.isFocused()) {
          closure_130_1.goBack();
        }
      } catch (tmp64) {
        c4 = 3;
        throw tmp64;
      }
    }
  }), items8);
  const items9 = [analyticsLocations];
  let tmp35 = closure_14;
  const tmp36 = first1;
  let obj4 = { style: tmp.screen, children: items15 };
  const container = tmp.container;
  const callback6 = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations };
    obj2 = { section: onChange.SETTINGS_TYPING_INDICATOR };
    openPremiumModalDefault(obj);
  }, items9);
  const tmp37 = first;
  if (tmp24) {
    obj5 = container;
  } else {
    obj5 = { paddingBottom: 90 };
    let merged = Object.assign(container);
  }
  let obj6 = { contentContainerStyle: obj5, children: items10 };
  let obj7 = { style: tmp.previewContainer, children: tmp41Result };
  tmp41Result = null != stateFromStores;
  if (tmp41Result) {
    let obj8 = { username: tmp7Result4.getName(null, null, stateFromStores), config: memo1, justifyCenter: true };
    const tmp7Result = nativeStackNavigation(tmp3[37]);
    tmp7Result4 = nativeStackNavigation(tmp3[38]);
    tmp41Result = tmp41(tmp7Result, obj8);
  }
  items10 = [tmp41(tmp36, obj7), , , ];
  let obj9 = { style: tmp.section, children: items11 };
  let obj10 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: intl.string(tmp7(tmp3[13])["l8CZ7+"]) };
  const Text = tmp2(tmp3[39]).Text;
  intl = tmp2(tmp3[12]).intl;
  items11 = [tmp41(Text, obj10), tmp41(tmp7(tmp3[40]), { emojis: first1, onChange: callback }), ];
  const TableRowGroup = tmp2(tmp3[41]).TableRowGroup;
  let obj11 = { label: intl2.string(tmp7(tmp3[13]).iVKTbA), arrow: true, disabled: !tmp22, trailing: tmp41(TrailingText, { text: stringResult }), onPress: callback2 };
  const TableRow = tmp2(tmp3[42]).TableRow;
  intl2 = tmp2(tmp3[12]).intl;
  TrailingText = tmp2(tmp3[42]).TableRow.TrailingText;
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
  let obj12 = { hasIcons: false, children: tmp41(TableRow, obj11) };
  items11[2] = memo(TableRowGroup, obj12);
  items10[1] = tmp35(tmp36, obj9);
  const obj13 = { style: tmp.section, children: items13 };
  const obj14 = { style: tmp.sectionHeader, children: items12 };
  const obj15 = { accessibilityRole: "header", variant: "body-sm/semibold", color: "text-default", children: intl6.string(nativeStackNavigation(tmp3[13]).BGCQqw) };
  const Text2 = tmp2(tmp3[39]).Text;
  intl6 = tmp2(tmp3[12]).intl;
  items12 = [tmp41(Text2, obj15), ];
  if (tmp41Result2) {
    const obj16 = { variant: "body-sm/semibold", color: "text-brand", children: formatToPlainStringResult.toLocaleUpperCase(tmp2(tmp3[12]).intl.currentLocale) };
    const Text3 = tmp2(tmp3[39]).Text;
    const intl7 = tmp2(tmp3[12]).intl;
    const formatToPlainString = intl7.formatToPlainString;
    const obj17 = { count: tmp2(tmp3[23]).NEW_TYPING_SUGGESTION_PRESETS.length };
    const uL4ClK = tmp2(tmp3[12]).t.uL4ClK;
    formatToPlainStringResult = formatToPlainString(uL4ClK, obj17);
    tmp41Result2 = tmp41(Text3, obj16);
  }
  items12[1] = tmp41Result2;
  items13 = [tmp35(tmp36, obj14), , ];
  const obj18 = { hasIcons: false, children: memo(TableRow2, obj19) };
  const TableRowGroup2 = tmp2(tmp3[41]).TableRowGroup;
  obj19 = { label: intl8.string(nativeStackNavigation(tmp3[13])["X+ijyw"]), arrow: true, trailing: memo(TrailingText2, obj20), onPress: callback1 };
  TableRow2 = tmp2(tmp3[42]).TableRow;
  intl8 = tmp2(tmp3[12]).intl;
  obj20 = { text: string(tmp2Result6.getCustomTypingIndicatorSuggestionMessage(first2)) };
  TrailingText2 = tmp2(tmp3[42]).TableRow.TrailingText;
  const intl9 = tmp2(tmp3[12]).intl;
  string = intl9.string;
  tmp2Result6 = tmp2(tmp3[23]);
  items13[1] = memo(TableRowGroup2, obj18);
  const obj21 = { style: tmp.description, variant: "body-xs/normal", color: "text-muted", includeFontPadding: true, children: format(k6c2yP, obj22) };
  const Text4 = tmp2(tmp3[39]).Text;
  const intl10 = tmp2(tmp3[12]).intl;
  format = intl10.format;
  obj22 = { helpCenterUrl: tmp7Result5.getArticleURL(first3.CUSTOM_TYPING_INDICATOR) };
  k6c2yP = tmp7(tmp3[13]).k6c2yP;
  tmp7Result5 = nativeStackNavigation(tmp3[43]);
  items13[2] = memo(Text4, obj21);
  items10[2] = tmp35(tmp36, obj13);
  const obj23 = { spacing: 8, children: items14 };
  const Stack = tmp2(tmp3[44]).Stack;
  const obj24 = { variant: "secondary", size: "lg", icon: memo(tmp2(tmp3[46]).DiceIcon, {}), text: intl11.string(nativeStackNavigation(tmp3[13]).q4045h), onPress: callback3 };
  const Button = tmp2(tmp3[45]).Button;
  intl11 = tmp2(tmp3[12]).intl;
  items14 = [tmp41(Button, obj24), ];
  const obj25 = { variant: "secondary", size: "lg", icon: memo(tmp2(tmp3[47]).DenyIcon, {}), text: intl12.string(nativeStackNavigation(tmp3[13])["UnIf+S"]), onPress: callback4 };
  const Button2 = tmp2(tmp3[45]).Button;
  intl12 = tmp2(tmp3[12]).intl;
  items14[1] = memo(Button2, obj25);
  items10[3] = tmp35(Stack, obj23);
  items15 = [tmp35(tmp37, obj6), ];
  const obj26 = { visible: !tmp24, disabled: tmp32, loading: tmp32, text: string2Result, onPress: callback5, renderButton: fn };
  const tmp7Result6 = nativeStackNavigation(tmp3[48]);
  const intl13 = tmp2(tmp3[12]).intl;
  const string2 = intl13.string;
  if (!result && "try_it_out" !== mode) {
    string2Result = string2(tmp2(tmp3[12]).t.pj0XBN);
  } else {
    string2Result = string2(tmp7(tmp3[13])["6ZxPAQ"]);
  }
  if (!result && "try_it_out" !== mode) {
    callback5 = callback6;
  }
  fn = undefined;
  if (!result && "try_it_out" !== mode) {
    fn = (arg0) => {
      let onPress;
      let text;
      ({ text, onPress } = arg0);
      return memo(nativeStackNavigation(analyticsLocations[49]), { text, onPress });
    };
  }
  items15[1] = memo(tmp7Result6, obj26);
  return tmp35(tmp36, obj4);
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
  const AnalyticsLocationProvider = tmp(7410).AnalyticsLocationProvider;
  if (analyticsLocations == null) {
    analyticsLocations = locationStackFromLocationContext;
  }
  const obj2 = { value: analyticsLocations, children: map1(CustomTypingIndicatorEditScreenContent, { mode }) };
  return map1(AnalyticsLocationProvider, obj2);
};
