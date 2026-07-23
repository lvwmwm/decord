// Module ID: 14229
// Function ID: 109321
// Name: markDisplayNameStyleFontSeen
// Dependencies: [686, 2]
// Exports: markDisplayNameStyleEffectSeen, markDisplayNameStyleFontSeen, markDisplayNameStyleNewEffectsBadgeDismissed, markDisplayNameStyleNewFontsBadgeDismissed

// Module 14229 (markDisplayNameStyleFontSeen)
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  let obj = importDefault(686);
  obj = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  let obj = importDefault(686);
  obj = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj);
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  importDefault(686).dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  importDefault(686).dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};
