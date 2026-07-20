// Module ID: 15101
// Function ID: 113975
// Name: AddEmojiButton
// Dependencies: []
// Exports: default, getStatusReplyContent

// Module 15101 (AddEmojiButton)
function AddEmojiButton(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const onOpenPicker = channel.onOpenPicker;
  const importDefault = onOpenPicker;
  const onPressEmoji = channel.onPressEmoji;
  const dependencyMap = onPressEmoji;
  const items = [channel, onPressEmoji, onOpenPicker];
  const callback = React.useCallback(() => {
    onOpenPicker();
    let obj = channel(onPressEmoji[10]);
    obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, pickerIntention: constants.REACTION, onPressEmoji, channel, reactionType: channel(onPressEmoji[11]).ReactionTypes.NORMAL };
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  const obj = { onPress: callback, style: items1, accessible: true };
  const items1 = [callback5().emoji];
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.lfIHs4);
  obj.disabled = channel.disabled;
  obj.children = callback3(arg1(dependencyMap[13]).ReactionIcon, { size: "md" });
  return callback3(arg1(dependencyMap[12]).PressableHighlight, obj);
}
function ReactActionSheetBase(content) {
  let author;
  let channel;
  let tmp18;
  content = content.content;
  const arg1 = content;
  const onPressEmoji = content.onPressEmoji;
  const importDefault = onPressEmoji;
  const sendMessage = content.sendMessage;
  const dependencyMap = sendMessage;
  let ACTION_SHEET_MAX_WIDTH;
  let EmojiIntention;
  let ref;
  let callback4;
  let callback1;
  let callback5;
  ({ author, channel } = content);
  const tmp = callback5();
  let callback = tmp;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  const callback2 = first;
  const React = tmp2[1];
  let str = "unknown";
  let closure_6 = "unknown";
  const intl = arg1(dependencyMap[7]).intl;
  const content_type = content.content_type;
  if (arg1(dependencyMap[14]).ContentInventoryEntryType.TOP_GAME !== content_type) {
    if (arg1(dependencyMap[14]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let stringResult1 = stringResult;
      if (arg1(dependencyMap[14]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
        closure_6 = "hotwheels_custom_status";
        const intl5 = arg1(dependencyMap[7]).intl;
        stringResult1 = intl5.string(arg1(dependencyMap[7]).t.umDRYM);
        str = "hotwheels_custom_status";
      }
    }
    const tmp10 = callback2(React.useState(""), 2);
    const first1 = tmp10[0];
    ACTION_SHEET_MAX_WIDTH = first1;
    EmojiIntention = tmp11;
    ref = React.useRef(null);
    [tmp18, closure_10] = callback2(React.useState(null), 2);
    // CreateGeneratorClosureLongIndex (0x67)
    const items = [content.id, str, first1, sendMessage];
    callback = React.useCallback(callback(React.useEffect(() => {
      const timerId = setTimeout(() => {
        const current = ref.current;
        let nextPromise;
        if (null != current) {
          if (null != current.capture) {
            nextPromise = current.capture().then((arg0) => callback(arg0));
            const captureResult = current.capture();
          }
        }
        return nextPromise;
      }, 500);
    }, [])), items);
    const items1 = [content.id, str, onPressEmoji];
    callback1 = React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = tmp(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items1);
    let obj = arg1(dependencyMap[16]);
    const frequentlyUsedReactionEmojis = obj.useFrequentlyUsedReactionEmojis(null);
    const tmp17 = callback2(React.useState(null), 2);
    let obj1 = arg1(dependencyMap[18]);
    const clientThemesOverride = obj1.useClientThemesOverride();
    const width = importDefault(dependencyMap[19])().width;
    callback5 = width;
    const items2 = [width];
    const memo = React.useMemo(() => Math.floor(Math.min(width, first1) / 52), items2);
    obj = {};
    obj = { style: tmp.header };
    obj1 = { children: stringResult1 };
    obj.children = ref(arg1(dependencyMap[21]).Text, obj1);
    obj.header = ref(closure_6, obj);
    const obj2 = { style: tmp.container };
    const obj3 = {};
    const items3 = [tmp.preview, ];
    let loading = null;
    if (null == tmp18) {
      loading = tmp.loading;
    }
    items3[1] = loading;
    obj3.style = items3;
    const obj4 = { ref, options: {} };
    const obj5 = { style: tmp.base };
    const tmp28 = importDefault(dependencyMap[17])();
    const tmp32 = ref;
    const tmp36 = callback4;
    const tmp37 = closure_6;
    const tmp38 = ref;
    const tmp39 = closure_6;
    const obj6 = {};
    const obj7 = {};
    const tmp44 = importDefault(dependencyMap[22]);
    obj7.dark = arg1(dependencyMap[24]).OverlayOpacity.LEVEL_7;
    obj7.light = arg1(dependencyMap[24]).OverlayOpacity.LEVEL_8;
    obj6.mixAmount = obj7;
    const items4 = [ref(importDefault(dependencyMap[23]), obj6), ];
    const obj8 = { gradient: tmp28 };
    const obj9 = {};
    const items5 = [tmp.contentContainer, clientThemesOverride];
    obj9.style = items5;
    const obj10 = { content, renderForScreenshot: true };
    obj9.children = ref(importDefault(dependencyMap[26]), obj10);
    obj8.children = ref(closure_6, obj9);
    items4[1] = ref(arg1(dependencyMap[25]).ThemeContextProvider, obj8);
    obj5.children = items4;
    obj4.children = callback4(closure_6, obj5);
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
              const content = id;
              if (null != id.id) {
                let obj = {
                  onPress() {
                      return callback(arg0);
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
                      return callback(arg0);
                    },
                  style: tmp.emoji,
                  disabled: first
                };
                obj3 = {};
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
              obj.itemInteracted(content.id, closure_6, "press_reply_reaction_picker");
              obj = { itemId: content.id, itemType: closure_6, actionParameters: { "Bool(false)": "secondary", "Bool(false)": "md", "Bool(false)": null, "Bool(false)": null } };
              onPressEmoji(sendMessage[15]).feedItemActioned(obj);
            },
        channel,
        onPressEmoji: callback1,
        disabled: first
      };
      items8[1] = ref(AddEmojiButton, obj13);
      obj12.children = items8;
      const items9 = [callback4(closure_6, obj12), ];
      const obj14 = { style: tmp.inputRow };
      const obj15 = { FocusedActivityLayouts: null, isRobloxSubgameGame: null, shouldShowEmojiRow: null, containerStyle: tmp.input };
      const intl3 = arg1(dependencyMap[7]).intl;
      const obj16 = { username: arg1(dependencyMap[30]).getName(author) };
      obj15.placeholder = intl3.formatToPlainString(arg1(dependencyMap[7]).t.m3dK5W, obj16);
      obj15.value = first1;
      obj15.onChange = tmp11;
      obj15.isDisabled = first;
      const items10 = [ref(arg1(dependencyMap[29]).TextInput, obj15), ];
      const obj17 = {};
      const intl4 = arg1(dependencyMap[7]).intl;
      obj17.accessibilityLabel = intl4.string(arg1(dependencyMap[7]).t.oeb1vg);
      const obj18 = { size: "md", color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
      obj17.icon = ref(arg1(dependencyMap[32]).SendMessageIcon, obj18);
      obj17.size = "md";
      obj17.onPress = callback;
      obj17.disabled = 0 === first1.length;
      obj17.loading = first;
      items10[1] = ref(arg1(dependencyMap[31]).IconButton, obj17);
      obj14.children = items10;
      items9[1] = callback4(closure_6, obj14);
      obj11.children = items9;
      let tmp58Result = tmp58(callback1, obj11);
      const obj21 = arg1(dependencyMap[30]);
      const tmp59 = callback1;
      const tmp60 = closure_6;
    } else {
      tmp58Result = ref(importDefault(dependencyMap[33]), {});
    }
    items6[1] = tmp58Result;
    obj2.children = items6;
    obj.children = tmp36(tmp37, obj2);
    return tmp32(arg1(dependencyMap[20]).ActionSheet, obj);
  }
  closure_6 = "hotwheels_gaming_activity";
  const intl2 = arg1(dependencyMap[7]).intl;
  stringResult1 = intl2.string(arg1(dependencyMap[7]).t.XC5YE5);
  str = "hotwheels_gaming_activity";
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const ACTION_SHEET_MAX_WIDTH = arg1(dependencyMap[4]).ACTION_SHEET_MAX_WIDTH;
const EmojiIntention = arg1(dependencyMap[5]).EmojiIntention;
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[8]);
obj = { header: {}, container: { gap: 12 } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.md, borderColor: importDefault(dependencyMap[9]).colors.BORDER_STRONG };
obj.preview = obj;
obj.loading = { opacity: 0.5 };
obj.base = { position: "relative" };
const tmp2 = arg1(dependencyMap[6]);
obj.contentContainer = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.inputRow = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.input = { flex: 1, borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.emojis = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
obj.submitting = { opacity: 0.6 };
const obj2 = { flex: 1, borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.emoji = { padding: 8, borderRadius: importDefault(dependencyMap[9]).radii.round, backgroundColor: importDefault(dependencyMap[9]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.defaultEmoji = { aze: false, azj: false };
obj.emojiImage = {};
obj.emojiText = { "Bool(false)": 0, "Bool(false)": 53.614, "Bool(false)": 3, "Bool(false)": "colors" };
let closure_12 = obj.createStyles(obj);
const obj3 = { padding: 8, borderRadius: importDefault(dependencyMap[9]).radii.round, backgroundColor: importDefault(dependencyMap[9]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/icymi/native/content_inventory/ReactActionSheet.tsx");

export default function ReactActionSheet(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const merged = Object.assign(arg0, undefined);
    let obj = {};
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = callback3(ReactActionSheetBase, obj);
    return callback3(arg1(dependencyMap[34]).ICYMIContextProvider, obj);
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
  const intl = arg1(dependencyMap[7]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[7]).t;
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
      const intl2 = arg1(dependencyMap[7]).intl;
      obj = { attachmentsCount: attachments.length };
      const _HermesInternal2 = HermesInternal;
      items.push("> -# *" + intl2.formatToPlainString(arg1(dependencyMap[7]).t.JiNPo+, obj) + "*");
    }
  }
  items.push(reply.reply);
  return items.join("\n");
};
