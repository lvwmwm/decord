// Module ID: 12478
// Function ID: 12479
// Name: ConjurePlanProposalCard
// Dependencies: [32, 19, 17, 6808, 21, 5004, 587, 12479, 558, 576, 12484, 12485, 5705, 12238, 12239, 1125, 3863, 12486, 5270, 12481, 5741, 12287, 12487, 12489, 12492, 504, 12493, 12494, 12495, 12497, 12477, 12501, 12502, 5280, 12226, 2]

// Module 12478 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import FastImageDefault from "FastImage" /* 5705 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5741 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12238 */;
import openConjureNativeImages from "openConjureNativeImages" /* 12239 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12287 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 12479 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12481 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 12484 */;
import AssetRegistryDefault from "AssetRegistry" /* 12485 */;
import conjurePlanBot from "conjurePlanBot" /* 12493 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12494 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12495 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12497 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let alt, dependencyMap, importDefault, obj1;

let c10;
let closure_12;
let hasOwnProperty;
let items;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, Pressable: metroRequire, StyleSheet: metroImportDefault, View: metroImportAll } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { surface: { padding: 0, overflow: "hidden" }, content: obj2, whatChanged: obj3, footer: obj4, replyHint: { flexShrink: 1 }, design: obj5, overlayDesign: obj6, blurredBackground: obj7, overlayWidget: obj8, stack: obj9, overlayWidgetSlide: obj10, overlayFullWidget: { width: "100%", height: "100%" }, slidePicker: obj11, slideButton: obj12, slideButtonActive: obj13, referenceList: obj14, reference: obj15, referenceImage: { width: "100%", height: "100%" } };
obj2 = { padding: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
obj6 = { width: "100%", aspectRatio: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj7 = { transform: items };
items = [{ scale: 1.04 }];
obj8 = { position: "absolute", top: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_WIDGET_END };
obj9 = { gap: nativeDefault.space.PX_8 };
obj10 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj11 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj12 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj14 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj15 = { height: 64, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayWidget(projectId) {
  let items;
  let items2;
  let num3;
  let onError;
  let size2;
  let src;
  const obj = react2;
  const cResult = obj.c(24);
  ({ src, alt, size, onError } = projectId);
  projectId = projectId.projectId;
  const tmp4 = closure_13();
  const tmp6 = useConjureOverlayBackgroundDefault;
  const tmp6Result = tmp6(projectId, AssetRegistryDefault);
  if (cResult[0] !== size) {
    const tmpResult = conjurePlanOverlayDesign;
    const result = tmpResult.conjurePlanOverlayWidgetBox(size);
    cResult[0] = size;
    cResult[1] = result;
    size2 = result;
  } else {
    size2 = cResult[1];
  }
  if (cResult[2] === tmp6Result.blurred) {
    if (cResult[3] === tmp6Result.handleError) {
      if (cResult[4] === tmp6Result.src) {
        let tmp9;
        let tmp14;
        if (cResult[5] === tmp4.blurredBackground) {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== src) {
          const obj2 = { uri: src };
          cResult[7] = src;
          cResult[8] = obj2;
          tmp14 = obj2;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === size2.height) {
          let tmp15;
          if (cResult[10] === size2.width) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp4.overlayWidget) {
            let tmp16;
            if (cResult[13] === tmp15) {
              tmp16 = cResult[14];
            }
            if (cResult[15] === alt) {
              if (cResult[16] === onError) {
                if (cResult[17] === tmp14) {
                  let tmp17;
                  if (cResult[18] === tmp16) {
                    tmp17 = cResult[19];
                  }
                  if (cResult[20] === tmp4.overlayDesign) {
                    if (cResult[21] === tmp9) {
                      let tmp20;
                      if (cResult[22] === tmp17) {
                        tmp20 = cResult[23];
                      }
                      return tmp20;
                    }
                  }
                  const obj3 = { style: tmp4.overlayDesign, children: items };
                  items = [tmp9, tmp17];
                  const tmp23 = unpackModuleId(metroImportAll, obj3);
                  cResult[20] = tmp4.overlayDesign;
                  cResult[21] = tmp9;
                  cResult[22] = tmp17;
                  cResult[23] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
            const obj4 = { source: tmp14, style: tmp16, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
            const tmp19 = authStore(FastImageDefault, obj4);
            cResult[15] = alt;
            cResult[16] = onError;
            cResult[17] = tmp14;
            cResult[18] = tmp16;
            cResult[19] = tmp19;
            tmp17 = tmp19;
          }
          const items1 = [tmp4.overlayWidget, tmp15];
          cResult[12] = tmp4.overlayWidget;
          cResult[13] = tmp15;
          cResult[14] = items1;
          tmp16 = items1;
        }
        const size1 = { width: null, height: null };
        ({ width: obj6.width, height: obj6.height } = size2);
        cResult[9] = size2.height;
        cResult[10] = size2.width;
        cResult[11] = size1;
        tmp15 = size1;
      }
    }
  }
  let tmp11Result = null;
  if (null != tmp6Result.src) {
    let src2;
    const tmp11 = authStore;
    const tmp5Result = FastImageDefault;
    if (typeof tmp6Result.src === "string") {
      src2 = { uri: tmp6Result.src };
      const obj5 = { uri: tmp6Result.src };
    } else {
      src2 = tmp6Result.src;
    }
    const obj7 = { source: src2, style: items2, resizeMode: "cover", blurRadius: num3, onError: tmp6Result.handleError, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items2 = [metroImportDefault.absoluteFill, tmp6Result.blurred && tmp4.blurredBackground];
    num3 = undefined;
    if (tmp6Result.blurred) {
      num3 = 4;
    }
    tmp11Result = tmp11(tmp5Result, obj7);
  }
  cResult[2] = tmp6Result.blurred;
  cResult[3] = tmp6Result.handleError;
  cResult[4] = tmp6Result.src;
  cResult[5] = tmp4.blurredBackground;
  cResult[6] = tmp11Result;
  tmp9 = tmp11Result;
}) : (function PlanOverlayWidget(arg0) {
  let items;
  let items1;
  let items2;
  let num;
  let onError;
  let projectId;
  let src;
  ({ projectId, src, alt, size, onError } = arg0);
  const tmp = closure_13();
  const tmp4 = useConjureOverlayBackgroundDefault;
  const tmp4Result = tmp4(projectId, AssetRegistryDefault);
  const obj = conjurePlanOverlayDesign;
  const size2 = obj.conjurePlanOverlayWidgetBox(size);
  let tmp9Result = null;
  const obj2 = { style: tmp.overlayDesign, children: items1 };
  const tmp6 = unpackModuleId;
  const tmp7 = metroImportAll;
  if (null != tmp4Result.src) {
    let src2;
    const tmp2Result = FastImageDefault;
    const tmp9 = authStore;
    if (typeof tmp4Result.src === "string") {
      src2 = { uri: tmp4Result.src };
      const obj3 = { uri: tmp4Result.src };
    } else {
      src2 = tmp4Result.src;
    }
    const obj4 = { source: src2, style: items, resizeMode: "cover", blurRadius: num, onError: tmp4Result.handleError, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items = [metroImportDefault.absoluteFill, tmp4Result.blurred && tmp.blurredBackground];
    num = undefined;
    if (tmp4Result.blurred) {
      num = 4;
    }
    tmp9Result = tmp9(tmp2Result, obj4);
  }
  items1 = [tmp9Result, ];
  const obj5 = { source: { uri: src }, style: items2, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
  items2 = [tmp.overlayWidget, { width: size2.width, height: size2.height }];
  items1[1] = authStore(FastImageDefault, obj5);
  return tmp6(tmp7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(projectId) {
  let handleError;
  let obj6;
  let src;
  let obj = projectId(alt[9]);
  const cResult = obj.c(13);
  const tmp = projectId;
  projectId = projectId.projectId;
  const design = projectId.design;
  alt = projectId.alt;
  const tmp4 = closure_13();
  let obj2 = projectId(alt[13]);
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp6 = null;
  if (!conjureAttachmentImage.gone) {
    if (cResult[0] === alt) {
      if (cResult[1] === design.id) {
        let tmp7;
        let tmp9;
        let tmp15;
        if (cResult[2] === projectId) {
          tmp7 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[15]).intl;
          const stringResult = intl.string(design(alt[16]).TvAPIm);
          cResult[4] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === handleError) {
          if (cResult[6] === src) {
            let tmp12;
            if (cResult[7] === tmp4.design) {
              tmp12 = cResult[8];
            }
            if (cResult[9] === alt) {
              if (cResult[10] === tmp7) {
                let tmp19;
                if (cResult[11] === tmp12) {
                  tmp19 = cResult[12];
                }
                tmp6 = tmp19;
              }
            }
            const obj3 = { onPress: tmp7, accessibilityRole: "imagebutton", accessibilityLabel: alt, accessibilityHint: tmp9, children: tmp12 };
            const tmp22 = closure_10(closure_6, obj3);
            cResult[9] = alt;
            cResult[10] = tmp7;
            cResult[11] = tmp12;
            cResult[12] = tmp22;
            tmp19 = tmp22;
          }
        }
        if (null == src) {
          const obj4 = { style: tmp4.design, children: closure_10(closure_5, { size: "small" }) };
          tmp15 = closure_10(closure_8, obj4);
        } else {
          const obj5 = { source: obj6, style: tmp4.design, resizeMode: "contain", onError: handleError };
          obj6 = { uri: src };
          tmp15 = closure_10(design(tmp2[12]), obj5);
        }
        cResult[5] = handleError;
        cResult[6] = src;
        cResult[7] = tmp4.design;
        cResult[8] = tmp15;
        tmp12 = tmp15;
      }
    }
    const fn = function t() {
      const items = [];
      const obj2 = { id: design.id, alt };
      items[0] = obj2;
      const obj = openConjureNativeImages;
      return obj.openConjureNativeImages(projectId, items, 0);
    };
    cResult[0] = alt;
    cResult[1] = design.id;
    cResult[2] = projectId;
    cResult[3] = fn;
    tmp7 = fn;
  }
  return tmp6;
}) : (function PlanDesign(projectId) {
  let intl;
  let obj5;
  let tmp7Result;
  projectId = projectId.projectId;
  const design = projectId.design;
  alt = projectId.alt;
  const tmp = closure_13();
  let obj = projectId(alt[13]);
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  let tmp7Result2 = null;
  const tmp2 = projectId;
  if (!conjureAttachmentImage.gone) {
    let obj2 = {
      onPress() {
          const items = [];
          const obj2 = { id: design.id, alt };
          items[0] = obj2;
          const obj = openConjureNativeImages;
          return obj.openConjureNativeImages(projectId, items, 0);
        },
      accessibilityRole: "imagebutton",
      accessibilityLabel: alt,
      accessibilityHint: intl.string(design(alt[16]).TvAPIm),
      children: tmp7Result
    };
    intl = tmp2(tmp3[15]).intl;
    const tmp8 = closure_6;
    const tmp9 = design;
    if (null == src) {
      const obj3 = { style: tmp.design, children: closure_10(closure_5, { size: "small" }) };
      tmp7Result = tmp7(closure_8, obj3);
    } else {
      const obj4 = { source: obj5, style: tmp.design, resizeMode: "contain", onError: tmp5 };
      obj5 = { uri: src };
      tmp7Result = tmp7(tmp9(tmp3[12]), obj4);
    }
    tmp7Result2 = tmp7(tmp8, obj2);
  }
  return tmp7Result2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayDesign(projectId) {
  let closure_2;
  let handleError;
  let items1;
  let items2;
  let labels;
  let pick;
  let src;
  let tmp7;
  let tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(41);
  projectId = projectId.projectId;
  const design = projectId.design;
  size = projectId.size;
  const tmp4 = closure_13();
  dependencyMap = tmp4;
  let obj2 = projectId(12238);
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  const gone = conjureAttachmentImage.gone;
  if (cResult[0] !== (null != src)) {
    const obj3 = { ready: null != src };
    cResult[0] = null != src;
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  const tmpResult = projectId(12486);
  const conjurePlanOverlaySlides = tmpResult.useConjurePlanOverlaySlides(tmp7);
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick } = conjurePlanOverlaySlides);
  const hold = conjurePlanOverlaySlides.hold;
  if (gone) {
    return null;
  } else {
    let tmp10;
    let tmp13;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1125).intl;
      const stringResult = intl.string(design(3863).mjryK4);
      cResult[2] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[2];
    }
    alt = tmp10;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(design(3863)["rPpf5/"]);
      cResult[3] = stringResult1;
      tmp13 = stringResult1;
    } else {
      tmp13 = cResult[3];
    }
    if (cResult[4] === design.id) {
      let tmp17;
      let tmp49Result;
      if (cResult[5] === projectId) {
        tmp17 = cResult[6];
      }
      let tmp19 = tmp13;
      if (0 === slide) {
        tmp19 = tmp10;
      }
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1125).intl;
        const stringResult2 = intl3.string(design(3863).TvAPIm);
        cResult[7] = stringResult2;
      }
      if (cResult[8] === handleError) {
        if (cResult[9] === projectId) {
          if (cResult[10] === size) {
            if (cResult[11] === slide) {
              if (cResult[12] === src) {
                if (cResult[13] === tmp4.overlayDesign) {
                  if (cResult[14] === tmp4.overlayFullWidget) {
                    let tmp23;
                    if (cResult[15] === tmp4.overlayWidgetSlide) {
                      tmp23 = cResult[16];
                    }
                    if (cResult[17] === hold) {
                      if (cResult[18] === tmp17) {
                        if (cResult[19] === tmp19) {
                          let tmp31;
                          let tmp35;
                          let tmp38;
                          if (cResult[20] === tmp23) {
                            tmp31 = cResult[21];
                          }
                          const _Symbol4 = Symbol;
                          const slidePicker = tmp4.slidePicker;
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(1125).intl;
                            const stringResult3 = intl4.string(design(3863).EH36X6);
                            cResult[22] = stringResult3;
                            tmp35 = stringResult3;
                          } else {
                            tmp35 = cResult[22];
                          }
                          if (cResult[23] === labels) {
                            if (cResult[24] === pick) {
                              if (cResult[25] === slide) {
                                if (cResult[26] === tmp4.slideButton) {
                                  if (cResult[27] === tmp4.slideButtonActive) {
                                    tmp38 = cResult[28];
                                  }
                                  if (cResult[34] === tmp4.slidePicker) {
                                    let tmp41;
                                    if (cResult[35] === tmp38) {
                                      tmp41 = cResult[36];
                                    }
                                    if (cResult[37] === tmp4.stack) {
                                      if (cResult[38] === tmp31) {
                                        let tmp45;
                                        if (cResult[39] === tmp41) {
                                          tmp45 = cResult[40];
                                        }
                                        return tmp45;
                                      }
                                    }
                                    let items = [, ];
                                    class H {
                                      constructor(arg0, arg1) {
                                        closure_0 = arg1;
                                        tmp = closure_1_10;
                                        items = [, ];
                                        items[0] = closure_2.slideButton;
                                        tmp3 = slide === arg1;
                                        slideButtonActive = tmp3;
                                        tmp2 = closure_1_6;
                                        if (tmp3) {
                                          slideButtonActive = closure_2.slideButtonActive;
                                        }
                                        obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                        items[1] = slideButtonActive;
                                        str = "text-muted";
                                        Text = projectId(closure_2[18]).Text;
                                        if (tmp3) {
                                          str = "text-default";
                                        }
                                        obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                        obj.children = tmp(Text, obj1);
                                        return tmp(tmp2, obj, projectId);
                                      }
                                    }
                                    items[1] = tmp41;
                                    class B {
                                      constructor() {
                                        obj = closure_0(closure_2[14]);
                                        obj1 = { id: design.id, alt: closure_5 };
                                        items = [];
                                        items[0] = obj1;
                                        return obj.openConjureNativeImages(projectId, items, 0);
                                      }
                                    }
                                    cResult[37] = tmp4.stack;
                                    cResult[38] = tmp31;
                                    cResult[39] = tmp41;
                                    cResult[40] = tmp48;
                                    tmp45 = tmp48;
                                  }
                                  const obj5 = { style: slidePicker, accessibilityRole: "tablist", accessibilityLabel: tmp35, children: null };
                                  class H {
                                    constructor(arg0, arg1) {
                                      closure_0 = arg1;
                                      tmp = closure_1_10;
                                      items = [, ];
                                      items[0] = closure_2.slideButton;
                                      tmp3 = slide === arg1;
                                      slideButtonActive = tmp3;
                                      tmp2 = closure_1_6;
                                      if (tmp3) {
                                        slideButtonActive = closure_2.slideButtonActive;
                                      }
                                      obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                      items[1] = slideButtonActive;
                                      str = "text-muted";
                                      Text = projectId(closure_2[18]).Text;
                                      if (tmp3) {
                                        str = "text-default";
                                      }
                                      obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                      obj.children = tmp(Text, obj1);
                                      return tmp(tmp2, obj, projectId);
                                    }
                                  }
                                  const tmp44 = closure_10(closure_8, obj5);
                                  class B {
                                    constructor() {
                                      obj = closure_0(closure_2[14]);
                                      obj1 = { id: design.id, alt: closure_5 };
                                      items = [];
                                      items[0] = obj1;
                                      return obj.openConjureNativeImages(projectId, items, 0);
                                    }
                                  }
                                  cResult[35] = tmp38;
                                  cResult[36] = tmp44;
                                  tmp41 = tmp44;
                                }
                              }
                            }
                          }
                          if (cResult[29] === pick) {
                            if (cResult[30] === slide) {
                              if (cResult[31] === tmp4.slideButton) {
                                let tmp39;
                                if (cResult[32] === tmp4.slideButtonActive) {
                                  tmp39 = cResult[33];
                                }
                                const mapped = labels.map(tmp39);
                                cResult[23] = labels;
                                cResult[24] = pick;
                                class H {
                                  constructor(arg0, arg1) {
                                    closure_0 = arg1;
                                    tmp = closure_1_10;
                                    items = [, ];
                                    items[0] = closure_2.slideButton;
                                    tmp3 = slide === arg1;
                                    slideButtonActive = tmp3;
                                    tmp2 = closure_1_6;
                                    if (tmp3) {
                                      slideButtonActive = closure_2.slideButtonActive;
                                    }
                                    obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                                    items[1] = slideButtonActive;
                                    str = "text-muted";
                                    Text = projectId(closure_2[18]).Text;
                                    if (tmp3) {
                                      str = "text-default";
                                    }
                                    obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                                    obj.children = tmp(Text, obj1);
                                    return tmp(tmp2, obj, projectId);
                                  }
                                }
                                cResult[26] = tmp4.slideButton;
                                class B {
                                  constructor() {
                                    obj = closure_0(closure_2[14]);
                                    obj1 = { id: design.id, alt: closure_5 };
                                    items = [];
                                    items[0] = obj1;
                                    return obj.openConjureNativeImages(projectId, items, 0);
                                  }
                                }
                                cResult[27] = tmp4.slideButtonActive;
                                cResult[28] = mapped;
                                tmp38 = mapped;
                              }
                            }
                          }
                          class H {
                            constructor(arg0, arg1) {
                              closure_0 = arg1;
                              tmp = closure_1_10;
                              items = [, ];
                              items[0] = closure_2.slideButton;
                              tmp3 = slide === arg1;
                              slideButtonActive = tmp3;
                              tmp2 = closure_1_6;
                              if (tmp3) {
                                slideButtonActive = closure_2.slideButtonActive;
                              }
                              obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
                              items[1] = slideButtonActive;
                              str = "text-muted";
                              Text = projectId(closure_2[18]).Text;
                              if (tmp3) {
                                str = "text-default";
                              }
                              obj1 = { variant: "text-xs/medium", color: str, children: projectId };
                              obj.children = tmp(Text, obj1);
                              return tmp(tmp2, obj, projectId);
                            }
                          }
                          cResult[29] = pick;
                          class B {
                            constructor() {
                              obj = closure_0(closure_2[14]);
                              obj1 = { id: design.id, alt: closure_5 };
                              items = [];
                              items[0] = obj1;
                              return obj.openConjureNativeImages(projectId, items, 0);
                            }
                          }
                          cResult[30] = slide;
                          cResult[31] = tmp4.slideButton;
                          cResult[32] = tmp4.slideButtonActive;
                          cResult[33] = H;
                          tmp39 = H;
                        }
                      }
                    }
                    class B {
                      constructor() {
                        obj = closure_0(closure_2[14]);
                        obj1 = { id: design.id, alt: closure_5 };
                        items = [];
                        items[0] = obj1;
                        return obj.openConjureNativeImages(projectId, items, 0);
                      }
                    }
                    cResult[17] = hold;
                    cResult[18] = tmp17;
                    cResult[19] = tmp19;
                    cResult[20] = tmp23;
                    cResult[21] = tmp34;
                    tmp31 = tmp34;
                  }
                }
              }
            }
          }
        }
      }
      if (null == src) {
        const obj7 = { style: items1, children: closure_10(alt, { size: "small" }) };
        items1 = [, ];
        ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp4);
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            Text = projectId(closure_2[18]).Text;
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
        tmp49Result = closure_10(closure_8, obj7);
      } else if (0 === slide) {
        const obj8 = { style: items2, children: closure_10(design(5705), tmp28) };
        items2 = [, ];
        ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp4);
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            Text = projectId(closure_2[18]).Text;
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
        class B {
          constructor() {
            obj = closure_0(closure_2[14]);
            obj1 = { id: design.id, alt: closure_5 };
            items = [];
            items[0] = obj1;
            return obj.openConjureNativeImages(projectId, items, 0);
          }
        }
        tmp28[1] = tmp4.overlayFullWidget;
        tmp28[3] = handleError;
        tmp49Result = tmp49(closure_8, obj8);
      } else {
        class H {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            tmp = closure_1_10;
            items = [, ];
            items[0] = closure_2.slideButton;
            tmp3 = slide === arg1;
            slideButtonActive = tmp3;
            tmp2 = closure_1_6;
            if (tmp3) {
              slideButtonActive = closure_2.slideButtonActive;
            }
            obj = { style: items, onPress() { /* body not rendered: F150488 */ }, accessibilityRole: "tab", accessibilityState: { selected: tmp3 }, children: null };
            items[1] = slideButtonActive;
            str = "text-muted";
            Text = projectId(closure_2[18]).Text;
            if (tmp3) {
              str = "text-default";
            }
            obj1 = { variant: "text-xs/medium", color: str, children: projectId };
            obj.children = tmp(Text, obj1);
            return tmp(tmp2, obj, projectId);
          }
        }
      }
      class B {
        constructor() {
          obj = closure_0(closure_2[14]);
          obj1 = { id: design.id, alt: closure_5 };
          items = [];
          items[0] = obj1;
          return obj.openConjureNativeImages(projectId, items, 0);
        }
      }
      cResult[8] = handleError;
      cResult[9] = projectId;
      cResult[10] = size;
      cResult[11] = slide;
      cResult[12] = src;
      cResult[13] = tmp4.overlayDesign;
      cResult[14] = tmp4.overlayFullWidget;
      cResult[15] = tmp4.overlayWidgetSlide;
      cResult[16] = tmp49Result;
      tmp23 = tmp49Result;
    }
    class B {
      constructor() {
        obj = closure_0(closure_2[14]);
        obj1 = { id: design.id, alt: closure_5 };
        items = [];
        items[0] = obj1;
        return obj.openConjureNativeImages(projectId, items, 0);
      }
    }
    cResult[4] = design.id;
    cResult[5] = projectId;
    cResult[6] = B;
    tmp17 = B;
  }
}) : (function PlanOverlayDesign(projectId) {
  let c4;
  let closure_2;
  let gone;
  let handleError;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let labels;
  let obj8;
  let obj9;
  let src;
  let tmp12Result;
  let tmp15;
  projectId = projectId.projectId;
  const design = projectId.design;
  c4 = undefined;
  let c5;
  size = projectId.size;
  const tmp = closure_13();
  dependencyMap = tmp;
  let tmp2 = projectId;
  const tmp3 = dependencyMap;
  let obj = projectId(12238);
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError, gone } = conjureAttachmentImage);
  let obj2 = projectId(12486);
  const obj3 = { ready: null != src };
  const conjurePlanOverlaySlides = obj2.useConjurePlanOverlaySlides(obj3);
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick: c4 } = conjurePlanOverlaySlides);
  if (gone) {
    return null;
  } else {
    const intl = tmp2(1125).intl;
    const stringResult = intl.string(design(3863).mjryK4);
    c5 = stringResult;
    const intl2 = tmp2(1125).intl;
    const stringResult1 = intl2.string(design(3863)["rPpf5/"]);
    const obj4 = { style: tmp.stack, children: items2 };
    const obj5 = {
      onPressIn: tmp6,
      onPress() {
          const items = [];
          const obj2 = { id: design.id, alt };
          items[0] = obj2;
          const obj = openConjureNativeImages;
          return obj.openConjureNativeImages(projectId, items, 0);
        },
      accessibilityRole: "imagebutton",
      accessibilityLabel: tmp15,
      accessibilityHint: intl3.string(design(3863).TvAPIm),
      children: tmp12Result
    };
    tmp15 = stringResult1;
    const tmp10 = closure_11;
    const tmp13 = closure_6;
    if (0 === slide) {
      tmp15 = stringResult;
    }
    intl3 = tmp2(1125).intl;
    if (null == src) {
      const obj6 = { style: items, children: closure_10(c5, { size: "small" }) };
      items = [, ];
      ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp);
      tmp12Result = tmp12(tmp11, obj6);
    } else if (0 === slide) {
      const obj7 = { style: items1, children: closure_10(design(5705), obj8) };
      items1 = [, ];
      ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp);
      obj8 = { source: obj9, style: tmp.overlayFullWidget, resizeMode: "contain", onError: handleError };
      obj9 = { uri: src };
      tmp12Result = tmp12(tmp11, obj7);
    } else {
      const obj10 = { projectId, src, alt: stringResult1, size, onError: handleError };
      tmp12Result = tmp12(closure_14, obj10);
    }
    items2 = [closure_10(tmp13, obj5), ];
    const obj11 = {
      style: tmp.slidePicker,
      accessibilityRole: "tablist",
      accessibilityLabel: intl4.string(design(3863).EH36X6),
      children: labels.map((children, index) => {
          let Text;
          let obj2;
          let closure_0 = index;
          const items = [closure_2.slideButton, ];
          let slideButtonActive = tmp3;
          const tmp2 = closure_1_6;
          if (slide === index) {
            slideButtonActive = closure_2.slideButtonActive;
          }
          items[1] = slideButtonActive;
          let str = "text-muted";
          const obj = {
            style: items,
            onPress() {
              return c4(index);
            },
            accessibilityRole: "tab",
            accessibilityState: { selected: slide === index },
            children: closure_1_10(Text, obj2)
          };
          Text = projectId(closure_2[18]).Text;
          if (slide === index) {
            str = "text-default";
          }
          obj2 = { variant: "text-xs/medium", color: str, children };
          return closure_1_10(tmp2, obj, children);
        })
    };
    intl4 = tmp2(1125).intl;
    items2[1] = closure_10(closure_8, obj11);
    return tmp10(closure_8, obj4);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanReference(arg0) {
  let closure_129_0;
  let handleError;
  let id;
  let obj6;
  let onOpen;
  let projectId;
  let src;
  let tmp6;
  let tmp = dependencyMap;
  const obj = react2;
  const cResult = obj.c(14);
  ({ alt, onOpen } = arg0);
  ({ projectId, id } = arg0);
  const tmp3 = closure_13();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, id);
  ({ src, handleError } = conjureAttachmentImage);
  const gone = conjureAttachmentImage.gone;
  [tmp6, closure_129_0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (gone) {
    return null;
  } else {
    let tmp8;
    let num2 = 64;
    if (null != tmp6) {
      const _Math = Math;
      num2 = Math.min(192, 64 * tmp6);
    }
    if (cResult[0] !== num2) {
      const obj3 = { width: num2 };
      cResult[0] = num2;
      cResult[1] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[1];
    }
    if (cResult[2] === tmp3.reference) {
      let tmp9;
      if (cResult[3] === tmp8) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === handleError) {
        if (cResult[6] === src) {
          let tmp10;
          if (cResult[7] === tmp3.referenceImage) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === alt) {
            if (cResult[10] === onOpen) {
              if (cResult[11] === tmp9) {
                let tmp14;
                if (cResult[12] === tmp10) {
                  tmp14 = cResult[13];
                }
                return tmp14;
              }
            }
          }
          const obj4 = { onPress: onOpen, style: tmp9, accessibilityRole: "imagebutton", accessibilityLabel: alt, children: tmp10 };
          const tmp17 = authStore(metroRequire, obj4);
          cResult[9] = alt;
          cResult[10] = onOpen;
          cResult[11] = tmp9;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      let tmp11 = null;
      if (null != src) {
        const obj5 = {
          source: obj6,
          style: tmp3.referenceImage,
          resizeMode: "contain",
          onLoad(nativeEvent) {
                  nativeEvent = nativeEvent.nativeEvent;
                  let source = nativeEvent;
                  if ("source" in nativeEvent) {
                    source = nativeEvent.source;
                  }
                  const tmp = source.width > 0 && source.height > 0;
                  if (tmp) {
                    closure_1_0(source.width / source.height);
                  }
                },
          onError: handleError,
          accessible: false
        };
        obj6 = { uri: src };
        tmp11 = authStore(FastImageDefault, obj5);
      }
      cResult[5] = handleError;
      cResult[6] = src;
      cResult[7] = tmp3.referenceImage;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
    const items = [tmp3.reference, tmp8];
    cResult[2] = tmp3.reference;
    cResult[3] = tmp8;
    cResult[4] = items;
    tmp9 = items;
  }
}) : (function PlanReference(arg0) {
  let c0;
  let gone;
  let handleError;
  let id;
  let items;
  let obj5;
  let onOpen;
  let projectId;
  let tmp5;
  let tmp7Result;
  c0 = undefined;
  ({ projectId, id, alt, onOpen } = arg0);
  let tmp = closure_13();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, id);
  const src = conjureAttachmentImage.src;
  ({ gone, handleError } = conjureAttachmentImage);
  [tmp5, c0] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (gone) {
    return null;
  } else {
    let num2 = 64;
    if (null != tmp5) {
      const _Math = Math;
      num2 = Math.min(192, 64 * tmp5);
    }
    const obj2 = { onPress: onOpen, style: items, accessibilityRole: "imagebutton", accessibilityLabel: alt, children: tmp7Result };
    items = [tmp.reference, ];
    const obj3 = { width: num2 };
    items[1] = obj3;
    tmp7Result = null;
    const tmp8 = metroRequire;
    if (null != src) {
      const obj4 = {
        source: obj5,
        style: tmp.referenceImage,
        resizeMode: "contain",
        onLoad(nativeEvent) {
              nativeEvent = nativeEvent.nativeEvent;
              let source = nativeEvent;
              if ("source" in nativeEvent) {
                source = nativeEvent.source;
              }
              const tmp = source.width > 0 && source.height > 0;
              if (tmp) {
                _undefined(source.width / source.height);
              }
            },
        onError: handleError,
        accessible: false
      };
      obj5 = { uri: src };
      tmp7Result = tmp7(FastImageDefault, obj4);
    }
    return authStore(tmp8, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanReferences(projectId) {
  let intl;
  let items;
  let obj = projectId(576);
  const cResult = obj.c(20);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  const tmp4 = closure_13();
  if (cResult[0] === projectId) {
    if (cResult[1] === proposal) {
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmp10;
      let tmp11;
      if (cResult[2] === tmp4) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
        tmp7 = cResult[5];
        tmp8 = cResult[6];
        tmp9 = cResult[7];
        tmp10 = cResult[8];
        tmp11 = cResult[9];
      }
      const _Symbol = Symbol;
      if (tmp11 === Symbol.for("react.early_return_sentinel")) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp7) {
            let tmp25;
            if (cResult[13] === tmp8) {
              tmp25 = cResult[14];
            }
            if (cResult[15] === tmp6) {
              if (cResult[16] === tmp9) {
                if (cResult[17] === tmp10) {
                  let tmp28;
                  if (cResult[18] === tmp25) {
                    tmp28 = cResult[19];
                  }
                  tmp11 = tmp28;
                }
              }
            }
            const obj2 = { style: tmp9, children: items };
            items = [tmp10, tmp25];
            const tmp30 = closure_11(tmp6, obj2);
            cResult[15] = tmp6;
            cResult[16] = tmp9;
            cResult[17] = tmp10;
            cResult[18] = tmp25;
            cResult[19] = tmp30;
            tmp28 = tmp30;
          }
        }
        const obj3 = { style: tmp7, children: tmp8 };
        const tmp27 = closure_10(tmp5, obj3);
        cResult[11] = tmp5;
        cResult[12] = tmp7;
        cResult[13] = tmp8;
        cResult[14] = tmp27;
        tmp25 = tmp27;
      }
      return tmp11;
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const tmpResult = projectId(12481);
  const result = tmpResult.conjurePlanReferenceImages(proposal);
  importDefault = result;
  let tmp13 = null;
  let tmp14;
  let tmp15;
  let mapped;
  let referenceList;
  let tmp18;
  let tmp19;
  if (0 !== result.length) {
    let tmp20;
    const _Symbol2 = Symbol;
    const stack = tmp4.stack;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(_modDef3863.ubBJcy) };
      const Text = tmp(5270).Text;
      intl = tmp(1125).intl;
      const tmp23 = closure_10(Text, obj4);
      cResult[10] = tmp23;
      tmp20 = tmp23;
    } else {
      tmp20 = cResult[10];
    }
    referenceList = tmp4.referenceList;
    mapped = result.map((alt, index) => {
      projectId = index;
      const id = alt.id;
      let obj = {
        projectId,
        id,
        alt: alt.alt,
        onOpen() {
          const obj = openConjureNativeImages;
          return obj.openConjureNativeImages(projectId, importDefault, index);
        }
      };
      return closure_1_10(closure_1_17, obj, id);
    });
    tmp14 = tmp20;
    tmp13 = forResult;
    tmp15 = stack;
    tmp18 = tmp31;
    tmp19 = tmp31;
  }
  cResult[0] = projectId;
  cResult[1] = proposal;
  cResult[2] = tmp4;
  cResult[3] = tmp19;
  cResult[4] = tmp18;
  cResult[5] = referenceList;
  cResult[6] = mapped;
  cResult[7] = tmp15;
  cResult[8] = tmp14;
  cResult[9] = tmp13;
  tmp11 = tmp13;
  tmp10 = tmp14;
  tmp9 = tmp15;
  tmp8 = mapped;
  tmp7 = referenceList;
  tmp6 = tmp18;
  tmp5 = tmp19;
}) : (function PlanReferences(projectId) {
  let c1;
  let intl;
  let items;
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  const tmp = closure_13();
  let obj = projectId(12481);
  const result = obj.conjurePlanReferenceImages(proposal);
  importDefault = result;
  let tmp4 = null;
  if (0 !== result.length) {
    const obj2 = { style: tmp.stack, children: items };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(_modDef3863.ubBJcy) };
    const Text = tmp2(5270).Text;
    intl = tmp2(1125).intl;
    items = [closure_10(Text, obj3), ];
    const obj4 = {
      style: tmp.referenceList,
      children: result.map((alt, index) => {
          const id = alt.id;
          projectId = index;
          let obj = {
            projectId,
            id,
            alt: alt.alt,
            onOpen() {
              const obj = openConjureNativeImages;
              return obj.openConjureNativeImages(projectId, c1, index);
            }
          };
          return closure_1_10(closure_1_17, obj, id);
        })
    };
    items[1] = closure_10(closure_8, obj4);
    tmp4 = closure_11(closure_8, obj2);
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(projectId) {
  let expanded;
  let onApprove;
  let onToggleExpanded;
  let stack;
  let superseded;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp5;
  let version;
  const tmp = projectId;
  let obj = projectId(576);
  const cResult = obj.c(74);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  dependencyMap = closure_13();
  const tmp4 = closure_13();
  if (cResult[0] !== proposal.summary) {
    const str = proposal.summary;
    const trimmed = str.trim();
    cResult[0] = proposal.summary;
    cResult[1] = trimmed;
    tmp5 = trimmed;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== proposal.what_changed) {
    let str3;
    if (proposal.what_changed != null) {
      str3 = str2.trim();
    }
    if (str3 == null) {
      str3 = "";
    }
    cResult[2] = proposal.what_changed;
    cResult[3] = str3;
  }
  if (cResult[4] !== tmp5) {
    let tmp10 = proposal;
    let obj2 = proposal(5741);
    const parsed = obj2.parse(tmp5, true, tmp(12287).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
  }
  const tmpResult = tmp(12487);
  const conjurePlanSlashCommandNames = tmpResult.useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult6 = tmp(12489);
  const conjurePlanWidget = tmpResult6.useConjurePlanWidget(projectId, proposal);
  const tmpResult7 = tmp(12492);
  const botExchanges = tmpResult7.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult8 = tmp(12492);
  const conjurePlanCommandExchanges = tmpResult8.useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const tmpResult9 = tmp(12479);
    const result = tmpResult9.conjurePlanDesignPreviews(proposal);
    cResult[6] = proposal;
    cResult[7] = result;
    tmp15 = result;
  } else {
    tmp15 = cResult[7];
  }
  let ui = tmp15;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[8] = items;
    tmp17 = items;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    let items1 = [projectId];
    cResult[9] = projectId;
    cResult[10] = M;
    cResult[11] = items1;
    tmp20 = items1;
    tmp19 = M;
  } else {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult10 = tmp(504);
  const stateFromStores = tmpResult10.useStateFromStores(tmp17, tmp19, tmp20);
  if (cResult[12] === botExchanges) {
    class M {
      constructor() {
        project = closure_9.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    cResult[16] = U;
    tmp23 = U;
  } else {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
  }
  if (cResult[17] === botExchanges) {
    class U {
      constructor(arg0) {
        kind = projectId.kind;
        tmp = "bot" === kind;
        if (!tmp) {
          str = "commands";
          tmp = "commands" === kind;
        }
        return tmp;
      }
    }
    const experiences = proposal.experiences;
    const _Map = Map;
    if (experiences == null) {
      class U {
        constructor(arg0) {
          kind = projectId.kind;
          tmp = "bot" === kind;
          if (!tmp) {
            str = "commands";
            tmp = "commands" === kind;
          }
          return tmp;
        }
      }
    }
    const found = experiences.filter(tmp23);
    const self = this;
    const self2 = this;
    const _Map1 = new _Map(found.map(X));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = _Map1;
  }
  class X {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[26]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_5);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = X;
}) : (function ConjurePlanProposalCard(projectId) {
  let closure_4;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items5;
  let items7;
  let obj12;
  let obj14;
  let obj19;
  let obj20;
  let stack;
  let superseded;
  let tmp10Result;
  let tmp12Result;
  let tmp20;
  let version;
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded } = projectId);
  if (superseded === undefined) {
    superseded = false;
  }
  let flag = projectId.expanded;
  if (flag === undefined) {
    flag = true;
  }
  const onApprove = projectId.onApprove;
  react = undefined;
  let botExchanges;
  let conjurePlanCommandExchanges;
  let ui;
  let closure_8;
  const onToggleExpanded = projectId.onToggleExpanded;
  const tmp = closure_13();
  dependencyMap = tmp;
  const str = proposal.summary;
  const trimmed = str.trim();
  let str3;
  if (proposal.what_changed != null) {
    str3 = str2.trim();
  }
  if (str3 == null) {
    str3 = "";
  }
  let items = [trimmed];
  const memo = react.useMemo(() => {
    const obj = MarkupUtilsDefault;
    return obj.parse(trimmed, true, ConjureNativeMarkdown.CONJURE_MARKUP_OPTIONS);
  }, items);
  let obj = projectId(12487);
  const conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let obj2 = projectId(12489);
  react = obj2.useConjurePlanWidget(projectId, proposal);
  let obj3 = projectId(12492);
  botExchanges = obj3.useConjurePlanBotExchanges(proposal).botExchanges;
  let obj4 = projectId(12492);
  conjurePlanCommandExchanges = obj4.useConjurePlanCommandExchanges(proposal);
  let obj5 = projectId(12479);
  ui = obj5.conjurePlanDesignPreviews(proposal);
  let obj6 = projectId(504);
  let items1 = [ConjureProjectStore];
  const items2 = [projectId];
  const stateFromStores = obj6.useStateFromStores(items1, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let name;
    if (project != null) {
      name = project.name;
    }
    return name;
  }, items2);
  const items3 = [proposal.experiences, botExchanges, conjurePlanCommandExchanges];
  closure_8 = react.useMemo(() => {
    let experiences = proposal.experiences;
    const _Map = Map;
    if (experiences == null) {
      experiences = [];
    }
    const found = experiences.filter((kind) => {
      kind = kind.kind;
      return "bot" === kind || "commands" === kind;
    });
    const _Map1 = new _Map(found.map((id) => {
      const items = [id.id, ];
      const obj = projectId(stack[26]);
      items[1] = obj.getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges);
      return items;
    }));
    return _Map1;
  }, items3);
  let tmp10 = proposal;
  let obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  const tmp11 = proposal(12226);
  if (superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp4(1125).intl;
      const obj9 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(3863).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: tmp12Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(tmp10(3863).yD8EJS), hideLabel: intl5.string(tmp10(3863).nSPGNb), children: closure_10(tmp10Result, obj12) };
    tmp12Result = null;
    if (superseded) {
      const obj11 = { children: intl3.string(tmp10(3863).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(12477).ConjureNativeCollapsibleMeta;
      intl3 = tmp4(1125).intl;
      tmp12Result = tmp12(ConjureNativeCollapsibleMeta, obj11);
    }
    intl4 = tmp4(1125).intl;
    intl5 = tmp4(1125).intl;
    let str4 = stateFromStores;
    tmp10Result = tmp10(12502);
    if (stateFromStores == null) {
      let experiences = proposal.experiences;
      let name;
      if (experiences != null) {
        const first = experiences[0];
        if (first != null) {
          name = first.name;
        }
      }
      str4 = name;
    }
    if (str4 == null) {
      str4 = "";
    }
    let tmp12Result2 = null;
    obj12 = {
      appName: str4,
      intro: closure_11(tmp20, obj20),
      proposal,
      renderPreview(kind) {
          let items;
          let obj5;
          let string;
          let tmp38;
          kind = kind.kind;
          if ("frame" !== kind) {
            if ("overlay_widget" !== kind) {
              if ("user_widget" === kind) {
                let tmp15 = null;
                if (null != closure_4) {
                  const obj2 = {};
                  const tmp19 = ConjurePlanWidgetDefault;
                  const merged = Object.assign(tmp14);
                  tmp15 = authStore(tmp19, obj2);
                }
                return tmp15;
              } else if ("automod" === kind) {
                let tmp10 = null;
                if (null != proposal.automod) {
                  tmp10 = null;
                  if (proposal.automod.examples.length > 0) {
                    const obj3 = { automod: proposal.automod };
                    tmp10 = authStore(ConjurePlanAutomodExamplesDefault, obj3);
                  }
                }
                return tmp10;
              } else {
                let items1 = metroImportAll.get(kind.id);
                if (items1 == null) {
                  items1 = [];
                }
                let tmp3 = null;
                if (items1.length > 0) {
                  const obj = { projectId, exchanges: items1 };
                  tmp3 = authStore(ConjurePlanBotPreviewDefault, obj);
                }
                return tmp3;
              }
            }
          }
          ui = ui.ui;
          let experienceId;
          const id = kind.id;
          if (ui != null) {
            experienceId = ui.experienceId;
          }
          let tmp25 = null;
          if (id === experienceId) {
            const obj4 = { projectId, design: ui.ui.design, alt: string(obj5.conjurePlanDesignAlt(proposal)) };
            const intl = intl9.intl;
            string = intl.string;
            obj5 = conjurePlanDesign;
            tmp25 = authStore(closure_15, obj4);
          }
          const overlay = tmp23.overlay;
          let experienceId1;
          const id2 = kind.id;
          if (overlay != null) {
            experienceId1 = overlay.experienceId;
          }
          let tmp34 = null;
          if (id2 === experienceId1) {
            const obj6 = { projectId, design: ui.overlay.design, size: ui.overlay.size };
            tmp34 = authStore(closure_16, obj6);
          }
          if (null != tmp25) {
            const obj7 = { style: stack.stack, children: items };
            items = [tmp25, tmp34];
            tmp38 = unpackModuleId(metroImportAll, obj7);
          } else {
            tmp38 = null;
          }
          return tmp38;
        },
      commandNames: conjurePlanSlashCommandNames
    };
    tmp20 = closure_12;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: closure_10(projectId(12501).ConjurePlanCommandMarkup, obj14) };
      const Text = tmp4(5270).Text;
      obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      tmp12Result2 = tmp12(Text, obj13);
    }
    const items4 = [tmp12Result2, , ];
    const obj15 = { projectId, proposal };
    items4[1] = closure_10(closure_18, obj15);
    let tmp9Result = null;
    if ("" !== str3) {
      const obj16 = { style: tmp.whatChanged, children: items5 };
      const obj17 = { variant: "text-xs/medium", color: "text-muted", children: intl8.string(tmp10(3863).iNS4dl) };
      const Text3 = tmp4(5270).Text;
      intl8 = tmp4(1125).intl;
      items5 = [tmp12(Text3, obj17), ];
      const obj18 = { variant: "text-md/normal", color: "text-default", children: closure_10(projectId(12501).ConjurePlanCommandText, obj19) };
      const Text4 = tmp4(5270).Text;
      obj19 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      items5[1] = closure_10(Text4, obj18);
      tmp9Result = tmp9(tmp13, obj16);
    }
    obj20 = { children: items4 };
    items4[2] = tmp9Result;
    obj8.children = closure_10(tmp14, obj10);
    const items6 = [tmp12(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj21 = { style: tmp.footer, children: items7 };
        const obj22 = { text: intl6.string(tmp10(3863)["6S+wRM"]), variant: "primary", size: "sm", onPress: onApprove };
        const Button = tmp4(5280).Button;
        intl6 = tmp4(1125).intl;
        items7 = [tmp12(Button, obj22), ];
        const obj23 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: intl7.string(tmp10(3863).IZoqbR) };
        const Text2 = tmp4(5270).Text;
        intl7 = tmp4(1125).intl;
        items7[1] = closure_10(Text2, obj23);
        tmp9Result2 = tmp9(tmp13, obj21);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_11(tmp11, obj7);
  }
  let intl = tmp4(1125).intl;
  formatToPlainStringResult = intl.string(tmp10(3863)["3b6e7o"]);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default tmp5;
