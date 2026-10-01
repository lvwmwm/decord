// Module ID: 14888
// Function ID: 14889
// Name: DisplayNameStylesActionCreators
// Dependencies: [573, 2]
// Exports: markDisplayNameStyleEffectSeen, markDisplayNameStyleFontSeen, markDisplayNameStyleNewEffectsBadgeDismissed, markDisplayNameStyleNewFontsBadgeDismissed

// Module 14888 (DisplayNameStylesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export const markDisplayNameStyleFontSeen = function markDisplayNameStyleFontSeen(fontId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj2);
};
export const markDisplayNameStyleEffectSeen = function markDisplayNameStyleEffectSeen(effectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj2);
};
export const markDisplayNameStyleNewFontsBadgeDismissed = function markDisplayNameStyleNewFontsBadgeDismissed() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
};
export const markDisplayNameStyleNewEffectsBadgeDismissed = function markDisplayNameStyleNewEffectsBadgeDismissed() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
};
