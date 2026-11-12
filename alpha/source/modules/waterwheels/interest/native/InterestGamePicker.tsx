// Module ID: 18978
// Function ID: 18979
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5244, 2138, 18979, 21, 5243, 575, 5899, 1652, 5485, 5488, 1113, 2553, 18980, 18983, 5839, 1627, 7577, 1496, 7929, 504, 18984, 9312, 12050, 18985, 18986, 5252, 7724, 5491, 5952, 9466, 7351, 8984, 5866, 18987, 7759, 18988, 5873, 18989, 2]
// Exports: default

// Module 18978 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import timing_timing from "timing/timing" /* 5485 */;
import timingPresets from "timingPresets" /* 5488 */;
import HapticUtils from "HapticUtils" /* 5491 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9312 */;
import useGame2 from "useGame" /* 9466 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import GameStore from "GameStore" /* 2138 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18979 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let map, results, set;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Keyboard: hasOwnProperty, PixelRatio: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
({ FOOTER_BORDER_WIDTH: unpackModuleId, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let closure_25 = createStyles.createStyles((borderRadius, minWidth) => {
  let obj15;
  let obj9;
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, skip: { color: nativeDefault.colors.TEXT_BRAND }, content: { flexGrow: 1 }, empty: { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 }, intro: { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 }, subtitle: { textAlign: "center" }, search: { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 }, searchField: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md }, navLeading: { minWidth, flexShrink: 0 }, navTitle: { flex: 1, alignSelf: "stretch", justifyContent: "center", minWidth: 0 }, navActions: { minWidth, flexShrink: 0, alignItems: "flex-end" }, grid: obj9, gridRow: { flexDirection: "row" }, tileWrapper: { borderRadius }, selectedGlow: { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 }, tile: { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, selected: { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, selectedInner: { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, status: { alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 }, footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }, footer: obj15, footerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, footerActions: { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 }, nextButton: { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 });
  ({ flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 });
  obj9 = { gap: map1, paddingHorizontal, paddingTop: 0 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md });
  ({ shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 });
  ({ flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 });
  obj15 = { borderTopWidth: unpackModuleId, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  ({ minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 });
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_27 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_28 = react.memo(function StaticInterestGameTile(game) {
  let formatToPlainStringResult;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj5;
  let radius;
  let reduceMotion;
  let selected;
  let styles;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  let unavailable;
  let width;
  game = game.game;
  ({ width, selected, unavailable, styles, onPress: importDefault } = game);
  let sharedValue;
  ({ reduceMotion, radius } = game);
  let obj = game(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_26, selected, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = game(sharedValue[10]);
  class InterestGamePickerTsx1 {
    constructor() {
      let opacity = 0;
      if (!c0) {
        const _Math = Math;
        const _Math2 = Math;
        opacity = 1 - Math.min(1, Math.max(0, _undefined.get()) / 0.2);
      }
      return { opacity };
    }
  }
  const items1 = [tmp5, tmp6];
  InterestGamePickerTsx1.__closure = items1;
  InterestGamePickerTsx1.__workletHash = 14342270959027;
  InterestGamePickerTsx1.__initData = tmp4;
  const animatedStyle = obj2.useAnimatedStyle(InterestGamePickerTsx1);
  const items2 = [closure_27, unavailable, reduceMotion, , ];
  const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
  game(sharedValue[10]);
  items2[3] = game(sharedValue[11]).withTiming;
  items2[4] = game(sharedValue[12]).timingFast;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items2;
  class InterestGamePickerTsx2 {
    constructor() {
      let num = 1;
      if (c0) {
        num = 0.4;
      }
      let opacity = num;
      if (!c1) {
        opacity = _undefined(num, c3);
      }
      return { opacity };
    }
  }
  const items3 = [tmp10, tmp11, tmp12, tmp13];
  InterestGamePickerTsx2.__closure = items3;
  InterestGamePickerTsx2.__workletHash = 11929229272400;
  InterestGamePickerTsx2.__initData = tmp9;
  const obj3 = {
    accessibilityLabel: game.name,
    accessibilityRole: "button",
    accessibilityState: { disabled: unavailable, selected },
    accessibilityHint: formatToPlainStringResult,
    onPress() {
      return importDefault(game.id);
    },
    onPressIn() {
      set = sharedValue.set;
      const obj = timing_timing;
      return set(obj.withTiming(1, timingPresets.timingFast));
    },
    onPressOut() {
      set = sharedValue.set;
      const obj = timing_timing;
      return set(obj.withTiming(0, timingPresets.timingFast));
    },
    style: items4,
    children: closure_23(closure_8, obj5)
  };
  formatToPlainStringResult = undefined;
  const animatedStyle1 = useAnimatedStyle(InterestGamePickerTsx2);
  const tmp16 = closure_7;
  if (unavailable) {
    const intl = tmp(tmp2[13]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2553").v9v0uY, obj4);
  }
  items4 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items4[2] = size;
  obj5 = { style: styles.screen, children: items7 };
  const obj6 = { style: styles.tile, children: items6 };
  const obj7 = { style: items5, children: closure_22(require("InterestGameCover"), { game, width }) };
  items5 = [styles.screen, animatedStyle1];
  const View = require("module_1652").View;
  items6 = [closure_22(View, obj7), closure_22(require("InterestTileEdge"), { radius, style: animatedStyle })];
  items7 = [closure_23(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: items8 };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    items8 = [closure_22(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items8[1] = closure_22(closure_8, obj10);
    selected = tmp20(closure_24, obj8);
  }
  items7[1] = selected;
  return closure_22(tmp16, obj3);
});
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let Button2;
  let HeaderTextButton;
  let SearchBar;
  let _undefined;
  let _undefined2;
  let arr;
  let c14;
  let c9;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items26;
  let items27;
  let items28;
  let items29;
  let items30;
  let items31;
  let items32;
  let items33;
  let items34;
  let items35;
  let items36;
  let items37;
  let items38;
  let items39;
  let minSelection;
  let obj12;
  let obj17;
  let obj19;
  let obj30;
  let obj32;
  let obj35;
  let obj37;
  let obj8;
  let onLayout;
  let onRowSeen;
  let onScroll;
  let ref;
  let ref1;
  let scrollY;
  let str3;
  let str4;
  let string;
  let subtitle;
  let sum;
  let title;
  let tmp17;
  let tmp3Result2;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp63;
  let tmp64;
  let tmp9;
  const f117794 = (item, index) => item !== first2[index];
  const f117809 = (arr, index) => {
    let items;
    let onPress;
    let radius;
    let reduceMotion;
    let width;
    let closure_0 = index;
    let obj = {
      style: items,
      onLayout(arg0) {
        return closure_43.onRowLayout(index + 1, arg0);
      },
      children: arr.map((game) => {
        const hasItem = first.includes(game.id);
        const obj = { game, width, selected: hasItem, unavailable: !hasItem && length.length >= c14, reduceMotion, styles, radius, onPress };
        return stateFromStores(error, obj, game.id);
      })
    };
    items = [styles.gridRow, ];
    const obj2 = { columnGap };
    items[1] = obj2;
    return stateFromStores(styles, obj, index);
  };
  catalog = catalog.catalog;
  ({ title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = ref1;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  let c6;
  c9 = undefined;
  let max;
  let ref3;
  let stateFromStores;
  let c23;
  let columnGap;
  let ref4;
  let bound;
  results = undefined;
  let error;
  let onSelect;
  let closure_31;
  let closure_32;
  let memo;
  let memo2;
  let memo4;
  let memo3;
  let closure_37;
  let memo6;
  let memo7;
  let length;
  let first2;
  let closure_42;
  let closure_43;
  let sharedValue;
  let ref5;
  let result1;
  let ref6;
  let ref7;
  let closure_49;
  let closure_50;
  let obj = c6;
  let tmp = catalog;
  let tmp2 = onSkip;
  const roundToNearestPixel = c6.roundToNearestPixel;
  let obj2 = catalog(onSkip[17]);
  const tmp3 = onContinue;
  const roundToNearestPixelResult = roundToNearestPixel(obj2.useToken(onContinue(onSkip[8]).modules.mobile.INPUT_FIELD_RADIUS_LG));
  c6 = roundToNearestPixelResult;
  let obj3 = onGameToggle;
  const tmp6 = initialSelection(onGameToggle.useState(0), 2);
  let closure_7 = tmp6[1];
  const tmp7 = ref4(roundToNearestPixelResult, Math.max(onContinue(onSkip[8]).space.PX_64, tmp6[0]));
  let closure_8 = tmp7;
  const bottom = onContinue(onSkip[18])().bottom;
  [tmp9, c9] = initialSelection(onGameToggle.useState(0), 2);
  const tmp8 = initialSelection(onGameToggle.useState(0), 2);
  const tmp10 = initialSelection(onGameToggle.useState(() => {
    set = new Set(initialSelection);
    const fromResult = from(set);
    return fromResult.slice(0, gesture);
  }), 2);
  const first = tmp10[0];
  let closure_11 = tmp10[1];
  const tmp12 = initialSelection(onGameToggle.useState(""), 2);
  let str = tmp12[0];
  const tmp13 = tmp12[1];
  let tmp14 = initialSelection(onGameToggle.useState(false), 2);
  const first1 = tmp14[0];
  let closure_13 = tmp14[1];
  [tmp17, c14] = initialSelection(onGameToggle.useState(0), 2);
  const tmp16 = initialSelection(onGameToggle.useState(0), 2);
  ref1 = onGameToggle.useRef(null);
  ref = onGameToggle.useRef(false);
  const ref2 = onGameToggle.useRef(false);
  const tmp19 = onContinue(onSkip[19])();
  let obj4 = catalog(onSkip[20]);
  const appEntryKey = obj4.useAppEntryKey();
  const callback = onGameToggle.useCallback(() => {
    ref2.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_13(false);
  }, []);
  let items = [callback];
  const callback1 = onGameToggle.useCallback(() => {
    if (ref.current) {
      ref2.current = true;
    } else {
      callback();
    }
  }, items);
  let items1 = [callback];
  const callback2 = onGameToggle.useCallback(() => {
    ref.current = false;
    if (ref2.current) {
      callback();
    }
  }, items1);
  const items2 = [appEntryKey, callback1];
  const effect = onGameToggle.useEffect(() => {
    const obj = catalog(onSkip[19]);
    const obj2 = { appEntryKey };
    const keyboardIsOpen = obj.getKeyboardIsOpen(obj2);
    const obj3 = catalog(onSkip[19]);
    const obj4 = { appEntryKey };
    return obj3.subscribeToKeyboardIsOpen((arg0) => {
      const tmp = closure_0 && !arg0;
      closure_0 = arg0;
      if (tmp) {
        callback1();
      }
    }, obj4);
  }, items2);
  const tmp25 = onContinue(onSkip[21])();
  const width = tmp25.width;
  let num = 0;
  ({ ref, onLayout } = tmp25);
  const tmp5 = initialSelection;
  if (undefined !== width) {
    num = width;
  }
  ref3 = obj3.useRef(null);
  const items3 = [c9];
  const tmpResult = tmp(tmp2[22]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => _undefined.useReducedMotion);
  let result = (num - 2 * ref - closure_13 * (first1 - 1)) / first1;
  const roundToNearestPixel2 = obj.roundToNearestPixel;
  const rounded = Math.floor(result * obj.get());
  const roundToNearestPixel2Result = roundToNearestPixel2(rounded / obj.get());
  c23 = roundToNearestPixel2Result;
  columnGap = closure_13 + (result - roundToNearestPixel2Result) * first1 / (first1 - 1);
  ref4 = obj3.useRef(false);
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), max);
  } else {
    bound = ref1;
  }
  const tmp33 = tmp3(tmp2[23])(str);
  results = tmp33.results;
  error = tmp33.error;
  onSelect = tmp33.onSelect;
  const items4 = [results];
  const isLoading = tmp33.isLoading;
  memo = obj3.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items4);
  const tmp35 = str.trim().length > 0;
  const items5 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items5);
  const tmp37 = tmp3(tmp2[25])(memo1);
  closure_31 = tmp37;
  closure_32 = tmp38;
  let tmp39 = catalog;
  if (tmp35 && null == error) {
    tmp39 = memo;
  }
  memo = tmp39;
  const items6 = [first];
  const items7 = [tmp39];
  const tmpResult7 = tmp(tmp2[22]);
  const stateFromStores1 = tmpResult7.useStateFromStores(items6, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items7);
  const items8 = [first];
  const items9 = [catalog];
  const items10 = [tmp37];
  const tmpResult8 = tmp(tmp2[22]);
  const stateFromStores2 = tmpResult8.useStateFromStores(items8, () => catalog.some((item) => first.didFetchingFail(item)), items9);
  memo2 = obj3.useMemo(() => {
    map = new Map(closure_31.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items10);
  const items11 = [catalog, memo2];
  memo3 = obj3.useMemo(() => {
    let closure_0 = memo2;
    return catalog.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onSkip[9]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items11);
  const items12 = [memo, memo2];
  memo4 = obj3.useMemo(() => {
    let closure_0 = memo2;
    return memo.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onSkip[9]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items12);
  if (tmp35 && null == error) {
    memo3 = memo4;
  }
  const items13 = [memo3];
  const memo5 = obj3.useMemo(() => {
    const obj = { length: Math.ceil(memo3.length / authStore2) };
    return Array.from(obj, (arg0, arg1) => memo3.slice(arg1 * first1, (arg1 + 1) * first1));
  }, items13);
  closure_37 = tmp43;
  let tmp74Result = tmp35 && !tmp43 && null == error && 0 === memo3.length;
  let tmp45 = !tmp35;
  let tmp74Result2 = tmp45;
  if (!tmp35) {
    tmp74Result2 = !tmp43;
  }
  if (tmp74Result2) {
    tmp74Result2 = 0 === memo3.length;
  }
  const items14 = [memo2, first];
  memo6 = obj3.useMemo(() => first.flatMap((item) => {
    const value = closure_0.get(item);
    if (null != value) {
      let items;
      const obj = memo2(onSkip[9]);
      if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
        items = [value];
      }
      return items;
    }
    items = [];
  }), items14);
  const items15 = [memo6];
  memo7 = obj3.useMemo(() => memo6.map((id) => id.id), items15);
  length = memo7.length;
  const tmp47 = memo7.length >= bound;
  const tmp5Result = tmp5(obj3.useState(memo6), 2);
  first2 = tmp5Result[0];
  let tmp50 = memo6.length > 0;
  const tmp49 = tmp5Result[1];
  if (tmp50) {
    tmp50 = memo6.length !== first2.length || memo6.some(f117794);
    memo6.length !== first2.length || memo6.some(f117794);
  }
  if (tmp50) {
    tmp49(memo6);
  }
  closure_42 = tmp53;
  const tmp3Result = tmp3(tmp2[26]);
  if (!tmp35) {
    tmp45 = !tmp43;
  }
  let num2 = 0;
  if (length > 0 && !tmp19 && !first1) {
    let tmp55 = null;
    if (tmp9 > 0) {
      tmp55 = tmp9;
    }
    num2 = tmp55;
  }
  const tmp3ResultResult = tmp3Result(onRowSeen, tmp45, num2);
  closure_43 = tmp3ResultResult;
  const tmpResult9 = tmp(tmp2[27]);
  const interestScrollHeader = tmpResult9.useInterestScrollHeader(tmp3ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmpResult10 = tmp(tmp2[10]);
  sharedValue = tmpResult10.useSharedValue(0);
  const items16 = [onSelect, stateFromStores, sharedValue, tmp9, ];
  const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items16[4] = tmp3(tmp2[8]);
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp60, tmp61, tmp62, tmp63, tmp64] = items16;
  class InterestGamePickerTsx3 {
    constructor() {
      let items;
      let num = 1;
      if (c0) {
        num = _undefined.get();
      }
      let num2 = 0;
      const obj = { opacity: num, transform: items };
      if (!c0) {
        let PX_128 = c2;
        const diff = 1 - _undefined.get();
        if (c2 <= 0) {
          PX_128 = _undefined2.space.PX_128;
        }
        num2 = diff * PX_128;
      }
      items = [{ translateY: num2 }];
      return obj;
    }
  }
  const items17 = [tmp61, tmp62, tmp63, tmp64];
  InterestGamePickerTsx3.__closure = items17;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp60;
  const items18 = [sharedValue, length > 0 && !tmp19 && !first1, stateFromStores];
  const animatedStyle = useAnimatedStyle(InterestGamePickerTsx3);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_42) {
      num = 1;
    }
    let num2 = 100;
    if (!stateFromStores) {
      num2 = tmp3 ? closure_20 : closure_21;
    }
    let str = "respect-motion-settings";
    if (stateFromStores) {
      str = "animate-always";
    }
    const result = set(withTiming(num, { duration: num2 }, str));
  }, items18);
  ref5 = obj3.useRef(length);
  const items19 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2553.v9v0uY, obj));
    }
  }, items19);
  const tmpResult12 = tmp(tmp2[24]);
  result1 = tmpResult12.normalizeGameAutocompleteQuery(str);
  ref6 = obj3.useRef(null);
  const items20 = [result1, tmp35 && isLoading || stateFromStores1, error, results, memo4.length, onSearch];
  const effect3 = obj3.useEffect(() => {
    if (null != result1) {
      const tmp2 = closure_37 || null != error || null == results || ref6.current === arr;
      if (!tmp2) {
        ref6.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref6.current = null;
    }
  }, items20);
  ref7 = obj3.useRef(first);
  const items21 = [onGameToggle, memo3];
  closure_49 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    if (!ref4.current) {
      const current = ref7.current;
      const hasItem = current.includes(arg0);
      const tmp2 = ref7;
      if (hasItem) {
        let found;
        if (hasItem) {
          found = current.filter((item) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(found, current, 0)] = arg0;
        }
        tmp2.current = found;
        closure_11(found);
        const findIndexResult = memo3.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp14 = null;
          if (-1 !== findIndexResult) {
            tmp14 = findIndexResult;
          }
          tmp12(arg0, tmp14, tmp4);
        }
      }
    }
  }, items21);
  closure_50 = tmp3(tmp2[29])((arg0) => {
    callback();
    hasOwnProperty.dismiss();
    const current = ref7.current;
    if (current.length >= gesture) {
      if (!current.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref3.current = timestamp;
        const intl = intl11.intl;
        const obj = { count: gesture, max: gesture };
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2553.v9v0uY, obj);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        const obj3 = ToastActionCreatorsDefault;
        obj3.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    const tmp15 = closure_32;
    if (tmp15) {
      onSelect(arg0);
    }
    closure_49(arg0);
  });
  const items22 = [bound, onContinue, memo7];
  const items23 = [onSkip, memo7];
  const callback3 = obj3.useCallback(() => {
    let current = ref4.current;
    const tmp = ref4;
    if (!current) {
      current = memo7.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo7);
    }
  }, items22);
  const items24 = [callback];
  const callback4 = obj3.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      onSkip(memo7);
    }
  }, items23);
  const items25 = [catalog];
  const callback5 = obj3.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items24);
  const obj5 = { style: tmp7.screen, children: items35 };
  const obj6 = { ref, onLayout, style: tmp7.body, children: items27 };
  const callback6 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items25);
  const obj7 = { top: true, children: c23(closure_8, obj8) };
  obj8 = { style: tmp7.header, children: items26 };
  const obj9 = { style: tmp7.navLeading };
  const SafeAreaPaddingView = tmp(tmp2[33]).SafeAreaPaddingView;
  items26 = [stateFromStores(closure_8, obj9), , ];
  const obj10 = { style: tmp7.navTitle, collapsable: false, children: stateFromStores(tmp(tmp2[27]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) };
  items26[1] = stateFromStores(closure_8, obj10);
  const obj11 = {
    style: tmp7.navActions,
    onLayout(nativeEvent) {
      return closure_7(nativeEvent.nativeEvent.layout.width);
    },
    children: stateFromStores(HeaderTextButton, obj12)
  };
  obj12 = { label: intl.string(tmp(tmp2[13]).t["5Wxrcd"]), labelStyle: tmp7.skip, onPress: callback4 };
  HeaderTextButton = tmp(tmp2[34]).HeaderTextButton;
  intl = tmp(tmp2[13]).intl;
  items26[2] = stateFromStores(closure_8, obj11);
  items27 = [stateFromStores(SafeAreaPaddingView, obj7), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout: tmp3ResultResult.onViewportLayout,
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp7.screen,
    contentContainerStyle: items28,
    onScrollBeginDrag() {
      ref.current = first1;
    },
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback2,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: items30
  };
  items28 = [tmp7.content, ];
  const ScrollView = tmp3(tmp2[10]).ScrollView;
  if (tmp19) {
    let num4 = 0;
    if (!tmp74Result) {
      num4 = tmp3(tmp2[8]).space.PX_16;
    }
    sum = num4;
  } else {
    sum = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp74Result) {
        num3 = tmp3(tmp2[8]).space.PX_32;
      }
      sum = tmp9 + num3;
    }
  }
  items28[1] = { paddingBottom: sum };
  const obj14 = {
    style: tmp7.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.height);
    },
    children: items29
  };
  items29 = [stateFromStores(tmp(tmp2[35]).Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), ];
  const obj15 = { style: tmp7.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items29[1] = stateFromStores(tmp(tmp2[35]).Text, obj15);
  items30 = [c23(closure_8, obj14), , ];
  const obj16 = { children: c23(closure_8, obj17) };
  obj17 = { style: tmp7.search, children: items31 };
  items31 = [stateFromStores(tmp3(tmp2[36]), { scrollY, collapseOffset: tmp17 }), ];
  const obj18 = { style: tmp7.searchField, children: stateFromStores(SearchBar, obj19) };
  obj19 = {
    ref: ref1,
    grow: false,
    spellCheck: false,
    autoComplete: "off",
    textContentType: "none",
    importantForAutofill: "no",
    accessibilityLabel: intl2.string(tmp3(tmp2[14])["8Xenq+"]),
    onChange: tmp13,
    onFocus() {
      closure_13(true);
      ref.current = false;
      ref2.current = false;
    },
    onBlur: callback1,
    onSubmitEditing: callback5,
    placeholder: intl3.string(tmp3(tmp2[14])["8Xenq+"])
  };
  SearchBar = tmp(tmp2[37]).SearchBar;
  intl2 = tmp(tmp2[13]).intl;
  intl3 = tmp(tmp2[13]).intl;
  items31[1] = stateFromStores(closure_8, obj18);
  items30[1] = stateFromStores(closure_8, obj16);
  let tmp76Result = tmp43;
  const obj20 = { style: tmp7.content, onLayout: tmp3ResultResult.onContentLayout, children: items32 };
  if (tmp76Result) {
    const obj21 = { style: tmp7.grid, accessible: true, accessibilityLabel: intl4.string(tmp(tmp2[13]).t.ZTNur7), accessibilityState: { busy: true }, children: arr };
    intl4 = tmp(tmp2[13]).intl;
    arr = roundToNearestPixel2Result > 0;
    if (arr) {
      const _Array = Array;
      arr = Array.from({ length: 4 }, (arg0, arg1) => {
        let items;
        let obj3;
        let radius;
        let width;
        let obj = {
          style: items,
          children: Array.from(obj3, (arg0, arg1) => {
            let items;
            let items1;
            const obj = { style: size, children: items1 };
            size = { width, height: radius.roundToNearestPixel(width / callback) };
            const obj2 = { style: items };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = closure_1_8);
            items1 = [stateFromStores(onContinue(onSkip[38]), obj2), ];
            const obj3 = { radius };
            items1[1] = stateFromStores(onContinue(onSkip[16]), obj3);
            return width(closure_8, obj, arg1);
          })
        };
        items = [metroImportAll.gridRow, ];
        let obj2 = { columnGap };
        items[1] = obj2;
        obj3 = { length: authStore2 };
        return authStore5(metroImportAll, obj, arg1);
      });
    }
    tmp76Result = tmp76(tmp75, obj21);
  }
  items32 = [tmp76Result, , , ];
  if (tmp74Result) {
    const obj22 = { style: tmp7.empty, children: items33 };
    const obj23 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: intl5.string(tmp3(tmp2[14]).w5cRz0) };
    const Heading = tmp(tmp2[35]).Heading;
    intl5 = tmp(tmp2[13]).intl;
    items33 = [stateFromStores(Heading, obj23), ];
    const obj24 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: intl6.string(tmp3(tmp2[14]).Khsqzs) };
    const Text = tmp(tmp2[35]).Text;
    intl6 = tmp(tmp2[13]).intl;
    items33[1] = stateFromStores(Text, obj24);
    tmp74Result = tmp74(tmp75, obj22);
  }
  items32[1] = tmp74Result;
  if (tmp74Result2) {
    const obj25 = { style: tmp7.status, children: items34 };
    const obj26 = { variant: "body-lg/normal", color: "text-muted", style: tmp7.subtitle, children: string(stateFromStores2 ? tmp3Result2["+np3yH"] : tmp3Result2.V7UsE0) };
    const Text2 = tmp(tmp2[35]).Text;
    const intl7 = tmp(tmp2[13]).intl;
    string = intl7.string;
    tmp3Result2 = tmp3(tmp2[14]);
    items34 = [stateFromStores(Text2, obj26), ];
    let tmp76Result4 = catalog.length > 0;
    if (tmp76Result4) {
      const obj27 = { onPress: callback6, size: "sm", text: intl8.string(tmp3(tmp2[14]).uGhymA), variant: "secondary" };
      const Button = tmp(tmp2[39]).Button;
      intl8 = tmp(tmp2[13]).intl;
      tmp76Result4 = tmp76(Button, obj27);
    }
    items34[1] = tmp76Result4;
    tmp74Result2 = tmp74(tmp75, obj25);
  }
  items32[2] = tmp74Result2;
  let tmp76Result5 = !tmp43 && memo3.length > 0;
  if (tmp76Result5) {
    let str2 = "browse";
    const obj28 = { style: tmp7.grid, children: roundToNearestPixel2Result > 0 && memo5.map(f117809) };
    roundToNearestPixel2Result > 0 && memo5.map(f117809);
    if (tmp35) {
      str2 = "search";
    }
    tmp76Result5 = tmp76(tmp75, obj28, str2);
  }
  items32[3] = tmp76Result5;
  items30[2] = c23(closure_8, obj20);
  items27[1] = c23(ScrollView, obj13);
  items35 = [c23(closure_8, obj6), ];
  const obj29 = { accessibilityElementsHidden: !(length > 0 && !tmp19 && !first1), importantForAccessibility: str3, pointerEvents: str4, style: items36, children: stateFromStores(closure_8, obj30) };
  str3 = "no-hide-descendants";
  const View = tmp3(tmp2[10]).View;
  if (length > 0 && !tmp19 && !first1) {
    str3 = "auto";
  }
  str4 = "none";
  if (length > 0 && !tmp19 && !first1) {
    str4 = "auto";
  }
  items36 = [tmp7.footerPosition, animatedStyle];
  obj30 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.height);
    },
    style: items37,
    children: c23(closure_8, obj32)
  };
  items37 = [tmp7.footer, { paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) }];
  obj32 = { style: tmp7.footerContent, children: items38 };
  items38 = [, ];
  ({ paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) });
  items38[0] = stateFromStores(tmp3(tmp2[40]), { games: first2, coverWidth: roundToNearestPixel2Result, reduceMotion: stateFromStores });
  let tmp76Result6 = first2.length >= 7;
  const obj33 = { style: tmp7.footerActions, children: items39 };
  if (tmp76Result6) {
    const obj34 = { variant: "body-sm/medium", color: "text-default", children: intl9.format(tmp3(tmp2[14]).v9v0uY, obj35) };
    const Text3 = tmp(tmp2[35]).Text;
    intl9 = tmp(tmp2[13]).intl;
    obj35 = { count: first2.length, max };
    tmp76Result6 = tmp76(Text3, obj34);
  }
  items39 = [tmp76Result6, ];
  const obj36 = { style: tmp7.nextButton, children: stateFromStores(Button2, obj37) };
  obj37 = { text: intl10.string(tmp(tmp2[13]).t.PDTjLN), disabled: !tmp47, onPress: callback3, size: "lg", variant: "primary" };
  Button2 = tmp(tmp2[39]).Button;
  intl10 = tmp(tmp2[13]).intl;
  items39[1] = stateFromStores(closure_8, obj36);
  items38[1] = c23(closure_8, obj33);
  items35[1] = stateFromStores(View, obj29);
  return c23(closure_8, obj5);
};
