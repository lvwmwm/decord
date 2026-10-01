// Module ID: 12781
// Function ID: 12782
// Name: InviteEmbed
// Dependencies: [4817, 1372, 1074, 7155, 12782, 7154, 12784, 12785, 12786, 12788, 12790, 10848, 10849, 2]
// Exports: createInviteEmbed

// Module 12781 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7154 */;
import Constants2 from "Constants" /* 7155 */;
import VoiceChannelListInviteExperiment from "VoiceChannelListInviteExperiment" /* 10848 */;
import VoiceChannelListInviteEmbed from "VoiceChannelListInviteEmbed" /* 10849 */;
import GuildInvite from "GuildInvite" /* 12782 */;
import GroupDMInvite from "GroupDMInvite" /* 12784 */;
import FriendInvite from "FriendInvite" /* 12785 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 12786 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 12788 */;
import GuildProfileInvite from "GuildProfileInvite" /* 12790 */;
import InviteStore from "InviteStore" /* 4817 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  const invite = InviteStore.getInvite(code);
  const obj = InviteStore;
  if (null == invite) {
    return null;
  } else {
    let id;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      const obj17 = GuildInvite;
      return obj17.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            let erroredGuildInvite;
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              const obj15 = GuildInvite;
              erroredGuildInvite = obj15.createErroredGuildInvite(code, tmp28, theme);
            } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
              const obj14 = GuildInvite;
              erroredGuildInvite = obj14.createDisabledGuildInvite(invite, theme);
            } else {
              const obj13 = GuildInvite;
              erroredGuildInvite = obj13.createErroredGuildInvite(code, tmp28, theme);
            }
            return erroredGuildInvite;
          } else {
            const obj18 = InviteTypeUtils;
            const inviteType = obj18.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              const tmp29Result = GroupDMInvite;
              return tmp29Result.createGroupDMInvite(invite, id === tmp4, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = FriendInvite;
              return tmp29Result10.createFriendInvite(invite, id === tmp4, id, theme);
            } else {
              const tmp29Result11 = InviteTypeUtils;
              const guildInviteExtendedType = tmp29Result11.getGuildInviteExtendedType(invite);
              if (InviteTypeUtils.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                const tmp29Result12 = GuildScheduledEventEmbed;
                return tmp29Result12.createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                const tmp29Result13 = EmbeddedActivityInviteEmbed;
                return tmp29Result13.createEmbeddedActivityInviteEmbed(obj2);
              } else if (InviteTypeUtils.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                const tmp29Result14 = GuildProfileInvite;
                return tmp29Result14.createGuildProfileInvite(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  const tmp29Result15 = VoiceChannelListInviteExperiment;
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const tmp29Result16 = VoiceChannelListInviteEmbed;
                    const voiceChannelListInviteEmbed = tmp29Result16.createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                  }
                }
                const tmp29Result17 = GuildInvite;
                return tmp29Result17.createGuildInvite(invite, id === tmp4, theme);
              } else {
                const tmp29Result18 = GuildInvite;
                return tmp29Result18.createGuildInvite(invite, id === tmp4, theme);
              }
            }
          }
        }
      }
      const obj16 = GuildInvite;
      return obj16.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
};
