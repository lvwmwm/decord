// Module ID: 18704
// Function ID: 18705
// Name: InterestGamePicker
// Dependencies: [32, 19, 17, 5171, 2138, 18705, 21, 5170, 575, 5814, 1652, 1113, 2534, 5400, 5403, 18706, 18709, 5754, 1627, 18710, 9087, 504, 7197, 9239, 9717, 9242, 8773, 15167, 5179, 7227, 5406, 5867, 7567, 7378, 5781, 9918, 7305, 18711, 5788, 18712, 8119, 13659, 2]
// Exports: default

// Module 18704 (InterestGamePicker)
import nativeDefault from "native" /* 575 */;
import intl13 from "intl" /* 1113 */;
import _modDef2534 from "module_2534" /* 2534 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5179 */;
import timing_timing from "timing/timing" /* 5400 */;
import HapticUtils from "HapticUtils" /* 5406 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import useGame2 from "useGame" /* 7567 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8773 */;
import InterestTileEdgeDefault from "InterestTileEdge" /* 18709 */;
import InterestGhostDefault from "InterestGhost" /* 18711 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import GameStore from "GameStore" /* 2138 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18705 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
let tmp2;
let unpackModuleId;
const timingPresets = tmp2(5403);
({ Keyboard: hasOwnProperty, PixelRatio: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
({ FOOTER_BORDER_WIDTH: unpackModuleId, GRID_COLUMNS: closure_12, GRID_GAP: map1, MAX_SELECTIONS: closure_14, MIN_SELECTIONS: closure_15, SCREEN_HORIZONTAL_PADDING: closure_16, GRID_SELECTED_BORDER_WIDTH: closure_17, GRID_SELECTED_GAP_WIDTH: closure_18, TILE_ASPECT_RATIO: closure_19, TRAY_ENTER_MS: closure_20, TRAY_EXIT_MS: closure_21 } = InterestGamePickerConstants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let closure_25 = createStyles.createStyles((borderRadius) => {
  let obj10;
  let obj16;
  let obj8;
  let rect;
  const obj = { screen: { flex: 1 }, body: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, header: { height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, skip: { color: nativeDefault.colors.TEXT_BRAND }, content: { flexGrow: 1 }, empty: { flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 }, intro: { flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 }, subtitle: { textAlign: "center" }, search: { flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, searchElevation: obj8, searchEdge: rect, navTitle: { flex: 1, alignSelf: "stretch", justifyContent: "center" }, searchTitle: { position: "absolute", inset: 0, alignItems: "center", justifyContent: "center" }, navActions: { minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" }, grid: obj10, tileWrapper: { borderRadius }, selectedGlow: { shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 }, tile: { flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, selected: { position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND }, selectedInner: { position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, status: { alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 }, footerPosition: { position: "absolute", bottom: 0, left: 0, right: 0 }, footer: obj16, footerContent: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, footerActions: { flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: nativeDefault.space.PX_64, paddingHorizontal, paddingVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ flex: 1, alignItems: "center", paddingTop: nativeDefault.space.PX_40, paddingHorizontal, gap: nativeDefault.space.PX_4 });
  ({ flexShrink: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, paddingHorizontal, paddingTop: 0, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  obj8 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  rect = { position: "absolute", bottom: -1, left: 0, right: 0, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
  obj10 = { flexDirection: "row", flexWrap: "wrap", gap: map1, paddingHorizontal, paddingTop: 0 };
  ({ minWidth: nativeDefault.space.PX_64, alignItems: "flex-end" });
  ({ shadowColor: nativeDefault.colors.BACKGROUND_BRAND, shadowOffset: { width: 0, height: 2 }, shadowRadius: 33, shadowOpacity: 0.2, elevation: 8 });
  ({ flex: 1, overflow: "hidden", borderRadius, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ position: "absolute", inset: 0, borderWidth: inset, borderRadius, borderColor: nativeDefault.colors.BACKGROUND_BRAND });
  ({ position: "absolute", inset, borderWidth, borderRadius: Math.max(0, borderRadius - inset), borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal, paddingTop: nativeDefault.space.PX_40 });
  obj16 = { borderTopWidth: unpackModuleId, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal, paddingTop: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  const merged1 = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 });
  ({ flexShrink: 0, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 });
  return obj;
});
let closure_26 = { code: "(function InterestGamePickerTsx1(){let[selected,depth]=this.__closure;return{opacity:selected?0:1-Math.min(1,Math.max(0,depth.get())/0.2)};})" };
let closure_27 = react.memo(function StaticInterestGameTile(game) {
  let formatToPlainStringResult;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let selected;
  let styles;
  let tmp4;
  let tmp5;
  let tmp6;
  let unavailable;
  let width;
  game = game.game;
  ({ width, selected, unavailable, styles, onPress: importDefault } = game);
  let sharedValue;
  const radius = game.radius;
  let obj = game(sharedValue[10]);
  sharedValue = obj.useSharedValue(0);
  const items = [closure_26, selected, sharedValue];
  let c0;
  let c1;
  [tmp4, tmp5, tmp6] = items;
  const obj2 = game(sharedValue[10]);
  const tmp = game;
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
    style: items2,
    children: closure_23(closure_8, obj5)
  };
  formatToPlainStringResult = undefined;
  const animatedStyle = obj2.useAnimatedStyle(InterestGamePickerTsx1);
  const tmp9 = closure_7;
  if (unavailable) {
    const intl = tmp(tmp2[11]).intl;
    const obj4 = { count: max, max };
    formatToPlainStringResult = intl.formatToPlainString(require("module_2534").v9v0uY, obj4);
  }
  items2 = [styles.tileWrapper, selected && styles.selectedGlow, ];
  size = { width, height: closure_6.roundToNearestPixel(width / closure_19) };
  items2[2] = size;
  obj5 = { style: styles.screen, children: items4 };
  const obj6 = { style: styles.tile, children: items3 };
  items3 = [closure_22(require("InterestGameCover"), { game, width }), closure_22(require("InterestTileEdge"), { radius, style: animatedStyle })];
  items4 = [closure_23(closure_8, obj6), ];
  if (selected) {
    const obj7 = { children: items5 };
    const obj8 = { pointerEvents: "none", style: styles.selected };
    items5 = [closure_22(closure_8, obj8), ];
    const obj9 = { pointerEvents: "none", style: styles.selectedInner };
    items5[1] = closure_22(closure_8, obj9);
    selected = tmp13(closure_24, obj7);
  }
  items4[1] = selected;
  return closure_22(tmp9, obj3);
});
let closure_28 = { code: "(function InterestGamePickerTsx2(){let[searchProgress]=this.__closure;return{opacity:1-searchProgress.get()};})" };
let closure_29 = { code: "(function InterestGamePickerTsx3(){let[searchProgress]=this.__closure;return{opacity:searchProgress.get()};})" };
let closure_30 = { code: "(function InterestGamePickerTsx4(){let[interestHeaderElevation,scrollY,searchCollapseOffset,styles]=this.__closure;var _styles$searchElevati,_styles$searchElevati2;const progress=interestHeaderElevation(scrollY.get(),searchCollapseOffset);return{shadowOpacity:((_styles$searchElevati=styles.searchElevation.shadowOpacity)!==null&&_styles$searchElevati!==void 0?_styles$searchElevati:0)*progress,elevation:((_styles$searchElevati2=styles.searchElevation.elevation)!==null&&_styles$searchElevati2!==void 0?_styles$searchElevati2:0)*progress};})" };
let closure_31 = { code: "(function InterestGamePickerTsx5(){let[interestHeaderElevation,scrollY,searchCollapseOffset]=this.__closure;return{opacity:interestHeaderElevation(scrollY.get(),searchCollapseOffset)};})" };
let closure_32 = { code: "(function InterestGamePickerTsx6(){let[reduceMotion,trayProgress,footerHeight,tokens]=this.__closure;return{opacity:reduceMotion?trayProgress.get():1,transform:[{translateY:reduceMotion?0:(1-trayProgress.get())*(footerHeight>0?footerHeight:tokens.space.PX_128)}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGamePicker.tsx");

export default function InterestGamePicker(catalog) {
  let ArrowLargeRightIcon;
  let HeaderTextButton;
  let IconButton;
  let Text;
  let View3;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let arr;
  let c15;
  let c8;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
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
  let items43;
  let items44;
  let items45;
  let items46;
  let items47;
  let items48;
  let items49;
  let items50;
  let items51;
  let items52;
  let items53;
  let minSelection;
  let obj13;
  let obj22;
  let obj39;
  let obj41;
  let obj45;
  let obj47;
  let obj48;
  let onLayout;
  let radius;
  let ref;
  let str;
  let str3;
  let str4;
  let sum1;
  let title;
  let tmp12;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp75;
  let tmp76;
  let tmp77;
  let tmp78;
  let tmp79;
  let tmp8;
  let tmp93;
  const f115812 = (item, index) => item !== first2[index];
  const f115826 = (game) => {
    const hasItem = first.includes(game.id);
    const obj = { game, width, selected: hasItem, unavailable: !hasItem && memo6.length >= authStore3, styles, radius, onPress };
    return authStore6(closure_27, obj, game.id);
  };
  catalog = catalog.catalog;
  ({ title, minSelection } = catalog);
  const subtitle = catalog.subtitle;
  if (minSelection === undefined) {
    minSelection = c15;
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
  c8 = undefined;
  c15 = undefined;
  let scrollY;
  let ref1;
  ref = undefined;
  let stateFromStores;
  let c21;
  let ref2;
  let bound;
  results = undefined;
  let error;
  let onSelect;
  closure_28 = undefined;
  closure_29 = undefined;
  let memo;
  let memo2;
  let memo4;
  let arr22;
  let closure_34;
  let memo5;
  let memo6;
  let length;
  let first2;
  let closure_39;
  let sharedValue1;
  let ref3;
  let result1;
  let ref4;
  let ref5;
  let closure_45;
  let onPress;
  let obj = c6;
  let tmp = catalog;
  let tmp2 = onSkip;
  const roundToNearestPixel = c6.roundToNearestPixel;
  let obj2 = catalog(onSkip[17]);
  const tmp3 = onContinue;
  const roundToNearestPixelResult = roundToNearestPixel(obj2.useToken(onContinue(onSkip[8]).modules.mobile.INPUT_FIELD_RADIUS_LG));
  c6 = roundToNearestPixelResult;
  const tmp5 = error(roundToNearestPixelResult);
  const styles = tmp5;
  const bottom = onContinue(onSkip[18])().bottom;
  let obj3 = onGameToggle;
  const tmp7 = initialSelection(onGameToggle.useState(0), 2);
  [tmp8, c8] = tmp7;
  const tmp9 = initialSelection(onGameToggle.useState(() => {
    set = new Set(initialSelection);
    const fromResult = from(set);
    return fromResult.slice(0, authStore3);
  }), 2);
  const first = tmp9[0];
  let closure_10 = tmp9[1];
  [str, tmp12] = initialSelection(onGameToggle.useState(""), 2);
  let c11 = tmp12;
  initialSelection(onGameToggle.useState(""), 2);
  const tmp13 = initialSelection(onGameToggle.useState(false), 2);
  const first1 = tmp13[0];
  let closure_13 = tmp13[1];
  let obj4 = catalog(onSkip[10]);
  const sharedValue = obj4.useSharedValue(0);
  let items = [first1, sharedValue];
  const effect = onGameToggle.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (first1) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingFast));
  }, items);
  let items1 = [closure_28, sharedValue];
  let c0;
  [tmp17, tmp18] = items1;
  const obj5 = catalog(onSkip[10]);
  class InterestGamePickerTsx2 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp18];
  InterestGamePickerTsx2.__closure = items2;
  InterestGamePickerTsx2.__workletHash = 19591722165;
  InterestGamePickerTsx2.__initData = tmp17;
  const animatedStyle = obj5.useAnimatedStyle(InterestGamePickerTsx2);
  const items3 = [closure_29, sharedValue];
  c0 = undefined;
  [tmp20, tmp21] = items3;
  const tmpResult = tmp(tmp2[10]);
  class InterestGamePickerTsx3 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp21];
  InterestGamePickerTsx3.__closure = items4;
  InterestGamePickerTsx3.__workletHash = 1075419286504;
  InterestGamePickerTsx3.__initData = tmp20;
  const animatedStyle1 = tmpResult.useAnimatedStyle(InterestGamePickerTsx3);
  [tmp24, c15] = initialSelection(obj3.useState(0), 2);
  initialSelection(obj3.useState(0), 2);
  const tmpResult11 = tmp(tmp2[19]);
  const interestScrollHeader = tmpResult11.useInterestScrollHeader();
  scrollY = interestScrollHeader.scrollY;
  let num = 0;
  const onScroll = interestScrollHeader.onScroll;
  if (!first1) {
    num = tmp24;
  }
  const items5 = [memo, , , , ];
  const useAnimatedStyle = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items5[1] = tmp(tmp2[19]).interestHeaderElevation;
  items5[2] = scrollY;
  items5[3] = num;
  items5[4] = tmp5;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  [tmp27, tmp28, tmp29, tmp30, tmp31] = items5;
  class InterestGamePickerTsx4 {
    constructor() {
      let num2;
      const tmp = _undefined(_undefined2.get(), c2);
      let num = _undefined3.searchElevation.shadowOpacity;
      const tmp2 = _undefined3;
      if (num == null) {
        num = 0;
      }
      const obj = { shadowOpacity: num * tmp, elevation: num2 * tmp };
      num2 = tmp2.searchElevation.elevation;
      if (num2 == null) {
        num2 = 0;
      }
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30, tmp31];
  InterestGamePickerTsx4.__closure = items6;
  InterestGamePickerTsx4.__workletHash = 16996483244969;
  InterestGamePickerTsx4.__initData = tmp27;
  const animatedStyle2 = useAnimatedStyle(InterestGamePickerTsx4);
  const items7 = [memo2, , , ];
  const useAnimatedStyle2 = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items7[1] = tmp(tmp2[19]).interestHeaderElevation;
  items7[2] = scrollY;
  items7[3] = num;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp34, tmp35, tmp36, tmp37] = items7;
  class InterestGamePickerTsx5 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), c2) };
      return obj;
    }
  }
  const items8 = [tmp35, tmp36, tmp37];
  InterestGamePickerTsx5.__closure = items8;
  InterestGamePickerTsx5.__workletHash = 98767186851;
  InterestGamePickerTsx5.__initData = tmp34;
  const animatedStyle21 = useAnimatedStyle2(InterestGamePickerTsx5);
  ref1 = obj3.useRef(null);
  ref2 = obj3.useRef(null);
  const tmp41 = tmp3(tmp2[20])();
  const width = tmp41.width;
  let num2 = 0;
  ({ ref, onLayout } = tmp41);
  if (undefined !== width) {
    num2 = width;
  }
  ref = obj3.useRef(null);
  const items9 = [first];
  const tmpResult14 = tmp(tmp2[21]);
  stateFromStores = tmpResult14.useStateFromStores(items9, () => first.useReducedMotion);
  const tmp43 = tmp3(tmp2[22])();
  let num3 = 1;
  let result = (num2 - 2 * scrollY - closure_13 * (first1 - 1)) / first1;
  const roundToNearestPixel2 = obj.roundToNearestPixel;
  const rounded = Math.floor(result * obj.get());
  const roundToNearestPixel2Result = roundToNearestPixel2(rounded / obj.get());
  c21 = roundToNearestPixel2Result;
  const sum = closure_13 + (result - roundToNearestPixel2Result) * first1 / (first1 - 1);
  ref2 = obj3.useRef(false);
  const tmp44 = first1;
  if (Number.isFinite(minSelection)) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(minSelection, c15), sharedValue);
  } else {
    bound = c15;
  }
  const tmpResult15 = tmp(tmp2[23]);
  const obj6 = { surface: tmp(tmp2[24]).GameSearchSurface.INTEREST_PICKER, filterGroup: tmp(tmp2[25]).GameSearchFilterGroup.DEFAULT };
  const debouncedGameAutocomplete = tmpResult15.useDebouncedGameAutocomplete(str, obj6);
  results = debouncedGameAutocomplete.results;
  error = debouncedGameAutocomplete.error;
  onSelect = debouncedGameAutocomplete.onSelect;
  const items10 = [results];
  const isLoading = debouncedGameAutocomplete.isLoading;
  memo = obj3.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    const found = items.filter(GameAutocompleteUtils.isGameAutocompleteResultAllowedInGameWidgets);
    return found.map((id) => id.id);
  }, items10);
  const tmp54 = str.trim().length > 0;
  const items11 = [memo, catalog, first];
  const memo1 = obj3.useMemo(() => {
    const items = [...first];
    set = new Set(items);
    return from(set);
  }, items11);
  const tmp56 = tmp3(tmp2[27])(memo1);
  closure_28 = tmp56;
  closure_29 = tmp57;
  let tmp58 = catalog;
  if (tmp54 && null == error) {
    tmp58 = memo;
  }
  memo = tmp58;
  const items12 = [closure_10];
  const items13 = [tmp58];
  const tmpResult16 = tmp(tmp2[21]);
  const stateFromStores1 = tmpResult16.useStateFromStores(items12, () => {
    let game;
    return memo.some((item) => {
      const tmp = null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item);
      return tmp;
    });
  }, items13);
  const items14 = [closure_10];
  const items15 = [catalog];
  const tmpResult17 = tmp(tmp2[21]);
  let stateFromStores2 = tmpResult17.useStateFromStores(items14, () => catalog.some((item) => closure_1_10.didFetchingFail(item)), items15);
  const items16 = [tmp56];
  memo2 = obj3.useMemo(() => {
    map = new Map(closure_28.map((id) => {
      const items = [id.id, id];
      return items;
    }));
    return map;
  }, items16);
  const items17 = [catalog, memo2];
  const items18 = [memo, memo2];
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
  }, items17);
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
  }, items18);
  arr22 = memo3;
  if (tmp54 && null == error) {
    arr22 = memo4;
  }
  closure_34 = tmp63;
  let tmp90Result3 = tmp54 && !tmp63 && null == error && 0 === arr22.length;
  let tmp90Result4 = !tmp54 && !tmp63 && 0 === arr22.length;
  const items19 = [memo2, first];
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
  }), items19);
  const items20 = [memo5];
  memo6 = obj3.useMemo(() => memo5.map((id) => id.id), items20);
  length = memo6.length;
  const tmp66 = memo6.length >= bound;
  const tmp6Result2 = initialSelection(obj3.useState(memo5), 2);
  first2 = tmp6Result2[0];
  let tmp69 = memo5.length > 0;
  const tmp68 = tmp6Result2[1];
  if (tmp69) {
    tmp69 = memo5.length !== first2.length || memo5.some(f115812);
    memo5.length !== first2.length || memo5.some(f115812);
  }
  if (tmp69) {
    tmp68(memo5);
  }
  closure_39 = tmp72;
  const tmpResult18 = tmp(tmp2[10]);
  sharedValue1 = tmpResult18.useSharedValue(0);
  const items21 = [memo4, stateFromStores, sharedValue1, tmp8, ];
  const useAnimatedStyle3 = tmp(tmp2[10]).useAnimatedStyle;
  tmp(tmp2[10]);
  items21[4] = tmp3(tmp2[8]);
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp75, tmp76, tmp77, tmp78, tmp79] = items21;
  class InterestGamePickerTsx6 {
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
  const items22 = [tmp76, tmp77, tmp78, tmp79];
  InterestGamePickerTsx6.__closure = items22;
  InterestGamePickerTsx6.__workletHash = 9712426308148;
  InterestGamePickerTsx6.__initData = tmp75;
  const items23 = [sharedValue1, length > 0 && !tmp43, stateFromStores];
  const animatedStyle3 = useAnimatedStyle3(InterestGamePickerTsx6);
  const effect1 = obj3.useEffect(() => {
    let num = 0;
    set = sharedValue1.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (closure_39) {
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
  }, items23);
  ref3 = obj3.useRef(length);
  const items24 = [length];
  const effect2 = obj3.useEffect(() => {
    if (ref3.current !== length) {
      ref3.current = length;
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl13.intl;
      const obj = { count: length, max };
      announce(intl.formatToPlainString(_modDef2534.v9v0uY, obj));
    }
  }, items24);
  const tmpResult20 = tmp(tmp2[26]);
  result1 = tmpResult20.normalizeGameAutocompleteQuery(str);
  ref4 = obj3.useRef(null);
  const items25 = [result1, tmp54 && isLoading || stateFromStores1, error, results, memo4.length, onSearch];
  const effect3 = obj3.useEffect(() => {
    if (null != result1) {
      const tmp2 = closure_34 || null != error || null == results || ref4.current === arr;
      if (!tmp2) {
        ref4.current = result1;
        if (onSearch != null) {
          tmp7(result1.length, memo4.length);
        }
      }
    } else {
      ref4.current = null;
    }
  }, items25);
  ref5 = obj3.useRef(first);
  const items26 = [onGameToggle, arr22];
  closure_45 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    if (!ref2.current) {
      const current = ref5.current;
      const hasItem = current.includes(arg0);
      const tmp2 = ref5;
      if (hasItem) {
        let found;
        if (hasItem) {
          found = current.filter((item) => item !== closure_0);
        } else {
          found = [];
          found[HermesBuiltin.arraySpread(found, current, 0)] = arg0;
        }
        tmp2.current = found;
        closure_10(found);
        const findIndexResult = arr22.findIndex((id) => id.id === closure_0);
        if (onGameToggle != null) {
          let tmp14 = null;
          if (-1 !== findIndexResult) {
            tmp14 = findIndexResult;
          }
          tmp12(arg0, tmp14, tmp4);
        }
      }
    }
  }, items26);
  onPress = tmp3(tmp2[29])((arg0) => {
    hasOwnProperty.dismiss();
    const current = ref5.current;
    if (current.length >= authStore3) {
      if (!current.includes(arg0)) {
        const _Date = Date;
        const timestamp = Date.now();
        ref.current = timestamp;
        const intl = intl13.intl;
        const obj = { count: authStore3, max: authStore3 };
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
    const tmp14 = closure_29;
    if (tmp14) {
      onSelect(arg0);
    }
    closure_45(arg0);
  });
  const items27 = [bound, onContinue, memo6];
  const items28 = [onSkip, memo6];
  const callback = obj3.useCallback(() => {
    let current = ref2.current;
    const tmp = ref2;
    if (!current) {
      current = memo6.length < bound;
    }
    if (!current) {
      tmp.current = true;
      onContinue(memo6);
    }
  }, items27);
  const items29 = [ref2, scrollY];
  const callback1 = obj3.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      onSkip(memo6);
    }
  }, items28);
  const items30 = [ref2, scrollY];
  const callback2 = obj3.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.blur();
    }
    closure_13(false);
    hasOwnProperty.dismiss();
    const current2 = ref2.current;
    if (current2 != null) {
      current2.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items29);
  const items31 = [catalog];
  const callback3 = obj3.useCallback(() => {
    const current = ref1.current;
    const tmp = ref1;
    if (current != null) {
      current.setText("");
    }
    const current2 = tmp.current;
    if (current2 != null) {
      current2.blur();
    }
    _undefined2("");
    closure_13(false);
    const current3 = ref2.current;
    if (current3 != null) {
      current3.scrollTo({ y: 0, animated: false });
    }
    const result = scrollY.set(0);
  }, items30);
  const obj7 = { style: tmp5.screen, children: items49 };
  const obj8 = { ref, onLayout, style: tmp5.body, children: items36 };
  const callback4 = obj3.useCallback(() => {
    const useGame = useGame2.useGame;
    let items = [
      ...catalog.map((item) => {
        const items = [item];
        return items;
      })
    ];
    useGame.fetchMany.apply(items);
  }, items31);
  const obj10 = { style: tmp5.navTitle, collapsable: false, children: items33 };
  const obj9 = { style: tmp5.header, children: items35 };
  const SafeAreaPaddingView = tmp(tmp2[33]).SafeAreaPaddingView;
  const obj11 = { style: items32, children: ref2(tmp(tmp2[19]).InterestCompactTitle, { title, scrollY, collapseOffset: tmp24 }) };
  items32 = [tmp5.screen, animatedStyle];
  const View = tmp3(tmp2[10]).View;
  items33 = [ref2(View, obj11), ];
  let str2 = "no-hide-descendants";
  const obj12 = { pointerEvents: "none", accessibilityElementsHidden: !first1, importantForAccessibility: str3, style: items34, children: ref2(Text, obj13) };
  str3 = "no-hide-descendants";
  const View2 = tmp3(tmp2[10]).View;
  if (first1) {
    str3 = "auto";
  }
  items34 = [tmp5.searchTitle, animatedStyle1];
  obj13 = { variant: "body-md/semibold", lineClamp: 1, children: intl.string(tmp3(tmp2[12])["8Xenq+"]) };
  Text = tmp(tmp2[34]).Text;
  intl = tmp(tmp2[11]).intl;
  items33[1] = ref2(View2, obj12);
  items35 = [bound(c8, obj10), ];
  const obj15 = { label: null, labelStyle: null, onPress: null };
  const obj14 = { style: tmp5.navActions, children: ref2(HeaderTextButton, tmp93) };
  HeaderTextButton = tmp(tmp2[35]).HeaderTextButton;
  const intl2 = tmp(tmp2[11]).intl;
  const string = intl2.string;
  const t = tmp(tmp2[11]).t;
  if (first1) {
    obj15.label = string(t["ETE/oC"]);
    obj15.labelStyle = tmp5.skip;
    obj15.onPress = callback3;
    tmp93 = obj15;
  } else {
    obj15.label = string(t["5Wxrcd"]);
    obj15.labelStyle = tmp5.skip;
    obj15.onPress = callback1;
    tmp93 = obj15;
  }
  const obj16 = { top: true, children: bound(c8, obj9) };
  items35[1] = ref2(c8, obj14);
  items36 = [ref2(SafeAreaPaddingView, obj16), ];
  const obj17 = { ref: ref2, stickyHeaderIndices: items37, onScroll, scrollEventThrottle: 16, contentInsetAdjustmentBehavior: "never", style: tmp5.screen, contentContainerStyle: items38, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, children: items40 };
  const ScrollView = tmp3(tmp2[10]).ScrollView;
  if (first1) {
    num3 = 0;
  }
  items37 = [num3];
  items38 = [tmp5.content, ];
  if (tmp43) {
    let num5 = 0;
    if (!tmp90Result3) {
      num5 = tmp3(tmp2[8]).space.PX_16;
    }
    sum1 = num5;
  } else {
    sum1 = bottom;
    if (0 !== length) {
      let num4 = 0;
      if (!tmp90Result3) {
        num4 = tmp3(tmp2[8]).space.PX_32;
      }
      sum1 = tmp8 + num4;
    }
  }
  items38[1] = { paddingBottom: sum1 };
  let tmp90Result = !first1;
  if (tmp90Result) {
    const obj18 = {
      style: tmp5.intro,
      collapsable: false,
      onLayout(nativeEvent) {
          return _undefined3(nativeEvent.nativeEvent.layout.height);
        },
      children: items39
    };
    const obj19 = { variant: "heading-xl/semibold", color: "text-strong", children: title };
    items39 = [ref2(tmp(tmp2[34]).Heading, obj19), ];
    const obj20 = { style: tmp5.subtitle, variant: "body-sm/normal", color: "text-default", children: subtitle };
    items39[1] = ref2(tmp(tmp2[34]).Text, obj20);
    tmp90Result = tmp90(tmp91, obj18);
  }
  items40 = [tmp90Result, , ];
  const obj21 = { children: bound(View3, obj22) };
  obj22 = { style: items41, children: items43 };
  items41 = [, , ];
  ({ search: arr48[0], searchElevation: arr48[1] } = tmp5);
  items41[2] = animatedStyle2;
  View3 = tmp3(tmp2[10]).View;
  const obj23 = { pointerEvents: "none", style: items42 };
  items42 = [tmp5.searchEdge, animatedStyle21];
  items43 = [ref2(tmp3(tmp2[10]).View, obj23), ];
  const obj24 = {
    ref: ref1,
    grow: false,
    accessibilityLabel: intl3.string(tmp3(tmp2[12])["8Xenq+"]),
    onChange: tmp12,
    onFocus() {
      closure_13(true);
      const current = ref2.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: false });
      }
      const result = scrollY.set(0);
    },
    onSubmitEditing: callback2,
    placeholder: intl4.string(tmp3(tmp2[12])["8Xenq+"])
  };
  const SearchBar = tmp(tmp2[36]).SearchBar;
  intl3 = tmp(tmp2[11]).intl;
  intl4 = tmp(tmp2[11]).intl;
  items43[1] = ref2(SearchBar, obj24);
  items40[1] = ref2(c8, obj21);
  let tmp92Result = tmp63;
  const obj25 = { style: tmp5.content, children: items45 };
  if (tmp92Result) {
    const obj26 = { style: items44, accessible: true, accessibilityLabel: intl5.string(tmp(tmp2[11]).t.ZTNur7), accessibilityState: { busy: true }, children: arr };
    items44 = [tmp5.grid, ];
    const obj27 = { columnGap: sum };
    items44[1] = obj27;
    intl5 = tmp(tmp2[11]).intl;
    arr = roundToNearestPixel2Result > 0;
    if (arr) {
      const _Array = Array;
      const obj28 = { length: 4 * tmp44 };
      arr = Array.from(obj28, (arg0, arg1) => {
        let items;
        let items1;
        const obj = { style: size, children: items1 };
        size = { width, height: metroRequire.roundToNearestPixel(width / closure_19) };
        const obj2 = { style: items };
        items = [, ];
        ({ screen: arr[0], tileWrapper: arr[1] } = styles);
        items1 = [authStore6(InterestGhostDefault, obj2), ];
        const obj3 = { radius };
        items1[1] = authStore6(InterestTileEdgeDefault, obj3);
        return sidebars(metroImportAll, obj, arg1);
      });
    }
    tmp92Result = tmp92(tmp91, obj26);
  }
  items45 = [tmp92Result, , , ];
  if (tmp90Result3) {
    const obj29 = { style: tmp5.empty, children: items46 };
    const obj30 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: intl6.string(tmp3(tmp2[12]).w5cRz0) };
    const Heading = tmp(tmp2[34]).Heading;
    intl6 = tmp(tmp2[11]).intl;
    items46 = [ref2(Heading, obj30), ];
    const obj31 = { variant: "body-sm/semibold", color: "text-muted", style: tmp5.subtitle, children: intl7.string(tmp3(tmp2[12]).Khsqzs) };
    const Text2 = tmp(tmp2[34]).Text;
    intl7 = tmp(tmp2[11]).intl;
    items46[1] = ref2(Text2, obj31);
    tmp90Result3 = tmp90(tmp91, obj29);
  }
  items45[1] = tmp90Result3;
  if (tmp90Result4) {
    const obj32 = { style: tmp5.status, children: items47 };
    const Text3 = tmp(tmp2[34]).Text;
    const intl8 = tmp(tmp2[11]).intl;
    const string2 = intl8.string;
    const tmp3Result = tmp3(tmp2[12]);
    const obj33 = { variant: "body-md/semibold", color: "text-strong", children: string2(stateFromStores2 ? tmp3Result["+np3yH"] : tmp3Result.V7UsE0) };
    items47 = [ref2(Text3, obj33), , ];
    const Text4 = tmp(tmp2[34]).Text;
    const intl9 = tmp(tmp2[11]).intl;
    const string3 = intl9.string;
    const tmp3Result2 = tmp3(tmp2[12]);
    const obj34 = { variant: "body-sm/normal", color: "text-muted", children: string3(stateFromStores2 ? tmp3Result2.CjS26n : tmp3Result2.qx4Gb6) };
    items47[1] = ref2(Text4, obj34);
    if (stateFromStores2) {
      const obj35 = { onPress: callback4, size: "sm", text: intl10.string(tmp3(tmp2[12]).uGhymA), variant: "secondary" };
      const Button = tmp(tmp2[38]).Button;
      intl10 = tmp(tmp2[11]).intl;
      stateFromStores2 = tmp92(Button, obj35);
    }
    items47[2] = stateFromStores2;
    tmp90Result4 = tmp90(tmp91, obj32);
  }
  items45[2] = tmp90Result4;
  let tmp92Result3 = !tmp63 && arr22.length > 0;
  if (tmp92Result3) {
    const obj36 = { style: items48, children: roundToNearestPixel2Result > 0 && arr22.map(f115826) };
    items48 = [tmp5.grid, ];
    const obj37 = { columnGap: sum };
    items48[1] = obj37;
    roundToNearestPixel2Result > 0 && arr22.map(f115826);
    tmp92Result3 = tmp92(tmp91, obj36);
  }
  items45[3] = tmp92Result3;
  items40[2] = bound(c8, obj25);
  items36[1] = bound(ScrollView, obj17);
  items49 = [bound(c8, obj8), ];
  const obj38 = { accessibilityElementsHidden: !(length > 0 && !tmp43), importantForAccessibility: str2, pointerEvents: str4, style: items50, children: ref2(c8, obj39) };
  const View4 = tmp3(tmp2[10]).View;
  if (length > 0 && !tmp43) {
    str2 = "auto";
  }
  str4 = "none";
  if (length > 0 && !tmp43) {
    str4 = "auto";
  }
  items50 = [tmp5.footerPosition, animatedStyle3];
  obj39 = {
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.height);
    },
    style: items51,
    children: bound(c8, obj41)
  };
  items51 = [tmp5.footer, { paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) }];
  obj41 = { style: tmp5.footerContent, children: items52 };
  items52 = [, ];
  ({ paddingBottom: Math.max(bottom, tmp3(tmp2[8]).space.PX_16) });
  const obj42 = {
    games: first2,
    coverWidth: roundToNearestPixel2Result,
    reduceMotion: stateFromStores,
    onRemove(arg0) {
      closure_45(arg0);
    }
  };
  items52[0] = ref2(tmp3(tmp2[39]), obj42);
  let tmp92Result4 = first2.length >= 7;
  const obj43 = { style: tmp5.footerActions, children: items53 };
  if (tmp92Result4) {
    const obj44 = { variant: "body-sm/medium", color: "text-default", children: intl11.format(tmp3(tmp2[12]).v9v0uY, obj45) };
    const Text5 = tmp(tmp2[34]).Text;
    intl11 = tmp(tmp2[11]).intl;
    obj45 = { count: first2.length, max: sharedValue };
    tmp92Result4 = tmp92(Text5, obj44);
  }
  items53 = [tmp92Result4, ];
  const obj46 = { children: ref2(IconButton, obj47) };
  obj47 = { accessibilityLabel: intl12.string(tmp(tmp2[11]).t["3PatSz"]), disabled: !tmp66, icon: ref2(ArrowLargeRightIcon, obj48), onPress: callback, size: "lg", variant: "primary" };
  IconButton = tmp(tmp2[40]).IconButton;
  intl12 = tmp(tmp2[11]).intl;
  obj48 = { color: tmp3(tmp2[8]).colors.CONTROL_PRIMARY_TEXT_DEFAULT };
  ArrowLargeRightIcon = tmp(tmp2[41]).ArrowLargeRightIcon;
  items53[1] = ref2(c8, obj46);
  items52[1] = bound(c8, obj43);
  items49[1] = ref2(View4, obj38);
  return bound(c8, obj7);
};
