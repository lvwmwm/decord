// Module ID: 14004
// Function ID: 106518
// Name: EmojiGallery
// Dependencies: []
// Exports: default

// Module 14004 (EmojiGallery)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  let maxPerRow;
  ({ guildId: closure_0, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = {};
  obj = {
    gap: 8,
    children: importDefault(dependencyMap[3])(emojiIds.emojiIds, maxPerRow).map((arr) => {
      let obj = { style: { flexDirection: "row" } };
      obj = { gap: 16, children: arr.map((id) => callback2(callback(closure_2[5]), { guildId: closure_0, id }, id)) };
      obj.children = callback2(callback(closure_2[4]).GappedList, obj);
      return callback2(closure_3, obj, arg1);
    })
  };
  obj.children = jsx(arg1(dependencyMap[4]).GappedList, obj);
  return <View {...obj} />;
};
