// Module ID: 11881
// Function ID: 11882
// Name: handleSharedClientThemeViewed
// Dependencies: [8698, 500, 2]
// Exports: handleSharedClientThemeViewed

// Module 11881 (handleSharedClientThemeViewed)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 500 */;
import trackImpression from "trackImpression" /* 8698 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = trackImpression;
  obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
