// Module ID: 5939
// Function ID: 5940
// Name: DaveMessageValidator
// Dependencies: [2]
// Exports: isDaveProtocolVersionAllowed, parseDaveExecuteTransition, parseDaveInit, parseDavePrepareEpoch, parseDavePrepareTransition, parseDaveProtocolVersion, parseMLSFrameHeader, parseMLSTransitionFrame

// Module 5939 (DaveMessageValidator)
import size from "module_2" /* 2 */;

const DaveSignal = { INIT: "init", EPOCH: "epoch", TRANSITION: "transition" };
const result = size.fileFinishedImporting("modules/rtc/DaveMessageValidator.tsx");

export { DaveSignal };
export const parseDaveProtocolVersion = function parseDaveProtocolVersion(num) {
  let tmp = null;
  if (typeof num === "number") {
    const _Number = Number;
    tmp = null;
    if (Number.isInteger(num)) {
      tmp = null;
      if (num >= 0) {
        tmp = null;
        if (num <= 65535) {
          tmp = num;
        }
      }
    }
  }
  return tmp;
};
export const parseDaveInit = function parseDaveInit(d) {
  let tmp = null;
  if (typeof d === "object") {
    tmp = null;
    if (null != d) {
      const _Array = Array;
      tmp = null;
      if (!Array.isArray(d)) {
        tmp = d;
      }
    }
  }
  let tmp3 = null;
  if (null != tmp) {
    const dave_protocol_version = tmp.dave_protocol_version;
    let tmp4 = null;
    if (typeof dave_protocol_version === "number") {
      const _Number = Number;
      tmp4 = null;
      if (Number.isInteger(dave_protocol_version)) {
        tmp4 = null;
        if (dave_protocol_version >= 0) {
          tmp4 = null;
          if (dave_protocol_version <= 65535) {
            tmp4 = dave_protocol_version;
          }
        }
      }
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const parseDavePrepareTransition = function parseDavePrepareTransition(d) {
  let tmp = null;
  if (typeof d === "object") {
    tmp = null;
    if (null != d) {
      const _Array = Array;
      tmp = null;
      if (!Array.isArray(d)) {
        tmp = d;
      }
    }
  }
  if (null == tmp) {
    return null;
  } else {
    const transition_id = tmp.transition_id;
    let tmp3 = null;
    if (typeof transition_id === "number") {
      const _Number = Number;
      tmp3 = null;
      if (Number.isInteger(transition_id)) {
        tmp3 = null;
        if (transition_id >= 0) {
          tmp3 = null;
          if (transition_id <= 65535) {
            tmp3 = transition_id;
          }
        }
      }
    }
    const protocol_version = tmp.protocol_version;
    let tmp4 = null;
    if (typeof protocol_version === "number") {
      const _Number2 = Number;
      tmp4 = null;
      if (Number.isInteger(protocol_version)) {
        tmp4 = null;
        if (protocol_version >= 0) {
          tmp4 = null;
          if (protocol_version <= 65535) {
            tmp4 = protocol_version;
          }
        }
      }
    }
    let tmp5 = null;
    if (null != tmp3) {
      tmp5 = null;
      if (null != tmp4) {
        tmp5 = { transitionId: tmp3, protocolVersion: tmp4 };
        const obj = { transitionId: tmp3, protocolVersion: tmp4 };
      }
    }
    return tmp5;
  }
};
export const parseDaveExecuteTransition = function parseDaveExecuteTransition(d) {
  let tmp = null;
  if (typeof d === "object") {
    tmp = null;
    if (null != d) {
      const _Array = Array;
      tmp = null;
      if (!Array.isArray(d)) {
        tmp = d;
      }
    }
  }
  let tmp3 = null;
  if (null != tmp) {
    const transition_id = tmp.transition_id;
    let tmp4 = null;
    if (typeof transition_id === "number") {
      const _Number = Number;
      tmp4 = null;
      if (Number.isInteger(transition_id)) {
        tmp4 = null;
        if (transition_id >= 0) {
          tmp4 = null;
          if (transition_id <= 65535) {
            tmp4 = transition_id;
          }
        }
      }
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const parseDavePrepareEpoch = function parseDavePrepareEpoch(d) {
  let tmp = null;
  if (typeof d === "object") {
    tmp = null;
    if (null != d) {
      const _Array = Array;
      tmp = null;
      if (!Array.isArray(d)) {
        tmp = d;
      }
    }
  }
  if (null == tmp) {
    return null;
  } else {
    const epoch = tmp.epoch;
    if (typeof epoch === "number") {
      const _Number = Number;
      if (Number.isSafeInteger(epoch)) {
        if (epoch >= 0) {
          const protocol_version = tmp.protocol_version;
          let tmp3 = null;
          if (typeof protocol_version === "number") {
            const _Number2 = Number;
            tmp3 = null;
            if (Number.isInteger(protocol_version)) {
              tmp3 = null;
              if (protocol_version >= 0) {
                tmp3 = null;
                if (protocol_version <= 65535) {
                  tmp3 = protocol_version;
                }
              }
            }
          }
          let tmp4 = null;
          if (null != tmp3) {
            const _String = String;
            tmp4 = { epoch: String(epoch), protocolVersion: tmp3 };
            const obj = { epoch: String(epoch), protocolVersion: tmp3 };
          }
          return tmp4;
        }
      }
    }
    return null;
  }
};
export const isDaveProtocolVersionAllowed = function isDaveProtocolVersionAllowed(EPOCH, protocol_version, _latchIsStageChannelResult) {
  let tmp = null;
  if (typeof protocol_version === "number") {
    const _Number = Number;
    tmp = null;
    if (Number.isInteger(protocol_version)) {
      tmp = null;
      if (protocol_version >= 0) {
        tmp = null;
        if (protocol_version <= 65535) {
          tmp = protocol_version;
        }
      }
    }
  }
  let tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = 0 !== tmp;
    if (!tmp3) {
      tmp3 = EPOCH === obj.INIT && true === _latchIsStageChannelResult;
      const tmp6 = EPOCH === obj.INIT && true === _latchIsStageChannelResult;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
export const parseMLSFrameHeader = function parseMLSFrameHeader(uint8Array, arg1) {
  let num = 0;
  if (arg1) {
    num = 2;
  }
  const sum = num + 1;
  let tmp2 = null;
  if (uint8Array.length >= sum) {
    let tmp3 = null;
    if (arg1) {
      let tmp4 = null;
      if (uint8Array.length >= 2) {
        tmp4 = uint8Array[0] << 8 | uint8Array[1];
      }
      tmp3 = tmp4;
    }
    tmp2 = { sequenceNumber: tmp3, opcode: uint8Array[num], payload: uint8Array.subarray(sum) };
    const obj = { sequenceNumber: tmp3, opcode: uint8Array[num], payload: uint8Array.subarray(sum) };
  }
  return tmp2;
};
export const parseMLSTransitionFrame = function parseMLSTransitionFrame(d) {
  let tmp = null;
  if (d.length >= 2) {
    tmp = d[0] << 8 | d[1];
  }
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = { transitionId: tmp, message: d.slice(2) };
    const obj = { transitionId: tmp, message: d.slice(2) };
  }
  return tmp2;
};
