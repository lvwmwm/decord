// Module ID: 5655
// Function ID: 48469
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isViewChannelSidebar

// Module 5655 (_isNativeReflectConstruct)
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
    const guildId = guildId.getGuildId();
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
  if (closure_27) {
    closure_27 = false;
    flag = true;
  }
  const tmp = parseChannelId(channelId.getChannelId());
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp in closure_25;
  }
  if (tmp2) {
    delete r2[r3];
    flag = true;
  }
  if (!flag) {
    let tmp5 = !closure_23;
  } else {
    tmp5 = closure_23;
  }
  return tmp5;
}
function handlePermissionsChange() {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp15 = tmp4;
      let tmp16 = closure_25;
      let tmp17 = closure_25[tmp4];
      let tmp18 = arg1;
      let tmp19 = dependencyMap;
      if (tmp17.type === arg1(dependencyMap[16]).SidebarType.VIEW_THREAD) {
        let tmp7 = channel;
        let channel = channel.getChannel(tmp17.channelId);
        let canResult = null != channel;
        if (canResult) {
          let tmp10 = closure_12;
          let tmp11 = Permissions;
          canResult = closure_12.can(Permissions.VIEW_CHANNEL, channel);
        }
        let tmp12 = channel;
        if (canResult) {
          continue;
        } else {
          let tmp13 = closure_25;
          delete r14[r15];
          flag = true;
          let tmp14 = channel;
          // continue
        }
        continue;
      } else {
        let tmp5 = arg1;
        let tmp6 = dependencyMap;
      }
      continue;
    }
  }
  return flag2;
}
function setIsSearchSidebarOpen() {
  let hasSearchStateResult = null != closure_28;
  if (hasSearchStateResult) {
    hasSearchStateResult = closure_9.hasSearchState(closure_28);
  }
  if (hasSearchStateResult === closure_27) {
    return false;
  } else {
    closure_27 = hasSearchStateResult;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
({ ChannelSections: closure_16, ComponentActions: closure_17 } = arg1(dependencyMap[13]));
const tmp2 = arg1(dependencyMap[13]);
({ isStaticChannelRoute: closure_18, buildGuildStaticChannelId: closure_19 } = arg1(dependencyMap[14]));
const Permissions = arg1(dependencyMap[15]).Permissions;
let closure_21 = false;
let closure_22 = false;
let closure_23 = false;
let closure_24 = true;
let closure_25 = {};
let closure_26 = {};
let closure_27 = false;
let closure_28 = null;
let tmp4 = (PersistedStore) => {
  class ChannelSectionStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ChannelSectionStore);
      obj = closure_6(ChannelSectionStore);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelSectionStore;
  callback2(ChannelSectionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(isMembersOpen) {
      const self = this;
      if (null != isMembersOpen) {
        isMembersOpen = isMembersOpen.isMembersOpen;
        let closure_21 = null != isMembersOpen && isMembersOpen;
        const isSummariesOpen = isMembersOpen.isSummariesOpen;
        let closure_22 = null != isSummariesOpen && isSummariesOpen;
        const isProfileOpen = isMembersOpen.isProfileOpen;
        let closure_24 = null == isProfileOpen || isProfileOpen;
        let sidebars = isMembersOpen.sidebars;
        if (null == sidebars) {
          sidebars = {};
        }
        let guildSidebars = isMembersOpen.guildSidebars;
        if (null == guildSidebars) {
          guildSidebars = {};
        }
      }
      const items = [closure_9];
      self.syncWith(items, closure_33);
      const items1 = [closure_12];
      self.syncWith(items1, closure_32);
      self.waitFor(closure_10, closure_8, closure_11, closure_12, closure_9, closure_13, closure_14, closure_15);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { isMembersOpen: closure_21, isSummariesOpen: closure_22, isProfileOpen: closure_24, sidebars: closure_25, guildSidebars: closure_26 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getSection",
    value(arg0, arg1) {
      if (closure_27) {
        return constants.SEARCH;
      } else {
        const tmp3 = callback4(arg0);
        if (null != tmp3) {
          if (null != closure_25[tmp3]) {
            let MEMBERS = constants.SIDEBAR_CHAT;
          }
          return MEMBERS;
        }
        if (arg1) {
          if (closure_24) {
            MEMBERS = constants.PROFILE;
          }
        }
        if (closure_22) {
          MEMBERS = constants.SUMMARIES;
        } else if (closure_21) {
          MEMBERS = constants.MEMBERS;
        } else {
          MEMBERS = closure_23 ? tmp11.CONVERSATIONS : tmp11.NONE;
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSidebarState",
    value(arg0) {
      let tmp;
      const tmp2 = callback4(arg0);
      if (null != tmp2) {
        tmp = closure_25[tmp2];
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getGuildSidebarState",
    value(arg0) {
      let tmp;
      if (null != arg0) {
        tmp = closure_26[arg0];
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getCurrentSidebarChannelId",
    value(arg0) {
      const tmp = callback4(arg0);
      if (null == tmp) {
        return null;
      } else if (closure_27) {
        return null;
      } else {
        let tmp4 = null;
        if (null != closure_25[tmp]) {
          if (tmp3.type !== ChannelSectionStore(closure_2[16]).SidebarType.VIEW_THREAD) {
            if (tmp3.type !== ChannelSectionStore(closure_2[16]).SidebarType.VIEW_CHANNEL) {
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
      const tmp = callback4(arg0);
      if (null == tmp) {
        return null;
      } else if (closure_27) {
        return null;
      } else {
        let tmp4 = null;
        if (null != closure_25[tmp]) {
          if (tmp3.type !== ChannelSectionStore(closure_2[16]).SidebarType.VIEW_THREAD) {
            if (tmp3.type !== ChannelSectionStore(closure_2[16]).SidebarType.VIEW_CHANNEL) {
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
      return closure_28;
    }
  };
  return callback(ChannelSectionStore, items);
}(importDefault(dependencyMap[20]).PersistedStore);
tmp4.displayName = "ChannelSectionStore";
tmp4.persistKey = "ChannelSectionStore2";
tmp4 = new tmp4(importDefault(dependencyMap[21]), {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    return setIsSearchSidebarOpen();
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (closure_27) {
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
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
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
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
    if (closure_27) {
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
      ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
    }
    let closure_21 = false;
    let closure_22 = false;
    closure_23 = toggleSection(closure_23);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !closure_23;
    if (flag) {
      if (closure_27) {
        const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
      }
      let closure_21 = false;
      let closure_22 = false;
      closure_23 = true;
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
    let closure_27 = false;
    ({ channelId, details } = arg0);
    const tmp = parseChannelId(baseChannelId);
    if (null == tmp) {
      return false;
    } else {
      let obj = { type: sidebarType, channelId, details };
      let tmp4 = obj;
      if (sidebarType === arg1(dependencyMap[16]).SidebarType.VIEW_MOD_REPORT) {
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
    let closure_27 = false;
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
    let closure_27 = false;
    ({ parentMessageId, location: _location } = parentChannelId);
    const tmp = parseChannelId(parentChannelId);
    if (null != tmp) {
      const obj = { type: arg1(dependencyMap[16]).SidebarType.CREATE_THREAD, parentChannelId, parentMessageId, location: _location };
      closure_25[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    if (null != parseChannelId(baseChannelId.baseChannelId)) {
      delete r1[r2];
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(arg0) {
    let flag = null != closure_26[arg0.guildId];
    if (flag) {
      delete r1[r2];
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_25) {
      const id = channel.id;
      delete r1[r0];
      return true;
    } else {
      let flag = false;
      let flag2 = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let tmp11 = tmp6;
          let tmp12 = closure_25;
          let tmp13 = closure_25[tmp6];
          let tmp9 = null != tmp13;
          if (tmp9) {
            let tmp7 = arg1;
            let tmp8 = dependencyMap;
            tmp9 = tmp13.type === arg1(dependencyMap[16]).SidebarType.VIEW_CHANNEL;
          }
          if (tmp9) {
            tmp9 = tmp13.channelId === channel.id;
          }
          if (!tmp9) {
            continue;
          } else {
            let tmp10 = closure_25;
            delete r14[r15];
            flag = true;
            // continue
          }
          continue;
        }
      }
      return flag2;
    }
    const tmp2 = closure_25;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (tmp) {
      let closure_21 = false;
      let closure_22 = false;
      let closure_23 = false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12;
      if (tmp5) {
        tmp5 = tmp12.type === arg1(dependencyMap[16]).SidebarType.CREATE_THREAD;
      }
      if (tmp5) {
        let obj = importDefault(dependencyMap[18]);
        tmp5 = tmp12.parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        obj = { type: arg1(dependencyMap[16]).SidebarType.VIEW_THREAD, channelId: channel.id };
        closure_25[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != closure_25[channel.parent_id]) {
      if (tmp.type === arg1(dependencyMap[16]).SidebarType.VIEW_THREAD) {
        if (tmp.channelId === channel.id) {
          const parent_id = channel.parent_id;
          delete r2[r1];
        }
      }
    }
    return false;
  }
});
const obj = {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    return setIsSearchSidebarOpen();
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    if (closure_27) {
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
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
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
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
    if (closure_27) {
      const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
      ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
    }
    let closure_21 = false;
    let closure_22 = false;
    closure_23 = toggleSection(closure_23);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !closure_23;
    if (flag) {
      if (closure_27) {
        const ComponentDispatch = arg1(dependencyMap[17]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.SEARCH_RESULTS_CLOSE);
      }
      let closure_21 = false;
      let closure_22 = false;
      closure_23 = true;
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
    let closure_27 = false;
    ({ channelId, details } = arg0);
    const tmp = parseChannelId(baseChannelId);
    if (null == tmp) {
      return false;
    } else {
      let obj = { type: sidebarType, channelId, details };
      let tmp4 = obj;
      if (sidebarType === arg1(dependencyMap[16]).SidebarType.VIEW_MOD_REPORT) {
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
    let closure_27 = false;
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
    let closure_27 = false;
    ({ parentMessageId, location: _location } = parentChannelId);
    const tmp = parseChannelId(parentChannelId);
    if (null != tmp) {
      const obj = { type: arg1(dependencyMap[16]).SidebarType.CREATE_THREAD, parentChannelId, parentMessageId, location: _location };
      closure_25[tmp] = obj;
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    if (null != parseChannelId(baseChannelId.baseChannelId)) {
      delete r1[r2];
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(arg0) {
    let flag = null != closure_26[arg0.guildId];
    if (flag) {
      delete r1[r2];
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (channel.id in closure_25) {
      const id = channel.id;
      delete r1[r0];
      return true;
    } else {
      let flag = false;
      let flag2 = false;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let tmp11 = tmp6;
          let tmp12 = closure_25;
          let tmp13 = closure_25[tmp6];
          let tmp9 = null != tmp13;
          if (tmp9) {
            let tmp7 = arg1;
            let tmp8 = dependencyMap;
            tmp9 = tmp13.type === arg1(dependencyMap[16]).SidebarType.VIEW_CHANNEL;
          }
          if (tmp9) {
            tmp9 = tmp13.channelId === channel.id;
          }
          if (!tmp9) {
            continue;
          } else {
            let tmp10 = closure_25;
            delete r14[r15];
            flag = true;
            // continue
          }
          continue;
        }
      }
      return flag2;
    }
    const tmp2 = closure_25;
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (tmp) {
      let closure_21 = false;
      let closure_22 = false;
      let closure_23 = false;
    }
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (channel.ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12;
      if (tmp5) {
        tmp5 = tmp12.type === arg1(dependencyMap[16]).SidebarType.CREATE_THREAD;
      }
      if (tmp5) {
        let obj = importDefault(dependencyMap[18]);
        tmp5 = tmp12.parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        obj = { type: arg1(dependencyMap[16]).SidebarType.VIEW_THREAD, channelId: channel.id };
        closure_25[channel.parent_id] = obj;
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != closure_25[channel.parent_id]) {
      if (tmp.type === arg1(dependencyMap[16]).SidebarType.VIEW_THREAD) {
        if (tmp.channelId === channel.id) {
          const parent_id = channel.parent_id;
          delete r2[r1];
        }
      }
    }
    return false;
  }
};
const tmp3 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default tmp4;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [arg1(dependencyMap[16]).SidebarType.VIEW_CHANNEL, arg1(dependencyMap[16]).SidebarType.VIEW_THREAD, arg1(dependencyMap[16]).SidebarType.VIEW_MESSAGE_REQUEST, arg1(dependencyMap[16]).SidebarType.VIEW_MOD_REPORT];
  return items.includes(type.type);
};
