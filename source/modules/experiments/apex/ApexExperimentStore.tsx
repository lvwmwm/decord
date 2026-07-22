// Module ID: 1188
// Function ID: 13545
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1188 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[7]);
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let tmp3 = (importDefaultResult) => {
  class ApexExperimentStore {
    constructor() {
      self = this;
      tmp = closure_4(this, ApexExperimentStore);
      items = [, , ];
      items[0] = closure_1(closure_2[9]);
      items[1] = {
        CONNECTION_OPEN(arg0) {
              return tmp2Result.handleConnectionOpen(arg0);
            },
        CONNECTION_OPEN_STATE_UPDATE(apexExperiments) {
              return tmp2Result.setExperimentAssignments(apexExperiments.apexExperiments);
            },
        GUILD_CREATE(arg0) {
              return tmp2Result.handleGuildCreate(arg0);
            },
        APEX_EXPERIMENT_OVERRIDE_CREATE(experimentName) {
              return tmp2Result.createOverride(experimentName.experimentName, experimentName.variantId);
            },
        APEX_EXPERIMENT_OVERRIDE_DELETE(experimentName) {
              return tmp2Result.deleteOverride(experimentName.experimentName);
            },
        APEX_EXPERIMENT_OVERRIDE_CLEAR() {
              return tmp2Result.clearAllOverrides();
            },
        APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE(experimentName) {
              return tmp2Result.createSessionOverride(experimentName.experimentName, experimentName.variantId);
            },
        APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE(experimentName) {
              return tmp2Result.deleteSessionOverride(experimentName.experimentName);
            },
        APEX_EXPERIMENT_CLEAR_FOR_TESTS() {
              return tmp2Result.clearForTests();
            },
        APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(experiments) {
              return tmp2Result.setExperimentsMetadata(experiments.experiments);
            },
        APEX_EXPERIMENTS_FETCH_START(unitId) {
              return tmp2Result.handleFetchStart(unitId.unitId);
            },
        APEX_EXPERIMENTS_FETCH_SUCCESS(unitId) {
              return tmp2Result.handleFetchSuccess(unitId.unitId, unitId.experiments);
            },
        APEX_EXPERIMENTS_FETCH_FAILURE(unitId) {
              return tmp2Result.handleFetchFailure(unitId.unitId);
            },
        LOGOUT(isSwitchingAccount) {
              return tmp2Result.handleLogout(isSwitchingAccount.isSwitchingAccount);
            }
      };
      items[2] = ApexExperimentStore(closure_2[9]).DispatchBand.Early;
      obj = closure_7(ApexExperimentStore);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ApexExperimentStore = tmp2Result;
      tmp2Result.track = (arg0) => {
        const items = [...arguments];
        const items1 = [...items];
        return callback(closure_2[10]).track.apply(items1);
      };
      tmp2Result.surface = "discord_app";
      addChangeListenerResult = tmp2Result.addChangeListener(() => tmp2Result.maybeEmitDebugExperimentEvent());
      return tmp2Result;
    }
  }
  const arg1 = ApexExperimentStore;
  callback2(ApexExperimentStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(closure_9);
      const storedState = this.loadStoredState(arg0, ApexExperimentStore(closure_2[11]).getBuildOverrideExperiments());
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "maybeEmitDebugExperimentEvent",
    value() {
      const self = this;
      const tmp = callback2(this.getEvaluationAndAssignment("user", id.getId(), "2026-03-debug-experiment"), 2)[1];
      let variantId;
      if (null != tmp) {
        variantId = tmp.variantId;
      }
      if (null != variantId) {
        if (0 !== variantId) {
          if (variantId !== self.lastEmittedDebugVariantId) {
            self.lastEmittedDebugVariantId = variantId;
            let obj = callback(closure_2[10]);
            obj = { -9223372036854775808: -299958271, 0: -867106815, 9223372036854775807: 981025026, apex_debug_variant: variantId };
            obj.track(constants.EXPERIMENT_APEX_DEBUGGING_EVENT, obj);
          }
        }
      }
      self.lastEmittedDebugVariantId = undefined;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleConnectionOpen",
    value(guilds) {
      guilds = guilds.guilds;
      return this.setExperimentAssignments(guilds.apexExperiments, guilds.reduce((arg0, experiments) => {
        if (null != experiments.experiments) {
          arg0[experiments.id] = experiments.experiments;
        }
        return arg0;
      }, {}));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleGuildCreate",
    value(guild) {
      const self = this;
      const experiments = guild.guild.experiments;
      if (null == experiments) {
        return true;
      } else {
        const obj = {};
        obj[guild.guild.id] = experiments;
        return self.setGuildExperimentAssignments(obj);
      }
    }
  };
  return callback(ApexExperimentStore, items);
}(importDefault(dependencyMap[6]));
tmp3 = new tmp3();
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/experiments/apex/ApexExperimentStore.tsx");

export default tmp3;
export const ExperimentAssignment = arg1(dependencyMap[6]).ExperimentAssignment;
