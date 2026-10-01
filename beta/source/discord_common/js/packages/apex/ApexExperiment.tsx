// Module ID: 1437
// Function ID: 1438
// Name: discord_common/apex/ApexExperiment
// Dependencies: [32, 19, 4, 504, 2]
// Exports: default

// Module 1437 (discord_common/apex/ApexExperiment)
import logger_Logger from "logger/Logger" /* 4 */;
import react from "react" /* 19 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_3;

const useEffect = react.useEffect;
const logger = new logger_Logger.Logger("ApexExperiment");
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment, arg2, arg3) {
  let closure_5;
  let closure_6;
  let closure_7;
  function computeVariantConfig(config) {
    let tmp = closure_1_6[config.variantId];
    if (tmp == null) {
      tmp = closure_1_7;
    }
    if (typeof tmp !== "function") {
      return tmp;
    } else if (null == config.config) {
      return closure_1_7;
    } else {
      try {
        return tmp(config.config);
      } catch (tmp2) {
        const _HermesInternal = HermesInternal;
        logger.error("Failed to parse dynamic config for experiment " + closure_1_4, tmp2);
        return null;
      }
    }
  }
  let closure_1 = arg2;
  let closure_2 = arg3;
  ({ name: logger, kind: closure_5, variations: closure_6, defaultConfig: closure_7 } = definition);
  registerExperiment.registerExperiment(definition);
  let closure_8 = null;
  let obj = {
    definition,
    useConfig(location) {
      let _location;
      let revision;
      registerExperiment = location;
      const tmp = closure_2(revision, location);
      closure_1 = tmp;
      let tmp2 = closure_2("user", location);
      closure_2 = tmp2;
      const items = [registerExperiment];
      const items1 = [tmp, tmp2];
      const obj = registerExperiment(closure_1[3]);
      const tmp3 = closure_2(obj.useStateFromStoresArray(items, () => _location.getEvaluationAndAssignment(closure_5, closure_1, logger, closure_2), items1), 2);
      let first = tmp3[0];
      let variantId;
      if (tmp3[1] != null) {
        variantId = tmp5.variantId;
      }
      let trackedVariantId;
      if (tmp3[1] != null) {
        trackedVariantId = tmp5.trackedVariantId;
      }
      if (trackedVariantId == null) {
        trackedVariantId = variantId;
      }
      revision = undefined;
      if (tmp3[1] != null) {
        revision = tmp5.revision;
      }
      let isOverride;
      if (tmp3[1] != null) {
        isOverride = tmp5.isOverride;
      }
      let prop;
      if (tmp3[1] != null) {
        prop = tmp5.exposureTrackingEnabled;
      }
      let useAsEligibility;
      if (tmp3[1] != null) {
        useAsEligibility = tmp5.useAsEligibility;
      }
      let tmp12 = null;
      if (null != tmp3[1]) {
        if (tmp3[1] !== first) {
          first = tmp5;
          useAsEligibility = computeVariantConfig(tmp5);
        }
        tmp12 = useAsEligibility;
      }
      let closure_9 = tmp14;
      const items2 = [tmp, first, trackedVariantId, revision, location.location, isOverride, prop, useAsEligibility, tmp14];
      tmp8(() => {
        const tmp2 = null == first || null == trackedVariantId || null == revision || false !== isOverride || true !== prop || true === useAsEligibility || closure_9;
        if (!tmp2) {
          const result = _location.trackExperimentExposure(tmp, logger, _location.location, closure_5, revision, trackedVariantId, closure_1);
        }
      }, items2);
      if (null != variantId) {
        return tmp12;
      }
      tmp12 = prop;
    },
    getConfig(location) {
      let exposureTrackingEnabled;
      let isOverride;
      let tmp7;
      let tmp8;
      let useAsEligibility;
      const tmp2 = closure_5;
      let tmp = closure_1;
      const tmp3 = closure_1(closure_5, location);
      let tmpResult;
      if ("guild" === closure_5) {
        const obj = { location: location.location };
        tmpResult = tmp("user", obj);
      }
      [tmp7, tmp8] = registerExperiment.getEvaluationAndAssignment(tmp2, tmp3, logger, tmpResult);
      let variantId;
      _slicedToArray(registerExperiment.getEvaluationAndAssignment(tmp2, tmp3, logger, tmpResult), 2);
      const tmp5 = logger;
      if (tmp8 != null) {
        variantId = tmp8.variantId;
      }
      let trackedVariantId;
      if (tmp8 != null) {
        trackedVariantId = tmp8.trackedVariantId;
      }
      if (trackedVariantId == null) {
        trackedVariantId = variantId;
      }
      let revision;
      if (tmp8 != null) {
        revision = tmp8.revision;
      }
      if (tmp8 != null) {
        isOverride = tmp8.isOverride;
      }
      if (tmp8 != null) {
        exposureTrackingEnabled = tmp8.exposureTrackingEnabled;
      }
      if (tmp8 != null) {
        useAsEligibility = tmp8.useAsEligibility;
      }
      let tmp12 = null;
      if (null != tmp8) {
        if (tmp8 !== closure_3) {
          closure_3 = tmp8;
          closure_8 = computeVariantConfig(tmp8);
        }
        tmp12 = closure_8;
      }
      const tmp14 = null != tmp7 && null != trackedVariantId && null != revision && false === isOverride && true === exposureTrackingEnabled && true !== useAsEligibility && null != tmp12;
      if (tmp14) {
        const result = obj2.trackExperimentExposure(tmp7, tmp5, location.location, tmp2, revision, trackedVariantId, tmp3);
      }
      if (null != variantId) {
        return tmp12;
      }
      tmp12 = closure_7;
    }
  };
  return obj;
};
