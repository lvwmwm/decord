// Module ID: 8384
// Function ID: 8385
// Name: utils/ChannelUtils
// Dependencies: [2068, 2128, 2090, 1392, 1087, 8385, 8386, 8387, 8388, 8389, 8390, 8391, 8392, 8393, 8394, 8395, 8396, 8397, 8398, 8399, 8400, 8401, 8402, 8403, 8404, 8405, 8406, 8407, 8408, 8409, 8410, 8411, 8412, 8413, 8414, 8415, 7018, 8416, 8417, 8418, 8419, 8420, 8421, 8422, 8423, 8424, 8425, 8426, 8427, 8428, 8429, 8430, 8431, 8432, 8433, 8434, 8435, 8436, 8437, 8438, 8439, 8440, 8441, 8442, 8443, 8444, 8445, 8446, 8447, 8448, 8449, 8450, 8451, 8452, 8453, 8454, 8455, 8456, 8457, 8458, 8459, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 8384 (utils/ChannelUtils)
import Constants from "Constants" /* 1087 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7018 */;
import AssetRegistryDefault from "AssetRegistry" /* 8385 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8386 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8387 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8388 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8389 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8390 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 8391 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 8392 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 8393 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 8394 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 8395 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 8396 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 8397 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 8398 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 8399 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 8400 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 8401 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 8402 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 8403 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 8404 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 8405 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 8406 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 8407 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 8408 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 8409 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 8410 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 8411 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 8412 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 8413 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 8414 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 8415 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 8421 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildMemberStore from "GuildMemberStore" /* 2128 */;
import GuildStore from "GuildStore" /* 2090 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let tmp;
const ExperimentalLfgIcon = tmp(8423);
const ChatIcon2 = tmp(8424);
const ThreadLockIcon = tmp(8425);
const ThreadIcon2 = tmp(8426);
const FolderIcon = tmp(8427);
const BookCheckIcon = tmp(8428);
const TextWarningIcon2 = tmp(8429);
const TextSpoilerIcon2 = tmp(8430);
const TextLockIcon2 = tmp(8431);
const TextControllerIcon = tmp(8432);
const TextIcon2 = tmp(8433);
const ImageWarningIcon2 = tmp(8434);
const ForumWarningIcon2 = tmp(8435);
const ForumSpoilerIcon3 = tmp(8436);
const ExperimentalLfgLockIcon = tmp(8437);
const ImageLockIcon = tmp(8438);
const ForumLockIcon2 = tmp(8439);
const ImageIcon2 = tmp(8440);
const ForumIcon2 = tmp(8441);
const GroupIcon = tmp(8442);
const AtIcon = tmp(8443);
const AnnouncementsWarningIcon2 = tmp(8444);
const AnnouncementsSpoilerIcon2 = tmp(8445);
const AnnouncementsLockIcon = tmp(8446);
const AnnouncementsIcon2 = tmp(8447);
const LockIcon3 = tmp(8448);
const StageLockIcon2 = tmp(8449);
const StageIcon2 = tmp(8450);
const VoiceLockIcon3 = tmp(8451);
const VoiceWarningIcon2 = tmp(8452);
const VoiceNormalSpoilerIcon = tmp(8453);
const VoiceNormalIcon2 = tmp(8454);
const HubIcon = tmp(8455);
const AppsWarningIcon2 = tmp(8456);
const AppsSpoilerIcon2 = tmp(8457);
const AppsLockIcon = tmp(8458);
const AppsIcon2 = tmp(8459);
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
    let tmp90;
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      tmp90 = AssetRegistryDefault29;
    } else {
      tmp90 = AssetRegistryDefault20;
    }
    return tmp90;
  } else {
    let tmp83;
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type) {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          if (ChannelTypes.MEDIA_THREAD !== type) {
            if (ChannelTypes.GUILD_CATEGORY === type) {
              return AssetRegistryDefault3;
            } else if (ChannelTypes.GUILD_TEXT === type) {
              let tmp73;
              if (isRulesChannel) {
                tmp73 = AssetRegistryDefault30;
              } else {
                let tmp76;
                let tmp77Result2;
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp73 = AssetRegistryDefault16;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    tmp76 = AssetRegistryDefault17;
                  }
                  tmp73 = tmp76;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp77Result;
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    tmp77Result = tmp77(8410);
                  }
                  tmp76 = tmp77Result;
                }
                if (null != channel.linkedLobby) {
                  tmp77Result2 = tmp77(8416);
                } else {
                  tmp77Result2 = tmp77(8388);
                }
                tmp77Result = tmp77Result2;
              }
              return tmp73;
            } else if (ChannelTypes.GUILD_FORUM === type) {
              let tmp62;
              if (isRulesChannel) {
                tmp62 = AssetRegistryDefault30;
              } else {
                let tmp65;
                let tmp66Result2;
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp62 = importDefault(isMediaChannelResult ? 8409 : 8406);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    tmp65 = AssetRegistryDefault23;
                  }
                  tmp62 = tmp65;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp66Result;
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      tmp66Result = tmp66(8417);
                    } else {
                      tmp66Result = tmp66(isMediaChannelResult ? 8418 : 8419);
                    }
                  }
                  tmp65 = tmp66Result;
                }
                if (channel.isGameInvitesChannel()) {
                  tmp66Result2 = tmp66(8414);
                } else {
                  tmp66Result2 = tmp66(isMediaChannelResult ? 8408 : 8405);
                }
                tmp66Result = tmp66Result2;
              }
              return tmp62;
            } else if (ChannelTypes.GUILD_MEDIA === type) {
              let tmp53;
              if (isRulesChannel) {
                tmp53 = AssetRegistryDefault30;
              } else {
                let tmp56;
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp53 = AssetRegistryDefault25;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    tmp56 = AssetRegistryDefault23;
                  }
                  tmp53 = tmp56;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp57Result;
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    tmp57Result = tmp57(8418);
                  }
                  tmp56 = tmp57Result;
                }
                tmp57Result = tmp57(8408);
              }
              return tmp53;
            } else if (ChannelTypes.GROUP_DM === type) {
              return AssetRegistryDefault6;
            } else if (ChannelTypes.DM === type) {
              return AssetRegistryDefault7;
            } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
              let tmp41;
              if (isRulesChannel) {
                tmp41 = AssetRegistryDefault30;
              } else {
                let tmp44;
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp41 = AssetRegistryDefault18;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    tmp44 = AssetRegistryDefault19;
                  }
                  tmp41 = tmp44;
                }
                if (isRoleRequiredDefault(channel)) {
                  let tmp45Result;
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    tmp45Result = tmp45(8420);
                  }
                  tmp44 = tmp45Result;
                }
                tmp45Result = tmp45(8392);
              }
              return tmp41;
            } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
              let tmp31Result;
              let tmp35;
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    tmp31Result = tmp31(8421);
                  } else {
                    tmp31Result = tmp31(8399);
                  }
                }
                return tmp31Result;
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  tmp35 = AssetRegistryDefault31;
                }
                tmp31Result = tmp35;
              }
              if (isRoleRequiredDefault(channel)) {
                let tmp36Result;
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  tmp36Result = tmp36(8399);
                }
                tmp35 = tmp36Result;
              }
              tmp36Result = tmp36(8393);
            } else if (ChannelTypes.GUILD_VOICE === type) {
              let tmp17Result;
              if (textFocused) {
                tmp17Result = AssetRegistryDefault20;
              } else {
                let tmp21;
                let tmp22Result;
                let tmp22Result3;
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = tmp17(8421);
                    } else {
                      tmp17Result = tmp17(8396);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    tmp21 = AssetRegistryDefault31;
                  }
                  tmp17Result = tmp21;
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp22Result = tmp22(8396);
                  }
                  tmp21 = tmp22Result;
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp22Result3 = tmp22(8397);
                  }
                  tmp22Result = tmp22Result3;
                }
                if (channel.isSpoilerChannel()) {
                  let tmp22Result4;
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    tmp22Result4 = tmp22(8398);
                  }
                  tmp22Result3 = tmp22Result4;
                }
                tmp22Result4 = tmp22(8394);
              }
              return tmp17Result;
            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
              return AssetRegistryDefault11;
            } else if (ChannelTypes.GUILD_APP === type) {
              let tmp8;
              let tmp11;
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  tmp8 = AssetRegistryDefault27;
                }
                return tmp8;
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  tmp11 = AssetRegistryDefault28;
                }
                tmp8 = tmp11;
              }
              if (isRoleRequiredDefault(channel)) {
                let tmp12Result;
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  tmp12Result = tmp12(8422);
                }
                tmp11 = tmp12Result;
              }
              tmp12Result = tmp12(8389);
            } else {
              if (ChannelTypes.GUILD_STORE !== type) {
                if (ChannelTypes.GUILD_SPACE !== type) {
                  const UNKNOWN = tmp5.UNKNOWN;
                }
              }
              return null;
            }
          }
        }
      }
    }
    const type2 = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type2) {
      tmp83 = AssetRegistryDefault;
    } else {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
        if (ChannelTypes.PUBLIC_THREAD !== type2) {
          tmp83 = null;
        }
      }
      tmp83 = AssetRegistryDefault2;
    }
    return tmp83;
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
export const getSimpleChannelIcon = function getSimpleChannelIcon(cResult) {
  let tmp21;
  const type = cResult.type;
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
  const type2 = cResult.type;
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
    ThreadIcon = tmp25(8424).ChatIcon;
  } else {
    ThreadIcon = tmp25(8426).ThreadIcon;
  }
  return ThreadIcon;
};
