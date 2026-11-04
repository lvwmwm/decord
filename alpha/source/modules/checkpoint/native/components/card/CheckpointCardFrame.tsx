// Module ID: 13664
// Function ID: 13665
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5141, 6226, 6222, 2021, 1652, 5378, 8171, 13665, 10863, 575, 5851, 2]
// Exports: default

// Module 13664 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 2021 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6222 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let height, set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = 284;
let c11 = 44;
let c12 = 43.5;
let c13 = -1;
let c14 = 0;
let c15 = 432;
let c16 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
let closure_18 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, shareCardTexture: { isolation: "isolate" }, textureOverlay: { mixBlendMode: "overlay" }, logo: { position: "absolute", top: 4, left: 4, width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
let closure_19 = { code: "(function CheckpointCardFrameTsx1(){let[isCharacterSettled,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isCharacterSettled?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  let ClipPath;
  let ClipPath2;
  let ClipPath3;
  let G2;
  let G4;
  let Image2;
  let c10;
  let combined;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items7;
  let items8;
  let obj10;
  let obj11;
  let obj13;
  let obj15;
  let obj16;
  let obj18;
  let obj19;
  let obj21;
  let obj22;
  let obj24;
  let obj5;
  let obj8;
  let primaryBackgroundColor;
  let recapCardBackgroundImage;
  let size5;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp28Result;
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
  let size1;
  let memo;
  let joined;
  let closure_9;
  height = undefined;
  const children = character.children;
  let tmp = closure_18();
  let obj = clydeSize;
  const id = clydeSize.useId();
  const obj2 = character(num[5]);
  const cardColors = obj2.getCardColors(cardColorPalette);
  const secondaryBackgroundColor = cardColors.secondaryBackgroundColor;
  ({ primaryBackgroundColor, recapCardBackgroundImage } = cardColors);
  if (flag) {
    combined = concat(canvasWidth, " ", num, "H0V44H33L44 32.999V0H", canvasWidth, "Z");
  } else {
    combined = concat(canvasWidth, "V284H0V43.5H34L38 38L44 34Z");
  }
  const bound = Math.max(1, (canvasWidth - c11) / 156, (num - c12) / 224.5);
  size = { x: c11 * (1 - bound), y: c12 * (1 - bound), width: 200 * bound, height: 268 * bound };
  size1 = undefined;
  if (characterLayout != null) {
    size1 = characterLayout.size;
  }
  let items = [character, size1];
  memo = obj.useMemo(() => {
    if (null != character) {
      if (null != size1) {
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
  [tmp15, c10] = num2(obj.useState(null), 2);
  num2(obj.useState(null), 2);
  const items1 = [closure_19, tmp15 === joined, , ];
  const useAnimatedStyle = tmp3(tmp4[8]).useAnimatedStyle;
  character(num[8]);
  items1[2] = character(num[9]).withTiming;
  items1[3] = 150;
  let c0;
  let c1;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items1;
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
  const items2 = [tmp18, tmp19, tmp20];
  CheckpointCardFrameTsx1.__closure = items2;
  CheckpointCardFrameTsx1.__workletHash = 2849175625109;
  CheckpointCardFrameTsx1.__initData = tmp17;
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
  const obj4 = { style: memo1, children: joined(size1, obj5) };
  obj5 = { style: items7, children: items8 };
  items7 = [tmp.canvas, memo2];
  const size2 = { style: tmp.layer, width: canvasWidth, height, children: memo(tmp3(tmp4[10]).Path, { d: combined, fill: secondaryBackgroundColor }) };
  const tmp30 = canvasWidth(num[10]);
  items8 = [memo(tmp30, size2), , , , ];
  const items9 = [tmp.layer, ];
  const obj6 = { style: items9, children: tmp28Result };
  const tmp31 = flag && tmp.shareCardTexture;
  items9[1] = tmp31;
  if (flag) {
    const obj7 = { children: items10 };
    const size3 = { width: canvasWidth, height: num, children: memo(tmp3(tmp4[10]).Path, obj8) };
    obj8 = { d: combined, fill: secondaryBackgroundColor };
    const tmp29Result = canvasWidth(num[10]);
    items10 = [memo(tmp29Result, size3), , ];
    const size4 = { style: items11, width: canvasWidth, height: num, children: items12 };
    items11 = [, ];
    ({ layer: arr14[0], textureOverlay: arr14[1] } = tmp);
    const obj9 = { children: memo(ClipPath2, obj10) };
    const tmp29Result5 = canvasWidth(num[10]);
    const Defs2 = tmp3(tmp4[10]).Defs;
    const _HermesInternal2 = HermesInternal;
    obj10 = { id: "" + id + "-top", children: memo(character(num[10]).Path, obj11) };
    ClipPath2 = tmp3(tmp4[10]).ClipPath;
    obj11 = { d: combined };
    items12 = [memo(Defs2, obj9), ];
    const _HermesInternal3 = HermesInternal;
    const obj12 = { clipPath: "url(#" + id + "-top)", children: memo(G2, obj13) };
    const G = tmp3(tmp4[10]).G;
    const _HermesInternal4 = HermesInternal;
    obj13 = { rotation: 180, origin: "" + x + width / 2 + ", " + c14 + c16 / 2, children: memo(Image2, size5) };
    G2 = tmp3(tmp4[10]).G;
    size5 = { href: canvasWidth(tmp4[11]), x, y: c14 - 0.4348 * c16, width, height: 1.4348 * c16, preserveAspectRatio: "none" };
    Image2 = tmp3(tmp4[10]).Image;
    items12[1] = memo(G, obj12);
    items10[1] = joined(tmp29Result5, size4);
    const size6 = { style: items13, width: canvasWidth, height: num, children: items14 };
    items13 = [, ];
    ({ layer: arr16[0], textureOverlay: arr16[1] } = tmp);
    const obj14 = { children: memo(ClipPath3, obj15) };
    const tmp29Result6 = canvasWidth(num[10]);
    const Defs3 = tmp3(tmp4[10]).Defs;
    const _HermesInternal5 = HermesInternal;
    obj15 = { id: "" + id + "-bottom", children: memo(character(num[10]).Path, obj16) };
    ClipPath3 = tmp3(tmp4[10]).ClipPath;
    obj16 = { d: combined };
    items14 = [memo(Defs3, obj14), ];
    const _HermesInternal6 = HermesInternal;
    const obj17 = { clipPath: "url(#" + id + "-bottom)", children: memo(G4, obj18) };
    const G3 = tmp3(tmp4[10]).G;
    const _HermesInternal7 = HermesInternal;
    obj18 = { rotation: 180, origin: "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2, children: memo(tmp46, obj19) };
    G4 = tmp3(tmp4[10]).G;
    obj19 = { href: canvasWidth(num[11]), opacity: 0.5, preserveAspectRatio: "xMidYMid slice" };
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
    const merged = Object.assign(styles);
    items14[1] = memo(G3, obj17);
    items10[2] = joined(tmp29Result6, size6);
    tmp28Result = tmp28(closure_9, obj7);
  } else {
    const size7 = { width: canvasWidth, height: num, children: items15 };
    const obj20 = { children: memo(ClipPath, obj21) };
    const tmp29Result7 = canvasWidth(num[10]);
    const Defs = tmp3(tmp4[10]).Defs;
    obj21 = { id, children: memo(character(num[10]).Path, obj22) };
    ClipPath = tmp3(tmp4[10]).ClipPath;
    obj22 = { d: combined };
    items15 = [memo(Defs, obj20), ];
    const obj23 = { href: obj24, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#" + id + ")" };
    obj24 = { uri: recapCardBackgroundImage };
    const Image = tmp3(tmp4[10]).Image;
    const merged1 = Object.assign(size);
    const _HermesInternal = HermesInternal;
    items15[1] = memo(Image, obj23);
    tmp28Result = tmp28(tmp29Result7, size7);
  }
  items8[1] = memo(size1, obj6);
  const obj25 = { style: tmp.logo, children: items16 };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: memo(tmp3(tmp4[10]).Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: primaryBackgroundColor }) };
  const tmp29Result8 = canvasWidth(num[10]);
  items16 = [memo(tmp29Result8, size8), ];
  const obj26 = { size: "custom", color: canvasWidth(num[13]).colors.BLACK, style: memo3 };
  const ClydeIcon = tmp3(tmp4[12]).ClydeIcon;
  items16[1] = memo(ClydeIcon, obj26);
  items8[2] = joined(size1, obj25);
  items8[3] = children;
  let tmp26Result = null != memo4 && memo.length > 0;
  if (tmp26Result) {
    const obj27 = {
      style: items17,
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
    items17 = [memo4, animatedStyle];
    const View = tmp29(tmp4[8]).View;
    const _HermesInternal8 = HermesInternal;
    tmp26Result = tmp26(View, obj27, "character-" + joined);
  }
  items8[4] = tmp26Result;
  return memo(size1, obj4);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
