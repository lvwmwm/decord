// Module ID: 16718
// Function ID: 16719
// Name: useYouBarAccessibilityLabel
// Dependencies: [4812, 2045, 4431, 4830, 4441, 5530, 4809, 1078, 558, 568, 4635, 16719, 16720, 2023, 11220, 8471, 11218, 11219, 11226, 1119, 11228, 504, 2]

// Module 16718 (useYouBarAccessibilityLabel)
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 11218 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 11219 */;
import isGameActivityDefault from "isGameActivity" /* 11226 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 11228 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import PresenceStore from "PresenceStore" /* 4830 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5530 */;
import VoiceStateStore from "VoiceStateStore" /* 4809 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1078);
({ ActivityTypes: c10, StatusTypes: closure_11 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/hooks/useYouBarAccessibilityLabel.tsx");

export const useYouBarAccessibilityLabel = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = name(youBarActivityStatusEnabled[9]).c(7);
  let obj = name(youBarActivityStatusEnabled[9]);
  name = id(youBarActivityStatusEnabled[10]).useName(id);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const obj2 = id(youBarActivityStatusEnabled[10]);
  youBarActivityStatusEnabled = name(youBarActivityStatusEnabled[11]).useYouBarActivityStatusEnabled("YouBar");
  const tmpResult = name(youBarActivityStatusEnabled[11]);
  const isYouBarGuildTagEnabled = name(youBarActivityStatusEnabled[12]).useIsYouBarGuildTagEnabled("YouBar");
  const CustomStatusSetting = tmp(tmp2[13]).CustomStatusSetting;
  const setting = CustomStatusSetting.useSetting();
  let text;
  if (setting != null) {
    text = setting.text;
  }
  const tmpResult5 = name(youBarActivityStatusEnabled[12]);
  let tmp10 = null;
  if ("" !== text) {
    tmp10 = text;
  }
  const gameMentionsAsPlainText = name(youBarActivityStatusEnabled[14]).useGameMentionsAsPlainText(tmp10);
  let tmp12;
  if (isYouBarGuildTagEnabled) {
    let primaryGuild;
    if (id != null) {
      primaryGuild = id.primaryGuild;
    }
    const userPrimaryGuild = tmp(tmp2[15]).getUserPrimaryGuild(primaryGuild);
    let tag;
    if (userPrimaryGuild != null) {
      tag = userPrimaryGuild.tag;
    }
    tmp12 = tag;
    const tmpResult7 = tmp(tmp2[15]);
  }
  tag = tmp12;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore, gameMentionsAsPlainText, RelationshipStore, tag, PermissionStore, VoiceStateStore, PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === gameMentionsAsPlainText) {
    if (cResult[2] === tmp12) {
      if (cResult[3] === name) {
        if (cResult[4] === youBarActivityStatusEnabled) {
          if (cResult[5] === id) {
            let tmp24 = cResult[6];
          }
          return tmp(tmp2[21]).useStateFromStores(first, tmp24);
        }
      }
    }
  }
  class A {
    constructor() {
      if (null != closure_0) {
        tmp2 = closure_8;
        status = closure_8.getStatus();
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[16]);
        tmp6 = id;
        tmp7 = closure_3;
        items = [, ];
        items[0] = closure_3;
        tmp8 = closure_7;
        items[1] = closure_7;
        discoverableApplicationStream = obj.getDiscoverableApplicationStream(id, items);
        obj2 = closure_0(closure_2[17]);
        obj1 = { userId: null };
        obj1.userId = id;
        obj8 = { ChannelStore: null, PermissionStore: null, VoiceStateStore: null };
        tmp10 = closure_4;
        obj8.ChannelStore = closure_4;
        tmp11 = closure_5;
        obj8.PermissionStore = closure_5;
        tmp12 = closure_9;
        obj8.VoiceStateStore = closure_9;
        voiceChannel = obj2.getVisibleUserVoiceActivity(obj1, obj8).voiceChannel;
        tmp13 = closure_2;
        text = null;
        if (closure_2) {
          text = null;
          if (null != tmp6) {
            text = null;
            if (status !== StatusTypes.OFFLINE) {
              text = null;
              if (status !== StatusTypes.INVISIBLE) {
                tmp25 = closure_6;
                activities = closure_6.getActivities(tmp6);
                if (null != discoverableApplicationStream) {
                  name = undefined;
                  if (activities != null) {
                    tmp20 = closure_1;
                    found = activities.find(closure_1(tmp5[18]));
                    if (found != null) {
                      name = found.name;
                    }
                  }
                  if (null == name) {
                    intl3 = tmp4(tmp5[19]).intl;
                    stringResult = intl3.string(tmp4(tmp5[19]).t.eXan7B);
                    tmp23 = stringResult;
                  } else {
                    str = "";
                  }
                  intl4 = tmp4(tmp5[19]).intl;
                  obj9 = { name: null };
                  obj9.name = name;
                  stringResult = intl4.formatToPlainString(tmp4(tmp5[19]).t["0wJXSh"], obj9);
                } else {
                  found1 = undefined;
                  if (activities != null) {
                    found1 = activities.find(() => { ... });
                  }
                  if (null != found1) {
                    tmp18 = closure_1;
                    flag = true;
                    text = closure_1(tmp5[20])(found1, true).text;
                  } else {
                    text = null;
                    if (null != voiceChannel) {
                      if (!voiceChannel.isDM()) {
                        if (!voiceChannel.isGroupDM()) {
                          isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                          intl = tmp4(tmp5[19]).intl;
                          string = intl.string;
                          t = tmp4(tmp5[19]).t;
                          if (isGuildStageVoiceResult) {
                            stringResult1 = string(t.QygGCN);
                          } else {
                            stringResult1 = string(t.msxteM);
                          }
                        }
                        text = stringResult1;
                      }
                      intl2 = tmp4(tmp5[19]).intl;
                      stringResult1 = intl2.string(tmp4(tmp5[19]).t["9FaEzi"]);
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
          tmp4Result = tmp4(tmp5[10]);
          text = tmp4Result.humanizeStatus(status);
        }
        items1 = [, , ];
        items1[0] = tmp;
        tmp24 = tag;
        items1[1] = tag;
        items1[2] = text;
        found2 = items1.filter(() => { ... });
        str2 = ", ";
        return found2.join(", ");
      } else {
        return;
      }
    }
  }
  cResult[1] = gameMentionsAsPlainText;
  cResult[2] = tmp12;
  cResult[3] = name;
  cResult[4] = youBarActivityStatusEnabled;
  cResult[5] = id;
  cResult[6] = A;
  tmp24 = A;
}) : ((id) => {
  _require = id(4635).useName(id);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let obj = id(4635);
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
    if (id != null) {
      primaryGuild = id.primaryGuild;
    }
    const userPrimaryGuild = tmp3(8471).getUserPrimaryGuild(primaryGuild);
    let tag;
    if (userPrimaryGuild != null) {
      tag = userPrimaryGuild.tag;
    }
    tmp8 = tag;
    const tmp3Result3 = tmp3(8471);
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
                  const intl3 = tmp4(1119).intl;
                  let stringResult = intl3.string(tmp4(1119).t.eXan7B);
                }
                const intl4 = tmp4(1119).intl;
                const obj5 = { name };
                stringResult = intl4.formatToPlainString(tmp4(1119).t["0wJXSh"], obj5);
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
                        const intl = tmp4(1119).intl;
                        const string = intl.string;
                        const t = tmp4(1119).t;
                        if (isGuildStageVoiceResult) {
                          let stringResult1 = string(t.QygGCN);
                        } else {
                          stringResult1 = string(t.msxteM);
                        }
                        isGuildStageVoiceResult = voiceChannel.isGuildStageVoice();
                      }
                      text = stringResult1;
                    }
                    const intl2 = tmp4(1119).intl;
                    stringResult1 = intl2.string(tmp4(1119).t["9FaEzi"]);
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
        text = tmp4(4635).humanizeStatus(status);
        const tmp4Result = tmp4(4635);
      }
      const items1 = [tmp, tag, text];
      const found2 = items1.filter((item) => null != item);
      return found2.join(", ");
    }
  });
});
