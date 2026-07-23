// Module ID: 11432
// Function ID: 88938
// Name: ChannelAutocompleteEmojiUpsell
// Dependencies: [31, 27, 1852, 33, 4130, 689, 5085, 1392, 4126, 1212, 2]
// Exports: default

// Module 11432 (ChannelAutocompleteEmojiUpsell)
import "result";
import { View } from "get ActivityIndicator";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { upsell: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, title: { lineHeight: 16, flex: 1 }, emojis: { height: 28 } };
_createForOfIteratorHelperLoose = { position: "absolute", width: 28, height: 28, padding: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderWidth: 2, borderRadius: 14, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.emojiWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emoji = { width: 16, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("set").fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell };
  const mapped = substr.map((id) => {
    let obj = { style: items };
    items = [outer1_5.emojiWrapper, ];
    obj = { left: 24 * arg1 };
    items[1] = obj;
    obj = { style: tmp.emoji };
    const obj1 = {};
    if (null != id.id) {
      const obj2 = {};
      ({ id: obj6.id, animated: obj6.animated } = id);
      obj2.size = outer1_4;
      let url = outer1_1(outer1_2[7]).getEmojiURL(obj2);
      const obj5 = outer1_1(outer1_2[7]);
    } else {
      url = id.url;
    }
    obj1.uri = url;
    obj.source = obj1;
    obj.children = outer1_5(outer1_1(outer1_2[6]), obj);
    return outer1_5(outer1_3, obj, id.id);
  });
  const result = 24 * substr.length;
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { count: results.length };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.uEky42, obj);
  let items = [callback(require(4126) /* Text */.Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj.children = items;
  return callback2(View, obj);
};
