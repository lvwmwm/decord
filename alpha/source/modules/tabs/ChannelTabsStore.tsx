// Module ID: 9982
// Function ID: 9983
// Name: ChannelTabsStore
// Dependencies: [32, 1246, 4860, 4726, 4856, 1388, 1072, 4679, 9983, 1360, 5580, 9984, 9985, 504, 572, 2]

// Module 9982 (ChannelTabsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import FrecencyDefault from "Frecency" /* 5580 */;
import TabsExperimentDefault from "TabsExperiment" /* 9983 */;
import ChannelTabRoutes from "ChannelTabRoutes" /* 9985 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4860 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4726 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4856 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tabs;

const f97898 = (arg0) => {
  const tmp = handleChannelSelect(arg0);
  const found = tabs.find((id) => id.id === closure_1_12);
  const hasItem = null != found && set.has(found.id) && setFirstPage(found);
  return false !== tmp || hasItem;
};
const f97900 = (item) => {
  let closure_0 = item;
  return closure_11.some((id) => id.id === closure_0);
};
const f97906 = (pinned) => pinned.pinned;
const f97907 = (pinned) => !pinned.pinned;
const f97908 = (id) => id.id === closure_1_12;
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
      enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
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
function activateTab(id) {
  const f97899 = (item) => item !== closure_0;
  const tmp2 = null != activeTabId && activeTabId !== id;
  if (tmp2) {
    let closure_0 = activeTabId;
    const items = [activeTabId];
    HermesBuiltin.arraySpread(items, closure_13.filter(f97899), 1);
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
  const items1 = [id, ...closure_13.filter(f97899)];
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
      const arraySpreadResult = HermesBuiltin.arraySpread(items, mapped.filter(f97906), 0);
      HermesBuiltin.arraySpread(items, mapped.filter(f97907), arraySpreadResult);
      let closure_0 = kind2;
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
    let closure_11 = items;
    activateTab(tmp12.id);
    flag = true;
  }
  return flag;
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
      closure_13 = closure_13.filter(f97900);
    }
  } else {
    return false;
  }
}
const Routes = Constants.Routes;
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
const unpackModuleId = [];
let activeTabId = null;
let closure_13 = [];
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
    const items = [...mapped.filter(f97906), ...mapped.filter(f97907)];
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
    let someResult = null == activeTabId;
    if (!someResult) {
      let tmp4 = tabs;
      someResult = tabs.some((id) => id.id === activeTabId);
    }
    if (!someResult) {
      let tmp5 = tabs;
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
    let tmp8 = closure_22;
    const overwriteHistory = closure_22.overwriteHistory;
    if (enabled != null) {
      openedChannels = enabled.openedChannels;
    }
    overwriteHistory(readSavedUsages(openedChannels));
    let tmp11 = pruneOpenedChannels();
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
      let obj2;
      const tmp13 = createTab;
      if ("route" === location.location.kind) {
        obj2 = { kind: "route", routePath: location.location.routePath, routeLabel: location.location.routeLabel };
        const obj = { kind: "route", routePath: location.location.routePath, routeLabel: location.location.routeLabel };
      } else {
        obj2 = { kind: "channel", channelId: location.location.channelId, guildId: location.location.guildId };
      }
      const tmp13Result = tmp13(obj2, undefined === location.sourceTabId ? activeTabId : location.sourceTabId);
      const items = [];
      items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp13Result;
      tabs = items;
      const tmp6 = true === location.background && null != activeTabId;
      if (!tmp6) {
        activateTab(tmp13Result.id);
      }
      setFirstPage(tmp13Result);
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
      const id2 = tmp20.id;
      tabs = tabs.filter((id) => id.id !== tabId);
      closure_13 = closure_13.filter(f97900);
      let channelId;
      set.delete(tabs[findIndexResult].id);
      const tmp21 = activeTabId;
      if ("channel" === tabs[findIndexResult].kind) {
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
          channelId = tmp20.channelId;
          const _Date = Date;
          const items = [{ channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() }];
          const obj3 = { channelId, guildId: tabs[findIndexResult].guildId, closedAt: Date.now() };
          HermesBuiltin.arraySpread(items, closure_18.filter((channelId) => channelId.channelId !== channelId), 1);
          closure_18 = items.slice(0, 10);
        }
      }
      if (id2 === tmp21) {
        const _Math = Math;
        activeTabId = null;
        let id = closure_13[0];
        const tmp15 = activateTab;
        if (id == null) {
          id = tabs[Math.min(Math, findIndexResult, tabs.length - 1)].id;
        }
        tmp15(id);
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
  CHANNEL_TABS_BACK: f97898,
  CHANNEL_TABS_FORWARD: f97898,
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
      }
    }
  },
  CHANNEL_TABS_NAVIGATE_ROUTE: f97898,
  CHANNEL_SELECT: f97898,
  CHANNEL_DELETE: handleChannelDelete,
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_11;
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
        closure_13 = closure_13.filter(f97900);
        flag2 = true;
      }
      if (tmp6) {
        let tmp21;
        let obj9;
        const obj4 = { pathname: DefaultRouteStore.defaultRoute };
        const obj5 = set(9985);
        const routeTabForLocation = obj5.getRouteTabForLocation(obj4);
        const _window = window;
        const obj7 = set(9985);
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
            const tmp45 = createTab(tmp21, null);
            let items = [];
            items[HermesBuiltin.arraySpread(items, tabs, 0)] = tmp45;
            tabs = items;
            activateTab(tmp45.id);
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
              const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped.filter(f97906), 0);
              HermesBuiltin.arraySpread(items1, mapped.filter(f97907), arraySpreadResult);
              tabs = items1;
            }
            flag3 = true;
            const tmp13Result = tmp13(9984);
            if (!tmp13Result.isSameTabLocation(atResult, tmp21)) {
              obj9 = tmp21;
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
    let closure_11 = [];
    activeTabId = null;
    closure_13 = [];
    new Set();
    closure_18 = [];
    closure_22.overwriteHistory({});
  }
};
function handleTabHistoryBack() {
  const found = closure_11.find(f97908);
  flag = false;
  if (null != found) {
    const sum = found.index + -1;
    handleTabHistoryBack = sum;
    let closure_1 = tmp3;
    flag = false;
    if (null != found.entries[sum]) {
      closure_11 = closure_11.map((id) => {
        let entries;
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { id: id.id, pinned: true === id.pinned, entries, index: handleTabHistoryForward };
          entries = id.entries;
          const merged = Object.assign(closure_1);
          tmp = obj;
        }
        return tmp;
      });
    }
  }
  return flag;
}
function handleTabHistoryForward() {
  const found = closure_11.find(f97908);
  flag = false;
  if (null != found) {
    const sum = found.index + 1;
    handleTabHistoryForward = sum;
    let closure_1 = tmp3;
    flag = false;
    if (null != found.entries[sum]) {
      closure_11 = closure_11.map((id) => {
        let entries;
        let tmp = id;
        if (id.id === activeTabId) {
          const obj = { id: id.id, pinned: true === id.pinned, entries, index: handleTabHistoryForward };
          entries = id.entries;
          const merged = Object.assign(closure_1);
          tmp = obj;
        }
        return tmp;
      });
    }
  }
  return flag;
}
function handleNavigateRoute(routePath) {
  let obj3;
  routePath = routePath.routePath;
  c15 = null;
  let enabled = closure_17;
  const routeLabel = routePath.routeLabel;
  if (closure_17) {
    const obj = closure_1(closure_2[8]);
    enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    const obj2 = obj3(closure_2[9]);
    enabled = obj2.isDesktop();
  }
  if (enabled) {
    obj3 = { kind: "route", routePath, routeLabel };
    if (0 === closure_11.length) {
      const tmp14 = closure_26(obj3);
      const items = [tmp14];
      closure_11 = items;
      closure_25(tmp14.id);
    } else {
      const found = closure_11.find((id) => id.id === closure_1_12);
      let tmp7 = null != found;
      if (tmp7) {
        tmp7 = "route" !== found.kind || found.routePath !== routePath;
      }
      if (tmp7) {
        const obj4 = obj3(closure_2[11]);
        if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
          closure_27(obj3);
        } else {
          closure_11 = closure_11.map((id) => {
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
}
function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  let obj3;
  ({ channelId, guildId } = arg0);
  c15 = null;
  let enabled = closure_17;
  if (enabled) {
    const obj = closure_1(closure_2[8]);
    enabled = obj.getConfig({ location: "ChannelTabsStore" }).enabled;
  }
  if (enabled) {
    const obj2 = obj3(closure_2[9]);
    enabled = obj2.isDesktop();
  }
  if (enabled) {
    if (null != channelId) {
      if (!closure_10(channelId)) {
        obj3 = { kind: "channel", channelId, guildId };
        if (guildId == null) {
          guildId = null;
        }
        if (0 === closure_11.length) {
          const tmp14 = closure_26(obj3);
          const items = [tmp14];
          closure_11 = items;
          closure_25(tmp14.id);
        } else {
          const found = closure_11.find((id) => id.id === closure_1_12);
          let tmp7 = null != found;
          if (tmp7) {
            tmp7 = "channel" !== found.kind || found.channelId !== channelId;
          }
          if (tmp7) {
            const obj4 = obj3(closure_2[11]);
            if (obj4.wouldNavigationLeavePinnedTab(found, obj3)) {
              closure_27(obj3);
            } else {
              closure_11 = closure_11.map((id) => {
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
}
const channelTabsStore = new ChannelTabsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/tabs/ChannelTabsStore.tsx");

export default channelTabsStore;
