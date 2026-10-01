// Module ID: 16424
// Function ID: 16425
// Name: VibegrationsDebugWorkerTab
// Dependencies: [19, 17, 21, 4836, 576, 16414, 1115, 3715, 16412, 16411, 16425, 2]
// Exports: default

// Module 16424 (VibegrationsDebugWorkerTab)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl16 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16411 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16412 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16414 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  const DebugSection = VibegrationsDebugPrimitives.DebugSection;
  if (items.length <= 0) {
    const obj4 = { children: intl.string(_modDef3715.W4hcKL) };
    const DebugNote = tmp8(16414).DebugNote;
    intl = tmp8(1115).intl;
    items = tmp7(DebugNote, obj4);
  }
  return hasOwnProperty(DebugSection, obj3);
}
function BotEnvBlock(arg0) {
  let bot;
  let combined;
  let env;
  let f8ix3w;
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
  let tmp12;
  let tmp6Result;
  let tmp9Result;
  let tmp9Result10;
  let tmp9Result7;
  let tmp9Result8;
  let tmp9Result9;
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: formatToPlainString(f8ix3w, obj4), value: obj6.debugYesNo(bot.connected), critical: tmp12, hint: fatal_reason };
    const DebugStatRow2 = VibegrationsDebugPrimitives.DebugStatRow;
    const intl2 = intl16.intl;
    formatToPlainString = intl2.formatToPlainString;
    obj4 = { env: obj5.debugEnvLabel(env) };
    f8ix3w = _modDef3715.f8ix3w;
    obj5 = VibegrationsDebugLabels;
    tmp12 = !bot.connected;
    obj6 = VibegrationsDebugLabels;
    const tmp6 = metroImportDefault;
    const tmp7 = metroRequire;
    if (tmp12) {
      tmp12 = null != bot.fatal_reason;
    }
    fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp15;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp15 = last_start_reason;
      }
      fatal_reason = tmp15;
    }
    const items = [hasOwnProperty(DebugStatRow2, obj3), , , , ];
    const obj7 = { label: intl3.string(_modDef3715["0AB7l3"]), value: tmp9Result.formatCount(bot.events_received), hint: combined };
    const DebugStatRow3 = tmp9(16414).DebugStatRow;
    intl3 = tmp9(1115).intl;
    combined = undefined;
    tmp9Result = VibegrationsDebugFormat;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const last_event_type = bot.last_event_type;
        const _HermesInternal = HermesInternal;
        const tmp9Result6 = VibegrationsDebugFormat;
        combined = "" + last_event_type + " \u00B7 " + tmp9Result6.formatObservedAt(bot.last_event_at);
      }
    }
    items[1] = hasOwnProperty(DebugStatRow3, obj7);
    const obj8 = { label: intl4.string(_modDef3715.ElaQ0A), value: tmp9Result7.formatCount(bot.guild_count) };
    const DebugStatRow4 = tmp9(16414).DebugStatRow;
    intl4 = tmp9(1115).intl;
    tmp9Result7 = VibegrationsDebugFormat;
    items[2] = hasOwnProperty(DebugStatRow4, obj8);
    const obj9 = { label: intl5.string(_modDef3715.SJtBTN), value: tmp9Result8.formatCount(bot.reconnects), hint: formatToPlainString2Result };
    const DebugStatRow5 = tmp9(16414).DebugStatRow;
    intl5 = tmp9(1115).intl;
    formatToPlainString2Result = undefined;
    tmp9Result8 = VibegrationsDebugFormat;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = tmp9(1115).intl;
        const formatToPlainString2 = intl6.formatToPlainString;
        const obj10 = { code: bot.last_close_code, time: tmp9Result9.formatObservedAt(bot.last_close_at) };
        const bSzLue = tmp11(3715).bSzLue;
        tmp9Result9 = VibegrationsDebugFormat;
        formatToPlainString2Result = formatToPlainString2(bSzLue, obj10);
      }
    }
    items[3] = hasOwnProperty(DebugStatRow5, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: intl7.string(_modDef3715.N4l504), value: tmp9Result10.formatCount(bot.dispatch_errors), critical: true };
      const DebugStatRow6 = tmp9(16414).DebugStatRow;
      intl7 = tmp9(1115).intl;
      tmp9Result10 = VibegrationsDebugFormat;
      tmp8Result = tmp8(DebugStatRow6, obj11);
    }
    const obj12 = { children: items };
    items[4] = tmp8Result;
    tmp6Result = tmp6(tmp7, obj12);
  } else {
    const obj = { label: obj2.debugEnvLabel(env), value: intl.string(_modDef3715.C6xjtD) };
    const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
    obj2 = VibegrationsDebugLabels;
    intl = intl16.intl;
    tmp6Result = hasOwnProperty(DebugStatRow, obj);
  }
  return tmp6Result;
}
function OutboundEnvBlock(metrics) {
  let Yur5Zm;
  let formatToPlainString;
  let formatToPlainString3Result;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let str;
  let tmp3Result;
  let tmp3Result2;
  metrics = metrics.metrics;
  const env = metrics.env;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(Yur5Zm, obj3), critical: metrics.errors + metrics.status_5xx > 0, hint: formatToPlainString3Result };
  const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
  obj2 = VibegrationsDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { requests: obj4.formatCount(metrics.requests), failures: obj5.formatCount(sum + metrics.errors) };
  Yur5Zm = _modDef3715.Yur5Zm;
  obj4 = VibegrationsDebugFormat;
  obj5 = VibegrationsDebugFormat;
  const tmp2 = hasOwnProperty;
  if (null != metrics.last_failure) {
    const intl3 = tmp3(1115).intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const obj6 = { host: metrics.last_failure.host, status: str, time: tmp3Result.formatObservedAt(metrics.last_failure.at) };
    str = metrics.last_failure.status;
    const prop = tmp5(3715)["0ayoy+"];
    if (str == null) {
      str = "network";
    }
    tmp3Result = VibegrationsDebugFormat;
    formatToPlainString3Result = formatToPlainString3(prop, obj6);
  } else {
    const intl2 = tmp3(1115).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj7 = { time: tmp3Result2.formatObservedAt(metrics.since) };
    const v1PdrB1 = tmp5(3715)["1PdrB1"];
    tmp3Result2 = VibegrationsDebugFormat;
    formatToPlainString3Result = formatToPlainString2(v1PdrB1, obj7);
  }
  return tmp2(DebugStatRow, obj);
}
function RuntimeEnvBlock(env) {
  let BVORfc;
  let formatToPlainString;
  let items;
  let obj3;
  let obj4;
  let obj5;
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: items };
  let obj2 = { label: formatToPlainString(BVORfc, obj3), value: obj5.formatCount(runtime.connections) };
  let DebugStatRow = env(16414).DebugStatRow;
  let intl = env(1115).intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { env: obj4.debugEnvLabel(env) };
  BVORfc = _modDef3715.BVORfc;
  obj4 = env(16412);
  obj5 = env(16411);
  items = [closure_5(DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    let formatToPlainString2Result;
    let intl;
    let obj2;
    let pending_attempt;
    let tmp2Result;
    const obj = { label: intl.formatToPlainString(_modDef3715.NQxkhU, obj2), value: id.trigger, hint: formatToPlainString2Result };
    const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
    intl = intl16.intl;
    obj2 = { id: id.id };
    const tmp = hasOwnProperty;
    if (null != id.pending_state) {
      const intl3 = tmp2(1115).intl;
      const formatToPlainString2 = intl3.formatToPlainString;
      const obj3 = { state: null, attempt: pending_attempt };
      ({ pending_state: obj5.state, pending_attempt } = id);
      const P8lBrO = tmp4(3715).P8lBrO;
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      formatToPlainString2Result = formatToPlainString2(P8lBrO, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = tmp2(1115).intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj4 = { time: tmp2Result.formatObservedAt(id.next_run_at) };
      const v7ecbr3 = tmp4(3715)["7ecbr3"];
      tmp2Result = VibegrationsDebugFormat;
      formatToPlainString2Result = formatToPlainString(v7ecbr3, obj4);
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
  let voXL2a;
  metrics = metrics.metrics;
  const env = metrics.env;
  const obj = { label: obj2.debugEnvLabel(env), value: formatToPlainString(voXL2a, obj3), critical: metrics.errors > 0, hint: metrics.last_model };
  const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
  obj2 = VibegrationsDebugLabels;
  const intl = intl16.intl;
  formatToPlainString = intl.formatToPlainString;
  obj3 = { calls: obj4.formatCount(metrics.calls), errors: obj5.formatCount(metrics.errors) };
  voXL2a = _modDef3715.voXL2a;
  obj4 = VibegrationsDebugFormat;
  obj5 = VibegrationsDebugFormat;
  return hasOwnProperty(DebugStatRow, obj);
}
function EnvMetricsSection(arg0) {
  let DebugNote;
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
  let prop;
  let title;
  let tmp11Result;
  let tmp11Result10;
  let tmp11Result11;
  let tmp11Result12;
  let tmp11Result7;
  let tmp11Result8;
  let tmp11Result9;
  let v1PdrB1;
  let v5iALNP;
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      let tmp;
      const obj2 = { title, children: items };
      const DebugSection2 = VibegrationsDebugPrimitives.DebugSection;
      const obj3 = { label: intl13.string(_modDef3715.KOnL3g), value: obj22.formatCount(metrics.requests), hint: formatToPlainString3(v1PdrB1, obj4) };
      const DebugStatRow7 = VibegrationsDebugPrimitives.DebugStatRow;
      intl13 = intl16.intl;
      obj22 = VibegrationsDebugFormat;
      const intl14 = intl16.intl;
      formatToPlainString3 = intl14.formatToPlainString;
      obj4 = { time: obj24.formatObservedAt(metrics.since) };
      v1PdrB1 = _modDef3715["1PdrB1"];
      obj24 = VibegrationsDebugFormat;
      items = [hasOwnProperty(DebugStatRow7, obj3), , , , , , ];
      const obj5 = { label: intl15.string(_modDef3715.CjPhyY), value: obj26.formatCount(metrics.errors), critical: metrics.errors > 0 };
      const DebugStatRow8 = VibegrationsDebugPrimitives.DebugStatRow;
      intl15 = intl16.intl;
      obj26 = VibegrationsDebugFormat;
      items[1] = hasOwnProperty(DebugStatRow8, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: items1 };
        const obj7 = { label: intl4.string(_modDef3715["V/nNbs"]), used: metrics.cpu_ms_max, max: limits.cpu_ms_per_request, formatValue: VibegrationsDebugFormat.formatMs };
        const DebugMeter = tmp11(16414).DebugMeter;
        intl4 = tmp11(1115).intl;
        items1 = [hasOwnProperty(DebugMeter, obj7), ];
        const obj8 = { label: intl5.string(_modDef3715["+rYPHD"]), value: tmp11Result.formatMs(metrics.cpu_ms_total / metrics.requests), hint: formatToPlainString(prop, obj9) };
        const DebugStatRow2 = tmp11(16414).DebugStatRow;
        intl5 = tmp11(1115).intl;
        tmp11Result = VibegrationsDebugFormat;
        const intl6 = tmp11(1115).intl;
        formatToPlainString = intl6.formatToPlainString;
        obj9 = { total: tmp11Result7.formatMs(metrics.cpu_ms_total), wall: tmp11Result8.formatMs(metrics.wall_ms_total) };
        prop = tmp14(3715)["+LxC7W"];
        tmp11Result7 = VibegrationsDebugFormat;
        tmp11Result8 = VibegrationsDebugFormat;
        items1[1] = hasOwnProperty(DebugStatRow2, obj8);
        tmp = tmp10(metroRequire, obj6);
      } else {
        const obj = { label: intl.string(_modDef3715["V/nNbs"]), value: intl2.string(_modDef3715.YKWIxp), hint: intl3.string(_modDef3715["8GAiDk"]) };
        const DebugStatRow = tmp11(16414).DebugStatRow;
        intl = tmp11(1115).intl;
        intl2 = tmp11(1115).intl;
        intl3 = tmp11(1115).intl;
        tmp = tmp13(DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp13Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp13Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: intl7.string(_modDef3715.ueEMPa), value: tmp11Result9.formatMs(metrics.wall_ms_total) };
          const DebugStatRow3 = tmp11(16414).DebugStatRow;
          intl7 = tmp11(1115).intl;
          tmp11Result9 = VibegrationsDebugFormat;
          tmp13Result = tmp13(DebugStatRow3, obj10);
        }
      }
      items[3] = tmp13Result;
      let tmp13Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: intl8.string(_modDef3715.vM2krr), value: tmp11Result10.formatCount(metrics.exceeded_cpu), critical: true };
        const DebugStatRow4 = tmp11(16414).DebugStatRow;
        intl8 = tmp11(1115).intl;
        tmp11Result10 = VibegrationsDebugFormat;
        tmp13Result3 = tmp13(DebugStatRow4, obj11);
      }
      items[4] = tmp13Result3;
      const obj12 = { label: intl9.string(_modDef3715.g1O88C), value: tmp11Result11.formatCount(metrics.exceeded_memory), critical: metrics.exceeded_memory > 0, hint: formatToPlainString2(v5iALNP, obj13) };
      const DebugStatRow5 = tmp11(16414).DebugStatRow;
      intl9 = tmp11(1115).intl;
      tmp11Result11 = VibegrationsDebugFormat;
      const intl10 = tmp11(1115).intl;
      formatToPlainString2 = intl10.formatToPlainString;
      const _HermesInternal = HermesInternal;
      obj13 = { limit: "" + limits.memory_mb + " MB" };
      v5iALNP = tmp14(3715)["5iALNP"];
      items[5] = hasOwnProperty(DebugStatRow5, obj12);
      let tmp13Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: intl11.string(_modDef3715.JUZs7g), value: tmp11Result12.shortBuildLabel(metrics.build) };
        const DebugStatRow6 = tmp11(16414).DebugStatRow;
        intl11 = tmp11(1115).intl;
        tmp11Result12 = VibegrationsDebugFormat;
        tmp13Result4 = tmp13(DebugStatRow6, obj14);
      }
      items[6] = tmp13Result4;
      return metroImportDefault(DebugSection2, obj2);
    }
  }
  const obj15 = { title, children: hasOwnProperty(DebugNote, obj16) };
  const DebugSection = VibegrationsDebugPrimitives.DebugSection;
  obj16 = { children: intl12.string(_modDef3715["v/fbnv"]) };
  DebugNote = VibegrationsDebugPrimitives.DebugNote;
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
    let obj3 = { key: "shared", label: intl.string(_modDef3715.Vrh0rD), metrics: stable };
    intl = limits(1115).intl;
    let items = [obj3];
    tmp4 = limits;
    items1 = items;
  } else {
    let obj = { key: "preview", label: obj2.debugEnvLabel("preview"), metrics: tmp };
    obj2 = limits(16412);
    items1 = [obj, ];
    let obj5 = { key: "stable", label: obj4.debugEnvLabel("stable"), metrics: stable };
    obj4 = limits(16412);
    items1[1] = obj5;
    tmp4 = limits;
  }
  let obj6 = {
    title: intl2.string(_modDef3715.i91625),
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
        tmp18Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3, key);
      } else {
        const Fragment = react.Fragment;
        const obj4 = { label: intl2.formatToPlainString(_modDef3715["9TpIQg"], obj5), value: obj9.formatBytes(metrics.r2_bytes), hint: formatToPlainString(tmp, obj) };
        const DebugStatRow = VibegrationsDebugPrimitives.DebugStatRow;
        intl2 = intl16.intl;
        obj5 = { env: label };
        obj9 = VibegrationsDebugFormat;
        const intl3 = intl16.intl;
        formatToPlainString = intl3.formatToPlainString;
        const r2_truncated = metrics.r2_truncated;
        const tmp32 = _modDef3715;
        obj = { count: obj2.formatCount(metrics.r2_objects) };
        tmp = r2_truncated ? tmp32.o45MMA : tmp32.S7o3vV;
        obj2 = VibegrationsDebugFormat;
        const items = [hasOwnProperty(DebugStatRow, obj4), ];
        let tmp4 = null;
        const tmp18 = metroImportDefault;
        const tmp25 = importDefault;
        if (null != metrics.db_bytes) {
          const obj6 = { label: intl.formatToPlainString(tmp25(3715)["0OIswI"], obj7), used: metrics.db_bytes, max: limits.db_bytes, formatValue: VibegrationsDebugFormat.formatBytes };
          const DebugMeter = VibegrationsDebugPrimitives.DebugMeter;
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
  const DebugSection = tmp4(16414).DebugSection;
  intl2 = tmp4(1115).intl;
  return closure_5(DebugSection, obj6);
}
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { tab: obj2 };
obj2 = { gap: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugWorkerTab.tsx");

export default function VibegrationsDebugWorkerTab(status) {
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
  const DebugSnapshotToolbar = VibegrationsDebugPrimitives.DebugSnapshotToolbar;
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
    const obj2 = { title: intl.string(_modDef3715["+dpDma"]), metrics: status.worker.preview, limits: status.worker.limits };
    intl = tmp4(1115).intl;
    const items1 = [hasOwnProperty(EnvMetricsSection, obj2), , , , , , , , ];
    const obj3 = { title: intl2.string(_modDef3715.NQHyed), metrics: status.worker.stable, limits: status.worker.limits };
    intl2 = tmp4(1115).intl;
    items1[1] = hasOwnProperty(EnvMetricsSection, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(StorageSection, obj4);
    let tmp3Result = null;
    const tmp8 = metroRequire;
    if (null != status.bot) {
      const obj5 = {
        title: intl3.string(_modDef3715.rx1pBg),
        preview: status.bot.preview,
        stable: status.bot.stable,
        renderEnv(env, bot) {
              const obj = { env, bot };
              return closure_1_5(BotEnvBlock, obj);
            }
      };
      intl3 = tmp4(1115).intl;
      tmp3Result = tmp3(EnvSection, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = {
        title: intl4.string(_modDef3715["t2+yv/"]),
        preview: status.outbound.preview,
        stable: status.outbound.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(OutboundEnvBlock, obj);
            }
      };
      intl4 = tmp4(1115).intl;
      tmp3Result5 = tmp3(EnvSection, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = {
        title: intl5.string(_modDef3715.QifItp),
        preview: status.runtime.preview,
        stable: status.runtime.stable,
        renderEnv(env, runtime) {
              const obj = { env, runtime };
              return closure_1_5(RuntimeEnvBlock, obj);
            }
      };
      intl5 = tmp4(1115).intl;
      tmp3Result6 = tmp3(EnvSection, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = {
        title: intl6.string(_modDef3715.SWKshl),
        preview: status.ai.preview,
        stable: status.ai.stable,
        renderEnv(env, metrics) {
              const obj = { env, metrics };
              return closure_1_5(AiEnvBlock, obj);
            }
      };
      intl6 = tmp4(1115).intl;
      tmp3Result7 = tmp3(EnvSection, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = tmp3(tmp4(16425).VibegrationsDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: intl7.string(_modDef3715["HHe+8E"]), children: items2 };
    const DebugSection = tmp4(16414).DebugSection;
    intl7 = tmp4(1115).intl;
    const obj11 = { label: tmp4Result.debugEnvLabel("preview"), value: str3 };
    const DebugStatRow = tmp4(16414).DebugStatRow;
    let str2 = "\u2014";
    str3 = "\u2014";
    tmp4Result = VibegrationsDebugLabels;
    if (null != status.deployments.preview_build) {
      const tmp4Result4 = VibegrationsDebugFormat;
      str3 = tmp4Result4.shortBuildLabel(status.deployments.preview_build);
    }
    items2 = [hasOwnProperty(DebugStatRow, obj11), ];
    const obj12 = { label: tmp4Result5.debugEnvLabel("stable"), value: str2 };
    const DebugStatRow2 = tmp4(16414).DebugStatRow;
    tmp4Result5 = VibegrationsDebugLabels;
    if (null != status.deployments.stable_build) {
      const tmp4Result6 = VibegrationsDebugFormat;
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
