// Module ID: 16849
// Function ID: 16850
// Name: ReactActionSheet
// Dependencies: [12387, 5, 32, 19, 17, 7398, 1379, 21, 1119, 4758, 580, 558, 568, 10436, 8010, 9035, 5341, 8404, 8627, 10440, 4612, 8121, 1482, 4754, 5343, 4577, 16842, 4471, 16846, 5802, 1401, 6846, 4603, 8178, 4702, 15474, 7449, 16795, 2]
// Exports: getStatusReplyContent

// Module 16849 (ReactActionSheet)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 8010 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8627 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10436 */;
import ICYMIContext from "ICYMIContext" /* 16795 */;
import _objectDestructuringEmpty from "_objectDestructuringEmpty" /* 12387 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7398).ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = fn(1379).EmojiIntention;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { header: { width: "100%", display: "flex", alignItems: "center", padding: 8 }, container: { gap: 12 }, preview: { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG }, loading: { opacity: 0.5 }, base: { position: "relative" }, contentContainer: null, inputRow: null, input: null, emojis: null, submitting: null, emoji: null, defaultEmoji: null, emojiImage: null, emojiText: null };
let obj3 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.inputRow = { flexDirection: "row", alignItems: "center", gap: 8 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.input = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emojis = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.submitting = { opacity: 0.6 };
let obj5 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj2.emoji = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj2.defaultEmoji = { width: 24, height: 24 };
obj2.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj2.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(onPressEmoji[12]).c(12);
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  onPressEmoji = channel.onPressEmoji;
  const disabled = channel.disabled;
  const tmp4 = closure_13();
  if (cResult[0] === channel) {
    if (cResult[1] === onOpenPicker) {
      if (cResult[2] === onPressEmoji) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp4.emoji) {
        const items = [tmp4.emoji];
        cResult[4] = tmp4.emoji;
        cResult[5] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[8]).intl;
        const stringResult = intl.string(tmp(tmp2[8]).t.lfIHs4);
        cResult[6] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_10(tmp(tmp2[15]).ReactionIcon, { size: "md" });
        cResult[7] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[7];
      }
      if (cResult[8] === disabled) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { onPress: tmp5, style: tmp6, accessible: true, accessibilityLabel: tmp8, disabled, children: tmp10 };
      const tmp15 = closure_10(tmp(tmp2[16]).PressableHighlight, obj2);
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
    const result = obj.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL });
  };
  cResult[0] = channel;
  cResult[1] = onOpenPicker;
  cResult[2] = onPressEmoji;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((channel) => {
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = noop.useCallback(() => {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const result = obj.openEmojiPickerActionSheet({ pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL });
  }, items);
  let obj = { onPress: callback, style: null, accessible: true, accessibilityLabel: null, disabled: null, children: null };
  const items1 = [closure_13().emoji];
  obj.style = items1;
  const intl = channel(onPressEmoji[8]).intl;
  obj.accessibilityLabel = intl.string(channel(onPressEmoji[8]).t.lfIHs4);
  obj.disabled = channel.disabled;
  obj.children = closure_10(channel(onPressEmoji[15]).ReactionIcon, { size: "md" });
  return closure_10(channel(onPressEmoji[16]).PressableHighlight, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = require("c").c(71);
  content = content.content;
  ({ author, channel, onPressEmoji } = content);
  const sendMessage = content.sendMessage;
  let obj = require("c");
  asyncGeneratorStep = closure_13();
  [_slicedToArray, noop] = noop.useState(false);
  if (cResult[0] !== content.content_type) {
    let str = "unknown";
    _require = "unknown";
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[8]).intl;
      const stringResult = intl.string(tmp(tmp2[8]).t["5IEsGx"]);
      cResult[3] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    const content_type = content.content_type;
    if (tmp(tmp2[17]).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(tmp2[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(tmp2[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          _require = "hotwheels_custom_status";
          const _Symbol4 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[8]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[8]).t.umDRYM);
            cResult[5] = stringResult1;
            let tmp12 = stringResult1;
          } else {
            tmp12 = cResult[5];
          }
          tmp10 = tmp12;
          str = "hotwheels_custom_status";
        }
        cResult[0] = content.content_type;
        cResult[1] = str;
        cResult[2] = tmp10;
      }
    }
    _require = "hotwheels_gaming_activity";
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(tmp2[8]).intl;
      const stringResult2 = intl3.string(tmp(tmp2[8]).t.XC5YE5);
      cResult[4] = stringResult2;
    }
  } else {
    _require = tmp7;
    const tmp5Result = tmp5(obj2.useState(""), 2);
    const first = tmp5Result[0];
    closure_8 = tmp5Result[1];
    const ref = obj2.useRef(null);
    [r10098, closure_10] = tmp5(obj2.useState(null), 2);
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          timerId = setTimeout(() => {
            const current = ref.current;
            let nextPromise;
            if (current != null) {
              const capture = current.capture;
              if (capture != null) {
                nextPromise = capture().then(() => { ... });
                const captureResult = capture();
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
      let tmp26 = items;
      const tmp25 = M;
    } else {
      class M {
        constructor() {
          timerId = setTimeout(() => {
            const current = ref.current;
            let nextPromise;
            if (current != null) {
              const capture = current.capture;
              if (capture != null) {
                nextPromise = capture().then(() => { ... });
                const captureResult = capture();
              }
            }
            return nextPromise;
          }, 500);
          return;
        }
      }
      tmp26 = cResult[7];
    }
    const effect = obj2.useEffect(tmp25, tmp26);
    if (cResult[8] === content.id) {
      class M {
        constructor() {
          timerId = setTimeout(() => {
            const current = ref.current;
            let nextPromise;
            if (current != null) {
              const capture = current.capture;
              if (capture != null) {
                nextPromise = capture().then(() => { ... });
                const captureResult = capture();
              }
            }
            return nextPromise;
          }, 500);
          return;
        }
      }
    }
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
              itemType = tmp2;
              closure_1_6(true);
              content(onPressEmoji[18]).itemInteracted(user.id, itemType, "press_reply_send");
              const obj5 = content(onPressEmoji[18]);
              const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              content(onPressEmoji[18]).feedItemActioned(obj4);
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
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[8] = content.id;
    cResult[9] = cResult[1];
    cResult[10] = first;
    cResult[11] = sendMessage;
    cResult[12] = fn;
    const tmp5Result2 = tmp5(obj2.useState(null), 2);
  }
}) : ((content) => {
  content = content.content;
  _require = content;
  const onPressEmoji = content.onPressEmoji;
  const sendMessage = content.sendMessage;
  loading = undefined;
  _slicedToArray = undefined;
  let hotwheels_gaming_activity;
  let first1;
  closure_8 = undefined;
  let ref;
  c10 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = closure_13();
  closure_3 = tmp;
  [loading, _slicedToArray] = hotwheels_gaming_activity.useState(false);
  let str = "unknown";
  hotwheels_gaming_activity = "unknown";
  const intl = require("util").intl;
  const content_type = content.content_type;
  if (require("ContentInventoryEntryType").ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (tmp5(tmp6[17]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (tmp5(tmp6[17]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[8]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[8]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp2Result = tmp2(obj.useState(""), 2);
    first1 = tmp2Result[0];
    closure_8 = tmp10;
    ref = obj.useRef(null);
    [tmp14, c10] = tmp2(obj.useState(null), 2);
    const effect = obj.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (current != null) {
          const capture = current.capture;
          if (capture != null) {
            nextPromise = capture().then((result) => closure_1_10(result));
            const captureResult = capture();
          }
        }
        return nextPromise;
      }, 500);
    }, []);
    let items = [content.id, str, first1, sendMessage];
    const callback = obj.useCallback(loading(function*(arg0, value) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
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
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_5(true);
              v1(8627).itemInteracted(tmp4.id, hotwheels_gaming_activity, "press_reply_send");
              const obj5 = v1(8627);
              const obj4 = { itemId: tmp4.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              v1(8627).feedItemActioned(obj4);
              v1 = 1;
              dependencyMap = 1;
              const obj7 = { value: sendMessage(first1), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_5(false);
            closure_128_8("");
            dependencyMap = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          dependencyMap = tmp;
          throw tmp10;
        }
      }
    }), items);
    _require = loading((arg0) => {
      const user = arg0;
      c2 = 0;
      c3 = 0;
      return (function*(arg0, value) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1_5(true);
                onPressEmoji(sendMessage[18]).itemInteracted(user.id, itemType, "press_emoji_send");
                const obj5 = onPressEmoji(sendMessage[18]);
                const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
                onPressEmoji(sendMessage[18]).feedItemActioned(obj4);
                c2 = 1;
                c3 = 1;
                const obj7 = { value: tmp2(user), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_1_5(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp9) {
            c3 = tmp;
            throw tmp9;
          }
        }
      })();
    });
    let items1 = [content.id, str, onPressEmoji];
    callback1 = obj.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1);
    const tmp2Result2 = tmp2(obj.useState(null), 2);
    const frequentlyUsedReactionEmojis = tmp5(tmp6[19]).useFrequentlyUsedReactionEmojis(null);
    const tmp5Result = tmp5(tmp6[19]);
    const tmp20 = onPressEmoji(tmp6[20])();
    const clientThemesOverride = tmp5(tmp6[21]).useClientThemesOverride();
    width = onPressEmoji(tmp6[22])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
    let obj2 = { header: null, children: null };
    let obj3 = { style: tmp.header, children: null };
    let obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj3.children = c10(tmp5(tmp6[23]).Text, obj4);
    obj2.header = c10(first1, obj3);
    let obj5 = { style: tmp.container, children: null };
    const items3 = [tmp.preview, ];
    loading = null;
    if (null == tmp14) {
      loading = tmp.loading;
    }
    let obj6 = { style: null, children: null };
    items3[1] = loading;
    obj6.style = items3;
    let obj7 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
    const obj8 = { style: tmp.base, children: null };
    const tmp5Result3 = tmp5(tmp6[21]);
    const obj9 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
    const obj10 = { dark: null, light: null };
    const tmp19Result = onPressEmoji(tmp6[28]);
    obj10.dark = tmp5(tmp6[25]).OverlayOpacity.LEVEL_7;
    obj10.light = tmp5(tmp6[25]).OverlayOpacity.LEVEL_8;
    obj9.mixAmount = obj10;
    const items4 = [c10(onPressEmoji(tmp6[24]), obj9), ];
    const obj11 = { gradient: tmp20, children: null };
    let obj12 = { style: null, children: null };
    const items5 = [tmp.contentContainer, clientThemesOverride];
    obj12.style = items5;
    const obj13 = { content, renderForScreenshot: true };
    obj12.children = c10(onPressEmoji(tmp6[26]), obj13);
    obj11.children = c10(first1, obj12);
    items4[1] = c10(tmp5(tmp6[27]).ThemeContextProvider, obj11);
    obj8.children = items4;
    obj7.children = callback1(first1, obj8);
    obj6.children = c10(tmp19Result, obj7);
    const items6 = [c10(first1, obj6), ];
    if (null != tmp14) {
      const items7 = [tmp.emojis, ];
      let submitting = null;
      if (loading) {
        submitting = tmp.submitting;
      }
      const obj14 = { children: null };
      const obj15 = { style: null, children: null };
      items7[1] = submitting;
      obj15.style = items7;
      const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
      const items8 = [
        substr.map((id) => {
              closure_0 = id;
              if (null != id.id) {
                const obj = {
                  onPress() {
                      return callback1(closure_0);
                    },
                  style: closure_3.emoji,
                  disabled,
                  children: null
                };
                const obj2 = { style: null, source: null };
                const items = [, ];
                ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
                obj2.style = items;
                const obj3 = { uri: null };
                const tmp9 = onPressEmoji(sendMessage[29]);
                ({ id: obj5.id, animated: obj5.animated } = id);
                obj3.uri = onPressEmoji(sendMessage[30]).getEmojiURL({ id: null, animated: null, size: 48 });
                obj2.source = obj3;
                obj.children = _undefined(tmp9, obj2);
                let tmp11 = _undefined(closure_0(sendMessage[16]).PressableHighlight, obj, id.id);
                const obj4 = onPressEmoji(sendMessage[30]);
                const obj6 = { id: null, animated: null, size: 48 };
              } else {
                const obj7 = {
                  onPress() {
                      return callback1(closure_0);
                    },
                  style: closure_3.emoji,
                  disabled,
                  children: null
                };
                const obj12 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false, children: null };
                const items1 = [, ];
                ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
                obj12.style = items1;
                obj12.children = id.surrogates;
                obj7.children = _undefined(closure_0(sendMessage[23]).Text, obj12);
                tmp11 = _undefined(closure_0(sendMessage[16]).PressableHighlight, obj7, id.surrogates);
              }
              return tmp11;
            }),

      ];
      const obj16 = {
        onOpenPicker() {
              ICYMIActionCreatorsDefault.itemInteracted(closure_0.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
              ICYMIActionCreatorsDefault.feedItemActioned({ itemId: closure_0.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } });
            },
        channel,
        onPressEmoji: callback1,
        disabled: loading
      };
      items8[1] = tmp23(closure_14, obj16);
      obj15.children = items8;
      const items9 = [tmp25(tmp24, obj15), ];
      const obj17 = { style: tmp.inputRow, children: null };
      const obj18 = { containerStyle: tmp.input, grow: true, round: true, placeholder: null, value: null, onChange: null, disabled: null };
      const intl4 = tmp5(tmp6[8]).intl;
      const obj19 = { username: tmp5(tmp6[32]).getName(author) };
      obj18.placeholder = intl4.formatToPlainString(tmp5(tmp6[8]).t.m3dK5W, obj19);
      obj18.value = first1;
      obj18.onChange = tmp10;
      obj18.disabled = loading;
      const items10 = [tmp23(tmp5(tmp6[31]).TextInput, obj18), ];
      const obj20 = { accessibilityLabel: null, icon: null, size: "md", onPress: null, disabled: null, loading: null };
      const intl5 = tmp5(tmp6[8]).intl;
      obj20.accessibilityLabel = intl5.string(tmp5(tmp6[8]).t.oeb1vg);
      const obj21 = { size: "md", color: tmp19(tmp6[10]).unsafe_rawColors.WHITE };
      obj20.icon = tmp23(tmp5(tmp6[34]).SendMessageIcon, obj21);
      obj20.onPress = callback;
      obj20.disabled = 0 === first1.length;
      obj20.loading = loading;
      items10[1] = tmp23(tmp5(tmp6[33]).IconButton, obj20);
      obj17.children = items10;
      items9[1] = tmp25(tmp24, obj17);
      obj14.children = items9;
      let tmp23Result = tmp25(width, obj14);
      const tmp5Result4 = tmp5(tmp6[32]);
    } else {
      tmp23Result = tmp23(tmp19(tmp6[35]), {});
    }
    items6[1] = tmp23Result;
    obj5.children = items6;
    obj2.children = callback1(first1, obj5);
    return c10(tmp5(tmp6[36]).ActionSheet, obj2);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[8]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[8]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
});
ReactCompilerGating = fn(558);
let obj6 = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(4);
  if (cResult[0] !== arg0) {
    const _Object = Object;
    _objectDestructuringEmpty(arg0);
    const merged = Object.assign({}, arg0);
    cResult[0] = arg0;
    cResult[1] = merged;
    let tmp4 = merged;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj2 = { children: null };
    const obj3 = {};
    const merged1 = Object.assign(tmp4);
    obj2.children = v65535(closure_15, obj3);
    const tmp15 = v65535(ICYMIContext.ICYMIContextProvider, obj2);
    cResult[2] = tmp4;
    cResult[3] = tmp15;
    let tmp9 = tmp15;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : ((arg0) => {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const obj = { children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = v65535(closure_15, obj2);
    return v65535(ICYMIContext.ICYMIContextProvider, obj);
  }
});
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  ({ username, status, emojiStr, attachments, isForward } = reply);
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isForward) {
    const obj2 = { username };
    let formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj2);
    let tmp5 = tmp;
  } else {
    const obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
    tmp5 = tmp;
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  if (tmp7) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = tmp5(1119).intl;
      const obj3 = { attachmentsCount: attachments.length };
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1119).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};
