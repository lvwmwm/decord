// Module ID: 18045
// Function ID: 18046
// Name: InterestGridReveal
// Dependencies: [32, 19, 17, 18030, 21, 5043, 1654, 5253, 5256, 1707, 1112, 18046, 18047, 18048, 2]
// Exports: default

// Module 18045 (InterestGridReveal)
import _mod1654 from "module_1654" /* 1654 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18030 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function GridReveal(games) {
  let gridStyle;
  let intl;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj3;
  let obj6;
  let onRevealedChange;
  let ref2;
  let str;
  let str2;
  let str3;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  games = games.games;
  const tileWidth = games.tileWidth;
  const columnGap = games.columnGap;
  const radius = games.radius;
  ({ gridStyle, onRevealedChange } = games);
  let sharedValue;
  const children = games.children;
  let tmp = sharedValue();
  const row = tmp;
  let obj = onRevealedChange;
  let num = 0;
  let tmp2 = radius(onRevealedChange.useState(0 === games.length), 2);
  const accessibilityElementsHidden = tmp2[0];
  let closure_7 = tmp2[1];
  let items = [onRevealedChange, accessibilityElementsHidden];
  const layoutEffect = onRevealedChange.useLayoutEffect(() => {
    if (onRevealedChange != null) {
      tmp(first);
    }
  }, items);
  const tmp5 = radius(onRevealedChange.useState(!accessibilityElementsHidden), 2);
  let first1 = tmp5[0];
  let closure_9 = tmp5[1];
  const useRef = onRevealedChange.useRef;
  let substr = games.slice(0, 9);
  set = new Set(substr.map((id) => id.id));
  const ref = useRef(set);
  context = onRevealedChange.useRef(null);
  const effect = onRevealedChange.useEffect(() => {
    const abortController = new AbortController();
    ref2.current = abortController;
    return () => abortController.abort();
  }, []);
  let items1 = [accessibilityElementsHidden];
  const callback = onRevealedChange.useCallback((arg0) => {
    const current = ref2.current;
    let aborted;
    if (current != null) {
      aborted = current.signal.aborted;
    }
    let deleteResult = true !== aborted;
    if (deleteResult) {
      const current2 = ref.current;
      deleteResult = current2.delete(arg0);
    }
    if (deleteResult) {
      deleteResult = 0 === ref.current.size;
    }
    if (deleteResult) {
      closure_7(true);
    }
  }, []);
  const effect1 = onRevealedChange.useEffect(() => {
    let closure_0;
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_7(true), 2400);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const tmp12 = columnGap;
  const tmp13 = games(columnGap[6]);
  const useSharedValue = tmp13.useSharedValue;
  if (accessibilityElementsHidden) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items2 = [sharedValue, accessibilityElementsHidden, first1];
  const effect2 = obj.useEffect(function() {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp = first;
    if (tmp) {
      const tmp2 = first1;
      if (tmp2) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        set = sharedValue.set;
        const withTiming = games(columnGap[7]).withTiming;
        const tmp9 = games(columnGap[7]);
        const timingFast = games(columnGap[8]).timingFast;
        const items = [
          closure_1_13,
          games(columnGap[9]).scheduleOnRN,
          () => {
                if (!abortController.signal.aborted) {
                  closure_9(false);
                }
              }
        ];
        let c0;
        let c1;
        [tmp12, tmp13, tmp14] = items;
        class InterestGridRevealTsx1 {
          constructor(arg0) {
            const tmp = arg0;
            if (tmp) {
              _undefined(c1);
            }
          }
        }
        const items1 = [tmp13, tmp14];
        InterestGridRevealTsx1.__closure = items1;
        InterestGridRevealTsx1.__workletHash = 4095816174048;
        InterestGridRevealTsx1.__initData = tmp12;
        const result = set(withTiming(1, timingFast, "respect-motion-settings", InterestGridRevealTsx1));
        return () => {
          abortController.abort();
          const obj = _mod1654;
          obj.cancelAnimation(sharedValue);
        };
      }
    }
  }, items2);
  const items3 = [closure_14, sharedValue];
  let c0;
  [tmp16, tmp17] = items3;
  const tmp11Result = games(tmp12[6]);
  class InterestGridRevealTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp17];
  InterestGridRevealTsx2.__closure = items4;
  InterestGridRevealTsx2.__workletHash = 15865553337744;
  InterestGridRevealTsx2.__initData = tmp16;
  const animatedStyle = tmp11Result.useAnimatedStyle(InterestGridRevealTsx2);
  const items5 = [closure_15, sharedValue];
  c0 = undefined;
  [tmp19, tmp20] = items5;
  const tmp11Result2 = games(tmp12[6]);
  class InterestGridRevealTsx3 {
    constructor() {
      const obj = { opacity: 1 - _undefined.get() };
      return obj;
    }
  }
  const items6 = [tmp20];
  InterestGridRevealTsx3.__closure = items6;
  InterestGridRevealTsx3.__workletHash = 10211137797453;
  InterestGridRevealTsx3.__initData = tmp19;
  let obj2 = { value: callback, children: ref(tmp24, obj3) };
  obj3 = { style: tmp.container, children: items8 };
  const animatedStyle1 = tmp11Result2.useAnimatedStyle(InterestGridRevealTsx3);
  const Provider = context.Provider;
  let obj4 = { style: items7, pointerEvents: str, accessibilityElementsHidden: !accessibilityElementsHidden, importantForAccessibility: str2, children };
  items7 = [gridStyle, animatedStyle];
  str = "none";
  const View = tileWidth(tmp12[6]).View;
  if (accessibilityElementsHidden) {
    str = "auto";
  }
  str2 = "no-hide-descendants";
  if (accessibilityElementsHidden) {
    str2 = "auto";
  }
  items8 = [closure_9(View, obj4), ];
  if (first1) {
    const obj5 = { pointerEvents: "none", accessible: !accessibilityElementsHidden, accessibilityLabel: intl.string(games(tmp12[10]).t.ZTNur7), accessibilityState: obj6, accessibilityElementsHidden, importantForAccessibility: str3, style: items9, children: items10 };
    const View2 = tmp25(tmp12[6]).View;
    intl = tmp11(tmp12[10]).intl;
    str3 = "auto";
    obj6 = { busy: !accessibilityElementsHidden };
    if (accessibilityElementsHidden) {
      str3 = "no-hide-descendants";
    }
    items9 = [gridStyle, tmp.ghosts, animatedStyle1];
    const _Array = Array;
    const _Math = Math;
    const obj7 = { length: Math.ceil(games.length / closure_7) };
    items10 = [
      from(obj7, (arg0, arg1) => {
          let items;
          let substr;
          let width;
          let obj = {
            style: items,
            children: substr.map((id) => {
              let items;
              let items1;
              const obj = { style: size, children: items1 };
              size = { width, height: closure_5.roundToNearestPixel(width / first1) };
              const obj2 = { style: items };
              items = [closure_1_5.fill, ];
              const obj3 = { borderRadius: radius };
              items[1] = obj3;
              items1 = [closure_9(tileWidth(columnGap[11]), obj2), ];
              const obj4 = { radius };
              items1[1] = closure_9(tileWidth(columnGap[12]), obj4);
              return ref(first, obj, id.id);
            })
          };
          items = [row.row, ];
          let obj2 = { columnGap };
          items[1] = obj2;
          substr = games.slice(arg1 * metroImportDefault, (arg1 + 1) * metroImportDefault);
          return React4(metroRequire, obj, arg1);
        }),

    ];
    const obj8 = { count: games.length, tileWidth, columnGap, radius };
    items10[1] = closure_9(tileWidth(tmp12[13]), obj8);
    first1 = tmp23(View2, obj5);
  }
  items8[1] = first1;
  return closure_9(Provider, obj2);
}
({ PixelRatio: hasOwnProperty, View: metroRequire } = react_native);
({ GRID_COLUMNS: metroImportDefault, TILE_ASPECT_RATIO: metroImportAll } = InterestGamePickerConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let context = react.createContext(() => {

});
let closure_12 = createStyles.createStyles({ container: { position: "relative" }, ghosts: { position: "absolute", top: 0, left: 0, right: 0 }, fill: { flex: 1 }, row: { flexDirection: "row" } });
let closure_13 = { code: "(function InterestGridRevealTsx1(finished){let[scheduleOnRN,removeGhosts]=this.__closure;if(finished){scheduleOnRN(removeGhosts);}})" };
let closure_14 = { code: "(function InterestGridRevealTsx2(){let[progress]=this.__closure;return{opacity:progress.get()};})" };
let closure_15 = { code: "(function InterestGridRevealTsx3(){let[progress]=this.__closure;return{opacity:1-progress.get()};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGridReveal.tsx");

export default function InterestGridReveal(games) {
  games = games.games;
  const substr = games.slice(0, 9);
  const obj = {};
  const json = stringify(substr.map((id) => id.id));
  const merged = Object.assign(games);
  return React4(GridReveal, obj, json);
};
export const InterestGridReadyContext = context;
