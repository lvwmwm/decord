// Module ID: 18392
// Function ID: 18393
// Name: syncReactCompilerGate
// Dependencies: [32, 1239, 18393, 1439, 559, 558, 2]
// Exports: persistReactCompilerGate

// Module 18392 (syncReactCompilerGate)
import NativeStartupFlagsModuleDefault from "NativeStartupFlagsModule" /* 559 */;
import apex_ApexExperiment from "apex/ApexExperiment" /* 1439 */;
import ReactCompilerExperiment2 from "ReactCompilerExperiment" /* 18393 */;
import _slicedToArray from "module_32" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;

require = fn;
let c5 = null;
let c6 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/react_compiler/syncReactCompilerGate.native.tsx");

export const persistReactCompilerGate = function persistReactCompilerGate() {
  function sync() {
    if (closure_6 == null) {
      closure_6 = NativeStartupFlagsModuleDefault.reactCompilerAssigned();
    }
    ({ defaultConfig, name, variations } = ReactCompilerExperiment2.ReactCompilerExperiment.definition);
    const tmp5 = _slicedToArray(evaluationAndAssignment.getEvaluationAndAssignment("user", apex_ApexExperiment.getUnitId("user", { location: "persistReactCompilerGate" }), name), 2)[1];
    let variantId;
    if (tmp5 != null) {
      variantId = tmp5.variantId;
    }
    enabled = null;
    if (null != variantId) {
      let useAsEligibility;
      if (tmp5 != null) {
        useAsEligibility = tmp5.useAsEligibility;
      }
      if (true === useAsEligibility) {
        enabled = defaultConfig.enabled;
      } else {
        let tmp9 = variations[variantId];
        let tmp10 = defaultConfig;
        if (typeof tmp9 !== "function") {
          if (tmp9 == null) {
            tmp9 = defaultConfig;
          }
          tmp10 = tmp9;
        }
        enabled = tmp10.enabled;
      }
    }
    if (null != enabled) {
      if (enabled !== enabled) {
        const result = NativeStartupFlagsModuleDefault.setReactCompilerEnabled(enabled);
        const result1 = NativeStartupFlagsModuleDefault.setReactCompilerAssigned(true);
      }
      let isReactCompilerBuildResult = tmp3(558).isReactCompilerBuild();
      if (isReactCompilerBuildResult) {
        isReactCompilerBuildResult = true === closure_6;
      }
      if (isReactCompilerBuildResult) {
        isReactCompilerBuildResult = enabled === tmp3(558).isReactCompilerEnabled();
        const tmp3Result2 = tmp3(558);
      }
      if (isReactCompilerBuildResult) {
        const ReactCompilerExperiment = tmp3(18393).ReactCompilerExperiment;
        const config = ReactCompilerExperiment.getConfig({ location: "persistReactCompilerGate" });
      }
      const tmp3Result = tmp3(558);
    }
  }
  ApexExperimentStore.addChangeListener(sync);
  const timerId = setTimeout(sync, 1000);
};
