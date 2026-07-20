// Module ID: 16129
// Function ID: 124340
// Dependencies: []

// Module 16129
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Image: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[3]);
({ HelpdeskArticles: closure_10, UPLOAD_STICKER_SIZE: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: closure_13 } = arg1(dependencyMap[7]));
const MAX_STICKER_FILE_SIZE = arg1(dependencyMap[8]).MAX_STICKER_FILE_SIZE;
const tmp4 = arg1(dependencyMap[7]);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj1 = { marginTop: importDefault(dependencyMap[11]).space.PX_16, marginBottom: importDefault(dependencyMap[11]).space.PX_8 };
obj.title = obj1;
const tmp5 = arg1(dependencyMap[9]);
obj.description = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
const obj2 = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.help = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
const obj3 = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.stack = { marginTop: importDefault(dependencyMap[11]).space.PX_8 };
const obj4 = { marginTop: importDefault(dependencyMap[11]).space.PX_8 };
obj.emojiPreview = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingVertical: importDefault(dependencyMap[11]).space.PX_12, marginBottom: importDefault(dependencyMap[11]).space.PX_4, borderRadius: importDefault(dependencyMap[11]).radii.lg, flexDirection: "row", alignItems: "center", gap: importDefault(dependencyMap[11]).space.PX_12 };
const obj5 = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingVertical: importDefault(dependencyMap[11]).space.PX_12, marginBottom: importDefault(dependencyMap[11]).space.PX_4, borderRadius: importDefault(dependencyMap[11]).radii.lg, flexDirection: "row", alignItems: "center", gap: importDefault(dependencyMap[11]).space.PX_12 };
obj.stickerPreviewLabel = { marginTop: importDefault(dependencyMap[11]).space.PX_8 };
const obj6 = { marginTop: importDefault(dependencyMap[11]).space.PX_8 };
obj.stickerPreview = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, marginBottom: importDefault(dependencyMap[11]).space.PX_8, height: 2 * importDefault(dependencyMap[11]).space.PX_64, width: 2 * importDefault(dependencyMap[11]).space.PX_64, borderRadius: importDefault(dependencyMap[11]).radii.lg, justifyContent: "center", alignItems: "center" };
const obj7 = { backgroundColor: importDefault(dependencyMap[11]).colors.INPUT_BACKGROUND_DEFAULT, marginBottom: importDefault(dependencyMap[11]).space.PX_8, height: 2 * importDefault(dependencyMap[11]).space.PX_64, width: 2 * importDefault(dependencyMap[11]).space.PX_64, borderRadius: importDefault(dependencyMap[11]).radii.lg, justifyContent: "center", alignItems: "center" };
obj.stickerPreviewImage = { width: importDefault(dependencyMap[11]).space.PX_96, height: importDefault(dependencyMap[11]).space.PX_96 };
let closure_18 = obj1.createStyles(obj);
const obj8 = { width: importDefault(dependencyMap[11]).space.PX_96, height: importDefault(dependencyMap[11]).space.PX_96 };
const forwardRefResult = importAllResult.forwardRef((stickerId) => {
  let tmp8;
  stickerId = stickerId.stickerId;
  const arg1 = stickerId;
  ({ guildId: closure_1, onFinish: closure_2 } = stickerId);
  let closure_6;
  let closure_8;
  let first;
  let closure_11;
  let closure_12;
  let closure_13;
  let MAX_STICKER_FILE_SIZE;
  let tmp14Result;
  let tmp18;
  function hasUnsavedChanges(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != tmp14Result) {
      let tmp15 = null != closure_6;
      if (tmp15) {
        tmp15 = closure_6 !== tmp14Result.name;
      }
      if (!tmp15) {
        let tmp19 = null != closure_8;
        if (tmp19) {
          tmp19 = closure_8 !== tmp14Result.description;
        }
        if (!tmp19) {
          let tmp23 = null == first1;
          if (!tmp23) {
            tmp23 = first1 === tmp18;
          }
          tmp19 = !tmp23;
        }
        tmp15 = tmp19;
      }
      let tmp = tmp15;
    } else {
      let tmp10 = null != closure_6;
      if (flag) {
        if (tmp10) {
          let length;
          if (null != closure_6) {
            length = closure_6.length;
          }
          tmp10 = length > 0;
        }
        if (!tmp10) {
          tmp10 = null != first;
        }
        if (!tmp10) {
          tmp10 = null != first1;
        }
        if (!tmp10) {
          tmp10 = null != closure_8;
        }
        tmp = tmp10;
      } else {
        tmp = tmp10;
        if (tmp10) {
          let length1;
          if (null != closure_6) {
            length1 = closure_6.length;
          }
          tmp = length1 > 0;
        }
        if (tmp) {
          tmp = null != first;
        }
        if (tmp) {
          tmp = null != first1;
        }
      }
    }
    return tmp;
  }
  const callback3 = hasUnsavedChanges;
  function handleImagePicker() {
    return _handleImagePicker(...arguments);
  }
  function _handleImagePicker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = ref(tmp);
    const _handleImagePicker = obj;
    return obj(...arguments);
  }
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = ref(tmp);
    const _handleSave = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  const ref = importAllResult.useRef(null);
  let closure_3 = ref;
  const ref1 = importAllResult.useRef(null);
  const callback = ref1;
  const ref2 = importAllResult.useRef(null);
  const tmp5 = callback(ref2.useState(undefined), 2);
  closure_6 = tmp5[0];
  const tmp6 = tmp5[1];
  [closure_8, tmp8] = callback(ref2.useState(undefined), 2);
  let stickerById = tmp8;
  const tmp9 = callback(ref2.useState(undefined), 2);
  first = tmp9[0];
  closure_11 = tmp9[1];
  const tmp7 = callback(ref2.useState(undefined), 2);
  [closure_12, closure_13] = callback(ref2.useState(undefined), 2);
  const tmp12 = callback(ref2.useState(undefined), 2);
  const first1 = tmp12[0];
  MAX_STICKER_FILE_SIZE = first1;
  const callback2 = tmp12[1];
  const insets = importDefault(dependencyMap[12])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2 } }, { ref: ref2, offset: { type: "toBottom" } }];
  const onFocus = importDefault(dependencyMap[13])({ insets, inputs: items, scrollViewRef: ref }).onFocus;
  stickerById = undefined;
  const tmp11 = callback(ref2.useState(undefined), 2);
  if (null != stickerId) {
    stickerById = stickerById.getStickerById(stickerId);
  }
  tmp14Result = importDefault(dependencyMap[14])(stickerById);
  tmp18 = importDefault(dependencyMap[14])(() => {
    if (null != tmp14Result) {
      let customEmojiById = null;
      if (null != tmp14Result.tags) {
        customEmojiById = customEmojiById.getCustomEmojiById(tmp14Result.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else if (null == tmp14Result.tags) {
        let tmp13;
        if (null != undefined) {
          const byName = callback(closure_2[15]).getByName(undefined);
          if (null != byName) {
            tmp13 = byName;
          }
          const obj2 = callback(closure_2[15]);
        }
        let tmp17;
        if (null != tmp13) {
          tmp17 = tmp13;
        }
        return tmp17;
      } else {
        let num = 15;
        if (obj.hasSurrogates(tmp14Result.tags)) {
          num = callback(closure_2[num]);
          let tags = num.convertSurrogateToName(tmp14Result.tags, false);
        } else {
          tags = tmp14Result.tags;
        }
        const obj = callback(closure_2[15]);
      }
    }
  });
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp14Result, tmp18];
  const effect = importAllResult.useEffect(() => {
    let tmp = null != stickerId;
    if (tmp) {
      tmp = null != tmp14Result;
    }
    if (tmp) {
      callback2(tmp18);
      const tmp8 = tmp6(tmp14Result.name);
      tmp8(tmp14Result.description);
      const current = ref1.current;
      if (null != current) {
        current.setText(tmp14Result.name);
      }
      const current2 = ref2.current;
      if (null != current2) {
        const description = tmp14Result.description;
        let str = "";
        if (null != description) {
          str = description;
        }
        current2.setText(str);
      }
    }
  }, items1);
  let obj = { ref, style: tmp.container, keyboardShouldPersistTaps: "always" };
  obj = { paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingBottom: importDefault(dependencyMap[11]).space.PX_16 + insets.bottom };
  obj.contentContainerStyle = obj;
  let tmp24Result = null;
  if (null == stickerId) {
    obj = {};
    const obj1 = { variant: "heading-md/semibold", style: tmp.title };
    const intl = arg1(dependencyMap[21]).intl;
    obj1.children = intl.string(arg1(dependencyMap[21]).t.9N2OWD);
    const items2 = [callback2(arg1(dependencyMap[20]).Text, obj1), , , ];
    const obj2 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", style: tmp.description };
    const intl2 = arg1(dependencyMap[21]).intl;
    const obj3 = {};
    let obj6 = arg1(dependencyMap[22]);
    const obj4 = { useKibibytes: true };
    obj3.fileSize = obj6.formatKbSize(MAX_STICKER_FILE_SIZE, obj4);
    obj2.children = intl2.format(arg1(dependencyMap[21]).t.hxLviw, obj3);
    items2[1] = callback2(arg1(dependencyMap[20]).Text, obj2);
    const obj5 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", style: tmp.help };
    const intl3 = arg1(dependencyMap[21]).intl;
    obj6 = {};
    let obj10 = importDefault(dependencyMap[23]);
    obj6.articleUrl = obj10.getArticleURL(first.STICKERS_UPLOAD);
    obj5.children = intl3.format(arg1(dependencyMap[21]).t.UBj0aX, obj6);
    items2[2] = callback2(arg1(dependencyMap[20]).Text, obj5);
    const obj7 = {};
    const intl4 = arg1(dependencyMap[21]).intl;
    obj7.text = intl4.string(arg1(dependencyMap[21]).t.O1REe1);
    obj7.onPress = handleImagePicker;
    let str2 = "secondary";
    if (null == first) {
      str2 = "primary";
    }
    obj7.variant = str2;
    items2[3] = callback2(arg1(dependencyMap[24]).Button, obj7);
    obj.children = items2;
    tmp24Result = tmp18(tmp14Result, obj);
    const tmp24 = tmp18;
    const tmp25 = tmp14Result;
    const tmp26 = callback2;
  }
  const items3 = [tmp24Result, ];
  const obj8 = { style: tmp.stack };
  const obj9 = { style: tmp.stickerPreviewLabel };
  const intl5 = arg1(dependencyMap[21]).intl;
  obj9.children = intl5.string(arg1(dependencyMap[21]).t.gjdiKE);
  const items4 = [callback2(arg1(dependencyMap[20]).Text, obj9), , , , , , ];
  obj10 = { style: tmp.stickerPreview, disabled: null != tmp14Result, onPress: handleImagePicker, accessibilityRole: "button" };
  const intl6 = arg1(dependencyMap[21]).intl;
  obj10.accessibilityLabel = intl6.string(arg1(dependencyMap[21]).t.O1REe1);
  if (null != tmp14Result) {
    const obj11 = { sticker: tmp14Result, size: importDefault(dependencyMap[11]).space.PX_96, animated: true };
    let tmp37 = callback2(importDefault(dependencyMap[27]), obj11);
    const tmp43 = importDefault(dependencyMap[27]);
  } else if (null != first) {
    const obj12 = {};
    const obj13 = { uri: first };
    obj12.source = obj13;
    obj12.style = tmp.stickerPreviewImage;
    obj12.resizeMode = "contain";
    tmp37 = callback2(closure_6, obj12);
  } else {
    const obj14 = { size: "lg" };
    tmp37 = callback2(arg1(dependencyMap[28]).StickerPlusIcon, obj14);
  }
  obj10.children = tmp37;
  items4[1] = callback2(arg1(dependencyMap[26]).PressableHighlight, obj10);
  const obj15 = { style: tmp.stickerPreviewLabel };
  const intl7 = arg1(dependencyMap[21]).intl;
  obj15.children = intl7.string(arg1(dependencyMap[21]).t.3BQmiC);
  items4[2] = callback2(arg1(dependencyMap[20]).Text, obj15);
  const obj16 = {
    style: tmp.emojiPreview,
    onPress() {
      let obj = stickerId(closure_2[29]);
      obj = { pickerIntention: constants.GUILD_STICKER_RELATED_EMOJI, guildId: closure_1, onPressEmoji: closure_15 };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  };
  if (null != first1) {
    const obj17 = { fastImageStyle: { aze: false, azj: false }, name: null == first1.id ? first1.surrogates : first1.name };
    let emojiURL;
    if (null != first1.id) {
      let obj22 = importDefault(dependencyMap[31]);
      const obj18 = {};
      ({ id: obj24.id, animated: obj24.animated } = first1);
      obj18.size = closure_12;
      emojiURL = obj22.getEmojiURL(obj18);
    }
    obj17.src = emojiURL;
    let tmp49Result = callback2(importDefault(dependencyMap[30]), obj17);
    const tmp49 = callback2;
    const tmp52 = importDefault(dependencyMap[30]);
  } else {
    tmp49Result = callback2(arg1(dependencyMap[32]).ReactionIcon, {});
  }
  const items5 = [tmp49Result, ];
  const obj19 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
  if (null != first1) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + first1.name + ":";
  } else {
    const intl8 = arg1(dependencyMap[21]).intl;
    combined = intl8.string(arg1(dependencyMap[21]).t.QTK0TJ);
  }
  obj19.children = combined;
  items5[1] = callback2(arg1(dependencyMap[20]).Text, obj19);
  obj16.children = items5;
  items4[3] = tmp18(arg1(dependencyMap[26]).PressableHighlight, obj16);
  const obj20 = { ref: ref1 };
  const intl9 = arg1(dependencyMap[21]).intl;
  obj20.label = intl9.string(arg1(dependencyMap[21]).t.0VRh6n);
  const intl10 = arg1(dependencyMap[21]).intl;
  obj20.placeholder = intl10.string(arg1(dependencyMap[21]).t.3fGttT);
  obj20.onChange = tmp6;
  obj20.onFocus = onFocus;
  obj20.onSubmitEditing = function onSubmitEditing() {
    const current = ref2.current;
    if (null != current) {
      current.focus();
    }
    const current2 = ref.current;
    if (null != current2) {
      const obj = { animated: true };
      current2.scrollToEnd(obj);
    }
  };
  obj20.isDisabled = false;
  obj20.isClearable = true;
  obj20.returnKeyType = "next";
  obj20.submitBehavior = "submit";
  items4[4] = callback2(arg1(dependencyMap[33]).TextInput, obj20);
  const obj21 = { ref: ref2, maxLength: 100 };
  const intl11 = arg1(dependencyMap[21]).intl;
  obj21.label = intl11.string(arg1(dependencyMap[21]).t.uGccej);
  const intl12 = arg1(dependencyMap[21]).intl;
  obj21.placeholder = intl12.string(arg1(dependencyMap[21]).t.zwR0fa);
  obj21.onChange = tmp8;
  obj21.onFocus = onFocus;
  items4[5] = callback2(arg1(dependencyMap[34]).TextArea, obj21);
  obj22 = {
    onPress: function handleSave() {
      return _handleSave(...arguments);
    }
  };
  const intl13 = arg1(dependencyMap[21]).intl;
  obj22.text = intl13.string(arg1(dependencyMap[21]).t.R3BPH+);
  let str6 = "secondary";
  if (hasUnsavedChanges(false)) {
    str6 = "primary";
  }
  obj22.variant = str6;
  obj22.disabled = !hasUnsavedChanges(false);
  obj22.loading = false;
  items4[6] = callback2(arg1(dependencyMap[24]).Button, obj22);
  obj8.children = items4;
  items3[1] = tmp18(arg1(dependencyMap[25]).Stack, obj8);
  obj.children = items3;
  return tmp18(tmp6, obj);
});
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx");

export default forwardRefResult;
