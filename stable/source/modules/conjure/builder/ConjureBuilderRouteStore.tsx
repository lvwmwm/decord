// Module ID: 7393
// Function ID: 7394
// Name: ConjureBuilderRouteStore
// Dependencies: [4870, 504, 7394, 572, 2]

// Module 7393 (ConjureBuilderRouteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import conjureGuildReturnsToProjectDefault from "conjureGuildReturnsToProject" /* 7394 */;
import size from "module_2" /* 2 */;

let _null, closure_5;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let lastProjectIdByGuildId = { lastProjectIdByGuildId: {} };
const React3 = null;
const hasOwnProperty = lastProjectIdByGuildId;
const PersistedStore = get_initializedDefault.PersistedStore;
class ConjureBuilderRouteStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_5 = tmp;
  }
  getState() {
    return closure_5;
  }
  getRoutedProjectId(guildId) {
    guildId = undefined;
    if (_null != null) {
      guildId = _null.guildId;
    }
    let projectId = null;
    if (guildId === guildId) {
      projectId = _null.projectId;
    }
    return projectId;
  }
  getLastProjectId(id) {
    let tmp = null;
    if (conjureGuildReturnsToProjectDefault) {
      let tmp4 = closure_5.lastProjectIdByGuildId[id];
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp = tmp4;
    }
    return tmp;
  }
}
const prototype = ConjureBuilderRouteStore.prototype;
ConjureBuilderRouteStore.displayName = "ConjureBuilderRouteStore";
ConjureBuilderRouteStore.persistKey = "ConjureBuilderRoute";
let obj2 = {
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    let guildId;
    let messageId;
    ({ guildId, messageId } = channelId);
    let tmp = null;
    if (channelId.channelId === StaticChannelRoute.CONJURE) {
      tmp = null;
      if (null != guildId) {
        tmp = null;
        if (null != messageId) {
          tmp = { guildId, projectId: messageId };
          const obj = { guildId, projectId: messageId };
        }
      }
    }
    let guildId1;
    if (tmp != null) {
      guildId1 = tmp.guildId;
    }
    let guildId2;
    if (_null != null) {
      guildId2 = _null.guildId;
    }
    let tmp4 = guildId1 !== guildId2;
    if (!tmp4) {
      let projectId;
      if (tmp != null) {
        projectId = tmp.projectId;
      }
      let projectId1;
      if (_null != null) {
        projectId1 = _null.projectId;
      }
      tmp4 = projectId !== projectId1;
    }
    _null = tmp;
    let tmp7 = tmp4;
    if (null != guildId) {
      let projectId2;
      if (tmp != null) {
        projectId2 = tmp.projectId;
      }
      if (projectId2 == null) {
        projectId2 = null;
      }
      let tmp10 = closure_5.lastProjectIdByGuildId[guildId];
      if (tmp10 == null) {
        tmp10 = null;
      }
      let flag = false;
      if (tmp10 !== projectId2) {
        const obj3 = {};
        const merged = Object.assign(closure_5.lastProjectIdByGuildId);
        if (null == projectId2) {
          delete obj2[guildId];
        } else {
          obj3[guildId] = projectId2;
        }
        closure_5 = { lastProjectIdByGuildId: obj3 };
        flag = true;
        const obj5 = { lastProjectIdByGuildId: obj3 };
      }
      if (!flag) {
        flag = tmp4;
      }
      tmp7 = flag;
    }
    return tmp7;
  },
  CONJURE_PROJECT_SELECT: function handleProjectSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = null == guildId.projectId;
    if (tmp) {
      let tmp3 = closure_5.lastProjectIdByGuildId[guildId];
      if (tmp3 == null) {
        tmp3 = null;
      }
      let flag = false;
      if (tmp3 !== null) {
        lastProjectIdByGuildId = {};
        const merged = Object.assign(closure_5.lastProjectIdByGuildId);
        delete lastProjectIdByGuildId[guildId];
        closure_5 = { lastProjectIdByGuildId };
        flag = true;
        const obj2 = { lastProjectIdByGuildId };
      }
      tmp = flag;
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    let c4 = null;
    closure_5 = obj;
  }
};
const conjureBuilderRouteStore = new ConjureBuilderRouteStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureBuilderRouteStore.tsx");

export default conjureBuilderRouteStore;
