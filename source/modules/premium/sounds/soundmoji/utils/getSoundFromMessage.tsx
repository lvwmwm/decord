// Module ID: 4584
// Function ID: 40199
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4349, 4579, 4585, 671, 2]
// Exports: default

// Module 4584 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getSoundFromSounds(arr, arg1) {
  let closure_0 = arg1;
  let found;
  if (null != arr) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
  }
  return found;
}
const result = require("SoundButtonOverlay").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx");

export default function getSoundFromMessage(arg0, arg1, arg2, arr) {
  const tmp = getSoundFromSounds(arr, arg2);
  if (null != tmp) {
    let guild_id2 = tmp.guild_id;
    if (null == guild_id2) {
      guild_id2 = DEFAULT_SOUND_GUILD_ID;
    }
    return require(4585) /* SoundButtonOverlay */.soundboardSoundFromAPI(tmp, guild_id2);
  } else {
    message = message.getMessage(arg0, arg1);
    if (null != message) {
      let type;
      if (null != message) {
        const messageReference = message.messageReference;
        if (null != messageReference) {
          type = messageReference.type;
        }
      }
      if (type === require(671) /* MessageReferenceTypes */.MessageReferenceTypes.FORWARD) {
        let messageSnapshots;
        if (null != message) {
          messageSnapshots = message.messageSnapshots;
        }
        if (null == messageSnapshots) {
          messageSnapshots = [];
        }
        const tmp9 = _createForOfIteratorHelperLoose(messageSnapshots);
        const iter = tmp9();
        let iter2 = iter;
        let tmp11Result;
        if (!iter.done) {
          while (true) {
            message = iter2.value.message;
            let soundboardSounds;
            let tmp11 = getSoundFromSounds;
            if (null != message) {
              soundboardSounds = message.soundboardSounds;
            }
            tmp11Result = tmp11(soundboardSounds, arg2);
            if (null != tmp11Result) {
              break;
            } else {
              let iter3 = tmp9();
              iter2 = iter3;
              if (iter3.done) {
                break;
              }
            }
          }
        }
        let tmp5Result = tmp11Result;
      } else {
        let soundboardSounds1;
        if (null != message) {
          soundboardSounds1 = message.soundboardSounds;
        }
        tmp5Result = getSoundFromSounds(soundboardSounds1, arg2);
        const tmp5 = getSoundFromSounds;
      }
      if (null != tmp5Result) {
        let guild_id = tmp5Result.guild_id;
        if (null == guild_id) {
          guild_id = DEFAULT_SOUND_GUILD_ID;
        }
        return require(4585) /* SoundButtonOverlay */.soundboardSoundFromAPI(tmp5Result, guild_id);
      }
    }
  }
};
