// Module ID: 6279
// Function ID: 6280
// Name: ChannelSectionStore
// Dependencies: [5502, 5075, 6280, 2072, 2068, 2090, 4809, 2119, 4998, 1392, 1087, 2075, 1098, 6281, 6282, 6283, 1123, 11, 5356, 6284, 504, 1455, 584, 2]
// Exports: isViewChannelSidebar

// Module 6279 (ChannelSectionStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1098 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import shared_PlatformUtils from "shared/PlatformUtils" /* 5356 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6281 */;
import FriendsSidebarExperimentDefault from "FriendsSidebarExperiment" /* 6282 */;
import FriendsSidebarTracking from "FriendsSidebarTracking" /* 6283 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6284 */;
import ApplicationStore from "ApplicationStore" /* 5502 */;
import ExperimentStore from "ExperimentStore" /* 5075 */;
import SearchMessageStore from "SearchMessageStore" /* 6280 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildStore from "GuildStore" /* 2090 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4998 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_16;
let map1;
function setIsFriendsOpen(arg0, trackClose) {
  trackClose = undefined;
  if (trackClose != null) {
    trackClose = trackClose.trackClose;
  }
  let sidebarEnabled = true === trackClose;
  if (sidebarEnabled) {
    const obj = FriendsSidebarExperimentDefault;
    sidebarEnabled = obj.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled ? flag5 : flag4;
  }
  if (sidebarEnabled) {
    sidebarEnabled = !arg0;
  }
  if (sidebarEnabled) {
    const obj2 = FriendsSidebarExperimentDefault;
    sidebarEnabled = obj2.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
  }
  if (sidebarEnabled) {
    const obj3 = { open: false, source: FriendsSidebarTracking.FriendsSidebarToggleSource.EXTERNAL, analyticsLocations: [] };
    const trackFriendsSidebarToggled = FriendsSidebarTracking.trackFriendsSidebarToggled;
    FriendsSidebarTracking;
    const result = trackFriendsSidebarToggled(obj3);
  }
  const obj4 = FriendsSidebarExperimentDefault;
  if (obj4.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled) {
    flag5 = arg0;
  } else {
    flag4 = arg0;
  }
}
function toggleSection(c18, arg1) {
  let tmp14;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = false;
  if (c27) {
    c27 = false;
    flag2 = true;
  }
  const channelId = SelectedChannelStore.getChannelId();
  let tmp2 = null;
  if (null != channelId) {
    tmp2 = channelId;
    if (authStore3(channelId)) {
      const guildId = SelectedGuildStore.getGuildId();
      let tmp6 = null;
      if (null != guildId) {
        tmp6 = authStore4(channelId, guildId);
      }
      tmp2 = tmp6;
    }
  }
  const tmp8 = null != tmp2 && tmp2 in sidebars;
  if (tmp8) {
    delete sidebars[tmp2];
    flag2 = true;
  }
  let sidebarEnabled = flag;
  if (sidebarEnabled) {
    const obj = FriendsSidebarExperimentDefault;
    sidebarEnabled = obj.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled ? flag5 : flag4;
  }
  if (sidebarEnabled) {
    const obj2 = FriendsSidebarExperimentDefault;
    sidebarEnabled = obj2.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
  }
  if (sidebarEnabled) {
    flag2 = true;
  }
  if (!flag2) {
    tmp14 = !c18;
  } else {
    tmp14 = c18;
  }
  const tmp15 = tmp14 && flag;
  if (tmp15) {
    setIsFriendsOpen(false, { trackClose: true });
  }
  return tmp14;
}
function handlePermissionsChange() {
  let flag = false;
  let flag2 = false;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag2 = flag;
    while (keys[tmp] !== undefined) {
      let tmp12 = sidebars[tmp4];
      let tmp10 = tmp4;
      if (tmp12.type !== SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(tmp12.channelId);
        let canResult = null != channel;
        if (canResult) {
          canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        }
        flag = tmp3;
        if (canResult) {
          continue;
        } else {
          delete sidebars[tmp10];
          flag = true;
          continue;
        }
        continue;
      }
      continue;
    }
  }
  return flag2;
}
const isChannelChatInSidebar = ChannelRecord.isChannelChatInSidebar;
({ ChannelSections: map1, ComponentActions: closure_14 } = Constants);
({ isStaticChannelRoute: closure_15, buildGuildStaticChannelId: closure_16 } = ChannelConstants);
const Permissions = Constants2.Permissions;
const authStore5 = false;
let c19 = false;
let c20 = false;
const isProfileOpen = true;
let flag4 = true;
let flag5 = false;
let available = false;
let sidebars = {};
let guildSidebars = {};
let c27 = false;
let searchContextId = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class ChannelSectionStore extends PersistedStore {
  initialize(isMembersOpen) {
    if (null != isMembersOpen) {
      let flag = isMembersOpen.isMembersOpen;
      if (flag == null) {
        flag = false;
      }
      let c18 = flag;
      let flag2 = isMembersOpen.isSummariesOpen;
      if (flag2 == null) {
        flag2 = false;
      }
      let c19 = flag2;
      let flag3 = isMembersOpen.isProfileOpen;
      if (flag3 == null) {
        flag3 = true;
      }
      let closure_21 = flag3;
      flag4 = isMembersOpen.isFriendsOpen;
      if (flag4 == null) {
        flag4 = true;
      }
      flag5 = isMembersOpen.isAppBarToggleOpen;
      if (flag5 == null) {
        flag5 = false;
      }
      sidebars = isMembersOpen.sidebars;
      if (sidebars == null) {
        sidebars = {};
      }
      guildSidebars = isMembersOpen.guildSidebars;
      if (guildSidebars == null) {
        guildSidebars = {};
      }
    }
    const items = [PermissionStore];
    this.syncWith(items, handlePermissionsChange);
    this.waitFor(ApplicationStore, ChannelStore, ExperimentStore, ApexExperiment.ApexExperimentStore, GuildStore, PermissionStore, SearchMessageStore, SelectedChannelStore, SelectedGuildStore, UserStore);
  }
  getState() {
    return { isMembersOpen, isSummariesOpen, isProfileOpen, isFriendsOpen: flag4, isAppBarToggleOpen: flag5, sidebars, guildSidebars };
  }
  getSection(arg0, arg1) {
    const tmp = c27;
    if (tmp) {
      return map1.SEARCH;
    } else {
      let MEMBERS;
      let tmp4 = null;
      if (null != arg0) {
        tmp4 = arg0;
        if (authStore3(arg0)) {
          const guildId = SelectedGuildStore.getGuildId();
          let tmp8 = null;
          if (null != guildId) {
            tmp8 = authStore4(arg0, guildId);
          }
          tmp4 = tmp8;
        }
      }
      if (null != tmp4) {
        if (null != sidebars[tmp4]) {
          MEMBERS = map1.SIDEBAR_CHAT;
        }
        return MEMBERS;
      }
      const obj = FriendsSidebarExperimentDefault;
      const tmp11 = importDefault;
      if (obj.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled ? flag5 : flag4) {
        const tmp11Result = tmp11(6282);
        if (tmp11Result.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled) {
          MEMBERS = map1.FRIENDS;
        }
      }
      const tmp13 = arg1;
      if (tmp13) {
        const tmp14 = isProfileOpen;
        if (tmp14) {
          MEMBERS = map1.PROFILE;
        }
      }
      const tmp15 = c19;
      if (tmp15) {
        MEMBERS = map1.SUMMARIES;
      } else {
        const tmp16 = c18;
        if (tmp16) {
          if (!arg1) {
            MEMBERS = map1.MEMBERS;
          }
        }
        MEMBERS = c20 ? tmp19.CONVERSATIONS : tmp19.NONE;
      }
    }
  }
  getSidebarState(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore3(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    let tmp7;
    if (null != tmp) {
      tmp7 = sidebars[tmp];
    }
    return tmp7;
  }
  getGuildSidebarState(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = guildSidebars[arg0];
    }
    return tmp;
  }
  isFriendsSidebarAvailable() {
    return available;
  }
  getCurrentSidebarChannelId(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore3(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return null;
    } else {
      const tmp7 = c27;
      if (tmp7) {
        return null;
      } else {
        let tmp10 = null;
        if (null != sidebars[tmp]) {
          if (sidebars[tmp].type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
            channelId = tmp9.channelId;
          } else {
            channelId = null;
          }
          tmp10 = channelId;
        }
        return tmp10;
      }
    }
  }
  getCurrentSidebarMessageId(channelId) {
    let tmp = null;
    if (null != channelId) {
      tmp = channelId;
      if (authStore3(channelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(channelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return null;
    } else {
      const tmp14 = c27;
      if (tmp14) {
        return null;
      } else {
        let tmp9 = null;
        if (null != sidebars[tmp]) {
          let tmp12;
          if (sidebars[tmp].type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
            const details = tmp8.details;
            let initialMessageId;
            if (details != null) {
              initialMessageId = details.initialMessageId;
            }
            tmp12 = initialMessageId;
          } else {
            tmp12 = null;
          }
          tmp9 = tmp12;
        }
        return tmp9;
      }
    }
  }
  getCurrentSearchContextId() {
    return searchContextId;
  }
}
const prototype = ChannelSectionStore.prototype;
ChannelSectionStore.displayName = "ChannelSectionStore";
ChannelSectionStore.persistKey = "ChannelSectionStore2";
let items = [
  (sidebars) => {
    let entries1;
    let fromEntries;
    const obj = {
      sidebars: fromEntries(entries1.filter((item) => {
        let tmp;
        [, tmp] = item;
        let type;
        if (tmp != null) {
          type = tmp.type;
        }
        return 1 !== type;
      }))
    };
    const merged = Object.assign(sidebars);
    sidebars = sidebars.sidebars;
    const _Object = Object;
    fromEntries = Object.fromEntries;
    const _Object2 = Object;
    if (sidebars == null) {
      sidebars = {};
    }
    entries1 = entries(sidebars);
    return obj;
  }
];
ChannelSectionStore.migrations = items;
let obj = {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function handleSetSelectedSearchContext(searchContextId) {
    searchContextId = searchContextId.searchContextId;
    const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
    let flag = hasSearchStateResult !== c27;
    if (flag) {
      c27 = hasSearchStateResult;
      flag = true;
    }
    return flag;
  },
  SEARCH_MESSAGES_START: function handleSearchMessagesStart(ids) {
    ids = ids.ids;
    let tmp = null != searchContextId;
    if (tmp) {
      let hasItem = ids.includes(searchContextId);
      if (hasItem) {
        let flag = !c27;
        if (flag) {
          c27 = true;
          flag = true;
        }
        hasItem = flag;
      }
      tmp = hasItem;
    }
    return tmp;
  },
  SEARCH_MESSAGES_CLEAR: function handleSearchMessagesClear(id) {
    let tmp = id.id === searchContextId;
    if (tmp) {
      let flag = c27;
      if (flag) {
        c27 = false;
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let flag = c27;
    if (flag) {
      c27 = false;
      flag = true;
    }
    return flag;
  },
  CHANNEL_TOGGLE_MEMBERS_SECTION: function handleChannelToggleMembersSection() {
    const tmp = c27;
    if (tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    if (c19) {
      c19 = toggleSection(tmp6);
    }
    if (c20) {
      c20 = toggleSection(tmp8);
    }
    c18 = toggleSection(c18, true);
  },
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function handleUserProfileSidebarToggleSection() {
    const tmp = closure_21;
    if (!tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    closure_21 = toggleSection(closure_21, true);
  },
  CHANNEL_TOGGLE_SUMMARIES_SECTION: function handleChannelToggleSummariesSection() {
    if (c18) {
      c18 = toggleSection(tmp);
    }
    if (c20) {
      c20 = toggleSection(tmp3);
    }
    c19 = toggleSection(c19, true);
  },
  CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function handleChannelToggleConversationsSection() {
    const tmp = c27;
    if (tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
    }
    let c18 = false;
    let c19 = false;
    c20 = toggleSection(c20, true);
  },
  CHANNEL_OPEN_CONVERSATIONS_SECTION: function handleChannelOpenConversationsSection() {
    let flag = !c20;
    if (flag) {
      const tmp = c27;
      if (tmp) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
      }
      let c18 = false;
      let c19 = false;
      c20 = true;
      setIsFriendsOpen(false);
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
    c27 = false;
    let tmp = null;
    ({ channelId, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore3(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null == tmp) {
      return false;
    } else {
      const obj = { type: sidebarType, channelId, details };
      let tmp9 = obj;
      if (sidebarType === SidebarActionTypes.SidebarType.VIEW_MOD_REPORT) {
        const obj2 = { baseChannelId };
        const merged = Object.assign(obj);
        tmp9 = obj2;
      }
      sidebars[tmp] = tmp9;
      return true;
    }
  },
  SIDEBAR_VIEW_GUILD: function handleSidebarViewGuild(arg0) {
    let baseChannelId;
    let details;
    let guildId;
    let sidebarType;
    ({ guildId, baseChannelId } = arg0);
    c27 = false;
    let tmp = null;
    ({ sidebarType, details } = arg0);
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore3(baseChannelId)) {
        const guildId1 = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId1) {
          tmp5 = authStore4(baseChannelId, guildId1);
        }
        tmp = tmp5;
      }
    }
    let flag = null != tmp;
    if (flag) {
      const obj = { type: sidebarType, baseChannelId: tmp, guildId, details };
      guildSidebars[guildId] = obj;
      flag = true;
    }
    return flag;
  },
  SIDEBAR_CREATE_THREAD: function handleCreateThread(parentChannelId) {
    let _location;
    let parentMessageId;
    parentChannelId = parentChannelId.parentChannelId;
    c27 = false;
    let tmp = null;
    ({ parentMessageId, location: _location } = parentChannelId);
    if (null != parentChannelId) {
      tmp = parentChannelId;
      if (authStore3(parentChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(parentChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      sidebars[tmp] = { type: SidebarActionTypes.SidebarType.CREATE_THREAD, parentChannelId, parentMessageId, location: _location };
      const obj = { type: SidebarActionTypes.SidebarType.CREATE_THREAD, parentChannelId, parentMessageId, location: _location };
    }
  },
  SIDEBAR_CLOSE: function handleCloseSidebar(baseChannelId) {
    baseChannelId = baseChannelId.baseChannelId;
    let tmp = null;
    if (null != baseChannelId) {
      tmp = baseChannelId;
      if (authStore3(baseChannelId)) {
        const guildId = SelectedGuildStore.getGuildId();
        let tmp5 = null;
        if (null != guildId) {
          tmp5 = authStore4(baseChannelId, guildId);
        }
        tmp = tmp5;
      }
    }
    if (null != tmp) {
      delete sidebars[tmp];
      const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
      if (hasSearchStateResult !== c27) {
        c27 = hasSearchStateResult;
      }
    }
  },
  SIDEBAR_CLOSE_GUILD: function handleGuildCloseSidebar(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildSidebars[guildId];
    if (flag) {
      delete guildSidebars[guildId];
      const hasSearchStateResult = null != searchContextId && SearchMessageStore.hasSearchState(searchContextId);
      flag = true;
      if (hasSearchStateResult !== c27) {
        c27 = hasSearchStateResult;
        flag = true;
      }
    }
    return flag;
  },
  FRIENDS_SIDEBAR_SET_COLLAPSED: function handleSetFriendsSidebarCollapsed(collapsed) {
    collapsed = collapsed.collapsed;
    setIsFriendsOpen(!collapsed);
    if (!collapsed) {
      const channelId = SelectedChannelStore.getChannelId();
      if (null != channelId) {
        delete sidebars[tmp3];
      }
      const tmp5 = c27;
      if (tmp5) {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.dispatch(constants2.SEARCH_RESULTS_CLOSE);
        c27 = false;
      }
    }
  },
  FRIENDS_SIDEBAR_SET_AVAILABLE: function handleSetFriendsSidebarAvailable(available) {
    available = available.available;
    let flag = available !== available;
    if (flag) {
      flag = true;
    }
    return flag;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let flag = false;
    if (channel.id in sidebars) {
      delete sidebars[channel.id];
      flag = true;
    }
    let flag2 = flag;
    let tmp2 = flag;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = flag2;
      while (keys[tmp] !== undefined) {
        let tmp11 = sidebars[tmp5];
        let hasItem = null != tmp11;
        let tmp9 = tmp5;
        if (hasItem) {
          let items = [SidebarActionTypes.SidebarType.VIEW_CHANNEL, SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, SidebarActionTypes.SidebarType.VIEW_MOD_REPORT];
          hasItem = items.includes(tmp11.type);
        }
        if (hasItem) {
          hasItem = tmp11.channelId === channel.id;
        }
        if (!hasItem) {
          continue;
        } else {
          delete sidebars[tmp9];
          flag2 = true;
          continue;
        }
        continue;
      }
    }
    return tmp2;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let messageId;
    let obj2;
    ({ channelId, messageId } = arg0);
    let flag = false;
    const tmp3 = shared_PlatformUtils.isMobile && c18;
    if (tmp3) {
      c18 = false;
      let c19 = false;
      c20 = false;
      flag = true;
    }
    if (null != channelId) {
      if (null != messageId) {
        let type;
        if (sidebars[channelId] != null) {
          type = tmp9.type;
        }
        if (type === SidebarActionTypes.SidebarType.VIEW_CHANNEL) {
          if (sidebars[channelId].channelId === channelId) {
            return flag;
          }
        }
        const channel = ChannelStore.getChannel(channelId);
        let flag2 = flag;
        if (null != channel) {
          if (isChannelChatInSidebar(channel.type)) {
            const obj = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId, details: obj2 };
            sidebars[channelId] = obj;
            flag2 = true;
            obj2 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT, initialMessageId: messageId };
          } else {
            flag2 = flag;
            conjureDMAppChannel;
          }
        }
        return flag2;
      }
    }
    return flag;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let obj3;
    channel = channel.channel;
    const ownerId = channel.ownerId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (ownerId === id) {
      return false;
    } else {
      let tmp5 = null != tmp12 && tmp12.type === SidebarActionTypes.SidebarType.CREATE_THREAD;
      if (tmp5) {
        const parentMessageId = tmp12.parentMessageId;
        const obj = SnowflakeUtilsDefault;
        tmp5 = parentMessageId === obj.castChannelIdAsMessageId(channel.id);
      }
      if (tmp5) {
        const parent_id = channel.parent_id;
        const obj2 = { type: SidebarActionTypes.SidebarType.VIEW_CHANNEL, channelId: channel.id, details: obj3 };
        sidebars[parent_id] = obj2;
        obj3 = { type: SidebarActionTypes.ViewChannelDetailType.CHAT };
      }
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != sidebars[channel.parent_id]) {
      const items = [SidebarActionTypes.SidebarType.VIEW_CHANNEL, SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, SidebarActionTypes.SidebarType.VIEW_MOD_REPORT];
      if (items.includes(sidebars[channel.parent_id].type)) {
        if (sidebars[channel.parent_id].channelId === channel.id) {
          delete sidebars[channel.parent_id];
        }
      }
    }
    return false;
  }
};
const channelSectionStore = new ChannelSectionStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ChannelSectionStore.tsx");

export default channelSectionStore;
export const MESSAGE_REQUESTS_BASE_CHANNEL_ID = "message_requests";
export const isViewChannelSidebar = function isViewChannelSidebar(type) {
  const items = [SidebarActionTypes.SidebarType.VIEW_CHANNEL, SidebarActionTypes.SidebarType.VIEW_MESSAGE_REQUEST, SidebarActionTypes.SidebarType.VIEW_MOD_REPORT];
  return items.includes(type.type);
};
