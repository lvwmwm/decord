// Module ID: 12441
// Function ID: 12442
// Name: ConjurePlanAutomodExamples
// Dependencies: [19, 17, 21, 4971, 587, 558, 576, 12442, 1202, 1417, 5234, 2]

// Module 12441 (ConjurePlanAutomodExamples)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import AvatarUtils from "AvatarUtils" /* 1417 */;
import Text_Text from "Text/Text" /* 5234 */;
import ConjurePlanAutomodOutcomes from "ConjurePlanAutomodOutcomes" /* 12442 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _require, dependencyMap, set;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
let closure_7 = ["glazedgamer", "sprinkles", "donutking"];
let createStyles = createStyles_mod;
let obj = { card: obj2, rule: obj3, section: obj4, caption: obj5, dot: obj6, rows: obj7, row: obj8, blockedRow: obj9, blockedBar: rect, rowBody: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 } };
obj2 = { gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "baseline", paddingHorizontal: nativeDefault.space.PX_12 };
obj6 = { marginHorizontal: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_12 };
obj9 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
rect = { position: "absolute", top: 0, bottom: 0, start: 0, width: 2, backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 });
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExampleRow(arg0) {
  let blockedStyle;
  let example;
  let items;
  let items1;
  let label;
  let makeSource;
  let showReason;
  let tmpResult4;
  let username;
  const obj = react2;
  const cResult = obj.c(33);
  ({ example, username, showReason } = arg0);
  const tmp4 = closure_8();
  ({ label, blockedStyle } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
  if (cResult[0] === example) {
    let tmp5;
    if (cResult[1] === showReason) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.row) {
      let tmp8;
      let tmp9;
      if (cResult[4] === (blockedStyle && tmp4.blockedRow)) {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== label) {
        const labelResult = label();
        cResult[6] = label;
        cResult[7] = labelResult;
        tmp9 = labelResult;
      } else {
        tmp9 = cResult[7];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp9 + ": " + username + ", " + example.content;
      if (cResult[8] === tmp5) {
        let obj3;
        if (cResult[9] === combined) {
          obj3 = cResult[10];
        }
        const joined = obj3.join(", ");
        if (cResult[11] === blockedStyle) {
          let tmp17;
          let tmp21;
          let tmp25;
          let tmp28;
          let tmp30;
          let tmp33;
          if (cResult[12] === tmp4.blockedBar) {
            tmp17 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { source: makeSource(tmpResult4.getDefaultAvatarURL(undefined, undefined)), size: native.AvatarSizes.XSMALL };
            const Avatar = tmp(1202).Avatar;
            makeSource = AvatarUtils.makeSource;
            AvatarUtils;
            tmpResult4 = AvatarUtils;
            const tmp24 = _false(Avatar, obj2);
            cResult[14] = tmp24;
            tmp21 = tmp24;
          } else {
            tmp21 = cResult[14];
          }
          const rowBody = tmp4.rowBody;
          if (cResult[15] !== username) {
            const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: username };
            const tmp27 = _false(Text_Text.Text, obj4);
            cResult[15] = username;
            cResult[16] = tmp27;
            tmp25 = tmp27;
          } else {
            tmp25 = cResult[16];
          }
          if (cResult[17] !== example.content) {
            const tmpResult5 = ConjurePlanAutomodOutcomes;
            const result = tmpResult5.renderPlanAutomodExampleContent(example.content);
            cResult[17] = example.content;
            cResult[18] = result;
            tmp28 = result;
          } else {
            tmp28 = cResult[18];
          }
          if (cResult[19] !== tmp28) {
            const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp28 };
            const tmp32 = _false(Text_Text.Text, obj5);
            cResult[19] = tmp28;
            cResult[20] = tmp32;
            tmp30 = tmp32;
          } else {
            tmp30 = cResult[20];
          }
          if (cResult[21] !== tmp5) {
            let tmp34 = null;
            if (null != tmp5) {
              const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp5 };
              tmp34 = _false(tmp(5234).Text, obj6);
            }
            cResult[21] = tmp5;
            cResult[22] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[22];
          }
          if (cResult[23] === tmp4.rowBody) {
            if (cResult[24] === tmp25) {
              if (cResult[25] === tmp30) {
                let tmp36;
                if (cResult[26] === tmp33) {
                  tmp36 = cResult[27];
                }
                if (cResult[28] === tmp36) {
                  if (cResult[29] === tmp8) {
                    if (cResult[30] === joined) {
                      let tmp40;
                      if (cResult[31] === tmp17) {
                        tmp40 = cResult[32];
                      }
                      return tmp40;
                    }
                  }
                }
                const obj7 = { style: tmp8, accessible: true, accessibilityLabel: joined, children: items };
                items = [tmp17, tmp21, tmp36];
                const tmp43 = React3(View, obj7);
                cResult[28] = tmp36;
                cResult[29] = tmp8;
                cResult[30] = joined;
                cResult[31] = tmp17;
                cResult[32] = tmp43;
                tmp40 = tmp43;
              }
            }
          }
          const obj8 = { style: rowBody, children: items1 };
          items1 = [tmp25, tmp30, tmp33];
          const tmp39 = React3(View, obj8);
          cResult[23] = tmp4.rowBody;
          cResult[24] = tmp25;
          cResult[25] = tmp30;
          cResult[26] = tmp33;
          cResult[27] = tmp39;
          tmp36 = tmp39;
        }
        let tmp18 = null;
        if (blockedStyle) {
          const obj9 = { style: tmp4.blockedBar };
          tmp18 = _false(View, obj9);
        }
        cResult[11] = blockedStyle;
        cResult[12] = tmp4.blockedBar;
        cResult[13] = tmp18;
        tmp17 = tmp18;
      }
      const items2 = [combined, tmp5];
      const found = items2.filter((item) => null != item);
      cResult[8] = tmp5;
      cResult[9] = combined;
      cResult[10] = found;
      obj3 = found;
    }
    const items3 = [tmp4.row, blockedStyle && tmp4.blockedRow];
    cResult[3] = tmp4.row;
    cResult[4] = blockedStyle && tmp4.blockedRow;
    cResult[5] = items3;
    tmp8 = items3;
  }
  let result1 = null;
  if (showReason) {
    const tmpResult6 = ConjurePlanAutomodOutcomes;
    result1 = tmpResult6.planAutomodReasonText(example);
  }
  cResult[0] = example;
  cResult[1] = showReason;
  cResult[2] = result1;
  tmp5 = result1;
}) : (function ExampleRow(showReason) {
  let example;
  let found;
  let items2;
  let items3;
  let makeSource;
  let tmp2Result5;
  let tmp2Result6;
  let username;
  ({ example, username } = showReason);
  showReason = showReason.showReason;
  const tmp = closure_8();
  const tmp4 = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome];
  const blockedStyle = tmp4.blockedStyle;
  let result = null;
  const label = tmp4.label;
  if (showReason) {
    const tmp2Result = ConjurePlanAutomodOutcomes;
    result = tmp2Result.planAutomodReasonText(example);
  }
  const items = [tmp.row, ];
  const tmp8 = blockedStyle && tmp.blockedRow;
  items[1] = tmp8;
  const obj = { style: items, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
  const items1 = ["" + label() + ": " + username + ", " + example.content, result];
  found = items1.filter((item) => null != item);
  let tmp9 = null;
  if (blockedStyle) {
    const obj2 = { style: tmp.blockedBar };
    tmp9 = _false(tmp7, obj2);
  }
  items2 = [tmp9, , ];
  const obj3 = { source: makeSource(tmp2Result5.getDefaultAvatarURL(undefined, undefined)), size: native.AvatarSizes.XSMALL };
  const Avatar = tmp2(1202).Avatar;
  makeSource = AvatarUtils.makeSource;
  AvatarUtils;
  tmp2Result5 = AvatarUtils;
  items2[1] = _false(Avatar, obj3);
  const obj4 = { style: tmp.rowBody, children: items3 };
  items3 = [_false(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: username }), , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp2Result6.renderPlanAutomodExampleContent(example.content) };
  const Text = tmp2(5234).Text;
  tmp2Result6 = ConjurePlanAutomodOutcomes;
  items3[1] = _false(Text, obj5);
  let tmp11Result = null;
  const tmp11 = _false;
  if (null != result) {
    const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: result };
    tmp11Result = tmp11(tmp2(5234).Text, obj6);
  }
  items3[2] = tmp11Result;
  items2[2] = React3(View, obj4);
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExampleSection(arg0) {
  let caption;
  let firstIndex;
  let group;
  let items;
  let items1;
  let items2;
  let length;
  let section;
  let tmp5;
  let obj = firstIndex(576);
  const cResult = obj.c(31);
  ({ group, firstIndex } = arg0);
  const tmp4 = closure_8();
  const obj2 = firstIndex(12442).CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
  if (cResult[0] !== group.examples) {
    const _Set = Set;
    const examples = group.examples;
    const self = this;
    const self2 = this;
    set = new Set(examples.map(firstIndex(12442).planAutomodReasonText));
    cResult[0] = group.examples;
    cResult[1] = set;
    tmp5 = set;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === group.examples[0]) {
    let tmp9;
    let tmp13;
    if (cResult[3] === tmp5.size) {
      tmp9 = cResult[4];
    }
    ({ section, caption } = tmp4);
    if (cResult[5] !== obj2) {
      const labelResult = obj2.label();
      cResult[5] = obj2;
      cResult[6] = labelResult;
      tmp13 = labelResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === closure_6[obj2.tone]) {
      let tmp15;
      if (cResult[8] === tmp13) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp9) {
        let tmp18;
        if (cResult[11] === tmp4.dot) {
          tmp18 = cResult[12];
        }
        if (cResult[13] === tmp4.caption) {
          if (cResult[14] === tmp15) {
            let tmp23;
            let tmp28;
            if (cResult[15] === tmp18) {
              tmp23 = cResult[16];
            }
            if (cResult[17] === firstIndex) {
              if (cResult[18] === group.examples) {
                if (cResult[19] === tmp5.size) {
                  tmp28 = cResult[20];
                }
                if (cResult[24] === tmp4.rows) {
                  let tmp31;
                  if (cResult[25] === tmp28) {
                    tmp31 = cResult[26];
                  }
                  if (cResult[27] === tmp4.section) {
                    if (cResult[28] === tmp31) {
                      let tmp35;
                      if (cResult[29] === tmp23) {
                        tmp35 = cResult[30];
                      }
                      return tmp35;
                    }
                  }
                  const obj3 = { style: section, children: items };
                  items = [tmp23, tmp31];
                  const tmp38 = closure_4(View, obj3);
                  cResult[27] = tmp4.section;
                  cResult[28] = tmp31;
                  cResult[29] = tmp23;
                  cResult[30] = tmp38;
                  tmp35 = tmp38;
                }
                const obj4 = { style: tmp27, children: tmp28 };
                const tmp34 = closure_3(View, obj4);
                cResult[24] = tmp4.rows;
                cResult[25] = tmp28;
                cResult[26] = tmp34;
                tmp31 = tmp34;
              }
            }
            if (cResult[21] === firstIndex) {
              let tmp29;
              if (cResult[22] === tmp5.size) {
                tmp29 = cResult[23];
              }
              const examples1 = group.examples;
              const mapped = examples1.map(tmp29);
              cResult[17] = firstIndex;
              cResult[18] = group.examples;
              cResult[19] = tmp5.size;
              cResult[20] = mapped;
              tmp28 = mapped;
            }
            const fn = function z(example, arg1) {
              const obj = { example, username: length[(firstIndex + arg1) % length.length], showReason: size.size > 1 };
              return _false(closure_9, obj, arg1);
            };
            cResult[21] = firstIndex;
            cResult[22] = tmp5.size;
            cResult[23] = fn;
            tmp29 = fn;
          }
        }
        const obj5 = { style: caption, accessibilityRole: "header", children: items1 };
        items1 = [tmp15, tmp18];
        const tmp26 = closure_4(View, obj5);
        cResult[13] = tmp4.caption;
        cResult[14] = tmp15;
        cResult[15] = tmp18;
        cResult[16] = tmp26;
        tmp23 = tmp26;
      }
      let tmp19 = null;
      if (null != tmp9) {
        const obj6 = { children: items2 };
        const obj7 = { variant: "text-xs/semibold", color: "text-muted", style: tmp4.dot, accessible: false, children: "\u00B7" };
        items2 = [closure_3(firstIndex(5234).Text, obj7), ];
        const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: tmp9 };
        items2[1] = closure_3(firstIndex(5234).Text, obj8);
        tmp19 = closure_4(closure_5, obj6);
      }
      cResult[10] = tmp9;
      cResult[11] = tmp4.dot;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    }
    const obj9 = { variant: "text-xs/semibold", color: closure_6[obj2.tone], children: tmp13 };
    const tmp17 = closure_3(firstIndex(5234).Text, obj9);
    cResult[7] = closure_6[obj2.tone];
    cResult[8] = tmp13;
    cResult[9] = tmp17;
    tmp15 = tmp17;
  }
  let result = null;
  if (1 === tmp5.size) {
    const tmpResult = firstIndex(12442);
    result = tmpResult.planAutomodReasonText(group.examples[0]);
  }
  cResult[2] = group.examples[0];
  cResult[3] = tmp5.size;
  cResult[4] = result;
  tmp9 = result;
}) : (function ExampleSection(arg0) {
  let examples1;
  let group;
  let items;
  let items1;
  let items2;
  let length;
  let require;
  ({ group, firstIndex: require } = arg0);
  set = undefined;
  const tmp = closure_8();
  let obj = require("ConjurePlanAutomodOutcomes").CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
  const examples = group.examples;
  set = new Set(examples.map(require("ConjurePlanAutomodOutcomes").planAutomodReasonText));
  let result = null;
  if (1 === set.size) {
    const tmp2Result = require("ConjurePlanAutomodOutcomes");
    result = tmp2Result.planAutomodReasonText(group.examples[0]);
  }
  const obj2 = { style: tmp.section, children: items2 };
  const obj3 = { style: tmp.caption, accessibilityRole: "header", children: items };
  const obj4 = { variant: "text-xs/semibold", color: closure_6[obj.tone], children: obj.label() };
  const Text = tmp2(tmp3[10]).Text;
  items = [closure_3(Text, obj4), ];
  let tmp6Result = null;
  if (null != result) {
    const obj5 = { children: items1 };
    const obj6 = { variant: "text-xs/semibold", color: "text-muted", style: tmp.dot, accessible: false, children: "\u00B7" };
    items1 = [closure_3(require("Text/Text").Text, obj6), ];
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: result };
    items1[1] = closure_3(require("Text/Text").Text, obj7);
    tmp6Result = tmp6(closure_5, obj5);
  }
  items[1] = tmp6Result;
  items2 = [closure_4(View, obj3), ];
  const obj8 = {
    style: tmp.rows,
    children: examples1.map((example, index) => {
      const obj = { example, username: length[(_require + index) % length.length], showReason: set.size > 1 };
      return _false(closure_9, obj, index);
    })
  };
  examples1 = group.examples;
  items2[1] = closure_3(View, obj8);
  return closure_4(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanAutomodExamples(automod) {
  let items;
  let obj4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(18);
  automod = automod.automod;
  const tmp4 = closure_8();
  if (cResult[0] === automod.examples) {
    if (cResult[1] === automod.rule_name) {
      if (cResult[2] === tmp4.card) {
        if (cResult[3] === tmp4.rule) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
          tmp7 = cResult[6];
          tmp8 = cResult[7];
        }
        if (cResult[13] === tmp5) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp7) {
              let tmp16;
              if (cResult[16] === tmp8) {
                tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
        const obj2 = { style: tmp6, children: items };
        items = [tmp7, tmp8];
        const tmp18 = closure_4(tmp5, obj2);
        cResult[13] = tmp5;
        cResult[14] = tmp6;
        cResult[15] = tmp7;
        cResult[16] = tmp8;
        cResult[17] = tmp18;
        tmp16 = tmp18;
      }
    }
  }
  const tmpResult = ConjurePlanAutomodOutcomes;
  const result = tmpResult.groupPlanAutomodExamples(automod.examples);
  const require = result;
  if (cResult[8] !== automod.rule_name) {
    const str = automod.rule_name;
    const trimmed = str.trim();
    cResult[8] = automod.rule_name;
    cResult[9] = trimmed;
    tmp9 = trimmed;
  } else {
    tmp9 = cResult[9];
  }
  const card = tmp4.card;
  if (cResult[10] === tmp9) {
    let tmp12;
    if (cResult[11] === tmp4.rule) {
      tmp12 = cResult[12];
    }
    const mapped = result.map((group, index) => {
      let substr;
      const obj = { group, firstIndex: substr.reduce((acc, examples) => acc + examples.examples.length, 0) };
      substr = require("Discord");
      return _false(closure_10, obj, group.section);
    });
    cResult[0] = automod.examples;
    cResult[1] = automod.rule_name;
    cResult[2] = tmp4.card;
    cResult[3] = tmp4.rule;
    cResult[4] = View;
    cResult[5] = card;
    cResult[6] = tmp12;
    cResult[7] = mapped;
    tmp7 = tmp12;
    tmp8 = mapped;
    tmp6 = card;
    tmp5 = tmp11;
  }
  let tmp13 = null;
  if ("" !== tmp9) {
    const obj3 = { style: tmp4.rule, children: closure_3(Text_Text.Text, obj4) };
    obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: tmp9 };
    tmp13 = closure_3(tmp11, obj3);
  }
  cResult[10] = tmp9;
  cResult[11] = tmp4.rule;
  cResult[12] = tmp13;
  tmp12 = tmp13;
}) : (function ConjurePlanAutomodExamples(automod) {
  let _undefined;
  let items;
  let obj4;
  automod = automod.automod;
  _require = undefined;
  const tmp = closure_8();
  let obj = require("ConjurePlanAutomodOutcomes");
  const result = obj.groupPlanAutomodExamples(automod.examples);
  const tmp2 = _require;
  _require = result;
  const str = automod.rule_name;
  const trimmed = str.trim();
  let tmp7 = null;
  const obj2 = { style: tmp.card, children: items };
  const tmp5 = closure_4;
  if ("" !== trimmed) {
    const obj3 = { style: tmp.rule, children: closure_3(tmp2(5234).Text, obj4) };
    obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
    tmp7 = closure_3(tmp6, obj3);
  }
  items = [
    tmp7,
    result.map((group, index) => {
      let substr;
      const obj = { group, firstIndex: substr.reduce((acc, examples) => acc + examples.examples.length, 0) };
      substr = _undefined.slice(0, index);
      return _false(closure_10, obj, group.section);
    })
  ];
  return tmp5(View, obj2);
});
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default tmp5;
