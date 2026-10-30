// Module ID: 12998
// Function ID: 12999
// Name: ConjureDebugGit
// Dependencies: [32, 19, 10837, 12978, 504, 10868, 572, 2]
// Exports: gitInfoRows, gitInfoStatus, restartAgentStatusLine, useConjureDebugGitInfo, useConjureRestartAgent

// Module 12998 (ConjureDebugGit)
import conjureDebugConnection from "conjureDebugConnection" /* 10868 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12978 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, comparisons;

function decimalBytes(bytes) {
  let tmp4;
  let tmp5;
  const items = [["GB", 1000000000], ["MB", 1000000], ["KB", 1000]];
  const obj = items[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    [tmp4, tmp5] = tmp3;
    if (bytes >= tmp5) {
      let tmp7 = globalThis;
      let _Number = Number;
      let result = bytes / tmp5;
      let _HermesInternal = HermesInternal;
      let str = " ";
      let str2 = "";
      let combined = "" + Number(result.toFixed(1)) + " " + tmp4;
      obj.return();
      return combined;
    }
  }
  return "" + bytes + " B";
}
function comparisonRow(local) {
  let formatCountResult;
  let obj11;
  let obj7;
  let obj9;
  local = local.local;
  let str = "None";
  if (null != local) {
    str = "None";
    if ("" !== local) {
      str = local.slice(0, 12);
    }
  }
  const remote = local.remote;
  let str3 = "None";
  if (null != remote) {
    str3 = "None";
    if ("" !== remote) {
      str3 = remote.slice(0, 12);
    }
  }
  const combined = "container " + str + " \u00B7 remote " + str3;
  let num5 = local.ahead;
  if (num5 == null) {
    num5 = 0;
  }
  let num6 = local.behind;
  if (num6 == null) {
    num6 = 0;
  }
  const obj = { label: closure_9[local.ref], icon: "remote", hint: combined };
  const state = local.state;
  if ("in_sync" === state) {
    const obj2 = { value: "In Sync", state: "ok" };
    const merged = Object.assign(obj);
    return obj2;
  } else if ("ahead" === state) {
    const obj3 = { value: "" + obj11.formatCount(num5) + " Ahead", hint: "" + combined + " \u00B7 not pushed yet", state: "ahead" };
    const merged1 = Object.assign(obj);
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    obj11 = ConjureDebugFormat;
    return obj3;
  } else if ("behind" === state) {
    const obj4 = { value: "" + obj9.formatCount(num6) + " Behind", state: "behind" };
    const merged2 = Object.assign(obj);
    const _HermesInternal3 = HermesInternal;
    obj9 = ConjureDebugFormat;
    return obj4;
  } else if ("diverged" === state) {
    const obj5 = { value: "Diverged (" + formatCountResult + " Ahead, " + obj7.formatCount(num6) + " Behind)", state: "error" };
    const merged3 = Object.assign(obj);
    const obj6 = ConjureDebugFormat;
    const _HermesInternal2 = HermesInternal;
    formatCountResult = obj6.formatCount(num5);
    obj7 = ConjureDebugFormat;
    return obj5;
  } else if ("not_fetched" === state) {
    const obj8 = { value: "Behind", hint: "" + combined + " \u00B7 the remote head isn't in the container", state: "behind" };
    const merged4 = Object.assign(obj);
    const _HermesInternal = HermesInternal;
    return obj8;
  } else if ("missing_remote" === state) {
    const obj10 = { value: "Missing on Remote", state: "error" };
    const merged5 = Object.assign(obj);
    return obj10;
  } else if ("missing_local" === state) {
    const obj12 = { value: "Missing in Container", state: "warning" };
    const merged6 = Object.assign(obj);
    return obj12;
  }
}
let react = react_mod;
let c6 = "Restart Agent";
let closure_7 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
let closure_9 = { main: "Main vs Remote", wip: "WIP vs Remote" };
let closure_11 = ["main", "wip"];
let result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugGit.tsx");

export const RESTART_AGENT_POLL_MS = 2000;
export const RESTART_AGENT_TIMEOUT_MS = 60000;
export const INSTANCE_POLL_STALE_MS = 10000;
export const RESTART_AGENT_RESUME_GRACE_MS = 5000;
export const RESTART_AGENT_LABEL = "Restart Agent";
export const RESTART_AGENT_CLEAR_ALARM_LABEL = "Also Clear Alarm";
export const RESTART_AGENT_CLEAR_ALARM_HINT = "Scheduled wakeups wait until something sets the alarm again.";
export function gitInfoRows(info) {
  let combined1;
  let formatBytesResult;
  let formatCountResult;
  let formatCountResult1;
  let obj20;
  let obj25;
  let obj28;
  let str7;
  let tmp73;
  let tmp74;
  let tmp76;
  let tmp83;
  let tmp84;
  let tmp86;
  let closure_0 = info;
  if (info.running) {
    if (null == info.localError) {
      if (info.checkout) {
        let obj12;
        const items = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
        if (undefined !== info.dirtyFiles) {
          let str6 = "Unknown";
          const push = items.push;
          if (null != info.dirtyFiles) {
            const obj3 = ConjureDebugFormat;
            str6 = obj3.formatCount(info.dirtyFiles);
          }
          const obj2 = { label: "Uncommitted Files", value: str6, hint: str7, icon: "edit" };
          str7 = undefined;
          if (null == info.dirtyFiles) {
            str7 = "git status didn't finish in time.";
          }
          push(obj2);
        }
        const flatMapResult = closure_11.flatMap((item) => {
          comparisons = item;
          comparisons = comparisons.comparisons;
          let found;
          if (comparisons != null) {
            found = comparisons.find((ref) => ref.ref === closure_0);
          }
          if (found == null) {
            found = [];
          }
          return found;
        });
        if (flatMapResult.length > 0) {
          const push2 = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, flatMapResult.map(comparisonRow), 0);
          HermesBuiltin.apply(push2, items1, items);
        } else {
          const main = info.heads.main;
          let str9 = "None";
          const push4 = items.push;
          if (null != main) {
            str9 = "None";
            if ("" !== main) {
              str9 = main.slice(0, 12);
            }
          }
          const wip = info.heads.wip;
          let str10 = "None";
          const obj4 = { label: "Main", value: str9, icon: "remote" };
          if (null != wip) {
            str10 = "None";
            if ("" !== wip) {
              str10 = wip.slice(0, 12);
            }
          }
          const obj5 = { label: "WIP", value: str10, icon: "remote" };
          push4(obj4, obj5);
        }
        let str13 = "Unknown";
        const push3 = items.push;
        if (null != info.commits) {
          const obj7 = ConjureDebugFormat;
          str13 = obj7.formatCount(info.commits);
        }
        const oldest = info.oldest;
        let str14 = "Unknown";
        const obj6 = { label: "Commits", value: str13, icon: "commits" };
        if (null != oldest) {
          str14 = "Unknown";
          if ("" !== oldest) {
            const obj9 = ConjureDebugFormat;
            str14 = obj9.formatObservedAt(oldest);
          }
        }
        const newest = info.newest;
        let str16 = "Unknown";
        const obj8 = { label: "Oldest Commit", value: str14, icon: "calendar" };
        if (null != newest) {
          str16 = "Unknown";
          if ("" !== newest) {
            const obj11 = ConjureDebugFormat;
            str16 = obj11.formatObservedAt(newest);
          }
        }
        const lastSave2 = info.lastSave;
        const obj10 = { label: "Newest Commit", value: str16, icon: "calendar" };
        if (null == lastSave2) {
          obj12 = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
        } else {
          const obj30 = ConjureDebugFormat;
          const formatObservedAtResult = obj30.formatObservedAt(lastSave2.at);
          if (lastSave2.ok) {
            let str20 = lastSave2.status;
            if (str20 == null) {
              str20 = "saved";
            }
            const _HermesInternal4 = HermesInternal;
            obj12 = { label: "Last Save", value: "OK (" + str20 + ")", hint: formatObservedAtResult, icon: "save", state: "ok" };
            const obj13 = { label: "Last Save", value: "OK (" + str20 + ")", hint: formatObservedAtResult, icon: "save", state: "ok" };
          } else {
            let combined = formatObservedAtResult;
            if (null != lastSave2.error) {
              const _HermesInternal3 = HermesInternal;
              combined = "" + formatObservedAtResult + " \u00B7 " + lastSave2.error;
            }
            obj12 = { label: "Last Save", value: "Failed", hint: combined, icon: "save", state: "error" };
          }
        }
        push3(obj6, obj8, obj10, obj12);
        if (null != info.objects) {
          const objects = info.objects;
          let str25 = "1 pack";
          const push5 = items.push;
          if (1 !== objects.packs) {
            const _HermesInternal5 = HermesInternal;
            const obj15 = ConjureDebugFormat;
            str25 = "" + obj15.formatCount(objects.packs) + " packs";
          }
          const obj14 = { label: "Objects", value: "" + formatCountResult + " loose (" + formatBytesResult + ") \u00B7 " + formatCountResult1 + " packed in " + str25 + " (" + obj20.formatBytes(objects.packBytes) + ")", hint: combined1, icon: "objects" };
          const obj17 = ConjureDebugFormat;
          formatCountResult = obj17.formatCount(objects.loose);
          const obj18 = ConjureDebugFormat;
          formatBytesResult = obj18.formatBytes(objects.looseBytes);
          const obj19 = ConjureDebugFormat;
          const _HermesInternal6 = HermesInternal;
          formatCountResult1 = obj19.formatCount(objects.packed);
          combined1 = undefined;
          obj20 = ConjureDebugFormat;
          const tmp36 = require;
          if (objects.garbage > 0) {
            const _HermesInternal7 = HermesInternal;
            const tmp36Result = tmp36(12978);
            combined1 = "" + tmp36Result.formatCount(objects.garbage) + " garbage files";
          }
          push5(obj14);
        }
        let tmp46 = null;
        if (null != info.partialClone) {
          let obj23;
          const obj16 = { label: "Partial Clone", icon: "download" };
          if (info.partialClone) {
            let obj22;
            if (null == info.missingObjects) {
              const obj21 = { value: "Yes", hint: "Counting objects not downloaded didn't finish in time." };
              const merged = Object.assign(obj16);
              obj22 = obj21;
            } else {
              obj22 = { value: "Yes \u00B7 " + obj25.formatCount(info.missingObjects) + " not downloaded", hint: "Fetched on demand; this read never fetches." };
              const merged1 = Object.assign(obj16);
              const _HermesInternal8 = HermesInternal;
              obj25 = ConjureDebugFormat;
            }
            obj23 = obj22;
          } else {
            obj23 = { value: "No" };
            const merged2 = Object.assign(obj16);
          }
          tmp46 = obj23;
        }
        if (null != tmp46) {
          items.push(tmp46);
        }
        if (null != info.localBytes) {
          const localBytes = info.localBytes;
          const push6 = items.push;
          const obj24 = { label: "Repository Size", value: "" + tmp76 + " of " + decimalBytes(localBytes.max) + " \u00B7 " + tmp73, hint: "Local copy: every commit, but only the file versions this container has read.", icon: "size", state: tmp74 };
          [tmp73, tmp74] = closure_7[localBytes.status];
          _slicedToArray(closure_7[localBytes.status], 2);
          const _HermesInternal11 = HermesInternal;
          tmp76 = decimalBytes(localBytes.bytes);
          push6(obj24);
        }
        if (null === info.largestFile) {
          items.push({ label: "Largest File", value: "Unknown", hint: "The scan for it didn't finish in time.", icon: "file" });
        } else if (null != info.largestFile) {
          const largestFile = info.largestFile;
          const push7 = items.push;
          const obj26 = { label: "Largest File", value: "" + tmp86 + " of " + decimalBytes(largestFile.max) + " \u00B7 " + tmp83, hint: "Largest file version in the local copy.", icon: "file", state: tmp84 };
          [tmp83, tmp84] = closure_7[largestFile.status];
          _slicedToArray(closure_7[largestFile.status], 2);
          const _HermesInternal12 = HermesInternal;
          tmp86 = decimalBytes(largestFile.bytes);
          push7(obj26);
        }
        return items;
      } else {
        let obj;
        const items2 = [{ label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" }, ];
        const lastSave = info.lastSave;
        if (null == lastSave) {
          obj = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
        } else {
          const obj29 = ConjureDebugFormat;
          const formatObservedAtResult1 = obj29.formatObservedAt(lastSave.at);
          if (lastSave.ok) {
            let str3 = lastSave.status;
            if (str3 == null) {
              str3 = "saved";
            }
            const _HermesInternal2 = HermesInternal;
            obj = { label: "Last Save", value: "OK (" + str3 + ")", hint: formatObservedAtResult1, icon: "save", state: "ok" };
            const obj27 = { label: "Last Save", value: "OK (" + str3 + ")", hint: formatObservedAtResult1, icon: "save", state: "ok" };
          } else {
            let combined2 = formatObservedAtResult1;
            if (null != lastSave.error) {
              const _HermesInternal = HermesInternal;
              combined2 = "" + formatObservedAtResult1 + " \u00B7 " + lastSave.error;
            }
            obj = { label: "Last Save", value: "Failed", hint: combined2, icon: "save", state: "error" };
          }
        }
        items2[1] = obj;
        return items2;
      }
    }
  }
  const lastSave3 = info.lastSave;
  if (null == lastSave3) {
    obj28 = { label: "Last Save", value: "None since this agent instance started", icon: "save" };
  } else {
    const obj33 = ConjureDebugFormat;
    const formatObservedAtResult2 = obj33.formatObservedAt(lastSave3.at);
    if (lastSave3.ok) {
      let str42 = lastSave3.status;
      if (str42 == null) {
        str42 = "saved";
      }
      const _HermesInternal10 = HermesInternal;
      obj28 = { label: "Last Save", value: "OK (" + str42 + ")", hint: formatObservedAtResult2, icon: "save", state: "ok" };
      const obj31 = { label: "Last Save", value: "OK (" + str42 + ")", hint: formatObservedAtResult2, icon: "save", state: "ok" };
    } else {
      let combined3 = formatObservedAtResult2;
      if (null != lastSave3.error) {
        const _HermesInternal9 = HermesInternal;
        combined3 = "" + formatObservedAtResult2 + " \u00B7 " + lastSave3.error;
      }
      obj28 = { label: "Last Save", value: "Failed", hint: combined3, icon: "save", state: "error" };
    }
  }
  const items3 = [obj28];
  return items3;
}
export function gitInfoStatus(state) {
  let error;
  let error2;
  let info;
  let items7;
  let observedAt;
  let status;
  ({ error, info, observedAt } = state);
  if (state.pending) {
    return { line: "Reading the repository", critical: false };
  } else if (null != error) {
    return { line: error, critical: true };
  } else if (null == observedAt) {
    return { line: "", critical: false };
  } else {
    const items = [];
    if (null != info) {
      if (info.running) {
        if (null != info.localError) {
          const _HermesInternal = HermesInternal;
          const push = items.push;
          const items1 = ["Workspace unreadable: " + info.localError, true];
          push(items1);
        } else if (null != info.localWarning) {
          const items2 = ["Read stopped early; some rows were not read", true];
          items.push(items2);
        }
      } else {
        const items3 = ["Workspace not running", false];
        items.push(items3);
      }
      ({ status, error: error2 } = info.remote);
      if ("missing" === status) {
        const items4 = ["Remote repository missing", true];
        items.push(items4);
      }
      if ("error" === status) {
        const push2 = items.push;
        if (error2 == null) {
          error2 = "unknown error";
        }
        const _HermesInternal2 = HermesInternal;
        const items5 = ["Remote read failed: " + error2, true];
        push2(items5);
      }
      if ("disabled" === status) {
        const items6 = ["Source repositories are off", false];
        items.push(items6);
      }
    }
    const _HermesInternal3 = HermesInternal;
    const obj = {
      line: items7.join(" \u00B7 "),
      critical: items.some((item) => {
          let tmp;
          [, tmp] = item;
          return tmp;
        })
    };
    items7 = [];
    const obj2 = ConjureDebugFormat;
    items7[0] = "Updated " + obj2.formatObservedAt(observedAt);
    HermesBuiltin.arraySpread(items7, items.map((item) => {
      let tmp;
      [tmp] = item;
      return tmp;
    }), 1);
    return obj;
  }
}
export function restartAgentStatusLine(state) {
  const phase = state.phase;
  if ("idle" === phase) {
    return "Starts a new agent instance; the container keeps running.";
  } else if ("pending" === phase) {
    return "Asking the worker to restart.";
  } else if ("restarting" === phase) {
    return "Restarting; waiting for a new instance to answer.";
  } else if ("restarted" === phase) {
    const _HermesInternal2 = HermesInternal;
    const obj2 = ConjureDebugFormat;
    return "Restarted \u00B7 new instance since " + obj2.formatObservedAt(state.instanceSince);
  } else if ("failed" === phase) {
    const reason = state.reason;
    const _HermesInternal = HermesInternal;
    const obj = ConjureDebugFormat;
    return "Failed: " + reason + " \u00B7 " + obj.formatObservedAt(state.observedAt);
  }
}
export function useConjureDebugGitInfo(projectId) {
  let items;
  let items1;
  let items2;
  let obj2;
  _require = projectId;
  let obj = {
    state: obj2.useStateFromStores(items, () => ConjureDebugStore.getGitInfoState(projectId), items1),
    load: react.useCallback(() => {
      const obj = conjureDebugConnection;
      return obj.requestConjureDebugGitInfo(projectId);
    }, items2)
  };
  items = [ConjureDebugStore];
  items1 = [projectId];
  items2 = [projectId];
  obj2 = require("get initialized");
  return obj;
}
export function useConjureRestartAgent(projectId) {
  let callback;
  let instanceSince;
  let ref;
  let startedAt;
  let tmp10;
  _require = projectId;
  let obj = require("get initialized");
  const items = [ConjureDebugStore];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureDebugStore.getRestartAgentState(projectId), items1);
  let tmp2 = instanceSince(react.useState(false), 2);
  const clearAlarm = tmp2[0];
  startedAt = null;
  const tmp4 = tmp2[1];
  if ("restarting" === stateFromStores.phase) {
    startedAt = stateFromStores.startedAt;
  }
  instanceSince = null;
  if ("restarted" === stateFromStores.phase) {
    instanceSince = stateFromStores.instanceSince;
  }
  react = obj2.useRef(instanceSince);
  const items2 = [projectId, instanceSince];
  const effect = obj2.useEffect(() => {
    const tmp2 = null != instanceSince && tmp !== ref.current;
    if (tmp2) {
      ref.current = instanceSince;
      const obj = conjureDebugConnection;
      const conjureDebugGitInfo = obj.requestConjureDebugGitInfo(projectId);
    }
  }, items2);
  const items3 = [projectId, startedAt];
  const effect1 = obj2.useEffect(() => {
    let closure_1;
    let tmp;
    if (null != startedAt) {
      let tmp3 = projectId;
      let instancePollRequestedAt = ConjureDebugStore.getInstancePollRequestedAt(projectId);
      let tmp5 = null != instancePollRequestedAt;
      if (tmp5) {
        let _Date = Date;
        tmp5 = Date.now() - instancePollRequestedAt < 10000;
      }
      if (!tmp5) {
        let obj = projectId(startedAt[5]);
        let result = obj.pollConjureDebugInstance(tmp3);
      }
      const _setInterval = setInterval;
      projectId = setInterval(function poll() {
        const instancePollRequestedAt = ConjureDebugStore.getInstancePollRequestedAt(projectId);
        let tmp3 = null != instancePollRequestedAt;
        const tmp = projectId;
        if (tmp3) {
          const _Date = Date;
          tmp3 = Date.now() - instancePollRequestedAt < 10000;
        }
        if (!tmp3) {
          const obj = projectId(startedAt[5]);
          const result = obj.pollConjureDebugInstance(tmp);
        }
      }, 2000);
      const _setTimeout = setTimeout;
      const _Math = Math;
      const _Date2 = Date;
      const sum = tmp + 60000;
      const timeout = setTimeout(() => {
        let date;
        const obj = { type: "CONJURE_RESTART_AGENT_RESULT", projectId, outcome: "timed_out", reason: "No new agent instance answered within 60 s", observedAt: date.toISOString() };
        const dispatch = first(startedAt[6]).dispatch;
        first(startedAt[6]);
        date = new Date();
        return dispatch(obj);
      }, Math.max(5000, sum - Date.now()));
      return () => {
        clearInterval(projectId);
        clearTimeout(closure_1);
      };
    }
  }, items3);
  const items4 = [projectId, clearAlarm];
  const obj3 = { state: stateFromStores, busy: tmp10, clearAlarm, setClearAlarm: tmp4, confirmCopy: obj4, restart: callback };
  tmp10 = "pending" === stateFromStores.phase;
  callback = obj2.useCallback(() => {
    const obj = conjureDebugConnection;
    return obj.restartConjureAgent(projectId, first);
  }, items4);
  if (!tmp10) {
    tmp10 = "restarting" === stateFromStores.phase;
  }
  let str = "The pending alarm is kept.";
  if (clearAlarm) {
    str = "The pending alarm is cleared, so scheduled wakeups wait until something sets it again.";
  }
  return obj3;
}
