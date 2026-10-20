// Module ID: 17930
// Function ID: 17931
// Name: AutocompleteScreenUtils
// Dependencies: [4860, 4890, 1392, 13052, 9642, 1087, 1128, 12737, 5640, 13893, 10350, 10352, 11213, 8507, 13267, 13272, 11705, 11677, 17931, 13045, 4994, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 17930 (AutocompleteScreenUtils)
import Constants from "Constants" /* 1087 */;
import intl10 from "intl" /* 1128 */;
import UserUtilsDefault from "UserUtils" /* 4994 */;
import LinkIcon from "LinkIcon" /* 5640 */;
import ImageIcon from "ImageIcon" /* 8507 */;
import SearchConstants from "SearchConstants" /* 9642 */;
import PollsIcon from "PollsIcon" /* 10350 */;
import AttachmentIcon from "AttachmentIcon" /* 10352 */;
import VideoIcon from "VideoIcon" /* 11213 */;
import RobotIcon from "RobotIcon" /* 11677 */;
import UserIcon from "UserIcon" /* 11705 */;
import ForwardingIconDefault from "ForwardingIcon" /* 12737 */;
import SearchUtils from "SearchUtils" /* 13045 */;
import SoundboardIcon from "SoundboardIcon" /* 13267 */;
import StickerIcon from "StickerIcon" /* 13272 */;
import EmbedIcon from "EmbedIcon" /* 13893 */;
import WebhookIcon from "WebhookIcon" /* 17931 */;
import GuildMemberStore from "GuildMemberStore" /* 4860 */;
import RelationshipStore from "RelationshipStore" /* 4890 */;
import UserStore from "UserStore" /* 1392 */;
import SearchQueryStore from "SearchQueryStore" /* 13052 */;
import size from "module_2" /* 2 */;

let set;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  set = new Set(SearchQueryStore.getChannelIds(items));
  return set;
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = SearchQueryStore.getPrefixTag(items);
  const obj = SearchQueryStore;
  if (null == prefixTag) {
    const _Set2 = Set;
    const self3 = this;
    const self4 = this;
    set = new Set();
    return set;
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const set1 = new Set(obj.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = intl10.intl;
  if (intl.string(intl10.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = tmp(1128).intl;
    if (intl3.string(intl10.t.ZNR2fi) === text) {
      return LinkIcon.LinkIcon;
    } else {
      const intl4 = tmp(1128).intl;
      if (intl4.string(intl10.t["20uQR3"]) === text) {
        return EmbedIcon.EmbedIcon;
      } else {
        const intl5 = tmp(1128).intl;
        if (intl5.string(intl10.t.L4lxyE) === text) {
          return PollsIcon.PollsIcon;
        } else {
          const intl6 = tmp(1128).intl;
          if (intl6.string(intl10.t["AV/v6i"]) === text) {
            return AttachmentIcon.AttachmentIcon;
          } else {
            const intl7 = tmp(1128).intl;
            if (intl7.string(intl10.t.XM9XGP) === text) {
              return VideoIcon.VideoIcon;
            } else {
              const intl8 = tmp(1128).intl;
              if (intl8.string(intl10.t.TNLcpx) === text) {
                return ImageIcon.ImageIcon;
              } else {
                const intl9 = tmp(1128).intl;
                if (intl9.string(intl10.t.F8Wf0e) === text) {
                  return SoundboardIcon.SoundboardIcon;
                } else {
                  const intl2 = tmp(1128).intl;
                  if (intl2.string(intl10.t.PJgX2h) === text) {
                    return StickerIcon.StickerIcon;
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
  const intl = intl10.intl;
  if (intl.string(intl10.t.tPZo4p) === text) {
    return UserIcon.UserIcon;
  } else {
    const intl3 = tmp(1128).intl;
    if (intl3.string(intl10.t.JL7sRS) === text) {
      return RobotIcon.RobotIcon;
    } else {
      const intl2 = tmp(1128).intl;
      if (intl2.string(intl10.t.WjkIKU) === text) {
        return WebhookIcon.WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(searchContext, user, callback2) {
  const obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
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
      const obj2 = UserUtilsDefault;
      nickname = obj2.getName(user);
    }
    const element = { type: SearchListItemTypes.DM, props: obj3 };
    return element;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, callback3) {
  let nickname;
  let obj;
  let closure_0 = channel;
  let closure_1 = callback3;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      const element = { type: SearchListItemTypes.DM, props: obj };
      obj = {
        type: RelationshipTypes.NONE,
        user,
        nickname,
        onPress() {
              return closure_1(id.id);
            }
      };
      nickname = RelationshipStore.getNickname(user.id);
      if (nickname == null) {
        const obj6 = UserUtilsDefault;
        nickname = obj6.getName(user);
      }
      tmp5 = element;
    }
    return tmp5;
  } else {
    let tmp2;
    const element1 = { type: null, props: null };
    if (channel.isGroupDM()) {
      element1.type = SearchListItemTypes.GROUP_DM;
      const obj2 = { channel, onPress: callback3 };
      element1.props = obj2;
      tmp2 = element1;
    } else {
      element1.type = SearchListItemTypes.GUILD_TEXT_CHANNEL;
      const obj3 = { channel, onPress: callback3 };
      element1.props = obj3;
      tmp2 = element1;
    }
    return tmp2;
  }
};
