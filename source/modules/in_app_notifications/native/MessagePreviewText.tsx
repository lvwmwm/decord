// Module ID: 10242
// Function ID: 79187
// Name: NativeMessagePreviewContent
// Dependencies: []
// Exports: default

// Module 10242 (NativeMessagePreviewContent)
function NativeMessagePreviewContent(arg0) {
  let lineClamp;
  let maxHeight;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  return callback(View, { children: callback(arg1(dependencyMap[10]).NativeChannelRowPreview, { message, lineClamp, maxHeight }) });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = jsx();
    obj = arg1(dependencyMap[11]);
    messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    obj = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: closure_9, children: global.text };
    return jsx(arg1(dependencyMap[12]).Text, obj);
  }
}
function EmbedMediaThumbnail(media) {
  media = media.media;
  const tmp = callback4();
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
  let obj = { style: items, children: callback(importDefault(dependencyMap[13]), obj) };
  const items = [tmp.embedMediaContainer, ];
  obj = { aspectRatio: num };
  items[1] = obj;
  obj = { source: obj1, style: tmp.embedMedia, resizeMode: "contain" };
  const obj1 = { uri: url };
  return callback(View, obj);
}
function EmbedCard(embed) {
  let rawTitle;
  let thumbnail;
  embed = embed.embed;
  const tmp = callback4();
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
    const str = embed.color;
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
    const obj2 = { children: name };
    tmp12 = callback(arg1(dependencyMap[12]).Text, obj2);
  }
  const items2 = [tmp12, , , ];
  let tmp16 = null != name1;
  if (tmp16) {
    const obj3 = { 803799044: true, 1269170180: true, 711589892: true, children: name1 };
    tmp16 = callback(arg1(dependencyMap[12]).Text, obj3);
  }
  items2[1] = tmp16;
  let tmp21Result = null != rawTitle;
  if (tmp21Result) {
    const obj4 = {};
    let num5 = 1;
    if (null == name) {
      num5 = 1;
      if (null == name1) {
        num5 = 3;
      }
    }
    obj4.lineClamp = num5;
    obj4.children = rawTitle;
    tmp21Result = callback(arg1(dependencyMap[12]).Text, obj4);
    const tmp21 = callback;
  }
  items2[2] = tmp21Result;
  let tmp24 = null != embed.rawDescription;
  if (tmp24) {
    const obj5 = { 803799044: 17299712, 1269170180: 37646336, 711589892: 21319168, children: embed.rawDescription };
    tmp24 = callback(arg1(dependencyMap[12]).Text, obj5);
  }
  items2[3] = tmp24;
  obj1.children = items2;
  items1[1] = closure_11(View, obj1);
  let tmp28 = null != thumbnail;
  if (tmp28) {
    const obj6 = { media: thumbnail };
    tmp28 = callback(EmbedMediaThumbnail, obj6);
  }
  items1[2] = tmp28;
  obj.children = items1;
  return closure_11(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const MessageSnapshotRecord = arg1(dependencyMap[2]).MessageSnapshotRecord;
let closure_7 = importDefault(dependencyMap[3]);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_8, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { fontStyle: "italic" };
let obj3 = arg1(dependencyMap[7]);
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (obj3.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
obj.fontFamily = str;
obj.italic = obj;
let closure_12 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[6]);
const obj1 = {};
const tmp3 = arg1(dependencyMap[5]);
obj1.embedContainer = { borderRadius: importDefault(dependencyMap[8]).radii.sm, paddingTop: importDefault(dependencyMap[8]).space.PX_8, paddingBottom: importDefault(dependencyMap[8]).space.PX_8, paddingRight: importDefault(dependencyMap[8]).space.PX_8, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
obj3 = { width: 4, marginTop: -importDefault(dependencyMap[8]).space.PX_8, marginBottom: -importDefault(dependencyMap[8]).space.PX_8, alignSelf: "stretch" };
obj1.embedAccentBar = obj3;
obj4 = { flex: 1, gap: importDefault(dependencyMap[8]).space.PX_4, paddingVertical: importDefault(dependencyMap[8]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_8 };
obj1.embedTextContainer = obj4;
const obj2 = { borderRadius: importDefault(dependencyMap[8]).radii.sm, paddingTop: importDefault(dependencyMap[8]).space.PX_8, paddingBottom: importDefault(dependencyMap[8]).space.PX_8, paddingRight: importDefault(dependencyMap[8]).space.PX_8, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
obj1.embedMediaContainer = { borderRadius: importDefault(dependencyMap[8]).radii.xs, width: undefined };
obj1.embedMedia = {};
let closure_13 = obj4.createStyles(obj1);
const obj5 = { borderRadius: importDefault(dependencyMap[8]).radii.xs, width: undefined };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  let lineClamp;
  let maxHeight;
  let secondaryText;
  let showMessageAuthor;
  let text;
  message = message.message;
  const arg1 = message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  let obj = arg1(dependencyMap[14]);
  const previewableMedia = obj.usePreviewableMedia(message);
  let obj1 = arg1(dependencyMap[15]);
  let tmp = null;
  if (showMessageAuthor) {
    tmp = message;
  }
  const nullableMessageAuthor = obj1.useNullableMessageAuthor(tmp);
  let obj2 = arg1(dependencyMap[16]);
  const previewableMediaText = obj2.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  const tmp4 = function useGetInitialMessagePreview(message) {
    message = message.message;
    const items = [message];
    return React.useMemo(() => {
      const tmp = new closure_5(message);
      tmp.attachments = [];
      tmp.stickerItems = [];
      if (tmp.embeds.length > 0) {
        const embeds = tmp.embeds;
        tmp.embeds = embeds.filter((image) => null == image.image && null == image.thumbnail);
      }
      if (callback(closure_2[9])(message)) {
        const messageSnapshots = tmp.messageSnapshots;
        tmp.messageSnapshots = messageSnapshots.map((message) => {
          message = message.message;
          const obj = { message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) };
          return new closure_6({ message: message.merge({ attachments: [], embeds: [], stickerItems: [] }) });
        });
      }
      return tmp;
    }, items);
  }({ message });
  const items = [message.embeds];
  const memo = React.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === arg1(dependencyMap[17]).MessageEmbedTypes.GIFV) {
      if (null != text) {
        obj = { text };
        let tmp64 = callback(SystemMessageText, obj);
      }
      return tmp64;
    }
    obj = {};
    obj1 = { message: tmp4, lineClamp: closure_9, maxHeight: closure_8 };
    const items1 = [callback(NativeMessagePreviewContent, obj1), ];
    obj2 = { embed: first };
    items1[1] = callback(EmbedCard, obj2);
    obj.children = items1;
    tmp64 = callback2(View, obj);
  } else if (importDefault(dependencyMap[9])(message)) {
    let tmp41 = previewableMedia.length > 0;
    if (tmp41) {
      tmp41 = previewableMedia[0].type === arg1(dependencyMap[14]).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      if (null != nullableMessageAuthor) {
        const intl4 = arg1(dependencyMap[18]).intl;
        const obj3 = { username: nullableMessageAuthor.nick };
        let formatResult = intl4.format(arg1(dependencyMap[18]).t.sLDHDi, obj3);
      } else {
        const intl3 = arg1(dependencyMap[18]).intl;
        formatResult = intl3.string(arg1(dependencyMap[18]).t.9ddYKt);
      }
      const obj4 = { text: formatResult };
      return callback(SystemMessageText, obj4);
    }
    const obj5 = { message: tmp4, lineClamp, maxHeight };
    return callback(NativeMessagePreviewContent, obj5);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = channel.getChannel(message.channel_id);
      arg1(dependencyMap[11]);
      if (null != channel) {
        const obj6 = { channel, message, color: "text-default", layout: arg1(dependencyMap[19]).ChannelListLayoutTypes.COZY, variant: tmp34, muted: false, lineClamp };
        return callback(arg1(dependencyMap[10]).ChannelRowPreview, obj6);
      }
    }
    const obj7 = { message: tmp4, lineClamp, maxHeight };
    return callback(NativeMessagePreviewContent, obj7);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj8 = {};
        const obj9 = { text };
        const items2 = [callback(SystemMessageText, obj9), ];
        let tmp24 = null !== secondaryText;
        if (tmp24) {
          const obj10 = { lineClamp: closure_9, children: secondaryText };
          tmp24 = callback(arg1(dependencyMap[12]).Text, obj10);
        }
        items2[1] = tmp24;
        obj8.children = items2;
        return callback2(View, obj8);
      }
    }
    if (null != message.poll) {
      if (null != nullableMessageAuthor) {
        const intl2 = arg1(dependencyMap[18]).intl;
        const obj11 = { username: nullableMessageAuthor.nick };
        let formatResult1 = intl2.format(arg1(dependencyMap[18]).t.1wtRlq, obj11);
      } else {
        const intl = arg1(dependencyMap[18]).intl;
        formatResult1 = intl.string(arg1(dependencyMap[18]).t.n3shVJ);
      }
      const obj12 = {};
      const obj13 = { text: formatResult1 };
      const items3 = [callback(SystemMessageText, obj13), ];
      const obj14 = { cachedAt: false, edpbxy: false, lineClamp: closure_9, children: message.poll.question.text };
      items3[1] = callback(arg1(dependencyMap[12]).Text, obj14);
      obj12.children = items3;
      return callback2(View, obj12);
    } else {
      const obj15 = { message, lineClamp, maxHeight };
      return callback(NativeMessagePreviewContent, obj15);
    }
  }
};
export { SystemMessageText };
