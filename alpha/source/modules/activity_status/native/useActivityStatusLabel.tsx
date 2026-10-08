// Module ID: 12842
// Function ID: 12843
// Name: useActivityStatusLabel
// Dependencies: [5893, 2063, 4707, 5106, 4717, 5111, 1085, 558, 576, 504, 10224, 10222, 10223, 10230, 1126, 10235, 10240, 2]

// Module 12842 (useActivityStatusLabel)
import Constants from "Constants" /* 1085 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10222 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10223 */;
import isGameActivityDefault from "isGameActivity" /* 10230 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10235 */;
import VoiceActivityStatus from "VoiceActivityStatus" /* 10240 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let type;

const ActivityTypes = Constants.ActivityTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityStatusLabel(userId) {
  let first;
  let gameMentionsAsPlainText;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp = userId;
  let obj = userId(gameMentionsAsPlainText[8]);
  const cResult = obj.c(10);
  userId = userId.userId;
  const guildId = userId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = PresenceStore;
    let items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      if (null == userId) {
        return null;
      } else {
        const activities = PresenceStore.getActivities(tmp);
        let state;
        if (activities != null) {
          const found = activities.find((type) => type.type === constants.CUSTOM_STATUS);
          if (found != null) {
            state = found.state;
          }
        }
        let tmp5 = null;
        if (null != state) {
          tmp5 = null;
          if ("" !== state.trim()) {
            tmp5 = state;
          }
        }
        return tmp5;
      }
    };
    let items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(gameMentionsAsPlainText[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult3 = tmp(gameMentionsAsPlainText[10]);
  gameMentionsAsPlainText = tmpResult3.useGameMentionsAsPlainText(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PresenceStore, , , , , ];
    items2[1] = ApplicationStreamingStore;
    items2[2] = RelationshipStore;
    items2[3] = ChannelStore;
    items2[4] = PermissionStore;
    let tmp16 = VoiceStateStore;
    items2[5] = VoiceStateStore;
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === gameMentionsAsPlainText) {
    if (cResult[6] === guildId) {
      let tmp17;
      let tmp18;
      if (cResult[7] === userId) {
        tmp17 = cResult[8];
        tmp18 = cResult[9];
      }
      const tmpResult4 = tmp(gameMentionsAsPlainText[9]);
      return tmpResult4.useStateFromStores(tmp10, tmp17, tmp18);
    }
  }
  class U {
    constructor() {
      let activities;
      let voiceActivityStatusText;
      const tmp = userId;
      if (null != userId) {
        if (RelationshipStore.isBlockedOrIgnored(tmp)) {
          return null;
        }
      }
      if (null != tmp) {
        activities = PresenceStore.getActivities(tmp);
      }
      const items = [ApplicationStreamingStore, RelationshipStore];
      const obj = useDiscoverableApplicationStream;
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(tmp, items);
      const obj2 = useUserVoiceActivity;
      const obj3 = { userId: tmp, guildId };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      if (null != discoverableApplicationStream) {
        let name;
        if (activities != null) {
          const found = activities.find(isGameActivityDefault);
          if (found != null) {
            name = found.name;
          }
        }
        if (null != name) {
          let formatToPlainStringResult;
          if ("" !== name) {
            const intl2 = tmp4(1126).intl;
            const obj5 = { name };
            formatToPlainStringResult = intl2.formatToPlainString(tmp4(1126).t["0wJXSh"], obj5);
          }
          voiceActivityStatusText = formatToPlainStringResult;
        }
        const intl = tmp4(1126).intl;
        formatToPlainStringResult = intl.string(tmp4(1126).t.eXan7B);
      } else {
        let found1;
        if (activities != null) {
          found1 = activities.find((type) => {
            type = type.type;
            return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
          });
        }
        if (null != found1) {
          let text = getActivityStatusTextDefault(found1, true).text;
          if (text == null) {
            text = null;
          }
          voiceActivityStatusText = text;
        } else {
          voiceActivityStatusText = null;
          if (null != voiceChannel) {
            const tmp4Result = VoiceActivityStatus;
            voiceActivityStatusText = tmp4Result.getVoiceActivityStatusText(voiceChannel);
          }
        }
      }
      const items1 = [voiceActivityStatusText, gameMentionsAsPlainText];
      const found2 = items1.filter((item) => null != item && "" !== item);
      const joined = found2.join(", ");
      let tmp16 = null;
      if ("" !== joined) {
        tmp16 = joined;
      }
      return tmp16;
    }
  }
  const items3 = [userId, guildId, gameMentionsAsPlainText];
  cResult[5] = gameMentionsAsPlainText;
  cResult[6] = guildId;
  cResult[7] = userId;
  cResult[8] = U;
  cResult[9] = items3;
  tmp18 = items3;
  tmp17 = U;
}) : (function useActivityStatusLabel(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let gameMentionsAsPlainText;
  let obj = userId(gameMentionsAsPlainText[9]);
  let items = [PresenceStore];
  let items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == userId) {
      return null;
    } else {
      const activities = PresenceStore.getActivities(tmp);
      let state;
      if (activities != null) {
        const found = activities.find((type) => type.type === constants.CUSTOM_STATUS);
        if (found != null) {
          state = found.state;
        }
      }
      let tmp5 = null;
      if (null != state) {
        tmp5 = null;
        if ("" !== state.trim()) {
          tmp5 = state;
        }
      }
      return tmp5;
    }
  }, items1);
  let obj2 = userId(gameMentionsAsPlainText[10]);
  gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(stateFromStores);
  let obj3 = userId(gameMentionsAsPlainText[9]);
  const items2 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  const items3 = [userId, guildId, gameMentionsAsPlainText];
  return obj3.useStateFromStores(items2, () => {
    let activities;
    let voiceActivityStatusText;
    const tmp = userId;
    if (null != userId) {
      if (RelationshipStore.isBlockedOrIgnored(tmp)) {
        return null;
      }
    }
    if (null != tmp) {
      activities = PresenceStore.getActivities(tmp);
    }
    const items = [ApplicationStreamingStore, RelationshipStore];
    const obj = useDiscoverableApplicationStream;
    const discoverableApplicationStream = obj.getDiscoverableApplicationStream(tmp, items);
    const obj2 = useUserVoiceActivity;
    const obj3 = { userId: tmp, guildId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
    if (null != discoverableApplicationStream) {
      let name;
      if (activities != null) {
        const found = activities.find(isGameActivityDefault);
        if (found != null) {
          name = found.name;
        }
      }
      if (null != name) {
        let formatToPlainStringResult;
        if ("" !== name) {
          const intl2 = tmp4(1126).intl;
          const obj5 = { name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp4(1126).t["0wJXSh"], obj5);
        }
        voiceActivityStatusText = formatToPlainStringResult;
      }
      const intl = tmp4(1126).intl;
      formatToPlainStringResult = intl.string(tmp4(1126).t.eXan7B);
    } else {
      let found1;
      if (activities != null) {
        found1 = activities.find((type) => {
          type = type.type;
          return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
        });
      }
      if (null != found1) {
        let text = getActivityStatusTextDefault(found1, true).text;
        if (text == null) {
          text = null;
        }
        voiceActivityStatusText = text;
      } else {
        voiceActivityStatusText = null;
        if (null != voiceChannel) {
          const tmp4Result = VoiceActivityStatus;
          voiceActivityStatusText = tmp4Result.getVoiceActivityStatusText(voiceChannel);
        }
      }
    }
    const items1 = [voiceActivityStatusText, gameMentionsAsPlainText];
    const found2 = items1.filter((item) => null != item && "" !== item);
    const joined = found2.join(", ");
    let tmp16 = null;
    if ("" !== joined) {
      tmp16 = joined;
    }
    return tmp16;
  }, items3);
});
const result = size.fileFinishedImporting("modules/activity_status/native/useActivityStatusLabel.tsx");

export default tmp2;
