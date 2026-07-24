// Module ID: 15415
// Function ID: 117618
// Name: getLinkNodeAtIndex
// Dependencies: [57, 31, 27, 1348, 5660, 9141, 33, 4130, 566, 1212, 7870, 15416, 4126, 4629, 11426, 4074, 9524, 15408, 4660, 15406, 44, 8380, 2]

// Module 15415 (getLinkNodeAtIndex)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import SearchAutocompleteSelectAnalyticsActions from "SearchAutocompleteSelectAnalyticsActions";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
function getLinkNodeAtIndex(content, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => {
      outer1_14(arg0, closure_0, closure_1);
      return arg0;
    });
  } else {
    if ("link" !== content.type) {
      if ("channelMention" !== content.type) {
        if (null != content.content) {
          getLinkNodeAtIndex(content.content, arg1, arg2);
        }
      }
    }
    if (0 === arg1) {
      arg2(content);
    } else {
      getLinkNodeAtIndex(content, arg1 - 1, arg2);
    }
  }
  return content;
}
function LinkParsedGridItem(author) {
  let containerStyle;
  let imageStyle;
  author = author.author;
  const linkIndex = author.linkIndex;
  let channelId = author.channelId;
  const messageId = author.messageId;
  const onPressSearchLink = author.onPressSearchLink;
  const onPressGuildVoiceChannelMention = author.onPressGuildVoiceChannelMention;
  const onPress = author.onPress;
  ({ imageStyle, containerStyle } = author);
  let tmp = callback2();
  let _isNativeReflectConstruct = tmp;
  let obj = author(channelId[8]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getMessage(messageId));
  let obj1 = author(channelId[8]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => tmp.getChannel(channelId));
  const tmp4 = messageId(onPressSearchLink.useState(null), 2);
  const first = tmp4[0];
  let callback = tmp4[1];
  const items2 = [linkIndex];
  callback = onPressSearchLink.useCallback((arg0) => {
    outer1_14(arg0, linkIndex, closure_11);
    return arg0;
  }, items2);
  const items3 = [stateFromStores, callback];
  const items4 = [first, tmp.tapToSee];
  const memo = onPressSearchLink.useMemo(() => {
    if (null == stateFromStores) {
      const intl = author(channelId[9]).intl;
      return intl.string(author(channelId[9]).t.mE3KJN);
    } else {
      let obj = author(channelId[10]);
      obj = { postProcessor: callback };
      obj = { pointerEvents: "none" };
      const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: obj.renderMessageMarkupWithParser(author(channelId[11]).NativeSearchResultLinkPreviewParser, stateFromStores, obj).content };
      obj.children = callback(author(channelId[12]).Text, obj1);
      return callback(onPressGuildVoiceChannelMention, obj);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            let obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.target };
            return callback(author(channelId[12]).Text, obj);
          }
        }
      }
      const tmp = first;
    }
    if (null != first) {
      let type;
      if (null != first) {
        type = first.type;
      }
      if ("channelMention" === type) {
        obj = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.originalLink };
        return callback(author(channelId[12]).Text, obj);
      }
    }
    obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: tmp.tapToSee };
    const intl = author(channelId[9]).intl;
    obj.children = intl.string(author(channelId[9]).t.q2IIoP);
    return callback(author(channelId[12]).Text, obj);
  }, items4);
  if (null != first) {
    target = first.target;
  }
  const items5 = [target, ];
  let type;
  if (null != first) {
    type = first.type;
  }
  items5[1] = type;
  const items6 = [channelId, messageId, first, onPress, onPressGuildVoiceChannelMention, onPressSearchLink];
  const memo2 = onPressSearchLink.useMemo(() => {
    let type;
    if (null != first) {
      type = first.type;
    }
    if ("channelMention" === type) {
      let obj = { size: "lg" };
      return callback(author(channelId[13]).ChatIcon, obj);
    } else if ("link" === type) {
      obj = { size: "lg" };
      return callback(author(channelId[14]).getUrlIcon(first.target), obj);
    } else {
      obj = { size: "lg" };
      return callback(author(channelId[15]).LinkIcon, obj);
    }
  }, items5);
  const items7 = [author, ];
  let guild_id;
  const callback1 = onPressSearchLink.useCallback(() => {
    if (null == first) {
      let obj = { channelId, messageId };
      onPress(obj);
    } else if ("link" === first.type) {
      obj = { url: first.target, trusted: author(channelId[16]).isLinkTrusted(first), messageId, channelId };
      onPressSearchLink(obj);
      const obj4 = author(channelId[16]);
    } else if ("channelMention" === first.type) {
      channelId = first.channelId;
      const channel = tmp.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVocal()) {
          const obj1 = { channelId, messageId, mentionedChannelId: channelId };
          onPressGuildVoiceChannelMention(obj1);
        }
      }
      obj = { url: first.originalLink, trusted: true, messageId, channelId };
      onPressSearchLink(obj);
    }
  }, items6);
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  items7[1] = guild_id;
  const items8 = [channelId, messageId, onPress];
  const memo3 = onPressSearchLink.useMemo(() => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items7);
  callback2 = onPressSearchLink.useCallback(() => {
    onPress({ channelId, messageId });
  }, items8);
  obj = { containerStyle, onPress: callback1 };
  obj = {};
  const items9 = [tmp.iconContainer, imageStyle];
  obj.thumbnail = callback(onPressGuildVoiceChannelMention, { style: items9, children: memo2 });
  const items10 = [callback(author(channelId[17]).SearchListCardThumbnail, obj), callback(author(channelId[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  obj1 = { onPress: callback2, children: callback(author(channelId[17]).SearchListCardFooter, { author, avatarSource: memo3, channel: stateFromStores1 }) };
  items10[2] = callback(author(channelId[18]).PressableHighlight, obj1);
  obj.children = items10;
  return callback(author(channelId[17]).SearchListCardContainer, obj);
}
function LinkEmbedGridItem(containerStyle) {
  const embed = containerStyle.embed;
  const sources = containerStyle.sources;
  const author = containerStyle.author;
  const channelId = containerStyle.channelId;
  const messageId = containerStyle.messageId;
  const onPressSearchLink = containerStyle.onPressSearchLink;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let url2;
  const tmp = callback2();
  let closure_8 = tmp;
  let obj = embed(author[8]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => tmp.getMessage(messageId));
  let obj1 = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => imageStyle.getChannel(channelId));
  const scale = onPress().scale;
  let url = embed.url;
  url2 = embed.rawTitle;
  if (null == url2) {
    const author2 = embed.author;
    let name;
    if (null != author2) {
      name = author2.name;
    }
    url2 = name;
  }
  if (null == url2) {
    url2 = embed.url;
  }
  const items2 = [author.id, channelId, embed, imageStyle, messageId, scale, sources, tmp.iconContainer];
  const items3 = [author, ];
  let guild_id;
  const memo = messageId.useMemo(() => url(embed(author[19]).SearchEmbedMediaImage, {
    messageId,
    channelId,
    authorId: author.id,
    sources,
    embed,
    containerStyle: imageStyle,
    renderFallback() {
      const items = [outer1_8.iconContainer, outer1_7];
      return url(onPressSearchLink, { style: items, children: url(embed(author[15]).LinkIcon, { size: "md" }) });
    },
    scale,
    containerHeight: imageStyle.height + stateFromStores1,
    containerWidth: imageStyle.width + stateFromStores1
  }), items2);
  if (null != stateFromStores1) {
    guild_id = stateFromStores1.guild_id;
  }
  items3[1] = guild_id;
  const items4 = [url, onPressSearchLink, url2, channelId, messageId];
  const memo1 = messageId.useMemo(() => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items3);
  const items5 = [channelId, messageId, onPress];
  const callback = messageId.useCallback(() => {
    sources(author[20])(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: embed(author[21]).isLinkTrusted(url, url2), messageId, channelId };
    onPressSearchLink(obj);
  }, items4);
  const callback1 = messageId.useCallback(() => {
    onPress({ channelId, messageId });
  }, items5);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback };
  const items6 = [url(embed(author[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  obj = {};
  if (null == stateFromStores) {
    const intl = embed(author[9]).intl;
    url2 = intl.string(embed(author[9]).t.mE3KJN);
  }
  obj.label = url2;
  obj1 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1 };
  if (null == url) {
    const intl2 = embed(author[9]).intl;
    url = intl2.string(embed(author[9]).t.q2IIoP);
  }
  obj1.children = url;
  obj.subLabel = url(embed(author[12]).Text, obj1);
  items6[1] = url(embed(author[17]).SearchListCardContent, obj);
  const obj2 = { onPress: callback1, children: url(embed(author[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  items6[2] = url(embed(author[18]).PressableHighlight, obj2);
  obj.children = items6;
  return url2(embed(author[17]).SearchListCardContainer, obj);
}
({ View: closure_5, useWindowDimensions: closure_6 } = get_ActivityIndicator);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_9, SearchLinkTypes: closure_10 } = SearchAutocompleteSelectAnalyticsActions);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
const memoResult = importAllResult.memo(function LinkGridItem(arg0) {
  let containerStyle;
  let data;
  let imageStyle;
  let onPress;
  let onPressSearchLink;
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    let obj = {};
    ({ embed: obj2.embed, sources: obj2.sources, messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    obj.onPressSearchLink = onPressSearchLink;
    obj.onPress = onPress;
    obj.imageStyle = imageStyle;
    obj.containerStyle = containerStyle;
    return callback(LinkEmbedGridItem, obj);
  } else if (constants.TEXT === type) {
    obj = {};
    ({ messageId: obj.messageId, channelId: obj.channelId, author: obj.author, linkIndex: obj.linkIndex } = data);
    obj.onPressSearchLink = onPressSearchLink;
    obj.onPressGuildVoiceChannelMention = tmp;
    obj.onPress = onPress;
    obj.imageStyle = imageStyle;
    obj.containerStyle = containerStyle;
    return callback(LinkParsedGridItem, obj);
  } else {
    return null;
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default memoResult;
