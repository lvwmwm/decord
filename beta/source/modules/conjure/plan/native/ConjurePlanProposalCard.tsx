// Module ID: 12475
// Function ID: 12476
// Name: ConjurePlanProposalCard
// Dependencies: [19, 17, 6805, 21, 5003, 587, 12476, 558, 576, 12478, 12479, 5701, 11865, 5737, 12313, 12480, 12482, 12485, 12488, 504, 12486, 1128, 12489, 12490, 12491, 12493, 3862, 12474, 5266, 12497, 12498, 5276, 11852, 2]

// Module 12475 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1128 */;
import FastImageDefault from "FastImage" /* 5701 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5737 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11865 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12313 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 12476 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 12478 */;
import AssetRegistryDefault from "AssetRegistry" /* 12479 */;
import conjurePlanBot from "conjurePlanBot" /* 12486 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12489 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12490 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12491 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12493 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6805 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let items;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let react = react_mod;
({ ActivityIndicator: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { surface: { padding: 0, overflow: "hidden" }, content: obj2, whatChanged: obj3, footer: obj4, replyHint: { flexShrink: 1 }, design: obj5, overlayDesign: obj6, blurredBackground: obj7, overlayWidget: obj8 };
obj2 = { padding: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
obj6 = { width: "100%", aspectRatio: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_SCENE_ASPECT_RATIO, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj7 = { transform: items };
items = [{ scale: 1.04 }];
obj8 = { position: "absolute", top: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_WIDGET_TOP, end: conjurePlanOverlayDesign.CONJURE_PLAN_OVERLAY_WIDGET_END };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanOverlayWidget(projectId) {
  let alt;
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
  const tmp4 = closure_11();
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
                  const tmp23 = React4(metroRequire, obj3);
                  cResult[20] = tmp4.overlayDesign;
                  cResult[21] = tmp9;
                  cResult[22] = tmp17;
                  cResult[23] = tmp23;
                  tmp20 = tmp23;
                }
              }
            }
            const obj4 = { source: tmp14, style: tmp16, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
            const tmp19 = metroImportAll(FastImageDefault, obj4);
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
    const tmp11 = metroImportAll;
    const tmp5Result = FastImageDefault;
    if (typeof tmp6Result.src === "string") {
      src2 = { uri: tmp6Result.src };
      const obj5 = { uri: tmp6Result.src };
    } else {
      src2 = tmp6Result.src;
    }
    const obj7 = { source: src2, style: items2, resizeMode: "cover", blurRadius: num3, onError: tmp6Result.handleError, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items2 = [hasOwnProperty.absoluteFill, tmp6Result.blurred && tmp4.blurredBackground];
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
  let alt;
  let items;
  let items1;
  let items2;
  let num;
  let onError;
  let projectId;
  let src;
  ({ projectId, src, alt, size, onError } = arg0);
  const tmp = closure_11();
  const tmp4 = useConjureOverlayBackgroundDefault;
  const tmp4Result = tmp4(projectId, AssetRegistryDefault);
  const obj = conjurePlanOverlayDesign;
  const size2 = obj.conjurePlanOverlayWidgetBox(size);
  let tmp9Result = null;
  const obj2 = { style: tmp.overlayDesign, children: items1 };
  const tmp6 = React4;
  const tmp7 = metroRequire;
  if (null != tmp4Result.src) {
    let src2;
    const tmp2Result = FastImageDefault;
    const tmp9 = metroImportAll;
    if (typeof tmp4Result.src === "string") {
      src2 = { uri: tmp4Result.src };
      const obj3 = { uri: tmp4Result.src };
    } else {
      src2 = tmp4Result.src;
    }
    const obj4 = { source: src2, style: items, resizeMode: "cover", blurRadius: num, onError: tmp4Result.handleError, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    items = [hasOwnProperty.absoluteFill, tmp4Result.blurred && tmp.blurredBackground];
    num = undefined;
    if (tmp4Result.blurred) {
      num = 4;
    }
    tmp9Result = tmp9(tmp2Result, obj4);
  }
  items1 = [tmp9Result, ];
  const obj5 = { source: { uri: src }, style: items2, resizeMode: "contain", onError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
  items2 = [tmp.overlayWidget, { width: size2.width, height: size2.height }];
  items1[1] = metroImportAll(FastImageDefault, obj5);
  return tmp6(tmp7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(design) {
  let alt;
  let handleError;
  let obj5;
  let obj7;
  let overlayWidgetSize;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(13);
  ({ projectId, alt, overlayWidgetSize } = design);
  design = design.design;
  const tmp3 = closure_11();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp5 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp6;
    let tmp10Result;
    if (null != src) {
      if (null != overlayWidgetSize) {
        if (cResult[0] === alt) {
          if (cResult[1] === handleError) {
            if (cResult[2] === overlayWidgetSize) {
              if (cResult[3] === projectId) {
                let tmp13;
                if (cResult[4] === src) {
                  tmp13 = cResult[5];
                }
                tmp6 = tmp13;
              }
            }
          }
        }
        const obj3 = { projectId, src, alt, size: overlayWidgetSize, onError: handleError };
        const tmp16 = metroImportAll(closure_12, obj3);
        cResult[0] = alt;
        cResult[1] = handleError;
        cResult[2] = overlayWidgetSize;
        cResult[3] = projectId;
        cResult[4] = src;
        cResult[5] = tmp16;
        tmp13 = tmp16;
      }
      tmp5 = tmp6;
    }
    if (cResult[6] === alt) {
      if (cResult[7] === handleError) {
        if (cResult[8] === overlayWidgetSize) {
          if (cResult[9] === src) {
            if (cResult[10] === tmp3.design) {
              if (cResult[11] === tmp3.overlayDesign) {
                tmp6 = cResult[12];
              }
            }
          }
        }
      }
    }
    if (null == src) {
      const items = [tmp3.design, ];
      let overlayDesign = null != overlayWidgetSize;
      const tmp11 = metroRequire;
      if (overlayDesign) {
        overlayDesign = tmp3.overlayDesign;
      }
      items[1] = overlayDesign;
      const obj4 = { style: items, children: metroImportAll(React3, obj5) };
      obj5 = { size: "small", accessibilityLabel: alt };
      tmp10Result = tmp10(tmp11, obj4);
    } else {
      const obj6 = { source: obj7, style: tmp3.design, resizeMode: "contain", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj7 = { uri: src };
      tmp10Result = metroImportAll(FastImageDefault, obj6);
    }
    cResult[6] = alt;
    cResult[7] = handleError;
    cResult[8] = overlayWidgetSize;
    cResult[9] = src;
    cResult[10] = tmp3.design;
    cResult[11] = tmp3.overlayDesign;
    cResult[12] = tmp10Result;
    tmp6 = tmp10Result;
  }
  return tmp5;
}) : (function PlanDesign(design) {
  let alt;
  let handleError;
  let obj4;
  let obj6;
  let overlayWidgetSize;
  let projectId;
  let src;
  ({ projectId, alt, overlayWidgetSize } = design);
  design = design.design;
  const tmp = closure_11();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp4 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp8Result;
    if (null != src) {
      if (null != overlayWidgetSize) {
        const obj2 = { projectId, src, alt, size: overlayWidgetSize, onError: handleError };
        tmp8Result = metroImportAll(closure_12, obj2);
      }
      tmp4 = tmp8Result;
    }
    if (null == src) {
      const items = [tmp.design, ];
      let overlayDesign = null != overlayWidgetSize;
      const tmp9 = metroRequire;
      if (overlayDesign) {
        overlayDesign = tmp.overlayDesign;
      }
      items[1] = overlayDesign;
      const obj3 = { style: items, children: metroImportAll(React3, obj4) };
      obj4 = { size: "small", accessibilityLabel: alt };
      tmp8Result = tmp8(tmp9, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp.design, resizeMode: "contain", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj6 = { uri: src };
      tmp8Result = metroImportAll(FastImageDefault, obj5);
    }
  }
  return tmp4;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanProposalCard(projectId) {
  let conjurePlanWidget;
  let expanded;
  let onApprove;
  let onToggleExpanded;
  let superseded;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp23;
  let tmp5;
  let version;
  const tmp = projectId;
  let obj = projectId(conjurePlanWidget[8]);
  const cResult = obj.c(69);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  closure_11();
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
    let obj2 = proposal(tmp2[13]);
    const parsed = obj2.parse(tmp5, true, tmp(tmp2[14]).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
  }
  const tmpResult = tmp(conjurePlanWidget[15]);
  const conjurePlanSlashCommandNames = tmpResult.useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult6 = tmp(conjurePlanWidget[16]);
  conjurePlanWidget = tmpResult6.useConjurePlanWidget(projectId, proposal);
  const tmpResult7 = tmp(conjurePlanWidget[17]);
  const botExchanges = tmpResult7.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult8 = tmp(conjurePlanWidget[17]);
  const conjurePlanCommandExchanges = tmpResult8.useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const tmpResult9 = tmp(conjurePlanWidget[18]);
    const result = tmpResult9.conjurePlanDesignExperienceId(proposal);
    cResult[6] = proposal;
    cResult[7] = result;
    tmp15 = result;
  } else {
    tmp15 = cResult[7];
  }
  let closure_5 = tmp15;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[8] = items;
    tmp17 = items;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    const items1 = [projectId];
    cResult[9] = projectId;
    cResult[10] = B;
    cResult[11] = items1;
    tmp20 = items1;
    tmp19 = B;
  } else {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult10 = tmp(conjurePlanWidget[19]);
  const stateFromStores = tmpResult10.useStateFromStores(tmp17, tmp19, tmp20);
  if (cResult[12] === botExchanges) {
    class B {
      constructor() {
        project = closure_7.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
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
    cResult[16] = F;
    tmp23 = F;
  } else {
    class F {
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
    class F {
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
      class F {
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
    const _Map1 = new _Map(found.map(G));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = _Map1;
  }
  class G {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[20]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_4);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = G;
}) : (function ConjurePlanProposalCard(projectId) {
  let closure_3;
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
  let obj18;
  let obj19;
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
  let closure_6;
  let closure_7;
  const onToggleExpanded = projectId.onToggleExpanded;
  const tmp = closure_11();
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
  let obj = projectId(trimmed[15]);
  const conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let obj2 = projectId(trimmed[16]);
  react = obj2.useConjurePlanWidget(projectId, proposal);
  let obj3 = projectId(trimmed[17]);
  botExchanges = obj3.useConjurePlanBotExchanges(proposal).botExchanges;
  let obj4 = projectId(trimmed[17]);
  conjurePlanCommandExchanges = obj4.useConjurePlanCommandExchanges(proposal);
  let obj5 = projectId(trimmed[18]);
  closure_6 = obj5.conjurePlanDesignExperienceId(proposal);
  let obj6 = projectId(trimmed[19]);
  const items1 = [closure_7];
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
  closure_7 = react.useMemo(() => {
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
      const obj = projectId(trimmed[20]);
      items[1] = obj.getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges);
      return items;
    }));
    return _Map1;
  }, items3);
  let tmp10 = proposal;
  const obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  const tmp11 = proposal(trimmed[32]);
  if (superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp4(tmp5[21]).intl;
      const obj9 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(tmp5[26]).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: tmp12Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(tmp10(trimmed[26]).yD8EJS), hideLabel: intl5.string(tmp10(trimmed[26]).nSPGNb), children: closure_8(tmp10Result, obj12) };
    tmp12Result = null;
    if (superseded) {
      const obj11 = { children: intl3.string(tmp10(trimmed[26]).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(tmp5[27]).ConjureNativeCollapsibleMeta;
      intl3 = tmp4(tmp5[21]).intl;
      tmp12Result = tmp12(ConjureNativeCollapsibleMeta, obj11);
    }
    intl4 = tmp4(tmp5[21]).intl;
    intl5 = tmp4(tmp5[21]).intl;
    let str4 = stateFromStores;
    tmp10Result = tmp10(trimmed[30]);
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
      intro: closure_9(tmp20, obj19),
      proposal,
      renderPreview(kind) {
          let obj5;
          let obj6;
          let string;
          kind = kind.kind;
          if ("frame" !== kind) {
            if ("overlay_widget" !== kind) {
              if ("user_widget" === kind) {
                let tmp15 = null;
                if (null != closure_3) {
                  const obj2 = {};
                  const tmp19 = ConjurePlanWidgetDefault;
                  const merged = Object.assign(tmp14);
                  tmp15 = metroImportAll(tmp19, obj2);
                }
                return tmp15;
              } else if ("automod" === kind) {
                let tmp10 = null;
                if (null != proposal.automod) {
                  tmp10 = null;
                  if (proposal.automod.examples.length > 0) {
                    const obj3 = { automod: proposal.automod };
                    tmp10 = metroImportAll(ConjurePlanAutomodExamplesDefault, obj3);
                  }
                }
                return tmp10;
              } else {
                let items = closure_7.get(kind.id);
                if (items == null) {
                  items = [];
                }
                let tmp3 = null;
                if (items.length > 0) {
                  const obj = { projectId, exchanges: items };
                  tmp3 = metroImportAll(ConjurePlanBotPreviewDefault, obj);
                }
                return tmp3;
              }
            }
          }
          let tmp23 = null;
          if (kind.id === closure_6) {
            tmp23 = null;
            if (null != proposal.design_image) {
              const obj4 = { projectId, design: proposal.design_image, alt: string(obj5.conjurePlanDesignAlt(proposal)), overlayWidgetSize: obj6.conjurePlanOverlayWidgetSize(proposal) };
              const intl = intl9.intl;
              string = intl.string;
              obj5 = conjurePlanDesign;
              obj6 = conjurePlanOverlayDesign;
              tmp23 = metroImportAll(closure_13, obj4);
            }
          }
          return tmp23;
        },
      commandNames: conjurePlanSlashCommandNames
    };
    tmp20 = closure_10;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: closure_8(projectId(trimmed[29]).ConjurePlanCommandMarkup, obj14) };
      const Text = tmp4(tmp5[28]).Text;
      obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      tmp12Result2 = tmp12(Text, obj13);
    }
    const items4 = [tmp12Result2, ];
    let tmp9Result = null;
    if ("" !== str3) {
      const obj15 = { style: tmp.whatChanged, children: items5 };
      const obj16 = { variant: "text-xs/medium", color: "text-muted", children: intl8.string(tmp10(trimmed[26]).iNS4dl) };
      const Text3 = tmp4(tmp5[28]).Text;
      intl8 = tmp4(tmp5[21]).intl;
      items5 = [tmp12(Text3, obj16), ];
      const obj17 = { variant: "text-md/normal", color: "text-default", children: closure_8(projectId(trimmed[29]).ConjurePlanCommandText, obj18) };
      const Text4 = tmp4(tmp5[28]).Text;
      obj18 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      items5[1] = closure_8(Text4, obj17);
      tmp9Result = tmp9(tmp13, obj15);
    }
    obj19 = { children: items4 };
    items4[1] = tmp9Result;
    obj8.children = closure_8(tmp14, obj10);
    const items6 = [tmp12(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj20 = { style: tmp.footer, children: items7 };
        const obj21 = { text: intl6.string(tmp10(trimmed[26])["6S+wRM"]), variant: "primary", size: "sm", onPress: onApprove };
        const Button = tmp4(tmp5[31]).Button;
        intl6 = tmp4(tmp5[21]).intl;
        items7 = [tmp12(Button, obj21), ];
        const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: intl7.string(tmp10(trimmed[26]).IZoqbR) };
        const Text2 = tmp4(tmp5[28]).Text;
        intl7 = tmp4(tmp5[21]).intl;
        items7[1] = closure_8(Text2, obj22);
        tmp9Result2 = tmp9(tmp13, obj20);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_9(tmp11, obj7);
  }
  let intl = tmp4(tmp5[21]).intl;
  formatToPlainStringResult = intl.string(tmp10(tmp5[26])["3b6e7o"]);
});
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default tmp5;
