// Module ID: 11870
// Function ID: 91881
// Name: TraitEmoji
// Dependencies: []
// Exports: default

// Module 11870 (TraitEmoji)
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = importDefault(dependencyMap[5]);
      obj = {};
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      obj.size = 16;
      emojiURL = obj.getEmojiURL(obj);
    }
    const obj3 = importDefault(dependencyMap[6]);
    obj = { src: emojiURL, name: importDefault(dependencyMap[6]).isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    return callback(importDefault(dependencyMap[7]), obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  let obj = { style: callback3().trait };
  obj = { emoji: trait.emoji };
  const items = [callback(TraitEmoji, obj), ];
  obj = { children: trait.label };
  items[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { "Null": null, "Null": 1, "Null": null, "Null": "\u{1F44E}\u{1F3FC}" } };
obj = { values: true, x: true, resolve: true, length: true, to: true, ao: true, useState: true, from: true, registerAsset: true, borderRadius: importDefault(dependencyMap[4]).radii.lg, borderColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.trait = obj;
obj.emojiImage = {};
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const arg1 = profile;
  const items = [profile];
  const memo = React.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((arg0, arg1) => {
      const merged = Object.assign(arg0);
      return { key: "trait-" + arg1 };
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  const tmp = callback3();
  return callback(View, { style: callback3().container, children: memo.map((key) => callback(closure_9, { trait: key }, key.key)) });
};
