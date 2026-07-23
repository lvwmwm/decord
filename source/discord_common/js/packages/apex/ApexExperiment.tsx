// Module ID: 1326
// Function ID: 15555
// Name: createApexExperimentCommon
// Dependencies: [57, 31, 566, 2]
// Exports: default

// Module 1326 (createApexExperimentCommon)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "result";

const require = arg1;
let result = require("initialize").fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment) {
  let closure_4;
  let closure_5;
  let closure_6;
  let useEffect;
  let closure_0 = registerExperiment;
  let closure_1 = arg2;
  let _slicedToArray = arg3;
  ({ name: useEffect, kind: closure_4, variations: closure_5, defaultConfig: closure_6 } = definition);
  registerExperiment.registerExperiment(definition);
  return {
    definition,
    useConfig(location) {
      const lib = location;
      let tmp = callback(closure_4, location);
      const dependencyMap = tmp;
      const tmp2 = callback("user", location);
      callback = tmp2;
      const items = [lib];
      const items1 = [tmp, tmp2];
      const tmp3 = callback(lib(566).useStateFromStoresArray(items, () => _location.getEvaluationAndAssignment(closure_4, closure_1, first, _slicedToArray), items1), 2);
      const first = tmp3[0];
      let variantId;
      if (null != tmp3[1]) {
        variantId = tmp5.variantId;
      }
      let trackedVariantId;
      if (null != tmp3[1]) {
        trackedVariantId = tmp5.trackedVariantId;
      }
      let tmp8 = variantId;
      if (null != trackedVariantId) {
        tmp8 = trackedVariantId;
      }
      closure_4 = tmp8;
      let revision;
      if (null != tmp3[1]) {
        revision = tmp5.revision;
      }
      let isOverride;
      if (null != tmp3[1]) {
        isOverride = tmp5.isOverride;
      }
      let prop;
      if (null != tmp3[1]) {
        prop = tmp5.exposureTrackingEnabled;
      }
      let useAsEligibility;
      if (null != tmp3[1]) {
        useAsEligibility = tmp5.useAsEligibility;
      }
      const items2 = [tmp, first, tmp8, revision, location.location, isOverride, prop, useAsEligibility];
      outer1_3(() => {
        let tmp = null != first;
        if (tmp) {
          tmp = null != closure_4;
        }
        if (tmp) {
          tmp = null != revision;
        }
        if (tmp) {
          tmp = false === isOverride;
        }
        if (tmp) {
          tmp = true === prop;
        }
        if (tmp) {
          tmp = true !== useAsEligibility;
        }
        if (tmp) {
          const result = _location.trackExperimentExposure(first, first, _location.location, closure_4, revision, closure_4, closure_1);
        }
      }, items2);
      if (null != variantId) {
        if (true !== useAsEligibility) {
          let tmp15 = revision[variantId];
          if (null == tmp15) {
            tmp15 = isOverride;
          }
          return tmp15;
        }
      }
      return isOverride;
    },
    getConfig(location) {
      const tmp = dependencyMap(closure_4, location);
      let tmp2;
      if ("guild" === closure_4) {
        const obj = { location: location.location };
        tmp2 = dependencyMap("user", obj);
      }
      const tmp4 = callback(lib.getEvaluationAndAssignment(closure_4, tmp, closure_3, tmp2), 2);
      const first = tmp4[0];
      let variantId;
      if (null != tmp4[1]) {
        variantId = tmp6.variantId;
      }
      let trackedVariantId;
      if (null != tmp4[1]) {
        trackedVariantId = tmp6.trackedVariantId;
      }
      let tmp9 = variantId;
      if (null != trackedVariantId) {
        tmp9 = trackedVariantId;
      }
      let revision;
      if (null != tmp4[1]) {
        revision = tmp6.revision;
      }
      if (null != tmp4[1]) {
        const isOverride = tmp6.isOverride;
      }
      if (null != tmp4[1]) {
        const exposureTrackingEnabled = tmp6.exposureTrackingEnabled;
      }
      if (null != tmp4[1]) {
        const useAsEligibility = tmp6.useAsEligibility;
      }
      let tmp11 = null != first && null != tmp9 && null != revision;
      if (tmp11) {
        tmp11 = false === isOverride;
      }
      if (tmp11) {
        tmp11 = true === exposureTrackingEnabled;
      }
      if (tmp11) {
        tmp11 = true !== useAsEligibility;
      }
      if (tmp11) {
        const result = lib.trackExperimentExposure(first, closure_3, location.location, closure_4, revision, tmp9, tmp);
      }
      if (null != variantId) {
        if (true !== useAsEligibility) {
          let tmp22 = table[variantId];
          if (null == tmp22) {
            tmp22 = closure_6;
          }
          return tmp22;
        }
      }
      return closure_6;
    }
  };
};
