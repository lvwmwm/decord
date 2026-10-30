// Module ID: 13350
// Function ID: 13351
// Name: ChannelTabsActionCreators
// Dependencies: [4858, 4912, 5040, 13348, 1072, 4865, 5754, 1100, 5751, 572, 2]
// Exports: closeChannelTab, cycleChannelTab, goBackInActiveTab, goForwardInActiveTab, moveChannelTab, navigateToRoute, openChannelTab, openDuplicateTab, setChannelTabPinned, setChannelTabsEnabled

// Module 13350 (ChannelTabsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import router_utils from "router_utils" /* 1100 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;
import ChannelTabsStore from "ChannelTabsStore" /* 13348 */;
import size from "module_2" /* 2 */;

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
      obj4.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId);
    }
  }
}
function openChannelTabActive(id, guildId) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  const obj = SelectedChannelStore;
  const obj2 = ChannelTabsStore;
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(id);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj4 = ChannelRTCActionCreatorsDefault;
      obj4.updateChatOpen(id, true);
    }
    if (null != guildId) {
      const obj6 = router_utils;
      obj6.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
    } else {
      const obj5 = transitionToChannel;
      obj5.transitionToChannel(id);
    }
  }
  if (!obj2.isAtMaxTabs()) {
    const obj3 = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId: id, guildId, active: true };
    const obj7 = DispatcherDefault;
    obj7.dispatch(obj3);
    const tmp15 = importDefault;
    if (obj.getCurrentlySelectedChannelId() !== id) {
      const channel1 = ChannelStore.getChannel(id);
      const tmp18 = null != channel1 && channel1.isGuildVocal();
      if (tmp18) {
        const tmp15Result = tmp15(5754);
        tmp15Result.updateChatOpen(id, true);
      }
      if (null != guildId) {
        const obj11 = router_utils;
        obj11.transitionTo(Routes.CHANNEL(guildId, id), { openChannel: true });
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
                obj8.transitionTo(Routes.CHANNEL(activeTab.entries[sum].guildId, activeTab.entries[sum].channelId));
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
                const tmp36Result = tmp36(5754);
                tmp36Result.updateChatOpen(channelId, true);
              }
              if (null != guildId) {
                const obj6 = router_utils;
                obj6.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
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
function selectChannelTab(id, flag) {
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
          obj7.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
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
const Routes = Constants.Routes;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const TabHistoryNavResult = { Passthrough: "passthrough", Noop: "noop", Navigated: "navigated" };
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsActionCreators.tsx");

export function openChannelTab(channelId, guildId) {
  const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
  if (0 === ChannelTabsStore.getTabs().length) {
    const channel = ChannelStore.getChannel(channelId);
    const tmp4 = null != channel && channel.isGuildVocal();
    if (tmp4) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      obj2.updateChatOpen(channelId, true);
    }
    if (null != guildId) {
      const obj4 = router_utils;
      obj4.transitionTo(Routes.CHANNEL(guildId, channelId), { openChannel: true });
    } else {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId);
    }
  }
  const obj = { type: "CHANNEL_TABS_OPEN", kind: "channel", channelId, guildId };
  const obj5 = DispatcherDefault;
  obj5.dispatch(obj);
}
export { openChannelTabActive };
export function openDuplicateTab() {
  const activeTab = ChannelTabsStore.getActiveTab();
  const obj = ChannelTabsStore;
  if (null != activeTab) {
    if ("route" === activeTab.kind) {
      if (!obj.isAtMaxTabs()) {
        const obj4 = { type: "CHANNEL_TABS_OPEN", kind: "route", routePath: null, routeLabel: null, active: true };
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = activeTab);
        const obj2 = DispatcherDefault;
        obj2.dispatch(obj4);
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
    const tmp7 = openChannelTabActive;
    if (activeTab != null) {
      guildId = activeTab.guildId;
    }
    if (guildId == null) {
      guildId = SelectedGuildStore.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    tmp7(channelId, guildId);
  }
}
export function navigateToRoute(routePath, routeLabel) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_NAVIGATE_ROUTE", routePath, routeLabel };
  obj.dispatch(obj2);
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
      selectChannelTab(tabs[(findIndexResult + arg0 + tabs.length) % tabs.length].id);
    }
  }
}
export function moveChannelTab(tabId, toIndex) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_MOVE", tabId, toIndex };
  obj.dispatch(obj2);
}
export function setChannelTabPinned(tabId, pinned) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_TABS_SET_PINNED", tabId, pinned };
  obj.dispatch(obj2);
}
export function closeChannelTab(tabId) {
  let closure_0 = tabId;
  const tabs = ChannelTabsStore.getTabs();
  if (-1 !== tabs.findIndex((id) => id.id === closure_0)) {
    const activeTabId = obj.getActiveTabId();
    const obj2 = { type: "CHANNEL_TABS_CLOSE", tabId };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj2);
    if (activeTabId === tabId) {
      const activeTab = obj.getActiveTab();
      if (null != activeTab) {
        navigateToTabLocation(activeTab);
      }
    }
  }
}
