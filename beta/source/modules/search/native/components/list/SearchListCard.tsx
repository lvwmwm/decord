// Module ID: 16488
// Function ID: 16489
// Name: SearchListCard
// Dependencies: [19, 17, 21, 4836, 576, 1177, 4832, 4678, 4989, 10371, 5402, 1115, 5335, 5919, 2]
// Exports: SearchListCardContainer, SearchListCardContent, SearchListCardFooter, SearchListCardThumbnail

// Module 16488 (SearchListCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import ForumIcon from "ForumIcon" /* 5402 */;
import Card_Card from "Card/Card" /* 5919 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp2;
const GroupDMAvatarDefault = tmp2(10371);
class SearchListContentAuthor {
  constructor(author) {
    let items;
    let obj4;
    author = author.author;
    const avatarSource = author.avatarSource;
    const tmp = closure_7();
    const obj = { style: tmp.author, children: items };
    const obj2 = { source: avatarSource, size: native.AvatarSizes.SIZE_16, style: tmp.avatar, avatarDecoration: author.avatarDecoration };
    const Avatar = native.Avatar;
    items = [hasOwnProperty(Avatar, obj2), ];
    const obj3 = { style: tmp.authorName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: obj4.getName(author) };
    const Text = Text_Text.Text;
    obj4 = UserUtilsDefault;
    items[1] = hasOwnProperty(Text, obj3);
    return metroRequire(View, obj);
  }
}
function SearchListPrivateChannel(channel) {
  let intl;
  let obj3;
  let tmp2Result;
  let tmp5Result;
  channel = channel.channel;
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const tmp4 = useChannelNameDefault(channel);
  if (channel.isGroupDM()) {
    obj.style = tmp.channel;
    const obj2 = { style: tmp.gdmIcon, children: hasOwnProperty(tmp2Result, obj3) };
    obj3 = { channel, size: native.AvatarSizes.SIZE_16 };
    tmp2Result = GroupDMAvatarDefault;
    const items = [hasOwnProperty(View, obj2), ];
    const obj4 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp4 };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj.children = items;
    tmp5Result = tmp5(tmp6, obj);
  } else {
    obj.style = tmp.privateChannelIcon;
    const obj5 = { style: tmp.icon, size: "xs", color: "interactive-text-default" };
    const items1 = [hasOwnProperty(ForumIcon.ForumIcon, obj5), ];
    const obj6 = { variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: intl.string(intl2.t.ACgJhM) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items1[1] = hasOwnProperty(Text, obj6);
    obj.children = items1;
    tmp5Result = tmp5(tmp6, obj);
  }
  return tmp5Result;
}
class SearchListGuildChannel {
  constructor(channel) {
    let items;
    channel = channel.channel;
    const tmp = closure_7();
    const obj2 = { style: tmp.channel, children: items };
    const tmp2 = useChannelNameDefault(channel);
    const obj = utils_ChannelUtils;
    const channelIcon = obj.getChannelIcon(channel, { ignoreTraits: true });
    const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: channelIcon, color: tmp.channelIcon.color };
    const Icon = native.Icon;
    items = [hasOwnProperty(Icon, obj3), ];
    const obj4 = { style: tmp.channelName, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, children: tmp2 };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    return metroRequire(View, obj2);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { channelName: { flexShrink: 1, marginStart: 4 }, channelIcon: obj2, avatar: { marginRight: 2 }, channel: { flexDirection: "row", alignItems: "center" }, author: { flexDirection: "row", alignItems: "center" }, authorName: { flexShrink: 1, marginStart: 2 }, container: obj3, content: { paddingTop: 12, paddingHorizontal: 12, paddingBottom: 4 }, footer: { flexDirection: "column", paddingTop: 4, paddingHorizontal: 12, paddingBottom: 12, gap: 4 }, thumbnail: obj4, privateChannelIcon: { flexDirection: "row", alignItems: "center" }, icon: { marginRight: 4 }, gdmIcon: { width: 18 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj4 = { flex: 1, overflow: "hidden", borderTopRightRadius: nativeDefault.radii.lg, borderTopLeftRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
const metroImportDefault = createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListCard.tsx");

export { SearchListContentAuthor };
export { SearchListGuildChannel };
export const SearchListCardContainer = function SearchListCardContainer(arg0) {
  let children;
  let containerStyle;
  let items;
  let onPress;
  ({ children, onPress, containerStyle } = arg0);
  const obj = { shadow: "low", border: "subtle", onPress, style: items, children };
  items = [closure_7().container, containerStyle];
  closure_7();
  return hasOwnProperty(Card_Card.Card, obj);
};
export const SearchListCardThumbnail = function SearchListCardThumbnail(children) {
  const obj = { style: closure_7().thumbnail, children: children.thumbnail };
  return hasOwnProperty(View, obj);
};
export const SearchListCardContent = function SearchListCardContent(arg0) {
  let items;
  let label;
  let subLabel;
  ({ label, subLabel } = arg0);
  let tmp3 = label;
  const obj = { style: closure_7().content, children: items };
  const tmp = metroRequire;
  const tmp2 = View;
  if (typeof label === "string") {
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: label };
    tmp3 = hasOwnProperty(Text_Text.Text, obj2);
  }
  items = [tmp3, ];
  let tmp4 = subLabel;
  if (typeof subLabel === "string") {
    const obj3 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: subLabel };
    tmp4 = hasOwnProperty(Text_Text.Text, obj3);
  }
  items[1] = tmp4;
  return tmp(tmp2, obj);
};
export const SearchListCardFooter = function SearchListCardFooter(channel) {
  let author;
  let avatarSource;
  let items1;
  channel = channel.channel;
  ({ author, avatarSource } = channel);
  const items = [channel];
  let tmp = closure_7();
  const obj = { style: tmp.footer, children: items1 };
  const memo = react.useMemo(() => {
    let tmp = null;
    if (null != channel) {
      let tmp4;
      if (null == channel.getGuildId()) {
        const obj2 = { channel };
        tmp4 = hasOwnProperty(SearchListPrivateChannel, obj2);
      } else {
        const obj3 = { channel };
        tmp4 = hasOwnProperty(SearchListGuildChannel, obj3);
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  items1 = [closure_5(SearchListContentAuthor, { author, avatarSource }), memo];
  return closure_6(View, obj);
};
