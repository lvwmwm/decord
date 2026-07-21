// Module ID: 1326
// Function ID: 15554
// Name: createApexExperimentCommon
// Dependencies: []
// Exports: default

// Module 1326 (createApexExperimentCommon)
let closure_2 = importDefault(dependencyMap[0]);
const useEffect = arg1(dependencyMap[1]).useEffect;
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment) {
  const dependencyMap = arg2;
  let closure_2 = arg3;
  ({ name: closure_3, kind: closure_4, variations: closure_5, defaultConfig: closure_6 } = definition);
  registerExperiment.registerExperiment(definition);
  return {
    definition,
    useConfig(location) {
      const arg1 = location;
      const tmp = arg3(tmp8, location);
      const arg2 = tmp;
      const tmp2 = arg3("user", location);
      const arg3 = tmp2;
      const items = [arg1];
      const items1 = [tmp, tmp2];
      const tmp3 = arg3(arg1(arg2[2]).useStateFromStoresArray(items, () => arg0.getEvaluationAndAssignment(tmp8, tmp, first, tmp2), items1), 2);
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
      first((self) => {
        let tmp = null != first;
        if (tmp) {
          tmp = null != tmp8;
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
          const result = self.trackExperimentExposure(first, first, self.location, tmp8, revision, tmp8, tmp);
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
    getConfig(location, self) {
      const tmp = arg2(closure_4, location);
      let tmp2;
      if ("guild" === closure_4) {
        const obj = { location: location.location };
        tmp2 = arg2("user", obj);
      }
      const tmp4 = arg3(self.getEvaluationAndAssignment(closure_4, tmp, closure_3, tmp2), 2);
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
        const result = self.trackExperimentExposure(first, closure_3, location.location, closure_4, revision, tmp9, tmp);
      }
      if (null != variantId) {
        if (true !== useAsEligibility) {
          let tmp22 = closure_5[variantId];
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
