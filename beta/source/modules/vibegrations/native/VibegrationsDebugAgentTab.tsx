// Module ID: 17085
// Function ID: 17086
// Name: VibegrationsDebugAgentTab
// Dependencies: [32, 19, 17, 13364, 17066, 21, 4758, 580, 558, 568, 17071, 17070, 4754, 17073, 1119, 3682, 5277, 504, 5188, 17084, 2]

// Module 17085 (VibegrationsDebugAgentTab)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import Text_Text from "Text/Text" /* 4754 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17070 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 17071 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 17066 */;

require = fn;
const View = fn(17).View;
const forceCompaction = fn(13364).forceCompaction;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let closure_11 = [];
const createStyles = fn(4758);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, callRow: null, callHead: null, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.callRow = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.callHead = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((call) => {
  const cResult = c.c(20);
  call = call.call;
  const tmp4 = closure_12();
  if (cResult[0] !== call) {
    const modelCallOutcomeResult = tmp(17071).modelCallOutcome(call);
    cResult[0] = call;
    cResult[1] = modelCallOutcomeResult;
    let tmp5 = modelCallOutcomeResult;
    const tmpResult = tmp(17071);
  } else {
    tmp5 = cResult[1];
  }
  ({ text, bad } = tmp5);
  ({ callRow, callHead } = tmp4);
  if (cResult[2] !== call.observedAt) {
    const formatClockTimeResult = tmp(17070).formatClockTime(call.observedAt);
    cResult[2] = call.observedAt;
    cResult[3] = formatClockTimeResult;
    let tmp7 = formatClockTimeResult;
    const tmpResult2 = tmp(17070);
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7 };
    const tmp11 = closure_1_8(tmp(4754).Text, obj2);
    cResult[4] = tmp7;
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === call.model) {
    if (cResult[7] === call.role) {
      let tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4.callHead) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp12) {
          let tmp14 = cResult[12];
        }
        let str = "text-muted";
        if (bad) {
          str = "text-feedback-critical";
        }
        if (cResult[13] === text) {
          if (cResult[14] === str) {
            let tmp18 = cResult[15];
          }
          if (cResult[16] === tmp4.callRow) {
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp18) {
                let tmp21 = cResult[19];
              }
              return tmp21;
            }
          }
          const obj3 = { style: callRow, children: null };
          const items = [tmp14, tmp18];
          obj3.children = items;
          const tmp24 = options(View, obj3);
          cResult[16] = tmp4.callRow;
          cResult[17] = tmp14;
          cResult[18] = tmp18;
          cResult[19] = tmp24;
          tmp21 = tmp24;
        }
        const obj4 = { variant: "text-xs/medium", color: str, children: text };
        const tmp20 = closure_1_8(tmp(4754).Text, obj4);
        cResult[13] = text;
        cResult[14] = str;
        cResult[15] = tmp20;
        tmp18 = tmp20;
      }
    }
    const obj5 = { style: callHead, children: null };
    const items1 = [tmp9, tmp12];
    obj5.children = items1;
    const tmp17 = options(View, obj5);
    cResult[9] = tmp4.callHead;
    cResult[10] = tmp9;
    cResult[11] = tmp12;
    cResult[12] = tmp17;
    tmp14 = tmp17;
  }
  const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
  const items2 = [call.role, " \u00B7 ", call.model];
  obj6.children = items2;
  const tmp13 = options(Text_Text.Text, obj6);
  cResult[6] = call.model;
  cResult[7] = call.role;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((call) => {
  call = call.call;
  const tmp = closure_12();
  const obj2 = { style: tmp.callRow, children: null };
  const obj3 = { style: tmp.callHead, children: null };
  ({ text, bad } = VibegrationsDebugLabels.modelCallOutcome(call));
  const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: null };
  const modelCallOutcomeResult = VibegrationsDebugLabels.modelCallOutcome(call);
  const tmp3 = options;
  const tmp4 = View;
  const tmp5 = closure_1_8;
  obj4.children = VibegrationsDebugFormat.formatClockTime(call.observedAt);
  const items = [closure_1_8(Text_Text.Text, obj4), ];
  const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
  const items1 = [call.role, " \u00B7 ", call.model];
  obj6.children = items1;
  items[1] = options(Text_Text.Text, obj6);
  obj3.children = items;
  const items2 = [options(View, obj3), ];
  let str = "text-muted";
  if (bad) {
    str = "text-feedback-critical";
  }
  items2[1] = tmp5(Text_Text.Text, { variant: "text-xs/medium", color: str, children: text });
  obj2.children = items2;
  return tmp3(tmp4, obj2);
});
ReactCompilerGating = fn(558);
let obj6 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAgentTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(568).c(80);
  projectId = projectId.projectId;
  ({ status, fetchState, onRefresh, traceVisible } = projectId);
  const obj = projectId(568);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsDebugStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function _() {
      return VibegrationsDebugStore.getLastTurnUsage(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmp4 = closure_12();
  const stateFromStores = projectId(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [VibegrationsDebugStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function y() {
      return VibegrationsDebugStore.getLastCompaction(projectId);
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = projectId(504);
  const stateFromStores1 = projectId(504).useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [VibegrationsDebugStore];
    cResult[8] = items4;
    let tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class O {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = O;
    cResult[11] = items5;
    let tmp18 = items5;
    const tmp17 = O;
  } else {
    class O {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult5 = projectId(504);
  const stateFromStores2 = projectId(504).useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items6 = [VibegrationsDebugStore];
    cResult[12] = items6;
    const tmp20 = items6;
  } else {
    class O {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
  }
  if (cResult[13] !== projectId) {
    class V {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    const items7 = [projectId];
    cResult[13] = projectId;
    cResult[14] = V;
    cResult[15] = items7;
    let tmp22 = items7;
    const tmp21 = V;
  } else {
    class V {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult6 = projectId(504);
  const stateFromStores3 = projectId(504).useStateFromStores(tmp20, tmp21, tmp22);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    const items8 = [VibegrationsDebugStore];
    cResult[16] = items8;
    const tmp24 = items8;
  } else {
    class V {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
  }
  if (cResult[17] === projectId) {
    class V {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    const stateFromStores4 = tmp(504).useStateFromStores(tmp24, E, items9);
    if (cResult[21] !== projectId) {
      class N {
        constructor() {
          return forceCompaction(projectId);
        }
      }
      cResult[21] = projectId;
      cResult[22] = N;
    } else {
      class N {
        constructor() {
          return forceCompaction(projectId);
        }
      }
    }
    if (cResult[23] !== projectId) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
      cResult[23] = projectId;
      cResult[24] = I;
    } else {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (status != null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
      if (tmp30 != null) {
        class I {
          constructor() {
            return forceCompaction(projectId, true);
          }
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (status != null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
      if (tmp32 != null) {
        class I {
          constructor() {
            return forceCompaction(projectId, true);
          }
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (status != null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
      if (tmp34 != null) {
        class I {
          constructor() {
            return forceCompaction(projectId, true);
          }
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    let tmp35;
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (tmp35 == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
      if (tmp31 != null) {
        class I {
          constructor() {
            return forceCompaction(projectId, true);
          }
        }
      }
      tmp35 = tmp36;
    }
    if (tmp35 == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (typeof stateFromStores3 === "object") {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    const tab = tmp4.tab;
    if (status != null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (undefined == null) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    if (cResult[25] === fetchState) {
      class I {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    const obj2 = { generatedAt: undefined, fetchState, onRefresh };
    const tmp41 = closure_8(tmp(17073).DebugSnapshotToolbar, obj2);
    cResult[25] = fetchState;
    cResult[26] = onRefresh;
    cResult[27] = undefined;
    cResult[28] = tmp41;
    const tmpResult8 = tmp(504);
  }
  class E {
    constructor() {
      if (traceVisible) {
        modelCalls = closure_11;
      } else {
        tmp = closure_7;
        tmp2 = projectId;
        modelCalls = closure_7.getModelCalls(projectId);
      }
      return modelCalls;
    }
  }
  items9 = [projectId, traceVisible];
  cResult[17] = projectId;
  cResult[18] = traceVisible;
  cResult[19] = E;
  cResult[20] = items9;
}) : ((projectId) => {
  projectId = projectId.projectId;
  ({ status, traceVisible } = projectId);
  ({ fetchState, onRefresh } = projectId);
  const tmp = closure_12();
  const tmp2 = projectId;
  const items = [VibegrationsDebugStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => VibegrationsDebugStore.getLastTurnUsage(projectId), items1);
  const obj = projectId(504);
  const items2 = [VibegrationsDebugStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(504).useStateFromStores(items2, () => VibegrationsDebugStore.getLastCompaction(projectId), items3);
  const obj2 = projectId(504);
  const items4 = [VibegrationsDebugStore];
  const items5 = [projectId];
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => VibegrationsDebugStore.getLastCompactionDecline(projectId), items5);
  const obj3 = projectId(504);
  const items6 = [VibegrationsDebugStore];
  const items7 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(items6, () => VibegrationsDebugStore.getForceCompactionState(projectId), items7);
  const obj4 = projectId(504);
  const items8 = [VibegrationsDebugStore];
  const items9 = [projectId, traceVisible];
  const stateFromStores4 = projectId(504).useStateFromStores(items8, () => {
    if (traceVisible) {
      let modelCalls = closure_11;
    } else {
      modelCalls = VibegrationsDebugStore.getModelCalls(projectId);
    }
    return modelCalls;
  }, items9);
  const items10 = [projectId];
  const items11 = [projectId];
  const callback = noop.useCallback(() => forceCompaction(projectId), items10);
  let lifetime;
  const callback1 = noop.useCallback(() => forceCompaction(projectId, true), items11);
  if (status != null) {
    const agent = status.agent;
    if (agent != null) {
      lifetime = agent.lifetime;
    }
  }
  if (lifetime == null) {
    lifetime = null;
  }
  let limits;
  if (status != null) {
    const agent2 = status.agent;
    if (agent2 != null) {
      limits = agent2.limits;
    }
  }
  if (limits == null) {
    limits = null;
  }
  let session;
  if (status != null) {
    const agent3 = status.agent;
    if (agent3 != null) {
      session = agent3.session;
    }
  }
  if (session == null) {
    session = null;
  }
  let promptCeiling;
  if (stateFromStores1 != null) {
    promptCeiling = stateFromStores1.promptCeiling;
  }
  if (promptCeiling == null) {
    let prop;
    if (limits != null) {
      prop = limits.context_window_tokens;
    }
    promptCeiling = prop;
  }
  if (promptCeiling == null) {
    promptCeiling = null;
  }
  let tmp15 = null;
  if (typeof stateFromStores3 === "object") {
    tmp15 = stateFromStores3;
  }
  const obj6 = { style: tmp.tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items12 = [closure_8(tmp2(17073).DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj7 = { title: null, children: null };
  const intl = tmp2(1119).intl;
  obj7.title = intl.string(traceVisible(3682).IYpHtT);
  if (null == lifetime) {
    const obj8 = { children: null };
    const intl3 = tmp2(1119).intl;
    obj8.children = intl3.string(tmp20(3682).gPabB9);
    let tmp16Result5 = tmp18(tmp2(17073).DebugNote, obj8);
  } else {
    const obj9 = { label: null, value: null, hint: null };
    const intl35 = tmp2(1119).intl;
    obj9.label = intl35.string(tmp20(3682)["8MSJDH"]);
    const tmp2Result = tmp2(17070);
    const tmp48 = closure_10;
    obj9.value = tmp2Result.formatCount(tmp2(5277).runesFromUsd(lifetime.cost_usd));
    const intl36 = tmp2(1119).intl;
    const obj10 = { count: null };
    const tmp2Result44 = tmp2(5277);
    obj10.count = tmp2(17070).formatCount(lifetime.turns);
    obj9.hint = intl36.formatToPlainString(tmp20(3682)["6Z2KhK"], obj10);
    const items13 = [tmp18(tmp2(17073).DebugStatRow, obj9), , , , ];
    const intl37 = tmp2(1119).intl;
    const orchestrator = lifetime.orchestrator;
    const tmp2Result45 = tmp2(17070);
    const obj11 = { label: intl37.string(tmp20(3682).hk4jJr), value: null, hint: null };
    const intl38 = tmp2(1119).intl;
    const obj12 = { count: null };
    const stringResult = intl37.string(tmp20(3682).hk4jJr);
    const tmp2Result46 = tmp2(17070);
    obj12.count = tmp2Result46.formatCount(tmp2(5277).runeCount(orchestrator));
    obj11.value = intl38.formatToPlainString(tmp20(3682).U98VaN, obj12);
    const tmp2Result47 = tmp2(5277);
    const formatCountResult = tmp2(17070).formatCount(orchestrator.input_tokens);
    const tmp2Result48 = tmp2(17070);
    const tmp2Result49 = tmp2(17070);
    const formatCountResult1 = tmp2(17070).formatCount(orchestrator.output_tokens);
    const _HermesInternal4 = HermesInternal;
    obj11.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp2(17070).formatCount(orchestrator.cache_read_input_tokens) + " cache read";
    items13[1] = tmp18(tmp2(17073).DebugStatRow, obj11);
    const intl39 = tmp2(1119).intl;
    const codegen = lifetime.codegen;
    const tmp2Result50 = tmp2(17070);
    const obj13 = { label: intl39.string(tmp20(3682).R9aduM), value: null, hint: null };
    const intl40 = tmp2(1119).intl;
    const obj14 = { count: null };
    const stringResult1 = intl39.string(tmp20(3682).R9aduM);
    const tmp2Result51 = tmp2(17070);
    obj14.count = tmp2Result51.formatCount(tmp2(5277).runeCount(codegen));
    obj13.value = intl40.formatToPlainString(tmp20(3682).U98VaN, obj14);
    const tmp2Result52 = tmp2(5277);
    const formatCountResult2 = tmp2(17070).formatCount(codegen.input_tokens);
    const tmp2Result53 = tmp2(17070);
    const tmp2Result54 = tmp2(17070);
    const formatCountResult3 = tmp2(17070).formatCount(codegen.output_tokens);
    const _HermesInternal5 = HermesInternal;
    obj13.hint = "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp2(17070).formatCount(codegen.cache_read_input_tokens) + " cache read";
    items13[2] = tmp18(tmp2(17073).DebugStatRow, obj13);
    const intl41 = tmp2(1119).intl;
    const tmp2Result55 = tmp2(17070);
    const stringResult2 = intl41.string(tmp20(3682).Tj6b30);
    const usageOrEmptyResult = tmp2(5277).usageOrEmpty(lifetime.compaction);
    const obj15 = { label: stringResult2, value: null, hint: null };
    const intl42 = tmp2(1119).intl;
    const obj16 = { count: null };
    const tmp2Result56 = tmp2(5277);
    const tmp2Result57 = tmp2(17070);
    obj16.count = tmp2Result57.formatCount(tmp2(5277).runeCount(usageOrEmptyResult));
    obj15.value = intl42.formatToPlainString(tmp20(3682).U98VaN, obj16);
    const tmp2Result58 = tmp2(5277);
    const formatCountResult4 = tmp2(17070).formatCount(usageOrEmptyResult.input_tokens);
    const tmp2Result59 = tmp2(17070);
    const tmp2Result60 = tmp2(17070);
    const formatCountResult5 = tmp2(17070).formatCount(usageOrEmptyResult.output_tokens);
    const _HermesInternal6 = HermesInternal;
    obj15.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp2(17070).formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
    items13[3] = tmp18(tmp2(17073).DebugStatRow, obj15);
    let outcomes;
    if (status != null) {
      const agent4 = status.agent;
      if (agent4 != null) {
        outcomes = agent4.outcomes;
      }
    }
    let tmp18Result9 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp18Result9 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj17 = { label: null, value: null };
        const intl2 = tmp2(1119).intl;
        obj17.label = intl2.string(tmp20(3682).Q2OlgI);
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        const mapped = sorted.map((item) => {
          [tmp, tmp2] = item;
          return "" + projectId(dependencyMap[11]).formatCount(tmp2) + " " + tmp;
        });
        obj17.value = mapped.join(" \u00B7 ");
        tmp18Result9 = tmp18(tmp2(17073).DebugStatRow, obj17);
      }
    }
    const obj18 = { children: null };
    items13[4] = tmp18Result9;
    obj18.children = items13;
    tmp16Result5 = tmp16(tmp48, obj18);
    const tmp2Result61 = tmp2(17070);
  }
  obj7.children = tmp16Result5;
  items12[1] = closure_8(tmp2(17073).DebugSection, obj7);
  const obj19 = { title: null, children: null };
  const intl4 = tmp2(1119).intl;
  obj19.title = intl4.string(traceVisible(3682).lo4mY6);
  if (null == stateFromStores) {
    const obj20 = { children: null };
    const intl5 = tmp2(1119).intl;
    obj20.children = intl5.string(tmp20(3682).uyPveL);
    let tmp18Result10 = tmp18(tmp2(17073).DebugNote, obj20);
  } else {
    const intl43 = tmp2(1119).intl;
    const total = stateFromStores.total;
    const obj21 = { label: intl43.string(tmp20(3682)["VwF+oY"]), value: null, hint: null };
    const intl44 = tmp2(1119).intl;
    const obj22 = { count: null };
    const stringResult3 = intl43.string(tmp20(3682)["VwF+oY"]);
    const tmp63 = closure_10;
    const tmp2Result62 = tmp2(17070);
    obj22.count = tmp2Result62.formatCount(tmp2(5277).runeCount(total));
    obj21.value = intl44.formatToPlainString(tmp20(3682).U98VaN, obj22);
    const tmp2Result63 = tmp2(5277);
    const formatCountResult6 = tmp2(17070).formatCount(total.input_tokens);
    const tmp2Result64 = tmp2(17070);
    const tmp2Result65 = tmp2(17070);
    const formatCountResult7 = tmp2(17070).formatCount(total.output_tokens);
    const _HermesInternal7 = HermesInternal;
    obj21.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp2(17070).formatCount(total.cache_read_input_tokens) + " cache read";
    const items14 = [tmp18(tmp2(17073).DebugStatRow, obj21), ];
    const obj23 = { label: null, value: null };
    const intl45 = tmp2(1119).intl;
    obj23.label = intl45.string(tmp20(3682)["kILb+R"]);
    let cache_hit_rate = stateFromStores.cache_hit_rate;
    if (cache_hit_rate == null) {
      cache_hit_rate = tmp2(5277).cacheHitRate(stateFromStores.total);
      const tmp2Result67 = tmp2(5277);
    }
    const obj24 = { children: null };
    const _HermesInternal = HermesInternal;
    obj23.value = "" + Math.round(100 * cache_hit_rate) + "%";
    items14[1] = tmp18(tmp2(17073).DebugStatRow, obj23);
    obj24.children = items14;
    tmp18Result10 = tmp16(tmp63, obj24);
    const tmp2Result66 = tmp2(17070);
  }
  obj19.children = tmp18Result10;
  items12[2] = closure_8(tmp2(17073).DebugSection, obj19);
  const obj25 = { title: null, children: null };
  const intl6 = tmp2(1119).intl;
  obj25.title = intl6.string(traceVisible(3682).mn8279);
  if (null != stateFromStores1) {
    if (null != promptCeiling) {
      const obj26 = { children: null };
      const obj27 = { label: null, used: null, max: null, formatValue: null };
      const intl9 = tmp2(1119).intl;
      obj27.label = intl9.string(tmp20(3682).dKFhCg);
      obj27.used = stateFromStores1.tokensAfter;
      obj27.max = promptCeiling;
      obj27.formatValue = tmp2(17070).formatCount;
      const items15 = [tmp18(tmp2(17073).DebugMeter, obj27), ];
      const obj28 = { label: null, value: null, hint: null };
      const intl10 = tmp2(1119).intl;
      obj28.label = intl10.string(tmp20(3682).ntZb8d);
      const tmp2Result68 = tmp2(17070);
      const formatCountResult8 = tmp2(17070).formatCount(stateFromStores1.tokensBefore);
      const _HermesInternal2 = HermesInternal;
      obj28.value = "" + formatCountResult8 + " \u2192 " + tmp2(17070).formatCount(stateFromStores1.tokensAfter);
      const intl11 = tmp2(1119).intl;
      const obj29 = { count: null, time: null };
      const tmp2Result69 = tmp2(17070);
      obj29.count = tmp2(17070).formatCount(stateFromStores1.retainedMessages);
      const tmp2Result70 = tmp2(17070);
      obj29.time = tmp2(17070).formatObservedAt(stateFromStores1.observedAt);
      obj28.hint = intl11.formatToPlainString(tmp20(3682).jA05ru, obj29);
      items15[1] = tmp18(tmp2(17073).DebugStatRow, obj28);
      obj26.children = items15;
      let tmp18Result17 = tmp16(closure_10, obj26);
      const tmp2Result71 = tmp2(17070);
    }
    const items16 = [tmp18Result17, , ];
    let tmp18Result11 = null;
    if (null != stateFromStores2) {
      const obj30 = { label: null, value: null, critical: true, hint: null };
      const intl12 = tmp2(1119).intl;
      obj30.label = intl12.string(tmp20(3682)["se+2ls"]);
      const tmp2Result72 = tmp2(17070);
      const formatCountResult9 = tmp2(17070).formatCount(stateFromStores2.projected);
      const _HermesInternal3 = HermesInternal;
      obj30.value = "" + formatCountResult9 + " / " + tmp2(17070).formatCount(stateFromStores2.threshold);
      const intl13 = tmp2(1119).intl;
      const obj31 = { time: null };
      const tmp2Result73 = tmp2(17070);
      obj31.time = tmp2(17070).formatObservedAt(stateFromStores2.observedAt);
      obj30.hint = intl13.formatToPlainString(tmp20(3682).KHK44U, obj31);
      tmp18Result11 = tmp18(tmp2(17073).DebugStatRow, obj30);
      const tmp2Result74 = tmp2(17070);
    }
    items16[1] = tmp18Result11;
    const obj32 = { style: tmp.forceCompaction, children: null };
    const obj33 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
    const intl14 = tmp2(1119).intl;
    obj33.text = intl14.string(tmp20(3682).B0KV7p);
    obj33.disabled = "pending" === stateFromStores3;
    obj33.onPress = callback;
    const items17 = [tmp18(tmp2(5188).Button, obj33), , ];
    let str9 = "text-muted";
    if (null != tmp15) {
      str9 = "text-muted";
      if ("compacted" !== tmp15.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj34 = { variant: "text-xs/normal", color: str9, children: tmp2(17071).forceCompactionStatus(stateFromStores3) };
    items17[1] = tmp18(tmp2(4754).Text, obj34);
    let pendingTurn;
    if (tmp15 != null) {
      pendingTurn = tmp15.pendingTurn;
    }
    let tmp16Result6 = null;
    if (true === pendingTurn) {
      const obj35 = { children: null };
      const obj36 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
      const intl46 = tmp2(1119).intl;
      obj36.text = intl46.string(tmp20(3682)["044+ju"]);
      obj36.onPress = callback1;
      const items18 = [tmp18(tmp2(5188).Button, obj36), ];
      const obj37 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl47 = tmp2(1119).intl;
      obj37.children = intl47.string(tmp20(3682)["8D32H6"]);
      items18[1] = tmp18(tmp2(4754).Text, obj37);
      obj35.children = items18;
      tmp16Result6 = tmp16(closure_10, obj35);
    }
    items17[2] = tmp16Result6;
    obj32.children = items17;
    items16[2] = tmp16(tmp17, obj32);
    obj25.children = items16;
    items12[3] = tmp16(tmp2(17073).DebugSection, obj25);
    if (traceVisible) {
      items12[4] = null;
      if (null != session) {
        const obj38 = { title: null, children: null };
        const intl18 = tmp2(1119).intl;
        obj38.title = intl18.string(tmp20(3682).ZRxAPD);
        let tmp16Result7 = null;
        if (null != session) {
          const obj39 = { label: null, value: null, hint: null };
          const intl19 = tmp2(1119).intl;
          obj39.label = intl19.string(tmp20(3682)["wt5X/o"]);
          obj39.value = tmp2(17070).formatObservedAt(session.instance_since);
          const intl20 = tmp2(1119).intl;
          obj39.hint = intl20.string(tmp20(3682).QX2UQC);
          const items19 = [tmp18(tmp2(17073).DebugStatRow, obj39), , , ];
          const obj40 = { label: null, value: null };
          const intl21 = tmp2(1119).intl;
          obj40.label = intl21.string(tmp20(3682)["4lgurx"]);
          const tmp2Result76 = tmp2(17070);
          const tmp42 = closure_10;
          obj40.value = tmp2(17070).formatCount(session.sockets);
          items19[1] = tmp18(tmp2(17073).DebugStatRow, obj40);
          const obj41 = { label: null, value: null };
          const intl22 = tmp2(1119).intl;
          obj41.label = intl22.string(tmp20(3682)["a/LXBt"]);
          const intl23 = tmp2(1119).intl;
          const tmp20Result = tmp20(3682);
          obj41.value = intl23.string(session.turn_inflight ? tmp20Result["9KlveJ"] : tmp20Result["4tYZVa"]);
          items19[2] = tmp18(tmp2(17073).DebugStatRow, obj41);
          let tmp18Result12 = null;
          if (session.queued_messages > 0) {
            const obj42 = { label: null, value: null };
            const intl24 = tmp2(1119).intl;
            obj42.label = intl24.string(tmp20(3682)["/hOBkc"]);
            obj42.value = tmp2(17070).formatCount(session.queued_messages);
            tmp18Result12 = tmp18(tmp2(17073).DebugStatRow, obj42);
            const tmp2Result78 = tmp2(17070);
          }
          const obj43 = { children: null };
          items19[3] = tmp18Result12;
          obj43.children = items19;
          tmp16Result7 = tmp16(tmp42, obj43);
          const tmp2Result77 = tmp2(17070);
        }
        const items20 = [tmp16Result7, ];
        let analytics;
        if (status != null) {
          analytics = status.analytics;
        }
        let tmp18Result13 = null;
        if (null != analytics) {
          const obj44 = { analytics: status.analytics };
          tmp18Result13 = tmp18(tmp2(17084).VibegrationsDebugAgentAnalyticsRows, obj44);
        }
        items20[1] = tmp18Result13;
        obj38.children = items20;
        let tmp16Result8 = tmp16(tmp2(17073).DebugSection, obj38);
      } else {
        let analytics1;
        if (status != null) {
          analytics1 = status.analytics;
        }
        tmp16Result8 = null;
      }
      items12[5] = tmp16Result8;
      let tmp16Result9 = null;
      if (null != limits) {
        const obj45 = { title: null, children: null };
        const intl25 = tmp2(1119).intl;
        obj45.title = intl25.string(tmp20(3682)["EmSF+A"]);
        const obj46 = { label: null, value: null };
        const intl26 = tmp2(1119).intl;
        obj46.label = intl26.string(tmp20(3682)["5iHZLk"]);
        obj46.value = tmp2(17070).formatCount(limits.max_iterations);
        const items21 = [tmp18(tmp2(17073).DebugStatRow, obj46), , , , , , ];
        const obj47 = { label: null, value: null };
        const intl27 = tmp2(1119).intl;
        obj47.label = intl27.string(tmp20(3682).Rb6m3E);
        const tmp2Result79 = tmp2(17070);
        obj47.value = tmp2(17070).formatCount(limits.max_subagent_iterations);
        items21[1] = tmp18(tmp2(17073).DebugStatRow, obj47);
        const obj48 = { label: null, value: null };
        const intl28 = tmp2(1119).intl;
        obj48.label = intl28.string(tmp20(3682).WQ9pMe);
        const intl29 = tmp2(1119).intl;
        const obj49 = { count: null };
        const tmp2Result80 = tmp2(17070);
        obj49.count = tmp2(17070).formatCount(limits.context_window_tokens);
        obj48.value = intl29.formatToPlainString(tmp20(3682).U98VaN, obj49);
        items21[2] = tmp18(tmp2(17073).DebugStatRow, obj48);
        const obj50 = { label: null, value: null };
        const intl30 = tmp2(1119).intl;
        obj50.label = intl30.string(tmp20(3682).iEAvzu);
        const intl31 = tmp2(1119).intl;
        const obj51 = { count: null };
        const tmp2Result81 = tmp2(17070);
        obj51.count = tmp2(17070).formatCount(limits.per_turn_max_output_tokens);
        obj50.value = intl31.formatToPlainString(tmp20(3682).U98VaN, obj51);
        items21[3] = tmp18(tmp2(17073).DebugStatRow, obj50);
        const obj52 = { label: null, value: null };
        const intl32 = tmp2(1119).intl;
        obj52.label = intl32.string(tmp20(3682)["jbhs+f"]);
        const tmp2Result82 = tmp2(17070);
        obj52.value = tmp2(17070).formatCount(limits.max_user_message_chars);
        items21[4] = tmp18(tmp2(17073).DebugStatRow, obj52);
        const obj53 = { label: null, value: null };
        const intl33 = tmp2(1119).intl;
        obj53.label = intl33.string(tmp20(3682).TOQnq4);
        const tmp2Result83 = tmp2(17070);
        obj53.value = tmp2(17070).formatCount(limits.max_build_attempts);
        items21[5] = tmp18(tmp2(17073).DebugStatRow, obj53);
        const obj54 = { label: null, value: null };
        const intl34 = tmp2(1119).intl;
        obj54.label = intl34.string(tmp20(3682).RIDc6D);
        const tmp2Result84 = tmp2(17070);
        obj54.value = tmp2(17070).formatCount(limits.max_session_attempts);
        items21[6] = tmp18(tmp2(17073).DebugStatRow, obj54);
        obj45.children = items21;
        tmp16Result9 = tmp16(tmp2(17073).DebugSection, obj45);
        const tmp2Result85 = tmp2(17070);
      }
      items12[6] = tmp16Result9;
      obj6.children = items12;
      return tmp16(tmp17, obj6);
    } else {
      const obj55 = { title: null, children: null };
      const intl15 = tmp2(1119).intl;
      obj55.title = intl15.string(tmp20(3682).F5eP7e);
      if (0 === stateFromStores4.length) {
        const obj56 = { children: null };
        const intl17 = tmp2(1119).intl;
        obj56.children = intl17.string(tmp20(3682).j8NMgl);
        let tmp18Result14 = tmp18(tmp2(17073).DebugNote, obj56);
      } else {
        const substr = stateFromStores4.slice(-tmp2(17071).MAX_MODEL_CALL_ROWS);
        const reversed = substr.reverse();
        const items22 = [reversed.map((call) => closure_1_8(closure_1_13, { call }, call.id)), ];
        let tmp18Result15 = null;
        if (stateFromStores4.length > tmp2(17071).MAX_MODEL_CALL_ROWS) {
          const obj57 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl16 = tmp2(1119).intl;
          const obj58 = { shown: tmp2(17071).MAX_MODEL_CALL_ROWS, total: stateFromStores4.length };
          obj57.children = intl16.formatToPlainString(tmp20(3682)["3hYhpp"], obj58);
          tmp18Result15 = tmp18(tmp2(4754).Text, obj57);
        }
        const obj59 = { children: null };
        items22[1] = tmp18Result15;
        obj59.children = items22;
        tmp18Result14 = tmp16(closure_10, obj59);
      }
      obj55.children = tmp18Result14;
      tmp18(tmp2(17073).DebugSection, obj55);
    }
    const tmp2Result75 = tmp2(17071);
  }
  if (null != promptCeiling) {
    const intl8 = tmp2(1119).intl;
    const obj60 = { ceiling: tmp2(17070).formatCount(promptCeiling) };
    let formatToPlainStringResult = intl8.formatToPlainString(tmp20(3682).LKGmsP, obj60);
    const tmp2Result86 = tmp2(17070);
  } else {
    const intl7 = tmp2(1119).intl;
    formatToPlainStringResult = intl7.string(tmp20(3682).gPabB9);
  }
  tmp18Result17 = tmp18(tmp2(17073).DebugNote, { children: formatToPlainStringResult });
});
