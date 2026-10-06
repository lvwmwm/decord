// Module ID: 13363
// Function ID: 13364
// Name: VoiceQuality
// Dependencies: [32, 7165, 4895, 13364, 7171, 4892, 12, 11, 4866, 2]

// Module 13363 (VoiceQuality)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4892 */;
import Histogram from "Histogram" /* 7165 */;
import SystemResourcesDefault from "SystemResources" /* 7171 */;
import NetworkQualityDefault from "NetworkQuality" /* 13364 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4895 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, emit;

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
      let num = 0;
      let text5 = `${key10012}_mean`;
      if (null != obj2) {
        num = obj2.mean;
      }
      obj[text5] = num;
      let num2 = 0;
      let text6 = `${key10012}_p75`;
      if (null != obj2) {
        num2 = obj2.p75;
      }
      obj[text6] = num2;
      let num3 = 0;
      let text7 = `${key10012}_p95`;
      if (null != obj2) {
        num3 = obj2.p95;
      }
      obj[text7] = num3;
      let num4 = 0;
      let text8 = `${key10012}_p99`;
      if (null != obj2) {
        num4 = obj2.p99;
      }
      obj[text8] = num4;
      let num5 = 0;
      let text9 = `${key10012}_max`;
      if (null != obj2) {
        num5 = obj2.max;
      }
      obj[text9] = num5;
      continue;
    }
    continue;
  }
  return obj;
}
const VoiceQualityEvent = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
class VoiceQuality extends TypedEventEmitter {
  constructor(connection) {
    let histogram;
    const tmp3 = new VoiceQuality(tmp2, tmp);
    _require = tmp3;
    tmp3.sampleAudioDevice = function sampleAudioDevice(input, inputDeviceStats) {
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
        let num = input.timeToFirstCallbackMs;
        if (num == null) {
          num = 0;
        }
        const tmp6 = 0 !== num && undefined === inputDeviceStats.timeToFirstCallbackMs;
        if (tmp6) {
          inputDeviceStats.timeToFirstCallbackMs = input.timeToFirstCallbackMs;
        }
        let num3 = input.sessionSampleRate;
        if (num3 == null) {
          num3 = 0;
        }
        if (0 !== num3) {
          if (inputDeviceStats.sessionSampleRate !== input.sessionSampleRate) {
            let num4 = input.sessionSampleRate;
            emit = emit.emit;
            const InputDeviceSampleRateChanged = restartCount.InputDeviceSampleRateChanged;
            if (num4 == null) {
              num4 = 0;
            }
            emit(InputDeviceSampleRateChanged, num4);
          }
          inputDeviceStats.sessionSampleRate = input.sessionSampleRate;
        }
        const tmp10 = undefined !== input.timeFromConnectToFirstCallbackMs && undefined === inputDeviceStats.timeFromConnectToFirstCallbackMs;
        if (tmp10) {
          inputDeviceStats.timeFromConnectToFirstCallbackMs = input.timeFromConnectToFirstCallbackMs;
        }
      }
    };
    tmp3.appendTargetRates = function appendTargetRates(previousTimestampMs) {
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
    tmp3.sampleStats = function sampleStats(rtp) {
      let num;
      let outboundStats;
      if (null != rtp) {
        obj = num;
        const networkQuality = num.networkQuality;
        const incrementNetworkStats = networkQuality.incrementNetworkStats;
        const obj2 = outboundStats(dependencyMap[8]);
        const result = incrementNetworkStats(obj2.now());
        const systemResources = num.systemResources;
        systemResources.takeSample();
        num = 0;
        let arr = _modDef12;
        let item = arr.forEach(rtp.rtp.outbound, (type) => {
          let num2;
          let num3;
          let num4;
          let num5;
          let num6;
          let num7;
          let num8;
          let packetsLost;
          if ("audio" === type.type) {
            let num = type.bitrateTarget;
            if (num == null) {
              num = 0;
            }
            outboundStats = { packetsLost, passthroughCount: num2, encryptSuccessCount: num3, encryptFailureCount: num4, encryptDuration: num5, encryptAttempts: num6, encryptMaxAttempts: num7, encryptMissingKeyCount: num8, outboundStats };
            const merged = Object.assign(outboundStats.outboundStats);
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
            num7 = type.encryptMaxAttempts;
            if (num7 == null) {
              num7 = 0;
            }
            num8 = type.encryptMissingKeyCount;
            if (num8 == null) {
              num8 = 0;
            }
            const _Boolean = Boolean;
            const tmp5 = true === Boolean(type.audioDetected) && null != type.audioLevel;
            if (tmp5) {
              const speakingAudioLevel = tmp.outboundStats.speakingAudioLevel;
              const _Math = Math;
              speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
            }
          }
        });
        num.decryptionFailures = rtp.transport.decryptionFailures;
        num.routingFailures = rtp.transport.routingFailures;
        num.appendTargetRates(num.outboundStats, rtp.transport.availableOutgoingBitrate, num);
        const arr2 = _modDef12;
        const item1 = arr2.forEach(rtp.rtp.inbound, (arg0, arg1) => {
          let closure_0 = arg1;
          const arr = closure_1_1(closure_1_2[6]);
          const item = arr.forEach(arg0, function(type) {
            let accelerateRateSum;
            let bytesReceived;
            let expandRateSum;
            let fecPacketsReceived;
            let nackCount;
            let num10;
            let num11;
            let num12;
            let num14;
            let num15;
            let num16;
            let num17;
            let num2;
            let num3;
            let num4;
            let num5;
            let num6;
            let num7;
            let num8;
            let num9;
            let packetsLost;
            let packetsReceived;
            let passthroughCount;
            let preemptiveExpandRateSum;
            let prop;
            let prop1;
            let prop2;
            let speechExpandRateSum;
            if ("audio" === type.type) {
              ({ packetsReceived, packetsLost, bytesReceived, nackCount, fecPacketsReceived } = type);
              if (fecPacketsReceived == null) {
                fecPacketsReceived = 0;
              }
              let num = type.fecPacketsDiscarded;
              if (num == null) {
                num = 0;
              }
              const bufferStats = { audioJitterBuffer: type.audioJitterBuffer, audioJitterBufferHistogram: prop, audioJitterTarget: type.audioJitterTarget, audioJitterTargetHistogram: prop1, audioJitterDelay: type.audioJitterDelay, audioJitterDelayHistogram: prop2, relativeReceptionDelay: null, relativePlayoutDelay: null };
              prop = undefined;
              if (num.inboundStats[closure_0] != null) {
                prop = tmp23.bufferStats.audioJitterBufferHistogram;
              }
              if (prop == null) {
                const self = this;
                const self2 = this;
                prop = new closure_0(dependencyMap[1]).Histogram();
              }
              prop1 = undefined;
              if (num.inboundStats[closure_0] != null) {
                prop1 = tmp23.bufferStats.audioJitterTargetHistogram;
              }
              if (prop1 == null) {
                const self3 = this;
                const self4 = this;
                prop1 = new closure_0(dependencyMap[1]).Histogram();
              }
              prop2 = undefined;
              if (num.inboundStats[closure_0] != null) {
                prop2 = tmp23.bufferStats.audioJitterDelayHistogram;
              }
              if (prop2 == null) {
                const self5 = this;
                const self6 = this;
                prop2 = new closure_0(dependencyMap[1]).Histogram();
              }
              ({ relativeReceptionDelay: obj.relativeReceptionDelay, relativePlayoutDelay: obj.relativePlayoutDelay } = type);
              const audioJitterBufferHistogram = bufferStats.audioJitterBufferHistogram;
              let prop3 = type.audioJitterBufferSamples;
              const addSamples = audioJitterBufferHistogram.addSamples;
              if (prop3 == null) {
                prop3 = [];
              }
              addSamples(prop3);
              const audioJitterDelayHistogram = bufferStats.audioJitterDelayHistogram;
              let prop4 = type.audioJitterDelaySamples;
              const addSamples2 = audioJitterDelayHistogram.addSamples;
              if (prop4 == null) {
                prop4 = [];
              }
              addSamples2(prop4);
              const audioJitterTargetHistogram = bufferStats.audioJitterTargetHistogram;
              let prop5 = type.audioJitterTargetSamples;
              const addSamples3 = audioJitterTargetHistogram.addSamples;
              if (prop5 == null) {
                prop5 = [];
              }
              addSamples3(prop5);
              const obj3 = { silent: null, normal: null, merged: null, expanded: null, accelerated: null, preemptiveExpanded: null, cng: null };
              ({ opSilence: obj2.silent, opNormal: obj2.normal, opMerge: obj2.merged, opExpand: obj2.expanded, opAccelerate: obj2.accelerated, opPreemptiveExpand: obj2.preemptiveExpanded, opCNG: obj2.cng, passthroughCount } = type);
              if (passthroughCount == null) {
                passthroughCount = 0;
              }
              const obj4 = { passthroughCount, decryptSuccessCount: num2, decryptFailureCount: num3, decryptDuration: num4, decryptAttempts: num5, decryptMissingKeyCount: num6, decryptInvalidNonceCount: num7 };
              num2 = type.decryptSuccessCount;
              if (num2 == null) {
                num2 = 0;
              }
              num3 = type.decryptFailureCount;
              if (num3 == null) {
                num3 = 0;
              }
              num4 = type.decryptDuration;
              if (num4 == null) {
                num4 = 0;
              }
              num5 = type.decryptAttempts;
              if (num5 == null) {
                num5 = 0;
              }
              num6 = type.decryptMissingKeyCount;
              if (num6 == null) {
                num6 = 0;
              }
              num7 = type.decryptInvalidNonceCount;
              if (num7 == null) {
                num7 = 0;
              }
              if (null != num.inboundStats[closure_0]) {
                let decryptFailureBeforeSuccessCount = tmp23.decryptFailureBeforeSuccessCount;
                if (decryptFailureBeforeSuccessCount == null) {
                  let decryptFailureCount;
                  if (obj4.decryptSuccessCount > 0) {
                    decryptFailureCount = obj4.decryptFailureCount;
                  }
                  decryptFailureBeforeSuccessCount = decryptFailureCount;
                }
                const inboundStats = tmp21.inboundStats;
                const obj5 = { connectedAtMs: num.inboundStats[closure_0].connectedAtMs, packetsReceived, bytesReceived, packetsLost, nackCount, fecPacketsReceived, fecPacketsDiscarded: num, bufferStats, frameOpStats: obj3, decryptFailureBeforeSuccessCount };
                if (nackCount == null) {
                  nackCount = 0;
                }
                const merged = Object.assign(obj4);
                inboundStats[closure_0] = obj5;
                const _performance3 = performance;
                const periodicInboundStats2 = tmp21.periodicInboundStats;
                const obj6 = { previousTimestampMs: num.periodicInboundStats[closure_0].previousTimestampMs, previous: num.periodicInboundStats[closure_0].previous, currentTimestampMs: performance.now(), current: obj3, accelerateRateSum: accelerateRateSum + num14, expandRateSum: expandRateSum + num15, preemptiveExpandRateSum: preemptiveExpandRateSum + num16, speechExpandRateSum: speechExpandRateSum + num17, numRateSamples: num.periodicInboundStats[closure_0].numRateSamples + 1 };
                num14 = type.accelerateRate;
                accelerateRateSum = tmp21.periodicInboundStats[tmp22].accelerateRateSum;
                if (num14 == null) {
                  num14 = 0;
                }
                num15 = type.expandRate;
                expandRateSum = tmp21.periodicInboundStats[tmp22].expandRateSum;
                if (num15 == null) {
                  num15 = 0;
                }
                num16 = type.preemptiveExpandRate;
                preemptiveExpandRateSum = tmp21.periodicInboundStats[tmp22].preemptiveExpandRateSum;
                if (num16 == null) {
                  num16 = 0;
                }
                num17 = type.speechExpandRate;
                speechExpandRateSum = tmp21.periodicInboundStats[tmp22].speechExpandRateSum;
                if (num17 == null) {
                  num17 = 0;
                }
                periodicInboundStats2[closure_0] = obj6;
              } else {
                const _performance4 = performance;
                const inboundStats2 = tmp21.inboundStats;
                const obj7 = { connectedAtMs: performance.now(), packetsReceived, bytesReceived, packetsLost, nackCount: num8, fecPacketsReceived, fecPacketsDiscarded: num, bufferStats, frameOpStats: obj3 };
                num8 = nackCount;
                if (nackCount == null) {
                  num8 = 0;
                }
                const merged1 = Object.assign(obj4);
                inboundStats2[closure_0] = obj7;
                const _performance = performance;
                const periodicInboundStats = tmp21.periodicInboundStats;
                const _performance2 = performance;
                const obj13 = { previousTimestampMs: performance.now(), previous: obj3, currentTimestampMs: performance.now(), current: obj3, accelerateRateSum: num9, expandRateSum: num10, preemptiveExpandRateSum: num11, speechExpandRateSum: num12, numRateSamples: 1 };
                num9 = type.accelerateRate;
                if (num9 == null) {
                  num9 = 0;
                }
                num10 = type.expandRate;
                if (num10 == null) {
                  num10 = 0;
                }
                num11 = type.preemptiveExpandRate;
                if (num11 == null) {
                  num11 = 0;
                }
                num12 = type.speechExpandRate;
                if (num12 == null) {
                  num12 = 0;
                }
                periodicInboundStats[closure_0] = obj13;
              }
            }
          });
        });
        if (undefined !== rtp.audioDevice) {
          obj.sampleAudioDevice(rtp.audioDevice.input, obj.inputDeviceStats);
          obj.sampleAudioDevice(rtp.audioDevice.output, obj.outputDeviceStats);
        }
      }
    };
    tmp3.connection = connection;
    const tmp4 = new NetworkQualityDefault();
    tmp3.networkQuality = tmp4;
    let tmp5 = new SystemResourcesDefault();
    tmp3.systemResources = tmp5;
    tmp3.inboundStats = {};
    let outboundStats = { packetsSent: 0, bytesSent: 0, packetsLost: 0, passthroughCount: 0, encryptSuccessCount: 0, encryptFailureCount: 0, encryptDuration: 0, encryptAttempts: 0, encryptMaxAttempts: 0, encryptMissingKeyCount: 0, bytesAvailable: 0, bytesTarget: 0, previousTimestampMs: 0, aggregationDurationMs: 0, speakingAudioLevel: histogram };
    histogram = new require("Histogram").Histogram();
    tmp3.outboundStats = outboundStats;
    tmp3.periodicInboundStats = {};
    tmp3.inputDeviceStats = {};
    tmp3.outputDeviceStats = {};
    return tmp3;
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
  getInboundDurationStats(sender_user_id) {
    if (null == this.inboundStats[sender_user_id]) {
      obj = {};
    } else {
      obj = { duration_connected_ms: Math.round(performance.now() - this.inboundStats[sender_user_id].connectedAtMs) };
      const _Math = Math;
      const _performance = performance;
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
    return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
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
    obj = { input_device_restart_count: accumulated, output_device_restart_count: accumulated1, input_device_time_to_first_audio: self.inputDeviceStats.timeToFirstCallbackMs, output_device_time_to_first_audio: self.outputDeviceStats.timeToFirstCallbackMs, input_device_buffer_overfull_count: accumulated2, output_device_buffer_underrun_count: accumulated3, input_device_session_sample_rate: self.inputDeviceStats.sessionSampleRate, output_device_session_sample_rate: self.outputDeviceStats.sessionSampleRate, input_device_time_from_connect_to_first_audio_ms: self.inputDeviceStats.timeFromConnectToFirstCallbackMs, output_device_time_from_connect_to_first_audio_ms: self.outputDeviceStats.timeFromConnectToFirstCallbackMs };
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
  destroyUser(arg0) {
    delete this.inboundStats[arg0];
    delete this.periodicInboundStats[arg0];
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
