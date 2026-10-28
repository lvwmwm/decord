// Module ID: 16664
// Function ID: 16665
// Name: orbs_arcade_game_state
// Dependencies: [32, 1209, 1238, 1239, 2]

// Module 16664 (orbs_arcade_game_state)
import _mod1209 from "module_1209" /* 1209 */;
import timestamp from "timestamp" /* 1238 */;
import wrappers from "wrappers" /* 1239 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2, internalBinaryWrite3;

let obj4;
let tmp;
let tmp2;
let tmp3;
let tmp4;
const T2 = function T() {
  return require("timestamp").Timestamp;
};
const T3 = function T() {
  return require("timestamp").Timestamp;
};
const T4 = function T() {
  const items = ["discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeStatus", obj2, "ORBS_ARCADE_CHARGE_STATUS_"];
  return items;
};
const T5 = function T() {
  return require("timestamp").Timestamp;
};
const T6 = function T() {
  return require("wrappers").Int64Value;
};
const T7 = function T() {
  return require("timestamp").Timestamp;
};
const T8 = function T() {
  return require("timestamp").Timestamp;
};
const T9 = function T() {
  return object;
};
const OrbsArcadeChargeType = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", FREE: 1, [1]: "FREE", VIRTUAL_CURRENCY: 2, [2]: "VIRTUAL_CURRENCY" };
let obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PENDING: 1, [1]: "PENDING", ERRORED: 2, [2]: "ERRORED", CONFIRMED: 3, [3]: "CONFIRMED" };
const MessageType = _mod1209.MessageType;
class OrbsArcadeRun$Type extends MessageType {
  constructor() {
    let items = [{ no: 1, name: "id", kind: "scalar", T: 6 }, { no: 2, name: "started_at", kind: "message", T: T2 }, { no: 3, name: "ended_at", kind: "message", T: T3 }, { no: 4, name: "score", kind: "scalar", T: 13 }, , ];
    const obj = { no: 5, name: "charge_type", kind: "enum", T };
    class T {
      constructor() {
        items = ["discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeType"];
        items[1] = closure_1_3;
        items[2] = "ORBS_ARCADE_CHARGE_TYPE_";
        return items;
      }
    }
    items[4] = obj;
    items[5] = { no: 6, name: "charge_status", kind: "enum", T: T4 };
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRun", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { id: "0", score: 0, chargeType: 0, chargeStatus: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1209;
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
          let str4 = pos.fixed64();
          obj.id = str4.toString();
        } else if (2 === tmp5) {
          let Timestamp2 = timestamp.Timestamp;
          obj.startedAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startedAt);
        } else if (3 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.endedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.endedAt);
        } else if (4 === tmp5) {
          obj.score = pos.uint32();
        } else if (5 === tmp5) {
          obj.chargeType = pos.int32();
        } else if (6 === tmp5) {
          obj.chargeStatus = pos.int32();
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
                onRead = _mod1209.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(id, tag, writeUnknownFields) {
    if ("0" !== id.id) {
      const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
      tagResult.fixed64(id.id);
    }
    if (id.startedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const startedAt = id.startedAt;
      const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(startedAt, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (id.endedAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const endedAt = id.endedAt;
      const tagResult2 = tag.tag(3, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(endedAt, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (0 !== id.score) {
      const tagResult3 = tag.tag(4, _mod1209.WireType.Varint);
      tagResult3.uint32(id.score);
    }
    if (0 !== id.chargeType) {
      const tagResult4 = tag.tag(5, _mod1209.WireType.Varint);
      tagResult4.int32(id.chargeType);
    }
    if (0 !== id.chargeStatus) {
      const tagResult5 = tag.tag(6, _mod1209.WireType.Varint);
      tagResult5.int32(id.chargeStatus);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1209.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, id, tag);
    }
    return tag;
  }
}
const prototype = OrbsArcadeRun$Type.prototype;
let items = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  { no: 2, name: "started_at", kind: "message", T: T2 },
  { no: 3, name: "ended_at", kind: "message", T: T3 },
  { no: 4, name: "score", kind: "scalar", T: 13 },
  {
    no: 5,
    name: "charge_type",
    kind: "enum",
    T() {
      const items = ["discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeChargeType", OrbsArcadeChargeType, "ORBS_ARCADE_CHARGE_TYPE_"];
      return items;
    }
  },
  { no: 6, name: "charge_status", kind: "enum", T: T4 }
];
const object = new Object("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRun", items, tmp4, tmp3, "create", tmp2, tmp, "internalBinaryRead", "internalBinaryWrite", OrbsArcadeRun$Type, require, dependencyMap);
const MessageType2 = _mod1209.MessageType;
class OrbsArcadeRewardGrant$Type extends MessageType2 {
  constructor() {
    const items = [{ no: 1, name: "id", kind: "scalar", T: 6 }, { no: 2, name: "pending_at", kind: "message", T: T5 }, , ];
    const obj = { no: 3, name: "claimed_at", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[2]).Timestamp;
      }
    }
    items[2] = obj;
    items[3] = { no: 4, name: "source_run_id", kind: "message", T: T6 };
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRewardGrant", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { id: "0" };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1209;
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
          let str4 = pos.fixed64();
          obj.id = str4.toString();
        } else if (2 === tmp5) {
          let Timestamp2 = timestamp.Timestamp;
          obj.pendingAt = Timestamp2.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.pendingAt);
        } else if (3 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.claimedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.claimedAt);
        } else if (4 === tmp5) {
          let Int64Value = wrappers.Int64Value;
          obj.sourceRunId = Int64Value.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.sourceRunId);
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
                onRead = _mod1209.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(id, tag, writeUnknownFields) {
    if ("0" !== id.id) {
      const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
      tagResult.fixed64(id.id);
    }
    if (id.pendingAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const pendingAt = id.pendingAt;
      const tagResult1 = tag.tag(2, _mod1209.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(pendingAt, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (id.claimedAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const claimedAt = id.claimedAt;
      const tagResult2 = tag.tag(3, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(claimedAt, tagResult2.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (id.sourceRunId) {
      const Int64Value = wrappers.Int64Value;
      internalBinaryWrite3 = Int64Value.internalBinaryWrite;
      const sourceRunId = id.sourceRunId;
      const tagResult3 = tag.tag(4, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(sourceRunId, tagResult3.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1209.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, id, tag);
    }
    return tag;
  }
}
const prototype2 = OrbsArcadeRewardGrant$Type.prototype;
const items1 = [
  { no: 1, name: "id", kind: "scalar", T: 6 },
  { no: 2, name: "pending_at", kind: "message", T: T5 },
  {
    no: 3,
    name: "claimed_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    }
  },
  { no: 4, name: "source_run_id", kind: "message", T: T6 }
];
let tmp5 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeRewardGrant", items1, tmp4, OrbsArcadeRewardGrant$Type, "create", tmp2, tmp, "internalBinaryRead", "internalBinaryWrite", undefined, require, dependencyMap, OrbsArcadeChargeType, obj2, object, items1, this, exports);
const metroRequire = tmp5;
const MessageType3 = _mod1209.MessageType;
class OrbsArcadeGameState$Type extends MessageType3 {
  constructor() {
    const items = [{ no: 1, name: "user_id", kind: "scalar", T: 6 }, { no: 2, name: "game_id", kind: "scalar", T: 6 }, { no: 3, name: "game_version_id", kind: "scalar", T: 6 }, { no: 4, name: "enrolled_at", kind: "message", T: T7 }, { no: 5, name: "expires_at", kind: "message", T: T8 }, { no: 6, name: "current_run", kind: "message", T: T9 }, , , , ];
    const obj = { no: 7, name: "reward_grants", kind: "map", K: 6, V: obj2 };
    obj2 = { kind: "message", T };
    class T {
      constructor() {
        return closure_1_6;
      }
    }
    items[6] = obj;
    items[7] = { no: 8, name: "num_free_plays_used", kind: "scalar", T: 13 };
    items[8] = { no: 9, name: "enrollment_high_score", kind: "scalar", T: 13 };
    items[9] = { no: 10, name: "all_time_high_score", kind: "scalar", T: 13 };
    const tmp2 = new tmp("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState", items, T);
    return tmp2;
  }
  create(partialSettings) {
    const obj = { userId: "0", gameId: "0", gameVersionId: "0", rewardGrants: {}, numFreePlaysUsed: 0, enrollmentHighScore: 0, allTimeHighScore: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1209.MESSAGE_TYPE, obj2);
    if (undefined !== partialSettings) {
      const tmpResult = _mod1209;
      const result = tmpResult.reflectionMergePartial(this, obj, partialSettings);
    }
    return obj;
  }
  internalBinaryRead(pos, arg1, arg2, arg3) {
    const self = this;
    let obj = arg3;
    if (arg3 == null) {
      obj = self.create();
    }
    if (pos.pos < pos.pos + arg1) {
      [r10019, r10020] = pos.tag();
      _slicedToArray(pos.tag(), 2);
    }
    return obj;
  }
  binaryReadMap7(arg0, pos, arg2) {
    let tmp2;
    let tmp3;
    let tmp7;
    const sum = pos.pos + pos.uint32();
    let obj;
    let str;
    if (pos.pos < sum) {
      while (true) {
        let internalBinaryReadResult;
        let tmp6 = _slicedToArray(pos.tag(), 2);
        [tmp7, r10020] = tmp6;
        let str1 = tmp3;
        if (1 === tmp7) {
          let str3 = pos.fixed64();
          str1 = str3.toString();
          internalBinaryReadResult = tmp2;
        } else if (2 !== tmp7) {
          break;
        } else {
          internalBinaryReadResult = closure_6.internalBinaryRead(pos, pos.uint32(), arg2);
        }
        tmp2 = internalBinaryReadResult;
        tmp3 = str1;
        obj = internalBinaryReadResult;
        str = str1;
      }
      const _globalThis = globalThis;
      const self = this;
      const self2 = this;
      const error = new Error("unknown map entry field for field discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState.reward_grants");
      throw error;
    }
    if (str == null) {
      str = "0";
    }
    if (obj == null) {
      obj = closure_6.create();
    }
    arg0[str] = obj;
  }
  internalBinaryWrite(userId, tag, writeUnknownFields) {
    if ("0" !== userId.userId) {
      const tagResult = tag.tag(1, _mod1209.WireType.Bit64);
      tagResult.fixed64(userId.userId);
    }
    if ("0" !== userId.gameId) {
      const tagResult1 = tag.tag(2, _mod1209.WireType.Bit64);
      tagResult1.fixed64(userId.gameId);
    }
    if ("0" !== userId.gameVersionId) {
      const tagResult2 = tag.tag(3, _mod1209.WireType.Bit64);
      tagResult2.fixed64(userId.gameVersionId);
    }
    if (userId.enrolledAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite = Timestamp.internalBinaryWrite;
      const enrolledAt = userId.enrolledAt;
      const tagResult3 = tag.tag(4, _mod1209.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(enrolledAt, tagResult3.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (userId.expiresAt) {
      const Timestamp2 = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp2.internalBinaryWrite;
      const expiresAt = userId.expiresAt;
      const tagResult4 = tag.tag(5, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(expiresAt, tagResult4.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (userId.currentRun) {
      internalBinaryWrite3 = object.internalBinaryWrite;
      const currentRun = userId.currentRun;
      const tagResult5 = tag.tag(6, _mod1209.WireType.LengthDelimited);
      const internalBinaryWrite3Result = internalBinaryWrite3(currentRun, tagResult5.fork(), writeUnknownFields);
      const joined2 = internalBinaryWrite3Result.join();
    }
    const keys = Object.keys(userId.rewardGrants);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tagResult6 = tag.tag(7, _mod1209.WireType.LengthDelimited);
      let forkResult = tagResult6.fork();
      let tagResult7 = forkResult.tag(1, _mod1209.WireType.Bit64);
      let fixed64Result3 = tagResult7.fixed64(nextResult);
      let tagResult8 = tag.tag(2, _mod1209.WireType.LengthDelimited);
      let forkResult1 = tagResult8.fork();
      let internalBinaryWriteResult1 = closure_6.internalBinaryWrite(userId.rewardGrants[nextResult], tag, writeUnknownFields);
      let joined3 = tag.join();
      let joined4 = joined3.join();
      continue;
    }
    if (0 !== userId.numFreePlaysUsed) {
      const tagResult9 = tag.tag(8, _mod1209.WireType.Varint);
      tagResult9.uint32(userId.numFreePlaysUsed);
    }
    if (0 !== userId.enrollmentHighScore) {
      const tagResult10 = tag.tag(9, _mod1209.WireType.Varint);
      tagResult10.uint32(userId.enrollmentHighScore);
    }
    if (0 !== userId.allTimeHighScore) {
      const tagResult11 = tag.tag(10, _mod1209.WireType.Varint);
      tagResult11.uint32(userId.allTimeHighScore);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1209.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, userId, tag);
    }
    return tag;
  }
}
const prototype3 = OrbsArcadeGameState$Type.prototype;
const items2 = [{ no: 1, name: "user_id", kind: "scalar", T: 6 }, { no: 2, name: "game_id", kind: "scalar", T: 6 }, { no: 3, name: "game_version_id", kind: "scalar", T: 6 }, { no: 4, name: "enrolled_at", kind: "message", T: T7 }, { no: 5, name: "expires_at", kind: "message", T: T8 }, { no: 6, name: "current_run", kind: "message", T: T9 }, , , , ];
const obj3 = { no: 7, name: "reward_grants", kind: "map", K: 6, V: obj4 };
obj4 = { kind: "message", T };
class T {
  constructor() {
    return closure_1_6;
  }
}
items2[6] = obj3;
items2[7] = { no: 8, name: "num_free_plays_used", kind: "scalar", T: 13 };
items2[8] = { no: 9, name: "enrollment_high_score", kind: "scalar", T: 13 };
items2[9] = { no: 10, name: "all_time_high_score", kind: "scalar", T: 13 };
let tmp8 = new "binaryReadMap7"("discord_protos.discord_kkv_store_value_models.v1.OrbsArcadeGameState", items2, tmp4, OrbsArcadeRewardGrant$Type, "create", T, OrbsArcadeGameState$Type, "binaryReadMap7", items2, undefined, require, dependencyMap, OrbsArcadeChargeType, obj2, object);
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_kkv_store_value_models/v1/orbs_arcade_game_state.tsx");

export { OrbsArcadeChargeType };
export const OrbsArcadeChargeStatus = obj2;
export const OrbsArcadeRun = object;
export const OrbsArcadeRewardGrant = tmp5;
export const OrbsArcadeGameState = tmp8;
