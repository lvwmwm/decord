// Module ID: 14107
// Function ID: 107122
// Name: markDisplayNameStyleFontSeen
// Dependencies: [646840323, 899088385]
// Exports: markDisplayNameStyleEffectSeen, markDisplayNameStyleFontSeen, markDisplayNameStyleNewEffectsBadgeDismissed, markDisplayNameStyleNewFontsBadgeDismissed

// Module 14107 (markDisplayNameStyleFontSeen)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  importDefault(dependencyMap[0]).dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  importDefault(dependencyMap[0]).dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};
