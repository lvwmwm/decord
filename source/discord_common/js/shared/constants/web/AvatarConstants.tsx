// Module ID: 1394
// Function ID: 16634
// Name: getAvatarSpecs
// Dependencies: [284214097]
// Exports: getAvatarSize, getStatusSize

// Module 1394 (getAvatarSpecs)
function getAvatarSpecs(arg0) {
  return frozen[arg0];
}
let obj = { SIZE_16: "SIZE_16", SIZE_20: "SIZE_20", SIZE_24: "SIZE_24", SIZE_32: "SIZE_32", SIZE_40: "SIZE_40", SIZE_44: "SIZE_44", SIZE_48: "SIZE_48", SIZE_56: "SIZE_56", SIZE_72: "SIZE_72", SIZE_80: "SIZE_80", SIZE_96: "SIZE_96", SIZE_120: "SIZE_120", SIZE_152: "SIZE_152", DEPRECATED_SIZE_30: "DEPRECATED_SIZE_30", DEPRECATED_SIZE_60: "DEPRECATED_SIZE_60", DEPRECATED_SIZE_100: "DEPRECATED_SIZE_100" };
obj = { [obj.SIZE_16]: Object.freeze({}), [obj.SIZE_20]: Object.freeze({ height: "channelId", push: "channelId", create: "resizeMode", Symbol: "formatToPlainString" }), [obj.SIZE_24]: Object.freeze({ height: false, push: false, create: false, Symbol: false }), [obj.SIZE_32]: Object.freeze({}), [obj.SIZE_40]: Object.freeze({ height: true, push: 0.8, create: 0.7, Symbol: 0.6 }), [obj.SIZE_44]: Object.freeze({ height: 0.6, push: 0.5, create: 0.4, Symbol: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016020554242754303 }), [obj.SIZE_48]: Object.freeze({ height: true, push: true, create: true, Symbol: true }), [obj.SIZE_56]: Object.freeze({}), [obj.SIZE_72]: Object.freeze({ height: "SET_USER_VOICE_SETTINGS_2", push: "Buffer", create: "RBTree", Symbol: "IFD_TYPE_MPF" }), [obj.SIZE_80]: Object.freeze({}), [obj.SIZE_96]: Object.freeze({ height: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007204311510554927, push: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021256870073, create: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010333576026601877, Symbol: -0.0000000000000000000000000000000000000009788013789690734 }), [obj.SIZE_120]: Object.freeze({}), [obj.SIZE_152]: Object.freeze({ height: "Supplemental Category", push: true, create: "/assets/images/native/avatars", Symbol: 256 }), [obj.DEPRECATED_SIZE_30]: Object.freeze({}), [obj.DEPRECATED_SIZE_60]: Object.freeze({ height: false, push: false, create: false, Symbol: false }), [obj.DEPRECATED_SIZE_100]: Object.freeze({}) };
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
