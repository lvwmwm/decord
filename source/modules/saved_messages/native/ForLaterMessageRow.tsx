// Module ID: 9930
// Function ID: 76801
// Name: ForLaterMessageRow
// Dependencies: [31, 33, 4066, 4130, 689, 3803, 7621, 9293, 477, 2]
// Exports: ForLaterMessageRow

// Module 9930 (ForLaterMessageRow)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useTheme").fileFinishedImporting("modules/saved_messages/native/ForLaterMessageRow.tsx");

export const ForLaterMessageRow = function ForLaterMessageRow(lineClamp) {
  let maxHeight;
  let message;
  lineClamp = lineClamp.lineClamp;
  ({ message, maxHeight } = lineClamp);
  let obj = lineClamp(setting[3]);
  obj = { seeMoreLabelColor: importDefault(setting[4]).colors.TEXT_DEFAULT };
  importDefault = obj.createNativeStyleProperties(obj)(importDefault(setting[2])());
  const RenderEmbeds = lineClamp(setting[5]).RenderEmbeds;
  setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = lineClamp(setting[5]).InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = lineClamp(setting[5]).InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2];
  const memo = setting1.useMemo(() => {
    let tmp = lib(setting[6]);
    tmp = new tmp();
    const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReplies: false, renderExecutedCommands: false, animateEmoji: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, shouldDisableInteractiveComponents: true };
    tmp.setOptions(obj);
    return tmp;
  }, items);
  obj = {
    pointerEvents: "none",
    horizontalOffset: 0,
    modifyRow(arg0) {
      if (null != lineClamp) {
        const obj = { numberOfLines: lineClamp, expandable: lineClamp(setting[8]).isIOS() };
        const obj2 = lineClamp(setting[8]);
        let str = "";
        if (obj3.isIOS()) {
          str = "...";
        }
        obj.seeMoreLabel = str;
        obj.seeMoreLabelColor = lib.seeMoreLabelColor;
        arg0.truncation = obj;
        obj3 = lineClamp(setting[8]);
      }
    },
    message,
    rowGenerator: memo,
    maxHeight
  };
  return setting2(importDefault(setting[7]), obj);
};
