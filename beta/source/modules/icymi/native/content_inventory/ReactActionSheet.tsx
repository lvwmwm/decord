// Module ID: 16146
// Function ID: 16147
// Name: ReactActionSheet
// Dependencies: [5, 32, 19, 17, 6572, 1375, 21, 1115, 4836, 576, 10583, 7182, 5435, 8219, 7587, 7799, 9748, 4688, 7297, 1479, 6618, 4832, 16143, 5437, 4652, 4540, 16139, 5899, 1397, 6024, 4678, 7363, 4777, 14760, 16092, 2]
// Exports: default, getStatusReplyContent

// Module 16146 (ReactActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7182 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10583 */;
import ICYMIContext from "ICYMIContext" /* 16092 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function AddEmojiButton(channel) {
  let intl;
  let items1;
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const disabled = channel.disabled;
  const items = [channel, onPressEmoji, onOpenPicker];
  const tmp = closure_12();
  const callback = react.useCallback(() => {
    onOpenPicker();
    const obj = openEmojiPickerActionSheet;
    const obj2 = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: MessageReactionsTypes.ReactionTypes.NORMAL };
    const result = obj.openEmojiPickerActionSheet(obj2);
  }, items);
  let obj = { onPress: callback, style: items1, accessible: true, accessibilityLabel: intl.string(channel(onPressEmoji[7]).t.lfIHs4), disabled, children: closure_9(channel(onPressEmoji[13]).ReactionIcon, { size: "md" }) };
  items1 = [tmp.emoji];
  const PressableHighlight = channel(onPressEmoji[12]).PressableHighlight;
  intl = channel(onPressEmoji[7]).intl;
  return closure_9(PressableHighlight, obj);
}
function ReactActionSheetBase(content) {
  let SendMessageIcon;
  let author;
  let c10;
  let channel;
  let closure_3;
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
  let loading;
  react = undefined;
  let first1;
  let closure_8;
  let ref;
  c10 = undefined;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = width();
  _asyncToGenerator = tmp;
  let obj = react;
  const tmp2 = loading;
  const tmp3 = loading(react.useState(false), 2);
  loading = tmp3[0];
  react = tmp3[1];
  let str = "unknown";
  let hotwheels_gaming_activity = "unknown";
  const intl = content(sendMessage[7]).intl;
  const content_type = content.content_type;
  const stringResult = intl.string(content(sendMessage[7]).t["5IEsGx"]);
  if (content(sendMessage[14]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    let stringResult1;
    let tmp23Result;
    if (content(sendMessage[14]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      stringResult1 = stringResult;
      if (content(sendMessage[14]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl2 = tmp5(tmp6[7]).intl;
        stringResult1 = intl2.string(tmp5(tmp6[7]).t.umDRYM);
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
    const callback = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
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
          return { value: "HermesInternal", done: null };
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
              const obj5 = onPressEmoji(sendMessage[15]);
              obj5.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_send");
              const obj4 = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: null } };
              const obj6 = onPressEmoji(sendMessage[15]);
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          sendMessage = 3;
          throw tmp9;
        }
      }
    }), items);
    const useCallback = obj.useCallback;
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let closure_1;
      let itemType;
      const user = arg0;
      let c2 = 0;
      let c3 = 0;
      return (async (arg0, value) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
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
                const obj5 = onPressEmoji(sendMessage[15]);
                obj5.itemInteracted(user.id, itemType, "press_emoji_send");
                const obj4 = { itemId: user.id, itemType, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
                const obj6 = onPressEmoji(sendMessage[15]);
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
              return { value: "HermesInternal", done: null };
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
    const tmp5Result = content(sendMessage[16]);
    const frequentlyUsedReactionEmojis = tmp5Result.useFrequentlyUsedReactionEmojis(null);
    const tmp20 = onPressEmoji(sendMessage[17])();
    const tmp5Result3 = content(sendMessage[18]);
    const clientThemesOverride = tmp5Result3.useClientThemesOverride();
    width = onPressEmoji(tmp6[19])().width;
    const items2 = [width];
    const memo = obj.useMemo(() => Math.floor(Math.min(width, ACTION_SHEET_MAX_WIDTH) / 52), items2);
    let obj2 = { header: ref(hotwheels_gaming_activity, obj3), children: c10(hotwheels_gaming_activity, obj5) };
    obj3 = { style: tmp.header, children: ref(tmp5(tmp6[21]).Text, obj4) };
    const ActionSheet = tmp5(tmp6[20]).ActionSheet;
    obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj5 = { style: tmp.container, children: items6 };
    const items3 = [tmp.preview, ];
    loading = null;
    if (null == tmp14) {
      loading = tmp.loading;
    }
    let obj6 = { style: items3, children: ref(tmp19Result, obj7) };
    items3[1] = loading;
    obj7 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: c10(hotwheels_gaming_activity, obj8) };
    obj8 = { style: tmp.base, children: items4 };
    const obj9 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj10 };
    obj10 = { dark: content(sendMessage[24]).OverlayOpacity.LEVEL_7, light: content(sendMessage[24]).OverlayOpacity.LEVEL_8 };
    tmp19Result = onPressEmoji(sendMessage[22]);
    const tmp19Result2 = onPressEmoji(sendMessage[23]);
    items4 = [ref(tmp19Result2, obj9), ];
    const obj11 = { gradient: tmp20, children: ref(hotwheels_gaming_activity, obj12) };
    obj12 = { style: items5, children: ref(tmp19(tmp6[26]), obj13) };
    items5 = [tmp.contentContainer, clientThemesOverride];
    const ThemeContextProvider = tmp5(tmp6[25]).ThemeContextProvider;
    obj13 = { content, renderForScreenshot: true };
    items4[1] = ref(ThemeContextProvider, obj11);
    items6 = [ref(hotwheels_gaming_activity, obj6), ];
    if (null != tmp14) {
      const items7 = [tmp.emojis, ];
      let submitting = null;
      const tmp30 = callback1;
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
                  children: ref(tmp9, obj2)
                };
                const PressableHighlight = content(sendMessage[12]).PressableHighlight;
                obj2 = { style: items, source: obj3 };
                items = [, ];
                ({ defaultEmoji: arr[0], emojiImage: arr[1] } = closure_3);
                obj3 = { uri: obj4.getEmojiURL(obj6) };
                obj6 = { id: null, animated: null, size: 48 };
                ({ id: obj5.id, animated: obj5.animated } = id);
                tmp9 = onPressEmoji(sendMessage[27]);
                obj4 = onPressEmoji(sendMessage[28]);
                tmp11 = ref(PressableHighlight, obj, id.id);
              } else {
                const obj7 = {
                  onPress() {
                      return callback1(id);
                    },
                  style: closure_3.emoji,
                  disabled,
                  children: ref(content(sendMessage[21]).Text, obj12)
                };
                const PressableHighlight2 = content(sendMessage[12]).PressableHighlight;
                obj12 = { variant: "text-md/medium", color: "interactive-text-default", style: items1, allowFontScaling: false, children: id.surrogates };
                items1 = [, ];
                ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = closure_3);
                tmp11 = ref(PressableHighlight2, obj7, id.surrogates);
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
      items8[1] = ref(AddEmojiButton, obj16);
      items9 = [c10(hotwheels_gaming_activity, obj15), ];
      const obj17 = { style: tmp.inputRow, children: items10 };
      const obj18 = { containerStyle: tmp.input, grow: true, round: true, placeholder: formatToPlainString(m3dK5W, obj19), value: first1, onChange: tmp2Result[1], disabled: loading };
      const TextInput = tmp5(tmp6[29]).TextInput;
      const intl4 = tmp5(tmp6[7]).intl;
      formatToPlainString = intl4.formatToPlainString;
      obj19 = { username: tmp5Result4.getName(author) };
      m3dK5W = tmp5(tmp6[7]).t.m3dK5W;
      tmp5Result4 = content(sendMessage[30]);
      items10 = [ref(TextInput, obj18), ];
      const obj20 = { accessibilityLabel: intl5.string(content(sendMessage[7]).t.oeb1vg), icon: ref(SendMessageIcon, obj21), size: "md", onPress: callback, disabled: 0 === first1.length, loading };
      const IconButton = tmp5(tmp6[31]).IconButton;
      intl5 = tmp5(tmp6[7]).intl;
      obj21 = { size: "md", color: onPressEmoji(sendMessage[9]).unsafe_rawColors.WHITE };
      SendMessageIcon = tmp5(tmp6[32]).SendMessageIcon;
      items10[1] = ref(IconButton, obj20);
      items9[1] = c10(hotwheels_gaming_activity, obj17);
      tmp23Result = tmp25(tmp30, obj14);
    } else {
      tmp23Result = tmp23(tmp19(tmp6[33]), {});
    }
    items6[1] = tmp23Result;
    return ref(ActionSheet, obj2);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl3 = tmp5(tmp6[7]).intl;
  stringResult1 = intl3.string(tmp5(tmp6[7]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: { width: "100%", display: "flex", alignItems: "center", padding: 8 }, container: { gap: 12 }, preview: obj2, loading: { opacity: 0.5 }, base: { position: "relative" }, contentContainer: obj3, inputRow: { flexDirection: "row", alignItems: "center", gap: 8 }, input: obj4, emojis: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, submitting: { opacity: 0.6 }, emoji: obj5, defaultEmoji: { width: 24, height: 24 }, emojiImage: { resizeMode: "contain", width: 24, height: 24 }, emojiText: { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 } };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { flex: 1, borderRadius: nativeDefault.radii.round };
obj5 = { padding: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default function ReactActionSheet(arg0) {
  let obj2;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const obj = { children: React4(ReactActionSheetBase, obj2) };
    obj2 = {};
    const ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
    const merged1 = Object.assign(merged);
    return React4(ICYMIContextProvider, obj);
  }
};
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
      const intl2 = tmp5(1115).intl;
      const _HermesInternal2 = HermesInternal;
      const obj3 = { attachmentsCount: attachments.length };
      items.push("> -# *" + intl2.formatToPlainString(tmp5(1115).t["JiNPo+"], obj3) + "*");
    }
  }
  items.push(reply);
  return items.join("\n");
};
