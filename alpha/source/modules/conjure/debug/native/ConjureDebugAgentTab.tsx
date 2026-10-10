// Module ID: 17294
// Function ID: 17295
// Name: ConjureDebugAgentTab
// Dependencies: [32, 19, 17, 12996, 13213, 13214, 21, 5092, 587, 17291, 1126, 3849, 17288, 6946, 558, 576, 504, 5379, 17289, 5088, 17293, 2]

// Module 17294 (ConjureDebugAgentTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 12996 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13213 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13214 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ forceCompaction: metroImportDefault, restartConjureSandbox: metroImportAll } = ConjureConnectionStore);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tab: obj2, forceCompaction: obj3 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugAgentTab(projectId) {
  let fetchState;
  let first;
  let onRefresh;
  let status;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp7;
  let tmp8;
  const tmp = projectId;
  const tmp2 = dependencyMap;
  let obj = projectId(576);
  const cResult = obj.c(96);
  projectId = projectId.projectId;
  ({ status, fetchState, onRefresh } = projectId);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function b() {
      return ConjureDebugStore.getLastTurnUsage(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureDebugStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function k() {
      return ConjureDebugStore.getLastCompaction(projectId);
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [ConjureDebugStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== projectId) {
    class A {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(projectId);
      }
    }
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = A;
    cResult[11] = items5;
    tmp18 = items5;
    tmp17 = A;
  } else {
    class A {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(projectId);
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult7 = tmp(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(projectId);
      }
    }
    const items6 = [ConjureDebugStore];
    cResult[12] = items6;
    tmp20 = items6;
  } else {
    class A {
      constructor() {
        return ConjureDebugStore.getLastCompactionDecline(projectId);
      }
    }
  }
  if (cResult[13] !== projectId) {
    class U {
      constructor() {
        return ConjureDebugStore.getForceCompactionState(projectId);
      }
    }
    const items7 = [projectId];
    cResult[13] = projectId;
    cResult[14] = U;
    cResult[15] = items7;
    tmp22 = items7;
    tmp21 = U;
  } else {
    class U {
      constructor() {
        return ConjureDebugStore.getForceCompactionState(projectId);
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult8 = tmp(504);
  const stateFromStores3 = tmpResult8.useStateFromStores(tmp20, tmp21, tmp22);
  if (cResult[16] !== projectId) {
    class B {
      constructor() {
        return metroImportDefault(projectId);
      }
    }
    cResult[16] = projectId;
    cResult[17] = B;
  } else {
    class B {
      constructor() {
        return metroImportDefault(projectId);
      }
    }
  }
  if (cResult[18] !== projectId) {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
    cResult[18] = projectId;
    cResult[19] = H;
  } else {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
    const items8 = [ConjureDebugStore];
    cResult[20] = items8;
    tmp26 = items8;
  } else {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
  }
  if (cResult[21] !== projectId) {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
    const items9 = [projectId];
    cResult[21] = projectId;
    cResult[22] = tmp29;
    cResult[23] = items9;
    tmp28 = items9;
    tmp27 = tmp29;
  } else {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
    tmp28 = cResult[23];
  }
  const tmpResult9 = tmp(504);
  const stateFromStores4 = tmpResult9.useStateFromStores(tmp26, tmp27, tmp28);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
    const items10 = [ConjureChatStore];
    cResult[24] = items10;
    tmp31 = items10;
  } else {
    class H {
      constructor() {
        return metroImportDefault(projectId, true);
      }
    }
  }
  if (cResult[25] !== projectId) {
    class M {
      constructor() {
        return ConjureChatStore.isThinking(projectId);
      }
    }
    const items11 = [projectId];
    cResult[25] = projectId;
    cResult[26] = M;
    cResult[27] = items11;
    tmp33 = items11;
    tmp32 = M;
  } else {
    class M {
      constructor() {
        return ConjureChatStore.isThinking(projectId);
      }
    }
    tmp33 = cResult[27];
  }
  const tmpResult10 = tmp(504);
  const stateFromStores5 = tmpResult10.useStateFromStores(tmp31, tmp32, tmp33);
  if (cResult[28] !== projectId) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    cResult[28] = projectId;
    cResult[29] = Z;
  } else {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (status != null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    if (tmp37 != null) {
      class Z {
        constructor() {
          return metroImportAll(projectId);
        }
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (status != null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    if (tmp39 != null) {
      class Z {
        constructor() {
          return metroImportAll(projectId);
        }
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (status != null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    if (tmp41 != null) {
      class Z {
        constructor() {
          return metroImportAll(projectId);
        }
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  let tmp42;
  if (stateFromStores1 != null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (tmp42 == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
    if (undefined != null) {
      class Z {
        constructor() {
          return metroImportAll(projectId);
        }
      }
    }
    tmp42 = tmp43;
  }
  if (tmp42 == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (typeof stateFromStores3 === "object") {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (status != null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (undefined == null) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  if (cResult[30] === fetchState) {
    class Z {
      constructor() {
        return metroImportAll(projectId);
      }
    }
  }
  cResult[30] = fetchState;
  cResult[31] = onRefresh;
  cResult[32] = undefined;
  cResult[33] = closure_10(tmp(17291).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
  closure_10(tmp(17291).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
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
  let intl20;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl27;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl4;
  let intl42;
  let intl43;
  let intl44;
  let intl5;
  let intl6;
  let intl9;
  let items18;
  let items20;
  let items21;
  let items22;
  let items24;
  let items25;
  let mapped;
  let obj11;
  let obj13;
  let obj15;
  let obj17;
  let obj23;
  let obj30;
  let obj32;
  let obj52;
  let obj54;
  let onRefresh;
  let round;
  let string;
  let tmp19Result5;
  let tmp21Result7;
  let tmp23Result;
  let tmp2Result44;
  let tmp2Result45;
  let tmp2Result47;
  let tmp2Result50;
  let tmp2Result52;
  let tmp2Result55;
  let tmp2Result58;
  let tmp2Result61;
  let tmp2Result63;
  let tmp2Result66;
  let tmp2Result69;
  let tmp2Result70;
  let tmp2Result71;
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
  let tmp2Result85;
  let tmp2Result86;
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
  const tmp = closure_13();
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
  const callback = react.useCallback(() => metroImportDefault(projectId), items8);
  const callback1 = react.useCallback(() => metroImportDefault(projectId, true), items9);
  const items10 = [ConjureDebugStore];
  const items11 = [projectId];
  const obj5 = projectId(504);
  const stateFromStores4 = obj5.useStateFromStores(items10, () => ConjureDebugStore.getSandboxRestartState(projectId), items11);
  const items12 = [ConjureChatStore];
  const items13 = [projectId];
  const items14 = [projectId];
  const obj6 = projectId(504);
  const stateFromStores5 = obj6.useStateFromStores(items12, () => ConjureChatStore.isThinking(projectId), items13);
  let lifetime;
  const callback2 = react.useCallback(() => metroImportAll(projectId), items14);
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
  let tmp18 = null;
  if (typeof stateFromStores3 === "object") {
    tmp18 = stateFromStores3;
  }
  const obj7 = { style: tmp.tab, children: null };
  let generated_at;
  const DebugSnapshotToolbar = tmp2(17291).DebugSnapshotToolbar;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items15 = [closure_10(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , ];
  const obj8 = { title: intl.string(_modDef3849.JghNal), children: tmp19Result5 };
  const DebugSection = tmp2(17291).DebugSection;
  intl = tmp2(1126).intl;
  if (null == lifetime) {
    const obj9 = { children: intl3.string(_modDef3849.s0U5Fv) };
    const DebugNote = tmp2(17291).DebugNote;
    intl3 = tmp2(1126).intl;
    tmp19Result5 = tmp21(DebugNote, obj9);
  } else {
    const obj10 = { label: intl32.string(_modDef3849["9nqym2"]), value: formatCount(tmp2Result44.runesFromUsd(lifetime.cost_usd)), hint: formatToPlainString6(NCdUIh, obj11) };
    const DebugStatRow14 = tmp2(17291).DebugStatRow;
    intl32 = tmp2(1126).intl;
    formatCount = tmp2(17288).formatCount;
    tmp2(17288);
    tmp2Result44 = tmp2(6946);
    const intl33 = tmp2(1126).intl;
    formatToPlainString6 = intl33.formatToPlainString;
    obj11 = { count: tmp2Result45.formatCount(lifetime.turns) };
    NCdUIh = tmp23(3849).NCdUIh;
    tmp2Result45 = tmp2(17288);
    const items16 = [closure_10(DebugStatRow14, obj10), , , , ];
    const intl34 = tmp2(1126).intl;
    const orchestrator = lifetime.orchestrator;
    const obj12 = { label: intl34.string(_modDef3849.xtxP0e), value: formatToPlainString7(yHJxuP3, obj13), hint: "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp2Result50.formatCount(orchestrator.cache_read_input_tokens) + " cache read" };
    intl34.string(_modDef3849.xtxP0e);
    const DebugStatRow15 = tmp2(17291).DebugStatRow;
    const intl35 = tmp2(1126).intl;
    formatToPlainString7 = intl35.formatToPlainString;
    obj13 = { count: formatCount2(tmp2Result47.runeCount(orchestrator)) };
    yHJxuP3 = tmp23(3849).yHJxuP;
    formatCount2 = tmp2(17288).formatCount;
    tmp2(17288);
    tmp2Result47 = tmp2(6946);
    const tmp2Result48 = tmp2(17288);
    formatCountResult = tmp2Result48.formatCount(orchestrator.input_tokens);
    const tmp2Result49 = tmp2(17288);
    const _HermesInternal4 = HermesInternal;
    formatCountResult1 = tmp2Result49.formatCount(orchestrator.output_tokens);
    tmp2Result50 = tmp2(17288);
    items16[1] = closure_10(DebugStatRow15, obj12);
    const intl36 = tmp2(1126).intl;
    const codegen = lifetime.codegen;
    const obj14 = { label: intl36.string(_modDef3849["9Sj3SX"]), value: formatToPlainString8(yHJxuP4, obj15), hint: "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp2Result55.formatCount(codegen.cache_read_input_tokens) + " cache read" };
    intl36.string(_modDef3849["9Sj3SX"]);
    const DebugStatRow16 = tmp2(17291).DebugStatRow;
    const intl37 = tmp2(1126).intl;
    formatToPlainString8 = intl37.formatToPlainString;
    obj15 = { count: formatCount3(tmp2Result52.runeCount(codegen)) };
    yHJxuP4 = tmp23(3849).yHJxuP;
    formatCount3 = tmp2(17288).formatCount;
    tmp2(17288);
    tmp2Result52 = tmp2(6946);
    const tmp2Result53 = tmp2(17288);
    formatCountResult2 = tmp2Result53.formatCount(codegen.input_tokens);
    const tmp2Result54 = tmp2(17288);
    const _HermesInternal5 = HermesInternal;
    formatCountResult3 = tmp2Result54.formatCount(codegen.output_tokens);
    tmp2Result55 = tmp2(17288);
    items16[2] = closure_10(DebugStatRow16, obj14);
    const intl38 = tmp2(1126).intl;
    const stringResult2 = intl38.string(_modDef3849.ANCEo3);
    const tmp2Result56 = tmp2(6946);
    const usageOrEmptyResult = tmp2Result56.usageOrEmpty(lifetime.compaction);
    const obj16 = { label: stringResult2, value: formatToPlainString9(yHJxuP5, obj17), hint: "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp2Result61.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read" };
    const DebugStatRow17 = tmp2(17291).DebugStatRow;
    const intl39 = tmp2(1126).intl;
    formatToPlainString9 = intl39.formatToPlainString;
    obj17 = { count: formatCount4(tmp2Result58.runeCount(usageOrEmptyResult)) };
    yHJxuP5 = tmp23(3849).yHJxuP;
    formatCount4 = tmp2(17288).formatCount;
    tmp2(17288);
    tmp2Result58 = tmp2(6946);
    const tmp2Result59 = tmp2(17288);
    formatCountResult4 = tmp2Result59.formatCount(usageOrEmptyResult.input_tokens);
    const tmp2Result60 = tmp2(17288);
    const _HermesInternal6 = HermesInternal;
    formatCountResult5 = tmp2Result60.formatCount(usageOrEmptyResult.output_tokens);
    tmp2Result61 = tmp2(17288);
    items16[3] = closure_10(DebugStatRow17, obj16);
    let outcomes;
    const tmp49 = closure_11;
    if (status != null) {
      const agent4 = status.agent;
      if (agent4 != null) {
        outcomes = agent4.outcomes;
      }
    }
    let tmp21Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp21Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj18 = { label: intl2.string(_modDef3849.SQHm7C), value: mapped.join(" \u00B7 ") };
        const DebugStatRow = tmp2(17291).DebugStatRow;
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
          const obj = projectId(dependencyMap[12]);
          return "" + obj.formatCount(tmp2) + " " + tmp;
        });
        tmp21Result6 = tmp21(DebugStatRow, obj18);
      }
    }
    const obj19 = { children: items16 };
    items16[4] = tmp21Result6;
    tmp19Result5 = tmp19(tmp49, obj19);
  }
  items15[1] = closure_10(DebugSection, obj8);
  const obj20 = { title: intl4.string(_modDef3849.dZHPE5), children: tmp21Result7 };
  const DebugSection2 = tmp2(17291).DebugSection;
  intl4 = tmp2(1126).intl;
  if (null == stateFromStores) {
    const obj21 = { children: intl5.string(_modDef3849.DfVjal) };
    const DebugNote2 = tmp2(17291).DebugNote;
    intl5 = tmp2(1126).intl;
    tmp21Result7 = tmp21(DebugNote2, obj21);
  } else {
    const intl40 = tmp2(1126).intl;
    const total = stateFromStores.total;
    const obj22 = { label: intl40.string(_modDef3849["7X3i9d"]), value: formatToPlainString10(yHJxuP6, obj23), hint: "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp2Result66.formatCount(total.cache_read_input_tokens) + " cache read" };
    intl40.string(_modDef3849["7X3i9d"]);
    const DebugStatRow18 = tmp2(17291).DebugStatRow;
    const intl41 = tmp2(1126).intl;
    formatToPlainString10 = intl41.formatToPlainString;
    obj23 = { count: formatCount5(tmp2Result63.runeCount(total)) };
    yHJxuP6 = tmp23(3849).yHJxuP;
    formatCount5 = tmp2(17288).formatCount;
    tmp2(17288);
    tmp2Result63 = tmp2(6946);
    const tmp2Result64 = tmp2(17288);
    formatCountResult6 = tmp2Result64.formatCount(total.input_tokens);
    const tmp2Result65 = tmp2(17288);
    const _HermesInternal7 = HermesInternal;
    formatCountResult7 = tmp2Result65.formatCount(total.output_tokens);
    tmp2Result66 = tmp2(17288);
    const items17 = [closure_10(DebugStatRow18, obj22), ];
    const obj24 = { label: intl42.string(_modDef3849["8OUg09"]), value: "" + round(100 * cache_hit_rate) + "%" };
    const DebugStatRow19 = tmp2(17291).DebugStatRow;
    intl42 = tmp2(1126).intl;
    cache_hit_rate = stateFromStores.cache_hit_rate;
    const _Math = Math;
    round = Math.round;
    const tmp68 = closure_11;
    if (cache_hit_rate == null) {
      const tmp2Result67 = tmp2(6946);
      cache_hit_rate = tmp2Result67.cacheHitRate(stateFromStores.total);
    }
    const _HermesInternal = HermesInternal;
    const obj25 = { children: items17 };
    items17[1] = closure_10(DebugStatRow19, obj24);
    tmp21Result7 = tmp19(tmp68, obj25);
  }
  items15[2] = closure_10(DebugSection2, obj20);
  const obj26 = { title: intl6.string(_modDef3849.NbRk9a), children: null };
  const DebugSection3 = tmp2(17291).DebugSection;
  intl6 = tmp2(1126).intl;
  if (null != stateFromStores1) {
    let tmp21Result11;
    let tmp19Result8;
    if (null != promptCeiling) {
      const obj27 = { children: items18 };
      const obj28 = { label: intl9.string(_modDef3849.Kw5wiQ), used: stateFromStores1.tokensAfter, max: promptCeiling, formatValue: tmp2(17288).formatCount };
      const DebugMeter = tmp2(17291).DebugMeter;
      intl9 = tmp2(1126).intl;
      items18 = [closure_10(DebugMeter, obj28), ];
      const obj29 = { label: intl10.string(_modDef3849.mRbSns), value: "" + formatCountResult8 + " \u2192 " + tmp2Result69.formatCount(stateFromStores1.tokensAfter), hint: formatToPlainString2(Vq3skS, obj30) };
      const DebugStatRow2 = tmp2(17291).DebugStatRow;
      intl10 = tmp2(1126).intl;
      const tmp2Result68 = tmp2(17288);
      const _HermesInternal2 = HermesInternal;
      formatCountResult8 = tmp2Result68.formatCount(stateFromStores1.tokensBefore);
      tmp2Result69 = tmp2(17288);
      const intl11 = tmp2(1126).intl;
      formatToPlainString2 = intl11.formatToPlainString;
      obj30 = { count: tmp2Result70.formatCount(stateFromStores1.retainedMessages), time: tmp2Result71.formatObservedAt(stateFromStores1.observedAt) };
      Vq3skS = tmp23(3849).Vq3skS;
      tmp2Result70 = tmp2(17288);
      tmp2Result71 = tmp2(17288);
      items18[1] = closure_10(DebugStatRow2, obj29);
      tmp21Result11 = tmp19(closure_11, obj27);
    }
    const items19 = [tmp21Result11, , , ];
    let tmp21Result8 = null;
    if (null != stateFromStores2) {
      const obj31 = { label: intl12.string(_modDef3849["4BX5KK"]), value: "" + formatCountResult9 + " / " + tmp2Result73.formatCount(stateFromStores2.threshold), critical: true, hint: formatToPlainString3(v6ngCax, obj32) };
      const DebugStatRow3 = tmp2(17291).DebugStatRow;
      intl12 = tmp2(1126).intl;
      const tmp2Result72 = tmp2(17288);
      const _HermesInternal3 = HermesInternal;
      formatCountResult9 = tmp2Result72.formatCount(stateFromStores2.projected);
      tmp2Result73 = tmp2(17288);
      const intl13 = tmp2(1126).intl;
      formatToPlainString3 = intl13.formatToPlainString;
      obj32 = { time: tmp2Result74.formatObservedAt(stateFromStores2.observedAt) };
      v6ngCax = tmp23(3849)["6ngCax"];
      tmp2Result74 = tmp2(17288);
      tmp21Result8 = tmp21(DebugStatRow3, obj31);
    }
    items19[1] = tmp21Result8;
    const obj33 = { style: tmp.forceCompaction, children: items20 };
    const obj34 = { variant: "secondary", size: "sm", text: intl14.string(_modDef3849["1EiJeb"]), disabled: "pending" === stateFromStores3, onPress: callback };
    const Button = tmp2(5379).Button;
    intl14 = tmp2(1126).intl;
    items20 = [closure_10(Button, obj34), , ];
    let str9 = "text-muted";
    const Text = tmp2(5088).Text;
    if (null != tmp18) {
      str9 = "text-muted";
      if ("compacted" !== tmp18.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj35 = { variant: "text-xs/normal", color: str9, children: tmp2Result75.forceCompactionStatus(stateFromStores3) };
    tmp2Result75 = tmp2(17289);
    items20[1] = closure_10(Text, obj35);
    let pendingTurn;
    if (tmp18 != null) {
      pendingTurn = tmp18.pendingTurn;
    }
    let tmp19Result6 = null;
    if (true === pendingTurn) {
      const obj36 = { children: items21 };
      const obj37 = { variant: "critical-primary", size: "sm", text: intl43.string(_modDef3849.ZxG2AI), onPress: callback1 };
      const Button3 = tmp2(5379).Button;
      intl43 = tmp2(1126).intl;
      items21 = [closure_10(Button3, obj37), ];
      const obj38 = { variant: "text-xs/normal", color: "text-muted", children: intl44.string(_modDef3849.V73vdN) };
      const Text3 = tmp2(5088).Text;
      intl44 = tmp2(1126).intl;
      items21[1] = closure_10(Text3, obj38);
      tmp19Result6 = tmp19(closure_11, obj36);
    }
    items20[2] = tmp19Result6;
    items19[2] = closure_12(View, obj33);
    const obj39 = { style: tmp.forceCompaction, children: items22 };
    const obj40 = { variant: "secondary", size: "sm", text: intl15.string(_modDef3849["5qCjBu"]), loading: tmp39, disabled: tmp39, onPress: callback2 };
    const Button2 = tmp2(5379).Button;
    intl15 = tmp2(1126).intl;
    items22 = [closure_10(Button2, obj40), ];
    let str11 = "text-muted";
    const Text2 = tmp2(5088).Text;
    if (typeof stateFromStores4 === "object") {
      str11 = "text-muted";
      if ("restarted" !== stateFromStores4.outcome) {
        str11 = "text-feedback-critical";
      }
    }
    const obj41 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: tmp2Result76.sandboxRestartStatus(stateFromStores4) };
    tmp2Result76 = tmp2(17289);
    items22[1] = closure_10(Text2, obj41);
    items19[3] = closure_12(View, obj39);
    obj26.children = items19;
    items15[3] = closure_12(DebugSection3, obj26);
    if (null != session) {
      const obj42 = { title: intl16.string(_modDef3849.EsSzCS), children: items24 };
      const DebugSection4 = tmp2(17291).DebugSection;
      intl16 = tmp2(1126).intl;
      let tmp19Result7 = null;
      if (null != session) {
        const obj43 = { label: intl17.string(_modDef3849.CLXHAs), value: tmp2Result77.formatObservedAt(session.instance_since), hint: intl18.string(_modDef3849.UCwUEX) };
        const DebugStatRow4 = tmp2(17291).DebugStatRow;
        intl17 = tmp2(1126).intl;
        tmp2Result77 = tmp2(17288);
        intl18 = tmp2(1126).intl;
        const items23 = [closure_10(DebugStatRow4, obj43), , , ];
        const obj44 = { label: intl19.string(_modDef3849["8V8e1Z"]), value: tmp2Result78.formatCount(session.sockets) };
        const DebugStatRow5 = tmp2(17291).DebugStatRow;
        intl19 = tmp2(1126).intl;
        tmp2Result78 = tmp2(17288);
        items23[1] = closure_10(DebugStatRow5, obj44);
        const obj45 = { label: intl20.string(_modDef3849["4pBzYW"]), value: string(turn_inflight ? tmp23Result.Wv025I : tmp23Result["7/lsFY"]) };
        const DebugStatRow6 = tmp2(17291).DebugStatRow;
        intl20 = tmp2(1126).intl;
        const intl21 = tmp2(1126).intl;
        string = intl21.string;
        turn_inflight = session.turn_inflight;
        tmp23Result = _modDef3849;
        items23[2] = closure_10(DebugStatRow6, obj45);
        let tmp21Result9 = null;
        const tmp43 = closure_11;
        if (session.queued_messages > 0) {
          const obj46 = { label: intl22.string(_modDef3849["3oUYnv"]), value: tmp2Result79.formatCount(session.queued_messages) };
          const DebugStatRow7 = tmp2(17291).DebugStatRow;
          intl22 = tmp2(1126).intl;
          tmp2Result79 = tmp2(17288);
          tmp21Result9 = tmp21(DebugStatRow7, obj46);
        }
        const obj47 = { children: items23 };
        items23[3] = tmp21Result9;
        tmp19Result7 = tmp19(tmp43, obj47);
      }
      items24 = [tmp19Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp21Result10 = null;
      if (null != analytics) {
        const obj48 = { analytics: status.analytics };
        tmp21Result10 = tmp21(tmp2(17293).ConjureDebugAgentAnalyticsRows, obj48);
      }
      items24[1] = tmp21Result10;
      tmp19Result8 = tmp19(DebugSection4, obj42);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp19Result8 = null;
    }
    items15[4] = tmp19Result8;
    let tmp19Result9 = null;
    if (null != limits) {
      const obj49 = { title: intl23.string(_modDef3849["LEIhp/"]), children: items25 };
      const DebugSection5 = tmp2(17291).DebugSection;
      intl23 = tmp2(1126).intl;
      const obj50 = { label: intl24.string(_modDef3849.IlDBN3), value: tmp2Result80.formatCount(limits.max_subagent_iterations) };
      const DebugStatRow8 = tmp2(17291).DebugStatRow;
      intl24 = tmp2(1126).intl;
      tmp2Result80 = tmp2(17288);
      items25 = [closure_10(DebugStatRow8, obj50), , , , , ];
      const obj51 = { label: intl25.string(_modDef3849["ZdzKR+"]), value: formatToPlainString4(yHJxuP, obj52) };
      const DebugStatRow9 = tmp2(17291).DebugStatRow;
      intl25 = tmp2(1126).intl;
      const intl26 = tmp2(1126).intl;
      formatToPlainString4 = intl26.formatToPlainString;
      obj52 = { count: tmp2Result81.formatCount(limits.context_window_tokens) };
      yHJxuP = tmp23(3849).yHJxuP;
      tmp2Result81 = tmp2(17288);
      items25[1] = closure_10(DebugStatRow9, obj51);
      const obj53 = { label: intl27.string(_modDef3849.cIhN2W), value: formatToPlainString5(yHJxuP2, obj54) };
      const DebugStatRow10 = tmp2(17291).DebugStatRow;
      intl27 = tmp2(1126).intl;
      const intl28 = tmp2(1126).intl;
      formatToPlainString5 = intl28.formatToPlainString;
      obj54 = { count: tmp2Result82.formatCount(limits.per_turn_max_output_tokens) };
      yHJxuP2 = tmp23(3849).yHJxuP;
      tmp2Result82 = tmp2(17288);
      items25[2] = closure_10(DebugStatRow10, obj53);
      const obj55 = { label: intl29.string(_modDef3849["+fOn/q"]), value: tmp2Result83.formatCount(limits.max_user_message_chars) };
      const DebugStatRow11 = tmp2(17291).DebugStatRow;
      intl29 = tmp2(1126).intl;
      tmp2Result83 = tmp2(17288);
      items25[3] = closure_10(DebugStatRow11, obj55);
      const obj56 = { label: intl30.string(_modDef3849.kIHga0), value: tmp2Result84.formatCount(limits.max_build_attempts) };
      const DebugStatRow12 = tmp2(17291).DebugStatRow;
      intl30 = tmp2(1126).intl;
      tmp2Result84 = tmp2(17288);
      items25[4] = closure_10(DebugStatRow12, obj56);
      const obj57 = { label: intl31.string(_modDef3849.Iw03yW), value: tmp2Result85.formatCount(limits.max_session_attempts) };
      const DebugStatRow13 = tmp2(17291).DebugStatRow;
      intl31 = tmp2(1126).intl;
      tmp2Result85 = tmp2(17288);
      items25[5] = closure_10(DebugStatRow13, obj57);
      tmp19Result9 = tmp19(DebugSection5, obj49);
    }
    items15[5] = tmp19Result9;
    obj7.children = items15;
    return closure_12(View, obj7);
  }
  const DebugNote3 = tmp2(17291).DebugNote;
  if (null != promptCeiling) {
    const intl8 = tmp2(1126).intl;
    const formatToPlainString = intl8.formatToPlainString;
    const obj58 = { ceiling: tmp2Result86.formatCount(promptCeiling) };
    const GMLCNv = tmp23(3849).GMLCNv;
    tmp2Result86 = tmp2(17288);
    formatToPlainStringResult = formatToPlainString(GMLCNv, obj58);
  } else {
    const intl7 = tmp2(1126).intl;
    formatToPlainStringResult = intl7.string(tmp23(3849).s0U5Fv);
  }
  tmp21Result11 = tmp21(DebugNote3, { children: formatToPlainStringResult });
});
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default tmp5;
