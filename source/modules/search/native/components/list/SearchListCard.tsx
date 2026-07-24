// Module ID: 15408
// Function ID: 117581
// Name: SearchListContentAuthor
// Dependencies: [31, 27, 33, 4130, 689, 1273, 4126, 3969, 4320, 9134, 4645, 1212, 4593, 5167, 2]
// Exports: SearchListCardContainer, SearchListCardContent, SearchListCardFooter, SearchListCardThumbnail

// Module 15408 (SearchListContentAuthor)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
class SearchListContentAuthor {
  constructor(arg0) {
    author = global.author;
    tmp = c7();
    obj = { style: tmp.author };
    obj = { source: global.avatarSource };
    obj.size = require("Button").AvatarSizes.SIZE_16;
    obj.style = tmp.avatar;
    obj.avatarDecoration = author.avatarDecoration;
    items = [, ];
    items[0] = jsx(require("Button").Avatar, obj);
    obj1 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1 };
    obj1.style = tmp.authorName;
    obj4 = require("conceal");
    obj1.children = obj4.getName(author);
    items[1] = jsx(require("Text").Text, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
  channel = channel.channel;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  if (channel.isGroupDM()) {
    obj.style = tmp.channel;
    obj = { style: tmp.gdmIcon };
    obj = { channel, size: require(1273) /* Button */.AvatarSizes.SIZE_16 };
    obj.children = callback(importDefault(9134), obj);
    const items = [callback(View, obj), ];
    const obj1 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp2 };
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    let tmp3Result = tmp3(tmp4, obj);
    const tmp15 = importDefault(9134);
  } else {
    obj.style = tmp.privateChannelIcon;
    const obj2 = { style: tmp.icon, size: "xs", color: "interactive-text-default" };
    const items1 = [callback(require(4645) /* ForumIcon */.ForumIcon, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1 };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl.string(require(1212) /* getSystemLocale */.t.ACgJhM);
    items1[1] = callback(require(4126) /* Text */.Text, obj3);
    obj.children = items1;
    tmp3Result = tmp3(tmp4, obj);
  }
  return tmp3Result;
}
class SearchListGuildChannel {
  constructor(arg0) {
    channel = global.channel;
    tmp = c7();
    tmp2 = require("computeDefaultGroupDmNameFromUserIds")(channel);
    obj = require("getThreadChannelIcon");
    obj = { style: tmp.channel };
    channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    obj1 = {};
    obj1.size = require("Button").Icon.Sizes.REFRESH_SMALL_16;
    obj1.source = channelIcon;
    obj1.color = tmp.channelIcon.color;
    items = [, ];
    items[0] = jsx(require("Button").Icon, obj1);
    obj2 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1 };
    obj2.style = tmp.channelName;
    obj2.children = tmp2;
    items[1] = jsx(require("Text").Text, obj2);
    obj.children = items;
    return jsxs(View, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { channelName: { flexShrink: 1, marginStart: 4 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.channelIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { marginRight: 2 };
_createForOfIteratorHelperLoose.channel = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.author = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.authorName = { flexShrink: 1, marginStart: 2 };
let obj1 = { flex: 1, padding: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
_createForOfIteratorHelperLoose.container = obj1;
_createForOfIteratorHelperLoose.content = { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 };
_createForOfIteratorHelperLoose.footer = { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 };
let obj2 = { flex: 1, overflow: "hidden", borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.thumbnail = obj2;
_createForOfIteratorHelperLoose.privateChannelIcon = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.icon = { marginRight: 4 };
_createForOfIteratorHelperLoose.gdmIcon = { width: 18 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  let children;
  let containerStyle;
  let onPress;
  ({ children, onPress, containerStyle } = arg0);
  const obj = { shadow: "low", border: "subtle", onPress };
  const items = [_createForOfIteratorHelperLoose().container, containerStyle];
  obj.style = items;
  obj.children = children;
  return callback(require(5167) /* getCardBackgroundToken */.Card, obj);
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  return callback(View, { style: _createForOfIteratorHelperLoose().thumbnail, children: children.thumbnail });
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  let label;
  let subLabel;
  ({ label, subLabel } = arg0);
  let obj = { style: _createForOfIteratorHelperLoose().content };
  let tmp3 = label;
  if ("string" === typeof label) {
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
    tmp3 = callback(require(4126) /* Text */.Text, obj);
  }
  const items = [tmp3, ];
  let tmp7 = subLabel;
  if ("string" === typeof subLabel) {
    obj = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
    tmp7 = callback(require(4126) /* Text */.Text, obj);
  }
  items[1] = tmp7;
  obj.children = items;
  return closure_6(View, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  let author;
  let avatarSource;
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let obj = { style: _createForOfIteratorHelperLoose().footer };
  const memo = React.useMemo(() => {
    if (null == channel) {
      return null;
    } else if (null == channel.getGuildId()) {
      let obj = { channel };
      let tmp5 = outer1_5(outer1_9, obj);
    } else {
      obj = { channel };
      tmp5 = outer1_5(outer1_10, obj);
    }
  }, items);
  const items1 = [callback(SearchListContentAuthor, { author, avatarSource }), memo];
  obj.children = items1;
  return callback2(View, obj);
};
