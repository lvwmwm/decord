// Module ID: 10259
// Function ID: 79282
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: usePreviewableMedia

// Module 10259 (_createForOfIteratorHelperLoose)
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
function VoiceMessageIcon() {
  let obj = arg1(dependencyMap[5]);
  const token = obj.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG);
  let obj1 = arg1(dependencyMap[5]);
  obj = {};
  const token1 = obj1.useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE);
  obj = { "Null": null, "Null": "text-xs/normal", "Null": "text-subtle", "Null": 1 };
  const tmp = callback3();
  obj.children = callback(arg1(dependencyMap[7]).Path, { d: "M22.2188 59.8545C19.5607 61.6263 16.0003 59.7208 16 56.5264V48C7.16344 48 2.5772e-07 40.8366 0 32V16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V32C64 40.8366 56.8366 48 48 48H40L22.2188 59.8545Z", fill: token, stroke: token1 });
  const items = [callback(importDefault(dependencyMap[7]), obj), ];
  obj1 = { style: tmp.voiceMessageIconOverlay };
  const items1 = [callback(arg1(dependencyMap[8]).CirclePlayIcon, { "Bool(false)": -2, "Bool(false)": -2, "Bool(false)": -2 }), callback(arg1(dependencyMap[9]).WaveformIcon, { "Bool(false)": -2, "Bool(false)": -2 })];
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(closure_9, obj);
}
function getBasePreviewableMedia(arg0) {
  let isForward;
  let iter4;
  let message;
  ({ message, isForward } = arg0);
  const items = [];
  if (message.attachments.length > 0) {
    if (message.hasFlag(constants.IS_VOICE_MESSAGE)) {
      const first = message.attachments[0];
      let obj = {};
      const _HermesInternal5 = HermesInternal;
      obj.id = "" + first.id + "-" + obj.VOICE_MESSAGE;
      obj.type = obj.VOICE_MESSAGE;
      obj.media = first;
      obj.icon = callback(VoiceMessageIcon, {});
      let str11 = null;
      if (isForward) {
        str11 = "forward";
      }
      obj.parentType = str11;
      items.push(obj);
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(message.attachments);
      let iter = tmp2();
      if (!iter.done) {
        while (true) {
          let value = iter.value;
          let filename = value.filename;
          let tmp4 = arg1;
          let tmp5 = dependencyMap;
          obj = arg1(dependencyMap[10]);
          if (obj.isImageFile(filename)) {
            obj = {};
            let tmp25 = obj;
            let _HermesInternal4 = HermesInternal;
            obj.id = "" + value.id + "-" + obj.IMAGE;
            let tmp26 = obj;
            obj.type = obj.IMAGE;
            obj.media = value;
            let str8 = null;
            if (isForward) {
              str8 = "forward";
            }
            obj.parentType = str8;
            let arr = items.push(obj);
          } else {
            let tmp6 = arg1;
            let tmp7 = dependencyMap;
            let obj1 = arg1(dependencyMap[10]);
            if (obj1.isVideoFile(filename)) {
              obj1 = {};
              let tmp22 = obj;
              let _HermesInternal3 = HermesInternal;
              obj1.id = "" + value.id + "-" + obj.VIDEO;
              let tmp23 = obj;
              obj1.type = obj.VIDEO;
              obj1.media = value;
              let str7 = null;
              if (isForward) {
                str7 = "forward";
              }
              obj1.parentType = str7;
              let arr1 = items.push(obj1);
            } else {
              let tmp8 = arg1;
              let tmp9 = dependencyMap;
              let obj2 = arg1(dependencyMap[10]);
              let push = items.push;
              obj2 = {};
              let id = value.id;
              let tmp10 = obj;
              if (obj2.isAudioFile(filename)) {
                let _HermesInternal2 = HermesInternal;
                obj2.id = "" + id + "-" + tmp10.AUDIO;
                let tmp17 = obj;
                obj2.type = obj.AUDIO;
                obj2.media = value;
                let tmp18 = callback;
                let tmp19 = arg1;
                let tmp20 = dependencyMap;
                obj2.icon = callback(arg1(dependencyMap[8]).CirclePlayIcon, {});
                let str6 = null;
                if (isForward) {
                  str6 = "forward";
                }
                obj2.parentType = str6;
                let arr2 = push(obj2);
              } else {
                let _HermesInternal = HermesInternal;
                obj2.id = "" + id + "-" + tmp10.FILE;
                let tmp11 = obj;
                obj2.type = obj.FILE;
                obj2.media = value;
                let tmp12 = callback;
                let tmp13 = arg1;
                let tmp14 = dependencyMap;
                let obj3 = { size: "lg" };
                let tmp15 = importDefault;
                obj3.color = importDefault(dependencyMap[6]).colors.ICON_SUBTLE;
                obj2.icon = callback(arg1(dependencyMap[11]).FileIcon, obj3);
                let str5 = null;
                if (isForward) {
                  str5 = "forward";
                }
                obj2.parentType = str5;
                let arr3 = push(obj2);
              }
            }
          }
          let iter2 = tmp2();
          iter = iter2;
          if (iter2.done) {
            break;
          } else {
            // continue
          }
        }
      }
    }
  }
  const tmp35 = _createForOfIteratorHelperLoose(message.embeds);
  let iter3 = tmp35();
  if (!iter3.done) {
    do {
      value = iter3.value;
      let tmp36 = closure_5;
      if (value.type === closure_5.GIFV) {
        let obj4 = {};
        let tmp37 = closure_10;
        let _HermesInternal6 = HermesInternal;
        obj4.id = "" + value.id + "-" + closure_10.GIF;
        let tmp38 = closure_10;
        obj4.type = closure_10.GIF;
        obj4.media = value;
        let str12 = null;
        if (isForward) {
          str12 = "forward";
        }
        obj4.parentType = str12;
        let arr4 = items.push(obj4);
      }
      iter4 = tmp35();
      iter3 = iter4;
    } while (!iter4.done);
  }
  if (message.stickerItems.length > 0) {
    const first1 = message.stickerItems[0];
    const obj5 = {};
    const _HermesInternal7 = HermesInternal;
    obj5.id = "" + first1.id + "-" + obj.STICKER;
    obj5.type = obj.STICKER;
    obj5.media = first1;
    let str13 = null;
    if (isForward) {
      str13 = "forward";
    }
    obj5.parentType = str13;
    items.push(obj5);
  }
  return items;
}
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ MessageEmbedTypes: closure_5, MessageFlags: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[3]));
let obj = { IMAGE: "image", VIDEO: "video", AUDIO: "audio", FILE: "file", STICKER: "sticker", GIF: "gif", VOICE_MESSAGE: "voice_message" };
const tmp4 = arg1(dependencyMap[3]);
obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["flexDirection"] = "row";
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["paddingBottom"] = 13;
obj.voiceMessageIconOverlay = obj;
let closure_11 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx");

export const PreviewableMediaTypes = obj;
export const usePreviewableMedia = function usePreviewableMedia(message) {
  const arg1 = message;
  const items = [message];
  return React.useMemo(() => {
    const items = [];
    let obj = { message: arg0, isForward: false };
    const items1 = [...closure_15(obj)];
    items.push.apply(items1);
    if (callback(closure_2[12])(arg0)) {
      if (arg0.messageSnapshots.length > 0) {
        obj = { message: arg0.messageSnapshots[0].message, isForward: true };
        const push = items.push;
        const items2 = [];
        HermesBuiltin.arraySpread(callback2(obj), 0);
        HermesBuiltin.apply(items2, items);
      }
    }
    return items;
  }, items);
};
