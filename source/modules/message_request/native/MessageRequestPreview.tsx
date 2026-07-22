// Module ID: 15445
// Function ID: 117849
// Dependencies: []

// Module 15445
let Fonts;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ Fonts, AnalyticEvents: closure_6, MessageFlags: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { fontStyle: "italic" };
const tmp2 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[6])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[7]).colors.TEXT_DEFAULT, 12));
obj["lineHeight"] = 16;
obj.systemContent = obj;
obj1 = {};
const importDefaultResult = importDefault(dependencyMap[6]);
const merged1 = Object.assign(importDefault(dependencyMap[6])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[7]).colors.TEXT_DEFAULT, 12));
obj1["lineHeight"] = 16;
obj.messageContent = obj1;
let closure_9 = obj1.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[6]);
const memoResult = importAllResult.memo(function MessageRequestPreview(channel) {
  let error;
  let isBlocked;
  let isIgnored;
  let loaded;
  channel = channel.channel;
  const arg1 = channel;
  const tmp = callback();
  let obj = arg1(dependencyMap[8]);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  const message = messageRequestPreview.message;
  const importDefault = message;
  ({ loaded, error } = messageRequestPreview);
  const items = [closure_5];
  const items1 = [message];
  const stateFromStoresObject = arg1(dependencyMap[9]).useStateFromStoresObject(items, () => {
    const obj = {};
    let isBlockedForMessageResult = null != message;
    if (isBlockedForMessageResult) {
      isBlockedForMessageResult = closure_5.isBlockedForMessage(message);
    }
    obj.isBlocked = isBlockedForMessageResult;
    let isIgnoredForMessageResult = null != message;
    if (isIgnoredForMessageResult) {
      isIgnoredForMessageResult = closure_5.isIgnoredForMessage(message);
    }
    obj.isIgnored = isIgnoredForMessageResult;
    return obj;
  }, items1);
  const items2 = [channel, message];
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const effect = importAllResult.useEffect(() => {
    if (null != message) {
      let obj = message(closure_2[10]);
      obj = {};
      ({ isSpam: obj2.is_spam, id: obj2.channel_id } = channel);
      obj.other_user_id = message.author.id;
      obj.track(constants.MESSAGE_REQUEST_PREVIEW_VIEWED, obj);
    }
  }, items2);
  if (error) {
    const intl9 = arg1(dependencyMap[11]).intl;
    let stringResult = intl9.string(arg1(dependencyMap[11]).t.BZHld2);
    let flag = false;
  } else {
    flag = false;
    stringResult = null;
    if (loaded) {
      if (null != message) {
        if (isBlocked) {
          const intl8 = arg1(dependencyMap[11]).intl;
          stringResult = intl8.string(arg1(dependencyMap[11]).t.WPe+xL);
          flag = false;
        }
      }
      if (null != message) {
        if (isIgnored) {
          const intl7 = arg1(dependencyMap[11]).intl;
          stringResult = intl7.string(arg1(dependencyMap[11]).t.uxrh1O);
          flag = false;
        }
      }
      let content;
      if (null != message) {
        content = message.content;
      }
      if (null != content) {
        if ("" !== message.content) {
          const content1 = importDefault(dependencyMap[12])(message, { "Bool(false)": null, "Bool(false)": null }).content;
          const _Array = Array;
          if (!Array.isArray(content1)) {
            flag = true;
            stringResult = content1;
          }
          const intl6 = arg1(dependencyMap[11]).intl;
          stringResult = intl6.string(arg1(dependencyMap[11]).t.262oPB);
          flag = false;
        }
      }
      if (null != message) {
        if (obj3.getMessageStickers(message).length > 0) {
          const intl5 = arg1(dependencyMap[11]).intl;
          let stringResult1 = intl5.string(arg1(dependencyMap[11]).t.zuI+by);
        } else if (null != message.interaction) {
          const intl4 = arg1(dependencyMap[11]).intl;
          stringResult1 = intl4.string(arg1(dependencyMap[11]).t.2v7kfl);
        } else if (message.hasFlag(closure_7.IS_VOICE_MESSAGE)) {
          const intl3 = arg1(dependencyMap[11]).intl;
          stringResult1 = intl3.string(arg1(dependencyMap[11]).t.6bhHrc);
        } else {
          const intl2 = arg1(dependencyMap[11]).intl;
          const string = intl2.string;
          const t = arg1(dependencyMap[11]).t;
          if (hasFlagResult) {
            stringResult1 = string(t.Xxm5i3);
          } else {
            stringResult1 = string(t.LoMGlg);
          }
          const hasFlagResult = message.hasFlag(closure_7.IS_COMPONENTS_V2);
        }
        stringResult = stringResult1;
        flag = false;
        const obj3 = arg1(dependencyMap[13]);
      } else {
        const intl = arg1(dependencyMap[11]).intl;
        stringResult = intl.string(arg1(dependencyMap[11]).t.0KfDxM);
        flag = false;
      }
    }
  }
  obj = { style: channel.style, children: jsx(arg1(dependencyMap[14]).LegacyText, obj) };
  obj = { 0: -83885449, 0: 1107296907, 9223372036854775807: 110769, style: flag ? tmp.messageContent : tmp.systemContent, children: stringResult };
  return <View {...obj} />;
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/message_request/native/MessageRequestPreview.tsx");

export default memoResult;
