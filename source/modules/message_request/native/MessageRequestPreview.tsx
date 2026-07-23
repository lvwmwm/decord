// Module ID: 15562
// Function ID: 120023
// Dependencies: [31, 27, 3767, 653, 33, 4130, 5052, 689, 11628, 566, 675, 1212, 7779, 4466, 1273, 2]

// Module 15562
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let Fonts;
let closure_6;
let closure_7;
const require = arg1;
({ Fonts, AnalyticEvents: closure_6, MessageFlags: closure_7 } = ME);
let obj = {};
obj = { fontStyle: "italic" };
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 12));
obj["lineHeight"] = 16;
obj.systemContent = obj;
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 12));
_createForOfIteratorHelperLoose["lineHeight"] = 16;
obj.messageContent = _createForOfIteratorHelperLoose;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function MessageRequestPreview(channel) {
  let error;
  let isBlocked;
  let isIgnored;
  let loaded;
  channel = channel.channel;
  const tmp = callback();
  let obj = channel(11628);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  const items = [_isNativeReflectConstruct];
  const items1 = [message];
  const stateFromStoresObject = channel(566).useStateFromStoresObject(items, () => {
    const obj = {};
    let isBlockedForMessageResult = null != message;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = outer1_5.isBlockedForMessage(message);
    }
    obj.isBlocked = isBlockedForMessageResult;
    let isIgnoredForMessageResult = null != message;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = outer1_5.isIgnoredForMessage(message);
    }
    obj.isIgnored = isIgnoredForMessageResult;
    return obj;
  }, items1);
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = importAllResult.useEffect(() => {
    if (null != message) {
      let obj = message(outer1_2[10]);
      obj = {};
      ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
      obj.other_user_id = message.author.id;
      obj.track(outer1_6.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    }
  }, items2);
  if (error) {
    const intl9 = channel(1212).intl;
    let stringResult = intl9.string(channel(1212).t.BZHld2);
    let flag = false;
  } else {
    flag = false;
    stringResult = null;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = channel(1212).intl;
          stringResult = intl8.string(channel(1212).t["WPe+xL"]);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = channel(1212).intl;
          stringResult = intl7.string(channel(1212).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (null != message) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = message(7779)(message, { noStyleAndInteraction: true, allowGameMentions: true }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
            stringResult = content1;
          }
          const intl6 = channel(1212).intl;
          stringResult = intl6.string(channel(1212).t["262oPB"]);
          flag = false;
        }
      }
      if (null != message) {
        if (obj3.getMessageStickers(message).length > 0) {
          const intl5 = channel(1212).intl;
          let stringResult1 = intl5.string(channel(1212).t["zuI+by"]);
        } else if (null != message.interaction) {
          const intl4 = channel(1212).intl;
          stringResult1 = intl4.string(channel(1212).t["2v7kfl"]);
        } else if (message.hasFlag(closure_7.IS_VOICE_MESSAGE)) {
          const intl3 = channel(1212).intl;
          stringResult1 = intl3.string(channel(1212).t["6bhHrc"]);
        } else {
          const intl2 = channel(1212).intl;
          const string = intl2.string;
          const t = channel(1212).t;
          if (hasFlagResult) {
            stringResult1 = string(t.Xxm5i3);
          } else {
            stringResult1 = string(t.LoMGlg);
          }
          hasFlagResult = message.hasFlag(closure_7.IS_COMPONENTS_V2);
        }
        stringResult = stringResult1;
        flag = false;
        obj3 = channel(4466);
      } else {
        const intl = channel(1212).intl;
        stringResult = intl.string(channel(1212).t["0KfDxM"]);
        flag = false;
      }
    }
  }
  obj = { style: channel.style, children: jsx(channel(1273).LegacyText, obj) };
  obj = { style: flag ? tmp.messageContent : tmp.systemContent, numberOfLines: 3, ellipsizeMode: "tail", children: stringResult };
  return <View style={flag ? tmp.messageContent : tmp.systemContent} numberOfLines={3} ellipsizeMode="tail">{stringResult}</View>;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default memoResult;
