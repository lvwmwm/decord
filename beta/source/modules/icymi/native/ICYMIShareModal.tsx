// Module ID: 16844
// Function ID: 16845
// Name: ICYMIShareModal
// Dependencies: [32, 5, 19, 17, 2045, 5107, 5106, 1078, 11162, 4751, 21, 4758, 580, 558, 568, 9850, 1119, 16845, 4458, 1482, 4612, 8121, 5343, 4577, 4471, 16846, 7224, 11818, 11826, 5188, 4961, 11279, 1374, 7923, 9419, 1259, 5346, 7703, 9421, 1616, 1368, 8112, 5839, 5848, 11282, 2]

// Module 16844 (ICYMIShareModal)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import native from "native" /* 4471 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4577 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4612 */;
import ThemedGradientDefault from "ThemedGradient" /* 5343 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 7224 */;
import HeaderShared from "HeaderShared" /* 8112 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8121 */;
import ShareEventUtils from "ShareEventUtils" /* 9850 */;
import useShareChatInputActions from "useShareChatInputActions" /* 11818 */;
import _modDef16846 from "module_16846" /* 16846 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5106 */;

const require = globalThis.__r;

const ShareChatInputDefault = tmp9(11826);
require = fn;
const View = fn(17).View;
const DraftType = fn(5107).DraftType;
const AbortCodes = fn(1078).AbortCodes;
const UserRowModes = fn(11162).UserRowModes;
const MessageSendLocation = fn(4751).MessageSendLocation;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { headerLeftContainer: { paddingLeft: nativeDefault.space.PX_16 }, headerRightContainer: null, preview: null, base: null, contentContainer: null, footer: null };
let obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj2.preview = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.base = { position: "relative" };
let obj5 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.footer = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj7 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  const cResult = c.c(9);
  event = event.event;
  if (cResult[0] === event.guild_id) {
    if (cResult[1] === event.id) {
      let tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["7TVSLK"]);
      cResult[3] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== event.channel_id) {
      let tmp11;
      if (null != event.channel_id) {
        const obj2 = { type: "channel", id: event.channel_id };
        tmp11 = obj2;
      }
      cResult[4] = event.channel_id;
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === tmp9) {
      if (cResult[7] === tmp4) {
        let tmp12 = cResult[8];
      }
      return tmp12;
    }
    const obj3 = { title: tmp7, originDestinationId: tmp9, linkText: tmp4 };
    const tmp15 = __initData2(closure_18, obj3);
    cResult[6] = tmp9;
    cResult[7] = tmp4;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const result = ShareEventUtils.SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  cResult[0] = event.guild_id;
  cResult[1] = event.id;
  cResult[2] = result;
  tmp4 = result;
}) : ((event) => {
  event = event.event;
  const obj3 = { title: null, originDestinationId: null, linkText: null };
  const result = ShareEventUtils.SHARE_EVENT_DETAILS_LINK({ guildId: event.guild_id, guildEventId: event.id });
  const intl = util.intl;
  obj3.title = intl.string(util.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    const obj4 = { type: "channel", id: event.channel_id };
    tmp4 = obj4;
  }
  obj3.originDestinationId = tmp4;
  obj3.linkText = result;
  return __initData2(closure_18, obj3);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ render, setUri } = arg0);
  const tmp4 = closure_15();
  const ref = noop.useRef(null);
  if (cResult[0] !== setUri) {
    const fn = function t() {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (current != null) {
          const capture = current.capture;
          if (capture != null) {
            nextPromise = capture().then((result) => {
              closure_1_0(result);
            });
            const captureResult = capture();
          }
        }
        return nextPromise;
      }, 500);
    };
    const items = [setUri];
    cResult[0] = setUri;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  const width = useWindowDimensionsDefault().width;
  const tmp10 = useColorThemeBackgroundDefault();
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { position: "absolute", top: -1000, overflow: "hidden" };
    cResult[3] = obj3;
    let tmp12 = obj3;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== width) {
    const obj4 = { width };
    cResult[4] = width;
    cResult[5] = obj4;
    let tmp13 = obj4;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp4.preview) {
    if (cResult[7] === tmp13) {
      let tmp14 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { fileName: "icymi_content", format: "png", quality: 1 };
      cResult[9] = obj5;
      let tmp15 = obj5;
    } else {
      tmp15 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
      const obj7 = { dark: tmp(4577).OverlayOpacity.LEVEL_7, light: tmp(4577).OverlayOpacity.LEVEL_8 };
      obj6.mixAmount = obj7;
      const tmp19 = __initData2(tmp9(5343), obj6);
      cResult[10] = tmp19;
      let tmp16 = tmp19;
      const tmp9Result = tmp9(5343);
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp4.contentContainer) {
      if (cResult[12] === clientThemesOverride) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] !== render) {
        const renderResult = render();
        cResult[14] = render;
        cResult[15] = renderResult;
        let tmp21 = renderResult;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] === tmp21) {
        if (cResult[17] === tmp20) {
          let tmp23 = cResult[18];
        }
        if (cResult[19] === tmp10) {
          if (cResult[20] === tmp23) {
            let tmp27 = cResult[21];
          }
          if (cResult[22] === tmp4.base) {
            if (cResult[23] === tmp27) {
              let tmp30 = cResult[24];
            }
            if (cResult[25] === tmp30) {
              if (cResult[26] === tmp14) {
                let tmp36 = cResult[27];
              }
              return tmp36;
            }
            const obj8 = { style: tmp12, children: null };
            const obj9 = { style: tmp14, children: tmp30 };
            obj8.children = __initData2(View, obj9);
            const tmp39 = __initData2(View, obj8);
            cResult[25] = tmp30;
            cResult[26] = tmp14;
            cResult[27] = tmp39;
            tmp36 = tmp39;
          }
          const obj10 = { ref, options: tmp15, children: null };
          const obj11 = { style: tmp4.base, children: null };
          const items1 = [tmp16, tmp27];
          obj11.children = items1;
          obj10.children = state(View, obj11);
          const tmp35 = __initData2(tmp9(16846), obj10);
          cResult[22] = tmp4.base;
          cResult[23] = tmp27;
          cResult[24] = tmp35;
          tmp30 = tmp35;
          const tmp9Result2 = tmp9(16846);
        }
        const obj12 = { gradient: tmp10, children: tmp23 };
        const tmp29 = __initData2(tmp(4471).ThemeContextProvider, obj12);
        cResult[19] = tmp10;
        cResult[20] = tmp23;
        cResult[21] = tmp29;
        tmp27 = tmp29;
      }
      const obj13 = { style: tmp20, children: tmp21 };
      const tmp26 = __initData2(View, obj13);
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
  setUri = setUri.setUri;
  const tmp = closure_15();
  const ref = noop.useRef(null);
  const items = [setUri];
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let nextPromise;
      if (current != null) {
        const capture = current.capture;
        if (capture != null) {
          nextPromise = capture().then((result) => {
            closure_1_0(result);
          });
          const captureResult = capture();
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: null };
  const obj3 = { style: null, children: null };
  const items1 = [tmp.preview, { width: useWindowDimensionsDefault().width }];
  obj3.style = items1;
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  const obj4 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
  const obj5 = { style: tmp.base, children: null };
  const obj6 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj7 = { dark: null, light: null };
  const tmp6 = _modDef16846;
  obj7.dark = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7;
  obj7.light = client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8;
  obj6.mixAmount = obj7;
  const items2 = [__initData2(ThemedGradientDefault, obj6), ];
  const obj8 = { gradient: tmp4, children: null };
  const obj9 = { style: null, children: setUri.render() };
  const items3 = [tmp.contentContainer, clientThemesOverride];
  obj9.style = items3;
  obj8.children = __initData2(View, obj9);
  items2[1] = __initData2(native.ThemeContextProvider, obj8);
  obj5.children = items2;
  obj4.children = state(View, obj5);
  obj3.children = __initData2(tmp6, obj4);
  obj2.children = __initData2(View, obj3);
  return __initData2(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(29);
  ({ count, isSending, onSend } = arg0);
  const tmp4 = closure_15();
  [text] = noop.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    let first1 = obj2;
  } else {
    first1 = cResult[0];
  }
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp7);
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  if (cResult[1] === text) {
    if (cResult[2] === onSend) {
      let tmp11 = cResult[3];
    }
    if (cResult[4] !== count) {
      if (count <= 1) {
        const intl2 = tmp(1119).intl;
        let stringResult = intl2.string(tmp(1119).t.TXNS7S);
      } else {
        const intl = tmp(1119).intl;
        const obj3 = { count };
        stringResult = intl.formatToPlainString(tmp(1119).t.jWtYUm, obj3);
      }
      cResult[4] = count;
      cResult[5] = stringResult;
    } else {
      const sum = tmp4.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault(first1).insets.bottom;
      if (cResult[6] !== sum) {
        const obj4 = { paddingBottom: sum };
        cResult[6] = sum;
        cResult[7] = obj4;
        let tmp16 = obj4;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === tmp4.footer) {
        if (cResult[9] === tmp16) {
          let tmp17 = cResult[10];
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
                      if (cResult[17] === text) {
                        if (cResult[18] === textInputRef) {
                          let tmp19 = cResult[19];
                        }
                        let tmp22;
                        if (!isSending) {
                          tmp22 = tmp11;
                        }
                        if (cResult[20] === isSending) {
                          if (cResult[21] === tmp12) {
                            if (cResult[22] === tmp18) {
                              if (cResult[23] === tmp22) {
                                let tmp23 = cResult[24];
                              }
                              if (cResult[25] === tmp17) {
                                if (cResult[26] === tmp23) {
                                  if (cResult[27] === tmp19) {
                                    let tmp26 = cResult[28];
                                  }
                                  return tmp26;
                                }
                              }
                              const obj5 = { style: tmp17, children: null };
                              const items = [tmp19, tmp23];
                              obj5.children = items;
                              const tmp29 = state(View, obj5);
                              cResult[25] = tmp17;
                              cResult[26] = tmp23;
                              cResult[27] = tmp19;
                              cResult[28] = tmp29;
                              tmp26 = tmp29;
                            }
                          }
                        }
                        const obj6 = { variant: "primary", size: "md", text: tmp12, disabled: tmp18, onPress: tmp22, loading: isSending };
                        const tmp25 = __initData2(tmp(5188).Button, obj6);
                        cResult[20] = isSending;
                        cResult[21] = tmp12;
                        cResult[22] = tmp18;
                        cResult[23] = tmp22;
                        cResult[24] = tmp25;
                        tmp23 = tmp25;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj7 = { inputRef: textInputRef, text, onChange: tmp7, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: tmp11, disabled: isSending };
          const tmp21 = __initData2(ShareChatInputDefault, obj7);
          cResult[11] = handleMessageBlur;
          cResult[12] = handleMessageFocus;
          cResult[13] = handlePressEmoji;
          cResult[14] = handleSelectionChange;
          cResult[15] = tmp11;
          cResult[16] = isSending;
          cResult[17] = text;
          cResult[18] = textInputRef;
          cResult[19] = tmp21;
          tmp19 = tmp21;
        }
      }
      const items1 = [tmp4.footer, tmp16];
      cResult[8] = tmp4.footer;
      cResult[9] = tmp16;
      cResult[10] = items1;
      tmp17 = items1;
    }
  }
  const fn = function b() {
    onSend(first);
  };
  cResult[1] = text;
  cResult[2] = onSend;
  cResult[3] = fn;
  tmp11 = fn;
}) : ((arg0) => {
  ({ count, isSending, onSend } = arg0);
  text = undefined;
  const tmp = closure_15();
  closure_1 = tmp;
  [text] = noop.useState("");
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const shareChatInputActions = useShareChatInputActions.useShareChatInputActions(tmp4);
  let items = [text, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback = noop.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = tmp7(1119).intl;
    let stringResult = intl2.string(tmp7(1119).t.TXNS7S);
  } else {
    const intl = tmp7(1119).intl;
    const obj2 = { count };
    stringResult = intl.formatToPlainString(tmp7(1119).t.jWtYUm, obj2);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    const obj3 = { style: tmp11, children: null };
    const obj4 = { inputRef: textInputRef, text, onChange: tmp4, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback, disabled: isSending };
    const items2 = [__initData2(ShareChatInputDefault, obj4), ];
    const obj5 = { variant: "primary", size: "md", text: stringResult, disabled: tmp12, onPress: null, loading: null };
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj5.onPress = tmp17;
    obj5.loading = isSending;
    items2[1] = __initData2(tmp7(5188).Button, obj5);
    obj3.children = items2;
    tmp14Result = state(View, obj3);
  }
  return tmp14Result;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  const cResult = require("c").c(40);
  _require = title.title;
  ({ originDestinationId, linkText } = title);
  render = title.render;
  const forwardToChannel = title.forwardToChannel;
  const onShare = title.onShare;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let obj = require("c");
  first1 = forwardToChannel(first1.useState(first), 2)[0];
  let tmp3 = forwardToChannel(first1.useState(first), 2);
  [r10037, View] = forwardToChannel(first1.useState(false), 2);
  const tmp5 = forwardToChannel(first1.useState(false), 2);
  const first2 = forwardToChannel(first1.useState(null), 2)[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        arr = linkText(render[30]);
        arr1 = arr.pop();
        return;
      }
    }
    cResult[1] = M;
  } else {
    class M {
      constructor() {
        arr = linkText(render[30]);
        arr1 = arr.pop();
        return;
      }
    }
  }
  if (cResult[2] === forwardToChannel) {
    class M {
      constructor() {
        arr = linkText(render[30]);
        arr1 = arr.pop();
        return;
      }
    }
  }
  _require = onShare(function*(arg0, value) {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        v3 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_0 = title;
            View(true);
            let tmp8 = null == tmp2;
            if (!tmp8) {
              tmp8 = null != first2;
            }
            if (tmp8) {
              c3 = 1;
              v3 = 1;
              let obj4 = { value: Promise.all(first1.map(title(render[31]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            } else {
              v3 = 3;
            }
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const mapped = value.map((item) => channel.getChannel(item));
          const found = mapped.filter(title(render[32]).isNotNullish);
          const item = found.forEach((() => {
            closure_0 = c4(function*(arg0, value) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                      if (null != guildId) {
                        if (str4.trim().length > 0) {
                          const _HermesInternal = HermesInternal;
                          let combined = "" + str4 + "\n\n" + closure_2_1;
                        }
                        const parsed = tmp3(tmp2[33]).parse(tmp32, combined);
                        if (null == closure_2_3) {
                          let tmp14 = null != closure_2_2;
                          if (tmp14) {
                            tmp14 = null != originalUri;
                          }
                          uploads = undefined;
                          if (tmp14) {
                            const obj5 = { channelId: tmp32.id, file: null, draftType: null };
                            const obj7 = { uri: originalUri, originalUri, id: null, platform: null };
                            const tmp8Result = tmp8(tmp9[34]);
                            obj7.id = closure_3_0(tmp9[35]).v4();
                            obj7.platform = closure_3_0(tmp9[36]).UploadPlatform.REACT_NATIVE;
                            obj5.file = obj7;
                            obj5.draftType = closure_3_8.ChannelMessage;
                            tmp8Result.addFile(obj5);
                            uploads = uploads.getUploads(tmp32.id, closure_3_8.ChannelMessage);
                            const obj6 = closure_3_0(tmp9[35]);
                            tmp8(tmp9[34]).clearAll(tmp32.id, closure_3_8.ChannelMessage);
                            const tmp8Result3 = tmp8(tmp9[34]);
                          }
                          const tmp8Result4 = tmp8(tmp9[37]);
                          const obj8 = {
                            location: constants.ICYMI,
                            attachmentsToUpload: uploads,
                            onAttachmentUploadError(file, code, reason) {
                                          const obj = guildId(c2[38]);
                                          const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
                                        }
                          };
                          c2 = 1;
                          c1 = 1;
                          const obj9 = { value: tmp8Result4.sendMessage(tmp32.id, parsed, false, obj8), done: false };
                          return obj9;
                        } else {
                          tmp11(tmp32);
                        }
                        const obj2 = tmp3(tmp2[33]);
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
                  c1 = tmp;
                  throw tmp27;
                }
              }
            });
            return function() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })());
          linkText(render[30]).pop();
          if (null != v3) {
            v3();
          }
          const arr3 = linkText(render[30]);
        }
        v3 = 3;
        let obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        v3 = tmp;
        throw tmp13;
      }
    }
  });
  function handleSendForwards() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[2] = forwardToChannel;
  cResult[3] = linkText;
  cResult[4] = onShare;
  cResult[5] = render;
  cResult[6] = first1;
  cResult[7] = first2;
  cResult[8] = handleSendForwards;
}) : ((originDestination) => {
  const title = originDestination.title;
  ({ linkText: importDefault, render } = originDestination);
  ({ forwardToChannel: _slicedToArray, onShare: asyncGeneratorStep } = originDestination);
  let first;
  c7 = undefined;
  closure_8 = async function _handleSendForwards2(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
            closure_129_0 = title;
            View(true);
            let tmp8 = null == render;
            if (!tmp8) {
              tmp8 = null != ChannelStore;
            }
            if (tmp8) {
              c3 = 1;
              c4 = 1;
              let obj4 = { value: Promise.all(first.map(title(tmp2[31]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const mapped = value.map((item) => channel.getChannel(item));
          const found = mapped.filter(title(tmp2[32]).isNotNullish);
          const item = found.forEach((() => {
            closure_0 = c4(function*(arg0, value) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                      if (null != guildId) {
                        if (str4.trim().length > 0) {
                          const _HermesInternal = HermesInternal;
                          let combined = "" + str4 + "\n\n" + closure_2_1;
                        }
                        const parsed = tmp3(tmp2[33]).parse(tmp32, combined);
                        if (null == closure_2_3) {
                          let tmp14 = null != closure_2_2;
                          if (tmp14) {
                            tmp14 = null != originalUri;
                          }
                          uploads = undefined;
                          if (tmp14) {
                            const obj5 = { channelId: tmp32.id, file: null, draftType: null };
                            const obj7 = { uri: originalUri, originalUri, id: null, platform: null };
                            const tmp8Result = tmp8(tmp9[34]);
                            obj7.id = closure_3_0(tmp9[35]).v4();
                            obj7.platform = closure_3_0(tmp9[36]).UploadPlatform.REACT_NATIVE;
                            obj5.file = obj7;
                            obj5.draftType = closure_3_8.ChannelMessage;
                            tmp8Result.addFile(obj5);
                            uploads = uploads.getUploads(tmp32.id, closure_3_8.ChannelMessage);
                            const obj6 = closure_3_0(tmp9[35]);
                            tmp8(tmp9[34]).clearAll(tmp32.id, closure_3_8.ChannelMessage);
                            const tmp8Result3 = tmp8(tmp9[34]);
                          }
                          const tmp8Result4 = tmp8(tmp9[37]);
                          const obj8 = {
                            location: constants.ICYMI,
                            attachmentsToUpload: uploads,
                            onAttachmentUploadError(file, code, reason) {
                                          const obj = guildId(c2[38]);
                                          const result = obj.handleUploadMessageAttachmentsErrors({ file, guildId: guildId.getGuildId(), analyticsLocations: [], code, reason });
                                        }
                          };
                          c2 = 1;
                          c1 = 1;
                          const obj9 = { value: tmp8Result4.sendMessage(tmp32.id, parsed, false, obj8), done: false };
                          return obj9;
                        } else {
                          tmp11(tmp32);
                        }
                        const obj2 = tmp3(tmp2[33]);
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
                  c1 = tmp;
                  throw tmp27;
                }
              }
            });
            return function(arg0) {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
          })());
          tmp3(tmp2[30]).pop();
          if (null != closure_130_4) {
            closure_130_4();
          }
          const arr3 = tmp3(tmp2[30]);
        }
        c4 = 3;
        let obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c4 = tmp;
        throw tmp13;
      }
    }
  };
  const tmp = _slicedToArray(first.useState([]), 2);
  first = tmp[0];
  const tmp2 = _slicedToArray(first.useState(false), 2);
  closure_6 = tmp2[1];
  [c7, tmp4] = first.useState(null);
  const callback = first.useCallback(() => {
    require("ModalActionCreators").pop();
  }, []);
  const tmp3 = _slicedToArray(first.useState(null), 2);
  const rect = require("useSafeAreaInsets")();
  let height = require("useWindowDimensions")().height;
  const items = [rect.bottom, height];
  let obj = {
    style: first.useMemo(() => {
      height = "100%";
      if (obj.isAndroid()) {
        height = height + rect.bottom;
      }
      return { height };
    }, items),
    children: null
  };
  let obj4 = {
    title,
    headerTitle() {
      return __initData2(HeaderShared.GenericHeaderTitle, { title });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const tmp10 = closure_6;
  const tmp12 = title;
  const tmp6 = closure_15();
  const tmp9 = closure_14;
  let num = 0;
  if (!obj3.isIOS()) {
    num = rect.top;
  }
  obj4.headerStatusBarHeight = num + require("native").space.PX_8;
  obj3 = title(render[40]);
  obj4.headerLeft = tmp12(render[42]).getHeaderCloseButton(callback);
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp6);
  const items1 = [closure_13(title(render[43]).Header, obj4), , , ];
  let tmp11Result = null != render;
  if (tmp11Result) {
    let obj5 = { render, setUri: tmp4 };
    tmp11Result = tmp11(closure_16, obj5);
  }
  items1[1] = tmp11Result;
  let obj6 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp[1], originDestination: originDestination.originDestinationId, insetEnd: null, disableGradient: true, disableStickySections: true };
  const tmp12Result = tmp12(render[42]);
  const sum = rect.bottom + tmp7(tmp8[12]).space.PX_8;
  obj6.insetEnd = sum + require("native").space.PX_96;
  items1[2] = closure_13(require("SearchableDestinationList"), obj6);
  items1[3] = closure_13(closure_17, {
    count: first.length,
    isSending: tmp2[0],
    onSend: function handleSendForwards(arg0) {
      const self = this;
      const apply = closure_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  });
  obj.children = items1;
  return tmp9(tmp10, obj);
});
let closure_18 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default tmp5;
export const GuildEventShareModal = tmp3;
export const GameShareModal = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = require("c").c(3);
  content = content.content;
  _require = content;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1119).intl;
    let stringResult = intl.string(tmp(1119).t["59CWHK"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== content) {
    let obj2 = { title: first, linkText: "", forwardToChannel: null };
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              c4 = 1;
              const obj5 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
              c5 = 2;
              c6 = 1;
              const obj6 = { value: entry(16845).sendMessageWithEmbed(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_129_0 = closure_3;
            let tmp12 = null != closure_129_0.body;
            if (tmp12) {
              tmp12 = closure_129_0.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
            }
            closure_129_1 = tmp12;
            const intl = entry(1119).intl;
            const string = intl.string;
            let t = entry(1119).t;
            if (closure_129_1) {
              let stringResult = string(t.BC5vfD);
            } else {
              stringResult = string(t.F8FvUy);
            }
            const obj8 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
            t = ToastActionCreatorsDefault.open(obj8);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else {
            if (arg0 !== 2) {
              c4 = 0;
              c6 = 3;
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    obj2.forwardToChannel = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const tmp10 = closure_13(closure_18, obj2);
    cResult[1] = content;
    cResult[2] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((content) => {
  _require = content.content;
  let obj = { title: null, linkText: "", forwardToChannel: null };
  let intl = require("util").intl;
  obj.title = intl.string(require("util").t["59CWHK"]);
  _require = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const obj6 = { channel: entry, content: "", entry, whenReady: false, doNotNotifyOnError: true, location: constants2.ICYMI };
            c5 = 2;
            c6 = 1;
            const obj7 = { value: entry(16845).sendMessageWithEmbed(obj6), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          let tmp12 = null != closure_129_1.body;
          if (tmp12) {
            tmp12 = closure_129_1.body.code === constants.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
          }
          closure_129_0 = tmp12;
          const intl = entry(1119).intl;
          const string = intl.string;
          let t = entry(1119).t;
          if (closure_129_0) {
            let stringResult = string(t.BC5vfD);
          } else {
            stringResult = string(t.F8FvUy);
          }
          const obj8 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: stringResult };
          t = ToastActionCreatorsDefault.open(obj8);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            c4 = 0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_3 = tmp33;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp33;
        } else {
          c5 = tmp;
        }
      }
    }
  });
  obj.forwardToChannel = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return closure_13(closure_18, obj);
});
