// Module ID: 9000
// Function ID: 9001
// Name: BundleSampleV2
// Dependencies: [19, 17, 9001, 21, 558, 576, 6156, 5092, 587, 38, 1993, 1990, 9002, 9013, 9020, 1200, 2]

// Module 9000 (BundleSampleV2)
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils from "utils" /* 1990 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import FastImageDefault from "FastImage" /* 6156 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 9001 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 9002 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9013 */;
import NameplateDummyUserPreview2 from "NameplateDummyUserPreview" /* 9020 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5092 */;
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
({ PixelRatio: c3, StyleSheet, View: closure_4 } = react_native);
const BUNDLE_PREVIEW_CONFIG = CollectiblesPreviewConstants.BUNDLE_PREVIEW_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function BundleStaticPreviewContent(arg0) {
  let bgStatic;
  let disableBackground;
  let fgStatic;
  let items;
  let mutedBackground;
  let obj4;
  let obj5;
  let obj9;
  let previewAssets;
  let targetSize;
  let tmp22Result;
  let tmp33;
  const obj = react2;
  const cResult = obj.c(13);
  ({ previewAssets, disableBackground, mutedBackground, targetSize } = arg0);
  ({ bgStatic, fgStatic } = previewAssets);
  if (cResult[0] === bgStatic) {
    let tmp3;
    if (cResult[1] === targetSize) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === tmp3) {
      if (cResult[4] === disableBackground) {
        let tmp19;
        if (cResult[5] === mutedBackground) {
          tmp19 = cResult[6];
        }
        if (cResult[7] === fgStatic) {
          let tmp26;
          if (cResult[8] === targetSize) {
            tmp26 = cResult[9];
          }
          if (cResult[10] === tmp19) {
            let tmp44;
            if (cResult[11] === tmp26) {
              tmp44 = cResult[12];
            }
            return tmp44;
          }
          const obj2 = { style: closure_9.container, children: items };
          items = [tmp19, tmp26];
          const tmp48 = metroImportDefault(React3, obj2);
          cResult[10] = tmp19;
          cResult[11] = tmp26;
          cResult[12] = tmp48;
          tmp44 = tmp48;
        }
        let tmp29Result = null != fgStatic;
        if (tmp29Result) {
          let combined = fgStatic;
          const obj3 = { style: closure_9.fgClip, pointerEvents: "none", children: metroRequire(tmp33, obj4) };
          const tmp30 = React3;
          const tmp31 = closure_9;
          tmp33 = FastImageDefault;
          if (null != targetSize) {
            combined = fgStatic;
            if (fgStatic.startsWith("https://cdn.discordapp.com")) {
              const _Math4 = Math;
              const bound = Math.min(_false.get(), 2);
              const _Math5 = Math;
              const rounded = Math.round(targetSize.width * bound);
              const _Math6 = Math;
              const rounded1 = Math.round(targetSize.height * bound);
              let str7 = "?";
              if (fgStatic.includes("?")) {
                str7 = "&";
              }
              const _HermesInternal2 = HermesInternal;
              combined = "" + fgStatic + str7 + "width=" + rounded + "&height=" + rounded1;
            }
          }
          obj4 = { source: obj5, style: tmp31.fgImage, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
          obj5 = { uri: combined };
          tmp29Result = tmp29(tmp30, obj3);
        }
        cResult[7] = fgStatic;
        cResult[8] = targetSize;
        cResult[9] = tmp29Result;
        tmp26 = tmp29Result;
      }
    }
    let tmp22Result2 = !disableBackground && null != tmp3;
    if (tmp22Result2) {
      const obj6 = { style: closure_9.bgBleedClip, pointerEvents: "none", children: tmp22Result };
      tmp22Result = tmp3;
      if (mutedBackground) {
        const obj7 = { style: tmp24.bgMutedWrap, pointerEvents: "none", children: tmp3 };
        tmp22Result = tmp22(tmp23, obj7);
      }
      tmp22Result2 = tmp22(tmp23, obj6);
    }
    cResult[3] = tmp3;
    cResult[4] = disableBackground;
    cResult[5] = mutedBackground;
    cResult[6] = tmp22Result2;
    tmp19 = tmp22Result2;
  }
  let tmp5Result = null;
  if (null != bgStatic) {
    let combined1 = bgStatic;
    const tmp5 = metroRequire;
    const tmp7 = FastImageDefault;
    if (null != targetSize) {
      combined1 = bgStatic;
      if (bgStatic.startsWith("https://cdn.discordapp.com")) {
        const _Math = Math;
        const bound1 = Math.min(_false.get(), 2);
        const _Math2 = Math;
        const rounded2 = Math.round(targetSize.width * bound1);
        const _Math3 = Math;
        const rounded3 = Math.round(targetSize.height * bound1);
        let str2 = "?";
        if (bgStatic.includes("?")) {
          str2 = "&";
        }
        const _HermesInternal = HermesInternal;
        combined1 = "" + bgStatic + str2 + "width=" + rounded2 + "&height=" + rounded3;
      }
    }
    const obj8 = { source: obj9, style: closure_9.bgImage, resizeMode: "cover", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    obj9 = { uri: combined1 };
    tmp5Result = tmp5(tmp7, obj8);
  }
  cResult[0] = bgStatic;
  cResult[1] = targetSize;
  cResult[2] = tmp5Result;
  tmp3 = tmp5Result;
}) : (function BundleStaticPreviewContent(mutedBackground) {
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
});
let obj = { container: obj2, bgBleedClip: obj3, bgMutedWrap: obj4, bgImage: { width: "100%", height: "100%" }, fgClip: obj5, fgImage: obj6 };
obj2 = { overflow: "hidden" };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function BundleSampleV2Composed(arg0) {
  let NameplateDummyUserPreview;
  let XSMALL_20;
  let deco;
  let items;
  let nameplate;
  let obj4;
  let obj6;
  let obj8;
  let pfx;
  const obj = react2;
  const cResult = obj.c(21);
  ({ deco, pfx, nameplate, size } = arg0);
  let str = "small";
  if (undefined !== size) {
    str = size;
  }
  const tmp4 = closure_10(str);
  let tmp5;
  if (null != nameplate) {
    let tmp9;
    const tmp7 = _modDef38;
    tmp7(nameplate.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE, "Item must be Nameplate");
    if (cResult[0] !== nameplate) {
      const tmpResult = utils;
      const nameplateData = tmpResult.getNameplateData(nameplate);
      cResult[0] = nameplate;
      cResult[1] = nameplateData;
      tmp9 = nameplateData;
    } else {
      tmp9 = cResult[1];
    }
    tmp5 = tmp9;
  }
  const tmp12 = null != tmp5 ? BUNDLE_PREVIEW_CONFIG[str].avatarDecorationSizeTriple : BUNDLE_PREVIEW_CONFIG[str].avatarDecorationSize;
  if (cResult[2] === pfx) {
    let tmp13;
    if (cResult[3] === tmp4.pfx) {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp12) {
      if (cResult[6] === deco) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp4.avatar) {
            let tmp18;
            if (cResult[9] === tmp4.avatarWithNameplate) {
              tmp18 = cResult[10];
            }
            if (cResult[11] === BUNDLE_PREVIEW_CONFIG[str].nameplatePreviewWidth) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === str) {
                  let tmp23;
                  if (cResult[14] === tmp4.nameplate) {
                    tmp23 = cResult[15];
                  }
                  if (cResult[16] === tmp4.bundle) {
                    if (cResult[17] === tmp13) {
                      if (cResult[18] === tmp18) {
                        let tmp27;
                        if (cResult[19] === tmp23) {
                          tmp27 = cResult[20];
                        }
                        return tmp27;
                      }
                    }
                  }
                  const obj2 = { style: tmp4.bundle, children: items };
                  items = [tmp13, tmp18, tmp23];
                  const tmp30 = metroImportDefault(React3, obj2);
                  cResult[16] = tmp4.bundle;
                  cResult[17] = tmp13;
                  cResult[18] = tmp18;
                  cResult[19] = tmp23;
                  cResult[20] = tmp30;
                  tmp27 = tmp30;
                }
              }
            }
            let tmp25Result = null;
            if (null != tmp5) {
              const obj3 = { style: tmp4.nameplate, children: metroRequire(NameplateDummyUserPreview, obj4) };
              obj4 = { width: BUNDLE_PREVIEW_CONFIG[str].nameplatePreviewWidth, avatarSize: XSMALL_20, nameplate: tmp5 };
              NameplateDummyUserPreview = tmp(9020).NameplateDummyUserPreview;
              const tmp26 = React3;
              if ("large" === str) {
                XSMALL_20 = tmp(1200).AvatarSizes.NORMAL;
              } else {
                XSMALL_20 = tmp(1200).AvatarSizes.XSMALL_20;
              }
              tmp25Result = tmp25(tmp26, obj3);
            }
            cResult[11] = BUNDLE_PREVIEW_CONFIG[str].nameplatePreviewWidth;
            cResult[12] = tmp5;
            cResult[13] = str;
            cResult[14] = tmp4.nameplate;
            cResult[15] = tmp25Result;
            tmp23 = tmp25Result;
          }
        }
      }
    }
    let tmp20Result = null != deco;
    if (tmp20Result) {
      const obj5 = { style: null != tmp5 ? tmp4.avatarWithNameplate : tmp4.avatar, children: metroRequire(AvatarDecorationSampleV2Default, obj6) };
      obj6 = { item: deco, size: tmp12, threeTierBundle: null != tmp5 };
      tmp20Result = tmp20(React3, obj5);
    }
    cResult[5] = tmp12;
    cResult[6] = deco;
    cResult[7] = tmp5;
    cResult[8] = tmp4.avatar;
    cResult[9] = tmp4.avatarWithNameplate;
    cResult[10] = tmp20Result;
    tmp18 = tmp20Result;
  }
  let tmp14 = null != pfx;
  if (tmp14) {
    const obj7 = { style: tmp4.pfx, children: metroRequire(ProfileEffectSampleV2Default, obj8) };
    obj8 = { item: pfx };
    tmp14 = metroRequire(React3, obj7);
  }
  cResult[2] = pfx;
  cResult[3] = tmp4.pfx;
  cResult[4] = tmp14;
  tmp13 = tmp14;
}) : (function BundleSampleV2Composed(arg0) {
  let NameplateDummyUserPreview;
  let XSMALL_20;
  let deco;
  let items;
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
    const obj5 = { style: null != nameplateData ? tmp.avatarWithNameplate : tmp.avatar, children: metroRequire(AvatarDecorationSampleV2Default, obj6) };
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
      XSMALL_20 = tmp22(1200).AvatarSizes.NORMAL;
    } else {
      XSMALL_20 = tmp22(1200).AvatarSizes.XSMALL_20;
    }
    tmp21Result = tmp21(tmp11, obj7);
  }
  items[2] = tmp21Result;
  return tmp10(React3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function BundleSampleV2(arg0) {
  let deco;
  let disableStaticBackground;
  let mutedStaticBackground;
  let nameplate;
  let pfx;
  let previewAssets;
  let targetSize;
  const obj = react2;
  const cResult = obj.c(12);
  ({ deco, pfx, nameplate, size, previewAssets, disableStaticBackground, mutedStaticBackground, targetSize } = arg0);
  let str = "small";
  if (undefined !== size) {
    str = size;
  }
  if (cResult[0] === deco) {
    if (cResult[1] === nameplate) {
      if (cResult[2] === pfx) {
        let tmp4;
        let tmp7;
        if (cResult[3] === str) {
          tmp4 = cResult[4];
        }
        let fgStatic;
        if (previewAssets != null) {
          fgStatic = previewAssets.fgStatic;
        }
        if (null != fgStatic) {
          if (cResult[5] === (undefined !== disableStaticBackground && disableStaticBackground)) {
            if (cResult[6] === (undefined !== mutedStaticBackground && mutedStaticBackground)) {
              if (cResult[7] === previewAssets) {
                let tmp14;
                if (cResult[8] === targetSize) {
                  tmp14 = cResult[9];
                }
                tmp7 = tmp14;
              }
            }
          }
          const obj2 = { previewAssets, disableBackground: undefined !== disableStaticBackground && disableStaticBackground, mutedBackground: undefined !== mutedStaticBackground && mutedStaticBackground, targetSize };
          const tmp17 = metroRequire(closure_8, obj2);
          cResult[5] = undefined !== disableStaticBackground && disableStaticBackground;
          cResult[6] = undefined !== mutedStaticBackground && mutedStaticBackground;
          cResult[7] = previewAssets;
          cResult[8] = targetSize;
          cResult[9] = tmp17;
          tmp14 = tmp17;
        } else if (cResult[10] !== tmp4) {
          const obj3 = {};
          const merged = Object.assign(tmp4);
          const tmp13 = metroRequire(closure_11, obj3);
          cResult[10] = tmp4;
          cResult[11] = tmp13;
          tmp7 = tmp13;
        } else {
          tmp7 = cResult[11];
        }
        return tmp7;
      }
    }
  }
  const obj4 = { deco, pfx, nameplate, size: str };
  cResult[0] = deco;
  cResult[1] = nameplate;
  cResult[2] = pfx;
  cResult[3] = str;
  cResult[4] = obj4;
  tmp4 = obj4;
}) : (function BundleSampleV2(size) {
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
    tmp4 = metroRequire(closure_8, obj2);
  } else {
    const obj = { deco, pfx, nameplate, size: str };
    tmp4 = metroRequire(closure_11, obj);
  }
  return tmp4;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/BundleSampleV2.tsx");

export default tmp10;
