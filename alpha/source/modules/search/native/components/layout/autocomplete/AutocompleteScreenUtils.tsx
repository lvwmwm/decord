// Module ID: 18759
// Function ID: 18760
// Name: AutocompleteScreenUtils
// Dependencies: [4921, 4951, 1384, 13850, 9806, 1072, 1114, 13341, 5722, 14571, 10513, 10515, 11021, 8651, 14052, 11023, 12431, 12408, 18760, 13843, 5063, 2]
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 18759 (AutocompleteScreenUtils)
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import LinkIcon from "LinkIcon" /* 5722 */;
import ImageIcon from "ImageIcon" /* 8651 */;
import SearchConstants from "SearchConstants" /* 9806 */;
import PollsIcon from "PollsIcon" /* 10513 */;
import AttachmentIcon from "AttachmentIcon" /* 10515 */;
import VideoIcon from "VideoIcon" /* 11021 */;
import StickerIcon from "StickerIcon" /* 11023 */;
import RobotIcon from "RobotIcon" /* 12408 */;
import UserIcon from "UserIcon" /* 12431 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13341 */;
import SearchUtils from "SearchUtils" /* 13843 */;
import SoundboardIcon from "SoundboardIcon" /* 14052 */;
import EmbedIcon from "EmbedIcon" /* 14571 */;
import WebhookIcon from "WebhookIcon" /* 18760 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;
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
    const intl3 = tmp(1114).intl;
    if (intl3.string(intl10.t.ZNR2fi) === text) {
      return LinkIcon.LinkIcon;
    } else {
      const intl4 = tmp(1114).intl;
      if (intl4.string(intl10.t["20uQR3"]) === text) {
        return EmbedIcon.EmbedIcon;
      } else {
        const intl5 = tmp(1114).intl;
        if (intl5.string(intl10.t.L4lxyE) === text) {
          return PollsIcon.PollsIcon;
        } else {
          const intl6 = tmp(1114).intl;
          if (intl6.string(intl10.t["AV/v6i"]) === text) {
            return AttachmentIcon.AttachmentIcon;
          } else {
            const intl7 = tmp(1114).intl;
            if (intl7.string(intl10.t.XM9XGP) === text) {
              return VideoIcon.VideoIcon;
            } else {
              const intl8 = tmp(1114).intl;
              if (intl8.string(intl10.t.TNLcpx) === text) {
                return ImageIcon.ImageIcon;
              } else {
                const intl9 = tmp(1114).intl;
                if (intl9.string(intl10.t.F8Wf0e) === text) {
                  return SoundboardIcon.SoundboardIcon;
                } else {
                  const intl2 = tmp(1114).intl;
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
    const intl3 = tmp(1114).intl;
    if (intl3.string(intl10.t.JL7sRS) === text) {
      return RobotIcon.RobotIcon;
    } else {
      const intl2 = tmp(1114).intl;
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
