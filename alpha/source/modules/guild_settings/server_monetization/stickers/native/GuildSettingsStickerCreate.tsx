// Module ID: 19898
// Function ID: 19899
// Name: GuildSettingsStickerCreate
// Dependencies: [5, 32, 19, 17, 6916, 6957, 1072, 1388, 4969, 21, 5141, 575, 5730, 11543, 5735, 5087, 8344, 19899, 10397, 6680, 5747, 1113, 6571, 2190, 5754, 6147, 7106, 10412, 19900, 10070, 7420, 1411, 9580, 7208, 7373, 2]
// Exports: default

// Module 19898 (GuildSettingsStickerCreate)
import nativeDefault from "native" /* 575 */;
import StickersConstants from "StickersConstants" /* 4969 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5087 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5730 */;
import reactDefault from "react" /* 5735 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10070 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 11543 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore from "EmojiStore" /* 6916 */;
import StickersStore_mod from "StickersStore" /* 6957 */;
import Constants from "Constants" /* 1072 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let c4;

let c10;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let tmp14;
let unpackModuleId;
const AvatarUtilsDefault = tmp14(1411);
const HelpdeskUtilsDefault = tmp14(2190);
const EmojiDefault = tmp14(7420);
const StickerDefault = tmp14(10412);
({ Image: metroRequire, ScrollView: metroImportDefault } = react_native);
let StickersStore = StickersStore_mod;
({ HelpdeskArticles: c10, UPLOAD_STICKER_SIZE: unpackModuleId } = Constants);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = EmojiConstants);
const MAX_STICKER_FILE_SIZE = StickersConstants.MAX_STICKER_FILE_SIZE;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, description: obj4, help: obj5, stack: obj6, emojiPreview: obj7, stickerPreviewLabel: obj8, stickerPreview: size, stickerPreviewImage: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj8 = { marginTop: nativeDefault.space.PX_8 };
size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginBottom: nativeDefault.space.PX_8, height: 2 * nativeDefault.space.PX_64, width: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center" };
size1 = { width: nativeDefault.space.PX_96, height: nativeDefault.space.PX_96 };
let closure_18 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx");

export default function GuildSettingsStickerCreate(stickerId) {
  let UBj0aX;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c12;
  let c13;
  let c6;
  let c8;
  let combined;
  let emojiURL;
  let format;
  let format2;
  let guildId;
  let hxLviw;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items;
  let items3;
  let items4;
  let items5;
  let obj11;
  let obj19;
  let obj5;
  let obj8;
  let obj9;
  let str;
  let str3;
  let tmp14Result;
  let tmp32Result;
  let tmp32Result2;
  let tmp6;
  let tmp8;
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let ref3;
  c6 = undefined;
  c8 = undefined;
  size = undefined;
  c13 = undefined;
  let user;
  let closure_17;
  function hasUnsavedChanges(arg0) {
    let tmp3;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != user) {
      let tmp13 = !(!flag && null != _undefined && _undefined.length < 2);
      const tmp10 = !flag && null != _undefined && _undefined.length < 2;
      if (tmp13) {
        let tmp15 = null != _undefined && tmp14 !== tmp.name;
        if (!tmp15) {
          let tmp17 = null != c8 && tmp16 !== tmp.description;
          if (!tmp17) {
            tmp17 = !(null == first1 || tmp18 === closure_17);
            const tmp19 = null == first1 || tmp18 === closure_17;
          }
          tmp15 = tmp17;
        }
        tmp13 = tmp15;
      }
      tmp3 = tmp13;
    } else {
      let tmp2 = null != _undefined;
      if (flag) {
        if (tmp2) {
          let length;
          if (_undefined != null) {
            length = arr.length;
          }
          tmp2 = length > 0;
        }
        if (!tmp2) {
          tmp2 = null != first;
        }
        if (!tmp2) {
          tmp2 = null != first1;
        }
        if (!tmp2) {
          tmp2 = null != c8;
        }
        tmp3 = tmp2;
      } else {
        tmp3 = tmp2 && arr.length >= 2 && null != first && null != first1;
      }
    }
    return tmp3;
  }
  let obj = function _handleImagePicker() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let base64;
          let mimeType;
          let errorStr;
          let originalMd5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = undefined;
              base64 = undefined;
              mimeType = undefined;
              errorStr = undefined;
              originalMd5 = undefined;
              c3 = 1;
              const obj6 = { size, preferredMimeType: "image/png" };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj3.openImagePicker(obj6), done: false };
              obj3 = tmp(closure_2[16]);
              return obj7;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj2 = closure_0(closure_2[17]);
              const result = obj2.showGuildSettingsStickerError();
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              base64 = closure_0.base64;
              mimeType = closure_0.mimeType;
              errorStr = closure_0.errorStr;
              originalMd5 = closure_0.originalMd5;
              if ("Cancelled" === errorStr) {
                c3 = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (null != base64) {
                  if ("image/png" === mimeType) {
                    closure_129_11(base64);
                    closure_129_13(originalMd5);
                    c3 = 0;
                  }
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Invalid image type, only PNG is supported.");
                throw error;
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleSave() {
    let originalMd5;
    obj = _asyncToGenerator(async (arg0, value) => {
      let description;
      let description2;
      let obj11;
      let obj13;
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
        let c5;
        try {
          let closure_2;
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              c5 = 1;
              if (null == stickerId) {
                if (null != _undefined) {
                  if (_undefined.length >= 2) {
                    if (null != first1) {
                      if (null != uri) {
                        const obj6 = { guildId, name: _undefined, tags: obj13.getStickerTagForEmoji(tmp41), description, uri: tmp42, mimeType: "image/png", platform: "mobile", originalMd5 };
                        const createGuildSticker = description(closure_2[18]).createGuildSticker;
                        const tmp45 = description(closure_2[18]);
                        obj13 = description(closure_2[19]);
                        description = closure_2_8;
                        if (closure_2_8 == null) {
                          description = "";
                        }
                        c3 = 2;
                        c6 = 1;
                        const obj7 = { value: createGuildSticker(obj6), done: false };
                        return obj7;
                      }
                    }
                  }
                }
                c5 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (null != _undefined) {
                  if (_undefined.length >= 2) {
                    if (null != first1) {
                      const obj8 = { name: _undefined, tags: obj11.getStickerTagForEmoji(tmp33), description: description2 };
                      const updateGuildSticker = description(closure_2[18]).updateGuildSticker;
                      const tmp36 = description(closure_2[18]);
                      obj11 = description(closure_2[19]);
                      description2 = closure_2_8;
                      const tmp37 = guildId;
                      if (closure_2_8 == null) {
                        description2 = "";
                      }
                      c3 = 3;
                      c6 = 1;
                      const obj9 = { value: updateGuildSticker(tmp37, tmp32, obj8), done: false };
                      return obj9;
                    }
                  }
                }
                c5 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else {
            if (1 === c3) {
              c5 = 0;
              const obj5 = description(closure_2[17]);
              const result = obj5.showGuildSettingsStickerError();
            } else {
              if (2 === c3) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  closure_130_2();
                  const obj3 = description(closure_2[17]);
                  const result1 = obj3.showGuildSettingsStickerSuccess();
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c6 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_130_2();
                obj = description(closure_2[17]);
                const result2 = obj.showGuildSettingsStickerSuccess();
              }
              c5 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          let closure_4 = tmp25;
          if (0 === c5) {
            c6 = 3;
            throw tmp25;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const ref = stickerId.ref;
  let tmp = hasUnsavedChanges();
  obj = ref3;
  const ref1 = ref3.useRef(null);
  const ref2 = ref3.useRef(null);
  ref3 = ref3.useRef(null);
  [c6, tmp6] = ref2(ref3.useState(undefined), 2);
  let c7 = tmp6;
  const tmp5 = ref2(ref3.useState(undefined), 2);
  const tmp7 = ref2(ref3.useState(undefined), 2);
  [c8, tmp8] = tmp7;
  StickersStore = tmp8;
  let tmp9 = ref2(ref3.useState(undefined), 2);
  const uri = tmp9[0];
  let closure_11 = tmp9[1];
  [c12, c13] = ref2(ref3.useState(undefined), 2);
  const tmp11 = ref2(ref3.useState(undefined), 2);
  const tmp12 = ref2(ref3.useState(undefined), 2);
  const first1 = tmp12[0];
  const onPressEmoji = tmp12[1];
  const tmp14 = importDefault;
  let tmp15 = dependencyMap;
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj2 = { insets, inputs: items, scrollViewRef: ref1 };
  let obj3 = { ref: ref2, offset: { type: "toRef", ref: ref3 } };
  items = [obj3, { ref: ref3, offset: { type: "toBottom" } }];
  const onFocus = useSafeAreaAvoidingInputsDefault(obj2).onFocus;
  let stickerById;
  const tmp16 = reactDefault;
  if (null != stickerId) {
    const tmp18 = StickersStore;
    stickerById = StickersStore.getStickerById(stickerId);
  }
  function handleImagePicker() {
    return obj(...arguments);
  }
  const tmp16Result = tmp16(stickerById);
  user = tmp16Result;
  const tmp20 = reactDefault(() => {
    if (null != user) {
      let customEmojiById = null;
      if (null != user.tags) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else {
        let tmp8;
        if (null != user.tags) {
          let tags;
          obj = UnicodeEmojisDefault;
          if (obj.hasSurrogates(user.tags)) {
            const obj2 = UnicodeEmojisDefault;
            tags = obj2.convertSurrogateToName(tmp.tags, false);
          } else {
            tags = tmp.tags;
          }
          tmp8 = tags;
        }
        let tmp9;
        if (null != tmp8) {
          const obj3 = UnicodeEmojisDefault;
          const byName = obj3.getByName(tmp8);
          tmp9 = byName;
        }
        let tmp13;
        if (null != tmp9) {
          tmp13 = tmp9;
        }
        return tmp13;
      }
    }
  });
  closure_17 = tmp20;
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp16Result, tmp20];
  const effect = obj.useEffect(() => {
    const tmp = null != stickerId && null != user;
    if (tmp) {
      onPressEmoji(closure_17);
      _undefined2(user.name);
      _undefined3(user.description);
      const current = ref2.current;
      if (current != null) {
        current.setText(user.name);
      }
      const current2 = ref3.current;
      if (current2 != null) {
        let str = tmp7.description;
        const setText = current2.setText;
        if (str == null) {
          str = "";
        }
        setText(str);
      }
    }
  }, items1);
  let obj4 = { ref: ref1, style: tmp.container, keyboardShouldPersistTaps: "always", contentContainerStyle: obj5, children: items3 };
  obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  let tmp23Result = null;
  const tmp24 = c7;
  if (null == stickerId) {
    const tmp26 = user;
    let obj6 = { variant: "heading-md/semibold", style: tmp.title, children: intl.string(stickerId(1113).t["9N2OWD"]) };
    const Text = stickerId(5747).Text;
    intl = stickerId(1113).intl;
    const items2 = [onPressEmoji(Text, obj6), , , ];
    let obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: format(hxLviw, obj8) };
    const Text2 = stickerId(5747).Text;
    const intl2 = stickerId(1113).intl;
    format = intl2.format;
    obj8 = { fileSize: obj9.formatKbSize(first1, { useKibibytes: true }) };
    hxLviw = stickerId(1113).t.hxLviw;
    obj9 = stickerId(6571);
    items2[1] = onPressEmoji(Text2, obj7);
    let obj10 = { variant: "text-sm/medium", color: "text-muted", style: tmp.help, children: format2(UBj0aX, obj11) };
    const Text3 = stickerId(5747).Text;
    const intl3 = stickerId(1113).intl;
    format2 = intl3.format;
    obj11 = { articleUrl: tmp14Result.getArticleURL(uri.STICKERS_UPLOAD) };
    UBj0aX = stickerId(1113).t.UBj0aX;
    tmp14Result = HelpdeskUtilsDefault;
    items2[2] = onPressEmoji(Text3, obj10);
    let obj12 = { text: intl4.string(stickerId(1113).t.O1REe1), onPress: handleImagePicker, variant: str };
    const Button = stickerId(5754).Button;
    intl4 = stickerId(1113).intl;
    str = "secondary";
    const tmp27 = onPressEmoji;
    if (null == uri) {
      str = "primary";
    }
    let obj13 = { children: items2 };
    items2[3] = tmp27(Button, obj12);
    tmp23Result = tmp23(tmp26, obj13);
  }
  items3 = [tmp23Result, ];
  const tmp32 = onPressEmoji;
  const obj14 = { style: tmp.stack, children: items4 };
  const Stack = stickerId(6147).Stack;
  const obj15 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: intl5.string(stickerId(1113).t.gjdiKE) };
  const Text4 = stickerId(5747).Text;
  intl5 = stickerId(1113).intl;
  items4 = [onPressEmoji(Text4, obj15), , , , , , ];
  const obj16 = { style: tmp.stickerPreview, disabled: null != tmp16Result, onPress: handleImagePicker, accessibilityRole: "button", accessibilityLabel: intl6.string(stickerId(1113).t.O1REe1), children: tmp32Result };
  const PressableHighlight = stickerId(7106).PressableHighlight;
  intl6 = stickerId(1113).intl;
  if (null != tmp16Result) {
    const obj17 = { sticker: tmp16Result, size: nativeDefault.space.PX_96, animated: true };
    const tmp14Result4 = StickerDefault;
    tmp32Result = tmp32(tmp14Result4, obj17);
  } else if (null != uri) {
    const obj18 = { source: obj19, style: tmp.stickerPreviewImage, resizeMode: "contain" };
    obj19 = { uri };
    tmp32Result = tmp32(c6, obj18);
  } else {
    tmp32Result = tmp32(tmp31(19900).StickerPlusIcon, { size: "lg" });
  }
  items4[1] = tmp32(PressableHighlight, obj16);
  const obj20 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: intl7.string(stickerId(1113).t["3BQmiC"]) };
  const Text5 = tmp31(5747).Text;
  intl7 = tmp31(1113).intl;
  items4[2] = tmp32(Text5, obj20);
  const obj21 = {
    style: tmp.emojiPreview,
    onPress() {
      obj = openEmojiPickerActionSheet;
      const obj2 = { pickerIntention: map1.GUILD_STICKER_RELATED_EMOJI, guildId: importDefault, onPressEmoji };
      const result = obj.openEmojiPickerActionSheet(obj2);
    },
    children: items5
  };
  const PressableHighlight2 = tmp31(7106).PressableHighlight;
  if (null != first1) {
    const obj22 = { fastImageStyle: { width: 24, height: 24 }, name: null == first1.id ? first1.surrogates : first1.name, src: emojiURL };
    emojiURL = undefined;
    const tmp14Result5 = EmojiDefault;
    if (null != first1.id) {
      const obj23 = { id: null, animated: null, size };
      ({ id: obj25.id, animated: obj25.animated } = first1);
      const tmp14Result6 = AvatarUtilsDefault;
      emojiURL = tmp14Result6.getEmojiURL(obj23);
    }
    tmp32Result2 = tmp32(tmp14Result5, obj22);
  } else {
    tmp32Result2 = tmp32(tmp31(9580).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  items5 = [tmp32Result2, ];
  const Text6 = tmp31(5747).Text;
  if (null != first1) {
    const tmp41 = globalThis;
    const _HermesInternal = HermesInternal;
    combined = ":" + first1.name + ":";
  } else {
    const intl8 = tmp31(1113).intl;
    combined = intl8.string(tmp31(1113).t.QTK0TJ);
  }
  items5[1] = tmp32(Text6, { variant: "text-md/semibold", color: "input-placeholder-text-default", children: combined });
  items4[3] = closure_17(PressableHighlight2, obj21);
  const obj24 = {
    ref: ref2,
    label: intl9.string(stickerId(1113).t["0VRh6n"]),
    placeholder: intl10.string(stickerId(1113).t["3fGttT"]),
    onChange: tmp6,
    onFocus,
    onSubmitEditing() {
      const current = ref3.current;
      if (current != null) {
        current.focus();
      }
      const current2 = ref1.current;
      if (current2 != null) {
        current2.scrollToEnd({ animated: true });
      }
    },
    disabled: false,
    clearable: true,
    returnKeyType: "next",
    submitBehavior: "submit"
  };
  const TextInput = tmp31(7208).TextInput;
  intl9 = tmp31(1113).intl;
  intl10 = tmp31(1113).intl;
  items4[4] = tmp32(TextInput, obj24);
  const obj26 = { ref: ref3, maxLength: 100, label: intl11.string(stickerId(1113).t.uGccej), placeholder: intl12.string(stickerId(1113).t.zwR0fa), onChange: tmp8, onFocus };
  const TextArea = tmp31(7373).TextArea;
  intl11 = tmp31(1113).intl;
  intl12 = tmp31(1113).intl;
  items4[5] = tmp32(TextArea, obj26);
  const obj27 = {
    onPress: function handleSave() {
      return obj(...arguments);
    },
    text: intl13.string(stickerId(1113).t["R3BPH+"]),
    variant: str3,
    disabled: !hasUnsavedChanges(false),
    loading: false
  };
  const Button2 = tmp31(5754).Button;
  intl13 = tmp31(1113).intl;
  str3 = "secondary";
  if (hasUnsavedChanges(false)) {
    str3 = "primary";
  }
  items4[6] = tmp32(Button2, obj27);
  items3[1] = closure_17(Stack, obj14);
  return closure_17(tmp24, obj4);
};
