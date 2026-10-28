// Module ID: 12224
// Function ID: 12225
// Name: host_approval/ConjureHostApproval
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 12225, 5270, 1125, 3863, 10772, 5280, 6013, 12226, 6939, 7023, 2]

// Module 12224 (host_approval/ConjureHostApproval)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import Text_Text from "Text/Text" /* 5270 */;
import ConjureHostApproval from "ConjureHostApproval" /* 10772 */;
import ConjureAwaitingUser from "ConjureAwaitingUser" /* 12225 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12226 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { cards: obj2, card: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHostApprovalCard(projectId) {
  let first;
  let host;
  let intl;
  let intl3;
  let items;
  let obj6;
  let reason;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp8;
  let obj = projectId(576);
  const cResult = obj.c(35);
  projectId = projectId.projectId;
  const approval = projectId.approval;
  const tmp4 = closure_6();
  const id = approval.id;
  ({ host, reason } = approval);
  const card = tmp4.card;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_4(projectId(12225).ConjureAwaitingPulseRing, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(id(3863).W4DsVo) };
    const Text = tmp(5270).Text;
    intl = tmp(1125).intl;
    const tmp11 = closure_4(Text, obj2);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== host) {
    const intl2 = tmp(1125).intl;
    const obj3 = { host };
    const formatResult = intl2.format(id(3863).E4Gc7e, obj3);
    cResult[2] = host;
    cResult[3] = formatResult;
    tmp12 = formatResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp12) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp12 };
    const tmp17 = closure_4(projectId(5270).Text, obj4);
    cResult[4] = tmp12;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== reason) {
    let tmp19 = null;
    if ("" !== reason) {
      const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl3.format(id(3863)["5poqiN"], obj6) };
      const Text2 = tmp(5270).Text;
      intl3 = tmp(1125).intl;
      obj6 = { reason };
      tmp19 = closure_4(Text2, obj5);
    }
    cResult[6] = reason;
    cResult[7] = tmp19;
    tmp18 = tmp19;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === id) {
    let tmp22;
    let tmp23;
    let tmp26;
    if (cResult[9] === projectId) {
      tmp22 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1125).intl;
      const stringResult = intl4.string(id(3863).B05C3K);
      cResult[11] = stringResult;
      tmp23 = stringResult;
    } else {
      tmp23 = cResult[11];
    }
    if (cResult[12] !== tmp22) {
      const obj7 = { variant: "primary", size: "sm", onPress: tmp22, text: tmp23 };
      const tmp28 = closure_4(projectId(5280).Button, obj7);
      cResult[12] = tmp22;
      cResult[13] = tmp28;
      tmp26 = tmp28;
    } else {
      tmp26 = cResult[13];
    }
    if (cResult[14] === id) {
      let tmp29;
      let tmp31;
      let tmp34;
      if (cResult[15] === projectId) {
        tmp29 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1125).intl;
        cResult[17] = intl5.string(id(3863)["rGv+om"]);
        intl5.string(id(3863)["rGv+om"]);
        class C {
          constructor() {
            const obj = ConjureHostApproval;
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
      } else {
        tmp31 = cResult[17];
      }
      if (cResult[18] !== tmp29) {
        const obj8 = { variant: "secondary", size: "sm", onPress: tmp29, text: tmp31 };
        const tmp36 = closure_4(projectId(5280).Button, obj8);
        class C {
          constructor() {
            const obj = ConjureHostApproval;
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
        cResult[19] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[19];
      }
      if (cResult[20] === id) {
        let tmp37;
        let tmp38;
        let tmp41;
        if (cResult[21] === projectId) {
          tmp37 = cResult[22];
        }
        const _Symbol3 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(1125).intl;
          cResult[23] = intl6.string(id(3863).vWkaSE);
          intl6.string(id(3863).vWkaSE);
          class C {
            constructor() {
              const obj = ConjureHostApproval;
              return obj.answerHostApproval(projectId, id, "deny");
            }
          }
        } else {
          tmp38 = cResult[23];
        }
        if (cResult[24] !== tmp37) {
          const obj9 = { variant: "secondary", size: "sm", onPress: tmp37, text: tmp38 };
          const tmp43 = closure_4(projectId(5280).Button, obj9);
          class C {
            constructor() {
              const obj = ConjureHostApproval;
              return obj.answerHostApproval(projectId, id, "deny");
            }
          }
          cResult[25] = tmp43;
          tmp41 = tmp43;
        } else {
          tmp41 = cResult[25];
        }
        if (cResult[26] === tmp34) {
          if (cResult[27] === tmp41) {
            let tmp44;
            if (cResult[28] === tmp26) {
              tmp44 = cResult[29];
            }
            if (cResult[30] === tmp4.card) {
              if (cResult[31] === tmp44) {
                if (cResult[32] === tmp15) {
                  let tmp47;
                  if (cResult[33] === tmp18) {
                    tmp47 = cResult[34];
                  }
                  return tmp47;
                }
              }
            }
            const obj10 = { style: card, children: tmp50 };
            class C {
              constructor() {
                const obj = ConjureHostApproval;
                return obj.answerHostApproval(projectId, id, "deny");
              }
            }
            tmp50[0] = first;
            tmp50[1] = tmp8;
            tmp50[2] = tmp15;
            tmp50[3] = tmp18;
            tmp50[4] = tmp44;
            const tmp51 = closure_5(id(12226), obj10);
            cResult[30] = tmp4.card;
            cResult[31] = tmp44;
            cResult[32] = tmp15;
            cResult[33] = tmp18;
            cResult[34] = tmp51;
            tmp47 = tmp51;
          }
        }
        class C {
          constructor() {
            const obj = ConjureHostApproval;
            return obj.answerHostApproval(projectId, id, "deny");
          }
        }
        const obj11 = { direction: "horizontal", spacing: id(587).space.PX_8, children: items };
        const Stack = tmp(6013).Stack;
        items = [tmp26, tmp34, tmp41];
        const tmp46 = closure_5(Stack, obj11);
        cResult[26] = tmp34;
        cResult[27] = tmp41;
        cResult[28] = tmp26;
        cResult[29] = tmp46;
        tmp44 = tmp46;
      }
      class C {
        constructor() {
          const obj = ConjureHostApproval;
          return obj.answerHostApproval(projectId, id, "deny");
        }
      }
      cResult[20] = id;
      cResult[21] = projectId;
      cResult[22] = C;
      tmp37 = C;
    }
    cResult[14] = id;
    cResult[15] = projectId;
    cResult[16] = tmp30;
    tmp29 = tmp30;
  }
  const fn = function h() {
    const obj = ConjureHostApproval;
    return obj.answerHostApproval(projectId, id, "once");
  };
  cResult[8] = id;
  cResult[9] = projectId;
  cResult[10] = fn;
  tmp22 = fn;
}) : (function ConjureHostApprovalCard(arg0) {
  let approval;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let obj5;
  let reason;
  let require;
  ({ projectId: require, approval } = arg0);
  importDefault = undefined;
  ({ id: c1, reason } = approval);
  const host = approval.host;
  let obj = { style: closure_6().card, children: items };
  closure_6();
  items = [, , , , ];
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[0] = closure_4(ConjureAwaitingUser.ConjureAwaitingPulseRing, {});
  const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(_modDef3863.W4DsVo) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items[1] = closure_4(Text, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3863.E4Gc7e, { host }) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items[2] = closure_4(Text2, obj3);
  let tmp6Result = null;
  if ("" !== reason) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl3.format(_modDef3863["5poqiN"], obj5) };
    const Text3 = tmp7(5270).Text;
    intl3 = tmp7(1125).intl;
    obj5 = { reason };
    tmp6Result = tmp6(Text3, obj4);
  }
  items[3] = tmp6Result;
  const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = tmp7(6013).Stack;
  const obj7 = {
    variant: "primary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(_require, c1, "once");
    },
    text: intl4.string(_modDef3863.B05C3K)
  };
  const Button = tmp7(5280).Button;
  intl4 = tmp7(1125).intl;
  items1 = [closure_4(Button, obj7), , ];
  const obj8 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(_require, c1, "always");
    },
    text: intl5.string(_modDef3863["rGv+om"])
  };
  const Button2 = tmp7(5280).Button;
  intl5 = tmp7(1125).intl;
  items1[1] = closure_4(Button2, obj8);
  const obj9 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(_require, c1, "deny");
    },
    text: intl6.string(_modDef3863.vWkaSE)
  };
  const Button3 = tmp7(5280).Button;
  intl6 = tmp7(1125).intl;
  items1[2] = closure_4(Button3, obj9);
  items[4] = closure_5(Stack, obj6);
  return closure_5(tmp5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureHostApprovalCards(projectId) {
  let obj = projectId(576);
  const cResult = obj.c(8);
  projectId = projectId.projectId;
  const tmp2 = closure_6();
  const obj2 = projectId(10772);
  const conjureHostApprovals = obj2.useConjureHostApprovals(projectId);
  if (0 === conjureHostApprovals.length) {
    return null;
  } else {
    let tmp4;
    if (cResult[0] === conjureHostApprovals) {
      let tmp3;
      if (cResult[1] === projectId) {
        tmp3 = cResult[2];
      }
      if (cResult[5] === tmp2.cards) {
        let tmp6;
        if (cResult[6] === tmp3) {
          tmp6 = cResult[7];
        }
        return tmp6;
      }
      const obj3 = { style: tmp11, children: tmp3 };
      const tmp9 = closure_4(View, obj3);
      cResult[5] = tmp2.cards;
      cResult[6] = tmp3;
      cResult[7] = tmp9;
      tmp6 = tmp9;
    }
    if (cResult[3] !== projectId) {
      const fn = function x(approval) {
        const obj = { projectId, approval };
        return React3(closure_7, obj, approval.id);
      };
      cResult[3] = projectId;
      cResult[4] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[4];
    }
    const mapped = conjureHostApprovals.map(tmp4);
    cResult[0] = conjureHostApprovals;
    cResult[1] = projectId;
    cResult[2] = mapped;
    tmp3 = mapped;
  }
}) : (function ConjureHostApprovalCards(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_6();
  let obj = projectId(10772);
  const conjureHostApprovals = obj.useConjureHostApprovals(projectId);
  let tmp2 = null;
  if (0 !== conjureHostApprovals.length) {
    const obj2 = {
      style: tmp.cards,
      children: conjureHostApprovals.map((approval) => {
          const obj = { projectId, approval };
          return React3(closure_7, obj, approval.id);
        })
    };
    tmp2 = closure_4(View, obj2);
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAllowedHostsSetting(projectId) {
  let intl3;
  let tmp6;
  let tmp7;
  let obj = projectId(576);
  const cResult = obj.c(7);
  projectId = projectId.projectId;
  let obj2 = projectId(10772);
  const conjureAllowedHosts = obj2.useConjureAllowedHosts(projectId);
  let tmp4 = null;
  if (null != conjureAllowedHosts) {
    let mapped;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1125).intl;
      const stringResult = intl.string(_modDef3863.Ufr2wk);
      let intl2 = tmp(1125).intl;
      const stringResult1 = intl2.string(_modDef3863.wremls);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp6 = stringResult;
      tmp7 = stringResult1;
    } else {
      [tmp6, tmp7] = cResult;
    }
    if (cResult[2] === conjureAllowedHosts) {
      let tmp11;
      let tmp15;
      if (cResult[3] === projectId) {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== tmp11) {
        let obj3 = { title: tmp6, description: tmp7, hasIcons: false, children: tmp11 };
        const tmp17 = closure_4(projectId(7023).TableRowGroup, obj3);
        cResult[5] = tmp11;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      tmp4 = tmp15;
    }
    if (0 === conjureAllowedHosts.length) {
      const obj4 = { label: intl3.string(_modDef3863.AweHIi) };
      let TableRow = tmp(6939).TableRow;
      intl3 = tmp(1125).intl;
      mapped = closure_4(TableRow, obj4);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        let Button;
        let intl;
        let intl2;
        let obj2;
        let obj3;
        let closure_0 = label;
        let obj = { label, trailing: closure_1_4(Button, obj2) };
        const TableRow = projectId(dependencyMap[15]).TableRow;
        obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(_modDef3863["4r+tVj"]),
          accessibilityLabel: intl2.formatToPlainString(_modDef3863.mocW6h, obj3),
          onPress() {
            const obj = ConjureHostApproval;
            return obj.removeAllowedHost(projectId, label);
          }
        };
        Button = projectId(dependencyMap[12]).Button;
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        obj3 = { host: label };
        return closure_1_4(TableRow, obj, label);
      });
    }
    cResult[2] = conjureAllowedHosts;
    cResult[3] = projectId;
    cResult[4] = mapped;
    tmp11 = mapped;
  }
  return tmp4;
}) : (function ConjureAllowedHostsSetting(projectId) {
  let intl;
  let intl2;
  let intl3;
  let mapped;
  projectId = projectId.projectId;
  let obj = projectId(10772);
  const conjureAllowedHosts = obj.useConjureAllowedHosts(projectId);
  let tmp4Result2 = null;
  if (null != conjureAllowedHosts) {
    let obj2 = { title: intl.string(_modDef3863.Ufr2wk), description: intl2.string(_modDef3863.wremls), hasIcons: false, children: mapped };
    const TableRowGroup = tmp(7023).TableRowGroup;
    intl = tmp(1125).intl;
    intl2 = tmp(1125).intl;
    const tmp5 = importDefault;
    if (0 === conjureAllowedHosts.length) {
      let obj3 = { label: intl3.string(tmp5(3863).AweHIi) };
      let TableRow = tmp(6939).TableRow;
      intl3 = tmp(1125).intl;
      mapped = tmp4(TableRow, obj3);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        let Button;
        let intl;
        let intl2;
        let obj2;
        let obj3;
        let closure_0 = label;
        let obj = { label, trailing: closure_1_4(Button, obj2) };
        const TableRow = projectId(dependencyMap[15]).TableRow;
        obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(_modDef3863["4r+tVj"]),
          accessibilityLabel: intl2.formatToPlainString(_modDef3863.mocW6h, obj3),
          onPress() {
            const obj = ConjureHostApproval;
            return obj.removeAllowedHost(projectId, label);
          }
        };
        Button = projectId(dependencyMap[12]).Button;
        intl = projectId(dependencyMap[9]).intl;
        intl2 = projectId(dependencyMap[9]).intl;
        obj3 = { host: label };
        return closure_1_4(TableRow, obj, label);
      });
    }
    tmp4Result2 = tmp4(TableRowGroup, obj2);
  }
  return tmp4Result2;
});
const result = size.fileFinishedImporting("modules/conjure/host_approval/native/ConjureHostApproval.tsx");

export const ConjureHostApprovalCards = tmp5;
export const ConjureAllowedHostsSetting = tmp6;
