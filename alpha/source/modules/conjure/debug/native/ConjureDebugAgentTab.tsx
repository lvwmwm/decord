// Module ID: 17222
// Function ID: 17223
// Name: ConjureDebugAgentTab
// Dependencies: [32, 19, 17, 13164, 13165, 21, 5091, 587, 17210, 1126, 3827, 17207, 6940, 558, 576, 504, 5376, 17208, 5087, 17221, 2]

// Module 17222 (ConjureDebugAgentTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
const forceCompaction = ConjureConnectionStore.forceCompaction;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tab: obj2, forceCompaction: obj3 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugAgentTab(projectId) {
  let fetchState;
  let first;
  let onRefresh;
  let status;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp7;
  let tmp8;
  const tmp = projectId;
  const tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(71);
  projectId = projectId.projectId;
  ({ status, fetchState, onRefresh } = projectId);
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    const items2 = [ConjureDebugStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
  }
  if (cResult[5] !== projectId) {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = tmp13;
    cResult[7] = items3;
    tmp12 = items3;
    tmp11 = tmp13;
  } else {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    tmp12 = cResult[7];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
    const items4 = [ConjureDebugStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    class S {
      constructor() {
        return closure_7.getLastTurnUsage(projectId);
      }
    }
  }
  if (cResult[9] !== projectId) {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = P;
    cResult[11] = items5;
    tmp17 = items5;
    tmp16 = P;
  } else {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp16, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items6 = [ConjureDebugStore];
    cResult[12] = items6;
    tmp19 = items6;
  } else {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
  }
  if (cResult[13] !== projectId) {
    class F {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    const items7 = [projectId];
    cResult[13] = projectId;
    cResult[14] = F;
    cResult[15] = items7;
    tmp21 = items7;
    tmp20 = F;
  } else {
    class F {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    tmp21 = cResult[15];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp19, tmp20, tmp21);
  if (cResult[16] !== projectId) {
    class O {
      constructor() {
        return forceCompaction(projectId);
      }
    }
    cResult[16] = projectId;
    cResult[17] = O;
  } else {
    class O {
      constructor() {
        return forceCompaction(projectId);
      }
    }
  }
  if (cResult[18] !== projectId) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    cResult[18] = projectId;
    cResult[19] = E;
  } else {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp26 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp28 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp30 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  let tmp31;
  if (stateFromStores1 != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (tmp31 == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (undefined != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    tmp31 = tmp32;
  }
  if (tmp31 == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (typeof stateFromStores3 === "object") {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (cResult[20] === fetchState) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  cResult[20] = fetchState;
  cResult[21] = onRefresh;
  cResult[22] = undefined;
  cResult[23] = closure_8(tmp(17210).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
  closure_8(tmp(17210).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
}) : (function ConjureDebugAgentTab(projectId) {
  let NCdUIh;
  let Vq3skS;
  let cache_hit_rate;
  let fetchState;
  let formatCount;
  let formatCount2;
  let formatCount3;
  let formatCount4;
  let formatCount5;
  let formatCountResult;
  let formatCountResult1;
  let formatCountResult2;
  let formatCountResult3;
  let formatCountResult4;
  let formatCountResult5;
  let formatCountResult6;
  let formatCountResult7;
  let formatCountResult8;
  let formatCountResult9;
  let formatToPlainString10;
  let formatToPlainString2;
  let formatToPlainString3;
  let formatToPlainString4;
  let formatToPlainString5;
  let formatToPlainString6;
  let formatToPlainString7;
  let formatToPlainString8;
  let formatToPlainString9;
  let formatToPlainStringResult;
  let intl;
  let intl10;
  let intl12;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl26;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl4;
  let intl41;
  let intl42;
  let intl43;
  let intl5;
  let intl6;
  let intl9;
  let items13;
  let items15;
  let items16;
  let items18;
  let items19;
  let mapped;
  let obj11;
  let obj13;
  let obj15;
  let obj21;
  let obj28;
  let obj30;
  let obj47;
  let obj49;
  let obj9;
  let onRefresh;
  let round;
  let string;
  let tmp16Result5;
  let tmp18Result7;
  let tmp20Result;
  let tmp2Result43;
  let tmp2Result44;
  let tmp2Result46;
  let tmp2Result49;
  let tmp2Result51;
  let tmp2Result54;
  let tmp2Result57;
  let tmp2Result60;
  let tmp2Result62;
  let tmp2Result65;
  let tmp2Result68;
  let tmp2Result69;
  let tmp2Result70;
  let tmp2Result72;
  let tmp2Result73;
  let tmp2Result74;
  let tmp2Result75;
  let tmp2Result76;
  let tmp2Result77;
  let tmp2Result78;
  let tmp2Result79;
  let tmp2Result80;
  let tmp2Result81;
  let tmp2Result82;
  let tmp2Result83;
  let tmp2Result84;
  let turn_inflight;
  let v6ngCax;
  let yHJxuP;
  let yHJxuP2;
  let yHJxuP3;
  let yHJxuP4;
  let yHJxuP5;
  let yHJxuP6;
  projectId = projectId.projectId;
  const status = projectId.status;
  ({ fetchState, onRefresh } = projectId);
  const tmp = closure_11();
  const tmp2 = projectId;
  let obj = projectId(504);
  const items = [ConjureDebugStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(projectId), items1);
  const items2 = [ConjureDebugStore];
  const items3 = [projectId];
  const obj2 = projectId(504);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(projectId), items3);
  const items4 = [ConjureDebugStore];
  const items5 = [projectId];
  const obj3 = projectId(504);
  const stateFromStores2 = obj3.useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(projectId), items5);
  const items6 = [ConjureDebugStore];
  const items7 = [projectId];
  const obj4 = projectId(504);
  const stateFromStores3 = obj4.useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(projectId), items7);
  const items8 = [projectId];
  const items9 = [projectId];
  const callback = react.useCallback(() => forceCompaction(projectId), items8);
  let lifetime;
  const callback1 = react.useCallback(() => forceCompaction(projectId, true), items9);
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
  const obj5 = { style: tmp.tab, children: null };
  let generated_at;
  const DebugSnapshotToolbar = tmp2(17210).DebugSnapshotToolbar;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items10 = [closure_8(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , ];
  const obj6 = { title: intl.string(_modDef3827.JghNal), children: tmp16Result5 };
  const DebugSection = tmp2(17210).DebugSection;
  intl = tmp2(1126).intl;
  if (null == lifetime) {
    const obj7 = { children: intl3.string(_modDef3827.s0U5Fv) };
    const DebugNote = tmp2(17210).DebugNote;
    intl3 = tmp2(1126).intl;
    tmp16Result5 = tmp18(DebugNote, obj7);
  } else {
    const obj8 = { label: intl31.string(_modDef3827["9nqym2"]), value: formatCount(tmp2Result43.runesFromUsd(lifetime.cost_usd)), hint: formatToPlainString6(NCdUIh, obj9) };
    const DebugStatRow14 = tmp2(17210).DebugStatRow;
    intl31 = tmp2(1126).intl;
    formatCount = tmp2(17207).formatCount;
    tmp2(17207);
    tmp2Result43 = tmp2(6940);
    const intl32 = tmp2(1126).intl;
    formatToPlainString6 = intl32.formatToPlainString;
    obj9 = { count: tmp2Result44.formatCount(lifetime.turns) };
    NCdUIh = tmp20(3827).NCdUIh;
    tmp2Result44 = tmp2(17207);
    const items11 = [closure_8(DebugStatRow14, obj8), , , , ];
    const intl33 = tmp2(1126).intl;
    const orchestrator = lifetime.orchestrator;
    const obj10 = { label: intl33.string(_modDef3827.xtxP0e), value: formatToPlainString7(yHJxuP3, obj11), hint: "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp2Result49.formatCount(orchestrator.cache_read_input_tokens) + " cache read" };
    intl33.string(_modDef3827.xtxP0e);
    const DebugStatRow15 = tmp2(17210).DebugStatRow;
    const intl34 = tmp2(1126).intl;
    formatToPlainString7 = intl34.formatToPlainString;
    obj11 = { count: formatCount2(tmp2Result46.runeCount(orchestrator)) };
    yHJxuP3 = tmp20(3827).yHJxuP;
    formatCount2 = tmp2(17207).formatCount;
    tmp2(17207);
    tmp2Result46 = tmp2(6940);
    const tmp2Result47 = tmp2(17207);
    formatCountResult = tmp2Result47.formatCount(orchestrator.input_tokens);
    const tmp2Result48 = tmp2(17207);
    const _HermesInternal4 = HermesInternal;
    formatCountResult1 = tmp2Result48.formatCount(orchestrator.output_tokens);
    tmp2Result49 = tmp2(17207);
    items11[1] = closure_8(DebugStatRow15, obj10);
    const intl35 = tmp2(1126).intl;
    const codegen = lifetime.codegen;
    const obj12 = { label: intl35.string(_modDef3827["9Sj3SX"]), value: formatToPlainString8(yHJxuP4, obj13), hint: "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp2Result54.formatCount(codegen.cache_read_input_tokens) + " cache read" };
    intl35.string(_modDef3827["9Sj3SX"]);
    const DebugStatRow16 = tmp2(17210).DebugStatRow;
    const intl36 = tmp2(1126).intl;
    formatToPlainString8 = intl36.formatToPlainString;
    obj13 = { count: formatCount3(tmp2Result51.runeCount(codegen)) };
    yHJxuP4 = tmp20(3827).yHJxuP;
    formatCount3 = tmp2(17207).formatCount;
    tmp2(17207);
    tmp2Result51 = tmp2(6940);
    const tmp2Result52 = tmp2(17207);
    formatCountResult2 = tmp2Result52.formatCount(codegen.input_tokens);
    const tmp2Result53 = tmp2(17207);
    const _HermesInternal5 = HermesInternal;
    formatCountResult3 = tmp2Result53.formatCount(codegen.output_tokens);
    tmp2Result54 = tmp2(17207);
    items11[2] = closure_8(DebugStatRow16, obj12);
    const intl37 = tmp2(1126).intl;
    const stringResult2 = intl37.string(_modDef3827.ANCEo3);
    const tmp2Result55 = tmp2(6940);
    const usageOrEmptyResult = tmp2Result55.usageOrEmpty(lifetime.compaction);
    const obj14 = { label: stringResult2, value: formatToPlainString9(yHJxuP5, obj15), hint: "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp2Result60.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read" };
    const DebugStatRow17 = tmp2(17210).DebugStatRow;
    const intl38 = tmp2(1126).intl;
    formatToPlainString9 = intl38.formatToPlainString;
    obj15 = { count: formatCount4(tmp2Result57.runeCount(usageOrEmptyResult)) };
    yHJxuP5 = tmp20(3827).yHJxuP;
    formatCount4 = tmp2(17207).formatCount;
    tmp2(17207);
    tmp2Result57 = tmp2(6940);
    const tmp2Result58 = tmp2(17207);
    formatCountResult4 = tmp2Result58.formatCount(usageOrEmptyResult.input_tokens);
    const tmp2Result59 = tmp2(17207);
    const _HermesInternal6 = HermesInternal;
    formatCountResult5 = tmp2Result59.formatCount(usageOrEmptyResult.output_tokens);
    tmp2Result60 = tmp2(17207);
    items11[3] = closure_8(DebugStatRow17, obj14);
    let outcomes;
    const tmp45 = closure_9;
    if (status != null) {
      const agent4 = status.agent;
      if (agent4 != null) {
        outcomes = agent4.outcomes;
      }
    }
    let tmp18Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp18Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj16 = { label: intl2.string(_modDef3827.SQHm7C), value: mapped.join(" \u00B7 ") };
        const DebugStatRow = tmp2(17210).DebugStatRow;
        intl2 = tmp2(1126).intl;
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          let tmp;
          let tmp2;
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        mapped = sorted.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          const obj = projectId(dependencyMap[11]);
          return "" + obj.formatCount(tmp2) + " " + tmp;
        });
        tmp18Result6 = tmp18(DebugStatRow, obj16);
      }
    }
    const obj17 = { children: items11 };
    items11[4] = tmp18Result6;
    tmp16Result5 = tmp16(tmp45, obj17);
  }
  items10[1] = closure_8(DebugSection, obj6);
  const obj18 = { title: intl4.string(_modDef3827.dZHPE5), children: tmp18Result7 };
  const DebugSection2 = tmp2(17210).DebugSection;
  intl4 = tmp2(1126).intl;
  if (null == stateFromStores) {
    const obj19 = { children: intl5.string(_modDef3827.DfVjal) };
    const DebugNote2 = tmp2(17210).DebugNote;
    intl5 = tmp2(1126).intl;
    tmp18Result7 = tmp18(DebugNote2, obj19);
  } else {
    const intl39 = tmp2(1126).intl;
    const total = stateFromStores.total;
    const obj20 = { label: intl39.string(_modDef3827["7X3i9d"]), value: formatToPlainString10(yHJxuP6, obj21), hint: "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp2Result65.formatCount(total.cache_read_input_tokens) + " cache read" };
    intl39.string(_modDef3827["7X3i9d"]);
    const DebugStatRow18 = tmp2(17210).DebugStatRow;
    const intl40 = tmp2(1126).intl;
    formatToPlainString10 = intl40.formatToPlainString;
    obj21 = { count: formatCount5(tmp2Result62.runeCount(total)) };
    yHJxuP6 = tmp20(3827).yHJxuP;
    formatCount5 = tmp2(17207).formatCount;
    tmp2(17207);
    tmp2Result62 = tmp2(6940);
    const tmp2Result63 = tmp2(17207);
    formatCountResult6 = tmp2Result63.formatCount(total.input_tokens);
    const tmp2Result64 = tmp2(17207);
    const _HermesInternal7 = HermesInternal;
    formatCountResult7 = tmp2Result64.formatCount(total.output_tokens);
    tmp2Result65 = tmp2(17207);
    const items12 = [closure_8(DebugStatRow18, obj20), ];
    const obj22 = { label: intl41.string(_modDef3827["8OUg09"]), value: "" + round(100 * cache_hit_rate) + "%" };
    const DebugStatRow19 = tmp2(17210).DebugStatRow;
    intl41 = tmp2(1126).intl;
    cache_hit_rate = stateFromStores.cache_hit_rate;
    const _Math = Math;
    round = Math.round;
    const tmp64 = closure_9;
    if (cache_hit_rate == null) {
      const tmp2Result66 = tmp2(6940);
      cache_hit_rate = tmp2Result66.cacheHitRate(stateFromStores.total);
    }
    const _HermesInternal = HermesInternal;
    const obj23 = { children: items12 };
    items12[1] = closure_8(DebugStatRow19, obj22);
    tmp18Result7 = tmp16(tmp64, obj23);
  }
  items10[2] = closure_8(DebugSection2, obj18);
  const obj24 = { title: intl6.string(_modDef3827.NbRk9a), children: null };
  const DebugSection3 = tmp2(17210).DebugSection;
  intl6 = tmp2(1126).intl;
  if (null != stateFromStores1) {
    let tmp18Result11;
    let tmp16Result8;
    if (null != promptCeiling) {
      const obj25 = { children: items13 };
      const obj26 = { label: intl9.string(_modDef3827.Kw5wiQ), used: stateFromStores1.tokensAfter, max: promptCeiling, formatValue: tmp2(17207).formatCount };
      const DebugMeter = tmp2(17210).DebugMeter;
      intl9 = tmp2(1126).intl;
      items13 = [closure_8(DebugMeter, obj26), ];
      const obj27 = { label: intl10.string(_modDef3827.mRbSns), value: "" + formatCountResult8 + " \u2192 " + tmp2Result68.formatCount(stateFromStores1.tokensAfter), hint: formatToPlainString2(Vq3skS, obj28) };
      const DebugStatRow2 = tmp2(17210).DebugStatRow;
      intl10 = tmp2(1126).intl;
      const tmp2Result67 = tmp2(17207);
      const _HermesInternal2 = HermesInternal;
      formatCountResult8 = tmp2Result67.formatCount(stateFromStores1.tokensBefore);
      tmp2Result68 = tmp2(17207);
      const intl11 = tmp2(1126).intl;
      formatToPlainString2 = intl11.formatToPlainString;
      obj28 = { count: tmp2Result69.formatCount(stateFromStores1.retainedMessages), time: tmp2Result70.formatObservedAt(stateFromStores1.observedAt) };
      Vq3skS = tmp20(3827).Vq3skS;
      tmp2Result69 = tmp2(17207);
      tmp2Result70 = tmp2(17207);
      items13[1] = closure_8(DebugStatRow2, obj27);
      tmp18Result11 = tmp16(closure_9, obj25);
    }
    const items14 = [tmp18Result11, , ];
    let tmp18Result8 = null;
    if (null != stateFromStores2) {
      const obj29 = { label: intl12.string(_modDef3827["4BX5KK"]), value: "" + formatCountResult9 + " / " + tmp2Result72.formatCount(stateFromStores2.threshold), critical: true, hint: formatToPlainString3(v6ngCax, obj30) };
      const DebugStatRow3 = tmp2(17210).DebugStatRow;
      intl12 = tmp2(1126).intl;
      const tmp2Result71 = tmp2(17207);
      const _HermesInternal3 = HermesInternal;
      formatCountResult9 = tmp2Result71.formatCount(stateFromStores2.projected);
      tmp2Result72 = tmp2(17207);
      const intl13 = tmp2(1126).intl;
      formatToPlainString3 = intl13.formatToPlainString;
      obj30 = { time: tmp2Result73.formatObservedAt(stateFromStores2.observedAt) };
      v6ngCax = tmp20(3827)["6ngCax"];
      tmp2Result73 = tmp2(17207);
      tmp18Result8 = tmp18(DebugStatRow3, obj29);
    }
    items14[1] = tmp18Result8;
    const obj31 = { style: tmp.forceCompaction, children: items15 };
    const obj32 = { variant: "secondary", size: "sm", text: intl14.string(_modDef3827["1EiJeb"]), disabled: "pending" === stateFromStores3, onPress: callback };
    const Button = tmp2(5376).Button;
    intl14 = tmp2(1126).intl;
    items15 = [closure_8(Button, obj32), , ];
    let str9 = "text-muted";
    const Text = tmp2(5087).Text;
    if (null != tmp15) {
      str9 = "text-muted";
      if ("compacted" !== tmp15.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj33 = { variant: "text-xs/normal", color: str9, children: tmp2Result74.forceCompactionStatus(stateFromStores3) };
    tmp2Result74 = tmp2(17208);
    items15[1] = closure_8(Text, obj33);
    let pendingTurn;
    if (tmp15 != null) {
      pendingTurn = tmp15.pendingTurn;
    }
    let tmp16Result6 = null;
    if (true === pendingTurn) {
      const obj34 = { children: items16 };
      const obj35 = { variant: "critical-primary", size: "sm", text: intl42.string(_modDef3827.ZxG2AI), onPress: callback1 };
      const Button2 = tmp2(5376).Button;
      intl42 = tmp2(1126).intl;
      items16 = [closure_8(Button2, obj35), ];
      const obj36 = { variant: "text-xs/normal", color: "text-muted", children: intl43.string(_modDef3827.V73vdN) };
      const Text2 = tmp2(5087).Text;
      intl43 = tmp2(1126).intl;
      items16[1] = closure_8(Text2, obj36);
      tmp16Result6 = tmp16(closure_9, obj34);
    }
    items15[2] = tmp16Result6;
    items14[2] = closure_10(View, obj31);
    obj24.children = items14;
    items10[3] = closure_10(DebugSection3, obj24);
    if (null != session) {
      const obj37 = { title: intl15.string(_modDef3827.EsSzCS), children: items18 };
      const DebugSection4 = tmp2(17210).DebugSection;
      intl15 = tmp2(1126).intl;
      let tmp16Result7 = null;
      if (null != session) {
        const obj38 = { label: intl16.string(_modDef3827.CLXHAs), value: tmp2Result75.formatObservedAt(session.instance_since), hint: intl17.string(_modDef3827.UCwUEX) };
        const DebugStatRow4 = tmp2(17210).DebugStatRow;
        intl16 = tmp2(1126).intl;
        tmp2Result75 = tmp2(17207);
        intl17 = tmp2(1126).intl;
        const items17 = [closure_8(DebugStatRow4, obj38), , , ];
        const obj39 = { label: intl18.string(_modDef3827["8V8e1Z"]), value: tmp2Result76.formatCount(session.sockets) };
        const DebugStatRow5 = tmp2(17210).DebugStatRow;
        intl18 = tmp2(1126).intl;
        tmp2Result76 = tmp2(17207);
        items17[1] = closure_8(DebugStatRow5, obj39);
        const obj40 = { label: intl19.string(_modDef3827["4pBzYW"]), value: string(turn_inflight ? tmp20Result.Wv025I : tmp20Result["7/lsFY"]) };
        const DebugStatRow6 = tmp2(17210).DebugStatRow;
        intl19 = tmp2(1126).intl;
        const intl20 = tmp2(1126).intl;
        string = intl20.string;
        turn_inflight = session.turn_inflight;
        tmp20Result = _modDef3827;
        items17[2] = closure_8(DebugStatRow6, obj40);
        let tmp18Result9 = null;
        const tmp39 = closure_9;
        if (session.queued_messages > 0) {
          const obj41 = { label: intl21.string(_modDef3827["3oUYnv"]), value: tmp2Result77.formatCount(session.queued_messages) };
          const DebugStatRow7 = tmp2(17210).DebugStatRow;
          intl21 = tmp2(1126).intl;
          tmp2Result77 = tmp2(17207);
          tmp18Result9 = tmp18(DebugStatRow7, obj41);
        }
        const obj42 = { children: items17 };
        items17[3] = tmp18Result9;
        tmp16Result7 = tmp16(tmp39, obj42);
      }
      items18 = [tmp16Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp18Result10 = null;
      if (null != analytics) {
        const obj43 = { analytics: status.analytics };
        tmp18Result10 = tmp18(tmp2(17221).ConjureDebugAgentAnalyticsRows, obj43);
      }
      items18[1] = tmp18Result10;
      tmp16Result8 = tmp16(DebugSection4, obj37);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp16Result8 = null;
    }
    items10[4] = tmp16Result8;
    let tmp16Result9 = null;
    if (null != limits) {
      const obj44 = { title: intl22.string(_modDef3827["LEIhp/"]), children: items19 };
      const DebugSection5 = tmp2(17210).DebugSection;
      intl22 = tmp2(1126).intl;
      const obj45 = { label: intl23.string(_modDef3827.IlDBN3), value: tmp2Result78.formatCount(limits.max_subagent_iterations) };
      const DebugStatRow8 = tmp2(17210).DebugStatRow;
      intl23 = tmp2(1126).intl;
      tmp2Result78 = tmp2(17207);
      items19 = [closure_8(DebugStatRow8, obj45), , , , , ];
      const obj46 = { label: intl24.string(_modDef3827["ZdzKR+"]), value: formatToPlainString4(yHJxuP, obj47) };
      const DebugStatRow9 = tmp2(17210).DebugStatRow;
      intl24 = tmp2(1126).intl;
      const intl25 = tmp2(1126).intl;
      formatToPlainString4 = intl25.formatToPlainString;
      obj47 = { count: tmp2Result79.formatCount(limits.context_window_tokens) };
      yHJxuP = tmp20(3827).yHJxuP;
      tmp2Result79 = tmp2(17207);
      items19[1] = closure_8(DebugStatRow9, obj46);
      const obj48 = { label: intl26.string(_modDef3827.cIhN2W), value: formatToPlainString5(yHJxuP2, obj49) };
      const DebugStatRow10 = tmp2(17210).DebugStatRow;
      intl26 = tmp2(1126).intl;
      const intl27 = tmp2(1126).intl;
      formatToPlainString5 = intl27.formatToPlainString;
      obj49 = { count: tmp2Result80.formatCount(limits.per_turn_max_output_tokens) };
      yHJxuP2 = tmp20(3827).yHJxuP;
      tmp2Result80 = tmp2(17207);
      items19[2] = closure_8(DebugStatRow10, obj48);
      const obj50 = { label: intl28.string(_modDef3827["+fOn/q"]), value: tmp2Result81.formatCount(limits.max_user_message_chars) };
      const DebugStatRow11 = tmp2(17210).DebugStatRow;
      intl28 = tmp2(1126).intl;
      tmp2Result81 = tmp2(17207);
      items19[3] = closure_8(DebugStatRow11, obj50);
      const obj51 = { label: intl29.string(_modDef3827.kIHga0), value: tmp2Result82.formatCount(limits.max_build_attempts) };
      const DebugStatRow12 = tmp2(17210).DebugStatRow;
      intl29 = tmp2(1126).intl;
      tmp2Result82 = tmp2(17207);
      items19[4] = closure_8(DebugStatRow12, obj51);
      const obj52 = { label: intl30.string(_modDef3827.Iw03yW), value: tmp2Result83.formatCount(limits.max_session_attempts) };
      const DebugStatRow13 = tmp2(17210).DebugStatRow;
      intl30 = tmp2(1126).intl;
      tmp2Result83 = tmp2(17207);
      items19[5] = closure_8(DebugStatRow13, obj52);
      tmp16Result9 = tmp16(DebugSection5, obj44);
    }
    items10[5] = tmp16Result9;
    obj5.children = items10;
    return closure_10(View, obj5);
  }
  const DebugNote3 = tmp2(17210).DebugNote;
  if (null != promptCeiling) {
    const intl8 = tmp2(1126).intl;
    const formatToPlainString = intl8.formatToPlainString;
    const obj53 = { ceiling: tmp2Result84.formatCount(promptCeiling) };
    const GMLCNv = tmp20(3827).GMLCNv;
    tmp2Result84 = tmp2(17207);
    formatToPlainStringResult = formatToPlainString(GMLCNv, obj53);
  } else {
    const intl7 = tmp2(1126).intl;
    formatToPlainStringResult = intl7.string(tmp20(3827).s0U5Fv);
  }
  tmp18Result11 = tmp18(DebugNote3, { children: formatToPlainStringResult });
});
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default tmp4;
