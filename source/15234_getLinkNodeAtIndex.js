// Module ID: 15234
// Function ID: 115025
// Name: getLinkNodeAtIndex
// Dependencies: []

// Module 15234 (getLinkNodeAtIndex)
function getLinkNodeAtIndex(content, arg1, arg2) {
  const importDefault = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => {
      callback(arg0, arg1, arg2);
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
  const arg1 = author;
  const linkIndex = author.linkIndex;
  const importDefault = linkIndex;
  const channelId = author.channelId;
  const dependencyMap = channelId;
  const messageId = author.messageId;
  let callback = messageId;
  const onPressSearchLink = author.onPressSearchLink;
  const onPressGuildVoiceChannelMention = author.onPressGuildVoiceChannelMention;
  const onPress = author.onPress;
  ({ imageStyle, containerStyle } = author);
  const tmp = callback3();
  let closure_7 = tmp;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getMessage(messageId));
  closure_8 = stateFromStores;
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => tmp.getChannel(channelId));
  const tmp4 = callback(onPressSearchLink.useState(null), 2);
  const first = tmp4[0];
  let callback2 = tmp4[1];
  const items2 = [linkIndex];
  callback = importAllResult.useCallback((arg0) => {
    callback2(arg0, linkIndex, closure_11);
    return arg0;
  }, items2);
  const items3 = [stateFromStores, callback];
  const items4 = [first, tmp.tapToSee];
  const memo = importAllResult.useMemo(() => {
    if (null == stateFromStores) {
      const intl = author(channelId[9]).intl;
      return intl.string(author(channelId[9]).t.mE3KJN);
    } else {
      let obj = author(channelId[10]);
      obj = { postProcessor: callback };
      obj = { pointerEvents: "none" };
      const obj1 = { children: obj.renderMessageMarkupWithParser(author(channelId[11]).NativeSearchResultLinkPreviewParser, stateFromStores, obj).content };
      obj.children = callback(author(channelId[12]).Text, obj1);
      return callback(onPressGuildVoiceChannelMention, obj);
    }
  }, items3);
  let target;
  const memo1 = importAllResult.useMemo(() => {
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            let obj = { children: first.target };
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
        obj = { children: first.originalLink };
        return callback(author(channelId[12]).Text, obj);
      }
    }
    obj = { 9223372036854775807: "<string:1491554816>", 9223372036854775807: "<string:17917053>", 9223372036854775807: "<string:26063953>", style: tmp.tapToSee };
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
  const memo2 = importAllResult.useMemo(() => {
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
  const callback1 = importAllResult.useCallback(() => {
    if (null == first) {
      let obj = { channelId, messageId };
      onPress(obj);
    } else if ("link" === first.type) {
      obj = { url: first.target, trusted: author(channelId[16]).isLinkTrusted(first), messageId, channelId };
      onPressSearchLink(obj);
      const obj4 = author(channelId[16]);
    } else if ("channelMention" === first.type) {
      const channelId = first.channelId;
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
  const memo3 = importAllResult.useMemo(() => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items7);
  callback2 = importAllResult.useCallback(() => {
    onPress({ channelId, messageId });
  }, items8);
  obj = { containerStyle, onPress: callback1 };
  obj = {};
  const items9 = [tmp.iconContainer, imageStyle];
  obj.thumbnail = callback2(onPressGuildVoiceChannelMention, { style: items9, children: memo2 });
  const items10 = [callback2(arg1(dependencyMap[17]).SearchListCardThumbnail, obj), callback2(arg1(dependencyMap[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  obj1 = { onPress: callback2, children: callback2(arg1(dependencyMap[17]).SearchListCardFooter, { author, avatarSource: memo3, channel: stateFromStores1 }) };
  items10[2] = callback2(arg1(dependencyMap[18]).PressableHighlight, obj1);
  obj.children = items10;
  return callback(arg1(dependencyMap[17]).SearchListCardContainer, obj);
}
function LinkEmbedGridItem(containerStyle) {
  const embed = containerStyle.embed;
  const arg1 = embed;
  const sources = containerStyle.sources;
  const importDefault = sources;
  const author = containerStyle.author;
  const dependencyMap = author;
  const channelId = containerStyle.channelId;
  let closure_3 = channelId;
  const messageId = containerStyle.messageId;
  const onPressSearchLink = containerStyle.onPressSearchLink;
  const onPress = containerStyle.onPress;
  const imageStyle = containerStyle.imageStyle;
  let closure_7 = imageStyle;
  let url2;
  const tmp = callback3();
  let closure_8 = tmp;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => tmp.getMessage(messageId));
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_7];
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
  const memo = importAllResult.useMemo(() => url(embed(author[19]).SearchEmbedMediaImage, {
    messageId,
    channelId,
    authorId: author.id,
    sources,
    embed,
    containerStyle: imageStyle,
    renderFallback() {
      const items = [iconContainer.iconContainer, closure_7];
      return callback2(closure_5, { style: items, children: callback2(callback(closure_2[15]).LinkIcon, { size: "md" }) });
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
  const memo1 = importAllResult.useMemo(() => {
    let guild_id;
    if (null != stateFromStores1) {
      guild_id = stateFromStores1.guild_id;
    }
    return author.getAvatarSource(guild_id);
  }, items3);
  const items5 = [channelId, messageId, onPress];
  const callback = importAllResult.useCallback(() => {
    sources(author[20])(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: embed(author[21]).isLinkTrusted(url, url2), messageId, channelId };
    onPressSearchLink(obj);
  }, items4);
  const callback1 = importAllResult.useCallback(() => {
    onPress({ channelId, messageId });
  }, items5);
  obj = { containerStyle: containerStyle.containerStyle, onPress: callback };
  const items6 = [url(arg1(dependencyMap[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  obj = {};
  if (null == stateFromStores) {
    const intl = arg1(dependencyMap[9]).intl;
    url2 = intl.string(arg1(dependencyMap[9]).t.mE3KJN);
  }
  obj.label = url2;
  obj1 = {};
  if (null == url) {
    const intl2 = arg1(dependencyMap[9]).intl;
    url = intl2.string(arg1(dependencyMap[9]).t.q2IIoP);
  }
  obj1.children = url;
  obj.subLabel = url(arg1(dependencyMap[12]).Text, obj1);
  items6[1] = url(arg1(dependencyMap[17]).SearchListCardContent, obj);
  const obj2 = { onPress: callback1, children: url(arg1(dependencyMap[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  items6[2] = url(arg1(dependencyMap[18]).PressableHighlight, obj2);
  obj.children = items6;
  return url2(arg1(dependencyMap[17]).SearchListCardContainer, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, useWindowDimensions: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ FILE_OR_LINK_IMAGE_BUFFER: closure_9, SearchLinkTypes: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ iconContainer: {}, tapToSee: { fontStyle: "italic" } });
const obj2 = arg1(dependencyMap[7]);
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
    return callback2(LinkEmbedGridItem, obj);
  } else if (constants.TEXT === type) {
    obj = {};
    ({ messageId: obj.messageId, channelId: obj.channelId, author: obj.author, linkIndex: obj.linkIndex } = data);
    obj.onPressSearchLink = onPressSearchLink;
    obj.onPressGuildVoiceChannelMention = tmp;
    obj.onPress = onPress;
    obj.imageStyle = imageStyle;
    obj.containerStyle = containerStyle;
    return callback2(LinkParsedGridItem, obj);
  } else {
    return null;
  }
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default memoResult;
