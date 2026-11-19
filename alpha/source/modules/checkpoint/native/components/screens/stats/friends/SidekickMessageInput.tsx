// Module ID: 12684
// Function ID: 12685
// Name: SidekickMessageInput
// Dependencies: [5, 32, 19, 17, 5848, 21, 575, 4792, 1496, 4972, 12685, 12408, 5473, 1113, 1187, 12398, 9345, 7420, 12376, 5490, 2]
// Exports: default, useSidekickMessageInputKeyboardOffset

// Module 12684 (SidekickMessageInput)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4972 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import utils_openGiftModal from "utils/openGiftModal" /* 9345 */;
import Tracking from "Tracking" /* 12398 */;
import useCanDMDefault from "useCanDM" /* 12685 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 5848 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, closure_2, dependencyMap, importDefault;

let CHECKPOINT_CONTROL_ICON_SIZE;
let CHECKPOINT_PRIMARY;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let sum;
let unpackModuleId;
let react = react_mod;
({ Keyboard: metroRequire, Pressable: metroImportDefault, View: metroImportAll } = react_native);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { messageInputContainer: obj2, messageInputContainerLarge: { height: 136 }, messageInput: { flex: 1, alignSelf: "stretch", padding: 0, color: CHECKPOINT_PRIMARY, textAlignVertical: "top" }, messageInputActions: { position: "absolute", bottom: 0, end: 0, flexDirection: "row" }, messageInputAction: { height: 44, justifyContent: "flex-end", paddingBottom: 18 }, giftAction: { paddingStart: 18, paddingEnd: 9 }, sendAction: { paddingStart: 9, paddingEnd: 18 }, messageInputIcon: { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE }, disabled: { opacity: 0.5 } };
obj2 = { height: 104, padding: PX_12, paddingBottom: sum + nativeDefault.space.PX_8, borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
sum = 18 + CHECKPOINT_CONTROL_ICON_SIZE;
let closure_14 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/SidekickMessageInput.tsx");

export default function SidekickMessageInput(user) {
  let _undefined;
  let c2;
  let c3;
  let closure_5;
  let containerRef;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj6;
  let obj8;
  let obj9;
  let str;
  let stringResult;
  let tmp17;
  let tmp3;
  let tmp5;
  let tmp7;
  let username;
  user = user.user;
  dependencyMap = undefined;
  c3 = undefined;
  let str2;
  react = undefined;
  let obj = function _handleSend() {
    let id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp30 = closure_2_5;
              if (tmp30) {
                _undefined(true);
                c3 = 2;
                c1 = 3;
                c4 = 1;
                const obj5 = { value: obj2.sendSidekickMessage(str2, id.id), done: false };
                obj2 = tmp(closure_2[11]);
                return obj5;
              }
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_3(false);
            throw closure_2;
          } else {
            if (2 === c1) {
              c3 = 1;
              const presentError = tmp(closure_2[12]).presentError;
              const tmp16 = tmp(closure_2[12]);
              const intl = tmp(closure_2[13]).intl;
              presentError(intl.string(tmp(closure_2[13]).t.fEptJP));
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_3(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_1(undefined);
              closure_128_2(true);
              c3 = 1;
            }
            c3 = 0;
            closure_128_3(false);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "+60" };
        } catch (tmp37) {
          closure_2 = tmp37;
          if (0 === c3) {
            c4 = 3;
            throw tmp37;
          } else if (1 === tmp39) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  ({ username, containerRef } = user);
  const tmp = closure_14();
  [str, tmp3] = str2(react.useState(undefined), 2);
  importDefault = tmp3;
  const tmp2 = str2(react.useState(undefined), 2);
  [tmp5, c2] = str2(react.useState(false), 2);
  const tmp4 = str2(react.useState(false), 2);
  [tmp7, c3] = str2(react.useState(false), 2);
  const tmp6 = str2(react.useState(false), 2);
  size = useWindowDimensionsDefault({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  let messageInputContainerLarge = bound > user(4972).WINDOW_SIZE_THRESHOLD_LARGE;
  str2 = undefined;
  const tmp11 = useCanDMDefault(user.id);
  if (str != null) {
    str2 = str.trim();
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp12 = str2.length > 0;
  if (tmp12) {
    tmp12 = str2.length <= 250;
  }
  if (tmp12) {
    tmp12 = !tmp5;
  }
  if (tmp12) {
    tmp12 = !tmp7;
  }
  react = tmp12;
  let tmp14Result = null;
  if (tmp11) {
    obj = { ref: containerRef, style: items, children: items1 };
    items = [tmp.messageInputContainer, ];
    if (messageInputContainerLarge) {
      messageInputContainerLarge = tmp.messageInputContainerLarge;
    }
    items[1] = messageInputContainerLarge;
    let tmp16 = closure_11;
    let obj2 = { multiline: true, onChangeText: tmp3, style: tmp.messageInput, value: str, maxLength: 250, editable: tmp17, placeholderTextColor: CHECKPOINT_WHITE, placeholder: stringResult, returnKeyType: "done", submitBehavior: "blurAndSubmit", disableFullscreenUI: true };
    tmp17 = !tmp5;
    const TextInput = tmp10(1187).TextInput;
    if (!tmp5) {
      tmp17 = !tmp7;
    }
    let intl = tmp10(1113).intl;
    if (tmp5) {
      stringResult = intl.string(tmp10(1113).t.fjcCk5);
    } else {
      let obj3 = { name: username };
      stringResult = intl.formatToPlainString(tmp10(1113).t["0ZQw/X"], obj3);
    }
    items1 = [tmp16(TextInput, obj2), ];
    let obj4 = { style: tmp.messageInputActions, children: items3 };
    let obj5 = {
      onPress: function handleGift() {
          let items;
          metroRequire.dismiss();
          obj = Tracking;
          const result = obj.trackCheckpoint2026GiftCtaClicked(user.id);
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
      accessibilityLabel: intl2.string(tmp10(1113).t.Ve9Ge6),
      children: tmp16(tmp10(12376).GiftIcon, obj6)
    };
    items2 = [, ];
    ({ messageInputAction: arr3[0], giftAction: arr3[1] } = tmp);
    intl2 = tmp10(1113).intl;
    obj6 = { size: "custom", color: CHECKPOINT_PRIMARY, style: tmp.messageInputIcon };
    items3 = [tmp16(closure_7, obj5), ];
    const obj7 = {
      onPress: function handleSend() {
          return obj(...arguments);
        },
      disabled: tmp22,
      style: items4,
      accessibilityRole: "button",
      accessibilityLabel: intl3.string(user(1113).t.oeb1vg),
      accessibilityState: obj8,
      children: tmp16(user(5490).SendMessageIcon, obj9)
    };
    items4 = [, , ];
    ({ messageInputAction: arr5[0], sendAction: arr5[1] } = tmp);
    let disabled = tmp22;
    const tmp20 = closure_7;
    const tmp21 = CHECKPOINT_PRIMARY;
    if (!tmp12) {
      disabled = tmp.disabled;
    }
    items4[2] = disabled;
    intl3 = tmp10(1113).intl;
    obj8 = { disabled: !tmp12 };
    obj9 = { size: "custom", color: tmp21, style: tmp.messageInputIcon };
    items3[1] = tmp16(tmp20, obj7);
    items1[1] = closure_12(closure_8, obj4);
    tmp14Result = tmp14(tmp15, obj);
  }
  return tmp14Result;
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
