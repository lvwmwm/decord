// Module ID: 14562
// Function ID: 14563
// Name: useActivityStatusLabel
// Dependencies: [6714, 4863, 4946, 5761, 4956, 5679, 504, 5762, 10749, 10747, 10748, 10755, 1113, 10759, 10764, 2]
// Exports: default

// Module 14562 (useActivityStatusLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10747 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10748 */;
import isGameActivityDefault from "isGameActivity" /* 10755 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10759 */;
import VoiceActivityStatus from "VoiceActivityStatus" /* 10764 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6714 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import size from "module_2" /* 2 */;

let type;

const result = size.fileFinishedImporting("modules/activity_status/native/useActivityStatusLabel.tsx");

export default function useActivityStatusLabel(userId) {
  userId = userId.userId;
  const guildId = userId.guildId;
  let gameMentionsAsPlainText;
  let obj = userId(gameMentionsAsPlainText[6]);
  let items = [PresenceStore];
  let items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == userId) {
      return null;
    } else {
      const activities = PresenceStore.getActivities(tmp);
      let state;
      if (activities != null) {
        const found = activities.find((type) => type.type === userId(gameMentionsAsPlainText[7]).ActivityTypes.CUSTOM_STATUS);
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
  let obj2 = userId(gameMentionsAsPlainText[8]);
  gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(stateFromStores);
  let obj3 = userId(gameMentionsAsPlainText[6]);
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
      let tmp3 = PresenceStore;
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
          const intl2 = tmp4(1113).intl;
          const obj5 = { name };
          formatToPlainStringResult = intl2.formatToPlainString(tmp4(1113).t["0wJXSh"], obj5);
        }
        voiceActivityStatusText = formatToPlainStringResult;
      }
      const intl = tmp4(1113).intl;
      formatToPlainStringResult = intl.string(tmp4(1113).t.eXan7B);
    } else {
      let found1;
      if (activities != null) {
        found1 = activities.find((type) => {
          type = type.type;
          const tmp3 = type !== userId(gameMentionsAsPlainText[7]).ActivityTypes.CUSTOM_STATUS && type !== userId(gameMentionsAsPlainText[7]).ActivityTypes.HANG_STATUS;
          return tmp3;
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
};
