// Module ID: 12098
// Function ID: 93298
// Name: CustomLinkType
// Dependencies: []
// Exports: decodeCustomActivityLink

// Module 12098 (CustomLinkType)
let closure_0 = importDefault(dependencyMap[0]);
const obj = { MANAGED: 0, [0]: "MANAGED", QUICK: 1, [1]: "QUICK" };
const result = arg1(dependencyMap[1]).fileFinishedImporting("../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx");

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
      const obj = { type: MANAGED, encodedLinkId: link_id, decodedLinkId: tmp6[1] };
      tmp4 = obj;
    }
    return tmp4;
  }
};
