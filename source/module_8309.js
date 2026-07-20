// Module ID: 8309
// Function ID: 65834
// Dependencies: []

// Module 8309
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    sum = stateFromStoresArray1;
    const importDefault = sum;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchDehydrated(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    ({ isInitialLoad: closure_0, isReloading: closure_1, forceRefresh: closure_2 } = obj);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    icymi_info_modal = items;
    const importDefault = icymi_info_modal;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchForNotification(channel_id, message_id) {
    message_id = channel_id;
    const importDefault = message_id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchForStatusNotification(customStatusItem) {
    let obj = arg1(dependencyMap[5]);
    if (obj.icymiEnabled("fetchInitialStatus")) {
      obj = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      importDefault(dependencyMap[3]).dispatch(obj);
      const obj2 = importDefault(dependencyMap[3]);
    }
  },
  fetchHydrated(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
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
    importDefault(dependencyMap[3]).dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj);
  },
  openICYMITab() {
    importDefault(dependencyMap[3]).dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    importDefault(dependencyMap[3]).dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj);
  },
  triggerItemsLongImpression(found) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items: found };
    obj.dispatch(obj);
  },
  ackGravityItems(items, override) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj);
  },
  gravityScrollEvent(timestamp) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj);
  },
  setFilters(filters) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj);
  },
  giveFeedback() {
    return importDefault(dependencyMap[3]).dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  clearReadStates() {
    return importDefault(dependencyMap[3]).dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
  },
  addedRecommendedGuild() {
    return importDefault(dependencyMap[3]).dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj);
  },
  setTabFocused(isFocused) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj);
  },
  setCardHeight(itemId, height) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_TAKE_SURVEY", takenAt: timestamp };
    obj.dispatch(obj);
  },
  itemInteracted(id, type, open_profile) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: type, actionType: open_profile };
    obj.dispatch(obj);
  },
  feedItemActioned(arg0) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedFilterActioned(arg0) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
  feedPageActioned(arg0) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};
