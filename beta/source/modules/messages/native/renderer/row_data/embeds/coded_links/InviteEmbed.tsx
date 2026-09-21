// Module ID: 13515
// Function ID: 13516
// Name: InviteEmbed
// Dependencies: [4742, 1376, 1078, 7983, 13516, 7982, 13518, 13519, 13520, 13522, 13524, 10591, 10592, 2]
// Exports: createInviteEmbed

// Module 13515 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7982 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13516 */;
import InviteStore from "InviteStore" /* 4742 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const Constants = fn(1078);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7983).InviteTypes;
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
              return tmp29(13518).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(13519);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7982).getGuildInviteExtendedType(invite);
              if (tmp29(7982).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(13520).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7982).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(13522).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(7982).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(13524).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7982).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10592).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(10592);
                  }
                  tmp29Result15 = tmp29(10591);
                }
                return tmp29(13516).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(13516).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(7982);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
