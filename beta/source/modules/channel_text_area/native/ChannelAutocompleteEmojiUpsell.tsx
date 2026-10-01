// Module ID: 11876
// Function ID: 11877
// Name: ChannelAutocompleteEmojiUpsell
// Dependencies: [19, 17, 1375, 21, 4836, 576, 5899, 1397, 4832, 1115, 2]
// Exports: default

// Module 11876 (ChannelAutocompleteEmojiUpsell)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let size;
let tmp3;
const AvatarUtilsDefault = tmp3(1397);
const View = react_native.View;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, title: { lineHeight: 16, flex: 1 }, emojis: { height: 28 }, emojiWrapper: size, emoji: { width: 16, height: 16 } };
size = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  let closure_0;
  let intl;
  let items;
  let items1;
  let obj3;
  results = results.results;
  const tmp = closure_7();
  _require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell, children: items };
  const mapped = substr.map((id, index) => {
    let items;
    let obj3;
    let tmp5;
    let url;
    const obj = { style: items, children: hasOwnProperty(tmp5, obj3) };
    items = [closure_0.emojiWrapper, ];
    const obj2 = { left: 24 * index };
    items[1] = obj2;
    obj3 = { style: closure_0.emoji, source: { uri: url } };
    const tmp2 = View;
    tmp5 = FastImageDefault;
    if (null != id.id) {
      const obj4 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
      ({ id: obj5.id, animated: obj5.animated } = id);
      const tmp3Result = AvatarUtilsDefault;
      url = tmp3Result.getEmojiURL(obj4);
    } else {
      url = id.url;
    }
    return hasOwnProperty(tmp2, obj, id.id);
  });
  const result = 24 * substr.length;
  let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", children: intl.format(require("intl").t.uEky42, obj3) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj3 = { count: results.length };
  items = [closure_5(Text, obj2), ];
  let obj4 = { style: items1, children: mapped };
  items1 = [tmp.emojis, ];
  const obj5 = { width: result + 16 };
  items1[1] = obj5;
  items[1] = closure_5(View, obj4);
  return closure_6(View, obj);
};
