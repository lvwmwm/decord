// Module ID: 13424
// Function ID: 13425
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5014, 6091, 6087, 1892, 5095, 5254, 8031, 13425, 10685, 575, 5717, 2]
// Exports: default

// Module 13424 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 1892 */;
import timing from "timing" /* 5254 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6087 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
const __initData = { code: "function CheckpointCardFrameTsx1(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  let ClipPath;
  let ClipPath2;
  let ClipPath3;
  let G2;
  let G4;
  let Image2;
  let combined;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items6;
  let items7;
  let items9;
  let obj11;
  let obj12;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj22;
  let obj23;
  let obj25;
  let obj6;
  let obj9;
  let recapCardBackgroundImage;
  let secondaryBackgroundColor;
  let size5;
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
  recapCardBackgroundImage = undefined;
  let size1;
  let memo;
  let str7;
  let memo1;
  let joined;
  let ref;
  let x;
  let closure_14;
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
  const tmp14 = num2(obj.useState(null), 2);
  x = tmp14[1];
  closure_14 = tmp15;
  const tmp3Result = character(num[8]);
  class S {
    constructor() {
      let opacity = 0;
      if (closure_14) {
        const obj = timing;
        opacity = obj.withTiming(1, { duration: 150 });
      }
      return { opacity };
    }
  }
  S.__closure = { isArtLoaded: tmp14[0] === joined, withTiming: character(num[9]).withTiming, CARD_ART_FADE_IN_DURATION_MS: 150 };
  S.__workletHash = 7810000693516;
  S.__initData = __initData;
  ({ isArtLoaded: tmp14[0] === joined, withTiming: character(num[9]).withTiming, CARD_ART_FADE_IN_DURATION_MS: 150 });
  const animatedStyle = tmp3Result.useAnimatedStyle(S);
  const items2 = [canvasWidth, num, num2];
  const items3 = [canvasWidth, num, num2];
  const memo2 = obj.useMemo(() => {
    size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items2);
  const items4 = [clydeSize];
  const memo3 = obj.useMemo(() => {
    let items;
    size = { width: canvasWidth, height: num, transform: items };
    items = [];
    const obj = { scale: num2 };
    items[0] = obj;
    return size;
  }, items3);
  const items5 = [characterLayout];
  const memo4 = obj.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items4);
  const memo5 = obj.useMemo(() => {
    let tmp2;
    const tmp = characterLayout;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = tmp);
      tmp2 = size;
    }
    return tmp2;
  }, items5);
  const obj5 = { style: memo2, children: memo(recapCardBackgroundImage, obj6) };
  obj6 = { style: items6, children: items7 };
  items6 = [tmp.canvas, memo3];
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: size1(tmp3(tmp4[10]).Path, { d: combined, fill: secondaryBackgroundColor }) };
  const tmp25 = canvasWidth(num[10]);
  items7 = [size1(tmp25, size2), , , , ];
  const items8 = [tmp.layer, , ];
  let shareCardTexture = flag;
  const View = canvasWidth(tmp4[8]).View;
  if (flag) {
    shareCardTexture = tmp.shareCardTexture;
  }
  const obj7 = { style: items8, children: tmp23Result };
  items8[1] = shareCardTexture;
  items8[2] = animatedStyle;
  if (flag) {
    const obj8 = { children: items9 };
    const size3 = { width: canvasWidth, height: num, children: size1(tmp3(tmp4[10]).Path, obj9) };
    obj9 = { d: combined, fill: secondaryBackgroundColor };
    const tmp24Result = canvasWidth(num[10]);
    items9 = [size1(tmp24Result, size3), , ];
    const size4 = { style: items10, width: canvasWidth, height: num, children: items11 };
    items10 = [, ];
    ({ layer: arr13[0], textureOverlay: arr13[1] } = tmp);
    const obj10 = { children: size1(ClipPath2, obj11) };
    const tmp24Result5 = canvasWidth(num[10]);
    const Defs2 = tmp3(tmp4[10]).Defs;
    const _HermesInternal2 = HermesInternal;
    obj11 = { id: "" + id + "-top", children: size1(character(num[10]).Path, obj12) };
    ClipPath2 = tmp3(tmp4[10]).ClipPath;
    obj12 = { d: combined };
    items11 = [size1(Defs2, obj10), ];
    const _HermesInternal3 = HermesInternal;
    const obj13 = { clipPath: "url(#" + id + "-top)", children: size1(G2, obj14) };
    const G = tmp3(tmp4[10]).G;
    const _HermesInternal4 = HermesInternal;
    obj14 = { rotation: 180, origin: "" + x + width / 2 + ", " + closure_14 + c16 / 2, children: size1(Image2, size5) };
    G2 = tmp3(tmp4[10]).G;
    size5 = {
      href: canvasWidth(tmp4[11]),
      x,
      y: closure_14 - 0.4348 * c16,
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
            closure_13(joined);
          }
        }
    };
    Image2 = tmp3(tmp4[10]).Image;
    items11[1] = size1(G, obj13);
    items9[1] = memo(tmp24Result5, size4);
    const size6 = { style: items12, width: canvasWidth, height: num, children: items13 };
    items12 = [, ];
    ({ layer: arr15[0], textureOverlay: arr15[1] } = tmp);
    const obj15 = { children: size1(ClipPath3, obj16) };
    const tmp24Result6 = canvasWidth(num[10]);
    const Defs3 = tmp3(tmp4[10]).Defs;
    const _HermesInternal5 = HermesInternal;
    obj16 = { id: "" + id + "-bottom", children: size1(character(num[10]).Path, obj17) };
    ClipPath3 = tmp3(tmp4[10]).ClipPath;
    obj17 = { d: combined };
    items13 = [size1(Defs3, obj15), ];
    const _HermesInternal6 = HermesInternal;
    const obj18 = { clipPath: "url(#" + id + "-bottom)", children: size1(G4, obj19) };
    const G3 = tmp3(tmp4[10]).G;
    const _HermesInternal7 = HermesInternal;
    obj19 = { rotation: 180, origin: "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2, children: size1(tmp40, obj20) };
    G4 = tmp3(tmp4[10]).G;
    obj20 = { href: canvasWidth(num[11]), opacity: 0.5, preserveAspectRatio: "xMidYMid slice" };
    class S {
      constructor() {
        let opacity = 0;
        if (closure_14) {
          const obj = timing;
          opacity = obj.withTiming(1, { duration: 150 });
        }
        return { opacity };
      }
    }
    const merged = Object.assign(styles);
    items13[1] = size1(G3, obj18);
    items9[2] = memo(tmp24Result6, size6);
    tmp23Result = tmp23(str7, obj8);
  } else {
    const size7 = { width: canvasWidth, height: num, children: items14 };
    const obj21 = { children: size1(ClipPath, obj22) };
    const tmp24Result7 = canvasWidth(num[10]);
    const Defs = tmp3(tmp4[10]).Defs;
    obj22 = { id, children: size1(character(num[10]).Path, obj23) };
    ClipPath = tmp3(tmp4[10]).ClipPath;
    obj23 = { d: combined };
    items14 = [size1(Defs, obj21), ];
    const obj24 = {
      href: obj25,
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
            closure_13(joined);
          }
        }
    };
    obj25 = { uri: recapCardBackgroundImage };
    const Image = tmp3(tmp4[10]).Image;
    const merged1 = Object.assign(size);
    const _HermesInternal = HermesInternal;
    items14[1] = size1(Image, obj24);
    tmp23Result = tmp23(tmp24Result7, size7);
  }
  items7[1] = size1(View, obj7, "texture-" + joined);
  const obj26 = { style: tmp.logo, children: items15 };
  const size8 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: size1(tmp3(tmp4[10]).Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: primaryBackgroundColor }) };
  const tmp24Result8 = canvasWidth(num[10]);
  items15 = [size1(tmp24Result8, size8), ];
  const obj27 = { size: "custom", color: canvasWidth(num[13]).colors.BLACK, style: memo4 };
  const ClydeIcon = tmp3(tmp4[12]).ClydeIcon;
  items15[1] = size1(ClydeIcon, obj27);
  items7[2] = memo(recapCardBackgroundImage, obj26);
  items7[3] = children;
  let tmp21Result = null != memo5 && memo.length > 0;
  if (tmp21Result) {
    const obj28 = {
      style: items16,
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
                closure_13(joined);
              }
            }
          };
          return size1(canvasWidth(num[14]), obj, uri);
        })
    };
    items16 = [memo5, animatedStyle];
    const View2 = tmp24(tmp4[8]).View;
    const _HermesInternal8 = HermesInternal;
    tmp21Result = tmp21(View2, obj28, "character-" + joined);
  }
  items7[4] = tmp21Result;
  return size1(recapCardBackgroundImage, obj5);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
