// Module ID: 12352
// Function ID: 12353
// Name: createInviteEmbed
// Dependencies: [4174, 1874, 676, 6021, 12353, 6020, 12355, 12356, 12357, 12359, 12361, 9497, 9498, 2]
// Exports: createInviteEmbed

// Module 12352 (createInviteEmbed)
import updateInvite from "updateInvite";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";

let c4;
let c5;
const require = arg1;
({ InviteStates: c4, AbortCodes: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, updateInvite) {
  let obj = invite;
  invite = invite.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      let id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return require(12353) /* createResolvingGuildInvite */.createResolvingGuildInvite(updateInvite);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = require(12353) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj15 = require(12353) /* createResolvingGuildInvite */;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = require(12353) /* createResolvingGuildInvite */.createDisabledGuildInvite(invite, updateInvite);
              const obj14 = require(12353) /* createResolvingGuildInvite */;
            } else {
              erroredGuildInvite = require(12353) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj13 = require(12353) /* createResolvingGuildInvite */;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = require(6020) /* InviteTypes */.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = tmp29(12355);
              return tmp29Result.createGroupDMInvite(invite, tmp28, updateInvite);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(12356);
              return tmp29Result.createFriendInvite(invite, tmp28, id, updateInvite);
            } else {
              const guildInviteExtendedType = tmp29(6020).getGuildInviteExtendedType(invite);
              if (tmp29(6020).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12357).createGuildScheduledEventInviteEmbed(invite, updateInvite);
              } else if (tmp29(6020).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = updateInvite;
                return tmp29(12359).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(6020).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12361).createGuildProfileInvite(invite, updateInvite);
              } else if (tmp29(6020).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(9498).createVoiceChannelListInviteEmbed(invite, updateInvite);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(9498);
                  }
                  tmp29Result5 = tmp29(9497);
                }
                return tmp29(12353).createGuildInvite(invite, tmp28, updateInvite);
              } else {
                return tmp29(12353).createGuildInvite(invite, tmp28, updateInvite);
              }
              const tmp29Result1 = tmp29(6020);
            }
            const obj18 = require(6020) /* InviteTypes */;
          }
        }
      }
      return require(12353) /* createResolvingGuildInvite */.createExpiredGuildInvite(closure_0, id === tmp4, updateInvite);
    }
  }
};
