// Module ID: 15243
// Function ID: 115070
// Name: SearchMediaObscurityIcon
// Dependencies: []
// Exports: SearchAttachmentMediaImage, SearchComponentMediaImage, SearchEmbedMediaImage, SearchFileMediaImage, SearchSoundMediaImage

// Module 15243 (SearchMediaObscurityIcon)
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const arg1 = obscureReason;
  const height = obscureReason.height;
  const importDefault = height;
  const width = obscureReason.width;
  const dependencyMap = width;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  let str = "light";
  if (obj.isThemeDark(tmp2)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = importAllResult.useMemo(() => ({ height, width }), items);
  const memo1 = importAllResult.useMemo(() => {
    if (obscureReason(width[8]).ObscureReason.SPOILER === obscureReason) {
      let obj = { size: "lg" };
      return callback(obscureReason(width[9]).SpoilerIcon, obj);
    } else {
      if (obscureReason(width[8]).ObscureReason.EXPLICIT_CONTENT !== tmp) {
        if (obscureReason(width[8]).ObscureReason.GORE_CONTENT !== tmp) {
          if (obscureReason(width[8]).ObscureReason.SELF_HARM_CONTENT !== tmp) {
            if (obscureReason(width[8]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT === tmp) {
              return null;
            }
          }
        }
      }
      obj = { size: "lg" };
      return callback(obscureReason(width[10]).ImageWarningIcon, obj);
    }
  }, items1);
  obj = {};
  obj = { blurTheme: str };
  const items2 = [closure_6.absoluteFill, memo];
  obj.style = items2;
  const items3 = [callback2(importDefault(dependencyMap[11]), obj), ];
  let tmp7 = null != memo1;
  if (tmp7) {
    const obj1 = {};
    const items4 = [closure_6.absoluteFill, tmp.container];
    obj1.style = items4;
    obj1.children = memo1;
    tmp7 = callback2(closure_7, obj1);
  }
  items3[1] = tmp7;
  obj.children = items3;
  return closure_11(closure_10, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ ImageBackground: closure_5, StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[5]).createStyles({ container: { "Bool(false)": null, "Bool(false)": null }, sound: { "Bool(false)": null, "Bool(false)": null } });
let closure_13 = importAllResult.memo((containerWidth) => {
  let containerHeight;
  let containerStyle;
  let mediaHeight;
  let mediaUrl;
  let mediaWidth;
  let obscureReason;
  let placeholder;
  let placeholderVersion;
  let renderFallback;
  let tmp6;
  let tmp7;
  ({ mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  const arg1 = containerHeight;
  containerWidth = containerWidth.containerWidth;
  const importDefault = containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = importAllResult.useMemo(() => ({ height: containerHeight, width: containerWidth }), items);
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items1 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          let items2 = items1;
        } else {
          items2 = [result, ];
          const _Math = Math;
          items2[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp6, tmp7] = callback(items2, 2);
        let obj = arg1(dependencyMap[12]);
        obj = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp6, targetHeight: tmp7, format: "png" };
        const srcWithWidthAndHeight = obj.getSrcWithWidthAndHeight(obj);
        let obj2 = arg1(dependencyMap[13]);
        const obscuredAlt = obj2.getObscuredAlt(obscureReason);
        let tmp12 = null;
        if (null != obscureReason) {
          obj = { obscureReason, height: containerHeight, width: containerWidth };
          tmp12 = callback2(SearchMediaObscurityIcon, obj);
        }
        let obj4 = arg1(dependencyMap[14]);
        if (obj4.isAndroid()) {
          if (null != obscureReason) {
            const obj1 = { style: containerStyle };
            obj2 = { style: memo };
            const obj3 = { uri: srcWithWidthAndHeight };
            obj2.source = obj3;
            obj2.blurRadius = 10;
            obj2.resizeMode = "cover";
            obj2.accessibilityLabel = obscuredAlt;
            const items3 = [callback2(closure_5, obj2), tmp12];
            obj1.children = items3;
            return callback3(closure_7, obj1);
          }
        }
        let obj5 = arg1(dependencyMap[14]);
        let stringResult = obscuredAlt;
        if (obj5.isAndroid()) {
          const intl = arg1(dependencyMap[15]).intl;
          stringResult = intl.string(arg1(dependencyMap[15]).t.jes7FG);
        }
        obj4 = { style: containerStyle };
        obj5 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items4 = [callback2(arg1(dependencyMap[16]).ImageWithPlaceholder, obj5), tmp12];
        obj4.children = items4;
        return callback3(closure_7, obj4);
      }
    }
  }
  let tmp31 = null;
  if (null != renderFallback) {
    const obj6 = { children: renderFallback() };
    tmp31 = callback2(closure_10, obj6);
  }
  return tmp31;
});
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  let authorId;
  let channelId;
  attachment = attachment.attachment;
  const arg1 = attachment;
  let obj = { 520035839: "spring", 1157570559: 0.4, 315917: 1 };
  ({ channelId, authorId } = attachment);
  Object.setPrototypeOf(null);
  const merged = Object.assign(attachment, obj);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = arg1(dependencyMap[17]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const importDefault = enabledHarmTypesBitmaskForChannelAndAuthorId;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId];
  const memo = importAllResult.useMemo(() => attachment(closure_2[13]).getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId), items);
  const obj2 = arg1(dependencyMap[17]);
  obj = {};
  const attachmentUrl = arg1(dependencyMap[18]).getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj["obscureReason"] = memo;
  obj["mediaUrl"] = attachmentUrl;
  obj["mediaHeight"] = attachment.height;
  obj["mediaWidth"] = attachment.width;
  return callback2(closure_13, obj);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  let authorId;
  let channelId;
  embed = embed.embed;
  const arg1 = embed;
  ({ sources: closure_1, messageId: closure_2 } = embed);
  let obj = {};
  ({ channelId, authorId } = embed);
  Object.setPrototypeOf(null);
  const merged = Object.assign(embed, obj);
  let closure_3 = arg1(dependencyMap[17]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = arg1(dependencyMap[17]);
  const items = [closure_8];
  const thumbnail = embed.thumbnail;
  const stateFromStores = arg1(dependencyMap[19]).useStateFromStores(items, () => {
    const message = message.getMessage(closure_2);
    if (null == message) {
      return null;
    } else {
      const flattenSourceResult = embed(closure_2[18]).flattenSource(closure_1, false);
      let spoiler;
      if (null != flattenSourceResult) {
        spoiler = flattenSourceResult.spoiler;
      }
      const obj2 = embed(closure_2[13]);
      return obj2.getObscureReasonForEmbed(embed, message, null != spoiler && spoiler, closure_3);
    }
  });
  const obj3 = arg1(dependencyMap[19]);
  const size = arg1(dependencyMap[18]).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = arg1(dependencyMap[18]).getEmbedUrl(size);
    const obj5 = arg1(dependencyMap[18]);
  }
  if (null != thumbnail) {
    embedUrl = thumbnail.url;
  }
  if (null != thumbnail) {
    let height = thumbnail.height;
  } else if (null != size) {
    height = size.height;
  }
  if (null != thumbnail) {
    let width = thumbnail.width;
  } else if (null != size) {
    width = size.width;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj["obscureReason"] = stateFromStores;
  obj["mediaUrl"] = embedUrl;
  obj["mediaHeight"] = height;
  obj["mediaWidth"] = width;
  return callback2(closure_13, obj);
};
export const SearchSoundMediaImage = function SearchSoundMediaImage(height) {
  height = height.height;
  const arg1 = height;
  const width = height.width;
  const importDefault = width;
  const items = [height, width];
  const obj = {};
  const items1 = [callback4().sound, height.containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj.style = items1;
  obj.children = callback2(arg1(dependencyMap[20]).CirclePlayIcon, {});
  return callback2(closure_7, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  let containerStyle;
  let fileName;
  height = height.height;
  const arg1 = height;
  const width = height.width;
  const importDefault = width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = {};
  const items1 = [callback4().sound, containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj.style = items1;
  obj.children = callback2(arg1(dependencyMap[21]).AttachmentIcon, { fileName });
  return callback2(closure_7, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  let authorId;
  let channelId;
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const arg1 = unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  const importDefault = sources;
  const isBot = unfurledMediaItem.isBot;
  const dependencyMap = isBot;
  let obj = { getChannelIconURL: false, unitType: false, nativeFramesIntegration: false, handleUserUpdate: false, EdgeRuntime: false };
  ({ channelId, authorId } = unfurledMediaItem);
  Object.setPrototypeOf(null);
  const merged = Object.assign(unfurledMediaItem, obj);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = arg1(dependencyMap[17]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  let closure_3 = enabledHarmTypesBitmaskForChannelAndAuthorId;
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot];
  obj = {};
  const memo = importAllResult.useMemo(() => {
    const obj = unfurledMediaItem(isBot[13]);
    const tmp = unfurledMediaItem;
    const tmp2 = enabledHarmTypesBitmaskForChannelAndAuthorId;
    const flattenSourceResult = unfurledMediaItem(isBot[18]).flattenSource(sources);
    return obj.getObscureReasonForUnfurledMediaItem(tmp, tmp2, !(null == flattenSourceResult || !flattenSourceResult.spoiler), isBot);
  }, items);
  const merged1 = Object.assign(merged);
  obj["obscureReason"] = memo;
  obj["mediaUrl"] = unfurledMediaItem.proxyUrl;
  obj["mediaHeight"] = unfurledMediaItem.height;
  obj["mediaWidth"] = unfurledMediaItem.width;
  return callback2(closure_13, obj);
};
