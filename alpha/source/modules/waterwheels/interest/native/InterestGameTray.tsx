// Module ID: 18994
// Function ID: 18995
// Name: InterestGameTray
// Dependencies: [32, 19, 17, 18984, 21, 575, 5243, 1652, 5876, 5877, 5485, 18985, 2]
// Exports: default

// Module 18994 (InterestGameTray)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18984 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let set, set2, set3;

let FOOTER_THUMBNAIL_GAP;
let THUMBNAIL_ASPECT_RATIO;
let c9;
let metroImportAll;
let obj2;
let obj3;
function TrayCover(game) {
  let items3;
  let items4;
  let num2;
  let obj3;
  let obj5;
  let str;
  let str2;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  game = game.game;
  const index = game.index;
  const step = game.step;
  const reduceMotion = game.reduceMotion;
  const onExit = game.onExit;
  let sharedValue;
  let first;
  let sharedValue2;
  let sharedValue1;
  let closure_9;
  const coverWidth = game.coverWidth;
  const tmp = closure_12();
  const useSharedValue = game(step[7]).useSharedValue;
  let num = 0;
  game(step[7]);
  let result = Math.max(0, index) * step;
  if (!reduceMotion) {
    num = 0;
    if (0 !== index) {
      num = PX_12;
    }
  }
  sharedValue = useSharedValue(result + num);
  let obj = onExit;
  first = reduceMotion(onExit.useState(0 === index), 1)[0];
  const useSharedValue2 = tmp2(tmp3[7]).useSharedValue;
  game(step[7]);
  if (reduceMotion) {
    num2 = 1;
  } else {
    num2 = 0;
  }
  sharedValue2 = useSharedValue2(num2);
  const tmp2Result3 = game(step[7]);
  sharedValue1 = tmp2Result3.useSharedValue(1);
  closure_9 = tmp11;
  let items = [tmp11, first, game.id, index, onExit, sharedValue2, reduceMotion, sharedValue1, step, sharedValue];
  const effect = obj.useEffect(() => {
    let num;
    if (!closure_9) {
      const result = index * step;
      let withSpringResult = result;
      set = sharedValue.set;
      if (!reduceMotion) {
        const obj = game(step[8]);
        withSpringResult = obj.withSpring(result, game(step[9]).springStandard);
      }
      const result1 = set(withSpringResult);
    }
    set2 = sharedValue2.set;
    if (reduceMotion) {
      let num3 = 1;
      if (closure_9) {
        num3 = 0;
      }
      num = num3;
    } else if (closure_9) {
      let num2 = 1;
      const withTiming = game(step[10]).withTiming;
      game(step[10]);
      if (closure_9) {
        num2 = 0;
      }
      num = withTiming(num2, { duration: 120 });
    } else {
      num = 1;
    }
    set2(num);
    let num4 = 1;
    let num5 = 1;
    set3 = sharedValue1.set;
    if (!reduceMotion) {
      const withTiming2 = game(step[10]).withTiming;
      game(step[10]);
      if (closure_9) {
        num4 = 0.96;
      }
      num5 = withTiming2(num4, { duration: 120 });
    }
    set3(num5);
    if (closure_9) {
      let num6 = 120;
      const _setTimeout = setTimeout;
      if (reduceMotion) {
        num6 = 0;
      }
      const id = _setTimeout(() => onExit(id.id), num6);
      return () => clearTimeout(id);
    }
  }, items);
  const items1 = [closure_13, sharedValue2, sharedValue, sharedValue1];
  let c0;
  let c1;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items1;
  const tmp2Result4 = game(step[7]);
  class InterestGameTrayTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ translateX: _undefined2.get() }, ];
      ({ translateX: _undefined2.get() });
      items[1] = { scale: _undefined3.get() };
      ({ scale: _undefined3.get() });
      return obj;
    }
  }
  const items2 = [tmp14, tmp15, tmp16];
  InterestGameTrayTsx1.__closure = items2;
  InterestGameTrayTsx1.__workletHash = 7147928113380;
  InterestGameTrayTsx1.__initData = tmp13;
  const tmp18 = sharedValue1;
  const animatedStyle = tmp2Result4.useAnimatedStyle(InterestGameTrayTsx1);
  const obj2 = { style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp11, importantForAccessibility: str, children: closure_9(sharedValue, obj3) };
  items3 = [tmp.item, animatedStyle];
  str = "auto";
  str2 = "auto";
  View = index(tmp3[7]).View;
  const tmp19 = index;
  if (index < 0) {
    str2 = "none";
  }
  if (index < 0) {
    str = "no-hide-descendants";
  }
  obj3 = { accessible: true, accessibilityLabel: game.name, style: tmp.target, children: items4 };
  const obj4 = { style: tmp.art, children: tmp18(tmp19(step[11]), obj5) };
  obj5 = { game, width: coverWidth, imageWidth: sharedValue2, compact: true };
  items4 = [tmp18(sharedValue, obj4), ];
  const obj6 = { pointerEvents: "none", style: tmp.stroke };
  items4[1] = tmp18(sharedValue, obj6);
  return tmp18(View, obj2);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let View = react_native.View;
