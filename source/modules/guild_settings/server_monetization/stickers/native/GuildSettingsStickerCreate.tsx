// Module ID: 16316
// Function ID: 126971
// Dependencies: [5, 57, 31, 27, 4991, 5035, 653, 1852, 3806, 33, 4130, 689, 5160, 9862, 5450, 3771, 4674, 16317, 9637, 4466, 4126, 1212, 4025, 1920, 4543, 4541, 4660, 9651, 16318, 9362, 5151, 1392, 7437, 7574, 7645, 2]

// Module 16316
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "getAvatarURL";
import get_ActivityIndicator from "getStickerAssetUrl";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "set";
import { MAX_STICKER_FILE_SIZE } from "STICKER_PICKER_TAB_PANEL_ID";
import jsxProd from "TextInput";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "result";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ HelpdeskArticles: closure_10, UPLOAD_STICKER_SIZE: closure_11 } = ME);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: closure_13 } = set);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.title = _createForOfIteratorHelperLoose;
obj.description = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.help = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.stack = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.emojiPreview = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.stickerPreviewLabel = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj6 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.stickerPreview = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, height: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, width: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, justifyContent: "center", alignItems: "center" };
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, height: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, width: 2 * require("_createForOfIteratorHelperLoose").space.PX_64, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, justifyContent: "center", alignItems: "center" };
obj.stickerPreviewImage = { width: require("_createForOfIteratorHelperLoose").space.PX_96, height: require("_createForOfIteratorHelperLoose").space.PX_96 };
let closure_18 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj8 = { width: require("_createForOfIteratorHelperLoose").space.PX_96, height: require("_createForOfIteratorHelperLoose").space.PX_96 };
let result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx");

