// Module ID: 11421
// Function ID: 88863
// Name: ChannelAutocompleteEmojiUpsell
// Dependencies: []
// Exports: default

// Module 11421 (ChannelAutocompleteEmojiUpsell)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[2]).EMOJI_URL_BASE_SIZE;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { upsell: { padding: "Next", paddingBottom: null, flexDirection: null }, title: { "Bool(false)": "Group 11", "Bool(false)": 2 }, emojis: { height: 28 } };
obj = { "Null": false, "Null": false, nm: false, body: false, status: false, padding: false, enabled: false, text: false, formatToPlainString: false, HTTP: false, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
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
  obj = { 2003551622: "container", 1366017591: "isArray", 996410372: "isArrayBuffer", style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj = { count: results.length };
  obj.children = intl.format(arg1(dependencyMap[9]).t.uEky42, obj);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), ];
  const items1 = [tmp.emojis, { width: result + 16 }];
  items[1] = callback(View, { style: items1, children: mapped });
  obj.children = items;
  return callback2(View, obj);
};
