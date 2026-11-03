// Module ID: 13577
// Function ID: 13578
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5141, 6211, 6207, 2021, 1652, 5377, 8155, 13578, 10815, 575, 5837, 2]
// Exports: default

// Module 13577 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 2021 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6207 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let set;

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
let closure_19 = { code: "(function CheckpointCardFrameTsx1(){let[isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS]=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  let ClipPath;
  let ClipPath2;
  let ClipPath3;
  let G2;
  let G4;
  let Image2;
  let Image3;
  let _undefined;
  let c13;
  let combined;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items8;
  let items9;
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
  let recapCardBackgroundImage;
  let secondaryBackgroundColor;
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
  recapCardBackgroundImage = undefined;
  let size1;
  let memo;
  let str7;
  let memo1;
  let joined;
  let ref;
  let x;
  const children = character.children;
  let tmp = closure_18();
  let obj = clydeSize;
  const id = clydeSize.useId();
  const obj2 = character(num[5]);
  const cardColors = obj2.getCardColors(cardColorPalette);
  ({ secondaryBackgroundColor, recapCardBackgroundImage } = cardColors);
  const primaryBackgroundColor = cardColors.primaryBackgroundColor;
  if (flag) {
    combined = concat(canvasWidth, " ", num, "H0V44H33L44 32.999V0H", canvasWidth, "Z");
  } else {
    combined = concat(canvasWidth, "V284H0V43.5H34L38 38L44 34Z");
  }
  const bound = Math.max(1, (canvasWidth - joined) / 156, (num - ref) / 224.5);
  size = { x: joined * (1 - bound), y: ref * (1 - bound), width: 200 * bound, height: 268 * bound };
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
  str7 = "share-card-texture";
  if (!flag) {
    str7 = recapCardBackgroundImage;
  }
  const items1 = [str7, memo];
  memo1 = obj.useMemo(() => {
    const items = [str7, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const useRef = obj.useRef;
  const obj3 = { artKey: joined, urls: set };
  set = new Set();
  ref = useRef(obj3);
  [tmp15, c13] = num2(obj.useState(null), 2);
  num2(obj.useState(null), 2);
  const items2 = [closure_19, tmp15 === joined, , ];
  const useAnimatedStyle = tmp3(tmp4[8]).useAnimatedStyle;
  character(num[8]);
  items2[2] = character(num[9]).withTiming;
  items2[3] = 150;
  let c0;
  let c1;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items2;
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
  const items3 = [tmp18, tmp19, tmp20];
  CheckpointCardFrameTsx1.__closure = items3;
  CheckpointCardFrameTsx1.__workletHash = 15695130331253;
  CheckpointCardFrameTsx1.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(CheckpointCardFrameTsx1);
  const items4 = [canvasWidth, num, num2];
  const items5 = [canvasWidth, num, num2];
  const memo2 = obj.useMemo(() => {
    size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items4);
  const items6 = [clydeSize];
  const memo3 = obj.useMemo(() => {
    let items;
    size = { width: canvasWidth, height: num, transform: items };
    items = [];
    const obj = { scale: num2 };
    items[0] = obj;
    return size;
  }, items5);
  const items7 = [characterLayout];
  const memo4 = obj.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items6);
  const memo5 = obj.useMemo(() => {
    let tmp2;
    const tmp = characterLayout;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = tmp);
      tmp2 = size;
    }
    return tmp2;
  }, items7);
  const obj4 = { style: memo2, children: memo(recapCardBackgroundImage, obj5) };
  obj5 = { style: items8, children: items9 };
  items8 = [tmp.canvas, memo3];
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: size1(tmp3(tmp4[10]).Path, { d: combined, fill: secondaryBackgroundColor }) };
  const tmp30 = canvasWidth(num[10]);
  items9 = [size1(tmp30, size2), , , , ];
  const items10 = [tmp.layer, , ];
  let shareCardTexture = flag;
  const View = canvasWidth(tmp4[8]).View;
  if (flag) {
    shareCardTexture = tmp.shareCardTexture;
  }
  const obj6 = { style: items10, children: tmp28Result };
  items10[1] = shareCardTexture;
  items10[2] = animatedStyle;
  if (flag) {
    const obj7 = { children: items11 };
    const size3 = { width: canvasWidth, height: num, children: size1(tmp3(tmp4[10]).Path, obj8) };
    obj8 = { d: combined, fill: secondaryBackgroundColor };
    const tmp29Result = canvasWidth(num[10]);
    items11 = [size1(tmp29Result, size3), , ];
    const size4 = { style: items12, width: canvasWidth, height: num, children: items13 };
    items12 = [, ];
    ({ layer: arr15[0], textureOverlay: arr15[1] } = tmp);
    const obj9 = { children: size1(ClipPath2, obj10) };
    const tmp29Result5 = canvasWidth(num[10]);
    const Defs2 = tmp3(tmp4[10]).Defs;
    const _HermesInternal2 = HermesInternal;
    obj10 = { id: "" + id + "-top", children: size1(character(num[10]).Path, obj11) };
    ClipPath2 = tmp3(tmp4[10]).ClipPath;
    obj11 = { d: combined };
    items13 = [size1(Defs2, obj9), ];
    const _HermesInternal3 = HermesInternal;
    const obj12 = { clipPath: "url(#" + id + "-top)", children: size1(G2, obj13) };
    const G = tmp3(tmp4[10]).G;
    const _HermesInternal4 = HermesInternal;
    obj13 = { rotation: 180, origin: "" + x + width / 2 + ", " + c14 + c16 / 2, children: size1(Image2, size5) };
    G2 = tmp3(tmp4[10]).G;
    size5 = {
      href: canvasWidth(tmp4[11]),
      x,
      y: c14 - 0.4348 * c16,
      width,
      height: 1.4348 * c16,
      preserveAspectRatio: "none",
      onLoad() {
          const tmp = str7;
          if (ref.current.artKey !== joined) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            const obj = { artKey: joined, urls: set };
            ref.current = obj;
            set = new Set();
          }
          const urls = tmp2.current.urls;
          urls.add(tmp);
          if (memo1.every((item) => urls.has(item))) {
            _undefined(joined);
          }
        }
    };
    Image2 = tmp3(tmp4[10]).Image;
    items13[1] = size1(G, obj12);
    items11[1] = memo(tmp29Result5, size4);
    const size6 = { style: items14, width: canvasWidth, height: num, children: items15 };
    items14 = [, ];
    ({ layer: arr17[0], textureOverlay: arr17[1] } = tmp);
    const obj14 = { children: size1(ClipPath3, obj15) };
    const tmp29Result6 = canvasWidth(num[10]);
    const Defs3 = tmp3(tmp4[10]).Defs;
    const _HermesInternal5 = HermesInternal;
    obj15 = { id: "" + id + "-bottom", children: size1(character(num[10]).Path, obj16) };
    ClipPath3 = tmp3(tmp4[10]).ClipPath;
    obj16 = { d: combined };
    items15 = [size1(Defs3, obj14), ];
    ({ clipPath: "url(#" + id + "-bottom)", children: size1(G4, obj18) });
    const _HermesInternal6 = HermesInternal;
    const G3 = tmp3(tmp4[10]).G;
    const _HermesInternal7 = HermesInternal;
    obj18 = { rotation: 180, origin: "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2, children: size1(Image3, obj19) };
    G4 = tmp3(tmp4[10]).G;
    obj19 = { href: canvasWidth(num[11]), opacity: 0.5, preserveAspectRatio: "xMidYMid slice" };
    Image3 = tmp3(tmp4[10]).Image;
    const merged = Object.assign(styles);
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
    items11[2] = memo(tmp29Result6, size6);
    tmp28Result = tmp28(str7, obj7);
  } else {
    const size7 = { width: canvasWidth, height: num, children: items16 };
    const obj20 = { children: size1(ClipPath, obj21) };
    const tmp29Result7 = canvasWidth(num[10]);
    const Defs = tmp3(tmp4[10]).Defs;
    obj21 = { id, children: size1(character(num[10]).Path, obj22) };
    ClipPath = tmp3(tmp4[10]).ClipPath;
    obj22 = { d: combined };
    items16 = [size1(Defs, obj20), ];
    const obj23 = {
      href: obj24,
      preserveAspectRatio: "xMidYMid slice",
      clipPath: "url(#" + id + ")",
      onLoad() {
          const tmp = recapCardBackgroundImage;
          if (ref.current.artKey !== joined) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            const obj = { artKey: joined, urls: set };
            ref.current = obj;
            set = new Set();
          }
          const urls = tmp2.current.urls;
          urls.add(tmp);
          if (memo1.every((item) => urls.has(item))) {
            _undefined(joined);
          }
        }
    };
    obj24 = { uri: recapCardBackgroundImage };
    const Image = tmp3(tmp4[10]).Image;
    const merged1 = Object.assign(size);
    const _HermesInternal = HermesInternal;
    items16[1] = size1(Image, obj23);
    tmp28Result = tmp28(tmp29Result7, size7);
  }
  items9[1] = size1(View, obj6, "texture-" + joined);
  const obj25 = { style: tmp.logo, children: items17 };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: size1(tmp3(tmp4[10]).Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: primaryBackgroundColor }) };
  const tmp29Result8 = canvasWidth(num[10]);
  items17 = [size1(tmp29Result8, size8), ];
  const obj26 = { size: "custom", color: canvasWidth(num[13]).colors.BLACK, style: memo4 };
  const ClydeIcon = tmp3(tmp4[12]).ClydeIcon;
  items17[1] = size1(ClydeIcon, obj26);
  items9[2] = memo(recapCardBackgroundImage, obj25);
  items9[3] = children;
  let tmp26Result = null != memo5 && memo.length > 0;
  if (tmp26Result) {
    const obj27 = {
      style: items18,
      children: memo.map((uri) => {
          let closure_0 = uri;
          let obj = {
            source: { uri },
            style: characterLayout.absoluteFill,
            onLoad() {
              const tmp = uri;
              if (ref.current.artKey !== joined) {
                const _Set = Set;
                const self = this;
                const self2 = this;
                const obj = { artKey: joined, urls: set };
                ref.current = obj;
                set = new Set();
              }
              const urls = tmp2.current.urls;
              urls.add(tmp);
              if (memo1.every((item) => urls.has(item))) {
                c13(joined);
              }
            }
          };
          return size1(canvasWidth(num[14]), obj, uri);
        })
    };
    items18 = [memo5, animatedStyle];
    const View2 = tmp29(tmp4[8]).View;
    const _HermesInternal8 = HermesInternal;
    tmp26Result = tmp26(View2, obj27, "character-" + joined);
  }
  items9[4] = tmp26Result;
  return size1(recapCardBackgroundImage, obj4);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
