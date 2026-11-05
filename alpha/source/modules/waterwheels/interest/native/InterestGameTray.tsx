// Module ID: 18722
// Function ID: 18723
// Name: InterestGameTray
// Dependencies: [32, 19, 17, 18715, 21, 575, 5143, 1652, 5773, 5774, 5380, 1113, 18716, 2537, 5763, 2]
// Exports: default

// Module 18722 (InterestGameTray)
import nativeDefault from "native" /* 575 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18715 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let set, set2, set3;

let FOOTER_THUMBNAIL_GAP;
let THUMBNAIL_ASPECT_RATIO;
let THUMBNAIL_WIDTH;
let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
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
  const reduceMotion = game.reduceMotion;
  ({ onRemove: _slicedToArray, onExit } = game);
  let sharedValue;
  let first;
  let sharedValue2;
  let sharedValue1;
  let closure_9;
  const coverWidth = game.coverWidth;
  const tmp = closure_15(0);
  const useSharedValue = game(reduceMotion[7]).useSharedValue;
  let num = 0;
  game(reduceMotion[7]);
  let result = Math.max(0, index) * closure_13;
  if (!reduceMotion) {
    num = 0;
    if (0 !== index) {
      num = PX_12;
    }
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
      const result = index * closure_1_13;
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
  const items1 = [closure_16, sharedValue2, sharedValue, sharedValue1];
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
  const tmp18 = closure_10;
  const animatedStyle = tmp2Result4.useAnimatedStyle(InterestGameTrayTsx1);
  const obj2 = { style: items3, pointerEvents: str2, accessibilityElementsHidden: tmp11, importantForAccessibility: str, children: closure_11(sharedValue, obj3) };
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
    hitSlop: sharedValue1,
    onPress() {
      return _slicedToArray(game.id);
    },
    style: tmp.target,
    children: items4
  };
  intl = tmp2(tmp3[11]).intl;
  items4 = [, ];
  const obj4 = { style: tmp.art, children: tmp18(tmp19(reduceMotion[12]), { game, width: coverWidth, compact: true }) };
  items4[0] = tmp18(first, obj4);
  const obj5 = { pointerEvents: "none", style: tmp.stroke };
  items4[1] = tmp18(first, obj5);
  return tmp18(View, obj2);
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ SELECTED_BORDER_WIDTH: metroImportDefault, THUMBNAIL_HIT_SLOP: metroImportAll, THUMBNAIL_WIDTH } = InterestGamePickerConstants);
({ FOOTER_THUMBNAIL_GAP, THUMBNAIL_ASPECT_RATIO } = InterestGamePickerConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const height = THUMBNAIL_WIDTH / THUMBNAIL_ASPECT_RATIO;
let closure_13 = THUMBNAIL_WIDTH + FOOTER_THUMBNAIL_GAP;
const PX_12 = nativeDefault.space.PX_12;
let closure_15 = createStyles.createStyles((arg0) => {
  let items;
  let obj2;
  let obj3;
  let obj4;
  const obj = { tray: obj2, viewport: obj3, content: { position: "absolute", inset: borderWidth, right: 0 }, item: size, badge: obj4, target: { flex: 1 }, art: { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, stroke: { position: "absolute", inset: -borderWidth, borderRadius: nativeDefault.radii.xs + borderWidth, borderWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
  size = { position: "absolute", width: THUMBNAIL_WIDTH, height };
  obj2 = { height, flex: 1 };
  obj3 = { position: "absolute", inset: -borderWidth, right: 0, overflow: "hidden" };
  obj4 = { transform: items, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  items = [];
  const obj5 = { translateX: arg0 * closure_13 };
  items[0] = obj5;
  ({ flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ position: "absolute", inset: -borderWidth, borderRadius: nativeDefault.radii.xs + borderWidth, borderWidth, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  return obj;
});
let closure_16 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,scale]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{scale:scale.get()}]};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  let _undefined;
  let _undefined2;
  let c4;
  let coverWidth;
  let formatToPlainString;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let mapped;
  let obj4;
  let obj5;
  let obj7;
  let reduceMotion;
  let tmp11;
  let tmp12;
  let tmp4;
  let z5uqej;
  games = games.games;
  ({ coverWidth: importDefault, reduceMotion } = games);
  const onRemove = games.onRemove;
  react = undefined;
  let length;
  let memo;
  let c7;
  let onExit;
  let obj = react;
  [tmp4, c4] = onRemove(react.useState(0), 2);
  let num = 0;
  const _Math = Math;
  const _Math2 = Math;
  const diff = tmp4 - c7;
  const tmp3 = onRemove(react.useState(0), 2);
  if (!reduceMotion) {
    num = PX_12;
  }
  const maxResult = max(0, floor((diff - num - THUMBNAIL_WIDTH) / closure_13) + 1);
  if (games.length <= maxResult) {
    length = games.length;
  } else {
    const _Math3 = Math;
    length = Math.max(0, maxResult - 1);
  }
  const items = [games, length];
  memo = obj.useMemo(() => games.slice(0, length), items);
  const diff1 = games.length - length;
  const tmp9 = closure_15(length);
  [tmp11, tmp12] = onRemove(obj.useState({ games: memo, displayed: memo }), 2);
  c7 = tmp12;
  onRemove(obj.useState({ games: memo, displayed: memo }), 2);
  if (tmp11.games !== memo) {
    let displayed = tmp11.displayed;
    const obj2 = { games: memo, displayed: items1 };
    items1 = [];
    HermesBuiltin.arraySpread(items1, memo, HermesBuiltin.arraySpread(items1, displayed.filter((item) => {
      let closure_0 = item;
      return !games.some((id) => id.id === id.id);
    }), 0));
    tmp12(obj2);
  }
  onExit = obj.useCallback((arg0) => {
    let closure_0 = arg0;
    return _undefined2((games) => {
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
    style: tmp9.tray,
    onLayout(nativeEvent) {
      return _undefined(nativeEvent.nativeEvent.layout.width);
    },
    children: closure_10(memo, obj4)
  };
  obj4 = { style: tmp9.viewport, children: closure_11(memo, obj5) };
  const displayed1 = tmp11.displayed;
  obj5 = { style: tmp9.content, children: items2 };
  items2 = [
    displayed1.map((game) => {
      let closure_0 = game;
      const obj = { game, index: memo.findIndex((id) => id.id === id.id), coverWidth: importDefault, reduceMotion, onRemove, onExit };
      return authStore(TrayCover, obj, game.id);
    }),

  ];
  let tmp20Result = tmp4 > 0 && diff1 > 0;
  if (tmp20Result) {
    const obj6 = { accessible: true, accessibilityRole: "text", accessibilityLabel: formatToPlainString(z5uqej, obj7), style: items3, children: items5 };
    const intl = games(reduceMotion[11]).intl;
    formatToPlainString = intl.formatToPlainString;
    obj7 = { games: mapped.join(", ") };
    z5uqej = require("module_2537").z5uqej;
    const substr = games.slice(length);
    mapped = substr.map((name) => name.name);
    items3 = [, ];
    ({ item: arr8[0], badge: arr8[1] } = tmp9);
    const obj8 = { accessible: false, variant: "body-sm/medium", color: "text-default", lineClamp: 1, children: items4 };
    items4 = ["+", diff1];
    items5 = [closure_11(games(reduceMotion[14]).Text, obj8), ];
    const obj9 = { pointerEvents: "none", style: tmp9.stroke };
    items5[1] = closure_10(memo, obj9);
    tmp20Result = tmp20(tmp19, obj6);
  }
  items2[1] = tmp20Result;
  return closure_10(memo, obj3);
};
