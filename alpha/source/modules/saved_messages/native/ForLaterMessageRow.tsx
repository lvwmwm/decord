// Module ID: 11318
// Function ID: 11319
// Name: ForLaterMessageRow
// Dependencies: [19, 17, 21, 5142, 575, 5371, 4967, 8452, 10013, 1377, 2]
// Exports: ForLaterMessageRow

// Module 11318 (ForLaterMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import RowGeneratorDefault from "RowGenerator" /* 8452 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { preview: { marginHorizontal: -16, marginTop: -9, overflow: "hidden" }, withoutFooter: obj2, contentWithoutFooter: obj3, footer: { paddingHorizontal: 16, paddingTop: 8 } };
obj2 = { marginTop: -nativeDefault.space.PX_4, marginBottom: -nativeDefault.space.PX_16, borderBottomLeftRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, borderBottomRightRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_10 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export function ForLaterMessageRow(arg0) {
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
  let withoutFooter = null;
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    const obj2 = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
    obj.setOptions(obj2);
    return obj;
  }, items);
  const tmp9 = closure_6;
  if (null == footer) {
    withoutFooter = tmp.withoutFooter;
  }
  let obj3 = { style: items1, children: items2 };
  items1[1] = withoutFooter;
  let contentWithoutFooter = null;
  const tmp2Result = tmp2(tmp3[8]);
  if (null == footer) {
    contentWithoutFooter = tmp.contentWithoutFooter;
  }
  items2 = [, ];
  const obj4 = {
    style: contentWithoutFooter,
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
  items2[0] = closure_5(tmp2Result, obj4);
  let tmp12Result = null;
  if (null != footer) {
    const obj5 = { style: tmp.footer, children: footer };
    tmp12Result = tmp12(tmp10, obj5);
  }
  items2[1] = tmp12Result;
  return tmp9(setting2, obj3);
}
