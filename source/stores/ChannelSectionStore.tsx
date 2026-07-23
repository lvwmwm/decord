// Module ID: 5659
// Function ID: 48512
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 5660, 1348, 1838, 3758, 1906, 3947, 1849, 653, 1355, 482, 5661, 1207, 21, 4368, 566, 686, 2]
// Exports: isViewChannelSidebar

// Module 5659 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import sum from "sum";
import reportDevtoolsEvent from "reportDevtoolsEvent";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "set";
import { Permissions } from "sum";
import set from "_possibleConstructorReturn";

let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function parseChannelId(baseChannelId) {
  if (null == baseChannelId) {
    return null;
  } else if (callback3(baseChannelId)) {
    guildId = guildId.getGuildId();
    let tmp4 = null;
    if (null != guildId) {
      tmp4 = callback4(baseChannelId, guildId);
    }
    return tmp4;
  } else {
    return baseChannelId;
  }
}
function toggleSection(closure_23) {
  let flag = false;
  if (c27) {
    c27 = false;
    flag = true;
  }
  const tmp3 = parseChannelId(channelId.getChannelId());
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = tmp3 in closure_25;
  }
  if (tmp4) {
    delete tmp[tmp2];
    flag = true;
  }
  if (!flag) {
    let tmp7 = !closure_23;
  } else {
    tmp7 = closure_23;
  }
  return tmp7;
}
function handlePermissionsChange() {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp17 = tmp6;
      let tmp18 = dependencyMap;
      let tmp19 = dependencyMap[tmp6];
      let tmp20 = require;
      let tmp21 = dependencyMap;
      if (tmp19.type === require(5661) /* SidebarType */.SidebarType.VIEW_THREAD) {
        let tmp9 = channel;
        channel = channel.getChannel(tmp19.channelId);
        let canResult = null != channel;
        if (canResult) {
          let tmp12 = closure_12;
          let tmp13 = Permissions;
          canResult = closure_12.can(Permissions.VIEW_CHANNEL, channel);
        }
        let tmp14 = channel;
        if (canResult) {
          continue;
        } else {
          let tmp15 = dependencyMap;
          delete tmp2[tmp3];
          flag = true;
          let tmp16 = channel;
          continue;
        }
        continue;
      } else {
        let tmp7 = require;
        let tmp8 = dependencyMap;
      }
      continue;
    }
  }
  return flag2;
}
function setIsSearchSidebarOpen() {
  let hasSearchStateResult = null != c28;
  if (hasSearchStateResult) {
    hasSearchStateResult = closure_9.hasSearchState(c28);
  }
  if (hasSearchStateResult === c27) {
    return false;
  } else {
    c27 = hasSearchStateResult;
  }
}
({ ChannelSections: closure_16, ComponentActions: closure_17 } = ME);
({ isStaticChannelRoute: closure_18, buildGuildStaticChannelId: closure_19 } = set);
let c21 = false;
let c22 = false;
let c23 = false;
let c24 = true;
let closure_25 = {};
let closure_26 = {};
let c27 = false;
let c28 = null;
let tmp4 = ((PersistedStore) => {
  class ChannelSectionStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ChannelSectionStore);
      obj = outer1_6(ChannelSectionStore);
      tmp2 = outer1_5;
      if (outer1_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ChannelSectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(isMembersOpen) {
      const self = this;
      if (null != isMembersOpen) {
        isMembersOpen = isMembersOpen.isMembersOpen;
        const outer1_21 = null != isMembersOpen && isMembersOpen;
        const isSummariesOpen = isMembersOpen.isSummariesOpen;
        const outer1_22 = null != isSummariesOpen && isSummariesOpen;
        const isProfileOpen = isMembersOpen.isProfileOpen;
        const outer1_24 = null == isProfileOpen || isProfileOpen;
        let sidebars = isMembersOpen.sidebars;
        if (null == sidebars) {
          sidebars = {};
        }
        const outer1_25 = sidebars;
        let guildSidebars = isMembersOpen.guildSidebars;
        if (null == guildSidebars) {
          guildSidebars = {};
        }
        const outer1_26 = guildSidebars;
      }
      const items = [outer1_9];
      self.syncWith(items, outer1_33);
      const items1 = [outer1_12];
      self.syncWith(items1, outer1_32);
      self.waitFor(outer1_10, outer1_8, outer1_11, outer1_12, outer1_9, outer1_13, outer1_14, outer1_15);
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { isMembersOpen: outer1_21, isSummariesOpen: outer1_22, isProfileOpen: outer1_24, sidebars: outer1_25, guildSidebars: outer1_26 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSection",
    value(arg0, arg1) {
      if (outer1_27) {
        return outer1_16.SEARCH;
      } else {
        const tmp3 = outer1_30(arg0);
        if (null != tmp3) {
          if (null != outer1_25[tmp3]) {
            let MEMBERS = outer1_16.SIDEBAR_CHAT;
          }
          return MEMBERS;
        }
        if (arg1) {
          if (outer1_24) {
            MEMBERS = outer1_16.PROFILE;
          }
        }
        if (outer1_22) {
          MEMBERS = outer1_16.SUMMARIES;
        } else if (outer1_21) {
          MEMBERS = outer1_16.MEMBERS;
        } else {
          MEMBERS = outer1_23 ? tmp11.CONVERSATIONS : tmp11.NONE;
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSidebarState",
    value(arg0) {
      let tmp;
      const tmp2 = outer1_30(arg0);
      if (null != tmp2) {
        tmp = outer1_25[tmp2];
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getGuildSidebarState",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = outer1_26[arg0];
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getCurrentSidebarChannelId",
    value(arg0) {
      const tmp = outer1_30(arg0);
      if (null == tmp) {
        return null;
      } else if (outer1_27) {
        return null;
      } else {
        let tmp4 = null;
        if (null != outer1_25[tmp]) {
          if (tmp3.type !== ChannelSectionStore(outer1_2[16]).SidebarType.VIEW_THREAD) {
            if (tmp3.type !== ChannelSectionStore(outer1_2[16]).SidebarType.VIEW_CHANNEL) {
              let channelId = null;
            }
            tmp4 = channelId;
          }
          channelId = tmp3.channelId;
        }
        return tmp4;
      }
    }
  };
  items[6] = {
    key: "getCurrentSidebarMessageId",
    value(arg0) {
      const tmp = outer1_30(arg0);
      if (null == tmp) {
        return null;
      } else if (outer1_27) {
        return null;
      } else {
        let tmp4 = null;
        if (null != outer1_25[tmp]) {
          if (tmp3.type !== ChannelSectionStore(outer1_2[16]).SidebarType.VIEW_THREAD) {
            if (tmp3.type !== ChannelSectionStore(outer1_2[16]).SidebarType.VIEW_CHANNEL) {
              let tmp11 = null;
            }
            tmp4 = tmp11;
          }
          const details = tmp3.details;
          let initialMessageId;
          if (null != details) {
            initialMessageId = details.initialMessageId;
          }
          tmp11 = initialMessageId;
        }
        return tmp4;
      }
    }
  };
  items[7] = {
    key: "getCurrentSearchContextId",
    value() {
      return outer1_28;
    }
  };
  return callback(ChannelSectionStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "ChannelSectionStore";
tmp4.persistKey = "ChannelSectionStore2";
tmp4 = new tmp4(require("dispatcher"), {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    return setIsSearchSidebarOpen();
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (c27) {
      const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
      ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
    }
    if (closure_22) {
      closure_22 = toggleSection(closure_22);
    }
    if (closure_23) {
      closure_23 = toggleSection(closure_23);
    }
    closure_21 = toggleSection(closure_21);
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    if (!closure_24) {
      const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
      ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
    }
    closure_24 = toggleSection(closure_24);
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function handleChannelToggleSummariesSection() {
    if (closure_21) {
      closure_21 = toggleSection(closure_21);
    }
    if (closure_23) {
      closure_23 = toggleSection(closure_23);
    }
    closure_22 = toggleSection(closure_22);
  },
  CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function handleChannelToggleConversationsSection() {
    if (c27) {
      const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
      ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
    }
    let c21 = false;
    let c22 = false;
    closure_23 = toggleSection(closure_23);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c23;
    if (flag) {
      if (c27) {
        const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
        ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
      }
      let c21 = false;
      let c22 = false;
      c23 = true;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_VIEW_CHANNEL: function handleSidebarViewChannel(arg0) {
    let baseChannelId;
    let channelId;
    let details;
    let sidebarType;
    ({ sidebarType, baseChannelId } = arg0);
    let c27 = false;
    ({ channelId, details } = arg0);
    const tmp = parseChannelId(baseChannelId);
    if (null == tmp) {
      return false;
    } else {
      let obj = { type: sidebarType, channelId, details };
      let tmp4 = obj;
      if (sidebarType === require(5661) /* SidebarType */.SidebarType.VIEW_MOD_REPORT) {
        obj = {};
        const merged = Object.assign(obj);
        obj["baseChannelId"] = baseChannelId;
        tmp4 = obj;
      }
      closure_25[tmp] = tmp4;
      return true;
    }
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(guildId) {
    let details;
    let sidebarType;
    guildId = guildId.guildId;
    let c27 = false;
    ({ sidebarType, details } = guildId);
    const tmp = parseChannelId(guildId.baseChannelId);
    let flag = null != tmp;
    if (flag) {
      const obj = { type: sidebarType, baseChannelId: tmp, guildId, details };
      closure_26[guildId] = obj;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_CREATE_THREAD: function handleCreateThread(parentChannelId) {
    let _location;
    let parentMessageId;
    parentChannelId = parentChannelId.parentChannelId;
    let c27 = false;
    ({ parentMessageId, location: _location } = parentChannelId);
    const tmp = parseChannelId(parentChannelId);
    if (null != tmp) {
      const obj = { type: require(5661) /* SidebarType */.SidebarType.CREATE_THREAD, parentChannelId, parentMessageId, location: _location };
      closure_25[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    if (null != parseChannelId(baseChannelId.baseChannelId)) {
      delete tmp[tmp2];
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(arg0) {
    let flag = null != table[arg0.guildId];
    if (flag) {
      delete tmp[tmp2];
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (channel.id in dependencyMap) {
      const id = channel.id;
      delete tmp2[tmp];
      return true;
    } else {
      let flag = false;
      let flag2 = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp3] !== undefined) {
          let tmp15 = tmp10;
          let tmp16 = dependencyMap;
          let tmp17 = dependencyMap[tmp10];
          let tmp13 = null != tmp17;
          if (tmp13) {
            let tmp11 = require;
            let tmp12 = dependencyMap;
            tmp13 = tmp17.type === require(5661) /* SidebarType */.SidebarType.VIEW_CHANNEL;
          }
          if (tmp13) {
            tmp13 = tmp17.channelId === channel.id;
          }
          if (!tmp13) {
            continue;
          } else {
            let tmp14 = dependencyMap;
            delete tmp4[tmp5];
            flag = true;
            continue;
          }
          continue;
        }
      }
      return flag2;
    }
    const tmp6 = dependencyMap;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (tmp) {
      let c21 = false;
      let c22 = false;
      let c23 = false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12;
      if (tmp5) {
        tmp5 = tmp12.type === require(5661) /* SidebarType */.SidebarType.CREATE_THREAD;
      }
      if (tmp5) {
        let obj = importDefault(21);
        tmp5 = tmp12.parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        obj = { type: require(5661) /* SidebarType */.SidebarType.VIEW_THREAD, channelId: channel.id };
        dependencyMap[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap[channel.parent_id]) {
      if (tmp3.type === require(5661) /* SidebarType */.SidebarType.VIEW_THREAD) {
        if (tmp3.channelId === channel.id) {
          const parent_id = channel.parent_id;
          delete tmp2[tmp];
        }
      }
    }
    return false;
  }
});
let result = set.fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default tmp4;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [require(5661) /* SidebarType */.SidebarType.VIEW_CHANNEL, require(5661) /* SidebarType */.SidebarType.VIEW_THREAD, require(5661) /* SidebarType */.SidebarType.VIEW_MESSAGE_REQUEST, require(5661) /* SidebarType */.SidebarType.VIEW_MOD_REPORT];
  return items.includes(type.type);
};
