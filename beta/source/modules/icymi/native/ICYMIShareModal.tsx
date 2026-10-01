// Module ID: 16141
// Function ID: 16142
// Name: ICYMIShareModal
// Dependencies: [32, 5, 19, 17, 2045, 5200, 5199, 1074, 10320, 4829, 21, 4836, 576, 9065, 1115, 16142, 4528, 1479, 4688, 7297, 16143, 5437, 4652, 4540, 6402, 11189, 11201, 5281, 5039, 10444, 1370, 7095, 8608, 1255, 5440, 6876, 8610, 1613, 1364, 5943, 7288, 5936, 10447, 2]
// Exports: GameShareModal, GuildEventShareModal

// Module 16141 (ICYMIShareModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import native from "native" /* 4540 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4652 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import DraftStore from "DraftStore" /* 5200 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7297 */;
import ShareEventUtils from "ShareEventUtils" /* 9065 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11189 */;
import captureScreenDefault from "captureScreen" /* 16143 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c3, c5, c6, closure_3, uploads;

let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp5;
const ShareChatInputDefault = tmp5(11201);
function Screenshot(setUri) {
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let tmp6;
  setUri = setUri.setUri;
  const render = setUri.render;
  const tmp = closure_15();
  const ref = react.useRef(null);
  const items = [setUri];
  const effect = react.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let nextPromise;
      if (current != null) {
        const capture = current.capture;
        if (capture != null) {
          const captureResult = capture();
          nextPromise = captureResult.then((result) => {
            closure_1_0(result);
          });
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  const width = useWindowDimensionsDefault().width;
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: map1(View, obj3) };
  obj3 = { style: items1, children: map1(tmp6, obj4) };
  items1 = [tmp.preview, { width }];
  const obj = ClientThemesOverrides;
  const clientThemesOverride = obj.useClientThemesOverride();
  obj4 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: authStore2(View, obj5) };
  obj5 = { style: tmp.base, children: items2 };
  const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj7 };
  obj7 = { dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7, light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8 };
  tmp6 = captureScreenDefault;
  const tmp7 = ThemedGradientDefault;
  items2 = [map1(tmp7, obj6), ];
  const obj8 = { gradient: tmp4, children: map1(View, obj9) };
  obj9 = { style: items3, children: render() };
  items3 = [tmp.contentContainer, clientThemesOverride];
  const ThemeContextProvider = native.ThemeContextProvider;
  items2[1] = map1(ThemeContextProvider, obj8);
  return map1(View, obj2);
}
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
  const tmp = closure_15();
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
    const intl2 = tmp7(1115).intl;
    stringResult = intl2.string(tmp7(1115).t.TXNS7S);
  } else {
    const intl = tmp7(1115).intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(tmp7(1115).t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: items2 };
    const obj4 = { inputRef: textInputRef, text: first, onChange: tmp2[1], onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    items2 = [map1(ShareChatInputDefault, obj4), ];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: 0 === count, onPress: tmp17, loading: isSending };
    tmp17 = undefined;
    const Button = tmp7(5281).Button;
    const tmp14 = authStore2;
    const tmp15 = View;
    const tmp16 = map1;
    if (!isSending) {
      tmp17 = callback;
    }
    items2[1] = tmp16(Button, obj5);
    tmp14Result = tmp14(tmp15, obj3);
  }
  return tmp14Result;
}
class ICYMIShareModal {
  constructor(title) {
    let c7;
    let closure_6;
    let first;
    let first1;
    let items1;
    let num;
    let render;
    let sum;
    let tmp14Result;
    let tmp2;
    let tmp6;
    title = title.title;
    ({ linkText: importDefault, render } = title);
    ({ forwardToChannel: _slicedToArray, onShare: _asyncToGenerator } = title);
    first = undefined;
    closure_6 = undefined;
    c7 = undefined;
    let obj = function _handleSendForwards() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_1;
        let closure_0 = arg0;
        if (c4 === 2) {
          c4 = 3;
          const str = "Generator functions may not be called on executing generators";
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          let tmp13 = value;
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
                  const tmp31 = closure_2_6(true);
                  let tmp7 = null == render;
                  if (!tmp7) {
                    tmp7 = null != closure_2_7;
                  }
                  if (tmp7) {
                    const tmp8 = globalThis;
                    const tmp10 = closure_0;
                    c3 = 1;
                    c4 = 1;
                    let obj4 = { value: Promise.all(first.map(closure_0(closure_2[29]).getOrResolveChannelIdFromDestinationId)), done: false };
                    return obj4;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                const mapped = value.map((item) => channel.getChannel(item));
                const found = mapped.filter(closure_0(closure_2[30]).isNotNullish);
                const item = found.forEach((() => {
                  closure_0 = c4(function*(arg0, value) {
                    let obj5;
                    let obj7;
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
                                combined = "" + str4 + "\n\n" + closure_2_1;
                              }
                              let obj2 = tmp2(closure_3_2[31]);
                              const parsed = obj2.parse(tmp31, combined);
                              if (null == closure_2_3) {
                                const tmp13 = null != closure_2_2 && null != originalUri;
                                uploads = undefined;
                                if (tmp13) {
                                  const obj6 = { channelId: closure_0.id, file: obj7, draftType: closure_3_8.ChannelMessage };
                                  obj7 = { uri: originalUri, originalUri, id: obj5.v4(), platform: closure_3_0(closure_3_2[34]).UploadPlatform.REACT_NATIVE };
                                  const addFile = tmp2(closure_3_2[32]).addFile;
                                  const tmp7Result = tmp2(closure_3_2[32]);
                                  obj5 = closure_3_0(closure_3_2[33]);
                                  addFile(obj6);
                                  uploads = uploads.getUploads(tmp31.id, closure_3_8.ChannelMessage);
                                  const tmp7Result3 = tmp2(closure_3_2[32]);
                                  tmp7Result3.clearAll(closure_0.id, closure_3_8.ChannelMessage);
                                }
                                const tmp7Result4 = tmp2(closure_3_2[35]);
                                const obj8 = {
                                  location: constants.ICYMI,
                                  attachmentsToUpload: uploads,
                                  onAttachmentUploadError(file, code, reason) {
                                                obj = closure_2_0(closure_2_2[36]);
                                                const obj2 = { file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason };
                                                const result = obj.handleUploadMessageAttachmentsErrors(obj2);
                                              }
                                };
                                c2 = 1;
                                c1 = 1;
                                const obj9 = { value: tmp7Result4.sendMessage(closure_0.id, parsed, false, obj8), done: false };
                                return obj9;
                              } else {
                                tmp10(closure_0);
                              }
                            }
                            combined = closure_2_1;
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
                      } catch (tmp27) {
                        c1 = 3;
                        throw tmp27;
                      }
                    }
                  });
                  return function(arg0) {
                    return closure_0(...arguments);
                  };
                })());
                const arr3 = tmp2(closure_2[28]);
                arr3.pop();
                if (null != closure_130_4) {
                  const tmp27 = closure_130_4;
                  const tmp28 = closure_130_4();
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } catch (tmp12) {
              c4 = 3;
              throw tmp12;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const originDestinationId = title.originDestinationId;
    [first, tmp2] = first.useState([]);
    const length = first.length;
    [first1, closure_6] = first.useState(false);
    let tmp5 = _slicedToArray(first.useState(null), 2);
    [c7, tmp6] = tmp5;
    const callback = first.useCallback(() => {
      const arr = require("ModalActionCreators");
      arr.pop();
    }, []);
    let tmp8 = closure_15();
    let tmp10 = render;
    const rect = require("useSafeAreaInsets")();
    let height = require("useWindowDimensions")().height;
    const items = [rect.bottom, height];
    obj = {
      style: first.useMemo(() => {
        height = "100%";
        obj = PlatformUtils;
        if (obj.isAndroid()) {
          height = height + rect.bottom;
        }
        return { height };
      }, items),
      children: items1
    };
    let tmp13 = closure_13;
    const tmp12 = closure_6;
    let tmp14 = title;
    let obj4 = {
      title,
      headerTitle() {
        obj = { title };
        return map1(HeaderShared.GenericHeaderTitle, obj);
      },
      headerTitleAlign: "center",
      headerStatusBarHeight: num + tmp9(tmp10[12]).space.PX_8,
      headerLeft: tmp14Result.getHeaderCloseButton(callback),
      headerLeftContainerStyle: null,
      headerRightContainerStyle: null
    };
    const Header = title(render[39]).Header;
    let obj3 = title(render[38]);
    num = 0;
    const tmp11 = closure_14;
    if (!obj3.isIOS()) {
      num = rect.top;
    }
    ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp8);
    tmp14Result = tmp14(tmp10[41]);
    items1 = [tmp13(Header, obj4), , , ];
    let tmp13Result = null != render;
    if (tmp13Result) {
      let obj5 = { render, setUri: tmp6 };
      tmp13Result = tmp13(Screenshot, obj5);
    }
    items1[1] = tmp13Result;
    let obj6 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp2, originDestination: originDestinationId, insetEnd: sum + tmp9(tmp10[12]).space.PX_96, disableGradient: true, disableStickySections: true };
    const tmp9Result = require("SearchableDestinationList");
    sum = rect.bottom + tmp9(tmp10[12]).space.PX_8;
    items1[2] = tmp13(tmp9Result, obj6);
    let obj7 = {
      count: length,
      isSending: first1,
      onSend: function handleSendForwards(arg0) {
        return obj(...arguments);
      }
    };
    items1[3] = tmp13(GravityShareFooter, obj7);
    return tmp11(tmp12, obj);
  }
}
const View = react_native.View;
const DraftType = DraftStore.DraftType;
const AbortCodes = Constants.AbortCodes;
const UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, preview: obj4, base: { position: "relative" }, contentContainer: obj5, footer: obj6 };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
obj4 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj6 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
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
  const tmp2 = map1;
  const tmp3 = ICYMIShareModal;
  if (null != event.channel_id) {
    tmp4 = { type: "channel", id: event.channel_id };
    const obj4 = { type: "channel", id: event.channel_id };
  }
  return tmp2(tmp3, obj3);
};
export const GameShareModal = function GameShareModal(content) {
  let intl;
  content = content.content;
  let obj = {
    title: intl.string(content(1115).t["59CWHK"]),
    linkText: "",
    forwardToChannel: function() {
      return closure_0(...arguments);
    }
  };
  intl = content(1115).intl;
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
            obj3 = entry(dependencyMap[15]);
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
            const intl = entry(dependencyMap[14]).intl;
            const string = intl.string;
            const t = entry(dependencyMap[14]).t;
            if (entry) {
              stringResult = string(t.BC5vfD);
            } else {
              stringResult = string(t.F8FvUy);
            }
            const obj7 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
            open(obj7);
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
  return closure_13(ICYMIShareModal, obj);
};
