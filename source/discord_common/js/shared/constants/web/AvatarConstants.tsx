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
obj = { [obj.SIZE_16]: Object.freeze({ @braintree/extended-promise: "channelId", AUTOLINK: "channelId", onBandwidthUpdate: "resizeMode", GameDiversityTier3LargeBadge: "formatToPlainString" }), [obj.SIZE_20]: Object.freeze({ @braintree/extended-promise: false, AUTOLINK: false, onBandwidthUpdate: false, GameDiversityTier3LargeBadge: false }), [obj.SIZE_24]: Object.freeze({}), [obj.SIZE_32]: Object.freeze({ @braintree/extended-promise: true, AUTOLINK: 0.8, onBandwidthUpdate: 0.7, GameDiversityTier3LargeBadge: 0.6 }), [obj.SIZE_40]: Object.freeze({ @braintree/extended-promise: 0.6, AUTOLINK: 0.5, onBandwidthUpdate: 0.4, GameDiversityTier3LargeBadge: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016020554231978543 }), [obj.SIZE_44]: Object.freeze({ @braintree/extended-promise: true, AUTOLINK: true, onBandwidthUpdate: true, GameDiversityTier3LargeBadge: true }), [obj.SIZE_48]: Object.freeze({}), [obj.SIZE_56]: Object.freeze({ @braintree/extended-promise: 1991066067, AUTOLINK: 1091633153, onBandwidthUpdate: 108339, GameDiversityTier3LargeBadge: 65650 }), [obj.SIZE_72]: Object.freeze({}), [obj.SIZE_80]: Object.freeze({}), [obj.SIZE_96]: Object.freeze({ @braintree/extended-promise: "setExtra", AUTOLINK: "Array", onBandwidthUpdate: "fr-NE", GameDiversityTier3LargeBadge: "fast_forward" }), [obj.SIZE_120]: Object.freeze({}), [obj.SIZE_152]: Object.freeze({ @braintree/extended-promise: "Supplemental Category", AUTOLINK: true, onBandwidthUpdate: "/assets/images/native/avatars", GameDiversityTier3LargeBadge: 256 }), [obj.DEPRECATED_SIZE_30]: Object.freeze({}), [obj.DEPRECATED_SIZE_60]: Object.freeze({ @braintree/extended-promise: 285212964, AUTOLINK: 27734849, onBandwidthUpdate: 16806400, GameDiversityTier3LargeBadge: 16777216 }), [obj.DEPRECATED_SIZE_100]: Object.freeze({}) };
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
