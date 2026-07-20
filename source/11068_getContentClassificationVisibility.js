// Module ID: 11068
// Function ID: 86107
// Name: getContentClassificationVisibility
// Dependencies: []
// Exports: useContentClassificationVisibility

// Module 11068 (getContentClassificationVisibility)
function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    let obj = channel(dependencyMap[1]);
    obj = { type: channel(dependencyMap[1]).ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    if (result === channel(dependencyMap[2]).AgeRestrictionStatus.ADULT) {
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
let closure_2 = importDefault(dependencyMap[0]);
const obj = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export const ContentClassificationVisibility = obj;
export { getContentClassificationVisibility };
export const useContentClassificationVisibility = function useContentClassificationVisibility(contentClassification, channel) {
  const items = [closure_2];
  return getContentClassificationVisibility(contentClassification, channel, channel(dependencyMap[3]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  }));
};
