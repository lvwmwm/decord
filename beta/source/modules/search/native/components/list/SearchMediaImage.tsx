// Module ID: 16486
// Function ID: 16487
// Name: SearchMediaImage
// Dependencies: [32, 19, 17, 2045, 6699, 1074, 21, 4836, 4767, 4685, 6714, 10811, 5395, 5269, 504, 7719, 1478, 11494, 1364, 1115, 8217, 9635, 1385, 6747, 7713, 8176, 9657, 2]
// Exports: SearchAttachmentMediaImage, SearchComponentMediaImage, SearchEmbedMediaImage, SearchFileMediaImage, SearchSoundMediaImage

// Module 16486 (SearchMediaImage)
import Constants from "Constants" /* 1074 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5395 */;
import ObscureMediaModels from "ObscureMediaModels" /* 6714 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7713 */;
import CirclePlayIcon from "CirclePlayIcon" /* 8176 */;
import AttachmentPreview from "AttachmentPreview" /* 9657 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 10811 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 11494 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let containerWidth, dependencyMap;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function SearchMediaObscurityIcon(obscureReason) {
  let items2;
  let items4;
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_14();
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
      return unpackModuleId(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
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
      return unpackModuleId(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const obj2 = { blurTheme: str, style: items2 };
  items2 = [absoluteFill.absoluteFill, memo];
  const children = [closure_11(tmp2(tmp3[13]), obj2), ];
  let tmp9Result = null != memo1;
  const tmp10 = absoluteFill;
  const tmp7 = closure_13;
  const tmp8 = closure_12;
  const tmp9 = closure_11;
  if (tmp9Result) {
    const obj3 = { style: items4, children: memo1 };
    items4 = [tmp10.absoluteFill, tmp.container];
    tmp9Result = tmp9(closure_7, obj3);
  }
  children[1] = tmp9Result;
  return tmp7(tmp8, { children });
}
({ ImageBackground: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_16 = react.memo((containerWidth) => {
  let containerHeight;
  let containerStyle;
  let items4;
  let items5;
  let mediaHeight;
  let mediaUrl;
  let mediaWidth;
  let obj6;
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
          tmp15 = closure_11(SearchMediaObscurityIcon, size);
        }
        const tmp2Result5 = require("PlatformUtils");
        if (tmp2Result5.isAndroid()) {
          if (null != tmp6) {
            const obj5 = { style: memo, source: obj6, blurRadius: 10, resizeMode: "cover", accessibilityLabel: obscuredAlt };
            const obj4 = { style: containerStyle, children: items4 };
            obj6 = { uri: srcWithWidthAndHeight };
            items4 = [closure_11(closure_5, obj5), tmp15];
            return closure_13(closure_7, obj4);
          }
        }
        let stringResult = obscuredAlt;
        const tmp2Result6 = require("PlatformUtils");
        if (tmp2Result6.isAndroid()) {
          const intl = tmp2(tmp3[19]).intl;
          stringResult = intl.string(tmp2(tmp3[19]).t.jes7FG);
        }
        const obj7 = { style: containerStyle, children: items5 };
        const obj8 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        items5 = [closure_11(require("ImageWithPlaceholder").ImageWithPlaceholder, obj8), tmp15];
        return closure_13(closure_7, obj7);
      }
    }
  }
  let tmp26 = null;
  if (null != renderFallback) {
    const obj9 = { children: renderFallback() };
    tmp26 = closure_11(closure_12, obj9);
  }
  return tmp26;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  let attachmentUrl;
  let c2;
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const authorId = attachment.authorId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  let obj = attachment(9635);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  let num = attachment.flags;
  const hasFlag = attachment(1385).hasFlag;
  attachment(1385);
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
  const tmp2Result2 = attachment(7713);
  attachmentUrl = tmp2Result2.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  ({ height: obj4.mediaHeight, width: obj4.mediaWidth } = attachment);
  return closure_11(closure_16, obj2);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  let channelId;
  let height;
  let width;
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const authorId = embed.authorId;
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  let tmp2 = embed;
  let obj = embed(9635);
  let closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = embed(6747);
  let closure_4 = obj2.useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [SearchMessageStore];
  const thumbnail = embed.thumbnail;
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
      const getObscureReasonForEmbed = tmp2(11494).getObscureReasonForEmbed;
      const tmp2Result = tmp2(11494);
      if (!flag2) {
        flag2 = closure_4;
      }
      return getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  const obj4 = embed(7713);
  size = obj4.getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    let tmp2Result = tmp2(7713);
    embedUrl = tmp2Result.getEmbedUrl(size);
  }
  if (null != thumbnail) {
    embedUrl = thumbnail.url;
  }
  if (null != thumbnail) {
    height = thumbnail.height;
  } else if (size != null) {
    height = size.height;
  }
  if (null != thumbnail) {
    width = thumbnail.width;
  } else if (size != null) {
    width = size.width;
  }
  const obj5 = { channelId, obscureReason: stateFromStores, mediaUrl: embedUrl, mediaHeight: height, mediaWidth: width };
  const merged1 = Object.assign(merged);
  return closure_11(closure_16, obj5);
};
export const SearchSoundMediaImage = function SearchSoundMediaImage(height) {
  let items1;
  height = height.height;
  const width = height.width;
  const containerStyle = height.containerStyle;
  const items = [height, width];
  const obj = { style: items1, children: unpackModuleId(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" }) };
  items1 = [closure_14().sound, containerStyle, ];
  closure_14();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return unpackModuleId(metroImportDefault, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  let containerStyle;
  let fileName;
  let items1;
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: items1, children: unpackModuleId(AttachmentPreview.AttachmentIcon, { fileName }) };
  items1 = [closure_14().sound, containerStyle, ];
  closure_14();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return unpackModuleId(metroImportDefault, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  let channelId;
  let isBot;
  let memo;
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const authorId = unfurledMediaItem.authorId;
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  let obj = unfurledMediaItem(isBot[21]);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = unfurledMediaItem(isBot[23]);
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
  return closure_11(closure_16, obj4);
};
