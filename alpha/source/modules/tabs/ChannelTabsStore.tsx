// Module ID: 11535
// Function ID: 11536
// Name: ChannelTabsStore
// Dependencies: [32, 1246, 5080, 4946, 5076, 1387, 1071, 4899, 5859, 11536, 11537, 504, 572, 2]

// Module 11535 (ChannelTabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import FrecencyDefault from "Frecency" /* 5859 */;
import TabsExperiment from "TabsExperiment" /* 11537 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import DefaultRouteStore from "DefaultRouteStore" /* 5080 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5076 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require;

const f100308 = (arg0) => {
  const tmp = handleChannelSelect(arg0);
  const found = tabs.find((id) => id.id === closure_1_11);
  let hasItem = null != found && set.has(found.id);
  if (hasItem) {
    let flag;
    if ("route" === found.kind) {
      if (found.routePath === Routes.FRIENDS) {
        set.add(found.id);
        flag = false;
      }
      hasItem = flag;
    }
    set.delete(found.id);
    flag = "channel" === found.kind && !isStaticChannelRoute(found.channelId);
    if (flag) {
      const channelId = found.channelId;
      closure_23.track(channelId);
      pruneOpenedChannels();
      closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
      flag = true;
    }
  }
  return false !== tmp || hasItem;
};
const f100317 = (pinned) => pinned.pinned;
const f100318 = (pinned) => !pinned.pinned;
const f100320 = (id) => id.id === closure_1_11;
function pruneOpenedChannels() {
  set = new Set(closure_23.frequently);
  const keys = Object.keys(closure_23.usageHistory);
  for (const item10017 of keys) {
    if (!set.has(item10017)) {
      delete closure_23.usageHistory[item10017];
    }
    continue;
  }
}
function recordClosedTab(id) {
  set.delete(id.id);
  if ("channel" === id.kind) {
    const channelId = id.channelId;
    const _Date = Date;
    const items = [{ channelId, guildId: id.guildId, closedAt: Date.now() }];
    const obj = { channelId, guildId: id.guildId, closedAt: Date.now() };
    HermesBuiltin.arraySpread(items, closure_19.filter((channelId) => channelId.channelId !== channelId), 1);
    closure_19 = items.slice(0, 10);
  }
}
function createTab(routeTabForLocation, arg1) {
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
    items[HermesBuiltin.arraySpread(items, mapped, 0)] = routeTabForLocation;
    substr1 = items.slice(-11);
  } else {
    let obj = require("ChannelTabRoutes");
    substr1 = mapped;
  }
  const obj2 = { id: String(+closure_13), pinned: false, entries: substr1, index: substr1.length - 1 };
  closure_13 = tmp13 + 1;
  let merged = Object.assign(routeTabForLocation);
  return obj2;
}
function navigateTo(routeTabForLocation1) {
  let closure_10;
  let id;
  let obj2;
  const tmp2 = tabsExperimentEnabled;
  if (tmp2) {
    let closure_14 = null;
    c15 = null;
    if (null == routeTabForLocation1) {
      return false;
    } else if (0 === tabs.length) {
      const tmp34 = createTab(routeTabForLocation1);
      const items = [tmp34];
      tabs = items;
      id = tmp34.id;
    } else {
      const found = tabs.find((id) => id.id === id);
      let tmp7 = null != found;
      if (tmp7) {
        let obj = require("ChannelTabRoutes");
        tmp7 = !obj.isSameTabLocation(found, routeTabForLocation1);
      }
      if (tmp7) {
        let tmp15;
        let hasItem = null != id;
        if (hasItem) {
          let tabId;
          if (obj2 != null) {
            tabId = obj2.tabId;
          }
          hasItem = tabId === id;
        }
        if (hasItem) {
          hasItem = set.has(id);
        }
        if (!hasItem) {
          obj2 = null;
        }
        if (found.pinned) {
          _require = routeTabForLocation1;
          const found1 = tabs.find((item) => {
            const obj = routeTabForLocation1(dependencyMap[9]);
            return obj.isSameTabLocation(item, routeTabForLocation1);
          });
          if (null != found1) {
            ({ id: c15, id } = found1);
          } else {
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
              if (null != id) {
                closure_14 = id;
                const mapped = tabs.map((id) => {
                  let tmp = id;
                  if (id.id === id) {
                    const obj = { pinned: false };
                    const merged = Object.assign(id);
                    tmp = obj;
                  }
                  return tmp;
                });
                const items1 = [];
                const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.filter(f100317), 0);
                HermesBuiltin.arraySpread(items1, mapped.filter(f100318), arraySpreadResult);
                _require = routeTabForLocation1;
                tabs = items1.map((id) => {
                  let diff;
                  if (id.id !== activeTabId) {
                    return id;
                  } else {
                    const entries = id.entries;
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
                    const substr = items.slice(-50);
                    const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
                    diff = substr.length - 1;
                    const merged = Object.assign(routeTabForLocation1);
                    return obj;
                  }
                });
              }
            }
            const tmp21 = createTab(routeTabForLocation1);
            const items2 = [];
            items2[HermesBuiltin.arraySpread(items2, tabs, 0)] = tmp21;
            tabs = items2;
            if (null != id) {
              obj2 = { tabId: tmp21.id, openerId: id, survivesSwitchToOpener: true };
            }
            id = tmp21.id;
          }
          tmp15 = tmp26;
        } else {
          _require = routeTabForLocation1;
          tabs = tabs.map((id) => {
            let diff;
            if (id.id !== activeTabId) {
              return id;
            } else {
              const entries = id.entries;
              const items = [];
              items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
              const substr = items.slice(-50);
              const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
              diff = substr.length - 1;
              const merged = Object.assign(routeTabForLocation1);
              return obj;
            }
          });
        }
        tmp7 = tmp15;
      }
      return tmp7;
    }
  } else {
    return false;
  }
}
function initializeTabs() {
  let closure_10;
  let guildId;
  let guildId1;
  let routeTabForLocation1;
  const tmp2 = c17;
  if (tmp2) {
    let tmp34;
    if (0 === tabs.length) {
      const _window2 = window;
      const obj7 = routeTabForLocation1(11536);
      let routeTabForLocation = obj7.getRouteTabForLocation(window.location);
      if (null == routeTabForLocation) {
        const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
        let tmp42 = null;
        if (null != currentlySelectedChannelId) {
          tmp42 = null;
          if (!isStaticChannelRoute(currentlySelectedChannelId)) {
            const obj2 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
            guildId = SelectedGuildStore.getGuildId();
            if (guildId == null) {
              guildId = null;
            }
            tmp42 = obj2;
          }
        }
        routeTabForLocation = tmp42;
      }
      let flag3 = null != routeTabForLocation;
      if (flag3) {
        const tmp47 = createTab(routeTabForLocation);
        let items = [tmp47];
        tabs = items;
        let id = tmp47.id;
        flag3 = true;
      }
      tmp34 = flag3;
    } else {
      tmp34 = trimToMaxTabs();
    }
    return tmp34;
  } else {
    c17 = true;
    const tmp4 = trimToMaxTabs();
    let obj = routeTabForLocation1(11536);
    const _window = window;
    routeTabForLocation1 = obj.getRouteTabForLocation(window.location);
    if (null == routeTabForLocation1) {
      const currentlySelectedChannelId1 = SelectedChannelStore.getCurrentlySelectedChannelId();
      let tmp12 = null;
      if (null != currentlySelectedChannelId1) {
        tmp12 = null;
        if (!isStaticChannelRoute(currentlySelectedChannelId1)) {
          const obj3 = { kind: "channel", channelId: currentlySelectedChannelId1, guildId: guildId1 };
          guildId1 = SelectedGuildStore.getGuildId();
          if (guildId1 == null) {
            guildId1 = null;
          }
          tmp12 = obj3;
        }
      }
      routeTabForLocation1 = tmp12;
    }
    if (routeTabForLocation1 == null) {
      const obj4 = { pathname: DefaultRouteStore.defaultRoute };
      const tmp5Result = routeTabForLocation1(11536);
      routeTabForLocation1 = tmp5Result.getRouteTabForLocation(obj4);
    }
    let flag2 = false;
    if (null != routeTabForLocation1) {
      const atResult = tabs.at(-1);
      if (null == atResult) {
        const tmp29 = createTab(routeTabForLocation1, null);
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, tabs, 0)] = tmp29;
        tabs = items1;
        id = tmp29.id;
        flag2 = true;
      } else {
        if (atResult.pinned) {
          const currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
        }
        id = atResult.id;
        if (atResult.pinned) {
          id = atResult.id;
          const mapped = tabs.map((id) => {
            let tmp = id;
            if (id.id === id) {
              const obj = { pinned: false };
              const merged = Object.assign(id);
              tmp = obj;
            }
            return tmp;
          });
          const items2 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items2, mapped.filter(f100317), 0);
          HermesBuiltin.arraySpread(items2, mapped.filter(f100318), arraySpreadResult);
          tabs = items2;
        }
        flag2 = true;
        const tmp5Result2 = routeTabForLocation1(11536);
        if (!tmp5Result2.isSameTabLocation(atResult, routeTabForLocation1)) {
          tabs = tabs.map((id) => {
            let diff;
            if (id.id !== activeTabId) {
              return id;
            } else {
              const entries = id.entries;
              const items = [];
              items[HermesBuiltin.arraySpread(items, entries.slice(0, id.index + 1), 0)] = routeTabForLocation1;
              const substr = items.slice(-50);
              const obj = { id: id.id, pinned: true === id.pinned, entries: substr, index: diff };
              diff = substr.length - 1;
              const merged = Object.assign(routeTabForLocation1);
              return obj;
            }
          });
          flag2 = true;
        }
      }
    }
    if (!flag2) {
      flag2 = tmp4;
    }
    return flag2;
  }
}
function trimToMaxTabs() {
  let c12;
  let closure_10;
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
  const diff = length - num;
  if (diff <= 0) {
    return false;
  } else {
    const _Set = Set;
    const found = tabs.filter((id) => id.id !== activeTabId);
    const substr = found.slice(-diff);
    const self = this;
    const self2 = this;
    set = new Set(substr.map((id) => id.id));
    tabs = tabs.filter((id) => !set.has(id.id));
    let tmp6 = null != _null;
    if (tmp6) {
      const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
      tmp6 = hasItem;
    }
    if (tmp6) {
      _null = null;
    }
    return true;
  }
}
function handleChannelDelete(channel) {
  let c12;
  let closure_10;
  channel = channel.channel;
  let isStrandedBackgroundTab;
  const tmp = tabsExperimentEnabled;
  if (tmp) {
    isStrandedBackgroundTab = function isStrandedBackgroundTab(kind) {
      return "channel" === kind.kind && kind.channelId === channel.id && kind.id !== activeTabId;
    };
    if (tabs.some(isStrandedBackgroundTab)) {
      const _Set = Set;
      const found = tabs.filter(isStrandedBackgroundTab);
      const self = this;
      const self2 = this;
      set = new Set(found.map((id) => id.id));
      let tmp7 = null != _null;
      if (tmp7) {
        const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
        tmp7 = hasItem;
      }
      if (tmp7) {
        _null = null;
      }
      tabs = tabs.filter((kind) => {
        if (typeof isStrandedBackgroundTab === "function") {
          return !("channel" === kind.kind && kind.channelId === channel.id && kind.id !== activeTabId);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      return false;
    }
  } else {
    return false;
  }
}
const Routes = Constants.Routes;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const authStore = [];
let activeTabId = null;
let c12 = null;
let closure_13 = 1;
let c14 = null;
let c15 = null;
let c16 = false;
let c17 = false;
let tabsExperimentEnabled = false;
let closure_19 = [];
let set = new Set();
let frequently = null;
let closure_22 = [];
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: 10
};
let tmp3 = new FrecencyDefault(obj);
const sidebars = tmp3;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
  initialize(tabs) {
    function readSavedUsages(openedChannels) {
      let tmp6;
      let tmp7;
      const obj = {};
      if (null != openedChannels) {
        if (typeof openedChannels === "object") {
          const _Object = Object;
          const entries = Object.entries(openedChannels);
          let tmp = entries;
          const tmp20 = entries[Symbol.iterator]();
          while (tmp20 !== undefined) {
            let found;
            let tmp5 = _slicedToArray(tmp2, 2);
            [tmp6, tmp7] = tmp5;
            let tmp8 = tmp7;
            let recentUses;
            let _Array = Array;
            if (tmp7 != null) {
              recentUses = tmp7.recentUses;
            }
            if (isArray(recentUses)) {
              let recentUses1 = tmp8.recentUses;
              found = recentUses1.filter((item) => {
                let tmp = typeof item === "number";
                if (typeof item === "number") {
                  tmp = item > 0;
                }
                return tmp;
              });
            } else {
              found = [];
            }
            let arr3 = found;
            let totalUses;
            if (tmp8 != null) {
              totalUses = tmp8.totalUses;
            }
            let tmp13 = typeof totalUses === "number";
            if (typeof totalUses === "number") {
              tmp13 = 0 !== arr3.length;
            }
            if (tmp13) {
              let obj2 = { totalUses: tmp8.totalUses, recentUses: arr3, frecency: -1, score: 0 };
              obj[tmp6] = obj2;
            }
            continue;
          }
          return obj;
        }
      }
      return obj;
    }
    this.waitFor(ApexExperimentStore, DefaultRouteStore, SelectedChannelStore, SelectedGuildStore, UserStore);
    const items = [ApexExperimentStore];
    this.syncWith(items, () => {
      const obj = require("TabsExperiment");
      tabsExperimentEnabled = obj.getTabsExperimentEnabled("ChannelTabsStore.syncWith");
      let flag = tabsExperimentEnabled !== tabsExperimentEnabled;
      if (flag) {
        if (tabsExperimentEnabled) {
          tabsExperimentEnabled = closure_1_16;
        }
        flag = true;
        if (tabsExperimentEnabled) {
          initializeTabs();
          flag = true;
        }
      }
      return flag;
    });
    tabs = undefined;
    if (tabs != null) {
      tabs = tabs.tabs;
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
    const items1 = [...mapped.filter(f100317), ...mapped.filter(f100318)];
    tabs = items1;
    activeTabId = undefined;
    if (tabs != null) {
      activeTabId = tabs.activeTabId;
    }
    if (activeTabId == null) {
      activeTabId = null;
    }
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
    let someResult = null == activeTabId;
    if (!someResult) {
      let tmp5 = tabs;
      someResult = tabs.some((id) => id.id === activeTabId);
    }
    if (!someResult) {
      const tmp6 = tabs;
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
    let openedChannels;
    const overwriteHistory = closure_23.overwriteHistory;
    if (tabs != null) {
      openedChannels = tabs.openedChannels;
    }
    overwriteHistory(readSavedUsages(openedChannels));
    pruneOpenedChannels();
    let obj = TabsExperiment;
    tabsExperimentEnabled = obj.getTabsExperimentEnabled("ChannelTabsStore.initialize");
    if (tabsExperimentEnabled !== tabsExperimentEnabled) {
      if (tabsExperimentEnabled) {
        tabsExperimentEnabled = c16;
      }
      if (tabsExperimentEnabled) {
        let tmp14 = initializeTabs;
        let tmp15 = initializeTabs();
      }
    }
  }
  getState() {
    const obj = {};
    const entries = Object.entries(closure_23.usageHistory);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let obj3 = { totalUses: null, recentUses: null };
      ({ totalUses: obj2.totalUses, recentUses: obj2.recentUses } = tmp5[1]);
      obj[tmp5[0]] = obj3;
      continue;
    }
    return { tabs, activeTabId, openedChannels: obj };
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
  getTabUnpinnedAtLimit() {
    let found = tabs.find((id) => id.id === closure_1_14);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getTabRefocusedFromPinned() {
    let found = tabs.find((id) => id.id === closure_1_15);
    if (found == null) {
      found = null;
    }
    return found;
  }
  getOtherTabsToClose(tabId, mode) {
    let items;
    let closure_0 = tabId;
    let closure_1 = mode;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      items = [];
    } else {
      items = tabs.filter((pinned, index) => {
        let tmp = !pinned.pinned && index !== c2;
        if (tmp) {
          tmp = "all" === mode || index > c2;
          const tmp4 = "all" === mode || index > c2;
        }
        return tmp;
      });
    }
    return items;
  }
  getCloseOtherTabsCount(arg0) {
    let items;
    let closure_0 = arg0;
    const all = "all";
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      items = [];
    } else {
      items = tabs.filter((pinned, index) => {
        let tmp = !pinned.pinned && index !== c2;
        if (tmp) {
          tmp = "all" === mode || index > c2;
          const tmp4 = "all" === mode || index > c2;
        }
        return tmp;
      });
    }
    return items.length;
  }
  getCloseTabsToRightCount(arg0) {
    let items;
    let closure_0 = arg0;
    const right = "right";
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    if (-1 === findIndexResult) {
      items = [];
    } else {
      items = tabs.filter((pinned, index) => {
        let tmp = !pinned.pinned && index !== c2;
        if (tmp) {
          tmp = "all" === mode || index > c2;
          const tmp4 = "all" === mode || index > c2;
        }
        return tmp;
      });
    }
    return items.length;
  }
  getRecentlyClosed() {
    return closure_19;
  }
  getFrequentlyOpenedChannelIds() {
    frequently = usageHistory.frequently;
    if (frequently !== frequently) {
      closure_22 = frequently.filter((item) => {
        let num;
        if (usageHistory.usageHistory[item] != null) {
          num = tmp.totalUses;
        }
        if (num == null) {
          num = 0;
        }
        return num >= 2;
      });
    }
    return closure_22;
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
    let flag;
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
let obj2 = {
  CHANNEL_TABS_OPEN: function handleOpenTab(location) {
    const tmp2 = tabsExperimentEnabled;
    if (tmp2) {
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
      if (length < num) {
        let obj4;
        const _location = location.location;
        const tmp25 = createTab;
        if ("route" === _location.kind) {
          const obj = { kind: "route", routePath: null, routeLabel: null };
          ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = _location);
          obj4 = obj;
        } else {
          obj4 = { kind: "channel", channelId: null, guildId: null };
          ({ channelId: obj2.channelId, guildId: obj2.guildId } = _location);
        }
        const tmp25Result = tmp25(obj4, undefined === location.sourceTabId ? activeTabId : location.sourceTabId);
        const items = [];
        items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp25Result;
        tabs = items;
        if (null == activeTabId) {
          activeTabId = tmp25Result.id;
        } else if (true !== location.background) {
          let c12 = { tabId: tmp25Result.id, openerId: activeTabId, survivesSwitchToOpener: false };
          const obj7 = { tabId: tmp25Result.id, openerId: activeTabId, survivesSwitchToOpener: false };
          activeTabId = tmp25Result.id;
        }
        if ("route" === tmp25Result.kind) {
          if (tmp25Result.routePath === Routes.FRIENDS) {
            set.add(tmp25Result.id);
          }
        }
        set.delete(tmp25Result.id);
        const tmp15 = "channel" === tmp25Result.kind && !isStaticChannelRoute(tmp25Result.channelId);
        if (tmp15) {
          const channelId = tmp25Result.channelId;
          closure_23.track(channelId);
          pruneOpenedChannels();
          closure_19 = closure_19.filter((channelId) => channelId.channelId !== channelId);
        }
      }
    }
    return false;
  },
  CHANNEL_TABS_CLOSE: function handleCloseTab(tabId) {
    tabId = tabId.tabId;
    const tmp2 = tabsExperimentEnabled;
    if (tmp2) {
      const findIndexResult = tabs.findIndex((id) => id.id === tabId);
      if (-1 === findIndexResult) {
        return false;
      } else if (1 === tabs.length) {
        return false;
      } else {
        if (tabs[findIndexResult].id === activeTabId) {
          const id = tabs[findIndexResult].id;
          let tabId1;
          if (_null != null) {
            tabId1 = _null.tabId;
          }
          if (tabId1 === id) {
            let openerId = _null.openerId;
          } else {
            let openerId1;
            if (_null != null) {
              openerId1 = _null.openerId;
            }
            openerId = null;
            if (openerId1 === id) {
              openerId = _null.tabId;
            }
          }
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, tabs.slice(findIndexResult + 1), 0);
          const substr = tabs.slice(0, findIndexResult);
          HermesBuiltin.arraySpread(items, substr.reverse(), arraySpreadResult);
          let found = items.find((id) => id.id === openerId);
          if (found == null) {
            found = items[0];
          }
          activeTabId = found.id;
        }
        tabs = tabs.filter((id) => id.id !== tabId);
        const _Set = Set;
        const items1 = [tabId];
        const self2 = this;
        const self = this;
        set = new Set(items1);
        let tmp22 = null != _null;
        if (tmp22) {
          const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
          tmp22 = hasItem;
        }
        if (tmp22) {
          _null = null;
        }
        set.delete(tabs[findIndexResult].id);
        if ("channel" === tabs[findIndexResult].kind) {
          const channelId = tmp34.channelId;
          const _Date = Date;
          const items2 = [{ channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() }];
          const obj = { channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() };
          HermesBuiltin.arraySpread(items2, closure_19.filter((channelId) => channelId.channelId !== channelId), 1);
          closure_19 = items2.slice(0, 10);
        }
      }
    } else {
      return false;
    }
  },
  CHANNEL_TABS_CLOSE_OTHERS: function handleCloseOtherTabs(tabId) {
    let items;
    tabId = tabId.tabId;
    set = undefined;
    const mode = tabId.mode;
    const findIndexResult = tabs.findIndex((id) => id.id === tabId);
    let c2 = findIndexResult;
    if (-1 === findIndexResult) {
      items = [];
    } else {
      items = tabs.filter((pinned, index) => {
        let tmp = !pinned.pinned && index !== c2;
        if (tmp) {
          tmp = "all" === mode || index > c2;
          const tmp4 = "all" === mode || index > c2;
        }
        return tmp;
      });
    }
    if (0 === items.length) {
      return false;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(items.map((id) => id.id));
      let hasItem = null != activeTabId;
      if (hasItem) {
        hasItem = set.has(activeTabId);
      }
      if (hasItem) {
        activeTabId = tabId;
      }
      tabs = tabs.filter((id) => !set.has(id.id));
      let tmp7 = null != _null;
      if (tmp7) {
        const hasItem1 = set.has(_null.tabId) || set.has(_null.openerId);
        tmp7 = hasItem1;
      }
      if (tmp7) {
        _null = null;
      }
      const reversed = items.reverse();
      const item = reversed.forEach(recordClosedTab);
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    const tmp = tabsExperimentEnabled;
    if (tmp) {
      if (activeTabId !== tabId) {
        if (null == tabs.find((id) => id.id === tabId)) {
          return false;
        } else {
          if (null != _null) {
            let tmp9;
            let tmp6 = activeTabId === _null.tabId;
            if (tmp6) {
              tmp9 = tabId === _null.openerId;
            } else {
              tmp9 = activeTabId === _null.openerId && tabId === _null.tabId;
            }
            let tmp12 = !tmp9;
            if (tmp9) {
              if (tmp6) {
                tmp6 = !_null.survivesSwitchToOpener;
              }
              tmp12 = tmp6;
            }
            if (tmp12) {
              _null = null;
            }
          }
          activeTabId = tabId;
        }
      }
    }
    return false;
  },
  CHANNEL_TABS_MOVE: function handleMoveTab(tabId) {
    tabId = tabId.tabId;
    const tmp3 = tabsExperimentEnabled;
    if (tmp3) {
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
        const tmp8 = _slicedToArray(items1, 2);
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.max(tmp8[0], Math.min(tmp2, tmp8[1]));
        const tmp7 = _slicedToArray;
        if (findIndexResult === bound) {
          return false;
        } else {
          const items2 = [];
          HermesBuiltin.arraySpread(items2, tabs, 0);
          items2.splice(bound, 0, tmp7(items2.splice(findIndexResult, 1), 1)[0]);
          tabs = items2;
        }
      }
    } else {
      return false;
    }
  },
  CHANNEL_TABS_SET_PINNED: function handleSetPinned(arg0) {
    let closure_129_0;
    let pinned;
    ({ tabId: closure_129_0, pinned } = arg0);
    const found = tabs.find((id) => id.id === closure_1_0);
    const tmp3 = tabsExperimentEnabled;
    if (tmp3) {
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
    }
    return false;
  },
  CHANNEL_TABS_BACK: f100308,
  CHANNEL_TABS_FORWARD: f100308,
  CHANNEL_TABS_NAVIGATE_ROUTE: f100308,
  CHANNEL_SELECT: f100308,
  CHANNEL_DELETE: handleChannelDelete,
  CONNECTION_OPEN: function handleConnectionOpen() {
    c16 = true;
    const obj = TabsExperiment;
    tabsExperimentEnabled = obj.getTabsExperimentEnabled("ChannelTabsStore.handleConnectionOpen");
    let flag = tabsExperimentEnabled !== tabsExperimentEnabled;
    if (flag) {
      if (tabsExperimentEnabled) {
        tabsExperimentEnabled = c16;
      }
      flag = true;
      if (tabsExperimentEnabled) {
        initializeTabs();
        flag = true;
      }
    }
    let tmp4 = flag;
    if (!tmp4) {
      tmp4 = tabsExperimentEnabled && initializeTabs();
      const tmp5 = tabsExperimentEnabled && initializeTabs();
    }
    return tmp4;
  },
  THREAD_DELETE: handleChannelDelete,
  LOGOUT: function handleLogout() {
    let closure_10 = [];
    activeTabId = null;
    let c12 = null;
    new Set();
    closure_19 = [];
    closure_23.overwriteHistory({});
  }
};
let f55667 = () => {
  let c12;
  const found = closure_10.find(f100320);
  let flag = false;
  if (closure_18) {
    flag = false;
    if (null != found) {
      const sum = found.index + -1;
      f55667 = sum;
      let closure_1 = tmp4;
      flag = false;
      if (null != found.entries[sum]) {
        let hasItem = null != closure_11;
        if (hasItem) {
          tabId = undefined;
          if (tabId != null) {
            tabId = tabId.tabId;
          }
          hasItem = tabId === closure_11;
        }
        if (hasItem) {
          hasItem = set.has(closure_11);
        }
        if (!hasItem) {
          tabId = null;
        }
        closure_10 = closure_10.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: id.id, pinned: true === id.pinned, entries, index: f55668 };
            entries = id.entries;
            const merged = Object.assign(closure_1);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
  }
  return flag;
};
let f55668 = () => {
  let c12;
  const found = closure_10.find(f100320);
  let flag = false;
  if (closure_18) {
    flag = false;
    if (null != found) {
      const sum = found.index + 1;
      f55668 = sum;
      let closure_1 = tmp4;
      flag = false;
      if (null != found.entries[sum]) {
        let hasItem = null != closure_11;
        if (hasItem) {
          tabId = undefined;
          if (tabId != null) {
            tabId = tabId.tabId;
          }
          hasItem = tabId === closure_11;
        }
        if (hasItem) {
          hasItem = set.has(closure_11);
        }
        if (!hasItem) {
          tabId = null;
        }
        closure_10 = closure_10.map((id) => {
          let entries;
          let tmp = id;
          if (id.id === activeTabId) {
            const obj = { id: id.id, pinned: true === id.pinned, entries, index: f55668 };
            entries = id.entries;
            const merged = Object.assign(closure_1);
            tmp = obj;
          }
          return tmp;
        });
      }
    }
  }
  return flag;
};
function handleNavigateRoute(routePath) {
  const obj = { kind: "route", routePath: routePath.routePath, routeLabel: routePath.routeLabel };
  return navigateTo(obj);
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ channelId, guildId } = arg0);
  let tmp2 = null;
  const tmp = navigateTo;
  if (null != channelId) {
    tmp2 = null;
    if (!isStaticChannelRoute(channelId)) {
      const obj = { kind: "channel", channelId, guildId };
      if (guildId == null) {
        guildId = null;
      }
      tmp2 = obj;
    }
  }
  return tmp(tmp2);
}
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
