// Module ID: 14841
// Function ID: 14842
// Name: useActivityStatusLabel
// Dependencies: [6801, 5019, 5102, 5922, 5112, 5835, 504, 5923, 10900, 10898, 10899, 10906, 1113, 10910, 10915, 2]
// Exports: default

// Module 14841 (useActivityStatusLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10898 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10899 */;
import isGameActivityDefault from "isGameActivity" /* 10906 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10910 */;
import VoiceActivityStatus from "VoiceActivityStatus" /* 10915 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import PresenceStore from "PresenceStore" /* 5922 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
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
