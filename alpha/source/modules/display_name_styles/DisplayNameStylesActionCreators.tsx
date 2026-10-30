// Module ID: 16421
// Function ID: 16422
// Name: DisplayNameStylesActionCreators
// Dependencies: [572, 2]
// Exports: markDisplayNameStyleEffectSeen, markDisplayNameStyleFontSeen, markDisplayNameStyleNewEffectsBadgeDismissed, markDisplayNameStyleNewFontsBadgeDismissed

// Module 16421 (DisplayNameStylesActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesActionCreators.tsx");

export function markDisplayNameStyleFontSeen(fontId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DISPLAY_NAME_STYLES_MARK_FONT_SEEN", fontId };
  obj.dispatch(obj2);
}
export function markDisplayNameStyleEffectSeen(effectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN", effectId };
  obj.dispatch(obj2);
}
export function markDisplayNameStyleNewFontsBadgeDismissed() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED" });
}
export function markDisplayNameStyleNewEffectsBadgeDismissed() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED" });
}
