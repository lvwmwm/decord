// Module ID: 12684
// Function ID: 12685
// Name: ConjurePlanProposalCard
// Dependencies: [32, 19, 17, 6838, 21, 5009, 575, 12685, 12690, 12691, 5712, 12455, 12456, 1114, 3865, 12692, 5619, 12687, 5749, 12503, 12693, 12695, 12698, 504, 12699, 12442, 12683, 12700, 12704, 12705, 12706, 12708, 5629, 2]
// Exports: default

// Module 12684 (ConjurePlanProposalCard)
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import FastImageDefault from "FastImage" /* 5712 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5749 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 12455 */;
import openConjureNativeImages from "openConjureNativeImages" /* 12456 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12503 */;
import conjurePlanOverlayDesign from "conjurePlanOverlayDesign" /* 12685 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12687 */;
import useConjureOverlayBackgroundDefault from "useConjureOverlayBackground" /* 12690 */;
import AssetRegistryDefault from "AssetRegistry" /* 12691 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12705 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12706 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12708 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  let obj = projectId(12455);
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError, gone } = conjureAttachmentImage);
  let obj2 = projectId(12692);
  const obj3 = { ready: null != src };
  const conjurePlanOverlaySlides = obj2.useConjurePlanOverlaySlides(obj3);
  const slide = conjurePlanOverlaySlides.slide;
  ({ labels, pick: c4 } = conjurePlanOverlaySlides);
  if (gone) {
    return null;
  } else {
    const intl = tmp2(1114).intl;
    const stringResult = intl.string(design(3865).mjryK4);
    c5 = stringResult;
    const intl2 = tmp2(1114).intl;
    const stringResult1 = intl2.string(design(3865)["rPpf5/"]);
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
      accessibilityHint: intl3.string(design(3865).TvAPIm),
      children: tmp12Result
    };
    tmp15 = stringResult1;
    const tmp10 = closure_11;
    const tmp13 = closure_6;
    if (0 === slide) {
      tmp15 = stringResult;
    }
    intl3 = tmp2(1114).intl;
    if (null == src) {
      const obj6 = { style: items, children: closure_10(c5, { size: "small" }) };
      items = [, ];
      ({ overlayDesign: arr2[0], overlayWidgetSlide: arr2[1] } = tmp);
      tmp12Result = tmp12(tmp11, obj6);
    } else if (0 === slide) {
      const obj7 = { style: items1, children: closure_10(design(5712), obj8) };
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
      accessibilityLabel: intl4.string(design(3865).EH36X6),
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
          obj2 = { variant: "text-xs/medium", color: str, children };
          return closure_1_10(tmp2, obj, children);
        })
    };
    intl4 = tmp2(1114).intl;
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
  let obj = projectId(12687);
  const result = obj.conjurePlanReferenceImages(proposal);
  importDefault = result;
  let tmp4 = null;
  if (0 !== result.length) {
    const obj2 = { style: tmp.stack, children: items };
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: intl.string(_modDef3865.ubBJcy) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
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
  let obj = projectId(12693);
  const conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let obj2 = projectId(12695);
  react = obj2.useConjurePlanWidget(projectId, proposal);
  let obj3 = projectId(12698);
  botExchanges = obj3.useConjurePlanBotExchanges(proposal).botExchanges;
  let obj4 = projectId(12698);
  conjurePlanCommandExchanges = obj4.useConjurePlanCommandExchanges(proposal);
  let obj5 = projectId(12685);
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
      const obj = projectId(stack[24]);
      items[1] = obj.getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges);
      return items;
    }));
    return _Map1;
  }, items3);
  let tmp10 = proposal;
  let obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  const tmp11 = proposal(12442);
  if (superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp4(1114).intl;
      const obj9 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(3865).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: tmp12Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(tmp10(3865).yD8EJS), hideLabel: intl5.string(tmp10(3865).nSPGNb), children: closure_10(tmp10Result, obj12) };
    tmp12Result = null;
    if (superseded) {
      const obj11 = { children: intl3.string(tmp10(3865).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(12683).ConjureNativeCollapsibleMeta;
      intl3 = tmp4(1114).intl;
      tmp12Result = tmp12(ConjureNativeCollapsibleMeta, obj11);
    }
    intl4 = tmp4(1114).intl;
    intl5 = tmp4(1114).intl;
    let str4 = stateFromStores;
    tmp10Result = tmp10(12700);
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
    tmp20 = closure_12;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: closure_10(projectId(12704).ConjurePlanCommandMarkup, obj14) };
      const Text = tmp4(5619).Text;
      obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      tmp12Result2 = tmp12(Text, obj13);
    }
    const items4 = [tmp12Result2, , ];
    const obj15 = { projectId, proposal };
    items4[1] = closure_10(PlanReferences, obj15);
    let tmp9Result = null;
    if ("" !== str3) {
      const obj16 = { style: tmp.whatChanged, children: items5 };
      const obj17 = { variant: "text-xs/medium", color: "text-muted", children: intl8.string(tmp10(3865).iNS4dl) };
      const Text3 = tmp4(5619).Text;
      intl8 = tmp4(1114).intl;
      items5 = [tmp12(Text3, obj17), ];
      const obj18 = { variant: "text-md/normal", color: "text-default", children: closure_10(projectId(12704).ConjurePlanCommandText, obj19) };
      const Text4 = tmp4(5619).Text;
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
        const obj22 = { text: intl6.string(tmp10(3865)["6S+wRM"]), variant: "primary", size: "sm", onPress: onApprove };
        const Button = tmp4(5629).Button;
        intl6 = tmp4(1114).intl;
        items7 = [tmp12(Button, obj22), ];
        const obj23 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: intl7.string(tmp10(3865).IZoqbR) };
        const Text2 = tmp4(5619).Text;
        intl7 = tmp4(1114).intl;
        items7[1] = closure_10(Text2, obj23);
        tmp9Result2 = tmp9(tmp13, obj21);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_11(tmp11, obj7);
  }
  let intl = tmp4(1114).intl;
  formatToPlainStringResult = intl.string(tmp10(3865)["3b6e7o"]);
};
