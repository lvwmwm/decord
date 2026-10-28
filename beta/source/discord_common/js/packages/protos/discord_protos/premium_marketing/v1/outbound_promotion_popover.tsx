// Module ID: 9587
// Function ID: 9588
// Name: outbound_promotion_popover
// Dependencies: [32, 1212, 9567, 2]

// Module 9587 (outbound_promotion_popover)
import _mod1212 from "module_1212" /* 1212 */;
import theme_aware_asset from "theme_aware_asset" /* 9567 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let internalBinaryWrite;

let tmp;
function T() {
  return theme_aware_asset.ThemeAwareAsset;
}
const MessageType = _mod1212.MessageType;
class OutboundPromotionPopover$Type extends MessageType {
  constructor() {
    const items = [];
    const obj = { no: 1, name: "asset", kind: "message", T };
    items[0] = obj;
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.OutboundPromotionPopover", items, new.target);
    return tmp2;
  }
  create(partialSettings) {
    const obj = {};
    const _Object = Object;
    const obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1212.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1212;
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
          let ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
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
                onRead = _mod1212.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(asset, tag, writeUnknownFields) {
    if (asset.asset) {
      const ThemeAwareAsset = theme_aware_asset.ThemeAwareAsset;
      internalBinaryWrite = ThemeAwareAsset.internalBinaryWrite;
      asset = asset.asset;
      const tagResult = tag.tag(1, _mod1212.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(asset, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1212.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, asset, tag);
    }
    return tag;
  }
}
const prototype = OutboundPromotionPopover$Type.prototype;
let obj = { no: 1, name: "asset", kind: "message", T };
let items = [obj];
const prototype1 = new prototype("discord_protos.premium_marketing.v1.OutboundPromotionPopover", items, tmp, OutboundPromotionPopover$Type, prototype, items, require);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/outbound_promotion_popover.tsx");

export const OutboundPromotionPopover = prototype1;
