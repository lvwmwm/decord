// Module ID: 11085
// Function ID: 86204
// Name: getContentClassificationVisibility
// Dependencies: [1849, 6867, 6869, 566, 2]
// Exports: useContentClassificationVisibility

// Module 11085 (getContentClassificationVisibility)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    let obj = require(6867) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(6867) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    if (result === require(6869) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT) {
      if (true !== nsfwAllowed) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!channel.isPrivate()) {
          if (!channel.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    return DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
}
let obj = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
let result = require("AgeRestrictionStatus").fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export const ContentClassificationVisibility = obj;
export { getContentClassificationVisibility };
export const useContentClassificationVisibility = function useContentClassificationVisibility(contentClassification, channel) {
  const items = [_isNativeReflectConstruct];
  return getContentClassificationVisibility(contentClassification, channel, require(566) /* initialize */.useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  }));
};
