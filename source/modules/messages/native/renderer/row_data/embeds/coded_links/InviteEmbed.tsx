// Module ID: 12330
// Function ID: 95984
// Name: createInviteEmbed
// Dependencies: [4150, 1850, 653, 6003, 12331, 6002, 12333, 12334, 12335, 12337, 12339, 9473, 9474, 2]
// Exports: createInviteEmbed

// Module 12330 (createInviteEmbed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";
import { InviteTypes } from "InviteSendStates";

let closure_4;
let closure_5;
const require = arg1;
({ InviteStates: closure_4, AbortCodes: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(closure_0, code, _isNativeReflectConstruct) {
  const invite = store.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return require(12331) /* createResolvingGuildInvite */.createResolvingGuildInvite(_isNativeReflectConstruct);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            const inviteError = store.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = require(12331) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp3, _isNativeReflectConstruct);
              const obj14 = require(12331) /* createResolvingGuildInvite */;
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = require(12331) /* createResolvingGuildInvite */.createDisabledGuildInvite(invite, _isNativeReflectConstruct);
              const obj13 = require(12331) /* createResolvingGuildInvite */;
            } else {
              erroredGuildInvite = require(12331) /* createResolvingGuildInvite */.createErroredGuildInvite(code, tmp3, _isNativeReflectConstruct);
              const obj12 = require(12331) /* createResolvingGuildInvite */;
            }
            return erroredGuildInvite;
          } else {
            const inviteType = require(6002) /* isGroupDMInvite */.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              return require(12333) /* createGroupDMInvite */.createGroupDMInvite(invite, tmp3, _isNativeReflectConstruct);
            } else if (InviteTypes.FRIEND === inviteType) {
              const obj10 = require(12334) /* createFriendInvite */;
              return obj10.createFriendInvite(invite, tmp3, id, _isNativeReflectConstruct);
            } else {
              const guildInviteExtendedType = require(6002) /* isGroupDMInvite */.getGuildInviteExtendedType(invite);
              if (require(6002) /* isGroupDMInvite */.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return require(12335) /* createGuildScheduledEventEmbed */.createGuildScheduledEventInviteEmbed(invite, _isNativeReflectConstruct);
              } else if (require(6002) /* isGroupDMInvite */.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                let obj = { inviteCode: invite.code, theme: _isNativeReflectConstruct };
                return require(12337) /* createEmbeddedActivityInviteEmbed */.createEmbeddedActivityInviteEmbed(obj);
              } else if (require(6002) /* isGroupDMInvite */.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return require(12339) /* createGuildProfileInvite */.createGuildProfileInvite(invite, _isNativeReflectConstruct);
              } else if (require(6002) /* isGroupDMInvite */.GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (null != guild) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  obj = { guildId: id1, location: "mobile_invite_embed" };
                  if (obj2.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = require(9474) /* resolveVoiceChannelListInviteEmbedData */.createVoiceChannelListInviteEmbed(invite, _isNativeReflectConstruct);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const obj4 = require(9474) /* resolveVoiceChannelListInviteEmbedData */;
                  }
                  obj2 = require(9473) /* items */;
                }
                return require(12331) /* createResolvingGuildInvite */.createGuildInvite(invite, tmp3, _isNativeReflectConstruct);
              } else {
                obj = require(12331) /* createResolvingGuildInvite */;
                return obj.createGuildInvite(invite, tmp3, _isNativeReflectConstruct);
              }
              const obj18 = require(6002) /* isGroupDMInvite */;
            }
            const obj17 = require(6002) /* isGroupDMInvite */;
          }
        }
      }
      return require(12331) /* createResolvingGuildInvite */.createExpiredGuildInvite(closure_0, tmp3, _isNativeReflectConstruct);
    }
  }
};
