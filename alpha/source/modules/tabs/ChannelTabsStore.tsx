// Module ID: 10084
// Function ID: 10085
// Name: ChannelTabsStore
// Dependencies: [32, 1245, 4950, 4816, 4946, 1386, 1071, 4769, 10085, 1358, 5670, 10086, 504, 572, 2]

// Module 10084 (ChannelTabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import ChannelConstants from "ChannelConstants" /* 4769 */;
import FrecencyDefault from "Frecency" /* 5670 */;
import TabsExperimentDefault from "TabsExperiment" /* 10085 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 10086 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4950 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, tabs;

const f96644 = (arg0) => {
  const tmp = handleChannelSelect(arg0);
  const found = tabs.find((id) => id.id === closure_1_12);
  const hasItem = null != found && set.has(found.id) && setFirstPage(found);
  return false !== tmp || hasItem;
};
const f96650 = (pinned) => pinned.pinned;
const f96651 = (pinned) => !pinned.pinned;
const f96653 = (id) => id.id === closure_1_12;
function pruneOpenedChannels() {
  set = new Set(closure_22.frequently);
  const keys = Object.keys(closure_22.usageHistory);
  for (const item10017 of keys) {
    if (!set.has(item10017)) {
      delete closure_22.usageHistory[item10017];
    }
    continue;
  }
}
function setFirstPage(found) {
  if ("route" === found.kind) {
    if (found.routePath === Routes.FRIENDS) {
      set.add(found.id);
      flag = false;
    }
    return flag;
  }
  set.delete(found.id);
  let tmp3 = "channel" !== found.kind || isStaticChannelRoute(found.channelId);
  if (!tmp3) {
    let enabled = flag;
    if (enabled) {
      const obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore.setFirstPage" }).enabled;
    }
    if (enabled) {
      const obj2 = utils_PlatformUtils;
      enabled = obj2.isDesktop();
    }
    tmp3 = !enabled;
  }
  flag = !tmp3;
  if (flag) {
    const channelId = found.channelId;
    closure_22.track(channelId);
    pruneOpenedChannels();
    closure_18 = closure_18.filter((channelId) => channelId.channelId !== channelId);
    flag = true;
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
  const obj2 = { id: String(+closure_14), pinned: false, entries: substr1, index: substr1.length - 1 };
  closure_14 = tmp13 + 1;
  let merged = Object.assign(routeTabForLocation);
  return obj2;
}
function navigateTo(routeTabForLocation1, PUSH) {
  let closure_11;
  let obj5;
  let closure_15 = null;
  let enabled = flag;
  if (enabled) {
    const obj2 = { location: PUSH };
    const obj = TabsExperimentDefault;
    enabled = obj.getConfig(obj2).enabled;
  }
  if (enabled) {
    const obj3 = require("utils/PlatformUtils");
    enabled = obj3.isDesktop();
  }
  if (enabled) {
    if (null != routeTabForLocation1) {
      let id;
      if (0 === tabs.length) {
        const tmp35 = createTab(routeTabForLocation1);
        const items = [tmp35];
        tabs = items;
        id = tmp35.id;
      } else {
        const found = tabs.find((id) => id.id === id);
        let tmp10 = null != found;
        if (tmp10) {
          const obj4 = require("ChannelTabRoutes");
          tmp10 = !obj4.isSameTabLocation(found, routeTabForLocation1);
        }
        if (tmp10) {
          let hasItem = null != id;
          if (hasItem) {
            let tabId;
            if (obj5 != null) {
              tabId = obj5.tabId;
            }
            hasItem = tabId === id;
          }
          if (hasItem) {
            hasItem = set.has(id);
          }
          if (!hasItem) {
            obj5 = null;
          }
          if (found.pinned) {
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
                closure_15 = id;
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
                const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.filter(f96650), 0);
                HermesBuiltin.arraySpread(items1, mapped.filter(f96651), arraySpreadResult);
                _require = routeTabForLocation1;
                tabs = items1.map((id) => {
                  let diff;
                  if (id.id !== id) {
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
            const tmp23 = createTab(routeTabForLocation1);
            const items2 = [];
            items2[HermesBuiltin.arraySpread(items2, tabs, 0)] = tmp23;
            tabs = items2;
            if (null != id) {
              obj5 = { tabId: tmp23.id, openerId: id, survivesSwitchToOpener: true };
            }
            id = tmp23.id;
          } else {
            _require = routeTabForLocation1;
            tabs = tabs.map((id) => {
              let diff;
              if (id.id !== id) {
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
        return tmp10;
      }
    }
  }
  return false;
}
function handleChannelDelete(channel) {
  let c13;
  let closure_11;
  channel = channel.channel;
  let isStrandedBackgroundTab;
  let enabled = flag;
  if (enabled) {
    const obj = isStrandedBackgroundTab(10085);
    enabled = obj.getConfig({ location: "ChannelTabsStore.handleChannelDelete" }).enabled;
  }
  if (enabled) {
    const obj2 = channel(1358);
    enabled = obj2.isDesktop();
  }
  if (enabled) {
    isStrandedBackgroundTab = function isStrandedBackgroundTab(dependencyMap) {
      return "channel" === dependencyMap.kind && dependencyMap.channelId === channel.id && dependencyMap.id !== activeTabId;
    };
    if (tabs.some(isStrandedBackgroundTab)) {
      const _Set = Set;
      const found = tabs.filter(isStrandedBackgroundTab);
      const self = this;
      const self2 = this;
      set = new Set(found.map((id) => id.id));
      let tmp10 = null != _null;
      if (tmp10) {
        const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
        tmp10 = hasItem;
      }
      if (tmp10) {
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
const unpackModuleId = [];
let activeTabId = null;
let c13 = null;
let closure_14 = 1;
let c15 = null;
let c16 = false;
let flag = false;
let closure_18 = [];
let set = new Set();
let frequently = null;
let closure_21 = [];
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
const authStore5 = tmp3;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelTabsStore extends PersistedStore {
  initialize(enabled) {
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
    this.syncWith(items, () => flag);
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
    const items1 = [...mapped.filter(f96650), ...mapped.filter(f96651)];
    tabs = items1;
    activeTabId = undefined;
    if (enabled != null) {
      activeTabId = enabled.activeTabId;
    }
    if (activeTabId == null) {
      activeTabId = null;
    }
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
    const overwriteHistory = closure_22.overwriteHistory;
    if (enabled != null) {
      openedChannels = enabled.openedChannels;
    }
    overwriteHistory(readSavedUsages(openedChannels));
    pruneOpenedChannels();
  }
  getState() {
    const obj = {};
    const entries = Object.entries(closure_22.usageHistory);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let obj3 = { totalUses: null, recentUses: null };
      ({ totalUses: obj2.totalUses, recentUses: obj2.recentUses } = tmp5[1]);
      obj[tmp5[0]] = obj3;
      continue;
    }
    return { tabs, activeTabId, enabled: flag, openedChannels: obj };
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
      enabled = obj.getConfig({ location: "ChannelTabsStore.isEnabled" }).enabled;
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
      enabled = obj.getConfig({ location: "ChannelTabsStore.isTabBarVisible" }).enabled;
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
  getRecentlyClosed() {
    return closure_18;
  }
  getFrequentlyOpenedChannelIds() {
    frequently = usageHistory.frequently;
    if (frequently !== frequently) {
      closure_21 = frequently.filter((item) => {
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
    return closure_21;
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
let obj2 = {
  CHANNEL_TABS_OPEN: function handleOpenTab(location) {
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
      let obj4;
      const _location = location.location;
      const tmp11 = createTab;
      if ("route" === _location.kind) {
        const obj = { kind: "route", routePath: null, routeLabel: null };
        ({ routePath: obj3.routePath, routeLabel: obj3.routeLabel } = _location);
        obj4 = obj;
      } else {
        obj4 = { kind: "channel", channelId: null, guildId: null };
        ({ channelId: obj2.channelId, guildId: obj2.guildId } = _location);
      }
      const tmp11Result = tmp11(obj4, undefined === location.sourceTabId ? activeTabId : location.sourceTabId);
      const items = [];
      items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp11Result;
      tabs = items;
      if (null == activeTabId) {
        activeTabId = tmp11Result.id;
      } else if (true !== location.background) {
        let c13 = { tabId: tmp11Result.id, openerId: activeTabId, survivesSwitchToOpener: false };
        const obj7 = { tabId: tmp11Result.id, openerId: activeTabId, survivesSwitchToOpener: false };
        activeTabId = tmp11Result.id;
      }
      setFirstPage(tmp11Result);
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
      let tmp20 = null != _null;
      if (tmp20) {
        const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
        tmp20 = hasItem;
      }
      if (tmp20) {
        _null = null;
      }
      set.delete(tabs[findIndexResult].id);
      if ("channel" === tabs[findIndexResult].kind) {
        let enabled = flag;
        if (enabled) {
          const obj3 = TabsExperimentDefault;
          enabled = obj3.getConfig({ location: "ChannelTabsStore.recordClosedTab" }).enabled;
        }
        if (enabled) {
          const obj4 = utils_PlatformUtils;
          enabled = obj4.isDesktop();
        }
        if (enabled) {
          const channelId = tmp36.channelId;
          const _Date = Date;
          const items2 = [{ channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() }];
          const obj = { channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() };
          HermesBuiltin.arraySpread(items2, closure_18.filter((channelId) => channelId.channelId !== channelId), 1);
          closure_18 = items2.slice(0, 10);
        }
      }
    }
  },
  CHANNEL_TABS_SET_ACTIVE: function handleSetActiveTab(tabId) {
    tabId = tabId.tabId;
    if (activeTabId === tabId) {
      return false;
    } else if (null == tabs.find((id) => id.id === tabId)) {
      return false;
    } else {
      if (null != _null) {
        let tmp7;
        let tmp4 = activeTabId === _null.tabId;
        if (tmp4) {
          tmp7 = tabId === _null.openerId;
        } else {
          tmp7 = activeTabId === _null.openerId && tabId === _null.tabId;
        }
        let tmp10 = !tmp7;
        if (tmp7) {
          if (tmp4) {
            tmp4 = !_null.survivesSwitchToOpener;
          }
          tmp10 = tmp4;
        }
        if (tmp10) {
          _null = null;
        }
      }
      activeTabId = tabId;
    }
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
  CHANNEL_TABS_BACK: f96644,
  CHANNEL_TABS_FORWARD: f96644,
  CHANNEL_TABS_SET_ENABLED: function handleSetEnabled(enabled) {
    let guildId;
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
            enabled2 = obj.getConfig({ location: "ChannelTabsStore.handleSetEnabled" }).enabled;
          }
          if (enabled2) {
            const obj2 = utils_PlatformUtils;
            enabled2 = obj2.isDesktop();
          }
          tmp3 = enabled2;
        }
        if (tmp3) {
          const _window = window;
          const obj3 = ChannelTabRoutes;
          let routeTabForLocation = obj3.getRouteTabForLocation(window.location);
          if (null == routeTabForLocation) {
            const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
            let tmp15 = null;
            if (null != currentlySelectedChannelId) {
              tmp15 = null;
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                const obj4 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
                guildId = SelectedGuildStore.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                tmp15 = obj4;
              }
            }
            routeTabForLocation = tmp15;
          }
          if (null != routeTabForLocation) {
            const tmp20 = createTab(routeTabForLocation);
            const items = [tmp20];
            tabs = items;
            activeTabId = tmp20.id;
          }
        }
      } else {
        tabs = [];
        activeTabId = null;
        let c13 = null;
      }
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: f96644,
  CHANNEL_SELECT: f96644,
  CHANNEL_DELETE: handleChannelDelete,
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c13;
    let closure_11;
    let guildId;
    let guildId1;
    c16 = true;
    let enabled = flag;
    let tmp = c16;
    if (flag) {
      let obj = TabsExperimentDefault;
      enabled = obj.getConfig({ location: "ChannelTabsStore.handleConnectionOpen" }).enabled;
    }
    if (enabled) {
      const obj2 = set(1358);
      enabled = obj2.isDesktop();
    }
    if (enabled) {
      let tmp6 = !tmp;
      if (!tmp6) {
        if (0 === tabs.length) {
          const _window2 = window;
          const obj12 = set(10086);
          let routeTabForLocation = obj12.getRouteTabForLocation(window.location);
          if (null == routeTabForLocation) {
            const currentlySelectedChannelId = SelectedChannelStore.getCurrentlySelectedChannelId();
            let tmp10 = null;
            if (null != currentlySelectedChannelId) {
              tmp10 = null;
              if (!isStaticChannelRoute(currentlySelectedChannelId)) {
                const obj3 = { kind: "channel", channelId: currentlySelectedChannelId, guildId };
                guildId = SelectedGuildStore.getGuildId();
                if (guildId == null) {
                  guildId = null;
                }
                tmp10 = obj3;
              }
            }
            routeTabForLocation = tmp10;
          }
          let flag2 = null != routeTabForLocation;
          if (flag2) {
            const tmp16 = createTab(routeTabForLocation);
            let items = [tmp16];
            tabs = items;
            let id = tmp16.id;
            flag2 = true;
          }
          return flag2;
        }
      }
      const length = tabs.length;
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      const obj4 = UserStore;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      let num3 = 9;
      if (true === isStaffResult) {
        num3 = 25;
      }
      let diff = length - num3;
      let flag3 = false;
      if (diff > 0) {
        const _Set = Set;
        const found = tabs.filter((id) => id.id !== id);
        let substr = found.slice(-diff);
        const self = this;
        const self2 = this;
        set = new Set(substr.map((id) => id.id));
        tabs = tabs.filter((id) => !set.has(id.id));
        let tmp24 = null != _null;
        if (tmp24) {
          const hasItem = set.has(_null.tabId) || set.has(_null.openerId);
          tmp24 = hasItem;
        }
        flag3 = true;
        if (tmp24) {
          _null = null;
          flag3 = true;
        }
      }
      if (tmp6) {
        const _window = window;
        const obj6 = set(10086);
        let routeTabForLocation1 = obj6.getRouteTabForLocation(window.location);
        if (null == routeTabForLocation1) {
          const currentlySelectedChannelId1 = SelectedChannelStore.getCurrentlySelectedChannelId();
          let tmp31 = null;
          if (null != currentlySelectedChannelId1) {
            tmp31 = null;
            if (!isStaticChannelRoute(currentlySelectedChannelId1)) {
              const obj5 = { kind: "channel", channelId: currentlySelectedChannelId1, guildId: guildId1 };
              guildId1 = SelectedGuildStore.getGuildId();
              if (guildId1 == null) {
                guildId1 = null;
              }
              tmp31 = obj5;
            }
          }
          routeTabForLocation1 = tmp31;
        }
        if (routeTabForLocation1 == null) {
          const obj7 = { pathname: DefaultRouteStore.defaultRoute };
          const tmp25Result = set(10086);
          routeTabForLocation1 = tmp25Result.getRouteTabForLocation(obj7);
        }
        let flag4 = false;
        if (null != routeTabForLocation1) {
          const atResult = tabs.at(-1);
          if (null == atResult) {
            const tmp47 = createTab(routeTabForLocation1, null);
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, tabs, 0)] = tmp47;
            tabs = items1;
            id = tmp47.id;
            flag4 = true;
          } else {
            if (atResult.pinned) {
              const currentUser1 = obj4.getCurrentUser();
              let isStaffResult1;
              if (currentUser1 != null) {
                isStaffResult1 = currentUser1.isStaff();
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
              const arraySpreadResult = HermesBuiltin.arraySpread(items2, mapped.filter(f96650), 0);
              HermesBuiltin.arraySpread(items2, mapped.filter(f96651), arraySpreadResult);
              tabs = items2;
            }
            flag4 = true;
            const tmp25Result2 = set(10086);
            if (!tmp25Result2.isSameTabLocation(atResult, routeTabForLocation1)) {
              tabs = tabs.map((id) => {
                let diff;
                if (id.id !== id) {
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
              flag4 = true;
            }
          }
        }
        tmp6 = flag4;
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
    let closure_11 = [];
    activeTabId = null;
    let c13 = null;
    new Set();
    closure_18 = [];
    closure_22.overwriteHistory({});
  }
};
let f52163 = () => {
  let c13;
  const found = closure_11.find(f96653);
  flag = false;
  if (null != found) {
    const sum = found.index + -1;
    f52163 = sum;
    let closure_1 = tmp3;
    flag = false;
    if (null != found.entries[sum]) {
      let hasItem = null != closure_12;
      if (hasItem) {
        tabId = undefined;
        if (tabId != null) {
          tabId = tabId.tabId;
        }
        hasItem = tabId === closure_12;
      }
      if (hasItem) {
        hasItem = set.has(closure_12);
      }
      if (!hasItem) {
        tabId = null;
      }
      closure_11 = closure_11.map((id) => {
        let entries;
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { id: id.id, pinned: true === id.pinned, entries, index: f52164 };
          entries = id.entries;
          const merged = Object.assign(closure_1);
          tmp = obj;
        }
        return tmp;
      });
    }
  }
  return flag;
};
let f52164 = () => {
  let c13;
  const found = closure_11.find(f96653);
  flag = false;
  if (null != found) {
    const sum = found.index + 1;
    f52164 = sum;
    let closure_1 = tmp3;
    flag = false;
    if (null != found.entries[sum]) {
      let hasItem = null != closure_12;
      if (hasItem) {
        tabId = undefined;
        if (tabId != null) {
          tabId = tabId.tabId;
        }
        hasItem = tabId === closure_12;
      }
      if (hasItem) {
        hasItem = set.has(closure_12);
      }
      if (!hasItem) {
        tabId = null;
      }
      closure_11 = closure_11.map((id) => {
        let entries;
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { id: id.id, pinned: true === id.pinned, entries, index: f52164 };
          entries = id.entries;
          const merged = Object.assign(closure_1);
          tmp = obj;
        }
        return tmp;
      });
    }
  }
  return flag;
};
function handleNavigateRoute(routePath) {
  const obj = { kind: "route", routePath: routePath.routePath, routeLabel: routePath.routeLabel };
  return navigateTo(obj, "ChannelTabsStore.handleNavigateRoute");
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
  return tmp(tmp2, "ChannelTabsStore.handleChannelSelect");
}
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
