// Module ID: 9964
// Function ID: 9965
// Name: ChannelTabsActionCreators
// Dependencies: [4641, 4695, 9961, 1072, 5528, 1099, 5525, 9963, 4666, 5529, 572, 2]
// Exports: closeChannelTab, cycleChannelTab, goBackInActiveTab, goForwardInActiveTab, moveChannelTab, navigateToRoute, openChannelTab, openChannelTabActive, openFriendsTabActive, openTabWithoutHistory, setChannelTabPinned, setChannelTabsEnabled, showCallViewOnJoin, switchToOpenChannelTab

// Module 9964 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import router_utils from "router_utils" /* 1099 */;
import FavoritesUtils from "FavoritesUtils" /* 4666 */;
import transitionToChannel from "transitionToChannel" /* 5525 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5529 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 9963 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import ChannelTabsStore from "ChannelTabsStore" /* 9961 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const f97889 = (pinned) => pinned.pinned;
function getTabProperties(kind) {
  let channelId;
  let channelTabPageName;
  let guildId;
  const tabs = ChannelTabsStore.getTabs();
  const obj = { tab_kind: kind.kind, tab_route: channelTabPageName, channel_id: channelId, guild_id: guildId, tab_count: tabs.length, pinned_tab_count: tabs.filter(f97889).length };
  channelTabPageName = null;
  if ("route" === kind.kind) {
    const obj2 = ChannelTabRoutes;
    channelTabPageName = obj2.getChannelTabPageName(kind.routePath);
  }
  channelId = null;
  if ("channel" === kind.kind) {
    channelId = kind.channelId;
  }
  guildId = null;
  if ("channel" === kind.kind) {
    guildId = null;
    const obj3 = FavoritesUtils;
    if (!obj3.isFavoritesGuildId(kind.guildId)) {
      guildId = kind.guildId;
    }
  }
  return obj;
}
function trackChannelTabOpened(activeTab, newTabPickerSelection) {
  let focused;
  let isNewTab;
  let method;
  let resultIndex;
  let section;
  let closure_0 = activeTab;
  let prop = newTabPickerSelection.newTabPickerSelection;
  ({ method, isNewTab, focused } = newTabPickerSelection);
  if (prop === undefined) {
    prop = null;
  }
  const tabs = ChannelTabsStore.getTabs();
  const obj = { friends: 0, shop: 0, quests: 0, nitro: 0, conjure: 0, other: 0 };
  const iter = tabs[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if ("route" === nextResult.kind) {
      let obj3 = ChannelTabRoutes;
      let channelTabPageName = obj3.getChannelTabPageName(tmp3.routePath);
      obj[channelTabPageName] = obj[channelTabPageName] + 1;
    }
    continue;
  }
  const obj2 = { method, is_new_tab: isNewTab, focused, tab_index: tabs.findIndex((id) => id.id === id.id), is_pinned: activeTab.pinned, new_tab_section: section, new_tab_result_index: resultIndex };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_OPENED = metroRequire.CHANNEL_TAB_OPENED;
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(getTabProperties(activeTab));
  ({ friends: obj4.friends_tab_count, shop: obj4.shop_tab_count, quests: obj4.quests_tab_count, nitro: obj4.nitro_tab_count, conjure: obj4.conjure_tab_count, other: obj4.other_page_tab_count } = obj);
  section = undefined;
  if (prop != null) {
    section = prop.section;
  }
  if (section == null) {
    section = null;
  }
  resultIndex = undefined;
  if (prop != null) {
    resultIndex = prop.resultIndex;
  }
  if (resultIndex == null) {
    resultIndex = null;
  }
  trackWithMetadata(CHANNEL_TAB_OPENED, obj2);
}
function dispatchOpenTab(location, method, prop) {
  let channelId;
  let guildId;
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  if (null == ChannelTabsStore.getActiveTab()) {
    const _location = location.location;
    const obj2 = {};
    if ("route" === _location.kind) {
      const obj8 = router_utils;
      obj8.transitionTo(_location.routePath, obj2.transitionExtras);
    } else {
      ({ channelId, guildId } = _location);
      let flag = obj2.openVoiceChat;
      if (flag === undefined) {
        flag = true;
      }
      const transitionExtras = obj2.transitionExtras;
      const channel = ChannelStore.getChannel(channelId);
      if (flag) {
        flag = null != channel;
      }
      if (flag) {
        flag = channel.isGuildVocal();
      }
      if (flag) {
        const obj5 = ChannelRTCActionCreatorsDefault;
        obj5.updateChatOpen(channelId, true);
      }
      if (null != guildId) {
        const transitionTo = router_utils.transitionTo;
        const obj3 = { openChannel: true };
        router_utils;
        const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
        const merged = Object.assign(transitionExtras);
        transitionTo(CHANNELResult, obj3);
      } else {
        const obj6 = transitionToChannel;
        obj6.transitionToChannel(channelId, transitionExtras);
      }
    }
    return null;
  } else {
    const length = ChannelTabsStore.getTabs().length;
    const obj9 = DispatcherDefault;
    obj9.dispatch(location);
    const tabs = obj.getTabs();
    if (tabs.length <= length) {
      return null;
    } else {
      const obj4 = { method, isNewTab: true, focused: ChannelTabsStore.getActiveTabId() === tabs[tabs.length - 1].id, newTabPickerSelection: tmp };
      trackChannelTabOpened(tabs[tabs.length - 1], obj4);
      return tabs[tabs.length - 1];
    }
  }
}
function navigateActiveTabHistory(arg0) {
  let obj = ChannelTabsStore;
  if (ChannelTabsStore.isEnabled()) {
    const activeTab = obj.getActiveTab();
    if (null == activeTab) {
      return obj.Passthrough;
    } else {
      if ("channel" === activeTab.kind) {
        if (SelectedChannelStore.getCurrentlySelectedChannelId() !== activeTab.channelId) {
          return obj.Passthrough;
        }
      }
      const sum = activeTab.index + arg0;
      if (sum >= 0) {
        if (sum < activeTab.entries.length) {
          let fn;
          const routePath = tmp18;
          if ("route" === activeTab.entries[sum].kind) {
            fn = function h() {
              const obj = router_utils;
              return obj.transitionTo(routePath.routePath);
            };
          } else if (null != ChannelStore.getChannel(activeTab.entries[sum].channelId)) {
            fn = function h() {
              let channelId;
              let guildId;
              ({ channelId, guildId } = routePath);
              const obj = {};
              let flag = obj.openVoiceChat;
              if (flag === undefined) {
                flag = true;
              }
              const transitionExtras = obj.transitionExtras;
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
                const obj2 = { openChannel: true };
                router_utils;
                const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
                const merged = Object.assign(transitionExtras);
                transitionTo(CHANNELResult, obj2);
              } else {
                const obj4 = transitionToChannel;
                obj4.transitionToChannel(channelId, transitionExtras);
              }
            };
          } else if (null == activeTab.entries[sum].guildId) {
            return obj.Noop;
          } else {
            ({ guildId: importDefault, channelId: dependencyMap } = activeTab.entries[sum]);
            fn = function h() {
              const obj = router_utils;
              return obj.transitionTo(metroImportDefault.CHANNEL(importDefault, dependencyMap));
            };
          }
          let str = "CHANNEL_TABS_FORWARD";
          const dispatch = DispatcherDefault.dispatch;
          if (-1 === arg0) {
            str = "CHANNEL_TABS_BACK";
          }
          let obj2 = { type: str };
          dispatch(obj2);
          fn();
          return obj.Navigated;
        }
      }
      return obj.Noop;
    }
  } else {
    return obj.Passthrough;
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
      const obj6 = { method: keyboard_cycle, isNewTab: false, focused: true };
      trackChannelTabOpened(found, obj6);
      const tmp19 = importDefault;
      if (obj === undefined) {
        obj = {};
      }
      if ("route" === found.kind) {
        const obj15 = router_utils;
        obj15.transitionTo(found.routePath, obj.transitionExtras);
      } else {
        ({ channelId: channelId2, guildId: guildId2 } = found);
        let obj8 = obj;
        if (obj === undefined) {
          obj8 = {};
        }
        let flag3 = obj8.openVoiceChat;
        if (flag3 === undefined) {
          flag3 = true;
        }
        const transitionExtras2 = obj8.transitionExtras;
        const channel = ChannelStore.getChannel(channelId2);
        if (flag3) {
          flag3 = null != channel;
        }
        if (flag3) {
          flag3 = channel.isGuildVocal();
        }
        if (flag3) {
          const tmp19Result = tmp19(5528);
          tmp19Result.updateChatOpen(channelId2, true);
        }
        if (null != guildId2) {
          const transitionTo2 = router_utils.transitionTo;
          const obj9 = { openChannel: true };
          router_utils;
          const CHANNELResult = metroImportDefault.CHANNEL(guildId2, channelId2);
          const merged = Object.assign(transitionExtras2);
          transitionTo2(CHANNELResult, obj9);
        } else {
          const obj13 = transitionToChannel;
          obj13.transitionToChannel(channelId2, transitionExtras2);
        }
      }
    } else if ("channel" === found.kind) {
      if (SelectedChannelStore.getCurrentlySelectedChannelId() !== found.channelId) {
        ({ channelId, guildId } = found);
        const obj10 = {};
        let flag = obj10.openVoiceChat;
        if (flag === undefined) {
          flag = true;
        }
        const transitionExtras = obj10.transitionExtras;
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
          const obj11 = { openChannel: true };
          router_utils;
          const CHANNELResult1 = metroImportDefault.CHANNEL(guildId, channelId);
          const merged1 = Object.assign(transitionExtras);
          transitionTo(CHANNELResult1, obj11);
        } else {
          const obj5 = transitionToChannel;
          obj5.transitionToChannel(channelId, transitionExtras);
        }
      }
    }
  }
}
function trackChannelTabPinToggled(found1, source) {
  let channelId;
  let channelTabPageName;
  let guildId;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const CHANNEL_TAB_PIN_TOGGLED = metroRequire.CHANNEL_TAB_PIN_TOGGLED;
  AppAnalyticsUtilsDefault;
  const tabs = ChannelTabsStore.getTabs();
  const obj = { tab_kind: found1.kind, tab_route: channelTabPageName, channel_id: channelId, guild_id: guildId, tab_count: tabs.length, pinned_tab_count: tabs.filter(f97889).length };
  channelTabPageName = null;
  if ("route" === found1.kind) {
    const obj2 = ChannelTabRoutes;
    channelTabPageName = obj2.getChannelTabPageName(found1.routePath);
  }
  channelId = null;
  if ("channel" === found1.kind) {
    channelId = found1.channelId;
  }
  guildId = null;
  if ("channel" === found1.kind) {
    guildId = null;
    const obj3 = FavoritesUtils;
    if (!obj3.isFavoritesGuildId(found1.guildId)) {
      guildId = found1.guildId;
    }
  }
  const obj4 = { source, pinned: found1.pinned };
  const merged = Object.assign(obj);
  trackWithMetadata(CHANNEL_TAB_PIN_TOGGLED, obj4);
}
({ AnalyticEvents: metroRequire, Routes: metroImportDefault } = Constants);
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
export function openChannelTab(channelId, guildId, method) {
  let activeTabId = arg3;
  if (arg3 === undefined) {
    activeTabId = ChannelTabsStore.getActiveTabId();
  }
  const obj = { type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId, guildId }, background: true, sourceTabId: activeTabId };
  dispatchOpenTab(obj, method);
}
export function openChannelTabActive(id, guildId, method, arg3) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let sourceTabId = obj.sourceTabId;
  if (sourceTabId === undefined) {
    sourceTabId = ChannelTabsStore.getActiveTabId();
  }
  let prop = obj.newTabPickerSelection;
  if (prop === undefined) {
    prop = null;
  }
  const obj2 = { type: "CHANNEL_TABS_OPEN", location: { kind: "channel", channelId: id, guildId }, sourceTabId };
  const tmp3 = null != dispatchOpenTab(obj2, method, prop) && SelectedChannelStore.getCurrentlySelectedChannelId() !== id;
  if (tmp3) {
    const obj3 = {};
    let flag = obj3.openVoiceChat;
    if (flag === undefined) {
      flag = true;
    }
    const transitionExtras = obj3.transitionExtras;
    const channel = ChannelStore.getChannel(id);
    if (flag) {
      flag = null != channel;
    }
    if (flag) {
      flag = channel.isGuildVocal();
    }
    if (flag) {
      const obj5 = ChannelRTCActionCreatorsDefault;
      obj5.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const transitionTo = router_utils.transitionTo;
      const obj4 = { openChannel: true };
      router_utils;
      const CHANNELResult = metroImportDefault.CHANNEL(guildId, id);
      const merged = Object.assign(transitionExtras);
      transitionTo(CHANNELResult, obj4);
    } else {
      const obj6 = transitionToChannel;
      obj6.transitionToChannel(id, transitionExtras);
    }
  }
}
export function openTabWithoutHistory(tabLocationForPath, method, prop) {
  let tmp = prop;
  if (prop === undefined) {
    tmp = null;
  }
  const obj = { type: "CHANNEL_TABS_OPEN", location: tabLocationForPath, sourceTabId: null };
  return null != dispatchOpenTab(obj, method, tmp);
}
export function openFriendsTabActive(method) {
  let obj2;
  const obj = { type: "CHANNEL_TABS_OPEN", location: obj2.getFriendsTabLocation() };
  obj2 = ChannelTabRoutes;
  let tmp3 = null != dispatchOpenTab(obj, method);
  if (tmp3) {
    const tmpResult = router_utils;
    tmp3 = tmpResult.getHistory().location.pathname !== metroImportDefault.FRIENDS;
  }
  if (tmp3) {
    const tmpResult2 = router_utils;
    tmpResult2.transitionTo(metroImportDefault.FRIENDS);
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
    trackChannelTabOpened(activeTab, { method: "page_navigation", isNewTab: true, focused: true });
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
  let channelId;
  let channelTabPageName;
  let guildId;
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const findIndexResult = tabs.findIndex((id) => id.id === closure_0);
  const obj2 = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  const obj3 = DispatcherDefault;
  obj3.dispatch(obj2);
  const tabs1 = ChannelTabsStore.getTabs();
  const findIndexResult1 = tabs1.findIndex((id) => id.id === closure_0);
  const obj = ChannelTabsStore;
  const tmp6 = -1 !== findIndexResult && -1 !== findIndexResult1 && findIndexResult1 !== findIndexResult;
  if (tmp6) {
    const trackWithMetadata = tmp2(5529).trackWithMetadata;
    const CHANNEL_TAB_REORDERED = metroRequire.CHANNEL_TAB_REORDERED;
    AppAnalyticsUtilsDefault;
    const tabs2 = obj.getTabs();
    const obj4 = { tab_kind: tabs1[findIndexResult1].kind, tab_route: channelTabPageName, channel_id: channelId, guild_id: guildId, tab_count: tabs2.length, pinned_tab_count: tabs2.filter(f97889).length };
    channelTabPageName = null;
    if ("route" === tabs1[findIndexResult1].kind) {
      const obj7 = ChannelTabRoutes;
      channelTabPageName = obj7.getChannelTabPageName(tmp9.routePath);
    }
    channelId = null;
    if ("channel" === tabs1[findIndexResult1].kind) {
      channelId = tmp9.channelId;
    }
    guildId = null;
    if ("channel" === tabs1[findIndexResult1].kind) {
      guildId = null;
      const obj8 = FavoritesUtils;
      if (!obj8.isFavoritesGuildId(tabs1[findIndexResult1].guildId)) {
        guildId = tmp9.guildId;
      }
    }
    const obj5 = { from_index: findIndexResult, to_index: findIndexResult1, is_pinned: tabs1[findIndexResult1].pinned };
    const merged = Object.assign(obj4);
    trackWithMetadata(CHANNEL_TAB_REORDERED, obj5);
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
  const tmp5 = null != found1 && pinned !== found1.pinned;
  if (tmp5) {
    trackChannelTabPinToggled(found1, source);
  }
}
export { trackChannelTabPinToggled };
export function closeChannelTab(tabId, source) {
  let channelId;
  let channelId1;
  let channelTabPageName;
  let guildId;
  let guildId1;
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  const found = tabs.find((id) => id.id === closure_0);
  if (null != found) {
    const tmp31 = ChannelTabsStore.getActiveTabId() === tabId;
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    const obj12 = DispatcherDefault;
    obj12.dispatch(obj2);
    const tabs1 = obj.getTabs();
    const someResult = tabs1.some((id) => id.id === closure_0);
    const tmp36 = !someResult;
    if (tmp36) {
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const CHANNEL_TAB_CLOSED = metroRequire.CHANNEL_TAB_CLOSED;
      AppAnalyticsUtilsDefault;
      const tabs2 = obj.getTabs();
      const obj5 = { tab_kind: found.kind, tab_route: channelTabPageName, channel_id: channelId1, guild_id: guildId1, tab_count: tabs2.length, pinned_tab_count: tabs2.filter(f97889).length };
      channelTabPageName = null;
      if ("route" === found.kind) {
        const obj3 = ChannelTabRoutes;
        channelTabPageName = obj3.getChannelTabPageName(found.routePath);
      }
      channelId1 = null;
      if ("channel" === found.kind) {
        channelId1 = found.channelId;
      }
      guildId1 = null;
      if ("channel" === found.kind) {
        guildId1 = null;
        const obj4 = FavoritesUtils;
        if (!obj4.isFavoritesGuildId(found.guildId)) {
          guildId1 = found.guildId;
        }
      }
      const obj6 = { source, was_active: tmp31, was_pinned: found.pinned };
      const merged = Object.assign(obj5);
      trackWithMetadata(CHANNEL_TAB_CLOSED, obj6);
    }
    if (tmp31) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        if (!someResult) {
          trackChannelTabOpened(activeTab, { method: "close", isNewTab: false, focused: true });
        }
        const obj7 = {};
        if ("route" === activeTab.kind) {
          const obj11 = router_utils;
          obj11.transitionTo(activeTab.routePath, obj7.transitionExtras);
        } else {
          ({ channelId, guildId } = activeTab);
          let flag = obj7.openVoiceChat;
          if (flag === undefined) {
            flag = true;
          }
          const transitionExtras = obj7.transitionExtras;
          const channel = ChannelStore.getChannel(channelId);
          if (flag) {
            flag = null != channel;
          }
          if (flag) {
            flag = channel.isGuildVocal();
          }
          if (flag) {
            const tmp32Result2 = ChannelRTCActionCreatorsDefault;
            tmp32Result2.updateChatOpen(channelId, true);
          }
          if (null != guildId) {
            const transitionTo = router_utils.transitionTo;
            const obj8 = { openChannel: true };
            router_utils;
            const CHANNELResult = metroImportDefault.CHANNEL(guildId, channelId);
            const merged1 = Object.assign(transitionExtras);
            transitionTo(CHANNELResult, obj8);
          } else {
            const obj9 = transitionToChannel;
            obj9.transitionToChannel(channelId, transitionExtras);
          }
        }
      }
    }
  }
}
