// Module ID: 18555
// Function ID: 18556
// Name: ConjurePlanProposalCard
// Dependencies: [32, 19, 17, 6621, 21, 4913, 575, 18556, 18561, 18562, 5600, 18318, 18319, 1112, 4190, 18563, 5504, 18558, 5637, 18372, 18564, 18566, 18569, 504, 18571, 18570, 18303, 18554, 18572, 18579, 18580, 18581, 18583, 5511, 2]
// Exports: default

// Module 18555 (ConjurePlanProposalCard)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import FastImageDefault from "FastImage" /* 5600 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 18318 */;
import openConjureNativeImages from "openConjureNativeImages" /* 18319 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 18372 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 18556 */;
import conjurePlanDesign from "conjurePlanDesign" /* 18558 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 18561 */;
import AssetRegistryDefault from "AssetRegistry" /* 18562 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 18580 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 18581 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 18583 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
function PlanOverlayWidget(arg0) {
  let alt;
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
}
function PlanDesign(projectId) {
  let intl;
  let obj5;
  let tmp7Result;
  projectId = projectId.projectId;
  const design = projectId.design;
  const alt = projectId.alt;
  const tmp = closure_13();
  let obj = projectId(alt[11]);
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
      accessibilityHint: intl.string(design(alt[14]).TvAPIm),
      children: tmp7Result
    };
    intl = tmp2(tmp3[13]).intl;
    const tmp8 = closure_6;
    const tmp9 = design;
    if (null == src) {
      const obj3 = { style: tmp.design, children: closure_10(closure_5, { size: "small" }) };
      tmp7Result = tmp7(closure_8, obj3);
    } else {
      const obj4 = { source: obj5, style: tmp.design, resizeMode: "contain", onError: tmp5 };
      obj5 = { uri: src };
      tmp7Result = tmp7(tmp9(tmp3[10]), obj4);
    }
    tmp7Result2 = tmp7(tmp8, obj2);
  }
  return tmp7Result2;
}
function PlanOverlayDesign(projectId) {
  let alt;
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
  let obj = projectId(18318);
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError, gone } = conjureAttachmentImage);
  let obj2 = projectId(18563);
  const obj3 = { ready: null != src };
  const conjurePlanOverlaySlides = obj2.useConjurePlanOverlaySlides(obj3);
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick: c4 } = conjurePlanOverlaySlides);
  if (gone) {
    return null;
  } else {
    const intl = tmp2(1112).intl;
    const stringResult = intl.string(design(4190).mjryK4);
    c5 = stringResult;
    const intl2 = tmp2(1112).intl;
    const stringResult1 = intl2.string(design(4190)["rPpf5/"]);
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
      accessibilityHint: intl3.string(design(4190).TvAPIm),
      children: tmp12Result
    };
    tmp15 = stringResult1;
    const tmp10 = closure_11;
    const tmp13 = closure_6;
    if (0 === slide) {
      tmp15 = stringResult;
    }
    intl3 = tmp2(1112).intl;
    if (null == src) {
      const obj6 = { style: items, children: closure_10(c5, { size: "small" }) };
      items = [, ];
      ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp);
      tmp12Result = tmp12(tmp11, obj6);
    } else if (0 === slide) {
      const obj7 = { style: items1, children: closure_10(design(5600), obj8) };
      items1 = [, ];
      ({ overlayDesign: arr[0], overlayWidgetSlide: arr[1] } = tmp);
      obj8 = { source: obj9, style: tmp.overlayFullWidget, resizeMode: "contain", onError: handleError };
      obj9 = { uri: src };
      tmp12Result = tmp12(tmp11, obj7);
    } else {
      const obj10 = { projectId, src, alt: stringResult1, size, onError: handleError };
      tmp12Result = tmp12(PlanOverlayWidget, obj10);
    }
    items2 = [closure_10(tmp13, obj5), ];
    const obj11 = {
      style: tmp.slidePicker,
      accessibilityRole: "tablist",
      accessibilityLabel: intl4.string(design(4190).EH36X6),
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
          Text = projectId(closure_2[16]).Text;
          if (slide === index) {
            str = "text-default";
          }
          obj2 = { variant: "body-xs/medium", color: str, children };
          return closure_1_10(tmp2, obj, children);
        })
    };
    intl4 = tmp2(1112).intl;
    items2[1] = closure_10(closure_8, obj11);
    return tmp10(closure_8, obj4);
  }
}
function PlanReference(arg0) {
  let alt;
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
}
function PlanReferences(projectId) {
  let c1;
  let intl;
  let items;
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  const tmp = closure_13();
  let obj = projectId(18558);
  const result = obj.conjurePlanReferenceImages(proposal);
  importDefault = result;
  let tmp4 = null;
  if (0 !== result.length) {
    const obj2 = { style: tmp.stack, children: items };
    const obj3 = { variant: "body-xs/medium", color: "text-muted", children: intl.string(_modDef4190.ubBJcy) };
    const Text = tmp2(5504).Text;
    intl = tmp2(1112).intl;
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
          return closure_1_10(PlanReference, obj, id);
        })
    };
    items[1] = closure_10(closure_8, obj4);
    tmp4 = closure_11(closure_8, obj2);
  }
  return tmp4;
}
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
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default function ConjurePlanProposalCard(projectId) {
  let closure_4;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items7;
  let items9;
  let obj13;
  let obj15;
  let obj20;
  let obj21;
  let stack;
  let superseded;
  let tmp10Result;
  let tmp14Result;
  let tmp22;
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
  let obj = projectId(18564);
  const conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let obj2 = projectId(18566);
  react = obj2.useConjurePlanWidget(projectId, proposal);
  let obj3 = projectId(18569);
  botExchanges = obj3.useConjurePlanBotExchanges(proposal).botExchanges;
  let obj4 = projectId(18569);
  conjurePlanCommandExchanges = obj4.useConjurePlanCommandExchanges(proposal);
  let obj5 = projectId(18556);
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
  let obj7 = projectId(504);
  const items3 = [ConjureProjectStore];
  const items4 = [projectId];
  let tmp10 = proposal;
  const stateFromStores1 = obj7.useStateFromStores(items3, () => {
    const project = ConjureProjectStore.getProject(projectId);
    let install_scope;
    if (project != null) {
      install_scope = project.install_scope;
    }
    return "guild" === install_scope;
  }, items4);
  const items5 = [proposal.experiences, botExchanges, conjurePlanCommandExchanges];
  const tmp11 = proposal(18571)(projectId);
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
      const obj = projectId(stack[25]);
      items[1] = obj.getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges);
      return items;
    }));
    return _Map1;
  }, items5);
  const obj8 = { style: tmp.surface, children: null };
  const tmp14 = closure_10;
  let tmp15 = closure_8;
  const obj9 = { style: tmp.content, children: null };
  const tmp13 = proposal(18303);
  if (superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp4(1112).intl;
      const obj10 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(4190).YZ3qJs, obj10);
    }
    const obj11 = { title: formatToPlainStringResult, meta: tmp14Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(tmp10(4190).yD8EJS), hideLabel: intl5.string(tmp10(4190).nSPGNb), children: tmp14(tmp10Result, obj13) };
    tmp14Result = null;
    if (superseded) {
      const obj12 = { children: intl3.string(tmp10(4190).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(18554).ConjureNativeCollapsibleMeta;
      intl3 = tmp4(1112).intl;
      tmp14Result = tmp14(ConjureNativeCollapsibleMeta, obj12);
    }
    intl4 = tmp4(1112).intl;
    intl5 = tmp4(1112).intl;
    let str4 = stateFromStores;
    tmp10Result = tmp10(18572);
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
    let tmp14Result2 = null;
    obj13 = {
      appName: str4,
      inServer: stateFromStores1,
      guild: tmp11,
      intro: closure_11(tmp22, obj21),
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
            tmp25 = authStore(PlanDesign, obj4);
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
            tmp34 = authStore(PlanOverlayDesign, obj6);
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
    tmp22 = closure_12;
    if ("" !== trimmed) {
      const obj14 = { variant: "body-md/normal", color: "text-default", children: tmp14(projectId(18579).ConjurePlanCommandMarkup, obj15) };
      const Text = tmp4(5504).Text;
      obj15 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "body-md" };
      tmp14Result2 = tmp14(Text, obj14);
    }
    const items6 = [tmp14Result2, , ];
    const obj16 = { projectId, proposal };
    items6[1] = tmp14(PlanReferences, obj16);
    let tmp12Result = null;
    if ("" !== str3) {
      const obj17 = { style: tmp.whatChanged, children: items7 };
      const obj18 = { variant: "body-xs/medium", color: "text-muted", children: intl8.string(tmp10(4190).iNS4dl) };
      const Text3 = tmp4(5504).Text;
      intl8 = tmp4(1112).intl;
      items7 = [tmp14(Text3, obj18), ];
      const obj19 = { variant: "body-md/normal", color: "text-default", children: tmp14(projectId(18579).ConjurePlanCommandText, obj20) };
      const Text4 = tmp4(5504).Text;
      obj20 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "body-md" };
      items7[1] = tmp14(Text4, obj19);
      tmp12Result = tmp12(tmp15, obj17);
    }
    obj21 = { children: items6 };
    items6[2] = tmp12Result;
    obj9.children = tmp14(tmp16, obj11);
    const items8 = [tmp14(tmp15, obj9), ];
    let tmp12Result2 = null;
    if (null != onApprove) {
      tmp12Result2 = null;
      if (!superseded) {
        const obj22 = { style: tmp.footer, children: items9 };
        const obj23 = { text: intl6.string(tmp10(4190)["6S+wRM"]), variant: "primary", size: "sm", onPress: onApprove };
        const Button = tmp4(5511).Button;
        intl6 = tmp4(1112).intl;
        items9 = [tmp14(Button, obj23), ];
        const obj24 = { variant: "body-sm/normal", color: "text-subtle", style: tmp.replyHint, children: intl7.string(tmp10(4190).IZoqbR) };
        const Text2 = tmp4(5504).Text;
        intl7 = tmp4(1112).intl;
        items9[1] = tmp14(Text2, obj24);
        tmp12Result2 = tmp12(tmp15, obj22);
      }
    }
    items8[1] = tmp12Result2;
    obj8.children = items8;
    return closure_11(tmp13, obj8);
  }
  let intl = tmp4(1112).intl;
  formatToPlainStringResult = intl.string(tmp10(4190)["3b6e7o"]);
};
