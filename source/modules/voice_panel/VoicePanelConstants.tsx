// Module ID: 10006
// Function ID: 77325
// Name: VoicePanelModes
// Dependencies: []
// Exports: getAnalyticsNameForVoicePanelMode

// Module 10006 (VoicePanelModes)
let obj = { DISMISSED: "dismissed", PIP: "pip", PANEL: "panel" };
obj = { <string:1634937736>: "ars", <string:1733120470>: "<string:2741846272>", <string:1453996748>: "<string:3043033090>" };
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
const obj4 = { [obj3.NO_VIDEO_PARTICIPANTS]: { bhk: "\u{1F4A0}", bic: 6 } };
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
export const DRAWER_SPRING_PHYSICS = { <string:1634937736>: true, <string:1733120470>: true, <string:1453996748>: true };
export const LAYOUT_PHYSICS = { <string:1634937736>: 1137, <string:1733120470>: -2057748224, <string:1453996748>: 424738818 };
export const UI_SHOW_HIDE_PHYSICS = {};
export const MODE_CHANGE_PHYSICS = obj;
export const MODE_CHANGE_PHYSICS_CLAMPED = obj;
export const BORDER_RADIUS_PHYSICS = obj1;
export const PANEL_CONTROLS_HEIGHT_PHYSICS = obj2;
export const SPEAKING_PHYSICS = { _forceFlush: 0.0000000000000000000000000000000000000000000000000000000000000000000000019467491922792173, uniform: 0.6, TransitionStates: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030610715423, GappedList: "0deg", FILES_OR_LINKS_NUM_COLUMNS: 1, responseTtlSeconds: "row" };
export const PUSH_TO_TALK_PIP_PHYSICS = {};
export const DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = { <string:1634937736>: "construct", <string:1733120470>: "Array", <string:1453996748>: "isArray" };
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
