// Module ID: 18793
// Function ID: 18794
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5143, 2138, 18794, 21, 5142, 575, 5786, 1652, 5372, 5375, 1113, 2534, 18795, 18798, 5726, 1627, 7175, 1496, 9075, 504, 18799, 8758, 15240, 18800, 18801, 5151, 7205, 5378, 5839, 7547, 7358, 9908, 5753, 18802, 7285, 18803, 5760, 18804, 2]
// Exports: default

// Module 18793 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1113 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _modDef2534 from "module_2534" /* 2534 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5151 */;
import timing_timing from "timing/timing" /* 5372 */;
import timingPresets from "timingPresets" /* 5375 */;
import HapticUtils from "HapticUtils" /* 5378 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import useGame2 from "useGame" /* 7547 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8758 */;
import InterestGameCoverDefault from "InterestGameCover" /* 18795 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18798 */;
import InterestGhostDefault from "InterestGhost" /* 18803 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import GameStore from "GameStore" /* 2138 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18794 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

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
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, skip: { color: nativeDefault.colors.TEXT_BRAND }, content: { flexGrow: 1 }, empty: { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 }, intro: { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 }, subtitle: { textAlign: "center" }, search: { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 }, searchField: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md }, navLeading: { minWidth, flexShrink: 0 }, navTitle: { flex: 1, alignSelf: "stretch", justifyContent: "center", minWidth: 0 }, navActions: { minWidth, flexShrink: 0, alignItems: "flex-end" }, grid: obj9, tileWrapper: { borderRadius }, selectedGlow: { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 }, tile: { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, selected: { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, selectedInner: { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, status: { alignItems: "center", gap: nativeDefault.space.PX_16, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 }, footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }, footer: obj15, footerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, footerActions: { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 }, nextButton: { minWidth: nativeDefault.space.PX_96 + nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 });
  ({ flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16 });
  obj9 = { flexDirection: "row", flexWrap: "wrap", gap: map1, paddingHorizontal, paddingTop: 0 };
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
  let _slicedToArray;
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
  ({ width, selected, unavailable, styles, onPress: importDefault, row: dependencyMap, onRowLayout: _slicedToArray } = game);
  ({ reduceMotion, radius } = game);
  let obj = game(1652);
  const sharedValue = obj.useSharedValue(0);
  const items = [closure_26, selected, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = game(1652);
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
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  game(1652);
  items2[3] = game(5372).withTiming;
  items2[4] = game(5375).timingFast;
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
    onLayout(arg0) {
      return space(dependencyMap, arg0);
    },
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
    const intl = tmp(1113).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2534.v9v0uY, obj4);
  }
  items4 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items4[2] = size;
  obj5 = { style: styles.screen, children: items7 };
  const obj6 = { style: styles.tile, children: items6 };
  const obj7 = { style: items5, children: closure_22(InterestGameCoverDefault, { game, width }) };
  items5 = [styles.screen, animatedStyle1];
  const View = _modDef1652.View;
  items6 = [closure_22(View, obj7), closure_22(InterestTileEdgeDefault, { radius, style: animatedStyle })];
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
  let items25;
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
  let items40;
  let minSelection;
  let obj12;
  let obj17;
  let obj19;
  let obj33;
  let obj35;
  let obj38;
  let obj40;
  let obj8;
  let onLayout;
  let onRowSeen;
  let onScroll;
  let radius;
  let ref;
  let ref1;
  let scrollY;
  let str3;
  let str4;
  let string;
  let subtitle;
  let sum1;
  let title;
  let tmp17;
  let tmp3Result2;
  let tmp63;
  let tmp64;
  let tmp65;
  let tmp66;
  let tmp67;
  let tmp9;
  const f116554 = (item, index) => item !== first2[index];
  const f116569 = (game, index) => {
    const hasItem = first.includes(game.id);
    const tmp2 = !hasItem && memo6.length >= gesture;
    const obj = { row: Math.floor(index / authStore2) + 1, onRowLayout: onRowLayout.onRowLayout, game, width, selected: hasItem, unavailable: tmp2, reduceMotion: stateFromStores, styles, radius, onPress };
    return authStore5(closure_28, obj, game.id);
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
  let ref4;
  let bound;
  results = undefined;
  let error;
  let onSelect;
  let closure_30;
  let closure_31;
  let memo;
  let memo2;
  let memo4;
  let arr17;
  let closure_36;
  let memo5;
  let memo6;
  let length;
  let first2;
  let closure_41;
  let onRowLayout;
  let sharedValue;
  let ref5;
  let result1;
  let ref6;
  let ref7;
  let closure_48;
  let onPress;
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
  const tmp7 = bound(roundToNearestPixelResult, Math.max(onContinue(onSkip[8]).space.PX_64, tmp6[0]));
  const styles = tmp7;
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
  const sum = closure_13 + (result - roundToNearestPixel2Result) * first1 / (first1 - 1);
  ref4 = obj3.useRef(false);
  const tmp27 = first1;
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, ref1), max);
  } else {
    bound = ref1;
  }
  const tmp35 = tmp3(tmp2[23])(str);
  results = tmp35.results;
  error = tmp35.error;
  onSelect = tmp35.onSelect;
  const items4 = [results];
  const isLoading = tmp35.isLoading;
  memo = obj3.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items4);
  const tmp37 = str.trim().length > 0;
  const items5 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items5);
  const tmp39 = tmp3(tmp2[25])(memo1);
  closure_30 = tmp39;
  closure_31 = tmp40;
  let tmp41 = catalog;
  if (tmp37 && null == error) {
    tmp41 = memo;
  }
  memo = tmp41;
  const items6 = [first];
  const items7 = [tmp41];
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
  const items10 = [tmp39];
  const tmpResult8 = tmp(tmp2[22]);
  const stateFromStores2 = tmpResult8.useStateFromStores(items8, () => catalog.some((item) => first.didFetchingFail(item)), items9);
  memo2 = obj3.useMemo(() => {
    map = new Map(closure_30.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items10);
  const items11 = [catalog, memo2];
  const items12 = [memo, memo2];
  const memo3 = obj3.useMemo(() => {
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
  arr17 = memo3;
  if (tmp37 && null == error) {
    arr17 = memo4;
  }
  closure_36 = tmp46;
  let tmp77Result = tmp37 && !tmp46 && null == error && 0 === arr17.length;
  let tmp48 = !tmp37;
  let tmp77Result2 = tmp48;
  if (!tmp37) {
    tmp77Result2 = !tmp46;
  }
  if (tmp77Result2) {
    tmp77Result2 = 0 === arr17.length;
  }
  const items13 = [memo2, first];
  memo5 = obj3.useMemo(() => first.flatMap((item) => {
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
  }), items13);
  const items14 = [memo5];
  memo6 = obj3.useMemo(() => memo5.map((id) => id.id), items14);
  length = memo6.length;
  const tmp50 = memo6.length >= bound;
  const tmp5Result = tmp5(obj3.useState(memo5), 2);
  first2 = tmp5Result[0];
  let tmp53 = memo5.length > 0;
  const tmp52 = tmp5Result[1];
  if (tmp53) {
    tmp53 = memo5.length !== first2.length || memo5.some(f116554);
    memo5.length !== first2.length || memo5.some(f116554);
  }
  if (tmp53) {
    tmp52(memo5);
  }
  closure_41 = tmp56;
  const tmp3Result = tmp3(tmp2[26]);
  if (!tmp37) {
    tmp48 = !tmp46;
  }
  let num2 = 0;
  if (length > 0 && !tmp19 && !first1) {
    let tmp58 = null;
    if (tmp9 > 0) {
      tmp58 = tmp9;
    }
    num2 = tmp58;
  }
  const tmp3ResultResult = tmp3Result(onRowSeen, tmp48, num2);
  onRowLayout = tmp3ResultResult;
  const tmpResult9 = tmp(tmp2[27]);
  const interestScrollHeader = tmpResult9.useInterestScrollHeader(tmp3ResultResult.onScroll);
  ({ scrollY, onScroll } = interestScrollHeader);
  const tmpResult10 = tmp(tmp2[10]);
  sharedValue = tmpResult10.useSharedValue(0);
  const items15 = [memo, stateFromStores, sharedValue, tmp9, ];
  const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items15[4] = tmp3(tmp2[8]);
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp63, tmp64, tmp65, tmp66, tmp67] = items15;
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
  const items16 = [tmp64, tmp65, tmp66, tmp67];
  InterestGamePickerTsx3.__closure = items16;
  InterestGamePickerTsx3.__workletHash = 5612593946705;
  InterestGamePickerTsx3.__initData = tmp63;
  const items17 = [sharedValue, length > 0 && !tmp19 && !first1, stateFromStores];
  const animatedStyle = useAnimatedStyle(InterestGamePickerTsx3);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_41) {
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
  }, items17);
  ref5 = obj3.useRef(length);
  const items18 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref5.current !== length) {
      ref5.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl11.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2534.v9v0uY, obj));
    }
  }, items18);
  const tmpResult12 = tmp(tmp2[24]);
  result1 = tmpResult12.normalizeGameAutocompleteQuery(str);
  ref6 = obj3.useRef(null);
  const items19 = [result1, tmp37 && isLoading || stateFromStores1, error, results, memo4.length, onSearch];
  const effect3 = obj3.useEffect(() => {
    if (null != result1) {
      const tmp2 = closure_36 || null != error || null == results || ref6.current === arr;
      if (!tmp2) {
        ref6.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref6.current = null;
    }
  }, items19);
  ref7 = obj3.useRef(first);
  const items20 = [onGameToggle, arr17];
  closure_48 = obj3.useCallback((arg0) => {
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
        const findIndexResult = arr17.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp14 = null;
          if (-1 !== findIndexResult) {
            tmp14 = findIndexResult;
          }
          tmp12(arg0, tmp14, tmp4);
        }
      }
    }
  }, items20);
  onPress = tmp3(tmp2[29])((arg0) => {
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
        const formatToPlainStringResult = intl.formatToPlainString(_modDef2534.v9v0uY, obj);
        const obj2 = HapticUtils;
        const result = obj2.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        const obj4 = { text: formatToPlainStringResult };
        const obj3 = ToastActionCreatorsDefault;
        obj3.open("INTEREST_GAME_PICKER_LIMIT", obj4);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
    const tmp15 = closure_31;
    if (tmp15) {
      onSelect(arg0);
    }
    closure_48(arg0);
  });
  const items21 = [bound, onContinue, memo6];
  const items22 = [onSkip, memo6];
  const callback3 = obj3.useCallback(() => {
    let current = ref4.current;
    const tmp = ref4;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo6);
    }
  }, items21);
  const items23 = [callback];
  const callback4 = obj3.useCallback(() => {
    if (!ref4.current) {
      tmp.current = true;
      onSkip(memo6);
    }
  }, items22);
  const items24 = [catalog];
  const callback5 = obj3.useCallback(() => {
    callback();
    hasOwnProperty.dismiss();
  }, items23);
  const obj5 = { style: tmp7.screen, children: items36 };
  const obj6 = { ref, onLayout, style: tmp7.body, children: items26 };
  const callback6 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item, true];
        return items;
      })
    ];
    useGame.refetchMany.apply(items);
  }, items24);
  const obj7 = { top: true, children: c23(styles, obj8) };
  obj8 = { style: tmp7.header, children: items25 };
  const obj9 = { style: tmp7.navLeading };
  const SafeAreaPaddingView = tmp(tmp2[33]).SafeAreaPaddingView;
  items25 = [stateFromStores(styles, obj9), , ];
  const obj10 = { style: tmp7.navTitle, collapsable: false, children: stateFromStores(tmp(tmp2[27]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp17 }) };
  items25[1] = stateFromStores(styles, obj10);
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
  items25[2] = stateFromStores(styles, obj11);
  items26 = [stateFromStores(SafeAreaPaddingView, obj7), ];
  const obj13 = {
    stickyHeaderIndices: [1],
    onScroll,
    onLayout: tmp3ResultResult.onViewportLayout,
    scrollEventThrottle: 16,
    contentInsetAdjustmentBehavior: "never",
    style: tmp7.screen,
    contentContainerStyle: items27,
    onScrollBeginDrag() {
      ref.current = first1;
    },
    onScrollEndDrag: callback2,
    onMomentumScrollEnd: callback2,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "handled",
    automaticallyAdjustKeyboardInsets: false,
    children: items29
  };
  items27 = [tmp7.content, ];
  const ScrollView = tmp3(tmp2[10]).ScrollView;
  if (tmp19) {
    let num4 = 0;
    if (!tmp77Result) {
      num4 = tmp3(tmp2[8]).space.PX_16;
    }
    sum1 = num4;
  } else {
    sum1 = bottom;
    if (0 !== length) {
      let num3 = 0;
      if (!tmp77Result) {
        num3 = tmp3(tmp2[8]).space.PX_32;
      }
      sum1 = tmp9 + num3;
    }
  }
  items27[1] = { paddingBottom: sum1 };
  const obj14 = {
    style: tmp7.intro,
    collapsable: false,
    onLayout(nativeEvent) {
      return _undefined2(nativeEvent.nativeEvent.layout.height);
    },
    children: items28
  };
  items28 = [stateFromStores(tmp(tmp2[35]).Heading, { variant: "heading-xl/semibold", color: "text-strong", children: title }), ];
  const obj15 = { style: tmp7.subtitle, variant: "body-sm/normal", color: "text-default", lineBreakStrategyIOS: "push-out", textBreakStrategy: "balanced", children: subtitle };
  items28[1] = stateFromStores(tmp(tmp2[35]).Text, obj15);
  items29 = [c23(styles, obj14), , ];
  const obj16 = { children: c23(styles, obj17) };
  obj17 = { style: tmp7.search, children: items30 };
  items30 = [stateFromStores(tmp3(tmp2[36]), { scrollY, collapseOffset: tmp17 }), ];
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
  items30[1] = stateFromStores(styles, obj18);
  items29[1] = stateFromStores(styles, obj16);
  let tmp79Result = tmp46;
  const obj20 = { style: tmp7.content, onLayout: tmp3ResultResult.onContentLayout, children: items32 };
  if (tmp79Result) {
    const obj21 = { style: items31, accessible: true, accessibilityLabel: intl4.string(tmp(tmp2[13]).t.ZTNur7), accessibilityState: { busy: true }, children: arr };
    items31 = [tmp7.grid, ];
    const obj22 = { columnGap: sum };
    items31[1] = obj22;
    intl4 = tmp(tmp2[13]).intl;
    arr = roundToNearestPixel2Result > 0;
    if (arr) {
      const _Array = Array;
      const obj23 = { length: 4 * tmp27 };
      arr = Array.from(obj23, (arg0, arg1) => {
        let items;
        let items1;
        const obj = { style: size, children: items1 };
        size = { width, height: metroRequire.roundToNearestPixel(width / closure_19) };
        const obj2 = { style: items };
        items = [, ];
        ({ screen: arr[0], tileWrapper: arr[1] } = styles);
        items1 = [authStore5(InterestGhostDefault, obj2), ];
        const obj3 = { radius };
        items1[1] = authStore5(InterestTileEdgeDefault, obj3);
        return sidebars(metroImportAll, obj, arg1);
      });
    }
    tmp79Result = tmp79(tmp78, obj21);
  }
  items32 = [tmp79Result, , , ];
  if (tmp77Result) {
    const obj24 = { style: tmp7.empty, children: items33 };
    const obj25 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: intl5.string(tmp3(tmp2[14]).w5cRz0) };
    const Heading = tmp(tmp2[35]).Heading;
    intl5 = tmp(tmp2[13]).intl;
    items33 = [stateFromStores(Heading, obj25), ];
    const obj26 = { variant: "body-sm/semibold", color: "text-muted", style: tmp7.subtitle, children: intl6.string(tmp3(tmp2[14]).Khsqzs) };
    const Text = tmp(tmp2[35]).Text;
    intl6 = tmp(tmp2[13]).intl;
    items33[1] = stateFromStores(Text, obj26);
    tmp77Result = tmp77(tmp78, obj24);
  }
  items32[1] = tmp77Result;
  if (tmp77Result2) {
    const obj27 = { style: tmp7.status, children: items34 };
    const obj28 = { variant: "body-lg/normal", color: "text-muted", style: tmp7.subtitle, children: string(stateFromStores2 ? tmp3Result2["+np3yH"] : tmp3Result2.V7UsE0) };
    const Text2 = tmp(tmp2[35]).Text;
    const intl7 = tmp(tmp2[13]).intl;
    string = intl7.string;
    tmp3Result2 = tmp3(tmp2[14]);
    items34 = [stateFromStores(Text2, obj28), ];
    let tmp79Result4 = catalog.length > 0;
    if (tmp79Result4) {
      const obj29 = { onPress: callback6, size: "sm", text: intl8.string(tmp3(tmp2[14]).uGhymA), variant: "secondary" };
      const Button = tmp(tmp2[39]).Button;
      intl8 = tmp(tmp2[13]).intl;
      tmp79Result4 = tmp79(Button, obj29);
    }
    items34[1] = tmp79Result4;
    tmp77Result2 = tmp77(tmp78, obj27);
  }
  items32[2] = tmp77Result2;
  let tmp79Result5 = !tmp46 && arr17.length > 0;
  if (tmp79Result5) {
    const obj30 = { style: items35, children: roundToNearestPixel2Result > 0 && arr17.map(f116569) };
    items35 = [tmp7.grid, ];
    const obj31 = { columnGap: sum };
    items35[1] = obj31;
    let str2 = "browse";
    roundToNearestPixel2Result > 0 && arr17.map(f116569);
    if (tmp37) {
      str2 = "search";
    }
    tmp79Result5 = tmp79(tmp78, obj30, str2);
  }
  items32[3] = tmp79Result5;
  items29[2] = c23(styles, obj20);
  items26[1] = c23(ScrollView, obj13);
  items36 = [c23(styles, obj6), ];
  const obj32 = { accessibilityElementsHidden: !(length > 0 && !tmp19 && !first1), importantForAccessibility: str3, pointerEvents: str4, style: items37, children: stateFromStores(styles, obj33) };
  str3 = "no-hide-descendants";
  const View = tmp3(tmp2[10]).View;
  if (length > 0 && !tmp19 && !first1) {
    str3 = "auto";
  }
  str4 = "none";
  if (length > 0 && !tmp19 && !first1) {
    str4 = "auto";
  }
  items37 = [tmp7.footerPosition, animatedStyle];
  obj33 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.height);
    },
    style: items38,
    children: c23(styles, obj35)
  };
  items38 = [tmp7.footer, { paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) }];
  obj35 = { style: tmp7.footerContent, children: items39 };
  items39 = [, ];
  ({ paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) });
  items39[0] = stateFromStores(tmp3(tmp2[40]), { games: first2, coverWidth: roundToNearestPixel2Result, reduceMotion: stateFromStores });
  let tmp79Result6 = first2.length >= 7;
  const obj36 = { style: tmp7.footerActions, children: items40 };
  if (tmp79Result6) {
    const obj37 = { variant: "body-sm/medium", color: "text-default", children: intl9.format(tmp3(tmp2[14]).v9v0uY, obj38) };
    const Text3 = tmp(tmp2[35]).Text;
    intl9 = tmp(tmp2[13]).intl;
    obj38 = { count: first2.length, max };
    tmp79Result6 = tmp79(Text3, obj37);
  }
  items40 = [tmp79Result6, ];
  const obj39 = { style: tmp7.nextButton, children: stateFromStores(Button2, obj40) };
  obj40 = { text: intl10.string(tmp(tmp2[13]).t.PDTjLN), disabled: !tmp50, onPress: callback3, size: "lg", variant: "primary" };
  Button2 = tmp(tmp2[39]).Button;
  intl10 = tmp(tmp2[13]).intl;
  items40[1] = stateFromStores(styles, obj39);
  items39[1] = c23(styles, obj36);
  items36[1] = stateFromStores(View, obj32);
  return c23(styles, obj5);
};
