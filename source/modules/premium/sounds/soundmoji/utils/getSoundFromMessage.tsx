// Module ID: 4580
// Function ID: 40163
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 4580 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  let found;
  if (null != arr) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(arg1));
  }
  return found;
}
let closure_2 = importDefault(dependencyMap[0]);
const DEFAULT_SOUND_GUILD_ID = arg1(dependencyMap[1]).DEFAULT_SOUND_GUILD_ID;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx");

export default function getSoundFromMessage(arg0, arg1, arg2, arr) {
  const tmp = getSoundFromSounds(arr, arg2);
  if (null != tmp) {
    let guild_id2 = tmp.guild_id;
    if (null == guild_id2) {
      guild_id2 = DEFAULT_SOUND_GUILD_ID;
    }
    return arg1(dependencyMap[2]).soundboardSoundFromAPI(tmp, guild_id2);
  } else {
    let message = message.getMessage(arg0, arg1);
    if (null != message) {
      let type;
      if (null != message) {
        const messageReference = message.messageReference;
        if (null != messageReference) {
          type = messageReference.type;
        }
      }
      if (type === arg1(dependencyMap[3]).MessageReferenceTypes.FORWARD) {
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
        return arg1(dependencyMap[2]).soundboardSoundFromAPI(tmp5Result, guild_id);
      }
    }
  }
};
