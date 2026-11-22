// Module ID: 19796
// Function ID: 19797
// Name: SoundboardCreationUtils
// Dependencies: [32, 5, 1112, 5861, 11181, 1378, 11182, 19797, 6830, 7551, 5127, 19798, 2119, 19800, 2]
// Exports: createSoundboardSound, showAddSoundboardSoundOptions

// Module 19796 (SoundboardCreationUtils)
import intl5 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5861 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5;

function showInvalidFileAlert() {
  let intl2;
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = intl5.intl;
    stringResult = intl.string(intl5.t["Koklr/"]);
  }
  obj = { title: intl2.string(intl5.t.azO1Pe), body: stringResult };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl2 = intl5.intl;
  show(obj);
}
function pickSoundboardSoundFile() {
  return obj(...arguments);
}
let obj = function _pickSoundboardSoundFile() {
  let extensions;
  obj = _asyncToGenerator(async function(arg0, value) {
    let fileName;
    let formatToPlainString;
    let intl2;
    let items1;
    let obj12;
    let obj4;
    let prop;
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
      let code;
      try {
        let uri;
        let first;
        let localUri;
        let closure_3;
        let str;
        let closure_6;
        let closure_7;
        let preview;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            uri = undefined;
            first = undefined;
            localUri = undefined;
            closure_3 = undefined;
            code = undefined;
            str = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            preview = undefined;
            const obj5 = { pickMultiple: false, extensions, types: items };
            const handleDocumentSelection = require("FilePickerUtils").handleDocumentSelection;
            const tmp103 = require("FilePickerUtils");
            items = undefined;
            const obj17 = require("PlatformUtils");
            if (!obj17.isIOS()) {
              items = ["audio/*", "application/ogg"];
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: handleDocumentSelection(obj5), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            uri = value;
            first = undefined;
            if (uri != null) {
              first = uri[0];
            }
            if (null == first) {
              c7 = 3;
              return { value: null, done: true };
            } else {
              const name2 = first.name;
              uri = name2;
              if (name2 == null) {
                uri = first.uri;
              }
              closure_3 = uri;
              code = closure_3.lastIndexOf(".");
              str = "";
              if (code >= 0) {
                const str2 = closure_3.slice(code + 1);
                str = str2.toLowerCase();
              }
              if (closure_131_6.includes(str)) {
                c5 = 1;
                const obj8 = { uri: first.uri, fileName };
                const name = first.name;
                fileName = name;
                const keepLocalCopy = closure_131_0(closure_131_2[6]).keepLocalCopy;
                const tmp79 = closure_131_0(closure_131_2[6]);
                if (name == null) {
                  const _HermesInternal = HermesInternal;
                  fileName = "sound." + str;
                }
                const obj9 = { files: items1, destination: "cachesDirectory" };
                items1 = [obj8];
                c6 = 4;
                c7 = 1;
                const obj10 = { value: keepLocalCopy(obj9), done: false };
                return obj10;
              } else {
                closure_131_7();
                c7 = 3;
                return { value: null, done: true };
              }
            }
          }
        } else if (2 === c6) {
          c5 = 0;
          const intl4 = closure_131_0(closure_131_2[2]).intl;
          closure_131_7(intl4.string(closure_131_0(closure_131_2[2]).t["6w+Dyr"]));
          c7 = 3;
          return { value: null, done: true };
        } else if (3 === c6) {
          c5 = 0;
          code = undefined;
          if (code != null) {
            code = code.code;
          }
          if ("SOUNDBOARD_AUDIO_TOO_LONG" === code) {
            const obj11 = { title: intl2.string(closure_131_0(closure_131_2[2]).t["/tGlcj"]), body: formatToPlainString(prop, obj12) };
            const show = closure_131_1(closure_131_2[3]).show;
            const tmp36 = closure_131_1(closure_131_2[3]);
            intl2 = closure_131_0(closure_131_2[2]).intl;
            const intl3 = closure_131_0(closure_131_2[2]).intl;
            formatToPlainString = intl3.formatToPlainString;
            obj12 = { limit: closure_131_0(closure_131_2[7]).MAX_SOUNDBOARD_SOURCE_DURATION_MS / 1000 };
            prop = closure_131_0(closure_131_2[2]).t["e12/z4"];
            show(obj11);
          } else {
            const intl = closure_131_0(closure_131_2[2]).intl;
            closure_131_7(intl.string(closure_131_0(closure_131_2[2]).t["6w+Dyr"]));
          }
          c7 = 3;
          return { value: null, done: true };
        } else if (4 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_6 = value;
            closure_7 = closure_131_3(closure_6, 1)[0];
            if ("success" !== closure_7.status) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error(closure_7.copyError);
              throw error;
            } else {
              localUri = closure_7.localUri;
              c5 = 2;
              c6 = 5;
              c7 = 1;
              const obj14 = { value: obj4.loadSoundboardAudioPreview(localUri, closure_131_0(closure_131_2[7]).WAVEFORM_BAR_COUNT), done: false };
              obj4 = closure_131_0(closure_131_2[7]);
              return obj14;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          preview = value;
          obj = { uri: localUri, isOgg: closure_131_5.has(str), preview };
          c5 = 0;
          c7 = 3;
          const obj16 = { value: obj, done: true };
          return obj16;
        }
      } catch (tmp85) {
        code = tmp85;
        if (0 === c5) {
          c7 = 3;
          throw tmp85;
        } else if (1 === tmp87) {
          c6 = 2;
        } else {
          c6 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
function readLocalAudioAsDataUrl() {
  return obj(...arguments);
}
obj = function _readLocalAudioAsDataUrl() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let type;
    let closure_0 = type;
    const str = "file://";
    let combined = closure_0;
    const tmp8 = closure_0;
    if (!closure_0.startsWith("file://")) {
      const _HermesInternal = HermesInternal;
      combined = "file://" + tmp8;
    }
    const _fetch = fetch;
    await fetch(combined);
    await arg1.blob();
    type = arg1;
    const tmp5 = globalThis;
    let self = this;
    let self2 = this;
    const promise = new Promise(function(arg0, arg1) {
      let blob;
      closure_0 = arg0;
      closure_1 = arg1;
      const fileReader = new FileReader();
      fileReader.onerror = function() {
        let error = fileReader.error;
        const tmp = closure_1;
        if (error == null) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          error = new Error("Failed to read audio file");
        }
        return tmp(error);
      };
      fileReader.onload = function() {
        const result = fileReader.result;
        if (typeof result === "string") {
          closure_0(result);
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Expected a string data URL, got " + typeof result);
          closure_1(error);
        }
      };
      const readAsDataURL = fileReader.readAsDataURL;
      if (type.type === closure_1_0) {
        blob = type;
      } else {
        const _Blob = Blob;
        items = [type];
        let self = this;
        let self2 = this;
        obj = { type: tmp2 };
        blob = new Blob(items, obj);
      }
      const asDataURL = readAsDataURL(blob);
    });
    return promise;
  });
  return obj(...arguments);
};
obj = function _createSoundboardSound() {
  obj = _asyncToGenerator(async (guildId) => {
    let emojiId;
    let emojiName;
    let endMs;
    let name;
    let volume;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      let obj10;
      let obj7;
      let uploadSound;
      let uri;
      if (1 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          return { value, done: true };
        } else {
          let obj5 = c7;
          if (c7 == null) {
            let tmp14 = null;
            if (!tmp.isOgg) {
              obj5 = { startMs: 0, endMs };
              tmp14 = obj5;
            }
            obj5 = tmp14;
          }
          let closure_8 = obj5;
          if (null != closure_8) {
            c7 = 2;
            c8 = 1;
            const obj6 = { value: obj7.trimSoundboardAudio(tmp.uri, closure_8), done: false };
            obj7 = closure_132_0(closure_132_2[7]);
            return obj6;
          } else {
            uri = tmp.uri;
          }
        }
      } else if (2 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else {
          uri = value;
          if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        return { value, done: true };
      } else {
        obj10.sound = value;
        obj10.volume = volume;
        obj10.emojiId = emojiId;
        obj10.emojiName = emojiName;
        c8 = 3;
        obj = { value: uploadSound(obj10), done: true };
        return obj;
      }
      const tmp24 = closure_132_0(closure_132_2[8]);
      let closure_6 = tmp24;
      uploadSound = tmp24.uploadSound;
      obj10 = { guildId, name };
      await closure_132_10(uri, "audio/ogg");
      closure_5 = tmp;
      ({ guildId: c0, name: c1, volume: c2, emojiId: c3, emojiName: c4, localSource: c5, durationMs: c6, trim: c7 } = closure_0);
      return "Path";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
let items = ["mp3", "wav", ...new Set(["ogg", "opus"])];
const set = new Set(["ogg", "opus"]);
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardCreationUtils.tsx");

export { pickSoundboardSoundFile };
export function createSoundboardSound() {
  return obj(...arguments);
}
export function showAddSoundboardSoundOptions(guildId) {
  let intl;
  let intl2;
  let intl3;
  let obj2;
  _require = guildId;
  const tmp = require("Sheet/showSimpleActionSheet");
  obj = { key: "AddSoundboardSoundOptions", header: obj2, hasIcons: false, options: items };
  obj2 = { title: intl.string(require("intl").t["8Fu/S7"]) };
  const showSimpleActionSheet = tmp.showSimpleActionSheet;
  intl = require("intl").intl;
  let obj3 = {
    label: intl2.string(require("intl").t["/VJ/Sp"]),
    onPress() {
      obj = ActionSheetActionCreatorsDefault;
      const obj2 = { guildId, analyticsSource: "guild_settings_record" };
      return obj.openLazy(asyncRequire(19798, dependencyMap.paths), "SoundboardRecordSoundActionSheet", obj2);
    }
  };
  intl2 = require("intl").intl;
  items = [obj3, ];
  let obj4 = {
    label: intl3.string(require("intl").t["/uNYPJ"]),
    onPress() {
      return closure_1(...arguments);
    }
  };
  intl3 = require("intl").intl;
  let closure_1 = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let localSource;
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
            localSource = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: pickSoundboardSoundFile(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          localSource = value;
          if (null != localSource) {
            obj = { guildId: closure_129_0, localSource, analyticsSource: "guild_settings_upload" };
            tmp4(c2[13])(obj);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  items[1] = obj4;
  const result = showSimpleActionSheet(obj);
}
