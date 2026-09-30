// Module ID: 16210
// Function ID: 16211
// Name: useYouBarAccessibilityLabel
// Dependencies: [4888, 2045, 4499, 4906, 4509, 5788, 4885, 1074, 4708, 2021, 10542, 7805, 504, 10540, 10541, 10548, 1115, 10550, 2]
// Exports: useYouBarAccessibilityLabel

// Module 16210 (useYouBarAccessibilityLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10540 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10541 */;
import isGameActivityDefault from "isGameActivity" /* 10548 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10550 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4888 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4499 */;
import PresenceStore from "PresenceStore" /* 4906 */;
import RelationshipStore from "RelationshipStore" /* 4509 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5788 */;
import VoiceStateStore from "VoiceStateStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ ActivityTypes: c10, StatusTypes: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = function useYouBarAccessibilityLabel(stateFromStores) {
  _require = id(4708).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let obj = id(4708);
  let tmp6 = null;
  if ("" !== text) {
    tmp6 = text;
  }
  dependencyMap = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(tmp6);
  const tmp3Result = require("useGameMentionsAsPlainText");
  let primaryGuild;
  if (stateFromStores != null) {
    primaryGuild = stateFromStores.primaryGuild;
  }
  const userPrimaryGuild = require("GuildTagUtils").getUserPrimaryGuild(primaryGuild);
  let tag;
  if (userPrimaryGuild != null) {
    tag = userPrimaryGuild.tag;
  }
  const tmp3Result3 = require("GuildTagUtils");
  let items = [SelfPresenceStore, tag, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore, PresenceStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      const items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(id, items);
      const tmp6 = id;
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      if (null != id) {
        text = null;
        if (status !== constants.OFFLINE) {
          text = null;
          if (status !== constants.INVISIBLE) {
            const activities = PresenceStore.getActivities(tmp6);
            if (null != discoverableApplicationStream) {
              let name;
              if (activities != null) {
                const found = activities.find(isGameActivityDefault);
                if (found != null) {
                  name = found.name;
                }
              }
              if (null == name) {
                const intl3 = tmp4(1115).intl;
                let stringResult = intl3.string(tmp4(1115).t.eXan7B);
              }
              const intl4 = tmp4(1115).intl;
              const obj5 = { name };
              stringResult = intl4.formatToPlainString(tmp4(1115).t["0wJXSh"], obj5);
            } else {
              let found1;
              if (activities != null) {
                found1 = activities.find((type) => {
                  type = type.type;
                  return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
                });
              }
              if (null != found1) {
                text = getActivityStatusTextDefault(found1, true).text;
              } else {
                text = null;
                if (null != voiceChannel) {
                  if (!voiceChannel.isDM()) {
                    if (!voiceChannel.isGroupDM()) {
                      const intl = tmp4(1115).intl;
                      const string = intl.string;
                      const t = tmp4(1115).t;
                      if (isGuildStageVoiceResult) {
                        let stringResult1 = string(t.QygGCN);
                      } else {
                        stringResult1 = string(t.msxteM);
                      }
                      isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                    }
                    text = stringResult1;
                  }
                  const intl2 = tmp4(1115).intl;
                  stringResult1 = intl2.string(tmp4(1115).t["9FaEzi"]);
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
        text = tmp4(4708).humanizeStatus(status);
        const tmp4Result = tmp4(4708);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
};
