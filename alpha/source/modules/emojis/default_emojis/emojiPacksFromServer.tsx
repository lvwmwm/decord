// Module ID: 4922
// Function ID: 4923
// Name: emojiPacksFromServer
// Dependencies: [4918, 2]
// Exports: emojiPacksFromServer

// Module 4922 (emojiPacksFromServer)
import EmojiTypes from "EmojiTypes" /* 4918 */;
import size from "module_2" /* 2 */;

function indexEmojiPacks(arg0) {
  const packs = [];
  const packsById = {};
  const obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null == packsById[nextResult.id]) {
      let arr = packs.push(tmp2);
      packsById[tmp2.id] = tmp2;
      let emojis = tmp2.emojis;
      for (const item10022 of emojis) {
        obj[item10022.id] = tmp2.id;
        continue;
      }
    }
    continue;
  }
  return { packs, packsById, packIdByEmojiId: obj };
}
const result = size.fileFinishedImporting("modules/emojis/default_emojis/emojiPacksFromServer.tsx");

export { indexEmojiPacks };
export const emojiPacksFromServer = function emojiPacksFromServer(packs) {
  return indexEmojiPacks(packs.map((id) => {
    let emojis;
    let obj = {
      id: id.id,
      name: id.name,
      description: id.description,
      available: id.available,
      representativeEmojiId: id.representative_emoji_id,
      emojis: emojis.map((id) => {
        const obj = { id: id.id, packId: id.id, name: id.name, animated: id.animated, require_colons: id.require_colons, available: id.available, managed: id.managed, roles: id.roles, type: EmojiTypes.EmojiTypes.PACK };
        return obj;
      })
    };
    emojis = id.emojis;
    return obj;
  }));
};
