// Module ID: 11910
// Function ID: 92198
// Name: TraitEmoji
// Dependencies: [31, 27, 33, 4130, 689, 1392, 3775, 5151, 4126, 2]
// Exports: default

// Module 11910 (TraitEmoji)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      let obj = importDefault(1392);
      obj = {};
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      obj.size = 16;
      emojiURL = obj.getEmojiURL(obj);
    }
    const obj3 = importDefault(3775);
    obj = { src: emojiURL, name: importDefault(3775).isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    return callback(importDefault(5151), obj);
  }
}
function GuildProfileTraitView(trait) {
  trait = trait.trait;
  let obj = { style: _createForOfIteratorHelperLoose().trait };
  obj = { emoji: trait.emoji };
  const items = [callback(TraitEmoji, obj), ];
  obj = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.trait = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emojiImage = { width: 16, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const memo = React.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((arg0, arg1) => {
      const merged = Object.assign(arg0);
      return { key: "trait-" + arg1 };
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  const tmp = _createForOfIteratorHelperLoose();
  return callback(View, { style: _createForOfIteratorHelperLoose().container, children: memo.map((key) => outer1_5(outer1_9, { trait: key }, key.key)) });
};
