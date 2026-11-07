// Module ID: 13631
// Function ID: 13632
// Name: ChannelTabsActionCreators
// Dependencies: [4989, 5043, 5171, 13629, 1072, 4996, 5888, 1099, 5885, 5189, 5176, 5014, 5889, 572, 2]
// Exports: closeChannelTab, cycleChannelTab, goBackInActiveTab, goForwardInActiveTab, moveChannelTab, navigateToRoute, openChannelTab, openDuplicateTab, setChannelTabPinned, setChannelTabsEnabled

// Module 13631 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import FavoritesUtils from "FavoritesUtils" /* 5014 */;
import matchPathCompat from "matchPathCompat" /* 5176 */;
import RouteUtils from "RouteUtils" /* 5189 */;
import transitionToChannel from "transitionToChannel" /* 5885 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5889 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5171 */;
import ChannelTabsStore from "ChannelTabsStore" /* 13629 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4996 */;
import size from "module_2" /* 2 */;

let set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function navigateToTabLocation(activeTab, flag) {
  let channelId;
  let guildId;
  if (flag === undefined) {
    flag = false;
  }
  if ("route" === activeTab.kind) {
    const obj5 = router_utils;
    obj5.transitionTo(activeTab.routePath);
  } else {
    ({ channelId, guildId } = activeTab);
    if (flag === undefined) {
      flag = false;
    }
    const channel = ChannelStore.getChannel(channelId);
    const tmp3 = null != channel && channel.isGuildVocal();
    if (tmp3) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      obj2.updateChatOpen(channelId, !flag);
    }
    if (null != guildId) {
      const obj4 = router_utils;
      obj4.transitionTo(metroImportAll.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId);
    }
  }
}
function getPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (first === metroImportAll.FRIENDS) {
    return "friends";
  } else if (first === metroImportAll.COLLECTIBLES_SHOP) {
    return "shop";
  } else if (first === metroImportAll.QUEST_HOME) {
    return "quests";
  } else {
    const CHANNEL = tmp2.CHANNEL;
    const RouteParam = RouteUtils.RouteParam;
    let str2 = "other";
    const obj2 = { path: CHANNEL(RouteParam.guildId(), constants2.CONJURE, ":projectId?"), exact: true };
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
    if (first !== metroImportAll.FRIENDS) {
      str3 = "shop";
      if (first !== metroImportAll.COLLECTIBLES_SHOP) {
        str3 = "quests";
        if (first !== metroImportAll.QUEST_HOME) {
          const CHANNEL = tmp11.CHANNEL;
          const RouteParam = RouteUtils.RouteParam;
          let str2 = "other";
          const obj3 = { path: CHANNEL(RouteParam.guildId(), constants2.CONJURE, ":projectId?"), exact: true };
          const obj2 = matchPathCompat;
          if (null != obj2.matchPath(first, obj3)) {
            str2 = "conjure";
          }
          str3 = str2;
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
  const obj = { friends: 0, shop: 0, quests: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let tmp5 = getPageName(tmp2.routePath);
      obj[tmp5] = obj[tmp5] + 1;
    }
    continue;
  }
  const obj2 = { method: close, is_new_tab, focused, tab_index: tabs.findIndex((id) => id.id === id.id), is_pinned: tabs.pinned };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_OPENED = metroImportDefault.CHANNEL_TAB_OPENED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getTabProperties(tabs));
  ({ friends: obj3.friends_tab_count, shop: obj3.shop_tab_count, quests: obj3.quests_tab_count, conjure: obj3.conjure_tab_count, other: obj3.other_page_tab_count } = obj);
  trackWithMetadata(CHANNEL_TAB_OPENED, obj2);
}
function openChannelTabActive(id, guildId, quick_switcher) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  const obj = SelectedChannelStore;
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(id);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj4 = ChannelRTCActionCreatorsDefault;
      obj4.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj6 = router_utils;
      obj6.transitionTo(metroImportAll.CHANNEL(guildId, id), { openChannel: true });
    } else {
      const obj5 = transitionToChannel;
      obj5.transitionToChannel(id);
    }
  }
  if (!ChannelTabsStore.isAtMaxTabs()) {
    const obj3 = { kind: "channel", channelId: id, guildId, active: true };
    const length = ChannelTabsStore.getTabs().length;
    const obj7 = { type: "CHANNEL_TABS_OPEN" };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(obj3);
    dispatch(obj7);
    const tabs = obj2.getTabs();
    const tmp15 = importDefault;
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], quick_switcher, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
    }
    if (obj.getCurrentlySelectedChannelId() !== id) {
      const channel1 = ChannelStore.getChannel(id);
      const tmp27 = null != channel1 && channel1.isGuildVocal();
      if (tmp27) {
        const tmp15Result = tmp15(5888);
        tmp15Result.updateChatOpen(id, true);
      }
      if (null != guildId) {
        const obj11 = router_utils;
        obj11.transitionTo(metroImportAll.CHANNEL(guildId, id), { openChannel: true });
      } else {
        const obj10 = transitionToChannel;
        obj10.transitionToChannel(id);
      }
    }
  }
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
                obj8.transitionTo(metroImportAll.CHANNEL(activeTab.entries[sum].guildId, activeTab.entries[sum].channelId));
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
                const tmp36Result = tmp36(5888);
                tmp36Result.updateChatOpen(channelId, true);
              }
              if (null != guildId) {
                const obj6 = router_utils;
                obj6.transitionTo(metroImportAll.CHANNEL(guildId, channelId), { openChannel: true });
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
function selectChannelTab(id, quick_switcher, flag) {
  let channelId;
  let guildId;
  let closure_0 = id;
  if (flag === undefined) {
    flag = false;
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  const obj = ChannelTabsStore;
  if (null != found) {
    if (obj.getActiveTabId() !== id) {
      const obj2 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: id };
      const obj8 = DispatcherDefault;
      obj8.dispatch(obj2);
      trackChannelTabOpened(found, quick_switcher, false, true);
      navigateToTabLocation(found, flag);
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        let flag4 = flag;
        if (flag === undefined) {
          flag4 = false;
        }
        const channel = ChannelStore.getChannel(channelId);
        const tmp9 = null != channel && channel.isGuildVocal();
        if (tmp9) {
          const obj5 = ChannelRTCActionCreatorsDefault;
          obj5.updateChatOpen(channelId, !flag4);
        }
        if (null != guildId) {
          const obj7 = router_utils;
          obj7.transitionTo(metroImportAll.CHANNEL(guildId, channelId), { openChannel: true });
        } else {
          const obj6 = transitionToChannel;
          obj6.transitionToChannel(channelId);
        }
      } else {
        let tmp2 = flag;
        if (tmp2) {
          const channel1 = ChannelStore.getChannel(found.channelId);
          let isGuildVocalResult;
          if (channel1 != null) {
            isGuildVocalResult = channel1.isGuildVocal();
          }
          tmp2 = true === isGuildVocalResult;
        }
        if (tmp2) {
          const obj3 = ChannelRTCActionCreatorsDefault;
          obj3.updateChatOpen(found.channelId, false);
        }
      }
    }
  }
}
({ AnalyticEvents: metroImportDefault, Routes: metroImportAll } = Constants);
({ isStaticChannelRoute: c9, StaticChannelRoute: c10 } = ChannelConstants);
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export { trackChannelTabOpened };
export function openChannelTab(channelId, guildId, close) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(channelId);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj3 = ChannelRTCActionCreatorsDefault;
      obj3.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj5 = router_utils;
      obj5.transitionTo(metroImportAll.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj4 = transitionToChannel;
      obj4.transitionToChannel(channelId);
    }
  }
  const obj2 = { kind: "channel", channelId, guildId };
  const length = ChannelTabsStore.getTabs().length;
  const dispatch = DispatcherDefault.dispatch;
  const obj6 = { type: "CHANNEL_TABS_OPEN" };
  DispatcherDefault;
  const merged = Object.assign(obj2);
  dispatch(obj6);
  const tabs = obj.getTabs();
  if (tabs.length > length) {
    trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
  }
}
export { openChannelTabActive };
export function openDuplicateTab(close) {
  const activeTab = ChannelTabsStore.getActiveTab();
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!ChannelTabsStore.isAtMaxTabs()) {
        const obj3 = { kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj2.routePath, routeLabel: obj2.routeLabel } = activeTab);
        const length = ChannelTabsStore.getTabs().length;
        const obj5 = { type: "CHANNEL_TABS_OPEN" };
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        const merged = Object.assign(obj3);
        dispatch(obj5);
        const tabs = obj.getTabs();
        if (tabs.length > length) {
          trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id);
        }
      }
    }
  }
  let channelId;
  if (activeTab != null) {
    channelId = activeTab.channelId;
  }
  if (channelId == null) {
    channelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  }
  if (null != channelId) {
    let guildId;
    const tmp11 = openChannelTabActive;
    if (activeTab != null) {
      guildId = activeTab.guildId;
    }
    if (guildId == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    tmp11(channelId, guildId, close);
  }
}
export function navigateToRoute(routePath, routeLabel) {
  const activeTabId = ChannelTabsStore.getActiveTabId();
  const tabs = ChannelTabsStore.getTabs();
  const obj = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
  set = new Set(tabs.map((id) => id.id));
  const obj2 = DispatcherDefault;
  obj2.dispatch(obj);
  const activeTab = ChannelTabsStore.getActiveTab();
  const tmp4 = null != activeTabId && null != activeTab && activeTab.id !== activeTabId;
  if (tmp4) {
    trackChannelTabOpened(activeTab, "page_navigation", !set.has(activeTab.id), true);
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
    const trackWithMetadata = tmp2(5889).trackWithMetadata;
    const CHANNEL_TAB_REORDERED = metroImportDefault.CHANNEL_TAB_REORDERED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(getTabProperties(tabs1[findIndexResult1]));
    trackWithMetadata(CHANNEL_TAB_REORDERED, obj3);
  }
}
export function setChannelTabPinned(tabId, pinned, source) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  pinned = undefined;
  const obj = ChannelTabsStore;
  if (found != null) {
    pinned = found.pinned;
  }
  const obj2 = DispatcherDefault;
  const obj3 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  obj2.dispatch(obj3);
  const tabs1 = obj.getTabs();
  const found1 = tabs1.find((id) => id.id === closure_0);
  const tmp7 = null != found1 && pinned !== found1.pinned;
  if (tmp7) {
    const obj4 = { source, pinned: found1.pinned };
    const trackWithMetadata = tmp3(5889).trackWithMetadata;
    const CHANNEL_TAB_PIN_TOGGLED = metroImportDefault.CHANNEL_TAB_PIN_TOGGLED;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(getTabProperties(found1));
    trackWithMetadata(CHANNEL_TAB_PIN_TOGGLED, obj4);
  }
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
      const trackWithMetadata = tmp16(5889).trackWithMetadata;
      const CHANNEL_TAB_CLOSED = metroImportDefault.CHANNEL_TAB_CLOSED;
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
