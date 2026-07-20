// Module ID: 10235
// Function ID: 79144
// Name: NativeMessagePreviewContent
// Dependencies: []
// Exports: default

// Module 10235 (NativeMessagePreviewContent)
function NativeMessagePreviewContent(arg0) {
  let lineClamp;
  let maxHeight;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  return callback(View, { children: callback(arg1(dependencyMap[9]).NativeChannelRowPreview, { message, lineClamp, maxHeight }) });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = jsx();
    obj = arg1(dependencyMap[6]);
    str = "text-md/medium";
    if (obj.isIOS()) {
      str = "text-md/normal";
    }
    obj = {};
    obj.variant = str;
    obj.color = "text-subtle";
    obj.style = tmp.italic;
    obj.lineClamp = closure_8;
    obj.children = global.text;
    return jsx(arg1(dependencyMap[10]).Text, obj);
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
  let obj = { style: items, children: callback(importDefault(dependencyMap[11]), obj) };
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
    tmp12 = callback(arg1(dependencyMap[10]).Text, obj2);
  }
  const items2 = [tmp12, , , ];
  let tmp16 = null != name1;
  if (tmp16) {
    const obj3 = { children: name1 };
    tmp16 = callback(arg1(dependencyMap[10]).Text, obj3);
  }
  items2[1] = tmp16;
  let tmp21Result = null != rawTitle;
  if (tmp21Result) {
    const obj4 = { INTEGRATION_CREATE: "abf5b4249ea38c96687799aa130b2321", ConstraintReasonCode: "img_no_results_darker" };
    let num5 = 1;
    if (null == name) {
      num5 = 1;
      if (null == name1) {
        num5 = 3;
      }
    }
    obj4.lineClamp = num5;
    obj4.children = rawTitle;
    tmp21Result = callback(arg1(dependencyMap[10]).Text, obj4);
    const tmp21 = callback;
  }
  items2[2] = tmp21Result;
  let tmp24 = null != embed.rawDescription;
  if (tmp24) {
    const obj5 = { 9223372036854775807: true, 9223372036854775807: true, 9223372036854775807: true, children: embed.rawDescription };
    tmp24 = callback(arg1(dependencyMap[10]).Text, obj5);
  }
  items2[3] = tmp24;
  obj1.children = items2;
  items1[1] = closure_10(View, obj1);
  let tmp28 = null != thumbnail;
  if (tmp28) {
    const obj6 = { media: thumbnail };
    tmp28 = callback(EmbedMediaThumbnail, obj6);
  }
  items1[2] = tmp28;
  obj.children = items1;
  return closure_10(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const MessageSnapshotRecord = arg1(dependencyMap[2]).MessageSnapshotRecord;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_7, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { fontStyle: "italic" };
let obj3 = arg1(dependencyMap[6]);
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (obj3.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
obj.fontFamily = str;
obj.italic = obj;
let closure_11 = obj.createStyles(obj);
let obj4 = arg1(dependencyMap[5]);
const obj1 = {};
const tmp3 = arg1(dependencyMap[4]);
obj1.embedContainer = { borderRadius: importDefault(dependencyMap[7]).radii.sm, paddingTop: importDefault(dependencyMap[7]).space.PX_8, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, paddingRight: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
obj3 = { width: 4, marginTop: -importDefault(dependencyMap[7]).space.PX_8, marginBottom: -importDefault(dependencyMap[7]).space.PX_8, alignSelf: "stretch" };
obj1.embedAccentBar = obj3;
obj4 = { flex: 1, gap: importDefault(dependencyMap[7]).space.PX_4, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
obj1.embedTextContainer = obj4;
const obj2 = { borderRadius: importDefault(dependencyMap[7]).radii.sm, paddingTop: importDefault(dependencyMap[7]).space.PX_8, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, paddingRight: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
obj1.embedMediaContainer = { borderRadius: importDefault(dependencyMap[7]).radii.xs, width: undefined };
obj1.embedMedia = { aze: 30271555, azj: 22092032 };
let closure_12 = obj4.createStyles(obj1);
const obj5 = { borderRadius: importDefault(dependencyMap[7]).radii.xs, width: undefined };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  let lineClamp;
  let maxHeight;
  let secondaryText;
  let text;
  message = message.message;
  const arg1 = message;
  ({ lineClamp, maxHeight } = message);
  let obj = arg1(dependencyMap[12]);
  const previewableMedia = obj.usePreviewableMedia(message);
  let obj1 = arg1(dependencyMap[13]);
  const previewableMediaText = obj1.usePreviewableMediaText({ previewableMedia });
  ({ text, secondaryText } = previewableMediaText);
  const tmp2 = function useGetInitialMessagePreview(message) {
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
      if (callback(closure_2[8])(message)) {
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
    if (first.type === arg1(dependencyMap[14]).MessageEmbedTypes.GIFV) {
      if (null != text) {
        obj = { text };
        let tmp49 = callback(SystemMessageText, obj);
      }
      return tmp49;
    }
    obj = {};
    obj1 = { message: tmp2, lineClamp: closure_8, maxHeight: closure_7 };
    const items1 = [callback(NativeMessagePreviewContent, obj1), ];
    const obj2 = { embed: first };
    items1[1] = callback(EmbedCard, obj2);
    obj.children = items1;
    tmp49 = callback2(View, obj);
  } else if (importDefault(dependencyMap[8])(message)) {
    let tmp27 = previewableMedia.length > 0;
    if (tmp27) {
      tmp27 = previewableMedia[0].type === arg1(dependencyMap[12]).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length <= 0) {
      const obj3 = { message: tmp2, lineClamp, maxHeight };
      let tmp32 = callback(NativeMessagePreviewContent, obj3);
    } else {
      const obj4 = {};
      const intl2 = arg1(dependencyMap[15]).intl;
      obj4.text = intl2.string(arg1(dependencyMap[15]).t.9ddYKt);
      tmp32 = callback(SystemMessageText, obj4);
    }
    return tmp32;
  } else if (message.content.length > 0) {
    const obj5 = { message: tmp2, lineClamp, maxHeight };
    return callback(NativeMessagePreviewContent, obj5);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj6 = {};
        const obj7 = { text };
        const items2 = [callback(SystemMessageText, obj7), ];
        let tmp19 = null !== secondaryText;
        if (tmp19) {
          const obj8 = { INTEGRATION_CREATE: 626, ConstraintReasonCode: 19456, lineClamp: closure_8, children: secondaryText };
          tmp19 = callback(arg1(dependencyMap[10]).Text, obj8);
        }
        items2[1] = tmp19;
        obj6.children = items2;
        return callback2(View, obj6);
      }
    }
    if (null != message.poll) {
      const obj9 = {};
      const obj10 = {};
      const intl = arg1(dependencyMap[15]).intl;
      obj10.text = intl.string(arg1(dependencyMap[15]).t.n3shVJ);
      const items3 = [callback(SystemMessageText, obj10), ];
      const obj11 = { lineClamp: closure_8, children: message.poll.question.text };
      items3[1] = callback(arg1(dependencyMap[10]).Text, obj11);
      obj9.children = items3;
      return callback2(View, obj9);
    } else {
      const obj12 = { message, lineClamp, maxHeight };
      return callback(NativeMessagePreviewContent, obj12);
    }
  }
};
export { SystemMessageText };
