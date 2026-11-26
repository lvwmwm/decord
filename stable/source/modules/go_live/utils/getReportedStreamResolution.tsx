// Module ID: 6244
// Function ID: 6245
// Name: getReportedStreamResolution
// Dependencies: [6065, 6245, 2]
// Exports: default

// Module 6244 (getReportedStreamResolution)
import Constants from "Constants" /* 6065 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 6245 */;
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
