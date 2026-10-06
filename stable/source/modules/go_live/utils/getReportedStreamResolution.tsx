// Module ID: 4973
// Function ID: 4974
// Name: getReportedStreamResolution
// Dependencies: [4862, 4974, 2]
// Exports: default

// Module 4973 (getReportedStreamResolution)
import Constants from "Constants" /* 4862 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 4974 */;
import size from "module_2" /* 2 */;

const ResolutionTypes = Constants.ResolutionTypes;
const result = size.fileFinishedImporting("modules/go_live/utils/getReportedStreamResolution.tsx");

export default function getReportedStreamResolution(arg0, arg1, type, arg3) {
  if (type.type !== ResolutionTypes.FIXED) {
    return type;
  } else {
    const tmp7 = getReportedPresetResolutionDefault(arg0, arg1, type.height, arg3);
    let tmp8 = type;
    if (tmp7 !== type.height) {
      const obj = { width: Math.round(type.width * tmp7 / type.height), height: tmp7 };
      const merged = Object.assign(type);
      const _Math = Math;
      tmp8 = obj;
    }
    return tmp8;
  }
};
