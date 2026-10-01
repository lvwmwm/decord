// Module ID: 9221
// Function ID: 9222
// Name: GuildProfileTraits
// Dependencies: [19, 17, 21, 4836, 576, 1397, 4487, 6551, 4832, 2]
// Exports: default

// Module 9221 (GuildProfileTraits)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4487 */;
import Text_Text from "Text/Text" /* 4832 */;
import EmojiDefault from "Emoji" /* 6551 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      const obj4 = { id: null, animated: null, size: 16 };
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      const obj = AvatarUtilsDefault;
      emojiURL = obj.getEmojiURL(obj4);
    }
    const obj3 = EmojiUtilsDefault;
    const obj6 = { src: emojiURL, name: obj3.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    obj3.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
    return hasOwnProperty(EmojiDefault, obj6);
  }
}
function GuildProfileTraitView(trait) {
  let items;
  trait = trait.trait;
  const obj = { style: closure_7().trait, children: items };
  items = [, ];
  const obj2 = { emoji: trait.emoji };
  items[0] = hasOwnProperty(TraitEmoji, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  return metroRequire(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: obj2, emojiImage: { width: 16, height: 16 } };
obj2 = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const tmp = closure_7();
  const memo = react.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((item, index) => {
      const obj = { key: "trait-" + index };
      const merged = Object.assign(item);
      return obj;
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  let obj = {
    style: tmp.container,
    children: memo.map((trait) => {
      const obj = { trait };
      return closure_1_5(GuildProfileTraitView, obj, trait.key);
    })
  };
  return closure_5(View, obj);
};
