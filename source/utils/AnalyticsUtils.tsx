// Module ID: 675
// Function ID: 8286
// Name: expandLocation
// Dependencies: [29, 31, 676, 683, 653, 13127, 4156, 1844, 674, 480, 13125, 1184, 686, 6917, 1212, 12, 491, 2, 13128]
// Exports: addExtraAnalyticsDecorator, clearAnalyticsEventsRecording, getAnalyticsEventsRecording, getNewAnalyticsLoadId, isGameApplicationType, setUTMContext, startRecordingAnalyticsEvents, stopRecordingAnalyticsEvents, trackNetworkAction

// Module 675 (expandLocation)
import _objectWithoutProperties from "_objectWithoutProperties";
import withEqualityFn from "withEqualityFn";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { AccessibilityFeatureFlags } from "AccessibilityFeatureFlags";
import { ApplicationTypes } from "ApplicationTypes";
import isBlockedDomain from "isBlockedDomain";
import importAllResult from "result";
import isThrottled from "isThrottled";
import importAllResult1 from "isThrottled";
import isThrottled from "isThrottled";
import merged from "isThrottled";

let AnalyticEvents;
let closure_10;
let closure_11;
let closure_7;
let closure_8;
const require = arg1;
function expandLocation(location) {
  if ("string" === typeof location) {
    let obj = { location };
  } else {
    obj = {};
    ({ page: obj.location, page: obj.location_page, section: obj.location_section, object: obj.location_object, objectType: obj.location_object_type } = location);
  }
  return obj;
}
function expandSource(source) {
  if ("string" === typeof source) {
    let obj = { source };
  } else {
    obj = {};
    ({ page: obj.source_page, section: obj.source_section, object: obj.source_object, objectType: obj.source_object_type, promotionId: obj.source_promotion_id } = source);
  }
  return obj;
}
function addBreadcrumb(message) {
  const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = require(13125) /* IGNORE_ANALYTICS_BREADCRUMB_EVENTS */.IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
  if (!IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(message)) {
    let obj = importDefault(1184);
    obj = { category: "analytics", message };
    obj.addBreadcrumb(obj);
  }
}
function expandEventProperties(arg0) {
  let utmCampaign;
  let utmContent;
  let utmMedium;
  let utmSource;
  let obj = arg0;
  if (null == arg0) {
    obj = {};
  }
  let tmp = obj;
  if (null != obj.location) {
    obj = {};
    const merged = Object.assign(callback(obj, closure_4));
    const merged1 = Object.assign(expandLocation(obj.location));
    tmp = obj;
  }
  let tmp9 = tmp;
  if (null != tmp.source) {
    obj = {};
    const merged2 = Object.assign(callback(tmp, closure_5));
    const merged3 = Object.assign(expandSource(tmp.source));
    tmp9 = obj;
  }
  tmp9.client_performance_cpu = importDefault(6917).getCurrentCPUUsagePercent();
  const obj4 = importDefault(6917);
  tmp9.client_performance_memory = importDefault(6917).getCurrentMemoryUsageKB();
  const obj5 = importDefault(6917);
  tmp9.cpu_core_count = importDefault(6917).getCPUCoreCount();
  tmp9.accessibility_features = getAccessibilityFeatures();
  tmp9.rendered_locale = obj(1212).intl.currentLocale;
  tmp9.uptime_app = Math.floor((performance.now() - closure_16) / c15);
  const obj6 = importDefault(6917);
  const processUptime = importDefault(6917).getProcessUptime();
  if (null != processUptime) {
    const _Math = Math;
    tmp9.uptime_process_renderer = Math.floor(processUptime);
  }
  ({ utmSource, utmMedium, utmCampaign, utmContent } = closure_14);
  const utm_source = tmp9.utm_source;
  if (null != utm_source) {
    utmSource = utm_source;
  }
  tmp9.utm_source = utmSource;
  const utm_medium = tmp9.utm_medium;
  if (null != utm_medium) {
    utmMedium = utm_medium;
  }
  tmp9.utm_medium = utmMedium;
  const utm_campaign = tmp9.utm_campaign;
  if (null != utm_campaign) {
    utmCampaign = utm_campaign;
  }
  tmp9.utm_campaign = utmCampaign;
  const utm_content = tmp9.utm_content;
  if (null != utm_content) {
    utmContent = utm_content;
  }
  tmp9.utm_content = utmContent;
  tmp9.launch_signature = launchSignature;
  const item = arr.forEach((arg0) => arg0(obj));
  return tmp9;
}
function debugLogEvent(StringResult, result, logEventProperties) {
  let flag = logEventProperties;
  if (logEventProperties === undefined) {
    flag = false;
  }
  const report = importAll(12).report;
  if (flag) {
    report("Analytics", StringResult, result);
  } else {
    report("Analytics", StringResult);
  }
}
let closure_4 = ["location"];
let closure_5 = ["source"];
({ setDebugTrackedData: closure_7, getLocation: closure_8 } = withEqualityFn);
({ AnalyticEvents, AnalyticsObjectTypes: closure_10, AnalyticsSections: closure_11 } = ME);
let closure_14 = {};
let c15 = 1000;
const context = require("result").createContext({ location: {} });
let closure_16 = performance.now();
let launchSignature = null;
if (isBlockedDomain.isLibdiscoreInitialized()) {
  let obj2 = require("isBlockedDomain");
  let obj3 = require("getGlobalObject");
  launchSignature = obj2.generateLaunchSignature(obj3.getGlobalObject());
}
let obj = { launch_signature: launchSignature };
const result = require("isThrottled").extendSuperProperties(obj);
let closure_18 = [];
obj = {
  [AnalyticEvents.APP_OPENED]: isBlockedDomain,
  [AnalyticEvents.APP_BACKGROUND]: obj2,
  [AnalyticEvents.ACK_MESSAGES]: (location_object_type) => {
    let tmp;
    if (location_object_type.location_object_type !== constants.ACK_MANUAL) {
      const obj = {
        throttlePeriod: 900000,
        throttleKeys(arg0) {
            const items = [, , ];
            ({ guild_id: arr[0], channel_id: arr[1], location_section: arr[2] } = arg0);
            return items;
          }
      };
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.GUILD_VIEWED]: obj3,
  [AnalyticEvents.FRIENDS_LIST_VIEWED]: obj4,
  [AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: obj5,
  [AnalyticEvents.START_SPEAKING]: obj6,
  [AnalyticEvents.START_LISTENING]: obj7,
  [AnalyticEvents.ACTIVITY_UPDATED]: obj8,
  [AnalyticEvents.CHANNEL_OPENED]: obj9,
  [AnalyticEvents.TEXT_IN_VOICE_OPENED]: obj10,
  [AnalyticEvents.NOTIFICATION_VIEWED]: obj11,
  [AnalyticEvents.MEMBER_LIST_VIEWED]: obj12,
  [AnalyticEvents.DM_LIST_VIEWED]: obj13,
  [AnalyticEvents.NAV_DRAWER_OPENED]: obj14,
  [AnalyticEvents.KEYBOARD_SHORTCUT_USED]: obj15,
  [AnalyticEvents.QUICKSWITCHER_OPENED]: obj16,
  [AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: obj17,
  [AnalyticEvents.ROLE_PAGE_VIEWED]: obj18,
  [AnalyticEvents.VIDEO_INPUT_INITIALIZED]: obj19,
  [AnalyticEvents.AUDIO_INPUT_INITIALIZED]: obj20,
  [AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: obj21,
  [AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: obj22,
  [AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: obj23,
  [AnalyticEvents.RPC_COMMAND_SENT]: obj24,
  [AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: obj25,
  [AnalyticEvents.ACTIVITY_HANDSHAKE]: obj26,
  [AnalyticEvents.CHANNEL_BANNER_VIEWED]: obj27,
  [arg1(480).ImpressionNames.GUILD_HANGOUT_WINDOW]: obj28,
  [arg1(480).ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: obj29,
  [AnalyticEvents.PREMIUM_UPSELL_VIEWED]: obj30,
  [AnalyticEvents.FORUM_CHANNEL_SEARCHED]: obj31,
  [AnalyticEvents.FORUM_CHANNEL_SCROLLED]: obj32,
  [AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: obj33,
  [AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: obj34,
  [AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: obj35,
  [AnalyticEvents.ACTIVITY_CARDS_VIEWED]: obj36,
  [AnalyticEvents.GUILD_TOOLTIP_SHOWN]: obj37,
  [AnalyticEvents.ACK_COMMUNITY_MESSAGES]: obj38,
  [AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: obj39,
  [AnalyticEvents.CHANNEL_LIST_END_REACHED]: obj40,
  [AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: obj41,
  [AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: obj42,
  [AnalyticEvents.MEDIA_INPUT_VOLUME_CHANGED]: obj43,
  [AnalyticEvents.MEDIA_OUTPUT_VOLUME_CHANGED]: obj44,
  [AnalyticEvents.APP_DMS_QUICK_LAUNCHER_IMPRESSION]: obj45,
  [AnalyticEvents.USER_VOICE_ACTIVITY_VIEWED]: obj46,
  [AnalyticEvents.PARTY_VOICE_ACTIVITY_VIEWED]: obj47,
  [AnalyticEvents.MEMBER_LIST_SWIPE_PEEK]: obj48,
  [AnalyticEvents.REDACTABLE_MESSAGE_LOADED]: obj49,
  [AnalyticEvents.OPEN_MODAL]: (type) => {
    let tmp;
    if (type.type === constants2.MEDIA_VIEWER) {
      const obj = {
        throttlePeriod: 60000,
        throttleKeys(type) {
            const items = [type.type];
            return items;
          }
      };
      tmp = obj;
    }
    return tmp;
  },
  [AnalyticEvents.MODERATOR_QUEUE_ACTION]: obj50,
  [AnalyticEvents.NOTIFICATION_PERMISSION_STATUS]: obj51,
  [AnalyticEvents.SEARCH_BAR_VIEWED]: obj52,
  [AnalyticEvents.AD_IDENTIFIER_FETCHED]: obj53,
  [AnalyticEvents.ACTIVITY_PANEL_SDK_LINK_VIEWED]: obj54,
  [AnalyticEvents.LIBDISCORE_SLOW_TIMERS]: obj55,
  [AnalyticEvents.VIDEO_STREAM_ZOOM_CHANGED]: obj56,
  [AnalyticEvents.CACHE_STATS_RECORDED]: obj57
};
isBlockedDomain = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
obj2 = {
  throttlePeriod: 120000,
  throttleKeys() {
    return [];
  }
};
obj3 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], is_pending: arr[1] } = arg0);
    return items;
  }
};
obj8 = {
  throttlePeriod: 60000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  },
  deduplicate: true
};
obj24 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], command: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001
};
obj25 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], event: arr[1] } = arg0);
    return items;
  },
  throttlePercent: 0.001
};
obj46 = {
  throttlePeriod: 300000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ activity_user_id: arr[0], surface: arr[1] } = arg0);
    return items;
  },
  deduplicate: true
};
obj47 = {
  throttlePeriod: 300000,
  throttleKeys(voice_channel_id) {
    const items = [voice_channel_id.voice_channel_id];
    return items;
  },
  deduplicate: true
};
function getAccessibilityFeatures() {
  return AccessibilityFeatureFlags.NONE;
}
obj10 = {
  throttlePeriod: 86400000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj11 = {
  throttlePeriod: 900000,
  throttleKeys(notif_type) {
    const items = [notif_type.notif_type];
    return items;
  }
};
obj12 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj13 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj14 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj15 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    let source_class_list;
    const items = [, ];
    ({ shortcut_name: arr[0], location_object: arr[1], source_class_list } = arg0);
    if (null == source_class_list) {
      source_class_list = [];
    }
    HermesBuiltin.arraySpread(source_class_list, 2);
    return items;
  }
};
obj16 = {
  throttlePeriod: 10000,
  throttleKeys() {
    return [];
  }
};
obj17 = {
  throttlePeriod: 900000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
obj18 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ role_id: arr[0], tab_opened: arr[1] } = arg0);
    return items;
  }
};
obj19 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
obj20 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
obj21 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj22 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj23 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
obj26 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
obj27 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ banner_type: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj28 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], banner_hash: arr[1] } = arg0);
    return items;
  }
};
obj29 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], media_session_id: arr[1] } = arg0);
    return items;
  }
};
obj30 = {
  throttlePeriod: 60000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
obj31 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj32 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj33 = {
  throttlePeriod: 60000,
  throttleKeys(user_id) {
    const items = [user_id.user_id];
    return items;
  }
};
obj34 = {
  throttlePeriod: 60000,
  throttleKeys() {
    return [];
  }
};
obj35 = {
  throttlePeriod: 300000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj36 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ context: arr[0], guild_id: arr[1] } = arg0);
    return items;
  }
};
obj37 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj38 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj39 = {
  throttlePeriod: 900000,
  throttleKeys(tab) {
    const items = [tab.tab];
    return items;
  }
};
obj4 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
obj40 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj41 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
obj42 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
obj43 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
obj44 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
obj45 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj48 = {
  throttlePeriod: 1000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
obj49 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], message_id: arr[1] } = arg0);
    return items;
  }
};
obj5 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
obj50 = {
  throttlePeriod: 10000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
obj51 = {
  throttlePeriod: 43200000,
  throttleKeys(arg0) {
    const items = [, , , ];
    ({ os_enabled: arr[0], notification_authorization_status: arr[1], foreground_app_enabled: arr[2], background_app_enabled: arr[3] } = arg0);
    return items;
  }
};
obj52 = {
  throttlePeriod: 3600000,
  throttleKeys(search_type) {
    const items = [search_type.search_type];
    return items;
  }
};
obj53 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
obj54 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
obj55 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
obj56 = {
  throttlePeriod: 1000,
  throttleKeys() {
    return [];
  }
};
obj57 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
obj6 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
obj7 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
obj9 = {
  throttlePeriod: 900000,
  throttleKeys(channel_static_route) {
    if (null != channel_static_route.channel_static_route) {
      const items = [, , ];
      ({ guild_id: arr2[0], channel_static_route: arr2[1], channel_view: arr2[2] } = channel_static_route);
      let items1 = items;
    } else {
      items1 = [, ];
      ({ channel_id: arr[0], channel_view: arr[1] } = channel_static_route);
    }
    return items1;
  }
};
let closure_20 = isThrottled.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: require("dispatcher"), TRACK_ACTION_NAME: "TRACK" });
let c21 = false;
let closure_22 = {};
const obj58 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: require("dispatcher"), TRACK_ACTION_NAME: "TRACK" };
let closure_23 = isThrottled.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: require("dispatcher"), TRACK_ACTION_NAME: "TRACK" });
const obj60 = {};
obj60["getCampaignParams"] = require("isThrottled").getCampaignParams;
obj60["setSystemAccessibilityFeatures"] = function setSystemAccessibilityFeatures(getActiveFeatures) {
  let closure_19 = getActiveFeatures;
};
obj60["expandEventProperties"] = expandEventProperties;
obj60["track"] = function track(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (c21) {
    if (null != arg1) {
      const _Array = Array;
      if (Array.isArray(table[arg0])) {
        tmp4[arg0].push(arg1);
        const arr2 = tmp4[arg0];
      } else {
        const items = [arg1];
        tmp4[arg0] = items;
      }
    }
  }
  if (null != obj.throttlePercent) {
    const _Math = Math;
    if (Math.random() > obj.throttlePercent) {
      return Promise.resolve();
    }
  }
  const tmp6 = expandEventProperties(arg1);
  debugLogEvent(String(arg0), tmp6, obj.logEventProperties);
  obj = {};
  ({ flush: obj2.flush, fingerprint: obj2.fingerprint } = obj);
  return callback4(arg0, tmp6, obj);
};
const obj59 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: require("dispatcher"), TRACK_ACTION_NAME: "TRACK" };
const result1 = require("withEqualityFn").fileFinishedImporting("utils/AnalyticsUtils.tsx");

