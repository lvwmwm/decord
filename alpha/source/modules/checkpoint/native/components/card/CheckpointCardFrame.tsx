// Module ID: 12598
// Function ID: 12599
// Name: CheckpointCardFrame
// Dependencies: [19, 17, 21, 5012, 6391, 7912, 12599, 11606, 575, 12600, 2]
// Exports: default

// Module 12598 (CheckpointCardFrame)
import nativeDefault from "native" /* 575 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6391 */;
import inlineStyles from "inlineStyles" /* 7912 */;
import _modDef12599 from "module_12599" /* 12599 */;
import CheckpointCharacterCompositeDefault from "CheckpointCharacterComposite" /* 12600 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = -1;
let c10 = 0;
let c11 = 432;
let c12 = 326;
const styles = { x: -1, y: 0, width: 433, height: 469 };
let closure_14 = createStyles.createStyles({ canvas: { overflow: "hidden", transformOrigin: "top left" }, layer: { position: "absolute", top: 0, left: 0 }, cardTexture: { isolation: "isolate" }, textureOverlay: { mixBlendMode: "overlay" }, logo: { position: "absolute", top: 0, left: 0, width: 44, height: 44, alignItems: "center", justifyContent: "center" } });
let size = size_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/card/CheckpointCardFrame.tsx");

export default function CheckpointCardFrame(canvasHeight) {
  let ClipPath;
  let ClipPath2;
  let ClipPath3;
  let G2;
  let G4;
  let Image2;
  let Image3;
  let canvasWidth;
  let images;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj20;
  let obj3;
  let obj7;
  let obj9;
  let primaryBackgroundColor;
  let secondaryBackgroundColor;
  let size2;
  let size3;
  let size5;
  let size7;
  let tmp12Result;
  ({ images, canvasWidth } = canvasHeight);
  let num = canvasHeight.canvasHeight;
  const cardColorPalette = canvasHeight.cardColorPalette;
  if (num === undefined) {
    num = 284;
  }
  let num2 = canvasHeight.scale;
  if (num2 === undefined) {
    num2 = 1;
  }
  const clydeSize = canvasHeight.clydeSize;
  const characterLayout = canvasHeight.characterLayout;
  let flag = canvasHeight.isCharacterAndStats;
  if (flag === undefined) {
    flag = false;
  }
  const children = canvasHeight.children;
  let tmp = closure_14();
  const id = react.useId();
  let obj = CheckpointCardColors;
  const cardColors = obj.getCardColors(cardColorPalette);
  let items = [canvasWidth, num, num2];
  ({ primaryBackgroundColor, secondaryBackgroundColor } = cardColors);
  const items1 = [canvasWidth, num, num2];
  const memo = react.useMemo(() => {
    size = { width: canvasWidth * num2, height: num * num2 };
    return size;
  }, items);
  const items2 = [clydeSize];
  const memo1 = react.useMemo(() => {
    let items;
    size = { width: canvasWidth, height: num, transform: items };
    items = [];
    const obj = { scale: num2 };
    items[0] = obj;
    return size;
  }, items1);
  const items3 = [characterLayout];
  const memo2 = react.useMemo(() => {
    size = { width: clydeSize, height: clydeSize };
    return size;
  }, items2);
  const memo3 = react.useMemo(() => {
    let tmp2;
    const tmp = characterLayout;
    if (null != characterLayout) {
      size = { position: "absolute", top: null, left: null, width: null, height: null };
      ({ top: obj.top, left: obj.left, size: obj.width, size: obj.height } = tmp);
      tmp2 = size;
    }
    return tmp2;
  }, items3);
  const obj2 = { style: memo, children: metroImportDefault(hasOwnProperty, obj3) };
  obj3 = { style: items4, children: items14 };
  items4 = [tmp.canvas, memo1];
  const obj4 = { style: items5, children: items6 };
  items5 = [, ];
  ({ layer: arr6[0], cardTexture: arr6[1] } = tmp);
  size = { width: canvasWidth, height: num, children: metroRequire(inlineStyles.Rect, { width: canvasWidth, height: num, fill: secondaryBackgroundColor }) };
  const tmp14 = inlineStylesDefault;
  items6 = [metroRequire(tmp14, size), ];
  if (flag) {
    const size1 = { style: items7, width: canvasWidth, height: num, children: items8 };
    items7 = [, ];
    const obj5 = { children: items9 };
    ({ layer: arr10[0], textureOverlay: arr10[1] } = tmp);
    const obj6 = { children: metroRequire(ClipPath2, obj7) };
    const tmp13Result = inlineStylesDefault;
    const Defs2 = tmp3(7912).Defs;
    const _HermesInternal2 = HermesInternal;
    obj7 = { id: "" + id + "-top", children: metroRequire(inlineStyles.Rect, size2) };
    ClipPath2 = tmp3(7912).ClipPath;
    size2 = { width: canvasWidth, height: num };
    items8 = [metroRequire(Defs2, obj6), ];
    const _HermesInternal3 = HermesInternal;
    const obj8 = { clipPath: "url(#" + id + "-top)", children: metroRequire(G2, obj9) };
    const G = tmp3(7912).G;
    const _HermesInternal4 = HermesInternal;
    obj9 = { rotation: 180, origin: "" + x + width / 2 + ", " + c10 + c12 / 2, children: metroRequire(Image2, size3) };
    G2 = tmp3(7912).G;
    size3 = { href: _modDef12599, x, y: c10 - 0.4348 * c12, width, height: 1.4348 * c12, preserveAspectRatio: "none" };
    Image2 = tmp3(7912).Image;
    items8[1] = metroRequire(G, obj8);
    items9 = [metroImportDefault(tmp13Result, size1), ];
    const size4 = { style: items10, width: canvasWidth, height: num, children: items11 };
    items10 = [, ];
    ({ layer: arr13[0], textureOverlay: arr13[1] } = tmp);
    const obj10 = { children: metroRequire(ClipPath3, obj11) };
    const tmp13Result4 = inlineStylesDefault;
    const Defs3 = tmp3(7912).Defs;
    const _HermesInternal5 = HermesInternal;
    obj11 = { id: "" + id + "-bottom", children: metroRequire(inlineStyles.Rect, size5) };
    ClipPath3 = tmp3(7912).ClipPath;
    size5 = { width: canvasWidth, height: num };
    items11 = [metroRequire(Defs3, obj10), ];
    const _HermesInternal6 = HermesInternal;
    const obj12 = { clipPath: "url(#" + id + "-bottom)", children: metroRequire(G4, obj13) };
    const G3 = tmp3(7912).G;
    const _HermesInternal7 = HermesInternal;
    obj13 = { rotation: 180, origin: "" + styles.x + styles.width / 2 + ", " + styles.y + styles.height / 2, children: metroRequire(Image3, obj14) };
    G4 = tmp3(7912).G;
    obj14 = { href: _modDef12599, opacity: 0.5, preserveAspectRatio: "xMidYMid slice" };
    Image3 = tmp3(7912).Image;
    const merged = Object.assign(styles);
    items11[1] = metroRequire(G3, obj12);
    items9[1] = metroImportDefault(tmp13Result4, size4);
    tmp12Result = tmp12(metroImportAll, obj5);
  } else {
    const size6 = { style: items12, width: canvasWidth, height: num, children: items13 };
    items12 = [, ];
    ({ layer: arr8[0], textureOverlay: arr8[1] } = tmp);
    const obj15 = { children: metroRequire(ClipPath, obj16) };
    const tmp13Result5 = inlineStylesDefault;
    const Defs = tmp3(7912).Defs;
    obj16 = { id, children: metroRequire(inlineStyles.Rect, size7) };
    ClipPath = tmp3(7912).ClipPath;
    size7 = { width: canvasWidth, height: num };
    items13 = [metroRequire(Defs, obj15), ];
    const size8 = { href: _modDef12599, width: canvasWidth, height: num, preserveAspectRatio: "xMidYMid slice", clipPath: "url(#" + id + ")" };
    const Image = tmp3(7912).Image;
    const _HermesInternal = HermesInternal;
    items13[1] = metroRequire(Image, size8);
    tmp12Result = tmp12(tmp13Result5, size6);
  }
  items6[1] = tmp12Result;
  items14 = [metroImportDefault(hasOwnProperty, obj4), , , ];
  const obj17 = { style: tmp.logo, children: items15 };
  const size9 = { style: absoluteFill.absoluteFill, width: 44, height: 44, children: metroRequire(inlineStyles.Path, { d: "M0 0H44V33L33 44H0Z", fill: primaryBackgroundColor }) };
  const tmp13Result6 = inlineStylesDefault;
  items15 = [metroRequire(tmp13Result6, size9), ];
  const obj18 = { size: "custom", color: nativeDefault.colors.BLACK, style: memo2 };
  const ClydeIcon = tmp3(11606).ClydeIcon;
  items15[1] = metroRequire(ClydeIcon, obj18);
  items14[1] = metroImportDefault(hasOwnProperty, obj17);
  items14[2] = children;
  let tmp10Result = null != memo3 && images.urls.length > 0;
  if (tmp10Result) {
    const obj19 = { style: memo3, children: metroRequire(CheckpointCharacterCompositeDefault, obj20) };
    obj20 = { images };
    tmp10Result = tmp10(tmp11, obj19);
  }
  items14[3] = tmp10Result;
  return metroRequire(hasOwnProperty, obj2);
};
export const CHECKPOINT_CARD_HEIGHT = 284;
