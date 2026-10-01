// Module ID: 5335
// Function ID: 5336
// Name: utils/ChannelUtils
// Dependencies: [2045, 2108, 2067, 1372, 1074, 5336, 5337, 5338, 5339, 5340, 5341, 5342, 5343, 5344, 5345, 5346, 5347, 5348, 5349, 5350, 5351, 5352, 5353, 5354, 5355, 5356, 5357, 5358, 5359, 5360, 5361, 5362, 5363, 5364, 5367, 5368, 5377, 5373, 5378, 5379, 5380, 5381, 5382, 5383, 5376, 5384, 5385, 5386, 5387, 5388, 5389, 5390, 5391, 5392, 5393, 5394, 5395, 5396, 5397, 5398, 5399, 5400, 5401, 5402, 5403, 5404, 5405, 5406, 5407, 5408, 5409, 5410, 5411, 5412, 5413, 5414, 5415, 5416, 5417, 5418, 5375, 5374, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 5335 (utils/ChannelUtils)
import Constants from "Constants" /* 1074 */;
import AssetRegistryDefault from "AssetRegistry" /* 5336 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 5337 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 5338 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 5339 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 5340 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 5341 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 5342 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 5343 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 5344 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 5345 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 5346 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 5347 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 5348 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 5349 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 5350 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 5351 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 5352 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 5353 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 5354 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 5355 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 5356 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 5357 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 5358 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 5359 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 5360 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 5361 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 5362 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 5363 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5364 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 5367 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5373 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 5377 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 5383 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let tmp;
const getVibegrationsChannelIcon = tmp(5368);
const AppsIcon2 = tmp(5374);
const AppsLockIcon = tmp(5375);
const ExperimentalLfgIcon = tmp(5384);
const ChatIcon2 = tmp(5385);
const ThreadLockIcon = tmp(5386);
const ThreadIcon2 = tmp(5387);
const FolderIcon = tmp(5388);
const BookCheckIcon = tmp(5389);
const TextWarningIcon2 = tmp(5390);
const TextSpoilerIcon2 = tmp(5391);
const TextLockIcon2 = tmp(5392);
const TextControllerIcon = tmp(5393);
const TextIcon2 = tmp(5394);
const ImageWarningIcon2 = tmp(5395);
const ForumWarningIcon2 = tmp(5396);
const ForumSpoilerIcon3 = tmp(5397);
const ExperimentalLfgLockIcon = tmp(5398);
const ImageLockIcon = tmp(5399);
const ForumLockIcon2 = tmp(5400);
const ImageIcon2 = tmp(5401);
const ForumIcon2 = tmp(5402);
const GroupIcon = tmp(5403);
const AtIcon = tmp(5404);
const AnnouncementsWarningIcon2 = tmp(5405);
const AnnouncementsSpoilerIcon2 = tmp(5406);
const AnnouncementsLockIcon = tmp(5407);
const AnnouncementsIcon2 = tmp(5408);
const LockIcon3 = tmp(5409);
const StageLockIcon2 = tmp(5410);
const StageIcon2 = tmp(5411);
const VoiceLockIcon3 = tmp(5412);
const VoiceWarningIcon2 = tmp(5413);
const VoiceNormalSpoilerIcon = tmp(5414);
const VoiceNormalIcon2 = tmp(5415);
const HubIcon = tmp(5416);
const AppsWarningIcon2 = tmp(5417);
const AppsSpoilerIcon2 = tmp(5418);
function getChannelIcon(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const textFocused = obj.textFocused;
  const items = [GuildStore, UserStore, GuildMemberStore];
  const obj2 = useShowMemberVerificationGate;
  const result = obj2.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    let tmp89;
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      tmp89 = AssetRegistryDefault29;
    } else {
      tmp89 = AssetRegistryDefault20;
    }
    return tmp89;
  } else {
    const tmpResult = getVibegrationsChannelIcon;
    const vibegrationsChannelIconSource = tmpResult.getVibegrationsChannelIconSource(channel, "getChannelIcon");
    if (null != vibegrationsChannelIconSource) {
      return vibegrationsChannelIconSource;
    } else {
      let tmp82;
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type2 = channel.type;
      if (ChannelTypes.PRIVATE_THREAD !== type2) {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
          if (ChannelTypes.PUBLIC_THREAD !== type2) {
            if (ChannelTypes.MEDIA_THREAD !== type2) {
              if (ChannelTypes.GUILD_CATEGORY === type2) {
                return AssetRegistryDefault3;
              } else if (ChannelTypes.GUILD_TEXT === type2) {
                let tmp72;
                if (isRulesChannel) {
                  tmp72 = AssetRegistryDefault30;
                } else {
                  let tmp75;
                  let tmp76Result2;
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp72 = AssetRegistryDefault16;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      tmp75 = AssetRegistryDefault17;
                    }
                    tmp72 = tmp75;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let tmp76Result;
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      tmp76Result = tmp76(5361);
                    }
                    tmp75 = tmp76Result;
                  }
                  if (null != channel.linkedLobby) {
                    tmp76Result2 = tmp76(5378);
                  } else {
                    tmp76Result2 = tmp76(5339);
                  }
                  tmp76Result = tmp76Result2;
                }
                return tmp72;
              } else if (ChannelTypes.GUILD_FORUM === type2) {
                let tmp61;
                if (isRulesChannel) {
                  tmp61 = AssetRegistryDefault30;
                } else {
                  let tmp64;
                  let tmp65Result2;
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp61 = importDefault(isMediaChannelResult ? 5360 : 5357);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      tmp64 = AssetRegistryDefault23;
                    }
                    tmp61 = tmp64;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let tmp65Result;
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        tmp65Result = tmp65(5379);
                      } else {
                        tmp65Result = tmp65(isMediaChannelResult ? 5380 : 5381);
                      }
                    }
                    tmp64 = tmp65Result;
                  }
                  if (channel.isGameInvitesChannel()) {
                    tmp65Result2 = tmp65(5367);
                  } else {
                    tmp65Result2 = tmp65(isMediaChannelResult ? 5359 : 5356);
                  }
                  tmp65Result = tmp65Result2;
                }
                return tmp61;
              } else if (ChannelTypes.GUILD_MEDIA === type2) {
                let tmp52;
                if (isRulesChannel) {
                  tmp52 = AssetRegistryDefault30;
                } else {
                  let tmp55;
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp52 = AssetRegistryDefault25;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      tmp55 = AssetRegistryDefault23;
                    }
                    tmp52 = tmp55;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let tmp56Result;
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      tmp56Result = tmp56(5380);
                    }
                    tmp55 = tmp56Result;
                  }
                  tmp56Result = tmp56(5359);
                }
                return tmp52;
              } else if (ChannelTypes.GROUP_DM === type2) {
                return AssetRegistryDefault6;
              } else if (ChannelTypes.DM === type2) {
                return AssetRegistryDefault7;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type2) {
                let tmp40;
                if (isRulesChannel) {
                  tmp40 = AssetRegistryDefault30;
                } else {
                  let tmp43;
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp40 = AssetRegistryDefault18;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      tmp43 = AssetRegistryDefault19;
                    }
                    tmp40 = tmp43;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let tmp44Result;
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      tmp44Result = tmp44(5382);
                    }
                    tmp43 = tmp44Result;
                  }
                  tmp44Result = tmp44(5343);
                }
                return tmp40;
              } else if (ChannelTypes.GUILD_STAGE_VOICE === type2) {
                let tmp30Result;
                let tmp34;
                if (result) {
                  let ignoreTraits12;
                  if (ignoreTraits != null) {
                    ignoreTraits12 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits12) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp30Result = tmp30(5383);
                    } else {
                      tmp30Result = tmp30(5350);
                    }
                  }
                  return tmp30Result;
                }
                if (locked) {
                  let ignoreTraits13;
                  if (ignoreTraits != null) {
                    ignoreTraits13 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits13) {
                    tmp34 = AssetRegistryDefault31;
                  }
                  tmp30Result = tmp34;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp35Result;
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    tmp35Result = tmp35(5350);
                  }
                  tmp34 = tmp35Result;
                }
                tmp35Result = tmp35(5344);
              } else if (ChannelTypes.GUILD_VOICE === type2) {
                let tmp16Result;
                if (textFocused) {
                  tmp16Result = AssetRegistryDefault20;
                } else {
                  let tmp20;
                  let tmp21Result;
                  let tmp21Result3;
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = tmp16(5383);
                      } else {
                        tmp16Result = tmp16(5347);
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      tmp20 = AssetRegistryDefault31;
                    }
                    tmp16Result = tmp20;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      tmp21Result = tmp21(5347);
                    }
                    tmp20 = tmp21Result;
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      tmp21Result3 = tmp21(5348);
                    }
                    tmp21Result = tmp21Result3;
                  }
                  if (channel.isSpoilerChannel()) {
                    let tmp21Result4;
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      tmp21Result4 = tmp21(5349);
                    }
                    tmp21Result3 = tmp21Result4;
                  }
                  tmp21Result4 = tmp21(5345);
                }
                return tmp16Result;
              } else if (ChannelTypes.GUILD_DIRECTORY === type2) {
                return AssetRegistryDefault11;
              } else if (ChannelTypes.GUILD_APP === type2) {
                let tmp7;
                let tmp10;
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    tmp7 = AssetRegistryDefault27;
                  }
                  return tmp7;
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    tmp10 = AssetRegistryDefault28;
                  }
                  tmp7 = tmp10;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp11Result;
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    tmp11Result = tmp11(5376);
                  }
                  tmp10 = tmp11Result;
                }
                tmp11Result = tmp11(5340);
              } else {
                if (ChannelTypes.GUILD_STORE !== type2) {
                  if (ChannelTypes.GUILD_SPACE !== type2) {
                    const UNKNOWN = tmp93.UNKNOWN;
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
        tmp82 = AssetRegistryDefault;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            tmp82 = null;
          }
        }
        tmp82 = AssetRegistryDefault2;
      }
      return tmp82;
    }
  }
}
function getChannelIconComponent(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const textFocused = obj.textFocused;
  const items = [GuildStore, UserStore, GuildMemberStore];
  const obj2 = useShowMemberVerificationGate;
  const result = obj2.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    let ChatIcon;
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      ChatIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
    } else {
      ChatIcon = ChatIcon2.ChatIcon;
    }
    return ChatIcon;
  } else {
    const tmpResult = getVibegrationsChannelIcon;
    const vibegrationsChannelIconComponent = tmpResult.getVibegrationsChannelIconComponent(channel, "getChannelIconComponent");
    if (null != vibegrationsChannelIconComponent) {
      return vibegrationsChannelIconComponent;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type = channel.type;
      if (ChannelTypes.PRIVATE_THREAD === type) {
        return ThreadLockIcon.ThreadLockIcon;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            if (ChannelTypes.MEDIA_THREAD !== type) {
              if (ChannelTypes.GUILD_CATEGORY === type) {
                return FolderIcon.FolderIcon;
              } else if (ChannelTypes.GUILD_TEXT === type) {
                let TextWarningIcon;
                if (isRulesChannel) {
                  TextWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  let TextSpoilerIcon;
                  let TextIcon;
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
                      TextSpoilerIcon = TextSpoilerIcon2.TextSpoilerIcon;
                    }
                    TextWarningIcon = TextSpoilerIcon;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let TextLockIcon;
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      TextLockIcon = TextLockIcon2.TextLockIcon;
                    }
                    TextSpoilerIcon = TextLockIcon;
                  }
                  if (null != channel.linkedLobby) {
                    TextIcon = TextControllerIcon.TextControllerIcon;
                  } else {
                    TextIcon = TextIcon2.TextIcon;
                  }
                  TextLockIcon = TextIcon;
                }
                return TextWarningIcon;
              } else if (ChannelTypes.GUILD_FORUM === type) {
                let ForumWarningIcon;
                if (isRulesChannel) {
                  ForumWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  let ForumSpoilerIcon2;
                  let ForumIcon;
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
                      ForumSpoilerIcon2 = ForumSpoilerIcon3.ForumSpoilerIcon;
                    }
                    ForumWarningIcon = ForumSpoilerIcon2;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ForumLockIcon;
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        ForumLockIcon = ExperimentalLfgLockIcon.ExperimentalLfgLockIcon;
                      } else if (isMediaChannelResult) {
                        ForumLockIcon = ImageLockIcon.ImageLockIcon;
                      } else {
                        ForumLockIcon = ForumLockIcon2.ForumLockIcon;
                      }
                    }
                    ForumSpoilerIcon2 = ForumLockIcon;
                  }
                  if (channel.isGameInvitesChannel()) {
                    ForumIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
                  } else if (isMediaChannelResult) {
                    ForumIcon = ImageIcon2.ImageIcon;
                  } else {
                    ForumIcon = ForumIcon2.ForumIcon;
                  }
                  ForumLockIcon = ForumIcon;
                }
                return ForumWarningIcon;
              } else if (ChannelTypes.GUILD_MEDIA === type) {
                let ImageWarningIcon;
                if (isRulesChannel) {
                  ImageWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  let ForumSpoilerIcon;
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
                      ForumSpoilerIcon = ForumSpoilerIcon3.ForumSpoilerIcon;
                    }
                    ImageWarningIcon = ForumSpoilerIcon;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ImageIcon;
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      ImageIcon = ImageLockIcon.ImageLockIcon;
                    }
                    ForumSpoilerIcon = ImageIcon;
                  }
                  ImageIcon = ImageIcon2.ImageIcon;
                }
                return ImageWarningIcon;
              } else if (ChannelTypes.GROUP_DM === type) {
                return GroupIcon.GroupIcon;
              } else if (ChannelTypes.DM === type) {
                return AtIcon.AtIcon;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                let AnnouncementsWarningIcon;
                if (isRulesChannel) {
                  AnnouncementsWarningIcon = BookCheckIcon.BookCheckIcon;
                } else {
                  let AnnouncementsSpoilerIcon;
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
                      AnnouncementsSpoilerIcon = AnnouncementsSpoilerIcon2.AnnouncementsSpoilerIcon;
                    }
                    AnnouncementsWarningIcon = AnnouncementsSpoilerIcon;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let AnnouncementsIcon;
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      AnnouncementsIcon = AnnouncementsLockIcon.AnnouncementsLockIcon;
                    }
                    AnnouncementsSpoilerIcon = AnnouncementsIcon;
                  }
                  AnnouncementsIcon = AnnouncementsIcon2.AnnouncementsIcon;
                }
                return AnnouncementsWarningIcon;
              } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                let StageLockIcon;
                let LockIcon2;
                if (result) {
                  let ignoreTraits12;
                  if (ignoreTraits != null) {
                    ignoreTraits12 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits12) {
                    if (isRoleRequiredDefault(channel)) {
                      StageLockIcon = LockIcon3.LockIcon;
                    } else {
                      StageLockIcon = StageLockIcon2.StageLockIcon;
                    }
                  }
                  return StageLockIcon;
                }
                if (locked) {
                  let ignoreTraits13;
                  if (ignoreTraits != null) {
                    ignoreTraits13 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits13) {
                    LockIcon2 = LockIcon3.LockIcon;
                  }
                  StageLockIcon = LockIcon2;
                }
                if (isRoleRequiredDefault(channel)) {
                  let StageIcon;
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    StageIcon = StageLockIcon2.StageLockIcon;
                  }
                  LockIcon2 = StageIcon;
                }
                StageIcon = StageIcon2.StageIcon;
              } else if (ChannelTypes.GUILD_VOICE === type) {
                let VoiceLockIcon;
                if (textFocused) {
                  VoiceLockIcon = ChatIcon2.ChatIcon;
                } else {
                  let LockIcon;
                  let VoiceLockIcon2;
                  let VoiceWarningIcon;
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
                      LockIcon = LockIcon3.LockIcon;
                    }
                    VoiceLockIcon = LockIcon;
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      VoiceLockIcon2 = VoiceLockIcon3.VoiceLockIcon;
                    }
                    LockIcon = VoiceLockIcon2;
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      VoiceWarningIcon = VoiceWarningIcon2.VoiceWarningIcon;
                    }
                    VoiceLockIcon2 = VoiceWarningIcon;
                  }
                  if (channel.isSpoilerChannel()) {
                    let VoiceNormalIcon;
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      VoiceNormalIcon = VoiceNormalSpoilerIcon.VoiceNormalSpoilerIcon;
                    }
                    VoiceWarningIcon = VoiceNormalIcon;
                  }
                  VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
                }
                return VoiceLockIcon;
              } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                return HubIcon.HubIcon;
              } else if (ChannelTypes.GUILD_APP === type) {
                let AppsWarningIcon;
                let AppsSpoilerIcon;
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    AppsWarningIcon = AppsWarningIcon2.AppsWarningIcon;
                  }
                  return AppsWarningIcon;
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    AppsSpoilerIcon = AppsSpoilerIcon2.AppsSpoilerIcon;
                  }
                  AppsWarningIcon = AppsSpoilerIcon;
                }
                if (isRoleRequiredDefault(channel)) {
                  let AppsIcon;
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    AppsIcon = AppsLockIcon.AppsLockIcon;
                  }
                  AppsSpoilerIcon = AppsIcon;
                }
                AppsIcon = AppsIcon2.AppsIcon;
              }
            }
          }
        }
        return ThreadIcon2.ThreadIcon;
      }
    }
  }
}
const ChannelTypes = Constants.ChannelTypes;
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return AssetRegistryDefault;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return AssetRegistryDefault2;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  let tmp21;
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return AssetRegistryDefault3;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return AssetRegistryDefault5;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return AssetRegistryDefault6;
                  } else if (ChannelTypes.DM === type) {
                    return AssetRegistryDefault7;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return AssetRegistryDefault8;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return AssetRegistryDefault9;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return AssetRegistryDefault10;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return AssetRegistryDefault11;
                  } else {
                    if (ChannelTypes.GUILD_STORE !== type) {
                      if (ChannelTypes.GUILD_SPACE !== type) {
                        const UNKNOWN = tmp.UNKNOWN;
                      }
                    }
                    return null;
                  }
                }
              }
            }
            return AssetRegistryDefault4;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    tmp21 = AssetRegistryDefault;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = AssetRegistryDefault2;
  }
  return tmp21;
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  const tmp = getChannelIcon;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  const obj = { isRulesChannel: rulesChannelId === channel.id };
  return tmp(channel, obj);
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {
  let tmp21;
  switch (iconType) {
    case "voice":
    {
      return AssetRegistryDefault10;
    }
    case "voice-locked":
    {
      return AssetRegistryDefault12;
    }
    case "voice-nsfw":
    {
      return AssetRegistryDefault13;
    }
    case "voice-spoiler":
    {
      return AssetRegistryDefault14;
    }
    case "stage":
    {
      return AssetRegistryDefault9;
    }
    case "stage-locked":
    {
      return AssetRegistryDefault15;
    }
    case "text":
    {
      return AssetRegistryDefault4;
    }
    case "text-nsfw":
    {
      return AssetRegistryDefault16;
    }
    case "text-spoiler":
    {
      return AssetRegistryDefault17;
    }
    case "announcement":
    {
      return AssetRegistryDefault8;
    }
    case "announcement-nsfw":
    {
      return AssetRegistryDefault18;
    }
    case "announcement-spoiler":
    {
      return AssetRegistryDefault19;
    }
    case "thread":
    {
      return AssetRegistryDefault2;
    }
    case "post":
    {
      tmp21 = AssetRegistryDefault20;
      return tmp21;
    }
    case "message":
    {
      tmp21 = AssetRegistryDefault20;
      return tmp21;
    }
    case "forum":
    {
      return AssetRegistryDefault21;
    }
    case "forum-nsfw":
    {
      return AssetRegistryDefault22;
    }
    case "forum-spoiler":
    {
      return AssetRegistryDefault23;
    }
    case "media":
    {
      return AssetRegistryDefault24;
    }
    case "media-nsfw":
    {
      return AssetRegistryDefault25;
    }
    case "locked":
    {
      return AssetRegistryDefault26;
    }
    case "app":
    {
      return AssetRegistryDefault5;
    }
    case "app-nsfw":
    {
      return AssetRegistryDefault27;
    }
    case "app-spoiler":
    {
      return AssetRegistryDefault28;
    }
    default:
    {
      return null;
    }
  }
};
export { getChannelIcon };
export const getChannelIconComponentWithGuild = function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  const tmp = getChannelIconComponent;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  const obj = { isRulesChannel: rulesChannelId === channel.id };
  return tmp(channel, obj);
};
export { getChannelIconComponent };
export const getSimpleChannelIconComponent = function getSimpleChannelIconComponent(channel) {
  let ThreadIcon;
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return FolderIcon.FolderIcon;
          } else if (ChannelTypes.GUILD_TEXT === type) {
            return TextIcon2.TextIcon;
          } else if (ChannelTypes.GUILD_FORUM === type) {
            return ForumIcon2.ForumIcon;
          } else if (ChannelTypes.GUILD_MEDIA === type) {
            return ImageIcon2.ImageIcon;
          } else if (ChannelTypes.GROUP_DM === type) {
            return GroupIcon.GroupIcon;
          } else if (ChannelTypes.DM === type) {
            return AtIcon.AtIcon;
          } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
            return AnnouncementsIcon2.AnnouncementsIcon;
          } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
            return StageIcon2.StageIcon;
          } else if (ChannelTypes.GUILD_VOICE === type) {
            return VoiceNormalIcon2.VoiceNormalIcon;
          } else if (ChannelTypes.GUILD_DIRECTORY === type) {
            return HubIcon.HubIcon;
          } else if (ChannelTypes.GUILD_APP === type) {
            return AppsIcon2.AppsIcon;
          } else {
            if (ChannelTypes.GUILD_STORE !== type) {
              if (ChannelTypes.GUILD_SPACE !== type) {
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
    ThreadIcon = tmp25(5385).ChatIcon;
  } else {
    ThreadIcon = tmp25(5387).ThreadIcon;
  }
  return ThreadIcon;
};
