// Module ID: 7146
// Function ID: 57619
// Name: _callSuper
// Dependencies: []

// Module 7146 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (MessageType) => {
  class PremiumTabPopoverCTAButton$Type {
    constructor() {
      tmp = closure_3(this, PremiumTabPopoverCTAButton$Type);
      items = [, , , , ];
      items[0] = { 9223372036854775807: "YELLOW_NEW_72", 0: 1, 9223372036854775807: "light_url", no: "scalar" };
      items[1] = {
        T() {
              const items = [false, callback(closure_1[6]).ButtonAction, "BUTTON_ACTION_"];
              return items;
            }
      };
      items[2] = {};
      obj = { "Null": 0.975, "Null": "PRIMARY_230", "Null": 0.975 };
      obj.T = function T() {
        return callback(closure_1[7]).LocalizedString;
      };
      items[3] = obj;
      obj = { "Null": 2417, "Null": -1854455552, "Null": 24182788 };
      obj.T = function T() {
        return callback(closure_1[8]).UInt64Value;
      };
      items[4] = obj;
      items1 = [true];
      items1[1] = items;
      return closure_9(this, PremiumTabPopoverCTAButton$Type, items1);
    }
  }
  const arg1 = PremiumTabPopoverCTAButton$Type;
  callback3(PremiumTabPopoverCTAButton$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Null": 24, "Null": 8, "Null": 3 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumTabPopoverCTAButton$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumTabPopoverCTAButton$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumTabPopoverCTAButton$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.copy = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.buttonAction = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.deeplinkSection = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp31 = PremiumTabPopoverCTAButton$Type;
          let tmp32 = closure_1;
          let LocalizedString = PremiumTabPopoverCTAButton$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = PremiumTabPopoverCTAButton$Type;
          let tmp27 = closure_1;
          let UInt64Value = PremiumTabPopoverCTAButton$Type(closure_1[8]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.navigableStorefrontApplicationId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.navigableStorefrontApplicationId);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = PremiumTabPopoverCTAButton$Type;
                let tmp13 = closure_1;
                onRead = PremiumTabPopoverCTAButton$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(copy, tag, writeUnknownFields) {
      if ("" !== copy.copy) {
        tag.tag(1, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).string(copy.copy);
        const tagResult = tag.tag(1, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (0 !== copy.buttonAction) {
        tag.tag(2, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.Varint).int32(copy.buttonAction);
        const tagResult1 = tag.tag(2, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.Varint);
      }
      if ("" !== copy.deeplinkSection) {
        tag.tag(3, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).string(copy.deeplinkSection);
        const tagResult2 = tag.tag(3, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (copy.copyLocalized) {
        const LocalizedString = PremiumTabPopoverCTAButton$Type(closure_1[7]).LocalizedString;
        const tagResult3 = tag.tag(4, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (copy.navigableStorefrontApplicationId) {
        const UInt64Value = PremiumTabPopoverCTAButton$Type(closure_1[8]).UInt64Value;
        const tagResult4 = tag.tag(5, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, PremiumTabPopoverCTAButton$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumTabPopoverCTAButton$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, copy, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumTabPopoverCTAButton$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class PremiumTabPopover$Type {
    constructor() {
      tmp = closure_3(this, PremiumTabPopover$Type);
      items = [, , , , , , , ];
      items[0] = {};
      items[1] = { 9223372036854775807: "background_asset", 0: "message", 9223372036854775807: 0, no: 50.06 };
      obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006403427937624729, "Null": 9126805520.75, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001427678768759017 };
      obj.T = function T() {
        return callback(closure_1[10]).ThemeAwareAsset;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return closure_8;
            }
      };
      items[4] = { 9223372036854775807: null, 0: "bd0899bbe9025729a8e812d462104779", 9223372036854775807: "img_bundle_subheader_mobile", no: "png" };
      obj = { "Null": "#E6E6E7", "Null": "OPACITY_BLUE_52", "Null": 0.5215686274509804 };
      obj.T = function T() {
        return callback(closure_1[11]).HelpArticle;
      };
      items[5] = obj;
      items[6] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items[7] = {
        T() {
              return callback(closure_1[7]).LocalizedString;
            }
      };
      items1 = ["<string:4072184695>"];
      items1[1] = items;
      return closure_9(this, PremiumTabPopover$Type, items1);
    }
  }
  const arg1 = PremiumTabPopover$Type;
  callback3(PremiumTabPopover$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumTabPopover$Type(closure_1[9]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumTabPopover$Type(closure_1[9]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumTabPopover$Type(closure_1[9]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp7;
      let tmp8;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp5 = callback;
        let tmp6 = callback(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.header = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp45 = PremiumTabPopover$Type;
          let tmp46 = closure_1;
          let ThemeAwareAsset = PremiumTabPopover$Type(closure_1[10]).ThemeAwareAsset;
          let tmp47 = ThemeAwareAsset;
          let tmp48 = pos;
          let tmp49 = readUnknownField;
          obj.asset = ThemeAwareAsset.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.asset);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp41 = closure_8;
          let tmp42 = closure_8;
          let tmp43 = pos;
          let tmp44 = readUnknownField;
          obj.button = closure_8.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.button);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.helpArticleId = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp36 = PremiumTabPopover$Type;
          let tmp37 = closure_1;
          let HelpArticle = PremiumTabPopover$Type(closure_1[11]).HelpArticle;
          let tmp38 = HelpArticle;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = PremiumTabPopover$Type;
          let tmp32 = closure_1;
          let LocalizedString2 = PremiumTabPopover$Type(closure_1[7]).LocalizedString;
          let tmp33 = LocalizedString2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.headerLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = PremiumTabPopover$Type;
          let tmp27 = closure_1;
          let LocalizedString = PremiumTabPopover$Type(closure_1[7]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp19 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp20 = tmp7;
            let tmp21 = tmp8;
            let prototype = _Error.prototype;
            let tmp22 = new.target;
            let tmp23 = new.target;
            _Error = new _Error("Unknown field " + tmp7 + " (wire type " + tmp8 + ") for " + self.typeName);
            let tmp25 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp8);
            tmp10 = readUnknownField;
            tmp11 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp12 = PremiumTabPopover$Type;
                let tmp13 = closure_1;
                onRead = PremiumTabPopover$Type(closure_1[9]).UnknownFieldHandler.onRead;
              }
              let tmp14 = obj;
              let tmp15 = tmp7;
              let tmp16 = tmp8;
              let tmp17 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp7, tmp8, skipResult);
              tmp10 = readUnknownField;
              tmp11 = skipResult;
            }
          }
        }
        let tmp3 = tmp10;
        let tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(header, tag, writeUnknownFields) {
      if ("" !== header.header) {
        tag.tag(1, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(2, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).string(header.body);
        const tagResult1 = tag.tag(2, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (header.asset) {
        const ThemeAwareAsset = PremiumTabPopover$Type(closure_1[10]).ThemeAwareAsset;
        const tagResult2 = tag.tag(3, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
        const joined = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = ThemeAwareAsset.internalBinaryWrite(header.asset, tag.tag(3, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.button) {
        const tagResult3 = tag.tag(4, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
        const joined1 = closure_8.internalBinaryWrite(header.button, tag.tag(4, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_8.internalBinaryWrite(header.button, tag.tag(4, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== header.helpArticleId) {
        tag.tag(5, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).string(header.helpArticleId);
        const tagResult4 = tag.tag(5, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
      }
      if (header.helpArticle) {
        const HelpArticle = PremiumTabPopover$Type(closure_1[11]).HelpArticle;
        const tagResult5 = tag.tag(6, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
        const joined2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(6, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = PremiumTabPopover$Type(closure_1[7]).LocalizedString;
        const tagResult6 = tag.tag(7, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
        const joined3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(7, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString2 = PremiumTabPopover$Type(closure_1[7]).LocalizedString;
        const tagResult7 = tag.tag(8, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited);
        const joined4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = LocalizedString2.internalBinaryWrite(header.bodyLocalized, tag.tag(8, PremiumTabPopover$Type(closure_1[9]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumTabPopover$Type(closure_1[9]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumTabPopover$Type, items);
}(arg1(dependencyMap[9]).MessageType);
tmp4 = new tmp4();
const result = arg1(dependencyMap[12]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/premium_tab_popover.tsx");

export const PremiumTabPopoverCTAButton = tmp2;
export const PremiumTabPopover = tmp4;
