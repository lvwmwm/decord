// Module ID: 15359
// Function ID: 117240
// Name: SearchMediaObscurityIcon
// Dependencies: [57, 31, 27, 5660, 33, 4130, 4066, 3976, 5674, 9832, 4639, 4533, 1449, 11136, 477, 1212, 8656, 9870, 8276, 566, 9851, 9836, 2]
// Exports: SearchAttachmentMediaImage, SearchComponentMediaImage, SearchEmbedMediaImage, SearchFileMediaImage, SearchSoundMediaImage

// Module 15359 (SearchMediaObscurityIcon)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = callback4();
  let obj = obscureReason(width[7]);
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
      return outer1_9(obscureReason(width[9]).SpoilerIcon, obj);
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
      return outer1_9(obscureReason(width[10]).ImageWarningIcon, obj);
    }
  }, items1);
  obj = {};
  obj = { blurTheme: str };
  const items2 = [closure_6.absoluteFill, memo];
  obj.style = items2;
  const items3 = [callback2(height(width[11]), obj), ];
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
({ ImageBackground: closure_5, StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
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
  containerWidth = containerWidth.containerWidth;
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
        let obj = containerHeight(1449);
        obj = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp6, targetHeight: tmp7, format: "png" };
        const srcWithWidthAndHeight = obj.getSrcWithWidthAndHeight(obj);
        let obj2 = containerHeight(11136);
        const obscuredAlt = obj2.getObscuredAlt(obscureReason);
        let tmp12 = null;
        if (null != obscureReason) {
          obj = { obscureReason, height: containerHeight, width: containerWidth };
          tmp12 = callback2(SearchMediaObscurityIcon, obj);
        }
        let obj4 = containerHeight(477);
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
        let obj5 = containerHeight(477);
        let stringResult = obscuredAlt;
        if (obj5.isAndroid()) {
          const intl = containerHeight(1212).intl;
          stringResult = intl.string(containerHeight(1212).t.jes7FG);
        }
        obj4 = { style: containerStyle };
        obj5 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items4 = [callback2(containerHeight(8656).ImageWithPlaceholder, obj5), tmp12];
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  let authorId;
  let channelId;
  attachment = attachment.attachment;
  let obj = { attachment: 0, channelId: 0, authorId: 0 };
  ({ channelId, authorId } = attachment);
  Object.setPrototypeOf(null);
  const merged = Object.assign(attachment, obj);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = attachment(9870).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId];
  const memo = importAllResult.useMemo(() => attachment(outer1_2[13]).getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId), items);
  const obj2 = attachment(9870);
  obj = {};
  const attachmentUrl = attachment(8276).getAttachmentUrl(attachment);
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
  let dependencyMap;
  let importDefault;
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap } = embed);
  let obj = { embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 };
  ({ channelId, authorId } = embed);
  Object.setPrototypeOf(null);
  const merged = Object.assign(embed, obj);
  let _slicedToArray = embed(9870).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  let obj2 = embed(9870);
  const items = [_isNativeReflectConstruct];
  const thumbnail = embed.thumbnail;
  const stateFromStores = embed(566).useStateFromStores(items, () => {
    const message = outer1_8.getMessage(closure_2);
    if (null == message) {
      return null;
    } else {
      const flattenSourceResult = embed(outer1_2[18]).flattenSource(closure_1, false);
      let spoiler;
      if (null != flattenSourceResult) {
        spoiler = flattenSourceResult.spoiler;
      }
      const obj2 = embed(outer1_2[13]);
      return obj2.getObscureReasonForEmbed(embed, message, null != spoiler && spoiler, _slicedToArray);
    }
  });
  const obj3 = embed(566);
  const size = embed(8276).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = embed(8276).getEmbedUrl(size);
    const obj5 = embed(8276);
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
  const width = height.width;
  const items = [height, width];
  const obj = {};
  const items1 = [callback4().sound, height.containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj.style = items1;
  obj.children = callback2(height(9851).CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
  return callback2(closure_7, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  let containerStyle;
  let fileName;
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = {};
  const items1 = [callback4().sound, containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj.style = items1;
  obj.children = callback2(height(9836).AttachmentIcon, { fileName });
  return callback2(closure_7, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  let authorId;
  let channelId;
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  const isBot = unfurledMediaItem.isBot;
  let obj = { unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 };
  ({ channelId, authorId } = unfurledMediaItem);
  Object.setPrototypeOf(null);
  const merged = Object.assign(unfurledMediaItem, obj);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = unfurledMediaItem(isBot[17]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
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