const SELECTED_BORDER_WIDTH = InterestGamePickerConstants.SELECTED_BORDER_WIDTH;
const THUMBNAIL_WIDTH = InterestGamePickerConstants.THUMBNAIL_WIDTH;
({ FOOTER_THUMBNAIL_GAP, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let result = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let closure_10 = THUMBNAIL_WIDTH + FOOTER_THUMBNAIL_GAP;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { tray: { height: result, flex: 1 }, viewport: { position: "absolute", inset: -SELECTED_BORDER_WIDTH, right: 0, overflow: "hidden" }, content: { position: "absolute", inset: SELECTED_BORDER_WIDTH, right: 0 }, item: { position: "absolute", width: THUMBNAIL_WIDTH, height: result }, target: { flex: 1 }, art: obj2, stroke: obj3 };
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", inset: -SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.xs + SELECTED_BORDER_WIDTH, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
let result1 = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  let _undefined;
  let closure_3;
  let coverWidth;
  let displayed1;
  let first;
  let items;
  let obj4;
  let obj5;
  let reduceMotion;
  let step;
  let tmp10;
  let tmp11;
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion } = games);
  _slicedToArray = undefined;
  react = undefined;
  let c5;
  let onExit;
  let obj = react;
  [first, _slicedToArray] = react.useState(0);
  const _Math = Math;
  let num = 0;
  const PX_128 = require("native").space.PX_128;
  const _Math2 = Math;
  const diff = first - onExit;
  if (!reduceMotion) {
    num = PX_12;
  }
  const min2 = Math.min;
  const diff1 = min(PX_128, max(tmp5, diff - num)) - tmp5;
  react = min2(closure_10, diff1 / Math.max(1, games.length - 1));
  const tmp8 = closure_12();
  [tmp10, tmp11] = _slicedToArray(obj.useState({ games, displayed: games }), 2);
  c5 = tmp11;
  _slicedToArray(obj.useState({ games, displayed: games }), 2);
  if (tmp10.games !== games) {
    let displayed = tmp10.displayed;
    const obj2 = { games, displayed: items };
    items = [];
    HermesBuiltin.arraySpread(items, games, HermesBuiltin.arraySpread(items, displayed.filter((item) => {
      let closure_0 = item;
      return !games.some((id) => id.id === id.id);
    }), 0));
    tmp11(obj2);
  }
  onExit = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return _undefined((games) => {
      let displayed;
      games = games.games;
      let tmp = games;
      if (!games.some((id) => id.id === closure_1_0)) {
        const obj = { displayed: displayed.filter((id) => id.id !== closure_1_0) };
        const merged = Object.assign(games);
        displayed = games.displayed;
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const obj3 = {
    style: tmp8.tray,
    onLayout(nativeEvent) {
      return closure_3(nativeEvent.nativeEvent.layout.width);
    },
    children: closure_8(c5, obj4)
  };
  obj4 = { style: tmp8.viewport, children: closure_8(c5, obj5) };
  obj5 = {
    style: tmp8.content,
    children: displayed1.map((game) => {
      let closure_0 = game;
      const obj = { game, index: games.findIndex((id) => id.id === id.id), step, coverWidth: importDefault, reduceMotion, onExit };
      return metroImportAll(TrayCover, obj, game.id);
    })
  };
  displayed1 = tmp10.displayed;
  return closure_8(c5, obj3);
};
