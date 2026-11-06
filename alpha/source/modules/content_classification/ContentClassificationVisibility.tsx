// Module ID: 13913
// Function ID: 13914
// Name: ContentClassificationVisibility
// Dependencies: [1385, 5815, 5817, 504, 2]
// Exports: getContentClassificationVisibility, useContentClassificationVisibility

// Module 13913 (ContentClassificationVisibility)
import get_initialized from "get initialized" /* 504 */;
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5815 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5817 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const ContentClassificationVisibility = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export { ContentClassificationVisibility };
export function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  let obj;
  if (null != contentClassification) {
    let DISPLAY;
    obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== nsfwAllowed) {
        DISPLAY = obj.BLOCK_UNDERAGE;
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
export function useContentClassificationVisibility(data, isPrivate) {
  let obj;
  get_initialized;
  [][0] = UserStore;
  if (null != data) {
    let DISPLAY;
    obj = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data };
    const contentClassificationToAgeRestriction = ContentClassificationToAgeRestriction.contentClassificationToAgeRestriction;
    ContentClassificationToAgeRestriction;
    const result = contentClassificationToAgeRestriction(obj);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== tmp4) {
        DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!isPrivate.isPrivate()) {
          if (!isPrivate.nsfw) {
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
