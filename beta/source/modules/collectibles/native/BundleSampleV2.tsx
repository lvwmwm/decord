// Module ID: 8260
// Function ID: 8261
// Name: BundleSampleV2
// Dependencies: [19, 17, 8261, 21, 5899, 4836, 576, 38, 1974, 1971, 8262, 8273, 8280, 1177, 2]
// Exports: default

// Module 8260 (BundleSampleV2)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import utils from "utils" /* 1971 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import FastImageDefault from "FastImage" /* 5899 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8261 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 8262 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8273 */;
import NameplateDummyUserPreview2 from "NameplateDummyUserPreview" /* 8280 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function BundleStaticPreviewContent(mutedBackground) {
  let bgStatic;
  let disableBackground;
  let fgStatic;
  let items;
  let obj2;
  let obj7;
  let obj8;
  let previewAssets;
  let targetSize;
  let tmp21Result;
  let tmp27;
  ({ previewAssets, disableBackground, targetSize } = mutedBackground);
  ({ bgStatic, fgStatic } = previewAssets);
  let tmp = null;
  mutedBackground = mutedBackground.mutedBackground;
  if (null != bgStatic) {
    let combined = bgStatic;
    const tmp2 = metroRequire;
    const tmp5 = FastImageDefault;
    if (null != targetSize) {
      combined = bgStatic;
      if (bgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math = Math;
        const bound = Math.min(_false.get(), 2);
        const _Math2 = Math;
        const rounded = Math.round(targetSize.width * bound);
        const _Math3 = Math;
        const rounded1 = Math.round(targetSize.height * bound);
        let str2 = "?";
        if (bgStatic.includes("?")) {
          str2 = "&";
        }
        const _HermesInternal = HermesInternal;
        combined = "" + bgStatic + str2 + "width=" + rounded + "&height=" + rounded1;
      }
    }
    const obj = { source: obj2, style: closure_9.bgImage, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj2 = { uri: combined };
    tmp = tmp2(tmp5, obj);
  }
  let tmp21Result2 = !disableBackground;
  const obj3 = { style: closure_9.container, children: items };
  const tmp17 = metroImportDefault;
  if (!disableBackground) {
    tmp21Result2 = null != tmp;
  }
  if (tmp21Result2) {
    const obj4 = { style: closure_9.bgBleedClip, pointerEvents: "none", children: tmp21Result };
    tmp21Result = tmp;
    if (mutedBackground) {
      const obj5 = { style: closure_9.bgMutedWrap, pointerEvents: "none", children: tmp };
      tmp21Result = tmp21(tmp18, obj5);
    }
    tmp21Result2 = tmp21(tmp18, obj4);
  }
  items = [tmp21Result2, ];
  let tmp24Result = null != fgStatic;
  if (tmp24Result) {
    let combined1 = fgStatic;
    const obj6 = { style: closure_9.fgClip, pointerEvents: "none", children: metroRequire(tmp27, obj7) };
    tmp27 = FastImageDefault;
    if (null != targetSize) {
      combined1 = fgStatic;
      if (fgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math4 = Math;
        const bound1 = Math.min(_false.get(), 2);
        const _Math5 = Math;
        const rounded2 = Math.round(targetSize.width * bound1);
        const _Math6 = Math;
        const rounded3 = Math.round(targetSize.height * bound1);
        let str7 = "?";
        if (fgStatic.includes("?")) {
          str7 = "&";
        }
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + fgStatic + str7 + "width=" + rounded2 + "&height=" + rounded3;
      }
    }
    obj7 = { source: obj8, style: closure_9.fgImage, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj8 = { uri: combined1 };
    tmp24Result = tmp24(tmp18, obj6);
  }
  items[1] = tmp24Result;
  return tmp17(React3, obj3);
}
function BundleSampleV2Composed(arg0) {
  let NameplateDummyUserPreview;
  let XSMALL_20;
  let deco;
  let items;
  let items1;
  let nameplate;
  let obj4;
  let obj6;
  let obj8;
  let pfx;
  ({ deco, pfx, nameplate, size } = arg0);
  if (size === undefined) {
    size = "small";
  }
  const tmp = closure_10(size);
  let nameplateData;
  if (null != nameplate) {
    const tmp5 = _modDef38;
    tmp5(nameplate.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
    const obj = utils;
    nameplateData = obj.getNameplateData(nameplate);
  }
  let tmp12 = null != pfx;
  const obj2 = { style: tmp.bundle, children: items };
  const tmp10 = metroImportDefault;
  const tmp9 = null != nameplateData ? BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSizeTriple : BUNDLE_PREVIEW_CONFIG[size].avatarDecorationSize;
  if (tmp12) {
    const obj3 = { style: tmp.pfx, children: metroRequire(ProfileEffectSampleV2Default, obj4) };
    obj4 = { item: pfx };
    tmp12 = metroRequire(tmp11, obj3);
  }
  items = [tmp12, , ];
  let tmp17Result = null != deco;
  if (tmp17Result) {
    const obj5 = { style: items1, children: metroRequire(AvatarDecorationSampleV2Default, obj6) };
    items1 = [null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar];
    obj6 = { item: deco, size: tmp9, threeTierBundle: null != nameplateData };
    tmp17Result = tmp17(tmp11, obj5);
  }
  items[1] = tmp17Result;
  let tmp21Result = null;
  if (null != nameplateData) {
    const obj7 = { style: tmp.nameplate, children: metroRequire(NameplateDummyUserPreview, obj8) };
    obj8 = { width: BUNDLE_PREVIEW_CONFIG[size].nameplatePreviewWidth, avatarSize: XSMALL_20, nameplate: nameplateData };
    NameplateDummyUserPreview = NameplateDummyUserPreview2.NameplateDummyUserPreview;
    if ("large" === size) {
      XSMALL_20 = tmp22(1177).AvatarSizes.NORMAL;
    } else {
      XSMALL_20 = tmp22(1177).AvatarSizes.XSMALL_20;
    }
    tmp21Result = tmp21(tmp11, obj7);
  }
  items[2] = tmp21Result;
  return tmp10(React3, obj2);
}
({ PixelRatio: c3, StyleSheet, View: closure_4 } = react_native);
const BUNDLE_PREVIEW_CONFIG = CollectiblesPreviewConstants.BUNDLE_PREVIEW_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, bgBleedClip: obj3, bgMutedWrap: obj4, bgImage: { width: "100%", height: "100%" }, fgClip: obj5, fgImage: obj6 };
obj2 = { overflow: "hidden" };
const create = StyleSheet.create;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { overflow: "hidden", justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { opacity: 0.8 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { overflow: "hidden", justifyContent: "center", alignItems: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = create(obj);
let closure_10 = createStyles.createStyles((arg0) => {
  let items;
  let items1;
  let items2;
  let rect;
  let rect1;
  let size1;
  const obj = { bundle: size, pfx: size1, avatar: rect, avatarWithNameplate: rect1, nameplate: { position: "absolute", bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom, marginHorizontal: 10, width: "90%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, zIndex: 2, borderRadius: nativeDefault.radii.sm, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 } };
  size = { width: tmp.bundleWidth, height: tmp.bundleHeight, borderRadius: nativeDefault.radii.xs };
  size1 = { position: "absolute", top: tmp.pfxTop, left: tmp.pfxLeft, width: tmp.pfxWidth, height: tmp.pfxHeight, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, transform: items, zIndex: 0, overflow: "hidden", borderRadius: nativeDefault.radii.xs };
  items = [{ rotate: "-8deg" }];
  rect = { position: "absolute", top: tmp.avatarTop, right: tmp.avatarRight, transform: items1, zIndex: 1, alignItems: "center", justifyContent: "center" };
  items1 = [{ rotate: "8deg" }];
  rect1 = { position: "absolute", top: tmp.avatarWithNameplateTop, right: tmp.avatarWithNameplateRight, transform: items2, zIndex: 1, alignItems: "center", justifyContent: "center", shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 };
  items2 = [{ rotate: "8deg" }];
  ({ position: "absolute", bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom, marginHorizontal: 10, width: "90%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, zIndex: 2, borderRadius: nativeDefault.radii.sm, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 4 });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

export default function BundleSampleV2(size) {
  let deco;
  let disableStaticBackground;
  let nameplate;
  let pfx;
  let previewAssets;
  let tmp4;
  let str = size.size;
  ({ deco, pfx, nameplate } = size);
  if (str === undefined) {
    str = "small";
  }
  ({ previewAssets, disableStaticBackground } = size);
  if (disableStaticBackground === undefined) {
    disableStaticBackground = false;
  }
  let flag = size.mutedStaticBackground;
  if (flag === undefined) {
    flag = false;
  }
  let fgStatic;
  const targetSize = size.targetSize;
  if (previewAssets != null) {
    fgStatic = previewAssets.fgStatic;
  }
  if (null != fgStatic) {
    const obj2 = { previewAssets, disableBackground: disableStaticBackground, mutedBackground: flag, targetSize };
    tmp4 = metroRequire(BundleStaticPreviewContent, obj2);
  } else {
    const obj = { deco, pfx, nameplate, size: str };
    tmp4 = metroRequire(BundleSampleV2Composed, obj);
  }
  return tmp4;
};
