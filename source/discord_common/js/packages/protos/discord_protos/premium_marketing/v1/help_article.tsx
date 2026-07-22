// Module ID: 7132
// Function ID: 57440
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7132 (_isNativeReflectConstruct)
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
  class HelpArticle$Type {
    constructor() {
      self = this;
      tmp = closure_3(this, HelpArticle$Type);
      items = [, , ];
      items[0] = {};
      items[1] = {};
      items[2] = {
        T() {
              return callback(closure_1[6]).LocalizedString;
            }
      };
      items1 = [1817285918700075700000000000];
      items1[1] = items;
      obj = closure_6(HelpArticle$Type);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = HelpArticle$Type;
  callback2(HelpArticle$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 1481739105: "Normal", 1544673627: true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, HelpArticle$Type(closure_1[7]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = HelpArticle$Type(closure_1[7]).reflectionMergePartial(this, obj, arr);
        const obj3 = HelpArticle$Type(closure_1[7]);
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
          obj.id = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.linkText = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = HelpArticle$Type;
          let tmp27 = closure_1;
          let LocalizedString = HelpArticle$Type(closure_1[6]).LocalizedString;
          let tmp28 = LocalizedString;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.linkTextLocalized = LocalizedString.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.linkTextLocalized);
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
                let tmp12 = HelpArticle$Type;
                let tmp13 = closure_1;
                onRead = HelpArticle$Type(closure_1[7]).UnknownFieldHandler.onRead;
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
    value(id, tag, writeUnknownFields) {
      if ("" !== id.id) {
        tag.tag(1, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited).string(id.id);
        const tagResult = tag.tag(1, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if ("" !== id.linkText) {
        tag.tag(2, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited).string(id.linkText);
        const tagResult1 = tag.tag(2, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited);
      }
      if (id.linkTextLocalized) {
        const LocalizedString = HelpArticle$Type(closure_1[6]).LocalizedString;
        const tagResult2 = tag.tag(3, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited);
        const joined = LocalizedString.internalBinaryWrite(id.linkTextLocalized, tag.tag(3, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = LocalizedString.internalBinaryWrite(id.linkTextLocalized, tag.tag(3, HelpArticle$Type(closure_1[7]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = HelpArticle$Type(closure_1[7]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(HelpArticle$Type, items);
}(arg1(dependencyMap[7]).MessageType);
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/help_article.tsx");

export const HelpArticle = tmp2;
