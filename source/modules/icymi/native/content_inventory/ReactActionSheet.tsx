// Module ID: 15234
// Function ID: 116245
// Name: AddEmojiButton
// Dependencies: [5, 57, 31, 27, 5188, 1852, 33, 1212, 4130, 689, 9326, 7006, 4660, 8007, 7810, 8321, 9330, 3977, 8829, 1450, 5500, 4126, 15231, 4662, 3941, 3842, 15227, 5085, 1392, 7512, 3969, 7771, 4076, 14104, 15180, 2]
// Exports: default, getStatusReplyContent

// Module 15234 (AddEmojiButton)
import set from "set";
import _slicedToArray from "_slicedToArray";
import IconButton from "IconButton";
import { View } from "preload";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { EmojiIntention } from "set";
import jsxProd from "LoadingIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function AddEmojiButton(channel) {
  channel = channel.channel;
  const onOpenPicker = channel.onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = React.useCallback(() => {
    onOpenPicker();
    let obj = channel(onPressEmoji[10]);
    obj = { pickerIntention: outer1_8.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, reactionType: channel(onPressEmoji[11]).ReactionTypes.NORMAL };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  let obj = { onPress: callback, style: items1, accessible: true };
  items1 = [_createForOfIteratorHelperLoose().emoji];
  const intl = channel(onPressEmoji[7]).intl;
  obj.accessibilityLabel = intl.string(channel(onPressEmoji[7]).t.lfIHs4);
  obj.disabled = channel.disabled;
  obj.children = callback2(channel(onPressEmoji[13]).ReactionIcon, { size: "md" });
  return callback2(channel(onPressEmoji[12]).PressableHighlight, obj);
}
function ReactActionSheetBase(content) {
  let author;
  let c10;
  let channel;
  let tmp18;
  content = content.content;
  const onPressEmoji = content.onPressEmoji;
  const sendMessage = content.sendMessage;
  let first1;
  let c8;
  let ref;
  let callback3;
  let callback1;
  let width;
  ({ author, channel } = content);
  const tmp = width();
  let callback = tmp;
  const tmp2 = first(React.useState(false), 2);
  first = tmp2[0];
  React = tmp2[1];
  let str = "unknown";
  let hotwheels_gaming_activity = "unknown";
  const intl = content(sendMessage[7]).intl;
  const content_type = content.content_type;
  if (content(sendMessage[14]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (content(sendMessage[14]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (content(sendMessage[14]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        hotwheels_gaming_activity = "hotwheels_custom_status";
        const intl5 = content(sendMessage[7]).intl;
        stringResult1 = intl5.string(content(sendMessage[7]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp10 = first(React.useState(""), 2);
    first1 = tmp10[0];
    c8 = tmp11;
    ref = React.useRef(null);
    [tmp18, c10] = first(React.useState(null), 2);
    // CreateGeneratorClosureLongIndex (0x67)
    let items = [content.id, str, first1, sendMessage];
    callback = React.useCallback(callback(React.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = outer1_9.current;
        let nextPromise;
        if (null != current) {
          if (null != current.capture) {
            nextPromise = current.capture().then((arg0) => outer2_10(arg0));
            const captureResult = current.capture();
          }
        }
        return nextPromise;
      }, 500);
    }, [])), items);
    let items1 = [content.id, str, onPressEmoji];
    callback1 = React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = tmp(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items1);
    let obj = content(sendMessage[16]);
    const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(null);
    const tmp17 = first(React.useState(null), 2);
    let obj1 = content(sendMessage[18]);
    const clientThemesOverride = obj1.useClientThemesOverride();
    width = onPressEmoji(sendMessage[19])().width;
    const items2 = [width];
    const memo = React.useMemo(() => Math.floor(Math.min(width, first1) / 52), items2);
    obj = {};
    obj = { style: tmp.header };
    obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: stringResult1 };
    obj.children = ref(content(sendMessage[21]).Text, obj1);
    obj.header = ref(hotwheels_gaming_activity, obj);
    let obj2 = { style: tmp.container };
    let obj3 = {};
    const items3 = [tmp.preview, ];
    let loading = null;
    if (null == tmp18) {
      loading = tmp.loading;
    }
    items3[1] = loading;
    obj3.style = items3;
    const obj4 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 } };
    const obj5 = { style: tmp.base };
    const tmp28 = onPressEmoji(sendMessage[17])();
    const tmp32 = ref;
    const tmp36 = callback3;
    const tmp37 = hotwheels_gaming_activity;
    const tmp38 = ref;
    const tmp39 = hotwheels_gaming_activity;
    const obj6 = { absolute: true, wide: true, tall: true, mix: true };
    const obj7 = {};
    const tmp44 = onPressEmoji(sendMessage[22]);
    obj7.dark = content(sendMessage[24]).OverlayOpacity.LEVEL_7;
    obj7.light = content(sendMessage[24]).OverlayOpacity.LEVEL_8;
    obj6.mixAmount = obj7;
    const items4 = [ref(onPressEmoji(sendMessage[23]), obj6), ];
    const obj8 = { gradient: tmp28 };
    const obj9 = {};
    const items5 = [tmp.contentContainer, clientThemesOverride];
    obj9.style = items5;
    const obj10 = { content, renderForScreenshot: true };
    obj9.children = ref(onPressEmoji(sendMessage[26]), obj10);
    obj8.children = ref(hotwheels_gaming_activity, obj9);
    items4[1] = ref(content(sendMessage[25]).ThemeContextProvider, obj8);
    obj5.children = items4;
    obj4.children = callback3(hotwheels_gaming_activity, obj5);
    obj3.children = ref(tmp44, obj4);
    const items6 = [tmp38(tmp39, obj3), ];
    if (null != tmp18) {
      const obj11 = {};
      const obj12 = {};
      const items7 = [tmp.emojis, ];
      let submitting = null;
      if (first) {
        submitting = tmp.submitting;
      }
      items7[1] = submitting;
      obj12.style = items7;
      const substr = frequentlyUsedReactionEmojis.slice(0, memo - 1);
      const items8 = [
        substr.map((id) => {
              let closure_0 = id;
              if (null != id.id) {
                let obj = {
                  onPress() {
                      return outer1_11(closure_0);
                    },
                  style: ref.emoji,
                  disabled: first
                };
                obj = {};
                const items = [, ];
                ({ defaultEmoji: arr[0], emojiImage: arr[1] } = ref);
                obj.style = items;
                obj = {};
                let obj3 = onPressEmoji(sendMessage[28]);
                const obj1 = {};
                ({ id: obj5.id, animated: obj5.animated } = id);
                obj1.size = 48;
                obj.uri = obj3.getEmojiURL(obj1);
                obj.source = obj;
                obj.children = ref(onPressEmoji(sendMessage[27]), obj, id.id);
                let tmp9 = ref(content(sendMessage[12]).PressableHighlight, obj);
                const tmp8 = onPressEmoji(sendMessage[27]);
              } else {
                const obj2 = {
                  onPress() {
                      return outer1_11(closure_0);
                    },
                  style: tmp.emoji,
                  disabled: first
                };
                obj3 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false };
                const items1 = [, ];
                ({ defaultEmoji: arr2[0], emojiText: arr2[1] } = tmp);
                obj3.style = items1;
                obj3.children = id.surrogates;
                obj2.children = ref(content(sendMessage[21]).Text, obj3);
                tmp9 = ref(content(sendMessage[12]).PressableHighlight, obj2);
              }
              return tmp9;
            }),

      ];
      const obj13 = {
        onOpenPicker() {
              let obj = onPressEmoji(sendMessage[15]);
              obj.itemInteracted(content.id, hotwheels_gaming_activity, "press_reply_reaction_picker");
              obj = { itemId: content.id, itemType: hotwheels_gaming_activity, actionParameters: { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null } };
              onPressEmoji(sendMessage[15]).feedItemActioned(obj);
            },
        channel,
        onPressEmoji: callback1,
        disabled: first
      };
      items8[1] = ref(AddEmojiButton, obj13);
      obj12.children = items8;
      const items9 = [callback3(hotwheels_gaming_activity, obj12), ];
      const obj14 = { style: tmp.inputRow };
      const obj15 = { containerStyle: tmp.input, grow: true, isRound: true };
      const intl3 = content(sendMessage[7]).intl;
      const obj16 = { username: content(sendMessage[30]).getName(author) };
      obj15.placeholder = intl3.formatToPlainString(content(sendMessage[7]).t.m3dK5W, obj16);
      obj15.value = first1;
      obj15.onChange = tmp11;
      obj15.isDisabled = first;
      const items10 = [ref(content(sendMessage[29]).TextInput, obj15), ];
      const obj17 = {};
      const intl4 = content(sendMessage[7]).intl;
      obj17.accessibilityLabel = intl4.string(content(sendMessage[7]).t.oeb1vg);
      const obj18 = { size: "md", color: onPressEmoji(sendMessage[9]).unsafe_rawColors.WHITE };
      obj17.icon = ref(content(sendMessage[32]).SendMessageIcon, obj18);
      obj17.size = "md";
      obj17.onPress = callback;
      obj17.disabled = 0 === first1.length;
      obj17.loading = first;
      items10[1] = ref(content(sendMessage[31]).IconButton, obj17);
      obj14.children = items10;
      items9[1] = callback3(hotwheels_gaming_activity, obj14);
      obj11.children = items9;
      let tmp58Result = tmp58(callback1, obj11);
      const obj21 = content(sendMessage[30]);
      const tmp59 = callback1;
      const tmp60 = hotwheels_gaming_activity;
    } else {
      tmp58Result = ref(onPressEmoji(sendMessage[33]), {});
    }
    items6[1] = tmp58Result;
    obj2.children = items6;
    obj.children = tmp36(tmp37, obj2);
    return tmp32(content(sendMessage[20]).ActionSheet, obj);
  }
  hotwheels_gaming_activity = "hotwheels_gaming_activity";
  const intl2 = content(sendMessage[7]).intl;
  stringResult1 = intl2.string(content(sendMessage[7]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { header: { width: "100%", display: "flex", alignItems: "center", padding: 8 }, container: { gap: 12 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.preview = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.loading = { opacity: 0.5 };
_createForOfIteratorHelperLoose.base = { position: "relative" };
_createForOfIteratorHelperLoose.contentContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.inputRow = { flexDirection: "row", alignItems: "center", gap: 8 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.input = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.emojis = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.submitting = { opacity: 0.6 };
let obj2 = { flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.emoji = { padding: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
_createForOfIteratorHelperLoose.defaultEmoji = { width: 24, height: 24 };
_createForOfIteratorHelperLoose.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
_createForOfIteratorHelperLoose.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", paddingTop: 2 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { padding: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let result = require("result").fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default function ReactActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = {};
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = callback2(ReactActionSheetBase, obj);
    return callback2(require(15180) /* useICYMIContextConstructor */.ICYMIContextProvider, obj);
  }
};
export const getStatusReplyContent = function getStatusReplyContent(reply) {
  let attachments;
  let emojiStr;
  let isForward;
  let status;
  let username;
  ({ username, status, emojiStr, attachments, isForward } = reply);
  if (isForward === undefined) {
    isForward = false;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if (isForward) {
    let obj = { username };
    let formatToPlainStringResult = formatToPlainString(t.S5JNyW, obj);
  } else {
    obj = { username };
    formatToPlainStringResult = formatToPlainString(t.XPQgL2, obj);
  }
  const items = [];
  items.push("> -# *" + formatToPlainStringResult + "*");
  if (tmp3) {
    const _HermesInternal = HermesInternal;
    items.push("> " + emojiStr + " " + status);
  }
  if (null != attachments) {
    if (attachments.length > 0) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { attachmentsCount: attachments.length };
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["JiNPo+"], obj) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};
