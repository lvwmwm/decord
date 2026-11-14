// Module ID: 14279
// Function ID: 14280
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5306, 6401, 6398, 2024, 1655, 5548, 8263, 14280, 11739, 575, 6020, 2]
// Exports: default

// Module 14279 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 2024 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6398 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = -1;
let c11 = 0;
let c12 = 432;
let c13 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
let closure_15 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, cardTexture: { isolation: "isolate" }, textureOverlay: { mixBlendMode: "overlay" }, logo: { position: "absolute", top: 0, left: 0, width: 44, height: 44, alignItems: "center", justifyContent: "center" } });
let closure_16 = { code: "(function CheckpointCardFrameTsx1(){let[isCharacterSettled,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isCharacterSettled?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  let ClipPath;
  let ClipPath2;
  let ClipPath3;
  let G2;
  let Image2;
  let Image3;
  let c10;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj5;
  let obj9;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let size3;
  let size4;
  let size6;
  let size8;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp23Result;
  character = character.character;
  const canvasWidth = character.canvasWidth;
  let num = character.canvasHeight;
  const cardColorPalette = character.cardColorPalette;
  if (num === undefined) {
    num = 284;
  }
  let num2 = character.scale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const clydeSize = character.clydeSize;
  const characterLayout = character.characterLayout;
  let flag = character.isCharacterAndStats;
  if (flag === undefined) {
    flag = false;
  }
  let memo;
  let joined;
  let closure_9;
  let x;
  const children = character.children;
  let tmp = closure_15();
  let obj = clydeSize;
  const id = clydeSize.useId();
  const obj2 = character(num[5]);
  const cardColors = obj2.getCardColors(cardColorPalette);
  size = undefined;
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  if (characterLayout != null) {
    size = characterLayout.size;
  }
  let items = [character, size];
  memo = obj.useMemo(() => {
    if (null != character) {
      if (null != size) {
        const _Math = Math;
        const obj = checkpoint_CheckpointMessageComponentUtils;
        const characterLayerUrls = obj.getCharacterLayerUrls(tmp, Math.round(tmp2 * react_nativeDefault()));
      }
      return [];
    }
  }, items);
  joined = memo.join("\n");
  const useRef = obj.useRef;
  const obj3 = { characterKey: joined, urls: set };
  set = new Set();
  closure_9 = useRef(obj3);
  [tmp10, c10] = num2(obj.useState(null), 2);
  const items1 = [closure_16, tmp10 === joined, , ];
  const tmp9 = num2(obj.useState(null), 2);
  const useAnimatedStyle = tmp3(tmp4[8]).useAnimatedStyle;
  character(num[8]);
  items1[2] = character(num[9]).withTiming;
  items1[3] = 150;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items1;
  class CheckpointCardFrameTsx1 {
    constructor() {
      let opacity = 0;
      if (c0) {
        const obj = { duration };
        opacity = _undefined(1, obj);
      }
      return { opacity };
    }
  }
  const items2 = [tmp13, tmp14, tmp15];
  CheckpointCardFrameTsx1.__closure = items2;
  CheckpointCardFrameTsx1.__workletHash = 2849175625109;
  CheckpointCardFrameTsx1.__initData = tmp12;
  const items3 = [canvasWidth, num, num2];
  const animatedStyle = useAnimatedStyle(CheckpointCardFrameTsx1);
  const items4 = [canvasWidth, num, num2];
  const memo1 = obj.useMemo(() => {
    size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items3);
  const items5 = [clydeSize];
  const memo2 = obj.useMemo(() => {
    let items;
    size = { width: canvasWidth, height: num, transform: items };
    items = [];
    const obj = { scale: num2 };
    items[0] = obj;
    return size;
  }, items4);
  const items6 = [characterLayout];
  const memo3 = obj.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items5);
  const memo4 = obj.useMemo(() => {
    let tmp2;
    const tmp = characterLayout;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = tmp);
      tmp2 = size;
    }
    return tmp2;
  }, items6);
  const obj4 = { style: memo1, children: joined(size, obj5) };
  obj5 = { style: items7, children: items17 };
  items7 = [tmp.canvas, memo2];
  const obj6 = { style: items8, children: items9 };
  items8 = [, ];
  ({ layer: arr10[0], cardTexture: arr10[1] } = tmp);
  const size1 = { width: canvasWidth, height: num, children: memo(tmp3(tmp4[10]).Rect, { width: canvasWidth, height: num, fill: secondaryBackgroundColor }) };
  const tmp25 = canvasWidth(num[10]);
  items9 = [memo(tmp25, size1), ];
  if (flag) {
    const size2 = { style: items10, width: canvasWidth, height: num, children: items11 };
    items10 = [, ];
    const obj7 = { children: items12 };
    ({ layer: arr14[0], textureOverlay: arr14[1] } = tmp);
    const obj8 = { children: memo(ClipPath2, obj9) };
    const tmp24Result = canvasWidth(num[10]);
    const Defs2 = tmp3(tmp4[10]).Defs;
    const _HermesInternal2 = HermesInternal;
    obj9 = { id: "" + id + "-top", children: memo(character(num[10]).Rect, size3) };
    ClipPath2 = tmp3(tmp4[10]).ClipPath;
    size3 = { width: canvasWidth, height: num };
    items11 = [memo(Defs2, obj8), ];
    const _HermesInternal3 = HermesInternal;
    const obj10 = { clipPath: "url(#" + id + "-top)", children: memo(G2, obj11) };
    const G = tmp3(tmp4[10]).G;
    const _HermesInternal4 = HermesInternal;
    obj11 = { rotation: 180, origin: "" + x + width / 2 + ", " + c11 + c13 / 2, children: memo(Image2, size4) };
    G2 = tmp3(tmp4[10]).G;
    size4 = { href: canvasWidth(tmp4[11]), x, y: c11 - 0.4348 * c13, width, height: 1.4348 * c13, preserveAspectRatio: "none" };
    Image2 = tmp3(tmp4[10]).Image;
    items11[1] = memo(G, obj10);
    items12 = [joined(tmp24Result, size2), ];
    const size5 = { style: items13, width: canvasWidth, height: num, children: items14 };
    items13 = [, ];
    ({ layer: arr17[0], textureOverlay: arr17[1] } = tmp);
    const obj12 = { children: memo(ClipPath3, obj13) };
    const tmp24Result4 = canvasWidth(num[10]);
    const Defs3 = tmp3(tmp4[10]).Defs;
    const _HermesInternal5 = HermesInternal;
    obj13 = { id: "" + id + "-bottom", children: memo(character(num[10]).Rect, size6) };
    ClipPath3 = tmp3(tmp4[10]).ClipPath;
    size6 = { width: canvasWidth, height: num };
    items14 = [memo(Defs3, obj12), ];
    class CheckpointCardFrameTsx1 {
      constructor() {
        let opacity = 0;
        if (c0) {
          const obj = { duration };
          opacity = _undefined(1, obj);
        }
        return { opacity };
      }
    }
    const _HermesInternal6 = HermesInternal;
    const G3 = tmp3(tmp4[10]).G;
    tmp35[0] = "url(#" + id + "-bottom)";
    const _HermesInternal7 = HermesInternal;
    const obj14 = { rotation: 180, origin: "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2, children: memo(Image3, obj15) };
    const G4 = tmp3(tmp4[10]).G;
    obj15 = { href: canvasWidth(num[11]), opacity: 0.5, preserveAspectRatio: "xMidYMid slice" };
    Image3 = tmp3(tmp4[10]).Image;
    const merged = Object.assign(styles);
    tmp35[1] = memo(G4, obj14);
    items14[1] = memo(G3, tmp35);
    items12[1] = joined(tmp24Result4, size5);
    tmp23Result = tmp23(closure_9, obj7);
  } else {
    const size7 = { style: items15, width: canvasWidth, height: num, children: items16 };
    items15 = [, ];
    ({ layer: arr12[0], textureOverlay: arr12[1] } = tmp);
    const obj16 = { children: memo(ClipPath, obj17) };
    const tmp24Result5 = canvasWidth(num[10]);
    const Defs = tmp3(tmp4[10]).Defs;
    obj17 = { id, children: memo(character(num[10]).Rect, size8) };
    ClipPath = tmp3(tmp4[10]).ClipPath;
    size8 = { width: canvasWidth, height: num };
    items16 = [memo(Defs, obj16), ];
    const size9 = { href: canvasWidth(tmp4[11]), width: canvasWidth, height: num, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#" + id + ")" };
    const Image = tmp3(tmp4[10]).Image;
    const _HermesInternal = HermesInternal;
    items16[1] = memo(Image, size9);
    tmp23Result = tmp23(tmp24Result5, size7);
  }
  items9[1] = tmp23Result;
  items17 = [joined(size, obj6), , , ];
  const obj18 = { style: tmp.logo, children: items18 };
  const size10 = { style: characterLayout.absoluteFill, width: 44, height: 44, children: memo(tmp3(tmp4[10]).Path, { d: "M0 0H44V33L33 44H0Z", fill: primaryBackgroundColor }) };
  const tmp24Result6 = canvasWidth(num[10]);
  items18 = [memo(tmp24Result6, size10), ];
  const obj19 = { size: "custom", color: canvasWidth(num[13]).colors.BLACK, style: memo3 };
  const ClydeIcon = tmp3(tmp4[12]).ClydeIcon;
  items18[1] = memo(ClydeIcon, obj19);
  items17[1] = joined(size, obj18);
  items17[2] = children;
  let tmp21Result = null != memo4 && memo.length > 0;
  if (tmp21Result) {
    const obj20 = {
      style: items19,
      children: memo.map((uri) => {
          let ref;
          let closure_0 = uri;
          let obj = {
            source: { uri },
            style: characterLayout.absoluteFill,
            onLoad() {
              const tmp = uri;
              if (ref.current.characterKey !== joined) {
                const _Set = Set;
                const self = this;
                const self2 = this;
                const obj = { characterKey: joined, urls: set };
                ref.current = obj;
                set = new Set();
              }
              const urls = tmp2.current.urls;
              urls.add(tmp);
              if (memo.every((item) => urls.has(item))) {
                c10(joined);
              }
            },
            onError() {
              const tmp = uri;
              if (ref.current.characterKey !== joined) {
                const _Set = Set;
                const self = this;
                const self2 = this;
                const obj = { characterKey: joined, urls: set };
                ref.current = obj;
                set = new Set();
              }
              const urls = tmp2.current.urls;
              urls.add(tmp);
              if (memo.every((item) => urls.has(item))) {
                c10(joined);
              }
            }
          };
          return memo(canvasWidth(num[14]), obj, uri);
        })
    };
    items19 = [memo4, animatedStyle];
    const View = tmp24(tmp4[8]).View;
    const _HermesInternal8 = HermesInternal;
    tmp21Result = tmp21(View, obj20, "character-" + joined);
  }
  items17[3] = tmp21Result;
  return memo(size, obj4);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
