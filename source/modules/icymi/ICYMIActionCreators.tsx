// Module ID: 8321
// Function ID: 65908
// Dependencies: [5, 653, 507, 686, 1184, 8320, 3803, 2]

// Module 8321
import generateHydrationId from "generateHydrationId";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    let closure_0 = stateFromStoresArray1;
    let closure_1 = sum;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchDehydrated(arg0) {
    let dependencyMap;
    let importDefault;
    let require;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ isInitialLoad: require, isReloading: importDefault, forceRefresh: dependencyMap } = obj);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    let closure_0 = items;
    let closure_1 = icymi_info_modal;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchForNotification(channel_id, message_id) {
    let closure_0 = channel_id;
    let closure_1 = message_id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchForStatusNotification(customStatusItem) {
    let obj = require(8320) /* generateHydrationId */;
    if (obj.icymiEnabled("fetchInitialStatus")) {
      obj = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      importDefault(686).dispatch(obj);
      const obj2 = importDefault(686);
    }
  },
  fetchHydrated(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  getGuildChannelScores() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  getRecommendedGuilds() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  getMediaForCurrentStatus() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  reloadICYMITab() {
    importDefault(686).dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    let obj = importDefault(686);
    obj = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj);
  },
  openICYMITab() {
    importDefault(686).dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    importDefault(686).dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj);
  },
  triggerItemsLongImpression(found) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items: found };
    obj.dispatch(obj);
  },
  ackGravityItems(items, override) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj);
  },
  gravityScrollEvent(timestamp) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj);
  },
  setFilters(filters) {
    let obj = importDefault(686);
    obj = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj);
  },
  giveFeedback() {
    return importDefault(686).dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  clearReadStates() {
    return importDefault(686).dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
  },
  addedRecommendedGuild() {
    return importDefault(686).dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj);
  },
  setTabFocused(isFocused) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj);
  },
  setCardHeight(itemId, height) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    let obj = importDefault(686);
    obj = { type: "ICYMI_TAKE_SURVEY", takenAt: timestamp };
    obj.dispatch(obj);
  },
  itemInteracted(id, type, open_profile) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: type, actionType: open_profile };
    obj.dispatch(obj);
  },
  feedItemActioned(arg0) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedFilterActioned(arg0) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedPageActioned(arg0) {
    let obj = importDefault(686);
    obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
