// Module ID: 10271
// Function ID: 79350
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 27, 653, 33, 4130, 3834, 689, 8018, 9851, 10272, 4317, 10274, 5679, 2]
// Exports: usePreviewableMedia

// Module 10271 (_createForOfIteratorHelperLoose)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
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
function VoiceMessageIcon() {
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_MOD_STRONG);
  let obj1 = require(3834) /* map */;
  obj = {};
  const token1 = obj1.useToken(importDefault(689).colors.BACKGROUND_MOD_SUBTLE);
  obj = { width: "100%", height: "100%", viewBox: "0 0 64 61", fill: "none" };
  const tmp = callback3();
  obj.children = callback(require(8018) /* inlineStyles */.Path, { d: "M22.2188 59.8545C19.5607 61.6263 16.0003 59.7208 16 56.5264V48C7.16344 48 2.5772e-07 40.8366 0 32V16C0 7.16344 7.16344 0 16 0H48C56.8366 0 64 7.16344 64 16V32C64 40.8366 56.8366 48 48 48H40L22.2188 59.8545Z", fill: token, stroke: token1 });
  const items = [callback(importDefault(8018), obj), ];
  obj1 = { style: tmp.voiceMessageIconOverlay };
  const items1 = [callback(require(9851) /* CirclePlayIcon */.CirclePlayIcon, { size: "md", color: "background-brand", secondaryColor: "white" }), callback(require(10272) /* WaveformIcon */.WaveformIcon, { size: "md", color: "background-brand" })];
  obj1.children = items1;
  items[1] = callback2(View, obj1);
  obj.children = items;
  return callback2(closure_9, obj);
}
function getBasePreviewableMedia(arg0) {
  let isForward;
  let iter2;
  let iter4;
  let message;
  ({ message, isForward } = arg0);
  const items = [];
  if (message.attachments.length > 0) {
    if (message.hasFlag(constants2.IS_VOICE_MESSAGE)) {
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
        do {
          let value = iter.value;
          let filename = value.filename;
          let tmp4 = require;
          let tmp5 = dependencyMap;
          obj = require(4317) /* urlMatchesFileExtension */;
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
            let tmp6 = require;
            let tmp7 = dependencyMap;
            let obj1 = require(4317) /* urlMatchesFileExtension */;
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
              let tmp8 = require;
              let tmp9 = dependencyMap;
              let obj2 = require(4317) /* urlMatchesFileExtension */;
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
                let tmp19 = require;
                let tmp20 = dependencyMap;
                obj2.icon = callback(require(9851) /* CirclePlayIcon */.CirclePlayIcon, { size: "lg", color: "background-brand", secondaryColor: "white" });
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
                let tmp13 = require;
                let tmp14 = dependencyMap;
                let obj3 = { size: "lg" };
                let tmp15 = importDefault;
                obj3.color = importDefault(689).colors.ICON_SUBTLE;
                obj2.icon = callback(require(10274) /* FileIcon */.FileIcon, obj3);
                let str5 = null;
                if (isForward) {
                  str5 = "forward";
                }
                obj2.parentType = str5;
                let arr3 = push(obj2);
              }
            }
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  }
  const tmp35 = _createForOfIteratorHelperLoose(message.embeds);
  let iter3 = tmp35();
  if (!iter3.done) {
    do {
      value = iter3.value;
      let tmp36 = constants;
      if (value.type === constants.GIFV) {
        let obj4 = {};
        let tmp37 = obj;
        let _HermesInternal6 = HermesInternal;
        obj4.id = "" + value.id + "-" + obj.GIF;
        let tmp38 = obj;
        obj4.type = obj.GIF;
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
const View = get_ActivityIndicator.View;
({ MessageEmbedTypes: closure_5, MessageFlags: closure_6 } = ME);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = { IMAGE: "image", VIDEO: "video", AUDIO: "audio", FILE: "file", STICKER: "sticker", GIF: "gif", VOICE_MESSAGE: "voice_message" };
obj = {};
obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj["flexDirection"] = "row";
obj["alignItems"] = "center";
obj["justifyContent"] = "center";
obj["paddingBottom"] = 13;
obj.voiceMessageIconOverlay = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("ME").fileFinishedImporting("modules/in_app_notifications/native/hooks/usePreviewableMedia.tsx");

export const PreviewableMediaTypes = obj;
export const usePreviewableMedia = function usePreviewableMedia(message) {
  let closure_0 = message;
  let items = [message];
  return React.useMemo(() => {
    const items = [];
    let obj = { message, isForward: false };
    const items1 = [...outer1_15(obj)];
    items.push.apply(items1);
    if (outer1_1(outer1_2[12])(message)) {
      if (message.messageSnapshots.length > 0) {
        obj = { message: message.messageSnapshots[0].message, isForward: true };
        const push = items.push;
        const items2 = [];
        HermesBuiltin.arraySpread(outer1_15(obj), 0);
        HermesBuiltin.apply(items2, items);
      }
    }
    return items;
  }, items);
};
