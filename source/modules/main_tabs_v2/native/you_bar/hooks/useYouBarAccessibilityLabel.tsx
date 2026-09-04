// Module ID: 16290
// Function ID: 16291
// Name: useYouBarAccessibilityLabel
// Dependencies: [4503, 1386, 4120, 4572, 4130, 5240, 4500, 673, 4325, 16291, 16292, 4166, 10811, 8096, 586, 10809, 10810, 10817, 1233, 10819, 2]
// Exports: useYouBarAccessibilityLabel

// Module 16290 (useYouBarAccessibilityLabel)
import closure_3 from "reset" /* 4503 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "getUncachedChannelPermissions" /* 4120 */;
import closure_6 from "sortActivity" /* 4572 */;
import closure_7 from "markAllUserIdListsStale" /* 4130 */;
import closure_8 from "filterPlayingActivities" /* 5240 */;
import closure_9 from "updateVoiceState" /* 4500 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ ActivityTypes: c10, StatusTypes: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = function useYouBarAccessibilityLabel(stateFromStores) {
  const _require = id(4325).useName(stateFromStores);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let obj = id(4325);
  dependencyMap = _require(16291).useYouBarActivityStatusEnabled("YouBar");
  const obj2 = _require(16291);
  const isYouBarGuildTagEnabled = _require(16292).useIsYouBarGuildTagEnabled("YouBar");
  const CustomStatusSetting = _require(4166).CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  let tmp3Result = tmp3(10811);
  let tmp7 = null;
  if ("" !== text) {
    tmp7 = text;
  }
  closure_3 = tmp3Result.useGameMentionsAsPlainText(tmp7);
  let tmp8;
  if (isYouBarGuildTagEnabled) {
    tmp3Result = tmp3(8096);
    let primaryGuild;
    if (stateFromStores != null) {
      primaryGuild = stateFromStores.primaryGuild;
    }
    const userPrimaryGuild = tmp3Result.getUserPrimaryGuild(primaryGuild);
    let tag;
    if (userPrimaryGuild != null) {
      tag = userPrimaryGuild.tag;
    }
    tmp8 = tag;
  }
  tag = tmp8;
  const obj3 = _require(16292);
  let items = [closure_8, closure_3, closure_7, tag, closure_5, closure_9, closure_6];
  return _require(586).useStateFromStores(items, () => {
    if (null != callback) {
      const status = closure_1_8.getStatus();
      let obj = callback(10809);
      const items = [closure_3, closure_1_7];
      const discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
      obj1 = callback(10810);
      obj = { userId: null };
      obj[0] = id;
      obj = { ChannelStore: null, PermissionStore: null, VoiceStateStore: null };
      obj[0] = tag;
      obj[1] = closure_1_5;
      obj[2] = closure_1_9;
      const voiceChannel = obj1.getVisibleUserVoiceActivity(obj, obj).voiceChannel;
      let text = null;
      if (dependencyMap) {
        text = null;
        if (null != tmp6) {
          text = null;
          if (status !== closure_1_11.OFFLINE) {
            text = null;
            if (status !== closure_1_11.INVISIBLE) {
              const activities = closure_1_6.getActivities(tmp6);
              if (null != discoverableApplicationStream) {
                let name;
                if (activities != null) {
                  const found = activities.find(id(10817));
                  if (found != null) {
                    name = found.name;
                  }
                }
                if (null == name) {
                  const intl3 = tmp4(1233).intl;
                  let stringResult = intl3.string(tmp4(1233).t.eXan7B);
                }
                const intl4 = tmp4(1233).intl;
                obj1 = { name: null };
                obj1[0] = name;
                stringResult = intl4.formatToPlainString(tmp4(1233).t["0wJXSh"], obj1);
              } else {
                let found1;
                if (activities != null) {
                  found1 = activities.find((type) => {
                    type = type.type;
                    return type !== constants.CUSTOM_STATUS && type !== constants.HANG_STATUS;
                  });
                }
                if (null != found1) {
                  text = id(10819)(found1, true).text;
                } else {
                  text = null;
                  if (null != voiceChannel) {
                    if (!voiceChannel.isDM()) {
                      if (!voiceChannel.isGroupDM()) {
                        const intl = tmp4(1233).intl;
                        const string = intl.string;
                        const t = tmp4(1233).t;
                        if (isGuildStageVoiceResult) {
                          let stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      }
                      text = stringResult1;
                    }
                    const intl2 = tmp4(1233).intl;
                    stringResult1 = intl2.string(tmp4(1233).t["9FaEzi"]);
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
        text = tmp4(4325).humanizeStatus(status);
        const tmp4Result = tmp4(4325);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((arg0) => null != arg0);
      return found2.join(", ");
    }
  });
};
