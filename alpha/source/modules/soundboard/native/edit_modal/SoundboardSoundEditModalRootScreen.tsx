// Module ID: 19860
// Function ID: 19861
// Name: SoundboardSoundEditModalRootScreen
// Dependencies: [5, 32, 19, 17, 502, 5840, 5842, 1391, 21, 4792, 575, 19861, 504, 8086, 5353, 1149, 8036, 19854, 6709, 6229, 5473, 19862, 7102, 1113, 5383, 6911, 8943, 7377, 1414, 9369, 14414, 5390, 2]
// Exports: default

// Module 19860 (SoundboardSoundEditModalRootScreen)
import nativeDefault from "native" /* 575 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6709 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 8943 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SoundboardStore from "SoundboardStore" /* 5840 */;
import SoundboardConstants from "SoundboardConstants" /* 5842 */;
import EmojiConstants from "EmojiConstants" /* 1391 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c7, c8, maxLength;

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ MAX_LENGTH_SOUND_NAME: c10, MAX_SOUND_LENGTH_SECONDS: unpackModuleId } = SoundboardConstants);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = EmojiConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, buttons: obj4, emojiPreview: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles(obj);
const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/SoundboardSoundEditModalRootScreen.tsx");

export default function SoundboardSoundEditModalRootScreen(localSource) {
  let _undefined;
  let _undefined2;
  let c10;
  let c6;
  let closure_5;
  let combined;
  let emojiName;
  let emojiURL;
  let guildId;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let items2;
  let items3;
  let items4;
  let sound;
  let str2;
  let tmp14;
  let tmp36Result;
  let tmp45;
  let tmp5;
  ({ guildId: require, sound } = localSource);
  localSource = localSource.localSource;
  const onSaved = localSource.onSaved;
  let defaultValue;
  react = undefined;
  c6 = undefined;
  let first1;
  let first2;
  let closure_9;
  maxLength = undefined;
  let first3;
  let first4;
  let soundId;
  let closure_14;
  let closure_15;
  let obj = function _handleSave() {
    let durationMs;
    let name;
    let ref;
    let trim;
    let volume;
    obj = _asyncToGenerator(async function(arg0, value) {
      let emojiName;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c5;
        try {
          let closure_2;
          let firstFieldErrorMessage;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              closure_2 = tmp4;
              emojiId = undefined;
              firstFieldErrorMessage = undefined;
              _undefined2(true);
              _undefined(null);
              c5 = 2;
              if (null != localSource) {
                const obj5 = { guildId, name, volume, emojiId: null, emojiName: null, localSource: tmp83, durationMs, trim };
                ({ emojiId: obj7.emojiId, emojiName: obj7.emojiName } = emojiId);
                const obj6 = emojiId(closure_2[17]);
                ref.current = obj6.createSoundboardSound(obj5);
                c6 = 3;
                c7 = 1;
                const obj8 = { value: ref.current, done: false };
                return obj8;
              } else {
                const obj9 = { guildId, soundId: soundId.soundId, name, volume, emojiId, emojiName };
                const tmp86 = emojiId(closure_2[18]);
                emojiId = emojiId.emojiId;
                const updateSound = tmp86.updateSound;
                const tmp91 = emojiId;
                if (emojiId == null) {
                  emojiId = null;
                }
                emojiName = tmp91.emojiName ?? null;
                c6 = 4;
                c7 = 1;
                const obj10 = { value: updateSound(obj9), done: false };
                return obj10;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            const tmp55 = closure_4;
            if (closure_131_14()) {
              closure_131_10(false);
            }
            throw tmp55;
          } else if (2 === c6) {
            c5 = 1;
            closure_2 = closure_4;
            const self = this;
            const self2 = this;
            const tmp32 = new emojiName(closure_2[19])(closure_2);
            emojiId = tmp32;
            firstFieldErrorMessage = emojiId.getFirstFieldErrorMessage("name");
            if (null != firstFieldErrorMessage) {
              if (closure_131_14()) {
                closure_131_6(firstFieldErrorMessage);
              }
              c5 = 0;
              if (closure_131_14()) {
                closure_131_10(false);
              }
              c7 = 3;
              const obj11 = { value: undefined, done: true };
              return obj11;
            }
            const obj3 = emojiId(closure_2[20]);
            obj3.presentError(emojiId.getAnyErrorMessage());
          } else {
            if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                if (closure_131_14()) {
                  closure_131_10(false);
                }
                c7 = 3;
                const obj19 = { value, done: true };
                return obj19;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              if (closure_131_14()) {
                closure_131_10(false);
              }
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
            c5 = 0;
            if (closure_131_14()) {
              closure_131_10(false);
            }
            if (closure_131_14()) {
              closure_131_3();
            }
            c7 = 3;
            return { value: "HermesInternal", done: "+60" };
          }
        } catch (tmp72) {
          closure_4 = tmp72;
          if (0 === c5) {
            c7 = 3;
            throw tmp72;
          } else if (1 === tmp74) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = obj();
  obj = react;
  let str;
  const useState = react.useState;
  if (sound != null) {
    str = sound.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp3 = defaultValue(useState(str), 2);
  defaultValue = tmp3[0];
  react = tmp3[1];
  let tmp4 = defaultValue(obj.useState(null), 2);
  [tmp5, c6] = tmp4;
  let num;
  const useState2 = obj.useState;
  if (sound != null) {
    num = sound.volume;
  }
  if (num == null) {
    num = 1;
  }
  const tmp2Result = defaultValue(useState2(num), 2);
  first1 = tmp2Result[0];
  let emojiId;
  let tmp8 = tmp2Result[1];
  const useState3 = obj.useState;
  if (sound != null) {
    emojiId = sound.emojiId;
  }
  let obj2 = { emojiId, emojiName };
  emojiName = undefined;
  if (sound != null) {
    emojiName = sound.emojiName;
  }
  const tmp2Result5 = defaultValue(useState3(obj2), 2);
  first2 = tmp2Result5[0];
  closure_9 = tmp2Result5[1];
  [tmp14, c10] = defaultValue(obj.useState(false), 2);
  defaultValue(obj.useState(false), 2);
  const tmp2Result7 = defaultValue(obj.useState(0), 2);
  first3 = tmp2Result7[0];
  let tmp17 = tmp2Result7[1];
  const tmp2Result8 = defaultValue(obj.useState(null), 2);
  first4 = tmp2Result8[0];
  let tmp21 = sound;
  const tmp22 = localSource;
  let tmp20 = tmp2Result8[1];
  let tmp23 = sound(localSource[11])(first2);
  soundId = undefined;
  if (sound != null) {
    soundId = sound.soundId;
  }
  let tmp25 = require;
  let obj3 = require("get initialized");
  let items = [closure_9, first2];
  let items1 = [soundId];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const isPlayingSoundResult = null != soundId && SoundboardStore.isPlayingSound(tmp) && SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
    return isPlayingSoundResult;
  }, items1);
  closure_14 = tmp21(tmp22[13])();
  closure_15 = obj.useRef(null);
  let obj4 = require("useMountEffect");
  const unmountEffect = obj4.useUnmountEffect(() => {
    function removeLocalSource(uri) {
      return obj(...arguments);
    }
    obj = function _removeLocalSource() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0 = arg0;
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "+60" };
          }
        } else {
          while (true) {
            let closure_1;
            let items1;
            let CacheDirPath;
            let DocumentsDirPath;
            let c5;
            let closure_6;
            let closure_7;
            let length;
            c8 = 2;
            let tmp4 = c7;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                let closure_4 = tmp;
                let closure_3 = tmp4;
                closure_1 = undefined;
                items1 = undefined;
                CacheDirPath = undefined;
                DocumentsDirPath = undefined;
                c5 = undefined;
                closure_6 = undefined;
                closure_7 = undefined;
                length = undefined;
                let c6 = 1;
                c7 = 2;
                c8 = 1;
                let obj6 = { value: ref.current, done: false };
                return obj6;
              }
            } else {
              if (1 === tmp4) {
                c6 = 0;
              } else if (2 === tmp4) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  let obj7 = { value, done: true };
                  return obj7;
                } else {
                  c6 = 0;
                }
              } else if (3 === tmp4) {
                c6 = 0;
                closure_1.return();
                throw closure_1_5;
              } else {
                if (4 === tmp4) {
                  c6 = 2;
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  closure_1.return();
                  c8 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c6 = 2;
                }
                c6 = 0;
                closure_1.return();
                c8 = 3;
                return { value: "HermesInternal", done: "+60" };
              }
              let _decodeURI = decodeURI;
              decodeURI(closure_0.replace(/^file:\/\//, ""));
              let obj3 = sound(localSource[15]);
              items1 = obj3.getConstants();
              CacheDirPath = items1.CacheDirPath;
              DocumentsDirPath = items1.DocumentsDirPath;
              let items = ["cache", CacheDirPath];
              items1 = [items, ];
              let items2 = ["documents", DocumentsDirPath];
              items1[1] = items2;
              closure_1 = items1[Symbol.iterator]();
              while (closure_1 !== undefined) {
                c6 = 2;
                c5 = tmp22;
                closure_6 = defaultValue(c5, 2);
                closure_7 = closure_6[0];
                length = closure_6[1];
                let _HermesInternal = HermesInternal;
                if (closure_1.startsWith("" + length + "/")) {
                  c6 = 3;
                  let obj4 = closure_2_0(localSource[16]);
                  c7 = 5;
                  c8 = 1;
                  let obj8 = { value: obj4.removeFile(closure_7, closure_1.slice(length.length + 1)), done: false };
                  return obj8;
                } else {
                  c6 = 0;
                  continue;
                }
              }
              c8 = 3;
              return { value: "HermesInternal", done: "+60" };
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null != localSource) {
      const tmp = removeLocalSource(localSource.uri);
    }
  });
  if (null != first4) {
    first3 = first4.endMs - first4.startMs;
  }
  let tmp28 = defaultValue.length >= 2;
  if (tmp28) {
    let tmp29 = null == localSource;
    if (!tmp29) {
      let tmp30 = first3 > 0;
      if (tmp30) {
        let tmp31 = first3;
        let num2 = 1000;
        tmp30 = first3 <= 1000 * first3;
      }
      tmp29 = tmp30;
    }
    tmp28 = tmp29;
  }
  let tmp32 = closure_15;
  let obj5 = { contentContainerStyle: tmp.container, keyboardShouldPersistTaps: "always", children: items2 };
  let tmp34 = null;
  const tmp33 = c6;
  if (null != localSource) {
    let obj6 = { source: localSource, volume: first1, onDurationChange: tmp17, onTrimChange: tmp20 };
    tmp34 = closure_14(tmp21(tmp22[21]), obj6);
  }
  items2 = [tmp34, , , , , , ];
  let tmp36 = closure_14;
  let obj7 = {
    label: intl.string(tmp25(tmp22[23]).t.NpJGaM),
    maxLength,
    defaultValue,
    onChange(arg0) {
      closure_5(arg0);
      _undefined(null);
    },
    errorMessage: tmp5,
    clearable: true
  };
  const TextInput = tmp25(tmp22[22]).TextInput;
  intl = tmp25(tmp22[23]).intl;
  items2[1] = tmp36(TextInput, obj7);
  let obj8 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: intl2.string(tmp25(tmp22[23]).t["3BQmiC"]) };
  const Text = tmp25(tmp22[24]).Text;
  intl2 = tmp25(tmp22[23]).intl;
  items2[2] = tmp36(Text, obj8);
  let obj9 = {
    style: tmp.emojiPreview,
    onPress() {
      obj = openEmojiPickerActionSheet;
      let obj2 = {
        pickerIntention: map1.SOUNDBOARD,
        guildId: require,
        onPressEmoji(id) {
          if (null != id.id) {
            const obj2 = { emojiId: id.id };
            closure_1_9(obj2);
          } else if (null != id.optionallyDiverseSequence) {
            obj = { emojiName: id.optionallyDiverseSequence };
            closure_1_9(obj);
          }
        }
      };
      return obj.openEmojiPickerActionSheet(obj2);
    },
    children: items3
  };
  const PressableHighlight = tmp25(tmp22[25]).PressableHighlight;
  if (null != tmp23) {
    let obj10 = { fastImageStyle: { width: 24, height: 24 }, name: str2, src: emojiURL };
    str2 = first2.emojiName;
    const tmp21Result = tmp21(tmp22[27]);
    if (str2 == null) {
      str2 = "";
    }
    emojiURL = undefined;
    if (null != first2.emojiId) {
      let obj11 = { id: first2.emojiId, animated: false, size: first4 };
      let tmp40 = first4;
      const tmp21Result2 = tmp21(tmp22[28]);
      emojiURL = tmp21Result2.getEmojiURL(obj11);
    }
    tmp36Result = tmp36(tmp21Result, obj10);
  } else {
    tmp36Result = tmp36(tmp25(tmp22[29]).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  items3 = [tmp36Result, ];
  const Text2 = tmp25(tmp22[24]).Text;
  if (null != tmp23) {
    let tmp42 = globalThis;
    let _HermesInternal = HermesInternal;
    combined = ":" + tmp23 + ":";
  } else {
    const intl3 = tmp25(tmp22[23]).intl;
    combined = intl3.string(tmp25(tmp22[23]).t["59QgaD"]);
  }
  items3[1] = tmp36(Text2, { variant: "body-md/semibold", color: "input-placeholder-text-default", children: combined });
  items2[3] = tmp32(PressableHighlight, obj9);
  const obj12 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: intl4.string(tmp25(tmp22[23]).t["3CJlb1"]) };
  const Text3 = tmp25(tmp22[24]).Text;
  intl4 = tmp25(tmp22[23]).intl;
  items2[4] = tmp36(Text3, obj12);
  const obj13 = {
    minValue: 0,
    maxValue: 1,
    value: first1,
    onChange: tmp8,
    formatValue(arg0) {
      return "" + Math.round(100 * arg0) + "%";
    },
    accessibilityLabel: intl5.string(tmp25(tmp22[23]).t["3CJlb1"])
  };
  const Slider = tmp25(tmp22[30]).Slider;
  intl5 = tmp25(tmp22[23]).intl;
  items2[5] = tmp36(Slider, obj13);
  let tmp36Result2 = null;
  let tmp43 = first1;
  const obj14 = { style: tmp.buttons, children: items4 };
  if (null != sound) {
    const Button = tmp25(tmp22[31]).Button;
    const intl6 = tmp25(tmp22[23]).intl;
    const string = intl6.string;
    const t = tmp25(tmp22[23]).t;
    const obj15 = {
      variant: "secondary",
      text: string(stateFromStores ? t.diasud : t.CCRKNz),
      onPress() {
          obj = SoundboardActionCreators;
          const obj2 = { soundId: sound.soundId, volume: first1 };
          return obj.playSoundLocally(null, obj2);
        },
      disabled: stateFromStores
    };
    tmp36Result2 = tmp36(Button, obj15);
  }
  items4 = [tmp36Result2, ];
  const obj16 = {
    text: intl7.string(tmp25(tmp22[23]).t.bZY171),
    onPress: function handleSave() {
      return obj(...arguments);
    },
    disabled: tmp45,
    loading: tmp14
  };
  const Button2 = tmp25(tmp22[31]).Button;
  intl7 = tmp25(tmp22[23]).intl;
  tmp45 = !tmp28;
  if (tmp28) {
    tmp45 = tmp14;
  }
  items4[1] = tmp36(Button2, obj16);
  items2[6] = tmp32(tmp43, obj14);
  return tmp32(tmp33, obj5);
};
