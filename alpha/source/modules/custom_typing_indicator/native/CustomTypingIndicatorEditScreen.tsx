// Module ID: 15456
// Function ID: 15457
// Name: CustomTypingIndicatorEditScreen
// Dependencies: [5, 32, 19, 17, 1389, 1085, 21, 5090, 587, 1397, 1126, 3829, 558, 576, 1503, 6841, 1502, 504, 4726, 6865, 1264, 11659, 1410, 5200, 5054, 15457, 1999, 15458, 8267, 8264, 6662, 5631, 14675, 11660, 9328, 11671, 5405, 5086, 15459, 6267, 6184, 2127, 5373, 5375, 9006, 9306, 15504, 9733, 2]

// Module 15456 (CustomTypingIndicatorEditScreen)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import user from "user" /* 1397 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1410 */;
import Link from "Link" /* 1503 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6841 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11659 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, c4, constants3;

let c10;
let c9;
let closure_12;
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
  let c15;
  let closure_11;
  let closure_5;
  let fn;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl2;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let k6c2yP;
  let obj16;
  let obj17;
  let obj19;
  let obj5;
  let string;
  let string2Result;
  let stringResult;
  let tmp29;
  let tmp2Result2;
  let tmp38Result;
  let tmp7Result4;
  let tmp7Result5;
  mode = mode.mode;
  let analyticsLocations;
  let first1;
  react = undefined;
  let first3;
  let ref;
  c15 = undefined;
  let tmp = ref();
  let tmp3 = analyticsLocations;
  let obj = mode(analyticsLocations[16]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj2 = mode(analyticsLocations[17]);
  const items = [first3];
  const stateFromStores = obj2.useStateFromStores(items, () => first3.getCurrentUser());
  let obj3 = nativeStackNavigation(analyticsLocations[18]);
  let result = obj3.canUsePremiumProfileCustomization(stateFromStores);
  const tmp9 = nativeStackNavigation(analyticsLocations[15]);
  analyticsLocations = tmp9(nativeStackNavigation(analyticsLocations[19]).CUSTOM_TYPING_INDICATOR_EDITOR).analyticsLocations;
  const items1 = [analyticsLocations];
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { location_stack: analyticsLocations };
    obj.track(onChange2.TYPING_INDICATOR_EDIT_SCREEN_OPENED, obj2);
  }, items1);
  const tmp2Result = mode(tmp3[21]);
  const first = first1(react.useState(tmp2Result.useCurrentCustomTypingIndicatorConfig(tmp5)), 1)[0];
  const tmp13 = first1(react.useState(() => {
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
  }), 2);
  first1 = tmp13[0];
  react = tmp13[1];
  const tmp15 = first1(react.useState(first.typingSuggestion), 2);
  const first2 = tmp15[0];
  const onChange = tmp15[1];
  const tmp17 = first1(react.useState(first.animation), 2);
  first3 = tmp17[0];
  const onChange2 = tmp17[1];
  const items2 = [first1];
  const memo = react.useMemo(() => first1.filter((item) => null != item), items2);
  let tmp19 = memo.length === tmp2(tmp3[22]).CUSTOM_TYPING_INDICATOR_EMOJI_COUNT;
  constants3 = tmp19;
  const items3 = [tmp19, memo, first2, first3];
  const memo1 = react.useMemo(() => ({ emojis: closure_11 ? memo : [], typingSuggestion: first2, animation: first3 }), items3);
  const tmp21 = nativeStackNavigation(tmp3[23])(memo1, first);
  let closure_13 = tmp22;
  const items4 = [first2];
  const callback = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_5((arr) => arr.map((item, index) => {
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
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { initialValue: first2, onChange };
    obj.openLazy(asyncRequire(15457, dependencyMap.paths), "CustomTypingIndicatorTypingSuggestionPickerSheet", obj2);
  }, items4);
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emojis: memo, initialAnimation: first3, onChange: onChange2 };
    obj.openLazy(asyncRequire(15458, dependencyMap.paths), "CustomTypingIndicatorAnimationPickerSheet", obj2);
  }, items5);
  ref = react.useRef(null);
  const items6 = [analyticsLocations];
  const items7 = [analyticsLocations];
  const callback3 = react.useCallback(() => {
    if (ref.current == null) {
      const obj = CustomTypingIndicatorUtils;
      ref.current = obj.getSurpriseMeEmojiPool();
    }
    const obj2 = CustomTypingIndicatorUtils;
    closure_5(obj2.pickRandomCustomTypingIndicatorEmojis(ref.current));
    const obj3 = CustomTypingIndicatorUtils;
    onChange(obj3.getRandomCustomTypingIndicatorSuggestion());
    const obj4 = CustomTypingIndicatorUtils;
    onChange2(obj4.getRandomCustomTypingIndicatorAnimation());
    const obj5 = AnalyticsUtilsDefault;
    const obj6 = { location_stack: analyticsLocations };
    obj5.track(onChange2.TYPING_INDICATOR_STYLE_SURPRISE_ME, obj6);
  }, items6);
  const callback4 = react.useCallback(() => {
    const ArrayResult = Array(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT);
    closure_5(ArrayResult.fill(null));
    onChange(user.TypingSuggestion.UNSPECIFIED);
    onChange2(user.TypingIndicatorAnimation.UNSPECIFIED);
    const obj = { location_stack: analyticsLocations };
    const obj2 = AnalyticsUtilsDefault;
    obj2.track(onChange2.TYPING_INDICATOR_STYLE_REMOVED, obj);
  }, items7);
  [tmp29, c15] = first1(react.useState(false), 2);
  const tmp28 = first1(react.useState(false), 2);
  let closure_16 = react.useRef(false);
  const items8 = [tmp22, memo1, mode, nativeStackNavigation, analyticsLocations];
  let callback5 = react.useCallback(first(function*(arg0, value) {
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
        return { value: "IconComponent", done: null };
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
            const tmp74 = closure_13;
            if (tmp74) {
              if (!ref.current) {
                let tmp35 = null;
                const tmp31 = v0(analyticsLocations[23]);
                if (!tmp31(memo1, mode(analyticsLocations[22]).EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG)) {
                  tmp35 = memo1;
                }
                if ("try_it_out" === mode) {
                  const obj9 = mode(analyticsLocations[28]);
                  const result = obj9.setTryItOutCustomTypingIndicatorStyle(tmp35);
                } else if ("profile_pending" === tmp36) {
                  const obj3 = { customTypingIndicatorStyle: tmp35 };
                  const obj7 = mode(analyticsLocations[29]);
                  obj7.setPendingChanges(obj3);
                } else {
                  ref.current = true;
                  _undefined(true);
                  const obj5 = { typingIndicatorStyle: tmp35 };
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: obj4.saveProfileAndAccountChanges(obj5), done: false };
                  obj4 = mode(analyticsLocations[30]);
                  return obj6;
                }
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
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
          closure_130_16.current = false;
          closure_130_15(false);
          let ok;
          if (mode != null) {
            ok = mode.ok;
          }
          if (!ok) {
            firstFieldErrorMessage = null;
            if (null != mode) {
              const self = this;
              const self2 = this;
              const aPIError = new mode(analyticsLocations[31]).APIError(mode);
              firstFieldErrorMessage = aPIError.getFirstFieldErrorMessage("typing_indicator_style");
            }
            const tmp19 = mode(analyticsLocations[32]);
            mode = firstFieldErrorMessage;
            const showGenericProfileUpdateFailureToast = tmp19.showGenericProfileUpdateFailureToast;
            if (firstFieldErrorMessage == null) {
              const intl = mode(analyticsLocations[10]).intl;
              mode = intl.string(mode(analyticsLocations[10]).t["84MExs"]);
            }
            const result1 = showGenericProfileUpdateFailureToast(mode);
            c4 = 3;
            const obj10 = { value: undefined, done: true };
            return obj10;
          }
        }
        const obj12 = { location_stack: closure_130_2 };
        const track = v0(analyticsLocations[20]).track;
        const TYPING_INDICATOR_STYLE_APPLIED = constants.TYPING_INDICATOR_STYLE_APPLIED;
        const tmp51 = v0(analyticsLocations[20]);
        const obj11 = mode(analyticsLocations[33]);
        const merged = Object.assign(obj11.getTypingIndicatorStyleAnalytics(closure_130_12));
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
  let obj4 = { style: tmp.screen, children: items14 };
  const container = tmp.container;
  const callback6 = react.useCallback(() => {
    let obj2;
    const obj = { analyticsLocation: obj2, analyticsLocations };
    obj2 = { section: memo.SETTINGS_TYPING_INDICATOR };
    openPremiumModalDefault(obj);
  }, items9);
  const tmp34 = first2;
  if (tmp21) {
    obj5 = container;
  } else {
    obj5 = { paddingBottom: 90 };
    let tmp35 = obj5;
    const tmp36 = container;
    let merged = Object.assign(container);
  }
  let obj6 = { contentContainerStyle: obj5, children: items10 };
  let obj7 = { style: tmp.previewContainer, children: tmp38Result };
  tmp38Result = null != stateFromStores;
  if (tmp38Result) {
    let obj8 = { username: tmp7Result4.getName(null, null, stateFromStores), config: memo1, justifyCenter: true };
    const tmp7Result = nativeStackNavigation(tmp3[35]);
    tmp7Result4 = nativeStackNavigation(tmp3[36]);
    tmp38Result = tmp38(tmp7Result, obj8);
  }
  items10 = [tmp38(tmp33, obj7), , , ];
  let obj9 = { style: tmp.section, children: items11 };
  let obj10 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: intl.string(tmp7(tmp3[11])["l8CZ7+"]) };
  const Text = tmp2(tmp3[37]).Text;
  intl = tmp2(tmp3[10]).intl;
  items11 = [tmp38(Text, obj10), tmp38(tmp7(tmp3[38]), { emojis: first1, onChange: callback }), ];
  const TableRowGroup = tmp2(tmp3[39]).TableRowGroup;
  let obj11 = { label: intl2.string(tmp7(tmp3[11]).iVKTbA), arrow: true, disabled: !tmp19, trailing: tmp38(TrailingText, { text: stringResult }), onPress: callback2 };
  const TableRow = tmp2(tmp3[40]).TableRow;
  intl2 = tmp2(tmp3[10]).intl;
  TrailingText = tmp2(tmp3[40]).TableRow.TrailingText;
  if (mode(tmp3[9]).TypingIndicatorAnimation.PULSE === first3) {
    const intl5 = tmp2(tmp3[10]).intl;
    stringResult = intl5.string(tmp7(tmp3[11])["gyL/ce"]);
  } else if (mode(tmp3[9]).TypingIndicatorAnimation.RING === first3) {
    const intl4 = tmp2(tmp3[10]).intl;
    stringResult = intl4.string(tmp7(tmp3[11]).EgekTm);
  } else if (mode(tmp3[9]).TypingIndicatorAnimation.WAVE === first3) {
    const intl3 = tmp2(tmp3[10]).intl;
    stringResult = intl3.string(tmp7(tmp3[11])["8t5EiI"]);
  } else if (mode(tmp3[9]).TypingIndicatorAnimation.UNSPECIFIED === first3) {
    const intl13 = tmp2(tmp3[10]).intl;
    stringResult = intl13.string(tmp2(tmp3[10]).t.PoWNfe);
  }
  let obj12 = { hasIcons: false, children: tmp38(TableRow, obj11) };
  items11[2] = memo1(TableRowGroup, obj12);
  items10[1] = closure_13(onChange, obj9);
  const obj13 = { style: tmp.section, children: items12 };
  const obj14 = { accessibilityRole: "header", variant: "text-sm/semibold", color: "text-default", children: intl6.string(nativeStackNavigation(tmp3[11]).BGCQqw) };
  const Text2 = tmp2(tmp3[37]).Text;
  intl6 = tmp2(tmp3[10]).intl;
  items12 = [tmp38(Text2, obj14), , ];
  const obj15 = { hasIcons: false, children: memo1(TableRow2, obj16) };
  const TableRowGroup2 = tmp2(tmp3[39]).TableRowGroup;
  obj16 = { label: intl7.string(nativeStackNavigation(tmp3[11])["X+ijyw"]), arrow: true, trailing: memo1(TrailingText2, obj17), onPress: callback1 };
  TableRow2 = tmp2(tmp3[40]).TableRow;
  intl7 = tmp2(tmp3[10]).intl;
  obj17 = { text: string(tmp2Result2.getCustomTypingIndicatorSuggestionMessage(first2)) };
  TrailingText2 = tmp2(tmp3[40]).TableRow.TrailingText;
  const intl8 = tmp2(tmp3[10]).intl;
  string = intl8.string;
  tmp2Result2 = mode(tmp3[21]);
  items12[1] = memo1(TableRowGroup2, obj15);
  const obj18 = { style: tmp.description, variant: "text-xs/normal", color: "text-muted", includeFontPadding: true, children: format(k6c2yP, obj19) };
  const Text3 = tmp2(tmp3[37]).Text;
  const intl9 = tmp2(tmp3[10]).intl;
  format = intl9.format;
  obj19 = { helpCenterUrl: tmp7Result5.getArticleURL(constants3.CUSTOM_TYPING_INDICATOR) };
  k6c2yP = tmp7(tmp3[11]).k6c2yP;
  tmp7Result5 = nativeStackNavigation(tmp3[41]);
  items12[2] = memo1(Text3, obj18);
  items10[2] = closure_13(onChange, obj13);
  const obj20 = { spacing: 8, children: items13 };
  const Stack = tmp2(tmp3[42]).Stack;
  const obj21 = { variant: "secondary", size: "lg", icon: memo1(mode(tmp3[44]).DiceIcon, {}), text: intl10.string(nativeStackNavigation(tmp3[11]).q4045h), onPress: callback3 };
  const Button = tmp2(tmp3[43]).Button;
  intl10 = tmp2(tmp3[10]).intl;
  items13 = [tmp38(Button, obj21), ];
  const obj22 = { variant: "secondary", size: "lg", icon: memo1(mode(tmp3[45]).DenyIcon, {}), text: intl11.string(nativeStackNavigation(tmp3[11])["UnIf+S"]), onPress: callback4 };
  const Button2 = tmp2(tmp3[43]).Button;
  intl11 = tmp2(tmp3[10]).intl;
  items13[1] = memo1(Button2, obj22);
  items10[3] = closure_13(Stack, obj20);
  items14 = [tmp32(tmp34, obj6), ];
  const obj23 = { visible: !tmp21, disabled: tmp29, loading: tmp29, text: string2Result, onPress: callback5, renderButton: fn };
  const tmp7Result6 = nativeStackNavigation(tmp3[46]);
  const intl12 = tmp2(tmp3[10]).intl;
  const string2 = intl12.string;
  if (!result && "try_it_out" !== mode) {
    string2Result = string2(tmp2(tmp3[10]).t.pj0XBN);
  } else {
    string2Result = string2(tmp7(tmp3[11])["6ZxPAQ"]);
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
      return memo1(nativeStackNavigation(analyticsLocations[47]), { text, onPress });
    };
  }
  items14[1] = memo1(tmp7Result6, obj23);
  return closure_13(onChange, obj4);
}
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticEvents: c9, AnalyticsSections: c10, HelpdeskArticles: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1 }, container: obj2, previewContainer: obj3, section: obj4, description: obj5 };
obj2 = { padding: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { height: 140, display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { rowGap: nativeDefault.space.PX_8 };
obj5 = { marginTop: nativeDefault.space.PX_4 };
let closure_14 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorEditScreen() {
  let analyticsLocations;
  let mode;
  let tmp5;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = Link;
  const route = obj2.useRoute();
  if (cResult[0] !== route.params) {
    let params = route.params;
    if (params == null) {
      params = {};
    }
    cResult[0] = route.params;
    cResult[1] = params;
    tmp5 = params;
  } else {
    tmp5 = cResult[1];
  }
  ({ mode, analyticsLocations } = tmp5);
  const tmpResult = useAnalyticsLocations;
  if (analyticsLocations == null) {
    analyticsLocations = tmpResult.useLocationStackFromLocationContext();
  }
  if (cResult[2] !== mode) {
    const obj3 = { mode };
    const tmp10 = closure_12(CustomTypingIndicatorEditScreenContent, obj3);
    cResult[2] = mode;
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    let tmp11;
    if (cResult[5] === tmp7) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const tmp12 = closure_12(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp7 });
  cResult[4] = analyticsLocations;
  cResult[5] = tmp7;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : (function CustomTypingIndicatorEditScreen() {
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
  const AnalyticsLocationProvider = tmp(6841).AnalyticsLocationProvider;
  if (analyticsLocations == null) {
    analyticsLocations = locationStackFromLocationContext;
  }
  const obj2 = { value: analyticsLocations, children: closure_12(CustomTypingIndicatorEditScreenContent, { mode }) };
  return closure_12(AnalyticsLocationProvider, obj2);
});
let result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorEditScreen.tsx");

export default tmp6;