export default obj60;
export const AnalyticsContext = context;
export { launchSignature };
export const addExtraAnalyticsDecorator = function addExtraAnalyticsDecorator(arg0) {

};
export const AnalyticEventConfigs = obj;
export { expandLocation };
export function setUTMContext(arg0) {
  let closure_14 = arg0;
  return arg0;
}
export { expandEventProperties };
export { debugLogEvent };
export function startRecordingAnalyticsEvents() {
  let c21 = true;
}
export function stopRecordingAnalyticsEvents() {
  let c21 = false;
}
export function getAnalyticsEventsRecording() {
  return closure_22;
}
export const clearAnalyticsEventsRecording = function clearAnalyticsEventsRecording() {
  const keys = Object.keys(closure_22);
  const item = keys.forEach((arg0) => {
    delete tmp2[tmp];
  });
};
export const isGameApplicationType = function isGameApplicationType(arg0) {
  let tmp = arg0 === ApplicationTypes.GAME;
  if (!tmp) {
    tmp = arg0 === ApplicationTypes.DEPRECATED_GAME;
  }
  return tmp;
};
export const trackNetworkAction = function trackNetworkAction(event, arg1) {
  let obj = { location: callback3() };
  const merged = Object.assign(arg1);
  const tmp2 = expandEventProperties(obj);
  obj = { type: "action" };
  const merged1 = Object.assign(arg1);
  callback2(event, obj);
  debugLogEvent(event, tmp2);
  callback5(event, tmp2);
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  return require(491) /* v1 */.v4();
};
export const AnalyticsSchema = require("ME");
