// Module ID: 12981
// Function ID: 12982
// Name: ConjureDebugWorkerTab
// Dependencies: [19, 17, 21, 5009, 575, 12980, 1114, 3865, 12977, 12978, 12982, 2]
// Exports: default

// Module 12981 (ConjureDebugWorkerTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl16 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 12977 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12978 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 12980 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function EnvSection(title) {
  let intl;
  let preview;
  let renderEnv;
  let stable;
  ({ preview, stable, renderEnv } = title);
  let items = [];
  title = title.title;
  if (null != preview) {
    const push = items.push;
    const Fragment = react.Fragment;
    const obj = { children: renderEnv("preview", preview) };
    push(hasOwnProperty(Fragment, obj, "preview"));
  }
  if (null != stable) {
    const push2 = items.push;
    const Fragment2 = react.Fragment;
    const obj2 = { children: renderEnv("stable", stable) };
    push2(hasOwnProperty(Fragment2, obj2, "stable"));
  }
  const obj3 = { title, children: items };
  const DebugSection = ConjureDebugPrimitives.DebugSection;
  if (items.length <= 0) {
    const obj4 = { children: intl.string(_modDef3865.umcjif) };
    const DebugNote = tmp8(12980).DebugNote;
    intl = tmp8(1114).intl;
    items = tmp7(DebugNote, obj4);
  }
  return hasOwnProperty(DebugSection, obj3);
}
function BotEnvBlock(arg0) {
  let bot;
  let combined;
  let env;
  let fatal_reason;
  let formatToPlainString;
  let formatToPlainString2Result;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let obj2;
  let obj4;
  let obj5;
  let obj6;
  let tmp13;
  let tmp6Result;
  let tmp9Result;
  let tmp9Result10;
  let tmp9Result7;
  let tmp9Result8;
  let tmp9Result9;
  let v01ZMS4;
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: formatToPlainString(v01ZMS4, obj4), value: obj6.debugYesNo(bot.connected), critical: tmp13, hint: fatal_reason };
    const DebugStatRow2 = ConjureDebugPrimitives.DebugStatRow;
    const intl2 = intl16.intl;
    formatToPlainString = intl2.formatToPlainString;
    obj4 = { env: obj5.debugEnvLabel(env) };
    v01ZMS4 = _modDef3865["01ZMS4"];
    obj5 = ConjureDebugLabels;
    tmp13 = !bot.connected;
    obj6 = ConjureDebugLabels;
    const tmp6 = metroImportDefault;
    const tmp7 = metroRequire;
    if (tmp13) {
      tmp13 = null != bot.fatal_reason;
    }
    fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp16;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp16 = last_start_reason;
      }
      fatal_reason = tmp16;
    }
    const items = [hasOwnProperty(DebugStatRow2, obj3), , , , ];
    const obj7 = { label: intl3.string(_modDef3865["z1dh+F"]), value: tmp9Result.formatCount(bot.events_received), hint: combined };
    const DebugStatRow3 = tmp9(12980).DebugStatRow;
    intl3 = tmp9(1114).intl;
    combined = undefined;
    tmp9Result = ConjureDebugFormat;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const last_event_type = bot.last_event_type;
        const _HermesInternal = HermesInternal;
        const tmp9Result6 = ConjureDebugFormat;
        combined = "" + last_event_type + " \u00B7 " + tmp9Result6.formatObservedAt(bot.last_event_at);
      }
    }
    items[1] = hasOwnProperty(DebugStatRow3, obj7);
    const obj8 = { label: intl4.string(_modDef3865.Iz5GnJ), value: tmp9Result7.formatCount(bot.guild_count) };
    const DebugStatRow4 = tmp9(12980).DebugStatRow;
    intl4 = tmp9(1114).intl;
    tmp9Result7 = ConjureDebugFormat;
    items[2] = hasOwnProperty(DebugStatRow4, obj8);
    const obj9 = { label: intl5.string(_modDef3865["7UqtNv"]), value: tmp9Result8.formatCount(bot.reconnects), hint: formatToPlainString2Result };
    const DebugStatRow5 = tmp9(12980).DebugStatRow;
    intl5 = tmp9(1114).intl;
    formatToPlainString2Result = undefined;
    tmp9Result8 = ConjureDebugFormat;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = tmp9(1114).intl;
        const formatToPlainString2 = intl6.formatToPlainString;
        const obj10 = { code: bot.last_close_code, time: tmp9Result9.formatObservedAt(bot.last_close_at) };
        const MasSly = tmp11(3865).MasSly;
        tmp9Result9 = ConjureDebugFormat;
        formatToPlainString2Result = formatToPlainString2(MasSly, obj10);
      }
    }
    items[3] = hasOwnProperty(DebugStatRow5, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: intl7.string(_modDef3865["x3+JXJ"]), value: tmp9Result10.formatCount(bot.dispatch_errors), critical: true };
      const DebugStatRow6 = tmp9(12980).DebugStatRow;
      intl7 = tmp9(1114).intl;
      tmp9Result10 = ConjureDebugFormat;
      tmp8Result = tmp8(DebugStatRow6, obj11);
    }
    const obj12 = { children: items };
    items[4] = tmp8Result;
    tmp6Result = tmp6(tmp7, obj12);
  } else {
    const obj = { label: obj2.debugEnvLabel(env), value: intl.string(_modDef3865.lTHQss) };
    const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
    obj2 = ConjureDebugLabels;
    intl = intl16.intl;
    tmp6Result = hasOwnProperty(DebugStatRow, obj);
  }
  return tmp6Result;
}
function OutboundEnvBlock(metrics) {
  let formatToPlainString;
  let formatToPlainString3Result;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let prop;
  let str;
  let tmp3Result;
  let tmp3Result2;
  metrics = metrics.metrics;
  const env = metrics.env;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(prop, obj3), critical: metrics.errors + metrics.status_5xx > 0, hint: formatToPlainString3Result };
  const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
  obj2 = ConjureDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { requests: obj4.formatCount(metrics.requests), failures: obj5.formatCount(sum + metrics.errors) };
  prop = _modDef3865["Xq+wHT"];
  obj4 = ConjureDebugFormat;
  obj5 = ConjureDebugFormat;
  const tmp2 = hasOwnProperty;
  if (null != metrics.last_failure) {
    const intl3 = tmp3(1114).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const obj6 = { host: metrics.last_failure.host, status: str, time: tmp3Result.formatObservedAt(metrics.last_failure.at) };
    str = metrics.last_failure.status;
    const prop1 = tmp5(3865)["o/ZBm4"];
    if (str == null) {
      str = "network";
    }
    tmp3Result = ConjureDebugFormat;
    formatToPlainString3Result = formatToPlainString3(prop1, obj6);
  } else {
    const intl2 = tmp3(1114).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj7 = { time: tmp3Result2.formatObservedAt(metrics.since) };
    const v7KlGT6 = tmp5(3865)["7KlGT6"];
    tmp3Result2 = ConjureDebugFormat;
    formatToPlainString3Result = formatToPlainString2(v7KlGT6, obj7);
  }
  return tmp2(DebugStatRow, obj);
}
function RuntimeEnvBlock(env) {
  let formatToPlainString;
  let items;
  let obj3;
  let obj4;
  let obj5;
  let v92gVTm;
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: items };
  let obj2 = { label: formatToPlainString(v92gVTm, obj3), value: obj5.formatCount(runtime.connections) };
  let DebugStatRow = env(12980).DebugStatRow;
  let intl = env(1114).intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { env: obj4.debugEnvLabel(env) };
  v92gVTm = _modDef3865["92gVTm"];
  obj4 = env(12977);
  obj5 = env(12978);
  items = [closure_5(DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    let formatToPlainString2Result;
    let intl;
    let obj2;
    let pending_attempt;
    let tmp2Result;
    const obj = { label: intl.formatToPlainString(_modDef3865.Dafaco, obj2), value: id.trigger, hint: formatToPlainString2Result };
    const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
    intl = intl16.intl;
    obj2 = { id: id.id };
    const tmp = hasOwnProperty;
    if (null != id.pending_state) {
      const intl3 = tmp2(1114).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      const obj3 = { state: null, attempt: pending_attempt };
      ({ pending_state: obj5.state, pending_attempt } = id);
      const ologm6 = tmp4(3865).ologm6;
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      formatToPlainString2Result = formatToPlainString2(ologm6, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = tmp2(1114).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
      const wxAWNv = tmp4(3865).wxAWNv;
      tmp2Result = ConjureDebugFormat;
      formatToPlainString2Result = formatToPlainString(wxAWNv, obj4);
    }
    return tmp(DebugStatRow, obj, "" + env + "-" + id.id);
  });
  return closure_7(closure_6, obj);
}
function AiEnvBlock(metrics) {
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let suAOj9;
  metrics = metrics.metrics;
  const env = metrics.env;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(suAOj9, obj3), critical: metrics.errors > 0, hint: metrics.last_model };
  const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
  obj2 = ConjureDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { calls: obj4.formatCount(metrics.calls), errors: obj5.formatCount(metrics.errors) };
  suAOj9 = _modDef3865.suAOj9;
  obj4 = ConjureDebugFormat;
  obj5 = ConjureDebugFormat;
  return hasOwnProperty(DebugStatRow, obj);
}
function EnvMetricsSection(arg0) {
  let DebugNote;
  let JqMU05;
  let formatToPlainString;
  let formatToPlainString2;
  let formatToPlainString3;
  let intl;
  let intl11;
  let intl12;
  let intl13;
  let intl15;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let limits;
  let metrics;
  let obj13;
  let obj16;
  let obj22;
  let obj24;
  let obj26;
  let obj4;
  let obj9;
  let title;
  let tmp10Result;
  let tmp10Result10;
  let tmp10Result11;
  let tmp10Result12;
  let tmp10Result7;
  let tmp10Result8;
  let tmp10Result9;
  let v5jIZwv;
  let v7KlGT6;
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      let tmp;
      const obj2 = { title, children: items };
      const DebugSection2 = ConjureDebugPrimitives.DebugSection;
      const obj3 = { label: intl13.string(_modDef3865.xtD4Zp), value: obj22.formatCount(metrics.requests), hint: formatToPlainString3(v7KlGT6, obj4) };
      const DebugStatRow7 = ConjureDebugPrimitives.DebugStatRow;
      intl13 = intl16.intl;
      obj22 = ConjureDebugFormat;
      const intl14 = intl16.intl;
      formatToPlainString3 = intl14.formatToPlainString;
      obj4 = { time: obj24.formatObservedAt(metrics.since) };
      v7KlGT6 = _modDef3865["7KlGT6"];
      obj24 = ConjureDebugFormat;
      items = [hasOwnProperty(DebugStatRow7, obj3), , , , , , ];
      const obj5 = { label: intl15.string(_modDef3865.gfRhR3), value: obj26.formatCount(metrics.errors), critical: metrics.errors > 0 };
      const DebugStatRow8 = ConjureDebugPrimitives.DebugStatRow;
      intl15 = intl16.intl;
      obj26 = ConjureDebugFormat;
      items[1] = hasOwnProperty(DebugStatRow8, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: items1 };
        const obj7 = { label: intl4.string(_modDef3865.LEJ5r3), used: metrics.cpu_ms_max, max: limits.cpu_ms_per_request, formatValue: ConjureDebugFormat.formatMs };
        const DebugMeter = tmp10(12980).DebugMeter;
        intl4 = tmp10(1114).intl;
        items1 = [hasOwnProperty(DebugMeter, obj7), ];
        const obj8 = { label: intl5.string(_modDef3865.mSKImM), value: tmp10Result.formatMs(metrics.cpu_ms_total / metrics.requests), hint: formatToPlainString(JqMU05, obj9) };
        const DebugStatRow2 = tmp10(12980).DebugStatRow;
        intl5 = tmp10(1114).intl;
        tmp10Result = ConjureDebugFormat;
        const intl6 = tmp10(1114).intl;
        formatToPlainString = intl6.formatToPlainString;
        obj9 = { total: tmp10Result7.formatMs(metrics.cpu_ms_total), wall: tmp10Result8.formatMs(metrics.wall_ms_total) };
        JqMU05 = tmp13(3865).JqMU05;
        tmp10Result7 = ConjureDebugFormat;
        tmp10Result8 = ConjureDebugFormat;
        items1[1] = hasOwnProperty(DebugStatRow2, obj8);
        tmp = tmp9(metroRequire, obj6);
      } else {
        const obj = { label: intl.string(_modDef3865.LEJ5r3), value: intl2.string(_modDef3865["2Ekb2b"]), hint: intl3.string(_modDef3865.G0aq7i) };
        const DebugStatRow = tmp10(12980).DebugStatRow;
        intl = tmp10(1114).intl;
        intl2 = tmp10(1114).intl;
        intl3 = tmp10(1114).intl;
        tmp = tmp12(DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp12Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp12Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: intl7.string(_modDef3865.xvmL1D), value: tmp10Result9.formatMs(metrics.wall_ms_total) };
          const DebugStatRow3 = tmp10(12980).DebugStatRow;
          intl7 = tmp10(1114).intl;
          tmp10Result9 = ConjureDebugFormat;
          tmp12Result = tmp12(DebugStatRow3, obj10);
        }
      }
      items[3] = tmp12Result;
      let tmp12Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: intl8.string(_modDef3865["4sQYwH"]), value: tmp10Result10.formatCount(metrics.exceeded_cpu), critical: true };
        const DebugStatRow4 = tmp10(12980).DebugStatRow;
        intl8 = tmp10(1114).intl;
        tmp10Result10 = ConjureDebugFormat;
        tmp12Result3 = tmp12(DebugStatRow4, obj11);
      }
      items[4] = tmp12Result3;
      const obj12 = { label: intl9.string(_modDef3865.bQenOy), value: tmp10Result11.formatCount(metrics.exceeded_memory), critical: metrics.exceeded_memory > 0, hint: formatToPlainString2(v5jIZwv, obj13) };
      const DebugStatRow5 = tmp10(12980).DebugStatRow;
      intl9 = tmp10(1114).intl;
      tmp10Result11 = ConjureDebugFormat;
      const intl10 = tmp10(1114).intl;
      formatToPlainString2 = intl10.formatToPlainString;
      const _HermesInternal = HermesInternal;
      obj13 = { limit: "" + limits.memory_mb + " MB" };
      v5jIZwv = tmp13(3865)["5jIZwv"];
      items[5] = hasOwnProperty(DebugStatRow5, obj12);
      let tmp12Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: intl11.string(_modDef3865.xgpn4Y), value: tmp10Result12.shortBuildLabel(metrics.build) };
        const DebugStatRow6 = tmp10(12980).DebugStatRow;
        intl11 = tmp10(1114).intl;
        tmp10Result12 = ConjureDebugFormat;
        tmp12Result4 = tmp12(DebugStatRow6, obj14);
      }
      items[6] = tmp12Result4;
      return metroImportDefault(DebugSection2, obj2);
    }
  }
  const obj15 = { title, children: hasOwnProperty(DebugNote, obj16) };
  const DebugSection = ConjureDebugPrimitives.DebugSection;
  obj16 = { children: intl12.string(_modDef3865["Noami/"]) };
  DebugNote = ConjureDebugPrimitives.DebugNote;
  intl12 = intl16.intl;
  return hasOwnProperty(DebugSection, obj15);
}
function StorageSection(status) {
  let intl;
  let intl2;
  let items1;
  let obj2;
  let obj4;
  let tmp;
  let tmp4;
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: intl.string(_modDef3865.V5kbaH), metrics: stable };
    intl = limits(1114).intl;
    let items = [obj3];
    tmp4 = limits;
    items1 = items;
  } else {
    let obj = { key: "preview", label: obj2.debugEnvLabel("preview"), metrics: tmp };
    obj2 = limits(12977);
    items1 = [obj, ];
    let obj5 = { key: "stable", label: obj4.debugEnvLabel("stable"), metrics: stable };
    obj4 = limits(12977);
    items1[1] = obj5;
    tmp4 = limits;
  }
  let obj6 = {
    title: intl2.string(_modDef3865.mRt7MW),
    children: items1.map((item) => {
      let formatToPlainString;
      let intl;
      let intl2;
      let key;
      let label;
      let metrics;
      let obj;
      let obj2;
      let obj5;
      let obj7;
      let obj9;
      let tmp;
      let tmp18Result;
      ({ key, label, metrics } = item);
      if (null == metrics) {
        const obj3 = { label, value: "\u2014" };
        tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const Fragment = react.Fragment;
        const obj4 = { label: intl2.formatToPlainString(_modDef3865.u7kJJ4, obj5), value: obj9.formatBytes(metrics.r2_bytes), hint: formatToPlainString(tmp, obj) };
        const DebugStatRow = ConjureDebugPrimitives.DebugStatRow;
        intl2 = intl16.intl;
        obj5 = { env: label };
        obj9 = ConjureDebugFormat;
        const intl3 = intl16.intl;
        formatToPlainString = intl3.formatToPlainString;
        const r2_truncated = metrics.r2_truncated;
        const tmp32 = _modDef3865;
        obj = { count: obj2.formatCount(metrics.r2_objects) };
        tmp = r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
        obj2 = ConjureDebugFormat;
        const items = [hasOwnProperty(DebugStatRow, obj4), ];
        let tmp4 = null;
        const tmp18 = metroImportDefault;
        const tmp25 = importDefault;
        if (null != metrics.db_bytes) {
          const obj6 = { label: intl.formatToPlainString(tmp25(3865).mnbPqt, obj7), used: metrics.db_bytes, max: limits.db_bytes, formatValue: ConjureDebugFormat.formatBytes };
          const DebugMeter = ConjureDebugPrimitives.DebugMeter;
          intl = intl16.intl;
          obj7 = { env: label };
          tmp4 = hasOwnProperty(DebugMeter, obj6);
        }
        const obj8 = { children: items };
        items[1] = tmp4;
        tmp18Result = tmp18(Fragment, obj8, key);
      }
      return tmp18Result;
    })
  };
  const DebugSection = tmp4(12980).DebugSection;
  intl2 = tmp4(1114).intl;
  return closure_5(DebugSection, obj6);
}
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { tab: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugWorkerTab.tsx");

export default function ConjureDebugWorkerTab(status) {
  let fetchState;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items2;
  let onRefresh;
  let str3;
  let tmp4Result;
  let tmp4Result5;
  status = status.status;
  ({ fetchState, onRefresh } = status);
  let obj = { style: closure_8().tab, children: items };
  let generated_at;
  const DebugSnapshotToolbar = ConjureDebugPrimitives.DebugSnapshotToolbar;
  const tmp2 = View;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  items = [hasOwnProperty(DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: intl.string(_modDef3865.o5xzvl), metrics: status.worker.preview, limits: status.worker.limits };
    intl = tmp4(1114).intl;
    const items1 = [hasOwnProperty(EnvMetricsSection, obj2), , , , , , , , ];
    const obj3 = { title: intl2.string(_modDef3865.n2X3ZK), metrics: status.worker.stable, limits: status.worker.limits };
    intl2 = tmp4(1114).intl;
    items1[1] = hasOwnProperty(EnvMetricsSection, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(StorageSection, obj4);
    let tmp3Result = null;
    const tmp8 = metroRequire;
    if (null != status.bot) {
      const obj5 = {
        title: intl3.string(_modDef3865["7mahem"]),
        preview: status.bot.preview,
        stable: status.bot.stable,
        renderEnv(env, bot) {
              const obj = { env, bot };
              return closure_1_5(BotEnvBlock, obj);
            }
      };
      intl3 = tmp4(1114).intl;
      tmp3Result = tmp3(EnvSection, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = {
        title: intl4.string(_modDef3865.THneIO),
        preview: status.outbound.preview,
        stable: status.outbound.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(OutboundEnvBlock, obj);
            }
      };
      intl4 = tmp4(1114).intl;
      tmp3Result5 = tmp3(EnvSection, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = {
        title: intl5.string(_modDef3865.vboq04),
        preview: status.runtime.preview,
        stable: status.runtime.stable,
        renderEnv(env, runtime) {
              const obj = { env, runtime };
              return closure_1_5(RuntimeEnvBlock, obj);
            }
      };
      intl5 = tmp4(1114).intl;
      tmp3Result6 = tmp3(EnvSection, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = {
        title: intl6.string(_modDef3865.UzhuEq),
        preview: status.ai.preview,
        stable: status.ai.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(AiEnvBlock, obj);
            }
      };
      intl6 = tmp4(1114).intl;
      tmp3Result7 = tmp3(EnvSection, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = tmp3(tmp4(12982).ConjureDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: intl7.string(_modDef3865.fQMpFp), children: items2 };
    const DebugSection = tmp4(12980).DebugSection;
    intl7 = tmp4(1114).intl;
    const obj11 = { label: tmp4Result.debugEnvLabel("preview"), value: str3 };
    const DebugStatRow = tmp4(12980).DebugStatRow;
    let str2 = "\u2014";
    str3 = "\u2014";
    tmp4Result = ConjureDebugLabels;
    if (null != status.deployments.preview_build) {
      const tmp4Result4 = ConjureDebugFormat;
      str3 = tmp4Result4.shortBuildLabel(status.deployments.preview_build);
    }
    items2 = [hasOwnProperty(DebugStatRow, obj11), ];
    const obj12 = { label: tmp4Result5.debugEnvLabel("stable"), value: str2 };
    const DebugStatRow2 = tmp4(12980).DebugStatRow;
    tmp4Result5 = ConjureDebugLabels;
    if (null != status.deployments.stable_build) {
      const tmp4Result6 = ConjureDebugFormat;
      str2 = tmp4Result6.shortBuildLabel(status.deployments.stable_build);
    }
    const obj13 = { children: items1 };
    items2[1] = hasOwnProperty(DebugStatRow2, obj12);
    items1[8] = metroImportDefault(DebugSection, obj10);
    tmpResult = tmp(tmp8, obj13);
  }
  items[1] = tmpResult;
  return metroImportDefault(tmp2, obj);
};
