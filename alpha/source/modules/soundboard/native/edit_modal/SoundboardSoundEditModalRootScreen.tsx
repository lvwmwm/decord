// Module ID: 19678
// Function ID: 19679
// Name: SoundboardSoundEditModalRootScreen
// Dependencies: [5, 32, 19, 17, 5844, 1389, 21, 4794, 575, 19679, 19680, 8085, 5355, 1148, 8035, 19672, 6711, 6231, 5475, 19681, 7101, 1112, 5385, 6910, 8943, 7376, 1412, 9369, 14382, 5392, 2]
// Exports: default

// Module 19678 (SoundboardSoundEditModalRootScreen)
import nativeDefault from "native" /* 575 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 8943 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SoundboardConstants from "SoundboardConstants" /* 5844 */;
import EmojiConstants from "EmojiConstants" /* 1389 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4794 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c7, c8;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ MAX_LENGTH_SOUND_NAME: metroImportAll, MAX_SOUND_LENGTH_SECONDS: c9 } = SoundboardConstants);
({ EMOJI_URL_BASE_SIZE: c10, EmojiIntention: unpackModuleId } = EmojiConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3, buttons: obj4, emojiPreview: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj5 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_14 = createStyles(obj);
let size = size_mod;
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
  let items;
  let items1;
  let items2;
  let sound;
  let str2;
  let tmp14;
  let tmp37Result;
  let tmp46;
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
  size = undefined;
  let first3;
  let first4;
  let closure_13;
  closure_14 = undefined;
  let obj = function _handleSave() {
    let durationMs;
    let name;
    let ref;
    let soundId;
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
          return { value: "HermesInternal", done: null };
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
                const obj6 = emojiId(closure_2[15]);
                ref.current = obj6.createSoundboardSound(obj5);
                c6 = 3;
                c7 = 1;
                const obj8 = { value: ref.current, done: false };
                return obj8;
              } else {
                const obj9 = { guildId, soundId: soundId.soundId, name, volume, emojiId, emojiName };
                const tmp86 = emojiId(closure_2[16]);
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
            if (closure_131_13()) {
              closure_131_10(false);
            }
            throw tmp55;
          } else if (2 === c6) {
            c5 = 1;
            closure_2 = closure_4;
            const self = this;
            const self2 = this;
            const tmp32 = new emojiName(closure_2[17])(closure_2);
            emojiId = tmp32;
            firstFieldErrorMessage = emojiId.getFirstFieldErrorMessage("name");
            if (null != firstFieldErrorMessage) {
              if (closure_131_13()) {
                closure_131_6(firstFieldErrorMessage);
              }
              c5 = 0;
              if (closure_131_13()) {
                closure_131_10(false);
              }
              c7 = 3;
              const obj11 = { value: undefined, done: true };
              return obj11;
            }
            const obj3 = emojiId(closure_2[18]);
            obj3.presentError(emojiId.getAnyErrorMessage());
          } else {
            if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                if (closure_131_13()) {
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
              if (closure_131_13()) {
                closure_131_10(false);
              }
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
            c5 = 0;
            if (closure_131_13()) {
              closure_131_10(false);
            }
            if (closure_131_13()) {
              closure_131_3();
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
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
  let tmp = closure_14();
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
  let tmp23 = sound(localSource[9])(first2);
  let soundId;
  let tmp24 = sound(localSource[10]);
  if (sound != null) {
    soundId = sound.soundId;
  }
  const tmp24Result = tmp24(soundId, first1);
  closure_13 = tmp21(tmp22[11])();
  closure_14 = obj.useRef(null);
  let tmp27 = require;
  let obj3 = require("useMountEffect");
  const unmountEffect = obj3.useUnmountEffect(() => {
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
            return { value: "HermesInternal", done: null };
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
                return { value: "HermesInternal", done: null };
              }
              let _decodeURI = decodeURI;
              decodeURI(closure_0.replace(/^file:\/\//, ""));
              let obj3 = sound(localSource[13]);
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
                  let obj4 = closure_2_0(localSource[14]);
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
              return { value: "HermesInternal", done: null };
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
  let tmp29 = defaultValue.length >= 2;
  if (tmp29) {
    let tmp30 = null == localSource;
    if (!tmp30) {
      let tmp31 = first3 > 0;
      if (tmp31) {
        let tmp32 = closure_9;
        let num2 = 1000;
        tmp31 = first3 <= 1000 * closure_9;
      }
      tmp30 = tmp31;
    }
    tmp29 = tmp30;
  }
  let obj4 = { contentContainerStyle: tmp.container, keyboardShouldPersistTaps: "always", children: items };
  let tmp35 = null;
  const tmp34 = c6;
  if (null != localSource) {
    let tmp36 = first4;
    let obj5 = { source: localSource, volume: first1, onDurationChange: tmp17, onTrimChange: tmp20 };
    tmp35 = first4(tmp21(tmp22[19]), obj5);
  }
  items = [tmp35, , , , , , ];
  let tmp37 = first4;
  let obj6 = {
    label: intl.string(tmp27(tmp22[21]).t.NpJGaM),
    maxLength: first2,
    defaultValue,
    onChange(arg0) {
      closure_5(arg0);
      _undefined(null);
    },
    errorMessage: tmp5,
    clearable: true
  };
  const TextInput = tmp27(tmp22[20]).TextInput;
  intl = tmp27(tmp22[21]).intl;
  items[1] = tmp37(TextInput, obj6);
  let obj7 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: intl2.string(tmp27(tmp22[21]).t["3BQmiC"]) };
  const Text = tmp27(tmp22[22]).Text;
  intl2 = tmp27(tmp22[21]).intl;
  items[2] = tmp37(Text, obj7);
  let obj8 = {
    style: tmp.emojiPreview,
    onPress() {
      obj = openEmojiPickerActionSheet;
      let obj2 = {
        pickerIntention: unpackModuleId.SOUNDBOARD,
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
    children: items1
  };
  const PressableHighlight = tmp27(tmp22[23]).PressableHighlight;
  if (null != tmp23) {
    let obj9 = { fastImageStyle: { width: 24, height: 24 }, name: str2, src: emojiURL };
    str2 = first2.emojiName;
    const tmp21Result = tmp21(tmp22[25]);
    if (str2 == null) {
      str2 = "";
    }
    emojiURL = undefined;
    if (null != first2.emojiId) {
      let obj10 = { id: first2.emojiId, animated: false, size };
      let tmp41 = size;
      const tmp21Result2 = tmp21(tmp22[26]);
      emojiURL = tmp21Result2.getEmojiURL(obj10);
    }
    tmp37Result = tmp37(tmp21Result, obj9);
  } else {
    tmp37Result = tmp37(tmp27(tmp22[27]).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  items1 = [tmp37Result, ];
  const Text2 = tmp27(tmp22[22]).Text;
  if (null != tmp23) {
    let tmp43 = globalThis;
    let _HermesInternal = HermesInternal;
    combined = ":" + tmp23 + ":";
  } else {
    const intl3 = tmp27(tmp22[21]).intl;
    combined = intl3.string(tmp27(tmp22[21]).t["59QgaD"]);
  }
  items1[1] = tmp37(Text2, { variant: "body-md/semibold", color: "input-placeholder-text-default", children: combined });
  items[3] = closure_13(PressableHighlight, obj8);
  let obj11 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.label, children: intl4.string(tmp27(tmp22[21]).t["3CJlb1"]) };
  const Text3 = tmp27(tmp22[22]).Text;
  intl4 = tmp27(tmp22[21]).intl;
  items[4] = tmp37(Text3, obj11);
  const obj12 = {
    minValue: 0,
    maxValue: 1,
    value: first1,
    onChange: tmp8,
    formatValue(arg0) {
      return "" + Math.round(100 * arg0) + "%";
    },
    accessibilityLabel: intl5.string(tmp27(tmp22[21]).t["3CJlb1"])
  };
  const Slider = tmp27(tmp22[28]).Slider;
  intl5 = tmp27(tmp22[21]).intl;
  items[5] = tmp37(Slider, obj12);
  let tmp37Result2 = null;
  const obj13 = { style: tmp.buttons, children: items2 };
  const tmp44 = first1;
  if (null != sound) {
    const Button = tmp27(tmp22[29]).Button;
    const intl6 = tmp27(tmp22[21]).intl;
    const string = intl6.string;
    const isPlaying = tmp24Result.isPlaying;
    const t = tmp27(tmp22[21]).t;
    const obj14 = { variant: "secondary", text: string(isPlaying ? t.hHBkuG : t.CCRKNz), onPress: tmp24Result.isPlaying ? tmp24Result.stop : tmp24Result.play };
    tmp37Result2 = tmp37(Button, obj14);
  }
  items2 = [tmp37Result2, ];
  const obj15 = {
    text: intl7.string(tmp27(tmp22[21]).t.bZY171),
    onPress: function handleSave() {
      return obj(...arguments);
    },
    disabled: tmp46,
    loading: tmp14
  };
  const Button2 = tmp27(tmp22[29]).Button;
  intl7 = tmp27(tmp22[21]).intl;
  tmp46 = !tmp29;
  if (tmp29) {
    tmp46 = tmp14;
  }
  items2[1] = tmp37(Button2, obj15);
  items[6] = closure_13(tmp44, obj13);
  return closure_13(tmp34, obj4);
};
