// Module ID: 18678
// Function ID: 18679
// Name: InterestGameTray
// Dependencies: [32, 19, 17, 18671, 21, 5141, 575, 1652, 5771, 5772, 5378, 1113, 18672, 2]
// Exports: default

// Module 18678 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18671 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let set, set2, set3;

let SELECTED_BORDER_WIDTH;
let THUMBNAIL_WIDTH;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function TrayCover(game) {
  let intl;
  let items3;
  let items4;
  let num;
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
  const reduceMotion = game.reduceMotion;
  ({ onRemove: _slicedToArray, onExit } = game);
  let sharedValue;
  let first;
  let sharedValue2;
  let sharedValue1;
  let closure_9;
  const coverWidth = game.coverWidth;
  const tmp = closure_12();
  const useSharedValue = game(reduceMotion[7]).useSharedValue;
  const tmp4 = game(reduceMotion[7]);
  let result = Math.max(0, index) * (closure_9 + sharedValue2);
  if (reduceMotion) {
    num = 0;
  } else {
    num = 12;
  }
  sharedValue = useSharedValue(result + num);
  let obj = onExit;
  first = _slicedToArray(onExit.useState(0 === index), 1)[0];
  const useSharedValue2 = tmp2(tmp3[7]).useSharedValue;
  game(reduceMotion[7]);
  if (reduceMotion) {
    num2 = 1;
  } else {
    num2 = 0;
  }
  sharedValue2 = useSharedValue2(num2);
  const tmp2Result3 = game(reduceMotion[7]);
  sharedValue1 = tmp2Result3.useSharedValue(1);
  closure_9 = tmp11;
  let items = [tmp11, first, game.id, index, onExit, sharedValue2, reduceMotion, sharedValue1, sharedValue];
  const effect = obj.useEffect(() => {
    let num;
    if (!closure_9) {
      const result = index * (closure_9 + sharedValue2);
      let withSpringResult = result;
      set = sharedValue.set;
      if (!reduceMotion) {
        const obj = game(reduceMotion[8]);
        withSpringResult = obj.withSpring(result, game(reduceMotion[9]).springStandard);
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
      const withTiming = game(reduceMotion[10]).withTiming;
      game(reduceMotion[10]);
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
      const withTiming2 = game(reduceMotion[10]).withTiming;
      game(reduceMotion[10]);
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
  const tmp2Result4 = game(reduceMotion[7]);
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
  const animatedStyle = tmp2Result4.useAnimatedStyle(InterestGameTrayTsx1);
  const tmp19 = index;
  const obj2 = { style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp11, importantForAccessibility: str, children: closure_11(sharedValue, obj3) };
  items3 = [tmp.item, animatedStyle];
  str = "auto";
  str2 = "auto";
  const View = index(tmp3[7]).View;
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
    hitSlop: sharedValue1,
    onPress() {
      return _slicedToArray(game.id);
    },
    style: tmp.target,
    children: items4
  };
  intl = tmp2(tmp3[11]).intl;
  items4 = [, ];
  const obj4 = { style: tmp.art, children: closure_10(tmp19(reduceMotion[12]), { game, width: coverWidth, compact: true }) };
  items4[0] = closure_10(first, obj4);
  const obj5 = { pointerEvents: "none", style: tmp.stroke };
  items4[1] = closure_10(first, obj5);
  return closure_10(View, obj2);
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ FOOTER_THUMBNAIL_GAP: metroImportDefault, SELECTED_BORDER_WIDTH, THUMBNAIL_HIT_SLOP: metroImportAll, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
const THUMBNAIL_ASPECT_RATIO = InterestGamePickerConstants.THUMBNAIL_ASPECT_RATIO;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let result = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let createStyles = createStyles_mod;
let obj = { tray: { height: result, flex: 1 }, item: { position: "absolute", width: THUMBNAIL_WIDTH, height: result }, target: { flex: 1 }, art: obj2, stroke: obj3 };
obj2 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", inset: -SELECTED_BORDER_WIDTH, borderRadius: nativeDefault.radii.xs + SELECTED_BORDER_WIDTH, borderWidth: SELECTED_BORDER_WIDTH, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_12 = createStyles(obj);
let closure_13 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
let result1 = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  let _undefined;
  let coverWidth;
  let displayed1;
  let items;
  let onRemove;
  let reduceMotion;
  let tmp4;
  let tmp5;
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion: dependencyMap, onRemove: _slicedToArray } = games);
  react = undefined;
  let onExit;
  let obj = react;
  const tmp2 = closure_12();
  [tmp4, tmp5] = _slicedToArray(react.useState({ games, displayed: games }), 2);
  const tmp3 = _slicedToArray(react.useState({ games, displayed: games }), 2);
  react = tmp5;
  if (tmp4.games !== games) {
    let displayed = tmp4.displayed;
    const obj2 = { games, displayed: items };
    items = [];
    HermesBuiltin.arraySpread(items, games, HermesBuiltin.arraySpread(items, displayed.filter((item) => {
      let closure_0 = item;
      return !games.some((id) => id.id === id.id);
    }), 0));
    tmp5(obj2);
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
    style: tmp2.tray,
    children: displayed1.map((game) => {
      let closure_0 = game;
      const obj = { game, index: games.findIndex((id) => id.id === id.id), coverWidth: importDefault, reduceMotion: dependencyMap, onRemove: _slicedToArray, onExit };
      return authStore(TrayCover, obj, game.id);
    })
  };
  displayed1 = tmp4.displayed;
  return closure_10(closure_6, obj3);
};
