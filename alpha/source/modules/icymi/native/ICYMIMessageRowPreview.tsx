// Module ID: 16864
// Function ID: 16865
// Name: ICYMIMessageRowPreview
// Dependencies: [109, 19, 1085, 21, 558, 576, 8462, 9286, 7730, 6995, 4992, 5091, 587, 8247, 1126, 2041, 7728, 9346, 2]

// Module 16864 (ICYMIMessageRowPreview)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import useThemeDefault from "useTheme" /* 4992 */;
import createStyles from "createStyles" /* 5091 */;
import isForwardMessageDefault from "isForwardMessage" /* 6995 */;
import RowGeneratorDefault from "RowGenerator" /* 7728 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8247 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 9286 */;
import ChatItemDefault from "ChatItem" /* 9346 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, type;

let closure_3 = ["message", "messageOptions"];
let closure_4 = ["message", "messageOptions"];
let closure_5 = ["message", "messageOptions"];
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const jsx = Fragment.jsx;
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaOnlyRowPreview(arg0) {
  let message;
  let messageOptions;
  let obj2;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(18);
  if (cResult[0] !== arg0) {
    ({ message, messageOptions } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = message;
    cResult[2] = messageOptions;
    cResult[3] = tmp8;
    tmp5 = tmp8;
    obj2 = message;
  } else {
    obj2 = cResult[1];
    tmp5 = cResult[3];
  }
  if (cResult[4] !== obj2) {
    let tmp12;
    let tmp13;
    const result = obj2.set("content", null);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          type = arg0.type;
          tmp = type === closure_1_8.IMAGE || type === closure_1_8.GIFV;
          return tmp;
        }
      }
      cResult[7] = C;
      tmp12 = C;
    } else {
      class C {
        constructor(arg0) {
          type = arg0.type;
          tmp = type === closure_1_8.IMAGE || type === closure_1_8.GIFV;
          return tmp;
        }
      }
    }
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter(tmp12));
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[6]);
          return obj.isMediaAttachment(arg0);
        }
      }
      cResult[8] = M;
      tmp13 = M;
    } else {
      class M {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[6]);
          return obj.isMediaAttachment(arg0);
        }
      }
    }
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter(tmp13));
    const result3 = result2.set("editedTimestamp", null);
    cResult[4] = obj2;
    cResult[5] = result2;
    cResult[6] = result3;
    tmp9 = result3;
  } else {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return obj.isMediaAttachment(arg0);
      }
    }
    tmp9 = cResult[6];
  }
  const muted = tmp5.muted;
  if (muted == null) {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return obj.isMediaAttachment(arg0);
      }
    }
  }
  if (cResult[9] === tmp9) {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return obj.isMediaAttachment(arg0);
      }
    }
  }
  cResult[9] = tmp9;
  cResult[10] = tmp5.lineClamp;
  cResult[11] = muted;
  cResult[12] = { message: tmp9, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted, lineClamp: tmp5.lineClamp };
  ({ message: tmp9, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted, lineClamp: tmp5.lineClamp });
}) : (function MediaOnlyRowPreview(message) {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = react.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const result1 = result.set("embeds", embeds.filter((type) => {
      type = type.type;
      return type === constants.IMAGE || type === constants.GIFV;
    }));
    const attachments = result1.attachments;
    const result2 = result1.set("attachments", attachments.filter((item) => {
      const obj = message(memo[6]);
      return obj.isMediaAttachment(item);
    }));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  const merged1 = Object.assign(react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, lineClamp: tmp.lineClamp };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items1));
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, renderEmbeds: true, gifAutoPlay: true, animateEmoji: true, renderPolls: true, inlineEmbedMedia: true, renderForumPostActions: false, renderAttachments: true };
  const merged2 = Object.assign(message(memo[8]).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <closure_10 messageOptions={obj2} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo3 = react.memo;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (function NonMediaEmbedsRowPreview(arg0) {
  let message;
  let messageOptions;
  let obj2;
  let tmp5;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(18);
  if (cResult[0] !== arg0) {
    ({ message, messageOptions } = arg0);
    const tmp8 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = message;
    cResult[2] = messageOptions;
    cResult[3] = tmp8;
    tmp5 = tmp8;
    obj2 = message;
  } else {
    obj2 = cResult[1];
    tmp5 = cResult[3];
  }
  if (cResult[4] !== obj2) {
    let tmp12;
    let tmp13;
    const result = obj2.set("content", null);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          type = arg0.type;
          tmp = type === closure_1_8.IMAGE || type === closure_1_8.GIFV;
          return !tmp;
        }
      }
      cResult[7] = C;
      tmp12 = C;
    } else {
      class C {
        constructor(arg0) {
          type = arg0.type;
          tmp = type === closure_1_8.IMAGE || type === closure_1_8.GIFV;
          return !tmp;
        }
      }
    }
    const embeds = result.embeds;
    const found = embeds.filter(tmp12);
    const result1 = result.set("embeds", found.slice(0, 1));
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[6]);
          return !obj.isMediaAttachment(arg0);
        }
      }
      cResult[8] = M;
      tmp13 = M;
    } else {
      class M {
        constructor(arg0) {
          obj = closure_1_0(closure_1_2[6]);
          return !obj.isMediaAttachment(arg0);
        }
      }
    }
    const attachments = result1.attachments;
    const found1 = attachments.filter(tmp13);
    const result2 = result1.set("attachments", found1.slice(0, 1));
    const result3 = result2.set("editedTimestamp", null);
    cResult[4] = obj2;
    cResult[5] = result2;
    cResult[6] = result3;
    tmp9 = result3;
  } else {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return !obj.isMediaAttachment(arg0);
      }
    }
    tmp9 = cResult[6];
  }
  const muted = tmp5.muted;
  if (muted == null) {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return !obj.isMediaAttachment(arg0);
      }
    }
  }
  if (cResult[9] === tmp9) {
    class M {
      constructor(arg0) {
        obj = closure_1_0(closure_1_2[6]);
        return !obj.isMediaAttachment(arg0);
      }
    }
  }
  cResult[9] = tmp9;
  cResult[10] = tmp5.lineClamp;
  cResult[11] = muted;
  cResult[12] = { message: tmp9, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted, lineClamp: tmp5.lineClamp };
  ({ message: tmp9, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted, lineClamp: tmp5.lineClamp });
}) : (function NonMediaEmbedsRowPreview(message) {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message];
  const memo = react.useMemo(() => {
    const result = message.set("content", null);
    const embeds = result.embeds;
    const found = embeds.filter((type) => {
      type = type.type;
      return !(type === constants.IMAGE || type === constants.GIFV);
    });
    const result1 = result.set("embeds", found.slice(0, 1));
    const attachments = result1.attachments;
    const found1 = attachments.filter((item) => {
      const obj = message(memo[6]);
      return !obj.isMediaAttachment(item);
    });
    const result2 = result1.set("attachments", found1.slice(0, 1));
    return result2.set("editedTimestamp", null);
  }, items);
  const items1 = [memo, , ];
  ({ muted: arr2[1], lineClamp: arr2[2] } = merged);
  const merged1 = Object.assign(react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message: memo, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, lineClamp: tmp.lineClamp };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items1));
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, renderEmbeds: true, renderAttachments: true };
  const merged2 = Object.assign(message(memo[8]).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <closure_10 messageOptions={obj2} />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRowPreview(arg0) {
  let message;
  let messageOptions;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(17);
  if (cResult[0] !== arg0) {
    ({ message, messageOptions } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_5);
    cResult[0] = arg0;
    cResult[1] = message;
    cResult[2] = messageOptions;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = messageOptions;
    tmp4 = message;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let flag = tmp6.muted;
  if (flag == null) {
    flag = false;
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp6.lineClamp) {
      if (cResult[6] === tmp6.pointerEvents) {
        let tmp10;
        let tmp11;
        if (cResult[7] === flag) {
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp4) {
          const tmp13 = isForwardMessageDefault(tmp4);
          cResult[9] = tmp4;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[10];
        }
        if (cResult[11] === tmp11) {
          let tmp14;
          if (cResult[12] === tmp5) {
            tmp14 = cResult[13];
          }
          if (cResult[14] === tmp10) {
            let tmp20;
            if (cResult[15] === tmp14) {
              tmp20 = cResult[16];
            }
            return tmp20;
          }
          const merged = Object.assign(tmp10);
          const tmp26 = <closure_10 messageOptions={tmp14} seeMoreLabel="..." />;
          cResult[14] = tmp10;
          cResult[15] = tmp14;
          cResult[16] = tmp26;
          tmp20 = tmp26;
        }
        const obj3 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, gifAutoPlay: true, animateEmoji: true, renderPolls: true, renderForumPostActions: false, renderAttachments: tmp11, renderEmbeds: tmp11, inlineEmbedMedia: tmp11 };
        const merged1 = Object.assign(tmp(7730).DEFAULT_OPTIONS);
        const merged2 = Object.assign(tmp5);
        cResult[11] = tmp11;
        cResult[12] = tmp5;
        cResult[13] = obj3;
        tmp14 = obj3;
      }
    }
  }
  const obj4 = { message: tmp4, lineClamp: tmp6.lineClamp, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, pointerEvents: tmp6.pointerEvents };
  cResult[4] = tmp4;
  cResult[5] = tmp6.lineClamp;
  cResult[6] = tmp6.pointerEvents;
  cResult[7] = flag;
  cResult[8] = obj4;
  tmp10 = obj4;
}) : (function MessageRowPreview(message) {
  message = message.message;
  const messageOptions = message.messageOptions;
  const merged = Object.assign(message, Object.assign({ message: 0, messageOptions: 0 }));
  const items = [message, , , ];
  ({ lineClamp: arr[1], muted: arr[2], pointerEvents: arr[3] } = merged);
  const memo = react.useMemo(() => {
    let flag;
    let tmp;
    const obj = { message, lineClamp: merged.lineClamp, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: flag, pointerEvents: tmp.pointerEvents };
    flag = merged.muted;
    tmp = merged;
    if (flag == null) {
      flag = false;
    }
    return obj;
  }, items);
  const tmp3 = merged(6995)(message);
  const merged1 = Object.assign(memo);
  const obj2 = { ignoreMentioned: true, renderReplies: false, renderThreadEmbeds: false, renderReactions: false, gifAutoPlay: true, animateEmoji: true, renderPolls: true, renderForumPostActions: false, renderAttachments: tmp3, renderEmbeds: tmp3, inlineEmbedMedia: tmp3 };
  const merged2 = Object.assign(message(7730).DEFAULT_OPTIONS);
  const merged3 = Object.assign(messageOptions);
  return <closure_10 messageOptions={obj2} seeMoreLabel="..." />;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIMessageRowPreview(arg0) {
  let lineClamp;
  let maxHeight;
  let message;
  let messageOptions;
  let messageSizeCacheRef;
  let pointerEvents;
  let seeMoreLabelColor;
  let tmp6;
  const tmp = lineClamp;
  let obj = lineClamp(576);
  const cResult = obj.c(17);
  ({ message, lineClamp } = arg0);
  ({ messageSizeCacheRef, messageOptions, maxHeight, pointerEvents } = arg0);
  let str = "none";
  if (undefined !== pointerEvents) {
    str = pointerEvents;
  }
  const tmp5 = useThemeDefault();
  if (cResult[0] !== tmp5) {
    const obj2 = { seeMoreLabelColor: nativeDefault.colors.TEXT_DEFAULT };
    const createNativeStyleProperties = tmp(5091).createNativeStyleProperties;
    tmp(5091);
    const tmp8 = createNativeStyleProperties(obj2)(tmp5);
    cResult[0] = tmp5;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  importDefault = tmp6;
  if (cResult[2] === lineClamp) {
    let tmp9;
    let tmp11;
    let tmp13;
    let tmp15;
    let tmp17;
    if (cResult[3] === tmp6) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const RenderEmbeds = tmp(2041).RenderEmbeds;
      const setting = RenderEmbeds.getSetting();
      cResult[5] = setting;
      tmp11 = setting;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineEmbedMedia = tmp(2041).InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      cResult[6] = setting1;
      tmp13 = setting1;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineAttachmentMedia = tmp(2041).InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      cResult[7] = setting2;
      tmp15 = setting2;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== messageOptions) {
      const self = this;
      const self2 = this;
      const tmp18 = new RowGeneratorDefault();
      const setOptions = tmp18.setOptions;
      const obj3 = { renderEmbeds: tmp11, inlineEmbedMedia: tmp13, inlineAttachmentMedia: tmp15, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
      const merged = Object.assign(messageOptions);
      setOptions(obj3);
      cResult[8] = messageOptions;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === maxHeight) {
      if (cResult[11] === message) {
        if (cResult[12] === messageSizeCacheRef) {
          if (cResult[13] === tmp9) {
            if (cResult[14] === str) {
              let tmp24;
              if (cResult[15] === tmp17) {
                tmp24 = cResult[16];
              }
              return tmp24;
            }
          }
        }
      }
    }
    const tmp26 = jsx(ChatItemDefault, { pointerEvents: str, horizontalOffset: 0, modifyRow: tmp9, message, rowGenerator: tmp17, messageSizeCacheRef, maxHeight });
    cResult[10] = maxHeight;
    cResult[11] = message;
    cResult[12] = messageSizeCacheRef;
    cResult[13] = tmp9;
    cResult[14] = str;
    cResult[15] = tmp17;
    cResult[16] = tmp26;
    tmp24 = tmp26;
  }
  function modifyRow(arg0) {
    let intl;
    arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    if (null != lineClamp) {
      const obj = { numberOfLines: tmp3, expandable: false, seeMoreLabel: intl.string(intl2.t.qCozu3), seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
      intl = tmp(1126).intl;
      arg0.truncation = obj;
    }
  }
  cResult[2] = lineClamp;
  cResult[3] = tmp6;
  cResult[4] = modifyRow;
  tmp9 = modifyRow;
}) : (function ICYMIMessageRowPreview(pointerEvents) {
  let maxHeight;
  let message;
  let messageOptions;
  let messageSizeCacheRef;
  let require;
  let seeMoreLabelColor;
  ({ lineClamp: require, messageOptions } = pointerEvents);
  let str = pointerEvents.pointerEvents;
  ({ message, messageSizeCacheRef, maxHeight } = pointerEvents);
  if (str === undefined) {
    str = "none";
  }
  let tmp = messageOptions(4992)();
  let obj = createStyles;
  const obj2 = { seeMoreLabelColor: messageOptions(587).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj2)(tmp);
  const RenderEmbeds = UserSettings.RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, messageOptions];
  const memo = react.useMemo(() => {
    const tmp = new RowGeneratorDefault();
    const setOptions = tmp.setOptions;
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay: false, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    const merged = Object.assign(messageOptions);
    setOptions(obj);
    return tmp;
  }, items);
  return jsx(messageOptions(9346), {
    pointerEvents: str,
    horizontalOffset: 0,
    modifyRow(arg0) {
      let intl;
      arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      if (null != _require) {
        const obj = { numberOfLines: tmp3, expandable: false, seeMoreLabel: intl.string(intl2.t.qCozu3), seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
        intl = tmp(1126).intl;
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight
  });
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIMessageRowPreview.tsx");

export const MediaOnlyRowPreview = memoResult;
export const NonMediaEmbedsRowPreview = memo2Result;
export const MessageRowPreview = memo3Result;
