// Module ID: 8033
// Function ID: 8034
// Name: utils/ChannelUtils
// Dependencies: [5155, 5218, 5177, 1388, 1072, 8034, 8035, 8036, 8037, 8038, 7437, 8039, 8040, 8018, 7433, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 7683, 8059, 8060, 7219, 8061, 8062, 8063, 8064, 8065, 8066, 8067, 8068, 8069, 8070, 8071, 8072, 8073, 8074, 8075, 8076, 8077, 8078, 8079, 8080, 8081, 8082, 8083, 8084, 8085, 8086, 7436, 8087, 8088, 8089, 8090, 8091, 8092, 8093, 8017, 8094, 8095, 8096, 7432, 8097, 8098, 8099, 8100, 8101, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 8033 (utils/ChannelUtils)
import Constants from "Constants" /* 1072 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7219 */;
import AssetRegistryDefault from "AssetRegistry" /* 7433 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 7437 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 7683 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8018 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8034 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8035 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8036 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 8037 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 8038 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 8039 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 8040 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 8041 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 8042 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 8043 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 8044 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 8045 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 8046 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 8047 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 8048 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 8049 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 8050 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 8051 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 8052 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 8053 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 8054 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 8055 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 8056 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 8057 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 8058 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 8059 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 8060 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 8066 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let tmp;
const VoiceNormalIcon2 = tmp(7432);
const GroupIcon = tmp(7436);
const StageIcon2 = tmp(8017);
const ExperimentalLfgIcon = tmp(8068);
const ChatIcon2 = tmp(8069);
const ThreadLockIcon = tmp(8070);
const ThreadIcon2 = tmp(8071);
const FolderIcon = tmp(8072);
const BookCheckIcon = tmp(8073);
const TextWarningIcon2 = tmp(8074);
const TextSpoilerIcon2 = tmp(8075);
const TextLockIcon2 = tmp(8076);
const TextControllerIcon = tmp(8077);
const TextIcon2 = tmp(8078);
const ImageWarningIcon2 = tmp(8079);
const ForumWarningIcon2 = tmp(8080);
const ForumSpoilerIcon3 = tmp(8081);
const ExperimentalLfgLockIcon = tmp(8082);
const ImageLockIcon = tmp(8083);
const ForumLockIcon2 = tmp(8084);
const ImageIcon2 = tmp(8085);
const ForumIcon2 = tmp(8086);
const AtIcon = tmp(8087);
const AnnouncementsWarningIcon2 = tmp(8088);
const AnnouncementsSpoilerIcon2 = tmp(8089);
const AnnouncementsLockIcon = tmp(8090);
const AnnouncementsIcon2 = tmp(8091);
const LockIcon3 = tmp(8092);
const StageLockIcon2 = tmp(8093);
const VoiceLockIcon3 = tmp(8094);
const VoiceWarningIcon2 = tmp(8095);
const VoiceNormalSpoilerIcon = tmp(8096);
const HubIcon = tmp(8097);
const AppsWarningIcon2 = tmp(8098);
const AppsSpoilerIcon2 = tmp(8099);
const AppsLockIcon = tmp(8100);
const AppsIcon2 = tmp(8101);
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
              return AssetRegistryDefault6;
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
                    tmp77Result = tmp77(8056);
                  }
                  tmp76 = tmp77Result;
                }
                if (null != channel.linkedLobby) {
                  tmp77Result2 = tmp77(8061);
                } else {
                  tmp77Result2 = tmp77(8037);
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
                    tmp62 = importDefault(isMediaChannelResult ? 8055 : 8052);
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
                      tmp66Result = tmp66(8062);
                    } else {
                      tmp66Result = tmp66(isMediaChannelResult ? 8063 : 8064);
                    }
                  }
                  tmp65 = tmp66Result;
                }
                if (channel.isGameInvitesChannel()) {
                  tmp66Result2 = tmp66(8059);
                } else {
                  tmp66Result2 = tmp66(isMediaChannelResult ? 8054 : 8051);
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
                    tmp57Result = tmp57(8063);
                  }
                  tmp56 = tmp57Result;
                }
                tmp57Result = tmp57(8054);
              }
              return tmp53;
            } else if (ChannelTypes.GROUP_DM === type) {
              return AssetRegistryDefault2;
            } else if (ChannelTypes.DM === type) {
              return AssetRegistryDefault9;
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
                    tmp45Result = tmp45(8065);
                  }
                  tmp44 = tmp45Result;
                }
                tmp45Result = tmp45(8040);
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
                    tmp31Result = tmp31(8066);
                  } else {
                    tmp31Result = tmp31(8045);
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
                  tmp36Result = tmp36(8045);
                }
                tmp35 = tmp36Result;
              }
              tmp36Result = tmp36(8018);
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
                      tmp17Result = tmp17(8066);
                    } else {
                      tmp17Result = tmp17(8042);
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
                    tmp22Result = tmp22(8042);
                  }
                  tmp21 = tmp22Result;
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp22Result3 = tmp22(8043);
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
                    tmp22Result4 = tmp22(8044);
                  }
                  tmp22Result3 = tmp22Result4;
                }
                tmp22Result4 = tmp22(7433);
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
                  tmp12Result = tmp12(8067);
                }
                tmp11 = tmp12Result;
              }
              tmp12Result = tmp12(8038);
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
      tmp83 = AssetRegistryDefault4;
    } else {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
        if (ChannelTypes.PUBLIC_THREAD !== type2) {
          tmp83 = null;
        }
      }
      tmp83 = AssetRegistryDefault5;
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

export function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return AssetRegistryDefault4;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return AssetRegistryDefault5;
  }
}
export function getSimpleChannelIcon(channel) {
  let tmp21;
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return AssetRegistryDefault6;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return AssetRegistryDefault8;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return AssetRegistryDefault2;
                  } else if (ChannelTypes.DM === type) {
                    return AssetRegistryDefault9;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return AssetRegistryDefault10;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return AssetRegistryDefault3;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return AssetRegistryDefault;
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
            return AssetRegistryDefault7;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    tmp21 = AssetRegistryDefault4;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = AssetRegistryDefault5;
  }
  return tmp21;
}
export function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  const tmp = getChannelIcon;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  const obj = { isRulesChannel: rulesChannelId === channel.id };
  return tmp(channel, obj);
}
export function getChannelMentionIcon(iconType) {
  let tmp21;
  switch (iconType) {
    case "voice":
    {
      return AssetRegistryDefault;
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
      return AssetRegistryDefault3;
    }
    case "stage-locked":
    {
      return AssetRegistryDefault15;
    }
    case "text":
    {
      return AssetRegistryDefault7;
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
      return AssetRegistryDefault10;
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
      return AssetRegistryDefault5;
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
      return AssetRegistryDefault8;
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
}
export { getChannelIcon };
export function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  const tmp = getChannelIconComponent;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  const obj = { isRulesChannel: rulesChannelId === channel.id };
  return tmp(channel, obj);
}
export { getChannelIconComponent };
export function getSimpleChannelIconComponent(channel) {
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
    ThreadIcon = tmp25(8069).ChatIcon;
  } else {
    ThreadIcon = tmp25(8071).ThreadIcon;
  }
  return ThreadIcon;
}
