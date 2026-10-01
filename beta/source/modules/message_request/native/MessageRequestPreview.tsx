// Module ID: 16701
// Function ID: 16702
// Name: MessageRequestPreview
// Dependencies: [19, 17, 4479, 1074, 21, 4836, 5836, 576, 12091, 504, 1241, 1115, 7313, 5198, 1177, 2]

// Module 16701 (MessageRequestPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Constants from "Constants" /* 1074 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let Fonts;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ Fonts, AnalyticEvents: metroRequire, MessageFlags: metroImportDefault } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { systemContent: obj2, messageContent: obj3 };
obj2 = { fontStyle: "italic", lineHeight: 16 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
obj3 = { lineHeight: 16 };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 12));
let closure_9 = createStyles(obj);
const memoResult = react.memo(function MessageRequestPreview(channel) {
  let error;
  let isBlocked;
  let isIgnored;
  let loaded;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  let obj = channel(12091);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  ({ loaded, error } = messageRequestPreview);
  const obj2 = channel(504);
  const items = [RelationshipStore];
  const items1 = [message];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let isIgnoredForMessageResult;
    const obj = { isBlocked: null != message && RelationshipStore.isBlockedForMessage(tmp), isIgnored: isIgnoredForMessageResult };
    isIgnoredForMessageResult = null != tmp && RelationshipStore.isIgnoredForMessage(tmp);
    return obj;
  }, items1);
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    if (null != message) {
      const obj3 = { is_spam: null, channel_id: null, other_user_id: tmp.author.id };
      ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
      const obj = AnalyticsUtilsDefault;
      obj.track(metroRequire.MESSAGE_REQUEST_PREVIEW_VIEWED, obj3);
    }
  }, items2);
  if (error) {
    const intl9 = tmp2(1115).intl;
    intl9.string(channel(1115).t.BZHld2);
    let flag = false;
  } else {
    flag = false;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = tmp2(1115).intl;
          intl8.string(channel(1115).t["WPe+xL"]);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = tmp2(1115).intl;
          intl7.string(channel(1115).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (message != null) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = message(7313)(message, { noStyleAndInteraction: true, allowGameMentions: true }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
          }
          const intl6 = tmp2(1115).intl;
          intl6.string(channel(1115).t["262oPB"]);
          flag = false;
        }
      }
      if (null != message) {
        const tmp2Result = channel(5198);
        if (tmp2Result.getMessageStickers(message).length > 0) {
          const intl5 = tmp2(1115).intl;
          let stringResult1 = intl5.string(tmp2(1115).t["zuI+by"]);
        } else if (null != message.interaction) {
          const intl4 = tmp2(1115).intl;
          stringResult1 = intl4.string(tmp2(1115).t["2v7kfl"]);
        } else {
          const tmp15 = constants2;
          if (message.hasFlag(constants2.IS_VOICE_MESSAGE)) {
            const intl3 = tmp2(1115).intl;
            stringResult1 = intl3.string(tmp2(1115).t["6bhHrc"]);
          } else {
            const hasFlagResult = message.hasFlag(tmp15.IS_COMPONENTS_V2);
            const intl2 = tmp2(1115).intl;
            const string = intl2.string;
            const t = tmp2(1115).t;
            if (hasFlagResult) {
              stringResult1 = string(t.Xxm5i3);
            } else {
              stringResult1 = string(t.LoMGlg);
            }
          }
        }
        flag = false;
      } else {
        const intl = tmp2(1115).intl;
        intl.string(channel(1115).t["0KfDxM"]);
        flag = false;
      }
    }
  }
  return <View style={style}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default memoResult;
