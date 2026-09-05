// Module ID: 9231
// Function ID: 9232
// Name: set
// Dependencies: [2]

// Module 9231 (set)
import set from "set" /* 2 */;

const obj = { ALL: null };
let set = new Set(["desktop", "device_code", "mobile", "web"]);
obj[0] = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/TwoWayLinkType.tsx");

export const TwoWayLinkType = { MOBILE: "mobile", DESKTOP: "desktop", WEB: "web", DEVICE_CODE: "device_code" };
export const TwoWayLinkTypeSets = obj;
