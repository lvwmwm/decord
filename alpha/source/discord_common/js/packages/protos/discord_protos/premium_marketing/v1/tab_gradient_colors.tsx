// Module ID: 9035
// Function ID: 9036
// Name: tab_gradient_colors
// Dependencies: [32, 1196, 2]

// Module 9035 (tab_gradient_colors)
import _mod1196 from "module_1196" /* 1196 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3, internalBinaryWrite4;

let tmp;
let tmp2;
let tmp3;
const T2 = function T() {
  return object;
};
const T3 = function T() {
  return object;
};
const T4 = function T() {
  return object;
};
const T5 = function T() {
  return closure_1_4;
};
const T6 = function T() {
  return closure_1_4;
};
const MessageType = _mod1196.MessageType;
class PaletteColor$Type extends MessageType {
  constructor() {
    const items = [{ no: 1, name: "palette_color", kind: "scalar", T: 9 }, { no: 2, name: "opacity", kind: "scalar", T: 2 }];
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.PaletteColor", items, new.target);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { paletteColor: "", opacity: 0 };
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1196;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
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
          obj.paletteColor = pos.string();
        } else if (2 === tmp5) {
          obj.opacity = pos.float();
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
                onRead = _mod1196.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(paletteColor, tag, writeUnknownFields) {
    if ("" !== paletteColor.paletteColor) {
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      tagResult.string(paletteColor.paletteColor);
    }
    if (0 !== paletteColor.opacity) {
      const tagResult1 = tag.tag(2, _mod1196.WireType.Bit32);
      tagResult1.float(paletteColor.opacity);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, paletteColor, tag);
    }
    return tag;
  }
}
const prototype = PaletteColor$Type.prototype;
let items = [{ no: 1, name: "palette_color", kind: "scalar", T: 9 }, { no: 2, name: "opacity", kind: "scalar", T: 2 }];
const object = new Object("discord_protos.premium_marketing.v1.PaletteColor", items, tmp3, tmp2, "create", "internalBinaryRead", tmp, "internalBinaryWrite");
const MessageType2 = _mod1196.MessageType;
class ThemedPaletteColor$Type extends MessageType2 {
  constructor() {
    const items = [, , , ];
    const obj = { no: 1, name: "light", kind: "message", T: T2 };
    items[0] = obj;
    items[1] = { no: 2, name: "ash", kind: "message", T: T3 };
    const obj2 = { no: 3, name: "dark", kind: "message", T };
    class T {
      constructor() {
        return closure_1_3;
      }
    }
    items[2] = obj2;
    items[3] = { no: 4, name: "onyx", kind: "message", T: T4 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.ThemedPaletteColor", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = {};
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1196;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
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
          obj.light = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.light);
        } else if (2 === tmp5) {
          obj.ash = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.ash);
        } else if (3 === tmp5) {
          obj.dark = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.dark);
        } else if (4 === tmp5) {
          obj.onyx = object.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.onyx);
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
                onRead = _mod1196.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(light, tag, writeUnknownFields) {
    if (light.light) {
      internalBinaryWrite = object.internalBinaryWrite;
      light = light.light;
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(light, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (light.ash) {
      internalBinaryWrite2 = object.internalBinaryWrite;
      const ash = light.ash;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(ash, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (light.dark) {
      internalBinaryWrite3 = object.internalBinaryWrite;
      const dark = light.dark;
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(dark, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    if (light.onyx) {
      internalBinaryWrite4 = object.internalBinaryWrite;
      const onyx = light.onyx;
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite4Result = internalBinaryWrite4(onyx, tagResult3.fork(), writeUnknownFields);
      const joined3 = internalBinaryWrite4Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, light, tag);
    }
    return tag;
  }
}
const prototype2 = ThemedPaletteColor$Type.prototype;
let obj = { no: 1, name: "light", kind: "message", T: T2 };
const items1 = [
  obj,
  { no: 2, name: "ash", kind: "message", T: T3 },
  {
    no: 3,
    name: "dark",
    kind: "message",
    T() {
      return object;
    }
  },
  { no: 4, name: "onyx", kind: "message", T: T4 }
];
let tmp4 = new tmp("discord_protos.premium_marketing.v1.ThemedPaletteColor", items1, tmp3, ThemedPaletteColor$Type, "create", "internalBinaryRead", tmp, "internalBinaryWrite", items1, undefined, require, dependencyMap, object);
const React3 = tmp4;
const MessageType3 = _mod1196.MessageType;
class TabGradientColors$Type extends MessageType3 {
  constructor() {
    const items = [, , ];
    const obj = { no: 1, name: "center", kind: "message", T: T5 };
    items[0] = obj;
    const obj2 = { no: 2, name: "inner_ring", kind: "message", T };
    class T {
      constructor() {
        return closure_1_4;
      }
    }
    items[1] = obj2;
    items[2] = { no: 3, name: "outer_ring", kind: "message", T: T6 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.TabGradientColors", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = {};
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1196.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1196;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
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
          obj.center = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.center);
        } else if (2 === tmp5) {
          obj.innerRing = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.innerRing);
        } else if (3 === tmp5) {
          obj.outerRing = closure_4.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.outerRing);
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
                onRead = _mod1196.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(center, tag, writeUnknownFields) {
    if (center.center) {
      internalBinaryWrite = closure_4.internalBinaryWrite;
      center = center.center;
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(center, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (center.innerRing) {
      internalBinaryWrite2 = closure_4.internalBinaryWrite;
      const innerRing = center.innerRing;
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(innerRing, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (center.outerRing) {
      internalBinaryWrite3 = closure_4.internalBinaryWrite;
      const outerRing = center.outerRing;
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(outerRing, tagResult2.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, center, tag);
    }
    return tag;
  }
}
const prototype3 = TabGradientColors$Type.prototype;
let obj2 = { no: 1, name: "center", kind: "message", T: T5 };
const items2 = [obj2, , ];
const obj3 = { no: 2, name: "inner_ring", kind: "message", T };
class T {
  constructor() {
    return closure_1_4;
  }
}
items2[1] = obj3;
items2[2] = { no: 3, name: "outer_ring", kind: "message", T: T6 };
const tmp7 = new "internalBinaryWrite"("discord_protos.premium_marketing.v1.TabGradientColors", items2, tmp3, ThemedPaletteColor$Type, "create", T, TabGradientColors$Type, "internalBinaryWrite", items2, undefined);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/tab_gradient_colors.tsx");

export const PaletteColor = object;
export const ThemedPaletteColor = tmp4;
export const TabGradientColors = tmp7;
