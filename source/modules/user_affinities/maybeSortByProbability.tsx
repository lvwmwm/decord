// Module ID: 7737
// Function ID: 61486
// Name: maybeSortByProbability
// Dependencies: []
// Exports: maybeSortByProbability

// Module 7737 (maybeSortByProbability)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_affinities/maybeSortByProbability.tsx");

export const maybeSortByProbability = function maybeSortByProbability(arg0, stateFromStores, location) {
  const require = stateFromStores;
  const voiceUserAffinitySortType = require(dependencyMap[0]).getVoiceUserAffinitySortType(location);
  if (null == voiceUserAffinitySortType) {
    return arg0;
  } else if ("vc_probability" === voiceUserAffinitySortType) {
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    let sorted = items.sort((id, id2) => {
      let value = id2.get(id2.id);
      let vcProbability;
      if (null != value) {
        vcProbability = value.vcProbability;
      }
      let num = 0;
      if (null != vcProbability) {
        num = vcProbability;
      }
      value = id2.get(id.id);
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
    HermesBuiltin.arraySpread(arg0, 0);
    sorted = items1.sort((id, id2) => {
      let value = id2.get(id2.id);
      let prop;
      if (null != value) {
        prop = value.communicationProbability;
      }
      let num = 0;
      if (null != prop) {
        num = prop;
      }
      value = id2.get(id.id);
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
