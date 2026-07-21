// Module ID: 1867
// Function ID: 20542
// Name: _callSuper
// Dependencies: []

// Module 1867 (_callSuper)
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
let obj = { DAY_OF_WEEK_UNSPECIFIED: 0, [0]: "DAY_OF_WEEK_UNSPECIFIED", MONDAY: 1, [1]: "MONDAY", TUESDAY: 2, [2]: "TUESDAY", WEDNESDAY: 3, [3]: "WEDNESDAY", THURSDAY: 4, [4]: "THURSDAY", FRIDAY: 5, [5]: "FRIDAY", SATURDAY: 6, [6]: "SATURDAY", SUNDAY: 7, [7]: "SUNDAY" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DEFAULT: 11, [11]: "DEFAULT", BANGERS: 1, [1]: "BANGERS", BIO_RHYME: 2, [2]: "BIO_RHYME", CHERRY_BOMB: 3, [3]: "CHERRY_BOMB", CHICLE: 4, [4]: "CHICLE", COMPAGNON: 5, [5]: "COMPAGNON", MUSEO_MODERNO: 6, [6]: "MUSEO_MODERNO", NEO_CASTEL: 7, [7]: "NEO_CASTEL", PIXELIFY: 8, [8]: "PIXELIFY", RIBES: 9, [9]: "RIBES", SINISTRE: 10, [10]: "SINISTRE", ZILLA_SLAB: 12, [12]: "ZILLA_SLAB", PLAYPEN_SANS: 13, [13]: "PLAYPEN_SANS", ORBITRON: 14, [14]: "ORBITRON", NEW_ROCKER: 15, [15]: "NEW_ROCKER", KALAM: 16, [16]: "KALAM" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", SOLID: 1, [1]: "SOLID", GRADIENT: 2, [2]: "GRADIENT", NEON: 3, [3]: "NEON", TOON: 4, [4]: "TOON", POP: 5, [5]: "POP", GLOW: 6, [6]: "GLOW", PRISM: 7, [7]: "PRISM", GUMMY: 8, [8]: "GUMMY", TEST_1: 1001, [1001]: "TEST_1", TEST_2: 1002, [1002]: "TEST_2", TEST_3: 1003, [1003]: "TEST_3", TEST_4: 1004, [1004]: "TEST_4" };
const obj1 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", TO_BE_ANONYMIZED_USER: 1, [1]: "TO_BE_ANONYMIZED_USER", INACCESSIBLE_ANONYMIZED_USER: 2, [2]: "INACCESSIBLE_ANONYMIZED_USER", ANONYMOUS_USER: 3, [3]: "ANONYMOUS_USER" };
const obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ID_SELFIE_MATCH: 1, [1]: "ID_SELFIE_MATCH", ID_SCAN: 2, [2]: "ID_SCAN", FACIAL_AGE_ESTIMATION: 3, [3]: "FACIAL_AGE_ESTIMATION", BEHAVIORAL_INFERENCE: 4, [4]: "BEHAVIORAL_INFERENCE", CREDIT_CARD: 5, [5]: "CREDIT_CARD", EMAIL_DOMAIN: 6, [6]: "EMAIL_DOMAIN", OS_SIGNAL: 7, [7]: "OS_SIGNAL", ML_AGE_INFERENCE: 8, [8]: "ML_AGE_INFERENCE", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
const obj3 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", K_ID: 1, [1]: "K_ID", PERSONA: 2, [2]: "PERSONA", INCODE: 3, [3]: "INCODE", DISCORD: 4, [4]: "DISCORD", GOOGLE_WALLET: 5, [5]: "GOOGLE_WALLET", APPLE_APP_STORE: 6, [6]: "APPLE_APP_STORE", GOOGLE_PLAY: 7, [7]: "GOOGLE_PLAY" };
const obj4 = { AGE_ASSURANCE_GROUP_UNSPECIFIED: 0, [0]: "AGE_ASSURANCE_GROUP_UNSPECIFIED", AGE_ASSURANCE_GROUP_13: 1, [1]: "AGE_ASSURANCE_GROUP_13", AGE_ASSURANCE_GROUP_14: 2, [2]: "AGE_ASSURANCE_GROUP_14", AGE_ASSURANCE_GROUP_15: 3, [3]: "AGE_ASSURANCE_GROUP_15", AGE_ASSURANCE_GROUP_16: 4, [4]: "AGE_ASSURANCE_GROUP_16", AGE_ASSURANCE_GROUP_17: 5, [5]: "AGE_ASSURANCE_GROUP_17", AGE_ASSURANCE_GROUP_18_21: 6, [6]: "AGE_ASSURANCE_GROUP_18_21", AGE_ASSURANCE_GROUP_22_24: 7, [7]: "AGE_ASSURANCE_GROUP_22_24", AGE_ASSURANCE_GROUP_25_34: 8, [8]: "AGE_ASSURANCE_GROUP_25_34", AGE_ASSURANCE_GROUP_35_UP: 9, [9]: "AGE_ASSURANCE_GROUP_35_UP" };
const obj5 = { USER_LINK_TYPE_UNSPECIFIED: 0, [0]: "USER_LINK_TYPE_UNSPECIFIED", PARENT: 1, [1]: "PARENT", CHILD: 2, [2]: "CHILD" };
const obj6 = { USER_LINK_STATUS_UNSPECIFIED: 0, [0]: "USER_LINK_STATUS_UNSPECIFIED", PENDING: 1, [1]: "PENDING", ACTIVE: 2, [2]: "ACTIVE", INACTIVE: 3, [3]: "INACTIVE", DECLINED: 4, [4]: "DECLINED" };
const obj7 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", SUBSCRIPTION: 1, [1]: "SUBSCRIPTION", FRACTIONAL_NITRO: 2, [2]: "FRACTIONAL_NITRO", REVERSE_TRIAL: 3, [3]: "REVERSE_TRIAL", SUBSCRIPTION_GROUP: 4, [4]: "SUBSCRIPTION_GROUP" };
const obj8 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", BOOST_ONLY: 1, [1]: "BOOST_ONLY", TIER_0: 2, [2]: "TIER_0", TIER_1: 3, [3]: "TIER_1", TIER_2: 4, [4]: "TIER_2" };
const obj9 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
const obj10 = { SOURCE_UNSPECIFIED: 0, [0]: "SOURCE_UNSPECIFIED", SOURCE_NITRO: 1, [1]: "SOURCE_NITRO", SOURCE_THIRDPARTY_CROISSANT: 2, [2]: "SOURCE_THIRDPARTY_CROISSANT", SOURCE_BOT: 3, [3]: "SOURCE_BOT" };
let tmp2 = (MessageType) => {
  class TimeOfDay$Type {
    constructor() {
      tmp = closure_3(this, TimeOfDay$Type);
      items = [, , , ];
      items[0] = { 1347510942: -1717986767, 1678385745: -912680551, 1364379111: 1543532863, 140698458: false };
      items[1] = { 1347510942: null, 1678385745: null, 1364379111: null, 140698458: null };
      items[2] = { 1347510942: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024078060356667882, 1678385745: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000789444737981576, 1364379111: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004061637776, 140698458: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000078375557829822635 };
      items[3] = {};
      items1 = [];
      items1[1] = items;
      return closure_48(this, TimeOfDay$Type, items1);
    }
  }
  const arg1 = TimeOfDay$Type;
  callback3(TimeOfDay$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { <string:1214382084>: "ERROR", <string:775421956>: "ERROR", <string:1500577796>: "NOT_RESPONDER", <string:1005387780>: "NOT_RESPONDER" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TimeOfDay$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TimeOfDay$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = TimeOfDay$Type(closure_1[6]);
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
          obj.hours = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.minutes = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.seconds = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.nanos = pos.int32();
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
                let tmp12 = TimeOfDay$Type;
                let tmp13 = closure_1;
                onRead = TimeOfDay$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(hours, tag, writeUnknownFields) {
      if (0 !== hours.hours) {
        tag.tag(1, TimeOfDay$Type(closure_1[6]).WireType.Varint).int32(hours.hours);
        const tagResult = tag.tag(1, TimeOfDay$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== hours.minutes) {
        tag.tag(2, TimeOfDay$Type(closure_1[6]).WireType.Varint).int32(hours.minutes);
        const tagResult1 = tag.tag(2, TimeOfDay$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== hours.seconds) {
        tag.tag(3, TimeOfDay$Type(closure_1[6]).WireType.Varint).int32(hours.seconds);
        const tagResult2 = tag.tag(3, TimeOfDay$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== hours.nanos) {
        tag.tag(4, TimeOfDay$Type(closure_1[6]).WireType.Varint).int32(hours.nanos);
        const tagResult3 = tag.tag(4, TimeOfDay$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = TimeOfDay$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, hours, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TimeOfDay$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp2 = new tmp2();
let tmp4 = (MessageType) => {
  class User$Type {
    constructor() {
      tmp = closure_3(this, User$Type);
      items = [, , , , , , , , , , , ];
      items[0] = { 1347510942: 0.2, 1678385745: "PREMIUM_NITRO_PINK_LIGHT", 1364379111: 1, 140698458: "rule_id" };
      items[1] = { 1347510942: true, 1678385745: true, 1364379111: true, 140698458: true };
      items[2] = {};
      items[3] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      items[4] = { 1347510942: "\u{1F91F}\u{1F3FC}", 1678385745: true, 1364379111: null, 140698458: 10 };
      items[5] = {};
      items[6] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      obj = { 9223372036854775807: true, 9223372036854775807: true, 0: true };
      obj.T = function T() {
        return closure_22;
      };
      items[7] = obj;
      obj = { 9223372036854775807: 0.31, 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008092299693352378, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044470340738006435 };
      obj.T = function T() {
        return closure_26;
      };
      items[8] = obj;
      obj1 = { 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018710722071745, 9223372036854775807: 18727135025450920000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051897717659 };
      obj1.T = function T() {
        return closure_25;
      };
      items[9] = obj1;
      obj2 = { 9223372036854775807: "<string:410320898>", 9223372036854775807: "isArray", 0: "<string:805306368>" };
      obj2.T = function T() {
        return callback(closure_1[8]).SafetyState;
      };
      items[10] = obj2;
      items[11] = {
        T() {
              return closure_24;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, User$Type, items1);
    }
  }
  const arg1 = User$Type;
  callback3(User$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, User$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = User$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = User$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.displayNameStyles = closure_24.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.displayNameStyles);
        while (true) {
          do {
            let tmp3 = tmp9;
            let tmp4 = tmp10;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if ("0" !== id.id) {
        tag.tag(1, User$Type(closure_1[6]).WireType.Varint).uint64(id.id);
        const tagResult = tag.tag(1, User$Type(closure_1[6]).WireType.Varint);
      }
      if ("" !== id.username) {
        tag.tag(2, User$Type(closure_1[6]).WireType.LengthDelimited).string(id.username);
        const tagResult1 = tag.tag(2, User$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== id.discriminator) {
        tag.tag(3, User$Type(closure_1[6]).WireType.LengthDelimited).string(id.discriminator);
        const tagResult2 = tag.tag(3, User$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (id.avatar) {
        const StringValue = User$Type(closure_1[7]).StringValue;
        const tagResult3 = tag.tag(4, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.bot) {
        tag.tag(5, User$Type(closure_1[6]).WireType.Varint).bool(id.bot);
        const tagResult4 = tag.tag(5, User$Type(closure_1[6]).WireType.Varint);
      }
      if ("0" !== id.publicFlags) {
        tag.tag(6, User$Type(closure_1[6]).WireType.Varint).uint64(id.publicFlags);
        const tagResult5 = tag.tag(6, User$Type(closure_1[6]).WireType.Varint);
      }
      if (id.globalName) {
        const StringValue2 = User$Type(closure_1[7]).StringValue;
        const tagResult6 = tag.tag(8, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.avatarDecorationData) {
        const tagResult7 = tag.tag(9, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = closure_22.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = closure_22.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.primaryGuild) {
        const tagResult8 = tag.tag(10, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined3 = closure_26.internalBinaryWrite(id.primaryGuild, tag.tag(10, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_26.internalBinaryWrite(id.primaryGuild, tag.tag(10, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.collectibles) {
        const tagResult9 = tag.tag(11, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined4 = closure_25.internalBinaryWrite(id.collectibles, tag.tag(11, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_25.internalBinaryWrite(id.collectibles, tag.tag(11, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.safetyState) {
        const SafetyState = User$Type(closure_1[8]).SafetyState;
        const tagResult10 = tag.tag(12, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.displayNameStyles) {
        const tagResult11 = tag.tag(13, User$Type(closure_1[6]).WireType.LengthDelimited);
        const joined6 = closure_24.internalBinaryWrite(id.displayNameStyles, tag.tag(13, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_24.internalBinaryWrite(id.displayNameStyles, tag.tag(13, User$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = User$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(User$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp4 = new tmp4();
let tmp6 = (MessageType) => {
  class MediumUser$Type {
    constructor() {
      tmp = closure_3(this, MediumUser$Type);
      items = [, , , , , , , ];
      items[0] = { 1347510942: 37978659492616684000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 1678385745: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000414325527730875, 1364379111: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010033866602678007, 140698458: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002133799475442977 };
      items[1] = { 1347510942: true, 1678385745: true, 1364379111: true, 140698458: true };
      items[2] = {};
      obj = { 9223372036854775807: "row", 9223372036854775807: null, 0: 0 };
      obj.T = function T() {
        return callback(closure_1[7]).StringValue;
      };
      items[3] = obj;
      items[4] = { 1347510942: "\u{1F91F}\u{1F3FC}", 1678385745: true, 1364379111: null, 140698458: 10 };
      items[5] = { 1347510942: 0.06, 1678385745: "OPACITY_20", 1364379111: 0.2, 140698458: 10 };
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        return callback(closure_1[7]).StringValue;
      };
      items[6] = obj;
      obj1 = { 9223372036854775807: true, 9223372036854775807: true, 0: true };
      obj1.T = function T() {
        return callback(closure_1[7]).StringValue;
      };
      items[7] = obj1;
      items1 = [119];
      items1[1] = items;
      return closure_48(this, MediumUser$Type, items1);
    }
  }
  const arg1 = MediumUser$Type;
  callback3(MediumUser$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MediumUser$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MediumUser$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = MediumUser$Type(closure_1[6]);
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
          let str5 = pos.fixed64();
          obj.id = str5.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.username = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.discriminator = pos.uint32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp36 = MediumUser$Type;
          let tmp37 = closure_1;
          let StringValue3 = MediumUser$Type(closure_1[7]).StringValue;
          let tmp38 = StringValue3;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.avatarHash = StringValue3.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.avatarHash);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.bot = pos.bool();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let str4 = pos.uint64();
          obj.flags = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          let tmp31 = MediumUser$Type;
          let tmp32 = closure_1;
          let StringValue2 = MediumUser$Type(closure_1[7]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.email = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.email);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = MediumUser$Type;
          let tmp27 = closure_1;
          let StringValue = MediumUser$Type(closure_1[7]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.phone = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.phone);
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
                let tmp12 = MediumUser$Type;
                let tmp13 = closure_1;
                onRead = MediumUser$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
      if ("0" !== id.id) {
        tag.tag(1, MediumUser$Type(closure_1[6]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, MediumUser$Type(closure_1[6]).WireType.Bit64);
      }
      if ("" !== id.username) {
        tag.tag(2, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).string(id.username);
        const tagResult1 = tag.tag(2, MediumUser$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (0 !== id.discriminator) {
        tag.tag(3, MediumUser$Type(closure_1[6]).WireType.Varint).uint32(id.discriminator);
        const tagResult2 = tag.tag(3, MediumUser$Type(closure_1[6]).WireType.Varint);
      }
      if (id.avatarHash) {
        const StringValue = MediumUser$Type(closure_1[7]).StringValue;
        const tagResult3 = tag.tag(4, MediumUser$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.bot) {
        tag.tag(5, MediumUser$Type(closure_1[6]).WireType.Varint).bool(id.bot);
        const tagResult4 = tag.tag(5, MediumUser$Type(closure_1[6]).WireType.Varint);
      }
      if ("0" !== id.flags) {
        tag.tag(6, MediumUser$Type(closure_1[6]).WireType.Varint).uint64(id.flags);
        const tagResult5 = tag.tag(6, MediumUser$Type(closure_1[6]).WireType.Varint);
      }
      if (id.email) {
        const StringValue2 = MediumUser$Type(closure_1[7]).StringValue;
        const tagResult6 = tag.tag(7, MediumUser$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.phone) {
        const StringValue3 = MediumUser$Type(closure_1[7]).StringValue;
        const tagResult7 = tag.tag(8, MediumUser$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, MediumUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MediumUser$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MediumUser$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp6 = new tmp6();
let tmp8 = (MessageType) => {
  class UserAvatarDecoration$Type {
    constructor() {
      tmp = closure_3(this, UserAvatarDecoration$Type);
      items = [, , ];
      items[0] = { 1347510942: 9, 1678385745: "background_asset", 1364379111: "message", 140698458: "PREMIUM_NITRO_PINK_DARK" };
      obj = { 9223372036854775807: "r\u016F\u017Eov\u00E9 srdce", 9223372036854775807: "<string:1868627968>", 0: "<string:1921621073>" };
      obj.T = function T() {
        return callback(closure_1[7]).UInt64Value;
      };
      items[1] = obj;
      obj = { 9223372036854775807: "<string:18818560>", 9223372036854775807: "M7 1v1H6v1H5v8H3v-1H1v4h1v1h6V1H7Z", 0: "<string:4182835200>" };
      obj.T = function T() {
        return callback(closure_1[7]).UInt32Value;
      };
      items[2] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, UserAvatarDecoration$Type, items1);
    }
  }
  const arg1 = UserAvatarDecoration$Type;
  callback3(UserAvatarDecoration$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { asset: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserAvatarDecoration$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserAvatarDecoration$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserAvatarDecoration$Type(closure_1[6]);
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
          obj.asset = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = UserAvatarDecoration$Type;
          let tmp32 = closure_1;
          let UInt64Value = UserAvatarDecoration$Type(closure_1[7]).UInt64Value;
          let tmp33 = UInt64Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = UserAvatarDecoration$Type;
          let tmp27 = closure_1;
          let UInt32Value = UserAvatarDecoration$Type(closure_1[7]).UInt32Value;
          let tmp28 = UInt32Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.expiresAt = UInt32Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.expiresAt);
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
                let tmp12 = UserAvatarDecoration$Type;
                let tmp13 = closure_1;
                onRead = UserAvatarDecoration$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(asset, tag, writeUnknownFields) {
      if ("" !== asset.asset) {
        tag.tag(1, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited).string(asset.asset);
        const tagResult = tag.tag(1, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (asset.skuId) {
        const UInt64Value = UserAvatarDecoration$Type(closure_1[7]).UInt64Value;
        const tagResult1 = tag.tag(2, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (asset.expiresAt) {
        const UInt32Value = UserAvatarDecoration$Type(closure_1[7]).UInt32Value;
        const tagResult2 = tag.tag(3, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, UserAvatarDecoration$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserAvatarDecoration$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserAvatarDecoration$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp8 = new tmp8();
let tmp10 = (MessageType) => {
  class UserNameplate$Type {
    constructor() {
      tmp = closure_3(this, UserNameplate$Type);
      items = [, , , , ];
      items[0] = { 1347510942: 9, 1678385745: "background_asset", 1364379111: "message", 140698458: "PREMIUM_NITRO_PINK_DARK" };
      items[1] = { 1347510942: 60, 1678385745: 0, 1364379111: 252, 140698458: 300 };
      obj = { 9223372036854775807: "tag", 9223372036854775807: "message", 0: "hr" };
      obj.T = function T() {
        return callback(closure_1[7]).UInt64Value;
      };
      items[2] = obj;
      items[3] = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items[4] = { 1347510942: true, 1678385745: true, 1364379111: true, 140698458: true };
      items1 = [null];
      items1[1] = items;
      return closure_48(this, UserNameplate$Type, items1);
    }
  }
  const arg1 = UserNameplate$Type;
  callback3(UserNameplate$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { 0: "fr", 0: "french", 0: true };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserNameplate$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserNameplate$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserNameplate$Type(closure_1[6]);
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
          obj.asset = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.palette = pos.string();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = UserNameplate$Type;
          let tmp32 = closure_1;
          let UInt64Value = UserNameplate$Type(closure_1[7]).UInt64Value;
          let tmp33 = UInt64Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = UserNameplate$Type;
          let tmp27 = closure_1;
          let Timestamp = UserNameplate$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.expiresAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.expiresAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          obj.label = pos.string();
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
                let tmp12 = UserNameplate$Type;
                let tmp13 = closure_1;
                onRead = UserNameplate$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(asset, tag, writeUnknownFields) {
      if ("" !== asset.asset) {
        tag.tag(1, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).string(asset.asset);
        const tagResult = tag.tag(1, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== asset.palette) {
        tag.tag(2, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).string(asset.palette);
        const tagResult1 = tag.tag(2, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (asset.skuId) {
        const UInt64Value = UserNameplate$Type(closure_1[7]).UInt64Value;
        const tagResult2 = tag.tag(3, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (asset.expiresAt) {
        const Timestamp = UserNameplate$Type(closure_1[9]).Timestamp;
        const tagResult3 = tag.tag(4, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== asset.label) {
        tag.tag(5, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited).string(asset.label);
        const tagResult4 = tag.tag(5, UserNameplate$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserNameplate$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserNameplate$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp10 = new tmp10();
let tmp12 = (MessageType) => {
  class DisplayNameStyles$Type {
    constructor() {
      tmp = closure_3(this, DisplayNameStyles$Type);
      obj = { 9223372036854775807: false, 9223372036854775807: false, 0: false };
      obj.T = function T() {
        const items = [, closure_9, "DISPLAY_NAME_FONT_"];
        return items;
      };
      items = [, , , ];
      items[0] = obj;
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        const items = [, closure_10, "DISPLAY_NAME_EFFECT_"];
        return items;
      };
      items[1] = obj;
      items[2] = {};
      obj1 = { 9223372036854775807: 994646481865830500000000000000000000000000000000000000000000000000000000000000000000000, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002957080793849, 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008297873682109729 };
      obj1.T = function T() {
        return callback(closure_1[7]).BoolValue;
      };
      items[3] = obj1;
      items1 = [];
      items1[1] = items;
      return closure_48(this, DisplayNameStyles$Type, items1);
    }
  }
  const arg1 = DisplayNameStyles$Type;
  callback3(DisplayNameStyles$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { <string:1218510852>: -536870861, <string:2250768388>: -299892737, colors: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DisplayNameStyles$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DisplayNameStyles$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = DisplayNameStyles$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          obj.fontId = pos.int32();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          obj.effectId = pos.int32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          let tmp33 = DisplayNameStyles$Type;
          let tmp34 = closure_1;
          if (tmp9 === DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let colors = obj.colors;
                let arr = colors.push(pos.uint32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let colors1 = obj.colors;
            arr = colors1.push(pos.uint32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (4 === tmp8) {
          let tmp28 = DisplayNameStyles$Type;
          let tmp29 = closure_1;
          let BoolValue = DisplayNameStyles$Type(closure_1[7]).BoolValue;
          let tmp30 = BoolValue;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.animated = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.animated);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = DisplayNameStyles$Type;
                let tmp15 = closure_1;
                onRead = DisplayNameStyles$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(fontId, tag, writeUnknownFields) {
      let length;
      if (0 !== fontId.fontId) {
        tag.tag(1, DisplayNameStyles$Type(closure_1[6]).WireType.Varint).int32(fontId.fontId);
        const tagResult = tag.tag(1, DisplayNameStyles$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== fontId.effectId) {
        tag.tag(2, DisplayNameStyles$Type(closure_1[6]).WireType.Varint).int32(fontId.effectId);
        const tagResult1 = tag.tag(2, DisplayNameStyles$Type(closure_1[6]).WireType.Varint);
      }
      if (fontId.colors.length) {
        tag.tag(3, DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num7 = 0;
        if (0 < fontId.colors.length) {
          do {
            let uint32Result = tag.uint32(fontId.colors[num7]);
            num7 = num7 + 1;
            length = fontId.colors.length;
          } while (num7 < length);
        }
        const joined = tag.join();
        const tagResult2 = tag.tag(3, DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (fontId.animated) {
        const BoolValue = DisplayNameStyles$Type(closure_1[7]).BoolValue;
        const tagResult3 = tag.tag(4, DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, DisplayNameStyles$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DisplayNameStyles$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, fontId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DisplayNameStyles$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp12 = new tmp12();
let tmp14 = (MessageType) => {
  class UserCollectibles$Type {
    constructor() {
      tmp = closure_3(this, UserCollectibles$Type);
      obj = { 9223372036854775807: true, 9223372036854775807: true, 0: true };
      obj.T = function T() {
        return closure_23;
      };
      items = [];
      items[0] = obj;
      items1 = [19];
      items1[1] = items;
      return closure_48(this, UserCollectibles$Type, items1);
    }
  }
  const arg1 = UserCollectibles$Type;
  callback3(UserCollectibles$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserCollectibles$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserCollectibles$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserCollectibles$Type(closure_1[6]);
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
          let tmp26 = closure_23;
          let tmp27 = closure_23;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.nameplate = closure_23.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nameplate);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = UserCollectibles$Type;
                let tmp13 = closure_1;
                onRead = UserCollectibles$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(nameplate, tag, writeUnknownFields) {
      if (nameplate.nameplate) {
        const tagResult = tag.tag(1, UserCollectibles$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = closure_23.internalBinaryWrite(nameplate.nameplate, tag.tag(1, UserCollectibles$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_23.internalBinaryWrite(nameplate.nameplate, tag.tag(1, UserCollectibles$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserCollectibles$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, nameplate, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserCollectibles$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp14 = new tmp14();
let tmp16 = (MessageType) => {
  class UserPrimaryGuild$Type {
    constructor() {
      tmp = closure_3(this, UserPrimaryGuild$Type);
      obj = { 9223372036854775807: "<string:822722129>", 9223372036854775807: "<string:3435973837>", 0: "<string:1071434956>" };
      obj.T = function T() {
        return callback(closure_1[7]).UInt64Value;
      };
      items = [, , , ];
      items[0] = obj;
      obj = { 9223372036854775807: "primary_guild", 9223372036854775807: "message", 0: 0.373 };
      obj.T = function T() {
        return callback(closure_1[7]).BoolValue;
      };
      items[1] = obj;
      items[2] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      items[3] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      items1 = [true];
      items1[1] = items;
      return closure_48(this, UserPrimaryGuild$Type, items1);
    }
  }
  const arg1 = UserPrimaryGuild$Type;
  callback3(UserPrimaryGuild$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserPrimaryGuild$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserPrimaryGuild$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserPrimaryGuild$Type(closure_1[6]);
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
          let tmp41 = UserPrimaryGuild$Type;
          let tmp42 = closure_1;
          let UInt64Value = UserPrimaryGuild$Type(closure_1[7]).UInt64Value;
          let tmp43 = UInt64Value;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.identityGuildId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityGuildId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = UserPrimaryGuild$Type;
          let tmp37 = closure_1;
          let BoolValue = UserPrimaryGuild$Type(closure_1[7]).BoolValue;
          let tmp38 = BoolValue;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.identityEnabled = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityEnabled);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = UserPrimaryGuild$Type;
          let tmp32 = closure_1;
          let StringValue2 = UserPrimaryGuild$Type(closure_1[7]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.tag = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.tag);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = UserPrimaryGuild$Type;
          let tmp27 = closure_1;
          let StringValue = UserPrimaryGuild$Type(closure_1[7]).StringValue;
          let tmp28 = StringValue;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.badge = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badge);
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
                let tmp12 = UserPrimaryGuild$Type;
                let tmp13 = closure_1;
                onRead = UserPrimaryGuild$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(identityGuildId, tag, writeUnknownFields) {
      if (identityGuildId.identityGuildId) {
        const UInt64Value = UserPrimaryGuild$Type(closure_1[7]).UInt64Value;
        const tagResult = tag.tag(1, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.identityEnabled) {
        const BoolValue = UserPrimaryGuild$Type(closure_1[7]).BoolValue;
        const tagResult1 = tag.tag(2, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.tag) {
        const StringValue = UserPrimaryGuild$Type(closure_1[7]).StringValue;
        const tagResult2 = tag.tag(3, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.badge) {
        const StringValue2 = UserPrimaryGuild$Type(closure_1[7]).StringValue;
        const tagResult3 = tag.tag(4, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, UserPrimaryGuild$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserPrimaryGuild$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, identityGuildId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserPrimaryGuild$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp16 = new tmp16();
let tmp18 = (MessageType) => {
  class ScheduleRule$Type {
    constructor() {
      tmp = closure_3(this, ScheduleRule$Type);
      items = [, , , , , ];
      items[0] = {};
      items[1] = {};
      items[2] = {
        T() {
              return closure_21;
            }
      };
      items[3] = {
        T() {
              return closure_21;
            }
      };
      items[4] = {
        T() {
              const items = [, closure_8];
              return items;
            }
      };
      items[5] = { 1347510942: null, 1678385745: null, 1364379111: null, 140698458: null };
      items1 = [];
      items1[1] = items;
      return closure_48(this, ScheduleRule$Type, items1);
    }
  }
  const arg1 = ScheduleRule$Type;
  callback3(ScheduleRule$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { presentation: "split", enabled: "exports", themeSettings: "split", height: "exports", days: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ScheduleRule$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ScheduleRule$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ScheduleRule$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          obj.ruleId = pos.string();
          let tmp11 = tmp3;
          let tmp12 = tmp4;
          let tmp13 = tmp5;
        } else if (2 === tmp8) {
          obj.label = pos.string();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          let tmp37 = closure_21;
          let tmp38 = closure_21;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.startTime = closure_21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startTime);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          let tmp33 = closure_21;
          let tmp34 = closure_21;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.endTime = closure_21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (5 === tmp8) {
          let tmp28 = ScheduleRule$Type;
          let tmp29 = closure_1;
          if (tmp9 === ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            tmp12 = tmp4;
            tmp13 = tmp5;
            tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let days = obj.days;
                let arr = days.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let days1 = obj.days;
            arr = days1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (6 === tmp8) {
          obj.enabled = pos.bool();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = ScheduleRule$Type;
                let tmp15 = closure_1;
                onRead = ScheduleRule$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(ruleId, tag, writeUnknownFields) {
      let length;
      if ("" !== ruleId.ruleId) {
        tag.tag(1, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).string(ruleId.ruleId);
        const tagResult = tag.tag(1, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("" !== ruleId.label) {
        tag.tag(2, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).string(ruleId.label);
        const tagResult1 = tag.tag(2, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (ruleId.startTime) {
        const tagResult2 = tag.tag(3, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = closure_21.internalBinaryWrite(ruleId.startTime, tag.tag(3, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_21.internalBinaryWrite(ruleId.startTime, tag.tag(3, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (ruleId.endTime) {
        const tagResult3 = tag.tag(4, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = closure_21.internalBinaryWrite(ruleId.endTime, tag.tag(4, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_21.internalBinaryWrite(ruleId.endTime, tag.tag(4, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (ruleId.days.length) {
        tag.tag(5, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num11 = 0;
        if (0 < ruleId.days.length) {
          do {
            let int32Result = tag.int32(ruleId.days[num11]);
            num11 = num11 + 1;
            length = ruleId.days.length;
          } while (num11 < length);
        }
        const joined2 = tag.join();
        const tagResult4 = tag.tag(5, ScheduleRule$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (false !== ruleId.enabled) {
        tag.tag(6, ScheduleRule$Type(closure_1[6]).WireType.Varint).bool(ruleId.enabled);
        const tagResult5 = tag.tag(6, ScheduleRule$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ScheduleRule$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ruleId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ScheduleRule$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp18 = new tmp18();
let tmp20 = (MessageType) => {
  class RestrictedSchedule$Type {
    constructor() {
      tmp = closure_3(this, RestrictedSchedule$Type);
      obj = {
        T() {
              return closure_27;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, RestrictedSchedule$Type, items1);
    }
  }
  const arg1 = RestrictedSchedule$Type;
  callback3(RestrictedSchedule$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { rules: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RestrictedSchedule$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RestrictedSchedule$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RestrictedSchedule$Type(closure_1[6]);
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
          let rules = obj.rules;
          let tmp26 = closure_27;
          let arr = rules.push(closure_27.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = RestrictedSchedule$Type;
                let tmp13 = closure_1;
                onRead = RestrictedSchedule$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(rules, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < rules.rules.length) {
        do {
          let tmp = closure_27;
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_27.internalBinaryWrite(rules.rules[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = rules.rules.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RestrictedSchedule$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, rules, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RestrictedSchedule$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp20 = new tmp20();
let tmp22 = (MessageType) => {
  class CrossPlatformRestriction$Type {
    constructor() {
      tmp = closure_3(this, CrossPlatformRestriction$Type);
      obj = { 9223372036854775807: "y", 9223372036854775807: 1, 0: "map" };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items = [, ];
      items[0] = obj;
      items[1] = {};
      items1 = [];
      items1[1] = items;
      return closure_48(this, CrossPlatformRestriction$Type, items1);
    }
  }
  const arg1 = CrossPlatformRestriction$Type;
  callback3(CrossPlatformRestriction$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applicationId: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CrossPlatformRestriction$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CrossPlatformRestriction$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = CrossPlatformRestriction$Type(closure_1[6]);
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
          let tmp26 = CrossPlatformRestriction$Type;
          let tmp27 = closure_1;
          let Timestamp = CrossPlatformRestriction$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.restrictionExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.restrictionExpiry);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let str4 = pos.fixed64();
          obj.applicationId = str4.toString();
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
                let tmp12 = CrossPlatformRestriction$Type;
                let tmp13 = closure_1;
                onRead = CrossPlatformRestriction$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(restrictionExpiry, tag, writeUnknownFields) {
      if (restrictionExpiry.restrictionExpiry) {
        const Timestamp = CrossPlatformRestriction$Type(closure_1[9]).Timestamp;
        const tagResult = tag.tag(1, CrossPlatformRestriction$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, CrossPlatformRestriction$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, CrossPlatformRestriction$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== restrictionExpiry.applicationId) {
        tag.tag(2, CrossPlatformRestriction$Type(closure_1[6]).WireType.Bit64).fixed64(restrictionExpiry.applicationId);
        const tagResult1 = tag.tag(2, CrossPlatformRestriction$Type(closure_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CrossPlatformRestriction$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, restrictionExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CrossPlatformRestriction$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp22 = new tmp22();
let tmp24 = (MessageType) => {
  class BadgeCommon$Type {
    constructor() {
      tmp = closure_3(this, BadgeCommon$Type);
      obj = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, BadgeCommon$Type, items1);
    }
  }
  const arg1 = BadgeCommon$Type;
  callback3(BadgeCommon$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BadgeCommon$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BadgeCommon$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BadgeCommon$Type(closure_1[6]);
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
          let tmp26 = BadgeCommon$Type;
          let tmp27 = closure_1;
          let Timestamp = BadgeCommon$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.obtainedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.obtainedAt);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = BadgeCommon$Type;
                let tmp13 = closure_1;
                onRead = BadgeCommon$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(obtainedAt, tag, writeUnknownFields) {
      if (obtainedAt.obtainedAt) {
        const Timestamp = BadgeCommon$Type(closure_1[9]).Timestamp;
        const tagResult = tag.tag(1, BadgeCommon$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, BadgeCommon$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, BadgeCommon$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BadgeCommon$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, obtainedAt, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BadgeCommon$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp24 = new tmp24();
let tmp26 = (MessageType) => {
  class AprilFools2026Badge$Type {
    constructor() {
      tmp = closure_3(this, AprilFools2026Badge$Type);
      obj = {
        T() {
              return closure_30;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = { 1347510942: null, 1678385745: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009584956310480362, 1364379111: 15177101141403895000000000000000000000000000000000000000000000000000000000000000000, 140698458: -1031255116091780400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      items[2] = { 1347510942: "<string:17891332>", 1678385745: "SOUNDBOARD_EVERYWHERE_UPSELL", 1364379111: "<string:1950306560>", 140698458: "<string:1090632033>" };
      items1 = [];
      items1[1] = items;
      return closure_48(this, AprilFools2026Badge$Type, items1);
    }
  }
  const arg1 = AprilFools2026Badge$Type;
  callback3(AprilFools2026Badge$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AprilFools2026Badge$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AprilFools2026Badge$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AprilFools2026Badge$Type(closure_1[6]);
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
          let tmp26 = closure_30;
          let tmp27 = closure_30;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.common = closure_30.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.common);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.level = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.combatClass = pos.string();
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
                let tmp12 = AprilFools2026Badge$Type;
                let tmp13 = closure_1;
                onRead = AprilFools2026Badge$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(common, tag, writeUnknownFields) {
      if (common.common) {
        const tagResult = tag.tag(1, AprilFools2026Badge$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = closure_30.internalBinaryWrite(common.common, tag.tag(1, AprilFools2026Badge$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_30.internalBinaryWrite(common.common, tag.tag(1, AprilFools2026Badge$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== common.level) {
        tag.tag(2, AprilFools2026Badge$Type(closure_1[6]).WireType.Varint).int32(common.level);
        const tagResult1 = tag.tag(2, AprilFools2026Badge$Type(closure_1[6]).WireType.Varint);
      }
      if ("" !== common.combatClass) {
        tag.tag(3, AprilFools2026Badge$Type(closure_1[6]).WireType.LengthDelimited).string(common.combatClass);
        const tagResult2 = tag.tag(3, AprilFools2026Badge$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AprilFools2026Badge$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, common, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AprilFools2026Badge$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp26 = new tmp26();
let tmp28 = (MessageType) => {
  class Badge$Type {
    constructor() {
      tmp = closure_3(this, Badge$Type);
      obj = {
        T() {
              return closure_31;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, Badge$Type, items1);
    }
  }
  const arg1 = Badge$Type;
  callback3(Badge$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { badge: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Badge$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Badge$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Badge$Type(closure_1[6]);
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
          obj = { oneofKind: "aprilFools2026" };
          let tmp26 = closure_31;
          let tmp27 = closure_31;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.aprilFools2026 = closure_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badge.aprilFools2026);
          obj.badge = obj;
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = Badge$Type;
                let tmp13 = closure_1;
                onRead = Badge$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(badge, tag, writeUnknownFields) {
      if ("aprilFools2026" === badge.badge.oneofKind) {
        const tagResult = tag.tag(1, Badge$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = closure_31.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, Badge$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_31.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, Badge$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Badge$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, badge, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Badge$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp28 = new tmp28();
let tmp30 = (MessageType) => {
  class UserBadges$Type {
    constructor() {
      tmp = closure_3(this, UserBadges$Type);
      obj = {
        T() {
              return closure_32;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, UserBadges$Type, items1);
    }
  }
  const arg1 = UserBadges$Type;
  callback3(UserBadges$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { badges: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserBadges$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserBadges$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserBadges$Type(closure_1[6]);
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
          let badges = obj.badges;
          let tmp26 = closure_32;
          let arr = badges.push(closure_32.internalBinaryRead(pos, pos.uint32(), readUnknownField));
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = UserBadges$Type;
                let tmp13 = closure_1;
                onRead = UserBadges$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(badges, tag, writeUnknownFields) {
      let length;
      let num = 0;
      if (0 < badges.badges.length) {
        do {
          let tmp = closure_32;
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = closure_32.internalBinaryWrite(badges.badges[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = badges.badges.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserBadges$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, badges, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserBadges$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp30 = new tmp30();
let tmp32 = (MessageType) => {
  class AnonymizationInfo$Type {
    constructor() {
      tmp = closure_3(this, AnonymizationInfo$Type);
      obj = {
        T() {
              const items = [null, closure_11, "ANONYMIZATION_STATUS_"];
              return items;
            }
      };
      items = [, ];
      items[0] = obj;
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        return callback(closure_1[7]).UInt64Value;
      };
      items[1] = obj;
      items1 = [8];
      items1[1] = items;
      return closure_48(this, AnonymizationInfo$Type, items1);
    }
  }
  const arg1 = AnonymizationInfo$Type;
  callback3(AnonymizationInfo$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { status: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AnonymizationInfo$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AnonymizationInfo$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AnonymizationInfo$Type(closure_1[6]);
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
          obj.status = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = AnonymizationInfo$Type;
          let tmp27 = closure_1;
          let UInt64Value = AnonymizationInfo$Type(closure_1[7]).UInt64Value;
          let tmp28 = UInt64Value;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.anonUserId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.anonUserId);
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
                let tmp12 = AnonymizationInfo$Type;
                let tmp13 = closure_1;
                onRead = AnonymizationInfo$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(status, tag, writeUnknownFields) {
      if (0 !== status.status) {
        tag.tag(1, AnonymizationInfo$Type(closure_1[6]).WireType.Varint).int32(status.status);
        const tagResult = tag.tag(1, AnonymizationInfo$Type(closure_1[6]).WireType.Varint);
      }
      if (status.anonUserId) {
        const UInt64Value = AnonymizationInfo$Type(closure_1[7]).UInt64Value;
        const tagResult1 = tag.tag(2, AnonymizationInfo$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, AnonymizationInfo$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, AnonymizationInfo$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AnonymizationInfo$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, status, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AnonymizationInfo$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp32 = new tmp32();
let tmp34 = (MessageType) => {
  class UserData$Type {
    constructor() {
      tmp = closure_3(this, UserData$Type);
      obj = { 9223372036854775807: 1, 9223372036854775807: "BLUE_NEW_53", 0: 1, 0: "source" };
      obj = {
        kind: "message",
        T() {
              return closure_36;
            }
      };
      obj.V = obj;
      items = [, , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj1 = { 9223372036854775807: false, 9223372036854775807: false, 0: false, 0: false };
      obj1.V = {
        kind: "message",
        T() {
              return closure_38;
            }
      };
      items[1] = obj1;
      obj2 = {
        kind: "message",
        T() {
              return closure_39;
            }
      };
      items[2] = { V: obj2 };
      obj3 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj3.T = function T() {
        return closure_40;
      };
      items[3] = obj3;
      obj4 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj4.T = function T() {
        return closure_26;
      };
      items[4] = obj4;
      items[5] = {
        T() {
              return closure_29;
            }
      };
      obj5 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj5.T = function T() {
        return closure_25;
      };
      items[6] = obj5;
      obj6 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj6.T = function T() {
        return callback(closure_1[8]).SafetyState;
      };
      items[7] = obj6;
      obj7 = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj7.T = function T() {
        return closure_41;
      };
      items[8] = obj7;
      obj8 = { 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000232095950477062, 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000145176883053238, 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013053759839780246 };
      obj8.T = function T() {
        return closure_24;
      };
      items[9] = obj8;
      obj9 = { 9223372036854775807: 2, 9223372036854775807: "link_type", 0: "enum" };
      obj9.T = function T() {
        return closure_42;
      };
      items[10] = obj9;
      obj10 = { 9223372036854775807: 149526496556150120000000000000000000000000000000, 9223372036854775807: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004321804935238368, 0: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002013042003802995 };
      obj10.T = function T() {
        return closure_28;
      };
      items[11] = obj10;
      obj11 = { 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007008889102366749, 9223372036854775807: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001394305222273485, 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001957544 };
      obj11.T = function T() {
        return closure_35;
      };
      items[12] = obj11;
      items[13] = {
        T() {
              return closure_46;
            }
      };
      items[14] = {
        T() {
              return closure_33;
            }
      };
      obj12 = { 9223372036854775807: false, 9223372036854775807: false, 0: false };
      obj12.T = function T() {
        return closure_47;
      };
      items[15] = obj12;
      items[16] = {};
      items[17] = {
        T() {
              return closure_34;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, UserData$Type, items1);
    }
  }
  const arg1 = UserData$Type;
  callback3(UserData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {}, isPendingRequiredAction: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserData$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserData$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserData$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, binaryReadOptionsResult2) {
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      if (pos.pos < sum) {
        obj.anonymizationInfo = closure_34.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.anonymizationInfo);
        while (true) {
          do {
            let tmp3 = tmp9;
            let tmp4 = tmp10;
          } while (pos.pos >= sum);
        }
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_36;
            internalBinaryReadResult = closure_36.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = str;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        str = "unknown map entry field for field discord_protos.users.v1.UserData.linked_users";
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.UserData.linked_users");
        throw _Error;
      }
      let str3 = "0";
      if (null != tmp4) {
        str3 = tmp4;
      }
      if (null == obj) {
        obj = closure_36.create();
      }
      arg0[str3] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "binaryReadMap2",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_38;
            internalBinaryReadResult = closure_38.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = uint32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.UserData.safety_feature_limits");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_38.create();
      }
      arg0[num] = obj;
    }
  };
  items[4] = {
    key: "binaryReadMap3",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_39;
            internalBinaryReadResult = closure_39.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = uint32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.UserData.safety_flags");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_39.create();
      }
      arg0[num] = obj;
    }
  };
  items[5] = {
    key: "internalBinaryWrite",
    value(linkedUsers, tag, writeUnknownFields) {
      let length;
      let length2;
      let length3;
      const keys = Object.keys(linkedUsers.linkedUsers);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[6]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_36;
          let internalBinaryWriteResult = closure_36.internalBinaryWrite(linkedUsers.linkedUsers[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      const keys1 = Object.keys(linkedUsers.safetyFeatureLimits);
      let num2 = 0;
      if (0 < keys1.length) {
        do {
          let tmp9 = keys1[num2];
          let tmp10 = closure_0;
          let tmp11 = closure_1;
          let tagResult3 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tagResult4 = forkResult2.tag(1, closure_0(closure_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult4.uint32(parseInt(tmp9));
          let tagResult5 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult3 = tagResult5.fork();
          let tmp14 = closure_38;
          let internalBinaryWriteResult1 = closure_38.internalBinaryWrite(linkedUsers.safetyFeatureLimits[tmp9], tag, writeUnknownFields);
          let joined2 = tag.join();
          let joined3 = joined2.join();
          num2 = num2 + 1;
          length2 = keys1.length;
        } while (num2 < length2);
      }
      const keys2 = Object.keys(linkedUsers.safetyFlags);
      let num3 = 0;
      if (0 < keys2.length) {
        do {
          let tmp17 = keys2[num3];
          let tmp18 = closure_0;
          let tmp19 = closure_1;
          let tagResult6 = tag.tag(3, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult4 = tagResult6.fork();
          let tagResult7 = forkResult4.tag(1, closure_0(closure_1[6]).WireType.Varint);
          let _parseInt2 = parseInt;
          let uint32Result1 = tagResult7.uint32(parseInt(tmp17));
          let tagResult8 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult5 = tagResult8.fork();
          let tmp22 = closure_39;
          let internalBinaryWriteResult2 = closure_39.internalBinaryWrite(linkedUsers.safetyFlags[tmp17], tag, writeUnknownFields);
          let joined4 = tag.join();
          let joined5 = joined4.join();
          num3 = num3 + 1;
          length3 = keys2.length;
        } while (num3 < length3);
      }
      if (linkedUsers.quest) {
        const tagResult9 = tag.tag(4, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined6 = closure_40.internalBinaryWrite(linkedUsers.quest, tag.tag(4, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = closure_40.internalBinaryWrite(linkedUsers.quest, tag.tag(4, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.primaryGuild) {
        const tagResult10 = tag.tag(5, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined7 = closure_26.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = closure_26.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.crossPlatformRestriction) {
        const tagResult11 = tag.tag(6, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined8 = closure_29.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = closure_29.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.collectibles) {
        const tagResult12 = tag.tag(7, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined9 = closure_25.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = closure_25.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.safetyState) {
        const SafetyState = UserData$Type(closure_1[8]).SafetyState;
        const tagResult13 = tag.tag(8, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined10 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.premiumState) {
        const tagResult14 = tag.tag(9, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined11 = closure_41.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = closure_41.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.displayNameStyles) {
        const tagResult15 = tag.tag(10, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined12 = closure_24.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = closure_24.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.storeCountry) {
        const tagResult16 = tag.tag(11, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined13 = closure_42.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = closure_42.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.restrictedSchedule) {
        const tagResult17 = tag.tag(12, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined14 = closure_28.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = closure_28.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.ageAssuranceData) {
        const tagResult18 = tag.tag(13, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined15 = closure_35.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = closure_35.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.perks) {
        const tagResult19 = tag.tag(14, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined16 = closure_46.internalBinaryWrite(linkedUsers.perks, tag.tag(14, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = closure_46.internalBinaryWrite(linkedUsers.perks, tag.tag(14, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.badges) {
        const tagResult20 = tag.tag(15, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined17 = closure_33.internalBinaryWrite(linkedUsers.badges, tag.tag(15, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = closure_33.internalBinaryWrite(linkedUsers.badges, tag.tag(15, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.countryData) {
        const tagResult21 = tag.tag(16, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined18 = closure_47.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = closure_47.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== linkedUsers.isPendingRequiredAction) {
        tag.tag(17, UserData$Type(closure_1[6]).WireType.Varint).bool(linkedUsers.isPendingRequiredAction);
        const tagResult22 = tag.tag(17, UserData$Type(closure_1[6]).WireType.Varint);
      }
      if (linkedUsers.anonymizationInfo) {
        const tagResult23 = tag.tag(18, UserData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined19 = closure_34.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = closure_34.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, UserData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserData$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, linkedUsers, tag);
      }
      return tag;
    }
  };
  return callback(UserData$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp34 = new tmp34();
let tmp36 = (MessageType) => {
  class AgeAssuranceData$Type {
    constructor() {
      tmp = closure_3(this, AgeAssuranceData$Type);
      obj = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items = [, , , , , , ];
      items[0] = obj;
      items[1] = {
        T() {
              const items = [, closure_12, "AGE_ASSURANCE_METHOD_"];
              return items;
            }
      };
      items[2] = { 1347510942: 13, 1678385745: 100, 1364379111: 0.001, 140698458: true };
      items[3] = {
        T() {
              const items = [null, closure_13, "AGE_ASSURANCE_VENDOR_"];
              return items;
            }
      };
      obj = { 9223372036854775807: "EASTER_EGG", 9223372036854775807: "END", 0: "DisableStreamPreviews" };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items[4] = obj;
      obj1 = { 9223372036854775807: 0.00000000000000000000000002797616314276008, 9223372036854775807: -0.00000000000000000000000000000000000000000000000000000006851569691398523, 0: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000010295726959830495 };
      obj1.T = function T() {
        const items = [null, closure_14];
        return items;
      };
      items[5] = obj1;
      items[6] = { 1347510942: "r", 1678385745: "NATIVE_REQUIRED_ASSETS", 1364379111: "isDM", 140698458: "Array" };
      items1 = [];
      items1[1] = items;
      return closure_48(this, AgeAssuranceData$Type, items1);
    }
  }
  const arg1 = AgeAssuranceData$Type;
  callback3(AgeAssuranceData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AgeAssuranceData$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AgeAssuranceData$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AgeAssuranceData$Type(closure_1[6]);
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
          let tmp31 = AgeAssuranceData$Type;
          let tmp32 = closure_1;
          let Timestamp2 = AgeAssuranceData$Type(closure_1[9]).Timestamp;
          let tmp33 = Timestamp2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.estimatedDateOfBirth = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.estimatedDateOfBirth);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.method = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.methodVersion = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          obj.vendor = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp26 = AgeAssuranceData$Type;
          let tmp27 = closure_1;
          let Timestamp = AgeAssuranceData$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.verifiedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.verifiedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          obj.estimatedAgeGroup = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (7 === tmp7) {
          obj.isRegionalAdult = pos.bool();
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
                let tmp12 = AgeAssuranceData$Type;
                let tmp13 = closure_1;
                onRead = AgeAssuranceData$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(estimatedDateOfBirth, tag, writeUnknownFields) {
      if (estimatedDateOfBirth.estimatedDateOfBirth) {
        const Timestamp = AgeAssuranceData$Type(closure_1[9]).Timestamp;
        const tagResult = tag.tag(1, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== estimatedDateOfBirth.method) {
        tag.tag(2, AgeAssuranceData$Type(closure_1[6]).WireType.Varint).int32(estimatedDateOfBirth.method);
        const tagResult1 = tag.tag(2, AgeAssuranceData$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== estimatedDateOfBirth.methodVersion) {
        tag.tag(3, AgeAssuranceData$Type(closure_1[6]).WireType.Varint).int32(estimatedDateOfBirth.methodVersion);
        const tagResult2 = tag.tag(3, AgeAssuranceData$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== estimatedDateOfBirth.vendor) {
        tag.tag(4, AgeAssuranceData$Type(closure_1[6]).WireType.Varint).int32(estimatedDateOfBirth.vendor);
        const tagResult3 = tag.tag(4, AgeAssuranceData$Type(closure_1[6]).WireType.Varint);
      }
      if (estimatedDateOfBirth.verifiedAt) {
        const Timestamp2 = AgeAssuranceData$Type(closure_1[9]).Timestamp;
        const tagResult4 = tag.tag(5, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, AgeAssuranceData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== estimatedDateOfBirth.estimatedAgeGroup) {
        tag.tag(6, AgeAssuranceData$Type(closure_1[6]).WireType.Varint).int32(estimatedDateOfBirth.estimatedAgeGroup);
        const tagResult5 = tag.tag(6, AgeAssuranceData$Type(closure_1[6]).WireType.Varint);
      }
      if (false !== estimatedDateOfBirth.isRegionalAdult) {
        tag.tag(7, AgeAssuranceData$Type(closure_1[6]).WireType.Varint).bool(estimatedDateOfBirth.isRegionalAdult);
        const tagResult6 = tag.tag(7, AgeAssuranceData$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AgeAssuranceData$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, estimatedDateOfBirth, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AgeAssuranceData$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp36 = new tmp36();
let tmp38 = (MessageType) => {
  class LinkedUser$Type {
    constructor() {
      tmp = closure_3(this, LinkedUser$Type);
      items = [, , , , , ];
      items[0] = { 1347510942: null, 1678385745: null, 1364379111: null, 140698458: null };
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        const items = [, closure_15];
        return items;
      };
      items[1] = obj;
      items[2] = {
        T() {
              const items = [, closure_16];
              return items;
            }
      };
      items[3] = { 1347510942: "absolute", 1678385745: "100%", 1364379111: "100%", 140698458: "rgba(0, 0, 0, 0.8)" };
      obj = { 9223372036854775807: 6, 9223372036854775807: "sticker_picker_collapsed_sections", 0: "scalar" };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items[4] = obj;
      items[5] = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, LinkedUser$Type, items1);
    }
  }
  const arg1 = LinkedUser$Type;
  callback3(LinkedUser$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LinkedUser$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LinkedUser$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = LinkedUser$Type(closure_1[6]);
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
          let str5 = pos.fixed64();
          obj.userId = str5.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.linkType = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.linkStatus = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let str4 = pos.fixed64();
          obj.requestorId = str4.toString();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let tmp31 = LinkedUser$Type;
          let tmp32 = closure_1;
          let Timestamp2 = LinkedUser$Type(closure_1[9]).Timestamp;
          let tmp33 = Timestamp2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.createdAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.createdAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = LinkedUser$Type;
          let tmp27 = closure_1;
          let Timestamp = LinkedUser$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.updatedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.updatedAt);
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
                let tmp12 = LinkedUser$Type;
                let tmp13 = closure_1;
                onRead = LinkedUser$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(userId, tag, writeUnknownFields) {
      if ("0" !== userId.userId) {
        tag.tag(1, LinkedUser$Type(closure_1[6]).WireType.Bit64).fixed64(userId.userId);
        const tagResult = tag.tag(1, LinkedUser$Type(closure_1[6]).WireType.Bit64);
      }
      if (0 !== userId.linkType) {
        tag.tag(2, LinkedUser$Type(closure_1[6]).WireType.Varint).int32(userId.linkType);
        const tagResult1 = tag.tag(2, LinkedUser$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== userId.linkStatus) {
        tag.tag(3, LinkedUser$Type(closure_1[6]).WireType.Varint).int32(userId.linkStatus);
        const tagResult2 = tag.tag(3, LinkedUser$Type(closure_1[6]).WireType.Varint);
      }
      if ("0" !== userId.requestorId) {
        tag.tag(4, LinkedUser$Type(closure_1[6]).WireType.Bit64).fixed64(userId.requestorId);
        const tagResult3 = tag.tag(4, LinkedUser$Type(closure_1[6]).WireType.Bit64);
      }
      if (userId.createdAt) {
        const Timestamp = LinkedUser$Type(closure_1[9]).Timestamp;
        const tagResult4 = tag.tag(5, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (userId.updatedAt) {
        const Timestamp2 = LinkedUser$Type(closure_1[9]).Timestamp;
        const tagResult5 = tag.tag(6, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, LinkedUser$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LinkedUser$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, userId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(LinkedUser$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp38 = new tmp38();
let tmp40 = (MessageType) => {
  class RateLimitData$Type {
    constructor() {
      tmp = closure_3(this, RateLimitData$Type);
      obj = { 9223372036854775807: "scalar", 9223372036854775807: 6, 0: "channel_list_layout" };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = [null];
      items1[1] = items;
      return closure_48(this, RateLimitData$Type, items1);
    }
  }
  const arg1 = RateLimitData$Type;
  callback3(RateLimitData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RateLimitData$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RateLimitData$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RateLimitData$Type(closure_1[6]);
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
          let tmp26 = RateLimitData$Type;
          let tmp27 = closure_1;
          let Timestamp = RateLimitData$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.limitExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.limitExpiry);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = RateLimitData$Type;
                let tmp13 = closure_1;
                onRead = RateLimitData$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(limitExpiry, tag, writeUnknownFields) {
      if (limitExpiry.limitExpiry) {
        const Timestamp = RateLimitData$Type(closure_1[9]).Timestamp;
        const tagResult = tag.tag(1, RateLimitData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, RateLimitData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, RateLimitData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RateLimitData$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, limitExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RateLimitData$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp40 = new tmp40();
let tmp42 = (MessageType) => {
  class FeatureLimits$Type {
    constructor() {
      tmp = closure_3(this, FeatureLimits$Type);
      obj = { 9223372036854775807: false, 9223372036854775807: false, 0: false, 0: false };
      obj = {
        kind: "message",
        T() {
              return closure_37;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, FeatureLimits$Type, items1);
    }
  }
  const arg1 = FeatureLimits$Type;
  callback3(FeatureLimits$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { map: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FeatureLimits$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FeatureLimits$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = FeatureLimits$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp6;
      let tmp7;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp4 = callback;
        let tmp5 = callback(pos.tag(), 2);
        [tmp6, tmp7] = tmp5;
        if (1 === tmp6) {
          let binaryReadMap1Result = self.binaryReadMap1(obj.map, pos, readUnknownField);
          let tmp9 = tmp2;
          let tmp10 = tmp3;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp18 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp19 = tmp6;
            let tmp20 = tmp7;
            let prototype = _Error.prototype;
            let tmp21 = new.target;
            let tmp22 = new.target;
            _Error = new _Error("Unknown field " + tmp6 + " (wire type " + tmp7 + ") for " + self.typeName);
            let tmp24 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp7);
            tmp9 = readUnknownField;
            tmp10 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp11 = FeatureLimits$Type;
                let tmp12 = closure_1;
                onRead = FeatureLimits$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp13 = obj;
              let tmp14 = tmp6;
              let tmp15 = tmp7;
              let tmp16 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp6, tmp7, skipResult);
              tmp9 = readUnknownField;
              tmp10 = skipResult;
            }
          }
        }
        let tmp2 = tmp9;
        let tmp3 = tmp10;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap1",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_37;
            internalBinaryReadResult = closure_37.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = uint32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.FeatureLimits.map");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_37.create();
      }
      arg0[num] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(arg0, tag, writeUnknownFields) {
      let length;
      const keys = Object.keys(arg0.map);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp = keys[num];
          let tmp2 = closure_0;
          let tmp3 = closure_1;
          let tagResult = tag.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, closure_0(closure_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult1.uint32(parseInt(tmp));
          let tagResult2 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = closure_37;
          let internalBinaryWriteResult = closure_37.internalBinaryWrite(arg0.map[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FeatureLimits$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, arg0, tag);
      }
      return tag;
    }
  };
  return callback(FeatureLimits$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp42 = new tmp42();
let tmp44 = (MessageType) => {
  class SafetyFlag$Type {
    constructor() {
      tmp = closure_3(this, SafetyFlag$Type);
      obj = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items = [];
      items[0] = obj;
      items1 = [];
      items1[1] = items;
      return closure_48(this, SafetyFlag$Type, items1);
    }
  }
  const arg1 = SafetyFlag$Type;
  callback3(SafetyFlag$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetyFlag$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetyFlag$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetyFlag$Type(closure_1[6]);
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
          let tmp26 = SafetyFlag$Type;
          let tmp27 = closure_1;
          let Timestamp = SafetyFlag$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.flagExpiry = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.flagExpiry);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = SafetyFlag$Type;
                let tmp13 = closure_1;
                onRead = SafetyFlag$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(flagExpiry, tag, writeUnknownFields) {
      if (flagExpiry.flagExpiry) {
        const Timestamp = SafetyFlag$Type(closure_1[9]).Timestamp;
        const tagResult = tag.tag(1, SafetyFlag$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, SafetyFlag$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, SafetyFlag$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetyFlag$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, flagExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetyFlag$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp44 = new tmp44();
let tmp46 = (MessageType) => {
  class GuildShardingConfig$Type {
    constructor() {
      tmp = closure_3(this, GuildShardingConfig$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_48(this, GuildShardingConfig$Type, items1);
    }
  }
  const arg1 = GuildShardingConfig$Type;
  callback3(GuildShardingConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { shards: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildShardingConfig$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildShardingConfig$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildShardingConfig$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp28 = GuildShardingConfig$Type;
          let tmp29 = closure_1;
          if (tmp9 === GuildShardingConfig$Type(closure_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let shards = obj.shards;
                let arr = shards.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let shards1 = obj.shards;
            arr = shards1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = GuildShardingConfig$Type;
                let tmp15 = closure_1;
                onRead = GuildShardingConfig$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(shards, tag, writeUnknownFields) {
      let length;
      if (shards.shards.length) {
        tag.tag(1, GuildShardingConfig$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < shards.shards.length) {
          do {
            let int32Result = tag.int32(shards.shards[num3]);
            num3 = num3 + 1;
            length = shards.shards.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, GuildShardingConfig$Type(closure_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildShardingConfig$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, shards, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildShardingConfig$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp46 = new tmp46();
let tmp48 = (MessageType) => {
  class QuestMetadata$Type {
    constructor() {
      tmp = closure_3(this, QuestMetadata$Type);
      items = [];
      items[0] = { 1347510942: "<string:3090219012>", 1678385745: "<string:1374389534>", 1364379111: "<string:1094708920>", 140698458: "OPACITY_BLACK_96" };
      items1 = [];
      items1[1] = items;
      return closure_48(this, QuestMetadata$Type, items1);
    }
  }
  const arg1 = QuestMetadata$Type;
  callback3(QuestMetadata$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { questsCompleted: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, QuestMetadata$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = QuestMetadata$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = QuestMetadata$Type(closure_1[6]);
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
          obj.questsCompleted = pos.uint32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = QuestMetadata$Type;
                let tmp13 = closure_1;
                onRead = QuestMetadata$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(questsCompleted, tag, writeUnknownFields) {
      if (0 !== questsCompleted.questsCompleted) {
        tag.tag(1, QuestMetadata$Type(closure_1[6]).WireType.Varint).uint32(questsCompleted.questsCompleted);
        const tagResult = tag.tag(1, QuestMetadata$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = QuestMetadata$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, questsCompleted, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(QuestMetadata$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp48 = new tmp48();
let tmp50 = (MessageType) => {
  class PremiumState$Type {
    constructor() {
      tmp = closure_3(this, PremiumState$Type);
      obj = { 9223372036854775807: "presentationStyle", 9223372036854775807: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200452248854391, 0: 1758170503730304600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
      obj.T = function T() {
        const items = [16, closure_17, "PREMIUM_SOURCE_"];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: 0 };
      obj.T = function T() {
        const items = [, closure_18, "PREMIUM_SUBSCRIPTION_TYPE_"];
        return items;
      };
      items[1] = obj;
      items[2] = {
        T() {
              const items = [true, closure_19, "PREMIUM_SUBSCRIPTION_GROUP_ROLE_"];
              return items;
            }
      };
      items1 = ["<string:4030721180>"];
      items1[1] = items;
      return closure_48(this, PremiumState$Type, items1);
    }
  }
  const arg1 = PremiumState$Type;
  callback3(PremiumState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { limit: false, p: false, status: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumState$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumState$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumState$Type(closure_1[6]);
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
          obj.premiumSource = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          obj.premiumSubscriptionType = pos.int32();
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          obj.premiumSubscriptionGroupRole = pos.int32();
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
                let tmp12 = PremiumState$Type;
                let tmp13 = closure_1;
                onRead = PremiumState$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(premiumSource, tag, writeUnknownFields) {
      if (0 !== premiumSource.premiumSource) {
        tag.tag(1, PremiumState$Type(closure_1[6]).WireType.Varint).int32(premiumSource.premiumSource);
        const tagResult = tag.tag(1, PremiumState$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== premiumSource.premiumSubscriptionType) {
        tag.tag(2, PremiumState$Type(closure_1[6]).WireType.Varint).int32(premiumSource.premiumSubscriptionType);
        const tagResult1 = tag.tag(2, PremiumState$Type(closure_1[6]).WireType.Varint);
      }
      if (0 !== premiumSource.premiumSubscriptionGroupRole) {
        tag.tag(3, PremiumState$Type(closure_1[6]).WireType.Varint).int32(premiumSource.premiumSubscriptionGroupRole);
        const tagResult2 = tag.tag(3, PremiumState$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumState$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, premiumSource, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumState$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp50 = new tmp50();
let tmp52 = (MessageType) => {
  class StoreCountry$Type {
    constructor() {
      tmp = closure_3(this, StoreCountry$Type);
      items = [, ];
      items[0] = {};
      items[1] = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, StoreCountry$Type, items1);
    }
  }
  const arg1 = StoreCountry$Type;
  callback3(StoreCountry$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { country: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StoreCountry$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StoreCountry$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = StoreCountry$Type(closure_1[6]);
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
          obj.country = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = StoreCountry$Type;
          let tmp27 = closure_1;
          let Timestamp = StoreCountry$Type(closure_1[9]).Timestamp;
          let tmp28 = Timestamp;
          let tmp29 = pos;
          let tmp30 = readUnknownField;
          obj.setAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.setAt);
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
                let tmp12 = StoreCountry$Type;
                let tmp13 = closure_1;
                onRead = StoreCountry$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(country, tag, writeUnknownFields) {
      if ("" !== country.country) {
        tag.tag(1, StoreCountry$Type(closure_1[6]).WireType.LengthDelimited).string(country.country);
        const tagResult = tag.tag(1, StoreCountry$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (country.setAt) {
        const Timestamp = StoreCountry$Type(closure_1[9]).Timestamp;
        const tagResult1 = tag.tag(2, StoreCountry$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, StoreCountry$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, StoreCountry$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StoreCountry$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, country, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(StoreCountry$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp52 = new tmp52();
let tmp54 = (MessageType) => {
  class PerkConfig$Type {
    constructor() {
      tmp = closure_3(this, PerkConfig$Type);
      obj = {
        T() {
              const items = [, closure_20];
              return items;
            }
      };
      items = [, , ];
      items[0] = obj;
      items[1] = {
        T() {
              return closure_44;
            }
      };
      items[2] = {
        T() {
              return closure_45;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, PerkConfig$Type, items1);
    }
  }
  const arg1 = PerkConfig$Type;
  callback3(PerkConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { source: [], kind: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfig$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfig$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfig$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp36 = PerkConfig$Type;
          let tmp37 = closure_1;
          if (tmp9 === PerkConfig$Type(closure_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let source = obj.source;
                let arr = source.push(pos.int32());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let source1 = obj.source;
            arr = source1.push(pos.int32());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (2 === tmp8) {
          obj = { oneofKind: "increasedFileUploadSize" };
          let tmp32 = closure_44;
          let tmp33 = closure_44;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.increasedFileUploadSize = closure_44.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedFileUploadSize);
          obj.kind = obj;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          obj = { oneofKind: "increasedGuildLimit" };
          let tmp28 = closure_45;
          let tmp29 = closure_45;
          let tmp30 = pos;
          let tmp31 = readUnknownField;
          obj.increasedGuildLimit = closure_45.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedGuildLimit);
          obj.kind = obj;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = PerkConfig$Type;
                let tmp15 = closure_1;
                onRead = PerkConfig$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(source, tag, writeUnknownFields) {
      let length;
      if (source.source.length) {
        tag.tag(1, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < source.source.length) {
          do {
            let int32Result = tag.int32(source.source[num3]);
            num3 = num3 + 1;
            length = source.source.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if ("increasedFileUploadSize" === source.kind.oneofKind) {
        const tagResult1 = tag.tag(2, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = closure_44.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = closure_44.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("increasedGuildLimit" === source.kind.oneofKind) {
        const tagResult2 = tag.tag(3, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = closure_45.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = closure_45.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, PerkConfig$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfig$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, source, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfig$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp54 = new tmp54();
let tmp56 = (MessageType) => {
  class PerkConfigIncreasedFileUploadSize$Type {
    constructor() {
      tmp = closure_3(this, PerkConfigIncreasedFileUploadSize$Type);
      items = [];
      items[0] = { 1347510942: null, 1678385745: null, 1364379111: null, 140698458: null };
      items1 = [null];
      items1[1] = items;
      return closure_48(this, PerkConfigIncreasedFileUploadSize$Type, items1);
    }
  }
  const arg1 = PerkConfigIncreasedFileUploadSize$Type;
  callback3(PerkConfigIncreasedFileUploadSize$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { maxSize: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfigIncreasedFileUploadSize$Type(closure_1[6]);
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
          let str4 = pos.uint64();
          obj.maxSize = str4.toString();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = PerkConfigIncreasedFileUploadSize$Type;
                let tmp13 = closure_1;
                onRead = PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(maxSize, tag, writeUnknownFields) {
      if ("0" !== maxSize.maxSize) {
        tag.tag(1, PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).WireType.Varint).uint64(maxSize.maxSize);
        const tagResult = tag.tag(1, PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfigIncreasedFileUploadSize$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, maxSize, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfigIncreasedFileUploadSize$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp56 = new tmp56();
let tmp58 = (MessageType) => {
  class PerkConfigIncreasedGuildLimit$Type {
    constructor() {
      tmp = closure_3(this, PerkConfigIncreasedGuildLimit$Type);
      items = [];
      items[0] = {};
      items1 = [];
      items1[1] = items;
      return closure_48(this, PerkConfigIncreasedGuildLimit$Type, items1);
    }
  }
  const arg1 = PerkConfigIncreasedGuildLimit$Type;
  callback3(PerkConfigIncreasedGuildLimit$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { maxGuilds: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfigIncreasedGuildLimit$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfigIncreasedGuildLimit$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfigIncreasedGuildLimit$Type(closure_1[6]);
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
          obj.maxGuilds = pos.uint32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
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
                let tmp12 = PerkConfigIncreasedGuildLimit$Type;
                let tmp13 = closure_1;
                onRead = PerkConfigIncreasedGuildLimit$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    value(maxGuilds, tag, writeUnknownFields) {
      if (0 !== maxGuilds.maxGuilds) {
        tag.tag(1, PerkConfigIncreasedGuildLimit$Type(closure_1[6]).WireType.Varint).uint32(maxGuilds.maxGuilds);
        const tagResult = tag.tag(1, PerkConfigIncreasedGuildLimit$Type(closure_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfigIncreasedGuildLimit$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, maxGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfigIncreasedGuildLimit$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp58 = new tmp58();
let tmp60 = (MessageType) => {
  class Perks$Type {
    constructor() {
      tmp = closure_3(this, Perks$Type);
      items = [, , , ];
      items[0] = {};
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null, 0: null };
      obj = {
        kind: "message",
        T() {
              return closure_43;
            }
      };
      obj.V = obj;
      items[1] = obj;
      items[2] = { 1347510942: true, 1678385745: true, 1364379111: true, 140698458: true };
      items[3] = {
        T() {
              return callback(closure_1[9]).Timestamp;
            }
      };
      items1 = [];
      items1[1] = items;
      return closure_48(this, Perks$Type, items1);
    }
  }
  const arg1 = Perks$Type;
  callback3(Perks$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Perks$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Perks$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Perks$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "internalBinaryRead",
    value(pos, arg1, readUnknownField) {
      let tmp8;
      let tmp9;
      let obj = arg3;
      const self = this;
      if (null == arg3) {
        obj = self.create();
      }
      const sum = pos.pos + arg1;
      while (pos.pos < sum) {
        let tmp6 = callback;
        let tmp7 = callback(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp34 = Perks$Type;
          let tmp35 = closure_1;
          if (tmp9 === Perks$Type(closure_1[6]).WireType.LengthDelimited) {
            let sum1 = pos.int32() + pos.pos;
            let tmp12 = tmp4;
            let tmp13 = tmp5;
            let tmp11 = sum1;
            if (pos.pos < sum1) {
              do {
                let activePerksBitmask = obj.activePerksBitmask;
                let str5 = pos.uint64();
                let arr = activePerksBitmask.push(str5.toString());
                tmp11 = sum1;
                tmp12 = tmp4;
                tmp13 = tmp5;
                pos = pos.pos;
              } while (pos < sum1);
            }
          } else {
            let activePerksBitmask1 = obj.activePerksBitmask;
            let str4 = pos.uint64();
            arr = activePerksBitmask1.push(str4.toString());
            tmp11 = tmp3;
            tmp12 = tmp4;
            tmp13 = tmp5;
          }
        } else if (2 === tmp8) {
          let binaryReadMap2Result = self.binaryReadMap2(obj.configByPerk, pos, readUnknownField);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          obj.rulesVersion = pos.uint32();
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          let tmp28 = Perks$Type;
          let tmp29 = closure_1;
          let Timestamp = Perks$Type(closure_1[9]).Timestamp;
          let tmp30 = Timestamp;
          let tmp31 = pos;
          let tmp32 = readUnknownField;
          obj.updatedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.updatedAt);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else {
          readUnknownField = readUnknownField.readUnknownField;
          if ("throw" === readUnknownField) {
            let tmp21 = globalThis;
            let _globalThis = globalThis;
            let _Error = Error;
            let _HermesInternal = HermesInternal;
            let str = "Unknown field ";
            let str2 = " (wire type ";
            let str3 = ") for ";
            let tmp22 = tmp8;
            let tmp23 = tmp9;
            let prototype = _Error.prototype;
            let tmp24 = new.target;
            let tmp25 = new.target;
            _Error = new _Error("Unknown field " + tmp8 + " (wire type " + tmp9 + ") for " + self.typeName);
            let tmp27 = _Error;
            throw _Error;
          } else {
            let skipResult = pos.skip(tmp9);
            tmp11 = tmp3;
            tmp12 = readUnknownField;
            tmp13 = skipResult;
            if (false !== readUnknownField) {
              let onRead = readUnknownField;
              if (true === readUnknownField) {
                let tmp14 = Perks$Type;
                let tmp15 = closure_1;
                onRead = Perks$Type(closure_1[6]).UnknownFieldHandler.onRead;
              }
              let tmp16 = obj;
              let tmp17 = tmp8;
              let tmp18 = tmp9;
              let tmp19 = skipResult;
              let onReadResult = onRead(self.typeName, obj, tmp8, tmp9, skipResult);
              tmp11 = tmp3;
              tmp12 = readUnknownField;
              tmp13 = skipResult;
            }
          }
        }
        let tmp3 = tmp11;
        let tmp4 = tmp12;
        let tmp5 = tmp13;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "binaryReadMap2",
    value(arg0, pos, binaryReadOptionsResult2) {
      let tmp8;
      const sum = pos.pos + pos.uint32();
      let tmp4;
      let obj;
      if (pos.pos < sum) {
        while (true) {
          let tmp6 = callback;
          let tmp7 = callback(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = closure_43;
            internalBinaryReadResult = closure_43.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          let tmp3 = internalBinaryReadResult;
          tmp4 = uint32Result;
          obj = internalBinaryReadResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.Perks.config_by_perk");
        throw _Error;
      }
      let num = 0;
      if (null != tmp4) {
        num = tmp4;
      }
      if (null == obj) {
        obj = closure_43.create();
      }
      arg0[num] = obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(activePerksBitmask, tag, writeUnknownFields) {
      let length;
      let length2;
      if (activePerksBitmask.activePerksBitmask.length) {
        tag.tag(1, Perks$Type(closure_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < activePerksBitmask.activePerksBitmask.length) {
          do {
            let uint64Result = tag.uint64(activePerksBitmask.activePerksBitmask[num3]);
            num3 = num3 + 1;
            length = activePerksBitmask.activePerksBitmask.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, Perks$Type(closure_1[6]).WireType.LengthDelimited);
      }
      const keys = Object.keys(activePerksBitmask.configByPerk);
      let num4 = 0;
      if (0 < keys.length) {
        do {
          let tmp6 = keys[num4];
          let tmp7 = closure_0;
          let tmp8 = closure_1;
          let tagResult1 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult1.fork();
          let tagResult2 = forkResult1.tag(1, closure_0(closure_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult2.uint32(parseInt(tmp6));
          let tagResult3 = tag.tag(2, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tmp11 = closure_43;
          let internalBinaryWriteResult = closure_43.internalBinaryWrite(activePerksBitmask.configByPerk[tmp6], tag, writeUnknownFields);
          let joined1 = tag.join();
          let joined2 = joined1.join();
          num4 = num4 + 1;
          length2 = keys.length;
        } while (num4 < length2);
      }
      if (0 !== activePerksBitmask.rulesVersion) {
        tag.tag(3, Perks$Type(closure_1[6]).WireType.Varint).uint32(activePerksBitmask.rulesVersion);
        const tagResult4 = tag.tag(3, Perks$Type(closure_1[6]).WireType.Varint);
      }
      if (activePerksBitmask.updatedAt) {
        const Timestamp = Perks$Type(closure_1[9]).Timestamp;
        const tagResult5 = tag.tag(4, Perks$Type(closure_1[6]).WireType.LengthDelimited);
        const joined3 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, Perks$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, Perks$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Perks$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, activePerksBitmask, tag);
      }
      return tag;
    }
  };
  return callback(Perks$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp60 = new tmp60();
let tmp62 = (MessageType) => {
  class UserCountryData$Type {
    constructor() {
      tmp = closure_3(this, UserCountryData$Type);
      items = [, , , , ];
      items[0] = {};
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items[1] = obj;
      items[2] = {
        T() {
              return callback(closure_1[7]).StringValue;
            }
      };
      obj = { 9223372036854775807: null, 9223372036854775807: null, 0: null };
      obj.T = function T() {
        return callback(closure_1[9]).Timestamp;
      };
      items[3] = obj;
      obj1 = { 9223372036854775807: 52, 9223372036854775807: "End", 0: 0, 0: 299.75 };
      obj1.V = { "Bool(true)": "map", "Bool(true)": 9 };
      items[4] = obj1;
      items1 = [];
      items1[1] = items;
      return closure_48(this, UserCountryData$Type, items1);
    }
  }
  const arg1 = UserCountryData$Type;
  callback3(UserCountryData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { calculatedCountry: "", countryScores: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserCountryData$Type(closure_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserCountryData$Type(closure_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserCountryData$Type(closure_1[6]);
      }
      return obj;
    }
  };
  const items = [obj, , , ];
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
          obj.calculatedCountry = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp37 = UserCountryData$Type;
          let tmp38 = closure_1;
          let Timestamp2 = UserCountryData$Type(closure_1[9]).Timestamp;
          let tmp39 = Timestamp2;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.lastCalculatedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastCalculatedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp32 = UserCountryData$Type;
          let tmp33 = closure_1;
          let StringValue = UserCountryData$Type(closure_1[7]).StringValue;
          let tmp34 = StringValue;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.countryOverride = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.countryOverride);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp27 = UserCountryData$Type;
          let tmp28 = closure_1;
          let Timestamp = UserCountryData$Type(closure_1[9]).Timestamp;
          let tmp29 = Timestamp;
          let tmp30 = pos;
          let tmp31 = readUnknownField;
          obj.overrideSetAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.overrideSetAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (5 === tmp7) {
          let binaryReadMap5Result = self.binaryReadMap5(obj.countryScores, pos, readUnknownField);
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
                let tmp12 = UserCountryData$Type;
                let tmp13 = closure_1;
                onRead = UserCountryData$Type(closure_1[6]).UnknownFieldHandler.onRead;
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
    key: "binaryReadMap5",
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
            let floatResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            floatResult = pos.float();
          }
          let tmp3 = floatResult;
          tmp4 = stringResult;
          tmp5 = floatResult;
        }
        const _globalThis = globalThis;
        let _Error = Error;
        const prototype = _Error.prototype;
        _Error = new _Error("unknown map entry field for field discord_protos.users.v1.UserCountryData.country_scores");
        throw _Error;
      }
      let str2 = "";
      if (null != tmp4) {
        str2 = tmp4;
      }
      let num = 0;
      if (null != tmp5) {
        num = tmp5;
      }
      arg0[str2] = num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "internalBinaryWrite",
    value(calculatedCountry, tag, writeUnknownFields) {
      let length;
      if ("" !== calculatedCountry.calculatedCountry) {
        tag.tag(1, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).string(calculatedCountry.calculatedCountry);
        const tagResult = tag.tag(1, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited);
      }
      if (calculatedCountry.lastCalculatedAt) {
        const Timestamp = UserCountryData$Type(closure_1[9]).Timestamp;
        const tagResult1 = tag.tag(2, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (calculatedCountry.countryOverride) {
        const StringValue = UserCountryData$Type(closure_1[7]).StringValue;
        const tagResult2 = tag.tag(3, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (calculatedCountry.overrideSetAt) {
        const Timestamp2 = UserCountryData$Type(closure_1[9]).Timestamp;
        const tagResult3 = tag.tag(4, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, UserCountryData$Type(closure_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      const keys = Object.keys(calculatedCountry.countryScores);
      let num12 = 0;
      if (0 < keys.length) {
        do {
          let tmp13 = keys[num12];
          let tmp14 = closure_0;
          let tmp15 = closure_1;
          let tagResult4 = tag.tag(5, closure_0(closure_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult4.fork();
          let tagResult5 = forkResult.tag(1, closure_0(closure_1[6]).WireType.LengthDelimited);
          let stringResult1 = tagResult5.string(tmp13);
          let tagResult6 = stringResult1.tag(2, closure_0(closure_1[6]).WireType.Bit32);
          let floatResult = tagResult6.float(calculatedCountry.countryScores[tmp13]);
          let joined3 = floatResult.join();
          num12 = num12 + 1;
          length = keys.length;
        } while (num12 < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserCountryData$Type(closure_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, calculatedCountry, tag);
      }
      return tag;
    }
  };
  return callback(UserCountryData$Type, items);
}(arg1(dependencyMap[6]).MessageType);
tmp62 = new tmp62();
const result = arg1(dependencyMap[10]).fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx");

export const DayOfWeek = obj;
export const DisplayNameFont = obj;
export const DisplayNameEffect = obj;
export const BadgeType = { BADGE_TYPE_UNSPECIFIED: 0, [0]: "BADGE_TYPE_UNSPECIFIED", APRIL_FOOLS_2026: 1, [1]: "APRIL_FOOLS_2026" };
export const AnonymizationStatus = obj1;
export const AgeAssuranceTier = { AGE_ASSURANCE_TIER_UNSPECIFIED: 0, [0]: "AGE_ASSURANCE_TIER_UNSPECIFIED", AGE_ASSURANCE_TIER_1: 1, [1]: "AGE_ASSURANCE_TIER_1", AGE_ASSURANCE_TIER_2: 2, [2]: "AGE_ASSURANCE_TIER_2", AGE_ASSURANCE_TIER_3: 3, [3]: "AGE_ASSURANCE_TIER_3", AGE_ASSURANCE_TIER_4: 4, [4]: "AGE_ASSURANCE_TIER_4" };
export const AgeAssuranceMethod = obj2;
export const AgeAssuranceVendor = obj3;
export const AgeAssuranceGroup = obj4;
export const UserLinkType = obj5;
export const UserLinkStatus = obj6;
export const RateLimitTier = { RATE_LIMIT_TIER_UNSPECIFIED: 0, [0]: "RATE_LIMIT_TIER_UNSPECIFIED", UNLIMITED: 1, [1]: "UNLIMITED", TIER_2: 2, [2]: "TIER_2", TIER_3: 3, [3]: "TIER_3", TIER_4: 4, [4]: "TIER_4", DISABLED: 5, [5]: "DISABLED" };
export const FeatureLimitName = { FEATURE_LIMIT_NAME_UNSPECIFIED: 0, [0]: "FEATURE_LIMIT_NAME_UNSPECIFIED", GUILD_MESSAGE_SEND: 1, [1]: "GUILD_MESSAGE_SEND", DM_SEND: 2, [2]: "DM_SEND", FRIEND_REQUEST: 3, [3]: "FRIEND_REQUEST", GUILD_CREATE: 4, [4]: "GUILD_CREATE", GUILD_JOIN: 5, [5]: "GUILD_JOIN", GUILD_TEXT_CHANNEL_CREATE: 6, [6]: "GUILD_TEXT_CHANNEL_CREATE", GUILD_UPLOAD_ATTACHMENT: 7, [7]: "GUILD_UPLOAD_ATTACHMENT", DM_UPLOAD_ATTACHMENT: 8, [8]: "DM_UPLOAD_ATTACHMENT", GDM_UPLOAD_ATTACHMENT: 9, [9]: "GDM_UPLOAD_ATTACHMENT", GDM_SEND: 10, [10]: "GDM_SEND", GUILD_VOICE_CHANNEL_CREATE: 11, [11]: "GUILD_VOICE_CHANNEL_CREATE", USER_PROFILE_EDIT: 12, [12]: "USER_PROFILE_EDIT" };
export const SafetyFlagType = { SAFETY_FLAG_TYPE_UNSPECIFIED: 0, [0]: "SAFETY_FLAG_TYPE_UNSPECIFIED", STRANGER_DANGER: 1, [1]: "STRANGER_DANGER", LIKELY_ATO: 2, [2]: "LIKELY_ATO", PARENTAL_CONSENT_REVOKED_IOS: 3, [3]: "PARENTAL_CONSENT_REVOKED_IOS", PARENTAL_CONSENT_REVOKED_ANDROID: 4, [4]: "PARENTAL_CONSENT_REVOKED_ANDROID", REACTIVE_CHECK_APPLIED: 5, [5]: "REACTIVE_CHECK_APPLIED", PARENTAL_CONSENT_GRACE: 6, [6]: "PARENTAL_CONSENT_GRACE" };
export const PremiumSource = obj7;
export const PremiumSubscriptionType = obj8;
export const PremiumSubscriptionGroupRole = obj9;
export const Perk = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ANIMATED_EMOJIS: 1, [1]: "ANIMATED_EMOJIS", EMOJIS_EVERYWHERE: 2, [2]: "EMOJIS_EVERYWHERE", STICKERS_EVERYWHERE: 3, [3]: "STICKERS_EVERYWHERE", SOUNDBOARD_EVERYWHERE: 4, [4]: "SOUNDBOARD_EVERYWHERE", ANIMATED_AVATAR: 5, [5]: "ANIMATED_AVATAR", CUSTOM_DISCRIMINATOR: 6, [6]: "CUSTOM_DISCRIMINATOR", PREMIUM_GUILD_MEMBER_PROFILE: 7, [7]: "PREMIUM_GUILD_MEMBER_PROFILE", PROFILE_PREMIUM_FEATURES: 8, [8]: "PROFILE_PREMIUM_FEATURES", STREAM_MID_QUALITY: 9, [9]: "STREAM_MID_QUALITY", STREAM_HIGH_QUALITY: 10, [10]: "STREAM_HIGH_QUALITY", CUSTOM_NOTIFICATION_SOUNDS: 11, [11]: "CUSTOM_NOTIFICATION_SOUNDS", VIDEO_FILTER_ASSETS: 12, [12]: "VIDEO_FILTER_ASSETS", INCREASED_FILE_UPLOAD_SIZE: 13, [13]: "INCREASED_FILE_UPLOAD_SIZE", INCREASED_GUILD_LIMIT: 14, [14]: "INCREASED_GUILD_LIMIT", INCREASED_MESSAGE_LENGTH: 15, [15]: "INCREASED_MESSAGE_LENGTH", NITRO_REACTION_TOGGLE: 16, [16]: "NITRO_REACTION_TOGGLE", CLIENT_THEMES: 17, [17]: "CLIENT_THEMES", PREMIUM_COLLECTIBLES: 18, [18]: "PREMIUM_COLLECTIBLES", CUSTOM_CALL_SOUNDS: 19, [19]: "CUSTOM_CALL_SOUNDS", SAVED_MESSAGES: 20, [20]: "SAVED_MESSAGES", PREMIUM_VOICE_FILTERS: 21, [21]: "PREMIUM_VOICE_FILTERS", CHAT_WALLPAPERS: 22, [22]: "CHAT_WALLPAPERS", MONTHLY_ORBS: 23, [23]: "MONTHLY_ORBS", SHOP_DISCOUNTS: 24, [24]: "SHOP_DISCOUNTS", MORE_QUEST_ORBS: 25, [25]: "MORE_QUEST_ORBS", PROFILE_BADGES: 26, [26]: "PROFILE_BADGES", APP_ICONS: 27, [27]: "APP_ICONS", BOOST_DISCOUNT: 28, [28]: "BOOST_DISCOUNT", FREE_BOOSTS: 29, [29]: "FREE_BOOSTS", INSTALL_PREMIUM_APPLICATIONS: 30, [30]: "INSTALL_PREMIUM_APPLICATIONS", INCREASED_VIDEO_UPLOAD_QUALITY: 31, [31]: "INCREASED_VIDEO_UPLOAD_QUALITY" };
export const PerkSource = obj10;
export const TimeOfDay = tmp2;
export const User = tmp4;
export const MediumUser = tmp6;
export const UserAvatarDecoration = tmp8;
export const UserNameplate = tmp10;
export const DisplayNameStyles = tmp12;
export const UserCollectibles = tmp14;
export const UserPrimaryGuild = tmp16;
export const ScheduleRule = tmp18;
export const RestrictedSchedule = tmp20;
export const CrossPlatformRestriction = tmp22;
export const BadgeCommon = tmp24;
export const AprilFools2026Badge = tmp26;
export const Badge = tmp28;
export const UserBadges = tmp30;
export const AnonymizationInfo = tmp32;
export const UserData = tmp34;
export const AgeAssuranceData = tmp36;
export const LinkedUser = tmp38;
export const RateLimitData = tmp40;
export const FeatureLimits = tmp42;
export const SafetyFlag = tmp44;
export const GuildShardingConfig = tmp46;
export const QuestMetadata = tmp48;
export const PremiumState = tmp50;
export const StoreCountry = tmp52;
export const PerkConfig = tmp54;
export const PerkConfigIncreasedFileUploadSize = tmp56;
export const PerkConfigIncreasedGuildLimit = tmp58;
export const Perks = tmp60;
export const UserCountryData = tmp62;
