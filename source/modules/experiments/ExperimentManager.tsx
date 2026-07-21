// Module ID: 4050
// Function ID: 33795
// Name: trackExposureToExperiment
// Dependencies: []
// Exports: overrideBucket, registerGuildExperiment, registerUserExperiment, trackExposureToExperiment

// Module 4050 (trackExposureToExperiment)
let ExposureTypes;
let closure_2 = importDefault(dependencyMap[0]);
const registerExperiment = arg1(dependencyMap[0]).registerExperiment;
({ ExperimentTypes: closure_4, ExposureTypes } = arg1(dependencyMap[1]));
const obj = { LEGACY: "legacy", APEX: "apex" };
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/experiments/ExperimentManager.tsx");

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
  closure_2.trackExposure(obj);
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
    let obj = { type: "EXPERIMENT_OVERRIDE_BUCKET", experimentId: map };
    let tmp9 = null;
    if (null != id) {
      tmp9 = id;
    }
    obj.experimentBucket = tmp9;
    importDefault(dependencyMap[2]).dispatch(obj);
    const obj5 = importDefault(dependencyMap[2]);
  } else if (obj.APEX === system) {
    if (null == id) {
      obj = { type: "APEX_EXPERIMENT_OVERRIDE_DELETE", experimentName: map };
      importDefault(dependencyMap[2]).dispatch(obj);
      const obj3 = importDefault(dependencyMap[2]);
    } else {
      obj = importDefault(dependencyMap[2]);
      const obj1 = { type: "APEX_EXPERIMENT_OVERRIDE_CREATE", experimentName: map, variantId: id };
      obj.dispatch(obj1);
    }
  }
};
