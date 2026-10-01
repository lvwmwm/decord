// Module ID: 11704
// Function ID: 11705
// Name: ScheduledMessageEditContentModal
// Dependencies: [5, 32, 19, 17, 2045, 21, 4836, 576, 1613, 8605, 504, 7095, 7265, 11693, 5039, 1115, 5943, 7288, 1364, 5936, 5435, 4832, 6506, 2]
// Exports: default

// Module 11704 (ScheduledMessageEditContentModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import MessageParserDefault from "MessageParser" /* 7095 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 7265 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, container: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageEditContentModal.tsx");

export default function ScheduledMessageEditContentModal(scheduledMessage) {
  let items2;
  let num;
  let onPress;
  let title;
  let tmp5Result;
  let tmp9;
  let value;
  scheduledMessage = scheduledMessage.scheduledMessage;
  let channelId;
  let stateFromStores;
  value = undefined;
  react = undefined;
  const tmp = closure_10();
  const tmp2 = channelId;
  const tmp3 = stateFromStores;
  const top = channelId(stateFromStores[8])().top;
  channelId = scheduledMessage.createArgs.channelId;
  const tmp4 = channelId(stateFromStores[9])();
  let obj = scheduledMessage(stateFromStores[10]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  [value, tmp9] = react.useState(() => {
    const unparse = MessageParserDefault.unparse;
    MessageParserDefault;
    const obj = ScheduledMessageUtils;
    return unparse(obj.unparseContentAndFlagsForSilentMessage(scheduledMessage.createArgs), channelId);
  });
  const items1 = [stateFromStores, value, scheduledMessage.createArgs.flags, scheduledMessage.scheduledMessageId];
  _slicedToArray = react.useCallback(value(function*(arg0, value) {
    let c2;
    let closure_0;
    let v1;
    if (stateFromStores === 2) {
      stateFromStores = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        stateFromStores = 2;
        if (0 === channelId) {
          if (arg0 === 1) {
            stateFromStores = 3;
            throw value;
          } else if (arg0 === 2) {
            stateFromStores = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj5 = channelId(stateFromStores[11]);
            const content = obj5.parse(stateFromStores, first).content;
            const obj4 = { content, flags: scheduledMessage.createArgs.flags };
            channelId = 1;
            const obj6 = tmp3(stateFromStores[13]);
            stateFromStores = 1;
            const obj7 = { value: obj6.editScheduledMessage(scheduledMessage.scheduledMessageId, obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          stateFromStores = 3;
          throw value;
        } else if (arg0 === 2) {
          stateFromStores = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            const arr = channelId(stateFromStores[14]);
            arr.pop();
          }
          stateFromStores = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        stateFromStores = 3;
        throw tmp8;
      }
    }
  }), items1);
  let intl = scheduledMessage(stateFromStores[15]).intl;
  const stringResult = intl.string(scheduledMessage(stateFromStores[15]).t.ZXE1s4);
  react = stringResult;
  let obj2 = { style: tmp.modal, children: items2 };
  let obj5 = {
    title: stringResult,
    headerTitle() {
      const obj = { title };
      return metroImportAll(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(tmp3[7]).space.PX_8,
    headerLeft: tmp5Result.getHeaderCloseButton(tmp2(tmp3[14]).pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerRight() {
      let Text;
      let intl;
      let obj2;
      const obj = { accessibilityRole: "button", onPress, children: metroImportAll(Text, obj2) };
      const PressableOpacity = Pressables.PressableOpacity;
      obj2 = { variant: "text-md/semibold", color: "control-brand-foreground", children: intl.string(intl2.t["R3BPH+"]) };
      Text = Text_Text.Text;
      intl = intl2.intl;
      return metroImportAll(PressableOpacity, obj);
    }
  };
  const Header = scheduledMessage(stateFromStores[16]).Header;
  let obj4 = scheduledMessage(stateFromStores[18]);
  num = 0;
  const tmp11 = closure_9;
  if (!obj4.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj3.headerLeftContainerStyle, headerRightContainer: obj3.headerRightContainerStyle } = tmp);
  tmp5Result = scheduledMessage(tmp3[19]);
  items2 = [tmp13(Header, obj5), ];
  let obj6 = { style: tmp.container, children: tmp13(tmp5(tmp3[22]).TextArea, { accessibilityLabel: stringResult, value, onChange: tmp9, maxLength: tmp4, autoFocus: true }) };
  items2[1] = closure_8(View, obj6);
  return tmp11(View, obj2);
};
