// Module ID: 1867
// Function ID: 20543
// Name: _callSuper
// Dependencies: [57, 6, 7, 15, 17, 18, 1284, 1313, 1868, 1312, 2]

// Module 1867 (_callSuper)
import _slicedToArray from "_slicedToArray";
import module_1284 from "module_1284";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { DAY_OF_WEEK_UNSPECIFIED: 0, [0]: "DAY_OF_WEEK_UNSPECIFIED", MONDAY: 1, [1]: "MONDAY", TUESDAY: 2, [2]: "TUESDAY", WEDNESDAY: 3, [3]: "WEDNESDAY", THURSDAY: 4, [4]: "THURSDAY", FRIDAY: 5, [5]: "FRIDAY", SATURDAY: 6, [6]: "SATURDAY", SUNDAY: 7, [7]: "SUNDAY" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DEFAULT: 11, [11]: "DEFAULT", BANGERS: 1, [1]: "BANGERS", BIO_RHYME: 2, [2]: "BIO_RHYME", CHERRY_BOMB: 3, [3]: "CHERRY_BOMB", CHICLE: 4, [4]: "CHICLE", COMPAGNON: 5, [5]: "COMPAGNON", MUSEO_MODERNO: 6, [6]: "MUSEO_MODERNO", NEO_CASTEL: 7, [7]: "NEO_CASTEL", PIXELIFY: 8, [8]: "PIXELIFY", RIBES: 9, [9]: "RIBES", SINISTRE: 10, [10]: "SINISTRE", ZILLA_SLAB: 12, [12]: "ZILLA_SLAB", PLAYPEN_SANS: 13, [13]: "PLAYPEN_SANS", ORBITRON: 14, [14]: "ORBITRON", NEW_ROCKER: 15, [15]: "NEW_ROCKER", KALAM: 16, [16]: "KALAM" };
obj = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", SOLID: 1, [1]: "SOLID", GRADIENT: 2, [2]: "GRADIENT", NEON: 3, [3]: "NEON", TOON: 4, [4]: "TOON", POP: 5, [5]: "POP", GLOW: 6, [6]: "GLOW", PRISM: 7, [7]: "PRISM", GUMMY: 8, [8]: "GUMMY", TEST_1: 1001, [1001]: "TEST_1", TEST_2: 1002, [1002]: "TEST_2", TEST_3: 1003, [1003]: "TEST_3", TEST_4: 1004, [1004]: "TEST_4" };
let obj1 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", TO_BE_ANONYMIZED_USER: 1, [1]: "TO_BE_ANONYMIZED_USER", INACCESSIBLE_ANONYMIZED_USER: 2, [2]: "INACCESSIBLE_ANONYMIZED_USER", ANONYMOUS_USER: 3, [3]: "ANONYMOUS_USER" };
let obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", ID_SELFIE_MATCH: 1, [1]: "ID_SELFIE_MATCH", ID_SCAN: 2, [2]: "ID_SCAN", FACIAL_AGE_ESTIMATION: 3, [3]: "FACIAL_AGE_ESTIMATION", BEHAVIORAL_INFERENCE: 4, [4]: "BEHAVIORAL_INFERENCE", CREDIT_CARD: 5, [5]: "CREDIT_CARD", EMAIL_DOMAIN: 6, [6]: "EMAIL_DOMAIN", OS_SIGNAL: 7, [7]: "OS_SIGNAL", ML_AGE_INFERENCE: 8, [8]: "ML_AGE_INFERENCE", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
let obj3 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", K_ID: 1, [1]: "K_ID", PERSONA: 2, [2]: "PERSONA", INCODE: 3, [3]: "INCODE", DISCORD: 4, [4]: "DISCORD", GOOGLE_WALLET: 5, [5]: "GOOGLE_WALLET", APPLE_APP_STORE: 6, [6]: "APPLE_APP_STORE", GOOGLE_PLAY: 7, [7]: "GOOGLE_PLAY" };
let obj4 = { AGE_ASSURANCE_GROUP_UNSPECIFIED: 0, [0]: "AGE_ASSURANCE_GROUP_UNSPECIFIED", AGE_ASSURANCE_GROUP_13: 1, [1]: "AGE_ASSURANCE_GROUP_13", AGE_ASSURANCE_GROUP_14: 2, [2]: "AGE_ASSURANCE_GROUP_14", AGE_ASSURANCE_GROUP_15: 3, [3]: "AGE_ASSURANCE_GROUP_15", AGE_ASSURANCE_GROUP_16: 4, [4]: "AGE_ASSURANCE_GROUP_16", AGE_ASSURANCE_GROUP_17: 5, [5]: "AGE_ASSURANCE_GROUP_17", AGE_ASSURANCE_GROUP_18_21: 6, [6]: "AGE_ASSURANCE_GROUP_18_21", AGE_ASSURANCE_GROUP_22_24: 7, [7]: "AGE_ASSURANCE_GROUP_22_24", AGE_ASSURANCE_GROUP_25_34: 8, [8]: "AGE_ASSURANCE_GROUP_25_34", AGE_ASSURANCE_GROUP_35_UP: 9, [9]: "AGE_ASSURANCE_GROUP_35_UP" };
let obj5 = { USER_LINK_TYPE_UNSPECIFIED: 0, [0]: "USER_LINK_TYPE_UNSPECIFIED", PARENT: 1, [1]: "PARENT", CHILD: 2, [2]: "CHILD" };
let obj6 = { USER_LINK_STATUS_UNSPECIFIED: 0, [0]: "USER_LINK_STATUS_UNSPECIFIED", PENDING: 1, [1]: "PENDING", ACTIVE: 2, [2]: "ACTIVE", INACTIVE: 3, [3]: "INACTIVE", DECLINED: 4, [4]: "DECLINED" };
let obj7 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", SUBSCRIPTION: 1, [1]: "SUBSCRIPTION", FRACTIONAL_NITRO: 2, [2]: "FRACTIONAL_NITRO", REVERSE_TRIAL: 3, [3]: "REVERSE_TRIAL", SUBSCRIPTION_GROUP: 4, [4]: "SUBSCRIPTION_GROUP" };
let obj8 = { NONE_UNSPECIFIED: 0, [0]: "NONE_UNSPECIFIED", BOOST_ONLY: 1, [1]: "BOOST_ONLY", TIER_0: 2, [2]: "TIER_0", TIER_1: 3, [3]: "TIER_1", TIER_2: 4, [4]: "TIER_2" };
let obj9 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
let obj10 = { SOURCE_UNSPECIFIED: 0, [0]: "SOURCE_UNSPECIFIED", SOURCE_NITRO: 1, [1]: "SOURCE_NITRO", SOURCE_THIRDPARTY_CROISSANT: 2, [2]: "SOURCE_THIRDPARTY_CROISSANT", SOURCE_BOT: 3, [3]: "SOURCE_BOT" };
let tmp2 = ((MessageType) => {
  class TimeOfDay$Type {
    constructor() {
      tmp = outer1_3(this, TimeOfDay$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "hours", kind: "scalar", T: 5 };
      items[1] = { no: 2, name: "minutes", kind: "scalar", T: 5 };
      items[2] = { no: 3, name: "seconds", kind: "scalar", T: 5 };
      items[3] = { no: 4, name: "nanos", kind: "scalar", T: 5 };
      items1 = ["discord_protos.users.v1.TimeOfDay"];
      items1[1] = items;
      return outer1_48(this, TimeOfDay$Type, items1);
    }
  }
  callback3(TimeOfDay$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { hours: 0, minutes: 0, seconds: 0, nanos: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, TimeOfDay$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = TimeOfDay$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = TimeOfDay$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = TimeOfDay$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(hours, tag, writeUnknownFields) {
      if (0 !== hours.hours) {
        tag.tag(1, TimeOfDay$Type(outer1_1[6]).WireType.Varint).int32(hours.hours);
        const tagResult = tag.tag(1, TimeOfDay$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== hours.minutes) {
        tag.tag(2, TimeOfDay$Type(outer1_1[6]).WireType.Varint).int32(hours.minutes);
        const tagResult1 = tag.tag(2, TimeOfDay$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== hours.seconds) {
        tag.tag(3, TimeOfDay$Type(outer1_1[6]).WireType.Varint).int32(hours.seconds);
        const tagResult2 = tag.tag(3, TimeOfDay$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== hours.nanos) {
        tag.tag(4, TimeOfDay$Type(outer1_1[6]).WireType.Varint).int32(hours.nanos);
        const tagResult3 = tag.tag(4, TimeOfDay$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = TimeOfDay$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, hours, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(TimeOfDay$Type, items);
})(require("module_1284").MessageType);
tmp2 = new tmp2();
let closure_21 = tmp2;
let tmp4 = ((MessageType) => {
  class User$Type {
    constructor() {
      tmp = outer1_3(this, User$Type);
      items = [, , , , , , , , , , , ];
      items[0] = { no: 1, name: "id", kind: "scalar", T: 4 };
      items[1] = { no: 2, name: "username", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "discriminator", kind: "scalar", T: 9 };
      obj = { no: 4, name: "avatar", kind: "message" };
      obj.T = function T() {
        return User$Type(outer2_1[7]).StringValue;
      };
      items[3] = obj;
      items[4] = { no: 5, name: "bot", kind: "scalar", T: 8 };
      items[5] = { no: 6, name: "public_flags", kind: "scalar", T: 4 };
      obj = { no: 8, name: "global_name", kind: "message" };
      obj.T = function T() {
        return User$Type(outer2_1[7]).StringValue;
      };
      items[6] = obj;
      obj1 = { no: 9, name: "avatar_decoration_data", kind: "message" };
      obj1.T = function T() {
        return outer2_22;
      };
      items[7] = obj1;
      obj2 = { no: 10, name: "primary_guild", kind: "message" };
      obj2.T = function T() {
        return outer2_26;
      };
      items[8] = obj2;
      obj3 = { no: 11, name: "collectibles", kind: "message" };
      obj3.T = function T() {
        return outer2_25;
      };
      items[9] = obj3;
      obj4 = { no: 12, name: "safety_state", kind: "message" };
      obj4.T = function T() {
        return User$Type(outer2_1[8]).SafetyState;
      };
      items[10] = obj4;
      obj5 = { no: 13, name: "display_name_styles", kind: "message" };
      obj5.T = function T() {
        return outer2_24;
      };
      items[11] = obj5;
      items1 = ["discord_protos.users.v1.User"];
      items1[1] = items;
      return outer1_48(this, User$Type, items1);
    }
  }
  callback3(User$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { id: "0", username: "", discriminator: "", bot: false, publicFlags: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, User$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = User$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = User$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        obj.displayNameStyles = outer1_24.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.displayNameStyles);
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
        tag.tag(1, User$Type(outer1_1[6]).WireType.Varint).uint64(id.id);
        const tagResult = tag.tag(1, User$Type(outer1_1[6]).WireType.Varint);
      }
      if ("" !== id.username) {
        tag.tag(2, User$Type(outer1_1[6]).WireType.LengthDelimited).string(id.username);
        const tagResult1 = tag.tag(2, User$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== id.discriminator) {
        tag.tag(3, User$Type(outer1_1[6]).WireType.LengthDelimited).string(id.discriminator);
        const tagResult2 = tag.tag(3, User$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (id.avatar) {
        const StringValue = User$Type(outer1_1[7]).StringValue;
        const tagResult3 = tag.tag(4, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatar, tag.tag(4, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.bot) {
        tag.tag(5, User$Type(outer1_1[6]).WireType.Varint).bool(id.bot);
        const tagResult4 = tag.tag(5, User$Type(outer1_1[6]).WireType.Varint);
      }
      if ("0" !== id.publicFlags) {
        tag.tag(6, User$Type(outer1_1[6]).WireType.Varint).uint64(id.publicFlags);
        const tagResult5 = tag.tag(6, User$Type(outer1_1[6]).WireType.Varint);
      }
      if (id.globalName) {
        const StringValue2 = User$Type(outer1_1[7]).StringValue;
        const tagResult6 = tag.tag(8, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.globalName, tag.tag(8, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.avatarDecorationData) {
        const tagResult7 = tag.tag(9, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_22.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = outer1_22.internalBinaryWrite(id.avatarDecorationData, tag.tag(9, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.primaryGuild) {
        const tagResult8 = tag.tag(10, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = outer1_26.internalBinaryWrite(id.primaryGuild, tag.tag(10, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_26.internalBinaryWrite(id.primaryGuild, tag.tag(10, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.collectibles) {
        const tagResult9 = tag.tag(11, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined4 = outer1_25.internalBinaryWrite(id.collectibles, tag.tag(11, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_25.internalBinaryWrite(id.collectibles, tag.tag(11, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.safetyState) {
        const SafetyState = User$Type(outer1_1[8]).SafetyState;
        const tagResult10 = tag.tag(12, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = SafetyState.internalBinaryWrite(id.safetyState, tag.tag(12, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.displayNameStyles) {
        const tagResult11 = tag.tag(13, User$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined6 = outer1_24.internalBinaryWrite(id.displayNameStyles, tag.tag(13, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_24.internalBinaryWrite(id.displayNameStyles, tag.tag(13, User$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = User$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(User$Type, items);
})(require("module_1284").MessageType);
tmp4 = new tmp4();
let tmp6 = ((MessageType) => {
  class MediumUser$Type {
    constructor() {
      tmp = outer1_3(this, MediumUser$Type);
      items = [, , , , , , , ];
      items[0] = { no: 1, name: "id", kind: "scalar", T: 6 };
      items[1] = { no: 2, name: "username", kind: "scalar", T: 9 };
      items[2] = { no: 3, name: "discriminator", kind: "scalar", T: 13 };
      obj = { no: 4, name: "avatar_hash", kind: "message" };
      obj.T = function T() {
        return MediumUser$Type(outer2_1[7]).StringValue;
      };
      items[3] = obj;
      items[4] = { no: 5, name: "bot", kind: "scalar", T: 8 };
      items[5] = { no: 6, name: "flags", kind: "scalar", T: 4 };
      obj = { no: 7, name: "email", kind: "message" };
      obj.T = function T() {
        return MediumUser$Type(outer2_1[7]).StringValue;
      };
      items[6] = obj;
      obj1 = { no: 8, name: "phone", kind: "message" };
      obj1.T = function T() {
        return MediumUser$Type(outer2_1[7]).StringValue;
      };
      items[7] = obj1;
      items1 = ["discord_protos.users.v1.MediumUser"];
      items1[1] = items;
      return outer1_48(this, MediumUser$Type, items1);
    }
  }
  callback3(MediumUser$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { id: "0", username: "", discriminator: 0, bot: false, flags: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, MediumUser$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = MediumUser$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = MediumUser$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp37 = outer1_1;
          let StringValue3 = MediumUser$Type(outer1_1[7]).StringValue;
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
          let tmp32 = outer1_1;
          let StringValue2 = MediumUser$Type(outer1_1[7]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.email = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.email);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (8 === tmp7) {
          let tmp26 = MediumUser$Type;
          let tmp27 = outer1_1;
          let StringValue = MediumUser$Type(outer1_1[7]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = MediumUser$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(id, tag, writeUnknownFields) {
      if ("0" !== id.id) {
        tag.tag(1, MediumUser$Type(outer1_1[6]).WireType.Bit64).fixed64(id.id);
        const tagResult = tag.tag(1, MediumUser$Type(outer1_1[6]).WireType.Bit64);
      }
      if ("" !== id.username) {
        tag.tag(2, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).string(id.username);
        const tagResult1 = tag.tag(2, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (0 !== id.discriminator) {
        tag.tag(3, MediumUser$Type(outer1_1[6]).WireType.Varint).uint32(id.discriminator);
        const tagResult2 = tag.tag(3, MediumUser$Type(outer1_1[6]).WireType.Varint);
      }
      if (id.avatarHash) {
        const StringValue = MediumUser$Type(outer1_1[7]).StringValue;
        const tagResult3 = tag.tag(4, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = StringValue.internalBinaryWrite(id.avatarHash, tag.tag(4, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== id.bot) {
        tag.tag(5, MediumUser$Type(outer1_1[6]).WireType.Varint).bool(id.bot);
        const tagResult4 = tag.tag(5, MediumUser$Type(outer1_1[6]).WireType.Varint);
      }
      if ("0" !== id.flags) {
        tag.tag(6, MediumUser$Type(outer1_1[6]).WireType.Varint).uint64(id.flags);
        const tagResult5 = tag.tag(6, MediumUser$Type(outer1_1[6]).WireType.Varint);
      }
      if (id.email) {
        const StringValue2 = MediumUser$Type(outer1_1[7]).StringValue;
        const tagResult6 = tag.tag(7, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue2.internalBinaryWrite(id.email, tag.tag(7, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (id.phone) {
        const StringValue3 = MediumUser$Type(outer1_1[7]).StringValue;
        const tagResult7 = tag.tag(8, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue3.internalBinaryWrite(id.phone, tag.tag(8, MediumUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = MediumUser$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, id, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(MediumUser$Type, items);
})(require("module_1284").MessageType);
tmp6 = new tmp6();
let tmp8 = ((MessageType) => {
  class UserAvatarDecoration$Type {
    constructor() {
      tmp = outer1_3(this, UserAvatarDecoration$Type);
      items = [, , ];
      items[0] = { no: 1, name: "asset", kind: "scalar", T: 9 };
      obj = { no: 2, name: "sku_id", kind: "message" };
      obj.T = function T() {
        return UserAvatarDecoration$Type(outer2_1[7]).UInt64Value;
      };
      items[1] = obj;
      obj = { no: 3, name: "expires_at", kind: "message" };
      obj.T = function T() {
        return UserAvatarDecoration$Type(outer2_1[7]).UInt32Value;
      };
      items[2] = obj;
      items1 = ["discord_protos.users.v1.UserAvatarDecoration"];
      items1[1] = items;
      return outer1_48(this, UserAvatarDecoration$Type, items1);
    }
  }
  callback3(UserAvatarDecoration$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { asset: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserAvatarDecoration$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserAvatarDecoration$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserAvatarDecoration$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.asset = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp31 = UserAvatarDecoration$Type;
          let tmp32 = outer1_1;
          let UInt64Value = UserAvatarDecoration$Type(outer1_1[7]).UInt64Value;
          let tmp33 = UInt64Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp26 = UserAvatarDecoration$Type;
          let tmp27 = outer1_1;
          let UInt32Value = UserAvatarDecoration$Type(outer1_1[7]).UInt32Value;
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
                let tmp13 = outer1_1;
                onRead = UserAvatarDecoration$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(asset, tag, writeUnknownFields) {
      if ("" !== asset.asset) {
        tag.tag(1, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited).string(asset.asset);
        const tagResult = tag.tag(1, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (asset.skuId) {
        const UInt64Value = UserAvatarDecoration$Type(outer1_1[7]).UInt64Value;
        const tagResult1 = tag.tag(2, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(2, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (asset.expiresAt) {
        const UInt32Value = UserAvatarDecoration$Type(outer1_1[7]).UInt32Value;
        const tagResult2 = tag.tag(3, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = UInt32Value.internalBinaryWrite(asset.expiresAt, tag.tag(3, UserAvatarDecoration$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserAvatarDecoration$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserAvatarDecoration$Type, items);
})(require("module_1284").MessageType);
tmp8 = new tmp8();
let closure_22 = tmp8;
let tmp10 = ((MessageType) => {
  class UserNameplate$Type {
    constructor() {
      tmp = outer1_3(this, UserNameplate$Type);
      items = [, , , , ];
      items[0] = { no: 1, name: "asset", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "palette", kind: "scalar", T: 9 };
      obj = { no: 3, name: "sku_id", kind: "message" };
      obj.T = function T() {
        return UserNameplate$Type(outer2_1[7]).UInt64Value;
      };
      items[2] = obj;
      obj = { no: 4, name: "expires_at", kind: "message" };
      obj.T = function T() {
        return UserNameplate$Type(outer2_1[9]).Timestamp;
      };
      items[3] = obj;
      items[4] = { no: 5, name: "label", kind: "scalar", T: 9 };
      items1 = ["discord_protos.users.v1.UserNameplate"];
      items1[1] = items;
      return outer1_48(this, UserNameplate$Type, items1);
    }
  }
  callback3(UserNameplate$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { asset: "", palette: "", label: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserNameplate$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserNameplate$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserNameplate$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp32 = outer1_1;
          let UInt64Value = UserNameplate$Type(outer1_1[7]).UInt64Value;
          let tmp33 = UInt64Value;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.skuId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.skuId);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = UserNameplate$Type;
          let tmp27 = outer1_1;
          let Timestamp = UserNameplate$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = UserNameplate$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(asset, tag, writeUnknownFields) {
      if ("" !== asset.asset) {
        tag.tag(1, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).string(asset.asset);
        const tagResult = tag.tag(1, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== asset.palette) {
        tag.tag(2, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).string(asset.palette);
        const tagResult1 = tag.tag(2, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (asset.skuId) {
        const UInt64Value = UserNameplate$Type(outer1_1[7]).UInt64Value;
        const tagResult2 = tag.tag(3, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(asset.skuId, tag.tag(3, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (asset.expiresAt) {
        const Timestamp = UserNameplate$Type(outer1_1[9]).Timestamp;
        const tagResult3 = tag.tag(4, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(asset.expiresAt, tag.tag(4, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("" !== asset.label) {
        tag.tag(5, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited).string(asset.label);
        const tagResult4 = tag.tag(5, UserNameplate$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserNameplate$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, asset, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserNameplate$Type, items);
})(require("module_1284").MessageType);
tmp10 = new tmp10();
let closure_23 = tmp10;
let tmp12 = ((MessageType) => {
  class DisplayNameStyles$Type {
    constructor() {
      tmp = outer1_3(this, DisplayNameStyles$Type);
      obj = { no: 1, name: "font_id", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.DisplayNameFont", outer2_9, "DISPLAY_NAME_FONT_"];
        return items;
      };
      items = [, , , ];
      items[0] = obj;
      obj = { no: 2, name: "effect_id", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.DisplayNameEffect", outer2_10, "DISPLAY_NAME_EFFECT_"];
        return items;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "colors", kind: "scalar", repeat: 1, T: 13 };
      obj1 = { no: 4, name: "animated", kind: "message" };
      obj1.T = function T() {
        return DisplayNameStyles$Type(outer2_1[7]).BoolValue;
      };
      items[3] = obj1;
      items1 = ["discord_protos.users.v1.DisplayNameStyles"];
      items1[1] = items;
      return outer1_48(this, DisplayNameStyles$Type, items1);
    }
  }
  callback3(DisplayNameStyles$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { fontId: 0, effectId: 0, colors: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, DisplayNameStyles$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = DisplayNameStyles$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = DisplayNameStyles$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
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
          let tmp34 = outer1_1;
          if (tmp9 === DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited) {
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
          let tmp29 = outer1_1;
          let BoolValue = DisplayNameStyles$Type(outer1_1[7]).BoolValue;
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
                let tmp15 = outer1_1;
                onRead = DisplayNameStyles$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
        tag.tag(1, DisplayNameStyles$Type(outer1_1[6]).WireType.Varint).int32(fontId.fontId);
        const tagResult = tag.tag(1, DisplayNameStyles$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== fontId.effectId) {
        tag.tag(2, DisplayNameStyles$Type(outer1_1[6]).WireType.Varint).int32(fontId.effectId);
        const tagResult1 = tag.tag(2, DisplayNameStyles$Type(outer1_1[6]).WireType.Varint);
      }
      if (fontId.colors.length) {
        tag.tag(3, DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num7 = 0;
        if (0 < fontId.colors.length) {
          do {
            let uint32Result = tag.uint32(fontId.colors[num7]);
            num7 = num7 + 1;
            length = fontId.colors.length;
          } while (num7 < length);
        }
        const joined = tag.join();
        const tagResult2 = tag.tag(3, DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (fontId.animated) {
        const BoolValue = DisplayNameStyles$Type(outer1_1[7]).BoolValue;
        const tagResult3 = tag.tag(4, DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = BoolValue.internalBinaryWrite(fontId.animated, tag.tag(4, DisplayNameStyles$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = DisplayNameStyles$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, fontId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(DisplayNameStyles$Type, items);
})(require("module_1284").MessageType);
tmp12 = new tmp12();
let closure_24 = tmp12;
let tmp14 = ((MessageType) => {
  class UserCollectibles$Type {
    constructor() {
      tmp = outer1_3(this, UserCollectibles$Type);
      obj = { no: 1, name: "nameplate", kind: "message" };
      obj.T = function T() {
        return outer2_23;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.UserCollectibles"];
      items1[1] = items;
      return outer1_48(this, UserCollectibles$Type, items1);
    }
  }
  callback3(UserCollectibles$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserCollectibles$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserCollectibles$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserCollectibles$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = outer1_23;
          let tmp27 = outer1_23;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.nameplate = outer1_23.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.nameplate);
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
                let tmp13 = outer1_1;
                onRead = UserCollectibles$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(nameplate, tag, writeUnknownFields) {
      if (nameplate.nameplate) {
        const tagResult = tag.tag(1, UserCollectibles$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_23.internalBinaryWrite(nameplate.nameplate, tag.tag(1, UserCollectibles$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_23.internalBinaryWrite(nameplate.nameplate, tag.tag(1, UserCollectibles$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserCollectibles$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, nameplate, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserCollectibles$Type, items);
})(require("module_1284").MessageType);
tmp14 = new tmp14();
let closure_25 = tmp14;
let tmp16 = ((MessageType) => {
  class UserPrimaryGuild$Type {
    constructor() {
      tmp = outer1_3(this, UserPrimaryGuild$Type);
      obj = { no: 1, name: "identity_guild_id", kind: "message" };
      obj.T = function T() {
        return UserPrimaryGuild$Type(outer2_1[7]).UInt64Value;
      };
      items = [, , , ];
      items[0] = obj;
      obj = { no: 2, name: "identity_enabled", kind: "message" };
      obj.T = function T() {
        return UserPrimaryGuild$Type(outer2_1[7]).BoolValue;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "tag", kind: "message" };
      obj1.T = function T() {
        return UserPrimaryGuild$Type(outer2_1[7]).StringValue;
      };
      items[2] = obj1;
      obj2 = { no: 4, name: "badge", kind: "message" };
      obj2.T = function T() {
        return UserPrimaryGuild$Type(outer2_1[7]).StringValue;
      };
      items[3] = obj2;
      items1 = ["discord_protos.users.v1.UserPrimaryGuild"];
      items1[1] = items;
      return outer1_48(this, UserPrimaryGuild$Type, items1);
    }
  }
  callback3(UserPrimaryGuild$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserPrimaryGuild$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserPrimaryGuild$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserPrimaryGuild$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp41 = UserPrimaryGuild$Type;
          let tmp42 = outer1_1;
          let UInt64Value = UserPrimaryGuild$Type(outer1_1[7]).UInt64Value;
          let tmp43 = UInt64Value;
          let tmp44 = pos;
          let tmp45 = readUnknownField;
          obj.identityGuildId = UInt64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityGuildId);
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp36 = UserPrimaryGuild$Type;
          let tmp37 = outer1_1;
          let BoolValue = UserPrimaryGuild$Type(outer1_1[7]).BoolValue;
          let tmp38 = BoolValue;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.identityEnabled = BoolValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.identityEnabled);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp31 = UserPrimaryGuild$Type;
          let tmp32 = outer1_1;
          let StringValue2 = UserPrimaryGuild$Type(outer1_1[7]).StringValue;
          let tmp33 = StringValue2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.tag = StringValue2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.tag);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp26 = UserPrimaryGuild$Type;
          let tmp27 = outer1_1;
          let StringValue = UserPrimaryGuild$Type(outer1_1[7]).StringValue;
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
                let tmp13 = outer1_1;
                onRead = UserPrimaryGuild$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(identityGuildId, tag, writeUnknownFields) {
      if (identityGuildId.identityGuildId) {
        const UInt64Value = UserPrimaryGuild$Type(outer1_1[7]).UInt64Value;
        const tagResult = tag.tag(1, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(identityGuildId.identityGuildId, tag.tag(1, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.identityEnabled) {
        const BoolValue = UserPrimaryGuild$Type(outer1_1[7]).BoolValue;
        const tagResult1 = tag.tag(2, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = BoolValue.internalBinaryWrite(identityGuildId.identityEnabled, tag.tag(2, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.tag) {
        const StringValue = UserPrimaryGuild$Type(outer1_1[7]).StringValue;
        const tagResult2 = tag.tag(3, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = StringValue.internalBinaryWrite(identityGuildId.tag, tag.tag(3, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (identityGuildId.badge) {
        const StringValue2 = UserPrimaryGuild$Type(outer1_1[7]).StringValue;
        const tagResult3 = tag.tag(4, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = StringValue2.internalBinaryWrite(identityGuildId.badge, tag.tag(4, UserPrimaryGuild$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserPrimaryGuild$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, identityGuildId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserPrimaryGuild$Type, items);
})(require("module_1284").MessageType);
tmp16 = new tmp16();
let closure_26 = tmp16;
let tmp18 = ((MessageType) => {
  class ScheduleRule$Type {
    constructor() {
      tmp = outer1_3(this, ScheduleRule$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "rule_id", kind: "scalar", T: 9 };
      items[1] = { no: 2, name: "label", kind: "scalar", T: 9 };
      obj = { no: 3, name: "start_time", kind: "message" };
      obj.T = function T() {
        return outer2_21;
      };
      items[2] = obj;
      obj = { no: 4, name: "end_time", kind: "message" };
      obj.T = function T() {
        return outer2_21;
      };
      items[3] = obj;
      obj1 = { no: 5, name: "days", kind: "enum", repeat: 1 };
      obj1.T = function T() {
        const items = ["discord_protos.users.v1.DayOfWeek", outer2_8];
        return items;
      };
      items[4] = obj1;
      items[5] = { no: 6, name: "enabled", kind: "scalar", T: 8 };
      items1 = ["discord_protos.users.v1.ScheduleRule"];
      items1[1] = items;
      return outer1_48(this, ScheduleRule$Type, items1);
    }
  }
  callback3(ScheduleRule$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { ruleId: "", label: "", days: [], enabled: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, ScheduleRule$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = ScheduleRule$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = ScheduleRule$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
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
          let tmp37 = outer1_21;
          let tmp38 = outer1_21;
          let tmp39 = pos;
          let tmp40 = readUnknownField;
          obj.startTime = outer1_21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startTime);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (4 === tmp8) {
          let tmp33 = outer1_21;
          let tmp34 = outer1_21;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.endTime = outer1_21.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endTime);
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (5 === tmp8) {
          let tmp28 = ScheduleRule$Type;
          let tmp29 = outer1_1;
          if (tmp9 === ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited) {
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
                let tmp15 = outer1_1;
                onRead = ScheduleRule$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
        tag.tag(1, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).string(ruleId.ruleId);
        const tagResult = tag.tag(1, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("" !== ruleId.label) {
        tag.tag(2, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).string(ruleId.label);
        const tagResult1 = tag.tag(2, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (ruleId.startTime) {
        const tagResult2 = tag.tag(3, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_21.internalBinaryWrite(ruleId.startTime, tag.tag(3, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_21.internalBinaryWrite(ruleId.startTime, tag.tag(3, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (ruleId.endTime) {
        const tagResult3 = tag.tag(4, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_21.internalBinaryWrite(ruleId.endTime, tag.tag(4, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_21.internalBinaryWrite(ruleId.endTime, tag.tag(4, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (ruleId.days.length) {
        tag.tag(5, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num11 = 0;
        if (0 < ruleId.days.length) {
          do {
            let int32Result = tag.int32(ruleId.days[num11]);
            num11 = num11 + 1;
            length = ruleId.days.length;
          } while (num11 < length);
        }
        const joined2 = tag.join();
        const tagResult4 = tag.tag(5, ScheduleRule$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (false !== ruleId.enabled) {
        tag.tag(6, ScheduleRule$Type(outer1_1[6]).WireType.Varint).bool(ruleId.enabled);
        const tagResult5 = tag.tag(6, ScheduleRule$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = ScheduleRule$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, ruleId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(ScheduleRule$Type, items);
})(require("module_1284").MessageType);
tmp18 = new tmp18();
let closure_27 = tmp18;
let tmp20 = ((MessageType) => {
  class RestrictedSchedule$Type {
    constructor() {
      tmp = outer1_3(this, RestrictedSchedule$Type);
      obj = { no: 1, name: "rules", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_27;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.RestrictedSchedule"];
      items1[1] = items;
      return outer1_48(this, RestrictedSchedule$Type, items1);
    }
  }
  callback3(RestrictedSchedule$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { rules: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RestrictedSchedule$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RestrictedSchedule$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RestrictedSchedule$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let rules = obj.rules;
          let tmp26 = outer1_27;
          let arr = rules.push(outer1_27.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                let tmp13 = outer1_1;
                onRead = RestrictedSchedule$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp = outer1_27;
          let tmp2 = RestrictedSchedule$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, RestrictedSchedule$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_27.internalBinaryWrite(rules.rules[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = rules.rules.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RestrictedSchedule$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, rules, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RestrictedSchedule$Type, items);
})(require("module_1284").MessageType);
tmp20 = new tmp20();
let closure_28 = tmp20;
let tmp22 = ((MessageType) => {
  class CrossPlatformRestriction$Type {
    constructor() {
      tmp = outer1_3(this, CrossPlatformRestriction$Type);
      obj = { no: 1, name: "restriction_expiry", kind: "message" };
      obj.T = function T() {
        return CrossPlatformRestriction$Type(outer2_1[9]).Timestamp;
      };
      items = [, ];
      items[0] = obj;
      items[1] = { no: 2, name: "application_id", kind: "scalar", T: 6 };
      items1 = ["discord_protos.users.v1.CrossPlatformRestriction"];
      items1[1] = items;
      return outer1_48(this, CrossPlatformRestriction$Type, items1);
    }
  }
  callback3(CrossPlatformRestriction$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { applicationId: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, CrossPlatformRestriction$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = CrossPlatformRestriction$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = CrossPlatformRestriction$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = CrossPlatformRestriction$Type;
          let tmp27 = outer1_1;
          let Timestamp = CrossPlatformRestriction$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = CrossPlatformRestriction$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(restrictionExpiry, tag, writeUnknownFields) {
      if (restrictionExpiry.restrictionExpiry) {
        const Timestamp = CrossPlatformRestriction$Type(outer1_1[9]).Timestamp;
        const tagResult = tag.tag(1, CrossPlatformRestriction$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, CrossPlatformRestriction$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(restrictionExpiry.restrictionExpiry, tag.tag(1, CrossPlatformRestriction$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("0" !== restrictionExpiry.applicationId) {
        tag.tag(2, CrossPlatformRestriction$Type(outer1_1[6]).WireType.Bit64).fixed64(restrictionExpiry.applicationId);
        const tagResult1 = tag.tag(2, CrossPlatformRestriction$Type(outer1_1[6]).WireType.Bit64);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = CrossPlatformRestriction$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, restrictionExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(CrossPlatformRestriction$Type, items);
})(require("module_1284").MessageType);
tmp22 = new tmp22();
let closure_29 = tmp22;
let tmp24 = ((MessageType) => {
  class BadgeCommon$Type {
    constructor() {
      tmp = outer1_3(this, BadgeCommon$Type);
      obj = { no: 1, name: "obtained_at", kind: "message" };
      obj.T = function T() {
        return BadgeCommon$Type(outer2_1[9]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.BadgeCommon"];
      items1[1] = items;
      return outer1_48(this, BadgeCommon$Type, items1);
    }
  }
  callback3(BadgeCommon$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, BadgeCommon$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = BadgeCommon$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = BadgeCommon$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = BadgeCommon$Type;
          let tmp27 = outer1_1;
          let Timestamp = BadgeCommon$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = BadgeCommon$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(obtainedAt, tag, writeUnknownFields) {
      if (obtainedAt.obtainedAt) {
        const Timestamp = BadgeCommon$Type(outer1_1[9]).Timestamp;
        const tagResult = tag.tag(1, BadgeCommon$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, BadgeCommon$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(obtainedAt.obtainedAt, tag.tag(1, BadgeCommon$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = BadgeCommon$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, obtainedAt, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(BadgeCommon$Type, items);
})(require("module_1284").MessageType);
tmp24 = new tmp24();
let closure_30 = tmp24;
let tmp26 = ((MessageType) => {
  class AprilFools2026Badge$Type {
    constructor() {
      tmp = outer1_3(this, AprilFools2026Badge$Type);
      obj = { no: 1, name: "common", kind: "message" };
      obj.T = function T() {
        return outer2_30;
      };
      items = [, , ];
      items[0] = obj;
      items[1] = { no: 2, name: "level", kind: "scalar", T: 5 };
      items[2] = { no: 3, name: "combat_class", kind: "scalar", T: 9 };
      items1 = ["discord_protos.users.v1.AprilFools2026Badge"];
      items1[1] = items;
      return outer1_48(this, AprilFools2026Badge$Type, items1);
    }
  }
  callback3(AprilFools2026Badge$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { level: 0, combatClass: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AprilFools2026Badge$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AprilFools2026Badge$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AprilFools2026Badge$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = outer1_30;
          let tmp27 = outer1_30;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.common = outer1_30.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.common);
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
                let tmp13 = outer1_1;
                onRead = AprilFools2026Badge$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(common, tag, writeUnknownFields) {
      if (common.common) {
        const tagResult = tag.tag(1, AprilFools2026Badge$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_30.internalBinaryWrite(common.common, tag.tag(1, AprilFools2026Badge$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_30.internalBinaryWrite(common.common, tag.tag(1, AprilFools2026Badge$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== common.level) {
        tag.tag(2, AprilFools2026Badge$Type(outer1_1[6]).WireType.Varint).int32(common.level);
        const tagResult1 = tag.tag(2, AprilFools2026Badge$Type(outer1_1[6]).WireType.Varint);
      }
      if ("" !== common.combatClass) {
        tag.tag(3, AprilFools2026Badge$Type(outer1_1[6]).WireType.LengthDelimited).string(common.combatClass);
        const tagResult2 = tag.tag(3, AprilFools2026Badge$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AprilFools2026Badge$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, common, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AprilFools2026Badge$Type, items);
})(require("module_1284").MessageType);
tmp26 = new tmp26();
let closure_31 = tmp26;
let tmp28 = ((MessageType) => {
  class Badge$Type {
    constructor() {
      tmp = outer1_3(this, Badge$Type);
      obj = { no: 1, name: "april_fools_2026", kind: "message", oneof: "badge" };
      obj.T = function T() {
        return outer2_31;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.Badge"];
      items1[1] = items;
      return outer1_48(this, Badge$Type, items1);
    }
  }
  callback3(Badge$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { badge: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Badge$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Badge$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Badge$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj = { oneofKind: "aprilFools2026" };
          let tmp26 = outer1_31;
          let tmp27 = outer1_31;
          let tmp28 = pos;
          let tmp29 = readUnknownField;
          obj.aprilFools2026 = outer1_31.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.badge.aprilFools2026);
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
                let tmp13 = outer1_1;
                onRead = Badge$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(badge, tag, writeUnknownFields) {
      if ("aprilFools2026" === badge.badge.oneofKind) {
        const tagResult = tag.tag(1, Badge$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = outer1_31.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, Badge$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_31.internalBinaryWrite(badge.badge.aprilFools2026, tag.tag(1, Badge$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Badge$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, badge, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(Badge$Type, items);
})(require("module_1284").MessageType);
tmp28 = new tmp28();
let closure_32 = tmp28;
let tmp30 = ((MessageType) => {
  class UserBadges$Type {
    constructor() {
      tmp = outer1_3(this, UserBadges$Type);
      obj = { no: 1, name: "badges", kind: "message", repeat: 1 };
      obj.T = function T() {
        return outer2_32;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.UserBadges"];
      items1[1] = items;
      return outer1_48(this, UserBadges$Type, items1);
    }
  }
  callback3(UserBadges$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { badges: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserBadges$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserBadges$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserBadges$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let badges = obj.badges;
          let tmp26 = outer1_32;
          let arr = badges.push(outer1_32.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                let tmp13 = outer1_1;
                onRead = UserBadges$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp = outer1_32;
          let tmp2 = UserBadges$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, UserBadges$Type(outer1_1[6]).WireType.LengthDelimited);
          let internalBinaryWriteResult = outer1_32.internalBinaryWrite(badges.badges[num], tagResult.fork(), writeUnknownFields);
          let joined = internalBinaryWriteResult.join();
          num = num + 1;
          length = badges.badges.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserBadges$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, badges, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(UserBadges$Type, items);
})(require("module_1284").MessageType);
tmp30 = new tmp30();
let closure_33 = tmp30;
let tmp32 = ((MessageType) => {
  class AnonymizationInfo$Type {
    constructor() {
      tmp = outer1_3(this, AnonymizationInfo$Type);
      obj = { no: 1, name: "status", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.AnonymizationStatus", outer2_11, "ANONYMIZATION_STATUS_"];
        return items;
      };
      items = [, ];
      items[0] = obj;
      obj = { no: 2, name: "anon_user_id", kind: "message" };
      obj.T = function T() {
        return AnonymizationInfo$Type(outer2_1[7]).UInt64Value;
      };
      items[1] = obj;
      items1 = ["discord_protos.users.v1.AnonymizationInfo"];
      items1[1] = items;
      return outer1_48(this, AnonymizationInfo$Type, items1);
    }
  }
  callback3(AnonymizationInfo$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { status: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AnonymizationInfo$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AnonymizationInfo$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AnonymizationInfo$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.status = pos.int32();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = AnonymizationInfo$Type;
          let tmp27 = outer1_1;
          let UInt64Value = AnonymizationInfo$Type(outer1_1[7]).UInt64Value;
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
                let tmp13 = outer1_1;
                onRead = AnonymizationInfo$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(status, tag, writeUnknownFields) {
      if (0 !== status.status) {
        tag.tag(1, AnonymizationInfo$Type(outer1_1[6]).WireType.Varint).int32(status.status);
        const tagResult = tag.tag(1, AnonymizationInfo$Type(outer1_1[6]).WireType.Varint);
      }
      if (status.anonUserId) {
        const UInt64Value = AnonymizationInfo$Type(outer1_1[7]).UInt64Value;
        const tagResult1 = tag.tag(2, AnonymizationInfo$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, AnonymizationInfo$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = UInt64Value.internalBinaryWrite(status.anonUserId, tag.tag(2, AnonymizationInfo$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AnonymizationInfo$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, status, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AnonymizationInfo$Type, items);
})(require("module_1284").MessageType);
tmp32 = new tmp32();
let closure_34 = tmp32;
let tmp34 = ((MessageType) => {
  class UserData$Type {
    constructor() {
      tmp = outer1_3(this, UserData$Type);
      obj = { no: 1, name: "linked_users", kind: "map", K: 6 };
      obj = {
        kind: "message",
        T() {
              return outer2_36;
            }
      };
      obj.V = obj;
      items = [, , , , , , , , , , , , , , , , , ];
      items[0] = obj;
      obj1 = { no: 2, name: "safety_feature_limits", kind: "map", K: 13 };
      obj1.V = {
        kind: "message",
        T() {
              return outer2_38;
            }
      };
      items[1] = obj1;
      obj2 = { no: 3, name: "safety_flags", kind: "map", K: 13 };
      obj2.V = {
        kind: "message",
        T() {
              return outer2_39;
            }
      };
      items[2] = obj2;
      obj3 = { no: 4, name: "quest", kind: "message" };
      obj3.T = function T() {
        return outer2_40;
      };
      items[3] = obj3;
      obj4 = { no: 5, name: "primary_guild", kind: "message" };
      obj4.T = function T() {
        return outer2_26;
      };
      items[4] = obj4;
      obj5 = { no: 6, name: "cross_platform_restriction", kind: "message" };
      obj5.T = function T() {
        return outer2_29;
      };
      items[5] = obj5;
      obj6 = { no: 7, name: "collectibles", kind: "message" };
      obj6.T = function T() {
        return outer2_25;
      };
      items[6] = obj6;
      obj7 = { no: 8, name: "safety_state", kind: "message" };
      obj7.T = function T() {
        return UserData$Type(outer2_1[8]).SafetyState;
      };
      items[7] = obj7;
      obj8 = { no: 9, name: "premium_state", kind: "message" };
      obj8.T = function T() {
        return outer2_41;
      };
      items[8] = obj8;
      obj9 = { no: 10, name: "display_name_styles", kind: "message" };
      obj9.T = function T() {
        return outer2_24;
      };
      items[9] = obj9;
      obj10 = { no: 11, name: "store_country", kind: "message" };
      obj10.T = function T() {
        return outer2_42;
      };
      items[10] = obj10;
      obj11 = { no: 12, name: "restricted_schedule", kind: "message" };
      obj11.T = function T() {
        return outer2_28;
      };
      items[11] = obj11;
      obj12 = { no: 13, name: "age_assurance_data", kind: "message" };
      obj12.T = function T() {
        return outer2_35;
      };
      items[12] = obj12;
      obj13 = { no: 14, name: "perks", kind: "message" };
      obj13.T = function T() {
        return outer2_46;
      };
      items[13] = obj13;
      obj14 = { no: 15, name: "badges", kind: "message" };
      obj14.T = function T() {
        return outer2_33;
      };
      items[14] = obj14;
      obj15 = { no: 16, name: "country_data", kind: "message" };
      obj15.T = function T() {
        return outer2_47;
      };
      items[15] = obj15;
      items[16] = { no: 17, name: "is_pending_required_action", kind: "scalar", T: 8 };
      obj16 = { no: 18, name: "anonymization_info", kind: "message" };
      obj16.T = function T() {
        return outer2_34;
      };
      items[17] = obj16;
      items1 = ["discord_protos.users.v1.UserData"];
      items1[1] = items;
      return outer1_48(this, UserData$Type, items1);
    }
  }
  callback3(UserData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { linkedUsers: {}, safetyFeatureLimits: {}, safetyFlags: {}, isPendingRequiredAction: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserData$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserData$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserData$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , , , , ];
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
        obj.anonymizationInfo = outer1_34.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2, obj.anonymizationInfo);
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let str2 = pos.fixed64();
            let str = str2.toString();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_36;
            internalBinaryReadResult = outer1_36.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_36.create();
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_38;
            internalBinaryReadResult = outer1_38.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_38.create();
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_39;
            internalBinaryReadResult = outer1_39.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_39.create();
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
          let tmp2 = UserData$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, UserData$Type(outer1_1[6]).WireType.Bit64);
          let fixed64Result = tagResult1.fixed64(tmp);
          let tagResult2 = tag.tag(2, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_36;
          let internalBinaryWriteResult = outer1_36.internalBinaryWrite(linkedUsers.linkedUsers[tmp], tag, writeUnknownFields);
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
          let tmp10 = UserData$Type;
          let tmp11 = outer1_1;
          let tagResult3 = tag.tag(2, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tagResult4 = forkResult2.tag(1, UserData$Type(outer1_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult4.uint32(parseInt(tmp9));
          let tagResult5 = tag.tag(2, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult3 = tagResult5.fork();
          let tmp14 = outer1_38;
          let internalBinaryWriteResult1 = outer1_38.internalBinaryWrite(linkedUsers.safetyFeatureLimits[tmp9], tag, writeUnknownFields);
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
          let tmp18 = UserData$Type;
          let tmp19 = outer1_1;
          let tagResult6 = tag.tag(3, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult4 = tagResult6.fork();
          let tagResult7 = forkResult4.tag(1, UserData$Type(outer1_1[6]).WireType.Varint);
          let _parseInt2 = parseInt;
          let uint32Result1 = tagResult7.uint32(parseInt(tmp17));
          let tagResult8 = tag.tag(2, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult5 = tagResult8.fork();
          let tmp22 = outer1_39;
          let internalBinaryWriteResult2 = outer1_39.internalBinaryWrite(linkedUsers.safetyFlags[tmp17], tag, writeUnknownFields);
          let joined4 = tag.join();
          let joined5 = joined4.join();
          num3 = num3 + 1;
          length3 = keys2.length;
        } while (num3 < length3);
      }
      if (linkedUsers.quest) {
        const tagResult9 = tag.tag(4, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined6 = outer1_40.internalBinaryWrite(linkedUsers.quest, tag.tag(4, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult3 = outer1_40.internalBinaryWrite(linkedUsers.quest, tag.tag(4, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.primaryGuild) {
        const tagResult10 = tag.tag(5, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined7 = outer1_26.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult4 = outer1_26.internalBinaryWrite(linkedUsers.primaryGuild, tag.tag(5, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.crossPlatformRestriction) {
        const tagResult11 = tag.tag(6, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined8 = outer1_29.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult5 = outer1_29.internalBinaryWrite(linkedUsers.crossPlatformRestriction, tag.tag(6, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.collectibles) {
        const tagResult12 = tag.tag(7, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined9 = outer1_25.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult6 = outer1_25.internalBinaryWrite(linkedUsers.collectibles, tag.tag(7, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.safetyState) {
        const SafetyState = UserData$Type(outer1_1[8]).SafetyState;
        const tagResult13 = tag.tag(8, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined10 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult7 = SafetyState.internalBinaryWrite(linkedUsers.safetyState, tag.tag(8, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.premiumState) {
        const tagResult14 = tag.tag(9, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined11 = outer1_41.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult8 = outer1_41.internalBinaryWrite(linkedUsers.premiumState, tag.tag(9, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.displayNameStyles) {
        const tagResult15 = tag.tag(10, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined12 = outer1_24.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult9 = outer1_24.internalBinaryWrite(linkedUsers.displayNameStyles, tag.tag(10, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.storeCountry) {
        const tagResult16 = tag.tag(11, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined13 = outer1_42.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult10 = outer1_42.internalBinaryWrite(linkedUsers.storeCountry, tag.tag(11, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.restrictedSchedule) {
        const tagResult17 = tag.tag(12, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined14 = outer1_28.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult11 = outer1_28.internalBinaryWrite(linkedUsers.restrictedSchedule, tag.tag(12, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.ageAssuranceData) {
        const tagResult18 = tag.tag(13, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined15 = outer1_35.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult12 = outer1_35.internalBinaryWrite(linkedUsers.ageAssuranceData, tag.tag(13, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.perks) {
        const tagResult19 = tag.tag(14, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined16 = outer1_46.internalBinaryWrite(linkedUsers.perks, tag.tag(14, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult13 = outer1_46.internalBinaryWrite(linkedUsers.perks, tag.tag(14, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.badges) {
        const tagResult20 = tag.tag(15, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined17 = outer1_33.internalBinaryWrite(linkedUsers.badges, tag.tag(15, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult14 = outer1_33.internalBinaryWrite(linkedUsers.badges, tag.tag(15, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (linkedUsers.countryData) {
        const tagResult21 = tag.tag(16, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined18 = outer1_47.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult15 = outer1_47.internalBinaryWrite(linkedUsers.countryData, tag.tag(16, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (false !== linkedUsers.isPendingRequiredAction) {
        tag.tag(17, UserData$Type(outer1_1[6]).WireType.Varint).bool(linkedUsers.isPendingRequiredAction);
        const tagResult22 = tag.tag(17, UserData$Type(outer1_1[6]).WireType.Varint);
      }
      if (linkedUsers.anonymizationInfo) {
        const tagResult23 = tag.tag(18, UserData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined19 = outer1_34.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult16 = outer1_34.internalBinaryWrite(linkedUsers.anonymizationInfo, tag.tag(18, UserData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserData$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, linkedUsers, tag);
      }
      return tag;
    }
  };
  return callback(UserData$Type, items);
})(require("module_1284").MessageType);
tmp34 = new tmp34();
let tmp36 = ((MessageType) => {
  class AgeAssuranceData$Type {
    constructor() {
      tmp = outer1_3(this, AgeAssuranceData$Type);
      obj = { no: 1, name: "estimated_date_of_birth", kind: "message" };
      obj.T = function T() {
        return AgeAssuranceData$Type(outer2_1[9]).Timestamp;
      };
      items = [, , , , , , ];
      items[0] = obj;
      obj = { no: 2, name: "method", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.AgeAssuranceMethod", outer2_12, "AGE_ASSURANCE_METHOD_"];
        return items;
      };
      items[1] = obj;
      items[2] = { no: 3, name: "method_version", kind: "scalar", T: 5 };
      obj1 = { no: 4, name: "vendor", kind: "enum" };
      obj1.T = function T() {
        const items = ["discord_protos.users.v1.AgeAssuranceVendor", outer2_13, "AGE_ASSURANCE_VENDOR_"];
        return items;
      };
      items[3] = obj1;
      obj2 = { no: 5, name: "verified_at", kind: "message" };
      obj2.T = function T() {
        return AgeAssuranceData$Type(outer2_1[9]).Timestamp;
      };
      items[4] = obj2;
      obj3 = { no: 6, name: "estimated_age_group", kind: "enum" };
      obj3.T = function T() {
        const items = ["discord_protos.users.v1.AgeAssuranceGroup", outer2_14];
        return items;
      };
      items[5] = obj3;
      items[6] = { no: 7, name: "is_regional_adult", kind: "scalar", T: 8 };
      items1 = ["discord_protos.users.v1.AgeAssuranceData"];
      items1[1] = items;
      return outer1_48(this, AgeAssuranceData$Type, items1);
    }
  }
  callback3(AgeAssuranceData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { method: 0, methodVersion: 0, vendor: 0, estimatedAgeGroup: 0, isRegionalAdult: false };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, AgeAssuranceData$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = AgeAssuranceData$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = AgeAssuranceData$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp31 = AgeAssuranceData$Type;
          let tmp32 = outer1_1;
          let Timestamp2 = AgeAssuranceData$Type(outer1_1[9]).Timestamp;
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
          let tmp27 = outer1_1;
          let Timestamp = AgeAssuranceData$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = AgeAssuranceData$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(estimatedDateOfBirth, tag, writeUnknownFields) {
      if (estimatedDateOfBirth.estimatedDateOfBirth) {
        const Timestamp = AgeAssuranceData$Type(outer1_1[9]).Timestamp;
        const tagResult = tag.tag(1, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(estimatedDateOfBirth.estimatedDateOfBirth, tag.tag(1, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== estimatedDateOfBirth.method) {
        tag.tag(2, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint).int32(estimatedDateOfBirth.method);
        const tagResult1 = tag.tag(2, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== estimatedDateOfBirth.methodVersion) {
        tag.tag(3, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint).int32(estimatedDateOfBirth.methodVersion);
        const tagResult2 = tag.tag(3, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== estimatedDateOfBirth.vendor) {
        tag.tag(4, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint).int32(estimatedDateOfBirth.vendor);
        const tagResult3 = tag.tag(4, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint);
      }
      if (estimatedDateOfBirth.verifiedAt) {
        const Timestamp2 = AgeAssuranceData$Type(outer1_1[9]).Timestamp;
        const tagResult4 = tag.tag(5, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(estimatedDateOfBirth.verifiedAt, tag.tag(5, AgeAssuranceData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (0 !== estimatedDateOfBirth.estimatedAgeGroup) {
        tag.tag(6, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint).int32(estimatedDateOfBirth.estimatedAgeGroup);
        const tagResult5 = tag.tag(6, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint);
      }
      if (false !== estimatedDateOfBirth.isRegionalAdult) {
        tag.tag(7, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint).bool(estimatedDateOfBirth.isRegionalAdult);
        const tagResult6 = tag.tag(7, AgeAssuranceData$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = AgeAssuranceData$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, estimatedDateOfBirth, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(AgeAssuranceData$Type, items);
})(require("module_1284").MessageType);
tmp36 = new tmp36();
let closure_35 = tmp36;
let tmp38 = ((MessageType) => {
  class LinkedUser$Type {
    constructor() {
      tmp = outer1_3(this, LinkedUser$Type);
      items = [, , , , , ];
      items[0] = { no: 1, name: "user_id", kind: "scalar", T: 6 };
      obj = { no: 2, name: "link_type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.UserLinkType", outer2_15];
        return items;
      };
      items[1] = obj;
      obj = { no: 3, name: "link_status", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.UserLinkStatus", outer2_16];
        return items;
      };
      items[2] = obj;
      items[3] = { no: 4, name: "requestor_id", kind: "scalar", T: 6 };
      obj1 = { no: 5, name: "created_at", kind: "message" };
      obj1.T = function T() {
        return LinkedUser$Type(outer2_1[9]).Timestamp;
      };
      items[4] = obj1;
      obj2 = { no: 6, name: "updated_at", kind: "message" };
      obj2.T = function T() {
        return LinkedUser$Type(outer2_1[9]).Timestamp;
      };
      items[5] = obj2;
      items1 = ["discord_protos.users.v1.LinkedUser"];
      items1[1] = items;
      return outer1_48(this, LinkedUser$Type, items1);
    }
  }
  callback3(LinkedUser$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { userId: "0", linkType: 0, linkStatus: 0, requestorId: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, LinkedUser$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = LinkedUser$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = LinkedUser$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
          let tmp32 = outer1_1;
          let Timestamp2 = LinkedUser$Type(outer1_1[9]).Timestamp;
          let tmp33 = Timestamp2;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.createdAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.createdAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (6 === tmp7) {
          let tmp26 = LinkedUser$Type;
          let tmp27 = outer1_1;
          let Timestamp = LinkedUser$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = LinkedUser$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(userId, tag, writeUnknownFields) {
      if ("0" !== userId.userId) {
        tag.tag(1, LinkedUser$Type(outer1_1[6]).WireType.Bit64).fixed64(userId.userId);
        const tagResult = tag.tag(1, LinkedUser$Type(outer1_1[6]).WireType.Bit64);
      }
      if (0 !== userId.linkType) {
        tag.tag(2, LinkedUser$Type(outer1_1[6]).WireType.Varint).int32(userId.linkType);
        const tagResult1 = tag.tag(2, LinkedUser$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== userId.linkStatus) {
        tag.tag(3, LinkedUser$Type(outer1_1[6]).WireType.Varint).int32(userId.linkStatus);
        const tagResult2 = tag.tag(3, LinkedUser$Type(outer1_1[6]).WireType.Varint);
      }
      if ("0" !== userId.requestorId) {
        tag.tag(4, LinkedUser$Type(outer1_1[6]).WireType.Bit64).fixed64(userId.requestorId);
        const tagResult3 = tag.tag(4, LinkedUser$Type(outer1_1[6]).WireType.Bit64);
      }
      if (userId.createdAt) {
        const Timestamp = LinkedUser$Type(outer1_1[9]).Timestamp;
        const tagResult4 = tag.tag(5, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(userId.createdAt, tag.tag(5, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (userId.updatedAt) {
        const Timestamp2 = LinkedUser$Type(outer1_1[9]).Timestamp;
        const tagResult5 = tag.tag(6, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp2.internalBinaryWrite(userId.updatedAt, tag.tag(6, LinkedUser$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = LinkedUser$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, userId, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(LinkedUser$Type, items);
})(require("module_1284").MessageType);
tmp38 = new tmp38();
let closure_36 = tmp38;
let tmp40 = ((MessageType) => {
  class RateLimitData$Type {
    constructor() {
      tmp = outer1_3(this, RateLimitData$Type);
      obj = { no: 1, name: "limit_expiry", kind: "message" };
      obj.T = function T() {
        return RateLimitData$Type(outer2_1[9]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.RateLimitData"];
      items1[1] = items;
      return outer1_48(this, RateLimitData$Type, items1);
    }
  }
  callback3(RateLimitData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, RateLimitData$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = RateLimitData$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = RateLimitData$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = RateLimitData$Type;
          let tmp27 = outer1_1;
          let Timestamp = RateLimitData$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = RateLimitData$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(limitExpiry, tag, writeUnknownFields) {
      if (limitExpiry.limitExpiry) {
        const Timestamp = RateLimitData$Type(outer1_1[9]).Timestamp;
        const tagResult = tag.tag(1, RateLimitData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, RateLimitData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(limitExpiry.limitExpiry, tag.tag(1, RateLimitData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = RateLimitData$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, limitExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(RateLimitData$Type, items);
})(require("module_1284").MessageType);
tmp40 = new tmp40();
let closure_37 = tmp40;
let tmp42 = ((MessageType) => {
  class FeatureLimits$Type {
    constructor() {
      tmp = outer1_3(this, FeatureLimits$Type);
      obj = { no: 1, name: "map", kind: "map", K: 13 };
      obj = {
        kind: "message",
        T() {
              return outer2_37;
            }
      };
      obj.V = obj;
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.FeatureLimits"];
      items1[1] = items;
      return outer1_48(this, FeatureLimits$Type, items1);
    }
  }
  callback3(FeatureLimits$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { map: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, FeatureLimits$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = FeatureLimits$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = FeatureLimits$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp4 = outer1_2;
        let tmp5 = outer1_2(pos.tag(), 2);
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
                let tmp12 = outer1_1;
                onRead = FeatureLimits$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp2 = tmp9;
        tmp3 = tmp10;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_37;
            internalBinaryReadResult = outer1_37.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_37.create();
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
          let tmp2 = FeatureLimits$Type;
          let tmp3 = outer1_1;
          let tagResult = tag.tag(1, FeatureLimits$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult.fork();
          let tagResult1 = forkResult.tag(1, FeatureLimits$Type(outer1_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult1.uint32(parseInt(tmp));
          let tagResult2 = tag.tag(2, FeatureLimits$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult2.fork();
          let tmp6 = outer1_37;
          let internalBinaryWriteResult = outer1_37.internalBinaryWrite(arg0.map[tmp], tag, writeUnknownFields);
          let joined = tag.join();
          let joined1 = joined.join();
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = FeatureLimits$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, arg0, tag);
      }
      return tag;
    }
  };
  return callback(FeatureLimits$Type, items);
})(require("module_1284").MessageType);
tmp42 = new tmp42();
let closure_38 = tmp42;
let tmp44 = ((MessageType) => {
  class SafetyFlag$Type {
    constructor() {
      tmp = outer1_3(this, SafetyFlag$Type);
      obj = { no: 1, name: "flag_expiry", kind: "message" };
      obj.T = function T() {
        return SafetyFlag$Type(outer2_1[9]).Timestamp;
      };
      items = [];
      items[0] = obj;
      items1 = ["discord_protos.users.v1.SafetyFlag"];
      items1[1] = items;
      return outer1_48(this, SafetyFlag$Type, items1);
    }
  }
  callback3(SafetyFlag$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = {};
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, SafetyFlag$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = SafetyFlag$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = SafetyFlag$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          let tmp26 = SafetyFlag$Type;
          let tmp27 = outer1_1;
          let Timestamp = SafetyFlag$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = SafetyFlag$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(flagExpiry, tag, writeUnknownFields) {
      if (flagExpiry.flagExpiry) {
        const Timestamp = SafetyFlag$Type(outer1_1[9]).Timestamp;
        const tagResult = tag.tag(1, SafetyFlag$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, SafetyFlag$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(flagExpiry.flagExpiry, tag.tag(1, SafetyFlag$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = SafetyFlag$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, flagExpiry, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(SafetyFlag$Type, items);
})(require("module_1284").MessageType);
tmp44 = new tmp44();
let closure_39 = tmp44;
let tmp46 = ((MessageType) => {
  class GuildShardingConfig$Type {
    constructor() {
      tmp = outer1_3(this, GuildShardingConfig$Type);
      items = [];
      items[0] = { no: 1, name: "shards", kind: "scalar", repeat: 1, T: 5 };
      items1 = ["discord_protos.users.v1.GuildShardingConfig"];
      items1[1] = items;
      return outer1_48(this, GuildShardingConfig$Type, items1);
    }
  }
  callback3(GuildShardingConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { shards: [] };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, GuildShardingConfig$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = GuildShardingConfig$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = GuildShardingConfig$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp28 = GuildShardingConfig$Type;
          let tmp29 = outer1_1;
          if (tmp9 === GuildShardingConfig$Type(outer1_1[6]).WireType.LengthDelimited) {
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
                let tmp15 = outer1_1;
                onRead = GuildShardingConfig$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
        tag.tag(1, GuildShardingConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < shards.shards.length) {
          do {
            let int32Result = tag.int32(shards.shards[num3]);
            num3 = num3 + 1;
            length = shards.shards.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, GuildShardingConfig$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = GuildShardingConfig$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, shards, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(GuildShardingConfig$Type, items);
})(require("module_1284").MessageType);
tmp46 = new tmp46();
let tmp48 = ((MessageType) => {
  class QuestMetadata$Type {
    constructor() {
      tmp = outer1_3(this, QuestMetadata$Type);
      items = [];
      items[0] = { no: 1, name: "quests_completed", kind: "scalar", T: 13 };
      items1 = ["discord_protos.users.v1.QuestMetadata"];
      items1[1] = items;
      return outer1_48(this, QuestMetadata$Type, items1);
    }
  }
  callback3(QuestMetadata$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { questsCompleted: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, QuestMetadata$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = QuestMetadata$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = QuestMetadata$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = QuestMetadata$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(questsCompleted, tag, writeUnknownFields) {
      if (0 !== questsCompleted.questsCompleted) {
        tag.tag(1, QuestMetadata$Type(outer1_1[6]).WireType.Varint).uint32(questsCompleted.questsCompleted);
        const tagResult = tag.tag(1, QuestMetadata$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = QuestMetadata$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, questsCompleted, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(QuestMetadata$Type, items);
})(require("module_1284").MessageType);
tmp48 = new tmp48();
let closure_40 = tmp48;
let tmp50 = ((MessageType) => {
  class PremiumState$Type {
    constructor() {
      tmp = outer1_3(this, PremiumState$Type);
      obj = { no: 1, name: "premium_source", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.PremiumSource", outer2_17, "PREMIUM_SOURCE_"];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "premium_subscription_type", kind: "enum" };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.PremiumSubscriptionType", outer2_18, "PREMIUM_SUBSCRIPTION_TYPE_"];
        return items;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "premium_subscription_group_role", kind: "enum" };
      obj1.T = function T() {
        const items = ["discord_protos.users.v1.PremiumSubscriptionGroupRole", outer2_19, "PREMIUM_SUBSCRIPTION_GROUP_ROLE_"];
        return items;
      };
      items[2] = obj1;
      items1 = ["discord_protos.users.v1.PremiumState"];
      items1[1] = items;
      return outer1_48(this, PremiumState$Type, items1);
    }
  }
  callback3(PremiumState$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { premiumSource: 0, premiumSubscriptionType: 0, premiumSubscriptionGroupRole: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PremiumState$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PremiumState$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PremiumState$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = PremiumState$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(premiumSource, tag, writeUnknownFields) {
      if (0 !== premiumSource.premiumSource) {
        tag.tag(1, PremiumState$Type(outer1_1[6]).WireType.Varint).int32(premiumSource.premiumSource);
        const tagResult = tag.tag(1, PremiumState$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== premiumSource.premiumSubscriptionType) {
        tag.tag(2, PremiumState$Type(outer1_1[6]).WireType.Varint).int32(premiumSource.premiumSubscriptionType);
        const tagResult1 = tag.tag(2, PremiumState$Type(outer1_1[6]).WireType.Varint);
      }
      if (0 !== premiumSource.premiumSubscriptionGroupRole) {
        tag.tag(3, PremiumState$Type(outer1_1[6]).WireType.Varint).int32(premiumSource.premiumSubscriptionGroupRole);
        const tagResult2 = tag.tag(3, PremiumState$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PremiumState$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, premiumSource, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PremiumState$Type, items);
})(require("module_1284").MessageType);
tmp50 = new tmp50();
let closure_41 = tmp50;
let tmp52 = ((MessageType) => {
  class StoreCountry$Type {
    constructor() {
      tmp = outer1_3(this, StoreCountry$Type);
      items = [, ];
      items[0] = { no: 1, name: "country", kind: "scalar", T: 9 };
      obj = { no: 2, name: "set_at", kind: "message" };
      obj.T = function T() {
        return StoreCountry$Type(outer2_1[9]).Timestamp;
      };
      items[1] = obj;
      items1 = ["discord_protos.users.v1.StoreCountry"];
      items1[1] = items;
      return outer1_48(this, StoreCountry$Type, items1);
    }
  }
  callback3(StoreCountry$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { country: "" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, StoreCountry$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = StoreCountry$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = StoreCountry$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.country = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp26 = StoreCountry$Type;
          let tmp27 = outer1_1;
          let Timestamp = StoreCountry$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = StoreCountry$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(country, tag, writeUnknownFields) {
      if ("" !== country.country) {
        tag.tag(1, StoreCountry$Type(outer1_1[6]).WireType.LengthDelimited).string(country.country);
        const tagResult = tag.tag(1, StoreCountry$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (country.setAt) {
        const Timestamp = StoreCountry$Type(outer1_1[9]).Timestamp;
        const tagResult1 = tag.tag(2, StoreCountry$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, StoreCountry$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(country.setAt, tag.tag(2, StoreCountry$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = StoreCountry$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, country, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(StoreCountry$Type, items);
})(require("module_1284").MessageType);
tmp52 = new tmp52();
let closure_42 = tmp52;
let tmp54 = ((MessageType) => {
  class PerkConfig$Type {
    constructor() {
      tmp = outer1_3(this, PerkConfig$Type);
      obj = { no: 1, name: "source", kind: "enum", repeat: 1 };
      obj.T = function T() {
        const items = ["discord_protos.users.v1.PerkSource", outer2_20];
        return items;
      };
      items = [, , ];
      items[0] = obj;
      obj = { no: 2, name: "increased_file_upload_size", kind: "message", oneof: "kind" };
      obj.T = function T() {
        return outer2_44;
      };
      items[1] = obj;
      obj1 = { no: 3, name: "increased_guild_limit", kind: "message", oneof: "kind" };
      obj1.T = function T() {
        return outer2_45;
      };
      items[2] = obj1;
      items1 = ["discord_protos.users.v1.PerkConfig"];
      items1[1] = items;
      return outer1_48(this, PerkConfig$Type, items1);
    }
  }
  callback3(PerkConfig$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { source: [], kind: { oneofKind: undefined } };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfig$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfig$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfig$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp36 = PerkConfig$Type;
          let tmp37 = outer1_1;
          if (tmp9 === PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited) {
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
          let tmp32 = outer1_44;
          let tmp33 = outer1_44;
          let tmp34 = pos;
          let tmp35 = readUnknownField;
          obj.increasedFileUploadSize = outer1_44.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedFileUploadSize);
          obj.kind = obj;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp5;
        } else if (3 === tmp8) {
          obj = { oneofKind: "increasedGuildLimit" };
          let tmp28 = outer1_45;
          let tmp29 = outer1_45;
          let tmp30 = pos;
          let tmp31 = readUnknownField;
          obj.increasedGuildLimit = outer1_45.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.kind.increasedGuildLimit);
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
                let tmp15 = outer1_1;
                onRead = PerkConfig$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
        tag.tag(1, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < source.source.length) {
          do {
            let int32Result = tag.int32(source.source[num3]);
            num3 = num3 + 1;
            length = source.source.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if ("increasedFileUploadSize" === source.kind.oneofKind) {
        const tagResult1 = tag.tag(2, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = outer1_44.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = outer1_44.internalBinaryWrite(source.kind.increasedFileUploadSize, tag.tag(2, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if ("increasedGuildLimit" === source.kind.oneofKind) {
        const tagResult2 = tag.tag(3, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = outer1_45.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = outer1_45.internalBinaryWrite(source.kind.increasedGuildLimit, tag.tag(3, PerkConfig$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfig$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, source, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfig$Type, items);
})(require("module_1284").MessageType);
tmp54 = new tmp54();
let closure_43 = tmp54;
let tmp56 = ((MessageType) => {
  class PerkConfigIncreasedFileUploadSize$Type {
    constructor() {
      tmp = outer1_3(this, PerkConfigIncreasedFileUploadSize$Type);
      items = [];
      items[0] = { no: 1, name: "max_size", kind: "scalar", T: 4 };
      items1 = ["discord_protos.users.v1.PerkConfigIncreasedFileUploadSize"];
      items1[1] = items;
      return outer1_48(this, PerkConfigIncreasedFileUploadSize$Type, items1);
    }
  }
  callback3(PerkConfigIncreasedFileUploadSize$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { maxSize: "0" };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(maxSize, tag, writeUnknownFields) {
      if ("0" !== maxSize.maxSize) {
        tag.tag(1, PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).WireType.Varint).uint64(maxSize.maxSize);
        const tagResult = tag.tag(1, PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfigIncreasedFileUploadSize$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, maxSize, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfigIncreasedFileUploadSize$Type, items);
})(require("module_1284").MessageType);
tmp56 = new tmp56();
let closure_44 = tmp56;
let tmp58 = ((MessageType) => {
  class PerkConfigIncreasedGuildLimit$Type {
    constructor() {
      tmp = outer1_3(this, PerkConfigIncreasedGuildLimit$Type);
      items = [];
      items[0] = { no: 1, name: "max_guilds", kind: "scalar", T: 13 };
      items1 = ["discord_protos.users.v1.PerkConfigIncreasedGuildLimit"];
      items1[1] = items;
      return outer1_48(this, PerkConfigIncreasedGuildLimit$Type, items1);
    }
  }
  callback3(PerkConfigIncreasedGuildLimit$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { maxGuilds: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = PerkConfigIncreasedGuildLimit$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
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
                let tmp13 = outer1_1;
                onRead = PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
      }
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "internalBinaryWrite",
    value(maxGuilds, tag, writeUnknownFields) {
      if (0 !== maxGuilds.maxGuilds) {
        tag.tag(1, PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).WireType.Varint).uint32(maxGuilds.maxGuilds);
        const tagResult = tag.tag(1, PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).WireType.Varint);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = PerkConfigIncreasedGuildLimit$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, maxGuilds, tag);
      }
      return tag;
    }
  };
  items[2] = obj;
  return callback(PerkConfigIncreasedGuildLimit$Type, items);
})(require("module_1284").MessageType);
tmp58 = new tmp58();
let closure_45 = tmp58;
let tmp60 = ((MessageType) => {
  class Perks$Type {
    constructor() {
      tmp = outer1_3(this, Perks$Type);
      items = [, , , ];
      items[0] = { no: 1, name: "active_perks_bitmask", kind: "scalar", repeat: 1, T: 4 };
      obj = { no: 2, name: "config_by_perk", kind: "map", K: 13 };
      obj = {
        kind: "message",
        T() {
              return outer2_43;
            }
      };
      obj.V = obj;
      items[1] = obj;
      items[2] = { no: 3, name: "rules_version", kind: "scalar", T: 13 };
      obj1 = { no: 4, name: "updated_at", kind: "message" };
      obj1.T = function T() {
        return Perks$Type(outer2_1[9]).Timestamp;
      };
      items[3] = obj1;
      items1 = ["discord_protos.users.v1.Perks"];
      items1[1] = items;
      return outer1_48(this, Perks$Type, items1);
    }
  }
  callback3(Perks$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { activePerksBitmask: [], configByPerk: {}, rulesVersion: 0 };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, Perks$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = Perks$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = Perks$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp6 = outer1_2;
        let tmp7 = outer1_2(pos.tag(), 2);
        [tmp8, tmp9] = tmp7;
        if (1 === tmp8) {
          let tmp34 = Perks$Type;
          let tmp35 = outer1_1;
          if (tmp9 === Perks$Type(outer1_1[6]).WireType.LengthDelimited) {
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
          let tmp29 = outer1_1;
          let Timestamp = Perks$Type(outer1_1[9]).Timestamp;
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
                let tmp15 = outer1_1;
                onRead = Perks$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp11;
        tmp4 = tmp12;
        tmp5 = tmp13;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10021] = tmp7;
          if (1 === tmp8) {
            let uint32Result = pos.uint32();
            let internalBinaryReadResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            let tmp14 = outer1_43;
            internalBinaryReadResult = outer1_43.internalBinaryRead(pos, pos.uint32(), binaryReadOptionsResult2);
          }
          tmp3 = internalBinaryReadResult;
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
        obj = outer1_43.create();
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
        tag.tag(1, Perks$Type(outer1_1[6]).WireType.LengthDelimited).fork();
        let num3 = 0;
        if (0 < activePerksBitmask.activePerksBitmask.length) {
          do {
            let uint64Result = tag.uint64(activePerksBitmask.activePerksBitmask[num3]);
            num3 = num3 + 1;
            length = activePerksBitmask.activePerksBitmask.length;
          } while (num3 < length);
        }
        const joined = tag.join();
        const tagResult = tag.tag(1, Perks$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      const keys = Object.keys(activePerksBitmask.configByPerk);
      let num4 = 0;
      if (0 < keys.length) {
        do {
          let tmp6 = keys[num4];
          let tmp7 = Perks$Type;
          let tmp8 = outer1_1;
          let tagResult1 = tag.tag(2, Perks$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult1 = tagResult1.fork();
          let tagResult2 = forkResult1.tag(1, Perks$Type(outer1_1[6]).WireType.Varint);
          let _parseInt = parseInt;
          let uint32Result = tagResult2.uint32(parseInt(tmp6));
          let tagResult3 = tag.tag(2, Perks$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult2 = tagResult3.fork();
          let tmp11 = outer1_43;
          let internalBinaryWriteResult = outer1_43.internalBinaryWrite(activePerksBitmask.configByPerk[tmp6], tag, writeUnknownFields);
          let joined1 = tag.join();
          let joined2 = joined1.join();
          num4 = num4 + 1;
          length2 = keys.length;
        } while (num4 < length2);
      }
      if (0 !== activePerksBitmask.rulesVersion) {
        tag.tag(3, Perks$Type(outer1_1[6]).WireType.Varint).uint32(activePerksBitmask.rulesVersion);
        const tagResult4 = tag.tag(3, Perks$Type(outer1_1[6]).WireType.Varint);
      }
      if (activePerksBitmask.updatedAt) {
        const Timestamp = Perks$Type(outer1_1[9]).Timestamp;
        const tagResult5 = tag.tag(4, Perks$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined3 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, Perks$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = Timestamp.internalBinaryWrite(activePerksBitmask.updatedAt, tag.tag(4, Perks$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = Perks$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, activePerksBitmask, tag);
      }
      return tag;
    }
  };
  return callback(Perks$Type, items);
})(require("module_1284").MessageType);
tmp60 = new tmp60();
let closure_46 = tmp60;
let tmp62 = ((MessageType) => {
  class UserCountryData$Type {
    constructor() {
      tmp = outer1_3(this, UserCountryData$Type);
      items = [, , , , ];
      items[0] = { no: 1, name: "calculated_country", kind: "scalar", T: 9 };
      obj = { no: 2, name: "last_calculated_at", kind: "message" };
      obj.T = function T() {
        return UserCountryData$Type(outer2_1[9]).Timestamp;
      };
      items[1] = obj;
      obj = { no: 3, name: "country_override", kind: "message" };
      obj.T = function T() {
        return UserCountryData$Type(outer2_1[7]).StringValue;
      };
      items[2] = obj;
      obj1 = { no: 4, name: "override_set_at", kind: "message" };
      obj1.T = function T() {
        return UserCountryData$Type(outer2_1[9]).Timestamp;
      };
      items[3] = obj1;
      obj2 = { no: 5, name: "country_scores", kind: "map", K: 9 };
      obj2.V = { kind: "scalar", T: 2 };
      items[4] = obj2;
      items1 = ["discord_protos.users.v1.UserCountryData"];
      items1[1] = items;
      return outer1_48(this, UserCountryData$Type, items1);
    }
  }
  callback3(UserCountryData$Type, MessageType);
  let obj = {
    key: "create",
    value(arr) {
      let obj = { calculatedCountry: "", countryScores: {} };
      const _Object = Object;
      obj = { enumerable: false, value: this };
      _Object.defineProperty(obj, UserCountryData$Type(outer1_1[6]).MESSAGE_TYPE, obj);
      if (undefined !== arr) {
        const result = UserCountryData$Type(outer1_1[6]).reflectionMergePartial(this, obj, arr);
        const obj3 = UserCountryData$Type(outer1_1[6]);
      }
      return obj;
    }
  };
  let items = [obj, , , ];
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
        let tmp5 = outer1_2;
        let tmp6 = outer1_2(pos.tag(), 2);
        [tmp7, tmp8] = tmp6;
        if (1 === tmp7) {
          obj.calculatedCountry = pos.string();
          let tmp10 = tmp3;
          let tmp11 = tmp4;
        } else if (2 === tmp7) {
          let tmp37 = UserCountryData$Type;
          let tmp38 = outer1_1;
          let Timestamp2 = UserCountryData$Type(outer1_1[9]).Timestamp;
          let tmp39 = Timestamp2;
          let tmp40 = pos;
          let tmp41 = readUnknownField;
          obj.lastCalculatedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.lastCalculatedAt);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (3 === tmp7) {
          let tmp32 = UserCountryData$Type;
          let tmp33 = outer1_1;
          let StringValue = UserCountryData$Type(outer1_1[7]).StringValue;
          let tmp34 = StringValue;
          let tmp35 = pos;
          let tmp36 = readUnknownField;
          obj.countryOverride = StringValue.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.countryOverride);
          tmp10 = tmp3;
          tmp11 = tmp4;
        } else if (4 === tmp7) {
          let tmp27 = UserCountryData$Type;
          let tmp28 = outer1_1;
          let Timestamp = UserCountryData$Type(outer1_1[9]).Timestamp;
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
                let tmp13 = outer1_1;
                onRead = UserCountryData$Type(outer1_1[6]).UnknownFieldHandler.onRead;
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
        tmp3 = tmp10;
        tmp4 = tmp11;
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
          let tmp6 = outer1_2;
          let tmp7 = outer1_2(pos.tag(), 2);
          [tmp8, r10020] = tmp7;
          if (1 === tmp8) {
            let stringResult = pos.string();
            let floatResult = tmp3;
          } else if (2 !== tmp8) {
            break;
          } else {
            floatResult = pos.float();
          }
          tmp3 = floatResult;
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
        tag.tag(1, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).string(calculatedCountry.calculatedCountry);
        const tagResult = tag.tag(1, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
      }
      if (calculatedCountry.lastCalculatedAt) {
        const Timestamp = UserCountryData$Type(outer1_1[9]).Timestamp;
        const tagResult1 = tag.tag(2, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult = Timestamp.internalBinaryWrite(calculatedCountry.lastCalculatedAt, tag.tag(2, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (calculatedCountry.countryOverride) {
        const StringValue = UserCountryData$Type(outer1_1[7]).StringValue;
        const tagResult2 = tag.tag(3, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult1 = StringValue.internalBinaryWrite(calculatedCountry.countryOverride, tag.tag(3, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      if (calculatedCountry.overrideSetAt) {
        const Timestamp2 = UserCountryData$Type(outer1_1[9]).Timestamp;
        const tagResult3 = tag.tag(4, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
        const joined2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields).join();
        const internalBinaryWriteResult2 = Timestamp2.internalBinaryWrite(calculatedCountry.overrideSetAt, tag.tag(4, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited).fork(), writeUnknownFields);
      }
      const keys = Object.keys(calculatedCountry.countryScores);
      let num12 = 0;
      if (0 < keys.length) {
        do {
          let tmp13 = keys[num12];
          let tmp14 = UserCountryData$Type;
          let tmp15 = outer1_1;
          let tagResult4 = tag.tag(5, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
          let forkResult = tagResult4.fork();
          let tagResult5 = forkResult.tag(1, UserCountryData$Type(outer1_1[6]).WireType.LengthDelimited);
          let stringResult1 = tagResult5.string(tmp13);
          let tagResult6 = stringResult1.tag(2, UserCountryData$Type(outer1_1[6]).WireType.Bit32);
          let floatResult = tagResult6.float(calculatedCountry.countryScores[tmp13]);
          let joined3 = floatResult.join();
          num12 = num12 + 1;
          length = keys.length;
        } while (num12 < length);
      }
      let onWrite = writeUnknownFields.writeUnknownFields;
      if (false !== onWrite) {
        if (1 == onWrite) {
          onWrite = UserCountryData$Type(outer1_1[6]).UnknownFieldHandler.onWrite;
        }
        const self = this;
        onWrite(this.typeName, calculatedCountry, tag);
      }
      return tag;
    }
  };
  return callback(UserCountryData$Type, items);
})(require("module_1284").MessageType);
tmp62 = new tmp62();
let closure_47 = tmp62;
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx");

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
