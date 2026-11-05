// Module ID: 8749
// Function ID: 8750
// Name: utils/ChannelUtils
// Dependencies: [4992, 5055, 5014, 1385, 1072, 8750, 8751, 8752, 8753, 8754, 8755, 8756, 8757, 8758, 8759, 8760, 8761, 8762, 8763, 8764, 8765, 8766, 8767, 8768, 8769, 8770, 8771, 8772, 8773, 8774, 8775, 8776, 8777, 8778, 8779, 8780, 7414, 8781, 8782, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 8797, 8798, 8799, 8800, 8801, 8802, 8803, 8804, 8805, 8806, 8807, 8808, 8809, 8810, 8811, 8812, 8813, 8814, 8815, 8816, 8817, 8818, 8819, 8820, 8821, 8822, 8823, 8824, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent, getThreadChannelIcon

// Module 8749 (utils/ChannelUtils)
import Constants from "Constants" /* 1072 */;
import isRoleRequiredDefault from "isRoleRequired" /* 7414 */;
import AssetRegistryDefault from "AssetRegistry" /* 8750 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8751 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8752 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8753 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8754 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8755 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 8756 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 8757 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 8758 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 8759 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 8760 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 8761 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 8762 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 8763 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 8764 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 8765 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 8766 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 8767 */;
import AssetRegistryDefault19 from "AssetRegistry" /* 8768 */;
import AssetRegistryDefault20 from "AssetRegistry" /* 8769 */;
import AssetRegistryDefault21 from "AssetRegistry" /* 8770 */;
import AssetRegistryDefault22 from "AssetRegistry" /* 8771 */;
import AssetRegistryDefault23 from "AssetRegistry" /* 8772 */;
import AssetRegistryDefault24 from "AssetRegistry" /* 8773 */;
import AssetRegistryDefault25 from "AssetRegistry" /* 8774 */;
import AssetRegistryDefault26 from "AssetRegistry" /* 8775 */;
import AssetRegistryDefault27 from "AssetRegistry" /* 8776 */;
import AssetRegistryDefault28 from "AssetRegistry" /* 8777 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 8778 */;
import AssetRegistryDefault29 from "AssetRegistry" /* 8779 */;
import AssetRegistryDefault30 from "AssetRegistry" /* 8780 */;
import AssetRegistryDefault31 from "AssetRegistry" /* 8786 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import GuildMemberStore from "GuildMemberStore" /* 5055 */;
import GuildStore from "GuildStore" /* 5014 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let tmp;
const ExperimentalLfgIcon = tmp(8788);
const ChatIcon2 = tmp(8789);
const ThreadLockIcon = tmp(8790);
const ThreadIcon2 = tmp(8791);
const FolderIcon = tmp(8792);
const BookCheckIcon = tmp(8793);
const TextWarningIcon2 = tmp(8794);
const TextSpoilerIcon2 = tmp(8795);
const TextLockIcon2 = tmp(8796);
const TextControllerIcon = tmp(8797);
const TextIcon2 = tmp(8798);
const ImageWarningIcon2 = tmp(8799);
const ForumWarningIcon2 = tmp(8800);
const ForumSpoilerIcon3 = tmp(8801);
const ExperimentalLfgLockIcon = tmp(8802);
const ImageLockIcon = tmp(8803);
const ForumLockIcon2 = tmp(8804);
const ImageIcon2 = tmp(8805);
const ForumIcon2 = tmp(8806);
const GroupIcon = tmp(8807);
const AtIcon = tmp(8808);
const AnnouncementsWarningIcon2 = tmp(8809);
const AnnouncementsSpoilerIcon2 = tmp(8810);
const AnnouncementsLockIcon = tmp(8811);
const AnnouncementsIcon2 = tmp(8812);
const LockIcon3 = tmp(8813);
const StageLockIcon2 = tmp(8814);
const StageIcon2 = tmp(8815);
const VoiceLockIcon3 = tmp(8816);
const VoiceWarningIcon2 = tmp(8817);
const VoiceNormalSpoilerIcon = tmp(8818);
const VoiceNormalIcon2 = tmp(8819);
const HubIcon = tmp(8820);
const AppsWarningIcon2 = tmp(8821);
const AppsSpoilerIcon2 = tmp(8822);
const AppsLockIcon = tmp(8823);
const AppsIcon2 = tmp(8824);
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
                    tmp77Result = tmp77(8775);
                  }
                  tmp76 = tmp77Result;
                }
                if (null != channel.linkedLobby) {
                  tmp77Result2 = tmp77(8781);
                } else {
                  tmp77Result2 = tmp77(8753);
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
                    tmp62 = importDefault(isMediaChannelResult ? 8774 : 8771);
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
                      tmp66Result = tmp66(8782);
                    } else {
                      tmp66Result = tmp66(isMediaChannelResult ? 8783 : 8784);
                    }
                  }
                  tmp65 = tmp66Result;
                }
                if (channel.isGameInvitesChannel()) {
                  tmp66Result2 = tmp66(8779);
                } else {
                  tmp66Result2 = tmp66(isMediaChannelResult ? 8773 : 8770);
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
                    tmp57Result = tmp57(8783);
                  }
                  tmp56 = tmp57Result;
                }
                tmp57Result = tmp57(8773);
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
                    tmp45Result = tmp45(8785);
                  }
                  tmp44 = tmp45Result;
                }
                tmp45Result = tmp45(8757);
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
                    tmp31Result = tmp31(8786);
                  } else {
                    tmp31Result = tmp31(8764);
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
                  tmp36Result = tmp36(8764);
                }
                tmp35 = tmp36Result;
              }
              tmp36Result = tmp36(8758);
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
                      tmp17Result = tmp17(8786);
                    } else {
                      tmp17Result = tmp17(8761);
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
                    tmp22Result = tmp22(8761);
                  }
                  tmp21 = tmp22Result;
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp22Result3 = tmp22(8762);
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
                    tmp22Result4 = tmp22(8763);
                  }
                  tmp22Result3 = tmp22Result4;
                }
                tmp22Result4 = tmp22(8759);
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
                  tmp12Result = tmp12(8787);
                }
                tmp11 = tmp12Result;
              }
              tmp12Result = tmp12(8754);
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

export function getThreadChannelIcon(arg0) {
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
}
export function getSimpleChannelIcon(channel) {
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
    ThreadIcon = tmp25(8789).ChatIcon;
  } else {
    ThreadIcon = tmp25(8791).ThreadIcon;
  }
  return ThreadIcon;
}
