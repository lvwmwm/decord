// Module ID: 18060
// Function ID: 18061
// Name: InterestGameTray
// Dependencies: [32, 19, 17, 18037, 21, 575, 5043, 1654, 5644, 5645, 5253, 18036, 1112, 2655, 5634, 2]
// Exports: default

// Module 18060 (InterestGameTray)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef2655 from "module_2655" /* 2655 */;
import InterestGamePickerConstants from "InterestGamePickerConstants" /* 18037 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let max, set, set2, set3;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function TrayCover(game) {
  let count;
  let firstRun;
  let index;
  let items3;
  let num8;
  let obj4;
  let onExit;
  let reduceMotion;
  let str;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp7;
  let tmp9;
  game = game.game;
  ({ index, count, reduceMotion } = game);
  ({ firstRun, onExit } = game);
  let num6;
  let sum1;
  let sum2;
  let first;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let sharedValue21;
  closure_11 = undefined;
  const width = game.width;
  const tmp = closure_11();
  let num = 56;
  if (count > 3) {
    let num2 = 5;
    num = 156;
    if (count <= 5) {
      num = 93;
    }
  }
  const bound = Math.min(num, Math.max(0, width - 66 - 2 * sharedValue2));
  if (count <= 1) {
    const _Math = Math;
    const sum = tmp2 + Math.min(reduceMotion(onExit[5]).space.PX_16, bound);
    PX_12 = reduceMotion(onExit[5]).space.PX_12;
    sum2 = PX_12;
    sum1 = sum;
    num6 = 0;
    tmp7 = onExit;
    tmp9 = reduceMotion;
  } else {
    const _Math2 = Math;
    let result = Math.max(0, index) / (count - 1);
    let num5 = 6;
    if (count > 3) {
      num5 = 7 + (count - 5) / 5 * 3;
    }
    const diff = 2 * result - 1;
    num6 = diff * num5;
    sum1 = tmp2 + bound * result;
    tmp7 = onExit;
    sum2 = reduceMotion(onExit[5]).space.PX_12 + (1 - diff * diff) * -reduceMotion(onExit[5]).space.PX_4;
    tmp9 = reduceMotion;
  }
  let obj = sum1;
  const useState = sum1.useState;
  if (firstRun) {
    firstRun = 1 === count;
  }
  first = num6(useState(firstRun), 1)[0];
  let obj2 = game(tmp7[7]);
  sharedValue = obj2.useSharedValue(sum1);
  let num7 = 0;
  const useSharedValue = game(tmp7[7]).useSharedValue;
  const tmp16 = game(tmp7[7]);
  if (!reduceMotion) {
    num7 = 0;
    if (!first) {
      num7 = sharedValue21;
    }
  }
  sharedValue1 = useSharedValue(sum2 + num7);
  const tmp14Result = game(tmp7[7]);
  sharedValue2 = tmp14Result.useSharedValue(num6);
  const useSharedValue2 = tmp14(tmp7[7]).useSharedValue;
  game(tmp7[7]);
  if (reduceMotion) {
    num8 = 1;
  } else {
    num8 = 0;
  }
  sharedValue21 = useSharedValue2(num8);
  closure_11 = tmp21;
  let items = [num6, first, tmp21, game.id, onExit, sharedValue21, reduceMotion, sharedValue2, sum1, sum2, sharedValue, sharedValue1];
  const effect = obj.useEffect(() => {
    let withTimingResult1;
    if (!closure_11) {
      let withSpringResult;
      let withSpringResult1;
      let withTimingResult;
      set = sharedValue.set;
      if (reduceMotion) {
        withSpringResult = sum1;
      } else {
        const obj = game(onExit[8]);
        withSpringResult = obj.withSpring(sum1, game(onExit[9]).springStandard);
      }
      const result = set(withSpringResult);
      set2 = sharedValue1.set;
      if (reduceMotion) {
        withSpringResult1 = sum2;
      } else {
        const obj2 = game(onExit[8]);
        withSpringResult1 = obj2.withSpring(sum2, game(onExit[9]).springStandard);
      }
      set2(withSpringResult1);
      set3 = sharedValue2.set;
      if (reduceMotion) {
        withTimingResult = num6;
      } else {
        const obj3 = game(onExit[10]);
        withTimingResult = obj3.withTiming(num6, { duration: 120 });
      }
      set3(withTimingResult);
    }
    if (!reduceMotion) {
      const tmp28 = first;
      if (tmp28) {
        tmp26(withTimingResult1);
        if (closure_11) {
          let num2 = 120;
          const _setTimeout = setTimeout;
          if (tmp27) {
            num2 = 0;
          }
          const id = _setTimeout(() => onExit(id.id), num2);
          return () => clearTimeout(id);
        }
      }
      let num = 1;
      const withTiming = game(onExit[10]).withTiming;
      game(onExit[10]);
      if (closure_11) {
        num = 0;
      }
      withTimingResult1 = withTiming(num, { duration: 120 });
    }
    withTimingResult1 = Number(!tmp);
  }, items);
  const items1 = [closure_12, sharedValue21, sharedValue, sharedValue1, sharedValue2];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp23, tmp24, tmp25, tmp26, tmp27] = items1;
  const tmp14Result4 = game(tmp7[7]);
  class InterestGameTrayTsx1 {
    constructor() {
      let items;
      const obj = { opacity: _undefined.get(), transform: items };
      items = [{ translateX: _undefined2.get() }, , ];
      ({ translateX: _undefined2.get() });
      items[1] = { translateY: _undefined3.get() };
      ({ translateY: _undefined3.get() });
      items[2] = { rotateZ: "" + _undefined4.get() + "deg" };
      ({ rotateZ: "" + _undefined4.get() + "deg" });
      return obj;
    }
  }
  const items2 = [tmp24, tmp25, tmp26, tmp27];
  InterestGameTrayTsx1.__closure = items2;
  InterestGameTrayTsx1.__workletHash = 3577041238824;
  InterestGameTrayTsx1.__initData = tmp23;
  const animatedStyle = tmp14Result4.useAnimatedStyle(InterestGameTrayTsx1);
  let obj3 = { style: items3, pointerEvents: str, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp29(sum2, obj4) };
  items3 = [tmp.item, { width: 66, height: 86, zIndex: count - index }, animatedStyle];
  str = "auto";
  View = tmp9(tmp7[7]).View;
  if (index < 0) {
    str = "none";
  }
  obj4 = { style: tmp.art, children: tmp29(tmp9(tmp7[11]), { game, width: 66, imageWidth: 66, compact: true }) };
  return sharedValue(View, obj3);
}
let react = react_mod;
let View = react_native.View;
const MAX_SELECTIONS = InterestGamePickerConstants.MAX_SELECTIONS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { tray: obj2, viewport: { flex: 1, overflow: "hidden" }, item: obj3, art: obj4, helper: obj5 };
obj2 = { height: 86 + nativeDefault.space.PX_24, flex: 1, minWidth: 66 + 2 * PX_8 };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute" };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4 = { flex: 1, overflow: "hidden", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { position: "absolute", alignSelf: "center", bottom: 0, maxWidth: "100%", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
let closure_11 = createStyles(obj);
let closure_12 = { code: "(function InterestGameTrayTsx1(){let[opacity,x,y,rotation]=this.__closure;return{opacity:opacity.get(),transform:[{translateX:x.get()},{translateY:y.get()},{rotateZ:rotation.get()+\"deg\"}]};})" };
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGameTray.tsx");

export default function InterestGameTray(games) {
  let Text;
  let _undefined;
  let closure_4;
  let firstRun;
  let format;
  let formatToPlainStringResult;
  let intl2;
  let intl3;
  let items;
  let items2;
  let mapped;
  let obj7;
  let obj8;
  let obj9;
  let onExit;
  let reduceMotion;
  let reversed;
  let tmp6;
  let tmp7;
  games = games.games;
  ({ reduceMotion: importDefault, firstRun: dependencyMap } = games);
  let width;
  react = undefined;
  max = undefined;
  let tmp2 = closure_11();
  let obj = react;
  let tmp3 = width(react.useState(0), 2);
  width = tmp3[0];
  react = tmp3[1];
  [tmp6, tmp7] = width(react.useState({ games, displayed: games }), 2);
  let c5 = tmp7;
  width(react.useState({ games, displayed: games }), 2);
  if (tmp6.games !== games) {
    let displayed = tmp6.displayed;
    const obj2 = { games, displayed: items };
    items = [];
    let num = 0;
    HermesBuiltin.arraySpread(items, games, HermesBuiltin.arraySpread(items, displayed.filter((item) => {
      let closure_0 = item;
      return !games.some((id) => id.id === id.id);
    }), 0));
    tmp7(obj2);
  }
  max = obj.useCallback((arg0) => {
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
  const obj4 = { style: tmp2.viewport, accessible: games.length > 0, accessibilityLabel: formatToPlainStringResult, children: mapped };
  formatToPlainStringResult = undefined;
  const obj3 = {
    style: tmp2.tray,
    onLayout(nativeEvent) {
      return closure_4(nativeEvent.nativeEvent.layout.width);
    },
    children: items2
  };
  const tmp13 = closure_8;
  if (games.length > 0) {
    const intl = games(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Intl = Intl;
    const obj5 = { games: format(reversed.map((name) => name.name)) };
    const prop = _modDef2655["V/fzLc"];
    const self = this;
    const self2 = this;
    const listFormat = new Intl.ListFormat(games(1112).intl.currentLocale, { type: "conjunction" });
    const items1 = [];
    format = listFormat.format;
    HermesBuiltin.arraySpread(items1, games, 0);
    reversed = items1.reverse();
    formatToPlainStringResult = formatToPlainString(prop, obj5);
  }
  mapped = width > 0;
  if (mapped) {
    const displayed1 = tmp6.displayed;
    mapped = displayed1.map((game) => {
      let num;
      let closure_0 = game;
      const findIndexResult = games.findIndex((id) => id.id === id.id);
      const obj = { game, index: num, count: games.length, width, reduceMotion: importDefault, firstRun: dependencyMap, onExit };
      num = -1;
      const tmp2 = metroImportDefault;
      const tmp3 = TrayCover;
      if (findIndexResult >= 0) {
        num = arr.length - 1 - findIndexResult;
      }
      return tmp2(tmp3, obj, game.id);
    });
  }
  items2 = [closure_7(c5, obj4), ];
  let tmp15Result = games.length >= 7;
  if (tmp15Result) {
    const obj6 = { pointerEvents: "none", style: tmp2.helper, children: closure_7(Text, obj7) };
    obj7 = { variant: "body-xs/medium", color: "text-default", accessibilityLabel: intl2.formatToPlainString(_modDef2655.v9v0uY, obj8), children: intl3.format(_modDef2655["8g6QdR"], obj9) };
    Text = games(5634).Text;
    intl2 = games(1112).intl;
    obj8 = { count: games.length, max };
    intl3 = games(1112).intl;
    obj9 = { count: games.length, max };
    tmp15Result = tmp15(tmp14, obj6);
  }
  items2[1] = tmp15Result;
  return tmp13(c5, obj3);
};
