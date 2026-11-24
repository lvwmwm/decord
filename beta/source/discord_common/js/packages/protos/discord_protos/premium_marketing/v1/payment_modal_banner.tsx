// Module ID: 9157
// Function ID: 9158
// Name: payment_modal_banner
// Dependencies: [32, 1196, 9150, 2]

// Module 9157 (payment_modal_banner)
import _mod1196 from "module_1196" /* 1196 */;
import localized_string from "localized_string" /* 9150 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2;

let tmp;
const T2 = function T() {
  return require("localized_string").LocalizedString;
};
const T3 = function T() {
  const items = ["discord_protos.premium_marketing.v1.PaymentModalBannerGradient", PaymentModalBannerGradient, "PAYMENT_MODAL_BANNER_GRADIENT_"];
  return items;
};
const PaymentModalBannerGradient = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", BLURPLE: 1, [1]: "BLURPLE", NITRO_PINK: 2, [2]: "NITRO_PINK" };
const MessageType = _mod1196.MessageType;
class PaymentModalBanner$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "header_localized", kind: "message", T: T2 }, , ];
    const obj = { no: 5, name: "body_localized", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).LocalizedString;
      }
    }
    items[4] = obj;
    items[5] = { no: 6, name: "gradient", kind: "enum", T: T3 };
    const tmp2 = new tmp("discord_protos.premium_marketing.v1.PaymentModalBanner", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { assetUrl: "", header: "", body: "", gradient: 0 };
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
          obj.assetUrl = pos.string();
        } else if (2 === tmp5) {
          obj.header = pos.string();
        } else if (3 === tmp5) {
          obj.body = pos.string();
        } else if (4 === tmp5) {
          let LocalizedString2 = localized_string.LocalizedString;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
        } else if (5 === tmp5) {
          let LocalizedString = localized_string.LocalizedString;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
        } else if (6 === tmp5) {
          obj.gradient = pos.int32();
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
  internalBinaryWrite(assetUrl, tag, writeUnknownFields) {
    if ("" !== assetUrl.assetUrl) {
      const tagResult = tag.tag(1, _mod1196.WireType.LengthDelimited);
      tagResult.string(assetUrl.assetUrl);
    }
    if ("" !== assetUrl.header) {
      const tagResult1 = tag.tag(2, _mod1196.WireType.LengthDelimited);
      tagResult1.string(assetUrl.header);
    }
    if ("" !== assetUrl.body) {
      const tagResult2 = tag.tag(3, _mod1196.WireType.LengthDelimited);
      tagResult2.string(assetUrl.body);
    }
    if (assetUrl.headerLocalized) {
      const LocalizedString = localized_string.LocalizedString;
      internalBinaryWrite = LocalizedString.internalBinaryWrite;
      const headerLocalized = assetUrl.headerLocalized;
      const tagResult3 = tag.tag(4, _mod1196.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(headerLocalized, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (assetUrl.bodyLocalized) {
      const LocalizedString2 = localized_string.LocalizedString;
      internalBinaryWrite2 = LocalizedString2.internalBinaryWrite;
      const bodyLocalized = assetUrl.bodyLocalized;
      const tagResult4 = tag.tag(5, _mod1196.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(bodyLocalized, tagResult4.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (0 !== assetUrl.gradient) {
      const tagResult5 = tag.tag(6, _mod1196.WireType.Varint);
      tagResult5.int32(assetUrl.gradient);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1196.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, assetUrl, tag);
    }
    return tag;
  }
}
const prototype = PaymentModalBanner$Type.prototype;
let items = [{ no: 1, name: "asset_url", kind: "scalar", T: 9 }, { no: 2, name: "header", kind: "scalar", T: 9 }, { no: 3, name: "body", kind: "scalar", T: 9 }, { no: 4, name: "header_localized", kind: "message", T: T2 }, , ];
let obj2 = { no: 5, name: "body_localized", kind: "message", T };
class T {
  constructor() {
    return require("localized_string").LocalizedString;
  }
}
items[4] = obj2;
items[5] = { no: 6, name: "gradient", kind: "enum", T: T3 };
const prototype1 = new prototype("discord_protos.premium_marketing.v1.PaymentModalBanner", items, tmp, T, PaymentModalBanner$Type, prototype, items, require, dependencyMap);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/payment_modal_banner.tsx");

export { PaymentModalBannerGradient };
export const PaymentModalBanner = prototype1;
