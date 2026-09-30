// Module ID: 5002
// Function ID: 5003
// Name: getReportedStreamResolution
// Dependencies: [4891, 5003, 2]
// Exports: default

// Module 5002 (getReportedStreamResolution)
import Constants from "Constants" /* 4891 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 5003 */;
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
      const obj = {};
      const merged = Object.assign(type);
      const _Math = Math;
      obj.width = Math.round(type.width * tmp7 / type.height);
      obj.height = tmp7;
      tmp8 = obj;
    }
    return tmp8;
  }
};
