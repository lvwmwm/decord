// Module ID: 12759
// Function ID: 12760
// Name: createInviteEmbed
// Dependencies: [4359, 1922, 676, 4371, 12760, 4369, 12762, 12763, 12764, 12766, 12768, 10507, 10508, 2]
// Exports: createInviteEmbed

// Module 12759 (createInviteEmbed)
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
      return require(12760) /* createResolvingGuildInvite */.createResolvingGuildInvite(updateInvite);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = require(12760) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj15 = require(12760) /* createResolvingGuildInvite */;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = require(12760) /* createResolvingGuildInvite */.createDisabledGuildInvite(invite, updateInvite);
              const obj14 = require(12760) /* createResolvingGuildInvite */;
            } else {
              erroredGuildInvite = require(12760) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp28, updateInvite);
              const obj13 = require(12760) /* createResolvingGuildInvite */;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = require(4369) /* InviteTypes */.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              let tmp29Result = tmp29(12762);
              return tmp29Result.createGroupDMInvite(invite, tmp28, updateInvite);
            } else if (tmp32.FRIEND === inviteType) {
              tmp29Result = tmp29(12763);
              return tmp29Result.createFriendInvite(invite, tmp28, id, updateInvite);
            } else {
              const guildInviteExtendedType = tmp29(4369).getGuildInviteExtendedType(invite);
              if (tmp29(4369).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(12764).createGuildScheduledEventInviteEmbed(invite, updateInvite);
              } else if (tmp29(4369).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                obj = { inviteCode: null, theme: null };
                obj[0] = invite.code;
                obj[1] = updateInvite;
                return tmp29(12766).createEmbeddedActivityInviteEmbed(obj);
              } else if (tmp29(4369).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(12768).createGuildProfileInvite(invite, updateInvite);
              } else if (tmp29(4369).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                if (null != id) {
                  obj = { guildId: null, location: "mobile_invite_embed" };
                  obj[0] = id;
                  if (tmp29Result5.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(10508).createVoiceChannelListInviteEmbed(invite, updateInvite);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result6 = tmp29(10508);
                  }
                  tmp29Result5 = tmp29(10507);
                }
                return tmp29(12760).createGuildInvite(invite, tmp28, updateInvite);
              } else {
                return tmp29(12760).createGuildInvite(invite, tmp28, updateInvite);
              }
              const tmp29Result1 = tmp29(4369);
            }
            const obj18 = require(4369) /* InviteTypes */;
          }
        }
      }
      return require(12760) /* createResolvingGuildInvite */.createExpiredGuildInvite(closure_0, id === tmp4, updateInvite);
    }
  }
};
