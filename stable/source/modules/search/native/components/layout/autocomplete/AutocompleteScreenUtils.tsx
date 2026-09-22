// Module ID: 16839
// Function ID: 16840
// Name: AutocompleteScreenUtils
// Dependencies: [2021, 4285, 1371, 12472, 7982, 1074, 1114, 11821, 4579, 9561, 10767, 10240, 10238, 5168, 12661, 10242, 11959, 9565, 16840, 12473, 4481, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 16839 (AutocompleteScreenUtils)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4481 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11821 */;
import SearchUtils from "SearchUtils" /* 12473 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;
import UserStore from "UserStore" /* 1371 */;
import SearchQueryStore from "SearchQueryStore" /* 12472 */;

require = fn;
const SearchListItemTypes = fn(7982).SearchListItemTypes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  return new Set(SearchQueryStore.getChannelIds(items));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = SearchQueryStore.getPrefixTag(items);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(obj.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
  obj = SearchQueryStore;
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = util.intl;
  if (intl.string(util.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = tmp(1114).intl;
    if (intl3.string(tmp(1114).t.ZNR2fi) === text) {
      return tmp(4579).LinkIcon;
    } else {
      const intl4 = tmp(1114).intl;
      if (intl4.string(tmp(1114).t["20uQR3"]) === text) {
        return tmp(9561).EmbedIcon;
      } else {
        const intl5 = tmp(1114).intl;
        if (intl5.string(tmp(1114).t.L4lxyE) === text) {
          return tmp(10767).PollsIcon;
        } else {
          const intl6 = tmp(1114).intl;
          if (intl6.string(tmp(1114).t["AV/v6i"]) === text) {
            return tmp(10240).AttachmentIcon;
          } else {
            const intl7 = tmp(1114).intl;
            if (intl7.string(tmp(1114).t.XM9XGP) === text) {
              return tmp(10238).VideoIcon;
            } else {
              const intl8 = tmp(1114).intl;
              if (intl8.string(tmp(1114).t.TNLcpx) === text) {
                return tmp(5168).ImageIcon;
              } else {
                const intl9 = tmp(1114).intl;
                if (intl9.string(tmp(1114).t.F8Wf0e) === text) {
                  return tmp(12661).SoundboardIcon;
                } else {
                  const intl2 = tmp(1114).intl;
                  if (intl2.string(tmp(1114).t.PJgX2h) === text) {
                    return tmp(10242).StickerIcon;
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
  const intl = util.intl;
  if (intl.string(util.t.tPZo4p) === text) {
    return tmp(11959).UserIcon;
  } else {
    const intl3 = tmp(1114).intl;
    if (intl3.string(tmp(1114).t.JL7sRS) === text) {
      return tmp(9565).RobotIcon;
    } else {
      const intl2 = tmp(1114).intl;
      if (intl2.string(tmp(1114).t.WjkIKU) === text) {
        return tmp(16840).WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(items);
  if (null == user) {
    return null;
  } else {
    let nickname = null;
    if (null == guildIdFromSearchContext) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    if (nickname == null) {
      nickname = GuildMemberStore.getNick(guildIdFromSearchContext, user.id);
    }
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(user);
    }
    const element = { type: SearchListItemTypes.DM, props: null };
    const obj3 = { type: RelationshipTypes.NONE, user, nickname, onPress: callback2, guildId: guildIdFromSearchContext };
    element.props = obj3;
    return element;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, callback3) {
  const id = channel;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      const element = { type: SearchListItemTypes.DM, props: null };
      const obj = { type: RelationshipTypes.NONE, user, nickname: null, onPress: null };
      let nickname = RelationshipStore.getNickname(user.id);
      if (nickname == null) {
        nickname = UserUtilsDefault.getName(user);
      }
      obj.nickname = nickname;
      obj.onPress = function onPress() {
        return callback3(id.id);
      };
      element.props = obj;
      tmp5 = element;
    }
    return tmp5;
  } else {
    const element1 = { type: null, props: null };
    if (channel.isGroupDM()) {
      element1.type = tmp.GROUP_DM;
      const obj2 = { channel, onPress: callback3 };
      element1.props = obj2;
      let tmp2 = element1;
    } else {
      element1.type = tmp.GUILD_TEXT_CHANNEL;
      const obj3 = { channel, onPress: callback3 };
      element1.props = obj3;
      tmp2 = element1;
    }
    return tmp2;
  }
};
