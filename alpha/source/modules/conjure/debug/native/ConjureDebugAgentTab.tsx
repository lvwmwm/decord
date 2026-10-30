// Module ID: 12983
// Function ID: 12984
// Name: ConjureDebugAgentTab
// Dependencies: [19, 17, 21, 5009, 575, 12980, 1114, 3865, 12978, 10839, 12984, 5629, 5619, 12977, 12985, 12982, 2]
// Exports: default

// Module 12983 (ConjureDebugAgentTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 12980 */;
import useConjureDebugAgentStateDefault from "useConjureDebugAgentState" /* 12984 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
let tmp9;
const intl45 = tmp9(1114);
const _modDef3865 = tmp2(3865);
const Text_Text = tmp9(5619);
const components_Button_Button = tmp9(5629);
const ConjureUsageTypes = tmp9(10839);
const ConjureDebugLabels = tmp9(12977);
const ConjureDebugFormat = tmp9(12978);
const ConjureDebugAnalytics = tmp9(12982);
const ConjureDebugGitSection = tmp9(12985);
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { tab: obj2, forceCompaction: obj3 };
obj2 = { gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default function ConjureDebugAgentTab(arg0) {
  let NCdUIh;
  let Vq3skS;
  let cache_hit_rate;
  let contextCeiling;
  let fetchState;
  let forceState;
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
  let handleForceCompaction;
  let handleForceCompactionOverride;
  let handleRestartWorkspace;
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
  let items10;
  let items3;
  let items5;
  let items6;
  let items7;
  let items9;
  let lastCompaction;
  let lastDecline;
  let lastTurn;
  let lifetime;
  let limits;
  let mapped;
  let obj11;
  let obj17;
  let obj24;
  let obj26;
  let obj48;
  let obj5;
  let obj50;
  let obj7;
  let obj9;
  let onRefresh;
  let projectId;
  let restartState;
  let round;
  let session;
  let status;
  let string;
  let tmp2Result;
  let tmp6Result5;
  let tmp8Result7;
  let tmp9Result44;
  let tmp9Result45;
  let tmp9Result47;
  let tmp9Result50;
  let tmp9Result52;
  let tmp9Result55;
  let tmp9Result58;
  let tmp9Result61;
  let tmp9Result63;
  let tmp9Result66;
  let tmp9Result69;
  let tmp9Result70;
  let tmp9Result71;
  let tmp9Result73;
  let tmp9Result74;
  let tmp9Result75;
  let tmp9Result76;
  let tmp9Result77;
  let tmp9Result78;
  let tmp9Result79;
  let tmp9Result80;
  let tmp9Result81;
  let tmp9Result82;
  let tmp9Result83;
  let tmp9Result84;
  let tmp9Result85;
  let tmp9Result86;
  let turnRunning;
  let turn_inflight;
  let v6ngCax;
  let yHJxuP;
  let yHJxuP2;
  let yHJxuP3;
  let yHJxuP4;
  let yHJxuP5;
  let yHJxuP6;
  ({ projectId, status } = arg0);
  ({ fetchState, onRefresh } = arg0);
  const tmp = closure_7();
  const tmp2 = importDefault;
  const tmp4 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, lifetime, limits, session, contextCeiling } = tmp4);
  let tmp5 = null;
  ({ turnRunning, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace } = tmp4);
  if (typeof forceState === "object") {
    tmp5 = forceState;
  }
  let obj = { style: tmp.tab, children: null };
  let generated_at;
  const DebugSnapshotToolbar = ConjureDebugPrimitives.DebugSnapshotToolbar;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [React3(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj2 = { title: intl.string(_modDef3865.JghNal), children: tmp6Result5 };
  const DebugSection = ConjureDebugPrimitives.DebugSection;
  intl = intl45.intl;
  if (null == lifetime) {
    const obj3 = { children: intl3.string(_modDef3865.s0U5Fv) };
    const DebugNote = ConjureDebugPrimitives.DebugNote;
    intl3 = intl45.intl;
    tmp6Result5 = tmp8(DebugNote, obj3);
  } else {
    const obj4 = { label: intl32.string(_modDef3865["9nqym2"]), value: formatCount(tmp9Result44.runesFromUsd(lifetime.cost_usd)), hint: formatToPlainString6(NCdUIh, obj5) };
    const DebugStatRow14 = ConjureDebugPrimitives.DebugStatRow;
    intl32 = intl45.intl;
    formatCount = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result44 = ConjureUsageTypes;
    const intl33 = intl45.intl;
    formatToPlainString6 = intl33.formatToPlainString;
    obj5 = { count: tmp9Result45.formatCount(lifetime.turns) };
    NCdUIh = _modDef3865.NCdUIh;
    tmp9Result45 = ConjureDebugFormat;
    const items1 = [React3(DebugStatRow14, obj4), , , , ];
    const intl34 = intl45.intl;
    const orchestrator = lifetime.orchestrator;
    const obj6 = { label: intl34.string(_modDef3865.xtxP0e), value: formatToPlainString7(yHJxuP3, obj7), hint: "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp9Result50.formatCount(orchestrator.cache_read_input_tokens) + " cache read" };
    intl34.string(_modDef3865.xtxP0e);
    const DebugStatRow15 = ConjureDebugPrimitives.DebugStatRow;
    const intl35 = intl45.intl;
    formatToPlainString7 = intl35.formatToPlainString;
    obj7 = { count: formatCount2(tmp9Result47.runeCount(orchestrator)) };
    yHJxuP3 = _modDef3865.yHJxuP;
    formatCount2 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result47 = ConjureUsageTypes;
    const tmp9Result48 = ConjureDebugFormat;
    formatCountResult = tmp9Result48.formatCount(orchestrator.input_tokens);
    const tmp9Result49 = ConjureDebugFormat;
    const _HermesInternal4 = HermesInternal;
    formatCountResult1 = tmp9Result49.formatCount(orchestrator.output_tokens);
    tmp9Result50 = ConjureDebugFormat;
    items1[1] = React3(DebugStatRow15, obj6);
    const intl36 = intl45.intl;
    const codegen = lifetime.codegen;
    const obj8 = { label: intl36.string(_modDef3865["9Sj3SX"]), value: formatToPlainString8(yHJxuP4, obj9), hint: "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp9Result55.formatCount(codegen.cache_read_input_tokens) + " cache read" };
    intl36.string(_modDef3865["9Sj3SX"]);
    const DebugStatRow16 = ConjureDebugPrimitives.DebugStatRow;
    const intl37 = intl45.intl;
    formatToPlainString8 = intl37.formatToPlainString;
    obj9 = { count: formatCount3(tmp9Result52.runeCount(codegen)) };
    yHJxuP4 = _modDef3865.yHJxuP;
    formatCount3 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result52 = ConjureUsageTypes;
    const tmp9Result53 = ConjureDebugFormat;
    formatCountResult2 = tmp9Result53.formatCount(codegen.input_tokens);
    const tmp9Result54 = ConjureDebugFormat;
    const _HermesInternal5 = HermesInternal;
    formatCountResult3 = tmp9Result54.formatCount(codegen.output_tokens);
    tmp9Result55 = ConjureDebugFormat;
    items1[2] = React3(DebugStatRow16, obj8);
    const intl38 = intl45.intl;
    const stringResult2 = intl38.string(_modDef3865.ANCEo3);
    const tmp9Result56 = ConjureUsageTypes;
    const usageOrEmptyResult = tmp9Result56.usageOrEmpty(lifetime.compaction);
    const obj10 = { label: stringResult2, value: formatToPlainString9(yHJxuP5, obj11), hint: "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp9Result61.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read" };
    const DebugStatRow17 = ConjureDebugPrimitives.DebugStatRow;
    const intl39 = intl45.intl;
    formatToPlainString9 = intl39.formatToPlainString;
    obj11 = { count: formatCount4(tmp9Result58.runeCount(usageOrEmptyResult)) };
    yHJxuP5 = _modDef3865.yHJxuP;
    formatCount4 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result58 = ConjureUsageTypes;
    const tmp9Result59 = ConjureDebugFormat;
    formatCountResult4 = tmp9Result59.formatCount(usageOrEmptyResult.input_tokens);
    const tmp9Result60 = ConjureDebugFormat;
    const _HermesInternal6 = HermesInternal;
    formatCountResult5 = tmp9Result60.formatCount(usageOrEmptyResult.output_tokens);
    tmp9Result61 = ConjureDebugFormat;
    items1[3] = React3(DebugStatRow17, obj10);
    let outcomes;
    const tmp36 = hasOwnProperty;
    if (status != null) {
      const agent = status.agent;
      if (agent != null) {
        outcomes = agent.outcomes;
      }
    }
    let tmp8Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp8Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj12 = { label: intl2.string(_modDef3865.SQHm7C), value: mapped.join(" \u00B7 ") };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        intl2 = intl45.intl;
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
          const obj = ConjureDebugFormat;
          return "" + obj.formatCount(tmp2) + " " + tmp;
        });
        tmp8Result6 = tmp8(DebugStatRow, obj12);
      }
    }
    const obj13 = { children: items1 };
    items1[4] = tmp8Result6;
    tmp6Result5 = tmp6(tmp36, obj13);
  }
  items[1] = React3(DebugSection, obj2);
  const obj14 = { title: intl4.string(_modDef3865.dZHPE5), children: tmp8Result7 };
  const DebugSection2 = ConjureDebugPrimitives.DebugSection;
  intl4 = intl45.intl;
  if (null == lastTurn) {
    const obj15 = { children: intl5.string(_modDef3865.DfVjal) };
    const DebugNote2 = ConjureDebugPrimitives.DebugNote;
    intl5 = intl45.intl;
    tmp8Result7 = tmp8(DebugNote2, obj15);
  } else {
    const intl40 = intl45.intl;
    const total = lastTurn.total;
    const obj16 = { label: intl40.string(_modDef3865["7X3i9d"]), value: formatToPlainString10(yHJxuP6, obj17), hint: "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp9Result66.formatCount(total.cache_read_input_tokens) + " cache read" };
    intl40.string(_modDef3865["7X3i9d"]);
    const DebugStatRow18 = ConjureDebugPrimitives.DebugStatRow;
    const intl41 = intl45.intl;
    formatToPlainString10 = intl41.formatToPlainString;
    obj17 = { count: formatCount5(tmp9Result63.runeCount(total)) };
    yHJxuP6 = _modDef3865.yHJxuP;
    formatCount5 = ConjureDebugFormat.formatCount;
    ConjureDebugFormat;
    tmp9Result63 = ConjureUsageTypes;
    const tmp9Result64 = ConjureDebugFormat;
    formatCountResult6 = tmp9Result64.formatCount(total.input_tokens);
    const tmp9Result65 = ConjureDebugFormat;
    const _HermesInternal7 = HermesInternal;
    formatCountResult7 = tmp9Result65.formatCount(total.output_tokens);
    tmp9Result66 = ConjureDebugFormat;
    const items2 = [React3(DebugStatRow18, obj16), ];
    const obj18 = { label: intl42.string(_modDef3865["8OUg09"]), value: "" + round(100 * cache_hit_rate) + "%" };
    const DebugStatRow19 = ConjureDebugPrimitives.DebugStatRow;
    intl42 = intl45.intl;
    cache_hit_rate = lastTurn.cache_hit_rate;
    const _Math = Math;
    round = Math.round;
    const tmp55 = hasOwnProperty;
    if (cache_hit_rate == null) {
      const tmp9Result67 = ConjureUsageTypes;
      cache_hit_rate = tmp9Result67.cacheHitRate(lastTurn.total);
    }
    const _HermesInternal = HermesInternal;
    const obj19 = { children: items2 };
    items2[1] = React3(DebugStatRow19, obj18);
    tmp8Result7 = tmp6(tmp55, obj19);
  }
  items[2] = React3(DebugSection2, obj14);
  const obj20 = { title: intl6.string(_modDef3865.NbRk9a), children: null };
  const DebugSection3 = ConjureDebugPrimitives.DebugSection;
  intl6 = intl45.intl;
  if (null != lastCompaction) {
    let tmp8Result11;
    let tmp6Result8;
    if (null != contextCeiling) {
      const obj21 = { children: items3 };
      const obj22 = { label: intl9.string(_modDef3865.Kw5wiQ), used: lastCompaction.tokensAfter, max: contextCeiling, formatValue: ConjureDebugFormat.formatCount };
      const DebugMeter = ConjureDebugPrimitives.DebugMeter;
      intl9 = intl45.intl;
      items3 = [React3(DebugMeter, obj22), ];
      const obj23 = { label: intl10.string(_modDef3865.mRbSns), value: "" + formatCountResult8 + " \u2192 " + tmp9Result69.formatCount(lastCompaction.tokensAfter), hint: formatToPlainString2(Vq3skS, obj24) };
      const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
      intl10 = intl45.intl;
      const tmp9Result68 = ConjureDebugFormat;
      const _HermesInternal2 = HermesInternal;
      formatCountResult8 = tmp9Result68.formatCount(lastCompaction.tokensBefore);
      tmp9Result69 = ConjureDebugFormat;
      const intl11 = intl45.intl;
      formatToPlainString2 = intl11.formatToPlainString;
      obj24 = { count: tmp9Result70.formatCount(lastCompaction.retainedMessages), time: tmp9Result71.formatObservedAt(lastCompaction.observedAt) };
      Vq3skS = _modDef3865.Vq3skS;
      tmp9Result70 = ConjureDebugFormat;
      tmp9Result71 = ConjureDebugFormat;
      items3[1] = React3(DebugStatRow2, obj23);
      tmp8Result11 = tmp6(hasOwnProperty, obj21);
    }
    const items4 = [tmp8Result11, , , , ];
    let tmp8Result8 = null;
    if (null != lastDecline) {
      const obj25 = { label: intl12.string(_modDef3865["4BX5KK"]), value: "" + formatCountResult9 + " / " + tmp9Result73.formatCount(lastDecline.threshold), critical: true, hint: formatToPlainString3(v6ngCax, obj26) };
      const DebugStatRow3 = ConjureDebugPrimitives.DebugStatRow;
      intl12 = intl45.intl;
      const tmp9Result72 = ConjureDebugFormat;
      const _HermesInternal3 = HermesInternal;
      formatCountResult9 = tmp9Result72.formatCount(lastDecline.projected);
      tmp9Result73 = ConjureDebugFormat;
      const intl13 = intl45.intl;
      formatToPlainString3 = intl13.formatToPlainString;
      obj26 = { time: tmp9Result74.formatObservedAt(lastDecline.observedAt) };
      v6ngCax = _modDef3865["6ngCax"];
      tmp9Result74 = ConjureDebugFormat;
      tmp8Result8 = tmp8(DebugStatRow3, obj25);
    }
    items4[1] = tmp8Result8;
    const obj27 = { style: tmp.forceCompaction, children: items5 };
    const obj28 = { variant: "secondary", size: "sm", text: intl14.string(_modDef3865["1EiJeb"]), disabled: "pending" === forceState, onPress: handleForceCompaction };
    const Button = components_Button_Button.Button;
    intl14 = intl45.intl;
    items5 = [React3(Button, obj28), , ];
    let str9 = "text-muted";
    const Text = Text_Text.Text;
    if (null != tmp5) {
      str9 = "text-muted";
      if ("compacted" !== tmp5.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj29 = { variant: "text-xs/normal", color: str9, children: tmp9Result75.forceCompactionStatus(forceState) };
    tmp9Result75 = ConjureDebugLabels;
    items5[1] = React3(Text, obj29);
    let pendingTurn;
    if (tmp5 != null) {
      pendingTurn = tmp5.pendingTurn;
    }
    let tmp6Result6 = null;
    if (true === pendingTurn) {
      const obj30 = { children: items6 };
      const obj31 = { variant: "critical-primary", size: "sm", text: intl43.string(_modDef3865.ZxG2AI), onPress: handleForceCompactionOverride };
      const Button3 = components_Button_Button.Button;
      intl43 = intl45.intl;
      items6 = [React3(Button3, obj31), ];
      const obj32 = { variant: "text-xs/normal", color: "text-muted", children: intl44.string(_modDef3865.V73vdN) };
      const Text3 = Text_Text.Text;
      intl44 = intl45.intl;
      items6[1] = React3(Text3, obj32);
      tmp6Result6 = tmp6(hasOwnProperty, obj30);
    }
    items5[2] = tmp6Result6;
    items4[2] = metroRequire(View, obj27);
    const obj33 = { style: tmp.forceCompaction, children: items7 };
    const obj34 = { variant: "secondary", size: "sm", text: intl15.string(_modDef3865["5qCjBu"]), loading: tmp26, disabled: tmp26, onPress: handleRestartWorkspace };
    const Button2 = components_Button_Button.Button;
    intl15 = intl45.intl;
    items7 = [React3(Button2, obj34), ];
    let str11 = "text-muted";
    const Text2 = Text_Text.Text;
    if (typeof restartState === "object") {
      str11 = "text-muted";
      if ("restarted" !== restartState.outcome) {
        str11 = "text-feedback-critical";
      }
    }
    const obj35 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: tmp9Result76.sandboxRestartStatus(restartState) };
    tmp9Result76 = ConjureDebugLabels;
    items7[1] = React3(Text2, obj35);
    items4[3] = metroRequire(View, obj33);
    const obj36 = { projectId };
    items4[4] = React3(ConjureDebugGitSection.ConjureDebugRestartAgent, obj36);
    obj20.children = items4;
    items[3] = metroRequire(DebugSection3, obj20);
    const obj37 = { projectId };
    items[4] = React3(ConjureDebugGitSection.ConjureDebugGitSection, obj37);
    if (null != session) {
      const obj38 = { title: intl16.string(_modDef3865.EsSzCS), children: items9 };
      const DebugSection4 = ConjureDebugPrimitives.DebugSection;
      intl16 = intl45.intl;
      let tmp6Result7 = null;
      if (null != session) {
        const obj39 = { label: intl17.string(_modDef3865.CLXHAs), value: tmp9Result77.formatObservedAt(session.instance_since), hint: intl18.string(_modDef3865.UCwUEX) };
        const DebugStatRow4 = ConjureDebugPrimitives.DebugStatRow;
        intl17 = intl45.intl;
        tmp9Result77 = ConjureDebugFormat;
        intl18 = intl45.intl;
        const items8 = [React3(DebugStatRow4, obj39), , , ];
        const obj40 = { label: intl19.string(_modDef3865["8V8e1Z"]), value: tmp9Result78.formatCount(session.sockets) };
        const DebugStatRow5 = ConjureDebugPrimitives.DebugStatRow;
        intl19 = intl45.intl;
        tmp9Result78 = ConjureDebugFormat;
        items8[1] = React3(DebugStatRow5, obj40);
        const obj41 = { label: intl20.string(_modDef3865["4pBzYW"]), value: string(turn_inflight ? tmp2Result.Wv025I : tmp2Result["7/lsFY"]) };
        const DebugStatRow6 = ConjureDebugPrimitives.DebugStatRow;
        intl20 = intl45.intl;
        const intl21 = intl45.intl;
        string = intl21.string;
        turn_inflight = session.turn_inflight;
        tmp2Result = _modDef3865;
        items8[2] = React3(DebugStatRow6, obj41);
        let tmp8Result9 = null;
        const tmp30 = hasOwnProperty;
        if (session.queued_messages > 0) {
          const obj42 = { label: intl22.string(_modDef3865["3oUYnv"]), value: tmp9Result79.formatCount(session.queued_messages) };
          const DebugStatRow7 = ConjureDebugPrimitives.DebugStatRow;
          intl22 = intl45.intl;
          tmp9Result79 = ConjureDebugFormat;
          tmp8Result9 = tmp8(DebugStatRow7, obj42);
        }
        const obj43 = { children: items8 };
        items8[3] = tmp8Result9;
        tmp6Result7 = tmp6(tmp30, obj43);
      }
      items9 = [tmp6Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp8Result10 = null;
      if (null != analytics) {
        const obj44 = { analytics: status.analytics };
        tmp8Result10 = tmp8(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj44);
      }
      items9[1] = tmp8Result10;
      tmp6Result8 = tmp6(DebugSection4, obj38);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp6Result8 = null;
    }
    items[5] = tmp6Result8;
    let tmp6Result9 = null;
    if (null != limits) {
      const obj45 = { title: intl23.string(_modDef3865["LEIhp/"]), children: items10 };
      const DebugSection5 = ConjureDebugPrimitives.DebugSection;
      intl23 = intl45.intl;
      const obj46 = { label: intl24.string(_modDef3865.IlDBN3), value: tmp9Result80.formatCount(limits.max_subagent_iterations) };
      const DebugStatRow8 = ConjureDebugPrimitives.DebugStatRow;
      intl24 = intl45.intl;
      tmp9Result80 = ConjureDebugFormat;
      items10 = [React3(DebugStatRow8, obj46), , , , , ];
      const obj47 = { label: intl25.string(_modDef3865["ZdzKR+"]), value: formatToPlainString4(yHJxuP, obj48) };
      const DebugStatRow9 = ConjureDebugPrimitives.DebugStatRow;
      intl25 = intl45.intl;
      const intl26 = intl45.intl;
      formatToPlainString4 = intl26.formatToPlainString;
      obj48 = { count: tmp9Result81.formatCount(limits.context_window_tokens) };
      yHJxuP = _modDef3865.yHJxuP;
      tmp9Result81 = ConjureDebugFormat;
      items10[1] = React3(DebugStatRow9, obj47);
      const obj49 = { label: intl27.string(_modDef3865.cIhN2W), value: formatToPlainString5(yHJxuP2, obj50) };
      const DebugStatRow10 = ConjureDebugPrimitives.DebugStatRow;
      intl27 = intl45.intl;
      const intl28 = intl45.intl;
      formatToPlainString5 = intl28.formatToPlainString;
      obj50 = { count: tmp9Result82.formatCount(limits.per_turn_max_output_tokens) };
      yHJxuP2 = _modDef3865.yHJxuP;
      tmp9Result82 = ConjureDebugFormat;
      items10[2] = React3(DebugStatRow10, obj49);
      const obj51 = { label: intl29.string(_modDef3865["+fOn/q"]), value: tmp9Result83.formatCount(limits.max_user_message_chars) };
      const DebugStatRow11 = ConjureDebugPrimitives.DebugStatRow;
      intl29 = intl45.intl;
      tmp9Result83 = ConjureDebugFormat;
      items10[3] = React3(DebugStatRow11, obj51);
      const obj52 = { label: intl30.string(_modDef3865.kIHga0), value: tmp9Result84.formatCount(limits.max_build_attempts) };
      const DebugStatRow12 = ConjureDebugPrimitives.DebugStatRow;
      intl30 = intl45.intl;
      tmp9Result84 = ConjureDebugFormat;
      items10[4] = React3(DebugStatRow12, obj52);
      const obj53 = { label: intl31.string(_modDef3865.Iw03yW), value: tmp9Result85.formatCount(limits.max_session_attempts) };
      const DebugStatRow13 = ConjureDebugPrimitives.DebugStatRow;
      intl31 = intl45.intl;
      tmp9Result85 = ConjureDebugFormat;
      items10[5] = React3(DebugStatRow13, obj53);
      tmp6Result9 = tmp6(DebugSection5, obj45);
    }
    items[6] = tmp6Result9;
    obj.children = items;
    return metroRequire(View, obj);
  }
  const DebugNote3 = ConjureDebugPrimitives.DebugNote;
  if (null != contextCeiling) {
    const intl8 = intl45.intl;
    const formatToPlainString = intl8.formatToPlainString;
    const obj54 = { ceiling: tmp9Result86.formatCount(contextCeiling) };
    const GMLCNv = _modDef3865.GMLCNv;
    tmp9Result86 = ConjureDebugFormat;
    formatToPlainStringResult = formatToPlainString(GMLCNv, obj54);
  } else {
    const intl7 = intl45.intl;
    formatToPlainStringResult = intl7.string(_modDef3865.s0U5Fv);
  }
  tmp8Result11 = tmp8(DebugNote3, { children: formatToPlainStringResult });
};
