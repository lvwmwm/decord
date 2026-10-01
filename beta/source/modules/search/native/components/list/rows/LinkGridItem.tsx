// Module ID: 16495
// Function ID: 16496
// Name: LinkGridItem
// Dependencies: [32, 19, 17, 2045, 6699, 7303, 21, 4836, 504, 1115, 7313, 16496, 4832, 5385, 11821, 4775, 11109, 16488, 5435, 16486, 38, 7818, 2]

// Module 16495 (LinkGridItem)
import _modDef38 from "module_38" /* 38 */;
import intl3 from "intl" /* 1115 */;
import LinkIcon from "LinkIcon" /* 4775 */;
import Text_Text from "Text/Text" /* 4832 */;
import ChatIcon from "ChatIcon" /* 5385 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7313 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import MarkupReactLinkUtils from "MarkupReactLinkUtils" /* 11109 */;
import SearchPlatformUtils from "SearchPlatformUtils" /* 11821 */;
import SearchMediaImage from "SearchMediaImage" /* 16486 */;
import SearchResultLinkPreviewMarkup from "SearchResultLinkPreviewMarkup" /* 16496 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SearchMessageStore from "SearchMessageStore" /* 6699 */;
import SearchConstants from "SearchConstants" /* 7303 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
const f105075 = (type) => {
  if (Array.isArray(type)) {
    const item = type.forEach(f105075);
  } else {
    if ("link" !== type.type) {
      if ("channelMention" !== type.type) {
        if (null != type.content) {
          const content = type.content;
          closure_0 = tmp;
          closure_1 = tmp2;
          const _Array = Array;
          if (Array.isArray(content)) {
            const item1 = content.forEach(f105075);
          } else {
            if ("link" !== content.type) {
              if ("channelMention" !== content.type) {
                if (null != content.content) {
                  closure_2_14(content.content, closure_0, closure_1);
                }
              }
            }
            if (0 === closure_0) {
              closure_1(content);
            } else {
              closure_2_14(content, closure_0 - 1, closure_1);
            }
          }
        }
      }
    }
    if (0 === closure_0) {
      closure_1(type);
    } else {
      const diff = tmp - 1;
      closure_1 = tmp2;
      const _Array2 = Array;
      if (Array.isArray(type)) {
        const item2 = type.forEach(f105075);
      } else {
        if ("link" !== type.type) {
          if ("channelMention" !== type.type) {
            if (null != type.content) {
              closure_2_14(type.content, diff, closure_1);
            }
          }
        }
        if (0 === diff) {
          closure_1(type);
        } else {
          closure_2_14(type, diff - 1, closure_1);
        }
      }
    }
  }
  return type;
};
function getLinkNodeAtIndex(content, diff, fn) {
  let closure_0 = diff;
  let closure_1 = fn;
  if (Array.isArray(content)) {
    const item = content.forEach(f105075);
  } else {
    if ("link" !== content.type) {
      if ("channelMention" !== content.type) {
        if (null != content.content) {
          getLinkNodeAtIndex(content.content, diff, fn);
        }
      }
    }
    if (0 === diff) {
      fn(content);
    } else {
      getLinkNodeAtIndex(content, diff - 1, fn);
    }
  }
  return content;
}
function LinkParsedGridItem(author) {
  let containerStyle;
  let imageStyle;
  let items10;
  let items9;
  let obj6;
  author = author.author;
  const linkIndex = author.linkIndex;
  let channelId = author.channelId;
  const messageId = author.messageId;
  const onPressSearchLink = author.onPressSearchLink;
  const onPressGuildVoiceChannelMention = author.onPressGuildVoiceChannelMention;
  const onPress = author.onPress;
  let stateFromStores;
  ({ imageStyle, containerStyle } = author);
  let tmp = closure_13();
  const tapToSee = tmp;
  let tmp2 = author;
  const tmp3 = channelId;
  let obj = author(channelId[8]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj2 = author(channelId[8]);
  const items1 = [tapToSee];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  let obj3 = onPressSearchLink;
  const tmp6 = messageId(onPressSearchLink.useState(null), 2);
  const first = tmp6[0];
  let closure_11 = tmp6[1];
  const items2 = [linkIndex];
  const postProcessor = onPressSearchLink.useCallback((type) => {
    const tmp = linkIndex;
    const tmp2 = closure_11;
    let closure_0 = linkIndex;
    let closure_1 = closure_11;
    if (Array.isArray(type)) {
      let item = type.forEach(f105075);
    } else {
      if ("link" !== type.type) {
        if ("channelMention" !== type.type) {
          if (null != type.content) {
            let content = type.content;
            closure_0 = tmp;
            closure_1 = tmp2;
            let _Array = Array;
            if (Array.isArray(content)) {
              let item1 = content.forEach(f105075);
            } else {
              if ("link" !== content.type) {
                if ("channelMention" !== content.type) {
                  if (null != content.content) {
                    getLinkNodeAtIndex(content.content, tmp, tmp2);
                  }
                }
              }
              if (0 === tmp) {
                tmp2(content);
              } else {
                getLinkNodeAtIndex(content, tmp - 1, tmp2);
              }
            }
          }
        }
      }
      if (0 === tmp) {
        tmp2(type);
      } else {
        let diff = tmp - 1;
        closure_1 = tmp2;
        let _Array2 = Array;
        if (Array.isArray(type)) {
          let item2 = type.forEach(f105075);
        } else {
          if ("link" !== type.type) {
            if ("channelMention" !== type.type) {
              if (null != type.content) {
                getLinkNodeAtIndex(type.content, diff, tmp2);
              }
            }
          }
          if (0 === diff) {
            tmp2(type);
          } else {
            getLinkNodeAtIndex(type, diff - 1, tmp2);
          }
        }
      }
    }
    return type;
  }, items2);
  const items3 = [stateFromStores, postProcessor];
  const items4 = [first, tmp.tapToSee];
  const memo = onPressSearchLink.useMemo(() => {
    let obj;
    let obj4;
    if (null == stateFromStores) {
      const intl = intl3.intl;
      return intl.string(intl3.t.mE3KJN);
    } else {
      const obj2 = { postProcessor };
      const obj3 = { pointerEvents: "none", children: unpackModuleId(Text_Text.Text, obj4) };
      obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: obj.renderMessageMarkupWithParser(SearchResultLinkPreviewMarkup.NativeSearchResultLinkPreviewParser, tmp, obj2).content };
      obj = renderMessageMarkup;
      return unpackModuleId(hasOwnProperty, obj3);
    }
  }, items3);
  let target;
  const memo1 = onPressSearchLink.useMemo(() => {
    let intl;
    if (null != first) {
      if ("link" === first.type) {
        if (null != first.target) {
          if ("" !== first.target) {
            const obj2 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.target };
            return unpackModuleId(Text_Text.Text, obj2);
          }
        }
      }
    }
    if (null != first) {
      let type;
      if (first != null) {
        type = tmp.type;
      }
      if ("channelMention" === type) {
        const obj3 = { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: first.originalLink };
        return unpackModuleId(Text_Text.Text, obj3);
      }
    }
    const obj = { variant: "text-xs/normal", color: "interactive-text-default", lineClamp: 1, style: tapToSee.tapToSee, children: intl.string(intl3.t.q2IIoP) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    return unpackModuleId(Text, obj);
  }, items4);
  const useMemo = onPressSearchLink.useMemo;
  if (first != null) {
    target = first.target;
  }
  const items5 = [target, ];
  let type;
  if (first != null) {
    type = first.type;
  }
  items5[1] = type;
  const items6 = [channelId, messageId, first, onPress, onPressGuildVoiceChannelMention, onPressSearchLink];
  const memo2 = useMemo(() => {
    let type;
    if (first != null) {
      type = tmp.type;
    }
    if ("channelMention" === type) {
      return unpackModuleId(ChatIcon.ChatIcon, { size: "lg" });
    } else if ("link" === type) {
      const obj = SearchPlatformUtils;
      return unpackModuleId(obj.getUrlIcon(first.target), { size: "lg" });
    } else {
      return unpackModuleId(LinkIcon.LinkIcon, { size: "lg" });
    }
  }, items5);
  const items7 = [author, ];
  let guild_id;
  const callback1 = obj3.useCallback(() => {
    let obj4;
    if (null == first) {
      const obj2 = { channelId, messageId };
      onPress(obj2);
    } else if ("link" === first.type) {
      const obj3 = { url: first.target, trusted: obj4.isLinkTrusted(first), messageId, channelId };
      obj4 = MarkupReactLinkUtils;
      onPressSearchLink(obj3);
    } else if ("channelMention" === first.type) {
      channelId = tmp.channelId;
      const channel = ChannelStore.getChannel(channelId);
      let isGuildVocalResult;
      if (channel != null) {
        isGuildVocalResult = channel.isGuildVocal();
      }
      if (isGuildVocalResult) {
        const obj5 = { channelId, messageId, mentionedChannelId: channelId };
        onPressGuildVoiceChannelMention(obj5);
      } else {
        const obj = { url: first.originalLink, trusted: true, messageId, channelId };
        onPressSearchLink(obj);
      }
    }
  }, items6);
  const useMemo2 = obj3.useMemo;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items7[1] = guild_id;
  const items8 = [channelId, messageId, onPress];
  const memo21 = useMemo2(() => {
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items7);
  const callback2 = obj3.useCallback(() => {
    const obj = { channelId, messageId };
    onPress(obj);
  }, items8);
  let obj4 = { containerStyle, onPress: callback1, children: items10 };
  const SearchListCardContainer = tmp2(tmp3[17]).SearchListCardContainer;
  let obj5 = { thumbnail: closure_11(onPressGuildVoiceChannelMention, obj6) };
  obj6 = { style: items9, children: memo2 };
  items9 = [tmp.iconContainer, imageStyle];
  const SearchListCardThumbnail = tmp2(tmp3[17]).SearchListCardThumbnail;
  items10 = [closure_11(SearchListCardThumbnail, obj5), closure_11(tmp2(tmp3[17]).SearchListCardContent, { label: memo, subLabel: memo1 }), ];
  const obj7 = { onPress: callback2, children: closure_11(tmp2(tmp3[17]).SearchListCardFooter, { author, avatarSource: memo21, channel: stateFromStores1 }) };
  const PressableHighlight = tmp2(tmp3[18]).PressableHighlight;
  items10[2] = closure_11(PressableHighlight, obj7);
  return postProcessor(SearchListCardContainer, obj4);
}
function LinkEmbedGridItem(embed) {
  let Text;
  let items6;
  embed = embed.embed;
  const sources = embed.sources;
  const author = embed.author;
  const channelId = embed.channelId;
  const messageId = embed.messageId;
  const onPressSearchLink = embed.onPressSearchLink;
  const onPress = embed.onPress;
  const imageStyle = embed.imageStyle;
  const containerStyle = embed.containerStyle;
  const tmp = closure_13();
  let closure_8 = tmp;
  let obj = embed(author[8]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => SearchMessageStore.getMessage(messageId));
  let obj2 = embed(author[8]);
  const items1 = [imageStyle];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const scale = onPress().scale;
  let url = embed.url;
  let url2 = embed.rawTitle;
  if (url2 == null) {
    const author2 = embed.author;
    let name;
    if (author2 != null) {
      name = author2.name;
    }
    url2 = name;
  }
  if (url2 == null) {
    url2 = embed.url;
  }
  const items2 = [author.id, channelId, embed, imageStyle, messageId, scale, sources, tmp.iconContainer];
  const items3 = [author, ];
  let guild_id;
  const memo = messageId.useMemo(() => {
    let iconContainer;
    let obj = {
      messageId,
      channelId,
      authorId: author.id,
      sources,
      embed,
      containerStyle: imageStyle,
      renderFallback() {
        let items;
        const obj = { style: items, children: url(embed(author[15]).LinkIcon, { size: "md" }) };
        items = [iconContainer.iconContainer, imageStyle];
        return url(onPressSearchLink, obj);
      },
      scale,
      containerHeight: imageStyle.height + React4,
      containerWidth: imageStyle.width + React4
    };
    return unpackModuleId(SearchMediaImage.SearchEmbedMediaImage, obj);
  }, items2);
  const useMemo = messageId.useMemo;
  if (stateFromStores1 != null) {
    guild_id = stateFromStores1.guild_id;
  }
  items3[1] = guild_id;
  const items4 = [url, onPressSearchLink, url2, channelId, messageId];
  const memo1 = useMemo(() => {
    let guild_id;
    const getAvatarSource = author.getAvatarSource;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return getAvatarSource(guild_id);
  }, items3);
  const items5 = [channelId, messageId, onPress];
  const callback = obj3.useCallback(() => {
    let obj2;
    _modDef38(null != url, "[LinkGridItem] Embed url cannot be null");
    const obj = { url, trusted: obj2.isLinkTrusted(url, url2), messageId, channelId };
    obj2 = MaskedLinkUtils;
    onPressSearchLink(obj);
  }, items4);
  const callback1 = obj3.useCallback(() => {
    const obj = { channelId, messageId };
    onPress(obj);
  }, items5);
  const obj4 = { containerStyle, onPress: callback, children: items6 };
  const SearchListCardContainer = tmp2(tmp3[17]).SearchListCardContainer;
  items6 = [url(tmp2(author[17]).SearchListCardThumbnail, { thumbnail: memo }), , ];
  const SearchListCardContent = tmp2(tmp3[17]).SearchListCardContent;
  const tmp12 = url2;
  if (null == stateFromStores) {
    const intl = tmp2(tmp3[9]).intl;
    url2 = intl.string(tmp2(tmp3[9]).t.mE3KJN);
  }
  const obj5 = { label: url2, subLabel: url(Text, { variant: "text-xs/normal", color: "text-link", lineClamp: 1, children: url }) };
  Text = tmp2(tmp3[12]).Text;
  if (url == null) {
    const intl2 = tmp2(tmp3[9]).intl;
    url = intl2.string(tmp2(tmp3[9]).t.q2IIoP);
  }
  items6[1] = url(SearchListCardContent, obj5);
  const obj6 = { onPress: callback1, children: url(embed(author[17]).SearchListCardFooter, { author, avatarSource: memo1, channel: stateFromStores1 }) };
  const PressableHighlight = tmp2(tmp3[18]).PressableHighlight;
  items6[2] = url(PressableHighlight, obj6);
  return tmp12(SearchListCardContainer, obj4);
}
({ View: hasOwnProperty, useWindowDimensions: metroRequire } = react_native);
({ FILE_OR_LINK_IMAGE_BUFFER: c9, SearchLinkTypes: c10 } = SearchConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ iconContainer: { alignItems: "center", justifyContent: "center" }, tapToSee: { fontStyle: "italic" } });
const memoResult = react.memo(function LinkGridItem(arg0) {
  let containerStyle;
  let data;
  let imageStyle;
  let onPress;
  let onPressSearchLink;
  ({ data, onPressSearchLink, onPress, imageStyle, containerStyle } = arg0);
  const type = data.type;
  if (constants.EMBED === type) {
    const obj3 = { embed: null, sources: null, messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPress, imageStyle, containerStyle };
    ({ embed: obj2.embed, sources: obj2.sources, messageId: obj2.messageId, channelId: obj2.channelId, author: obj2.author, linkIndex: obj2.linkIndex } = data);
    return unpackModuleId(LinkEmbedGridItem, obj3);
  } else if (tmp2.TEXT === type) {
    const obj = { messageId: null, channelId: null, author: null, linkIndex: null, onPressSearchLink, onPressGuildVoiceChannelMention: tmp, onPress, imageStyle, containerStyle };
    ({ messageId: obj.messageId, channelId: obj.channelId, author: obj.author, linkIndex: obj.linkIndex } = data);
    return unpackModuleId(LinkParsedGridItem, obj);
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/LinkGridItem.tsx");

export default memoResult;
