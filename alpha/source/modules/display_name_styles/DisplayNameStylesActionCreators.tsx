// Module ID: 15613
// Function ID: 15614
// Name: DisplayNameStylesActionCreators
// Dependencies: [584, 2]
// Exports: markDisplayNameStyleEffectSeen, markDisplayNameStyleFontSeen, markDisplayNameStyleNewEffectsBadgeDismissed, markDisplayNameStyleNewFontsBadgeDismissed

// Module 15613 (DisplayNameStylesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
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
