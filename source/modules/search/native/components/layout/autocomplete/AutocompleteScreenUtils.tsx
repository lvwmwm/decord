// Module ID: 15417
// Function ID: 118513
// Name: getSearchQueryChannelIds
// Dependencies: [1917, 3767, 1849, 10077, 9103, 653, 1212, 9880, 4074, 9025, 9655, 9657, 10159, 4644, 11561, 10256, 10970, 9029, 15418, 10078, 3969, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 15417 (getSearchQueryChannelIds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { SearchListItemTypes } from "SearchAutocompleteSelectAnalyticsActions";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  return new Set(authStore.getChannelIds(items));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = authStore.getPrefixTag(items);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(authStore.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = require(1212) /* getSystemLocale */.intl;
  if (intl.string(require(1212) /* getSystemLocale */.t.nrpA5E) === text) {
    return importDefault(9880);
  } else {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    if (intl3.string(require(1212) /* getSystemLocale */.t.ZNR2fi) === text) {
      return require(4074) /* LinkIcon */.LinkIcon;
    } else {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      if (intl4.string(require(1212) /* getSystemLocale */.t["20uQR3"]) === text) {
        return require(9025) /* EmbedIcon */.EmbedIcon;
      } else {
        const intl5 = require(1212) /* getSystemLocale */.intl;
        if (intl5.string(require(1212) /* getSystemLocale */.t.L4lxyE) === text) {
          return require(9655) /* PollsIcon */.PollsIcon;
        } else {
          const intl6 = require(1212) /* getSystemLocale */.intl;
          if (intl6.string(require(1212) /* getSystemLocale */.t["AV/v6i"]) === text) {
            return require(9657) /* AttachmentIcon */.AttachmentIcon;
          } else {
            const intl7 = require(1212) /* getSystemLocale */.intl;
            if (intl7.string(require(1212) /* getSystemLocale */.t.XM9XGP) === text) {
              return require(10159) /* VideoIcon */.VideoIcon;
            } else {
              const intl8 = require(1212) /* getSystemLocale */.intl;
              if (intl8.string(require(1212) /* getSystemLocale */.t.TNLcpx) === text) {
                return require(4644) /* ImageIcon */.ImageIcon;
              } else {
                const intl9 = require(1212) /* getSystemLocale */.intl;
                if (intl9.string(require(1212) /* getSystemLocale */.t.F8Wf0e) === text) {
                  return require(11561) /* SoundboardIcon */.SoundboardIcon;
                } else {
                  const intl2 = require(1212) /* getSystemLocale */.intl;
                  if (intl2.string(require(1212) /* getSystemLocale */.t.PJgX2h) === text) {
                    return require(10256) /* StickerIcon */.StickerIcon;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export const getSearchFilterAuthorTypeIcon = function getSearchFilterAuthorTypeIcon(text) {
  const intl = require(1212) /* getSystemLocale */.intl;
  if (intl.string(require(1212) /* getSystemLocale */.t.tPZo4p) === text) {
    return require(10970) /* UserIcon */.UserIcon;
  } else {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    if (intl3.string(require(1212) /* getSystemLocale */.t.JL7sRS) === text) {
      return require(9029) /* RobotIcon */.RobotIcon;
    } else {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      if (intl2.string(require(1212) /* getSystemLocale */.t.WjkIKU) === text) {
        return require(15418) /* WebhookIcon */.WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  let obj = require(10078) /* _createForOfIteratorHelperLoose */;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  if (null == user) {
    return null;
  } else {
    let nickname = null;
    if (null == guildIdFromSearchContext) {
      nickname = store.getNickname(user.id);
    }
    if (null == nickname) {
      nickname = nick.getNick(guildIdFromSearchContext, user.id);
    }
    if (null == nickname) {
      nickname = importDefault(3969).getName(user);
      const obj2 = importDefault(3969);
    }
    obj = { type: SearchListItemTypes.DM };
    obj = { type: RelationshipTypes.NONE, user, nickname, onPress: callback2 };
    let tmp10;
    if (null != guildIdFromSearchContext) {
      tmp10 = guildIdFromSearchContext;
    }
    obj.guildId = tmp10;
    obj.props = obj;
    return obj;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, outer1_8) {
  let closure_0 = channel;
  const importDefault = outer1_8;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    user = user.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      let obj = { type: SearchListItemTypes.DM };
      obj = { type: RelationshipTypes.NONE, user };
      let nickname = store.getNickname(user.id);
      if (null == nickname) {
        nickname = importDefault(3969).getName(user);
        const obj6 = importDefault(3969);
      }
      obj.nickname = nickname;
      obj.onPress = function onPress() {
        return outer1_8(id.id);
      };
      obj.props = obj;
      tmp5 = obj;
    }
    return tmp5;
  } else {
    obj = {};
    if (channel.isGroupDM()) {
      obj.type = tmp.GROUP_DM;
      const obj1 = { channel, onPress: outer1_8 };
      obj.props = obj1;
      let tmp2 = obj;
    } else {
      obj.type = tmp.GUILD_TEXT_CHANNEL;
      const obj2 = { channel, onPress: outer1_8 };
      obj.props = obj2;
      tmp2 = obj;
    }
    return tmp2;
  }
};
