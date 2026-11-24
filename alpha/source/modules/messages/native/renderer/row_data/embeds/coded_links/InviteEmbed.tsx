// Module ID: 14323
// Function ID: 14324
// Name: InviteEmbed
// Dependencies: [5636, 1386, 1071, 5650, 14324, 5648, 14328, 14330, 14331, 14334, 14336, 2]
// Exports: createInviteEmbed

// Module 14323 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 5648 */;
import Constants2 from "Constants" /* 5650 */;
import GuildInvite from "GuildInvite" /* 14324 */;
import GroupDMInvite from "GroupDMInvite" /* 14328 */;
import FriendInvite from "FriendInvite" /* 14330 */;
import GuildScheduledEventEmbed from "GuildScheduledEventEmbed" /* 14331 */;
import EmbeddedActivityInviteEmbed from "EmbeddedActivityInviteEmbed" /* 14334 */;
import GuildProfileInvite from "GuildProfileInvite" /* 14336 */;
import InviteStore from "InviteStore" /* 5636 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export function createInviteEmbed(author, code, theme) {
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
      const obj13 = GuildInvite;
      return obj13.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== constants.EXPIRED) {
        if (invite.state !== constants.BANNED) {
          if (invite.state === constants.ERROR) {
            let erroredGuildInvite;
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              const obj11 = GuildInvite;
              erroredGuildInvite = obj11.createErroredGuildInvite(code, tmp26, theme);
            } else if (inviteError.code === hasOwnProperty.INVITES_DISABLED) {
              const obj10 = GuildInvite;
              erroredGuildInvite = obj10.createDisabledGuildInvite(invite, theme);
            } else {
              const obj9 = GuildInvite;
              erroredGuildInvite = obj9.createErroredGuildInvite(code, tmp26, theme);
            }
            return erroredGuildInvite;
          } else {
            const obj14 = InviteTypeUtils;
            const inviteType = obj14.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              const tmp27Result = GroupDMInvite;
              return tmp27Result.createGroupDMInvite(invite, id === tmp4, theme);
            } else if (tmp30.FRIEND === inviteType) {
              const tmp27Result7 = FriendInvite;
              return tmp27Result7.createFriendInvite(invite, id === tmp4, id, theme);
            } else {
              const tmp27Result8 = InviteTypeUtils;
              const guildInviteExtendedType = tmp27Result8.getGuildInviteExtendedType(invite);
              if (InviteTypeUtils.GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                const tmp27Result9 = GuildScheduledEventEmbed;
                return tmp27Result9.createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (InviteTypeUtils.GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                const tmp27Result10 = EmbeddedActivityInviteEmbed;
                return tmp27Result10.createEmbeddedActivityInviteEmbed(obj2);
              } else if (InviteTypeUtils.GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                const tmp27Result11 = GuildProfileInvite;
                return tmp27Result11.createGuildProfileInvite(invite, theme);
              } else {
                const tmp27Result12 = GuildInvite;
                return tmp27Result12.createGuildInvite(invite, id === tmp4, theme);
              }
            }
          }
        }
      }
      const obj12 = GuildInvite;
      return obj12.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
}
