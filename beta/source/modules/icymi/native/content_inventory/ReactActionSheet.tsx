// Module ID: 16148
// Function ID: 16149
// Name: ReactActionSheet
// Dependencies: [11615, 5, 32, 19, 17, 6573, 1381, 21, 1127, 4837, 588, 558, 576, 9640, 7186, 8216, 5436, 7591, 7803, 9644, 4690, 7301, 1485, 4833, 5438, 4654, 16141, 4544, 16145, 5896, 1403, 6021, 4680, 7362, 4778, 14748, 6624, 16094, 2]
// Exports: getStatusReplyContent

// Module 16148 (ReactActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl6 from "intl" /* 1127 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6573 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7186 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7803 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9640 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 11615 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, content;

let c10;
let closure_12;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
let unpackModuleId;
const ICYMIContext = tmp(16094);
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { width: "100%", display: "flex", alignItems: "center", padding: 8 }, container: { gap: 12 }, preview: obj2, loading: { opacity: 0.5 }, base: { position: "relative" }, contentContainer: obj3, inputRow: { flexDirection: "row", alignItems: "center", gap: 8 }, input: obj4, emojis: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, submitting: { opacity: 0.6 }, emoji: obj5, defaultEmoji: { width: 24, height: 24 }, emojiImage: { resizeMode: "contain", width: 24, height: 24 }, emojiText: { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 } };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj5 = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let onPressEmoji;
  let obj = channel(onPressEmoji[12]);
  const cResult = obj.c(12);
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  onPressEmoji = channel.onPressEmoji;
  const disabled = channel.disabled;
  const tmp4 = closure_13();
  if (cResult[0] === channel) {
    if (cResult[1] === onOpenPicker) {
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp10;
      if (cResult[2] === onPressEmoji) {
        tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.emoji) {
        const items = [tmp4.emoji];
        cResult[4] = tmp4.emoji;
        cResult[5] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(channel(onPressEmoji[8]).t.lfIHs4);
        cResult[6] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" });
        cResult[7] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === disabled) {
        if (cResult[9] === tmp5) {
          let tmp13;
          if (cResult[10] === tmp6) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      let obj2 = { onPress: tmp5, style: tmp6, accessible: true, accessibilityLabel: tmp8, disabled, children: tmp10 };
      const tmp15 = closure_10(channel(onPressEmoji[16]).PressableHighlight, obj2);
      cResult[8] = disabled;
      cResult[9] = tmp5;
      cResult[10] = tmp6;
      cResult[11] = tmp15;
      tmp13 = tmp15;
    }
  }
  const fn = function n() {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const obj2 = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL };
    const result = obj.openEmojiPickerActionSheet(obj2);
  };
  cResult[0] = channel;
  cResult[1] = onOpenPicker;
  cResult[2] = onPressEmoji;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((channel) => {
  let intl;
  let items1;
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const disabled = channel.disabled;
  const items = [channel, onPressEmoji, onOpenPicker];
  const tmp = closure_13();
  const callback = react.useCallback(() => {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const obj2 = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL };
    const result = obj.openEmojiPickerActionSheet(obj2);
  }, items);
  let obj = { onPress: callback, style: items1, accessible: true, accessibilityLabel: intl.string(channel(onPressEmoji[8]).t.lfIHs4), disabled, children: closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" }) };
  items1 = [tmp.emoji];
  const PressableHighlight = channel(onPressEmoji[16]).PressableHighlight;
  intl = channel(onPressEmoji[8]).intl;
  return closure_10(PressableHighlight, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  let author;
  let channel;
  let closure_10;
  let closure_4;
  let closure_6;
  let disabled;
  let onPressEmoji;
  let tmp20;
  let tmp21;
  let tmp7;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(71);
  content = content.content;
  ({ author, channel, onPressEmoji } = content);
  const sendMessage = content.sendMessage;
  _asyncToGenerator = closure_13();
  let obj2 = react;
  const tmp4 = closure_13();
  [_slicedToArray, react] = react.useState(false);
  if (cResult[0] !== content.content_type) {
    let tmp10;
    let tmp14;
    let str = "unknown";
    _require = "unknown";
    let tmp9 = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[8]).intl;
      const stringResult = intl.string(tmp(onPressEmoji[8]).t["5IEsGx"]);
      cResult[3] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    const content_type = content.content_type;
    if (tmp(onPressEmoji[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(onPressEmoji[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(onPressEmoji[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          let tmp12;
          _require = "hotwheels_custom_status";
          const _Symbol3 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[8]).intl;
            const stringResult1 = intl2.string(tmp(onPressEmoji[8]).t.umDRYM);
            cResult[5] = stringResult1;
            tmp12 = stringResult1;
          } else {
            tmp12 = cResult[5];
          }
          tmp10 = tmp12;
          str = "hotwheels_custom_status";
        }
      }
      cResult[0] = content.content_type;
      cResult[1] = str;
      cResult[2] = tmp10;
      tmp7 = str;
    }
    _require = "hotwheels_gaming_activity";
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[8]).intl;
      const stringResult2 = intl3.string(tmp(onPressEmoji[8]).t.XC5YE5);
      cResult[4] = stringResult2;
      tmp14 = stringResult2;
    } else {
      tmp14 = cResult[4];
    }
    tmp10 = tmp14;
    str = "hotwheels_gaming_activity";
  } else {
    _require = cResult[1];
  }
  const tmp5Result = _slicedToArray(obj2.useState(""), 2);
  const first = tmp5Result[0];
  let closure_8 = tmp5Result[1];
  const ref = obj2.useRef(null);
  [r10094, closure_10] = _slicedToArray(obj2.useState(null), 2);
  _slicedToArray(obj2.useState(null), 2);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        timerId = setTimeout(() => {
          const current = ref.current;
          let nextPromise;
          if (current != null) {
            const capture = current.capture;
            if (capture != null) {
              const captureResult = capture();
              nextPromise = captureResult.then(() => { /* body not rendered: F151616 */ });
            }
          }
          return nextPromise;
        }, 500);
        return;
      }
    }
    let items = [];
    cResult[6] = M;
    cResult[7] = items;
    tmp21 = items;
    tmp20 = M;
  } else {
    class M {
      constructor() {
        timerId = setTimeout(() => {
          const current = ref.current;
          let nextPromise;
          if (current != null) {
            const capture = current.capture;
            if (capture != null) {
              const captureResult = capture();
              nextPromise = captureResult.then(() => { /* body not rendered: F151616 */ });
            }
          }
          return nextPromise;
        }, 500);
        return;
      }
    }
    tmp21 = cResult[7];
  }
  const effect = obj2.useEffect(tmp20, tmp21);
  if (cResult[8] === content.id) {
    class M {
      constructor() {
        timerId = setTimeout(() => {
          const current = ref.current;
          let nextPromise;
          if (current != null) {
            const capture = current.capture;
            if (capture != null) {
              const captureResult = capture();
              nextPromise = captureResult.then(() => { /* body not rendered: F151616 */ });
            }
          }
          return nextPromise;
        }, 500);
        return;
      }
    }
  }
  _require = _asyncToGenerator(async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
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
      try {
        c2 = 2;
        if (0 === user) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            itemType = tmp;
            closure_1_6(true);
            const obj5 = content(onPressEmoji[18]);
            obj5.itemInteracted(user.id, itemType, "press_reply_send");
            const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
            const obj6 = content(onPressEmoji[18]);
            obj6.feedItemActioned(obj4);
            user = 1;
            c2 = 1;
            const obj7 = { value: sendMessage(first), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_1_6(false);
          closure_1_8("");
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[8] = content.id;
  cResult[9] = tmp7;
  cResult[10] = first;
  cResult[11] = sendMessage;
  cResult[12] = fn;
}) : ((content) => {
  let SendMessageIcon;
  let _undefined;
  let author;
  let c10;
  let channel;
  let closure_5;
  let first;
  let formatToPlainString;
  let intl5;
  let items10;
  let items4;
  let items5;
  let items6;
  let items8;
  let items9;
  let loading;
  let m3dK5W;
  let obj10;
  let obj12;
  let obj13;
  let obj19;
  let obj21;
  let obj3;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let tmp14;
  let tmp19Result;
  let tmp5Result4;
  content = content.content;
  let onPressEmoji = content.onPressEmoji;
  let sendMessage = content.sendMessage;
  loading = undefined;
  _slicedToArray = undefined;
  let hotwheels_gaming_activity;
  let first1;
  let closure_8;
  let ref;
  c10 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = closure_13();
  let closure_3 = tmp;
  let obj = hotwheels_gaming_activity;
  const tmp2 = _slicedToArray;
  [loading, _slicedToArray] = hotwheels_gaming_activity.useState(false);
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  const intl = content(sendMessage[8]).intl;
  const content_type = content.content_type;
  const stringResult = intl.string(content(sendMessage[8]).t["5IEsGx"]);
  if (content(sendMessage[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    let stringResult1;
    let tmp23Result;
    if (content(sendMessage[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      stringResult1 = stringResult;
      if (content(sendMessage[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[8]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[8]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp2Result = tmp2(obj.useState(""), 2);
    first1 = tmp2Result[0];
    closure_8 = tmp10;
    let tmp11 = null;
    ref = obj.useRef(null);
    [tmp14, c10] = tmp2(obj.useState(null), 2);
    tmp2(obj.useState(null), 2);
    const effect = obj.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (current != null) {
          const capture = current.capture;
          if (capture != null) {
            const captureResult = capture();
            nextPromise = captureResult.then((result) => closure_1_10(result));
          }
        }
        return nextPromise;
      }, 500);
    }, []);
    let items = [content.id, str, first1, sendMessage];
    const callback = obj.useCallback(loading(function*(arg0, value) {
      let c2;
      let v1;
      if (sendMessage === 2) {
        sendMessage = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          sendMessage = 2;
          if (0 === onPressEmoji) {
            if (arg0 === 1) {
              sendMessage = 3;
              throw value;
            } else if (arg0 === 2) {
              sendMessage = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              closure_5(true);
              const obj5 = onPressEmoji(sendMessage[18]);
              obj5.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_send");
              const obj4 = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              const obj6 = onPressEmoji(sendMessage[18]);
              obj6.feedItemActioned(obj4);
              onPressEmoji = 1;
              sendMessage = 1;
              const obj7 = { value: sendMessage(first1), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            sendMessage = 3;
            throw value;
          } else if (arg0 === 2) {
            sendMessage = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_5(false);
            closure_128_8("");
            sendMessage = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          sendMessage = 3;
          throw tmp9;
        }
      }
    }), items);
    const useCallback = obj.useCallback;
    let closure_0 = loading((arg0) => {
      let closure_1;
      let itemType;
      const user = arg0;
      let c2 = 0;
      let c3 = 0;
      return (function*(arg0, value) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                closure_1_5(true);
                const obj5 = onPressEmoji(sendMessage[18]);
                obj5.itemInteracted(user.id, itemType, "press_emoji_send");
                const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
                const obj6 = onPressEmoji(sendMessage[18]);
                obj6.feedItemActioned(obj4);
                c2 = 1;
                c3 = 1;
                const obj7 = { value: tmp(user), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              closure_1_5(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp8) {
            c3 = 3;
            throw tmp8;
          }
        }
      })();
    });
    let items1 = [content.id, str, onPressEmoji];
    callback1 = useCallback(function() {
      return closure_0(...arguments);
    }, items1);
    const tmp5Result = content(sendMessage[19]);
    const frequentlyUsedReactionEmojis = tmp5Result.useFrequentlyUsedReactionEmojis(null);
    const tmp20 = onPressEmoji(sendMessage[20])();
    const tmp5Result3 = content(sendMessage[21]);
    const clientThemesOverride = tmp5Result3.useClientThemesOverride();
    width = onPressEmoji(tmp6[22])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
    let obj2 = { header: c10(first1, obj3), children: callback1(first1, obj5) };
    obj3 = { style: tmp.header, children: c10(tmp5(tmp6[23]).Text, obj4) };
    const ActionSheet = tmp5(tmp6[36]).ActionSheet;
    obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj5 = { style: tmp.container, children: items6 };
    const items3 = [tmp.preview, ];
    loading = null;
    if (null == tmp14) {
      loading = tmp.loading;
    }
    let obj6 = { style: items3, children: c10(tmp19Result, obj7) };
    items3[1] = loading;
    obj7 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: callback1(first1, obj8) };
    obj8 = { style: tmp.base, children: items4 };
    const obj9 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj10 };
    obj10 = { dark: content(sendMessage[25]).OverlayOpacity.LEVEL_7, light: content(sendMessage[25]).OverlayOpacity.LEVEL_8 };
    tmp19Result = onPressEmoji(sendMessage[28]);
    const tmp19Result2 = onPressEmoji(sendMessage[24]);
    items4 = [c10(tmp19Result2, obj9), ];
    const obj11 = { gradient: tmp20, children: c10(first1, obj12) };
    obj12 = { style: items5, children: c10(tmp19(tmp6[26]), obj13) };
    items5 = [tmp.contentContainer, clientThemesOverride];
    const ThemeContextProvider = tmp5(tmp6[27]).ThemeContextProvider;
    obj13 = { content, renderForScreenshot: true };
    items4[1] = c10(ThemeContextProvider, obj11);
    items6 = [c10(first1, obj6), ];
    if (null != tmp14) {
      const items7 = [tmp.emojis, ];
      let submitting = null;
      const tmp30 = width;
      if (loading) {
        submitting = tmp.submitting;
      }
      const obj14 = { children: items9 };
      const obj15 = { style: items7, children: items8 };
      items7[1] = submitting;
      const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
      items8 = [
        substr.map((id) => {
              let items;
              let items1;
              let obj12;
              let obj2;
              let obj3;
              let obj4;
              let obj6;
              let tmp11;
              let tmp9;
              let closure_0 = id;
              if (null != id.id) {
                const obj = {
                  onPress() {
                      return callback1(id);
                    },
                  style: closure_3.emoji,
                  disabled,
                  children: _undefined(tmp9, obj2)
                };
                const PressableHighlight = content(sendMessage[16]).PressableHighlight;
                obj2 = { style: items, source: obj3 };
                items = [, ];
                ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
                obj3 = { uri: obj4.getEmojiURL(obj6) };
                obj6 = { id: null, animated: null, size: 48 };
                ({ id: obj5.id, animated: obj5.animated } = id);
                tmp9 = onPressEmoji(sendMessage[29]);
                obj4 = onPressEmoji(sendMessage[30]);
                tmp11 = _undefined(PressableHighlight, obj, id.id);
              } else {
                const obj7 = {
                  onPress() {
                      return callback1(id);
                    },
                  style: closure_3.emoji,
                  disabled,
                  children: _undefined(content(sendMessage[23]).Text, obj12)
                };
                const PressableHighlight2 = content(sendMessage[16]).PressableHighlight;
                obj12 = { variant: "text-md/medium", color: "interactive-text-default", style: items1, allowFontScaling: false, children: id.surrogates };
                items1 = [, ];
                ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
                tmp11 = _undefined(PressableHighlight2, obj7, id.surrogates);
              }
              return tmp11;
            }),

      ];
      const obj16 = {
        onOpenPicker() {
              const obj = ICYMIActionCreatorsDefault;
              obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
              const obj2 = ICYMIActionCreatorsDefault;
              const obj3 = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
              obj2.feedItemActioned(obj3);
            },
        channel,
        onPressEmoji: callback1,
        disabled: loading
      };
      items8[1] = c10(closure_14, obj16);
      items9 = [callback1(first1, obj15), ];
      const obj17 = { style: tmp.inputRow, children: items10 };
      const obj18 = { containerStyle: tmp.input, grow: true, round: true, placeholder: formatToPlainString(m3dK5W, obj19), value: first1, onChange: tmp2Result[1], disabled: loading };
      const TextInput = tmp5(tmp6[31]).TextInput;
      const intl4 = tmp5(tmp6[8]).intl;
      formatToPlainString = intl4.formatToPlainString;
      obj19 = { username: tmp5Result4.getName(author) };
      m3dK5W = tmp5(tmp6[8]).t.m3dK5W;
      tmp5Result4 = content(sendMessage[32]);
      items10 = [c10(TextInput, obj18), ];
      const obj20 = { accessibilityLabel: intl5.string(content(sendMessage[8]).t.oeb1vg), icon: c10(SendMessageIcon, obj21), size: "md", onPress: callback, disabled: 0 === first1.length, loading };
      const IconButton = tmp5(tmp6[33]).IconButton;
      intl5 = tmp5(tmp6[8]).intl;
      obj21 = { size: "md", color: onPressEmoji(sendMessage[10]).unsafe_rawColors.WHITE };
      SendMessageIcon = tmp5(tmp6[34]).SendMessageIcon;
      items10[1] = c10(IconButton, obj20);
      items9[1] = callback1(first1, obj17);
      tmp23Result = tmp25(tmp30, obj14);
    } else {
      tmp23Result = tmp23(tmp19(tmp6[35]), {});
    }
    items6[1] = tmp23Result;
    return c10(ActionSheet, obj2);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[8]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[8]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj6;
  let tmp4;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] !== arg0) {
    const _Object = Object;
    _objectDestructuringEmpty(arg0);
    const obj2 = assign({}, arg0);
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj3 = { children: authStore(closure_15, obj6) };
    obj6 = {};
    const ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
    const merged = Object.assign(tmp4);
    const tmp15 = authStore(ICYMIContextProvider, obj3);
    cResult[2] = tmp4;
    cResult[3] = tmp15;
    tmp9 = tmp15;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : ((arg0) => {
  let obj2;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const obj = { children: authStore(closure_15, obj2) };
    obj2 = {};
    const ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
    const merged1 = Object.assign(merged);
    return authStore(ICYMIContextProvider, obj);
  }
});
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default tmp4;
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  let attachments;
  let emojiStr;
  let formatToPlainStringResult;
  let isForward;
  let status;
  let tmp5;
  let username;
  ({ username, status, emojiStr, attachments, isForward } = reply);
  reply = reply.reply;
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = intl6.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl6.t;
  if (isForward) {
    const obj2 = { username };
    formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj2);
    tmp5 = tmp;
  } else {
    const obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = tmp;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  const tmp7 = status.length > 0 || emojiStr.length > 0;
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1127).intl;
      const _HermesInternal2 = HermesInternal;
      const obj3 = { attachmentsCount: attachments.length };
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1127).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply);
  return items.join("\n");
};
