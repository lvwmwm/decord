// Module ID: 9114
// Function ID: 9115
// Name: gradient
// Dependencies: [32, 1210, 2]

// Module 9114 (gradient)
import _mod1210 from "module_1210" /* 1210 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let tmp;
const MessageType = _mod1210.MessageType;
class Gradient$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "angle", kind: "scalar", T: 2 }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.Gradient", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { colors: [], angle: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1210.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1210;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, readUnknownField, arg3) {
    let tmp5;
    let tmp6;
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    const sum = pos.pos + arg1;
    if (pos.pos < sum) {
      do {
        let tmp4 = _slicedToArray(pos.tag(), 2);
        [tmp5, tmp6] = tmp4;
        if (1 === tmp5) {
          let colors = obj.colors;
          let arr = colors.push(pos.string());
        } else if (2 === tmp5) {
          obj.angle = pos.float();
        } else {
          let onRead = readUnknownField.readUnknownField;
          if ("throw" === onRead) {
            let tmp15 = globalThis;
            let _globalThis = globalThis;
            let _HermesInternal = HermesInternal;
            let str = ") for ";
            let str2 = " (wire type ";
            let str3 = "Unknown field ";
            let self2 = this;
            let self3 = this;
            let error = new Error("Unknown field " + tmp5 + " (wire type " + tmp6 + ") for " + self.typeName);
            throw error;
          } else {
            let skipResult = pos.skip(tmp6);
            if (false !== onRead) {
              if (true === onRead) {
                onRead = _mod1210.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(colors, tag, writeUnknownFields) {
    let length;
    let num = 0;
    if (0 < colors.colors.length) {
      do {
        let tagResult = tag.tag(1, _mod1210.WireType.LengthDelimited);
        let stringResult = tagResult.string(colors.colors[num]);
        num = num + 1;
        length = colors.colors.length;
      } while (num < length);
    }
    if (0 !== colors.angle) {
      const tagResult1 = tag.tag(2, _mod1210.WireType.Bit32);
      tagResult1.float(colors.angle);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1210.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, colors, tag);
    }
    return tag;
  }
}
const prototype = Gradient$Type.prototype;
let items = [{ no: 1, name: "colors", kind: "scalar", repeat: 2, T: 9 }, { no: 2, name: "angle", kind: "scalar", T: 2 }];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.Gradient", items, tmp, Gradient$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gradient.tsx");

export const Gradient = prototype1;
