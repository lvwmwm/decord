// Module ID: 4804
// Function ID: 4805
// Name: getChannelIcon
// Dependencies: [1990, 1910, 1922, 676, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828, 4829, 4830, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 4804 (getChannelIcon)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";

const require = arg1;
function getChannelIcon(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
  const result = require(4830) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return importDefault(4823);
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      let tmp4 = importDefault(4805);
    } else if (tmp3.ANNOUNCEMENT_THREAD === type) {
      tmp4 = importDefault(4806);
    } else {
      tmp4 = null;
    }
    if (null != tmp4) {
      return tmp4;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type3 = channel.type;
      if (tmp3.PRIVATE_THREAD !== type3) {
        if (tmp3.ANNOUNCEMENT_THREAD !== type3) {
          if (tmp3.PUBLIC_THREAD !== type3) {
            if (tmp3.GUILD_CATEGORY === type3) {
              return importDefault(4807);
            } else if (tmp3.GUILD_TEXT === type3) {
              if (isRulesChannel) {
                let tmp69 = importDefault(4833);
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp69 = importDefault(4819);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    importDefault(4820);
                  }
                }
                if (importDefault(4834)(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp72Result = tmp72(4829);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp72Result = tmp72(4835);
                } else {
                  tmp72Result = tmp72(4808);
                }
              }
              return tmp69;
            } else if (tmp3.GUILD_FORUM === type3) {
              if (isRulesChannel) {
                let tmp58 = importDefault(4833);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp58 = importDefault(isMediaChannelResult ? 4828 : 4825);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    importDefault(4826);
                  }
                }
                if (importDefault(4834)(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    tmp61(isMediaChannelResult ? 4836 : 4837);
                  }
                }
                importDefault(isMediaChannelResult ? 4827 : 4824);
              }
              return tmp58;
            } else if (tmp3.GUILD_MEDIA === type3) {
              if (isRulesChannel) {
                let tmp48 = importDefault(4833);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp48 = importDefault(4828);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    importDefault(4826);
                  }
                }
                if (importDefault(4834)(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp51Result = tmp51(4836);
                  }
                }
                tmp51Result = tmp51(4827);
              }
              return tmp48;
            } else if (tmp3.GROUP_DM === type3) {
              return importDefault(4809);
            } else if (tmp3.DM === type3) {
              return importDefault(4810);
            } else if (tmp3.GUILD_ANNOUNCEMENT === type3) {
              if (isRulesChannel) {
                let tmp35 = importDefault(4833);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp35 = importDefault(4821);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    importDefault(4822);
                  }
                }
                if (importDefault(4834)(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp38Result = tmp38(4838);
                  }
                }
                tmp38Result = tmp38(4811);
              }
              return tmp35;
            } else if (tmp3.GUILD_STAGE_VOICE === type3) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (importDefault(4834)(channel)) {
                    let tmp24Result = tmp24(4839);
                  } else {
                    tmp24Result = tmp24(4818);
                  }
                  return tmp24Result;
                }
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  importDefault(4839);
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp28Result = tmp28(4818);
                }
              }
              tmp28Result = tmp28(4812);
            } else if (tmp3.GUILD_VOICE === type3) {
              if (obj.textFocused) {
                let tmp9Result = importDefault(4823);
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (importDefault(4834)(channel)) {
                      tmp9Result = tmp9(4839);
                    } else {
                      tmp9Result = tmp9(4815);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    importDefault(4839);
                  }
                }
                if (importDefault(4834)(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp13(4815);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp13(4816);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = tmp13(4817);
                  }
                }
                tmp13Result1 = tmp13(4813);
              }
              return tmp9Result;
            } else if (tmp3.GUILD_DIRECTORY === type3) {
              return importDefault(4814);
            } else {
              return null;
            }
          }
        }
      }
      const type2 = channel.type;
      if (tmp3.PRIVATE_THREAD === type2) {
        let tmp80 = importDefault(4805);
      } else if (tmp3.ANNOUNCEMENT_THREAD === type2) {
        tmp80 = importDefault(4806);
      } else {
        tmp80 = null;
      }
      return tmp80;
    }
  }
  const obj2 = require(4830) /* shouldShowMembershipVerificationGate */;
}
function getChannelIconComponent(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
  const result = require(4830) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return tmp(4840).ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return tmp(4841).ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.GUILD_CATEGORY === type) {
            return tmp(4843).FolderIcon;
          } else if (tmp6.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = tmp(4844).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = tmp(4845).TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = tmp(4846).TextSpoilerIcon;
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = tmp(4847).TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = tmp(4848).TextControllerIcon;
              } else {
                TextIcon = tmp(4849).TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (tmp6.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = tmp(4844).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = tmp(4850).ImageWarningIcon;
                  } else {
                    ForumWarningIcon = tmp(4851).ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = tmp(4852).ForumSpoilerIcon;
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (isMediaChannelResult) {
                    let ForumLockIcon = tmp(4853).ImageLockIcon;
                  } else {
                    ForumLockIcon = tmp(4854).ForumLockIcon;
                  }
                }
              }
              if (isMediaChannelResult) {
                let ForumIcon = tmp(4855).ImageIcon;
              } else {
                ForumIcon = tmp(4856).ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (tmp6.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = tmp(4844).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = tmp(4850).ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = tmp(4852).ForumSpoilerIcon;
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = tmp(4853).ImageLockIcon;
                }
              }
              ImageIcon = tmp(4855).ImageIcon;
            }
            return ImageWarningIcon;
          } else if (tmp6.GROUP_DM === type) {
            return tmp(4857).GroupIcon;
          } else if (tmp6.DM === type) {
            return tmp(4858).AtIcon;
          } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = tmp(4844).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = tmp(4859).AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = tmp(4860).AnnouncementsSpoilerIcon;
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = tmp(4861).AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = tmp(4862).AnnouncementsIcon;
            }
            return AnnouncementsWarningIcon;
          } else if (tmp6.GUILD_STAGE_VOICE === type) {
            if (result) {
              let ignoreTraits12;
              if (ignoreTraits != null) {
                ignoreTraits12 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits12) {
                if (importDefault(4834)(channel)) {
                  let StageLockIcon = tmp(4863).LockIcon;
                } else {
                  StageLockIcon = tmp(4864).StageLockIcon;
                }
                return StageLockIcon;
              }
            }
            if (locked) {
              let ignoreTraits13;
              if (ignoreTraits != null) {
                ignoreTraits13 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits13) {
                const LockIcon2 = tmp(4863).LockIcon;
              }
            }
            if (importDefault(4834)(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = tmp(4864).StageLockIcon;
              }
            }
            StageIcon = tmp(4865).StageIcon;
          } else if (tmp6.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = tmp(4840).ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (importDefault(4834)(channel)) {
                    VoiceLockIcon = tmp(4863).LockIcon;
                  } else {
                    VoiceLockIcon = tmp(4866).VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = tmp(4863).LockIcon;
                }
              }
              if (importDefault(4834)(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = tmp(4866).VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = tmp(4867).VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = tmp(4868).VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = tmp(4869).VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (tmp6.GUILD_DIRECTORY === type) {
            return tmp(4870).HubIcon;
          }
        }
      }
      return tmp(4842).ThreadIcon;
    }
  }
  const obj2 = require(4830) /* shouldShowMembershipVerificationGate */;
}
let result = require("mergeGuildAvatar").fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return importDefault(4805);
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        return null;
      }
    }
    return importDefault(4806);
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type) {
    let tmp2 = importDefault(4805);
  } else if (tmp.ANNOUNCEMENT_THREAD === type) {
    tmp2 = importDefault(4806);
  } else {
    tmp2 = null;
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const type3 = channel.type;
    if (tmp.PRIVATE_THREAD !== type3) {
      if (tmp.ANNOUNCEMENT_THREAD !== type3) {
        if (tmp.PUBLIC_THREAD !== type3) {
          if (tmp.GUILD_CATEGORY === type3) {
            return importDefault(4807);
          } else {
            if (tmp.GUILD_TEXT !== type3) {
              if (tmp.GUILD_FORUM !== type3) {
                if (tmp.GUILD_MEDIA !== type3) {
                  if (tmp.GROUP_DM === type3) {
                    return importDefault(4809);
                  } else if (tmp.DM === type3) {
                    return importDefault(4810);
                  } else if (tmp.GUILD_ANNOUNCEMENT === type3) {
                    return importDefault(4811);
                  } else if (tmp.GUILD_STAGE_VOICE === type3) {
                    return importDefault(4812);
                  } else if (tmp.GUILD_VOICE === type3) {
                    return importDefault(4813);
                  } else if (tmp.GUILD_DIRECTORY === type3) {
                    return importDefault(4814);
                  } else {
                    return null;
                  }
                }
              }
            }
            return importDefault(4808);
          }
        }
      }
    }
    const type2 = channel.type;
    if (tmp.PRIVATE_THREAD === type2) {
      let tmp23 = importDefault(4805);
    } else if (tmp.ANNOUNCEMENT_THREAD === type2) {
      tmp23 = importDefault(4806);
    } else {
      tmp23 = null;
    }
    return tmp23;
  }
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIcon(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {
  return importDefault(4829);
};
export { getChannelIcon };
export const getChannelIconComponentWithGuild = function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIconComponent(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export { getChannelIconComponent };
export const getSimpleChannelIconComponent = function getSimpleChannelIconComponent(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.GUILD_CATEGORY === type) {
          return require(4843) /* FolderIcon */.FolderIcon;
        } else if (tmp.GUILD_TEXT === type) {
          return require(4849) /* TextIcon */.TextIcon;
        } else if (tmp.GUILD_FORUM === type) {
          return require(4856) /* ForumIcon */.ForumIcon;
        } else if (tmp.GUILD_MEDIA === type) {
          return require(4855) /* ImageIcon */.ImageIcon;
        } else if (tmp.GROUP_DM === type) {
          return require(4857) /* GroupIcon */.GroupIcon;
        } else if (tmp.DM === type) {
          return require(4858) /* AtIcon */.AtIcon;
        } else if (tmp.GUILD_ANNOUNCEMENT === type) {
          return require(4862) /* AnnouncementsIcon */.AnnouncementsIcon;
        } else if (tmp.GUILD_STAGE_VOICE === type) {
          return require(4865) /* StageIcon */.StageIcon;
        } else if (tmp.GUILD_VOICE === type) {
          return require(4869) /* VoiceNormalIcon */.VoiceNormalIcon;
        } else if (tmp.GUILD_DIRECTORY === type) {
          return require(4870) /* HubIcon */.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp23(4840).ChatIcon;
  } else {
    ThreadIcon = tmp23(4842).ThreadIcon;
  }
  return ThreadIcon;
};
