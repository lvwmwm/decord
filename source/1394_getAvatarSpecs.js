// Module ID: 1394
// Function ID: 16634
// Name: getAvatarSpecs
// Dependencies: []
// Exports: getAvatarSize, getStatusSize

// Module 1394 (getAvatarSpecs)
function getAvatarSpecs(arg0) {
  return frozen[arg0];
}
let obj = { SIZE_16: "SIZE_16", SIZE_20: "SIZE_20", SIZE_24: "SIZE_24", SIZE_32: "SIZE_32", SIZE_40: "SIZE_40", SIZE_44: "SIZE_44", SIZE_48: "SIZE_48", SIZE_56: "SIZE_56", SIZE_72: "SIZE_72", SIZE_80: "SIZE_80", SIZE_96: "SIZE_96", SIZE_120: "SIZE_120", SIZE_152: "SIZE_152", DEPRECATED_SIZE_30: "DEPRECATED_SIZE_30", DEPRECATED_SIZE_60: "DEPRECATED_SIZE_60", DEPRECATED_SIZE_100: "DEPRECATED_SIZE_100" };
obj = { [obj.SIZE_16]: Object.freeze({}), [obj.SIZE_20]: Object.freeze({ maxWidth: 0.7, alignSelf: 0.6, width: 0.5, display: 0.4 }), [obj.SIZE_24]: Object.freeze({}), [obj.SIZE_32]: Object.freeze({ maxWidth: "/assets/images/native/avatars", alignSelf: 256, width: 256, display: null }), [obj.SIZE_40]: Object.freeze({ maxWidth: "Array", alignSelf: "isArray", width: "getCurrentUser", display: "r" }), [obj.SIZE_44]: Object.freeze({}), [obj.SIZE_48]: Object.freeze({}), [obj.SIZE_56]: Object.freeze({ maxWidth: "Text", alignSelf: "shapes", width: "e", display: "r" }), [obj.SIZE_72]: Object.freeze({}), [obj.SIZE_80]: Object.freeze({ maxWidth: "Supplemental Category", alignSelf: true, width: "/assets/images/native/avatars", display: 256 }), [obj.SIZE_96]: Object.freeze({}), [obj.SIZE_120]: Object.freeze({ maxWidth: 1091633153, alignSelf: 108557, width: 65650, display: 65536 }), [obj.SIZE_152]: Object.freeze({}), [obj.DEPRECATED_SIZE_30]: Object.freeze({ maxWidth: true, alignSelf: true, width: true, display: true }), [obj.DEPRECATED_SIZE_60]: Object.freeze({}), [obj.DEPRECATED_SIZE_100]: Object.freeze({}) };
const frozen = Object.freeze(obj);
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/constants/web/AvatarConstants.tsx");

export const MOBILE_HEIGHT_RATIO = 1.5;
export const TYPING_WIDTH_RATIO = 2.5;
export const MOBILE_ICON_RADIUS = 0.125;
export const CUTOUT_BORDER_RADIUS = 0.2;
export const VIDEO_RATIO = 1.78;
export const VR_STATUS_WIDTH_RATIO = 1.5;
export const VR_STATUS_SCALE = 1;
export const VR_CUTOUT_BORDER_RADIUS = 0.5;
export const AvatarSizes = obj;
export const StatusBackdropColors = { BLACK: "black", WHITE: "white" };
export const StatusBackdropOpacity = { HIGH: 0.7, [0.7]: "HIGH", LOW: 0.45, [0.45]: "LOW" };
export const AvatarSizeSpecs = frozen;
export { getAvatarSpecs };
export const getAvatarSize = function getAvatarSize(arg0) {
  let size = arg0;
  if ("number" !== typeof arg0) {
    size = getAvatarSpecs(arg0).size;
  }
  return size;
};
export const getStatusSize = function getStatusSize(arg0) {
  return getAvatarSpecs(arg0).status;
};
