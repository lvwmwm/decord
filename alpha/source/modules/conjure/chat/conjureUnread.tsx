// Module ID: 10857
// Function ID: 10858
// Name: conjureUnread
// Dependencies: [19, 1232, 6836, 6838, 6770, 572, 11, 504, 10858, 2]
// Exports: ackConjureProject, getConjureProjectMentionCount, isConjureProjectUnread, useAckConjureProjectWhileViewing, useConjureProjectBadge, useConjureUnreadSummary

// Module 10857 (conjureUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ReadStateConstants from "ReadStateConstants" /* 6770 */;
import conjureProjectMute from "conjureProjectMute" /* 10858 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function projectBadge(mentionCount, ackMessageIdResult, arg2) {
  let tmp = null;
  if (!arg2) {
    let tmp3 = mentionCount > 0;
    if (!tmp3) {
      let tmp5 = null != ackMessageIdResult;
      if (tmp5) {
        const obj = SnowflakeUtilsDefault;
        tmp5 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
      }
      tmp3 = tmp5;
    }
    tmp = null;
    if (tmp3) {
      tmp = mentionCount;
    }
  }
  return tmp;
}
function isProjectInGuild(project, arg1) {
  if (null == project) {
    return false;
  } else {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = project.preview_guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    return null == guild_id || guild_id === arg1;
  }
}
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export function ackConjureProject(projectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
  obj.dispatch(obj2);
}
export function isConjureProjectUnread(c0) {
  const mentionCount = ReadStateStore.getMentionCount(c0, ReadStateTypes.CONJURING_PROJECT);
  const ackMessageIdResult = ReadStateStore.ackMessageId(c0, ReadStateTypes.CONJURING_PROJECT);
  let tmp3 = mentionCount > 0;
  if (!tmp3) {
    let tmp5 = null != ackMessageIdResult;
    if (tmp5) {
      const obj = SnowflakeUtilsDefault;
      tmp5 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function getConjureProjectMentionCount(id) {
  return ReadStateStore.getMentionCount(id, ReadStateTypes.CONJURING_PROJECT);
}
export function useConjureProjectBadge(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [ReadStateStore, UserSettingsProtoStore];
  const items1 = [id];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != id) {
      const mentionCount = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
      const ackMessageIdResult = ReadStateStore.ackMessageId(id, ReadStateTypes.CONJURING_PROJECT);
      let tmp10 = null;
      const obj = conjureProjectMute;
      if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, id)) {
        let tmp11 = mentionCount > 0;
        if (!tmp11) {
          let tmp12 = null != ackMessageIdResult;
          if (tmp12) {
            const obj2 = SnowflakeUtilsDefault;
            tmp12 = 0 !== obj2.getNonTimestampBits(ackMessageIdResult);
          }
          tmp11 = tmp12;
        }
        tmp10 = null;
        if (tmp11) {
          tmp10 = mentionCount;
        }
      }
      tmp2 = tmp10;
    }
    return tmp2;
  }, items1);
}
export function useConjureUnreadSummary(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore, UserSettingsProtoStore, ConjureProjectStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let num = 0;
    let num2 = 0;
    const resourceIds = ReadStateStore.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == closure_0) {
        let mentionCount = ReadStateStore.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
        let ackMessageIdResult = ReadStateStore.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
        let obj = conjureProjectMute;
        let tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(UserSettingsProtoStore.settings, tmp3));
        if (null != tmp17) {
          num = num + 1;
          num2 = num2 + tmp18;
        }
      }
      continue;
    }
    return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
  }, items1);
}
export function useAckConjureProjectWhileViewing(projectId, stateFromStores) {
  _require = projectId;
  let closure_1 = stateFromStores;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [projectId];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != projectId;
    if (tmp2) {
      const mentionCount = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
      const ackMessageIdResult = ReadStateStore.ackMessageId(projectId, ReadStateTypes.CONJURING_PROJECT);
      let tmp7 = mentionCount > 0;
      if (!tmp7) {
        let tmp8 = null != ackMessageIdResult;
        if (tmp8) {
          const obj = SnowflakeUtilsDefault;
          tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
        }
        tmp7 = tmp8;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
  const items2 = [projectId, stateFromStores, stateFromStores];
  const effect = react.useEffect(() => {
    let tmp2 = null != projectId;
    const tmp = projectId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_ACK", projectId: tmp };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
}
