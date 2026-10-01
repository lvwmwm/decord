// Module ID: 9566
// Function ID: 9567
// Name: MessagePreviewText
// Dependencies: [19, 17, 2045, 9555, 1085, 21, 4836, 1365, 576, 9567, 9568, 9554, 4832, 5899, 9590, 5083, 9595, 9596, 1096, 6720, 1115, 7304, 2]
// Exports: default

// Module 9566 (MessagePreviewText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1096 */;
import Text_Text from "Text/Text" /* 4832 */;
import useMessageAuthor from "useMessageAuthor" /* 5083 */;
import FastImageDefault from "FastImage" /* 5899 */;
import isForwardMessageDefault from "isForwardMessage" /* 6720 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 9554 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 9567 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 9568 */;
import usePreviewableMedia from "usePreviewableMedia" /* 9590 */;
import usePreviewableMediaText from "usePreviewableMediaText" /* 9595 */;
import useGetInitialMessagePreview from "useGetInitialMessagePreview" /* 9596 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 9555 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "utils/PlatformUtils" /* 1365 */;
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
  let color;
  if (null != embed.color) {
    const str = embed.color;
    if ("#ffffff" !== str.toLowerCase()) {
      color = embed.color;
    }
  }
  let tmp7 = null != color;
  const obj = { style: tmp.embedContainer, children: items1 };
  if (tmp7) {
    const obj2 = { style: items };
    items = [tmp.embedAccentBar, ];
    const obj3 = { backgroundColor: color };
    items[1] = obj3;
    tmp7 = metroImportAll(tmp6, obj2);
  }
  items1 = [tmp7, , ];
  let tmp9 = null != name;
  const obj4 = { style: tmp.embedTextContainer, children: items2 };
  if (tmp9) {
    const obj5 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp9 = metroImportAll(Text_Text.Text, obj5);
  }
  items2 = [tmp9, , , ];
  let tmp13 = null != name1;
  if (tmp13) {
    const obj6 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp13 = metroImportAll(Text_Text.Text, obj6);
  }
  items2[1] = tmp13;
  let tmp18Result = null != rawTitle;
  if (tmp18Result) {
    let num2 = 1;
    const Text = Text_Text.Text;
    const tmp18 = metroImportAll;
    if (null == name) {
      num2 = 1;
      if (null == name1) {
        num2 = 3;
      }
    }
    const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: num2, children: rawTitle };
    tmp18Result = tmp18(Text, obj7);
  }
  items2[2] = tmp18Result;
  let tmp21 = null != embed.rawDescription;
  if (tmp21) {
    const obj8 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp21 = metroImportAll(Text_Text.Text, obj8);
  }
  items2[3] = tmp21;
  items1[1] = React4(View, obj4);
  let tmp25 = null != thumbnail;
  if (tmp25) {
    const obj9 = { media: thumbnail };
    tmp25 = metroImportAll(EmbedMediaThumbnail, obj9);
  }
  items1[2] = tmp25;
  return React4(View, obj);
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
size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "__closure" };
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
      tmp30 = previewableMedia[0].type === tmp(9590).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      let formatResult;
      if (null != nullableMessageAuthor) {
        const intl4 = tmp(1115).intl;
        const obj6 = { username: nullableMessageAuthor.nick };
        formatResult = intl4.format(tmp(1115).t.sLDHDi, obj6);
      } else {
        const intl3 = tmp(1115).intl;
        formatResult = intl3.string(tmp(1115).t["9ddYKt"]);
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
        const ChannelRowPreview = tmp(9568).ChannelRowPreview;
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
          tmp18Result = tmp18(tmp(4832).Text, obj12);
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
        const intl2 = tmp(1115).intl;
        const obj14 = { username: nullableMessageAuthor.nick };
        formatResult1 = intl2.format(tmp(1115).t["1wtRlq"], obj14);
      } else {
        const intl = tmp(1115).intl;
        formatResult1 = intl.string(tmp(1115).t.n3shVJ);
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
