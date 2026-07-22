// Module ID: 12169
// Function ID: 93609
// Name: createInviteEmbed
// Dependencies: []
// Exports: createInviteEmbed

// Module 12169 (createInviteEmbed)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ InviteStates: closure_4, AbortCodes: closure_5 } = arg1(dependencyMap[2]));
const InviteTypes = arg1(dependencyMap[3]).InviteTypes;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  const invite = store.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const currentUser = currentUser.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return code(dependencyMap[4]).createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            const inviteError = store.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = code(dependencyMap[4]).createErroredGuildInvite(code, tmp3, theme);
              const obj14 = code(dependencyMap[4]);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = code(dependencyMap[4]).createDisabledGuildInvite(invite, theme);
              const obj13 = code(dependencyMap[4]);
            } else {
              erroredGuildInvite = code(dependencyMap[4]).createErroredGuildInvite(code, tmp3, theme);
              const obj12 = code(dependencyMap[4]);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = code(dependencyMap[5]).getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              return code(dependencyMap[6]).createGroupDMInvite(invite, tmp3, theme);
            } else if (InviteTypes.FRIEND === inviteType) {
              const obj10 = code(dependencyMap[7]);
              return obj10.createFriendInvite(invite, tmp3, id, theme);
            } else {
              const guildInviteExtendedType = code(dependencyMap[5]).getGuildInviteExtendedType(invite);
              if (code(dependencyMap[5]).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return code(dependencyMap[8]).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (code(dependencyMap[5]).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                let obj = { inviteCode: invite.code, theme };
                return code(dependencyMap[9]).createEmbeddedActivityInviteEmbed(obj);
              } else if (code(dependencyMap[5]).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return code(dependencyMap[10]).createGuildProfileInvite(invite, theme);
              } else if (code(dependencyMap[5]).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (null != guild) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  obj = { guildId: id1, location: "mobile_invite_embed" };
                  if (obj2.getVoiceChannelListInviteExperiment(obj).enabled) {
                    const voiceChannelListInviteEmbed = code(dependencyMap[12]).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const obj4 = code(dependencyMap[12]);
                  }
                  const obj2 = code(dependencyMap[11]);
                }
                return code(dependencyMap[4]).createGuildInvite(invite, tmp3, theme);
              } else {
                obj = code(dependencyMap[4]);
                return obj.createGuildInvite(invite, tmp3, theme);
              }
              const obj18 = code(dependencyMap[5]);
            }
            const obj17 = code(dependencyMap[5]);
          }
        }
      }
      return code(dependencyMap[4]).createExpiredGuildInvite(author, tmp3, theme);
    }
  }
};
