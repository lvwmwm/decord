// Module ID: 20648
// Function ID: 20649
// Name: classifyClipsHardware
// Dependencies: [8779, 2]
// Exports: classifyClipsHardware

// Module 20648 (classifyClipsHardware)
import ClipsConstants from "ClipsConstants" /* 8779 */;
import size from "module_2" /* 2 */;

function isHardwareH264Encoder(arr) {
  const hasItem = arr.includes("H.264") && arr.endsWith("(HW)");
  return hasItem;
}
let closure_0 = ClipsConstants.ClipsHardwareClassification;
let closure_1 = { "10de": "Nvidia/NVENC", 1002: "AMD/AMF", 8086: "Intel/QSV" };
const items = ["1002", "8086"];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/clips/classifyClipsHardware.tsx");

export function classifyClipsHardware(arr, arr2) {
  let BELOW_MINIMUM;
  const found = arr.filter(isHardwareH264Encoder);
  if (null != arr2) {
    let MEETS_AUTO_ENABLE;
    if (0 !== arr2.length) {
      if (arr2.some((is_hybrid_integrated) => {
        let tmp = !is_hybrid_integrated.is_hybrid_integrated && is_hybrid_integrated.memory >= 6000000000;
        if (tmp) {
          closure_0 = tmp3;
          tmp = null != closure_1[is_hybrid_integrated.vendor_id] && found.some((item) => item.startsWith(closure_0));
          null != closure_1[is_hybrid_integrated.vendor_id] && found.some((item) => item.startsWith(closure_0));
        }
        return tmp;
      })) {
        let tmp2 = found;
        MEETS_AUTO_ENABLE = found.MEETS_AUTO_ENABLE;
      } else {
        let tmp = found;
        MEETS_AUTO_ENABLE = arr2.some((vendor_id) => {
          closure_0 = tmp;
          let tmp2 = null != tmp && obj.some((item) => item.startsWith(closure_0));
          if (!tmp2) {
            const hasItem = set.has(vendor_id.vendor_id) && obj.some((item) => item.startsWith("MediaFoundation"));
            tmp2 = hasItem;
          }
          return tmp2;
        }) ? tmp.MEETS_MINIMUM : tmp.BELOW_MINIMUM;
      }
    }
    return MEETS_AUTO_ENABLE;
  }
  if (found.length > 0) {
    BELOW_MINIMUM = found.MEETS_MINIMUM;
  } else {
    const tmp3 = found;
    BELOW_MINIMUM = found.BELOW_MINIMUM;
  }
  MEETS_AUTO_ENABLE = BELOW_MINIMUM;
}
