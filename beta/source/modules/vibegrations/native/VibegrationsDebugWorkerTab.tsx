// Module ID: 17084
// Function ID: 17085
// Name: VibegrationsDebugWorkerTab
// Dependencies: [19, 17, 21, 4788, 576, 17074, 1115, 3710, 17072, 17071, 17085, 2]
// Exports: default

// Module 17084 (VibegrationsDebugWorkerTab)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3710 from "module_3710" /* 3710 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17071 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 17072 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 17074 */;
import noop from "module_19" /* 19 */;

require = fn;
function EnvSection(title) {
  ({ preview, stable, renderEnv } = title);
  let items = [];
  if (null != preview) {
    const obj = { children: renderEnv("preview", preview) };
    items.push(hasOwnProperty(noop.Fragment, obj, "preview"));
  }
  if (null != stable) {
    const obj2 = { children: renderEnv("stable", stable) };
    items.push(hasOwnProperty(noop.Fragment, obj2, "stable"));
  }
  const obj3 = { title: title.title, children: null };
  if (items.length <= 0) {
    const obj4 = { children: null };
    const intl = tmp8(1115).intl;
    obj4.children = intl.string(_modDef3710.W4hcKL);
    items = tmp7(tmp8(17074).DebugNote, obj4);
  }
  obj3.children = items;
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj3);
}
function BotEnvBlock(arg0) {
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: null, value: null, critical: null, hint: null };
    const intl2 = util.intl;
    const obj4 = { env: VibegrationsDebugLabels.debugEnvLabel(env) };
    obj3.label = intl2.formatToPlainString(_modDef3710.f8ix3w, obj4);
    const tmp6 = React5;
    const tmp7 = timestampProducer;
    obj3.value = VibegrationsDebugLabels.debugYesNo(bot.connected);
    const connected = bot.connected;
    let tmp12 = !connected;
    if (!connected) {
      tmp12 = null != bot.fatal_reason;
    }
    obj3.critical = tmp12;
    let fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp15;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp15 = last_start_reason;
      }
      fatal_reason = tmp15;
    }
    obj3.hint = fatal_reason;
    const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3), , , , ];
    const obj7 = { label: null, value: null, hint: null };
    const intl3 = tmp9(1115).intl;
    obj7.label = intl3.string(_modDef3710["0AB7l3"]);
    obj7.value = VibegrationsDebugFormat.formatCount(bot.events_received);
    let combined;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const _HermesInternal = HermesInternal;
        combined = "" + bot.last_event_type + " \u00B7 " + tmp9(17071).formatObservedAt(bot.last_event_at);
        const tmp9Result6 = tmp9(17071);
      }
    }
    obj7.hint = combined;
    items[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj7);
    const obj8 = { label: null, value: null };
    const intl4 = tmp9(1115).intl;
    obj8.label = intl4.string(_modDef3710.ElaQ0A);
    const tmp9Result = VibegrationsDebugFormat;
    obj8.value = VibegrationsDebugFormat.formatCount(bot.guild_count);
    items[2] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj8);
    const obj9 = { label: null, value: null, hint: null };
    const intl5 = tmp9(1115).intl;
    obj9.label = intl5.string(_modDef3710.SJtBTN);
    const tmp9Result7 = VibegrationsDebugFormat;
    obj9.value = VibegrationsDebugFormat.formatCount(bot.reconnects);
    let formatToPlainStringResult;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = tmp9(1115).intl;
        const obj10 = { code: bot.last_close_code, time: tmp9(17071).formatObservedAt(bot.last_close_at) };
        formatToPlainStringResult = intl6.formatToPlainString(tmp11(3710).bSzLue, obj10);
        const tmp9Result9 = tmp9(17071);
      }
    }
    obj9.hint = formatToPlainStringResult;
    items[3] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: null, value: null, critical: true };
      const intl7 = tmp9(1115).intl;
      obj11.label = intl7.string(tmp11(3710).N4l504);
      obj11.value = tmp9(17071).formatCount(bot.dispatch_errors);
      tmp8Result = tmp8(tmp9(17074).DebugStatRow, obj11);
      const tmp9Result10 = tmp9(17071);
    }
    const obj12 = { children: null };
    items[4] = tmp8Result;
    obj12.children = items;
    let tmp6Result = tmp6(tmp7, obj12);
    const tmp9Result8 = VibegrationsDebugFormat;
  } else {
    const obj = { label: VibegrationsDebugLabels.debugEnvLabel(env), value: null };
    const intl = util.intl;
    obj.value = intl.string(_modDef3710.C6xjtD);
    tmp6Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
  }
  return tmp6Result;
}
function OutboundEnvBlock(metrics) {
  metrics = metrics.metrics;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: VibegrationsDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { requests: null, failures: null };
  const tmp2 = hasOwnProperty;
  obj3.requests = VibegrationsDebugFormat.formatCount(metrics.requests);
  obj3.failures = VibegrationsDebugFormat.formatCount(sum + metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3710.Yur5Zm, obj3);
  obj.critical = metrics.errors + metrics.status_5xx > 0;
  if (null != metrics.last_failure) {
    const intl3 = tmp3(1115).intl;
    const obj6 = { host: metrics.last_failure.host, status: null, time: null };
    let str = metrics.last_failure.status;
    if (str == null) {
      str = "network";
    }
    obj6.status = str;
    obj6.time = tmp3(17071).formatObservedAt(metrics.last_failure.at);
    let formatToPlainStringResult = intl3.formatToPlainString(tmp5(3710)["0ayoy+"], obj6);
    const tmp3Result = tmp3(17071);
  } else {
    const intl2 = tmp3(1115).intl;
    const obj7 = { time: tmp3(17071).formatObservedAt(metrics.since) };
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(3710)["1PdrB1"], obj7);
    const tmp3Result2 = tmp3(17071);
  }
  obj.hint = formatToPlainStringResult;
  return tmp2(VibegrationsDebugPrimitives.DebugStatRow, obj);
}
function RuntimeEnvBlock(env) {
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: null };
  const obj2 = { label: null, value: null };
  let intl = env(1115).intl;
  let obj3 = { env: env(17072).debugEnvLabel(env) };
  obj2.label = intl.formatToPlainString(_modDef3710.BVORfc, obj3);
  let obj4 = env(17072);
  obj2.value = env(17071).formatCount(runtime.connections);
  const items = [closure_5(env(17074).DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    const obj = { label: null, value: null, hint: null };
    const intl = util.intl;
    obj.label = intl.formatToPlainString(_modDef3710.NQxkhU, { id: id.id });
    obj.value = id.trigger;
    if (null != id.pending_state) {
      const intl3 = tmp2(1115).intl;
      const obj3 = { state: null, attempt: null };
      ({ pending_state: obj5.state, pending_attempt } = id);
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      obj3.attempt = pending_attempt;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp4(3710).P8lBrO, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = tmp2(1115).intl;
      const obj4 = { time: tmp2(17071).formatObservedAt(id.next_run_at) };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(3710)["7ecbr3"], obj4);
      const tmp2Result = tmp2(17071);
    }
    obj.hint = formatToPlainStringResult;
    return hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj, "" + env + "-" + id.id);
  });
  obj.children = items;
  return closure_7(closure_6, obj);
}
function AiEnvBlock(metrics) {
  metrics = metrics.metrics;
  const obj = { label: VibegrationsDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { calls: null, errors: null };
  obj3.calls = VibegrationsDebugFormat.formatCount(metrics.calls);
  obj3.errors = VibegrationsDebugFormat.formatCount(metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3710.voXL2a, obj3);
  obj.critical = metrics.errors > 0;
  obj.hint = metrics.last_model;
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
}
function EnvMetricsSection(arg0) {
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      const obj2 = { title, children: null };
      const obj3 = { label: null, value: null, hint: null };
      const intl13 = util.intl;
      obj3.label = intl13.string(_modDef3710.KOnL3g);
      obj3.value = VibegrationsDebugFormat.formatCount(metrics.requests);
      const intl14 = util.intl;
      const obj4 = { time: null };
      obj4.time = VibegrationsDebugFormat.formatObservedAt(metrics.since);
      obj3.hint = intl14.formatToPlainString(_modDef3710["1PdrB1"], obj4);
      const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3), , , , , , ];
      const obj5 = { label: null, value: null, critical: null };
      const intl15 = util.intl;
      obj5.label = intl15.string(_modDef3710.CjPhyY);
      obj5.value = VibegrationsDebugFormat.formatCount(metrics.errors);
      obj5.critical = metrics.errors > 0;
      items[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: null };
        const obj7 = { label: null, used: null, max: null, formatValue: null };
        const intl4 = tmp9(1115).intl;
        obj7.label = intl4.string(tmp12(3710)["V/nNbs"]);
        obj7.used = metrics.cpu_ms_max;
        obj7.max = limits.cpu_ms_per_request;
        obj7.formatValue = tmp9(17071).formatMs;
        const items1 = [tmp11(tmp9(17074).DebugMeter, obj7), ];
        const obj8 = { label: null, value: null, hint: null };
        const intl5 = tmp9(1115).intl;
        obj8.label = intl5.string(tmp12(3710)["+rYPHD"]);
        obj8.value = tmp9(17071).formatMs(metrics.cpu_ms_total / metrics.requests);
        const intl6 = tmp9(1115).intl;
        const obj9 = { total: null, wall: null };
        const tmp9Result = tmp9(17071);
        obj9.total = tmp9(17071).formatMs(metrics.cpu_ms_total);
        const tmp9Result7 = tmp9(17071);
        obj9.wall = tmp9(17071).formatMs(metrics.wall_ms_total);
        obj8.hint = intl6.formatToPlainString(tmp12(3710)["+LxC7W"], obj9);
        items1[1] = tmp11(tmp9(17074).DebugStatRow, obj8);
        obj6.children = items1;
        let tmp = tmp8(timestampProducer, obj6);
        const tmp9Result8 = tmp9(17071);
      } else {
        const obj = { label: null, value: null, hint: null };
        const intl = tmp9(1115).intl;
        obj.label = intl.string(tmp12(3710)["V/nNbs"]);
        const intl2 = tmp9(1115).intl;
        obj.value = intl2.string(tmp12(3710).YKWIxp);
        const intl3 = tmp9(1115).intl;
        obj.hint = intl3.string(tmp12(3710)["8GAiDk"]);
        tmp = tmp11(tmp9(17074).DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp11Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp11Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: null, value: null };
          const intl7 = tmp9(1115).intl;
          obj10.label = intl7.string(tmp12(3710).ueEMPa);
          obj10.value = tmp9(17071).formatMs(metrics.wall_ms_total);
          tmp11Result = tmp11(tmp9(17074).DebugStatRow, obj10);
          const tmp9Result9 = tmp9(17071);
        }
      }
      items[3] = tmp11Result;
      let tmp11Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: null, value: null, critical: true };
        const intl8 = tmp9(1115).intl;
        obj11.label = intl8.string(tmp12(3710).vM2krr);
        obj11.value = tmp9(17071).formatCount(metrics.exceeded_cpu);
        tmp11Result3 = tmp11(tmp9(17074).DebugStatRow, obj11);
        const tmp9Result10 = tmp9(17071);
      }
      items[4] = tmp11Result3;
      const obj12 = { label: null, value: null, critical: null, hint: null };
      const intl9 = tmp9(1115).intl;
      obj12.label = intl9.string(_modDef3710.g1O88C);
      obj12.value = VibegrationsDebugFormat.formatCount(metrics.exceeded_memory);
      obj12.critical = metrics.exceeded_memory > 0;
      const intl10 = tmp9(1115).intl;
      const obj13 = { limit: null };
      const _HermesInternal = HermesInternal;
      obj13.limit = "" + limits.memory_mb + " MB";
      obj12.hint = intl10.formatToPlainString(_modDef3710["5iALNP"], obj13);
      items[5] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj12);
      let tmp11Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: null, value: null };
        const intl11 = tmp9(1115).intl;
        obj14.label = intl11.string(tmp12(3710).JUZs7g);
        obj14.value = tmp9(17071).shortBuildLabel(metrics.build);
        tmp11Result4 = tmp11(tmp9(17074).DebugStatRow, obj14);
        const tmp9Result12 = tmp9(17071);
      }
      items[6] = tmp11Result4;
      obj2.children = items;
      return React5(VibegrationsDebugPrimitives.DebugSection, obj2);
    }
  }
  const obj15 = { title, children: null };
  const obj16 = { children: null };
  const intl12 = util.intl;
  obj16.children = intl12.string(_modDef3710["v/fbnv"]);
  obj15.children = hasOwnProperty(VibegrationsDebugPrimitives.DebugNote, obj16);
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj15);
}
function StorageSection(status) {
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: null, metrics: null };
    let intl = limits(1115).intl;
    obj3.label = intl.string(_modDef3710.Vrh0rD);
    obj3.metrics = stable;
    let items = [obj3];
    let tmp4 = limits;
    let items1 = items;
  } else {
    let obj = { key: "preview", label: limits(17072).debugEnvLabel("preview"), metrics: tmp };
    items1 = [obj, ];
    let obj5 = { key: "stable", label: null, metrics: null };
    let obj2 = limits(17072);
    obj5.label = limits(17072).debugEnvLabel("stable");
    obj5.metrics = stable;
    items1[1] = obj5;
    tmp4 = limits;
    let obj4 = limits(17072);
  }
  let obj6 = { title: null, children: null };
  let intl2 = tmp4(1115).intl;
  obj6.title = intl2.string(_modDef3710.i91625);
  obj6.children = items1.map((item) => {
    ({ key, label, metrics } = item);
    if (null == metrics) {
      const obj3 = { label, value: "\u2014" };
      let tmp18Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3, key);
    } else {
      const obj4 = { label: null, value: null, hint: null };
      const intl2 = util.intl;
      const obj5 = { env: label };
      obj4.label = intl2.formatToPlainString(_modDef3710["9TpIQg"], obj5);
      obj4.value = VibegrationsDebugFormat.formatBytes(metrics.r2_bytes);
      const intl3 = util.intl;
      const tmp32 = _modDef3710;
      const obj = { count: null };
      const tmp = metrics.r2_truncated ? tmp32.o45MMA : tmp32.S7o3vV;
      const tmp18 = React5;
      const tmp20 = hasOwnProperty;
      const tmp25 = importDefault;
      obj.count = VibegrationsDebugFormat.formatCount(metrics.r2_objects);
      obj4.hint = intl3.formatToPlainString(tmp, obj);
      const items = [tmp20(VibegrationsDebugPrimitives.DebugStatRow, obj4), ];
      let tmp4 = null;
      if (null != metrics.db_bytes) {
        const obj6 = { label: null, used: null, max: null, formatValue: null };
        const intl = util.intl;
        const obj7 = { env: label };
        obj6.label = intl.formatToPlainString(tmp25(3710)["0OIswI"], obj7);
        obj6.used = metrics.db_bytes;
        obj6.max = limits.db_bytes;
        obj6.formatValue = VibegrationsDebugFormat.formatBytes;
        tmp4 = hasOwnProperty(VibegrationsDebugPrimitives.DebugMeter, obj6);
      }
      const obj8 = { children: null };
      items[1] = tmp4;
      obj8.children = items;
      tmp18Result = tmp18(noop.Fragment, obj8, key);
    }
    return tmp18Result;
  });
  return closure_5(tmp4(17074).DebugSection, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugWorkerTab.tsx");

export default function VibegrationsDebugWorkerTab(status) {
  status = status.status;
  ({ fetchState, onRefresh } = status);
  const obj = { style: closure_8().tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: null, metrics: null, limits: null };
    const intl = tmp4(1115).intl;
    obj2.title = intl.string(_modDef3710["+dpDma"]);
    obj2.metrics = status.worker.preview;
    obj2.limits = status.worker.limits;
    const items1 = [tmp3(EnvMetricsSection, obj2), , , , , , , , ];
    const obj3 = { title: null, metrics: null, limits: null };
    const intl2 = tmp4(1115).intl;
    obj3.title = intl2.string(_modDef3710.NQHyed);
    obj3.metrics = status.worker.stable;
    obj3.limits = status.worker.limits;
    items1[1] = tmp3(EnvMetricsSection, obj3);
    const obj4 = { status };
    items1[2] = tmp3(StorageSection, obj4);
    let tmp3Result = null;
    if (null != status.bot) {
      const obj5 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl3 = tmp4(1115).intl;
      obj5.title = intl3.string(tmp10(3710).rx1pBg);
      obj5.preview = status.bot.preview;
      obj5.stable = status.bot.stable;
      obj5.renderEnv = function renderEnv(env, bot) {
        return closure_1_5(BotEnvBlock, { env, bot });
      };
      tmp3Result = tmp3(EnvSection, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl4 = tmp4(1115).intl;
      obj6.title = intl4.string(tmp10(3710)["t2+yv/"]);
      obj6.preview = status.outbound.preview;
      obj6.stable = status.outbound.stable;
      obj6.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(OutboundEnvBlock, { env, metrics });
      };
      tmp3Result5 = tmp3(EnvSection, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl5 = tmp4(1115).intl;
      obj7.title = intl5.string(tmp10(3710).QifItp);
      obj7.preview = status.runtime.preview;
      obj7.stable = status.runtime.stable;
      obj7.renderEnv = function renderEnv(env, runtime) {
        return closure_1_5(RuntimeEnvBlock, { env, runtime });
      };
      tmp3Result6 = tmp3(EnvSection, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl6 = tmp4(1115).intl;
      obj8.title = intl6.string(tmp10(3710).SWKshl);
      obj8.preview = status.ai.preview;
      obj8.stable = status.ai.stable;
      obj8.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(AiEnvBlock, { env, metrics });
      };
      tmp3Result7 = tmp3(EnvSection, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = tmp3(tmp4(17085).VibegrationsDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: null, children: null };
    const intl7 = tmp4(1115).intl;
    obj10.title = intl7.string(_modDef3710["HHe+8E"]);
    const obj11 = { label: tmp4(17072).debugEnvLabel("preview"), value: null };
    let str2 = "\u2014";
    let str3 = "\u2014";
    if (null != status.deployments.preview_build) {
      str3 = tmp4(17071).shortBuildLabel(status.deployments.preview_build);
      const tmp4Result4 = tmp4(17071);
    }
    obj11.value = str3;
    const items2 = [tmp3(tmp4(17074).DebugStatRow, obj11), ];
    const obj12 = { label: null, value: null };
    const tmp4Result = tmp4(17072);
    const tmp8 = timestampProducer;
    obj12.label = tmp4(17072).debugEnvLabel("stable");
    if (null != status.deployments.stable_build) {
      str2 = tmp4(17071).shortBuildLabel(status.deployments.stable_build);
      const tmp4Result6 = tmp4(17071);
    }
    const obj13 = { children: null };
    obj12.value = str2;
    items2[1] = tmp3(tmp4(17074).DebugStatRow, obj12);
    obj10.children = items2;
    items1[8] = tmp(tmp4(17074).DebugSection, obj10);
    obj13.children = items1;
    tmpResult = tmp(tmp8, obj13);
    const tmp4Result5 = tmp4(17072);
  }
  items[1] = tmpResult;
  obj.children = items;
  return React5(View, obj);
};
