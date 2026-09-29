// Module ID: 5271
// Function ID: 5272
// Name: utils/ChannelUtils
// Dependencies: [2041, 2105, 2063, 1372, 1074, 5272, 5273, 5274, 5275, 5276, 5277, 5278, 5279, 5280, 5281, 5282, 5283, 5284, 5285, 5286, 5287, 5288, 5289, 5290, 5291, 5292, 5293, 5294, 5295, 5296, 5297, 5298, 5299, 5300, 5303, 5304, 5313, 5309, 5314, 5315, 5316, 5317, 5318, 5319, 5312, 5320, 5321, 5322, 5323, 5324, 5325, 5326, 5327, 5328, 5329, 5330, 5331, 5332, 5333, 5334, 5335, 5336, 5337, 5338, 5339, 5340, 5341, 5342, 5343, 5344, 5345, 5346, 5347, 5348, 5349, 5350, 5351, 5352, 5353, 5354, 5311, 5310, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 5271 (utils/ChannelUtils)
import _modDef5272 from "module_5272" /* 5272 */;
import _modDef5273 from "module_5273" /* 5273 */;
import _modDef5274 from "module_5274" /* 5274 */;
import _modDef5275 from "module_5275" /* 5275 */;
import _modDef5276 from "module_5276" /* 5276 */;
import _modDef5277 from "module_5277" /* 5277 */;
import _modDef5278 from "module_5278" /* 5278 */;
import _modDef5279 from "module_5279" /* 5279 */;
import _modDef5280 from "module_5280" /* 5280 */;
import _modDef5281 from "module_5281" /* 5281 */;
import _modDef5282 from "module_5282" /* 5282 */;
import _modDef5283 from "module_5283" /* 5283 */;
import _modDef5284 from "module_5284" /* 5284 */;
import _modDef5285 from "module_5285" /* 5285 */;
import _modDef5286 from "module_5286" /* 5286 */;
import _modDef5287 from "module_5287" /* 5287 */;
import _modDef5288 from "module_5288" /* 5288 */;
import _modDef5289 from "module_5289" /* 5289 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef5291 from "module_5291" /* 5291 */;
import _modDef5292 from "module_5292" /* 5292 */;
import _modDef5293 from "module_5293" /* 5293 */;
import _modDef5294 from "module_5294" /* 5294 */;
import _modDef5295 from "module_5295" /* 5295 */;
import _modDef5296 from "module_5296" /* 5296 */;
import _modDef5297 from "module_5297" /* 5297 */;
import _modDef5298 from "module_5298" /* 5298 */;
import _modDef5299 from "module_5299" /* 5299 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5300 */;
import _modDef5303 from "module_5303" /* 5303 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5309 */;
import _modDef5313 from "module_5313" /* 5313 */;
import _modDef5319 from "module_5319" /* 5319 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

const getVibegrationsChannelIcon = tmp(5304);
const AppsIcon2 = tmp(5310);
const AppsLockIcon = tmp(5311);
const ExperimentalLfgIcon = tmp(5320);
const ChatIcon2 = tmp(5321);
const ThreadLockIcon = tmp(5322);
const ThreadIcon2 = tmp(5323);
const FolderIcon = tmp(5324);
const BookCheckIcon = tmp(5325);
const TextWarningIcon2 = tmp(5326);
const TextSpoilerIcon2 = tmp(5327);
const TextLockIcon2 = tmp(5328);
const TextControllerIcon = tmp(5329);
const TextIcon2 = tmp(5330);
const ImageWarningIcon2 = tmp(5331);
const ForumWarningIcon2 = tmp(5332);
const ForumSpoilerIcon3 = tmp(5333);
const ExperimentalLfgLockIcon = tmp(5334);
const ImageLockIcon = tmp(5335);
const ForumLockIcon2 = tmp(5336);
const ImageIcon2 = tmp(5337);
const ForumIcon2 = tmp(5338);
const GroupIcon = tmp(5339);
const AtIcon = tmp(5340);
const AnnouncementsWarningIcon2 = tmp(5341);
const AnnouncementsSpoilerIcon2 = tmp(5342);
const AnnouncementsLockIcon = tmp(5343);
const AnnouncementsIcon2 = tmp(5344);
const LockIcon3 = tmp(5345);
const StageLockIcon2 = tmp(5346);
const StageIcon2 = tmp(5347);
const VoiceLockIcon3 = tmp(5348);
const VoiceWarningIcon2 = tmp(5349);
const VoiceNormalSpoilerIcon = tmp(5350);
const VoiceNormalIcon2 = tmp(5351);
const HubIcon = tmp(5352);
const AppsWarningIcon = tmp(5353);
const AppsSpoilerIcon2 = tmp(5354);
require = fn;
function getChannelIcon(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let tmp96 = _modDef5303;
    } else {
      tmp96 = _modDef5291;
    }
    return tmp96;
  } else {
    const vibegrationsChannelIconSource = getVibegrationsChannelIcon.getVibegrationsChannelIconSource(channel, "getChannelIcon");
    if (null != vibegrationsChannelIconSource) {
      return vibegrationsChannelIconSource;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type2 = channel.type;
      if (ChannelTypes.PRIVATE_THREAD !== type2) {
        if (tmp100.ANNOUNCEMENT_THREAD !== type2) {
          if (tmp100.PUBLIC_THREAD !== type2) {
            if (tmp100.MEDIA_THREAD !== type2) {
              if (tmp100.GUILD_CATEGORY === type2) {
                return _modDef5274;
              } else if (tmp100.GUILD_TEXT === type2) {
                if (isRulesChannel) {
                  let tmp78 = _modDef5313;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp78 = _modDef5287;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      _modDef5288;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      tmp81(5297);
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let tmp81Result2 = tmp81(5314);
                  } else {
                    tmp81Result2 = tmp81(5275);
                  }
                }
                return tmp78;
              } else if (tmp100.GUILD_FORUM === type2) {
                if (isRulesChannel) {
                  let tmp65 = _modDef5313;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp65 = importDefault(isMediaChannelResult ? 5296 : 5293);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      _modDef5294;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let tmp68Result = tmp68(5315);
                      } else {
                        tmp68Result = tmp68(isMediaChannelResult ? 5316 : 5317);
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let tmp68Result2 = tmp68(5303);
                  } else {
                    tmp68Result2 = tmp68(isMediaChannelResult ? 5295 : 5292);
                  }
                }
                return tmp65;
              } else if (tmp100.GUILD_MEDIA === type2) {
                if (isRulesChannel) {
                  let tmp55 = _modDef5313;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp55 = _modDef5296;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      _modDef5294;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let tmp58Result = tmp58(5316);
                    }
                  }
                  tmp58Result = tmp58(5295);
                }
                return tmp55;
              } else if (tmp100.GROUP_DM === type2) {
                return _modDef5277;
              } else if (tmp100.DM === type2) {
                return _modDef5278;
              } else if (tmp100.GUILD_ANNOUNCEMENT === type2) {
                if (isRulesChannel) {
                  let tmp42 = _modDef5313;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp42 = _modDef5289;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      _modDef5290;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let tmp45Result = tmp45(5318);
                    }
                  }
                  tmp45Result = tmp45(5279);
                }
                return tmp42;
              } else if (tmp100.GUILD_STAGE_VOICE === type2) {
                if (result) {
                  let ignoreTraits12;
                  if (ignoreTraits != null) {
                    ignoreTraits12 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits12) {
                    if (isRoleRequiredDefault(channel)) {
                      let tmp31Result = tmp31(5319);
                    } else {
                      tmp31Result = tmp31(5286);
                    }
                    return tmp31Result;
                  }
                }
                if (locked) {
                  let ignoreTraits13;
                  if (ignoreTraits != null) {
                    ignoreTraits13 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits13) {
                    _modDef5319;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let tmp35Result = tmp35(5286);
                  }
                }
                tmp35Result = tmp35(5280);
              } else if (tmp100.GUILD_VOICE === type2) {
                if (obj.textFocused) {
                  let tmp16Result = _modDef5291;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = tmp16(5319);
                      } else {
                        tmp16Result = tmp16(5283);
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      _modDef5319;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      tmp20(5283);
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      tmp20(5284);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let tmp20Result4 = tmp20(5285);
                    }
                  }
                  tmp20Result4 = tmp20(5281);
                }
                return tmp16Result;
              } else if (tmp100.GUILD_DIRECTORY === type2) {
                return _modDef5282;
              } else if (tmp100.GUILD_APP === type2) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return _modDef5298;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    _modDef5299;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let tmp9Result = tmp9(5312);
                  }
                }
                tmp9Result = tmp9(5276);
              } else {
                if (tmp100.GUILD_STORE !== type2) {
                  if (tmp100.GUILD_SPACE !== type2) {
                    const UNKNOWN = tmp100.UNKNOWN;
                  }
                }
                return null;
              }
            }
          }
        }
      }
      const type = channel.type;
      if (ChannelTypes.PRIVATE_THREAD === type) {
        let tmp89 = _modDef5272;
      } else {
        if (tmp100.ANNOUNCEMENT_THREAD !== type) {
          if (tmp100.PUBLIC_THREAD !== type) {
            tmp89 = null;
          }
        }
        tmp89 = _modDef5273;
      }
      return tmp89;
    }
    const tmpResult = getVibegrationsChannelIcon;
  }
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let ChatIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
    } else {
      ChatIcon = ChatIcon2.ChatIcon;
    }
    return ChatIcon;
  } else {
    const vibegrationsChannelIconComponent = getVibegrationsChannelIcon.getVibegrationsChannelIconComponent(channel, "getChannelIconComponent");
    if (null != vibegrationsChannelIconComponent) {
      return vibegrationsChannelIconComponent;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type = channel.type;
      if (ChannelTypes.PRIVATE_THREAD === type) {
        return ThreadLockIcon.ThreadLockIcon;
      } else {
        if (tmp50.ANNOUNCEMENT_THREAD !== type) {
          if (tmp50.PUBLIC_THREAD !== type) {
            if (tmp50.MEDIA_THREAD !== type) {
              if (tmp50.GUILD_CATEGORY === type) {
                return FolderIcon.FolderIcon;
              } else if (tmp50.GUILD_TEXT === type) {
                if (isRulesChannel) {
                  let TextWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      TextWarningIcon = TextWarningIcon2.TextWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      const TextSpoilerIcon = TextSpoilerIcon2.TextSpoilerIcon;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      const TextLockIcon = TextLockIcon2.TextLockIcon;
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let TextIcon = TextControllerIcon.TextControllerIcon;
                  } else {
                    TextIcon = TextIcon2.TextIcon;
                  }
                }
                return TextWarningIcon;
              } else if (tmp50.GUILD_FORUM === type) {
                if (isRulesChannel) {
                  let ForumWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      if (isMediaChannelResult) {
                        ForumWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                      } else {
                        ForumWarningIcon = ForumWarningIcon2.ForumWarningIcon;
                      }
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      const ForumSpoilerIcon2 = ForumSpoilerIcon3.ForumSpoilerIcon;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let ForumLockIcon = ExperimentalLfgLockIcon.ExperimentalLfgLockIcon;
                      } else if (isMediaChannelResult) {
                        ForumLockIcon = ImageLockIcon.ImageLockIcon;
                      } else {
                        ForumLockIcon = ForumLockIcon2.ForumLockIcon;
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let ForumIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
                  } else if (isMediaChannelResult) {
                    ForumIcon = ImageIcon2.ImageIcon;
                  } else {
                    ForumIcon = ForumIcon2.ForumIcon;
                  }
                }
                return ForumWarningIcon;
              } else if (tmp50.GUILD_MEDIA === type) {
                if (isRulesChannel) {
                  let ImageWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      const ForumSpoilerIcon = ForumSpoilerIcon3.ForumSpoilerIcon;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let ImageIcon = ImageLockIcon.ImageLockIcon;
                    }
                  }
                  ImageIcon = ImageIcon2.ImageIcon;
                }
                return ImageWarningIcon;
              } else if (tmp50.GROUP_DM === type) {
                return GroupIcon.GroupIcon;
              } else if (tmp50.DM === type) {
                return AtIcon.AtIcon;
              } else if (tmp50.GUILD_ANNOUNCEMENT === type) {
                if (isRulesChannel) {
                  let AnnouncementsWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      AnnouncementsWarningIcon = AnnouncementsWarningIcon2.AnnouncementsWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      const AnnouncementsSpoilerIcon = AnnouncementsSpoilerIcon2.AnnouncementsSpoilerIcon;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let AnnouncementsIcon = AnnouncementsLockIcon.AnnouncementsLockIcon;
                    }
                  }
                  AnnouncementsIcon = AnnouncementsIcon2.AnnouncementsIcon;
                }
                return AnnouncementsWarningIcon;
              } else if (tmp50.GUILD_STAGE_VOICE === type) {
                if (result) {
                  let ignoreTraits12;
                  if (ignoreTraits != null) {
                    ignoreTraits12 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits12) {
                    if (isRoleRequiredDefault(channel)) {
                      let StageLockIcon = LockIcon3.LockIcon;
                    } else {
                      StageLockIcon = StageLockIcon2.StageLockIcon;
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
                    const LockIcon2 = LockIcon3.LockIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let StageIcon = StageLockIcon2.StageLockIcon;
                  }
                }
                StageIcon = StageIcon2.StageIcon;
              } else if (tmp50.GUILD_VOICE === type) {
                if (obj.textFocused) {
                  let VoiceLockIcon = ChatIcon2.ChatIcon;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        VoiceLockIcon = LockIcon3.LockIcon;
                      } else {
                        VoiceLockIcon = VoiceLockIcon3.VoiceLockIcon;
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      const LockIcon = LockIcon3.LockIcon;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      const VoiceLockIcon2 = VoiceLockIcon3.VoiceLockIcon;
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      const VoiceWarningIcon = VoiceWarningIcon2.VoiceWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let VoiceNormalIcon = VoiceNormalSpoilerIcon.VoiceNormalSpoilerIcon;
                    }
                  }
                  VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
                }
                return VoiceLockIcon;
              } else if (tmp50.GUILD_DIRECTORY === type) {
                return HubIcon.HubIcon;
              } else if (tmp50.GUILD_APP === type) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return AppsWarningIcon.AppsWarningIcon;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    const AppsSpoilerIcon = AppsSpoilerIcon2.AppsSpoilerIcon;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let AppsIcon = AppsLockIcon.AppsLockIcon;
                  }
                }
                AppsIcon = AppsIcon2.AppsIcon;
              }
            }
          }
        }
        return ThreadIcon2.ThreadIcon;
      }
    }
    const tmpResult = getVibegrationsChannelIcon;
  }
}
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return _modDef5272;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        if (tmp.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5273;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return _modDef5274;
          } else {
            if (tmp.GUILD_TEXT !== type) {
              if (tmp.GUILD_FORUM !== type) {
                if (tmp.GUILD_MEDIA !== type) {
                  if (tmp.GUILD_APP === type) {
                    return _modDef5276;
                  } else if (tmp.GROUP_DM === type) {
                    return _modDef5277;
                  } else if (tmp.DM === type) {
                    return _modDef5278;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5279;
                  } else if (tmp.GUILD_STAGE_VOICE === type) {
                    return _modDef5280;
                  } else if (tmp.GUILD_VOICE === type) {
                    return _modDef5281;
                  } else if (tmp.GUILD_DIRECTORY === type) {
                    return _modDef5282;
                  } else {
                    if (tmp.GUILD_STORE !== type) {
                      if (tmp.GUILD_SPACE !== type) {
                        const UNKNOWN = tmp.UNKNOWN;
                      }
                    }
                    return null;
                  }
                }
              }
            }
            return _modDef5275;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5272;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type2) {
      if (tmp.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5273;
  }
  return tmp21;
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIcon(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {
  switch (iconType) {
    case "voice":
      return _modDef5281;
    case "voice-locked":
      return _modDef5283;
    case "voice-nsfw":
      return _modDef5284;
    case "voice-spoiler":
      return _modDef5285;
    case "stage":
      return _modDef5280;
    case "stage-locked":
      return _modDef5286;
    case "text":
      return _modDef5275;
    case "text-nsfw":
      return _modDef5287;
    case "text-spoiler":
      return _modDef5288;
    case "announcement":
      return _modDef5279;
    case "announcement-nsfw":
      return _modDef5289;
    case "announcement-spoiler":
      return _modDef5290;
    case "thread":
      return _modDef5273;
    case "post":
      let tmp21 = _modDef5291;
      return tmp21;
    case "message":
      tmp21 = _modDef5291;
      return tmp21;
    case "forum":
      return _modDef5292;
    case "forum-nsfw":
      return _modDef5293;
    case "forum-spoiler":
      return _modDef5294;
    case "media":
      return _modDef5295;
    case "media-nsfw":
      return _modDef5296;
    case "locked":
      return _modDef5297;
    case "app":
      return _modDef5276;
    case "app-nsfw":
      return _modDef5298;
    case "app-spoiler":
      return _modDef5299;
    default:
      return null;
  }
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
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return FolderIcon.FolderIcon;
          } else if (tmp.GUILD_TEXT === type) {
            return TextIcon2.TextIcon;
          } else if (tmp.GUILD_FORUM === type) {
            return ForumIcon2.ForumIcon;
          } else if (tmp.GUILD_MEDIA === type) {
            return ImageIcon2.ImageIcon;
          } else if (tmp.GROUP_DM === type) {
            return GroupIcon.GroupIcon;
          } else if (tmp.DM === type) {
            return AtIcon.AtIcon;
          } else if (tmp.GUILD_ANNOUNCEMENT === type) {
            return AnnouncementsIcon2.AnnouncementsIcon;
          } else if (tmp.GUILD_STAGE_VOICE === type) {
            return StageIcon2.StageIcon;
          } else if (tmp.GUILD_VOICE === type) {
            return VoiceNormalIcon2.VoiceNormalIcon;
          } else if (tmp.GUILD_DIRECTORY === type) {
            return HubIcon.HubIcon;
          } else if (tmp.GUILD_APP === type) {
            return AppsIcon2.AppsIcon;
          } else {
            if (tmp.GUILD_STORE !== type) {
              if (tmp.GUILD_SPACE !== type) {
                const UNKNOWN = tmp.UNKNOWN;
              }
            }
            return null;
          }
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp25(5321).ChatIcon;
  } else {
    ThreadIcon = tmp25(5323).ThreadIcon;
  }
  return ThreadIcon;
};
