// Module ID: 5727
// Function ID: 49222
// Name: getStickerSendability
// Dependencies: []
// Exports: isSendableSticker

// Module 5727 (getStickerSendability)
function getStickerSendability(stickerById, closure_3, channel) {
  if (null == closure_3) {
    return obj.NONSENDABLE;
  } else {
    const result = importDefault(dependencyMap[3]).canUseCustomStickersEverywhere(closure_3);
    const obj4 = importDefault(dependencyMap[3]);
    if (obj5.isStandardSticker(stickerById)) {
      if (null == stickerPack.getStickerPack(stickerById.pack_id)) {
        let SENDABLE2 = obj.NONSENDABLE;
      } else {
        SENDABLE2 = obj.SENDABLE;
      }
    } else {
      let obj = closure_3(dependencyMap[4]);
      if (obj.isGuildSticker(stickerById)) {
        if (null != channel) {
          if (null == selfMember.getSelfMember(stickerById.guild_id)) {
            let SENDABLE_WITH_BOOSTED_GUILD = obj.NONSENDABLE;
          } else if (stickerById.available) {
            if (null != channel.guild_id) {
              if ("" !== channel.guild_id) {
                const SENDABLE = obj.SENDABLE;
              }
            }
            if (null != channel.guild_id) {
              obj = { permission: Permissions.USE_EXTERNAL_STICKERS, user: closure_3, context: channel };
              if (!obj2.can(obj)) {
                const NONSENDABLE = obj.NONSENDABLE;
              }
              const obj2 = importAll(dependencyMap[5]);
            }
          } else {
            SENDABLE_WITH_BOOSTED_GUILD = obj.SENDABLE_WITH_BOOSTED_GUILD;
          }
        }
      }
      return obj.NONSENDABLE;
    }
    const obj5 = closure_3(dependencyMap[4]);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const Permissions = arg1(dependencyMap[2]).Permissions;
const obj = { SENDABLE: 0, [0]: "SENDABLE", SENDABLE_WITH_PREMIUM: 1, [1]: "SENDABLE_WITH_PREMIUM", NONSENDABLE: 2, [2]: "NONSENDABLE", SENDABLE_WITH_BOOSTED_GUILD: 3, [3]: "SENDABLE_WITH_BOOSTED_GUILD" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/stickers/StickerSendability.tsx");

export const StickerSendability = obj;
export { getStickerSendability };
export const isSendableSticker = function isSendableSticker(id, currentUser, closure_5) {
  return getStickerSendability(id, currentUser, closure_5) === obj.SENDABLE;
};
