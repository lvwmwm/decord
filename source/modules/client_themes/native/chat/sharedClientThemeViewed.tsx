// Module ID: 11750
// Function ID: 11751
// Name: handleSharedClientThemeViewed
// Dependencies: [8911, 500, 2]
// Exports: handleSharedClientThemeViewed

// Module 11750 (handleSharedClientThemeViewed)
import set from "set" /* 2 */;
import encodeProperties from "encodeProperties" /* 500 */;
import trackImpression from "trackImpression" /* 8911 */;

const result = set.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  let obj = trackImpression;
  obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};
