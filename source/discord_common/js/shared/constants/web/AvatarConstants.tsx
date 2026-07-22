// Module ID: 1394
// Function ID: 16639
// Name: getAvatarSpecs
// Dependencies: []
// Exports: getAvatarSize, getStatusSize

// Module 1394 (getAvatarSpecs)
function getAvatarSpecs(arg0) {
  return frozen[arg0];
}
let obj = { SIZE_16: "SIZE_16", SIZE_20: "SIZE_20", SIZE_24: "SIZE_24", SIZE_32: "SIZE_32", SIZE_40: "SIZE_40", SIZE_44: "SIZE_44", SIZE_48: "SIZE_48", SIZE_56: "SIZE_56", SIZE_72: "SIZE_72", SIZE_80: "SIZE_80", SIZE_96: "SIZE_96", SIZE_120: "SIZE_120", SIZE_152: "SIZE_152", DEPRECATED_SIZE_30: "DEPRECATED_SIZE_30", DEPRECATED_SIZE_60: "DEPRECATED_SIZE_60", DEPRECATED_SIZE_100: "DEPRECATED_SIZE_100" };
obj = { [obj.SIZE_16]: Object.freeze({}), [obj.SIZE_20]: Object.freeze({ maxFontSizeMultiplier: "channelId", accessibilityRole: "channelId", "Null": "resizeMode", "Null": "formatToPlainString" }), [obj.SIZE_24]: Object.freeze({ maxFontSizeMultiplier: false, accessibilityRole: false, "Null": false, "Null": false }), [obj.SIZE_32]: Object.freeze({}), [obj.SIZE_40]: Object.freeze({ maxFontSizeMultiplier: true, accessibilityRole: 0.8, "Null": 0.7, "Null": 0.6 }), [obj.SIZE_44]: Object.freeze({ maxFontSizeMultiplier: 0.6, accessibilityRole: 0.5, "Null": 0.4, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016020554264098596 }), [obj.SIZE_48]: Object.freeze({ maxFontSizeMultiplier: true, accessibilityRole: true, "Null": true, "Null": true }), [obj.SIZE_56]: Object.freeze({}), [obj.SIZE_72]: Object.freeze({ maxFontSizeMultiplier: 22517569, accessibilityRole: -834596608, "Null": 1912603047, "Null": 256 }), [obj.SIZE_80]: Object.freeze({}), [obj.SIZE_96]: Object.freeze({ maxFontSizeMultiplier: "content", accessibilityRole: "useRef", "Null": "Array", "Null": "isArray" }), [obj.SIZE_120]: Object.freeze({}), [obj.SIZE_152]: Object.freeze({ maxFontSizeMultiplier: "Supplemental Category", accessibilityRole: true, "Null": "/assets/images/native/avatars", "Null": 256 }), [obj.DEPRECATED_SIZE_30]: Object.freeze({}), [obj.DEPRECATED_SIZE_60]: Object.freeze({ maxFontSizeMultiplier: false, accessibilityRole: false, "Null": false, "Null": false }), [obj.DEPRECATED_SIZE_100]: Object.freeze({}) };
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
