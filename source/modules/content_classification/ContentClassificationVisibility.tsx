// Module ID: 11110
// Function ID: 86154
// Name: getContentClassificationVisibility
// Dependencies: [1850, 5890, 5892, 566, 2]
// Exports: useContentClassificationVisibility

// Module 11110 (getContentClassificationVisibility)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    let obj = require(5890) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(5890) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    if (result === require(5892) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT) {
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
