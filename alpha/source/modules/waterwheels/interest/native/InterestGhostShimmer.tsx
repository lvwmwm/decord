// Module ID: 18055
// Function ID: 18056
// Name: InterestGhostShimmer
// Dependencies: [32, 19, 17, 5044, 18037, 21, 5043, 575, 504, 5607, 1654, 5253, 7231, 18053, 5598, 2]
// Exports: default

// Module 18055 (InterestGhostShimmer)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1654 from "module_1654" /* 1654 */;
import timing_timing from "timing/timing" /* 5253 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18037 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let set;

let GRID_COVER_HAIRLINE_WIDTH;
let SCREEN_HORIZONTAL_PADDING;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
({ GRID_COLUMNS: metroImportAll, GRID_COVER_HAIRLINE_WIDTH } = InterestGamePickerConstants);
const GRID_GAP = InterestGamePickerConstants.GRID_GAP;
({ TILE_ASPECT_RATIO: unpackModuleId, SCREEN_HORIZONTAL_PADDING } = InterestGamePickerConstants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { overlay: { position: "absolute", top: 0, left: SCREEN_HORIZONTAL_PADDING }, maskGrid: { gap: GRID_GAP }, row: { flexDirection: "row" }, maskTile: obj2, base: obj3, band: { height: "100%" }, gradient: { flex: 1 } };
obj2 = { flex: 1, margin: GRID_COVER_HAIRLINE_WIDTH, backgroundColor: nativeDefault.colors.TEXT_STRONG };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles(obj);
let closure_14 = { code: "(function InterestGhostShimmerTsx1(){let[width,progress]=this.__closure;return{transform:[{translateX:-2*width*(1-progress.get())}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGhostShimmer.tsx");

export default function InterestGhostShimmer(count) {
  let obj7;
  let row;
  let tmp18;
  let tmp19;
  let tmp20;
  count = count.count;
  const tileWidth = count.tileWidth;
  const columnGap = count.columnGap;
  const radius = count.radius;
  let first;
  let tmp = closure_13();
  react = tmp;
  let tmp2 = columnGap;
  let obj = count(columnGap[8]);
  let items = [first];
  const stateFromStores = obj.useStateFromStores(items, () => first.useReducedMotion);
  let obj2 = count(columnGap[9]);
  const token = obj2.useToken(tileWidth(columnGap[7]).colors.BACKGROUND_MOD_MUTED);
  let obj3 = count(columnGap[9]);
  const token1 = obj3.useToken(tileWidth(columnGap[7]).colors.BACKGROUND_MOD_SUBTLE);
  const obj4 = count(columnGap[10]);
  const sharedValue = obj4.useSharedValue(0);
  const tmp8 = radius(react.useState(false), 2);
  first = tmp8[0];
  let closure_8 = tmp8[1];
  const sum = tileWidth * closure_8 + columnGap * (closure_8 - 1);
  const roundToNearestPixelResult = stateFromStores.roundToNearestPixel(tileWidth / closure_11);
  let c9 = roundToNearestPixelResult;
  const bound = Math.min(4, Math.ceil(count / closure_8));
  let result = bound * roundToNearestPixelResult;
  const sum1 = result + Math.max(0, bound - 1) * GRID_GAP;
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => closure_1_8(true), 80);
    return () => clearTimeout(closure_0);
  }, []);
  const items1 = [sharedValue, stateFromStores, first];
  const effect1 = react.useEffect(() => {
    const tmp = first;
    if (tmp) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const withRepeat = _mod1654.withRepeat;
        _mod1654;
        const withSequence = _mod1654.withSequence;
        _mod1654;
        let obj = { duration: 1400, easing: _mod1654.Easing.linear };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        const withTimingResult = withTiming(1, obj);
        const withDelay = _mod1654.withDelay;
        _mod1654;
        const obj2 = timing_timing;
        const result1 = set(withRepeat(withSequence(withTimingResult, withDelay(350, obj2.withTiming(0, { duration: 0 }))), -1, false));
        return () => {
          const obj = count(columnGap[10]);
          return obj.cancelAnimation(sharedValue);
        };
      }
    }
  }, items1);
  count(columnGap[10]);
  const items2 = [closure_14, sum, sharedValue];
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items2;
  class InterestGhostShimmerTsx1 {
    constructor() {
      let items;
      let result;
      const obj = { transform: items };
      const obj2 = { translateX: result * (1 - _undefined.get()) };
      result = -2 * c0;
      items = [obj2];
      return obj;
    }
  }
  const items3 = [tmp19, tmp20];
  InterestGhostShimmerTsx1.__closure = items3;
  InterestGhostShimmerTsx1.__workletHash = 3309217839551;
  InterestGhostShimmerTsx1.__initData = tmp18;
  let tmp22 = null;
  if (!stateFromStores) {
    tmp22 = null;
    if (first) {
      tmp22 = null;
      if (tileWidth > 0) {
        const items4 = [tmp.overlay, ];
        size = { width: sum, height: sum1 };
        items4[1] = size;
        ({
          style: tmp.maskGrid,
          children: Array.from(obj7, (arg0, arg1) => {
                  let height;
                  let maskTile;
                  let width;
                  let items = [row.row, ];
                  const obj2 = { columnGap };
                  items[1] = obj2;
                  let obj3 = { length: Math.min(metroImportAll, count - arg1 * metroImportAll) };
                  return <metroRequire key={arg1} style={items}>{Array.from(obj3, (arg0, arg1) => {
                    size = { width, height };
                    const items = [maskTile.maskTile, ];
                    const obj3 = { borderRadius: Math.max(0, radius - c9) };
                    tileWidth(columnGap[13]);
                    items[1] = obj3;
                    return <sharedValue key={arg1} style={size}>{null}</sharedValue>;
                  })}</metroRequire>;
                })
        });
        const _Array = Array;
        obj7 = { length: bound };
        tileWidth(tmp2[12]);
        const items5 = [tmp.band, , ];
        const obj10 = { width: 3 * sum };
        items5[1] = obj10;
        items5[2] = tmp21;
        const View = tmp4(tmp2[10]).View;
        const items6 = [token, token1, token];
        tmp22 = <tmp4Result pointerEvents="none" accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={items4} maskElement={null}>{null}</tmp4Result>;
      }
    }
  }
  return tmp22;
};
