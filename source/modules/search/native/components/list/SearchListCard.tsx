// Module ID: 15245
// Function ID: 115089
// Name: SearchListContentAuthor
// Dependencies: []
// Exports: SearchListCardContainer, SearchListCardContent, SearchListCardFooter, SearchListCardThumbnail

// Module 15245 (SearchListContentAuthor)
class SearchListContentAuthor {
  constructor(arg0) {
    author = global.author;
    tmp = closure_7();
    obj = { style: tmp.author };
    obj = { source: global.avatarSource };
    obj.size = arg1(dependencyMap[5]).AvatarSizes.SIZE_16;
    obj.style = tmp.avatar;
    obj.avatarDecoration = author.avatarDecoration;
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[5]).Avatar, obj);
    obj1 = { <string:2846932934>: "construct", <string:1289959171>: "y", <string:1640337854>: "isArray", <string:2933637077>: "isArray" };
    obj1.style = tmp.authorName;
    obj4 = importDefault(dependencyMap[7]);
    obj1.children = obj4.getName(author);
    items[1] = jsx(arg1(dependencyMap[6]).Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = {};
  if (channel.isGroupDM()) {
    obj.style = tmp.channel;
    obj = { style: tmp.gdmIcon };
    obj = { channel, size: arg1(dependencyMap[5]).AvatarSizes.SIZE_16 };
    obj.children = callback(importDefault(dependencyMap[9]), obj);
    const items = [callback(View, obj), ];
    const obj1 = { <string:2846932934>: "construct", <string:1289959171>: "y", <string:1640337854>: "isArray", <string:2933637077>: "isArray", style: tmp.channelName, children: tmp2 };
    items[1] = callback(arg1(dependencyMap[6]).Text, obj1);
    obj.children = items;
    let tmp3Result = tmp3(tmp4, obj);
    const tmp15 = importDefault(dependencyMap[9]);
  } else {
    obj.style = tmp.privateChannelIcon;
    const obj2 = { style: tmp.icon };
    const items1 = [callback(arg1(dependencyMap[10]).ForumIcon, obj2), ];
    const obj3 = { 803799044: "he", 1269170180: "<string:105791744>", 711589892: "<string:208732161>" };
    const intl = arg1(dependencyMap[11]).intl;
    obj3.children = intl.string(arg1(dependencyMap[11]).t.ACgJhM);
    items1[1] = callback(arg1(dependencyMap[6]).Text, obj3);
    obj.children = items1;
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = closure_7();
    tmp2 = importDefault(dependencyMap[8])(channel);
    obj = arg1(dependencyMap[12]);
    obj = { style: tmp.channel };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj1 = {};
    obj1.size = arg1(dependencyMap[5]).Icon.Sizes.REFRESH_SMALL_16;
    obj1.source = channelIcon;
    obj1.color = tmp.channelIcon.color;
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[5]).Icon, obj1);
    obj2 = { <string:2846932934>: "construct", <string:1289959171>: "y", <string:1640337854>: "isArray", <string:2933637077>: "isArray" };
    obj2.style = tmp.channelName;
    obj2.children = tmp2;
    items[1] = jsx(arg1(dependencyMap[6]).Text, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { channelName: { "Bool(true)": false, "Bool(true)": false } };
obj = { color: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.channelIcon = obj;
obj.avatar = { marginRight: 2 };
obj.channel = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.author = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.authorName = { "Bool(true)": -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 };
const tmp2 = arg1(dependencyMap[2]);
obj.container = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.content = {};
obj.footer = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.thumbnail = { borderTopRightRadius: importDefault(dependencyMap[4]).radii.lg, borderTopLeftRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.privateChannelIcon = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F" };
obj.icon = { marginRight: 4 };
obj.gdmIcon = { width: 18 };
let closure_7 = obj.createStyles(obj);
const obj2 = { borderTopRightRadius: importDefault(dependencyMap[4]).radii.lg, borderTopLeftRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  let children;
  let containerStyle;
  let onPress;
  ({ children, onPress, containerStyle } = arg0);
  const style = [callback3().container, containerStyle];
  return callback(arg1(dependencyMap[13]).Card, { onPress, style, children });
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  return callback(View, { style: callback3().thumbnail, children: children.thumbnail });
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  let label;
  let subLabel;
  ({ label, subLabel } = arg0);
  let obj = { style: callback3().content };
  let tmp3 = label;
  if ("string" === typeof label) {
    obj = { 803799044: "<string:20995968>", 1269170180: "ars", 711589892: "<string:310460928>", children: label };
    tmp3 = callback(arg1(dependencyMap[6]).Text, obj);
  }
  const items = [tmp3, ];
  let tmp7 = subLabel;
  if ("string" === typeof subLabel) {
    obj = { children: subLabel };
    tmp7 = callback(arg1(dependencyMap[6]).Text, obj);
  }
  items[1] = tmp7;
  obj.children = items;
  return closure_6(View, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  let author;
  let avatarSource;
  channel = channel.channel;
  const arg1 = channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  const obj = { style: callback3().footer };
  const memo = React.useMemo(() => {
    if (null == channel) {
      return null;
    } else if (null == channel.getGuildId()) {
      let obj = { channel };
      let tmp5 = callback(closure_9, obj);
    } else {
      obj = { channel };
      tmp5 = callback(closure_10, obj);
    }
  }, items);
  const items1 = [callback(SearchListContentAuthor, { author, avatarSource }), memo];
  obj.children = items1;
  return callback2(View, obj);
};
