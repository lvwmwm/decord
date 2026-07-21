// Module ID: 7144
// Function ID: 57597
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7144 (_isNativeReflectConstruct)
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
  class GiftReminderNagbar$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, GiftReminderNagbar$Type);
      items = [, ];
      items[0] = { 1347510942: 5, 1678385745: "banner_asset_url", 1364379111: "scalar", 140698458: 9 };
      obj = { 9223372036854775807: 411, 9223372036854775807: 134, 0: null };
      obj.T = function T() {
        return callback(closure_1[6]).LocalizedString;
      };
      items[1] = obj;
      items1 = [null];
      items1[1] = items;
      obj2 = closure_6(GiftReminderNagbar$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items1, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GiftReminderNagbar$Type;
  callback2(GiftReminderNagbar$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { body: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GiftReminderNagbar$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GiftReminderNagbar$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = GiftReminderNagbar$Type(closure_1[7]);
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
          obj.body = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = GiftReminderNagbar$Type;
          let tmp27 = closure_1;
          let LocalizedString = GiftReminderNagbar$Type(closure_1[6]).LocalizedString;
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
                let tmp12 = GiftReminderNagbar$Type;
                let tmp13 = closure_1;
                onRead = GiftReminderNagbar$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(body, tag, writeUnknownFields) {
      if ("" !== body.body) {
        tag.tag(1, GiftReminderNagbar$Type(closure_1[7]).WireType.LengthDelimited).string(body.body);
        const tagResult = tag.tag(1, GiftReminderNagbar$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (body.bodyLocalized) {
        const LocalizedString = GiftReminderNagbar$Type(closure_1[6]).LocalizedString;
        const tagResult1 = tag.tag(2, GiftReminderNagbar$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, GiftReminderNagbar$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(body.bodyLocalized, tag.tag(2, GiftReminderNagbar$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GiftReminderNagbar$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, body, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GiftReminderNagbar$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_reminder_nagbar.tsx");

export const GiftReminderNagbar = tmp2;
