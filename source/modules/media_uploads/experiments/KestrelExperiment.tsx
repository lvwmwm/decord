// Module ID: 4707
// Function ID: 40910
// Name: getKestrelConfig
// Dependencies: []
// Exports: getEffectiveKestrelLimit, getKestrelConfig, getKestrelVariantName

// Module 4707 (getKestrelConfig)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "<string:20140544>", -1845285747: "<string:24006912>", defaultConfig: { <string:855827314>: "<string:441516034>", <string:2735013903>: "<string:3209822877>" }, variations: { [0]: { <string:855827314>: "<string:441516034>", <string:2735013903>: "<string:3209822877>" }, [1]: { <string:855827314>: false, <string:2735013903>: false }, [2]: {}, [3]: {} } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/KestrelExperiment.tsx");

export const getKestrelConfig = function getKestrelConfig(location) {
  return config.getConfig({ location: location.location });
};
export const getEffectiveKestrelLimit = function getEffectiveKestrelLimit(kestrelConfig, maxFileSize) {
  let bound = maxFileSize;
  if (kestrelConfig.enabled) {
    const _Math = Math;
    bound = Math.max(1048576 * kestrelConfig.threshold, maxFileSize);
  }
  return bound;
};
export const getKestrelVariantName = function getKestrelVariantName(kestrelConfig) {
  let str = "control";
  if (kestrelConfig.enabled) {
    let str2 = "kestrel_a";
    if (15 !== kestrelConfig.threshold) {
      let str3 = "kestrel_b";
      if (20 !== kestrelConfig.threshold) {
        let str4 = "unknown";
        if (25 === kestrelConfig.threshold) {
          str4 = "kestrel_c";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
};
