// Module ID: 10006
// Function ID: 77336
// Name: VoicePanelModes
// Dependencies: []
// Exports: getAnalyticsNameForVoicePanelMode

// Module 10006 (VoicePanelModes)
let obj = { DISMISSED: "dismissed", PIP: "pip", PANEL: "panel" };
obj = { disableNewIOSPicker: "%MapPrototype%", webpackId: "isArray", connectedEmbeddedActivity: "NATIVE_REQUIRED_ASSETS" };
obj = {};
const merged = Object.assign(obj);
obj["overshootClamping"] = true;
const obj1 = {};
const merged1 = Object.assign(obj);
obj1["overshootClamping"] = true;
const obj2 = {};
const merged2 = Object.assign(obj);
obj2["mass"] = 0.3;
const obj3 = { NO_VIDEO_PARTICIPANTS: "no_video_participants", CALLER_DISCONNECTED: "caller_disconnected" };
const obj4 = { [obj3.NO_VIDEO_PARTICIPANTS]: { "Null": "\u{1F4A0}", "Null": 6 } };
const _module = require(dependencyMap[0]);
const set = new Set(Object.keys(obj4));
const _module1 = require(dependencyMap[0]);
const isAndroidResult = _module.isAndroid();
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/voice_panel/VoicePanelConstants.tsx");

export const VoicePanelModes = obj;
export const getAnalyticsNameForVoicePanelMode = function getAnalyticsNameForVoicePanelMode(arg0) {
  if (obj.DISMISSED === arg0) {
    return "dismissed";
  } else if (obj.PIP === arg0) {
    return "pip";
  } else if (obj.PANEL === arg0) {
    return "grid";
  }
};
export const VOICE_PANEL_CHUNK_DIVISOR = 3;
export const DEFAULT_BORDER_RADIUS = 24;
export const DEFAULT_BORDER_RADIUS_PIP = 24;
export const DRAWER_SPRING_PHYSICS = { disableNewIOSPicker: true, webpackId: true, connectedEmbeddedActivity: true };
export const LAYOUT_PHYSICS = { disableNewIOSPicker: null, webpackId: null, connectedEmbeddedActivity: null };
export const UI_SHOW_HIDE_PHYSICS = {};
export const MODE_CHANGE_PHYSICS = obj;
export const MODE_CHANGE_PHYSICS_CLAMPED = obj;
export const BORDER_RADIUS_PHYSICS = obj1;
export const PANEL_CONTROLS_HEIGHT_PHYSICS = obj2;
export const SPEAKING_PHYSICS = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000019282332468970948, "Bool(true)": 0.6, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030610539615, "Bool(true)": "0deg", "Bool(true)": 1, "Bool(true)": "row" };
export const PUSH_TO_TALK_PIP_PHYSICS = {};
export const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = { disableNewIOSPicker: "construct", webpackId: "Array", connectedEmbeddedActivity: "isArray" };
export const GridItemTypes = { USER: "USER", STREAM: "STREAM", ACTIVITY: "ACTIVIY" };
export const BASE_TARGET_CARD_SIZE = 165;
export const VoicePanelCTACard = obj3;
export const VoicePanelCTACardDimensions = obj4;
export const VoicePanelCTACardDimensionKeys = set;
export const VoicePanelCardItemType = { PARTICIPANT: "participant", CTA: "cta" };
export const IS_ANDROID = isAndroidResult;
export const IS_IOS = _module1.isIOS();
export const SECONDARY_PIP_TOP_MARGIN = 8;
export const VOICE_PANEL_DRAWER_MAX_WIDTH = 540;