export default importAllResult.forwardRef((stickerId) => {
  let c12;
  let c13;
  let c8;
  let dependencyMap;
  let importDefault;
  let tmp8;
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let closure_6;
  c8 = undefined;
  let first;
  let closure_11;
  c12 = undefined;
  c13 = undefined;
  let first1;
  let c16;
  let c17;
  function hasUnsavedChanges(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != _undefined3) {
      let tmp15 = null != closure_6;
      if (tmp15) {
        tmp15 = closure_6 !== _undefined3.name;
      }
      if (!tmp15) {
        let tmp19 = null != c8;
        if (tmp19) {
          tmp19 = c8 !== _undefined3.description;
        }
        if (!tmp19) {
          let tmp23 = null == first1;
          if (!tmp23) {
            tmp23 = first1 === c17;
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
          tmp10 = null != c8;
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
  function handleImagePicker() {
    return _handleImagePicker(...arguments);
  }
  function _handleImagePicker() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = ref(tmp);
    return obj(...arguments);
  }
  function _handleSave() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = ref(tmp);
    return obj(...arguments);
  }
  let tmp = hasUnsavedChanges();
  const ref = ref2.useRef(null);
  const ref1 = ref2.useRef(null);
  ref2 = ref2.useRef(null);
  const tmp5 = ref1(ref2.useState(undefined), 2);
  closure_6 = tmp5[0];
  let closure_7 = tmp6;
  [c8, tmp8] = ref1(ref2.useState(undefined), 2);
  let stickerById = tmp8;
  const tmp9 = ref1(ref2.useState(undefined), 2);
  first = tmp9[0];
  closure_11 = tmp9[1];
  const tmp7 = ref1(ref2.useState(undefined), 2);
  [c12, c13] = ref1(ref2.useState(undefined), 2);
  const tmp12 = ref1(ref2.useState(undefined), 2);
  first1 = tmp12[0];
  const callback = tmp12[1];
  const insets = importDefault(5160)({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2 } }, { ref: ref2, offset: { type: "toBottom" } }];
  const onFocus = importDefault(9862)({ insets, inputs: items, scrollViewRef: ref }).onFocus;
  stickerById = undefined;
  const tmp11 = ref1(ref2.useState(undefined), 2);
  if (null != stickerId) {
    stickerById = stickerById.getStickerById(stickerId);
  }
  const tmp14Result = importDefault(5450)(stickerById);
  c16 = tmp14Result;
  const tmp18 = importDefault(5450)(() => {
    if (null != _undefined3) {
      let customEmojiById = null;
      if (null != _undefined3.tags) {
        customEmojiById = _undefined.getCustomEmojiById(_undefined3.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else if (null == _undefined3.tags) {
        let tmp13;
        if (null != undefined) {
          const byName = outer1_1(outer1_2[15]).getByName(undefined);
          if (null != byName) {
            tmp13 = byName;
          }
          const obj2 = outer1_1(outer1_2[15]);
        }
        let tmp17;
        if (null != tmp13) {
          tmp17 = tmp13;
        }
        return tmp17;
      } else {
        let num = 15;
        if (obj.hasSurrogates(_undefined3.tags)) {
          num = outer1_1(outer1_2[num]);
          let tags = num.convertSurrogateToName(_undefined3.tags, false);
        } else {
          tags = _undefined3.tags;
        }
        obj = outer1_1(outer1_2[15]);
      }
    }
  });
  c17 = tmp18;
  const imperativeHandle = ref2.useImperativeHandle(arg1, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp14Result, tmp18];
  const effect = ref2.useEffect(() => {
    let tmp = null != stickerId;
    if (tmp) {
      tmp = null != _undefined3;
    }
    if (tmp) {
      callback(c17);
      const tmp8 = tmp6(_undefined3.name);
      tmp8(_undefined3.description);
      const current = ref1.current;
      if (null != current) {
        current.setText(_undefined3.name);
      }
      const current2 = ref2.current;
      if (null != current2) {
        const description = _undefined3.description;
        let str = "";
        if (null != description) {
          str = description;
        }
        current2.setText(str);
      }
    }
  }, items1);
  let obj = { ref, style: tmp.container, keyboardShouldPersistTaps: "always" };
  obj = { paddingHorizontal: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16 + insets.bottom };
  obj.contentContainerStyle = obj;
  let tmp24Result = null;
  if (null == stickerId) {
    obj = {};
    const obj1 = { variant: "heading-md/semibold", style: tmp.title };
    const intl = stickerId(1212).intl;
    obj1.children = intl.string(stickerId(1212).t["9N2OWD"]);
    const items2 = [callback(stickerId(4126).Text, obj1), , , ];
    let obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description };
    const intl2 = stickerId(1212).intl;
    const obj3 = {};
    let obj6 = stickerId(4025);
    const obj4 = { useKibibytes: true };
    obj3.fileSize = obj6.formatKbSize(first1, obj4);
    obj2.children = intl2.format(stickerId(1212).t.hxLviw, obj3);
    items2[1] = callback(stickerId(4126).Text, obj2);
    const obj5 = { variant: "text-sm/medium", color: "text-muted", style: tmp.help };
    const intl3 = stickerId(1212).intl;
    obj6 = {};
    let obj10 = importDefault(1920);
    obj6.articleUrl = obj10.getArticleURL(first.STICKERS_UPLOAD);
    obj5.children = intl3.format(stickerId(1212).t.UBj0aX, obj6);
    items2[2] = callback(stickerId(4126).Text, obj5);
    const obj7 = {};
    const intl4 = stickerId(1212).intl;
    obj7.text = intl4.string(stickerId(1212).t.O1REe1);
    obj7.onPress = handleImagePicker;
    let str2 = "secondary";
    if (null == first) {
      str2 = "primary";
    }
    obj7.variant = str2;
    items2[3] = callback(stickerId(4543).Button, obj7);
    obj.children = items2;
    tmp24Result = c17(c16, obj);
    const tmp24 = c17;
    const tmp25 = c16;
    const tmp26 = callback;
  }
  const items3 = [tmp24Result, ];
  const obj8 = { style: tmp.stack };
  const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel };
  const intl5 = stickerId(1212).intl;
  obj9.children = intl5.string(stickerId(1212).t.gjdiKE);
  const items4 = [callback(stickerId(4126).Text, obj9), , , , , , ];
  obj10 = { style: tmp.stickerPreview, disabled: null != tmp14Result, onPress: handleImagePicker, accessibilityRole: "button" };
  const intl6 = stickerId(1212).intl;
  obj10.accessibilityLabel = intl6.string(stickerId(1212).t.O1REe1);
  if (null != tmp14Result) {
    const obj11 = { sticker: tmp14Result, size: importDefault(689).space.PX_96, animated: true };
    let tmp37 = callback(importDefault(9651), obj11);
    const tmp43 = importDefault(9651);
  } else if (null != first) {
    const obj12 = {};
    const obj13 = { uri: first };
    obj12.source = obj13;
    obj12.style = tmp.stickerPreviewImage;
    obj12.resizeMode = "contain";
    tmp37 = callback(closure_6, obj12);
  } else {
    const obj14 = { size: "lg" };
    tmp37 = callback(stickerId(16318).StickerPlusIcon, obj14);
  }
  obj10.children = tmp37;
  items4[1] = callback(stickerId(4660).PressableHighlight, obj10);
  const obj15 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel };
  const intl7 = stickerId(1212).intl;
  obj15.children = intl7.string(stickerId(1212).t["3BQmiC"]);
  items4[2] = callback(stickerId(4126).Text, obj15);
  const obj16 = {
    style: tmp.emojiPreview,
    onPress() {
      let obj = stickerId(outer1_2[29]);
      obj = { pickerIntention: _undefined2.GUILD_STICKER_RELATED_EMOJI, guildId: closure_1, onPressEmoji: closure_15 };
      const result = obj.openEmojiPickerActionSheet(obj);
    }
  };
  if (null != first1) {
    const obj17 = { fastImageStyle: { width: 24, height: 24 }, name: null == first1.id ? first1.surrogates : first1.name };
    let emojiURL;
    if (null != first1.id) {
      let obj22 = importDefault(1392);
      const obj18 = {};
      ({ id: obj24.id, animated: obj24.animated } = first1);
      obj18.size = c12;
      emojiURL = obj22.getEmojiURL(obj18);
    }
    obj17.src = emojiURL;
    let tmp49Result = callback(importDefault(5151), obj17);
    const tmp49 = callback;
    const tmp52 = importDefault(5151);
  } else {
    tmp49Result = callback(stickerId(7437).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  const items5 = [tmp49Result, ];
  const obj19 = { variant: "text-md/semibold", color: "input-placeholder-text-default" };
  if (null != first1) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + first1.name + ":";
  } else {
    const intl8 = stickerId(1212).intl;
    combined = intl8.string(stickerId(1212).t.QTK0TJ);
  }
  obj19.children = combined;
  items5[1] = callback(stickerId(4126).Text, obj19);
  obj16.children = items5;
  items4[3] = c17(stickerId(4660).PressableHighlight, obj16);
  const obj20 = { ref: ref1 };
  const intl9 = stickerId(1212).intl;
  obj20.label = intl9.string(stickerId(1212).t["0VRh6n"]);
  const intl10 = stickerId(1212).intl;
  obj20.placeholder = intl10.string(stickerId(1212).t["3fGttT"]);
  obj20.onChange = tmp5[1];
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
  items4[4] = callback(stickerId(7574).TextInput, obj20);
  const obj21 = { ref: ref2, maxLength: 100 };
  const intl11 = stickerId(1212).intl;
  obj21.label = intl11.string(stickerId(1212).t.uGccej);
  const intl12 = stickerId(1212).intl;
  obj21.placeholder = intl12.string(stickerId(1212).t.zwR0fa);
  obj21.onChange = tmp8;
  obj21.onFocus = onFocus;
  items4[5] = callback(stickerId(7645).TextArea, obj21);
  obj22 = {
    onPress: function handleSave() {
      return _handleSave(...arguments);
    }
  };
  const intl13 = stickerId(1212).intl;
  obj22.text = intl13.string(stickerId(1212).t["R3BPH+"]);
  let str6 = "secondary";
  if (hasUnsavedChanges(false)) {
    str6 = "primary";
  }
  obj22.variant = str6;
  obj22.disabled = !hasUnsavedChanges(false);
  obj22.loading = false;
  items4[6] = callback(stickerId(4543).Button, obj22);
  obj8.children = items4;
  items3[1] = c17(stickerId(4541).Stack, obj8);
  obj.children = items3;
  return c17(closure_7, obj);
});
