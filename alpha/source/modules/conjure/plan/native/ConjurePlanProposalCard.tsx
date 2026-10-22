// Module ID: 12383
// Function ID: 12384
// Name: ConjurePlanProposalCard
// Dependencies: [19, 17, 6759, 21, 4969, 587, 558, 576, 11772, 5655, 5691, 12221, 12384, 12386, 12389, 12392, 504, 12390, 1128, 12393, 12394, 12395, 12397, 3830, 12382, 5220, 12401, 12402, 5230, 11759, 2]

// Module 12383 (ConjurePlanProposalCard)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1128 */;
import FastImageDefault from "FastImage" /* 5655 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5691 */;
import useConjureAttachmentImage from "useConjureAttachmentImage" /* 11772 */;
import ConjureNativeMarkdown from "ConjureNativeMarkdown" /* 12221 */;
import conjurePlanBot from "conjurePlanBot" /* 12390 */;
import conjurePlanDesign from "conjurePlanDesign" /* 12393 */;
import ConjurePlanWidgetDefault from "ConjurePlanWidget" /* 12394 */;
import ConjurePlanAutomodExamplesDefault from "ConjurePlanAutomodExamples" /* 12395 */;
import ConjurePlanBotPreviewDefault from "ConjurePlanBotPreview" /* 12397 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6759 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { surface: { padding: 0, overflow: "hidden" }, content: obj2, whatChanged: obj3, footer: obj4, replyHint: { flexShrink: 1 }, design: obj5 };
obj2 = { padding: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_8, columnGap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj5 = { width: "100%", aspectRatio: 1.5, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlanDesign(alt) {
  let design;
  let handleError;
  let obj4;
  let obj6;
  let projectId;
  let src;
  const obj = react2;
  const cResult = obj.c(5);
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp3 = closure_10();
  const obj2 = useConjureAttachmentImage;
  const conjureAttachmentImage = obj2.useConjureAttachmentImage(projectId, design.id);
  ({ src, handleError } = conjureAttachmentImage);
  let tmp5 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp9;
    if (cResult[0] === alt) {
      if (cResult[1] === handleError) {
        if (cResult[2] === src) {
          let tmp6;
          if (cResult[3] === tmp3.design) {
            tmp6 = cResult[4];
          }
          tmp5 = tmp6;
        }
      }
    }
    if (null == src) {
      const obj3 = { style: tmp3.design, children: metroImportDefault(React3, obj4) };
      obj4 = { size: "small", accessibilityLabel: alt };
      tmp9 = metroImportDefault(hasOwnProperty, obj3);
    } else {
      const obj5 = { source: obj6, style: tmp3.design, resizeMode: "contain", onError: handleError, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj6 = { uri: src };
      tmp9 = metroImportDefault(FastImageDefault, obj5);
    }
    cResult[0] = alt;
    cResult[1] = handleError;
    cResult[2] = src;
    cResult[3] = tmp3.design;
    cResult[4] = tmp9;
    tmp6 = tmp9;
  }
  return tmp5;
}) : (function PlanDesign(alt) {
  let design;
  let obj3;
  let obj5;
  let projectId;
  alt = alt.alt;
  ({ projectId, design } = alt);
  const tmp = closure_10();
  const obj = useConjureAttachmentImage;
  const conjureAttachmentImage = obj.useConjureAttachmentImage(projectId, design.id);
  const src = conjureAttachmentImage.src;
  let tmp5 = null;
  if (!conjureAttachmentImage.gone) {
    let tmp8;
    if (null == src) {
      const obj2 = { style: tmp.design, children: metroImportDefault(React3, obj3) };
      obj3 = { size: "small", accessibilityLabel: alt };
      tmp8 = metroImportDefault(hasOwnProperty, obj2);
    } else {
      const obj4 = { source: obj5, style: tmp.design, resizeMode: "contain", onError: tmp4, accessible: true, accessibilityRole: "image", accessibilityLabel: alt };
      obj5 = { uri: src };
      tmp8 = metroImportDefault(FastImageDefault, obj4);
    }
    tmp5 = tmp8;
  }
  return tmp5;
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
  let obj = projectId(conjurePlanWidget[7]);
  const cResult = obj.c(69);
  projectId = projectId.projectId;
  const proposal = projectId.proposal;
  ({ version, superseded, expanded, onToggleExpanded, onApprove } = projectId);
  closure_10();
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
    let obj2 = proposal(tmp2[10]);
    const parsed = obj2.parse(tmp5, true, tmp(tmp2[11]).CONJURE_MARKUP_OPTIONS);
    cResult[4] = tmp5;
    cResult[5] = parsed;
  }
  const tmpResult = tmp(conjurePlanWidget[12]);
  const conjurePlanSlashCommandNames = tmpResult.useConjurePlanSlashCommandNames(proposal.commands);
  const tmpResult6 = tmp(conjurePlanWidget[13]);
  conjurePlanWidget = tmpResult6.useConjurePlanWidget(projectId, proposal);
  const tmpResult7 = tmp(conjurePlanWidget[14]);
  const botExchanges = tmpResult7.useConjurePlanBotExchanges(proposal).botExchanges;
  const tmpResult8 = tmp(conjurePlanWidget[14]);
  const conjurePlanCommandExchanges = tmpResult8.useConjurePlanCommandExchanges(proposal);
  if (cResult[6] !== proposal) {
    const tmpResult9 = tmp(conjurePlanWidget[15]);
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
        project = closure_6.getProject(projectId);
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
        project = closure_6.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
    tmp20 = cResult[11];
  }
  const tmpResult10 = tmp(conjurePlanWidget[16]);
  const stateFromStores = tmpResult10.useStateFromStores(tmp17, tmp19, tmp20);
  if (cResult[12] === botExchanges) {
    class B {
      constructor() {
        project = closure_6.getProject(projectId);
        name = undefined;
        if (project != null) {
          name = project.name;
        }
        return name;
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
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
    cResult[16] = G;
    tmp23 = G;
  } else {
    class G {
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
    class G {
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
      class G {
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
    const _Map1 = new _Map(found.map(J));
    cResult[12] = botExchanges;
    cResult[13] = conjurePlanCommandExchanges;
    cResult[14] = proposal.experiences;
    cResult[15] = _Map1;
  }
  class J {
    constructor(arg0) {
      items = [, ];
      items[0] = projectId.id;
      obj = closure_0(closure_2[17]);
      items[1] = obj.getConjurePlanSectionBotExchanges(projectId, botExchanges, closure_4);
      return items;
    }
  }
  cResult[17] = botExchanges;
  cResult[18] = conjurePlanCommandExchanges;
  cResult[19] = J;
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
  const tmp = closure_10();
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
  let obj = projectId(trimmed[12]);
  const conjurePlanSlashCommandNames = obj.useConjurePlanSlashCommandNames(proposal.commands);
  let obj2 = projectId(trimmed[13]);
  react = obj2.useConjurePlanWidget(projectId, proposal);
  let obj3 = projectId(trimmed[14]);
  botExchanges = obj3.useConjurePlanBotExchanges(proposal).botExchanges;
  let obj4 = projectId(trimmed[14]);
  conjurePlanCommandExchanges = obj4.useConjurePlanCommandExchanges(proposal);
  let obj5 = projectId(trimmed[15]);
  closure_6 = obj5.conjurePlanDesignExperienceId(proposal);
  const items1 = [closure_6];
  const items2 = [projectId];
  const obj6 = projectId(trimmed[16]);
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
      const obj = projectId(trimmed[17]);
      items[1] = obj.getConjurePlanSectionBotExchanges(id, botExchanges, conjurePlanCommandExchanges);
      return items;
    }));
    return _Map1;
  }, items3);
  let tmp10 = proposal;
  const obj7 = { style: tmp.surface, children: null };
  const obj8 = { style: tmp.content, children: null };
  const tmp11 = proposal(trimmed[29]);
  if (superseded) {
    let formatToPlainStringResult;
    if (null != version) {
      const intl2 = tmp4(tmp5[18]).intl;
      const obj9 = { version };
      formatToPlainStringResult = intl2.formatToPlainString(tmp10(tmp5[23]).YZ3qJs, obj9);
    }
    const obj10 = { title: formatToPlainStringResult, meta: tmp12Result, superseded, expanded: flag, onToggleExpanded, showLabel: intl4.string(tmp10(trimmed[23]).yD8EJS), hideLabel: intl5.string(tmp10(trimmed[23]).nSPGNb), children: closure_7(tmp10Result, obj12) };
    tmp12Result = null;
    if (superseded) {
      const obj11 = { children: intl3.string(tmp10(trimmed[23]).hF2c41) };
      const ConjureNativeCollapsibleMeta = tmp4(tmp5[24]).ConjureNativeCollapsibleMeta;
      intl3 = tmp4(tmp5[18]).intl;
      tmp12Result = tmp12(ConjureNativeCollapsibleMeta, obj11);
    }
    intl4 = tmp4(tmp5[18]).intl;
    intl5 = tmp4(tmp5[18]).intl;
    let str4 = stateFromStores;
    tmp10Result = tmp10(trimmed[27]);
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
      intro: closure_8(tmp20, obj19),
      proposal,
      renderPreview(kind) {
          let obj5;
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
                  tmp15 = metroImportDefault(tmp19, obj2);
                }
                return tmp15;
              } else if ("automod" === kind) {
                let tmp10 = null;
                if (null != proposal.automod) {
                  tmp10 = null;
                  if (proposal.automod.examples.length > 0) {
                    const obj3 = { automod: proposal.automod };
                    tmp10 = metroImportDefault(ConjurePlanAutomodExamplesDefault, obj3);
                  }
                }
                return tmp10;
              } else {
                let items = metroImportDefault.get(kind.id);
                if (items == null) {
                  items = [];
                }
                let tmp3 = null;
                if (items.length > 0) {
                  const obj = { projectId, exchanges: items };
                  tmp3 = metroImportDefault(ConjurePlanBotPreviewDefault, obj);
                }
                return tmp3;
              }
            }
          }
          let tmp23 = null;
          if (kind.id === closure_6) {
            tmp23 = null;
            if (null != proposal.design_image) {
              const obj4 = { projectId, design: proposal.design_image, alt: string(obj5.conjurePlanDesignAlt(proposal)) };
              const intl = intl9.intl;
              string = intl.string;
              obj5 = conjurePlanDesign;
              tmp23 = metroImportDefault(closure_11, obj4);
            }
          }
          return tmp23;
        },
      commandNames: conjurePlanSlashCommandNames
    };
    tmp20 = closure_9;
    if ("" !== trimmed) {
      const obj13 = { variant: "text-md/normal", color: "text-default", children: closure_7(projectId(trimmed[26]).ConjurePlanCommandMarkup, obj14) };
      const Text = tmp4(tmp5[25]).Text;
      obj14 = { markup: memo, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      tmp12Result2 = tmp12(Text, obj13);
    }
    const items4 = [tmp12Result2, ];
    let tmp9Result = null;
    if ("" !== str3) {
      const obj15 = { style: tmp.whatChanged, children: items5 };
      const obj16 = { variant: "text-xs/medium", color: "text-muted", children: intl8.string(tmp10(trimmed[23]).iNS4dl) };
      const Text3 = tmp4(tmp5[25]).Text;
      intl8 = tmp4(tmp5[18]).intl;
      items5 = [tmp12(Text3, obj16), ];
      const obj17 = { variant: "text-md/normal", color: "text-default", children: closure_7(projectId(trimmed[26]).ConjurePlanCommandText, obj18) };
      const Text4 = tmp4(tmp5[25]).Text;
      obj18 = { text: str3, commandNames: conjurePlanSlashCommandNames, size: "text-md" };
      items5[1] = closure_7(Text4, obj17);
      tmp9Result = tmp9(tmp13, obj15);
    }
    obj19 = { children: items4 };
    items4[1] = tmp9Result;
    obj8.children = closure_7(tmp14, obj10);
    const items6 = [tmp12(tmp13, obj8), ];
    let tmp9Result2 = null;
    if (null != onApprove) {
      tmp9Result2 = null;
      if (!superseded) {
        const obj20 = { style: tmp.footer, children: items7 };
        const obj21 = { text: intl6.string(tmp10(trimmed[23])["6S+wRM"]), variant: "primary", size: "sm", onPress: onApprove };
        const Button = tmp4(tmp5[28]).Button;
        intl6 = tmp4(tmp5[18]).intl;
        items7 = [tmp12(Button, obj21), ];
        const obj22 = { variant: "text-sm/normal", color: "text-subtle", style: tmp.replyHint, children: intl7.string(tmp10(trimmed[23]).IZoqbR) };
        const Text2 = tmp4(tmp5[25]).Text;
        intl7 = tmp4(tmp5[18]).intl;
        items7[1] = closure_7(Text2, obj22);
        tmp9Result2 = tmp9(tmp13, obj20);
      }
    }
    items6[1] = tmp9Result2;
    obj7.children = items6;
    return closure_8(tmp11, obj7);
  }
  let intl = tmp4(tmp5[18]).intl;
  formatToPlainStringResult = intl.string(tmp10(tmp5[23])["3b6e7o"]);
});
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanProposalCard.tsx");

export default tmp5;
