// Module ID: 11421
// Function ID: 88875
// Name: ChannelAutocompleteEmojiUpsell
// Dependencies: []
// Exports: default

// Module 11421 (ChannelAutocompleteEmojiUpsell)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[2]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { upsell: { <string:1334598284>: 18058521, <string:3229045644>: 302139792, <string:2213734789>: 302191137 }, title: { "Bool(false)": "Group 11", "Bool(false)": 2 }, emojis: { height: 28 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.emojiWrapper = obj;
obj.emoji = {};
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/channel_text_area/native/ChannelAutocompleteEmojiUpsell.tsx");

export default function ChannelAutocompleteEmojiUpsell(results) {
  results = results.results;
  const tmp = callback3();
  const arg1 = tmp;
  const substr = results.slice(0, 3);
  let obj = { style: tmp.upsell };
  const mapped = substr.map((id) => {
    let obj = { style: items };
    const items = [closure_5.emojiWrapper, ];
    obj = { left: 24 * arg1 };
    items[1] = obj;
    obj = { style: tmp.emoji };
    const obj1 = {};
    if (null != id.id) {
      const obj2 = {};
      ({ id: obj6.id, animated: obj6.animated } = id);
      obj2.size = closure_4;
      let url = callback(closure_2[7]).getEmojiURL(obj2);
      const obj5 = callback(closure_2[7]);
    } else {
      url = id.url;
    }
    obj1.uri = url;
    obj.source = obj1;
    obj.children = closure_5(callback(closure_2[6]), obj);
    return closure_5(closure_3, obj, id.id);
  });
  const result = 24 * substr.length;
  obj = { style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj = { count: results.length };
  obj.children = intl.format(arg1(dependencyMap[9]).t.uEky42, obj);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj.children = items;
  return callback2(View, obj);
};
