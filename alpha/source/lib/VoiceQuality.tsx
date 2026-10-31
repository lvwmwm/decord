// Module ID: 5893
// Function ID: 5894
// Name: VoiceQuality
// Dependencies: [32, 5894, 5792, 5900, 5902, 12, 5789, 11, 5772, 2]

// Module 5893 (VoiceQuality)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 5789 */;
import Histogram from "Histogram" /* 5894 */;
import NetworkQualityDefault from "NetworkQuality" /* 5900 */;
import SystemResourcesDefault from "SystemResources" /* 5902 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, emit, passthroughCount;

const f88510 = (item) => {
  const items = [item, 0];
  return items;
};
function explodePlayoutMetrics(obj) {
  obj = {};
  for (const key10012 in obj) {
    let obj2 = obj[key10012];
    if (obj2 instanceof Histogram.Histogram) {
      let report = obj2.getReport([75, 95, 99]);
      let _Math = Math;
      let text = `${key10012}_mean`;
      obj[`${key10012}_mean`] = Math.round(report.mean);
      let _Math2 = Math;
      let text1 = `${key10012}_p75`;
      obj[`${key10012}_p75`] = Math.round(report.percentiles[75]);
      let _Math3 = Math;
      let text2 = `${key10012}_p95`;
      obj[`${key10012}_p95`] = Math.round(report.percentiles[95]);
      let _Math4 = Math;
      let text3 = `${key10012}_p99`;
      obj[`${key10012}_p99`] = Math.round(report.percentiles[99]);
      let _Math5 = Math;
      let text4 = `${key10012}_max`;
      obj[`${key10012}_max`] = Math.round(report.max);
      continue;
    } else {
      let mean = null;
      let text5 = `${key10012}_mean`;
      if (null != obj2) {
        mean = obj2.mean;
      }
      obj[text5] = mean;
      let p75 = null;
      let text6 = `${key10012}_p75`;
      if (null != obj2) {
        p75 = obj2.p75;
      }
      obj[text6] = p75;
      let p95 = null;
      let text7 = `${key10012}_p95`;
      if (null != obj2) {
        p95 = obj2.p95;
      }
      obj[text7] = p95;
      let p99 = null;
      let text8 = `${key10012}_p99`;
      if (null != obj2) {
        p99 = obj2.p99;
      }
      obj[text8] = p99;
      let max = null;
      let text9 = `${key10012}_max`;
      if (null != obj2) {
        max = obj2.max;
      }
      obj[text9] = max;
      continue;
    }
    continue;
  }
  return obj;
}
function zeroCounters(arr) {
  return Object.fromEntries(arr.map(f88510));
}
function fragmentTotals(arr, arr2, outboundBaseline, lastRaw) {
  let closure_0 = outboundBaseline;
  let closure_1 = lastRaw;
  if (arr.some((item) => closure_1[item] < lastRaw.lastRaw[item])) {
    outboundBaseline.baseline = zeroCounters(arr);
  }
  outboundBaseline.lastRaw = lastRaw;
  obj = {};
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult] = lastRaw[nextResult] - outboundBaseline.baseline[nextResult];
    continue;
  }
  return obj;
}
function counterTotal(lastRaw, lastRaw2) {
  if (lastRaw2 < lastRaw.lastRaw) {
    lastRaw.baseline = 0;
  }
  lastRaw.lastRaw = lastRaw2;
  return lastRaw2 - lastRaw.baseline;
}
function carriedFragmentTotals(arg0, outboundLatencyBaseline, type, outboundStats) {
  obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp8;
    let tmp2 = nextResult;
    let tmp3 = type[nextResult];
    if (null == tmp3) {
      let tmp9;
      if (outboundStats != null) {
        tmp9 = outboundStats[tmp2];
      }
      tmp8 = tmp9;
    } else {
      tmp8 = counterTotal(outboundLatencyBaseline[tmp2], tmp4);
    }
    obj[nextResult] = tmp8;
    continue;
  }
  return obj;
}
const hasOwnProperty = ["packetsSent", "bytesSent", "packetsLost", "passthroughCount", "encryptSuccessCount", "encryptFailureCount", "encryptDuration", "encryptAttempts", "encryptMissingKeyCount"];
let closure_6 = ["packetsSent", "bytesSent"];
let closure_7 = ["packetsReceived", "bytesReceived", "packetsLost", "nackCount", "fecPacketsReceived", "fecPacketsDiscarded", "opSilence", "opNormal", "opMerge", "opExpand", "opAccelerate", "opPreemptiveExpand", "opCNG", "passthroughCount", "decryptSuccessCount", "decryptFailureCount", "decryptDuration", "decryptAttempts", "decryptMissingKeyCount", "decryptInvalidNonceCount"];
let closure_8 = ["packetsReceived", "bytesReceived"];
const React4 = ["captureProcessingDelayMs", "captureProcessingFrameCount", "apmProcessTimeMs", "apmFrameCount", "sendDelayMs", "sendPacketCount", "totalPacketSendDelayMs", "noiseCancellerProcessTime", "noiseCancellerFrames"];
let closure_10 = ["audioReceiverDelayMs", "audioReceiverPacketCount"];
const unpackModuleId = ["transportDelayMs", "transportPacketCount"];
let closure_12 = ["opSilence", "opNormal", "opMerge", "opExpand", "opAccelerate", "opPreemptiveExpand", "opCNG"];
const VoiceQualityEvent = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
class VoiceQuality extends TypedEventEmitter {
  constructor(connection) {
    let histogram;
    let tmp3;
    let tmp4;
    const f88511 = (item) => {
      const items = [item, { baseline: 0, lastRaw: 0 }];
      return items;
    };
    const tmp5 = new VoiceQuality(tmp4, tmp3, tmp2, tmp);
    _require = tmp5;
    tmp5.sampleAudioDevice = function sampleAudioDevice(input, inputDeviceStats) {
      let accumulated;
      let accumulated2;
      let lastValue;
      let lastValue2;
      if (undefined !== input) {
        let restartCount;
        if (undefined !== input.restartCount) {
          let sum;
          restartCount = input.restartCount;
          let restartCount1 = inputDeviceStats.restartCount;
          if (restartCount1 == null) {
            restartCount1 = { accumulated: 0, lastValue: 0 };
          }
          ({ accumulated, lastValue } = restartCount1);
          if (lastValue > restartCount) {
            sum = accumulated + restartCount;
          } else {
            sum = accumulated + (restartCount - lastValue);
          }
          restartCount = { accumulated: sum, lastValue: restartCount };
          inputDeviceStats.restartCount = restartCount;
        }
        if (undefined !== input.bufferViolations) {
          let sum1;
          const bufferViolations = input.bufferViolations;
          let bufferViolations1 = inputDeviceStats.bufferViolations;
          if (bufferViolations1 == null) {
            bufferViolations1 = { accumulated: 0, lastValue: 0 };
          }
          ({ accumulated: accumulated2, lastValue: lastValue2 } = bufferViolations1);
          if (lastValue2 > bufferViolations) {
            sum1 = accumulated2 + bufferViolations;
          } else {
            sum1 = accumulated2 + (bufferViolations - lastValue2);
          }
          const obj2 = { accumulated: sum1, lastValue: bufferViolations };
          inputDeviceStats.bufferViolations = obj2;
        }
        let num = input.bufferSize;
        if (num == null) {
          num = 0;
        }
        if (0 !== num) {
          inputDeviceStats.bufferSize = input.bufferSize;
        }
        let num3 = input.bufferOccupiedSizeMean;
        if (num3 == null) {
          num3 = 0;
        }
        if (0 !== num3) {
          inputDeviceStats.bufferOccupiedSizeMean = input.bufferOccupiedSizeMean;
        }
        let num4 = input.timeToFirstCallbackMs;
        if (num4 == null) {
          num4 = 0;
        }
        const tmp6 = 0 !== num4 && undefined === inputDeviceStats.timeToFirstCallbackMs;
        if (tmp6) {
          inputDeviceStats.timeToFirstCallbackMs = input.timeToFirstCallbackMs;
        }
        let num5 = input.sessionSampleRate;
        if (num5 == null) {
          num5 = 0;
        }
        if (0 !== num5) {
          if (inputDeviceStats.sessionSampleRate !== input.sessionSampleRate) {
            let num6 = input.sessionSampleRate;
            emit = emit.emit;
            const InputDeviceSampleRateChanged = restartCount.InputDeviceSampleRateChanged;
            if (num6 == null) {
              num6 = 0;
            }
            emit(InputDeviceSampleRateChanged, num6);
          }
          inputDeviceStats.sessionSampleRate = input.sessionSampleRate;
        }
        const tmp10 = undefined !== input.timeFromConnectToFirstCallbackMs && undefined === inputDeviceStats.timeFromConnectToFirstCallbackMs;
        if (tmp10) {
          inputDeviceStats.timeFromConnectToFirstCallbackMs = input.timeFromConnectToFirstCallbackMs;
        }
        if (undefined !== input.delayMs) {
          inputDeviceStats.delayMs = input.delayMs;
        }
        if (undefined !== input.totalDelayMs) {
          inputDeviceStats.totalDelayMs = input.totalDelayMs;
        }
      }
    };
    tmp5.appendTargetRates = function appendTargetRates(previousTimestampMs) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      let num2 = arg2;
      if (arg2 === undefined) {
        num2 = 0;
      }
      if (0 !== previousTimestampMs.previousTimestampMs) {
        const _performance2 = performance;
        const nowResult = performance.now();
        previousTimestampMs.aggregationDurationMs = previousTimestampMs.aggregationDurationMs + (nowResult - previousTimestampMs.previousTimestampMs);
        const result = (nowResult - previousTimestampMs.previousTimestampMs) / 1000;
        previousTimestampMs.bytesAvailable = previousTimestampMs.bytesAvailable + num / 8 * result;
        previousTimestampMs.bytesTarget = previousTimestampMs.bytesTarget + num2 / 8 * result;
        previousTimestampMs.previousTimestampMs = nowResult;
      } else {
        const _performance = performance;
        previousTimestampMs.previousTimestampMs = performance.now();
      }
    };
    tmp5.sampleStats = function sampleStats(rtp) {
      let diff1;
      let num;
      if (null != rtp) {
        let diff;
        let obj2 = num;
        const networkQuality = num.networkQuality;
        const incrementNetworkStats = networkQuality.incrementNetworkStats;
        let tmp13 = dependencyMap;
        let obj3 = num(dependencyMap[8]);
        const result = incrementNetworkStats(obj3.now());
        const systemResources = num.systemResources;
        systemResources.takeSample();
        let num2 = 0;
        num = 0;
        let tmp16 = importDefault;
        const arr2 = _modDef12;
        let item = arr2.forEach(rtp.rtp.outbound, (type) => {
          let num10;
          let num2;
          let num3;
          let num4;
          let num5;
          let num6;
          let num7;
          let packetsLost;
          if ("audio" === type.type) {
            num = type.bitrateTarget;
            if (num == null) {
              num = 0;
            }
            obj = { packetsSent: null, bytesSent: null, packetsLost, passthroughCount: num2, encryptSuccessCount: num3, encryptFailureCount: num4, encryptDuration: num5, encryptAttempts: num6, encryptMissingKeyCount: num7 };
            ({ packetsSent: obj.packetsSent, bytesSent: obj.bytesSent, packetsLost } = type);
            if (packetsLost == null) {
              packetsLost = 0;
            }
            num2 = type.passthroughCount;
            if (num2 == null) {
              num2 = 0;
            }
            num3 = type.encryptSuccessCount;
            if (num3 == null) {
              num3 = 0;
            }
            num4 = type.encryptFailureCount;
            if (num4 == null) {
              num4 = 0;
            }
            num5 = type.encryptDuration;
            if (num5 == null) {
              num5 = 0;
            }
            num6 = type.encryptAttempts;
            if (num6 == null) {
              num6 = 0;
            }
            num7 = type.encryptMissingKeyCount;
            if (num7 == null) {
              num7 = 0;
            }
            const obj2 = { encryptMaxAttempts: num10 };
            const merged = Object.assign(num.outboundStats);
            const merged1 = Object.assign(fragmentTotals(closure_5, closure_6, num.outboundBaseline, obj));
            const merged2 = Object.assign(carriedFragmentTotals(closure_9, num.outboundLatencyBaseline, type, num.outboundStats));
            num10 = type.encryptMaxAttempts;
            if (num10 == null) {
              num10 = 0;
            }
            num.outboundStats = obj2;
            const _Boolean = Boolean;
            const tmp16 = true === Boolean(type.audioDetected) && null != type.audioLevel;
            if (tmp16) {
              const speakingAudioLevel = tmp.outboundStats.speakingAudioLevel;
              const _Math = Math;
              speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
            }
          }
        });
        const decryptionFailures = num.transportBaseline.decryptionFailures;
        const decryptionFailures2 = rtp.transport.decryptionFailures;
        if (null == decryptionFailures2) {
          decryptionFailures.baseline = 0;
          decryptionFailures.lastRaw = 0;
          diff = decryptionFailures2;
        } else {
          if (decryptionFailures2 < decryptionFailures.lastRaw) {
            decryptionFailures.baseline = 0;
          }
          decryptionFailures.lastRaw = decryptionFailures2;
          diff = decryptionFailures2 - decryptionFailures.baseline;
        }
        const transportStats = { decryptionFailures: diff, routingFailures: diff1 };
        const routingFailures = obj2.transportBaseline.routingFailures;
        const routingFailures2 = rtp.transport.routingFailures;
        if (null == routingFailures2) {
          routingFailures.baseline = 0;
          routingFailures.lastRaw = 0;
          diff1 = routingFailures2;
        } else {
          if (routingFailures2 < routingFailures.lastRaw) {
            routingFailures.baseline = 0;
          }
          routingFailures.lastRaw = routingFailures2;
          diff1 = routingFailures2 - routingFailures.baseline;
        }
        let tmp3 = carriedFragmentTotals;
        let tmp4 = args;
        num = 0;
        let merged = Object.assign(carriedFragmentTotals(args, obj2.transportBaseline, rtp.transport, obj2.transportStats));
        obj2.transportStats = transportStats;
        obj2.appendTargetRates(obj2.outboundStats, rtp.transport.availableOutgoingBitrate, num);
        const tmp16Result = tmp16(tmp13[5]);
        const item1 = tmp16Result.forEach(rtp.rtp.inbound, (arg0, arg1) => {
          let closure_0 = arg1;
          const arr = closure_1_1(closure_1_2[5]);
          const item = arr.forEach(arg0, function(type) {
            let nackCount;
            let num10;
            let num11;
            let num12;
            let num13;
            let num14;
            let num15;
            let num16;
            let num2;
            let num20;
            let num21;
            let num22;
            let num23;
            let num24;
            let num25;
            let num26;
            let num27;
            let num28;
            let num3;
            let num4;
            let num5;
            let num6;
            let num7;
            let num8;
            let num9;
            let opAccelerate;
            let opCNG;
            let opExpand;
            let opMerge;
            let opNormal;
            let opPreemptiveExpand;
            let previous;
            let prop;
            let prop1;
            let prop2;
            if ("audio" === type.type) {
              const inboundBaselines = num.inboundBaselines;
              let tmp3 = inboundBaselines[closure_0];
              if (tmp3 == null) {
                obj = { baseline: Object.fromEntries(closure_3_7.map(f88510)), lastRaw: Object.fromEntries(closure_3_7.map(f88510)) };
                const _Object = Object;
                const _Object2 = Object;
                inboundBaselines[closure_0] = obj;
                tmp3 = obj;
              }
              const inboundLatencyBaselines = tmp58.inboundLatencyBaselines;
              let tmp4 = inboundLatencyBaselines[tmp59];
              if (tmp4 == null) {
                const _Object3 = Object;
                const fromEntriesResult = Object.fromEntries(closure_3_10.map(f88511));
                inboundLatencyBaselines[closure_0] = fromEntriesResult;
                tmp4 = fromEntriesResult;
              }
              const obj3 = { packetsReceived: null, bytesReceived: null, packetsLost: null, nackCount, fecPacketsReceived: num, fecPacketsDiscarded: num2, opSilence: num3, opNormal: num4, opMerge: num5, opExpand: num6, opAccelerate: num7, opPreemptiveExpand: num8, opCNG: num9, passthroughCount: num10, decryptSuccessCount: num11, decryptFailureCount: num12, decryptDuration: num13, decryptAttempts: num14, decryptMissingKeyCount: num15, decryptInvalidNonceCount: num16 };
              ({ packetsReceived: obj2.packetsReceived, bytesReceived: obj2.bytesReceived, packetsLost: obj2.packetsLost, nackCount } = type);
              const lastRaw = tmp3.lastRaw;
              if (nackCount == null) {
                nackCount = 0;
              }
              num = type.fecPacketsReceived;
              if (num == null) {
                num = 0;
              }
              num2 = type.fecPacketsDiscarded;
              if (num2 == null) {
                num2 = 0;
              }
              num3 = type.opSilence;
              if (num3 == null) {
                num3 = 0;
              }
              num4 = type.opNormal;
              if (num4 == null) {
                num4 = 0;
              }
              num5 = type.opMerge;
              if (num5 == null) {
                num5 = 0;
              }
              num6 = type.opExpand;
              if (num6 == null) {
                num6 = 0;
              }
              num7 = type.opAccelerate;
              if (num7 == null) {
                num7 = 0;
              }
              num8 = type.opPreemptiveExpand;
              if (num8 == null) {
                num8 = 0;
              }
              num9 = type.opCNG;
              if (num9 == null) {
                num9 = 0;
              }
              num10 = type.passthroughCount;
              if (num10 == null) {
                num10 = 0;
              }
              num11 = type.decryptSuccessCount;
              if (num11 == null) {
                num11 = 0;
              }
              num12 = type.decryptFailureCount;
              if (num12 == null) {
                num12 = 0;
              }
              num13 = type.decryptDuration;
              if (num13 == null) {
                num13 = 0;
              }
              num14 = type.decryptAttempts;
              if (num14 == null) {
                num14 = 0;
              }
              num15 = type.decryptMissingKeyCount;
              if (num15 == null) {
                num15 = 0;
              }
              num16 = type.decryptInvalidNonceCount;
              if (num16 == null) {
                num16 = 0;
              }
              const tmp13 = fragmentTotals(closure_3_7, closure_3_8, tmp3, obj3);
              let opSilence;
              if (null != type.opSilence) {
                opSilence = tmp13.opSilence;
              }
              const obj5 = { silent: opSilence, normal: opNormal, merged: opMerge, expanded: opExpand, accelerated: opAccelerate, preemptiveExpanded: opPreemptiveExpand, cng: opCNG };
              opNormal = undefined;
              if (null != type.opNormal) {
                opNormal = tmp13.opNormal;
              }
              opMerge = undefined;
              if (null != type.opMerge) {
                opMerge = tmp13.opMerge;
              }
              opExpand = undefined;
              if (null != type.opExpand) {
                opExpand = tmp13.opExpand;
              }
              opAccelerate = undefined;
              if (null != type.opAccelerate) {
                opAccelerate = tmp13.opAccelerate;
              }
              opPreemptiveExpand = undefined;
              if (null != type.opPreemptiveExpand) {
                opPreemptiveExpand = tmp13.opPreemptiveExpand;
              }
              opCNG = undefined;
              if (null != type.opCNG) {
                opCNG = tmp13.opCNG;
              }
              const obj7 = { audioJitterBuffer: type.audioJitterBuffer, audioJitterBufferHistogram: prop, audioJitterTarget: type.audioJitterTarget, audioJitterTargetHistogram: prop1, audioJitterDelay: type.audioJitterDelay, audioJitterDelayHistogram: prop2, relativeReceptionDelay: null, relativePlayoutDelay: null };
              prop = undefined;
              const tmp26 = carriedFragmentTotals(closure_3_10, tmp4, type, num.inboundStats[closure_0]);
              if (num.inboundStats[closure_0] != null) {
                prop = tmp60.bufferStats.audioJitterBufferHistogram;
              }
              if (prop == null) {
                const self = this;
                const self2 = this;
                prop = new closure_0(dependencyMap[1]).Histogram();
              }
              prop1 = undefined;
              if (num.inboundStats[closure_0] != null) {
                prop1 = tmp60.bufferStats.audioJitterTargetHistogram;
              }
              if (prop1 == null) {
                const self3 = this;
                const self4 = this;
                prop1 = new closure_0(dependencyMap[1]).Histogram();
              }
              prop2 = undefined;
              if (num.inboundStats[closure_0] != null) {
                prop2 = tmp60.bufferStats.audioJitterDelayHistogram;
              }
              if (prop2 == null) {
                const self5 = this;
                const self6 = this;
                prop2 = new closure_0(dependencyMap[1]).Histogram();
              }
              ({ relativeReceptionDelay: obj4.relativeReceptionDelay, relativePlayoutDelay: obj4.relativePlayoutDelay } = type);
              const audioJitterBufferHistogram = obj7.audioJitterBufferHistogram;
              let prop3 = type.audioJitterBufferSamples;
              const addSamples = audioJitterBufferHistogram.addSamples;
              if (prop3 == null) {
                prop3 = [];
              }
              addSamples(prop3);
              const audioJitterDelayHistogram = obj7.audioJitterDelayHistogram;
              let prop4 = type.audioJitterDelaySamples;
              const addSamples2 = audioJitterDelayHistogram.addSamples;
              if (prop4 == null) {
                prop4 = [];
              }
              addSamples2(prop4);
              const audioJitterTargetHistogram = obj7.audioJitterTargetHistogram;
              let prop5 = type.audioJitterTargetSamples;
              const addSamples3 = audioJitterTargetHistogram.addSamples;
              if (prop5 == null) {
                prop5 = [];
              }
              addSamples3(prop5);
              const obj12 = {};
              const inboundStats = tmp58.inboundStats;
              const obj6 = _modDef12;
              const merged = Object.assign(obj6.omit(tmp13, closure_3_12));
              const merged1 = Object.assign(tmp26);
              if (null != num.inboundStats[closure_0]) {
                let connectedAtMs;
                if (!(null != num.inboundStats[closure_0] && obj3.packetsReceived < lastRaw.packetsReceived)) {
                  connectedAtMs = tmp60.connectedAtMs;
                }
                obj12.connectedAtMs = connectedAtMs;
                let tmp49;
                if (!(null != num.inboundStats[closure_0] && obj3.packetsReceived < lastRaw.packetsReceived)) {
                  let disconnectedAtMs;
                  if (num.inboundStats[closure_0] != null) {
                    disconnectedAtMs = tmp60.disconnectedAtMs;
                  }
                  tmp49 = disconnectedAtMs;
                }
                obj12.disconnectedAtMs = tmp49;
                obj12.bufferStats = obj7;
                obj12.frameOpStats = obj5;
                let tmp51;
                if (null != num.inboundStats[closure_0]) {
                  if (!(null != num.inboundStats[closure_0] && obj3.packetsReceived < lastRaw.packetsReceived)) {
                    let decryptFailureBeforeSuccessCount = tmp60.decryptFailureBeforeSuccessCount;
                    if (decryptFailureBeforeSuccessCount == null) {
                      let decryptFailureCount;
                      if (tmp13.decryptSuccessCount > 0) {
                        decryptFailureCount = tmp13.decryptFailureCount;
                      }
                      decryptFailureBeforeSuccessCount = decryptFailureCount;
                    }
                    tmp51 = decryptFailureBeforeSuccessCount;
                  }
                }
                obj12.decryptFailureBeforeSuccessCount = tmp51;
                inboundStats[closure_0] = obj12;
                let previousTimestampMs;
                const periodicInboundStats = tmp58.periodicInboundStats;
                if (num.periodicInboundStats[closure_0] != null) {
                  previousTimestampMs = tmp53.previousTimestampMs;
                }
                if (previousTimestampMs == null) {
                  const _performance2 = performance;
                  previousTimestampMs = performance.now();
                }
                const obj13 = { previousTimestampMs, previous, currentTimestampMs: performance.now(), current: obj5, accelerateRateSum: num20 + num21, expandRateSum: num22 + num23, preemptiveExpandRateSum: num24 + num25, speechExpandRateSum: num26 + num27, numRateSamples: num28 + 1 };
                previous = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  previous = tmp53.previous;
                }
                if (previous == null) {
                  previous = obj5;
                }
                const _performance3 = performance;
                num20 = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  num20 = tmp53.accelerateRateSum;
                }
                if (num20 == null) {
                  num20 = 0;
                }
                num21 = type.accelerateRate;
                if (num21 == null) {
                  num21 = 0;
                }
                num22 = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  num22 = tmp53.expandRateSum;
                }
                if (num22 == null) {
                  num22 = 0;
                }
                num23 = type.expandRate;
                if (num23 == null) {
                  num23 = 0;
                }
                num24 = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  num24 = tmp53.preemptiveExpandRateSum;
                }
                if (num24 == null) {
                  num24 = 0;
                }
                num25 = type.preemptiveExpandRate;
                if (num25 == null) {
                  num25 = 0;
                }
                num26 = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  num26 = tmp53.speechExpandRateSum;
                }
                if (num26 == null) {
                  num26 = 0;
                }
                num27 = type.speechExpandRate;
                if (num27 == null) {
                  num27 = 0;
                }
                num28 = undefined;
                if (num.periodicInboundStats[closure_0] != null) {
                  num28 = tmp53.numRateSamples;
                }
                if (num28 == null) {
                  num28 = 0;
                }
                periodicInboundStats[closure_0] = obj13;
              }
              const _performance = performance;
              connectedAtMs = performance.now();
            }
          });
        });
        if (undefined !== rtp.audioDevice) {
          obj2.sampleAudioDevice(rtp.audioDevice.input, obj2.inputDeviceStats);
          obj2.sampleAudioDevice(rtp.audioDevice.output, obj2.outputDeviceStats);
        }
      }
    };
    tmp5.connection = connection;
    let tmp6 = new NetworkQualityDefault();
    tmp5.networkQuality = tmp6;
    const tmp7 = new SystemResourcesDefault();
    tmp5.systemResources = tmp7;
    tmp5.inboundStats = {};
    const outboundStats = { packetsSent: 0, bytesSent: 0, packetsLost: 0, passthroughCount: 0, encryptSuccessCount: 0, encryptFailureCount: 0, encryptDuration: 0, encryptAttempts: 0, encryptMaxAttempts: 0, encryptMissingKeyCount: 0, bytesAvailable: 0, bytesTarget: 0, previousTimestampMs: 0, aggregationDurationMs: 0, speakingAudioLevel: histogram };
    histogram = new require("Histogram").Histogram();
    tmp5.outboundStats = outboundStats;
    tmp5.transportStats = {};
    tmp5.periodicInboundStats = {};
    tmp5.inputDeviceStats = {};
    tmp5.outputDeviceStats = {};
    let obj2 = { baseline: Object.fromEntries(closure_5.map(f88510)), lastRaw: Object.fromEntries(closure_5.map(f88510)) };
    tmp5.outboundBaseline = obj2;
    tmp5.outboundLatencyBaseline = Object.fromEntries(closure_9.map(f88511));
    let items = ["decryptionFailures", "routingFailures", ...closure_11];
    tmp5.transportBaseline = Object.fromEntries(items.map(f88511));
    tmp5.inboundBaselines = {};
    tmp5.inboundLatencyBaselines = {};
    return tmp5;
  }
  seedFrom(outboundBaseline) {
    let tmp2;
    let tmp4;
    const self = this;
    outboundBaseline = outboundBaseline.outboundBaseline;
    this.outboundBaseline = { baseline: outboundBaseline.lastRaw, lastRaw: outboundBaseline.lastRaw };
    obj = _modDef12;
    this.outboundLatencyBaseline = obj.mapValues(outboundBaseline.outboundLatencyBaseline, (baseline) => ({ baseline: baseline.lastRaw, lastRaw: baseline.lastRaw }));
    const obj2 = _modDef12;
    this.transportBaseline = obj2.mapValues(outboundBaseline.transportBaseline, (baseline) => ({ baseline: baseline.lastRaw, lastRaw: baseline.lastRaw }));
    const obj3 = _modDef12;
    this.inboundBaselines = obj3.mapValues(outboundBaseline.inboundBaselines, (baseline) => ({ baseline: baseline.lastRaw, lastRaw: baseline.lastRaw }));
    const obj4 = _modDef12;
    this.inboundLatencyBaselines = obj4.mapValues(outboundBaseline.inboundLatencyBaselines, (arg0) => {
      obj = _modDef12;
      return obj.mapValues(arg0, (baseline) => ({ baseline: baseline.lastRaw, lastRaw: baseline.lastRaw }));
    });
    const inputDeviceStats = outboundBaseline.inputDeviceStats;
    let tmp;
    if (null != inputDeviceStats.restartCount) {
      tmp = { accumulated: 0, lastValue: inputDeviceStats.restartCount.lastValue };
      const obj5 = { accumulated: 0, lastValue: inputDeviceStats.restartCount.lastValue };
    }
    const obj6 = { restartCount: tmp, bufferViolations: tmp2, sessionSampleRate: inputDeviceStats.sessionSampleRate };
    tmp2 = undefined;
    if (null != inputDeviceStats.bufferViolations) {
      tmp2 = { accumulated: 0, lastValue: inputDeviceStats.bufferViolations.lastValue };
      const obj7 = { accumulated: 0, lastValue: inputDeviceStats.bufferViolations.lastValue };
    }
    self.inputDeviceStats = obj6;
    const outputDeviceStats = outboundBaseline.outputDeviceStats;
    let tmp3;
    if (null != outputDeviceStats.restartCount) {
      tmp3 = { accumulated: 0, lastValue: outputDeviceStats.restartCount.lastValue };
      const obj8 = { accumulated: 0, lastValue: outputDeviceStats.restartCount.lastValue };
    }
    const obj9 = { restartCount: tmp3, bufferViolations: tmp4, sessionSampleRate: outputDeviceStats.sessionSampleRate };
    tmp4 = undefined;
    if (null != outputDeviceStats.bufferViolations) {
      tmp4 = { accumulated: 0, lastValue: outputDeviceStats.bufferViolations.lastValue };
      const obj10 = { accumulated: 0, lastValue: outputDeviceStats.bufferViolations.lastValue };
    }
    self.outputDeviceStats = obj9;
  }
  start() {
    const connection = this.connection;
    connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  }
  stop() {
    const connection = this.connection;
    connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  }
  getPacketStats() {
    const arr = _modDef12;
    const reduced = arr.reduce(this.inboundStats, (packetsReceived, packetsReceived2) => {
      packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
      packetsReceived.packetsReceivedLost = packetsReceived.packetsReceivedLost + packetsReceived2.packetsLost;
      packetsReceived.nackCount = packetsReceived.nackCount + packetsReceived2.nackCount;
      packetsReceived.fecPacketsReceived = packetsReceived.fecPacketsReceived + packetsReceived2.fecPacketsReceived;
      packetsReceived.fecPacketsDiscarded = packetsReceived.fecPacketsDiscarded + packetsReceived2.fecPacketsDiscarded;
      return packetsReceived;
    }, { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 });
    return { packets_sent: this.outboundStats.packetsSent, packets_sent_lost: this.outboundStats.packetsLost, packets_received: reduced.packetsReceived, packets_received_lost: reduced.packetsReceivedLost, num_nacks_sent: reduced.nackCount, fec_packets_received: reduced.fecPacketsReceived, fec_packets_discarded: reduced.fecPacketsDiscarded };
  }
  getInboundPacketsStats(sender_user_id) {
    if (null == this.inboundStats[sender_user_id]) {
      obj = {};
    } else {
      obj = { num_packets: null, num_packets_lost: null };
      ({ packetsReceived: obj.num_packets, packetsLost: obj.num_packets_lost } = this.inboundStats[sender_user_id]);
    }
    return obj;
  }
  getOutboundPacketsStats() {
    return { num_packets: this.outboundStats.packetsSent, num_packets_lost: this.outboundStats.packetsLost };
  }
  getBytesStats() {
    let num;
    let num3;
    const self = this;
    const result = this.outboundStats.aggregationDurationMs / 1000;
    const arr = _modDef12;
    obj = { bytes_sent: this.outboundStats.bytesSent, bytes_received: arr.reduce(this.inboundStats, (arg0, bytesReceived) => arg0 + bytesReceived.bytesReceived, 0), outbound_bandwidth_estimate: num, audio_target_bitrate: num3 };
    num = 0;
    if (0 < result) {
      const _Math = Math;
      num = Math.round(8 * self.outboundStats.bytesAvailable / result);
    }
    num3 = 0;
    if (0 < result) {
      const _Math2 = Math;
      num3 = Math.round(8 * self.outboundStats.bytesTarget / result);
    }
    return obj;
  }
  getInboundBytesStats(sender_user_id) {
    if (null == this.inboundStats[sender_user_id]) {
      obj = {};
    } else {
      obj = { num_bytes: this.inboundStats[sender_user_id].bytesReceived };
    }
    return obj;
  }
  getOutboundBytesStats() {
    return { num_bytes: this.outboundStats.bytesSent };
  }
  getOutboundLatencyStats() {
    return { capture_processing_delay_ms: this.outboundStats.captureProcessingDelayMs, capture_processing_frame_count: this.outboundStats.captureProcessingFrameCount, apm_process_time_ms: this.outboundStats.apmProcessTimeMs, apm_frame_count: this.outboundStats.apmFrameCount, send_delay_ms: this.outboundStats.sendDelayMs, send_packet_count: this.outboundStats.sendPacketCount, total_packet_send_delay_ms: this.outboundStats.totalPacketSendDelayMs, noise_canceller_process_time_ms: this.outboundStats.noiseCancellerProcessTime, noise_canceller_frame_count: this.outboundStats.noiseCancellerFrames };
  }
  getInboundDurationStats(sender_user_id) {
    if (null == this.inboundStats[sender_user_id]) {
      obj = {};
    } else {
      let disconnectedAtMs = tmp.disconnectedAtMs;
      const _Math = Math;
      if (disconnectedAtMs == null) {
        const _performance = performance;
        disconnectedAtMs = performance.now();
      }
      obj = { duration_connected_ms: round(disconnectedAtMs - this.inboundStats[sender_user_id].connectedAtMs) };
    }
    return obj;
  }
  getInboundLatencyStats(sender_user_id) {
    if (null == this.inboundStats[sender_user_id]) {
      obj = {};
    } else {
      obj = { audio_receiver_delay_ms: null, audio_receiver_packet_count: null };
      ({ audioReceiverDelayMs: obj.audio_receiver_delay_ms, audioReceiverPacketCount: obj.audio_receiver_packet_count } = this.inboundStats[sender_user_id]);
    }
    return obj;
  }
  getInboundJitterStats(sender_user_id) {
    let audioJitterDelay;
    let audioJitterTarget;
    let obj2;
    if (null == this.inboundStats[sender_user_id]) {
      obj2 = {};
    } else {
      let audioJitterBuffer;
      const audioJitterBufferHistogram = tmp.bufferStats.audioJitterBufferHistogram;
      const tmp2 = explodePlayoutMetrics;
      if (audioJitterBufferHistogram.getSamples() > 0) {
        audioJitterBuffer = tmp.bufferStats.audioJitterBufferHistogram;
      } else {
        audioJitterBuffer = tmp.bufferStats.audioJitterBuffer;
      }
      const audioJitterDelayHistogram = tmp.bufferStats.audioJitterDelayHistogram;
      obj = { audio_jitter_buffer: audioJitterBuffer, audio_jitter_delay: audioJitterDelay, audio_jitter_target: audioJitterTarget };
      if (audioJitterDelayHistogram.getSamples() > 0) {
        audioJitterDelay = tmp.bufferStats.audioJitterDelayHistogram;
      } else {
        audioJitterDelay = tmp.bufferStats.audioJitterDelay;
      }
      const audioJitterTargetHistogram = tmp.bufferStats.audioJitterTargetHistogram;
      if (audioJitterTargetHistogram.getSamples() > 0) {
        audioJitterTarget = tmp.bufferStats.audioJitterTargetHistogram;
      } else {
        audioJitterTarget = tmp.bufferStats.audioJitterTarget;
      }
      obj2 = tmp2(obj);
    }
    return obj2;
  }
  getNetworkStats() {
    const networkQuality = this.networkQuality;
    return networkQuality.getStats();
  }
  getSystemResourceStats() {
    const systemResources = this.systemResources;
    return systemResources.getStats();
  }
  getBufferStats() {
    let prop3;
    let relativePlayoutDelay;
    const arr = _modDef12;
    const reduced = arr.reduce(this.inboundStats, (arg0, bufferStats) => {
      let percentile;
      const audioJitterBufferHistogram = bufferStats.bufferStats.audioJitterBufferHistogram;
      if (audioJitterBufferHistogram.getSamples() > 0) {
        const audioJitterBufferHistogram2 = bufferStats.bufferStats.audioJitterBufferHistogram;
        percentile = audioJitterBufferHistogram2.getPercentile(75);
      } else {
        percentile = null;
        if (null != bufferStats.bufferStats.audioJitterBuffer) {
          percentile = bufferStats.bufferStats.audioJitterBuffer.p75;
        }
      }
      bufferStats = arg0;
      let percentile1 = null;
      if (null != arg0) {
        const audioJitterBufferHistogram3 = bufferStats.audioJitterBufferHistogram;
        if (audioJitterBufferHistogram3.getSamples() > 0) {
          const audioJitterBufferHistogram4 = bufferStats.audioJitterBufferHistogram;
          percentile1 = audioJitterBufferHistogram4.getPercentile(75);
        } else {
          percentile1 = null;
          if (null != bufferStats.audioJitterBuffer) {
            percentile1 = bufferStats.audioJitterBuffer.p75;
          }
        }
      }
      let tmp3 = null == bufferStats || null == percentile1;
      if (!tmp3) {
        tmp3 = null != percentile && percentile > percentile1;
      }
      if (tmp3) {
        bufferStats = bufferStats.bufferStats;
      }
      return bufferStats;
    }, null);
    let tmp2 = null;
    if (null != reduced) {
      let prop;
      let audioJitterBufferHistogram = reduced.audioJitterBufferHistogram;
      if (audioJitterBufferHistogram.getSamples() > 0) {
        prop = reduced.audioJitterBufferHistogram;
      } else {
        prop = null;
        if (null != reduced.audioJitterBuffer) {
          prop = reduced.audioJitterBuffer;
        }
      }
      tmp2 = prop;
    }
    let tmp4 = null;
    if (null != reduced) {
      let prop1;
      const audioJitterTargetHistogram = reduced.audioJitterTargetHistogram;
      if (audioJitterTargetHistogram.getSamples() > 0) {
        prop1 = reduced.audioJitterTargetHistogram;
      } else {
        prop1 = null;
        if (null != reduced.audioJitterTarget) {
          prop1 = reduced.audioJitterTarget;
        }
      }
      tmp4 = prop1;
    }
    let tmp6 = null;
    if (null != reduced) {
      let prop2;
      const audioJitterDelayHistogram = reduced.audioJitterDelayHistogram;
      if (audioJitterDelayHistogram.getSamples() > 0) {
        prop2 = reduced.audioJitterDelayHistogram;
      } else {
        prop2 = null;
        if (null != reduced.audioJitterDelay) {
          prop2 = reduced.audioJitterDelay;
        }
      }
      tmp6 = prop2;
    }
    obj = { audio_jitter_buffer: tmp2, audio_jitter_target: tmp4, audio_jitter_delay: tmp6, relative_reception_delay: prop3, relative_playout_delay: relativePlayoutDelay };
    prop3 = undefined;
    const tmp8 = explodePlayoutMetrics;
    if (reduced != null) {
      prop3 = reduced.relativeReceptionDelay;
    }
    if (prop3 == null) {
      prop3 = null;
    }
    relativePlayoutDelay = undefined;
    if (reduced != null) {
      relativePlayoutDelay = reduced.relativePlayoutDelay;
    }
    if (relativePlayoutDelay == null) {
      relativePlayoutDelay = null;
    }
    const obj2 = {};
    const merged = Object.assign(tmp8(obj));
    return obj2;
  }
  getFrameOpStats() {
    const arr = _modDef12;
    const reduced = arr.reduce(this.inboundStats, (silent, frameOpStats) => {
      if (null != frameOpStats.frameOpStats.silent) {
        silent.silent = silent.silent + frameOpStats.frameOpStats.silent;
      }
      if (null != frameOpStats.frameOpStats.normal) {
        silent.normal = silent.normal + frameOpStats.frameOpStats.normal;
      }
      if (null != frameOpStats.frameOpStats.merged) {
        silent.merged = silent.merged + frameOpStats.frameOpStats.merged;
      }
      if (null != frameOpStats.frameOpStats.expanded) {
        silent.expanded = silent.expanded + frameOpStats.frameOpStats.expanded;
      }
      if (null != frameOpStats.frameOpStats.accelerated) {
        silent.accelerated = silent.accelerated + frameOpStats.frameOpStats.accelerated;
      }
      if (null != frameOpStats.frameOpStats.preemptiveExpanded) {
        silent.preemptiveExpanded = silent.preemptiveExpanded + frameOpStats.frameOpStats.preemptiveExpanded;
      }
      if (null != frameOpStats.frameOpStats.cng) {
        silent.cng = silent.cng + frameOpStats.frameOpStats.cng;
      }
      return silent;
    }, { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 });
    return { frame_op_silent: reduced.silent, frame_op_normal: reduced.normal, frame_op_merged: reduced.merged, frame_op_expanded: reduced.expanded, frame_op_accelerated: reduced.accelerated, frame_op_preemptive_expanded: reduced.preemptiveExpanded, frame_op_cng: reduced.cng };
  }
  getTransportStats() {
    return { decryption_failures: this.transportStats.decryptionFailures, routing_failures: this.transportStats.routingFailures, transport_delay_ms: this.transportStats.transportDelayMs, transport_packet_count: this.transportStats.transportPacketCount };
  }
  getE2EEStats() {
    const arr = _modDef12;
    const reduced = arr.reduce(this.inboundStats, (passthroughCount, passthroughCount2) => {
      let num = passthroughCount2.passthroughCount;
      passthroughCount = passthroughCount.passthroughCount;
      if (num == null) {
        num = 0;
      }
      passthroughCount.passthroughCount = passthroughCount + num;
      let num2 = passthroughCount2.decryptSuccessCount;
      const decryptSuccessCount = passthroughCount.decryptSuccessCount;
      if (num2 == null) {
        num2 = 0;
      }
      passthroughCount.decryptSuccessCount = decryptSuccessCount + num2;
      let num3 = passthroughCount2.decryptFailureCount;
      const decryptFailureCount = passthroughCount.decryptFailureCount;
      if (num3 == null) {
        num3 = 0;
      }
      passthroughCount.decryptFailureCount = decryptFailureCount + num3;
      let num4 = passthroughCount2.decryptDuration;
      const decryptDuration = passthroughCount.decryptDuration;
      if (num4 == null) {
        num4 = 0;
      }
      passthroughCount.decryptDuration = decryptDuration + num4;
      let num5 = passthroughCount2.decryptAttempts;
      const decryptAttempts = passthroughCount.decryptAttempts;
      if (num5 == null) {
        num5 = 0;
      }
      passthroughCount.decryptAttempts = decryptAttempts + num5;
      let num6 = passthroughCount2.decryptMissingKeyCount;
      const decryptMissingKeyCount = passthroughCount.decryptMissingKeyCount;
      if (num6 == null) {
        num6 = 0;
      }
      passthroughCount.decryptMissingKeyCount = decryptMissingKeyCount + num6;
      let num7 = passthroughCount2.decryptInvalidNonceCount;
      const decryptInvalidNonceCount = passthroughCount.decryptInvalidNonceCount;
      if (num7 == null) {
        num7 = 0;
      }
      passthroughCount.decryptInvalidNonceCount = decryptInvalidNonceCount + num7;
      let num8 = passthroughCount2.decryptFailureCount;
      const decryptFailureAfterSuccessCount = passthroughCount.decryptFailureAfterSuccessCount;
      if (num8 == null) {
        num8 = 0;
      }
      let num9 = passthroughCount2.decryptFailureBeforeSuccessCount;
      if (num9 == null) {
        num9 = 0;
      }
      passthroughCount.decryptFailureAfterSuccessCount = decryptFailureAfterSuccessCount + (num8 - num9);
      return passthroughCount;
    }, { passthroughCount: 0, decryptSuccessCount: 0, decryptFailureCount: 0, decryptDuration: 0, decryptAttempts: 0, decryptMissingKeyCount: 0, decryptInvalidNonceCount: 0, decryptFailureAfterSuccessCount: 0 });
    return { decrypt_passthrough_count: reduced.passthroughCount, decrypt_success_count: reduced.decryptSuccessCount, decrypt_failure_count: reduced.decryptFailureCount, decrypt_duration: reduced.decryptDuration, decrypt_attempts: reduced.decryptAttempts, decrypt_missing_key_count: reduced.decryptMissingKeyCount, decrypt_invalid_nonce_count: reduced.decryptInvalidNonceCount, decrypt_failure_after_success_count: reduced.decryptFailureAfterSuccessCount, encrypt_passthrough_count: this.outboundStats.passthroughCount, encrypt_success_count: this.outboundStats.encryptSuccessCount, encrypt_failure_count: this.outboundStats.encryptFailureCount, encrypt_duration: this.outboundStats.encryptDuration, encrypt_attempts: this.outboundStats.encryptAttempts, encrypt_max_attempts: this.outboundStats.encryptMaxAttempts, encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount };
  }
  getAudioDeviceStats() {
    let accumulated1;
    let accumulated2;
    let accumulated3;
    const self = this;
    const restartCount = this.inputDeviceStats.restartCount;
    let accumulated;
    if (restartCount != null) {
      accumulated = restartCount.accumulated;
    }
    const restartCount2 = self.outputDeviceStats.restartCount;
    obj = { input_device_restart_count: accumulated, output_device_restart_count: accumulated1, input_device_time_to_first_audio: self.inputDeviceStats.timeToFirstCallbackMs, output_device_time_to_first_audio: self.outputDeviceStats.timeToFirstCallbackMs, input_device_buffer_overfull_count: accumulated2, output_device_buffer_underrun_count: accumulated3, input_device_buffer_size: self.inputDeviceStats.bufferSize, input_device_buffer_occupied_size_mean: self.inputDeviceStats.bufferOccupiedSizeMean, input_device_session_sample_rate: self.inputDeviceStats.sessionSampleRate, output_device_session_sample_rate: self.outputDeviceStats.sessionSampleRate, input_device_time_from_connect_to_first_audio_ms: self.inputDeviceStats.timeFromConnectToFirstCallbackMs, output_device_time_from_connect_to_first_audio_ms: self.outputDeviceStats.timeFromConnectToFirstCallbackMs, audio_device_delay_ms: self.outputDeviceStats.delayMs, audio_device_total_delay_ms: self.inputDeviceStats.totalDelayMs };
    accumulated1 = undefined;
    if (restartCount2 != null) {
      accumulated1 = restartCount2.accumulated;
    }
    const bufferViolations = self.inputDeviceStats.bufferViolations;
    accumulated2 = undefined;
    if (bufferViolations != null) {
      accumulated2 = bufferViolations.accumulated;
    }
    const bufferViolations2 = self.outputDeviceStats.bufferViolations;
    accumulated3 = undefined;
    if (bufferViolations2 != null) {
      accumulated3 = bufferViolations2.accumulated;
    }
    return obj;
  }
  getAudioLevelStats() {
    const speakingAudioLevel = this.outboundStats.speakingAudioLevel;
    const report = speakingAudioLevel.getReport([1, 5, 10, 25, 50, 75, 90, 95, 99]);
    return { outbound_audio_level_db_p1: report.percentiles[1], outbound_audio_level_db_p5: report.percentiles[5], outbound_audio_level_db_p10: report.percentiles[10], outbound_audio_level_db_p25: report.percentiles[25], outbound_audio_level_db_p50: report.percentiles[50], outbound_audio_level_db_p75: report.percentiles[75], outbound_audio_level_db_p90: report.percentiles[90], outbound_audio_level_db_p95: report.percentiles[95], outbound_audio_level_db_p99: report.percentiles[99], outbound_audio_level_db_max: report.max, outbound_audio_level_db_mean: report.mean };
  }
  getPeriodicStats() {
    let accelerated;
    let cng;
    let current;
    let currentTimestampMs;
    let expanded;
    let merged;
    let normal;
    let preemptiveExpanded;
    let previous;
    let previousTimestampMs;
    let silent;
    let tmp6;
    let tmp7;
    const self = this;
    const items = [];
    const entries = Object.entries(this.periodicInboundStats);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let tmp8 = tmp7;
      ({ previous, current, currentTimestampMs, previousTimestampMs } = tmp7);
      let tmp9 = previousTimestampMs;
      let numRateSamples = tmp7.numRateSamples;
      if (undefined !== previousTimestampMs) {
        if (currentTimestampMs > tmp9) {
          let diff = currentTimestampMs - tmp9;
          obj = { userId: tmp6, silent, normal, merged, expanded, accelerated, preemptiveExpanded, cng, accelerateRate: tmp8.accelerateRateSum / numRateSamples, expandRate: tmp8.expandRateSum / numRateSamples, preemptiveExpandRate: tmp8.preemptiveExpandRateSum / numRateSamples, speechExpandRate: tmp8.speechExpandRateSum / numRateSamples, durationMs: diff };
          silent = current.silent;
          if (silent == null) {
            let num = previous.silent;
            if (num == null) {
              num = 0;
            }
            silent = 0 - num;
          }
          normal = current.normal;
          if (normal == null) {
            let num2 = previous.normal;
            if (num2 == null) {
              num2 = 0;
            }
            normal = 0 - num2;
          }
          merged = current.merged;
          if (merged == null) {
            let num3 = previous.merged;
            if (num3 == null) {
              num3 = 0;
            }
            merged = 0 - num3;
          }
          expanded = current.expanded;
          if (expanded == null) {
            let num4 = previous.expanded;
            if (num4 == null) {
              num4 = 0;
            }
            expanded = 0 - num4;
          }
          accelerated = current.accelerated;
          if (accelerated == null) {
            let num5 = previous.accelerated;
            if (num5 == null) {
              num5 = 0;
            }
            accelerated = 0 - num5;
          }
          preemptiveExpanded = current.preemptiveExpanded;
          if (preemptiveExpanded == null) {
            let num6 = previous.preemptiveExpanded;
            if (num6 == null) {
              num6 = 0;
            }
            preemptiveExpanded = 0 - num6;
          }
          cng = current.cng;
          if (cng == null) {
            let num7 = previous.cng;
            if (num7 == null) {
              num7 = 0;
            }
            cng = 0 - num7;
          }
          if (obj.normal + obj.merged + obj.expanded + obj.accelerated + obj.preemptiveExpanded > 0) {
            let arr = items.push(tmp26);
          }
        }
      }
      self.periodicInboundStats[tmp6].accelerateRateSum = 0;
      self.periodicInboundStats[tmp6].expandRateSum = 0;
      self.periodicInboundStats[tmp6].preemptiveExpandRateSum = 0;
      self.periodicInboundStats[tmp6].speechExpandRateSum = 0;
      self.periodicInboundStats[tmp6].numRateSamples = 0;
      self.periodicInboundStats[tmp6].previous = current;
      self.periodicInboundStats[tmp6].previousTimestampMs = currentTimestampMs;
      continue;
    }
    return items;
  }
  markUserDisconnected(sender_user_id) {
    if (null != this.inboundStats[sender_user_id]) {
      const _performance = performance;
      this.inboundStats[sender_user_id].disconnectedAtMs = performance.now();
    }
  }
  getInboundParticipants() {
    obj = SnowflakeUtilsDefault;
    return obj.keys(this.inboundStats);
  }
}
const prototype = VoiceQuality.prototype;
let result = size.fileFinishedImporting("lib/VoiceQuality.tsx");

export default VoiceQuality;
export { VoiceQualityEvent };
