// Module ID: 4745
// Function ID: 4746
// Name: getChannelIcon
// Dependencies: [1971, 1891, 1903, 676, 4746, 4747, 4748, 4749, 4750, 4751, 4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 4745 (getChannelIcon)
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
  const result = require(4771) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return importDefault(4764);
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      let tmp4 = importDefault(4746);
    } else if (tmp3.ANNOUNCEMENT_THREAD === type) {
      tmp4 = importDefault(4747);
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
              return importDefault(4748);
            } else if (tmp3.GUILD_TEXT === type3) {
              if (isRulesChannel) {
                let tmp69 = importDefault(4774);
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp69 = importDefault(4760);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    importDefault(4761);
                  }
                }
                if (importDefault(4775)(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp72Result = tmp72(4770);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp72Result = tmp72(4776);
                } else {
                  tmp72Result = tmp72(4749);
                }
              }
              return tmp69;
            } else if (tmp3.GUILD_FORUM === type3) {
              if (isRulesChannel) {
                let tmp58 = importDefault(4774);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp58 = importDefault(isMediaChannelResult ? 4769 : 4766);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    importDefault(4767);
                  }
                }
                if (importDefault(4775)(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    tmp61(isMediaChannelResult ? 4777 : 4778);
                  }
                }
                importDefault(isMediaChannelResult ? 4768 : 4765);
              }
              return tmp58;
            } else if (tmp3.GUILD_MEDIA === type3) {
              if (isRulesChannel) {
                let tmp48 = importDefault(4774);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp48 = importDefault(4769);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    importDefault(4767);
                  }
                }
                if (importDefault(4775)(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp51Result = tmp51(4777);
                  }
                }
                tmp51Result = tmp51(4768);
              }
              return tmp48;
            } else if (tmp3.GROUP_DM === type3) {
              return importDefault(4750);
            } else if (tmp3.DM === type3) {
              return importDefault(4751);
            } else if (tmp3.GUILD_ANNOUNCEMENT === type3) {
              if (isRulesChannel) {
                let tmp35 = importDefault(4774);
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp35 = importDefault(4762);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    importDefault(4763);
                  }
                }
                if (importDefault(4775)(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp38Result = tmp38(4779);
                  }
                }
                tmp38Result = tmp38(4752);
              }
              return tmp35;
            } else if (tmp3.GUILD_STAGE_VOICE === type3) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (importDefault(4775)(channel)) {
                    let tmp24Result = tmp24(4780);
                  } else {
                    tmp24Result = tmp24(4759);
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
                  importDefault(4780);
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp28Result = tmp28(4759);
                }
              }
              tmp28Result = tmp28(4753);
            } else if (tmp3.GUILD_VOICE === type3) {
              if (obj.textFocused) {
                let tmp9Result = importDefault(4764);
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (importDefault(4775)(channel)) {
                      tmp9Result = tmp9(4780);
                    } else {
                      tmp9Result = tmp9(4756);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    importDefault(4780);
                  }
                }
                if (importDefault(4775)(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp13(4756);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp13(4757);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = tmp13(4758);
                  }
                }
                tmp13Result1 = tmp13(4754);
              }
              return tmp9Result;
            } else if (tmp3.GUILD_DIRECTORY === type3) {
              return importDefault(4755);
            } else {
              return null;
            }
          }
        }
      }
      const type2 = channel.type;
      if (tmp3.PRIVATE_THREAD === type2) {
        let tmp80 = importDefault(4746);
      } else if (tmp3.ANNOUNCEMENT_THREAD === type2) {
        tmp80 = importDefault(4747);
      } else {
        tmp80 = null;
      }
      return tmp80;
    }
  }
  const obj2 = require(4771) /* shouldShowMembershipVerificationGate */;
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
  const result = require(4771) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return tmp(4781).ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return tmp(4782).ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.GUILD_CATEGORY === type) {
            return tmp(4784).FolderIcon;
          } else if (tmp6.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = tmp(4785).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = tmp(4786).TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = tmp(4787).TextSpoilerIcon;
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = tmp(4788).TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = tmp(4789).TextControllerIcon;
              } else {
                TextIcon = tmp(4790).TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (tmp6.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = tmp(4785).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = tmp(4791).ImageWarningIcon;
                  } else {
                    ForumWarningIcon = tmp(4792).ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = tmp(4793).ForumSpoilerIcon;
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (isMediaChannelResult) {
                    let ForumLockIcon = tmp(4794).ImageLockIcon;
                  } else {
                    ForumLockIcon = tmp(4795).ForumLockIcon;
                  }
                }
              }
              if (isMediaChannelResult) {
                let ForumIcon = tmp(4796).ImageIcon;
              } else {
                ForumIcon = tmp(4797).ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (tmp6.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = tmp(4785).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = tmp(4791).ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = tmp(4793).ForumSpoilerIcon;
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = tmp(4794).ImageLockIcon;
                }
              }
              ImageIcon = tmp(4796).ImageIcon;
            }
            return ImageWarningIcon;
          } else if (tmp6.GROUP_DM === type) {
            return tmp(4798).GroupIcon;
          } else if (tmp6.DM === type) {
            return tmp(4799).AtIcon;
          } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = tmp(4785).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = tmp(4800).AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = tmp(4801).AnnouncementsSpoilerIcon;
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = tmp(4802).AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = tmp(4803).AnnouncementsIcon;
            }
            return AnnouncementsWarningIcon;
          } else if (tmp6.GUILD_STAGE_VOICE === type) {
            if (result) {
              let ignoreTraits12;
              if (ignoreTraits != null) {
                ignoreTraits12 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits12) {
                if (importDefault(4775)(channel)) {
                  let StageLockIcon = tmp(4804).LockIcon;
                } else {
                  StageLockIcon = tmp(4805).StageLockIcon;
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
                const LockIcon2 = tmp(4804).LockIcon;
              }
            }
            if (importDefault(4775)(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = tmp(4805).StageLockIcon;
              }
            }
            StageIcon = tmp(4806).StageIcon;
          } else if (tmp6.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = tmp(4781).ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (importDefault(4775)(channel)) {
                    VoiceLockIcon = tmp(4804).LockIcon;
                  } else {
                    VoiceLockIcon = tmp(4807).VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = tmp(4804).LockIcon;
                }
              }
              if (importDefault(4775)(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = tmp(4807).VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = tmp(4808).VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = tmp(4809).VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = tmp(4810).VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (tmp6.GUILD_DIRECTORY === type) {
            return tmp(4811).HubIcon;
          }
        }
      }
      return tmp(4783).ThreadIcon;
    }
  }
  const obj2 = require(4771) /* shouldShowMembershipVerificationGate */;
}
let result = require("mergeGuildAvatar").fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return importDefault(4746);
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        return null;
      }
    }
    return importDefault(4747);
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type) {
    let tmp2 = importDefault(4746);
  } else if (tmp.ANNOUNCEMENT_THREAD === type) {
    tmp2 = importDefault(4747);
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
            return importDefault(4748);
          } else {
            if (tmp.GUILD_TEXT !== type3) {
              if (tmp.GUILD_FORUM !== type3) {
                if (tmp.GUILD_MEDIA !== type3) {
                  if (tmp.GROUP_DM === type3) {
                    return importDefault(4750);
                  } else if (tmp.DM === type3) {
                    return importDefault(4751);
                  } else if (tmp.GUILD_ANNOUNCEMENT === type3) {
                    return importDefault(4752);
                  } else if (tmp.GUILD_STAGE_VOICE === type3) {
                    return importDefault(4753);
                  } else if (tmp.GUILD_VOICE === type3) {
                    return importDefault(4754);
                  } else if (tmp.GUILD_DIRECTORY === type3) {
                    return importDefault(4755);
                  } else {
                    return null;
                  }
                }
              }
            }
            return importDefault(4749);
          }
        }
      }
    }
    const type2 = channel.type;
    if (tmp.PRIVATE_THREAD === type2) {
      let tmp23 = importDefault(4746);
    } else if (tmp.ANNOUNCEMENT_THREAD === type2) {
      tmp23 = importDefault(4747);
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
          return require(4784) /* FolderIcon */.FolderIcon;
        } else if (tmp.GUILD_TEXT === type) {
          return require(4790) /* TextIcon */.TextIcon;
        } else if (tmp.GUILD_FORUM === type) {
          return require(4797) /* ForumIcon */.ForumIcon;
        } else if (tmp.GUILD_MEDIA === type) {
          return require(4796) /* ImageIcon */.ImageIcon;
        } else if (tmp.GROUP_DM === type) {
          return require(4798) /* GroupIcon */.GroupIcon;
        } else if (tmp.DM === type) {
          return require(4799) /* AtIcon */.AtIcon;
        } else if (tmp.GUILD_ANNOUNCEMENT === type) {
          return require(4803) /* AnnouncementsIcon */.AnnouncementsIcon;
        } else if (tmp.GUILD_STAGE_VOICE === type) {
          return require(4806) /* StageIcon */.StageIcon;
        } else if (tmp.GUILD_VOICE === type) {
          return require(4810) /* VoiceNormalIcon */.VoiceNormalIcon;
        } else if (tmp.GUILD_DIRECTORY === type) {
          return require(4811) /* HubIcon */.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp23(4781).ChatIcon;
  } else {
    ThreadIcon = tmp23(4783).ThreadIcon;
  }
  return ThreadIcon;
};
