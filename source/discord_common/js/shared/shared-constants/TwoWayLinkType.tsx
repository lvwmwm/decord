// Module ID: 8919
// Function ID: 70355
// Name: set
// Dependencies: [2]

// Module 8919 (set)
import set from "set";

const obj = {};
let set = new Set(["desktop", "device_code", "mobile", "web"]);
obj.ALL = set;
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/TwoWayLinkType.tsx");

export const TwoWayLinkType = { MOBILE: "mobile", DESKTOP: "desktop", WEB: "web", DEVICE_CODE: "device_code" };
export const TwoWayLinkTypeSets = obj;
