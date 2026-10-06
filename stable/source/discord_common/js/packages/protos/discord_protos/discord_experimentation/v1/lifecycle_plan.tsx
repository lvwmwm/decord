// Module ID: 7325
// Function ID: 7326
// Name: lifecycle_plan
// Dependencies: [32, 1199, 7326, 1228, 2]

// Module 7325 (lifecycle_plan)
import _mod1199 from "module_1199" /* 1199 */;
import timestamp from "timestamp" /* 1228 */;
import duration from "duration" /* 7326 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let internalBinaryWrite, internalBinaryWrite2;

let tmp;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
function T() {
  return closure_1_5;
}
const T2 = function T() {
  return measurementPlanType;
};
const T3 = function T() {
  const items = ["discord_protos.discord_experimentation.v1.PlanStatus", PlanStatus, "PLAN_STATUS_"];
  return items;
};
const T4 = function T() {
  return closure_1_7;
};
const T5 = function T() {
  const items = ["discord_protos.discord_experimentation.v1.PlanStatus", PlanStatus, "PLAN_STATUS_"];
  return items;
};
const T6 = function T() {
  return closure_1_7;
};
const T7 = function T() {
  return require("duration").Duration;
};
const T8 = function T() {
  const items = ["discord_protos.discord_experimentation.v1.StepStatus", obj2, "STEP_STATUS_"];
  return items;
};
const PlanStatus = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", DRAFT: 1, [1]: "DRAFT", ACTIVE: 2, [2]: "ACTIVE", PAUSED_MANUAL: 3, [3]: "PAUSED_MANUAL", PAUSED_HEALTH_CHECK: 4, [4]: "PAUSED_HEALTH_CHECK", COMPLETED: 5, [5]: "COMPLETED", CANCELED: 6, [6]: "CANCELED" };
let obj2 = { UNSPECIFIED: 0, [0]: "UNSPECIFIED", PENDING: 1, [1]: "PENDING", IN_PROGRESS: 2, [2]: "IN_PROGRESS", AWAITING_MANUAL_APPROVAL: 3, [3]: "AWAITING_MANUAL_APPROVAL", COMPLETED: 4, [4]: "COMPLETED" };
const MessageType = _mod1199.MessageType;
class LifecyclePlan$Type extends MessageType {
  constructor() {
    const items = [, ];
    const obj = { no: 1, name: "measurement_plan", kind: "message", T };
    items[0] = obj;
    items[1] = { no: 2, name: "rollout_plan", kind: "message", T: T2 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.LifecyclePlan", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = {};
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1199.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1199;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
          obj.measurementPlan = closure_5.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.measurementPlan);
        } else if (2 === tmp5) {
          obj.rolloutPlan = measurementPlanType.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.rolloutPlan);
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
                onRead = _mod1199.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(measurementPlan, tag, writeUnknownFields) {
    if (measurementPlan.measurementPlan) {
      internalBinaryWrite = closure_5.internalBinaryWrite;
      measurementPlan = measurementPlan.measurementPlan;
      const tagResult = tag.tag(1, _mod1199.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(measurementPlan, tagResult.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (measurementPlan.rolloutPlan) {
      internalBinaryWrite2 = measurementPlanType.internalBinaryWrite;
      const rolloutPlan = measurementPlan.rolloutPlan;
      const tagResult1 = tag.tag(2, _mod1199.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(rolloutPlan, tagResult1.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1199.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, measurementPlan, tag);
    }
    return tag;
  }
}
const prototype = LifecyclePlan$Type.prototype;
let items = [, ];
const obj3 = { no: 1, name: "measurement_plan", kind: "message", T };
items[0] = obj3;
items[1] = { no: 2, name: "rollout_plan", kind: "message", T: T2 };
let tmp8 = new "CANCELED"("discord_protos.discord_experimentation.v1.LifecyclePlan", items, tmp6, tmp5, "create", tmp4, "internalBinaryRead", "internalBinaryWrite", tmp3, tmp2);
const MessageType2 = _mod1199.MessageType;
class MeasurementPlan$Type extends MessageType2 {
  constructor() {
    let items = [, ];
    const obj = { no: 1, name: "status", kind: "enum", T: T3 };
    items[0] = obj;
    items[1] = { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: T4 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.MeasurementPlan", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { status: 0, rampSteps: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1199.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1199;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
          obj.status = pos.int32();
        } else if (2 === tmp5) {
          let rampSteps = obj.rampSteps;
          let arr = rampSteps.push(closure_7.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                onRead = _mod1199.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(status, tag, writeUnknownFields) {
    let length;
    if (0 !== status.status) {
      const tagResult = tag.tag(1, _mod1199.WireType.Varint);
      tagResult.int32(status.status);
    }
    let num2 = 0;
    if (0 < status.rampSteps.length) {
      do {
        internalBinaryWrite = closure_7.internalBinaryWrite;
        let tmp5 = status.rampSteps[num2];
        let tagResult1 = tag.tag(2, _mod1199.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp5, tagResult1.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num2 = num2 + 1;
        length = status.rampSteps.length;
      } while (num2 < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1199.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, status, tag);
    }
    return tag;
  }
}
const prototype2 = MeasurementPlan$Type.prototype;
const items1 = [, ];
const obj4 = { no: 1, name: "status", kind: "enum", T: T3 };
items1[0] = obj4;
const obj5 = { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: T4 };
items1[1] = obj5;
const tmp32 = new tmp3("discord_protos.discord_experimentation.v1.MeasurementPlan", items1, tmp6, tmp5, "create", MeasurementPlan$Type, "internalBinaryRead", "internalBinaryWrite", tmp3, undefined, tmp, require, dependencyMap, PlanStatus, obj2, this, tmp8, items1, this, exports, obj5);
const hasOwnProperty = tmp32;
const MessageType3 = _mod1199.MessageType;
class RolloutPlan$Type extends MessageType3 {
  constructor() {
    let items = [, ];
    const obj = { no: 1, name: "status", kind: "enum", T: T5 };
    items[0] = obj;
    items[1] = { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: T6 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.RolloutPlan", items, new.target);
    return tmp2;
  }
  create(arr) {
    const obj = { status: 0, rampSteps: [] };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1199.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1199;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
          obj.status = pos.int32();
        } else if (2 === tmp5) {
          let rampSteps = obj.rampSteps;
          let arr = rampSteps.push(closure_7.internalBinaryRead(pos, pos.uint32(), readUnknownField));
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
                onRead = _mod1199.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(status, tag, writeUnknownFields) {
    let length;
    if (0 !== status.status) {
      const tagResult = tag.tag(1, _mod1199.WireType.Varint);
      tagResult.int32(status.status);
    }
    let num2 = 0;
    if (0 < status.rampSteps.length) {
      do {
        internalBinaryWrite = closure_7.internalBinaryWrite;
        let tmp5 = status.rampSteps[num2];
        let tagResult1 = tag.tag(2, _mod1199.WireType.LengthDelimited);
        let internalBinaryWriteResult = internalBinaryWrite(tmp5, tagResult1.fork(), writeUnknownFields);
        let joined = internalBinaryWriteResult.join();
        num2 = num2 + 1;
        length = status.rampSteps.length;
      } while (num2 < length);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1199.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, status, tag);
    }
    return tag;
  }
}
const prototype3 = RolloutPlan$Type.prototype;
const items2 = [, ];
const obj6 = { no: 1, name: "status", kind: "enum", T: T5 };
items2[0] = obj6;
const obj7 = { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: T6 };
items2[1] = obj7;
const measurementPlanType = new MeasurementPlan$Type("discord_protos.discord_experimentation.v1.RolloutPlan", items2, tmp6, RolloutPlan$Type, "create", MeasurementPlan$Type, "internalBinaryRead", "internalBinaryWrite", items2, undefined, tmp, require, dependencyMap, PlanStatus, obj2, this, tmp8, tmp32, this, exports, obj7, undefined, 4);
const MessageType4 = _mod1199.MessageType;
class RampStep$Type extends MessageType4 {
  constructor() {
    let items = [{ no: 1, name: "target_basis_points", kind: "scalar", T: 5 }, { no: 2, name: "hold_duration", kind: "message", T: T7 }, { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 }, , ];
    const obj = { no: 4, name: "started_at", kind: "message", T };
    class T {
      constructor() {
        return closure_1_0(closure_1_1[3]).Timestamp;
      }
    }
    items[3] = obj;
    items[4] = { no: 5, name: "status", kind: "enum", T: T8 };
    const tmp2 = new tmp("discord_protos.discord_experimentation.v1.RampStep", items, T);
    return tmp2;
  }
  create(arr) {
    const obj = { targetBasisPoints: 0, requireManualApproval: false, status: 0 };
    const _Object = Object;
    obj2 = { enumerable: false, value: this };
    _Object.defineProperty(obj, _mod1199.MESSAGE_TYPE, obj2);
    if (undefined !== arr) {
      const tmpResult = _mod1199;
      const result = tmpResult.reflectionMergePartial(this, obj, arr);
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
          obj.targetBasisPoints = pos.int32();
        } else if (2 === tmp5) {
          let Duration = duration.Duration;
          obj.holdDuration = Duration.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.holdDuration);
        } else if (3 === tmp5) {
          obj.requireManualApproval = pos.bool();
        } else if (4 === tmp5) {
          let Timestamp = timestamp.Timestamp;
          obj.startedAt = Timestamp.internalBinaryRead(pos, pos.uint32(), readUnknownField, obj.startedAt);
        } else if (5 === tmp5) {
          obj.status = pos.int32();
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
                onRead = _mod1199.UnknownFieldHandler.onRead;
              }
              let onReadResult = onRead(self.typeName, obj, tmp5, tmp6, skipResult);
            }
          }
        }
      } while (pos.pos < sum);
    }
    return obj;
  }
  internalBinaryWrite(targetBasisPoints, tag, writeUnknownFields) {
    if (0 !== targetBasisPoints.targetBasisPoints) {
      const tagResult = tag.tag(1, _mod1199.WireType.Varint);
      tagResult.int32(targetBasisPoints.targetBasisPoints);
    }
    if (targetBasisPoints.holdDuration) {
      const Duration = duration.Duration;
      internalBinaryWrite = Duration.internalBinaryWrite;
      const holdDuration = targetBasisPoints.holdDuration;
      const tagResult1 = tag.tag(2, _mod1199.WireType.LengthDelimited);
      const internalBinaryWriteResult = internalBinaryWrite(holdDuration, tagResult1.fork(), writeUnknownFields);
      const joined = internalBinaryWriteResult.join();
    }
    if (false !== targetBasisPoints.requireManualApproval) {
      const tagResult2 = tag.tag(3, _mod1199.WireType.Varint);
      tagResult2.bool(targetBasisPoints.requireManualApproval);
    }
    if (targetBasisPoints.startedAt) {
      const Timestamp = timestamp.Timestamp;
      internalBinaryWrite2 = Timestamp.internalBinaryWrite;
      const startedAt = targetBasisPoints.startedAt;
      const tagResult3 = tag.tag(4, _mod1199.WireType.LengthDelimited);
      const internalBinaryWrite2Result = internalBinaryWrite2(startedAt, tagResult3.fork(), writeUnknownFields);
      const joined1 = internalBinaryWrite2Result.join();
    }
    if (0 !== targetBasisPoints.status) {
      const tagResult4 = tag.tag(5, _mod1199.WireType.Varint);
      tagResult4.int32(targetBasisPoints.status);
    }
    let onWrite = writeUnknownFields.writeUnknownFields;
    if (false !== onWrite) {
      if (1 == onWrite) {
        onWrite = _mod1199.UnknownFieldHandler.onWrite;
      }
      const self = this;
      onWrite(this.typeName, targetBasisPoints, tag);
    }
    return tag;
  }
}
const prototype4 = RampStep$Type.prototype;
const items3 = [
  { no: 1, name: "target_basis_points", kind: "scalar", T: 5 },
  { no: 2, name: "hold_duration", kind: "message", T: T7 },
  { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
  {
    no: 4,
    name: "started_at",
    kind: "message",
    T() {
      return require("timestamp").Timestamp;
    }
  },

];
const obj8 = { no: 5, name: "status", kind: "enum", T: T8 };
items3[4] = obj8;
let tmp11 = new "internalBinaryRead"("discord_protos.discord_experimentation.v1.RampStep", items3, tmp6, RolloutPlan$Type, "create", RampStep$Type, "internalBinaryRead", items3, this, undefined, tmp, require, dependencyMap, PlanStatus, obj2, this, tmp8, tmp32, measurementPlanType, exports, obj8);
const metroImportDefault = tmp11;
let result = size.fileFinishedImporting("../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/lifecycle_plan.tsx");

export { PlanStatus };
export const StepStatus = obj2;
export const LifecyclePlan = tmp8;
export const MeasurementPlan = tmp32;
export const RolloutPlan = measurementPlanType;
export const RampStep = tmp11;
