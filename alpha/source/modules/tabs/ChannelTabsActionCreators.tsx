// Module ID: 10212
// Function ID: 10213
// Name: ChannelTabsActionCreators
// Dependencies: [5092, 5146, 10208, 1072, 5099, 6003, 1099, 6000, 5304, 5291, 5117, 6004, 572, 2]
// Exports: closeChannelTab, cycleChannelTab, goBackInActiveTab, goForwardInActiveTab, moveChannelTab, navigateToRoute, openChannelTab, openChannelTabActive, openCopyOfActiveTab, setChannelTabPinned, setChannelTabsEnabled, showCallViewOnJoin, trackChannelTabPinToggled

// Module 10212 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 5099 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import matchPathCompat from "matchPathCompat" /* 5291 */;
import RouteUtils from "RouteUtils" /* 5304 */;
import transitionToChannel from "transitionToChannel" /* 6000 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 6004 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import ChannelTabsStore from "ChannelTabsStore" /* 10208 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function navigateToTabLocation(activeTab) {
  let channelId;
  let guildId;
  if ("route" === activeTab.kind) {
    const obj4 = router_utils;
    obj4.transitionTo(activeTab.routePath);
  } else {
    ({ channelId, guildId } = activeTab);
    const channel = ChannelStore.getChannel(channelId);
    const tmp = null != channel && channel.isGuildVocal();
    if (tmp) {
      const obj = ChannelRTCActionCreatorsDefault;
      obj.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj3 = router_utils;
      obj3.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj2 = transitionToChannel;
      obj2.transitionToChannel(channelId);
    }
  }
}
function getPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (first === metroImportDefault.FRIENDS) {
    return "friends";
  } else if (first === metroImportDefault.COLLECTIBLES_SHOP) {
    return "shop";
  } else if (first === metroImportDefault.QUEST_HOME) {
    return "quests";
  } else if (first === metroImportDefault.APPLICATION_STORE) {
    return "nitro";
  } else {
    const CHANNEL = tmp2.CHANNEL;
    const RouteParam = RouteUtils.RouteParam;
    let str2 = "other";
    const obj2 = { path: CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?"), exact: true };
    const obj = matchPathCompat;
    if (null != obj.matchPath(first, obj2)) {
      str2 = "conjure";
    }
    return str2;
  }
}
function getTabProperties(found) {
  let channelId;
  let guildId;
  let tmp;
  const tabs = ChannelTabsStore.getTabs();
  const obj = { tab_kind: found.kind, tab_route: tmp, channel_id: channelId, guild_id: guildId, tab_count: tabs.length, pinned_tab_count: tabs.filter((pinned) => pinned.pinned).length };
  tmp = null;
  if ("route" === found.kind) {
    const str4 = found.routePath;
    const first = str4.split(/[?#]/)[0];
    let str3 = "friends";
    if (first !== metroImportDefault.FRIENDS) {
      str3 = "shop";
      if (first !== metroImportDefault.COLLECTIBLES_SHOP) {
        str3 = "quests";
        if (first !== metroImportDefault.QUEST_HOME) {
          str3 = "nitro";
          if (first !== metroImportDefault.APPLICATION_STORE) {
            const CHANNEL = tmp11.CHANNEL;
            const RouteParam = RouteUtils.RouteParam;
            let str2 = "other";
            const obj3 = { path: CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?"), exact: true };
            const obj2 = matchPathCompat;
            if (null != obj2.matchPath(first, obj3)) {
              str2 = "conjure";
            }
            str3 = str2;
          }
        }
      }
    }
    tmp = str3;
  }
  channelId = null;
  if ("channel" === found.kind) {
    channelId = found.channelId;
  }
  guildId = null;
  if ("channel" === found.kind) {
    guildId = null;
    const obj4 = FavoritesUtils;
    if (!obj4.isFavoritesGuildId(found.guildId)) {
      guildId = found.guildId;
    }
  }
  return obj;
}
function trackChannelTabOpened(tabs, close, is_new_tab, focused) {
  let closure_0 = tabs;
  tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let tmp5 = getPageName(tmp2.routePath);
      obj[tmp5] = obj[tmp5] + 1;
    }
    continue;
  }
  const obj2 = { method: close, is_new_tab, focused, tab_index: tabs.findIndex((id) => id.id === id.id), is_pinned: tabs.pinned, other_page_tab_count: obj.other + obj.nitro };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_OPENED = metroRequire.CHANNEL_TAB_OPENED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getTabProperties(tabs));
  ({ friends: obj3.friends_tab_count, shop: obj3.shop_tab_count, quests: obj3.quests_tab_count, conjure: obj3.conjure_tab_count } = obj);
  trackWithMetadata(CHANNEL_TAB_OPENED, obj2);
}
function navigateActiveTabHistory(arg0) {
  let channelId;
  let guildId;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = obj.getActiveTab();
    if (null == activeTab) {
      return ChannelTabsStore.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (SelectedChannelStore.getCurrentlySelectedChannelId() !== activeTab.channelId) {
          return ChannelTabsStore.Passthrough;
        }
      }
      const sum = activeTab.index + arg0;
      if (sum >= 0) {
        if (sum < activeTab.entries.length) {
          let Navigated;
          if ("route" === activeTab.entries[sum].kind) {
            let str3 = "CHANNEL_TABS_FORWARD";
            const dispatch2 = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (-1 === arg0) {
              str3 = "CHANNEL_TABS_BACK";
            }
            const obj2 = { type: str3 };
            dispatch2(obj2);
            const obj10 = router_utils;
            obj10.transitionTo(activeTab.entries[sum].routePath);
            Navigated = obj.Navigated;
          } else {
            const obj11 = ChannelStore;
            if (null == ChannelStore.getChannel(activeTab.entries[sum].channelId)) {
              let Noop;
              if (null != activeTab.entries[sum].guildId) {
                let str2 = "CHANNEL_TABS_FORWARD";
                const dispatch = DispatcherDefault.dispatch;
                DispatcherDefault;
                if (-1 === arg0) {
                  str2 = "CHANNEL_TABS_BACK";
                }
                const obj3 = { type: str2 };
                dispatch(obj3);
                const obj8 = router_utils;
                obj8.transitionTo(metroImportDefault.CHANNEL(activeTab.entries[sum].guildId, activeTab.entries[sum].channelId));
                Noop = obj.Navigated;
              } else {
                Noop = obj.Noop;
              }
              Navigated = Noop;
            } else {
              let str = "CHANNEL_TABS_FORWARD";
              const dispatch3 = DispatcherDefault.dispatch;
              DispatcherDefault;
              const tmp36 = importDefault;
              if (-1 === arg0) {
                str = "CHANNEL_TABS_BACK";
              }
              const obj4 = { type: str };
              dispatch3(obj4);
              ({ channelId, guildId } = activeTab.entries[sum]);
              const channel = obj11.getChannel(channelId);
              const tmp8 = null != channel && channel.isGuildVocal();
              if (tmp8) {
                const tmp36Result = tmp36(6003);
                tmp36Result.updateChatOpen(channelId, true);
              }
              if (null != guildId) {
                const obj6 = router_utils;
                obj6.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
              } else {
                const obj5 = transitionToChannel;
                obj5.transitionToChannel(channelId);
              }
              Navigated = obj.Navigated;
            }
          }
          return Navigated;
        }
      }
      return ChannelTabsStore.Noop;
    }
  } else {
    return ChannelTabsStore.Passthrough;
  }
}
function selectChannelTab(id, keyboard_cycle) {
  let channelId;
  let guildId;
  let closure_0 = id;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  const obj = ChannelTabsStore;
  if (null != found) {
    if (obj.getActiveTabId() !== id) {
      const obj6 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: found.id };
      const obj5 = DispatcherDefault;
      obj5.dispatch(obj6);
      trackChannelTabOpened(found, keyboard_cycle, false, true);
      navigateToTabLocation(found);
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const channel = ChannelStore.getChannel(channelId);
        const tmp2 = null != channel && channel.isGuildVocal();
        if (tmp2) {
          const obj2 = ChannelRTCActionCreatorsDefault;
          obj2.updateChatOpen(channelId, true);
        }
        if (null != guildId) {
          const obj4 = router_utils;
          obj4.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
        } else {
          const obj3 = transitionToChannel;
          obj3.transitionToChannel(channelId);
        }
      }
    }
  }
}
({ AnalyticEvents: metroRequire, Routes: metroImportDefault } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export function showCallViewOnJoin(id) {
  let isEnabledResult = ChannelTabsStore.isEnabled();
  if (isEnabledResult) {
    const channel = ChannelStore.getChannel(id);
    let isGuildVocalResult;
    if (channel != null) {
      isGuildVocalResult = channel.isGuildVocal();
    }
    isEnabledResult = true === isGuildVocalResult;
  }
  if (isEnabledResult) {
    const obj2 = ChannelRTCActionCreatorsDefault;
    obj2.updateChatOpen(id, false);
  }
}
export { trackChannelTabOpened };
export function openChannelTab(channelId, guildId, close) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj5 = { kind: "channel", channelId, guildId, sourceTabId: activeTabId };
    const length = ChannelTabsStore.getTabs().length;
    const obj6 = { type: "CHANNEL_TABS_OPEN" };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(obj5);
    dispatch(obj6);
    const tabs = obj.getTabs();
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
    }
  } else {
    const channel = ChannelStore.getChannel(channelId);
    const tmp3 = null != channel && channel.isGuildVocal();
    if (tmp3) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      obj2.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj4 = router_utils;
      obj4.transitionTo(metroImportDefault.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId);
    }
  }
}
export function openChannelTabActive(id, guildId, quick_switcher, arg3) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj5 = { kind: "channel", channelId: id, guildId, active: true, sourceTabId: activeTabId };
    const length = ChannelTabsStore.getTabs().length;
    const obj6 = { type: "CHANNEL_TABS_OPEN" };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(obj5);
    dispatch(obj6);
    const tabs = obj.getTabs();
    let tmp21 = null;
    const tmp14 = importDefault;
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
      tmp21 = tmp23;
    }
    const tmp27 = null != tmp21 && SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
    if (tmp27) {
      const channel = ChannelStore.getChannel(id);
      const tmp30 = null != channel && channel.isGuildVocal();
      if (tmp30) {
        const tmp14Result = tmp14(6003);
        tmp14Result.updateChatOpen(id, true);
      }
      if (null != guildId) {
        const obj10 = router_utils;
        obj10.transitionTo(metroImportDefault.CHANNEL(guildId, id), { openChannel: true });
      } else {
        const obj9 = transitionToChannel;
        obj9.transitionToChannel(id);
      }
    }
  } else {
    const channel1 = ChannelStore.getChannel(id);
    const tmp3 = null != channel1 && channel1.isGuildVocal();
    if (tmp3) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      obj2.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj4 = router_utils;
      obj4.transitionTo(metroImportDefault.CHANNEL(guildId, id), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(id);
    }
  }
}
export function openCopyOfActiveTab(quick_switcher) {
  const activeTab = ChannelTabsStore.getActiveTab();
  let tmp2 = null;
  if (null != activeTab) {
    const obj2 = { active: true, fresh: true };
    const merged = Object.assign(activeTab.entries[activeTab.index]);
    const length = ChannelTabsStore.getTabs().length;
    const obj3 = { type: "CHANNEL_TABS_OPEN" };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged1 = Object.assign(obj2);
    dispatch(obj3);
    const tabs = obj.getTabs();
    let tmp12 = null;
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
      tmp12 = tmp14;
    }
    let id;
    if (tmp12 != null) {
      id = tmp12.id;
    }
    if (id == null) {
      id = null;
    }
    tmp2 = id;
  }
  return tmp2;
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
  obj.dispatch(obj2);
  const activeTab = ChannelTabsStore.getActiveTab();
  const tmp4 = null != activeTabId && null != activeTab && activeTab.id !== activeTabId;
  if (tmp4) {
    trackChannelTabOpened(activeTab, "page_navigation", true, true);
  }
}
export { TabHistoryNavResult };
export function goBackInActiveTab() {
  return navigateActiveTabHistory(-1);
}
export function goForwardInActiveTab() {
  return navigateActiveTabHistory(1);
}
export function setChannelTabsEnabled(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_SET_ENABLED", enabled };
  obj.dispatch(obj2);
}
export { selectChannelTab };
export function cycleChannelTab(arg0) {
  let activeTabId;
  const tabs = ChannelTabsStore.getTabs();
  if (tabs.length > 1) {
    const findIndexResult = tabs.findIndex((id) => id.id === activeTabId.getActiveTabId());
    if (-1 !== findIndexResult) {
      selectChannelTab(tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id, "keyboard_cycle");
    }
  }
}
export function moveChannelTab(tabId, toIndex) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const findIndexResult = tabs.findIndex((id) => id.id === closure_0);
  const obj = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  const obj2 = DispatcherDefault;
  obj2.dispatch(obj);
  const tabs1 = ChannelTabsStore.getTabs();
  const findIndexResult1 = tabs1.findIndex((id) => id.id === closure_0);
  const tmp6 = -1 !== findIndexResult && -1 !== findIndexResult1 && findIndexResult1 !== findIndexResult;
  if (tmp6) {
    const obj3 = { from_index: findIndexResult, to_index: findIndexResult1, is_pinned: tabs1[findIndexResult1].pinned };
    const trackWithMetadata = tmp2(6004).trackWithMetadata;
    const CHANNEL_TAB_REORDERED = metroRequire.CHANNEL_TAB_REORDERED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(getTabProperties(tabs1[findIndexResult1]));
    trackWithMetadata(CHANNEL_TAB_REORDERED, obj3);
  }
}
export function setChannelTabPinned(tabId, pinned, source) {
  let closure_0 = tabId;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  const obj = ChannelTabsStore;
  if (found != null) {
    pinned = found.pinned;
  }
  const obj2 = DispatcherDefault;
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned, scope: tmp };
  obj2.dispatch(obj3);
  const tabs1 = obj.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  const tmp8 = null != found1 && pinned !== found1.pinned;
  if (tmp8) {
    const obj4 = { source, pinned: found1.pinned };
    const trackWithMetadata = tmp4(6004).trackWithMetadata;
    const CHANNEL_TAB_PIN_TOGGLED = metroRequire.CHANNEL_TAB_PIN_TOGGLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(getTabProperties(found1));
    trackWithMetadata(CHANNEL_TAB_PIN_TOGGLED, obj4);
  }
}
export function trackChannelTabPinToggled(pinned, source) {
  const obj = { source, pinned: pinned.pinned };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_PIN_TOGGLED = metroRequire.CHANNEL_TAB_PIN_TOGGLED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getTabProperties(pinned));
  trackWithMetadata(CHANNEL_TAB_PIN_TOGGLED, obj);
}
export function closeChannelTab(tabId, source) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp15 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj2);
    const tabs1 = obj.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    const tmp20 = !someResult;
    if (tmp20) {
      const obj4 = { source, was_active: tmp15, was_pinned: found.pinned };
      const trackWithMetadata = tmp16(6004).trackWithMetadata;
      const CHANNEL_TAB_CLOSED = metroRequire.CHANNEL_TAB_CLOSED;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(getTabProperties(found));
      trackWithMetadata(CHANNEL_TAB_CLOSED, obj4);
    }
    if (tmp15) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, "close", false, true);
        }
        navigateToTabLocation(activeTab);
      }
    }
  }
}
