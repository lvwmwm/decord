// Module ID: 11489
// Function ID: 11490
// Name: handleSharedClientThemeViewed
// Dependencies: [8855, 503, 2]
// Exports: handleSharedClientThemeViewed

// Module 11489 (handleSharedClientThemeViewed)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpression from "trackImpression" /* 8855 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = trackImpression;
  obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
