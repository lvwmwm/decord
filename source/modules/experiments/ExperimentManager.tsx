// Module ID: 4052
// Function ID: 33806
// Name: trackExposureToExperiment
// Dependencies: [4044, 4045, 686, 2]
// Exports: overrideBucket, registerGuildExperiment, registerUserExperiment, trackExposureToExperiment

// Module 4052 (trackExposureToExperiment)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { registerExperiment } from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";

let ExposureTypes;
let closure_4;
({ ExperimentTypes: closure_4, ExposureTypes } = ExperimentBuckets);
let obj = { LEGACY: "legacy", APEX: "apex" };
const result = require("dispatcher").fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

export const trackExposureToExperiment = function trackExposureToExperiment(id, descriptor, location) {
  const obj = { experimentId: id, descriptor };
  let _location;
  if (null != location) {
    _location = location.location;
  }
  obj.location = _location;
  let analyticsLocations;
  if (null != location) {
    analyticsLocations = location.analyticsLocations;
  }
  obj.location_stack = analyticsLocations;
  let fingerprint;
  if (null != location) {
    fingerprint = location.fingerprint;
  }
  obj.fingerprint = fingerprint;
  let excluded;
  if (null != location) {
    excluded = location.excluded;
  }
  obj.excluded = excluded;
  let exposureType;
  if (null != location) {
    exposureType = location.exposureType;
  }
  obj.exposureType = exposureType;
  _isNativeReflectConstruct.trackExposure(obj);
};
export const registerUserExperiment = function registerUserExperiment(id) {
  id = id.id;
  registerExperiment({ experimentId: id, experimentType: constants.USER, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint });
  return { id };
};
export const registerGuildExperiment = function registerGuildExperiment(id) {
  id = id.id;
  registerExperiment({ experimentId: id, experimentType: constants.GUILD, title: id.title, description: id.description, buckets: id.buckets, commonTriggerPoint: id.commonTriggerPoint });
  return { id };
};
export const ExperimentSystem = obj;
export const overrideBucket = function overrideBucket(system, map, id) {
  if (obj.LEGACY === system) {
    obj = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: map };
    let tmp9 = null;
    if (null != id) {
      tmp9 = id;
    }
    obj.experimentBucket = tmp9;
    importDefault(686).dispatch(obj);
    const obj5 = importDefault(686);
  } else if (obj.APEX === system) {
    if (null == id) {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: map };
      importDefault(686).dispatch(obj);
      const obj3 = importDefault(686);
    } else {
      obj = importDefault(686);
      const obj1 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: map, variantId: id };
      obj.dispatch(obj1);
    }
  }
};
