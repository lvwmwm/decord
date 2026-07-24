// Module ID: 12239
// Function ID: 95689
// Name: CustomLinkType
// Dependencies: [57, 2]
// Exports: decodeCustomActivityLink

// Module 12239 (CustomLinkType)
import _slicedToArray from "_slicedToArray";

let obj = { MANAGED: 0, [0]: "MANAGED", QUICK: 1, [1]: "QUICK" };
const result = require("set").fileFinishedImporting("../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx");

export const CustomLinkType = obj;
export const decodeCustomActivityLink = function decodeCustomActivityLink(link_id) {
  if (null == link_id) {
    return null;
  } else {
    const tmp6 = callback(link_id.split("-"), 2);
    const first = tmp6[0];
    if ("0" === first) {
      let MANAGED = obj.MANAGED;
    } else {
      MANAGED = null;
      if ("1" === first) {
        MANAGED = obj.QUICK;
      }
    }
    let tmp4 = null;
    if (null != MANAGED) {
      obj = { type: MANAGED, encodedLinkId: link_id, decodedLinkId: tmp6[1] };
      tmp4 = obj;
    }
    return tmp4;
  }
};
