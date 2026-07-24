// Module ID: 7841
// Function ID: 61884
// Name: maybeSortByProbability
// Dependencies: [7842, 2]
// Exports: maybeSortByProbability

// Module 7841 (maybeSortByProbability)
const result = require("set").fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(closure_0, stateFromStores, location) {
  const _require = stateFromStores;
  const voiceUserAffinitySortType = _require(7842).getVoiceUserAffinitySortType(location);
  if (null == voiceUserAffinitySortType) {
    return closure_0;
  } else if ("vc_probability" === voiceUserAffinitySortType) {
    const items = [];
    HermesBuiltin.arraySpread(closure_0, 0);
    let sorted = items.sort((id, id2) => {
      let value = stateFromStores.get(id2.id);
      let vcProbability;
      if (null != value) {
        vcProbability = value.vcProbability;
      }
      let num = 0;
      if (null != vcProbability) {
        num = vcProbability;
      }
      value = stateFromStores.get(id.id);
      let vcProbability1;
      if (null != value) {
        vcProbability1 = value.vcProbability;
      }
      let num2 = 0;
      if (null != vcProbability1) {
        num2 = vcProbability1;
      }
      return num - num2;
    });
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(closure_0, 0);
    sorted = items1.sort((id, id2) => {
      let value = stateFromStores.get(id2.id);
      let prop;
      if (null != value) {
        prop = value.communicationProbability;
      }
      let num = 0;
      if (null != prop) {
        num = prop;
      }
      value = stateFromStores.get(id.id);
      let prop1;
      if (null != value) {
        prop1 = value.communicationProbability;
      }
      let num2 = 0;
      if (null != prop1) {
        num2 = prop1;
      }
      return num - num2;
    });
  }
};
