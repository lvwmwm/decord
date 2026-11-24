// Module ID: 12693
// Function ID: 12694
// Name: SidekickMessageInput
// Dependencies: [5, 17, 6270, 21, 575, 4917, 1494, 5097, 12694, 12415, 5598, 1112, 1186, 12405, 10968, 6254, 11162, 5615, 2]
// Exports: default, useSidekickMessageInputKeyboardOffset

// Module 12693 (SidekickMessageInput)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5097 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6254 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10968 */;
import Tracking from "Tracking" /* 12405 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, closure_2;

let CHECKPOINT_CONTROL_ICON_SIZE;
let CHECKPOINT_PRIMARY;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let sum;
({ Keyboard: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { messageInputContainer: obj2, messageInputContainerLarge: { height: 136 }, messageInput: { flex: 1, alignSelf: "stretch", padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" }, messageInputActions: { position: "absolute", bottom: 0, end: 0, flexDirection: "row" }, messageInputAction: { height: 44, justifyContent: "flex-end", paddingBottom: 18 }, giftAction: { paddingStart: 18, paddingEnd: 9 }, sendAction: { paddingStart: 9, paddingEnd: 18 }, messageInputIcon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, disabled: { opacity: 0.5 } };
obj2 = { height: 104, padding: PX_12, paddingBottom: sum + nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
sum = 18 + CHECKPOINT_CONTROL_ICON_SIZE;
let closure_12 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/SidekickMessageInput.tsx");

export default function SidekickMessageInput(user) {
  let containerRef;
  let inputValue;
  let intl2;
  let intl3;
  let isSending;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let messageSent;
  let obj6;
  let obj8;
  let obj9;
  let state;
  let stringResult;
  let tmp11;
  let username;
  user = user.user;
  ({ state, setState: importDefault } = user);
  let str;
  let closure_3;
  let obj = function _handleSend() {
    let id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj2;
      const f141055 = (arg0) => {
        obj = { isSending: false };
        const merged = Object.assign(arg0);
        return obj;
      };
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp;
              const tmp40 = closure_2_3;
              if (tmp40) {
                importDefault((arg0) => {
                  obj = { isSending: true };
                  const merged = Object.assign(arg0);
                  return obj;
                });
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj2.sendSidekickMessage(str, id.id), done: false };
                obj2 = tmp(closure_2[9]);
                return obj5;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_1(f141055);
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const presentError = tmp(closure_2[10]).presentError;
              const tmp14 = tmp(closure_2[10]);
              const intl = tmp(closure_2[11]).intl;
              presentError(intl.string(tmp(closure_2[11]).t.fEptJP));
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_1(f141055);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_1((arg0) => {
                obj = { inputValue: undefined, messageSent: true };
                const merged = Object.assign(arg0);
                return obj;
              });
              c3 = 1;
            }
            c3 = 0;
            closure_129_1(f141055);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp34) {
          closure_2 = tmp34;
          if (0 === c3) {
            c5 = 3;
            throw tmp34;
          } else if (1 === tmp36) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  ({ username, containerRef } = user);
  const tmp = closure_12();
  ({ inputValue, messageSent, isSending } = state);
  size = require("useWindowDimensions")({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let messageInputContainerLarge = bound > user(str[7]).WINDOW_SIZE_THRESHOLD_LARGE;
  str = undefined;
  const tmp5 = require("useCanDM")(user.id);
  if (inputValue != null) {
    str = inputValue.trim();
  }
  if (str == null) {
    str = "";
  }
  let tmp6 = str.length > 0;
  if (tmp6) {
    tmp6 = str.length <= 250;
  }
  if (tmp6) {
    tmp6 = !messageSent;
  }
  if (tmp6) {
    tmp6 = !isSending;
  }
  closure_3 = tmp6;
  let tmp8Result = null;
  if (tmp5) {
    obj = { ref: containerRef, style: items, children: items1 };
    items = [tmp.messageInputContainer, ];
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    items[1] = messageInputContainerLarge;
    let obj2 = {
      multiline: true,
      onChangeText(arg0) {
          let closure_0 = arg0;
          return importDefault((arg0) => {
            obj = { inputValue };
            const merged = Object.assign(arg0);
            return obj;
          });
        },
      style: tmp.messageInput,
      value: inputValue,
      maxLength: 250,
      editable: tmp11,
      placeholderTextColor: CHECKPOINT_WHITE,
      placeholder: stringResult,
      returnKeyType: "done",
      submitBehavior: "blurAndSubmit",
      disableFullscreenUI: true
    };
    tmp11 = !messageSent;
    const TextInput = tmp4(tmp2[12]).TextInput;
    if (!messageSent) {
      tmp11 = !isSending;
    }
    let intl = tmp4(tmp2[11]).intl;
    if (messageSent) {
      stringResult = intl.string(tmp4(tmp2[11]).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp4(tmp2[11]).t["0ZQw/X"], obj3);
    }
    items1 = [tmp10(TextInput, obj2), ];
    let obj4 = { style: tmp.messageInputActions, children: items3 };
    let obj5 = {
      onPress: function handleGift() {
          let items;
          React3.dismiss();
          obj = Tracking;
          const result = obj.trackCheckpoint2026GiftCTAClicked(user.id);
          const obj2 = { recipientUserId: user.id, analyticsLocations: items };
          const openGiftModal = utils_openGiftModal.openGiftModal;
          items = [, ];
          utils_openGiftModal;
          items[0] = AnalyticsLocationDefault.CHECKPOINT;
          items[1] = AnalyticsLocationDefault.CHECKPOINT_SIDEKICK;
          openGiftModal(obj2);
        },
      style: items2,
      accessibilityRole: "button",
      accessibilityLabel: intl2.string(tmp4(tmp2[11]).t.Ve9Ge6),
      children: tmp10(tmp4(tmp2[16]).GiftIcon, obj6)
    };
    items2 = [, ];
    ({ messageInputAction: arr3[0], giftAction: arr3[1] } = tmp);
    let tmp14 = closure_5;
    intl2 = tmp4(tmp2[11]).intl;
    obj6 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    items3 = [tmp10(closure_5, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: tmp16,
      style: items4,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(str[11]).t.oeb1vg),
      accessibilityState: obj8,
      children: closure_9(user(str[17]).SendMessageIcon, obj9)
    };
    items4 = [, , ];
    ({ messageInputAction: arr5[0], sendAction: arr5[1] } = tmp);
    let disabled = tmp16;
    const tmp15 = CHECKPOINT_PRIMARY;
    if (!tmp6) {
      disabled = tmp.disabled;
    }
    items4[2] = disabled;
    intl3 = tmp4(tmp2[11]).intl;
    obj8 = { disabled: !tmp6 };
    obj9 = { size: "custom", color: tmp15, style: tmp.messageInputIcon };
    items3[1] = closure_9(tmp14, obj7);
    items1[1] = closure_10(closure_6, obj4);
    tmp8Result = tmp8(tmp9, obj);
  }
  return tmp8Result;
};
export function useSidekickMessageInputKeyboardOffset() {
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let num = 104;
  if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
    num = 136;
  }
  return num - PX_12 - 2;
}
