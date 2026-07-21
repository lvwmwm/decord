// Module ID: 16372
// Function ID: 126442
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16372 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getBackoffJitter() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  return Math.random() * (num + 1) * closure_16;
}
function setFeedState(GLOBAL_FEED, state) {
  let obj = importDefault(dependencyMap[17]);
  obj = { type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: GLOBAL_FEED, state };
  obj.dispatch(obj);
}
function canFetch(GLOBAL_FEED) {
  if (set.has(GLOBAL_FEED)) {
    return false;
  } else {
    if (GLOBAL_FEED === ContentInventoryFeedKey.GAME_PROFILE_FEED) {
      if (undefined !== store.getFeed(GLOBAL_FEED)) {
        return false;
      }
    }
    if (GLOBAL_FEED === GLOBAL_FEED) {
      if (obj.isEligibleForContentInventoryV1("ContentInventoryManager")) {
        if (hidden.hidden) {
          if (null != store.getFeed(GLOBAL_FEED)) {
            return false;
          }
        }
        if (connected.isConnected()) {
          const idleSince = idleSince.getIdleSince();
          if (null != idleSince) {
            const _Date = Date;
            if (Date.now() - idleSince > closure_18) {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
      const obj = arg1(dependencyMap[18]);
    }
    return true;
  }
}
function cancelScheduledFetch(GLOBAL_FEED) {
  setFeedState(GLOBAL_FEED, { loading: false });
  const value = map.get(GLOBAL_FEED);
  if (undefined !== value) {
    const _clearTimeout = clearTimeout;
    clearTimeout(value);
    map.delete(GLOBAL_FEED);
  }
}
function scheduleNextFetch() {
  const value = map1.get(GLOBAL_FEED);
  let num = 0;
  if (null != value) {
    num = value;
  }
  if (num <= 0) {
    cancelScheduledFetch(GLOBAL_FEED);
    if (canFetch(GLOBAL_FEED)) {
      const feed = store.getFeed(GLOBAL_FEED);
      let prop;
      if (null != feed) {
        prop = feed.refresh_stale_inbox_after_ms;
      }
      if (null == prop) {
        let expired_at;
        if (null != feed) {
          expired_at = feed.expired_at;
        }
        let num3 = 0;
        if (null != expired_at) {
          const _Date = Date;
          const date = new Date(feed.expired_at);
          const _Date2 = Date;
          const time = date.getTime();
          num3 = time - Date.now();
        }
        let num4 = 0;
        if (null != closure_22) {
          const _Date3 = Date;
          const date1 = new Date(closure_22);
          const _Date4 = Date;
          const time1 = date1.getTime();
          num4 = time1 - Date.now();
        }
        let num5 = 0;
        if (num > 0) {
          num5 = getBackoffJitter();
        }
        const _Math = Math;
        const sum = Math.max(0, num4, num3) + num5;
        const obj = { loading: false };
        const _Date5 = Date;
        const _Date6 = Date;
        const date2 = new Date(Date.now() + sum);
        obj.nextFetchDate = date2;
        setFeedState(GLOBAL_FEED, obj);
        const _setTimeout = setTimeout;
        const result = map.set(GLOBAL_FEED, setTimeout(() => callback2({ feedId: closure_17, feature: callback(closure_2[19]).ContentInventoryFeature.INBOX }), sum));
      }
    }
  }
}
function fetchInventory(arg0) {
  return _fetchInventory(...arguments);
}
function _fetchInventory() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _fetchInventory = obj;
  return obj(...arguments);
}
function handleUpdatePollingState() {
  scheduleNextFetch();
}
function handlePostConnectionOpen() {
  handleUpdatePollingState();
}
function handleConnectionClosed() {
  cancelScheduledFetch(GLOBAL_FEED);
}
function handleManualRefresh(feature) {
  const feedId = feature.feedId;
  cancelScheduledFetch(feedId);
  fetchInventory({ feedId, feature: feature.feature, force: true });
}
function handleInboxStale(refreshAfterMs) {
  let refresh_stale_inbox_after_ms = refreshAfterMs.refreshAfterMs;
  const feed = store.getFeed(GLOBAL_FEED);
  let prop;
  if (null != feed) {
    prop = feed.refresh_stale_inbox_after_ms;
  }
  if (null != prop) {
    const _Date = Date;
    const timestamp = Date.now();
    if (null == refresh_stale_inbox_after_ms) {
      refresh_stale_inbox_after_ms = feed.refresh_stale_inbox_after_ms;
    }
    const _Date2 = Date;
    const date = new Date(timestamp + refresh_stale_inbox_after_ms);
    let closure_22 = date.toUTCString();
    scheduleNextFetch();
  }
}
function handleSpotifyNewTrack(connectionId) {
  connectionId = connectionId.connectionId;
  if (null != connectionId) {
    const account = account.getAccount(connectionId, PlatformTypes.SPOTIFY);
    let showActivity;
    if (null != account) {
      showActivity = account.showActivity;
    }
    if (showActivity) {
      callback4(connectionId, tmp);
    }
  }
}
function handleFetchGameProfileFeed() {
  fetchInventory({ feedId: ContentInventoryFeedKey.GLOBAL_FEED, feature: arg1(dependencyMap[19]).ContentInventoryFeature.GAME_PROFILE });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
const ContentInventoryFeedKey = arg1(dependencyMap[12]).ContentInventoryFeedKey;
const PlatformTypes = arg1(dependencyMap[13]).PlatformTypes;
let closure_16 = 2 * importDefault(dependencyMap[14]).Millis.MINUTE;
const GLOBAL_FEED = ContentInventoryFeedKey.GLOBAL_FEED;
let closure_18 = 15 * importDefault(dependencyMap[14]).Millis.MINUTE;
const map = new Map();
const set = new Set();
const map1 = new Map();
let closure_22 = null;
let closure_23 = arg1(dependencyMap[15]).debounce(arg1(dependencyMap[16]).postTrackToContentInventory, 3000, { trailing: true });
let tmp6 = (arg0) => {
  class ContentInventoryManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ContentInventoryManager);
      items1 = [...items];
      obj = closure_6(ContentInventoryManager);
      tmp2 = closure_5;
      if (closure_24()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { POST_CONNECTION_OPEN: closure_33, CONNECTION_CLOSED: closure_34, WINDOW_FOCUS: closure_32, IDLE: closure_32, CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: closure_32, CONTENT_INVENTORY_MANUAL_REFRESH: closure_35, CONTENT_INVENTORY_INBOX_STALE: closure_36, SPOTIFY_NEW_TRACK: closure_37, GAME_PROFILE_OPEN: closure_38 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = ContentInventoryManager;
  callback2(ContentInventoryManager, arg0);
  return callback(ContentInventoryManager);
}(importDefault(dependencyMap[20]));
tmp6 = new tmp6();
const obj = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/content_inventory/ContentInventoryManager.tsx");

export default tmp6;
