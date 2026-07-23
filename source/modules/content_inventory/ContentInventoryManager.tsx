// Module ID: 16505
// Function ID: 128719
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 5, 4808, 4812, 4943, 12843, 11081, 8307, 8329, 653, 664, 22, 16506, 686, 12618, 16507, 5078, 2]

// Module 16505 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "apply";
import dispatcher from "dispatcher";
import apexExperiment from "apexExperiment";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { ContentInventoryFeedKey } from "ContentInventoryFeedKey";
import { PlatformTypes } from "ME";
import apply from "apply";
import tmp6 from "AutomaticLifecycleManager";
import set from "_possibleConstructorReturn";

const require = arg1;
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
  let obj = importDefault(686);
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
          idleSince = idleSince.getIdleSince();
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
      obj = require(12618) /* apexExperiment */;
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
        if (null != c22) {
          const _Date3 = Date;
          const date1 = new Date(c22);
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
        const result = map.set(GLOBAL_FEED, setTimeout(() => outer1_30({ feedId: outer1_17, feature: outer1_0(outer1_2[19]).ContentInventoryFeature.INBOX }), sum));
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
    account = account.getAccount(connectionId, PlatformTypes.SPOTIFY);
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
  fetchInventory({ feedId: ContentInventoryFeedKey.GLOBAL_FEED, feature: require(16507) /* ContentInventoryFeature */.ContentInventoryFeature.GAME_PROFILE });
}
let closure_16 = 2 * require("set").Millis.MINUTE;
const GLOBAL_FEED = ContentInventoryFeedKey.GLOBAL_FEED;
let closure_18 = 15 * require("set").Millis.MINUTE;
const map = new Map();
let set = new Set();
const map1 = new Map();
let c22 = null;
let closure_23 = apply.debounce(require("_getMyContentInventory").postTrackToContentInventory, 3000, { trailing: true });
tmp6 = new tmp6();
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryManager.tsx");

export default tmp6;
