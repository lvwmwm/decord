// Module ID: 13551
// Function ID: 13552
// Name: InviteEmbed
// Dependencies: [4774, 1376, 1078, 8015, 13552, 8014, 13554, 13555, 13556, 13558, 13560, 10627, 10628, 2]
// Exports: createInviteEmbed

// Module 13551 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 8014 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13552 */;
import InviteStore from "InviteStore" /* 4774 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const Constants = fn(1078);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(8015).InviteTypes;
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
              return tmp29(13554).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(13555);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(8014).getGuildInviteExtendedType(invite);
              if (tmp29(8014).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(13556).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(8014).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(13558).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(8014).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(13560).createGuildProfileInvite(invite, theme);
              } else if (tmp29(8014).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10628).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(10628);
                  }
                  tmp29Result15 = tmp29(10627);
                }
                return tmp29(13552).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(13552).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(8014);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
