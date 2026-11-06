// Module ID: 18731
// Function ID: 18732
// Name: useYouBarAccessibilityLabel
// Dependencies: [6794, 5019, 5102, 5917, 5112, 6650, 5833, 1072, 5224, 4995, 10885, 8828, 504, 10883, 10884, 10891, 1113, 5918, 10895, 2]
// Exports: useYouBarAccessibilityLabel

// Module 18731 (useYouBarAccessibilityLabel)
import Constants from "Constants" /* 1072 */;
import UserUtils from "UserUtils" /* 5224 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10883 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10884 */;
import isGameActivityDefault from "isGameActivity" /* 10891 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10895 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6794 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import PresenceStore from "PresenceStore" /* 5917 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6650 */;
import VoiceStateStore from "VoiceStateStore" /* 5833 */;
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
  let obj = id(5224);
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
  const useGameMentionsAsPlainText = tmp3(10885).useGameMentionsAsPlainText;
  tmp3(10885);
  if ("" !== text) {
    tmp7 = text;
  }
  dependencyMap = useGameMentionsAsPlainText(tmp7);
  let primaryGuild;
  const getUserPrimaryGuild = tmp3(8828).getUserPrimaryGuild;
  tmp3(8828);
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
