// Module ID: 11130
// Function ID: 11131
// Name: ContentClassificationVisibility
// Dependencies: [1874, 5907, 5909, 589, 2]
// Exports: getContentClassificationVisibility, useContentClassificationVisibility

// Module 11130 (ContentClassificationVisibility)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
let obj = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
let result = require("AgeRestrictionStatus").fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export const ContentClassificationVisibility = obj;
export const getContentClassificationVisibility = function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    let obj = require(5907) /* contentClassificationToAgeRestrictionConclusion */;
    obj = { type: null, data: null };
    obj[0] = require(5907) /* contentClassificationToAgeRestrictionConclusion */.ContentClassificationVariant.MINIMAL;
    obj[1] = contentClassification;
    const result = obj.contentClassificationToAgeRestriction(obj);
    if (result === require(5909) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT) {
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
};
export const useContentClassificationVisibility = function useContentClassificationVisibility(arg0, isPrivate) {
  require(589) /* initialize */;
  [][0] = mergeGuildAvatar;
  if (null != arg0) {
    const obj = { type: null, data: null };
    obj[0] = tmp(5907).ContentClassificationVariant.MINIMAL;
    obj[1] = arg0;
    const result = tmp(5907).contentClassificationToAgeRestriction(obj);
    if (result === tmp(5909).AgeRestrictionStatus.ADULT) {
      if (true !== tmp4) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
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
};
