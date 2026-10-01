// Module ID: 17097
// Function ID: 17098
// Name: AutomodRemovedContentSheet
// Dependencies: [19, 17, 1074, 21, 7374, 4836, 576, 1115, 5058, 6618, 6570, 8112, 4832, 2]
// Exports: default

// Module 17097 (AutomodRemovedContentSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import RowGeneratorDefault from "RowGenerator" /* 7374 */;
import ChatItemDefault from "ChatItem" /* 8112 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const MessageFlags = Constants.MessageFlags;
const jsx = Fragment.jsx;
const rowGenerator = new RowGeneratorDefault();
const tmp2 = new RowGeneratorDefault();
let createStyles = createStyles_mod;
let obj = { content: obj2, blockedMessage: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT, borderLeftWidth: 2, borderLeftColor: nativeDefault.unsafe_rawColors.RED_345 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodRemovedContentSheet.tsx");

export default function AutomodRemovedContentSheet(action) {
  let StrErG;
  let name;
  let obj3;
  let obj5;
  let tmp4Result;
  action = action.action;
  const tmp = closure_8();
  let message = action.message;
  const thread = action.thread;
  const notice = action.notice;
  const items = [message];
  const callback = react.useCallback((message) => {
    message = message.message;
    let ephemeralIndication1;
    if (message != null) {
      ephemeralIndication1 = message.ephemeralIndication;
    }
    if (null != ephemeralIndication1) {
      const ephemeralIndication = message.message.ephemeralIndication;
      const intl = message(dependencyMap[7]).intl;
      ephemeralIndication.content = intl.string(message(dependencyMap[7]).t.Nb1EQx);
    }
  }, []);
  const memo = react.useMemo(() => {
    let num;
    let messageRecord;
    if (null != message) {
      const obj = { flags: num | MessageFlags.EPHEMERAL };
      const createMessageRecord = MessageRecordUtils.createMessageRecord;
      MessageRecordUtils;
      const merged = Object.assign(tmp);
      num = tmp.flags;
      if (num == null) {
        num = 0;
      }
      messageRecord = createMessageRecord(obj);
    }
    return messageRecord;
  }, items);
  const tmp5 = message;
  const ActionSheet = message(6618).ActionSheet;
  const BottomSheetTitleHeader = message(6570).BottomSheetTitleHeader;
  let intl = message(1115).intl;
  const string = intl.string;
  if (null != thread) {
    StrErG = tmp5(1115).t["8czF24"];
  } else {
    StrErG = tmp5(1115).t.StrErG;
  }
  let obj = { title: string(StrErG), subtitle: name };
  name = undefined;
  if (thread != null) {
    name = thread.name;
  }
  const obj2 = { header: jsx(BottomSheetTitleHeader, obj), children: jsx(View, obj3) };
  obj3 = { style: tmp.content, children: tmp4Result };
  if (null != memo) {
    const obj4 = { style: tmp.blockedMessage, children: jsx(ChatItemDefault, obj5) };
    obj5 = { rowGenerator, message: memo, modifyRow: callback, pointerEvents: "none" };
    tmp4Result = tmp4(tmp8, obj4);
  } else {
    const obj6 = { variant: "text-md/normal", color: "text-default", children: notice };
    tmp4Result = tmp4(tmp5(4832).Text, obj6);
  }
  return jsx(ActionSheet, obj2);
};
