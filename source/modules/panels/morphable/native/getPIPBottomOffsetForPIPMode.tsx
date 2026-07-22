// Module ID: 15477
// Function ID: 118055
// Name: PIP_WINDOW_OFFSET
// Dependencies: []
// Exports: default

// Module 15477 (PIP_WINDOW_OFFSET)
const PIP_WINDOW_OFFSET = require(dependencyMap[0]).PIP_WINDOW_OFFSET;
const fn = function _(arg0) {
  if ("panels" !== arg0) {
    if ("channel" !== arg0) {
      if ("messages" !== arg0) {
        if ("notifications" !== arg0) {
          if ("main_tab" !== arg0) {
            if ("guilds" !== arg0) {
              return 0;
            }
          }
        }
      }
      return 46 + PIP_WINDOW_OFFSET;
    }
  }
  return 60 + PIP_WINDOW_OFFSET;
};
const obj = { avatarMarginRight: -144637950, placeholderBarHeight: 33626945, animated: 1106731264, PIP_WINDOW_OFFSET };
fn.__closure = obj;
fn.__workletHash = 7115458448589;
fn.__initData = { code: "function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){const{DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'messages':case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}}" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx");

export default fn;
export const PIP_AVOIDANCE_TAB_BAR_HEIGHT = 46;
