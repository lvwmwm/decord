// Module ID: 19032
// Function ID: 19033
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5307, 2141, 19025, 1072, 21, 5306, 575, 5962, 1655, 5548, 5551, 1113, 2569, 19033, 19037, 19036, 1256, 5902, 1630, 7643, 1499, 7994, 504, 19038, 9379, 12135, 19039, 19040, 5315, 7790, 5554, 6015, 9533, 7415, 9051, 5929, 19041, 7825, 19042, 5936, 19043, 2]
// Exports: default

// Module 19032 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl11 from "intl" /* 1113 */;
import _modDef2569 from "module_2569" /* 2569 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5315 */;
import timing_timing from "timing/timing" /* 5548 */;
import timingPresets from "timingPresets" /* 5551 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9379 */;
import useGame2 from "useGame" /* 9533 */;
import InterestPickerPerformance2 from "InterestPickerPerformance" /* 19036 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import GameStore from "GameStore" /* 2141 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 19025 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
let closure_23;
let closure_24;
let closure_25;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Keyboard: hasOwnProperty, PixelRatio: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
({ FOOTER_BORDER_WIDTH: unpackModuleId, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let closure_26 = createStyles.createStyles((borderRadius, minWidth) => {
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
let closure_27 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[unavailable,reduceMotion,withTiming,timingFast]=this.__closure;const opacity=unavailable?0.4:1;return{opacity:reduceMotion?opacity:withTiming(opacity,timingFast)};})" };
let closure_29 = react.memo(function StaticInterestGameTile(game) {
  let formatToPlainStringResult;
  let gridPosition;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj5;
  let performanceTracker;
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
  ({ performanceTracker, gridPosition, reduceMotion, radius } = game);
  let obj = game(sharedValue[11]);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_27, selected, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = game(sharedValue[11]);
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
  const items2 = [closure_28, unavailable, reduceMotion, , ];
  const useAnimatedStyle = tmp(tmp2[11]).useAnimatedStyle;
  game(sharedValue[11]);
  items2[3] = game(sharedValue[12]).withTiming;
  items2[4] = game(sharedValue[13]).timingFast;
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
    children: closure_24(closure_8, obj5)
  };
  formatToPlainStringResult = undefined;
  const animatedStyle1 = useAnimatedStyle(InterestGamePickerTsx2);
  const tmp16 = closure_7;
  if (unavailable) {
    const intl = tmp(tmp2[14]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2569").v9v0uY, obj4);
  }
  items4 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items4[2] = size;
  obj5 = { style: styles.screen, children: items7 };
  const obj6 = { style: styles.tile, children: items6 };
  const obj7 = { style: items5, children: closure_23(require("InterestGameCover"), { game, width, performanceTracker, gridPosition }) };
  items5 = [styles.screen, animatedStyle1];
  const View = require("module_1655").View;
  items6 = [closure_23(View, obj7), closure_23(require("InterestTileEdge"), { radius, style: animatedStyle })];
  items7 = [closure_24(closure_8, obj6), ];
  if (selected) {
    const obj8 = { children: items8 };
    const obj9 = { pointerEvents: "none", style: styles.selected };
    items8 = [closure_23(closure_8, obj9), ];
    const obj10 = { pointerEvents: "none", style: styles.selectedInner };
    items8[1] = closure_23(closure_8, obj10);
    selected = tmp20(closure_25, obj8);
  }
  items7[1] = selected;
  return closure_23(tmp16, obj3);
});
let closure_30 = { code: "(function InterestGamePickerTsx3(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let Button2;
  let HeaderTextButton;
  let SearchBar;
  let _undefined;
  let arr;
  let c17;
  let closure_14;
  let first3;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
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
  let items40;
  let items41;
  let minResult;
  let minSelection;
  let obj12;
  let obj17;
  let obj19;
  let obj30;
  let obj32;
  let obj35;
  let obj37;
  let onLayout;
  let onRowSeen;
  let onScroll;
  let ref;
  let scrollY;
  let str3;
  let str4;
  let string2;
  let subtitle;
  let sum;
  let title;
  let tmp18;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp6Result2;
  const f118923 = (item, index) => item !== first4[index];
  const f118940 = (arr, index) => {
    let items;
    let onPress;
    let radius;
    let width;
    let closure_0 = index;
    let obj = {
      style: items,
      onLayout(nativeEvent) {
        closure_50.onRowLayout(index + 1, nativeEvent);
        const tmp = index;
        const tmp3 = closure_33;
        if (!tmp3) {
          first.setRow(tmp, nativeEvent.nativeEvent.layout);
        }
      },
      children: arr.map((game, index) => {
        const hasItem = first2.includes(game.id);
        const obj = { game, performanceTracker, gridPosition: index * authStore2 + index, width, selected: hasItem, unavailable: !hasItem && memo7.length >= gesture, reduceMotion: stateFromStores, styles, radius, onPress };
        return sidebars(closure_29, obj, game.id);
      })
    };
    items = [styles.gridRow, ];
    const obj2 = { columnGap };
    items[1] = obj2;
    return callback1(c8, obj, index);
  };
  catalog = catalog.catalog;
  ({ performanceContext: importDefault, title, minSelection } = catalog);
  ({ onRowSeen, subtitle } = catalog);
  if (minSelection === undefined) {
    minSelection = first3;
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
  c17 = undefined;
  let ref3;
  let stateFromStores;
  let c26;
  let columnGap;
  let ref4;
  results = undefined;
  let error;
  let onSelect;
  let closure_33;
  let closure_34;
  let closure_35;
  let memo;
  let memo2;
  let memo4;
  let memo3;
  let memo5;
  let closure_41;
  let closure_42;
  let closure_43;
  let memo6;
  let memo7;
  let closure_46;
  let length;
  let first4;
  let closure_49;
  let closure_50;
  let sharedValue;
  let ref5;
  let result1;
  let ref6;
  let ref7;
  let closure_56;
  let closure_57;
  let obj = initialSelection;
  let tmp = onSkip;
  const performanceTracker = onSkip(initialSelection.useState(() => {
    const InterestPickerPerformance = InterestPickerPerformance2.InterestPickerPerformance;
    const random = Math.random();
    const interestPickerPerformance = new InterestPickerPerformance((arg0) => {
      const obj = { sample_rate: catalog(onContinue[18]).COVER_LOAD_SAMPLE_RATE };
      const track = require("AnalyticsUtils").track;
      const WATERWHEELS_INTEREST_COVER_LOADED = callback.WATERWHEELS_INTEREST_COVER_LOADED;
      require("AnalyticsUtils");
      const merged = Object.assign(closure_1_1);
      const merged1 = Object.assign(arg0);
      return track(WATERWHEELS_INTEREST_COVER_LOADED, obj);
    }, (arg0) => {
      const track = require("AnalyticsUtils").track;
      const WATERWHEELS_INTEREST_PICKER_READY = callback.WATERWHEELS_INTEREST_PICKER_READY;
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
    const timeout = setTimeout(() => performanceTracker.finish("timeout"), catalog(onContinue[18]).PICKER_READY_TIMEOUT_MS);
    return () => {
      clearTimeout(closure_0);
      first.finish("abandoned");
    };
  }, items);
  let obj2 = onSearch;
  let tmp4 = catalog;
  const tmp5 = onContinue;
  const roundToNearestPixel = onSearch.roundToNearestPixel;
  let obj3 = catalog(onContinue[20]);
  const roundToNearestPixelResult = roundToNearestPixel(obj3.useToken(require("native").modules.mobile.INPUT_FIELD_RADIUS_LG));
  let c8 = roundToNearestPixelResult;
  const tmp8 = onSkip(initialSelection.useState(0), 2);
  let closure_9 = tmp8[1];
  const tmp9 = c26(roundToNearestPixelResult, Math.max(require("native").space.PX_64, tmp8[0]));
  const gridRow = tmp9;
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp10 = onSkip(initialSelection.useState(0), 2);
  const first1 = tmp10[0];
  let closure_12 = tmp10[1];
  const tmp12 = onSkip(initialSelection.useState(() => {
    set = new Set(initialSelection);
    const fromResult = from(set);
    return fromResult.slice(0, gesture);
  }), 2);
  const first2 = tmp12[0];
  let max = tmp12[1];
  const tmp13 = onSkip(initialSelection.useState(""), 2);
  let str = tmp13[0];
  let tmp14 = tmp13[1];
  let tmp15 = onSkip(initialSelection.useState(false), 2);
  first3 = tmp15[0];
  let closure_16 = tmp15[1];
  [tmp18, c17] = onSkip(initialSelection.useState(0), 2);
  const tmp17 = onSkip(initialSelection.useState(0), 2);
  const ref1 = initialSelection.useRef(null);
  ref = initialSelection.useRef(false);
  const ref2 = initialSelection.useRef(false);
  const tmp20 = require("useKeyboardIsOpen")();
  let obj4 = catalog(onContinue[23]);
  const appEntryKey = obj4.useAppEntryKey();
  const callback = initialSelection.useCallback(() => {
    ref2.current = false;
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_16(false);
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
    const obj = catalog(onContinue[22]);
    const obj2 = { appEntryKey };
    const keyboardIsOpen = obj.getKeyboardIsOpen(obj2);
    const obj3 = catalog(onContinue[22]);
    const obj4 = { appEntryKey };
    return obj3.subscribeToKeyboardIsOpen((arg0) => {
      const tmp = closure_0 && !arg0;
      closure_0 = arg0;
      if (tmp) {
        callback1();
      }
    }, obj4);
  }, items3);
  const tmp26 = require("useMeasuredLayout")();
  const width = tmp26.width;
  let num = 0;
  ({ ref, onLayout } = tmp26);
  if (undefined !== width) {
    num = width;
  }
  ref3 = obj.useRef(null);
  const items4 = [closure_9];
  const tmp4Result = tmp4(tmp5[25]);
  stateFromStores = tmp4Result.useStateFromStores(items4, () => closure_9.useReducedMotion);
  let result = (num - 2 * closure_16 - first2 * (closure_12 - 1)) / closure_12;
  const roundToNearestPixel2 = obj2.roundToNearestPixel;
  const rounded = Math.floor(result * obj2.get());
  const roundToNearestPixel2Result = roundToNearestPixel2(rounded / obj2.get());
  c26 = roundToNearestPixel2Result;
  columnGap = first2 + (result - roundToNearestPixel2Result) * closure_12 / (closure_12 - 1);
  ref4 = obj.useRef(false);
  if (Number.isFinite(minSelection)) {
    let num2 = 0;
    const _Math = Math;
    const _Math2 = Math;
    max = Math.max;
    if (!flag) {
      num2 = first3;
    }
    minResult = min(max(minSelection, num2), max);
  } else {
    minResult = first3;
  }
  const tmp33 = require("useInterestGameSearch")(str);
  results = tmp33.results;
  error = tmp33.error;
  onSelect = tmp33.onSelect;
  const items5 = [results];
  const isLoading = tmp33.isLoading;
  memo = obj.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items5);
  const tmp35 = str.trim().length > 0;
  closure_33 = tmp35;
  const items6 = [memo, catalog, first2];
  const memo1 = obj.useMemo(() => {
    const items = [...first2];
    set = new Set(items);
    return from(set);
  }, items6);
  const tmp37 = require("useGameRecords")(memo1);
  closure_34 = tmp37;
  closure_35 = tmp38;
  let tmp39 = catalog;
  if (tmp35 && null == error) {
    tmp39 = memo;
  }
  memo = tmp39;
  const items7 = [gridRow];
  const items8 = [tmp39];
  const tmp4Result7 = tmp4(tmp5[25]);
  const stateFromStores1 = tmp4Result7.useStateFromStores(items7, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items8);
  const items9 = [gridRow];
  const items10 = [catalog];
  const items11 = [tmp37];
  const tmp4Result8 = tmp4(tmp5[25]);
  const stateFromStores2 = tmp4Result8.useStateFromStores(items9, () => catalog.some((item) => gridRow.didFetchingFail(item)), items10);
  memo2 = obj.useMemo(() => {
    map = new Map(closure_34.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items11);
  const items12 = [catalog, memo2];
  memo3 = obj.useMemo(() => {
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
  }, items12);
  const items13 = [memo, memo2];
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
  }, items13);
  if (tmp35 && null == error) {
    memo3 = memo4;
  }
  const items14 = [memo3];
  memo5 = obj.useMemo(() => {
    const obj = { length: Math.ceil(memo3.length / authStore2) };
    return Array.from(obj, (arg0, arg1) => memo3.slice(arg1 * closure_12, (arg1 + 1) * closure_12));
  }, items14);
  closure_41 = tmp43;
  let tmp77Result = tmp35 && !tmp43 && null == error && 0 === memo3.length;
  closure_42 = tmp45;
  let tmp46 = !tmp35;
  let tmp77Result2 = tmp46;
  if (!tmp35) {
    tmp77Result2 = !tmp43;
  }
  closure_43 = tmp77Result2;
  const items15 = [tmp77Result2, roundToNearestPixel2Result, memo5, performanceTracker, first1, initialSelection.length > 0 || flag];
  const effect2 = obj.useEffect(() => {
    let tmp = closure_43 && c26 > 0;
    if (tmp) {
      let tmp4 = !closure_42;
      if (closure_42) {
        tmp4 = first1 > 0;
      }
      tmp = tmp4;
    }
    if (tmp) {
      const setGames = first.setGames;
      let num3 = 0;
      const mapped = memo5.map((arr) => arr.map((id) => id.id));
      if (closure_42) {
        num3 = first1;
      }
      setGames(mapped, num3);
    }
  }, items15);
  if (tmp77Result2) {
    tmp77Result2 = 0 === memo3.length;
  }
  const items16 = [memo2, first2];
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
  }), items16);
  const items17 = [memo6];
  memo7 = obj.useMemo(() => memo6.map((id) => id.id), items17);
  let tmp49 = memo7.length >= minResult;
  if (tmp49) {
    let tmp50 = !flag;
    if (flag) {
      tmp50 = memo7.length === first2.length;
    }
    tmp49 = tmp50;
  }
  closure_46 = tmp49;
  length = memo7.length;
  const tmpResult = tmp(obj.useState(memo6), 2);
  first4 = tmpResult[0];
  let tmp53 = memo6.length > 0;
  const tmp52 = tmpResult[1];
  if (tmp53) {
    tmp53 = memo6.length !== first4.length || memo6.some(f118923);
    memo6.length !== first4.length || memo6.some(f118923);
  }
  if (tmp53) {
    tmp52(memo6);
  }
  let arr28 = first4;
  if (flag) {
    arr28 = first4;
    if (0 === length) {
      arr28 = memo6;
    }
  }
  closure_49 = tmp56;
  const tmp6Result = require("useInterestRowVisibility");
  if (!tmp35) {
    tmp46 = !tmp43;
  }
  let num3 = 0;
  if ((length > 0 || flag) && !tmp20 && !first3) {
    let tmp58 = null;
    if (first1 > 0) {
      tmp58 = first1;
    }
    num3 = tmp58;
  }
  const tmp6ResultResult = tmp6Result(onRowSeen, tmp46, num3);
  closure_50 = tmp6ResultResult;
  const tmp4Result9 = tmp4(tmp5[30]);
  const interestScrollHeader = tmp4Result9.useInterestScrollHeader(tmp6ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmp4Result10 = tmp4(tmp5[11]);
  sharedValue = tmp4Result10.useSharedValue(0);
  const items18 = [error, stateFromStores, sharedValue, first1, ];
  const useAnimatedStyle = tmp4(tmp5[11]).useAnimatedStyle;
  tmp4(tmp5[11]);
  items18[4] = require("native");
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp63, tmp64, tmp65, tmp66, tmp67] = items18;
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
  const items19 = [tmp64, tmp65, tmp66, tmp67];
  InterestGamePickerTsx3.__closure = items19;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp63;
  const items20 = [sharedValue, (length > 0 || flag) && !tmp20 && !first3, stateFromStores];
  const animatedStyle = useAnimatedStyle(InterestGamePickerTsx3);
  const effect3 = obj.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_49) {
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
  }, items20);
  ref5 = obj.useRef(length);
  const items21 = [length];
  const effect4 = obj.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2569.v9v0uY, obj));
    }
  }, items21);
  const tmp4Result12 = tmp4(tmp5[27]);
  result1 = tmp4Result12.normalizeGameAutocompleteQuery(str);
  ref6 = obj.useRef(null);
  const items22 = [result1, tmp35 && isLoading || stateFromStores1, error, results, memo4.length, onSearch];
  const effect5 = obj.useEffect(() => {
    if (null != result1) {
      const tmp2 = closure_41 || null != error || null == results || ref6.current === arr;
      if (!tmp2) {
        ref6.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref6.current = null;
    }
  }, items22);
  ref7 = obj.useRef(first2);
  const items23 = [onGameToggle, memo3];
  closure_56 = obj.useCallback((arg0) => {
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
        closure_14(found);
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
  }, items23);
  closure_57 = tmp6(tmp5[32])((arg0) => {
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
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2569.v9v0uY, obj);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        const obj3 = ToastActionCreatorsDefault;
        obj3.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    const tmp15 = closure_35;
    if (tmp15) {
      onSelect(arg0);
    }
    closure_56(arg0);
  });
  const items24 = [tmp49, onContinue, memo7];
  const items25 = [onSkip, memo7];
  const callback3 = obj.useCallback(() => {
    const current = ref4.current;
    let tmp2 = !current;
    const tmp = ref4;
    if (!current) {
      tmp2 = closure_46;
    }
    if (tmp2) {
      tmp.current = true;
      onContinue(memo7);
    }
  }, items24);
  const items26 = [callback];
  const callback4 = obj.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      onSkip(memo7);
    }
  }, items25);
  const items27 = [catalog];
  const callback5 = obj.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items26);
  const obj5 = { style: tmp9.screen, children: items37 };
  const obj6 = { ref, onLayout, style: tmp9.body, children: items29 };
  const callback6 = obj.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items27);
  const obj7 = { style: tmp9.header, children: items28 };
  const obj8 = { style: tmp9.navLeading };
  const SafeAreaPaddingView = tmp4(tmp5[36]).SafeAreaPaddingView;
  items28 = [callback1(c8, obj8), , ];
  const obj9 = { style: tmp9.navTitle, collapsable: false, children: callback1(tmp4(tmp5[30]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp18 }) };
  items28[1] = callback1(c8, obj9);
  const obj10 = {
    style: tmp9.navActions,
    onLayout(nativeEvent) {
      return closure_9(nativeEvent.nativeEvent.layout.width);
    },
    children: callback1(HeaderTextButton, obj12)
  };
  HeaderTextButton = tmp4(tmp5[37]).HeaderTextButton;
  let intl = tmp4(tmp5[14]).intl;
  const string = intl.string;
  const t = tmp4(tmp5[14]).t;
  const obj11 = { top: true, children: ref3(c8, obj7) };
  obj12 = { label: string(flag ? t["ETE/oC"] : t["5Wxrcd"]), labelStyle: tmp9.skip, onPress: callback4 };
  items28[2] = callback1(c8, obj10);
  items29 = [callback1(SafeAreaPaddingView, obj11), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout(nativeEvent) {
      closure_50.onViewportLayout(nativeEvent);
      first.setViewport(nativeEvent.nativeEvent.layout.height);
    },
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp9.screen,
    contentContainerStyle: items30,
    onScrollBeginDrag() {
      ref.current = first3;
    },
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback2,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: items32
  };
  items30 = [tmp9.content, ];
  const ScrollView = tmp6(tmp5[11]).ScrollView;
  if (tmp20) {
    let num5 = 0;
    if (!tmp77Result) {
      num5 = tmp6(tmp5[9]).space.PX_16;
    }
    sum = num5;
  } else if (0 !== length) {
    let num4 = 0;
    if (!tmp77Result) {
      num4 = tmp6(tmp5[9]).space.PX_32;
    }
    sum = first1 + num4;
  } else {
    sum = bottom;
  }
  items30[1] = { paddingBottom: sum };
  const obj14 = {
    style: tmp9.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.height);
    },
    children: items31
  };
  items31 = [callback1(tmp4(tmp5[38]).Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), ];
  const obj15 = { style: tmp9.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items31[1] = callback1(tmp4(tmp5[38]).Text, obj15);
  items32 = [ref3(c8, obj14), , ];
  const obj16 = { children: ref3(c8, obj17) };
  obj17 = { style: tmp9.search, children: items33 };
  items33 = [callback1(tmp6(tmp5[39]), { scrollY, collapseOffset: tmp18 }), ];
  const obj18 = { style: tmp9.searchField, children: callback1(SearchBar, obj19) };
  obj19 = {
    ref: ref1,
    grow: false,
    spellCheck: false,
    autoComplete: "off",
    textContentType: "none",
    importantForAutofill: "no",
    accessibilityLabel: intl2.string(require("module_2569")["8Xenq+"]),
    onChange: tmp14,
    onFocus() {
      closure_16(true);
      ref.current = false;
      ref2.current = false;
    },
    onBlur: callback1,
    onSubmitEditing: callback5,
    placeholder: intl3.string(require("module_2569")["8Xenq+"])
  };
  SearchBar = tmp4(tmp5[40]).SearchBar;
  intl2 = tmp4(tmp5[14]).intl;
  intl3 = tmp4(tmp5[14]).intl;
  items33[1] = callback1(c8, obj18);
  items32[1] = callback1(c8, obj16);
  let tmp79Result = tmp43;
  const obj20 = {
    style: tmp9.content,
    onLayout(nativeEvent) {
      closure_50.onContentLayout(nativeEvent);
      first.setContentTop(nativeEvent.nativeEvent.layout.y);
    },
    children: items34
  };
  if (tmp79Result) {
    const obj21 = { style: tmp9.grid, accessible: true, accessibilityLabel: intl4.string(tmp4(tmp5[14]).t.ZTNur7), accessibilityState: { busy: true }, children: arr };
    intl4 = tmp4(tmp5[14]).intl;
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
            size = { width, height: onSearch.roundToNearestPixel(width / ref) };
            const obj2 = { style: items };
            items = [, ];
            ({ screen: arr[0], tileWrapper: arr[1] } = gridRow);
            items1 = [callback1(require("InterestGhost"), obj2), ];
            const obj3 = { radius };
            items1[1] = callback1(require("InterestTileEdge"), obj3);
            return ref3(c8, obj, arg1);
          })
        };
        items = [gridRow.gridRow, ];
        let obj2 = { columnGap };
        items[1] = obj2;
        obj3 = { length: authStore2 };
        return sidebars(metroImportAll, obj, arg1);
      });
    }
    tmp79Result = tmp79(tmp78, obj21);
  }
  items34 = [tmp79Result, , , ];
  if (tmp77Result) {
    const obj22 = { style: tmp9.empty, children: items35 };
    const obj23 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: intl5.string(require("module_2569").w5cRz0) };
    const Heading = tmp4(tmp5[38]).Heading;
    intl5 = tmp4(tmp5[14]).intl;
    items35 = [callback1(Heading, obj23), ];
    const obj24 = { variant: "body-sm/semibold", color: "text-muted", style: tmp9.subtitle, children: intl6.string(require("module_2569").Khsqzs) };
    const Text = tmp4(tmp5[38]).Text;
    intl6 = tmp4(tmp5[14]).intl;
    items35[1] = callback1(Text, obj24);
    tmp77Result = tmp77(tmp78, obj22);
  }
  items34[1] = tmp77Result;
  if (tmp77Result2) {
    const obj25 = { style: tmp9.status, children: items36 };
    const obj26 = { variant: "body-lg/normal", color: "text-muted", style: tmp9.subtitle, children: string2(stateFromStores2 ? tmp6Result2["+np3yH"] : tmp6Result2.V7UsE0) };
    const Text2 = tmp4(tmp5[38]).Text;
    const intl7 = tmp4(tmp5[14]).intl;
    string2 = intl7.string;
    tmp6Result2 = require("module_2569");
    items36 = [callback1(Text2, obj26), ];
    let tmp79Result4 = catalog.length > 0;
    if (tmp79Result4) {
      const obj27 = { onPress: callback6, size: "sm", text: intl8.string(require("module_2569").uGhymA), variant: "secondary" };
      const Button = tmp4(tmp5[42]).Button;
      intl8 = tmp4(tmp5[14]).intl;
      tmp79Result4 = tmp79(Button, obj27);
    }
    items36[1] = tmp79Result4;
    tmp77Result2 = tmp77(tmp78, obj25);
  }
  items34[2] = tmp77Result2;
  let tmp79Result5 = !tmp43 && memo3.length > 0;
  if (tmp79Result5) {
    let str2 = "browse";
    const obj28 = { style: tmp9.grid, children: roundToNearestPixel2Result > 0 && memo5.map(f118940) };
    roundToNearestPixel2Result > 0 && memo5.map(f118940);
    if (tmp35) {
      str2 = "search";
    }
    tmp79Result5 = tmp79(tmp78, obj28, str2);
  }
  items34[3] = tmp79Result5;
  items32[2] = ref3(c8, obj20);
  items29[1] = ref3(ScrollView, obj13);
  items37 = [ref3(c8, obj6), ];
  const obj29 = { accessibilityElementsHidden: !((length > 0 || flag) && !tmp20 && !first3), importantForAccessibility: str3, pointerEvents: str4, style: items38, children: callback1(c8, obj30) };
  str3 = "no-hide-descendants";
  const View = tmp6(tmp5[11]).View;
  if ((length > 0 || flag) && !tmp20 && !first3) {
    str3 = "auto";
  }
  str4 = "none";
  if ((length > 0 || flag) && !tmp20 && !first3) {
    str4 = "auto";
  }
  items38 = [tmp9.footerPosition, animatedStyle];
  obj30 = {
    onLayout(nativeEvent) {
      return closure_12(nativeEvent.nativeEvent.layout.height);
    },
    style: items39,
    children: ref3(c8, obj32)
  };
  items39 = [tmp9.footer, { paddingBottom: Math.max(bottom, tmp6(tmp5[9]).space.PX_16) }];
  obj32 = { style: tmp9.footerContent, children: items40 };
  items40 = [, ];
  ({ paddingBottom: Math.max(bottom, require("native").space.PX_16) });
  items40[0] = callback1(require("InterestGameTray"), { games: arr28, coverWidth: roundToNearestPixel2Result, reduceMotion: stateFromStores });
  let tmp79Result6 = arr28.length >= 7;
  const obj33 = { style: tmp9.footerActions, children: items41 };
  if (tmp79Result6) {
    const obj34 = { variant: "body-sm/medium", color: "text-default", children: intl9.format(require("module_2569").v9v0uY, obj35) };
    const Text3 = tmp4(tmp5[38]).Text;
    intl9 = tmp4(tmp5[14]).intl;
    obj35 = { count: arr28.length, max };
    tmp79Result6 = tmp79(Text3, obj34);
  }
  items41 = [tmp79Result6, ];
  const obj36 = { style: tmp9.nextButton, children: callback1(Button2, obj37) };
  obj37 = { text: intl10.string(tmp4(tmp5[14]).t.PDTjLN), disabled: !tmp49, onPress: callback3, size: "lg", variant: "primary" };
  Button2 = tmp4(tmp5[42]).Button;
  intl10 = tmp4(tmp5[14]).intl;
  items41[1] = callback1(c8, obj36);
  items40[1] = ref3(c8, obj33);
  items37[1] = callback1(View, obj29);
  return ref3(c8, obj5);
};
