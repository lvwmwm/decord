// Module ID: 7130
// Function ID: 57367
// Name: _callSuper
// Dependencies: []

// Module 7130 (_callSuper)
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
const obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", OPEN_MARKETING_PAGE: 1, [1]: "OPEN_MARKETING_PAGE", OPEN_TIER_2_PAYMENT_MODAL: 2, [2]: "OPEN_TIER_2_PAYMENT_MODAL", OPEN_TIER_1_PAYMENT_MODAL: 3, [3]: "OPEN_TIER_1_PAYMENT_MODAL", OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER: 4, [4]: "OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER", OPEN_PLAN_SELECTION_MODAL: 5, [5]: "OPEN_PLAN_SELECTION_MODAL", OPEN_PREMIUM_GROUP_PAYMENT_MODAL: 6, [6]: "OPEN_PREMIUM_GROUP_PAYMENT_MODAL", OPEN_SOCIAL_LAYER_STOREFRONT: 7, [7]: "OPEN_SOCIAL_LAYER_STOREFRONT" };
let tmp2 = (MessageType) => {
  class FeatureCard$Type {
    constructor() {
      tmp = closure_3(this, FeatureCard$Type);
      items = [, , , , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items[4] = {};
      items[5] = {
        T() {
              return callback(closure_1[6]).LocalizedString;
            }
      };
      obj = { -111020099: 9, 1351895378: 18, 1456955659: "help_article" };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[6] = obj;
      items[7] = {
        T() {
              return callback(closure_1[6]).LocalizedString;
            }
      };
      obj = { -111020099: false, 1351895378: false, 1456955659: false };
      obj.T = function T() {
        return callback(closure_1[7]).HelpArticle;
      };
      items[8] = obj;
      items1 = ["Path"];
      items1[1] = items;
      return closure_14(this, FeatureCard$Type, items1);
    }
  }
  const arg1 = FeatureCard$Type;
  callback3(FeatureCard$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { display: false, flexDirection: false, paddingRight: false, marginTop: false, fontSize: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FeatureCard$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FeatureCard$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = FeatureCard$Type(closure_1[8]);
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
          obj.pill = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.body = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.imageLink = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.imageLinkLightTheme = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp41 = FeatureCard$Type;
          let tmp42 = closure_1;
          let LocalizedString3 = FeatureCard$Type(closure_1[6]).LocalizedString;
          let tmp43 = LocalizedString3;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.headerLocalized = LocalizedString3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.headerLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp36 = FeatureCard$Type;
          let tmp37 = closure_1;
          let LocalizedString2 = FeatureCard$Type(closure_1[6]).LocalizedString;
          let tmp38 = LocalizedString2;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.pillLocalized = LocalizedString2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.pillLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp31 = FeatureCard$Type;
          let tmp32 = closure_1;
          let LocalizedString = FeatureCard$Type(closure_1[6]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.bodyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.bodyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (9 === tmp7) {
          let tmp26 = FeatureCard$Type;
          let tmp27 = closure_1;
          let HelpArticle = FeatureCard$Type(closure_1[7]).HelpArticle;
          let tmp28 = HelpArticle;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.helpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.helpArticle);
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
                let tmp12 = FeatureCard$Type;
                let tmp13 = closure_1;
                onRead = FeatureCard$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
        tag.tag(1, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.pill) {
        tag.tag(2, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).string(header.pill);
        const tagResult1 = tag.tag(2, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(3, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).string(header.body);
        const tagResult2 = tag.tag(3, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.imageLink) {
        tag.tag(4, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).string(header.imageLink);
        const tagResult3 = tag.tag(4, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.imageLinkLightTheme) {
        tag.tag(5, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).string(header.imageLinkLightTheme);
        const tagResult4 = tag.tag(5, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (header.headerLocalized) {
        const LocalizedString = FeatureCard$Type(closure_1[6]).LocalizedString;
        const tagResult5 = tag.tag(6, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(6, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(6, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.pillLocalized) {
        const LocalizedString2 = FeatureCard$Type(closure_1[6]).LocalizedString;
        const tagResult6 = tag.tag(7, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString2.internalBinaryWrite(header.pillLocalized, tag.tag(7, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString2.internalBinaryWrite(header.pillLocalized, tag.tag(7, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.bodyLocalized) {
        const LocalizedString3 = FeatureCard$Type(closure_1[6]).LocalizedString;
        const tagResult7 = tag.tag(8, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
        const joined2 = LocalizedString3.internalBinaryWrite(header.bodyLocalized, tag.tag(8, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = LocalizedString3.internalBinaryWrite(header.bodyLocalized, tag.tag(8, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.helpArticle) {
        const HelpArticle = FeatureCard$Type(closure_1[7]).HelpArticle;
        const tagResult8 = tag.tag(9, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited);
        const joined3 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(9, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(9, FeatureCard$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FeatureCard$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(FeatureCard$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class SubscriptionButton$Type {
    constructor() {
      tmp = closure_3(this, SubscriptionButton$Type);
      items = [, , , , ];
      items[0] = {};
      items[1] = {
        T() {
              const items = ["http://*", closure_8, "BUTTON_ACTION_"];
              return items;
            }
      };
      items[2] = {};
      obj = { -111020099: "w", 1351895378: "Array", 1456955659: "isArray" };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[3] = obj;
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[9]).UInt64Value;
      };
      items[4] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_14(this, SubscriptionButton$Type, items1);
    }
  }
  const arg1 = SubscriptionButton$Type;
  callback3(SubscriptionButton$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { "Null": 24, "Null": 8, "Null": 3 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SubscriptionButton$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SubscriptionButton$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = SubscriptionButton$Type(closure_1[8]);
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
          let tmp31 = SubscriptionButton$Type;
          let tmp32 = closure_1;
          let LocalizedString = SubscriptionButton$Type(closure_1[6]).LocalizedString;
          let tmp33 = LocalizedString;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.copyLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.copyLocalized);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = SubscriptionButton$Type;
          let tmp27 = closure_1;
          let UInt64Value = SubscriptionButton$Type(closure_1[9]).UInt64Value;
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
                let tmp12 = SubscriptionButton$Type;
                let tmp13 = closure_1;
                onRead = SubscriptionButton$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
        tag.tag(1, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).string(copy.copy);
        const tagResult = tag.tag(1, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (0 !== copy.buttonAction) {
        tag.tag(2, SubscriptionButton$Type(closure_1[8]).WireType.Varint).int32(copy.buttonAction);
        const tagResult1 = tag.tag(2, SubscriptionButton$Type(closure_1[8]).WireType.Varint);
      }
      if ("" !== copy.deeplinkSection) {
        tag.tag(3, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).string(copy.deeplinkSection);
        const tagResult2 = tag.tag(3, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (copy.copyLocalized) {
        const LocalizedString = SubscriptionButton$Type(closure_1[6]).LocalizedString;
        const tagResult3 = tag.tag(4, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(copy.copyLocalized, tag.tag(4, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (copy.navigableStorefrontApplicationId) {
        const UInt64Value = SubscriptionButton$Type(closure_1[9]).UInt64Value;
        const tagResult4 = tag.tag(5, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt64Value.internalBinaryWrite(copy.navigableStorefrontApplicationId, tag.tag(5, SubscriptionButton$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SubscriptionButton$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, copy, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SubscriptionButton$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class Variant1Storage$Type {
    constructor() {
      tmp = closure_3(this, Variant1Storage$Type);
      items = [, , ];
      items[0] = { V: {} };
      obj = { -111020099: null, 1351895378: null, 1456955659: null, -1801654842: null };
      obj.V = {};
      items[1] = obj;
      items[2] = { V: {} };
      items1 = [false];
      items1[1] = items;
      return closure_14(this, Variant1Storage$Type, items1);
    }
  }
  const arg1 = Variant1Storage$Type;
  callback3(Variant1Storage$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { heroArtLocalizedVideoLinksDarkTheme: {}, heroArtLocalizedVideoLinksLightTheme: {}, heroArtVideoSubtitleLinks: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Variant1Storage$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Variant1Storage$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = Variant1Storage$Type(closure_1[8]);
      }
      return obj;
    }
  };
  const items = [obj, , , , , ];
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
          let binaryReadMap1Result = self.binaryReadMap1(obj.heroArtLocalizedVideoLinksDarkTheme, pos, readUnknownField);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.heroArtLocalizedVideoLinksLightTheme, pos, readUnknownField);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let binaryReadMap3Result = self.binaryReadMap3(obj.heroArtVideoSubtitleLinks, pos, readUnknownField);
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
                let tmp12 = Variant1Storage$Type;
                let tmp13 = closure_1;
                onRead = Variant1Storage$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    key: "binaryReadMap1",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          let tmp3 = stringResult1;
          tmp4 = stringResult;
          tmp5 = stringResult1;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_dark_theme");
        throw _Error;
      }
      let str2 = "";
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null != tmp5) {
        str2 = tmp5;
      }
      arg0[str3] = str2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "binaryReadMap2",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          let tmp3 = stringResult1;
          tmp4 = stringResult;
          tmp5 = stringResult1;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_localized_video_links_light_theme");
        throw _Error;
      }
      let str2 = "";
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null != tmp5) {
        str2 = tmp5;
      }
      arg0[str3] = str2;
    }
  };
  items[4] = {
    key: "binaryReadMap3",
    value(arg0, pos) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let tmp5;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let stringResult1 = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            stringResult1 = pos.string();
          }
          let tmp3 = stringResult1;
          tmp4 = stringResult;
          tmp5 = stringResult1;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.premium_marketing.v1.Variant1Storage.hero_art_video_subtitle_links");
        throw _Error;
      }
      let str2 = "";
      let str3 = "";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null != tmp5) {
        str2 = tmp5;
      }
      arg0[str3] = str2;
    }
  };
  items[5] = {
    key: "internalBinaryWrite",
    value(heroArtLocalizedVideoLinksDarkTheme, tag, writeUnknownFields) {
      let length;
      let length2;
      let length3;
      const keys = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[8]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult = tagResult1.string(tmp);
          let tagResult2 = stringResult.tag(2, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult1 = tagResult2.string(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksDarkTheme[tmp]);
          let joined = stringResult1.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      const keys1 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksLightTheme);
      let num2 = 0;
      if (0 < keys1.length) {
        do {
          let tmp5 = keys1[num2];
          let tmp6 = closure_0;
          let tmp7 = closure_1;
          let tagResult3 = tag.tag(2, closure_0(closure_1[8]).WireType.LengthDelimited);
          let forkResult1 = tagResult3.fork();
          let tagResult4 = forkResult1.tag(1, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult2 = tagResult4.string(tmp5);
          let tagResult5 = stringResult2.tag(2, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult3 = tagResult5.string(heroArtLocalizedVideoLinksDarkTheme.heroArtLocalizedVideoLinksLightTheme[tmp5]);
          let joined1 = stringResult3.join();
          num2 = num2 + 1;
          length2 = keys1.length;
        } while (num2 < length2);
      }
      const keys2 = Object.keys(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks);
      let num3 = 0;
      if (0 < keys2.length) {
        do {
          let tmp9 = keys2[num3];
          let tmp10 = closure_0;
          let tmp11 = closure_1;
          let tagResult6 = tag.tag(3, closure_0(closure_1[8]).WireType.LengthDelimited);
          let forkResult2 = tagResult6.fork();
          let tagResult7 = forkResult2.tag(1, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult4 = tagResult7.string(tmp9);
          let tagResult8 = stringResult4.tag(2, closure_0(closure_1[8]).WireType.LengthDelimited);
          let stringResult5 = tagResult8.string(heroArtLocalizedVideoLinksDarkTheme.heroArtVideoSubtitleLinks[tmp9]);
          let joined2 = stringResult5.join();
          num3 = num3 + 1;
          length3 = keys2.length;
        } while (num3 < length3);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Variant1Storage$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, heroArtLocalizedVideoLinksDarkTheme, tag);
      }
      return tag;
    }
  };
  return callback(Variant1Storage$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class Subtitle$Type {
    constructor() {
      tmp = closure_3(this, Subtitle$Type);
      items = [, , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items1 = [false];
      items1[1] = items;
      return closure_14(this, Subtitle$Type, items1);
    }
  }
  const arg1 = Subtitle$Type;
  callback3(Subtitle$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { fetchError: true, useTrackForwardEditSearchOnce: true, u55b6: true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Subtitle$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Subtitle$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = Subtitle$Type(closure_1[8]);
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
          obj.link = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.locale = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.isDefault = pos.bool();
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
                let tmp12 = Subtitle$Type;
                let tmp13 = closure_1;
                onRead = Subtitle$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    value(link, tag, writeUnknownFields) {
      if ("" !== link.link) {
        tag.tag(1, Subtitle$Type(closure_1[8]).WireType.LengthDelimited).string(link.link);
        const tagResult = tag.tag(1, Subtitle$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== link.locale) {
        tag.tag(2, Subtitle$Type(closure_1[8]).WireType.LengthDelimited).string(link.locale);
        const tagResult1 = tag.tag(2, Subtitle$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (false !== link.isDefault) {
        tag.tag(3, Subtitle$Type(closure_1[8]).WireType.Varint).bool(link.isDefault);
        const tagResult2 = tag.tag(3, Subtitle$Type(closure_1[8]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Subtitle$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, link, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Subtitle$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class Disclaimer$Type {
    constructor() {
      tmp = closure_3(this, Disclaimer$Type);
      items = [, , ];
      items[0] = {};
      obj = { -111020099: null, 1351895378: null, 1456955659: null };
      obj.T = function T() {
        return callback(closure_1[7]).HelpArticle;
      };
      items[1] = obj;
      obj = { -111020099: null, 1351895378: "title", 1456955659: "__closure" };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[2] = obj;
      items1 = [8594390760.125002];
      items1[1] = items;
      return closure_14(this, Disclaimer$Type, items1);
    }
  }
  const arg1 = Disclaimer$Type;
  callback3(Disclaimer$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { disclaimerText: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Disclaimer$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Disclaimer$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = Disclaimer$Type(closure_1[8]);
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
          obj.disclaimerText = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = Disclaimer$Type;
          let tmp32 = closure_1;
          let HelpArticle = Disclaimer$Type(closure_1[7]).HelpArticle;
          let tmp33 = HelpArticle;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.disclaimerHelpArticle = HelpArticle.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disclaimerHelpArticle);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = Disclaimer$Type;
          let tmp27 = closure_1;
          let LocalizedString = Disclaimer$Type(closure_1[6]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.disclaimerTextLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.disclaimerTextLocalized);
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
                let tmp12 = Disclaimer$Type;
                let tmp13 = closure_1;
                onRead = Disclaimer$Type(closure_1[8]).UnknownFieldHandler.onRead;
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
    value(disclaimerText, tag, writeUnknownFields) {
      if ("" !== disclaimerText.disclaimerText) {
        tag.tag(1, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited).string(disclaimerText.disclaimerText);
        const tagResult = tag.tag(1, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if (disclaimerText.disclaimerHelpArticle) {
        const HelpArticle = Disclaimer$Type(closure_1[7]).HelpArticle;
        const tagResult1 = tag.tag(2, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited);
        const joined = HelpArticle.internalBinaryWrite(disclaimerText.disclaimerHelpArticle, tag.tag(2, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = HelpArticle.internalBinaryWrite(disclaimerText.disclaimerHelpArticle, tag.tag(2, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (disclaimerText.disclaimerTextLocalized) {
        const LocalizedString = Disclaimer$Type(closure_1[6]).LocalizedString;
        const tagResult2 = tag.tag(3, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = LocalizedString.internalBinaryWrite(disclaimerText.disclaimerTextLocalized, tag.tag(3, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = LocalizedString.internalBinaryWrite(disclaimerText.disclaimerTextLocalized, tag.tag(3, Disclaimer$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Disclaimer$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, disclaimerText, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Disclaimer$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class AnnouncementModalVariant1Properties$Type {
    constructor() {
      tmp = closure_3(this, AnnouncementModalVariant1Properties$Type);
      items = [, , , , , , , , , , , , , , , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {};
      items[3] = {};
      items[4] = {
        T() {
              return closure_9;
            }
      };
      items[5] = {
        T() {
              return closure_10;
            }
      };
      items[6] = {};
      items[7] = {};
      items[8] = {};
      items[9] = {};
      obj = { 0: null, 0: null, 0: null, 0: null };
      obj.T = function T() {
        return closure_12;
      };
      items[10] = obj;
      items[11] = {
        T() {
              return closure_11;
            }
      };
      items[12] = {
        T() {
              return closure_13;
            }
      };
      obj = { -111020099: "trinket_animation_url", 1351895378: "scalar", 1456955659: 9 };
      obj.T = function T() {
        return callback(closure_1[7]).HelpArticle;
      };
      items[13] = obj;
      items[14] = {
        T() {
              return callback(closure_1[6]).LocalizedString;
            }
      };
      obj1 = { -111020099: 21714742568761530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1351895378: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003481050054212928, 1456955659: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005278414027512615 };
      obj1.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[15] = obj1;
      obj2 = { -111020099: "scalar", 1351895378: 9, 1456955659: "row" };
      obj2.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[16] = obj2;
      items[17] = {};
      items[18] = {};
      items1 = [-2059272190];
      items1[1] = items;
      return closure_14(this, AnnouncementModalVariant1Properties$Type, items1);
    }
  }
  const arg1 = AnnouncementModalVariant1Properties$Type;
  callback3(AnnouncementModalVariant1Properties$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { flex: null, gap: 128118, alignItems: 256000, "Null": 15360000, "Null": 921600000, "Null": 643563520, "Null": 209977349, "Null": 12580, "Null": 1339621376, "Null": -2118303261, "Null": 1360068609, "Null": 1090594804, featureCards: [], heroArtVideoSubtitles: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AnnouncementModalVariant1Properties$Type(closure_1[8]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AnnouncementModalVariant1Properties$Type(closure_1[8]).reflectionMergePartial(this, obj, arr);
        const obj3 = AnnouncementModalVariant1Properties$Type(closure_1[8]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.body = pos.string();
        while (true) {
          do {
            let tmp3 = tmp5;
            let tmp4 = tmp6;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(header, tag, writeUnknownFields) {
      let length;
      let length2;
      if ("" !== header.header) {
        tag.tag(1, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.header);
        const tagResult = tag.tag(1, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.subheader) {
        tag.tag(2, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.subheader);
        const tagResult1 = tag.tag(2, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.videoLink) {
        tag.tag(3, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.videoLink);
        const tagResult2 = tag.tag(3, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.helpArticleId) {
        tag.tag(4, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.helpArticleId);
        const tagResult3 = tag.tag(4, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      let num9 = 0;
      if (0 < header.featureCards.length) {
        do {
          let tmp13 = closure_9;
          let tmp14 = closure_0;
          let tmp15 = closure_1;
          let tagResult4 = tag.tag(5, closure_0(closure_1[8]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_9.internalBinaryWrite(header.featureCards[num9], tagResult4.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num9 = num9 + 1;
          length = header.featureCards.length;
        } while (num9 < length);
      }
      if (header.button) {
        const tagResult5 = tag.tag(6, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined1 = closure_10.internalBinaryWrite(header.button, tag.tag(6, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_10.internalBinaryWrite(header.button, tag.tag(6, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== header.heroArtVideoLinkLightTheme) {
        tag.tag(8, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.heroArtVideoLinkLightTheme);
        const tagResult6 = tag.tag(8, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.heroArtImageLinkDarkTheme) {
        tag.tag(9, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.heroArtImageLinkDarkTheme);
        const tagResult7 = tag.tag(9, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.heroArtImageLinkLightTheme) {
        tag.tag(10, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.heroArtImageLinkLightTheme);
        const tagResult8 = tag.tag(10, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.modalTopPill) {
        tag.tag(11, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.modalTopPill);
        const tagResult9 = tag.tag(11, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      let num14 = 0;
      if (0 < header.heroArtVideoSubtitles.length) {
        do {
          let tmp33 = closure_12;
          let tmp34 = closure_0;
          let tmp35 = closure_1;
          let tagResult10 = tag.tag(13, closure_0(closure_1[8]).WireType.LengthDelimited);
          let internalBinaryWriteResult2 = closure_12.internalBinaryWrite(header.heroArtVideoSubtitles[num14], tagResult10.fork(), writeUnknownFields);
          let joined2 = internalBinaryWriteResult2.join();
          num14 = num14 + 1;
          length2 = header.heroArtVideoSubtitles.length;
        } while (num14 < length2);
      }
      if (header.storage) {
        const tagResult11 = tag.tag(14, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined3 = closure_11.internalBinaryWrite(header.storage, tag.tag(14, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_11.internalBinaryWrite(header.storage, tag.tag(14, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.disclaimer) {
        const tagResult12 = tag.tag(15, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined4 = closure_13.internalBinaryWrite(header.disclaimer, tag.tag(15, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_13.internalBinaryWrite(header.disclaimer, tag.tag(15, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.helpArticle) {
        const HelpArticle = AnnouncementModalVariant1Properties$Type(closure_1[7]).HelpArticle;
        const tagResult13 = tag.tag(18, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined5 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(18, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = HelpArticle.internalBinaryWrite(header.helpArticle, tag.tag(18, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.headerLocalized) {
        const LocalizedString = AnnouncementModalVariant1Properties$Type(closure_1[6]).LocalizedString;
        const tagResult14 = tag.tag(19, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(19, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = LocalizedString.internalBinaryWrite(header.headerLocalized, tag.tag(19, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.subheaderLocalized) {
        const LocalizedString2 = AnnouncementModalVariant1Properties$Type(closure_1[6]).LocalizedString;
        const tagResult15 = tag.tag(20, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined7 = LocalizedString2.internalBinaryWrite(header.subheaderLocalized, tag.tag(20, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = LocalizedString2.internalBinaryWrite(header.subheaderLocalized, tag.tag(20, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (header.modalTopPillLocalized) {
        const LocalizedString3 = AnnouncementModalVariant1Properties$Type(closure_1[6]).LocalizedString;
        const tagResult16 = tag.tag(21, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
        const joined8 = LocalizedString3.internalBinaryWrite(header.modalTopPillLocalized, tag.tag(21, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = LocalizedString3.internalBinaryWrite(header.modalTopPillLocalized, tag.tag(21, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== header.dismissKey) {
        tag.tag(7, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.dismissKey);
        const tagResult17 = tag.tag(7, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      if ("" !== header.body) {
        tag.tag(12, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited).string(header.body);
        const tagResult18 = tag.tag(12, AnnouncementModalVariant1Properties$Type(closure_1[8]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AnnouncementModalVariant1Properties$Type(closure_1[8]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, header, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AnnouncementModalVariant1Properties$Type, items);
}(arg1(dependencyMap[8]).MessageType);
tmp12 = new tmp12();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/announcement_modal_variant_1_properties.tsx");

export const ButtonAction = obj;
export const FeatureCard = tmp2;
export const SubscriptionButton = tmp4;
export const Variant1Storage = tmp6;
export const Subtitle = tmp8;
export const Disclaimer = tmp10;
export const AnnouncementModalVariant1Properties = tmp12;
