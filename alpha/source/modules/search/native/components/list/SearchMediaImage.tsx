// Module ID: 18685
// Function ID: 18686
// Name: SearchMediaImage
// Dependencies: [32, 19, 17, 4858, 6857, 1072, 21, 5009, 5248, 5016, 7462, 14473, 8645, 5595, 504, 8837, 1491, 13725, 1376, 5712, 1114, 9428, 11062, 1397, 6747, 8831, 9362, 11092, 2]
// Exports: SearchAttachmentMediaImage, SearchComponentMediaImage, SearchEmbedMediaImage, SearchFileMediaImage, SearchSoundMediaImage

// Module 18685 (SearchMediaImage)
import Constants from "Constants" /* 1072 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7462 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8645 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8831 */;
import CirclePlayIcon from "CirclePlayIcon" /* 9362 */;
import AttachmentPreview from "AttachmentPreview" /* 11092 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 13725 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 14473 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function SearchMediaObscurityIcon(obscureReason) {
  let items2;
  let items4;
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_13();
  let str = "light";
  const tmp4 = height(width[8])();
  const obj = obscureReason(width[9]);
  const tmp2 = height;
  const tmp3 = width;
  if (obj.isThemeDark(tmp4)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  const memo1 = react.useMemo(() => {
    if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
      return authStore(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
    } else {
      if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
        if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
          if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
            if (ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT === obscureReason) {
              return null;
            }
          }
        }
      }
      return authStore(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const obj2 = { blurTheme: str, style: items2 };
  items2 = [closure_5.absoluteFill, memo];
  const children = [closure_10(tmp2(tmp3[13]), obj2), ];
  let tmp9Result = null != memo1;
  const tmp10 = closure_5;
  const tmp7 = closure_12;
  const tmp8 = closure_11;
  const tmp9 = closure_10;
  if (tmp9Result) {
    const obj3 = { style: items4, children: memo1 };
    items4 = [tmp10.absoluteFill, tmp.container];
    tmp9Result = tmp9(closure_6, obj3);
  }
  children[1] = tmp9Result;
  return tmp7(tmp8, { children });
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_15 = react.memo(function SearchMediaImage(containerWidth) {
  let containerHeight;
  let containerStyle;
  let items4;
  let items5;
  let items6;
  let mediaHeight;
  let mediaUrl;
  let mediaWidth;
  let obj6;
  let obj7;
  let obscureReason;
  let placeholder;
  let placeholderVersion;
  let renderFallback;
  let tmp11;
  let tmp12;
  let tmp6;
  ({ channelId: require, mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = react.useMemo(() => {
    size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  const items1 = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(require));
  const obj2 = require("computeGlobalSpoilerDisplay");
  const shouldDisplaySpoilerObscurity = obj2.useShouldDisplaySpoilerObscurity(stateFromStores);
  if (obscureReason !== require("ObscureMediaModels").ObscureReason.SPOILER) {
    tmp6 = obscureReason;
  } else {
    tmp6 = null;
  }
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        let items3;
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items2 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          items3 = items2;
        } else {
          items3 = [result, ];
          const _Math = Math;
          items3[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp11, tmp12] = items3;
        _slicedToArray(items3, 2);
        const obj3 = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp11, targetHeight: tmp12, format: "png" };
        const tmp2Result = require("utils/ImageUtils");
        const srcWithWidthAndHeight = tmp2Result.getSrcWithWidthAndHeight(obj3);
        const tmp2Result4 = require("MessageAttachmentUtils");
        const obscuredAlt = tmp2Result4.getObscuredAlt(tmp6);
        let tmp15 = null;
        if (null != tmp6) {
          size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
          tmp15 = closure_10(SearchMediaObscurityIcon, size);
        }
        const tmp2Result5 = require("PlatformUtils");
        if (tmp2Result5.isAndroid()) {
          if (null != tmp6) {
            const obj4 = { style: containerStyle, children: items5 };
            const obj5 = { style: memo, children: closure_10(containerHeight(containerWidth[19]), obj6) };
            obj6 = { style: items4, source: obj7, blurRadius: 10, resizeMode: "cover", accessibilityLabel: obscuredAlt };
            items4 = [closure_5.absoluteFill, memo];
            obj7 = { uri: srcWithWidthAndHeight };
            items5 = [closure_10(closure_6, obj5), tmp15];
            return closure_12(closure_6, obj4);
          }
        }
        let stringResult = obscuredAlt;
        const tmp2Result6 = require("PlatformUtils");
        if (tmp2Result6.isAndroid()) {
          const intl = tmp2(tmp3[20]).intl;
          stringResult = intl.string(tmp2(tmp3[20]).t.jes7FG);
        }
        const obj8 = { style: containerStyle, children: items6 };
        const obj9 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        items6 = [closure_10(require("ImageWithPlaceholder").ImageWithPlaceholder, obj9), tmp15];
        return closure_12(closure_6, obj8);
      }
    }
  }
  let tmp27 = null;
  if (null != renderFallback) {
    const obj10 = { children: renderFallback() };
    tmp27 = closure_10(closure_11, obj10);
  }
  return tmp27;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export function SearchAttachmentMediaImage(attachment) {
  let attachmentUrl;
  let c2;
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const authorId = attachment.authorId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  let obj = attachment(11062);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  let num = attachment.flags;
  const hasFlag = attachment(1397).hasFlag;
  attachment(1397);
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    const tmp2Result = attachment(6747);
    hasFlagResult = tmp2Result.isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = react.useMemo(() => {
    const obj = MessageAttachmentUtils;
    return obj.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2);
  }, items);
  const obj2 = { channelId, obscureReason: memo, mediaUrl: attachmentUrl };
  const tmp2Result2 = attachment(8831);
  attachmentUrl = tmp2Result2.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  ({ height: obj4.mediaHeight, width: obj4.mediaWidth } = attachment);
  return closure_10(closure_15, obj2);
}
export function SearchEmbedMediaImage(embed) {
  let channelId;
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const authorId = embed.authorId;
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  let tmp2 = embed;
  let obj = embed(11062);
  let closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = embed(6747);
  let closure_4 = obj2.useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [SearchMessageStore];
  let video = embed.thumbnail;
  const obj3 = embed(504);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const message = SearchMessageStore.getMessage(dependencyMap);
    if (null == message) {
      return null;
    } else {
      const obj = MediaSourceUtil;
      const flattenSourceResult = obj.flattenSource(importDefault, false);
      let flag2;
      const tmp2 = require;
      if (flattenSourceResult != null) {
        flag2 = flattenSourceResult.spoiler;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const getObscureReasonForEmbed = tmp2(13725).getObscureReasonForEmbed;
      const tmp2Result = tmp2(13725);
      if (!flag2) {
        flag2 = closure_4;
      }
      return getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  if (video == null) {
    video = embed.image;
  }
  if (video == null) {
    video = embed.video;
  }
  let embedUrl = null;
  if (null != video) {
    let tmp2Result = tmp2(8831);
    const obj4 = { proxyURL: null, url: null };
    ({ proxyURL: obj5.proxyURL, url: obj5.url } = video);
    embedUrl = tmp2Result.getEmbedUrl(obj4);
  }
  let height;
  if (video != null) {
    height = video.height;
  }
  let width;
  if (video != null) {
    width = video.width;
  }
  const obj6 = { channelId, obscureReason: stateFromStores, mediaUrl: embedUrl, mediaHeight: height, mediaWidth: width };
  const merged1 = Object.assign(merged);
  return closure_10(closure_15, obj6);
}
export function SearchSoundMediaImage(height) {
  let items1;
  height = height.height;
  const width = height.width;
  const containerStyle = height.containerStyle;
  const items = [height, width];
  const obj = { style: items1, children: authStore(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" }) };
  items1 = [closure_13().sound, containerStyle, ];
  closure_13();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return authStore(metroRequire, obj);
}
export function SearchFileMediaImage(height) {
  let containerStyle;
  let fileName;
  let items1;
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: items1, children: authStore(AttachmentPreview.AttachmentIcon, { fileName }) };
  items1 = [closure_13().sound, containerStyle, ];
  closure_13();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return authStore(metroRequire, obj);
}
export function SearchComponentMediaImage(unfurledMediaItem) {
  let channelId;
  let isBot;
  let memo;
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const authorId = unfurledMediaItem.authorId;
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  let obj = unfurledMediaItem(isBot[22]);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = unfurledMediaItem(isBot[24]);
  const isChannelSpoilerGated = obj2.useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  const obj4 = { channelId, obscureReason: memo };
  memo = isChannelSpoilerGated.useMemo(() => {
    const getObscureReasonForUnfurledMediaItem = MessageAttachmentUtils.getObscureReasonForUnfurledMediaItem;
    MessageAttachmentUtils;
    const obj = MediaSourceUtil;
    const flattenSourceResult = obj.flattenSource(sources);
    let spoiler;
    const tmp2 = unfurledMediaItem;
    const tmp3 = enabledHarmTypesBitmaskForChannelAndAuthorId;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    const tmp6 = spoiler || isChannelSpoilerGated;
    return getObscureReasonForUnfurledMediaItem(tmp2, tmp3, tmp6, isBot);
  }, items);
  const merged1 = Object.assign(merged);
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_10(closure_15, obj4);
}
