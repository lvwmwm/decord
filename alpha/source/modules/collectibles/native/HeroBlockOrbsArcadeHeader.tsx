// Module ID: 18372
// Function ID: 18373
// Name: HeroBlockOrbsArcadeHeader
// Dependencies: [32, 19, 17, 5244, 1072, 21, 575, 10077, 18373, 5243, 10060, 5280, 8197, 5839, 671, 5240, 504, 17502, 1500, 5881, 9663, 5957, 18374, 5830, 5866, 1113, 5873, 5484, 5250, 5314, 2]
// Exports: default

// Module 18372 (HeroBlockOrbsArcadeHeader)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import shared from "shared" /* 5250 */;
import QuestContent from "QuestContent" /* 5280 */;
import native from "native" /* 5314 */;
import useThemeDefault from "useTheme" /* 5484 */;
import useToken from "useToken" /* 5839 */;
import inlineStyles from "inlineStyles" /* 8197 */;
import QuestUtils from "QuestUtils" /* 10060 */;
import _modDef18373 from "module_18373" /* 18373 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import AssetUtils from "AssetUtils" /* 10077 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;
let _require, importDefault;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp4;
let unpackModuleId;
const Text_Text = tmp4(5866);
function handleTakeMeHere() {
  const obj = QuestUtils;
  const obj2 = { mergeExistingRoutes: true, fromContent: QuestContent.QuestContent.ORBS_SHOP_HERO_CTA };
  obj.openQuestHome(obj2);
}
function RadialGradientLayer(color) {
  let c0;
  let combined;
  let cx;
  let cy;
  let id;
  let items;
  let items1;
  let opacity;
  let rotation;
  let rx;
  let ry;
  let tmp6Result;
  ({ id, ellipse } = color);
  ({ cx, cy, rotation } = ellipse);
  color = color.color;
  c0 = undefined;
  ({ rx, ry } = ellipse);
  ({ opacity, frameHeight } = color);
  const tmp = closure_18();
  [size, c0] = react.useState({ width: 0, height: 0 });
  _slicedToArray(react.useState({ width: 0, height: 0 }), 2);
  const obj = {
    style: tmp.gradient,
    onLayout: react.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      size = { width: layout.width, height: layout.height };
      _undefined(size);
    }, []),
    children: tmp6Result
  };
  tmp6Result = null;
  const tmp4 = hasOwnProperty;
  if (size.width > 0) {
    tmp6Result = null;
    if (size.height > 0) {
      const size1 = { width: null, height: null, viewBox: "0 0 375 " + frameHeight, preserveAspectRatio: "none", children: items1 };
      ({ width: obj2.width, height: obj2.height } = size);
      const _HermesInternal = HermesInternal;
      const tmp9 = inlineStylesDefault;
      const Defs = inlineStyles.Defs;
      const obj3 = { id, gradientUnits: "userSpaceOnUse", cx, cy, rx, ry, gradientTransform: combined, children: items };
      combined = undefined;
      const RadialGradient = inlineStyles.RadialGradient;
      if (null != rotation) {
        const _HermesInternal2 = HermesInternal;
        combined = "rotate(" + rotation + " " + cx + " " + cy + ")";
      }
      const obj4 = { children: authStore(RadialGradient, obj3) };
      const obj5 = { offset: 0, stopColor: color, stopOpacity: opacity };
      items = [React4(inlineStyles.Stop, obj5), ];
      const obj6 = { offset: 1, stopColor: color, stopOpacity: 0 };
      items[1] = React4(inlineStyles.Stop, obj6);
      items1 = [React4(Defs, obj4), ];
      const size2 = { width: "100%", height: "100%", fill: "url(#" + id + ")" };
      const _HermesInternal3 = HermesInternal;
      const Rect = tmp11(8197).Rect;
      items1[1] = React4(Rect, size2);
      tmp6Result = tmp6(tmp9, size1);
    }
  }
  return React4(tmp4, obj);
}
function ArtScrim() {
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX);
  const obj2 = _modDef671(token);
  const obj3 = { id: "orbsArcadeShopHeaderScrim", ellipse, color: obj2.hex("rgb"), opacity: obj2.alpha(), frameHeight };
  return React4(RadialGradientLayer, obj3);
}
function HeroBlockOrbsArcadeHeaderContent(bleedsOntoPage) {
  let _undefined;
  let c1;
  let c4;
  let closure_3;
  let first;
  let header;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items11;
  let items4;
  let items7;
  let items8;
  let obj22;
  let obj9;
  let sum;
  let sum1;
  let tmp10;
  let tmp18;
  let tmp28;
  let useReducedMotion;
  bleedsOntoPage = bleedsOntoPage.bleedsOntoPage;
  importDefault = undefined;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let fontScale;
  const tmp = closure_18();
  _require = tmp;
  let obj = require("useToken");
  const token = obj.useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  const hexToRgbaString = require("ColorUtils").hexToRgbaString;
  require("ColorUtils");
  const obj2 = require("ColorUtils");
  const hexToRgbaStringResult = hexToRgbaString(obj2.hexWithOpacity(token, 0));
  let items = [AccessibilityStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  [tmp10, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp11 = require("useIsCarouselInView")();
  const isInView = tmp11.isInView;
  const containerRef = tmp11.containerRef;
  [first, _slicedToArray] = react.useState(null);
  const callback = react.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
  }, []);
  if (bleedsOntoPage) {
    tmp18 = tmp15;
    sum = tmp15;
  } else {
    sum = tmp15 + PX_16;
    tmp18 = tmp15;
  }
  react = sum;
  const items1 = [tmp.header, first, sum];
  const items2 = [sum];
  const memo = obj4.useMemo(() => {
    let num = 1;
    if (null != first) {
      const _Math = Math;
      num = Math.min(tmp / 375, 1.25);
    }
    const items = [header.header, ];
    const obj = { minHeight: c4 * num };
    items[1] = obj;
    return items;
  }, items1);
  const memo1 = obj4.useMemo(() => {
    const items = [0.5, 271.6216216216216 / c4];
    return items;
  }, items2);
  const tmp2Result = require("Link");
  const isFocused = tmp2Result.useIsFocused();
  const tmp2Result2 = require("useFontScale");
  fontScale = tmp2Result2.useFontScale();
  [][0] = fontScale;
  const obj5 = { ref: containerRef, style: memo, onLayout: callback, children: null };
  const obj6 = { style: tmp.art, children: null };
  const obj7 = { style: tmp.artFrame, children: null };
  if (!stateFromStores) {
    let tmp26Result;
    if (!tmp10) {
      const obj8 = {
        style: tmp.video,
        source: obj9,
        poster: metadata,
        posterResizeMode: "cover",
        resizeMode: "cover",
        paused: tmp28,
        onError() {
              return _undefined(true);
            },
        muted: true,
        disableFocus: true,
        preventsDisplaySleepDuringVideoPlayback: false,
        importantForAccessibility: "no-hide-descendants"
      };
      obj9 = { uri: require("module_18373") };
      const VideoComponent = tmp2(tmp3[20]).VideoComponent;
      tmp28 = !isInView;
      if (isInView) {
        tmp28 = !isFocused;
      }
      tmp26Result = tmp26(VideoComponent, obj8);
    }
    obj7.children = tmp26Result;
    const items3 = [closure_9(fontScale, obj7), closure_9(ArtScrim, {}), ];
    const obj10 = { style: tmp.gradient, start: null, end: null, locations: memo1, colors: items4 };
    ({ START: obj14.start, END: obj14.end } = closure_8);
    items4 = [hexToRgbaStringResult, token];
    items3[2] = closure_9(require("LinearGradient"), obj10);
    obj6.children = items3;
    const items5 = [closure_10(fontScale, obj6), , ];
    const items6 = [tmp.glow, ];
    const obj11 = { style: items6, pointerEvents: "none", children: items7 };
    const tmp33 = bleedsOntoPage && tmp.glowWithBleed;
    items6[1] = tmp33;
    const obj12 = { id: "orbsArcadeShopHeaderGlow", ellipse: ellipse2, color: "#5242a3", opacity: 0.55, frameHeight: sum1 };
    sum1 = tmp18;
    const tmp32 = closure_8;
    const tmp34 = RadialGradientLayer;
    if (bleedsOntoPage) {
      sum1 = tmp18 + PX_48;
    }
    items7 = [closure_9(tmp34, obj12), ];
    let tmp26Result2 = null;
    if (bleedsOntoPage) {
      const obj13 = { style: tmp.bleedFade, start: null, end: null, colors: items8 };
      ({ START: obj17.start, END: obj17.end } = tmp32);
      items8 = [hexToRgbaStringResult, token];
      tmp26Result2 = tmp26(tmp4(tmp3[23]), obj13);
    }
    items7[1] = tmp26Result2;
    items5[1] = closure_10(fontScale, obj11);
    const items9 = [tmp.content, ];
    const obj15 = { style: items9, children: items11 };
    const tmp39 = !bleedsOntoPage && tmp.contentWithPadding;
    items9[1] = tmp39;
    const obj16 = { style: tmp23, children: items10 };
    const obj18 = { variant: "display-sm", color: "text-strong", children: intl.string(require("intl").t["2L068F"]) };
    const Heading = tmp2(tmp3[24]).Heading;
    intl = tmp2(tmp3[25]).intl;
    items10 = [closure_9(Heading, obj18), ];
    const obj19 = { variant: "body-sm/medium", color: "text-default", children: intl2.string(require("intl").t.BnpvVU) };
    const Text = tmp2(tmp3[24]).Text;
    intl2 = tmp2(tmp3[25]).intl;
    items10[1] = closure_9(Text, obj19);
    items11 = [closure_10(fontScale, obj16), ];
    const obj20 = { variant: "primary-overlay", size: "sm", grow: false, shrink: true, text: intl3.string(require("intl").t.Yjyv5F), onPress: handleTakeMeHere };
    const Button = tmp2(tmp3[26]).Button;
    intl3 = tmp2(tmp3[25]).intl;
    items11[1] = closure_9(Button, obj20);
    items5[2] = closure_10(fontScale, obj15);
    obj5.children = items5;
    return closure_10(fontScale, obj5);
  }
  const obj21 = { source: obj22, style: tmp.image, accessible: false };
  obj22 = { uri: require("module_18374") };
  const tmp4Result = require("FastImage");
  tmp26Result = tmp26(tmp4Result, obj21);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet, View: hasOwnProperty } = react_native);
({ ThemeTypes: metroImportDefault, VerticalGradient: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let c12 = 289;
const PX_16 = nativeDefault.space.PX_16;
const metadata = AssetUtils.convertVideoToFirstFrameImageWithMediaProxy(_modDef18373);
const PX_48 = nativeDefault.space.PX_48;
const ellipse = { cx: 85.5, cy: 267.5, rx: 329, ry: 217, rotation: 63 };
const ellipse2 = { cx: 67, cy: 231, rx: 185, ry: 155 };
let createStyles = createStyles_mod;
let obj = { header: { justifyContent: "flex-end" }, art: obj3, artFrame: { position: "absolute", top: 0, left: 0, right: 0, aspectRatio: 1.3805970149253732 }, image: obj4, video: null, gradient: null, glow: null, glowWithBleed: { bottom: -PX_48 }, bleedFade: { position: "absolute", left: 0, right: 0, bottom: 0, height: PX_48 }, content: obj5, contentWithPadding: { paddingBottom: PX_16 }, productsTitle: obj6 };
obj3 = { overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { resizeMode: "cover" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
({ absoluteFillObject: obj2.video, absoluteFillObject: obj2.gradient, absoluteFillObject: obj2.glow } = StyleSheet);
obj5 = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_32, marginBottom: nativeDefault.space.PX_16 };
let closure_18 = createStyles(obj);
let size = size_mod;
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlockOrbsArcadeHeader.tsx");

export default function HeroBlockOrbsArcadeHeader(productsTitle) {
  productsTitle = productsTitle.productsTitle;
  const tmp = closure_18();
  const tmp3 = useThemeDefault();
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(tmp3);
  let DARK = tmp3;
  const ThemeContextProvider = native.ThemeContextProvider;
  const tmp6 = authStore;
  const tmp7 = unpackModuleId;
  if (!isThemeDarkResult) {
    DARK = metroImportDefault.DARK;
  }
  const children = [, ];
  const obj2 = { theme: DARK, children: React4(HeroBlockOrbsArcadeHeaderContent, { bleedsOntoPage: isThemeDarkResult }) };
  children[0] = React4(ThemeContextProvider, obj2);
  let tmp8Result = null;
  if (null != productsTitle) {
    tmp8Result = null;
    if ("" !== productsTitle) {
      const obj3 = { variant: "heading-lg/semibold", style: tmp.productsTitle, children: productsTitle };
      tmp8Result = tmp8(Text_Text.Heading, obj3);
    }
  }
  children[1] = tmp8Result;
  return tmp6(tmp7, { children });
};
