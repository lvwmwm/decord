// Module ID: 16143
// Function ID: 16144
// Name: ICYMIShareModal
// Dependencies: [32, 5, 19, 17, 2051, 5201, 5200, 1086, 10361, 4830, 21, 4837, 588, 558, 576, 9042, 1127, 16144, 4531, 1485, 4690, 7301, 5438, 4654, 4544, 16145, 6399, 11061, 11072, 5282, 5040, 10477, 1376, 7099, 8605, 1267, 5441, 6880, 8607, 1619, 1370, 7292, 5933, 5942, 10480, 2]

// Module 16143 (ICYMIShareModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl3 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1485 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import native from "native" /* 4544 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4654 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4690 */;
import MessageConstants from "MessageConstants" /* 4830 */;
import DraftStore from "DraftStore" /* 5201 */;
import components_Button_Button from "components/Button/Button" /* 5282 */;
import ThemedGradientDefault from "ThemedGradient" /* 5438 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6399 */;
import HeaderShared from "HeaderShared" /* 7292 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7301 */;
import ShareEventUtils from "ShareEventUtils" /* 9042 */;
import UserRowConstants from "UserRowConstants" /* 10361 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11061 */;
import captureScreenDefault from "captureScreen" /* 16145 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5200 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, c3, c5, c6, closure_3, content, event, title, uploads;

let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp9;
const ShareChatInputDefault = tmp9(11072);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  const obj = react2;
  const cResult = obj.c(9);
  event = event.event;
  if (cResult[0] === event.guild_id) {
    let tmp4;
    let tmp7;
    let tmp9;
    if (cResult[1] === event.id) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1127).intl;
      const stringResult = intl.string(intl3.t["7TVSLK"]);
      cResult[3] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== event.channel_id) {
      let tmp11;
      if (null != event.channel_id) {
        tmp11 = { type: "channel", id: event.channel_id };
        const obj2 = { type: "channel", id: event.channel_id };
      }
      cResult[4] = event.channel_id;
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp9) {
      let tmp12;
      if (cResult[7] === tmp4) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { title: tmp7, originDestinationId: tmp9, linkText: tmp4 };
    const tmp15 = map1(closure_18, obj3);
    cResult[6] = tmp9;
    cResult[7] = tmp4;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const obj4 = { guildId: event.guild_id, guildEventId: event.id };
  const tmpResult = ShareEventUtils;
  const result = tmpResult.SHARE_EVENT_DETAILS_LINK(obj4);
  cResult[0] = event.guild_id;
  cResult[1] = event.id;
  cResult[2] = result;
  tmp4 = result;
}) : ((event) => {
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
  const tmp3 = closure_18;
  if (null != event.channel_id) {
    tmp4 = { type: "channel", id: event.channel_id };
    const obj4 = { type: "channel", id: event.channel_id };
  }
  return tmp2(tmp3, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  let first;
  let tmp6;
  const tmp = content;
  let obj = content(576);
  const cResult = obj.c(3);
  content = content.content;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1127).intl;
    let stringResult = intl.string(tmp(1127).t["59CWHK"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== content) {
    let obj2 = {
      title: first,
      linkText: "",
      forwardToChannel: function() {
          return closure_0(...arguments);
        }
    };
    let tmp9 = _asyncToGenerator;
    let closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj6;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let entry;
          let closure_1;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              entry = undefined;
              closure_1 = undefined;
              c4 = 1;
              const obj4 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj6.sendMessageWithEmbed(obj4), done: false };
              obj6 = entry(dependencyMap[17]);
              return obj5;
            }
          } else {
            if (1 === c5) {
              let stringResult;
              c4 = 0;
              entry = closure_3;
              const tmp9 = null != entry.body && entry.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
              closure_1 = tmp9;
              const open = ToastActionCreatorsDefault.open;
              const intl = entry(dependencyMap[16]).intl;
              const string = intl.string;
              const t = entry(dependencyMap[16]).t;
              if (closure_1) {
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_3 = tmp27;
          if (0 === c4) {
            c6 = 3;
            throw tmp27;
          } else {
            c5 = 1;
          }
        }
      }
    });
    const tmp10 = closure_13(closure_18, obj2);
    cResult[1] = content;
    cResult[2] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((content) => {
  let intl;
  content = content.content;
  let obj = {
    title: intl.string(content(1127).t["59CWHK"]),
    linkText: "",
    forwardToChannel: function() {
      return closure_0(...arguments);
    }
  };
  intl = content(1127).intl;
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
        return { value: "IconComponent", done: null };
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
            obj3 = entry(dependencyMap[17]);
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
            const intl = entry(dependencyMap[16]).intl;
            const string = intl.string;
            const t = entry(dependencyMap[16]).t;
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
          return { value: "IconComponent", done: null };
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
  return closure_13(closure_18, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items1;
  let obj11;
  let obj7;
  let obj9;
  let render;
  let setUri;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(28);
  ({ render, setUri } = arg0);
  const tmp4 = closure_15();
  const ref = react.useRef(null);
  const obj2 = react;
  if (cResult[0] !== setUri) {
    const fn = function t() {
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
    };
    const items = [setUri];
    cResult[0] = setUri;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = obj2.useEffect(tmp6, tmp7);
  const width = useWindowDimensionsDefault().width;
  const tmp10 = useColorThemeBackgroundDefault();
  const tmpResult = ClientThemesOverrides;
  const clientThemesOverride = tmpResult.useClientThemesOverride();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { position: "absolute", top: -1000, overflow: "hidden" };
    cResult[3] = obj3;
    tmp12 = obj3;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== width) {
    const obj4 = { width };
    cResult[4] = width;
    cResult[5] = obj4;
    tmp13 = obj4;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.preview) {
    let tmp14;
    let tmp15;
    let tmp16;
    if (cResult[7] === tmp13) {
      tmp14 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { fileName: "icymi_content", format: "png", quality: 1 };
      cResult[9] = obj5;
      tmp15 = obj5;
    } else {
      tmp15 = cResult[9];
    }
    const _Symbol2 = Symbol;
    const base = tmp4.base;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj7 };
      obj7 = { dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7, light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8 };
      const tmp9Result = ThemedGradientDefault;
      const tmp19 = map1(tmp9Result, obj6);
      cResult[10] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.contentContainer) {
      let tmp20;
      let tmp21;
      if (cResult[12] === clientThemesOverride) {
        tmp20 = cResult[13];
      }
      if (cResult[14] !== render) {
        const renderResult = render();
        cResult[14] = render;
        cResult[15] = renderResult;
        tmp21 = renderResult;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] === tmp21) {
        let tmp23;
        if (cResult[17] === tmp20) {
          tmp23 = cResult[18];
        }
        if (cResult[19] === tmp10) {
          let tmp27;
          if (cResult[20] === tmp23) {
            tmp27 = cResult[21];
          }
          if (cResult[22] === tmp4.base) {
            let tmp30;
            if (cResult[23] === tmp27) {
              tmp30 = cResult[24];
            }
            if (cResult[25] === tmp30) {
              let tmp36;
              if (cResult[26] === tmp14) {
                tmp36 = cResult[27];
              }
              return tmp36;
            }
            const obj8 = { style: tmp12, children: map1(View, obj9) };
            obj9 = { style: tmp14, children: tmp30 };
            const tmp39 = map1(View, obj8);
            cResult[25] = tmp30;
            cResult[26] = tmp14;
            cResult[27] = tmp39;
            tmp36 = tmp39;
          }
          const obj10 = { ref, options: tmp15, children: authStore2(View, obj11) };
          obj11 = { style: base, children: items1 };
          items1 = [tmp16, tmp27];
          const tmp9Result2 = captureScreenDefault;
          const tmp35 = map1(tmp9Result2, obj10);
          cResult[22] = tmp4.base;
          cResult[23] = tmp27;
          cResult[24] = tmp35;
          tmp30 = tmp35;
        }
        const obj12 = { gradient: tmp10, children: tmp23 };
        const tmp29 = map1(native.ThemeContextProvider, obj12);
        cResult[19] = tmp10;
        cResult[20] = tmp23;
        cResult[21] = tmp29;
        tmp27 = tmp29;
      }
      const obj13 = { style: tmp20, children: tmp21 };
      const tmp26 = map1(View, obj13);
      cResult[16] = tmp21;
      cResult[17] = tmp20;
      cResult[18] = tmp26;
      tmp23 = tmp26;
    }
    const items2 = [tmp4.contentContainer, clientThemesOverride];
    cResult[11] = tmp4.contentContainer;
    cResult[12] = clientThemesOverride;
    cResult[13] = items2;
    tmp20 = items2;
  }
  const items3 = [tmp4.preview, tmp13];
  cResult[6] = tmp4.preview;
  cResult[7] = tmp13;
  cResult[8] = items3;
  tmp14 = items3;
}) : ((setUri) => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let count;
  let first1;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isSending;
  let items;
  let onSend;
  let textInputRef;
  const obj = react2;
  const cResult = obj.c(29);
  ({ count, isSending, onSend } = arg0);
  const tmp4 = closure_15();
  const tmp5 = _slicedToArray(react.useState(""), 2);
  const first = tmp5[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first1).insets;
  const tmpResult = useShareChatInputActions;
  const shareChatInputActions = tmpResult.useShareChatInputActions(tmp7);
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  if (cResult[1] === first) {
    let tmp11;
    let tmp12;
    let tmp15;
    if (cResult[2] === onSend) {
      tmp11 = cResult[3];
    }
    if (cResult[4] !== count) {
      let stringResult;
      if (count <= 1) {
        const intl2 = tmp(1127).intl;
        stringResult = intl2.string(tmp(1127).t.TXNS7S);
      } else {
        const intl = tmp(1127).intl;
        const obj3 = { count };
        stringResult = intl.formatToPlainString(tmp(1127).t.jWtYUm, obj3);
      }
      cResult[4] = count;
      cResult[5] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[5];
    }
    const sum = tmp4.footer.paddingVertical + insets.bottom;
    if (cResult[6] !== sum) {
      const obj4 = { paddingBottom: sum };
      cResult[6] = sum;
      cResult[7] = obj4;
      tmp15 = obj4;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp4.footer) {
      let tmp16;
      if (cResult[9] === tmp15) {
        tmp16 = cResult[10];
      }
      if (0 === count) {
        return null;
      } else {
        if (cResult[11] === handleMessageBlur) {
          if (cResult[12] === handleMessageFocus) {
            if (cResult[13] === handlePressEmoji) {
              if (cResult[14] === handleSelectionChange) {
                if (cResult[15] === tmp11) {
                  if (cResult[16] === isSending) {
                    if (cResult[17] === first) {
                      let tmp18;
                      if (cResult[18] === textInputRef) {
                        tmp18 = cResult[19];
                      }
                      let tmp21;
                      if (!isSending) {
                        tmp21 = tmp11;
                      }
                      if (cResult[20] === isSending) {
                        if (cResult[21] === tmp12) {
                          if (cResult[22] === 0 === count) {
                            let tmp22;
                            if (cResult[23] === tmp21) {
                              tmp22 = cResult[24];
                            }
                            if (cResult[25] === tmp16) {
                              if (cResult[26] === tmp22) {
                                let tmp25;
                                if (cResult[27] === tmp18) {
                                  tmp25 = cResult[28];
                                }
                                return tmp25;
                              }
                            }
                            const obj5 = { style: tmp16, children: items };
                            items = [tmp18, tmp22];
                            const tmp28 = authStore2(View, obj5);
                            cResult[25] = tmp16;
                            cResult[26] = tmp22;
                            cResult[27] = tmp18;
                            cResult[28] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                      }
                      const obj6 = { variant: "primary", size: "md", text: tmp12, disabled: 0 === count, onPress: tmp21, loading: isSending };
                      const tmp24 = map1(components_Button_Button.Button, obj6);
                      cResult[20] = isSending;
                      cResult[21] = tmp12;
                      cResult[22] = 0 === count;
                      cResult[23] = tmp21;
                      cResult[24] = tmp24;
                      tmp22 = tmp24;
                    }
                  }
                }
              }
            }
          }
        }
        const obj7 = { inputRef: textInputRef, text: first, onChange: tmp5[1], onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: tmp11, disabled: isSending };
        const tmp20 = map1(ShareChatInputDefault, obj7);
        cResult[11] = handleMessageBlur;
        cResult[12] = handleMessageFocus;
        cResult[13] = handlePressEmoji;
        cResult[14] = handleSelectionChange;
        cResult[15] = tmp11;
        cResult[16] = isSending;
        cResult[17] = first;
        cResult[18] = textInputRef;
        cResult[19] = tmp20;
        tmp18 = tmp20;
      }
    }
    const items1 = [tmp4.footer, tmp15];
    cResult[8] = tmp4.footer;
    cResult[9] = tmp15;
    cResult[10] = items1;
    tmp16 = items1;
  }
  const fn = function b() {
    onSend(first);
  };
  cResult[1] = first;
  cResult[2] = onSend;
  cResult[3] = fn;
  tmp11 = fn;
}) : ((arg0) => {
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
    const intl2 = tmp7(1127).intl;
    stringResult = intl2.string(tmp7(1127).t.TXNS7S);
  } else {
    const intl = tmp7(1127).intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(tmp7(1127).t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: items2 };
    const obj4 = { inputRef: textInputRef, text: first, onChange: tmp2[1], onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    items2 = [map1(ShareChatInputDefault, obj4), ];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: 0 === count, onPress: tmp17, loading: isSending };
    tmp17 = undefined;
    const Button = tmp7(5282).Button;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let first;
  let first1;
  let linkText;
  let originDestinationId;
  let render;
  let obj = title(render[14]);
  const cResult = obj.c(40);
  title = title.title;
  ({ originDestinationId, linkText } = title);
  render = title.render;
  const forwardToChannel = title.forwardToChannel;
  const onShare = title.onShare;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp3 = forwardToChannel(first1.useState(first), 2);
  first1 = tmp3[0];
  let tmp5 = forwardToChannel(first1.useState(false), 2);
  [r10037, View] = tmp5;
  let tmp6 = forwardToChannel(first1.useState(null), 2);
  const first2 = tmp6[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const arr = linkText(render[30]);
        arr.pop();
      }
    }
    let num2 = 1;
    cResult[1] = M;
    let tmp8 = M;
  } else {
    class M {
      constructor() {
        const arr = linkText(render[30]);
        arr.pop();
      }
    }
  }
  if (cResult[2] === forwardToChannel) {
    class M {
      constructor() {
        const arr = linkText(render[30]);
        arr.pop();
      }
    }
  }
  let closure_0 = onShare(function*(arg0, value) {
    let closure_1;
    let v3;
    closure_0 = arg0;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
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
              let closure_2 = tmp;
              const flag = true;
              const tmp31 = closure_1_6(true);
              let tmp7 = null == closure_2;
              if (!tmp7) {
                tmp7 = null != first2;
              }
              if (tmp7) {
                const tmp8 = globalThis;
                const tmp10 = closure_0;
                c3 = 1;
                c4 = 1;
                let obj4 = { value: Promise.all(first1.map(closure_0(render[31]).getOrResolveChannelIdFromDestinationId)), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const mapped = value.map((item) => channel.getChannel(item));
            const found = mapped.filter(closure_0(render[32]).isNotNullish);
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
                    return { value: "IconComponent", done: null };
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
                          let obj2 = tmp2(closure_3_2[33]);
                          const parsed = obj2.parse(tmp31, combined);
                          if (null == closure_2_3) {
                            const tmp13 = null != closure_2_2 && null != originalUri;
                            uploads = undefined;
                            if (tmp13) {
                              const obj6 = { channelId: closure_0.id, file: obj7, draftType: closure_3_8.ChannelMessage };
                              obj7 = { uri: originalUri, originalUri, id: obj5.v4(), platform: closure_3_0(closure_3_2[36]).UploadPlatform.REACT_NATIVE };
                              const addFile = tmp2(closure_3_2[34]).addFile;
                              const tmp7Result = tmp2(closure_3_2[34]);
                              obj5 = closure_3_0(closure_3_2[35]);
                              addFile(obj6);
                              uploads = uploads.getUploads(tmp31.id, closure_3_8.ChannelMessage);
                              const tmp7Result3 = tmp2(closure_3_2[34]);
                              tmp7Result3.clearAll(closure_0.id, closure_3_8.ChannelMessage);
                            }
                            const tmp7Result4 = tmp2(closure_3_2[37]);
                            const obj8 = {
                              location: constants.ICYMI,
                              attachmentsToUpload: uploads,
                              onAttachmentUploadError(file, code, reason) {
                                            const obj = closure_2_0(closure_2_2[38]);
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
                      let obj = { value, done: true };
                      return obj;
                    }
                    c1 = 3;
                    return { value: "IconComponent", done: null };
                  } catch (tmp27) {
                    c1 = 3;
                    throw tmp27;
                  }
                }
              });
              return function() {
                return closure_0(...arguments);
              };
            })());
            const arr3 = linkText(render[30]);
            arr3.pop();
            if (null != c4) {
              const tmp27 = c4;
              const tmp28 = c4();
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp12) {
          c4 = 3;
          throw tmp12;
        }
      }
    }
  });
  function handleSendForwards() {
    return closure_0(...arguments);
  }
  cResult[2] = forwardToChannel;
  cResult[3] = linkText;
  cResult[4] = onShare;
  cResult[5] = render;
  cResult[6] = first1;
  cResult[7] = first2;
  cResult[8] = handleSendForwards;
}) : ((title) => {
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
  let obj = function _handleSendForwards2() {
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
            return { value: "IconComponent", done: null };
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
                  let obj4 = { value: Promise.all(first.map(closure_0(closure_2[31]).getOrResolveChannelIdFromDestinationId)), done: false };
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
              const found = mapped.filter(closure_0(closure_2[32]).isNotNullish);
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
                      return { value: "IconComponent", done: null };
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
                            let obj2 = tmp2(closure_3_2[33]);
                            const parsed = obj2.parse(tmp31, combined);
                            if (null == closure_2_3) {
                              const tmp13 = null != closure_2_2 && null != originalUri;
                              uploads = undefined;
                              if (tmp13) {
                                const obj6 = { channelId: closure_0.id, file: obj7, draftType: closure_3_8.ChannelMessage };
                                obj7 = { uri: originalUri, originalUri, id: obj5.v4(), platform: closure_3_0(closure_3_2[36]).UploadPlatform.REACT_NATIVE };
                                const addFile = tmp2(closure_3_2[34]).addFile;
                                const tmp7Result = tmp2(closure_3_2[34]);
                                obj5 = closure_3_0(closure_3_2[35]);
                                addFile(obj6);
                                uploads = uploads.getUploads(tmp31.id, closure_3_8.ChannelMessage);
                                const tmp7Result3 = tmp2(closure_3_2[34]);
                                tmp7Result3.clearAll(closure_0.id, closure_3_8.ChannelMessage);
                              }
                              const tmp7Result4 = tmp2(closure_3_2[37]);
                              const obj8 = {
                                location: constants.ICYMI,
                                attachmentsToUpload: uploads,
                                onAttachmentUploadError(file, code, reason) {
                                              obj = closure_2_0(closure_2_2[38]);
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
                      return { value: "IconComponent", done: null };
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
              const arr3 = tmp2(closure_2[30]);
              arr3.pop();
              if (null != closure_130_4) {
                const tmp27 = closure_130_4;
                const tmp28 = closure_130_4();
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
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
  const Header = title(render[43]).Header;
  let obj3 = title(render[40]);
  num = 0;
  const tmp11 = closure_14;
  if (!obj3.isIOS()) {
    num = rect.top;
  }
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp8);
  tmp14Result = tmp14(tmp10[42]);
  items1 = [tmp13(Header, obj4), , , ];
  let tmp13Result = null != render;
  if (tmp13Result) {
    let obj5 = { render, setUri: tmp6 };
    tmp13Result = tmp13(closure_16, obj5);
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
  items1[3] = tmp13(closure_17, obj7);
  return tmp11(tmp12, obj);
});
let closure_18 = tmp6;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default tmp6;
export const GuildEventShareModal = tmp4;
export const GameShareModal = tmp5;
