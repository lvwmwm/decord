// Module ID: 17822
// Function ID: 17823
// Name: useYouBarAccessibilityLabel
// Dependencies: [6281, 4643, 4726, 5532, 4736, 6801, 5442, 1071, 4850, 4619, 8932, 7879, 504, 13389, 13390, 13396, 1112, 5533, 13398, 2]
// Exports: useYouBarAccessibilityLabel

// Module 17822 (useYouBarAccessibilityLabel)
import Constants from "Constants" /* 1071 */;
import UserUtils from "UserUtils" /* 4850 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 13389 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 13390 */;
import isGameActivityDefault from "isGameActivity" /* 13396 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 13398 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6281 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import PresenceStore from "PresenceStore" /* 5532 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6801 */;
import VoiceStateStore from "VoiceStateStore" /* 5442 */;
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
  let obj = id(4850);
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
  const useGameMentionsAsPlainText = tmp3(8932).useGameMentionsAsPlainText;
  tmp3(8932);
  if ("" !== text) {
    tmp7 = text;
  }
  dependencyMap = useGameMentionsAsPlainText(tmp7);
  let primaryGuild;
  const getUserPrimaryGuild = tmp3(7879).getUserPrimaryGuild;
  tmp3(7879);
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
                  const intl4 = tmp4(1112).intl;
                  const obj5 = { name };
                  formatToPlainStringResult = intl4.formatToPlainString(tmp4(1112).t["0wJXSh"], obj5);
                }
                text = formatToPlainStringResult;
              }
              const intl3 = tmp4(1112).intl;
              formatToPlainStringResult = intl3.string(tmp4(1112).t.eXan7B);
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
                      const intl = tmp4(1112).intl;
                      const string = intl.string;
                      const t = tmp4(1112).t;
                      if (isGuildStageVoiceResult) {
                        stringResult = string(t.QygGCN);
                      } else {
                        stringResult = string(t.msxteM);
                      }
                    }
                    text = stringResult;
                  }
                  const intl2 = tmp4(1112).intl;
                  stringResult = intl2.string(tmp4(1112).t["9FaEzi"]);
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
