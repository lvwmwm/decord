// Module ID: 8161
// Function ID: 64898
// Dependencies: [5, 653, 507, 686, 1184, 8160, 3838, 2]

// Module 8161
import generateHydrationId from "generateHydrationId";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    let closure_0 = stateFromStoresArray1;
    let closure_1 = sum;
    return callback(async () => {
      const HTTP = callback(outer2_2[2]).HTTP;
      obj = { url: outer2_4.GRAVITY_TOPIC_GUILDS, body: obj, rejectWithError: false };
      obj = { category_ids: outer1_0, offset: outer1_1 };
      obj = { type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: outer1_0, guilds: yield HTTP.post(obj).body.guilds, offset: outer1_1 };
      callback2(outer2_2[3]).dispatch(obj);
      return true;
    })();
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
    return callback(async () => {
      let obj = outer2_0(outer2_2[5]);
      if (obj.icymiEnabled("fetchDehydrated")) {
        if (outer1_1) {
          let obj1 = outer2_1(outer2_2[3]);
          obj1.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
        }
        const _Date = Date;
        const timestamp = Date.now();
        const HTTP = outer2_0(outer2_2[2]).HTTP;
        obj = { url: outer2_4.GRAVITY_ITEMS_DEHYDRATED };
        obj = { refresh: outer1_2 };
        obj.query = obj;
        obj.rejectWithError = false;
        const tmp11 = yield HTTP.get(obj);
        obj1 = { type: "LOAD_ICYMI_DEHYDRATED", items: tmp11.body.items, loadId: tmp11.body.load_id, startTime: timestamp, isReloading: outer1_1, isInitialLoad: outer1_0 };
        yield outer2_1(outer2_2[3]).dispatch(obj1);
        const obj5 = outer2_1(outer2_2[3]);
      }
    })();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    let closure_0 = items;
    let closure_1 = icymi_info_modal;
    return callback(async () => {
      let obj = callback(outer2_2[5]);
      if (obj.icymiEnabled("gravityJoinGuild")) {
        if (0 !== outer1_0.length) {
          const HTTP = callback(outer2_2[2]).HTTP;
          obj = { url: outer2_4.GRAVITY_JOIN_GUILD };
          obj = { guild_ids: outer1_0, location: outer1_1 };
          obj.body = obj;
          obj.rejectWithError = false;
          yield HTTP.post(obj);
          return true;
        }
      }
    })();
  },
  fetchForNotification(channel_id, message_id) {
    let closure_0 = channel_id;
    let closure_1 = message_id;
    return callback(async () => {
      let obj = callback(outer2_2[5]);
      if (obj.icymiEnabled("fetchInitial")) {
        const HTTP = callback(outer2_2[2]).HTTP;
        obj = { url: outer2_4.GRAVITY_ITEMS_HYDRATE };
        obj = {};
        const obj1 = { channel_id: outer1_0, message_id: outer1_1 };
        const items = [obj1];
        obj.message_items = items;
        obj.activity_items = [];
        obj.body = obj;
        obj.rejectWithError = false;
        const tmp6 = yield HTTP.post(obj);
        if (0 !== tmp6.body.message_items.length) {
          const obj2 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: tmp6.body.message_items[0] };
          callback2(outer2_2[3]).dispatch(obj2);
          const obj5 = callback2(outer2_2[3]);
        }
      }
    })();
  },
  fetchForStatusNotification(customStatusItem) {
    let obj = require(8160) /* generateHydrationId */;
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
    return callback(async () => {
      let activityItems;
      let messageItems;
      let obj = callback(8160);
      if (obj.icymiEnabled("fetchHydrated")) {
        ({ messageItems, activityItems } = outer1_2);
        if (0 === messageItems.length) {
          if (0 === activityItems.length) {
            let obj1 = callback2(686);
            obj = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: [], requestActivityItems: [], messageItems: [], activityItems: [], startingIndex: outer1_0, endingIndex: outer1_1 };
            obj1.dispatch(obj);
          }
        }
        const HTTP = callback(507).HTTP;
        obj = { url: outer2_4.GRAVITY_ITEMS_HYDRATE };
        obj1 = { message_items: messageItems, activity_items: activityItems };
        obj.body = obj1;
        obj.rejectWithError = false;
        const tmp14 = yield HTTP.post(obj);
        const obj2 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: messageItems, requestActivityItems: activityItems, messageItems: tmp14.body.message_items, activityItems: tmp14.body.activity_items, startingIndex: outer1_0, endingIndex: outer1_1 };
        callback2(686).dispatch(obj2);
        const obj6 = callback2(686);
        const tmp2 = messageItems;
      }
    })();
  },
  getGuildChannelScores() {
    return callback(async () => {
      let obj = outer2_0(outer2_2[5]);
      if (obj.icymiEnabled("guildChannelScores")) {
        const HTTP = outer2_0(outer2_2[2]).HTTP;
        obj = { url: outer2_4.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
        const tmp4 = yield HTTP.get(obj);
        obj = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: tmp4.body };
        outer2_1(outer2_2[3]).dispatch(obj);
        const obj3 = outer2_1(outer2_2[3]);
      }
    })();
  },
  getRecommendedGuilds() {
    return callback(async () => {
      let obj = outer2_0(outer2_2[5]);
      if (obj.icymiEnabled("recommendedGuilds")) {
        const HTTP = outer2_0(outer2_2[2]).HTTP;
        obj = { url: outer2_4.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
        const tmp4 = yield HTTP.get(obj);
        obj = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: tmp4.body.guilds };
        outer2_1(outer2_2[3]).dispatch(obj);
        const obj3 = outer2_1(outer2_2[3]);
      }
    })();
  },
  getMediaForCurrentStatus() {
    return callback(async () => {
      let obj = outer2_0(outer2_2[5]);
      if (obj.icymiEnabled("mediaForCurrentStatus")) {
        const CustomStatusSetting = outer2_0(outer2_2[6]).CustomStatusSetting;
        const setting = CustomStatusSetting.getSetting();
        if (null != setting) {
          if (null != tmp4.createdAtMs) {
            const HTTP = outer2_0(outer2_2[2]).HTTP;
            obj = { url: outer2_4.GRAVITY_ATTACHMENTS, rejectWithError: false };
            const tmp14 = yield HTTP.get(obj);
            obj = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: tmp14.body.attachments };
            const _Number = Number;
            obj.createdAtMs = Number(setting.createdAtMs);
            outer2_1(outer2_2[3]).dispatch(obj);
            const obj2 = outer2_1(outer2_2[3]);
          }
        }
      }
    })();
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
