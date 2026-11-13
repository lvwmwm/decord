// Module ID: 20194
// Function ID: 20195
// Name: GuildSettingsStickerCreate
// Dependencies: [5, 32, 19, 17, 6884, 6925, 1072, 1388, 4998, 21, 5170, 575, 5767, 11578, 5771, 5116, 8323, 20195, 10418, 6647, 5783, 1113, 6616, 2185, 5790, 6191, 7076, 10433, 20196, 10094, 7396, 1411, 9566, 7181, 7349, 2]
// Exports: default

// Module 20194 (GuildSettingsStickerCreate)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import StickersConstants from "StickersConstants" /* 4998 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5116 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5767 */;
import reactDefault from "react" /* 5771 */;
import EmojiDefault from "Emoji" /* 7396 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 10094 */;
import StickerDefault from "Sticker" /* 10433 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 11578 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore from "EmojiStore" /* 6884 */;
import StickersStore_mod from "StickersStore" /* 6925 */;
import Constants from "Constants" /* 1072 */;
import EmojiConstants from "EmojiConstants" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let c0, c1, c2, c5, guildId;

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
let unpackModuleId;
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
  let c12;
  let c13;
  let c19;
  let c8;
  let combined;
  let emojiURL;
  let format;
  let format2;
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
  let tmp15Result;
  let tmp23;
  let tmp35Result;
  let tmp35Result2;
  let tmp45;
  let tmp48;
  let tmp51;
  let tmp9;
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let ref3;
  c8 = undefined;
  size = undefined;
  c13 = undefined;
  let user;
  let closure_17;
  closure_18 = undefined;
  c19 = undefined;
  function hasUnsavedChanges() {
    let tmp2;
    if (null != user) {
      let tmp7 = null != first && tmp6 !== tmp.name;
      if (!tmp7) {
        let tmp9 = null != c8 && tmp8 !== tmp.description;
        if (!tmp9) {
          tmp9 = !(null == first2 || tmp10 === closure_17);
          const tmp11 = null == first2 || tmp10 === closure_17;
        }
        tmp7 = tmp9;
      }
      tmp2 = tmp7;
    } else {
      tmp2 = null != first && first.length > 0 || null != first1 || null != first2 || null != c8;
    }
    return tmp2;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                return { value: "HermesInternal", done: "HermesInternal" };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
    let length;
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let tmp2;
      let tmp3;
      if (c0 === 2) {
        c0 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              obj = function _commitSave() {
                obj = closure_3_3(function*(arg0, value) {
                  let v1;
                  let closure_0 = arg0;
                  if (c5 === 2) {
                    c5 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    let c4;
                    try {
                      c5 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c5 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          let closure_1 = tmp;
                          closure_1_18.current = true;
                          closure_1_19(true);
                          c4 = 1;
                          c2 = 2;
                          c5 = 1;
                          const obj5 = { value: closure_0(), done: false };
                          return obj5;
                        }
                      } else {
                        if (1 === tmp4) {
                          c4 = 0;
                          closure_1_18.current = false;
                          closure_1_19(false);
                          const obj3 = closure_2_0(closure_2_2[17]);
                          const result = obj3.showGuildSettingsStickerError();
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c4 = 0;
                          c5 = 3;
                          const obj6 = { value, done: true };
                          return obj6;
                        } else {
                          c2();
                          obj = closure_2_0(closure_2_2[17]);
                          const result1 = obj.showGuildSettingsStickerSuccess();
                          c4 = 0;
                        }
                        c5 = 3;
                        return { value: "HermesInternal", done: "HermesInternal" };
                      }
                    } catch (tmp23) {
                      closure_3 = tmp23;
                      if (0 === c4) {
                        c5 = 3;
                        throw tmp23;
                      } else {
                        c2 = 1;
                      }
                    }
                  }
                });
                return obj(...arguments);
              };
              if (!ref.current) {
                guildId = length;
                let closure_2 = first2;
                if (null != length) {
                  if (length.length >= 2) {
                    if (null != tmp4) {
                      function commitSave(arg0) {
                        return obj(...arguments);
                      }
                      if (null != stickerId) {
                        let closure_3 = stickerId;
                        c1 = 1;
                        c0 = 1;
                        let obj4 = {
                          value: commitSave(() => {
                                              let obj2;
                                              let str;
                                              obj = { name, tags: obj2.getStickerTagForEmoji(closure_2), description: str };
                                              const updateGuildSticker = c0(closure_3_2[18]).updateGuildSticker;
                                              c0(closure_3_2[18]);
                                              str = closure_2_8;
                                              obj2 = c0(closure_3_2[19]);
                                              const tmp2 = guildId;
                                              const tmp3 = closure_3;
                                              if (closure_2_8 == null) {
                                                str = "";
                                              }
                                              return updateGuildSticker(tmp2, tmp3, obj);
                                            }),
                          done: false
                        };
                        return obj4;
                      } else {
                        let closure_4 = first1;
                        if (null == first1) {
                          c0 = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        } else {
                          c1 = 2;
                          c0 = 1;
                          let obj5 = {
                            value: commitSave(() => {
                                                  let obj2;
                                                  let str;
                                                  obj = { guildId, name, tags: obj2.getStickerTagForEmoji(closure_2), description: str, uri, mimeType: "image/png", platform: "mobile", originalMd5 };
                                                  const createGuildSticker = c0(closure_3_2[18]).createGuildSticker;
                                                  c0(closure_3_2[18]);
                                                  str = closure_2_8;
                                                  obj2 = c0(closure_3_2[19]);
                                                  if (closure_2_8 == null) {
                                                    str = "";
                                                  }
                                                  return createGuildSticker(obj);
                                                }),
                            done: false
                          };
                          return obj5;
                        }
                      }
                    }
                  }
                }
              }
            }
          } else if (1 === tmp3) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              let obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    });
    return obj(...arguments);
  };
  const ref = stickerId.ref;
  let tmp = closure_18();
  obj = ref3;
  const ref1 = ref3.useRef(null);
  const ref2 = ref3.useRef(null);
  ref3 = ref3.useRef(null);
  let tmp5 = ref2;
  let tmp6 = ref2(ref3.useState(undefined), 2);
  const first = tmp6[0];
  let tmp7 = tmp6[1];
  let closure_7 = tmp7;
  let tmp8 = ref2(ref3.useState(undefined), 2);
  [c8, tmp9] = tmp8;
  StickersStore = tmp9;
  const tmp10 = ref2(ref3.useState(undefined), 2);
  const first1 = tmp10[0];
  let closure_11 = tmp10[1];
  [c12, c13] = ref2(ref3.useState(undefined), 2);
  const tmp12 = ref2(ref3.useState(undefined), 2);
  let tmp13 = ref2(ref3.useState(undefined), 2);
  const first2 = tmp13[0];
  const onPressEmoji = tmp13[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj2 = { insets, inputs: items, scrollViewRef: ref1 };
  let obj3 = { ref: ref2, offset: { type: "toRef", ref: ref3 } };
  items = [obj3, { ref: ref3, offset: { type: "toBottom" } }];
  const onFocus = useSafeAreaAvoidingInputsDefault(obj2).onFocus;
  let stickerById;
  const tmp17 = reactDefault;
  if (null != stickerId) {
    stickerById = StickersStore.getStickerById(stickerId);
  }
  function handleImagePicker() {
    return obj(...arguments);
  }
  const tmp17Result = tmp17(stickerById);
  user = tmp17Result;
  const tmp21 = reactDefault(() => {
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
  closure_17 = tmp21;
  closure_18 = obj.useRef(false);
  [tmp23, c19] = tmp5(obj.useState(false), 2);
  tmp5(obj.useState(false), 2);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp17Result, tmp21];
  const effect = obj.useEffect(() => {
    const tmp = null != stickerId && null != user;
    if (tmp) {
      onPressEmoji(closure_17);
      closure_7(user.name);
      _undefined(user.description);
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
  const tmp26 = closure_17;
  let obj4 = { ref: ref1, style: tmp.container, keyboardShouldPersistTaps: "always", contentContainerStyle: obj5, children: items3 };
  obj5 = { paddingHorizontal: tmp15(575).space.PX_16, paddingBottom: tmp15(575).space.PX_16 + insets.bottom };
  let tmp26Result = null;
  const tmp27 = closure_7;
  if (null == stickerId) {
    let obj6 = { variant: "heading-sm/semibold", style: tmp.title, children: intl.string(stickerId(1113).t["9N2OWD"]) };
    const Text = stickerId(5783).Text;
    intl = stickerId(1113).intl;
    const items2 = [onPressEmoji(Text, obj6), , , ];
    let obj7 = { variant: "body-sm/medium", color: "text-muted", style: tmp.description, children: format(hxLviw, obj8) };
    const Text2 = stickerId(5783).Text;
    const intl2 = stickerId(1113).intl;
    format = intl2.format;
    obj8 = { fileSize: obj9.formatKbSize(first2, { useKibibytes: true }) };
    hxLviw = stickerId(1113).t.hxLviw;
    obj9 = stickerId(6616);
    items2[1] = onPressEmoji(Text2, obj7);
    const obj10 = { variant: "body-sm/medium", color: "text-muted", style: tmp.help, children: format2(UBj0aX, obj11) };
    const Text3 = stickerId(5783).Text;
    const intl3 = stickerId(1113).intl;
    format2 = intl3.format;
    obj11 = { articleUrl: tmp15Result.getArticleURL(first1.STICKERS_UPLOAD) };
    UBj0aX = stickerId(1113).t.UBj0aX;
    tmp15Result = HelpdeskUtilsDefault;
    items2[2] = onPressEmoji(Text3, obj10);
    const obj12 = { text: intl4.string(stickerId(1113).t.O1REe1), onPress: handleImagePicker, variant: str };
    const Button = stickerId(5790).Button;
    intl4 = stickerId(1113).intl;
    str = "secondary";
    const tmp29 = user;
    const tmp30 = onPressEmoji;
    if (null == first1) {
      str = "primary";
    }
    const obj13 = { children: items2 };
    items2[3] = tmp30(Button, obj12);
    tmp26Result = tmp26(tmp29, obj13);
  }
  items3 = [tmp26Result, ];
  const obj14 = { style: tmp.stack, children: items4 };
  const Stack = stickerId(6191).Stack;
  const obj15 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: intl5.string(stickerId(1113).t.gjdiKE) };
  const Text4 = stickerId(5783).Text;
  intl5 = stickerId(1113).intl;
  items4 = [onPressEmoji(Text4, obj15), , , , , , ];
  const obj16 = { style: tmp.stickerPreview, disabled: null != tmp17Result, onPress: handleImagePicker, accessibilityRole: "button", accessibilityLabel: intl6.string(stickerId(1113).t.O1REe1), children: tmp35Result };
  const PressableHighlight = stickerId(7076).PressableHighlight;
  intl6 = stickerId(1113).intl;
  if (null != tmp17Result) {
    const obj17 = { sticker: tmp17Result, size: nativeDefault.space.PX_96, animated: true };
    const tmp15Result4 = StickerDefault;
    tmp35Result = tmp35(tmp15Result4, obj17);
  } else if (null != first1) {
    const obj18 = { source: obj19, style: tmp.stickerPreviewImage, resizeMode: "contain" };
    obj19 = { uri: first1 };
    tmp35Result = tmp35(first, obj18);
  } else {
    tmp35Result = tmp35(tmp34(20196).StickerPlusIcon, { size: "lg" });
  }
  items4[1] = onPressEmoji(PressableHighlight, obj16);
  const obj20 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: intl7.string(stickerId(1113).t["3BQmiC"]) };
  const Text5 = tmp34(5783).Text;
  intl7 = tmp34(1113).intl;
  items4[2] = onPressEmoji(Text5, obj20);
  const obj21 = {
    style: tmp.emojiPreview,
    onPress() {
      obj = openEmojiPickerActionSheet;
      const obj2 = { pickerIntention: map1.GUILD_STICKER_RELATED_EMOJI, guildId: importDefault, onPressEmoji };
      const result = obj.openEmojiPickerActionSheet(obj2);
    },
    children: items5
  };
  const PressableHighlight2 = tmp34(7076).PressableHighlight;
  if (null != first2) {
    const obj22 = { fastImageStyle: { width: 24, height: 24 }, name: null == first2.id ? first2.surrogates : first2.name, src: emojiURL };
    emojiURL = undefined;
    const tmp15Result5 = EmojiDefault;
    if (null != first2.id) {
      const obj23 = { id: null, animated: null, size };
      ({ id: obj25.id, animated: obj25.animated } = first2);
      const tmp15Result6 = AvatarUtilsDefault;
      emojiURL = tmp15Result6.getEmojiURL(obj23);
    }
    tmp35Result2 = tmp35(tmp15Result5, obj22);
  } else {
    tmp35Result2 = tmp35(tmp34(9566).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  items5 = [tmp35Result2, ];
  const Text6 = tmp34(5783).Text;
  if (null != first2) {
    const _HermesInternal = HermesInternal;
    combined = ":" + first2.name + ":";
  } else {
    const intl8 = tmp34(1113).intl;
    combined = intl8.string(tmp34(1113).t.QTK0TJ);
  }
  items5[1] = onPressEmoji(Text6, { variant: "body-md/semibold", color: "input-placeholder-text-default", children: combined });
  items4[3] = tmp26(PressableHighlight2, obj21);
  const obj24 = {
    ref: ref2,
    label: intl9.string(stickerId(1113).t["0VRh6n"]),
    placeholder: intl10.string(stickerId(1113).t["3fGttT"]),
    onChange: tmp7,
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
    disabled: tmp23,
    clearable: true,
    returnKeyType: "next",
    submitBehavior: "submit"
  };
  const TextInput = tmp34(7181).TextInput;
  intl9 = tmp34(1113).intl;
  intl10 = tmp34(1113).intl;
  items4[4] = onPressEmoji(TextInput, obj24);
  const obj26 = { ref: ref3, maxLength: 100, label: intl11.string(stickerId(1113).t.uGccej), placeholder: intl12.string(stickerId(1113).t.zwR0fa), onChange: tmp9, onFocus };
  const TextArea = tmp34(7349).TextArea;
  intl11 = tmp34(1113).intl;
  intl12 = tmp34(1113).intl;
  items4[5] = onPressEmoji(TextArea, obj26);
  const obj27 = {
    onPress: function handleSave() {
      return obj(...arguments);
    },
    text: intl13.string(stickerId(1113).t["R3BPH+"]),
    variant: str3,
    disabled: tmp51,
    loading: tmp23
  };
  const Button2 = tmp34(5790).Button;
  intl13 = tmp34(1113).intl;
  if (null != tmp17Result) {
    tmp45 = !tmp46 && hasUnsavedChanges();
    !(null != first && first.length < 2) && hasUnsavedChanges();
  } else {
    tmp45 = null != first && first.length >= 2 && null != first1 && null != first2;
  }
  str3 = "secondary";
  if (tmp45) {
    str3 = "primary";
  }
  if (null != tmp17Result) {
    tmp48 = !tmp49 && hasUnsavedChanges();
    !(null != first && first.length < 2) && hasUnsavedChanges();
  } else {
    tmp48 = null != first && first.length >= 2 && null != first1 && null != first2;
  }
  tmp51 = !tmp48;
  if (tmp48) {
    tmp51 = tmp23;
  }
  items4[6] = onPressEmoji(Button2, obj27);
  items3[1] = tmp26(Stack, obj14);
  return tmp26(tmp27, obj4);
};
