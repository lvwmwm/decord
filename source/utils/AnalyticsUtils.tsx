// Module ID: 675
// Function ID: 8282
// Name: expandLocation
// Dependencies: []
// Exports: addExtraAnalyticsDecorator, clearAnalyticsEventsRecording, getAnalyticsEventsRecording, getNewAnalyticsLoadId, isGameApplicationType, setUTMContext, startRecordingAnalyticsEvents, stopRecordingAnalyticsEvents, trackNetworkAction

// Module 675 (expandLocation)
let AnalyticEvents;
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
  const IGNORE_ANALYTICS_BREADCRUMB_EVENTS = arg1(dependencyMap[10]).IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
  if (!IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(message)) {
    let obj = importDefault(dependencyMap[11]);
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
  let arg1 = obj;
  let tmp = obj;
  if (null != obj.location) {
    obj = {};
    const merged = Object.assign(callback(obj, closure_4));
    const merged1 = Object.assign(expandLocation(obj.location));
    arg1 = obj;
    tmp = obj;
  }
  let tmp9 = tmp;
  if (null != tmp.source) {
    obj = {};
    const merged2 = Object.assign(callback(tmp, closure_5));
    const merged3 = Object.assign(expandSource(tmp.source));
    arg1 = obj;
    tmp9 = obj;
  }
  tmp9.client_performance_cpu = importDefault(dependencyMap[13]).getCurrentCPUUsagePercent();
  const obj4 = importDefault(dependencyMap[13]);
  tmp9.client_performance_memory = importDefault(dependencyMap[13]).getCurrentMemoryUsageKB();
  const obj5 = importDefault(dependencyMap[13]);
  tmp9.cpu_core_count = importDefault(dependencyMap[13]).getCPUCoreCount();
  tmp9.accessibility_features = getAccessibilityFeatures();
  tmp9.rendered_locale = arg1(dependencyMap[14]).intl.currentLocale;
  tmp9.uptime_app = Math.floor((performance.now() - closure_16) / closure_15);
  const obj6 = importDefault(dependencyMap[13]);
  const processUptime = importDefault(dependencyMap[13]).getProcessUptime();
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
  const report = importAll(dependencyMap[15]).report;
  if (flag) {
    report("Analytics", StringResult, result);
  } else {
    report("Analytics", StringResult);
  }
}
let closure_4 = [];
let closure_5 = ["LAUNCH_PAD_PULL_TAB_SCALE_FACTOR"];
let closure_6 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ setDebugTrackedData: closure_7, getLocation: closure_8 } = arg1(dependencyMap[2]));
let closure_9 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents, AnalyticsObjectTypes: closure_10, AnalyticsSections: closure_11 } = arg1(dependencyMap[4]));
const AccessibilityFeatureFlags = arg1(dependencyMap[5]).AccessibilityFeatureFlags;
const ApplicationTypes = arg1(dependencyMap[6]).ApplicationTypes;
let closure_14 = {};
let closure_15 = 1000;
const context = importAllResult.createContext({ location: {} });
let closure_16 = performance.now();
let obj1 = arg1(dependencyMap[7]);
let launchSignature = null;
if (obj1.isLibdiscoreInitialized()) {
  let obj2 = arg1(dependencyMap[7]);
  let obj3 = arg1(dependencyMap[8]);
  launchSignature = obj2.generateLaunchSignature(obj3.getGlobalObject());
}
const tmp3 = arg1(dependencyMap[4]);
let obj = { launch_signature: launchSignature };
const result = importAll(dependencyMap[9]).extendSuperProperties(obj);
let closure_18 = [];
obj = {
  [AnalyticEvents.APP_OPENED]: obj1,
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
  [arg1(dependencyMap[9]).ImpressionNames.GUILD_HANGOUT_WINDOW]: obj28,
  [arg1(dependencyMap[9]).ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT]: obj29,
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
obj1 = {
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
function getAccessibilityFeatures() {
  return AccessibilityFeatureFlags.NONE;
}
const importAllResult1 = importAll(dependencyMap[9]);
const obj10 = {
  throttlePeriod: 86400000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj11 = {
  throttlePeriod: 900000,
  throttleKeys(notif_type) {
    const items = [notif_type.notif_type];
    return items;
  }
};
const obj12 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj13 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj14 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
const obj15 = {
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
const obj16 = {
  throttlePeriod: 10000,
  throttleKeys() {
    return [];
  }
};
const obj17 = {
  throttlePeriod: 900000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
const obj18 = {
  throttlePeriod: 120000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ role_id: arr[0], tab_opened: arr[1] } = arg0);
    return items;
  }
};
const obj19 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
const obj20 = {
  throttlePeriod: 300000,
  throttleKeys() {
    return [];
  }
};
const obj21 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
const obj22 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
const obj23 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
const obj24 = {
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], command: arr[1] } = arg0);
    return items;
  }
};
const obj25 = {
  throttleKeys(arg0) {
    const items = [, ];
    ({ application_id: arr[0], event: arr[1] } = arg0);
    return items;
  }
};
const obj26 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
const obj27 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ banner_type: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
const obj28 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], banner_hash: arr[1] } = arg0);
    return items;
  }
};
const obj29 = {
  throttlePeriod: 86400000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], media_session_id: arr[1] } = arg0);
    return items;
  }
};
const obj30 = {
  throttlePeriod: 60000,
  throttleKeys(type) {
    const items = [type.type];
    return items;
  }
};
const obj31 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
const obj32 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
const obj33 = {
  throttlePeriod: 60000,
  throttleKeys(user_id) {
    const items = [user_id.user_id];
    return items;
  }
};
const obj34 = {
  throttlePeriod: 60000,
  throttleKeys() {
    return [];
  }
};
const obj35 = {
  throttlePeriod: 300000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj36 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ context: arr[0], guild_id: arr[1] } = arg0);
    return items;
  }
};
const obj37 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
const obj38 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj39 = {
  throttlePeriod: 900000,
  throttleKeys(tab) {
    const items = [tab.tab];
    return items;
  }
};
const obj4 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
const obj40 = {
  throttlePeriod: 900000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
const obj41 = {
  throttlePeriod: 60000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ guild_id: arr[0], channel_id: arr[1] } = arg0);
    return items;
  }
};
const obj42 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
const obj43 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
const obj44 = {
  throttlePeriod: 300000,
  throttleKeys(location_stack) {
    const items = [location_stack.location_stack];
    return items;
  }
};
const obj45 = {
  throttlePeriod: 900000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj46 = {
  throttleKeys(arg0) {
    const items = [, ];
    ({ activity_user_id: arr[0], surface: arr[1] } = arg0);
    return items;
  }
};
const obj47 = {
  throttleKeys(voice_channel_id) {
    const items = [voice_channel_id.voice_channel_id];
    return items;
  }
};
const obj48 = {
  throttlePeriod: 1000,
  throttleKeys(channel_id) {
    const items = [channel_id.channel_id];
    return items;
  }
};
const obj49 = {
  throttlePeriod: 900000,
  throttleKeys(arg0) {
    const items = [, ];
    ({ channel_id: arr[0], message_id: arr[1] } = arg0);
    return items;
  }
};
const obj5 = {
  throttlePeriod: 900000,
  throttleKeys(tab_opened) {
    const items = [tab_opened.tab_opened];
    return items;
  }
};
const obj50 = {
  throttlePeriod: 10000,
  throttleKeys(guild_id) {
    const items = [guild_id.guild_id];
    return items;
  }
};
const obj51 = {
  throttlePeriod: 43200000,
  throttleKeys(arg0) {
    const items = [, , , ];
    ({ os_enabled: arr[0], notification_authorization_status: arr[1], foreground_app_enabled: arr[2], background_app_enabled: arr[3] } = arg0);
    return items;
  }
};
const obj52 = {
  throttlePeriod: 3600000,
  throttleKeys(search_type) {
    const items = [search_type.search_type];
    return items;
  }
};
const obj53 = {
  throttlePeriod: 86400000,
  throttleKeys() {
    return [];
  }
};
const obj54 = {
  throttlePeriod: 86400000,
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
const obj55 = {
  throttlePeriod: 3600000,
  throttleKeys() {
    return [];
  }
};
const obj56 = {
  throttlePeriod: 1000,
  throttleKeys() {
    return [];
  }
};
const obj57 = {
  throttlePeriod: 900000,
  throttleKeys() {
    return [];
  }
};
const obj6 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
const obj7 = {
  throttlePeriod: 900000,
  throttleKeys(server) {
    const items = [server.server];
    return items;
  }
};
const obj8 = {
  throttleKeys(application_id) {
    const items = [application_id.application_id];
    return items;
  }
};
const obj9 = {
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
const obj65 = arg1(dependencyMap[9]);
let closure_20 = obj65.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: importDefault(dependencyMap[12]), TRACK_ACTION_NAME: "TRACK" });
let closure_21 = false;
let closure_22 = {};
const obj58 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: importDefault(dependencyMap[12]), TRACK_ACTION_NAME: "TRACK" };
const obj67 = arg1(dependencyMap[9]);
let closure_23 = obj67.trackMaker({ addBreadcrumb, analyticEventConfigs: obj, dispatcher: importDefault(dependencyMap[12]), TRACK_ACTION_NAME: "TRACK" });
const obj60 = {};
const merged = Object.assign(importAll(dependencyMap[9]));
obj60["getCampaignParams"] = arg1(dependencyMap[9]).getCampaignParams;
obj60["setSystemAccessibilityFeatures"] = function setSystemAccessibilityFeatures(getActiveFeatures) {
  const getAccessibilityFeatures = getActiveFeatures;
};
obj60["expandEventProperties"] = expandEventProperties;
obj60["track"] = function track(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  if (closure_21) {
    if (null != arg1) {
      const _Array = Array;
      if (Array.isArray(closure_22[arg0])) {
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
const obj59 = { addBreadcrumb, analyticEventConfigs: obj, dispatcher: importDefault(dependencyMap[12]), TRACK_ACTION_NAME: "TRACK" };
const result1 = arg1(dependencyMap[17]).fileFinishedImporting("utils/AnalyticsUtils.tsx");

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
  let closure_21 = true;
}
export function stopRecordingAnalyticsEvents() {
  let closure_21 = false;
}
export function getAnalyticsEventsRecording() {
  return closure_22;
}
export const clearAnalyticsEventsRecording = function clearAnalyticsEventsRecording() {
  const keys = Object.keys(closure_22);
  const item = keys.forEach((arg0) => {
    delete r1[r0];
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
  return arg1(dependencyMap[16]).v4();
};
export const AnalyticsSchema = importAll(dependencyMap[18]);
