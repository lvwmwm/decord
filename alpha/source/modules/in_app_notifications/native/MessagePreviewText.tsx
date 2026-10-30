// Module ID: 11018
// Function ID: 11019
// Name: MessagePreviewText
// Dependencies: [19, 17, 4858, 11004, 1083, 21, 5009, 1377, 575, 11019, 11020, 11003, 5619, 5712, 1091, 11040, 6432, 11045, 11046, 1095, 5645, 1114, 5687, 2]
// Exports: default

// Module 11018 (MessagePreviewText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1095 */;
import Text_Text from "Text/Text" /* 5619 */;
import isForwardMessageDefault from "isForwardMessage" /* 5645 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5687 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useMessageAuthor from "useMessageAuthor" /* 6432 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 11003 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 11019 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 11020 */;
import usePreviewableMedia from "usePreviewableMedia" /* 11040 */;
import usePreviewableMediaText from "usePreviewableMediaText" /* 11045 */;
import useGetInitialMessagePreview from "useGetInitialMessagePreview" /* 11046 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 11004 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "utils/PlatformUtils" /* 1377 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let obj5;
let obj6;
let size;
function NativeMessagePreviewContent(arg0) {
  let gradientColors;
  let gradientStyles;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  const obj = { children: metroImportAll(ChannelRowPreview2.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) };
  ({ gradientColors, gradientStyles } = tmp);
  return metroImportAll(View, obj);
}
class SystemMessageText {
  constructor(text) {
    text = text.text;
    const tmp = closure_10();
    const obj = InAppNotificationUtils;
    const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    const obj2 = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: metroImportDefault, children: text };
    return metroImportAll(Text_Text.Text, obj2);
  }
}
function EmbedMediaThumbnail(media) {
  let items;
  let obj2;
  media = media.media;
  const tmp = closure_11();
  let url = media.proxyURL;
  if (url == null) {
    url = media.url;
  }
  const result = media.width / media.height;
  let num = 1;
  if (Number.isFinite(result)) {
    num = 1;
    if (result > 0) {
      num = result;
    }
  }
  const obj = { style: items, children: metroImportAll(FastImageDefault, obj2) };
  items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj2 = { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" };
  return metroImportAll(View, obj);
}
function EmbedCard(embed) {
  let items;
  let items1;
  let items2;
  let rawTitle;
  let thumbnail;
  embed = embed.embed;
  const tmp = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  let int2hslResult;
  if (null != embed.color) {
    if (16777215 !== embed.color) {
      const obj = utils_ColorUtils;
      int2hslResult = obj.int2hsl(embed.color);
    }
  }
  let tmp9 = null != int2hslResult;
  const obj2 = { style: tmp.embedContainer, children: items1 };
  if (tmp9) {
    const obj3 = { style: items };
    items = [tmp.embedAccentBar, ];
    const obj4 = { backgroundColor: int2hslResult };
    items[1] = obj4;
    tmp9 = metroImportAll(tmp8, obj3);
  }
  items1 = [tmp9, , ];
  let tmp11 = null != name;
  const obj5 = { style: tmp.embedTextContainer, children: items2 };
  if (tmp11) {
    const obj6 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp11 = metroImportAll(Text_Text.Text, obj6);
  }
  items2 = [tmp11, , , ];
  let tmp15 = null != name1;
  if (tmp15) {
    const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp15 = metroImportAll(Text_Text.Text, obj7);
  }
  items2[1] = tmp15;
  let tmp20Result = null != rawTitle;
  if (tmp20Result) {
    let num3 = 1;
    const Text = Text_Text.Text;
    const tmp20 = metroImportAll;
    if (null == name) {
      num3 = 1;
      if (null == name1) {
        num3 = 3;
      }
    }
    const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num3, children: rawTitle };
    tmp20Result = tmp20(Text, obj8);
  }
  items2[2] = tmp20Result;
  let tmp23 = null != embed.rawDescription;
  if (tmp23) {
    const obj9 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp23 = metroImportAll(Text_Text.Text, obj9);
  }
  items2[3] = tmp23;
  items1[1] = React4(View, obj5);
  let tmp27 = null != thumbnail;
  if (tmp27) {
    const obj10 = { media: thumbnail };
    tmp27 = metroImportAll(EmbedMediaThumbnail, obj10);
  }
  items1[2] = tmp27;
  return React4(View, obj2);
}
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportDefault } = InAppNotificationConstants);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let obj = { italic: obj2 };
obj2 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
const authStore = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { embedContainer: obj4, embedAccentBar: obj5, embedTextContainer: obj6, embedMediaContainer: size, embedMedia: { width: "100%", height: "100%" } };
obj4 = { borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
const createStyles2 = createStyles.createStyles;
obj5 = { width: 4, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_8, alignSelf: "stretch" };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "HermesInternal" };
let closure_11 = createStyles2(obj3);
size = size_mod;
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  let items1;
  let items3;
  let secondaryText;
  let showMessageAuthor;
  let text;
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  const obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let tmp4 = null;
  const useNullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor;
  useMessageAuthor;
  if (showMessageAuthor) {
    tmp4 = message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(tmp4);
  const tmpResult = usePreviewableMediaText;
  const previewableMediaText = tmpResult.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  const tmpResult3 = useGetInitialMessagePreview;
  const getInitialMessagePreview = tmpResult3.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = react.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
      let tmp44;
      if (null != text) {
        const obj2 = { text };
        tmp44 = metroImportAll(SystemMessageText, obj2);
      }
      return tmp44;
    }
    const obj3 = { children: items1 };
    const obj4 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    items1 = [metroImportAll(NativeMessagePreviewContent, obj4), ];
    const obj5 = { embed: first };
    items1[1] = metroImportAll(EmbedCard, obj5);
    tmp44 = React4(View, obj3);
  } else if (isForwardMessageDefault(message)) {
    let tmp30 = previewableMedia.length > 0;
    if (tmp30) {
      tmp30 = previewableMedia[0].type === tmp(11040).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      let formatResult;
      if (null != nullableMessageAuthor) {
        const intl4 = tmp(1114).intl;
        const obj6 = { username: nullableMessageAuthor.nick };
        formatResult = intl4.format(tmp(1114).t.sLDHDi, obj6);
      } else {
        const intl3 = tmp(1114).intl;
        formatResult = intl3.string(tmp(1114).t["9ddYKt"]);
      }
      const obj7 = { text: formatResult };
      return metroImportAll(SystemMessageText, obj7);
    }
    const obj8 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(NativeMessagePreviewContent, obj8);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = ChannelStore.getChannel(message.channel_id);
      InAppNotificationUtils;
      if (null != channel) {
        const obj9 = { channel, message, color: "text-default", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, variant: tmp25, muted: false, lineClamp: metroImportDefault };
        const ChannelRowPreview = tmp(11020).ChannelRowPreview;
        return metroImportAll(ChannelRowPreview, obj9);
      }
    }
    const obj10 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(NativeMessagePreviewContent, obj10);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj11 = { text };
        const items2 = [metroImportAll(SystemMessageText, obj11), ];
        let tmp18Result = null !== secondaryText;
        const tmp16 = React4;
        const tmp17 = View;
        const tmp18 = metroImportAll;
        if (tmp18Result) {
          const obj12 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: metroImportDefault, children: secondaryText };
          tmp18Result = tmp18(tmp(5619).Text, obj12);
        }
        const obj13 = { children: items2 };
        items2[1] = tmp18Result;
        return tmp16(tmp17, obj13);
      }
    }
    if (null != message.poll) {
      let formatResult1;
      const text2 = message.poll.question.text;
      if (null != nullableMessageAuthor) {
        const intl2 = tmp(1114).intl;
        const obj14 = { username: nullableMessageAuthor.nick };
        formatResult1 = intl2.format(tmp(1114).t["1wtRlq"], obj14);
      } else {
        const intl = tmp(1114).intl;
        formatResult1 = intl.string(tmp(1114).t.n3shVJ);
      }
      const obj15 = { children: items3 };
      const obj16 = { text: formatResult1 };
      items3 = [metroImportAll(SystemMessageText, obj16), ];
      const obj17 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp: metroImportDefault, children: text2 };
      items3[1] = metroImportAll(Text_Text.Text, obj17);
      return React4(View, obj15);
    } else {
      const obj18 = { message, lineClamp: metroImportDefault, maxHeight: metroRequire };
      return metroImportAll(NativeMessagePreviewContent, obj18);
    }
  }
};
export { SystemMessageText };
