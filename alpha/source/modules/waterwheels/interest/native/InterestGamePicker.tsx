// Module ID: 18051
// Function ID: 18052
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5044, 2141, 18037, 1071, 21, 5043, 575, 5672, 18052, 1654, 5253, 5256, 1112, 2655, 18036, 18054, 18040, 1256, 5607, 1629, 7298, 1498, 8487, 504, 18056, 7175, 14575, 5259, 18057, 18058, 5052, 7328, 5725, 8720, 7480, 9005, 5634, 18059, 7406, 18053, 18055, 5641, 18060, 2]
// Exports: default

// Module 18051 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl10 from "intl" /* 1112 */;
import _modDef2655 from "module_2655" /* 2655 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5052 */;
import timing_timing from "timing/timing" /* 5253 */;
import timingPresets from "timingPresets" /* 5256 */;
import HapticUtils from "HapticUtils" /* 5259 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 7175 */;
import useGame2 from "useGame" /* 8720 */;
import InterestPickerPerformance2 from "InterestPickerPerformance" /* 18040 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import GameStore from "GameStore" /* 2141 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18037 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
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
let closure_25;
let closure_26;
let closure_27;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Keyboard: hasOwnProperty, PixelRatio: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
({ FIRST_RUN_TRAY_ENTER: unpackModuleId, FIRST_RUN_TRAY_EXIT: closure_12, FOOTER_BORDER_WIDTH: map1, GRID_COLUMNS: closure_14, GRID_GAP: closure_15, MAX_SELECTIONS: closure_16, MIN_SELECTIONS: closure_17, SCREEN_HORIZONTAL_PADDING: closure_18, GRID_SELECTED_BORDER_WIDTH: closure_19, GRID_SELECTED_GAP_WIDTH: closure_20, TILE_ASPECT_RATIO: closure_21, TRAY_ENTER_MS: closure_22, TRAY_EXIT_MS: closure_23 } = InterestGamePickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = Fragment);
let closure_28 = createStyles.createStyles((borderRadius, minWidth) => {
  let obj15;
  let obj9;
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, skip: { color: nativeDefault.colors.TEXT_BRAND }, content: { flexGrow: 1 }, empty: { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 }, intro: { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 }, subtitle: { textAlign: "center" }, search: { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 }, searchField: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md }, navLeading: { minWidth, flexShrink: 0 }, navTitle: { flex: 1, alignSelf: "stretch", justifyContent: "center", minWidth: 0 }, navActions: { minWidth, flexShrink: 0, alignItems: "flex-end" }, grid: obj9, gridRow: { flexDirection: "row" }, tileWrapper: { borderRadius }, selectedGlow: { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 }, tile: { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, selected: { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, selectedInner: { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, status: { alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 }, footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }, footer: obj15, footerContent: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, footerActions: { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 }, nextButton: { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 });
  ({ flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 });
  obj9 = { gap, paddingHorizontal, paddingTop: 0 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md });
  ({ shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 });
  ({ flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 });
  obj15 = { borderTopWidth: map1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  ({ minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 });
  return obj;
});
let closure_29 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_30 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_31 = react.memo(function StaticInterestGameTile(game) {
  let formatToPlainStringResult;
  let gridPosition;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj5;
  let performanceTracker;
  let radius;
  let reduceMotion;
  let selected;
  let styles;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp6;
  let tmp7;
  let tmp8;
  let unavailable;
  let width;
  game = game.game;
  ({ width, selected, unavailable, styles, onPress: importDefault } = game);
  let context;
  ({ performanceTracker, gridPosition, reduceMotion, radius } = game);
  context = react.useContext(game(context[11]).InterestGridReadyContext);
  const items = [game.id, context];
  const callback = react.useCallback(() => context(game.id), items);
  let obj = game(context[12]);
  const sharedValue = obj.useSharedValue(0);
  const items1 = [closure_29, selected, sharedValue];
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items1;
  const obj2 = game(context[12]);
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
  const items2 = [tmp7, tmp8];
  InterestGamePickerTsx1.__closure = items2;
  InterestGamePickerTsx1.__workletHash = 14342270959027;
  InterestGamePickerTsx1.__initData = tmp6;
  const animatedStyle = obj2.useAnimatedStyle(InterestGamePickerTsx1);
  const items3 = [closure_30, unavailable, reduceMotion, , ];
  const useAnimatedStyle = tmp(tmp2[12]).useAnimatedStyle;
  game(context[12]);
  items3[3] = game(context[13]).withTiming;
  items3[4] = game(context[14]).timingFast;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
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
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  InterestGamePickerTsx2.__closure = items4;
  InterestGamePickerTsx2.__workletHash = 11929229272400;
  InterestGamePickerTsx2.__initData = tmp11;
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
    style: items5,
    children: closure_26(closure_8, obj5)
  };
  formatToPlainStringResult = undefined;
  const animatedStyle1 = useAnimatedStyle(InterestGamePickerTsx2);
  const tmp18 = closure_7;
  if (unavailable) {
    const intl = tmp(tmp2[15]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2655").v9v0uY, obj4);
  }
  items5 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: closure_6.roundToNearestPixel(width / closure_21) };
  items5[2] = size;
  obj5 = { style: styles.screen, children: items8 };
  const obj6 = { style: styles.tile, children: items7 };
  const obj7 = { style: items6, children: closure_25(require("GameCover"), { game, width, performanceTracker, gridPosition, onReady: callback }) };
  items6 = [styles.screen, animatedStyle1];
  const View = require("module_1654").View;
  items7 = [closure_25(View, obj7), closure_25(require("InterestTileEdge"), { radius, style: animatedStyle })];
  items8 = [closure_26(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: items9 };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    items9 = [closure_25(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items9[1] = closure_25(closure_8, obj10);
    selected = tmp22(closure_27, obj8);
  }
  items8[1] = selected;
  return closure_25(tmp18, obj3);
});
let closure_32 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let Button2;
  let HeaderTextButton;
  let SearchBar;
  let _undefined2;
  let c18;
  let columnGap;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
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
  let items40;
  let items41;
  let items42;
  let minResult;
  let minSelection;
  let obj12;
  let obj18;
  let obj20;
  let obj33;
  let obj35;
  let obj38;
  let obj39;
  let onLayout;
  let onRowSeen;
  let onScroll;
  let ref;
  let scrollY;
  let setGridRevealed;
  let str3;
  let str4;
  let string2;
  let subtitle;
  let sum1;
  let title;
  let tmp18;
  let tmp69;
  let tmp6Result3;
  let tmp70;
  let tmp71;
  let tmp72;
  let tmp73;
  let useReducedMotion;
  const f114145 = (item, index) => item !== first4[index];
  const f114162 = (arr, index) => {
    let items;
    let onPress;
    let radius;
    let width;
    let closure_0 = index;
    let obj = {
      style: items,
      onLayout(nativeEvent) {
        closure_53.onRowLayout(index + 1, nativeEvent);
        const tmp = index;
        const tmp3 = closure_34;
        if (!tmp3) {
          first.setRow(tmp, nativeEvent.nativeEvent.layout);
        }
      },
      children: arr.map((game, index) => {
        const hasItem = first2.includes(game.id);
        const obj = { game, performanceTracker, gridPosition: index * gesture + index, width, selected: hasItem, unavailable: !hasItem && memo7.length >= authStore3, reduceMotion: stateFromStores, styles, radius, onPress };
        return closure_25(closure_31, obj, game.id);
      })
    };
    items = [styles.gridRow, ];
    const obj2 = { columnGap };
    items[1] = obj2;
    return ref3(first, obj, index);
  };
  catalog = catalog.catalog;
  ({ performanceContext: importDefault, title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = closure_17;
  }
  const onContinue = catalog.onContinue;
  const onSkip = catalog.onSkip;
  let initialSelection = catalog.initialSelection;
  if (initialSelection === undefined) {
    initialSelection = [];
  }
  let flag = catalog.allowEmptySelection;
  if (flag === undefined) {
    flag = false;
  }
  const onGameToggle = catalog.onGameToggle;
  const onSearch = catalog.onSearch;
  c18 = undefined;
  let ref3;
  let stateFromStores;
  let c27;
  let c28;
  closure_29 = undefined;
  results = undefined;
  let error;
  let onSelect;
  let closure_34;
  let closure_35;
  let closure_36;
  let memo;
  let stateFromStores2;
  let ref4;
  let memo2;
  let memo4;
  let arr20;
  let memo5;
  let closure_44;
  let closure_45;
  let closure_46;
  let memo6;
  let memo7;
  let closure_49;
  let length;
  let first4;
  let closure_52;
  let closure_53;
  let sharedValue;
  let ref5;
  let result1;
  let ref6;
  let ref7;
  let closure_59;
  let closure_60;
  let obj = initialSelection;
  let tmp = onSkip;
  const performanceTracker = onSkip(initialSelection.useState(() => {
    const InterestPickerPerformance = InterestPickerPerformance2.InterestPickerPerformance;
    const random = Math.random();
    const interestPickerPerformance = new InterestPickerPerformance((arg0) => {
      const obj = { sample_rate: catalog(onContinue[19]).COVER_LOAD_SAMPLE_RATE };
      const track = require("AnalyticsUtils").track;
      const WATERWHEELS_INTEREST_COVER_LOADED = callback1.WATERWHEELS_INTEREST_COVER_LOADED;
      require("AnalyticsUtils");
      const merged = Object.assign(closure_1_1);
      const merged1 = Object.assign(arg0);
      return track(WATERWHEELS_INTEREST_COVER_LOADED, obj);
    }, (arg0) => {
      const track = require("AnalyticsUtils").track;
      const WATERWHEELS_INTEREST_PICKER_READY = callback1.WATERWHEELS_INTEREST_PICKER_READY;
      const obj = {};
      require("AnalyticsUtils");
      const merged = Object.assign(closure_1_1);
      const merged1 = Object.assign(arg0);
      return track(WATERWHEELS_INTEREST_PICKER_READY, obj);
    }, random < InterestPickerPerformance2.COVER_LOAD_SAMPLE_RATE);
    return interestPickerPerformance;
  }), 1)[0];
  let items = [performanceTracker];
  const effect = initialSelection.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => performanceTracker.finish("timeout"), catalog(onContinue[19]).PICKER_READY_TIMEOUT_MS);
    return () => {
      clearTimeout(closure_0);
      first.finish("abandoned");
    };
  }, items);
  let obj2 = onGameToggle;
  let tmp4 = catalog;
  const tmp5 = onContinue;
  const roundToNearestPixel = onGameToggle.roundToNearestPixel;
  let obj3 = catalog(onContinue[21]);
  const roundToNearestPixelResult = roundToNearestPixel(obj3.useToken(require("native").modules.mobile.INPUT_FIELD_RADIUS_LG));
  let c9 = roundToNearestPixelResult;
  const tmp8 = onSkip(initialSelection.useState(0), 2);
  let closure_10 = tmp8[1];
  const tmp9 = c28(roundToNearestPixelResult, Math.max(require("native").space.PX_64, tmp8[0]));
  const gridRow = tmp9;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp10 = onSkip(initialSelection.useState(0), 2);
  const first1 = tmp10[0];
  let closure_13 = tmp10[1];
  const tmp12 = onSkip(initialSelection.useState(() => {
    set = new Set(initialSelection);
    const fromResult = from(set);
    return fromResult.slice(0, authStore3);
  }), 2);
  const first2 = tmp12[0];
  let closure_15 = tmp12[1];
  const tmp13 = onSkip(initialSelection.useState(""), 2);
  let str = tmp13[0];
  let tmp14 = tmp13[1];
  const tmp15 = onSkip(initialSelection.useState(false), 2);
  const first3 = tmp15[0];
  closure_17 = tmp15[1];
  [tmp18, c18] = onSkip(initialSelection.useState(0), 2);
  onSkip(initialSelection.useState(0), 2);
  const ref1 = initialSelection.useRef(null);
  ref = initialSelection.useRef(false);
  const ref2 = initialSelection.useRef(false);
  const tmp20 = require("useKeyboardIsOpen")();
  let obj4 = catalog(onContinue[24]);
  const appEntryKey = obj4.useAppEntryKey();
  const callback = initialSelection.useCallback(() => {
    ref2.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_17(false);
  }, []);
  let items1 = [callback];
  const callback1 = initialSelection.useCallback(() => {
    if (ref.current) {
      ref2.current = true;
    } else {
      callback();
    }
  }, items1);
  const items2 = [callback];
  const callback2 = initialSelection.useCallback(() => {
    ref.current = false;
    if (ref2.current) {
      callback();
    }
  }, items2);
  const items3 = [appEntryKey, callback1];
  const effect1 = initialSelection.useEffect(() => {
    const obj = catalog(onContinue[23]);
    const obj2 = { appEntryKey };
    const keyboardIsOpen = obj.getKeyboardIsOpen(obj2);
    const obj3 = catalog(onContinue[23]);
    const obj4 = { appEntryKey };
    return obj3.subscribeToKeyboardIsOpen((arg0) => {
      const tmp = closure_0 && !arg0;
      closure_0 = arg0;
      if (tmp) {
        callback1();
      }
    }, obj4);
  }, items3);
  size = require("useMeasuredLayout")();
  const width = size.width;
  let num = 0;
  ({ ref, onLayout } = size);
  if (undefined !== width) {
    num = width;
  }
  const height = size.height;
  let num2 = 0;
  if (undefined !== height) {
    num2 = height;
  }
  ref3 = obj.useRef(null);
  const items4 = [c9];
  const tmp4Result = tmp4(tmp5[26]);
  stateFromStores = tmp4Result.useStateFromStores(items4, () => useReducedMotion.useReducedMotion);
  let result = (num - 2 * c18 - closure_15 * (first2 - 1)) / first2;
  const roundToNearestPixel2 = obj2.roundToNearestPixel;
  const rounded = Math.floor(result * obj2.get());
  const roundToNearestPixel2Result = roundToNearestPixel2(rounded / obj2.get());
  c27 = roundToNearestPixel2Result;
  const sum = closure_15 + (result - roundToNearestPixel2Result) * first2 / (first2 - 1);
  c28 = sum;
  let num3 = 4;
  const tmp27 = closure_15;
  const tmp28 = first2;
  if (roundToNearestPixel2Result > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num3 = Math.max(4, Math.ceil(num2 / (roundToNearestPixel2Result / ref2 + tmp27)) + 1);
  }
  closure_29 = obj.useRef(false);
  if (Number.isFinite(minSelection)) {
    let num4 = 0;
    const _Math3 = Math;
    const _Math4 = Math;
    if (!flag) {
      num4 = closure_17;
    }
    minResult = min(max(minSelection, num4), first3);
  } else {
    minResult = closure_17;
  }
  const tmp36 = require("useInterestGameSearch")(str);
  results = tmp36.results;
  error = tmp36.error;
  onSelect = tmp36.onSelect;
  const items5 = [results];
  const isLoading = tmp36.isLoading;
  memo = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items5);
  const tmp38 = str.trim().length > 0;
  closure_34 = tmp38;
  const items6 = [memo, catalog, first2];
  const memo1 = obj.useMemo(() => {
    const items = [...first2];
    set = new Set(items);
    return from(set);
  }, items6);
  const tmp40 = require("useGameRecords")(memo1);
  closure_35 = tmp40;
  closure_36 = tmp41;
  let tmp42 = catalog;
  if (tmp38 && null == error) {
    tmp42 = memo;
  }
  memo = tmp42;
  const items7 = [closure_10];
  const items8 = [tmp42];
  const tmp4Result7 = tmp4(tmp5[26]);
  const stateFromStores1 = tmp4Result7.useStateFromStores(items7, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items8);
  const items9 = [closure_10];
  const items10 = [catalog];
  const tmp4Result8 = tmp4(tmp5[26]);
  stateFromStores2 = tmp4Result8.useStateFromStores(items9, () => catalog.some((item) => closure_1_10.didFetchingFail(item)), items10);
  ref4 = obj.useRef(stateFromStores2);
  const items11 = [stateFromStores2];
  const effect2 = obj.useEffect(() => {
    const tmp2 = stateFromStores2 && !ref4.current;
    if (tmp2) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_ERROR);
    }
    ref4.current = stateFromStores2;
  }, items11);
  const items12 = [tmp40];
  memo2 = obj.useMemo(() => {
    map = new Map(closure_35.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items12);
  const items13 = [catalog, memo2];
  const items14 = [memo, memo2];
  const memo3 = obj.useMemo(() => {
    let closure_0 = memo2;
    return catalog.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onContinue[10]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items13);
  memo4 = obj.useMemo(() => {
    let closure_0 = memo2;
    return memo.flatMap((item) => {
      const value = closure_0.get(item);
      if (null != value) {
        let items;
        const obj = memo2(onContinue[10]);
        if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
          items = [value];
        }
        return items;
      }
      items = [];
    });
  }, items14);
  arr20 = memo3;
  if (tmp38 && null == error) {
    arr20 = memo4;
  }
  const items15 = [arr20];
  memo5 = obj.useMemo(() => {
    const obj = { length: Math.ceil(arr20.length / gesture) };
    return Array.from(obj, (arg0, arg1) => arr20.slice(arg1 * first2, (arg1 + 1) * first2));
  }, items15);
  closure_44 = tmp48;
  let tmp83Result3 = tmp38 && !tmp48 && null == error && 0 === arr20.length;
  closure_45 = tmp50;
  let tmp51 = !tmp38;
  let tmp83Result4 = tmp51;
  if (!tmp38) {
    tmp83Result4 = !tmp48;
  }
  closure_46 = tmp83Result4;
  const items16 = [tmp83Result4, roundToNearestPixel2Result, memo5, performanceTracker, first1, initialSelection.length > 0 || flag];
  const effect3 = obj.useEffect(() => {
    let tmp = closure_46 && c27 > 0;
    if (tmp) {
      let tmp4 = !closure_45;
      if (closure_45) {
        tmp4 = first1 > 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const setGames = first.setGames;
      let num3 = 0;
      const mapped = memo5.map((arr) => arr.map((id) => id.id));
      if (closure_45) {
        num3 = first1;
      }
      setGames(mapped, num3);
    }
  }, items16);
  if (tmp83Result4) {
    tmp83Result4 = 0 === arr20.length;
  }
  const items17 = [memo2, first2];
  memo6 = obj.useMemo(() => first2.flatMap((item) => {
    const value = closure_0.get(item);
    if (null != value) {
      let items;
      const obj = memo2(onContinue[10]);
      if (!obj.isAgeRestrictedContentClassification(value.contentClassification)) {
        items = [value];
      }
      return items;
    }
    items = [];
  }), items17);
  const items18 = [memo6];
  memo7 = obj.useMemo(() => memo6.map((id) => id.id), items18);
  let tmp54 = memo7.length >= minResult;
  if (tmp54) {
    let tmp55 = !flag;
    if (flag) {
      tmp55 = memo7.length === first2.length;
    }
    tmp54 = tmp55;
  }
  closure_49 = tmp54;
  length = memo7.length;
  const tmpResult = tmp(obj.useState(memo6), 2);
  first4 = tmpResult[0];
  let tmp58 = memo6.length > 0;
  const tmp57 = tmpResult[1];
  if (tmp58) {
    tmp58 = memo6.length !== first4.length || memo6.some(f114145);
    memo6.length !== first4.length || memo6.some(f114145);
  }
  if (tmp58) {
    tmp57(memo6);
  }
  let tmp61 = first4;
  if (flag) {
    tmp61 = first4;
    if (0 === length) {
      tmp61 = memo6;
    }
  }
  closure_52 = tmp62;
  const tmp6Result = require("useInterestRowVisibility");
  if (!tmp38) {
    tmp51 = !tmp48;
  }
  let num5 = 0;
  if ((length > 0 || flag) && !tmp20 && !first3) {
    let tmp64 = null;
    if (first1 > 0) {
      tmp64 = first1;
    }
    num5 = tmp64;
  }
  const tmp6ResultResult = tmp6Result(onRowSeen, tmp51, num5);
  closure_53 = tmp6ResultResult;
  const tmp4Result9 = tmp4(tmp5[32]);
  const interestScrollHeader = tmp4Result9.useInterestScrollHeader(tmp6ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmp4Result10 = tmp4(tmp5[12]);
  sharedValue = tmp4Result10.useSharedValue(0);
  const items19 = [onSelect, stateFromStores, sharedValue, first1, ];
  const useAnimatedStyle = tmp4(tmp5[12]).useAnimatedStyle;
  tmp4(tmp5[12]);
  items19[4] = require("native");
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp69, tmp70, tmp71, tmp72, tmp73] = items19;
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
  const items20 = [tmp70, tmp71, tmp72, tmp73];
  InterestGamePickerTsx3.__closure = items20;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp69;
  const items21 = [sharedValue, (length > 0 || flag) && !tmp20 && !first3, stateFromStores, flag];
  const animatedStyle = useAnimatedStyle(InterestGamePickerTsx3);
  const effect4 = obj.useEffect(() => {
    let obj;
    if (stateFromStores) {
      obj = { duration: 100 };
    } else if (flag) {
      obj = { duration: closure_52 ? authStore5 : sidebars };
      const obj2 = { duration: closure_52 ? authStore5 : sidebars };
    } else {
      obj = tmp3 ? unpackModuleId : authStore2;
    }
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_52) {
      num = 1;
    }
    let str = "respect-motion-settings";
    if (stateFromStores) {
      str = "animate-always";
    }
    const result = set(withTiming(num, obj, str));
  }, items21);
  ref5 = obj.useRef(length);
  const items22 = [length];
  const effect5 = obj.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl10.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2655.v9v0uY, obj));
    }
  }, items22);
  const tmp4Result12 = tmp4(tmp5[28]);
  result1 = tmp4Result12.normalizeGameAutocompleteQuery(str);
  ref6 = obj.useRef(null);
  const items23 = [result1, tmp38 && isLoading || stateFromStores1, error, results, memo4.length, onSearch];
  const effect6 = obj.useEffect(() => {
    if (null != result1) {
      const tmp2 = closure_44 || null != error || null == results || ref6.current === arr;
      if (!tmp2) {
        ref6.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref6.current = null;
    }
  }, items23);
  ref7 = obj.useRef(first2);
  const items24 = [onGameToggle, arr20];
  closure_59 = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    if (!closure_29.current) {
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
        closure_15(found);
        const findIndexResult = arr20.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp14 = null;
          if (-1 !== findIndexResult) {
            tmp14 = findIndexResult;
          }
          tmp12(arg0, tmp14, tmp4);
        }
      }
    }
  }, items24);
  closure_60 = tmp6(tmp5[34])((arg0) => {
    if (!closure_29.current) {
      callback();
      hasOwnProperty.dismiss();
      const current = ref7.current;
      if (current.length >= authStore3) {
        if (!current.includes(arg0)) {
          const _Date = Date;
          const timestamp = Date.now();
          ref3.current = timestamp;
          const intl = intl10.intl;
          const obj = { count: authStore3, max: authStore3 };
          const formatToPlainStringResult = intl.formatToPlainString(_modDef2655.v9v0uY, obj);
          const obj2 = HapticUtils;
          const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.NOTIFICATION_WARNING);
          const obj4 = { text: formatToPlainStringResult };
          const obj3 = ToastActionCreatorsDefault;
          obj3.open("INTEREST_GAME_PICKER_LIMIT", obj4);
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(formatToPlainStringResult);
        }
      }
      const tmp19 = closure_36;
      if (tmp19) {
        onSelect(arg0);
      }
      const triggerHapticFeedback = HapticUtils.triggerHapticFeedback;
      HapticUtils;
      const hasItem = current.includes(arg0);
      const HapticFeedbackTypes = HapticUtils.HapticFeedbackTypes;
      result1 = triggerHapticFeedback(hasItem ? HapticFeedbackTypes.SELECTION : HapticFeedbackTypes.RIGID);
      closure_59(arg0);
    }
  });
  const items25 = [tmp54, onContinue, memo7];
  const items26 = [onSkip, memo7];
  const callback3 = obj.useCallback(() => {
    const current = closure_29.current;
    let tmp2 = !current;
    const tmp = closure_29;
    if (!current) {
      tmp2 = closure_49;
    }
    if (tmp2) {
      tmp.current = true;
      onContinue(memo7);
    }
  }, items25);
  const items27 = [callback];
  const callback4 = obj.useCallback(() => {
    if (!closure_29.current) {
      tmp.current = true;
      onSkip(memo7);
    }
  }, items26);
  const items28 = [catalog];
  const callback5 = obj.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items27);
  const obj5 = { style: tmp9.screen, children: items39 };
  const obj6 = { ref, onLayout, style: tmp9.body, children: items30 };
  const callback6 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items28);
  const obj7 = { style: tmp9.header, children: items29 };
  const obj8 = { style: tmp9.navLeading };
  const SafeAreaPaddingView = tmp4(tmp5[37]).SafeAreaPaddingView;
  items29 = [ref3(performanceTracker, obj8), , ];
  const obj9 = { style: tmp9.navTitle, collapsable: false, children: ref3(tmp4(tmp5[32]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp18 }) };
  items29[1] = ref3(performanceTracker, obj9);
  const obj10 = {
    style: tmp9.navActions,
    onLayout(nativeEvent) {
      return closure_10(nativeEvent.nativeEvent.layout.width);
    },
    children: ref3(HeaderTextButton, obj12)
  };
  HeaderTextButton = tmp4(tmp5[38]).HeaderTextButton;
  let intl = tmp4(tmp5[15]).intl;
  const string = intl.string;
  const t = tmp4(tmp5[15]).t;
  const obj11 = { top: true, children: stateFromStores(performanceTracker, obj7) };
  obj12 = { label: string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 };
  items29[2] = ref3(performanceTracker, obj10);
  items30 = [ref3(SafeAreaPaddingView, obj11), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout(nativeEvent) {
      closure_53.onViewportLayout(nativeEvent);
      first.setViewport(nativeEvent.nativeEvent.layout.height);
    },
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp9.screen,
    contentContainerStyle: items31,
    onScrollBeginDrag() {
      ref.current = first3;
    },
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback2,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: items33
  };
  items31 = [tmp9.content, ];
  const ScrollView = tmp6(tmp5[12]).ScrollView;
  if (tmp20) {
    let num7 = 0;
    if (!tmp83Result3) {
      num7 = tmp6(tmp5[9]).space.PX_16;
    }
    sum1 = num7;
  } else if (0 !== length) {
    let num6 = 0;
    if (!tmp83Result3) {
      num6 = tmp6(tmp5[9]).space.PX_32;
    }
    sum1 = first1 + num6;
  } else {
    sum1 = bottom;
  }
  items31[1] = { paddingBottom: sum1 };
  const obj14 = {
    style: tmp9.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.height);
    },
    children: items32
  };
  items32 = [, ];
  const obj15 = { variant: "heading-xl/semibold", color: "text-strong", style: tmp9.subtitle, children: title };
  items32[0] = ref3(tmp4(tmp5[39]).Heading, obj15);
  const obj16 = { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items32[1] = ref3(tmp4(tmp5[39]).Text, obj16);
  items33 = [stateFromStores(performanceTracker, obj14), , ];
  const obj17 = { children: stateFromStores(performanceTracker, obj18) };
  obj18 = { style: tmp9.search, children: items34 };
  items34 = [ref3(tmp6(tmp5[40]), { scrollY, collapseOffset: tmp18 }), ];
  const obj19 = { style: tmp9.searchField, children: ref3(SearchBar, obj20) };
  obj20 = {
    ref: ref1,
    grow: false,
    spellCheck: false,
    autoComplete: "off",
    textContentType: "none",
    importantForAutofill: "no",
    accessibilityLabel: intl2.string(require("module_2655")["8Xenq+"]),
    onChange: tmp14,
    onFocus() {
      closure_17(true);
      ref.current = false;
      ref2.current = false;
    },
    onBlur: callback1,
    onSubmitEditing: callback5,
    placeholder: intl3.string(require("module_2655")["8Xenq+"])
  };
  SearchBar = tmp4(tmp5[41]).SearchBar;
  intl2 = tmp4(tmp5[15]).intl;
  intl3 = tmp4(tmp5[15]).intl;
  items34[1] = ref3(performanceTracker, obj19);
  items33[1] = ref3(performanceTracker, obj17);
  let tmp83Result = tmp48;
  const obj21 = {
    style: tmp9.content,
    onLayout(nativeEvent) {
      closure_53.onContentLayout(nativeEvent);
      first.setContentTop(nativeEvent.nativeEvent.layout.y);
    },
    children: items36
  };
  if (tmp83Result) {
    const obj22 = { style: tmp9.grid, accessible: true, accessibilityLabel: intl4.string(tmp4(tmp5[15]).t.ZTNur7), accessibilityState: { busy: true }, children: items35 };
    intl4 = tmp4(tmp5[15]).intl;
    let arr = roundToNearestPixel2Result > 0;
    if (arr) {
      const _Array = Array;
      const obj23 = { length: num3 };
      arr = Array.from(obj23, (arg0, arg1) => {
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
            size = { width, height: onGameToggle.roundToNearestPixel(width / ref2) };
            const obj2 = { style: items };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = gridRow);
            items1 = [ref3(require("InterestGhost"), obj2), ];
            const obj3 = { radius };
            items1[1] = ref3(require("InterestTileEdge"), obj3);
            return stateFromStores(first, obj, arg1);
          })
        };
        items = [gridRow.gridRow, ];
        let obj2 = { columnGap };
        items[1] = obj2;
        obj3 = { length: gesture };
        return ref3(metroImportAll, obj, arg1);
      });
    }
    items35 = [arr, ];
    const obj24 = { count: num3 * tmp28, tileWidth: roundToNearestPixel2Result, columnGap: sum, radius: roundToNearestPixelResult };
    items35[1] = ref3(require("InterestGhostShimmer"), obj24);
    tmp83Result = tmp83(tmp84, obj22);
  }
  items36 = [tmp83Result, , , ];
  if (tmp83Result3) {
    const obj25 = { style: tmp9.empty, children: items37 };
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: intl5.string(require("module_2655").w5cRz0) };
    const Heading = tmp4(tmp5[39]).Heading;
    intl5 = tmp4(tmp5[15]).intl;
    items37 = [ref3(Heading, obj26), ];
    const obj27 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: intl6.string(require("module_2655").Khsqzs) };
    const Text = tmp4(tmp5[39]).Text;
    intl6 = tmp4(tmp5[15]).intl;
    items37[1] = ref3(Text, obj27);
    tmp83Result3 = tmp83(tmp84, obj25);
  }
  items36[1] = tmp83Result3;
  if (tmp83Result4) {
    const obj28 = { style: tmp9.status, children: items38 };
    const obj29 = { variant: "body-lg/normal", color: "text-muted", style: tmp9.subtitle, children: string2(stateFromStores2 ? tmp6Result3["+np3yH"] : tmp6Result3.V7UsE0) };
    const Text2 = tmp4(tmp5[39]).Text;
    const intl7 = tmp4(tmp5[15]).intl;
    string2 = intl7.string;
    tmp6Result3 = require("module_2655");
    items38 = [ref3(Text2, obj29), ];
    let tmp85Result = catalog.length > 0;
    if (tmp85Result) {
      const obj30 = { onPress: callback6, size: "sm", text: intl8.string(tmp4(tmp5[15]).t["5911Lb"]), variant: "secondary" };
      const Button = tmp4(tmp5[44]).Button;
      intl8 = tmp4(tmp5[15]).intl;
      tmp85Result = tmp85(Button, obj30);
    }
    items38[1] = tmp85Result;
    tmp83Result4 = tmp83(tmp84, obj28);
  }
  items36[2] = tmp83Result4;
  let tmp85Result2 = !tmp48 && arr20.length > 0 && roundToNearestPixel2Result > 0;
  if (tmp85Result2) {
    const obj31 = { games: arr20, tileWidth: roundToNearestPixel2Result, columnGap: sum, radius: roundToNearestPixelResult, gridStyle: tmp9.grid, onRevealedChange: setGridRevealed, children: roundToNearestPixel2Result > 0 && memo5.map(f114162) };
    setGridRevealed = undefined;
    const tmp6Result4 = require("InterestGridReveal");
    if (!tmp38) {
      setGridRevealed = tmp6ResultResult.setGridRevealed;
    }
    let str2 = "browse";
    roundToNearestPixel2Result > 0 && memo5.map(f114162);
    if (tmp38) {
      str2 = "search";
    }
    tmp85Result2 = tmp85(tmp6Result4, obj31, str2);
  }
  items36[3] = tmp85Result2;
  items33[2] = stateFromStores(performanceTracker, obj21);
  items30[1] = stateFromStores(ScrollView, obj13);
  items39 = [stateFromStores(performanceTracker, obj6), ];
  const obj32 = { accessibilityElementsHidden: !((length > 0 || flag) && !tmp20 && !first3), importantForAccessibility: str3, pointerEvents: str4, style: items40, children: ref3(performanceTracker, obj33) };
  str3 = "no-hide-descendants";
  const View = tmp6(tmp5[12]).View;
  if ((length > 0 || flag) && !tmp20 && !first3) {
    str3 = "auto";
  }
  str4 = "none";
  if ((length > 0 || flag) && !tmp20 && !first3) {
    str4 = "auto";
  }
  items40 = [tmp9.footerPosition, animatedStyle];
  obj33 = {
    onLayout(nativeEvent) {
      return closure_13(nativeEvent.nativeEvent.layout.height);
    },
    style: items41,
    children: stateFromStores(performanceTracker, obj35)
  };
  items41 = [tmp9.footer, { paddingBottom: Math.max(bottom, tmp6(tmp5[9]).space.PX_16) }];
  obj35 = { style: tmp9.footerContent, children: items42 };
  items42 = [, ];
  ({ paddingBottom: Math.max(bottom, require("native").space.PX_16) });
  const obj36 = { games: tmp61, reduceMotion: stateFromStores, firstRun: !flag };
  items42[0] = ref3(require("InterestGameTray"), obj36);
  const obj37 = { style: tmp9.footerActions, children: ref3(performanceTracker, obj38) };
  obj38 = { style: tmp9.nextButton, children: ref3(Button2, obj39) };
  obj39 = { text: intl9.string(tmp4(tmp5[15]).t.PDTjLN), disabled: !tmp54, onPress: callback3, size: "lg", variant: "primary" };
  Button2 = tmp4(tmp5[44]).Button;
  intl9 = tmp4(tmp5[15]).intl;
  items42[1] = ref3(performanceTracker, obj37);
  items39[1] = ref3(View, obj32);
  return stateFromStores(performanceTracker, obj5);
};
