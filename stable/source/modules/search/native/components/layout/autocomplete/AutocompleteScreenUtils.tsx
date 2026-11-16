// Module ID: 19201
// Function ID: 19202
// Name: AutocompleteScreenUtils
// Dependencies: [5082, 5112, 1385, 14166, 9950, 1072, 1113, 13655, 5883, 14887, 10684, 10686, 11204, 8763, 14373, 11206, 12318, 12300, 19202, 14159, 5226, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 19201 (AutocompleteScreenUtils)
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1113 */;
import UserUtilsDefault from "UserUtils" /* 5226 */;
import LinkIcon from "LinkIcon" /* 5883 */;
import ImageIcon from "ImageIcon" /* 8763 */;
import SearchConstants from "SearchConstants" /* 9950 */;
import PollsIcon from "PollsIcon" /* 10684 */;
import AttachmentIcon from "AttachmentIcon" /* 10686 */;
import VideoIcon from "VideoIcon" /* 11204 */;
import StickerIcon from "StickerIcon" /* 11206 */;
import RobotIcon from "RobotIcon" /* 12300 */;
import UserIcon from "UserIcon" /* 12318 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13655 */;
import SearchUtils from "SearchUtils" /* 14159 */;
import SoundboardIcon from "SoundboardIcon" /* 14373 */;
import EmbedIcon from "EmbedIcon" /* 14887 */;
import WebhookIcon from "WebhookIcon" /* 19202 */;
import GuildMemberStore from "GuildMemberStore" /* 5082 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import UserStore from "UserStore" /* 1385 */;
import SearchQueryStore from "SearchQueryStore" /* 14166 */;
import size from "module_2" /* 2 */;

let set;

const SearchListItemTypes = SearchConstants.SearchListItemTypes;
const RelationshipTypes = Constants.RelationshipTypes;
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export function getSearchQueryChannelIds(items) {
  set = new Set(SearchQueryStore.getChannelIds(items));
  return set;
}
export function getSearchQueryUserIds(items) {
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
}
export function getSearchFilterHasIcon(text) {
  const intl = intl10.intl;
  if (intl.string(intl10.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = tmp(1113).intl;
    if (intl3.string(intl10.t.ZNR2fi) === text) {
      return LinkIcon.LinkIcon;
    } else {
      const intl4 = tmp(1113).intl;
      if (intl4.string(intl10.t["20uQR3"]) === text) {
        return EmbedIcon.EmbedIcon;
      } else {
        const intl5 = tmp(1113).intl;
        if (intl5.string(intl10.t.L4lxyE) === text) {
          return PollsIcon.PollsIcon;
        } else {
          const intl6 = tmp(1113).intl;
          if (intl6.string(intl10.t["AV/v6i"]) === text) {
            return AttachmentIcon.AttachmentIcon;
          } else {
            const intl7 = tmp(1113).intl;
            if (intl7.string(intl10.t.XM9XGP) === text) {
              return VideoIcon.VideoIcon;
            } else {
              const intl8 = tmp(1113).intl;
              if (intl8.string(intl10.t.TNLcpx) === text) {
                return ImageIcon.ImageIcon;
              } else {
                const intl9 = tmp(1113).intl;
                if (intl9.string(intl10.t.F8Wf0e) === text) {
                  return SoundboardIcon.SoundboardIcon;
                } else {
                  const intl2 = tmp(1113).intl;
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
}
export function getSearchFilterAuthorTypeIcon(text) {
  const intl = intl10.intl;
  if (intl.string(intl10.t.tPZo4p) === text) {
    return UserIcon.UserIcon;
  } else {
    const intl3 = tmp(1113).intl;
    if (intl3.string(intl10.t.JL7sRS) === text) {
      return RobotIcon.RobotIcon;
    } else {
      const intl2 = tmp(1113).intl;
      if (intl2.string(intl10.t.WjkIKU) === text) {
        return WebhookIcon.WebhookIcon;
      }
    }
  }
}
export function toSearchListUserItem(items, user, callback2) {
  const obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
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
}
export function toSearchListChannelItem(channel, callback3) {
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
}
