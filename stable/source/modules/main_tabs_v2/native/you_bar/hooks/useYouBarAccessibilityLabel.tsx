// Module ID: 16463
// Function ID: 16464
// Name: useYouBarAccessibilityLabel
// Dependencies: [4658, 1957, 4275, 4676, 4285, 5360, 4655, 1074, 4481, 16464, 16465, 1935, 11012, 8282, 504, 11010, 11011, 11018, 1114, 11020, 2]
// Exports: useYouBarAccessibilityLabel

// Module 16463 (useYouBarAccessibilityLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 11010 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 11011 */;
import isGameActivityDefault from "isGameActivity" /* 11018 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 11020 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import PresenceStore from "PresenceStore" /* 4676 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5360 */;
import VoiceStateStore from "VoiceStateStore" /* 4655 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ ActivityTypes: c10, StatusTypes: closure_11 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = function useYouBarAccessibilityLabel(stateFromStores) {
  _require = id(4481).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj = id(4481);
  dependencyMap = require("YouBarActivityStatusExperiment").useYouBarActivityStatusEnabled("YouBar");
  const obj2 = require("YouBarActivityStatusExperiment");
  const isYouBarGuildTagEnabled = require("YouBarGuildTagExperiment").useIsYouBarGuildTagEnabled("YouBar");
  const CustomStatusSetting = require("UserSettings").CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let obj3 = require("YouBarGuildTagExperiment");
  let tmp7 = null;
  if ("" !== text) {
    tmp7 = text;
  }
  closure_3 = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(tmp7);
  let tmp8;
  if (isYouBarGuildTagEnabled) {
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    const userPrimaryGuild = tmp3(8282).getUserPrimaryGuild(primaryGuild);
    let tag;
    if (userPrimaryGuild != null) {
      tag = userPrimaryGuild.tag;
    }
    tmp8 = tag;
    const tmp3Result3 = tmp3(8282);
  }
  tag = tmp8;
  const tmp3Result = require("useGameMentionsAsPlainText");
  let items = [SelfPresenceStore, closure_3, RelationshipStore, tag, PermissionStore, VoiceStateStore, PresenceStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      const status = SelfPresenceStore.getStatus();
      const items = [ApplicationStreamingStore, RelationshipStore];
      const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(id, items);
      const obj3 = { userId: id };
      const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
      const voiceChannel = useUserVoiceActivity.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel;
      let text = null;
      if (closure_2) {
        text = null;
        if (null != tmp6) {
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
                  const intl3 = tmp4(1114).intl;
                  let stringResult = intl3.string(tmp4(1114).t.eXan7B);
                }
                const intl4 = tmp4(1114).intl;
                const obj5 = { name };
                stringResult = intl4.formatToPlainString(tmp4(1114).t["0wJXSh"], obj5);
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
                        const intl = tmp4(1114).intl;
                        const string = intl.string;
                        const t = tmp4(1114).t;
                        if (isGuildStageVoiceResult) {
                          let stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      }
                      text = stringResult1;
                    }
                    const intl2 = tmp4(1114).intl;
                    stringResult1 = intl2.string(tmp4(1114).t["9FaEzi"]);
                  }
                }
              }
            }
          }
        }
      }
      if (text == null) {
        text = closure_3;
      }
      if (text == null) {
        text = tmp4(4481).humanizeStatus(status);
        const tmp4Result = tmp4(4481);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
};
