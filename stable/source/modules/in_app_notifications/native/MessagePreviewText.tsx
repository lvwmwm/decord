// Module ID: 13527
// Function ID: 13528
// Name: MessagePreviewText
// Dependencies: [19, 17, 2068, 13519, 1098, 21, 5191, 1385, 587, 558, 576, 13528, 13529, 13518, 5187, 5128, 1105, 13530, 5883, 13533, 13534, 1109, 7278, 1128, 9615, 2]

// Module 13527 (MessagePreviewText)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1098 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1105 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1109 */;
import FastImageDefault from "FastImage" /* 5128 */;
import Text_Text from "Text/Text" /* 5187 */;
import useMessageAuthor from "useMessageAuthor" /* 5883 */;
import isForwardMessageDefault from "isForwardMessage" /* 7278 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9615 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 13518 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 13528 */;
import usePreviewableMedia from "usePreviewableMedia" /* 13530 */;
import usePreviewableMediaText from "usePreviewableMediaText" /* 13533 */;
import useGetInitialMessagePreview from "useGetInitialMessagePreview" /* 13534 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 13519 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj4;
let obj5;
let obj6;
let size;
let tmp;
const ChannelRowPreview2 = tmp(13529);
const View = react_native.View;
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: metroImportDefault } = InAppNotificationConstants);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let obj = { italic: obj2 };
obj2 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
let closure_10 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { embedContainer: obj4, embedAccentBar: obj5, embedTextContainer: obj6, embedMediaContainer: size, embedMedia: { width: "100%", height: "100%" } };
obj4 = { borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
const createStyles2 = createStyles.createStyles;
obj5 = { width: 4, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_8, alignSelf: "stretch" };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "ix" };
let closure_11 = createStyles2(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function NativeMessagePreviewContent(arg0) {
  let gradientColors;
  let gradientStyles;
  let message;
  const obj = react2;
  const cResult = obj.c(6);
  ({ message, lineClamp, maxHeight } = arg0);
  ({ gradientColors, gradientStyles } = useTruncatedGradientColorsDefault());
  useTruncatedGradientColorsDefault();
  if (cResult[0] === gradientColors) {
    if (cResult[1] === gradientStyles) {
      if (cResult[2] === lineClamp) {
        if (cResult[3] === maxHeight) {
          let tmp5;
          if (cResult[4] === message) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  const obj2 = { children: metroImportAll(ChannelRowPreview2.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) };
  const tmp6 = metroImportAll(View, obj2);
  cResult[0] = gradientColors;
  cResult[1] = gradientStyles;
  cResult[2] = lineClamp;
  cResult[3] = maxHeight;
  cResult[4] = message;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : (function NativeMessagePreviewContent(arg0) {
  let gradientColors;
  let gradientStyles;
  let message;
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  const obj = { children: metroImportAll(ChannelRowPreview2.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) };
  ({ gradientColors, gradientStyles } = tmp);
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SystemMessageText(text) {
  let first;
  const obj = react2;
  const cResult = obj.c(4);
  text = text.text;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = InAppNotificationUtils;
    const messagePreviewTextVariant = tmpResult.getMessagePreviewTextVariant();
    cResult[0] = messagePreviewTextVariant;
    first = messagePreviewTextVariant;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.italic) {
    let tmp7;
    if (cResult[2] === text) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj2 = { variant: first, color: "text-subtle", style: tmp4.italic, lineClamp: metroImportDefault, children: text };
  const tmp8 = metroImportAll(Text_Text.Text, obj2);
  cResult[1] = tmp4.italic;
  cResult[2] = text;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (function SystemMessageText(text) {
  text = text.text;
  const tmp = closure_10();
  const obj = InAppNotificationUtils;
  const messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
  const obj2 = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: metroImportDefault, children: text };
  return metroImportAll(Text_Text.Text, obj2);
});
let closure_13 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmbedMediaThumbnail(media) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  media = media.media;
  const tmp3 = closure_11();
  let url = media.proxyURL;
  if (url == null) {
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
  if (cResult[0] !== num) {
    const obj2 = { aspectRatio: num };
    cResult[0] = num;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.embedMediaContainer) {
    let tmp6;
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (cResult[5] !== url) {
      const obj3 = { uri: url };
      cResult[5] = url;
      cResult[6] = obj3;
      tmp7 = obj3;
    } else {
      tmp7 = cResult[6];
    }
    if (cResult[7] === tmp3.embedMedia) {
      let tmp8;
      if (cResult[8] === tmp7) {
        tmp8 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        let tmp12;
        if (cResult[11] === tmp8) {
          tmp12 = cResult[12];
        }
        return tmp12;
      }
      const obj4 = { style: tmp6, children: tmp8 };
      const tmp15 = metroImportAll(View, obj4);
      cResult[10] = tmp6;
      cResult[11] = tmp8;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { source: tmp7, style: tmp3.embedMedia, resizeMode: "contain" };
    const tmp11 = metroImportAll(FastImageDefault, obj5);
    cResult[7] = tmp3.embedMedia;
    cResult[8] = tmp7;
    cResult[9] = tmp11;
    tmp8 = tmp11;
  }
  const items = [tmp3.embedMediaContainer, tmp5];
  cResult[2] = tmp3.embedMediaContainer;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp6 = items;
}) : (function EmbedMediaThumbnail(media) {
  let items;
  let obj2;
  media = media.media;
  const tmp = closure_11();
  let url = media.proxyURL;
  if (url == null) {
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
  const obj = { style: items, children: metroImportAll(FastImageDefault, obj2) };
  items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj2 = { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmbedCard(embed) {
  let items;
  let items1;
  let items2;
  let rawTitle;
  let thumbnail;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(27);
  embed = embed.embed;
  const tmp4 = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  if (cResult[0] !== embed.color) {
    let int2hslResult;
    if (null != embed.color) {
      if (16777215 !== embed.color) {
        const tmpResult = utils_ColorUtils;
        int2hslResult = tmpResult.int2hsl(embed.color);
      }
    }
    cResult[0] = embed.color;
    cResult[1] = int2hslResult;
    tmp7 = int2hslResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    let tmp10;
    let tmp14;
    let tmp17;
    if (cResult[3] === tmp4.embedAccentBar) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== name) {
      let tmp15 = null != name;
      if (tmp15) {
        const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
        tmp15 = metroImportAll(tmp(5187).Text, obj2);
      }
      cResult[5] = name;
      cResult[6] = tmp15;
      tmp14 = tmp15;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] !== name1) {
      let tmp18 = null != name1;
      if (tmp18) {
        const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
        tmp18 = metroImportAll(tmp(5187).Text, obj3);
      }
      cResult[7] = name1;
      cResult[8] = tmp18;
      tmp17 = tmp18;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] === (null == name && null == name1)) {
      let tmp20;
      let tmp23;
      if (cResult[10] === rawTitle) {
        tmp20 = cResult[11];
      }
      if (cResult[12] !== embed.rawDescription) {
        let tmp24 = null != embed.rawDescription;
        if (tmp24) {
          const obj4 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
          tmp24 = metroImportAll(tmp(5187).Text, obj4);
        }
        cResult[12] = embed.rawDescription;
        cResult[13] = tmp24;
        tmp23 = tmp24;
      } else {
        tmp23 = cResult[13];
      }
      if (cResult[14] === tmp4.embedTextContainer) {
        if (cResult[15] === tmp14) {
          if (cResult[16] === tmp17) {
            if (cResult[17] === tmp20) {
              let tmp26;
              let tmp30;
              if (cResult[18] === tmp23) {
                tmp26 = cResult[19];
              }
              if (cResult[20] !== thumbnail) {
                let tmp31 = null != thumbnail;
                if (tmp31) {
                  const obj5 = { media: thumbnail };
                  tmp31 = metroImportAll(closure_14, obj5);
                }
                cResult[20] = thumbnail;
                cResult[21] = tmp31;
                tmp30 = tmp31;
              } else {
                tmp30 = cResult[21];
              }
              if (cResult[22] === tmp4.embedContainer) {
                if (cResult[23] === tmp10) {
                  if (cResult[24] === tmp26) {
                    let tmp34;
                    if (cResult[25] === tmp30) {
                      tmp34 = cResult[26];
                    }
                    return tmp34;
                  }
                }
              }
              const obj6 = { style: tmp4.embedContainer, children: items };
              items = [tmp10, tmp26, tmp30];
              const tmp37 = React4(View, obj6);
              cResult[22] = tmp4.embedContainer;
              cResult[23] = tmp10;
              cResult[24] = tmp26;
              cResult[25] = tmp30;
              cResult[26] = tmp37;
              tmp34 = tmp37;
            }
          }
        }
      }
      const obj7 = { style: tmp4.embedTextContainer, children: items1 };
      items1 = [tmp14, tmp17, tmp20, tmp23];
      const tmp29 = React4(View, obj7);
      cResult[14] = tmp4.embedTextContainer;
      cResult[15] = tmp14;
      cResult[16] = tmp17;
      cResult[17] = tmp20;
      cResult[18] = tmp23;
      cResult[19] = tmp29;
      tmp26 = tmp29;
    }
    let tmp22Result = null != rawTitle;
    if (tmp22Result) {
      let num8 = 1;
      const Text = tmp(5187).Text;
      const tmp22 = metroImportAll;
      if (null == name && null == name1) {
        num8 = 3;
      }
      const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num8, children: rawTitle };
      tmp22Result = tmp22(Text, obj8);
    }
    cResult[9] = null == name && null == name1;
    cResult[10] = rawTitle;
    cResult[11] = tmp22Result;
    tmp20 = tmp22Result;
  }
  let tmp11 = null != tmp7;
  if (tmp11) {
    const obj9 = { style: items2 };
    items2 = [tmp4.embedAccentBar, ];
    const obj10 = { backgroundColor: tmp7 };
    items2[1] = obj10;
    tmp11 = metroImportAll(View, obj9);
  }
  cResult[2] = tmp7;
  cResult[3] = tmp4.embedAccentBar;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function EmbedCard(embed) {
  let items;
  let items1;
  let items2;
  let rawTitle;
  let thumbnail;
  embed = embed.embed;
  const tmp = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  let int2hslResult;
  if (null != embed.color) {
    if (16777215 !== embed.color) {
      const obj = utils_ColorUtils;
      int2hslResult = obj.int2hsl(embed.color);
    }
  }
  let tmp9 = null != int2hslResult;
  const obj2 = { style: tmp.embedContainer, children: items1 };
  if (tmp9) {
    const obj3 = { style: items };
    items = [tmp.embedAccentBar, ];
    const obj4 = { backgroundColor: int2hslResult };
    items[1] = obj4;
    tmp9 = metroImportAll(tmp8, obj3);
  }
  items1 = [tmp9, , ];
  let tmp11 = null != name;
  const obj5 = { style: tmp.embedTextContainer, children: items2 };
  if (tmp11) {
    const obj6 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp11 = metroImportAll(Text_Text.Text, obj6);
  }
  items2 = [tmp11, , , ];
  let tmp15 = null != name1;
  if (tmp15) {
    const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp15 = metroImportAll(Text_Text.Text, obj7);
  }
  items2[1] = tmp15;
  let tmp20Result = null != rawTitle;
  if (tmp20Result) {
    let num3 = 1;
    const Text = Text_Text.Text;
    const tmp20 = metroImportAll;
    if (null == name) {
      num3 = 1;
      if (null == name1) {
        num3 = 3;
      }
    }
    const obj8 = { variant: "text-xs/medium", color: "text-link", lineClamp: num3, children: rawTitle };
    tmp20Result = tmp20(Text, obj8);
  }
  items2[2] = tmp20Result;
  let tmp23 = null != embed.rawDescription;
  if (tmp23) {
    const obj9 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp23 = metroImportAll(Text_Text.Text, obj9);
  }
  items2[3] = tmp23;
  items1[1] = React4(View, obj5);
  let tmp27 = null != thumbnail;
  if (tmp27) {
    const obj10 = { media: thumbnail };
    tmp27 = metroImportAll(closure_14, obj10);
  }
  items1[2] = tmp27;
  return React4(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessagePreviewText(arg0) {
  let items;
  let message;
  let secondaryText;
  let showMessageAuthor;
  let text;
  let tmp35;
  const obj = react2;
  const cResult = obj.c(56);
  ({ message, lineClamp, maxHeight, showMessageAuthor } = arg0);
  const tmp4 = undefined !== showMessageAuthor && showMessageAuthor;
  const tmpResult = usePreviewableMedia;
  const previewableMedia = tmpResult.usePreviewableMedia(message);
  let tmp6 = null;
  const useNullableMessageAuthor = tmp(5883).useNullableMessageAuthor;
  useMessageAuthor;
  if (tmp4) {
    tmp6 = message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(tmp6);
  if (cResult[0] === nullableMessageAuthor) {
    let tmp8;
    let tmp10;
    let arr2;
    if (cResult[1] === previewableMedia) {
      tmp8 = cResult[2];
    }
    const tmpResult5 = usePreviewableMediaText;
    const previewableMediaText = tmpResult5.usePreviewableMediaText(tmp8);
    ({ text, secondaryText } = previewableMediaText);
    if (cResult[3] !== message) {
      const obj2 = { message };
      cResult[3] = message;
      cResult[4] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[4];
    }
    const tmpResult6 = useGetInitialMessagePreview;
    const getInitialMessagePreview = tmpResult6.useGetInitialMessagePreview(tmp10);
    if (cResult[5] !== message.embeds) {
      let tmp13;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        cResult[7] = H;
        tmp13 = H;
      } else {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      const embeds = message.embeds;
      const found = embeds.filter(tmp13);
      cResult[5] = message.embeds;
      cResult[6] = found;
      arr2 = found;
    } else {
      class H {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
    }
    if (arr2.length > 0) {
      class H {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
      if (tmp26.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        return tmp35;
      }
      if (cResult[10] !== getInitialMessagePreview) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        const obj3 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
        cResult[10] = getInitialMessagePreview;
        cResult[11] = metroImportAll(closure_12, obj3);
        const tmp31 = metroImportAll(closure_12, obj3);
      } else {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      if (cResult[12] !== tmp26) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        const obj4 = { embed: tmp26 };
        cResult[12] = tmp26;
        cResult[13] = metroImportAll(closure_15, obj4);
        const tmp34 = metroImportAll(closure_15, obj4);
      } else {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      if (cResult[14] === tmp27) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
      const obj5 = { children: items };
      items = [tmp27, tmp32];
      const tmp38 = React4(View, obj5);
      cResult[14] = tmp27;
      cResult[15] = tmp32;
      cResult[16] = tmp38;
      tmp35 = tmp38;
    } else {
      class H {
        constructor(arg0) {
          tmp = null != arg0.image || null != arg0.thumbnail;
          return tmp;
        }
      }
      if (isForwardMessageDefault(message)) {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
        let tmp15 = previewableMedia.length > 0;
        if (tmp15) {
          class H {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
          tmp15 = tmp16 === tmp(13530).PreviewableMediaTypes.GIF;
        }
        if (previewableMedia.length > 0) {
          let tmp23;
          class H {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
          if (cResult[17] !== nullableMessageAuthor) {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            cResult[17] = nullableMessageAuthor;
            cResult[18] = tmp22;
          } else {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
          }
          if (cResult[19] !== tmp21) {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
            const obj6 = { text: tmp21 };
            const tmp25 = metroImportAll(closure_13, obj6);
            cResult[19] = tmp21;
            cResult[20] = tmp25;
            tmp23 = tmp25;
          } else {
            class H {
              constructor(arg0) {
                tmp = null != arg0.image || null != arg0.thumbnail;
                return tmp;
              }
            }
          }
          return tmp23;
        }
        if (cResult[21] === getInitialMessagePreview) {
          class H {
            constructor(arg0) {
              tmp = null != arg0.image || null != arg0.thumbnail;
              return tmp;
            }
          }
        }
        const obj7 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
        cResult[21] = getInitialMessagePreview;
        cResult[22] = metroImportDefault;
        cResult[23] = metroRequire;
        cResult[24] = metroImportAll(closure_12, obj7);
        const tmp20 = metroImportAll(closure_12, obj7);
      } else {
        class H {
          constructor(arg0) {
            tmp = null != arg0.image || null != arg0.thumbnail;
            return tmp;
          }
        }
      }
    }
  }
  const obj8 = { previewableMedia, author: nullableMessageAuthor };
  cResult[0] = nullableMessageAuthor;
  cResult[1] = previewableMedia;
  cResult[2] = obj8;
  tmp8 = obj8;
}) : (function MessagePreviewText(message) {
  let items1;
  let items3;
  let secondaryText;
  let showMessageAuthor;
  let text;
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  const obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let tmp4 = null;
  const useNullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor;
  useMessageAuthor;
  if (showMessageAuthor) {
    tmp4 = message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(tmp4);
  const tmpResult = usePreviewableMediaText;
  const previewableMediaText = tmpResult.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  const tmpResult3 = useGetInitialMessagePreview;
  const getInitialMessagePreview = tmpResult3.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = react.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
      let tmp44;
      if (null != text) {
        const obj2 = { text };
        tmp44 = metroImportAll(closure_13, obj2);
      }
      return tmp44;
    }
    const obj3 = { children: items1 };
    const obj4 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    items1 = [metroImportAll(closure_12, obj4), ];
    const obj5 = { embed: first };
    items1[1] = metroImportAll(closure_15, obj5);
    tmp44 = React4(View, obj3);
  } else if (isForwardMessageDefault(message)) {
    let tmp30 = previewableMedia.length > 0;
    if (tmp30) {
      tmp30 = previewableMedia[0].type === tmp(13530).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      let formatResult;
      if (null != nullableMessageAuthor) {
        const intl4 = tmp(1128).intl;
        const obj6 = { username: nullableMessageAuthor.nick };
        formatResult = intl4.format(tmp(1128).t.sLDHDi, obj6);
      } else {
        const intl3 = tmp(1128).intl;
        formatResult = intl3.string(tmp(1128).t["9ddYKt"]);
      }
      const obj7 = { text: formatResult };
      return metroImportAll(closure_13, obj7);
    }
    const obj8 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(closure_12, obj8);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = ChannelStore.getChannel(message.channel_id);
      InAppNotificationUtils;
      if (null != channel) {
        const obj9 = { channel, message, color: "text-default", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, variant: tmp25, muted: false, lineClamp: metroImportDefault };
        const ChannelRowPreview = tmp(13529).ChannelRowPreview;
        return metroImportAll(ChannelRowPreview, obj9);
      }
    }
    const obj10 = { message: getInitialMessagePreview, lineClamp: metroImportDefault, maxHeight: metroRequire };
    return metroImportAll(closure_12, obj10);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj11 = { text };
        const items2 = [metroImportAll(closure_13, obj11), ];
        let tmp18Result = null !== secondaryText;
        const tmp16 = React4;
        const tmp17 = View;
        const tmp18 = metroImportAll;
        if (tmp18Result) {
          const obj12 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: metroImportDefault, children: secondaryText };
          tmp18Result = tmp18(tmp(5187).Text, obj12);
        }
        const obj13 = { children: items2 };
        items2[1] = tmp18Result;
        return tmp16(tmp17, obj13);
      }
    }
    if (null != message.poll) {
      let formatResult1;
      const text2 = message.poll.question.text;
      if (null != nullableMessageAuthor) {
        const intl2 = tmp(1128).intl;
        const obj14 = { username: nullableMessageAuthor.nick };
        formatResult1 = intl2.format(tmp(1128).t["1wtRlq"], obj14);
      } else {
        const intl = tmp(1128).intl;
        formatResult1 = intl.string(tmp(1128).t.n3shVJ);
      }
      const obj15 = { children: items3 };
      const obj16 = { text: formatResult1 };
      items3 = [metroImportAll(closure_13, obj16), ];
      const obj17 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp: metroImportDefault, children: text2 };
      items3[1] = metroImportAll(Text_Text.Text, obj17);
      return React4(View, obj15);
    } else {
      const obj18 = { message, lineClamp: metroImportDefault, maxHeight: metroRequire };
      return metroImportAll(closure_12, obj18);
    }
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default tmp7;
export const SystemMessageText = tmp6;
