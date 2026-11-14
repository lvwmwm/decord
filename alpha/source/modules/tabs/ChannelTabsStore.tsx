// Module ID: 10275
// Function ID: 10276
// Name: ChannelTabsStore
// Dependencies: [32, 1246, 5353, 5209, 5349, 1388, 5162, 10276, 1360, 10277, 10278, 504, 572, 2]

// Module 10275 (ChannelTabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import TabsExperimentDefault from "TabsExperiment" /* 10276 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 10278 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import DefaultRouteStore from "DefaultRouteStore" /* 5353 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let _require, set, tabs;

const f100071 = (item) => {
  let closure_0 = item;
  return closure_10.some((id) => id.id === closure_0);
};
const f100077 = (pinned) => pinned.pinned;
const f100078 = (pinned) => !pinned.pinned;
const f100079 = (id) => id.id === activeTabId;
function activateTab(id) {
  const f100070 = (item) => item !== closure_0;
  const tmp2 = null != activeTabId && activeTabId !== id;
  if (tmp2) {
    let closure_0 = activeTabId;
    const items = [activeTabId];
    HermesBuiltin.arraySpread(items, closure_12.filter(f100070), 1);
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
    closure_12 = slice(0, num2);
  }
  activeTabId = id;
  closure_0 = id;
  const items1 = [id, ...closure_12.filter(f100070)];
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
  closure_12 = slice2(0, num4);
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
  const obj2 = { id: String(+closure_13), pinned: false, entries: substr1, index: substr1.length - 1 };
  closure_13 = tmp13 + 1;
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
      let closure_15 = activeTabId;
      const mapped = items1.map((id) => {
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { pinned: false };
          const merged = Object.assign(id);
          tmp = obj;
        }
        return tmp;
      });
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped.filter(f100077), 0);
      HermesBuiltin.arraySpread(items, mapped.filter(f100078), arraySpreadResult);
      items1 = items;
      let closure_0 = kind2;
      if (c14 === activeTabId) {
        c14 = null;
      }
      items1 = items.map((id) => {
        let diff;
        if (id.id !== activeTabId) {
          return id;
        } else {
          const entries = id.entries;
          const items = [];
          items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
          const substr = items.slice(-50);
          const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
          diff = substr.length - 1;
          const merged = Object.assign(obj9);
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
    let closure_10 = items;
    activateTab(tmp12.id);
    flag = true;
  }
  return flag;
}
function handleChannelDelete(channel) {
  let closure_10;
  channel = channel.channel;
  let enabled = flag;
  if (enabled) {
    const tmp = importDefault;
    const obj = TabsExperimentDefault;
    enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    let tmp3 = channel;
    const obj2 = channel(1360);
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
      closure_12 = closure_12.filter(f100071);
    }
  } else {
    return false;
  }
}
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const authStore = [];
let activeTabId = null;
let closure_12 = [];
let closure_13 = 1;
let c14 = null;
let c15 = null;
let c16 = false;
let flag = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
  initialize(enabled) {
    this.waitFor(ApexExperimentStore, DefaultRouteStore, SelectedChannelStore, SelectedGuildStore, UserStore);
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
    const mapped = tabs.map((id) => {
      let entries;
      let entries1;
      let index;
      let obj;
      if ("route" === id.kind) {
        const obj3 = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj2.routePath, routeLabel: obj2.routeLabel } = id);
        obj = obj3;
      } else {
        obj = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj.channelId, guildId: obj.guildId } = id);
      }
      const obj4 = { id: id.id, pinned: true === id.pinned, entries, index };
      ({ entries, index } = id);
      const merged = Object.assign(obj);
      let tmp2 = obj4;
      if (Array.isArray(obj4.entries)) {
        tmp2 = obj4;
        if (obj4.entries.length > 50) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(Math.max(obj4.index, 0), obj4.entries.length - 1);
          const _Math3 = Math;
          const bound1 = Math.min(bound, obj4.entries.length - 50);
          const obj7 = { entries: entries1.slice(bound1, bound1 + 50), index: bound - bound1 };
          const merged1 = Object.assign(obj4);
          entries1 = obj4.entries;
          tmp2 = obj7;
        }
      }
      return tmp2;
    });
    const items = [...mapped.filter(f100077), ...mapped.filter(f100078)];
    tabs = items;
    activeTabId = undefined;
    if (enabled != null) {
      activeTabId = enabled.activeTabId;
    }
    if (activeTabId == null) {
      activeTabId = null;
    }
    closure_12 = [];
    closure_13 = tabs.reduce((acc, id) => {
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
    let found = tabs.find((id) => id.id === closure_1_15);
    if (found == null) {
      found = null;
    }
    return found;
  }
  isActiveTabFresh() {
    return null != c14 && c14 === activeTabId;
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
      if (c14 === tabId) {
        c14 = null;
      }
      tabs = tabs.filter((id) => id.id !== tabId);
      closure_12 = closure_12.filter(f100071);
      if (id2 === tmp14) {
        const _Math = Math;
        activeTabId = null;
        let id = closure_12[0];
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
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    let closure_129_0;
    let pinned;
    ({ tabId: closure_129_0, pinned } = arg0);
    const found = tabs.find((id) => id.id === closure_1_0);
    if (null != found) {
      if (found.pinned !== pinned) {
        const found1 = tabs.filter((id) => id.id !== found.id);
        const length = found1.filter((pinned) => pinned.pinned).length;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, found1.slice(0, length), 0);
        const obj = { pinned };
        const merged = Object.assign(found);
        items[arraySpreadResult] = obj;
        HermesBuiltin.arraySpread(items, found1.slice(length), arraySpreadResult + 1);
        tabs = items;
      }
    }
    return false;
  },
  CHANNEL_TABS_BACK: function handleTabHistoryBack() {
    let closure_10;
    const found = tabs.find(f100079);
    flag = false;
    if (null != found) {
      const sum = found.index + -1;
      const require = sum;
      let closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        if (c14 === activeTabId) {
          c14 = null;
        }
        tabs = tabs.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: id.id, pinned: true === id.pinned, entries, index: require };
            entries = id.entries;
            const merged = Object.assign(closure_1);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
    return flag;
  },
  CHANNEL_TABS_FORWARD: function handleTabHistoryForward() {
    let closure_10;
    const found = tabs.find(f100079);
    flag = false;
    if (null != found) {
      const sum = found.index + 1;
      const require = sum;
      let closure_1 = tmp3;
      flag = false;
      if (null != found.entries[sum]) {
        if (c14 === activeTabId) {
          c14 = null;
        }
        tabs = tabs.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: id.id, pinned: true === id.pinned, entries, index: require };
            entries = id.entries;
            const merged = Object.assign(closure_1);
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
        closure_12 = [];
        c14 = null;
      }
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: function handleNavigateRoute(routePath) {
    let closure_10;
    let obj3;
    routePath = routePath.routePath;
    c15 = null;
    let enabled = flag;
    const routeLabel = routePath.routeLabel;
    if (flag) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1360);
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
          const obj4 = obj3(10277);
          if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
            landNavigationAroundPinnedTab(obj3);
          } else {
            if (c14 === activeTabId) {
              c14 = null;
            }
            tabs = tabs.map((id) => {
              let diff;
              if (id.id !== activeTabId) {
                return id;
              } else {
                const entries = id.entries;
                const items = [];
                items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                const substr = items.slice(-50);
                const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
                diff = substr.length - 1;
                const merged = Object.assign(obj9);
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
    let closure_10;
    let guildId;
    let obj3;
    ({ channelId, guildId } = arg0);
    c15 = null;
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = obj3(1360);
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
              const obj4 = obj3(10277);
              if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
                landNavigationAroundPinnedTab(obj3);
              } else {
                if (c14 === activeTabId) {
                  c14 = null;
                }
                tabs = tabs.map((id) => {
                  let diff;
                  if (id.id !== activeTabId) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                    const substr = items.slice(-50);
                    const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
                    diff = substr.length - 1;
                    const merged = Object.assign(obj9);
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
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10;
    let guildId;
    c16 = true;
    let enabled = flag;
    let tmp = c16;
    if (flag) {
      let obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
    }
    if (enabled) {
      const obj2 = set(1360);
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
        let substr = found.slice(-diff);
        const self = this;
        const self2 = this;
        set = new Set(substr.map((id) => id.id));
        tabs = tabs.filter((id) => !set.has(id.id));
        closure_12 = closure_12.filter(f100071);
        flag2 = true;
      }
      if (tmp6) {
        let tmp21;
        let obj9;
        const obj4 = { pathname: DefaultRouteStore.defaultRoute };
        const obj5 = set(10278);
        const routeTabForLocation = obj5.getRouteTabForLocation(obj4);
        const _window = window;
        const obj7 = set(10278);
        const routeTabForLocation1 = obj7.getRouteTabForLocation(window.location);
        const tmp13 = set;
        if (null != routeTabForLocation1) {
          const obj6 = { kind: "route" };
          let merged = Object.assign(routeTabForLocation1);
          tmp21 = obj6;
        } else {
          const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
          tmp21 = null;
          if (null != currentlySelectedChannelId) {
            tmp21 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId)) {
              const obj8 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
              guildId = SelectedGuildStore.getGuildId();
              if (guildId == null) {
                guildId = null;
              }
              tmp21 = obj8;
            }
          }
        }
        if (tmp21 == null) {
          let tmp28 = null;
          if (null != routeTabForLocation) {
            obj9 = { kind: "route" };
            const merged1 = Object.assign(routeTabForLocation);
            tmp28 = obj9;
          }
          tmp21 = tmp28;
        }
        let flag3 = false;
        if (null != tmp21) {
          const atResult = tabs.at(-1);
          if (null == atResult) {
            const tmp47 = createTab(tmp21, null);
            let items = [];
            items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp47;
            tabs = items;
            activateTab(tmp47.id);
            flag3 = true;
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
              const mapped = tabs.map((id) => {
                let tmp = id;
                if (id.id === atResult.id) {
                  const obj = { pinned: false };
                  const merged = Object.assign(id);
                  tmp = obj;
                }
                return tmp;
              });
              const items1 = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.filter(f100077), 0);
              HermesBuiltin.arraySpread(items1, mapped.filter(f100078), arraySpreadResult);
              tabs = items1;
            }
            flag3 = true;
            const tmp13Result = tmp13(10277);
            if (!tmp13Result.isSameTabLocation(atResult, tmp21)) {
              obj9 = tmp21;
              if (c14 === activeTabId) {
                c14 = null;
              }
              tabs = tabs.map((id) => {
                let diff;
                if (id.id !== activeTabId) {
                  return id;
                } else {
                  const entries = id.entries;
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = obj9;
                  const substr = items.slice(-50);
                  const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
                  diff = substr.length - 1;
                  const merged = Object.assign(obj9);
                  return obj;
                }
              });
              flag3 = true;
            }
          }
        }
        tmp6 = flag3;
      }
      if (!tmp6) {
        tmp6 = flag2;
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
      closure_12 = [];
      c14 = null;
    }
  }
};
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
