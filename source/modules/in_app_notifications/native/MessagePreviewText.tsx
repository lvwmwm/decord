// Module ID: 10284
// Function ID: 79450
// Name: NativeMessagePreviewContent
// Dependencies: [31, 27, 1348, 10267, 33, 4130, 478, 689, 10285, 10286, 10266, 4126, 5085, 10300, 4360, 10305, 10306, 670, 5679, 1212, 3808, 2]
// Exports: default

// Module 10284 (NativeMessagePreviewContent)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import isWindows from "isWindows";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function NativeMessagePreviewContent(arg0) {
  let gradientColors;
  let gradientStyles;
  let lineClamp;
  let maxHeight;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = importDefault(10285)();
  ({ gradientColors, gradientStyles } = tmp);
  return callback(View, { children: callback(require(10286) /* PreviewIcon */.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = jsx();
    obj = require("hasMedia");
    messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    obj = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: c7, children: global.text };
    return jsx(require("Text").Text, obj);
  }
}
function EmbedMediaThumbnail(media) {
  media = media.media;
  const tmp = callback3();
  let url = media.proxyURL;
  if (null == url) {
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
  obj = { style: items, children: callback(importDefault(5085), obj) };
  items = [tmp.embedMediaContainer, ];
  obj = { aspectRatio: num };
  items[1] = obj;
  obj = { source: obj1, style: tmp.embedMedia, resizeMode: "contain" };
  obj1 = { uri: url };
  return callback(View, obj);
}
function EmbedCard(embed) {
  let rawTitle;
  let thumbnail;
  embed = embed.embed;
  const tmp = callback3();
  const provider = embed.provider;
  let name;
  if (null != provider) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (null != author) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (null == thumbnail) {
    thumbnail = embed.image;
  }
  let color;
  if (null != embed.color) {
    if ("#ffffff" !== str.toLowerCase()) {
      color = embed.color;
    }
    str = embed.color;
  }
  let obj = { style: tmp.embedContainer };
  let tmp7 = null != color;
  if (tmp7) {
    obj = {};
    const items = [tmp.embedAccentBar, ];
    obj = { backgroundColor: color };
    items[1] = obj;
    obj.style = items;
    tmp7 = callback(View, obj);
  }
  const items1 = [tmp7, , ];
  const obj1 = { style: tmp.embedTextContainer };
  let tmp12 = null != name;
  if (tmp12) {
    const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp12 = callback(require(4126) /* Text */.Text, obj2);
  }
  const items2 = [tmp12, , , ];
  let tmp16 = null != name1;
  if (tmp16) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp16 = callback(require(4126) /* Text */.Text, obj3);
  }
  items2[1] = tmp16;
  let tmp21Result = null != rawTitle;
  if (tmp21Result) {
    const obj4 = { variant: "text-xs/medium", color: "text-link" };
    let num5 = 1;
    if (null == name) {
      num5 = 1;
      if (null == name1) {
        num5 = 3;
      }
    }
    obj4.lineClamp = num5;
    obj4.children = rawTitle;
    tmp21Result = callback(require(4126) /* Text */.Text, obj4);
    const tmp21 = callback;
  }
  items2[2] = tmp21Result;
  let tmp24 = null != embed.rawDescription;
  if (tmp24) {
    const obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp24 = callback(require(4126) /* Text */.Text, obj5);
  }
  items2[3] = tmp24;
  obj1.children = items2;
  items1[1] = closure_9(View, obj1);
  let tmp28 = null != thumbnail;
  if (tmp28) {
    const obj6 = { media: thumbnail };
    tmp28 = callback(EmbedMediaThumbnail, obj6);
  }
  items1[2] = tmp28;
  obj.children = items1;
  return closure_9(View, obj);
}
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_6, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = set);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { fontStyle: "italic" };
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (isWindows.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
_createForOfIteratorHelperLoose.fontFamily = str;
_createForOfIteratorHelperLoose.italic = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { embedContainer: { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" } };
isWindows = { width: 4, marginTop: -require("_createForOfIteratorHelperLoose").space.PX_8, marginBottom: -require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "stretch" };
obj1.embedAccentBar = isWindows;
_createForOfIteratorHelperLoose = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj1.embedTextContainer = _createForOfIteratorHelperLoose;
let obj5 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden", height: 60, width: undefined };
obj1.embedMediaContainer = obj5;
obj1.embedMedia = { width: "100%", height: "100%" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj1);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  let lineClamp;
  let maxHeight;
  let secondaryText;
  let showMessageAuthor;
  let text;
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  let obj = message(10300);
  const previewableMedia = obj.usePreviewableMedia(message);
  let obj1 = message(4360);
  let tmp = null;
  if (showMessageAuthor) {
    tmp = message;
  }
  const nullableMessageAuthor = obj1.useNullableMessageAuthor(tmp);
  let obj2 = message(10305);
  const previewableMediaText = obj2.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  let obj3 = message(10306);
  const getInitialMessagePreview = obj3.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = React.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === message(670).MessageEmbedTypes.GIFV) {
      if (null != text) {
        obj = { text };
        let tmp64 = callback(SystemMessageText, obj);
      }
      return tmp64;
    }
    obj = {};
    obj1 = { message: getInitialMessagePreview, lineClamp: closure_7, maxHeight: closure_6 };
    const items1 = [callback(NativeMessagePreviewContent, obj1), ];
    obj2 = { embed: first };
    items1[1] = callback(EmbedCard, obj2);
    obj.children = items1;
    tmp64 = callback2(View, obj);
  } else if (importDefault(5679)(message)) {
    let tmp41 = previewableMedia.length > 0;
    if (tmp41) {
      tmp41 = previewableMedia[0].type === message(10300).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      if (null != nullableMessageAuthor) {
        const intl4 = message(1212).intl;
        obj3 = { username: nullableMessageAuthor.nick };
        let formatResult = intl4.format(message(1212).t.sLDHDi, obj3);
      } else {
        const intl3 = message(1212).intl;
        formatResult = intl3.string(message(1212).t["9ddYKt"]);
      }
      const obj4 = { text: formatResult };
      return callback(SystemMessageText, obj4);
    }
    const obj5 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return callback(NativeMessagePreviewContent, obj5);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      channel = channel.getChannel(message.channel_id);
      message(10266);
      if (null != channel) {
        const obj6 = { channel, message, color: "text-default", layout: message(3808).ChannelListLayoutTypes.COZY, variant: tmp34, muted: false, lineClamp };
        return callback(message(10286).ChannelRowPreview, obj6);
      }
    }
    const obj7 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return callback(NativeMessagePreviewContent, obj7);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj8 = {};
        const obj9 = { text };
        const items2 = [callback(SystemMessageText, obj9), ];
        let tmp24 = null !== secondaryText;
        if (tmp24) {
          const obj10 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: closure_7, children: secondaryText };
          tmp24 = callback(message(4126).Text, obj10);
        }
        items2[1] = tmp24;
        obj8.children = items2;
        return callback2(View, obj8);
      }
    }
    if (null != message.poll) {
      if (null != nullableMessageAuthor) {
        const intl2 = message(1212).intl;
        const obj11 = { username: nullableMessageAuthor.nick };
        let formatResult1 = intl2.format(message(1212).t["1wtRlq"], obj11);
      } else {
        const intl = message(1212).intl;
        formatResult1 = intl.string(message(1212).t.n3shVJ);
      }
      const obj12 = {};
      const obj13 = { text: formatResult1 };
      const items3 = [callback(SystemMessageText, obj13), ];
      const obj14 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp: closure_7, children: message.poll.question.text };
      items3[1] = callback(message(4126).Text, obj14);
      obj12.children = items3;
      return callback2(View, obj12);
    } else {
      const obj15 = { message, lineClamp, maxHeight };
      return callback(NativeMessagePreviewContent, obj15);
    }
  }
};
export { SystemMessageText };
