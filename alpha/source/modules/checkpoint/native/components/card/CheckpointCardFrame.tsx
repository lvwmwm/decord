// Module ID: 13389
// Function ID: 13390
// Name: CheckpointCardFrame
// Dependencies: [32, 19, 17, 21, 5009, 6086, 6082, 1893, 5090, 5249, 8023, 10665, 575, 5712, 2]
// Exports: default

// Module 13389 (CheckpointCardFrame)
import react_nativeDefault from "react-native" /* 1893 */;
import timing from "timing" /* 5249 */;
import checkpoint_CheckpointMessageComponentUtils from "checkpoint/CheckpointMessageComponentUtils" /* 6082 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 284;
let c10 = 43.5;
let closure_11 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, logo: { position: "absolute", top: 4, left: 4, width: 40, height: 40, alignItems: "center", justifyContent: "center" } });
let __initData = { code: "function CheckpointCardFrameTsx1(){const{isArtLoaded,withTiming,CARD_ART_FADE_IN_DURATION_MS}=this.__closure;return{opacity:isArtLoaded?withTiming(1,{duration:CARD_ART_FADE_IN_DURATION_MS}):0};}" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(character) {
  let ClipPath;
  let closure_12;
  let items10;
  let items11;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj6;
  let obj9;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let size3;
  let tmp20;
  let tmp23;
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
  let memo;
  let memo1;
  let joined;
  let ref;
  __initData = undefined;
  let closure_13;
  const children = character.children;
  let tmp = ref();
  let obj = clydeSize;
  const id = clydeSize.useId();
  const obj2 = character(num[5]);
  const cardColors = obj2.getCardColors(cardColorPalette);
  const recapCardBackgroundImage = cardColors.recapCardBackgroundImage;
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  const combined = "M44 34V0H" + canvasWidth + "V284H0V43.5H34L38 38L44 34Z";
  const bound = Math.max(1, (canvasWidth - 44) / 156, (num - joined) / 224.5);
  size = { x: 44 * (1 - bound), y: joined * (1 - bound), width: 200 * bound, height: 268 * bound };
  let size1;
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
  const items1 = [recapCardBackgroundImage, memo];
  memo1 = obj.useMemo(() => {
    const items = [recapCardBackgroundImage, ...memo];
    return items;
  }, items1);
  joined = memo1.join("\n");
  const useRef = obj.useRef;
  const obj3 = { artKey: joined, urls: set };
  set = new Set();
  ref = useRef(obj3);
  const tmp11 = num2(obj.useState(null), 2);
  __initData = tmp11[1];
  closure_13 = tmp12;
  const tmp3Result = character(num[8]);
  class T {
    constructor() {
      let opacity = 0;
      if (closure_13) {
        const obj = timing;
        opacity = obj.withTiming(1, { duration: 150 });
      }
      return { opacity };
    }
  }
  T.__closure = { isArtLoaded: tmp11[0] === joined, withTiming: character(num[9]).withTiming, CARD_ART_FADE_IN_DURATION_MS: 150 };
  T.__workletHash = 7810000693516;
  T.__initData = __initData;
  ({ isArtLoaded: tmp11[0] === joined, withTiming: character(num[9]).withTiming, CARD_ART_FADE_IN_DURATION_MS: 150 });
  const animatedStyle = tmp3Result.useAnimatedStyle(T);
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
  const obj5 = { style: memo2, children: tmp20(recapCardBackgroundImage, obj6) };
  obj6 = { style: items6, children: items7 };
  items6 = [tmp.canvas, memo3];
  const size2 = { style: tmp.layer, width: canvasWidth, height: memo1, children: size1(tmp3(tmp4[10]).Path, { d: combined, fill: secondaryBackgroundColor }) };
  const tmp22 = canvasWidth(num[10]);
  items7 = [size1(tmp22, size2), , , , ];
  const obj7 = { style: items8, children: memo(tmp23, size3) };
  items8 = [tmp.layer, animatedStyle];
  const View = canvasWidth(tmp4[8]).View;
  size3 = { width: canvasWidth, height: memo1, children: items9 };
  const obj8 = { children: size1(ClipPath, obj9) };
  tmp23 = canvasWidth(num[10]);
  const Defs = tmp3(tmp4[10]).Defs;
  obj9 = { id, children: size1(character(num[10]).Path, { d: combined }) };
  ClipPath = tmp3(tmp4[10]).ClipPath;
  items9 = [size1(Defs, obj8), ];
  const obj10 = {
    href: { uri: recapCardBackgroundImage },
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
        closure_12(joined);
      }
    }
  };
  const Image = tmp3(tmp4[10]).Image;
  const merged = Object.assign(size);
  items9[1] = size1(Image, obj10);
  items7[1] = size1(View, obj7, "texture-" + joined);
  const obj11 = { style: tmp.logo, children: items10 };
  const size4 = { style: characterLayout.absoluteFill, width: 40, height: 40, children: size1(tmp3(tmp4[10]).Path, { d: "M0 40H30L40 30V0H10L0 10V40Z", fill: primaryBackgroundColor }) };
  const tmp25 = canvasWidth(num[10]);
  items10 = [size1(tmp25, size4), ];
  const obj12 = { size: "custom", color: canvasWidth(num[12]).colors.BLACK, style: memo4 };
  const ClydeIcon = tmp3(tmp4[11]).ClydeIcon;
  items10[1] = size1(ClydeIcon, obj12);
  items7[2] = memo(recapCardBackgroundImage, obj11);
  items7[3] = children;
  let tmp18Result = null != memo5;
  tmp20 = memo;
  const tmp21 = canvasWidth;
  if (tmp18Result) {
    tmp18Result = memo.length > 0;
  }
  if (tmp18Result) {
    const obj13 = {
      style: items11,
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
                closure_12(joined);
              }
            }
          };
          return size1(canvasWidth(num[13]), obj, uri);
        })
    };
    items11 = [memo5, animatedStyle];
    const View2 = tmp21(tmp4[8]).View;
    const _HermesInternal = HermesInternal;
    tmp18Result = tmp18(View2, obj13, "character-" + joined);
  }
  items7[4] = tmp18Result;
  return size1(recapCardBackgroundImage, obj5);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
