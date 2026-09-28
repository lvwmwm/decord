// Module ID: 12781
// Function ID: 12782
// Name: InviteEmbed
// Dependencies: [4817, 1372, 1074, 7155, 12782, 7154, 12784, 12785, 12786, 12788, 12790, 10848, 10849, 2]
// Exports: createInviteEmbed

// Module 12781 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7154 */;
import invite_GuildInvite from "invite/GuildInvite" /* 12782 */;
import InviteStore from "InviteStore" /* 4817 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7155).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  const invite = InviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return invite_GuildInvite.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = invite_GuildInvite.createDisabledGuildInvite(invite, theme);
            } else {
              erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              return tmp29(12784).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(12785);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7154).getGuildInviteExtendedType(invite);
              if (tmp29(7154).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12786).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7154).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(12788).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(7154).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12790).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7154).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10849).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(10849);
                  }
                  tmp29Result15 = tmp29(10848);
                }
                return tmp29(12782).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(12782).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(7154);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
