// Module ID: 18522
// Function ID: 18523
// Name: ICYMIShareModal
// Dependencies: [32, 5, 19, 17, 4858, 1072, 10707, 5014, 21, 5009, 575, 8975, 1114, 18523, 5707, 5602, 13355, 13368, 5629, 6738, 13334, 1380, 7817, 7629, 1626, 1492, 1376, 13344, 13345, 2]
// Exports: GameShareModal, GuildEventShareModal

// Module 18522 (ICYMIShareModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import MessageConstants from "MessageConstants" /* 5014 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ShareEventUtils from "ShareEventUtils" /* 8975 */;
import UserRowConstants from "UserRowConstants" /* 10707 */;
import useShareChatInputActions from "useShareChatInputActions" /* 13355 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c5, c6, closure_3;

let closure_12;
let obj2;
let tmp5;
let unpackModuleId;
const ShareChatInputDefault = tmp5(13368);
function GravityShareFooter(arg0) {
  let count;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isSending;
  let items2;
  let onSend;
  let stringResult;
  let textInputRef;
  let tmp17;
  ({ count, isSending, onSend } = arg0);
  const tmp = closure_13();
  let closure_1 = tmp;
  const tmp2 = _slicedToArray(react.useState(""), 2);
  const first = tmp2[0];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const obj = useShareChatInputActions;
  const shareChatInputActions = obj.useShareChatInputActions(tmp4);
  const items = [first, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback = react.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = tmp7(1114).intl;
    stringResult = intl2.string(tmp7(1114).t.TXNS7S);
  } else {
    const intl = tmp7(1114).intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(tmp7(1114).t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: items2 };
    const obj4 = { inputRef: textInputRef, text: first, onChange: tmp2[1], onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    items2 = [unpackModuleId(ShareChatInputDefault, obj4), ];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: 0 === count, onPress: tmp17, loading: isSending };
    tmp17 = undefined;
    const Button = tmp7(5629).Button;
    const tmp14 = authStore2;
    const tmp15 = View;
    const tmp16 = unpackModuleId;
    if (!isSending) {
      tmp17 = callback;
    }
    items2[1] = tmp16(Button, obj5);
    tmp14Result = tmp14(tmp15, obj3);
  }
  return tmp14Result;
}
class ICYMIShareModal {
  constructor(arg0) {
    let _undefined;
    let bottom;
    let c3;
    let first;
    let items1;
    let originDestinationId;
    let sum;
    let title;
    let tmp2;
    let tmp4;
    ({ linkText: require, forwardToChannel: importDefault } = arg0);
    first = undefined;
    _slicedToArray = undefined;
    react = undefined;
    let obj = function _handleSendForwards() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        let closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          let tmp7 = value;
          let tmp8 = arg0;
          if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              let closure_2;
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_2 = tmp;
                  const flag = true;
                  const tmp20 = _undefined(true);
                  const tmp21 = globalThis;
                  c3 = 1;
                  c4 = 1;
                  let obj4 = { value: Promise.all(first.map(closure_0(closure_2[20]).getOrResolveChannelIdFromDestinationId)), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const tmp10 = tmp2;
                const mapped = value.map((item) => channel.getChannel(item));
                const found = mapped.filter(closure_0(closure_2[21]).isNotNullish);
                const item = found.forEach((() => {
                  closure_0 = c4(function*(arg0, value) {
                    closure_0 = arg0;
                    if (c1 === 2) {
                      c1 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp2 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c1 = 2;
                        if (0 === c2) {
                          if (arg0 === 1) {
                            c1 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c1 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            if (null != closure_0) {
                              let combined;
                              if (closure_0.trim().length > 0) {
                                const _HermesInternal = HermesInternal;
                                combined = "" + str4 + "\n\n" + closure_0;
                              }
                              const obj2 = tmp2(closure_3_2[22]);
                              const parsed = obj2.parse(tmp20, combined);
                              const tmp7 = tmp2;
                              const tmp8 = closure_3_2;
                              if (null == closure_2_1) {
                                const tmp7Result = tmp7(tmp8[23]);
                                const obj5 = { location: constants.ICYMI };
                                c2 = 1;
                                c1 = 1;
                                const obj6 = { value: tmp7Result.sendMessage(closure_0.id, parsed, false, obj5), done: false };
                                return obj6;
                              } else {
                                tmp10(closure_0);
                              }
                            }
                            combined = closure_0;
                          }
                        } else if (arg0 === 1) {
                          c1 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c1 = 3;
                          obj = { value, done: true };
                          return obj;
                        }
                        c1 = 3;
                        return { value: "HermesInternal", done: null };
                      } catch (tmp16) {
                        c1 = 3;
                        throw tmp16;
                      }
                    }
                  });
                  return function(arg0) {
                    return closure_0(...arguments);
                  };
                })());
                const tmp16 = closure_2;
                const arr3 = tmp2(closure_2[19]);
                arr3.pop();
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp6) {
              c4 = 3;
              throw tmp6;
            }
          }
        }
      });
      return obj(...arguments);
    };
    ({ title, originDestinationId } = arg0);
    [first, tmp2] = react.useState([]);
    const length = first.length;
    [tmp4, c3] = _slicedToArray(react.useState(false), 2);
    const tmp3 = _slicedToArray(react.useState(false), 2);
    const callback = react.useCallback(() => {
      const arr = require("ModalActionCreators");
      arr.pop();
    }, []);
    const tmp6 = require("useSafeAreaInsets")();
    react = tmp6;
    let height = require("useWindowDimensions")().height;
    const items = [tmp6.bottom, height];
    obj = {
      style: react.useMemo(() => {
        height = "100%";
        obj = PlatformUtils;
        if (obj.isAndroid()) {
          height = height + bottom.bottom;
        }
        return { height };
      }, items),
      children: items1
    };
    items1 = [closure_11(require("SearchableDestinationListHeader"), { title, onClose: callback }), , ];
    let obj2 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp2, originDestination: originDestinationId, insetEnd: sum + require("native").space.PX_96, disableGradient: true, disableStickySections: true };
    let tmp7 = require("SearchableDestinationList");
    sum = tmp6.bottom + require("native").space.PX_8;
    items1[1] = closure_11(tmp7, obj2);
    let obj3 = {
      count: length,
      isSending: tmp4,
      onSend: function handleSendForwards(arg0) {
        return obj(...arguments);
      }
    };
    items1[2] = closure_11(GravityShareFooter, obj3);
    return closure_12(height, obj);
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AbortCodes = Constants.AbortCodes;
const UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { footer: obj2 };
obj2 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export function GuildEventShareModal(event) {
  let intl;
  let result;
  let tmp4;
  event = event.event;
  const obj3 = { title: intl.string(intl3.t["7TVSLK"]), originDestinationId: tmp4, linkText: result };
  const obj = ShareEventUtils;
  const obj2 = { guildId: event.guild_id, guildEventId: event.id };
  result = obj.SHARE_EVENT_DETAILS_LINK(obj2);
  intl = intl3.intl;
  tmp4 = undefined;
  const tmp2 = unpackModuleId;
  const tmp3 = ICYMIShareModal;
  if (null != event.channel_id) {
    tmp4 = { type: "channel", id: event.channel_id };
    const obj4 = { type: "channel", id: event.channel_id };
  }
  return tmp2(tmp3, obj3);
}
export function GameShareModal(content) {
  let intl;
  content = content.content;
  let obj = {
    title: intl.string(content(1114).t["59CWHK"]),
    linkText: "",
    forwardToChannel: function() {
      return closure_0(...arguments);
    }
  };
  intl = content(1114).intl;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      try {
        let closure_1;
        let entry;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            entry = undefined;
            c4 = 1;
            const obj5 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj3.sendMessageWithEmbed(obj5), done: false };
            obj3 = entry(dependencyMap[13]);
            return obj6;
          }
        } else {
          if (1 === c5) {
            let stringResult;
            c4 = 0;
            closure_1 = closure_3;
            const tmp9 = null != closure_1.body && closure_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
            entry = tmp9;
            const open = ToastActionCreatorsDefault.open;
            const intl = entry(dependencyMap[12]).intl;
            const string = intl.string;
            const t = entry(dependencyMap[12]).t;
            if (entry) {
              stringResult = string(t.BC5vfD);
            } else {
              stringResult = string(t.F8FvUy);
            }
            const obj7 = { text: stringResult };
            open("FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", obj7);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp32) {
        closure_3 = tmp32;
        if (0 === c4) {
          c6 = 3;
          throw tmp32;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return closure_11(ICYMIShareModal, obj);
}
