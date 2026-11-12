// Module ID: 10206
// Function ID: 10207
// Name: ChannelTabsStore
// Dependencies: [32, 1246, 5290, 5114, 5146, 5286, 1385, 5099, 10207, 1357, 10208, 10209, 5117, 504, 572, 2]

// Module 10206 (ChannelTabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import ChannelConstants from "ChannelConstants" /* 5099 */;
import TabsExperimentDefault from "TabsExperiment" /* 10207 */;
import ChannelTabPinScope from "ChannelTabPinScope" /* 10208 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 10209 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import DefaultRouteStore from "DefaultRouteStore" /* 5290 */;
import GuildStore from "GuildStore" /* 5114 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let _require, set, tabs;

const f98866 = (item) => {
  let closure_0 = item;
  return closure_11.some((id) => id.id === closure_0);
};
const f98872 = (pinned) => pinned.pinned;
const f98873 = (pinned) => !pinned.pinned;
const f98874 = (id) => id.id === activeTabId;
const f98877 = (item) => {
  const obj = { pinned: false, pinScope: null };
  const merged = Object.assign(item);
  return obj;
};
const f98879 = (pinned) => !pinned.pinned;
function activateTab(id) {
  const f98865 = (item) => item !== closure_0;
  const tmp2 = null != activeTabId && activeTabId !== id;
  if (tmp2) {
    let closure_0 = activeTabId;
    const items = [activeTabId];
    HermesBuiltin.arraySpread(items, closure_13.filter(f98865), 1);
    const slice = items.slice;
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num2 = 9;
    if (true === isStaffResult) {
      num2 = 25;
    }
    closure_13 = slice(0, num2);
  }
  activeTabId = id;
  closure_0 = id;
  const items1 = [id, ...closure_13.filter(f98865)];
  const slice2 = items1.slice;
  const currentUser1 = UserStore.getCurrentUser();
  let isStaffResult1;
  if (currentUser1 != null) {
    isStaffResult1 = currentUser1.isStaff();
  }
  let num4 = 9;
  if (true === isStaffResult1) {
    num4 = 25;
  }
  closure_13 = slice2(0, num4);
}
function createTab(kind2, arg1) {
  let closure_0;
  let mapped;
  let substr1;
  let tmp2 = arg1;
  if (arg1 === undefined) {
    tmp2 = activeTabId;
  }
  _require = tmp2;
  let tmp3;
  if (null != tmp2) {
    let found = tabs.find((id) => id.id === closure_0);
    if (found == null) {
      found = tabs.find((id) => id.id === activeTabId);
    }
    tmp3 = found;
  }
  if (null != tmp3) {
    const entries = tmp3.entries;
    const _Math = Math;
    const substr = entries.slice(Math.max(0, tmp3.index - 10), tmp3.index + 1);
    mapped = substr.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      return obj;
    });
  } else {
    mapped = [];
  }
  const atResult = mapped.at(-1);
  if (null == atResult) {
    const items = [];
    items[HermesBuiltin.arraySpread(items, mapped, 0)] = kind2;
    substr1 = items.slice(-11);
  } else {
    let obj = require("ChannelTabPinScope");
    substr1 = mapped;
  }
  const obj2 = { id: String(+closure_14), pinned: false, entries: substr1, index: substr1.length - 1 };
  closure_14 = tmp13 + 1;
  let merged = Object.assign(kind2);
  return obj2;
}
function landNavigationAroundPinnedTab(kind2) {
  let items1;
  const length = items1.length;
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let num = 9;
  if (true === isStaffResult) {
    num = 25;
  }
  if (length >= num) {
    if (null != activeTabId) {
      let closure_16 = activeTabId;
      const mapped = items1.map((id) => {
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { pinned: false, pinScope: null };
          const merged = Object.assign(id);
          tmp = obj;
        }
        return tmp;
      });
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped.filter(f98872), 0);
      HermesBuiltin.arraySpread(items, mapped.filter(f98873), arraySpreadResult);
      items1 = items;
      let closure_0 = kind2;
      if (c15 === activeTabId) {
        c15 = null;
      }
      items1 = items.map((id) => {
        let diff;
        let pinScope;
        if (id.id !== activeTabId) {
          return id;
        } else {
          const entries = id.entries;
          const items = [];
          items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
          const obj = { id: null, pinned: null, pinScope, entries: items, index: diff };
          ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
          diff = items.length - 1;
          if (pinScope == null) {
            pinScope = null;
          }
          const merged = Object.assign(tmp6);
          return obj;
        }
      });
    }
  }
  const tmp4 = createTab(kind2);
  items1 = [];
  items1[HermesBuiltin.arraySpread(items1, items1, 0)] = tmp4;
  activateTab(tmp4.id);
}
function openFirstTabAtCurrentLocation() {
  let guildId;
  let tmp4;
  const obj = ChannelTabRoutes;
  const routeTabForLocation = obj.getRouteTabForLocation(window.location);
  if (null != routeTabForLocation) {
    const obj2 = { kind: "route" };
    const merged = Object.assign(routeTabForLocation);
    tmp4 = obj2;
  } else {
    const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
    tmp4 = null;
    if (null != currentlySelectedChannelId) {
      tmp4 = null;
      if (!isStaticChannelRoute(currentlySelectedChannelId)) {
        const obj3 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
        guildId = SelectedGuildStore.getGuildId();
        if (guildId == null) {
          guildId = null;
        }
        tmp4 = obj3;
      }
    }
  }
  flag = null != tmp4;
  if (flag) {
    const tmp12 = createTab(tmp4);
    const items = [tmp12];
    let closure_11 = items;
    activateTab(tmp12.id);
    flag = true;
  }
  return flag;
}
function normalizePinScope(pinned) {
  let pinScope1;
  const obj = { pinScope: pinScope1 };
  const merged = Object.assign(pinned);
  pinScope1 = null;
  if (pinned.pinned) {
    const pinScope = pinned.pinScope;
    flag = false;
    if (null != pinScope) {
      flag = false;
      if (typeof pinScope === "object") {
        const kind = pinScope.kind;
        let tmp4 = "dms" === kind;
        if (!tmp4) {
          tmp4 = "guild" === kind && typeof tmp5 === "string";
        }
        flag = tmp4;
      }
    }
    pinScope1 = null;
    if (flag) {
      pinScope1 = pinned.pinScope;
    }
  }
  return obj;
}
function handleChannelDelete(channel) {
  let closure_11;
  channel = channel.channel;
  let enabled = flag;
  if (enabled) {
    const tmp = importDefault;
    const obj = TabsExperimentDefault;
    enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    let tmp3 = channel;
    const obj2 = channel(1357);
    enabled = obj2.isDesktop();
  }
  if (enabled) {
    if (0 === tabs.filter((kind) => "channel" === kind.kind && kind.channelId === channel.id && kind.id !== activeTabId).length) {
      return false;
    } else {
      tabs = tabs.filter((kind) => {
        let tmp3 = !tmp;
        if ("channel" === kind.kind && kind.channelId === channel.id) {
          tmp3 = kind.id === activeTabId;
        }
        return tmp3;
      });
      closure_13 = closure_13.filter(f98866);
    }
  } else {
    return false;
  }
}
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const unpackModuleId = [];
let activeTabId = null;
let closure_13 = [];
let closure_14 = 1;
let c15 = null;
let c16 = null;
let c17 = false;
let flag = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
  initialize(enabled) {
    this.waitFor(ApexExperimentStore, DefaultRouteStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserStore);
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    tabs = undefined;
    if (enabled != null) {
      tabs = enabled.tabs;
    }
    if (tabs == null) {
      tabs = [];
    }
    const mapped = tabs.map(normalizePinScope);
    const items = [...mapped.filter(f98872), ...mapped.filter(f98873)];
    tabs = items;
    activeTabId = undefined;
    if (enabled != null) {
      activeTabId = enabled.activeTabId;
    }
    if (activeTabId == null) {
      activeTabId = null;
    }
    closure_13 = [];
    closure_14 = tabs.reduce((acc, id) => {
      const NumberResult = Number(id.id);
      let tmp2 = acc;
      if (Number.isFinite(NumberResult)) {
        tmp2 = acc;
        if (NumberResult > acc) {
          tmp2 = NumberResult;
        }
      }
      return tmp2;
    }, 0) + 1;
    const someResult = null == activeTabId || tabs.some((id) => id.id === activeTabId);
    if (!someResult) {
      const first = tabs[0];
      let id;
      if (first != null) {
        id = first.id;
      }
      if (id == null) {
        id = null;
      }
      activeTabId = id;
    }
  }
  getState() {
    return { tabs, activeTabId, enabled: flag };
  }
  getTabs() {
    return tabs;
  }
  getActiveTabId() {
    return activeTabId;
  }
  getActiveTab() {
    let found = tabs.find((id) => id.id === activeTabId);
    if (found == null) {
      found = null;
    }
    return found;
  }
  isEnabled() {
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    return enabled;
  }
  isUserOptedIn() {
    return flag;
  }
  isTabBarVisible() {
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      enabled = tabs.length > 0;
    }
    return enabled;
  }
  getTabUnpinnedAtLimit() {
    let found = tabs.find((id) => id.id === closure_1_16);
    if (found == null) {
      found = null;
    }
    return found;
  }
  isActiveTabFresh() {
    return null != c15 && c15 === activeTabId;
  }
  getMaxTabs() {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num = 9;
    if (true === isStaffResult) {
      num = 25;
    }
    return num;
  }
  isAtMaxTabs() {
    const length = tabs.length;
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num = 9;
    if (true === isStaffResult) {
      num = 25;
    }
    return length >= num;
  }
  canGoBackInActiveTab() {
    const activeTab = this.getActiveTab();
    return null != activeTab && activeTab.index > 0;
  }
  canGoForwardInActiveTab() {
    const activeTab = this.getActiveTab();
    return null != activeTab && activeTab.index < activeTab.entries.length - 1;
  }
}
const prototype = ChannelTabsStore.prototype;
ChannelTabsStore.displayName = "ChannelTabsStore";
ChannelTabsStore.persistKey = "ChannelTabsStore";
let items = [
  (enabled) => {
    const obj = { tabs: [], activeTabId: null, enabled: flag };
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
    return obj;
  }
];
ChannelTabsStore.migrations = items;
let obj = {
  CHANNEL_TABS_OPEN: function handleOpenTab(kind) {
    const length = tabs.length;
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let num = 9;
    if (true === isStaffResult) {
      num = 25;
    }
    if (length >= num) {
      return false;
    } else {
      let obj5;
      const tmp11 = createTab;
      if ("route" === kind.kind) {
        const obj = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = kind);
        obj5 = obj;
      } else {
        obj5 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj2.channelId, guildId: obj2.guildId } = kind);
      }
      let sourceTabId = kind.sourceTabId;
      if (sourceTabId == null) {
        sourceTabId = activeTabId;
      }
      const tmp11Result = tmp11(obj5, sourceTabId);
      const items = [];
      items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp11Result;
      tabs = items;
      const tmp6 = true !== kind.active && null != activeTabId;
      if (!tmp6) {
        activateTab(tmp11Result.id);
      }
      if (true === kind.fresh) {
        const id = tmp11Result.id;
      }
    }
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else if (1 === tabs.length) {
      return false;
    } else {
      const id2 = tabs[findIndexResult].id;
      const tmp14 = activeTabId;
      if (c15 === tabId) {
        c15 = null;
      }
      tabs = tabs.filter((id) => id.id !== tabId);
      closure_13 = closure_13.filter(f98866);
      if (id2 === tmp14) {
        const _Math = Math;
        activeTabId = null;
        let id = closure_13[0];
        const tmp9 = activateTab;
        if (id == null) {
          id = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
        }
        tmp9(id);
      }
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    let tmp = activeTabId !== tabId;
    if (tmp) {
      const tmp4 = null != tabs.find((id) => id.id === tabId);
      if (tmp4) {
        activateTab(tabId);
      }
      tmp = tmp4;
    }
    return tmp;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const toIndex = tabId.toIndex;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      return false;
    } else {
      let items1;
      const length = tabs.filter((pinned) => pinned.pinned).length;
      if (tabs[findIndexResult].pinned) {
        const items = [0, length - 1];
        items1 = items;
      } else {
        items1 = [length, tabs.length - 1];
      }
      const tmp5 = _slicedToArray(items1, 2);
      const _Math = Math;
      const _Math2 = Math;
      const bound = Math.max(tmp5[0], Math.min(toIndex, tmp5[1]));
      const tmp4 = _slicedToArray;
      if (findIndexResult === bound) {
        return false;
      } else {
        const items2 = [];
        HermesBuiltin.arraySpread(items2, tabs, 0);
        items2.splice(bound, 0, tmp4(items2.splice(findIndexResult, 1), 1)[0]);
        tabs = items2;
      }
    }
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(scope) {
    let closure_129_0;
    let pinned;
    ({ tabId: closure_129_0, pinned } = scope);
    scope = undefined;
    let found;
    let tmp3 = null;
    if (pinned) {
      if (scope == null) {
        scope = null;
      }
      tmp3 = scope;
    }
    scope = tmp3;
    found = tabs.find((id) => id.id === closure_1_0);
    if (null != found) {
      if (found.pinned === pinned) {
        let obj = ChannelTabPinScope;
      }
      if (found.pinned !== pinned) {
        const found1 = tabs.filter((id) => id.id !== found.id);
        const length = found1.filter((pinned) => pinned.pinned).length;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, found1.slice(0, length), 0);
        const obj2 = { pinned, pinScope: tmp3 };
        let merged = Object.assign(found);
        items[arraySpreadResult] = obj2;
        HermesBuiltin.arraySpread(items, found1.slice(length), arraySpreadResult + 1);
        tabs = items;
      } else {
        tabs = tabs.map((id) => {
          let tmp = id;
          if (id.id === found.id) {
            const obj = { pinned, pinScope: scope };
            const merged = Object.assign(tmp2);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return false;
  },
  CHANNEL_TABS_BACK: function handleTabHistoryBack() {
    let closure_11;
    const found = tabs.find(f98874);
    flag = false;
    if (null != found) {
      const sum = found.index + -1;
      const require = sum;
      let closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        if (c15 === activeTabId) {
          c15 = null;
        }
        tabs = tabs.map((id) => {
          let entries;
          let pinScope;
          let tmp3;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: null, pinned: null, pinScope, entries, index: tmp3 };
            ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
            entries = id.entries;
            tmp3 = require;
            if (pinScope == null) {
              pinScope = null;
            }
            const merged = Object.assign(tmp2);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_FORWARD: function handleTabHistoryForward() {
    let closure_11;
    const found = tabs.find(f98874);
    flag = false;
    if (null != found) {
      const sum = found.index + 1;
      const require = sum;
      let tmp3 = found.entries[sum];
      let closure_1 = tmp3;
      flag = false;
      if (null != tmp3) {
        if (c15 === activeTabId) {
          c15 = null;
        }
        tabs = tabs.map((id) => {
          let entries;
          let pinScope;
          let tmp3;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: null, pinned: null, pinScope, entries, index: tmp3 };
            ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
            entries = id.entries;
            tmp3 = require;
            if (pinScope == null) {
              pinScope = null;
            }
            const merged = Object.assign(tmp2);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_SET_ENABLED: function handleSetEnabled(enabled) {
    enabled = enabled.enabled;
    if (flag === enabled) {
      flag = false;
      return false;
    } else {
      flag = enabled;
      if (flag) {
        let tmp3 = 0 === tabs.length;
        if (tmp3) {
          let enabled2 = flag;
          if (enabled2) {
            const obj = TabsExperimentDefault;
            enabled2 = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
          }
          if (enabled2) {
            const obj2 = utils_PlatformUtils;
            enabled2 = obj2.isDesktop();
          }
          tmp3 = enabled2;
        }
        if (tmp3) {
          openFirstTabAtCurrentLocation();
        }
      } else {
        tabs = [];
        activeTabId = null;
        closure_13 = [];
        c15 = null;
      }
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    let closure_11;
    let obj3;
    routePath = routePath.routePath;
    c16 = null;
    let enabled = flag;
    const routeLabel = routePath.routeLabel;
    if (flag) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1357);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      obj3 = { kind: "route", routePath, routeLabel };
      if (0 === tabs.length) {
        const tmp16 = createTab(obj3);
        const items = [tmp16];
        tabs = items;
        activateTab(tmp16.id);
      } else {
        const found = tabs.find((id) => id.id === activeTabId);
        let tmp7 = null != found;
        if (tmp7) {
          tmp7 = "route" !== found.kind || found.routePath !== routePath;
        }
        if (tmp7) {
          const obj4 = obj3(10208);
          if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
            landNavigationAroundPinnedTab(obj3);
          } else {
            if (c15 === activeTabId) {
              c15 = null;
            }
            tabs = tabs.map((id) => {
              let diff;
              let pinScope;
              if (id.id !== activeTabId) {
                return id;
              } else {
                const entries = id.entries;
                const items = [];
                items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                const obj = { id: null, pinned: null, pinScope, entries: items, index: diff };
                ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
                diff = items.length - 1;
                if (pinScope == null) {
                  pinScope = null;
                }
                const merged = Object.assign(tmp6);
                return obj;
              }
            });
          }
        }
        return tmp7;
      }
    } else {
      return false;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let closure_11;
    let guildId;
    let obj3;
    ({ channelId, guildId } = arg0);
    c16 = null;
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1357);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      if (null != channelId) {
        if (!isStaticChannelRoute(channelId)) {
          obj3 = { kind: "channel", channelId, guildId };
          if (guildId == null) {
            guildId = null;
          }
          if (0 === tabs.length) {
            const tmp16 = createTab(obj3);
            const items = [tmp16];
            tabs = items;
            activateTab(tmp16.id);
          } else {
            const found = tabs.find((id) => id.id === activeTabId);
            let tmp7 = null != found;
            if (tmp7) {
              tmp7 = "channel" !== found.kind || found.channelId !== channelId;
            }
            if (tmp7) {
              const obj4 = obj3(10208);
              if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
                landNavigationAroundPinnedTab(obj3);
              } else {
                if (c15 === activeTabId) {
                  c15 = null;
                }
                tabs = tabs.map((id) => {
                  let diff;
                  let pinScope;
                  if (id.id !== activeTabId) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                    const obj = { id: null, pinned: null, pinScope, entries: items, index: diff };
                    ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
                    diff = items.length - 1;
                    if (pinScope == null) {
                      pinScope = null;
                    }
                    const merged = Object.assign(tmp6);
                    return obj;
                  }
                });
              }
            }
            return tmp7;
          }
        }
      }
      return false;
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    let tmp6 = !enabled;
    if (enabled) {
      tmp6 = true === guild.unavailable;
    }
    let tmp7 = !tmp6;
    if (tmp7) {
      const f98898 = (arg0) => arg0 !== f98898.id;
      const found = tabs.filter((pinScope) => {
        pinScope = pinScope.pinScope;
        let kind;
        if (pinScope != null) {
          kind = pinScope.kind;
        }
        const tmp2 = "guild" === kind && !f98899(pinScope.pinScope.guildId);
        return tmp2;
      });
      let flag2 = false;
      if (0 !== found.length) {
        const mapped = found.map(f98877);
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, tabs.filter((pinned) => {
          pinned = pinned.pinned && !found1.includes(pinned);
          return pinned;
        }), 0));
        HermesBuiltin.arraySpread(items, tabs.filter(f98879), arraySpreadResult);
        tabs = items;
        flag2 = true;
      }
      tmp7 = flag2;
    }
    return tmp7;
  },
  CONNECTION_OPEN: function handleConnectionOpen(unavailableGuilds) {
    let closure_11;
    let guild;
    let guildId;
    unavailableGuilds = unavailableGuilds.unavailableGuilds;
    c17 = true;
    let enabled = flag;
    let tmp = c17;
    if (flag) {
      let tmp2 = importDefault;
      let obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = unavailableGuilds(1357);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      let tmp6 = !tmp;
      if (!tmp6) {
        if (0 === tabs.length) {
          return openFirstTabAtCurrentLocation();
        }
      }
      const length = tabs.length;
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      const obj3 = UserStore;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let num3 = 9;
      if (true === isStaffResult) {
        num3 = 25;
      }
      let diff = length - num3;
      let flag2 = false;
      if (diff > 0) {
        const _Set = Set;
        const found = tabs.filter((id) => id.id !== activeTabId);
        const substr = found.slice(-diff);
        const self = this;
        const self2 = this;
        set = new Set(substr.map((id) => id.id));
        tabs = tabs.filter((id) => !set.has(id.id));
        closure_13 = closure_13.filter(f98866);
        flag2 = true;
      }
      const f98899 = (guildId) => {
        const obj = unavailableGuilds(dependencyMap[12]);
        const isFavoritesGuildIdResult = obj.isFavoritesGuildId(guildId) || null != guild.getGuild(guildId) || f98899.includes(guildId);
        return isFavoritesGuildIdResult;
      };
      const found1 = tabs.filter((pinScope) => {
        pinScope = pinScope.pinScope;
        let kind;
        if (pinScope != null) {
          kind = pinScope.kind;
        }
        const tmp2 = "guild" === kind && !f98899(pinScope.pinScope.guildId);
        return tmp2;
      });
      let flag3 = false;
      if (0 !== found1.length) {
        const mapped = found1.map(f98877);
        let items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped, HermesBuiltin.arraySpread(items, tabs.filter((pinned) => {
          pinned = pinned.pinned && !found1.includes(pinned);
          return pinned;
        }), 0));
        HermesBuiltin.arraySpread(items, tabs.filter(f98879), arraySpreadResult);
        tabs = items;
        flag3 = true;
      }
      if (tmp6) {
        let tmp31;
        let obj9;
        const obj4 = { pathname: DefaultRouteStore.defaultRoute };
        const obj5 = unavailableGuilds(10209);
        const routeTabForLocation = obj5.getRouteTabForLocation(obj4);
        const _window = window;
        const obj7 = unavailableGuilds(10209);
        const routeTabForLocation1 = obj7.getRouteTabForLocation(window.location);
        const tmp23 = unavailableGuilds;
        if (null != routeTabForLocation1) {
          const obj6 = { kind: "route" };
          let merged = Object.assign(routeTabForLocation1);
          tmp31 = obj6;
        } else {
          const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
          tmp31 = null;
          if (null != currentlySelectedChannelId) {
            tmp31 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId)) {
              const obj8 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
              guildId = SelectedGuildStore.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              tmp31 = obj8;
            }
          }
        }
        if (tmp31 == null) {
          let tmp38 = null;
          if (null != routeTabForLocation) {
            obj9 = { kind: "route" };
            const merged1 = Object.assign(routeTabForLocation);
            tmp38 = obj9;
          }
          tmp31 = tmp38;
        }
        let flag4 = false;
        if (null != tmp31) {
          const atResult = tabs.at(-1);
          if (null == atResult) {
            const tmp57 = createTab(tmp31, null);
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, tabs, 0)] = tmp57;
            tabs = items1;
            activateTab(tmp57.id);
            flag4 = true;
          } else {
            if (atResult.pinned) {
              const currentUser1 = obj3.getCurrentUser();
              let isStaffResult1;
              if (currentUser1 != null) {
                isStaffResult1 = currentUser1.isStaff();
              }
            }
            activateTab(atResult.id);
            if (atResult.pinned) {
              const mapped1 = tabs.map((id) => {
                let tmp = id;
                if (id.id === atResult.id) {
                  const obj = { pinned: false, pinScope: null };
                  const merged = Object.assign(id);
                  tmp = obj;
                }
                return tmp;
              });
              const items2 = [];
              const arraySpreadResult5 = HermesBuiltin.arraySpread(items2, mapped1.filter(f98872), 0);
              HermesBuiltin.arraySpread(items2, mapped1.filter(f98873), arraySpreadResult5);
              tabs = items2;
            }
            flag4 = true;
            const tmp23Result = tmp23(10208);
            if (!tmp23Result.isSameTabLocation(atResult, tmp31)) {
              obj9 = tmp31;
              if (c15 === activeTabId) {
                c15 = null;
              }
              tabs = tabs.map((id) => {
                let diff;
                let pinScope;
                if (id.id !== activeTabId) {
                  return id;
                } else {
                  const entries = id.entries;
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                  const obj = { id: null, pinned: null, pinScope, entries: items, index: diff };
                  ({ id: obj.id, pinned: obj.pinned, pinScope } = id);
                  diff = items.length - 1;
                  if (pinScope == null) {
                    pinScope = null;
                  }
                  const merged = Object.assign(tmp6);
                  return obj;
                }
              });
              flag4 = true;
            }
          }
        }
        tmp6 = flag4;
      }
      if (!tmp6) {
        tmp6 = flag2;
      }
      if (!tmp6) {
        tmp6 = flag3;
      }
      return tmp6;
    } else {
      return false;
    }
  },
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    if (0 === tabs.length) {
      return false;
    } else {
      tabs = [];
      activeTabId = null;
      closure_13 = [];
      c15 = null;
    }
  }
};
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
