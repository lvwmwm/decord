// Module ID: 4663
// Function ID: 4664
// Name: getReportedStreamResolution
// Dependencies: [4545, 4664, 2]
// Exports: default

// Module 4663 (getReportedStreamResolution)
import set from "set" /* 2 */;
import DesktopSources from "DesktopSources" /* 4545 */;
import getReportedPresetResolutionDefault from "getReportedPresetResolution" /* 4664 */;

const ResolutionTypes = DesktopSources.ResolutionTypes;
const result = set.fileFinishedImporting("modules/go_live/utils/getReportedStreamResolution.tsx");

export default function getReportedStreamResolution(arg0, arg1, type) {
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
