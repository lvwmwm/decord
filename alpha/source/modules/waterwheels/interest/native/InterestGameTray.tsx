// Module ID: 18712
// Function ID: 18713
// Name: InterestGameTray
// Dependencies: [32, 19, 17, 18705, 21, 575, 5170, 1652, 5791, 5792, 5400, 1113, 18706, 2]
// Exports: default

// Module 18712 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18705 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let set, set2, set3;

let FOOTER_THUMBNAIL_GAP;
let THUMBNAIL_ASPECT_RATIO;
let THUMBNAIL_WIDTH;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function TrayCover(game) {
  let intl;
  let items3;
  let items4;
  let num2;
  let obj3;
  let onExit;
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
  ({ onRemove: react, onExit } = game);
  let sharedValue;
  let first;
  let sharedValue2;
  let sharedValue1;
  let closure_10;
  const coverWidth = game.coverWidth;
  const tmp = closure_14();
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
  let obj = react;
  first = reduceMotion(react.useState(0 === index), 1)[0];
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
  closure_10 = tmp11;
  let items = [tmp11, first, game.id, index, onExit, sharedValue2, reduceMotion, sharedValue1, step, sharedValue];
  const effect = obj.useEffect(() => {
    let num;
    if (!closure_10) {
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
      if (closure_10) {
        num3 = 0;
      }
      num = num3;
    } else if (closure_10) {
      let num2 = 1;
      const withTiming = game(step[10]).withTiming;
      game(step[10]);
      if (closure_10) {
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
      if (closure_10) {
        num4 = 0.96;
      }
      num5 = withTiming2(num4, { duration: 120 });
    }
    set3(num5);
    if (closure_10) {
      let num6 = 120;
      const _setTimeout = setTimeout;
      if (reduceMotion) {
        num6 = 0;
      }
      const id = _setTimeout(() => onExit(id.id), num6);
      return () => clearTimeout(id);
    }
  }, items);
  const items1 = [closure_15, sharedValue2, sharedValue, sharedValue1];
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
  const tmp18 = closure_10;
  const animatedStyle = tmp2Result4.useAnimatedStyle(InterestGameTrayTsx1);
  const obj2 = { style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp11, importantForAccessibility: str, children: closure_11(onExit, obj3) };
  items3 = [tmp.item, animatedStyle];
  str = "auto";
  str2 = "auto";
  const View = index(tmp3[7]).View;
  const tmp19 = index;
  if (index < 0) {
    str2 = "none";
  }
  if (index < 0) {
    str = "no-hide-descendants";
  }
  obj3 = {
    accessibilityHint: intl.string(tmp2(tmp3[11]).t.N86XcP),
    accessibilityLabel: game.name,
    accessibilityRole: "button",
    hitSlop: sharedValue2,
    onPress() {
      return react(game.id);
    },
    style: tmp.target,
    children: items4
  };
  intl = tmp2(tmp3[11]).intl;
  items4 = [, ];
  const obj4 = { style: tmp.art, children: tmp18(tmp19(step[12]), { game, width: coverWidth, compact: true }) };
  items4[0] = tmp18(sharedValue, obj4);
  const obj5 = { pointerEvents: "none", style: tmp.stroke };
  items4[1] = tmp18(sharedValue, obj5);
  return tmp18(View, obj2);
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const SELECTED_BORDER_WIDTH = InterestGamePickerConstants.SELECTED_BORDER_WIDTH;
({ THUMBNAIL_HIT_SLOP: metroImportAll, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
({ FOOTER_THUMBNAIL_GAP, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let result = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let closure_12 = THUMBNAIL_WIDTH + FOOTER_THUMBNAIL_GAP;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { tray: { height: result, flex: 1 }, viewport: { position: "absolute", inset: -SELECTED_BORDER_WIDTH, right: 0, overflow: "hidden" }, content: { position: "absolute", inset: SELECTED_BORDER_WIDTH, right: 0 }, item: { position: "absolute", width: THUMBNAIL_WIDTH, height: result }, target: { flex: 1 }, art: obj2, stroke: obj3 };
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", inset: -SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.xs + SELECTED_BORDER_WIDTH, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles(obj);
let closure_15 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
let result1 = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  let _undefined;
  let closure_4;
  let coverWidth;
  let displayed1;
  let items;
  let obj4;
  let obj5;
  let reduceMotion;
  let tmp10;
  let tmp11;
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion } = games);
  const onRemove = games.onRemove;
  react = undefined;
  let step;
  let c6;
  let onExit;
  let obj = react;
  const tmp3 = onRemove(react.useState(0), 2);
  react = tmp3[1];
  const first = tmp3[0];
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
  step = min2(closure_12, diff1 / Math.max(1, games.length - 1));
  const tmp8 = closure_14();
  [tmp10, tmp11] = onRemove(obj.useState({ games, displayed: games }), 2);
  c6 = tmp11;
  onRemove(obj.useState({ games, displayed: games }), 2);
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
      return closure_4(nativeEvent.nativeEvent.layout.width);
    },
    children: closure_10(c6, obj4)
  };
  obj4 = { style: tmp8.viewport, children: closure_10(c6, obj5) };
  obj5 = {
    style: tmp8.content,
    children: displayed1.map((game) => {
      let closure_0 = game;
      const obj = { game, index: games.findIndex((id) => id.id === id.id), step, coverWidth: importDefault, reduceMotion, onRemove, onExit };
      return authStore(TrayCover, obj, game.id);
    })
  };
  displayed1 = tmp10.displayed;
  return closure_10(c6, obj3);
};
