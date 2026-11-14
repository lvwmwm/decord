// Module ID: 1387
// Function ID: 1388
// Name: ApexLaunchLatch
// Dependencies: [32, 502, 1083, 4, 510, 1251, 1252, 1253, 2]

// Module 1387 (ApexLaunchLatch)
import logger_Logger from "logger/Logger" /* 4 */;
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1083 */;
import _modDef1251 from "module_1251" /* 1251 */;
import ApexLaunchLatchFlags from "ApexLaunchLatchFlags" /* 1252 */;
import ApexUnitUtils from "ApexUnitUtils" /* 1253 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let map, set;

function copy(arg0) {
  return JSON.parse(JSON.stringify(arg0));
}
function getReceiptKey(nextResult) {
  const items = [, , ];
  ({ kind: arr[0], unitId: arr[1], experimentName: arr[2] } = nextResult);
  return JSON.stringify(items);
}
function mergeReceipt(receipt, applied2) {
  let flag = false;
  const tmp = applied2.applied && !receipt.applied;
  if (tmp) {
    receipt.applied = true;
    flag = true;
  }
  const locations = applied2.locations;
  for (const item10012 of locations) {
    let locations2 = receipt.locations;
    let tmp2 = item10012;
    if (!locations2.includes(item10012)) {
      let locations1 = receipt.locations;
      let arr = locations1.push(tmp2);
      flag = true;
    }
    continue;
  }
  return flag;
}
const WebAnalyticsEvents = Constants.WebAnalyticsEvents;
const apexLaunchLatch = "apexLaunchLatch";
const logger = new logger_Logger.Logger("ApexLaunchLatch");
class StorageLaunchLatchBackend {
  constructor() {
    const merged = Object.assign({ receipts: null, recordedReceipts: null });
    merged[0] = [];
    merged[1] = new Map();
    new Map();
    return merged;
  }
  load() {
    try {
      const Storage = Storage2.Storage;
      const value = Storage.get(apexLaunchLatch);
      let schemaVersion;
      if (value != null) {
        schemaVersion = value.schemaVersion;
      }
      if (1 === schemaVersion) {
        const units = tmp5.units;
        let user;
        if (units != null) {
          user = units.user;
        }
        if (null != user) {
          const units2 = tmp5.units;
          let installation;
          if (units2 != null) {
            installation = units2.installation;
          }
          if (null != installation) {
            return value;
          }
        }
      }
    } catch (tmp12) {
      logger.error("Unable to load launch latch", tmp12);
    }
  }
  save(arg0) {
    try {
      const Storage = Storage2.Storage;
      const result = Storage.set(apexLaunchLatch, arg0);
    } catch (tmp6) {
      logger.error("Unable to save launch latch", tmp6);
    }
  }
  recordReceipt(value) {
    const self = this;
    const items = [, , ];
    ({ kind: arr[0], unitId: arr[1], experimentName: arr[2] } = value);
    const json = JSON.stringify(items);
    const recordedReceipts = this.recordedReceipts;
    value = recordedReceipts.get(json);
    if (null == value) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      const parsed = JSON.parse(JSON.stringify(value));
      const recordedReceipts2 = self.recordedReceipts;
      const result = recordedReceipts2.set(json, parsed);
      value = parsed;
    }
    const receipts = self.receipts;
    if (!receipts.includes(value)) {
      const receipts1 = self.receipts;
      receipts1.push(value);
    }
  }
  drainReceipts(arg0) {
    let receipts;
    let receipts2;
    let closure_0 = arg0;
    ({ receipts, receipts: receipts2 } = this);
    const found = receipts.filter((kind) => kind.kind === closure_0);
    this.receipts = receipts2.filter((kind) => kind.kind !== closure_0);
    return found;
  }
}
const prototype = StorageLaunchLatchBackend.prototype;
class ApexLaunchLatch {
  constructor(arg0) {
    let obj3;
    let obj = arg0;
    if (arg0 === undefined) {
      const self = this;
      if (typeof StorageLaunchLatchBackend === "function") {
        const merged = Object.assign({ receipts: null, recordedReceipts: null });
        merged[0] = [];
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        merged[1] = new Map();
        obj = merged;
        map = new Map();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const merged1 = Object.assign({ frozen: null });
    merged1[0] = new Map();
    merged1.backend = obj;
    new Map();
    let loadResult = obj.load();
    if (loadResult == null) {
      const obj2 = { schemaVersion: 1, activeUserId: null, units: obj3 };
      loadResult = obj2;
      obj3 = { user: {}, installation: {} };
    }
    merged1.pending = JSON.parse(JSON.stringify(loadResult));
    merged1.active = JSON.parse(JSON.stringify(merged1.pending));
    merged1.launchUserId = merged1.active.activeUserId;
    let tmp8;
    if (null != merged1.launchUserId) {
      tmp8 = merged1.active.units.user[merged1.launchUserId];
    }
    let parsed;
    if (null != tmp8) {
      const _JSON = JSON;
      const _JSON2 = JSON;
      parsed = JSON.parse(JSON.stringify(tmp8));
    }
    merged1.launchUserEvaluation = parsed;
    return merged1;
  }
  write(arg0, arg1, assignments, activeUserId) {
    let obj2;
    if ("user" !== arg0) {
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(assignments.assignments);
      let evaluationId;
      const fromEntriesResult = fromEntries(entries.filter((item) => {
        let tmp;
        [, tmp] = item;
        return tmp.isAppLaunch;
      }));
      const _Object3 = Object;
      const values = Object.values(fromEntriesResult);
      if (values.some((isOverride) => !isOverride.isOverride)) {
        evaluationId = assignments.evaluationId;
      }
      const self = this;
      const obj = { activeUserId, units: obj2 };
      const merged = Object.assign(this.pending);
      obj2 = {};
      const merged1 = Object.assign(this.pending.units);
      const obj3 = {};
      const merged2 = Object.assign(this.pending.units[arg0]);
      const _JSON = JSON;
      const _JSON2 = JSON;
      const obj4 = { evaluationId, assignments: fromEntriesResult };
      obj3[arg1] = JSON.parse(JSON.stringify(obj4));
      obj2[arg0] = obj3;
      this.pending = obj;
      const backend = this.backend;
      const _JSON3 = JSON;
      const _JSON4 = JSON;
      backend.save(JSON.parse(JSON.stringify(this.pending)));
    } else {
      const tmp = null;
    }
  }
  logout(arg0) {
    let obj3;
    const self = this;
    let tmp = arg0;
    const obj = {};
    const merged = Object.assign(this.pending.units.user);
    if (!arg0) {
      tmp = null == self.pending.activeUserId;
    }
    if (!tmp) {
      delete obj[self.pending.activeUserId];
    }
    const obj2 = { activeUserId: null, units: obj3 };
    const merged1 = Object.assign(self.pending);
    obj3 = { user: obj };
    const merged2 = Object.assign(self.pending.units);
    self.pending = obj2;
    const backend = self.backend;
    backend.save(JSON.parse(JSON.stringify(self.pending)));
  }
  hasAssignment(kind, arg1, experimentName) {
    let launchUserEvaluation;
    const self = this;
    if ("user" === kind) {
      launchUserEvaluation = self.launchUserEvaluation;
    } else {
      launchUserEvaluation = self.active.units.installation[arg1];
    }
    const frozen = self.frozen;
    let hasItem = frozen.has("" + kind + ":" + experimentName);
    if (!hasItem) {
      let tmp4;
      if (launchUserEvaluation != null) {
        const assignments = launchUserEvaluation.assignments;
        const obj = _modDef1251;
        tmp4 = assignments[obj.v3(obj, experimentName)];
      }
      hasItem = null != tmp4;
    }
    return hasItem;
  }
  read(kind, arg1, experimentName, arg3, arg4) {
    let tmp12;
    let tmp15;
    let tmp16;
    let tmp2 = tmp;
    if (tmp2) {
      tmp2 = null == arg1 || "" === arg1;
      const tmp4 = null == arg1 || "" === arg1;
    }
    const self = this;
    let tmp5 = arg3;
    const combined = "" + kind + ":" + experimentName;
    const frozen = this.frozen;
    let value = frozen.get(combined);
    let flag = false;
    if (null == value) {
      let launchUserEvaluation;
      let tmp8;
      let launchUserId = arg1;
      if ("user" === kind) {
        launchUserId = self.launchUserId;
      }
      if ("user" === kind) {
        launchUserEvaluation = self.launchUserEvaluation;
      } else if (null != launchUserId) {
        launchUserEvaluation = self.active.units.installation[launchUserId];
      }
      if (launchUserEvaluation != null) {
        const assignments = launchUserEvaluation.assignments;
        const obj = _modDef1251;
        tmp8 = assignments[obj.v3(obj, experimentName)];
      }
      let str3 = "latch_no_unit";
      if (null != launchUserId) {
        str3 = "latch_no_unit";
        if ("" !== launchUserId) {
          let str4;
          if (null == tmp8) {
            str4 = "latch_no_record";
          }
          str3 = str4;
        }
      }
      const obj2 = { kind, unitId: launchUserId, experimentName, evaluationId: tmp12, assignment: tmp15, locations: [], applied: tmp16, suppression: str3 };
      tmp12 = undefined;
      if (null == str3) {
        let isOverride;
        if (tmp8 != null) {
          isOverride = tmp8.isOverride;
        }
        if (true !== isOverride) {
          let evaluationId;
          if (launchUserEvaluation != null) {
            evaluationId = launchUserEvaluation.evaluationId;
          }
          tmp12 = evaluationId;
        }
      }
      tmp15 = undefined;
      if (null == str3) {
        tmp15 = tmp8;
      }
      tmp16 = tmp5;
      if (tmp16) {
        tmp16 = tmp2 || arg1 === launchUserId;
      }
      if (tmp16) {
        tmp16 = tmp11;
      }
      if (tmp16) {
        let isOverride1;
        if (tmp8 != null) {
          isOverride1 = tmp8.isOverride;
        }
        tmp16 = true !== isOverride1;
      }
      const frozen2 = self.frozen;
      const result = frozen2.set(combined, obj2);
      flag = true;
      value = obj2;
    }
    if (!tmp2) {
      tmp2 = arg1 === value.unitId;
    }
    let tmp20 = null != arg4 && tmp2;
    if (tmp20) {
      const locations = value.locations;
      tmp20 = !locations.includes(arg4);
    }
    if (tmp20) {
      const locations1 = value.locations;
      locations1.push(arg4);
      flag = true;
    }
    if (tmp5) {
      tmp5 = tmp2;
    }
    if (tmp5) {
      tmp5 = !value.applied;
    }
    if (tmp5) {
      tmp5 = null != value.assignment;
    }
    if (tmp5) {
      tmp5 = !value.assignment.isOverride;
    }
    if (tmp5) {
      value.applied = true;
      flag = true;
    }
    if (flag) {
      const backend = self.backend;
      backend.recordReceipt(value);
    }
    return value;
  }
  appliedUsers() {
    const frozen = this.frozen;
    const items = [...frozen.values()];
    return items.filter((kind) => "user" === kind.kind && kind.applied);
  }
  drainReceipts(arg0) {
    const backend = this.backend;
    return backend.drainReceipts(arg0);
  }
}
const prototype2 = ApexLaunchLatch.prototype;
let result = size.fileFinishedImporting("modules/experiments/apex/ApexLaunchLatch.tsx");
class ApexLaunchLatchController {
  constructor(host, track, arg2) {
    let closure_0 = host;
    let fn = arg3;
    if (arg3 === undefined) {
      fn = function c() {
        const obj = ApexLaunchLatchFlags;
        return obj.resolveLaunchLatchFlags(host);
      };
    }
    const merged = Object.assign({ latchUserId: null, latchInstallationId: null, lastLatchUserId: null, appliedLatchUsers: null, authenticatedUsers: null, accountSwitchSuppressions: null, receiptStates: null });
    merged[3] = new Map();
    new Map();
    merged[4] = new Set();
    new Set();
    merged[5] = new Set();
    new Set();
    merged[6] = new Map();
    merged.host = host;
    merged.track = track;
    merged.getLaunchLatchFlags = fn;
    new Map();
    merged.latch = new ApexLaunchLatch(arg2);
    return merged;
  }
  updateUnits() {
    const obj = ApexUnitUtils;
    const unitId = obj.getUnitId("installation", { location: "apex_launch_latch" });
    const setUnits = this.setUnits;
    let id = null;
    const obj2 = AuthenticationStore;
    if (AuthenticationStore.isAuthenticated()) {
      id = obj2.getId();
    }
    let tmp3 = null;
    if ("" !== unitId) {
      tmp3 = unitId;
    }
    setUnits(id, tmp3);
  }
  setUnits(id, unitId) {
    const self = this;
    if (null != id) {
      const authenticatedUsers = self.authenticatedUsers;
      authenticatedUsers.add(id);
    }
    if (null != id) {
      if (null != self.lastLatchUserId) {
        if (id !== self.lastLatchUserId) {
          const accountSwitchSuppressions = self.accountSwitchSuppressions;
          accountSwitchSuppressions.clear();
          if (self.getLaunchLatchFlags().suppressions) {
            const _Map = Map;
            const self2 = this;
            const self3 = this;
            map = new Map(self.appliedLatchUsers);
            const latch = self.latch;
            const appliedUsersResult = latch.appliedUsers();
            for (const item10020 of appliedUsersResult) {
              let result = map.set(item10020.experimentName, item10020);
              continue;
            }
            const values = map.values();
            for (const item10031 of values) {
              let result1 = self.trackAccountSwitchSuppression(item10031.experimentName, item10031.unitId);
              continue;
            }
          }
        }
      }
    }
    if (null != id) {
      self.lastLatchUserId = id;
    }
    self.latchUserId = id;
    self.latchInstallationId = unitId;
  }
  drainReceipts(arg0) {
    let evaluationId;
    let experimentName;
    let revision;
    let trackedVariantId;
    const self = this;
    if (null == arg0) {
      self.drainReceipts("user");
      self.drainReceipts("installation");
    } else if ("user" !== arg0) {
      const launchLatchFlags = self.getLaunchLatchFlags();
      const _Map = Map;
      const self2 = this;
      let self3 = this;
      map = new Map();
      const latch = self.latch;
      const drainReceiptsResult2 = latch.drainReceipts(arg0);
      const iter = drainReceiptsResult2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = nextResult;
        let tmp11 = getReceiptKey(nextResult);
        let tmp12 = tmp11;
        let receiptStates = self.receiptStates;
        let value = receiptStates.get(tmp11);
        let tmp14 = value;
        if (null == value) {
          let obj = { receipt: copy(tmp9), exposedLocations: set };
          let _Set = Set;
          let self4 = this;
          self3 = this;
          set = new Set();
          tmp14 = obj;
          let receiptStates2 = self.receiptStates;
          let result = receiptStates2.set(tmp12, obj);
        } else {
          let tmp18 = mergeReceipt(tmp14.receipt, tmp9);
        }
        let result1 = map.set(tmp12, tmp14);
        continue;
      }
      const values = map.values();
      const iter2 = values[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp33 = nextResult1;
        if ("suppressed" !== nextResult1.outcome) {
          if ("ignored" !== tmp33.outcome) {
            let receipt = tmp33.receipt;
            let tmp87 = receipt;
            let assignment2 = receipt.assignment;
            let isOverride;
            if (assignment2 != null) {
              isOverride = assignment2.isOverride;
            }
            if (isOverride) {
              tmp33.outcome = "ignored";
            } else {
              let tmp35 = "user" === arg0 ? self.latchUserId : self.latchInstallationId;
              let tmp36 = tmp35;
              let applied = "user" === tmp87.kind;
              if (applied) {
                applied = tmp87.applied;
              }
              if (applied) {
                let appliedLatchUsers = self.appliedLatchUsers;
                let result2 = appliedLatchUsers.set(tmp87.experimentName, tmp87);
              }
              let suppression = tmp87.suppression;
              if (suppression == null) {
                let str9 = "latch_no_unit";
                if (null != tmp36) {
                  str9 = "latch_no_unit";
                  if ("" !== tmp36) {
                    let str10;
                    if (tmp87.unitId !== tmp36) {
                      let str11 = "latch_unit_mismatch";
                      if ("user" === tmp87.kind) {
                        str11 = "latch_unit_mismatch";
                        if (null != tmp87.unitId) {
                          let authenticatedUsers = self.authenticatedUsers;
                          str11 = "latch_unit_mismatch";
                          if (authenticatedUsers.has(tmp87.unitId)) {
                            str11 = "latch_account_switched";
                          }
                        }
                      }
                      str10 = str11;
                    } else if (null == tmp87.assignment) {
                      str10 = "latch_no_record";
                    }
                    str9 = str10;
                  }
                }
                suppression = str9;
              }
              let tmp49 = suppression;
              if (null == suppression) {
                if (tmp87.applied) {
                  let assignment = tmp87.assignment;
                  if (launchLatchFlags.exposures) {
                    if (null != tmp87.evaluationId) {
                      if (null != assignment) {
                        if (assignment.exposureTrackingEnabled) {
                          if (!assignment.useAsEligibility) {
                            if (null != assignment.revision) {
                              if (null != tmp36) {
                                tmp33.outcome = "exposed";
                                let _Set2 = Set;
                                let items = ["app_launch"];
                                let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp87.locations, 1);
                                let self5 = this;
                                self3 = this;
                                let set1 = new Set(items);
                                for (const item10143 of set1) {
                                  let tmp65 = item10143;
                                  let exposedLocations = tmp33.exposedLocations;
                                  if (!exposedLocations.has(item10143)) {
                                    let exposedLocations2 = tmp33.exposedLocations;
                                    let tmp68 = item10143;
                                    let addResult = exposedLocations2.add(tmp65);
                                    let host = self.host;
                                    ({ evaluationId, experimentName } = tmp87);
                                    ({ revision, trackedVariantId } = assignment);
                                    let trackExperimentExposure = host.trackExperimentExposure;
                                    if (trackedVariantId == null) {
                                      trackedVariantId = assignment.variantId;
                                    }
                                    self3 = host;
                                    let result3 = trackExperimentExposure(evaluationId, experimentName, tmp68, arg0, revision, trackedVariantId, tmp36);
                                  }
                                  continue;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (tmp33.outcome == null) {
                    tmp33.outcome = "ignored";
                  }
                }
              } else if ("exposed" === tmp33.outcome) {
                continue;
              } else {
                tmp33.outcome = "suppressed";
                if ("latch_account_switched" === tmp49) {
                  let result4 = self.trackAccountSwitchSuppression(tmp87.experimentName, tmp87.unitId);
                } else if (launchLatchFlags.suppressions) {
                  self3 = self;
                  let result5 = self.trackExposureSuppression(tmp87.experimentName, tmp49, tmp87.kind, tmp36);
                }
              }
              continue;
            }
          }
        }
        continue;
      }
    }
  }
  onAssignmentsIngested(arg0, arg1, assignments) {
    if ("guild" !== arg0) {
      const self = this;
      if (this.getLaunchLatchFlags().writer) {
        const obj = {};
        const merged = Object.assign(assignments.assignments);
        const _Object = Object;
        const host = self.host;
        const entries = Object.entries(host.getOverrides());
        const tmp7 = entries[Symbol.iterator]();
        while (tmp7 !== undefined) {
          let tmp13 = _slicedToArray(tmp10, 2);
          let tmp14 = tmp13[1];
          let host2 = self.host;
          let hash = host2.getHash(tmp13[0]);
          let tmp17 = obj[hash];
          let isAppLaunch;
          let tmp16 = hash;
          if (tmp17 != null) {
            isAppLaunch = tmp17.isAppLaunch;
          }
          if (isAppLaunch) {
            let obj2 = { isAppLaunch: true };
            let merged1 = Object.assign(tmp14);
            obj[tmp16] = obj2;
          }
          continue;
        }
        const latch = self.latch;
        const write = latch.write;
        const obj3 = { assignments: obj };
        const merged2 = Object.assign(assignments);
        write(arg0, arg1, obj3, self.latchUserId);
      }
    }
  }
  resolveConfigAssignment(kind, id, experimentName) {
    if ("guild" !== kind) {
      const self = this;
      const host = this.host;
      const serverAssignment = host.getServerAssignment(kind, id, experimentName);
      let isAppLaunch;
      if (serverAssignment != null) {
        isAppLaunch = serverAssignment.isAppLaunch;
      }
      if (isAppLaunch) {
        const launchLatchFlags = self.getLaunchLatchFlags();
        if (launchLatchFlags.writer) {
          const latch2 = self.latch;
          let tmp3 = null;
          const read = latch2.read;
          if (null != id) {
            tmp3 = null;
            if ("" !== id) {
              tmp3 = id;
            }
          }
          const readResult = read(kind, tmp3, experimentName, false);
          self.drainReceipts(kind);
          if (launchLatchFlags.reads) {
            let tmp10 = readResult.unitId === id;
            if (tmp10) {
              tmp10 = "user" !== kind || id === self.latchUserId;
            }
            let tmp12 = "user" !== kind || tmp10 || null == readResult.assignment || readResult.assignment.isOverride || null == readResult.unitId || null == self.latchUserId || self.latchUserId === readResult.unitId;
            if (!tmp12) {
              const authenticatedUsers = self.authenticatedUsers;
              tmp12 = !authenticatedUsers.has(readResult.unitId);
            }
            if (!tmp12) {
              const result = self.trackAccountSwitchSuppression(experimentName, readResult.unitId);
            }
            let evaluationId;
            if (tmp10) {
              evaluationId = readResult.evaluationId;
            }
            return { evaluationId, assignment: readResult.assignment };
          }
        }
      } else {
        const latch = self.latch;
      }
    }
  }
  onConfigApplied(kind, id, name) {
    if ("guild" !== kind) {
      const self = this;
      if (this.getLaunchLatchFlags().reads) {
        const latch = self.latch;
        if (latch.hasAssignment(kind, id, name)) {
          if ("user" === kind) {
            if (null != self.latchUserId) {
              const latch2 = self.latch;
              const read = latch2.read;
            }
          }
          const latch3 = self.latch;
          let tmp13 = null;
          const read2 = latch3.read;
          if (null != id) {
            tmp13 = null;
            if ("" !== id) {
              tmp13 = id;
            }
          }
          read2(kind, tmp13, name, true);
          self.drainReceipts(kind);
        } else {
          const host = self.host;
          const serverAssignment = host.getServerAssignment(kind, id, name);
          let isAppLaunch;
          if (serverAssignment != null) {
            isAppLaunch = serverAssignment.isAppLaunch;
          }
        }
      }
    }
  }
  logout(arg0) {
    const latch = this.latch;
    latch.logout(arg0);
    this.latchUserId = null;
  }
  trackAccountSwitchSuppression(experimentName, unitId) {
    const self = this;
    let suppressions = this.getLaunchLatchFlags().suppressions;
    if (suppressions) {
      const accountSwitchSuppressions = self.accountSwitchSuppressions;
      suppressions = !accountSwitchSuppressions.has(experimentName);
    }
    if (suppressions) {
      const result = self.trackExposureSuppression(experimentName, "latch_account_switched", "user", unitId);
      const accountSwitchSuppressions2 = self.accountSwitchSuppressions;
      accountSwitchSuppressions2.add(experimentName);
    }
  }
  trackExposureSuppression(experiment, suppression_source, unit_type, arg3) {
    const self = this;
    if ("user" === unit_type) {
      const obj2 = { experiment, unit_type, suppression_source };
      self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj2, { flush: true });
    } else {
      let first = arg3;
      if (arg3 == null) {
        const _Object = Object;
        const host = self.host;
        first = Object.keys(host.getState().evaluatedExperiments.installation)[0];
      }
      const obj = { experiment, unit_type, suppression_source, installation_id: first };
      self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
    }
  }
}
const prototype3 = ApexLaunchLatchController.prototype;

export const SHADOW_LATCH_FLAGS = ApexLaunchLatchFlags.SHADOW_LATCH_FLAGS;
export { StorageLaunchLatchBackend };
export { ApexLaunchLatch };
export { ApexLaunchLatchController };
