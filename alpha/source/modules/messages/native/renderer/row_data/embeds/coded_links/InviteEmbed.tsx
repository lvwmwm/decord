// Module ID: 12765
// Function ID: 12766
// Name: InviteEmbed
// Dependencies: [4813, 1372, 1074, 7150, 12766, 7149, 12768, 12769, 12770, 12772, 12774, 10835, 10836, 2]
// Exports: createInviteEmbed

// Module 12765 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7149 */;
import invite_GuildInvite from "invite/GuildInvite" /* 12766 */;
import InviteStore from "InviteStore" /* 4813 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7150).InviteTypes;
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
              return tmp29(12768).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(12769);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7149).getGuildInviteExtendedType(invite);
              if (tmp29(7149).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12770).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7149).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(12772).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(7149).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12774).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7149).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10836).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(10836);
                  }
                  tmp29Result15 = tmp29(10835);
                }
                return tmp29(12766).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(12766).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(7149);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
