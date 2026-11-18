// Module ID: 9986
// Function ID: 9987
// Name: ChannelTabsActionCreators
// Dependencies: [4672, 4726, 9982, 1072, 4679, 5559, 1099, 5556, 4874, 4861, 4697, 5560, 572, 9985, 2]
// Exports: closeChannelTab, cycleChannelTab, goBackInActiveTab, goForwardInActiveTab, moveChannelTab, navigateToRoute, openChannelTab, openChannelTabActive, openFreshTabAt, openFriendsTabActive, setChannelTabPinned, setChannelTabsEnabled, showCallViewOnJoin, switchToOpenChannelTab, trackChannelTabPinToggled

// Module 9986 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import FavoritesUtils from "FavoritesUtils" /* 4697 */;
import matchPathCompat from "matchPathCompat" /* 4861 */;
import RouteUtils from "RouteUtils" /* 4874 */;
import transitionToChannel from "transitionToChannel" /* 5556 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5559 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5560 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 9985 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4726 */;
import ChannelTabsStore from "ChannelTabsStore" /* 9982 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
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
function trackChannelTabOpened(tabs, close, is_new_tab, focused, prop) {
  let resultIndex;
  let section;
  let closure_0 = tabs;
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let tmp6 = getPageName(tmp3.routePath);
      obj[tmp6] = obj[tmp6] + 1;
    }
    continue;
  }
  const obj2 = { method: close, is_new_tab, focused, tab_index: tabs.findIndex((id) => id.id === id.id), is_pinned: tabs.pinned, new_tab_section: section, new_tab_result_index: resultIndex };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_OPENED = metroRequire.CHANNEL_TAB_OPENED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getTabProperties(tabs));
  ({ friends: obj3.friends_tab_count, shop: obj3.shop_tab_count, quests: obj3.quests_tab_count, nitro: obj3.nitro_tab_count, conjure: obj3.conjure_tab_count, other: obj3.other_page_tab_count } = obj);
  section = undefined;
  if (tmp != null) {
    section = tmp.section;
  }
  if (section == null) {
    section = null;
  }
  resultIndex = undefined;
  if (tmp != null) {
    resultIndex = tmp.resultIndex;
  }
  if (resultIndex == null) {
    resultIndex = null;
  }
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
            const obj11 = router_utils;
            obj11.transitionTo(activeTab.entries[sum].routePath);
            Navigated = obj.Navigated;
          } else {
            const obj12 = ChannelStore;
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
                const obj9 = router_utils;
                obj9.transitionTo(metroImportDefault.CHANNEL(activeTab.entries[sum].guildId, activeTab.entries[sum].channelId));
                Noop = obj.Navigated;
              } else {
                Noop = obj.Noop;
              }
              Navigated = Noop;
            } else {
              let str = "CHANNEL_TABS_FORWARD";
              const dispatch3 = DispatcherDefault.dispatch;
              DispatcherDefault;
              const tmp40 = importDefault;
              if (-1 === arg0) {
                str = "CHANNEL_TABS_BACK";
              }
              const obj4 = { type: str };
              dispatch3(obj4);
              ({ channelId, guildId } = activeTab.entries[sum]);
              const obj5 = {};
              let flag = obj5.openVoiceChat;
              if (flag === undefined) {
                flag = true;
              }
              const transitionExtras = obj5.transitionExtras;
              const channel = obj12.getChannel(channelId);
              if (flag) {
                flag = null != channel;
              }
              if (flag) {
                flag = channel.isGuildVocal();
              }
              if (flag) {
                const tmp40Result = tmp40(5559);
                tmp40Result.updateChatOpen(channelId, true);
              }
              if (null != guildId) {
                const transitionTo = router_utils.transitionTo;
                const obj7 = { openChannel: true };
                router_utils;
                const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
                const merged = Object.assign(transitionExtras);
                transitionTo(CHANNELResult, obj7);
              } else {
                const obj6 = transitionToChannel;
                obj6.transitionToChannel(channelId, transitionExtras);
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
function selectChannelTab(id, keyboard_cycle, arg2) {
  let channelId;
  let channelId2;
  let guildId;
  let guildId2;
  let closure_0 = id;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  const obj2 = ChannelTabsStore;
  if (null != found) {
    if (obj2.getActiveTabId() !== id) {
      const obj3 = { type: "CHANNEL_TABS_SET_ACTIVE", tabId: found.id };
      const obj7 = DispatcherDefault;
      obj7.dispatch(obj3);
      trackChannelTabOpened(found, keyboard_cycle, false, true);
      const tmp19 = importDefault;
      if (obj === undefined) {
        obj = {};
      }
      if ("route" === found.kind) {
        const obj14 = router_utils;
        obj14.transitionTo(found.routePath, obj.transitionExtras);
      } else {
        ({ channelId: channelId2, guildId: guildId2 } = found);
        let obj6 = obj;
        if (obj === undefined) {
          obj6 = {};
        }
        let flag6 = obj6.openVoiceChat;
        if (flag6 === undefined) {
          flag6 = true;
        }
        const transitionExtras2 = obj6.transitionExtras;
        const channel = ChannelStore.getChannel(channelId2);
        if (flag6) {
          flag6 = null != channel;
        }
        if (flag6) {
          flag6 = channel.isGuildVocal();
        }
        if (flag6) {
          const tmp19Result = tmp19(5559);
          tmp19Result.updateChatOpen(channelId2, true);
        }
        if (null != guildId2) {
          const transitionTo2 = router_utils.transitionTo;
          const obj8 = { openChannel: true };
          router_utils;
          const CHANNELResult = metroImportDefault.CHANNEL(guildId2, channelId2);
          const merged = Object.assign(transitionExtras2);
          transitionTo2(CHANNELResult, obj8);
        } else {
          const obj12 = transitionToChannel;
          obj12.transitionToChannel(channelId2, transitionExtras2);
        }
      }
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const obj9 = {};
        let flag = obj9.openVoiceChat;
        if (flag === undefined) {
          flag = true;
        }
        const transitionExtras = obj9.transitionExtras;
        const channel1 = ChannelStore.getChannel(channelId);
        if (flag) {
          flag = null != channel1;
        }
        if (flag) {
          flag = channel1.isGuildVocal();
        }
        if (flag) {
          const obj4 = ChannelRTCActionCreatorsDefault;
          obj4.updateChatOpen(channelId, true);
        }
        if (null != guildId) {
          const transitionTo = router_utils.transitionTo;
          const obj10 = { openChannel: true };
          router_utils;
          const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, channelId);
          const merged1 = Object.assign(transitionExtras);
          transitionTo(CHANNELResult1, obj10);
        } else {
          const obj5 = transitionToChannel;
          obj5.transitionToChannel(channelId, transitionExtras);
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
  let obj5;
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: obj5, background: true, sourceTabId: activeTabId };
    obj5 = { kind: "channel", channelId, guildId };
    const length = ChannelTabsStore.getTabs().length;
    const obj8 = DispatcherDefault;
    obj8.dispatch(obj2);
    const tabs = obj.getTabs();
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id, null);
    }
  } else {
    const obj6 = {};
    let flag = obj6.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj6.transitionExtras;
    const channel = ChannelStore.getChannel(channelId);
    if (flag) {
      flag = null != channel;
    }
    if (flag) {
      flag = channel.isGuildVocal();
    }
    if (flag) {
      const obj3 = ChannelRTCActionCreatorsDefault;
      obj3.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const transitionTo = router_utils.transitionTo;
      const obj7 = { openChannel: true };
      router_utils;
      const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
      const merged = Object.assign(transitionExtras);
      transitionTo(CHANNELResult, obj7);
    } else {
      const obj4 = transitionToChannel;
      obj4.transitionToChannel(channelId, transitionExtras);
    }
  }
}
export function openChannelTabActive(id, guildId, close, activeTabId, prop) {
  let obj5;
  if (activeTabId === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  let tmp3 = prop;
  if (prop === undefined) {
    tmp3 = null;
  }
  if (null != ChannelTabsStore.getActiveTab()) {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: obj5, sourceTabId: activeTabId };
    obj5 = { kind: "channel", channelId: id, guildId };
    if (tmp3 === undefined) {
      tmp3 = null;
    }
    const length = ChannelTabsStore.getTabs().length;
    const obj8 = DispatcherDefault;
    obj8.dispatch(obj2);
    const tabs = obj.getTabs();
    let tmp23 = null;
    const tmp20 = importDefault;
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id, tmp3);
      tmp23 = tmp25;
    }
    const tmp30 = null != tmp23 && SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
    if (tmp30) {
      const obj6 = {};
      let flag4 = obj6.openVoiceChat;
      if (flag4 === undefined) {
        flag4 = true;
      }
      const transitionExtras2 = obj6.transitionExtras;
      const channel = ChannelStore.getChannel(id);
      if (flag4) {
        flag4 = null != channel;
      }
      if (flag4) {
        flag4 = channel.isGuildVocal();
      }
      if (flag4) {
        const tmp20Result = tmp20(5559);
        tmp20Result.updateChatOpen(id, true);
      }
      if (null != guildId) {
        const transitionTo2 = router_utils.transitionTo;
        const obj7 = { openChannel: true };
        router_utils;
        const CHANNELResult = metroImportDefault.CHANNEL(guildId, id);
        const merged = Object.assign(transitionExtras2);
        transitionTo2(CHANNELResult, obj7);
      } else {
        const obj12 = transitionToChannel;
        obj12.transitionToChannel(id, transitionExtras2);
      }
    }
  } else {
    const obj9 = {};
    let flag = obj9.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj9.transitionExtras;
    const channel1 = ChannelStore.getChannel(id);
    if (flag) {
      flag = null != channel1;
    }
    if (flag) {
      flag = channel1.isGuildVocal();
    }
    if (flag) {
      const obj3 = ChannelRTCActionCreatorsDefault;
      obj3.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const transitionTo = router_utils.transitionTo;
      const obj10 = { openChannel: true };
      router_utils;
      const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, id);
      const merged1 = Object.assign(transitionExtras);
      transitionTo(CHANNELResult1, obj10);
    } else {
      const obj4 = transitionToChannel;
      obj4.transitionToChannel(id, transitionExtras);
    }
  }
}
export function openFreshTabAt(tabLocationForPath, close, prop) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  const obj = { type: "CHANNEL_TABS_OPEN", location: tabLocationForPath, sourceTabId: null };
  if (tmp === undefined) {
    tmp = null;
  }
  const length = ChannelTabsStore.getTabs().length;
  const obj3 = DispatcherDefault;
  obj3.dispatch(obj);
  const tabs = ChannelTabsStore.getTabs();
  let tmp3 = null;
  const obj2 = ChannelTabsStore;
  if (tabs.length > length) {
    trackChannelTabOpened(tabs[tabs.length - 1], close, true, obj2.getActiveTabId() === tabs[tabs.length - 1].id, tmp);
    tmp3 = tmp5;
  }
  let id;
  if (tmp3 != null) {
    id = tmp3.id;
  }
  if (id == null) {
    id = null;
  }
  return id;
}
export function openFriendsTabActive(close) {
  let obj6;
  if (null == ChannelTabsStore.getActiveTab()) {
    const obj4 = router_utils;
    obj4.transitionTo(metroImportDefault.FRIENDS);
    return null;
  } else {
    const obj2 = { type: "CHANNEL_TABS_OPEN", location: obj6.getFriendsTabLocation() };
    obj6 = ChannelTabRoutes;
    const length = ChannelTabsStore.getTabs().length;
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj2);
    const tabs = obj.getTabs();
    let tmp7 = null;
    if (tabs.length > length) {
      trackChannelTabOpened(tabs[tabs.length - 1], close, true, ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id, null);
      tmp7 = tmp2;
    }
    let id = null;
    if (null != tmp7) {
      const tmp15Result = router_utils;
      if (tmp15Result.getHistory().location.pathname !== metroImportDefault.FRIENDS) {
        const tmp15Result2 = router_utils;
        tmp15Result2.transitionTo(tmp9.FRIENDS);
      }
      id = tmp7.id;
    }
    return id;
  }
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
export function switchToOpenChannelTab(dMFromUserId, quick_switcher, transitionExtras) {
  let closure_0 = dMFromUserId;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = obj.getActiveTab();
    let kind;
    if (activeTab != null) {
      kind = activeTab.kind;
    }
    if ("channel" === kind) {
      if (activeTab.channelId === dMFromUserId) {
        return false;
      }
    }
    const tabs = obj.getTabs();
    const found = tabs.find((kind) => "channel" === kind.kind && kind.channelId === closure_0);
    let flag2 = null != found;
    if (flag2) {
      const obj2 = { openVoiceChat: false, transitionExtras };
      selectChannelTab(found.id, quick_switcher, obj2);
      flag2 = true;
    }
    return flag2;
  } else {
    return false;
  }
}
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
    const trackWithMetadata = tmp2(5560).trackWithMetadata;
    const CHANNEL_TAB_REORDERED = metroRequire.CHANNEL_TAB_REORDERED;
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
    const trackWithMetadata = tmp3(5560).trackWithMetadata;
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
  let channelId;
  let guildId;
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp27 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    const obj9 = DispatcherDefault;
    obj9.dispatch(obj2);
    const tabs1 = obj.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    const tmp32 = !someResult;
    if (tmp32) {
      const obj3 = { source, was_active: tmp27, was_pinned: found.pinned };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const CHANNEL_TAB_CLOSED = metroRequire.CHANNEL_TAB_CLOSED;
      AppAnalyticsUtilsDefault;
      const merged = Object.assign(getTabProperties(found));
      trackWithMetadata(CHANNEL_TAB_CLOSED, obj3);
    }
    if (tmp27) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, "close", false, true);
        }
        const obj4 = {};
        if ("route" === activeTab.kind) {
          const obj8 = router_utils;
          obj8.transitionTo(activeTab.routePath, obj4.transitionExtras);
        } else {
          ({ channelId, guildId } = activeTab);
          let flag3 = obj4.openVoiceChat;
          if (flag3 === undefined) {
            flag3 = true;
          }
          const transitionExtras = obj4.transitionExtras;
          const channel = ChannelStore.getChannel(channelId);
          if (flag3) {
            flag3 = null != channel;
          }
          if (flag3) {
            flag3 = channel.isGuildVocal();
          }
          if (flag3) {
            const tmp28Result2 = ChannelRTCActionCreatorsDefault;
            tmp28Result2.updateChatOpen(channelId, true);
          }
          if (null != guildId) {
            const transitionTo = router_utils.transitionTo;
            const obj5 = { openChannel: true };
            router_utils;
            const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
            const merged1 = Object.assign(transitionExtras);
            transitionTo(CHANNELResult, obj5);
          } else {
            const obj6 = transitionToChannel;
            obj6.transitionToChannel(channelId, transitionExtras);
          }
        }
      }
    }
  }
}
