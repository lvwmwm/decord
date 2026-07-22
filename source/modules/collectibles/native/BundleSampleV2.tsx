// Module ID: 8209
// Function ID: 64903
// Name: getSizedAssetUri
// Dependencies: []
// Exports: default

// Module 8209 (getSizedAssetUri)
let StyleSheet;
function getSizedAssetUri(bgStatic, targetSize) {
  if (null != targetSize) {
    if (bgStatic.startsWith("https://cdn.discordapp.com")) {
      const _Math = Math;
      const bound = Math.min(closure_3.get(), 2);
      const _Math2 = Math;
      const rounded = Math.round(targetSize.width * bound);
      const _Math3 = Math;
      const rounded1 = Math.round(targetSize.height * bound);
      let str2 = "?";
      if (bgStatic.includes("?")) {
        str2 = "&";
      }
      const _HermesInternal = HermesInternal;
      return "" + bgStatic + str2 + "width=" + rounded + "&height=" + rounded1;
    }
  }
  return bgStatic;
}
function BundleStaticPreviewContent(arg0) {
  let bgStatic;
  let disableBackground;
  let fgStatic;
  let mutedBackground;
  let previewAssets;
  let targetSize;
  ({ previewAssets, targetSize } = arg0);
  ({ bgStatic, fgStatic } = previewAssets);
  let tmp = null;
  ({ disableBackground, mutedBackground } = arg0);
  if (null != bgStatic) {
    let obj = { 0: "border", 0: "TOO_MANY_CONNECTIONS", 0: "getTemplateTierCreationAnalyticsContext", 9223372036854775807: null, 9223372036854775807: null };
    obj = { uri: getSizedAssetUri(bgStatic, targetSize) };
    obj.source = obj;
    obj.style = closure_8.bgImage;
    tmp = callback(importDefault(dependencyMap[4]), obj);
    const tmp5 = importDefault(dependencyMap[4]);
  }
  obj = { style: closure_8.container };
  let tmp11Result = !disableBackground;
  if (tmp11Result) {
    tmp11Result = null != tmp;
  }
  if (tmp11Result) {
    const obj1 = { style: closure_8.bgBleedClip, pointerEvents: "none" };
    let tmp14 = tmp;
    if (mutedBackground) {
      const obj2 = { style: closure_8.bgMutedWrap, pointerEvents: "none", children: tmp };
      tmp14 = callback(closure_4, obj2);
    }
    obj1.children = tmp14;
    tmp11Result = callback(closure_4, obj1);
    const tmp11 = callback;
    const tmp12 = closure_4;
  }
  const items = [tmp11Result, ];
  let tmp18 = null != fgStatic;
  if (tmp18) {
    const obj3 = { style: closure_8.fgClip, pointerEvents: "none" };
    const obj4 = { 0: "border", 0: "TOO_MANY_CONNECTIONS", 0: "getTemplateTierCreationAnalyticsContext", 9223372036854775807: null, 9223372036854775807: null };
    const obj5 = { uri: getSizedAssetUri(fgStatic, targetSize) };
    obj4.source = obj5;
    obj4.style = closure_8.fgImage;
    obj3.children = callback(importDefault(dependencyMap[4]), obj4);
    tmp18 = callback(closure_4, obj3);
    const tmp25 = importDefault(dependencyMap[4]);
  }
  items[1] = tmp18;
  obj.children = items;
  return closure_7(closure_4, obj);
}
function BundleSampleV2Composed(arg0) {
  let deco;
  let nameplate;
  let pfx;
  let size;
  ({ deco, pfx, nameplate, size } = arg0);
  if (size === undefined) {
    size = "small";
  }
  const tmp = callback2(size);
  let nameplateData;
  if (null != nameplate) {
    importDefault(dependencyMap[7])(nameplate.type === arg1(dependencyMap[8]).CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
    let obj = arg1(dependencyMap[9]);
    nameplateData = obj.getNameplateData(nameplate);
    const tmp5 = importDefault(dependencyMap[7]);
  }
  let tmp9 = null != nameplateData ? tmp8.avatarDecorationSizeTriple : tmp8.avatarDecorationSize;
  obj = { style: tmp.bundle };
  let tmp12 = null != pfx;
  if (tmp12) {
    obj = { style: tmp.pfx };
    const obj1 = { item: pfx };
    obj.children = callback(importDefault(dependencyMap[10]), obj1);
    tmp12 = callback(closure_4, obj);
  }
  const items = [tmp12, , ];
  if (null == deco) {
    items[1] = tmp18;
    if (null == nameplateData) {
      items[2] = null;
      obj.children = items;
      return closure_7(closure_4, obj);
    } else {
      const obj2 = { style: tmp.nameplate };
      let obj3 = { width: tmp8.nameplatePreviewWidth };
      if ("large" === size) {
        let XSMALL_20 = arg1(dependencyMap[13]).AvatarSizes.NORMAL;
      } else {
        XSMALL_20 = arg1(dependencyMap[13]).AvatarSizes.XSMALL_20;
      }
      obj3.avatarSize = XSMALL_20;
      obj3.nameplate = nameplateData;
      obj3 = callback(arg1(dependencyMap[12]).NameplateDummyUserPreview, obj3);
      obj2.children = obj3;
      callback(closure_4, obj2);
      const tmp26 = callback;
      const tmp27 = closure_4;
      const tmp28 = callback;
    }
  } else {
    const obj4 = {};
    const items1 = [null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar];
    obj4.style = items1;
    const obj5 = { item: deco, size: tmp9 };
    tmp9 = null != nameplateData;
    obj5.threeTierBundle = tmp9;
    obj4.children = callback(importDefault(dependencyMap[11]), obj5);
    callback(closure_4, obj4);
    const tmp19 = callback;
    const tmp20 = closure_4;
  }
}
function BundleSampleV2StaticPreview(composedFallbackProps) {
  let disableStaticBackground;
  let exposureLocation;
  let mutedStaticBackground;
  let previewAssets;
  let targetSize;
  composedFallbackProps = composedFallbackProps.composedFallbackProps;
  ({ previewAssets, disableStaticBackground, mutedStaticBackground, targetSize, exposureLocation } = composedFallbackProps);
  let obj = arg1(dependencyMap[14]);
  if (obj.useCollectiblesMobileFlexibleBundlesExperiment(exposureLocation).enabled) {
    obj = { previewAssets, disableBackground: disableStaticBackground, mutedBackground: mutedStaticBackground, targetSize };
    let tmpResult = tmp(BundleStaticPreviewContent, obj);
  } else {
    obj = {};
    const merged = Object.assign(composedFallbackProps);
    tmpResult = tmp(BundleSampleV2Composed, obj);
  }
  return tmpResult;
}
importAll(dependencyMap[0]);
({ PixelRatio: closure_3, StyleSheet, View: closure_4 } = arg1(dependencyMap[1]));
const BUNDLE_PREVIEW_CONFIG = arg1(dependencyMap[2]).BUNDLE_PREVIEW_CONFIG;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["overflow"] = "hidden";
obj.container = obj;
obj = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj["overflow"] = "hidden";
obj["justifyContent"] = "center";
obj["alignItems"] = "center";
obj.bgBleedClip = obj;
const obj1 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj1["opacity"] = 0.8;
obj.bgMutedWrap = obj1;
obj.bgImage = {};
const obj2 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2["overflow"] = "hidden";
obj2["justifyContent"] = "center";
obj2["alignItems"] = "center";
obj.fgClip = obj2;
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj.fgImage = {};
const styles = StyleSheet.create(obj);
const obj3 = {};
const tmp4 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = { width: tmp.bundleWidth, height: tmp.bundleHeight, borderRadius: importDefault(dependencyMap[6]).radii.xs };
  obj.bundle = obj;
  obj = { position: "absolute", top: tmp.pfxTop, left: tmp.pfxLeft, width: tmp.pfxWidth, height: tmp.pfxHeight, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, transform: items, zIndex: 0, overflow: "hidden", borderRadius: importDefault(dependencyMap[6]).radii.xs };
  const items = [{ rotate: "-8deg" }];
  obj.pfx = obj;
  const items1 = [{ rotate: "8deg" }];
  obj.avatar = { top: BUNDLE_PREVIEW_CONFIG[arg0].avatarTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarRight, transform: items1 };
  const items2 = [{ rotate: "8deg" }];
  obj.avatarWithNameplate = { top: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateRight, transform: items2, shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: {}, shadowOpacity: 0.5, shadowRadius: 4 };
  const obj1 = { top: BUNDLE_PREVIEW_CONFIG[arg0].avatarTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarRight, transform: items1 };
  const obj2 = { top: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateTop, right: BUNDLE_PREVIEW_CONFIG[arg0].avatarWithNameplateRight, transform: items2, shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: {}, shadowOpacity: 0.5, shadowRadius: 4 };
  obj.nameplate = { bottom: BUNDLE_PREVIEW_CONFIG[arg0].nameplateBottom, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER, borderRadius: importDefault(dependencyMap[6]).radii.sm, shadowColor: importDefault(dependencyMap[6]).colors.BLACK, shadowOffset: {}, shadowOpacity: 0.5, shadowRadius: 4 };
  return obj;
});
const obj7 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

export default function BundleSampleV2(size) {
  let deco;
  let disableStaticBackground;
  let exposureLocation;
  let nameplate;
  let pfx;
  let previewAssets;
  let targetSize;
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
  ({ exposureLocation, targetSize } = size);
  if (exposureLocation === undefined) {
    exposureLocation = "CollectiblesShopCardAssetTileV2";
  }
  let obj = { deco, pfx, nameplate, size: str };
  let fgStatic;
  if (null != previewAssets) {
    fgStatic = previewAssets.fgStatic;
  }
  if (null != fgStatic) {
    obj = { previewAssets, disableStaticBackground, mutedStaticBackground: flag, targetSize };
    obj.composedFallbackProps = obj;
    obj.exposureLocation = exposureLocation;
    let tmp7 = callback(BundleSampleV2StaticPreview, obj);
  } else {
    obj = {};
    const merged = Object.assign(obj);
    tmp7 = callback(BundleSampleV2Composed, obj);
  }
  return tmp7;
};
