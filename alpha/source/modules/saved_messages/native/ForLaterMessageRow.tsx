// Module ID: 12623
// Function ID: 12624
// Name: ForLaterMessageRow
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 4992, 1382, 2041, 7728, 9346, 2]

// Module 12623 (ForLaterMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useThemeDefault from "useTheme" /* 4992 */;
import RowGeneratorDefault from "RowGenerator" /* 7728 */;
import ChatItemDefault from "ChatItem" /* 9346 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, flushToCardBottom: obj2, footer: { paddingHorizontal: 16, paddingTop: 8 } };
obj2 = { marginBottom: -16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
let closure_7 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForLaterMessageRow(arg0) {
  let footer;
  let items;
  let lineClamp;
  let maxHeight;
  let message;
  let seeMoreLabelColor;
  let tmp7;
  const tmp = lineClamp;
  let obj = lineClamp(576);
  const cResult = obj.c(23);
  ({ message, lineClamp } = arg0);
  ({ maxHeight, footer } = arg0);
  const tmp4 = closure_7();
  const tmp6 = useThemeDefault();
  if (cResult[0] !== tmp6) {
    let obj2 = { seeMoreLabelColor: tmp5(587).colors.TEXT_DEFAULT };
    const createNativeStyleProperties = tmp(5091).createNativeStyleProperties;
    tmp(5091);
    const tmp9 = createNativeStyleProperties(obj2)(tmp6);
    cResult[0] = tmp6;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  if (cResult[2] === lineClamp) {
    let tmp10;
    let tmp12;
    let tmp14;
    let tmp16;
    let tmp18;
    if (cResult[3] === tmp7) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const RenderEmbeds = tmp(2041).RenderEmbeds;
      const setting = RenderEmbeds.getSetting();
      cResult[5] = setting;
      tmp12 = setting;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineEmbedMedia = tmp(2041).InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      cResult[6] = setting1;
      tmp14 = setting1;
    } else {
      tmp14 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const InlineAttachmentMedia = tmp(2041).InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      cResult[7] = setting2;
      tmp16 = setting2;
    } else {
      tmp16 = cResult[7];
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const self = this;
      const self2 = this;
      let obj3 = new tmp5(7728)();
      const obj4 = { renderEmbeds: tmp12, inlineEmbedMedia: tmp14, inlineAttachmentMedia: tmp16, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
      obj3.setOptions(obj4);
      cResult[8] = obj3;
      tmp18 = obj3;
    } else {
      tmp18 = cResult[8];
    }
    let flushToCardBottom = null;
    if (null == footer) {
      flushToCardBottom = tmp4.flushToCardBottom;
    }
    if (cResult[9] === tmp4.preview) {
      let tmp23;
      if (cResult[10] === flushToCardBottom) {
        tmp23 = cResult[11];
      }
      if (cResult[12] === maxHeight) {
        if (cResult[13] === message) {
          let tmp24;
          if (cResult[14] === tmp10) {
            tmp24 = cResult[15];
          }
          if (cResult[16] === footer) {
            let tmp27;
            if (cResult[17] === tmp4.footer) {
              tmp27 = cResult[18];
            }
            if (cResult[19] === tmp23) {
              if (cResult[20] === tmp24) {
                let tmp31;
                if (cResult[21] === tmp27) {
                  tmp31 = cResult[22];
                }
                return tmp31;
              }
            }
            const obj5 = { style: tmp23, children: items };
            items = [tmp24, tmp27];
            const tmp34 = closure_6(View, obj5);
            cResult[19] = tmp23;
            cResult[20] = tmp24;
            cResult[21] = tmp27;
            cResult[22] = tmp34;
            tmp31 = tmp34;
          }
          let tmp28 = null;
          if (null != footer) {
            const obj6 = { style: tmp4.footer, children: footer };
            tmp28 = closure_5(View, obj6);
          }
          cResult[16] = footer;
          cResult[17] = tmp4.footer;
          cResult[18] = tmp28;
          tmp27 = tmp28;
        }
      }
      const obj7 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: tmp10, message, rowGenerator: tmp18, maxHeight };
      const tmp26 = closure_5(ChatItemDefault, obj7);
      cResult[12] = maxHeight;
      cResult[13] = message;
      cResult[14] = tmp10;
      cResult[15] = tmp26;
      tmp24 = tmp26;
    }
    const items1 = [tmp4.preview, flushToCardBottom];
    cResult[9] = tmp4.preview;
    cResult[10] = flushToCardBottom;
    cResult[11] = items1;
    tmp23 = items1;
  }
  function modifyRow(arg0) {
    let obj2;
    let str;
    if (null != lineClamp) {
      const obj = { numberOfLines: tmp, expandable: obj2.isIOS(), seeMoreLabel: str, seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
      str = "";
      obj2 = PlatformUtils;
      const obj3 = PlatformUtils;
      if (obj3.isIOS()) {
        str = "...";
      }
      arg0.truncation = obj;
    }
  }
  cResult[2] = lineClamp;
  cResult[3] = tmp7;
  cResult[4] = modifyRow;
  tmp10 = modifyRow;
}) : (function ForLaterMessageRow(arg0) {
  let footer;
  let items2;
  let maxHeight;
  let message;
  let seeMoreLabelColor;
  ({ lineClamp: require, footer } = arg0);
  importDefault = undefined;
  let setting;
  ({ message, maxHeight } = arg0);
  const tmp = closure_7();
  const tmp4 = require("useTheme")();
  let obj = require("createStyles");
  let obj2 = { seeMoreLabelColor: require("native").colors.TEXT_DEFAULT };
  const tmp2 = importDefault;
  importDefault = obj.createNativeStyleProperties(obj2)(tmp4);
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  const tmp3 = setting;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = require("UserSettings").InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const items1 = [tmp.preview, ];
  let flushToCardBottom = null;
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    const obj2 = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
    obj.setOptions(obj2);
    return obj;
  }, items);
  const tmp9 = closure_6;
  if (null == footer) {
    flushToCardBottom = tmp.flushToCardBottom;
  }
  let obj3 = { style: items1, children: items2 };
  items1[1] = flushToCardBottom;
  items2 = [, ];
  const obj4 = {
    pointerEvents: "none",
    horizontalOffset: 0,
    modifyRow(arg0) {
      let obj2;
      let str;
      if (null != require) {
        const obj = { numberOfLines: tmp, expandable: obj2.isIOS(), seeMoreLabel: str, seeMoreLabelColor: seeMoreLabelColor.seeMoreLabelColor };
        str = "";
        obj2 = PlatformUtils;
        const obj3 = PlatformUtils;
        if (obj3.isIOS()) {
          str = "...";
        }
        arg0.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    maxHeight
  };
  items2[0] = closure_5(tmp2(tmp3[11]), obj4);
  let tmp12Result = null;
  const tmp12 = closure_5;
  if (null != footer) {
    const obj5 = { style: tmp.footer, children: footer };
    tmp12Result = tmp12(tmp10, obj5);
  }
  items2[1] = tmp12Result;
  return tmp9(setting2, obj3);
});
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = tmp3;
