// Module ID: 15289
// Function ID: 116262
// Name: getSearchQueryChannelIds
// Dependencies: []
// Exports: getSearchFilterAuthorTypeIcon, getSearchFilterHasIcon, getSearchQueryChannelIds, getSearchQueryUserIds, toSearchListChannelItem, toSearchListUserItem

// Module 15289 (getSearchQueryChannelIds)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const SearchListItemTypes = arg1(dependencyMap[4]).SearchListItemTypes;
const RelationshipTypes = arg1(dependencyMap[5]).RelationshipTypes;
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(searchContext) {
  return new Set(authStore.getChannelIds(searchContext));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(searchContext) {
  const prefixTag = authStore.getPrefixTag(searchContext);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(authStore.getUserIds(searchContext, prefixTag.searchTokenType));
    return set1;
  }
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = arg1(dependencyMap[6]).intl;
  if (intl.string(arg1(dependencyMap[6]).t.nrpA5E) === text) {
    return importDefault(dependencyMap[7]);
  } else {
    const intl3 = arg1(dependencyMap[6]).intl;
    if (intl3.string(arg1(dependencyMap[6]).t.ZNR2fi) === text) {
      return arg1(dependencyMap[8]).LinkIcon;
    } else {
      const intl4 = arg1(dependencyMap[6]).intl;
      if (intl4.string(arg1(dependencyMap[6]).t.20uQR3) === text) {
        return arg1(dependencyMap[9]).EmbedIcon;
      } else {
        const intl5 = arg1(dependencyMap[6]).intl;
        if (intl5.string(arg1(dependencyMap[6]).t.L4lxyE) === text) {
          return arg1(dependencyMap[10]).PollsIcon;
        } else {
          const intl6 = arg1(dependencyMap[6]).intl;
          if (intl6.string(arg1(dependencyMap[6]).t.AV/v6i) === text) {
            return arg1(dependencyMap[11]).AttachmentIcon;
          } else {
            const intl7 = arg1(dependencyMap[6]).intl;
            if (intl7.string(arg1(dependencyMap[6]).t.XM9XGP) === text) {
              return arg1(dependencyMap[12]).VideoIcon;
            } else {
              const intl8 = arg1(dependencyMap[6]).intl;
              if (intl8.string(arg1(dependencyMap[6]).t.TNLcpx) === text) {
                return arg1(dependencyMap[13]).ImageIcon;
              } else {
                const intl9 = arg1(dependencyMap[6]).intl;
                if (intl9.string(arg1(dependencyMap[6]).t.F8Wf0e) === text) {
                  return arg1(dependencyMap[14]).SoundboardIcon;
                } else {
                  const intl2 = arg1(dependencyMap[6]).intl;
                  if (intl2.string(arg1(dependencyMap[6]).t.PJgX2h) === text) {
                    return arg1(dependencyMap[15]).StickerIcon;
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
  const intl = arg1(dependencyMap[6]).intl;
  if (intl.string(arg1(dependencyMap[6]).t.tPZo4p) === text) {
    return arg1(dependencyMap[16]).UserIcon;
  } else {
    const intl3 = arg1(dependencyMap[6]).intl;
    if (intl3.string(arg1(dependencyMap[6]).t.JL7sRS) === text) {
      return arg1(dependencyMap[17]).RobotIcon;
    } else {
      const intl2 = arg1(dependencyMap[6]).intl;
      if (intl2.string(arg1(dependencyMap[6]).t.WjkIKU) === text) {
        return arg1(dependencyMap[18]).WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(closure_0, user, callback2) {
  let obj = user(dependencyMap[19]);
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(closure_0);
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
      nickname = importDefault(dependencyMap[20]).getName(user);
      const obj2 = importDefault(dependencyMap[20]);
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
export const toSearchListChannelItem = function toSearchListChannelItem(channel, closure_8) {
  closure_8 = channel;
  const importDefault = closure_8;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = user.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      let obj = { type: SearchListItemTypes.DM };
      obj = { type: RelationshipTypes.NONE, user };
      let nickname = store.getNickname(user.id);
      if (null == nickname) {
        nickname = importDefault(dependencyMap[20]).getName(user);
        const obj6 = importDefault(dependencyMap[20]);
      }
      obj.nickname = nickname;
      obj.onPress = function onPress() {
        return arg1(arg0.id);
      };
      obj.props = obj;
      tmp5 = obj;
    }
    return tmp5;
  } else {
    obj = {};
    if (channel.isGroupDM()) {
      obj.type = tmp.GROUP_DM;
      const obj1 = { channel, onPress: closure_8 };
      obj.props = obj1;
      let tmp2 = obj;
    } else {
      obj.type = tmp.GUILD_TEXT_CHANNEL;
      const obj2 = { channel, onPress: closure_8 };
      obj.props = obj2;
      tmp2 = obj;
    }
    return tmp2;
  }
};
