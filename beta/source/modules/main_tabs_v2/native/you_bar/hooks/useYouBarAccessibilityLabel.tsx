// Module ID: 18829
// Function ID: 18830
// Name: useYouBarAccessibilityLabel
// Dependencies: [6801, 5019, 5102, 5922, 5112, 6657, 5835, 1072, 5226, 4995, 10900, 8840, 504, 10898, 10899, 10906, 1113, 5923, 10910, 2]
// Exports: useYouBarAccessibilityLabel

// Module 18829 (useYouBarAccessibilityLabel)
import Constants from "Constants" /* 1072 */;
import UserUtils from "UserUtils" /* 5226 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10898 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10899 */;
import isGameActivityDefault from "isGameActivity" /* 10906 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10910 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6801 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import PresenceStore from "PresenceStore" /* 5922 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6657 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, type;

const StatusTypes = Constants.StatusTypes;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export function useYouBarAccessibilityLabel(stateFromStores) {
  let closure_0;
  let closure_2;
  let id;
  const tmp = dependencyMap;
  let obj = id(5226);
  _require = obj.useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp3 = _require;
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp7 = null;
  const useGameMentionsAsPlainText = tmp3(10900).useGameMentionsAsPlainText;
  tmp3(10900);
  if ("" !== text) {
    tmp7 = text;
  }
  dependencyMap = useGameMentionsAsPlainText(tmp7);
  let primaryGuild;
  const getUserPrimaryGuild = tmp3(8840).getUserPrimaryGuild;
  tmp3(8840);
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
  const tmp3Result4 = tmp3(504);
  return tmp3Result4.useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      const items = [ApplicationStreamingStore, RelationshipStore];
      const obj = useDiscoverableApplicationStream;
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const obj2 = useUserVoiceActivity;
      const voiceChannel = obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      const tmp6 = id;
      if (null != id) {
        text = null;
        if (status !== StatusTypes.OFFLINE) {
          text = null;
          if (status !== StatusTypes.INVISIBLE) {
            const activities = PresenceStore.getActivities(tmp6);
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
                  const intl4 = tmp4(1113).intl;
                  const obj5 = { name };
                  formatToPlainStringResult = intl4.formatToPlainString(tmp4(1113).t["0wJXSh"], obj5);
                }
                text = formatToPlainStringResult;
              }
              const intl3 = tmp4(1113).intl;
              formatToPlainStringResult = intl3.string(tmp4(1113).t.eXan7B);
            } else {
              let found1;
              if (activities != null) {
                found1 = activities.find((type) => {
                  type = type.type;
                  const tmp3 = type !== closure_1_0(closure_1_2[17]).ActivityTypes.CUSTOM_STATUS && type !== closure_1_0(closure_1_2[17]).ActivityTypes.HANG_STATUS;
                  return tmp3;
                });
              }
              if (null != found1) {
                text = getActivityStatusTextDefault(found1, true).text;
              } else {
                text = null;
                if (null != voiceChannel) {
                  if (!voiceChannel.isDM()) {
                    let stringResult;
                    if (!voiceChannel.isGroupDM()) {
                      const isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      const intl = tmp4(1113).intl;
                      const string = intl.string;
                      const t = tmp4(1113).t;
                      if (isGuildStageVoiceResult) {
                        stringResult = string(t.QygGCN);
                      } else {
                        stringResult = string(t.msxteM);
                      }
                    }
                    text = stringResult;
                  }
                  const intl2 = tmp4(1113).intl;
                  stringResult = intl2.string(tmp4(1113).t["9FaEzi"]);
                }
              }
            }
          }
        }
      }
      if (text == null) {
        text = closure_2;
      }
      if (text == null) {
        const tmp4Result = UserUtils;
        text = tmp4Result.humanizeStatus(status);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
}
