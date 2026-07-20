// Module ID: 12618
// Function ID: 97035
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12618 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function explodePlayoutMetrics(obj) {
  obj = {};
  for (const key10016 in arg0) {
    let tmp12 = key10016;
    let obj2 = arg0[key10016];
    let tmp13 = closure_0;
    let tmp14 = closure_2;
    if (obj2 instanceof closure_0(closure_2[6]).Histogram) {
      let report = obj2.getReport([]);
      let _Math = Math;
      let text = `${key10016}_mean`;
      obj[`${key10016}_mean`] = Math.round(report.mean);
      let _Math2 = Math;
      let text1 = `${key10016}_p75`;
      obj[`${key10016}_p75`] = Math.round(report.percentiles[75]);
      let _Math3 = Math;
      let text2 = `${key10016}_p95`;
      obj[`${key10016}_p95`] = Math.round(report.percentiles[95]);
      let _Math4 = Math;
      let text3 = `${key10016}_p99`;
      obj[`${key10016}_p99`] = Math.round(report.percentiles[99]);
      let _Math5 = Math;
      let text4 = `${key10016}_max`;
      obj[`${key10016}_max`] = Math.round(report.max);
      // continue
    } else {
      let num = 0;
      let text5 = `${key10016}_mean`;
      if (null != obj2) {
        num = obj2.mean;
      }
      obj[text5] = num;
      let num2 = 0;
      let text6 = `${key10016}_p75`;
      if (null != obj2) {
        num2 = obj2.p75;
      }
      obj[text6] = num2;
      let num3 = 0;
      let text7 = `${key10016}_p95`;
      if (null != obj2) {
        num3 = obj2.p95;
      }
      obj[text7] = num3;
      let num4 = 0;
      let text8 = `${key10016}_p99`;
      if (null != obj2) {
        num4 = obj2.p99;
      }
      obj[text8] = num4;
      let num5 = 0;
      let text9 = `${key10016}_max`;
      if (null != obj2) {
        num5 = obj2.max;
      }
      obj[text9] = num5;
      // continue
    }
    continue;
  }
  return obj;
}
function handleCounter(lastValue) {
  let accumulated;
  let obj = arg1;
  if (null == arg1) {
    obj = { "Null": false, "Null": true };
  }
  ({ accumulated, lastValue } = obj);
  obj = {};
  if (lastValue > lastValue) {
    let sum = accumulated + lastValue;
  } else {
    sum = accumulated + (lastValue - lastValue);
  }
  obj.accumulated = sum;
  obj.lastValue = lastValue;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const obj = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
const tmp2 = (arg0) => {
  class VoiceQuality {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, VoiceQuality);
      obj = closure_7(VoiceQuality);
      tmp2 = closure_6;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, [], closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      VoiceQuality = tmp2Result;
      tmp2Result.connection = arg0;
      tmp2Result.sampleAudioDevice = (restartCount, restartCount2) => {
        if (undefined !== restartCount) {
          if (undefined !== restartCount.restartCount) {
            restartCount2.restartCount = callback2(restartCount.restartCount, restartCount2.restartCount);
          }
          if (undefined !== restartCount.bufferViolations) {
            restartCount2.bufferViolations = callback2(restartCount.bufferViolations, restartCount2.bufferViolations);
          }
          let num2 = 0;
          if (null != restartCount.timeToFirstCallbackMs) {
            num2 = timeToFirstCallbackMs;
          }
          if (tmp4) {
            restartCount2.timeToFirstCallbackMs = restartCount.timeToFirstCallbackMs;
          }
          const sessionSampleRate = restartCount.sessionSampleRate;
          let num3 = 0;
          if (null != sessionSampleRate) {
            num3 = sessionSampleRate;
          }
          if (0 !== num3) {
            if (restartCount2.sessionSampleRate !== restartCount.sessionSampleRate) {
              const sessionSampleRate2 = restartCount.sessionSampleRate;
              let num4 = 0;
              if (null != sessionSampleRate2) {
                num4 = sessionSampleRate2;
              }
              tmp2Result.emit(obj.InputDeviceSampleRateChanged, num4);
            }
            restartCount2.sessionSampleRate = restartCount.sessionSampleRate;
          }
          if (tmp8) {
            restartCount2.timeFromConnectToFirstCallbackMs = restartCount.timeFromConnectToFirstCallbackMs;
          }
          const tmp4 = 0 !== num2 && undefined === restartCount2.timeToFirstCallbackMs;
          const tmp8 = undefined !== restartCount.timeFromConnectToFirstCallbackMs && undefined === restartCount2.timeFromConnectToFirstCallbackMs;
        }
      };
      tmp2Result.appendTargetRates = (previousTimestampMs) => {
        let num = arg1;
        let num2 = arg2;
        if (arg1 === undefined) {
          num = 0;
        }
        if (num2 === undefined) {
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
      tmp2Result.sampleStats = (rtp) => {
        if (null != rtp) {
          const networkQuality = tmp2Result.networkQuality;
          const result = networkQuality.incrementNetworkStats(tmp2Result(closure_2[7]).now());
          const systemResources = tmp2Result.systemResources;
          systemResources.takeSample();
          const duration4 = tmp2Result.duration;
          duration4.connected = duration4.connected + 1;
          const obj2 = tmp2Result(closure_2[7]);
          let obj = { packetsReceived: 0 };
          const callback = 0;
          const reduced = callback(closure_2[8]).reduce(tmp2Result.inboundStats, (packetsReceived, packetsReceived2) => {
            packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
            return packetsReceived;
          }, obj);
          const arr2 = callback(closure_2[8]);
          const item = callback(closure_2[8]).forEach(rtp.rtp.outbound, (type) => {
            let packetsLost;
            if ("audio" === type.type) {
              const bitrateTarget = type.bitrateTarget;
              let num = 0;
              if (null != bitrateTarget) {
                num = bitrateTarget;
              }
              let closure_1 = num;
              const obj = {};
              const merged = Object.assign(type.outboundStats);
              obj["packetsSent"] = type.packetsSent;
              ({ bytesSent: obj["bytesSent"], packetsLost } = type);
              let num2 = 0;
              if (null != packetsLost) {
                num2 = packetsLost;
              }
              obj["packetsLost"] = num2;
              const passthroughCount = type.passthroughCount;
              let num3 = 0;
              if (null != passthroughCount) {
                num3 = passthroughCount;
              }
              obj["passthroughCount"] = num3;
              const encryptSuccessCount = type.encryptSuccessCount;
              let num4 = 0;
              if (null != encryptSuccessCount) {
                num4 = encryptSuccessCount;
              }
              obj["encryptSuccessCount"] = num4;
              const encryptFailureCount = type.encryptFailureCount;
              let num5 = 0;
              if (null != encryptFailureCount) {
                num5 = encryptFailureCount;
              }
              obj["encryptFailureCount"] = num5;
              const encryptDuration = type.encryptDuration;
              let num6 = 0;
              if (null != encryptDuration) {
                num6 = encryptDuration;
              }
              obj["encryptDuration"] = num6;
              const encryptAttempts = type.encryptAttempts;
              let num7 = 0;
              if (null != encryptAttempts) {
                num7 = encryptAttempts;
              }
              obj["encryptAttempts"] = num7;
              const encryptMaxAttempts = type.encryptMaxAttempts;
              let num8 = 0;
              if (null != encryptMaxAttempts) {
                num8 = encryptMaxAttempts;
              }
              obj["encryptMaxAttempts"] = num8;
              const encryptMissingKeyCount = type.encryptMissingKeyCount;
              let num9 = 0;
              if (null != encryptMissingKeyCount) {
                num9 = encryptMissingKeyCount;
              }
              obj["encryptMissingKeyCount"] = num9;
              type.outboundStats = obj;
              const _Boolean = Boolean;
              if (tmp5) {
                const speakingAudioLevel = type.outboundStats.speakingAudioLevel;
                const _Math = Math;
                speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
              }
              const tmp = type;
              const tmp5 = true === Boolean(type.audioDetected) && null != type.audioLevel;
            }
          });
          tmp2Result.decryptionFailures = rtp.transport.decryptionFailures;
          tmp2Result.routingFailures = rtp.transport.routingFailures;
          tmp2Result.appendTargetRates(tmp2Result.outboundStats, rtp.transport.availableOutgoingBitrate, callback);
          const arr3 = callback(closure_2[8]);
          const item1 = callback(closure_2[8]).forEach(rtp.rtp.inbound, (arg0, arg1) => {
            arg0 = arg1;
            const item = v0(closure_2[8]).forEach(arg0, (type, self) => {
              let bytesReceived;
              let decryptFailureBeforeSuccessCount;
              let fecPacketsReceived;
              let mosBuckets;
              let nackCount;
              let packetsLost;
              let packetsReceived;
              if ("audio" === type.type) {
                const ping = self.transport.ping;
                let num = 0;
                if (null != ping) {
                  num = ping;
                }
                ({ packetsReceived, packetsLost, bytesReceived, nackCount, fecPacketsReceived } = type);
                let num2 = 0;
                if (null != fecPacketsReceived) {
                  num2 = fecPacketsReceived;
                }
                const fecPacketsDiscarded = type.fecPacketsDiscarded;
                let num3 = 0;
                if (null != fecPacketsDiscarded) {
                  num3 = fecPacketsDiscarded;
                }
                const jitterBuffer = type.jitterBuffer;
                let num4 = 0;
                if (null != jitterBuffer) {
                  num4 = jitterBuffer;
                }
                let obj = { audioJitterBuffer: type.audioJitterBuffer };
                let prop;
                if (null != self.inboundStats[closure_0]) {
                  prop = tmp54.bufferStats.audioJitterBufferHistogram;
                }
                if (null == prop) {
                  const Histogram = self(closure_2[6]).Histogram;
                  const prototype = Histogram.prototype;
                  prop = new Histogram();
                }
                obj.audioJitterBufferHistogram = prop;
                obj.audioJitterTarget = type.audioJitterTarget;
                let prop1;
                if (null != self.inboundStats[closure_0]) {
                  prop1 = tmp54.bufferStats.audioJitterTargetHistogram;
                }
                if (null == prop1) {
                  const Histogram2 = self(closure_2[6]).Histogram;
                  const prototype2 = Histogram2.prototype;
                  prop1 = new Histogram2();
                }
                obj.audioJitterTargetHistogram = prop1;
                obj.audioJitterDelay = type.audioJitterDelay;
                let prop2;
                if (null != self.inboundStats[closure_0]) {
                  prop2 = tmp54.bufferStats.audioJitterDelayHistogram;
                }
                if (null == prop2) {
                  const Histogram3 = self(closure_2[6]).Histogram;
                  const prototype3 = Histogram3.prototype;
                  prop2 = new Histogram3();
                }
                obj.audioJitterDelayHistogram = prop2;
                ({ relativeReceptionDelay: obj.relativeReceptionDelay, relativePlayoutDelay: obj.relativePlayoutDelay } = type);
                const audioJitterBufferHistogram = obj.audioJitterBufferHistogram;
                let prop3 = type.audioJitterBufferSamples;
                if (null == prop3) {
                  prop3 = [];
                }
                audioJitterBufferHistogram.addSamples(prop3);
                const audioJitterDelayHistogram = obj.audioJitterDelayHistogram;
                let prop4 = type.audioJitterDelaySamples;
                if (null == prop4) {
                  prop4 = [];
                }
                audioJitterDelayHistogram.addSamples(prop4);
                const audioJitterTargetHistogram = obj.audioJitterTargetHistogram;
                let prop5 = type.audioJitterTargetSamples;
                if (null == prop5) {
                  prop5 = [];
                }
                audioJitterTargetHistogram.addSamples(prop5);
                obj = {};
                ({ opSilence: obj2.silent, opNormal: obj2.normal, opMerge: obj2.merged, opExpand: obj2.expanded, opAccelerate: obj2.accelerated, opPreemptiveExpand: obj2.preemptiveExpanded, opCNG: obj2.cng } = type);
                obj = {};
                const passthroughCount = type.passthroughCount;
                let num8 = 0;
                if (null != passthroughCount) {
                  num8 = passthroughCount;
                }
                obj.passthroughCount = num8;
                const decryptSuccessCount = type.decryptSuccessCount;
                let num9 = 0;
                if (null != decryptSuccessCount) {
                  num9 = decryptSuccessCount;
                }
                obj.decryptSuccessCount = num9;
                let decryptFailureCount = type.decryptFailureCount;
                let num10 = 0;
                if (null != decryptFailureCount) {
                  num10 = decryptFailureCount;
                }
                obj.decryptFailureCount = num10;
                const decryptDuration = type.decryptDuration;
                let num11 = 0;
                if (null != decryptDuration) {
                  num11 = decryptDuration;
                }
                obj.decryptDuration = num11;
                const decryptAttempts = type.decryptAttempts;
                let num12 = 0;
                if (null != decryptAttempts) {
                  num12 = decryptAttempts;
                }
                obj.decryptAttempts = num12;
                const decryptMissingKeyCount = type.decryptMissingKeyCount;
                let num13 = 0;
                if (null != decryptMissingKeyCount) {
                  num13 = decryptMissingKeyCount;
                }
                obj.decryptMissingKeyCount = num13;
                const decryptInvalidNonceCount = type.decryptInvalidNonceCount;
                let num14 = 0;
                if (null != decryptInvalidNonceCount) {
                  num14 = decryptInvalidNonceCount;
                }
                obj.decryptInvalidNonceCount = num14;
                if (null != self.inboundStats[closure_0]) {
                  const diff = packetsReceived - tmp54.packetsReceived;
                  const diff1 = packetsLost - tmp54.packetsLost;
                  ({ mosBuckets, decryptFailureBeforeSuccessCount } = tmp54);
                  if (null == decryptFailureBeforeSuccessCount) {
                    decryptFailureCount = undefined;
                    if (obj.decryptSuccessCount > 0) {
                      decryptFailureCount = obj.decryptFailureCount;
                    }
                    decryptFailureBeforeSuccessCount = decryptFailureCount;
                  }
                  let num21 = 0;
                  if (tmp28) {
                    const sum = num + num4;
                    let obj4 = callback(closure_2[8]);
                    const calculateMosResult = self.calculateMos(sum, obj4.clamp(diff1 / (diff + diff1), 0, 1));
                    const _Math = Math;
                    const rounded = Math.floor(calculateMosResult);
                    mosBuckets[rounded] = mosBuckets[rounded] + 1;
                    num21 = calculateMosResult;
                  }
                  const obj1 = { packetsReceived, bytesReceived, packetsLost };
                  let num24 = 0;
                  if (null != nackCount) {
                    num24 = nackCount;
                  }
                  obj1.nackCount = num24;
                  obj1.fecPacketsReceived = num2;
                  obj1.fecPacketsDiscarded = num3;
                  obj1.mos = num21;
                  obj1.mosSum = tmp54.mosSum + num21;
                  let num25 = 0;
                  if (num21 > 0) {
                    num25 = 1;
                  }
                  obj1.mosCount = tmp54.mosCount + num25;
                  obj1.mosBuckets = mosBuckets;
                  obj1.bufferStats = obj;
                  obj1.frameOpStats = obj;
                  obj1.decryptFailureBeforeSuccessCount = decryptFailureBeforeSuccessCount;
                  const merged = Object.assign(obj);
                  self.inboundStats[self] = obj1;
                  const obj2 = { previousTimestampMs: self.periodicInboundStats[closure_0].previousTimestampMs, previous: self.periodicInboundStats[closure_0].previous };
                  const _performance3 = performance;
                  obj2.currentTimestampMs = performance.now();
                  obj2.current = obj;
                  const accelerateRate2 = type.accelerateRate;
                  let num26 = 0;
                  if (null != accelerateRate2) {
                    num26 = accelerateRate2;
                  }
                  obj2.accelerateRateSum = self.periodicInboundStats[closure_0].accelerateRateSum + num26;
                  const expandRate2 = type.expandRate;
                  let num27 = 0;
                  if (null != expandRate2) {
                    num27 = expandRate2;
                  }
                  obj2.expandRateSum = self.periodicInboundStats[closure_0].expandRateSum + num27;
                  const preemptiveExpandRate2 = type.preemptiveExpandRate;
                  let num28 = 0;
                  if (null != preemptiveExpandRate2) {
                    num28 = preemptiveExpandRate2;
                  }
                  obj2.preemptiveExpandRateSum = self.periodicInboundStats[closure_0].preemptiveExpandRateSum + num28;
                  const speechExpandRate2 = type.speechExpandRate;
                  let num29 = 0;
                  if (null != speechExpandRate2) {
                    num29 = speechExpandRate2;
                  }
                  obj2.speechExpandRateSum = self.periodicInboundStats[closure_0].speechExpandRateSum + num29;
                  obj2.numRateSamples = self.periodicInboundStats[closure_0].numRateSamples + 1;
                  self.periodicInboundStats[self] = obj2;
                  const tmp28 = diff > 0 && diff1 >= 0;
                  const tmp37 = self;
                  const tmp42 = self;
                } else {
                  const obj3 = { packetsReceived, bytesReceived, packetsLost };
                  let num15 = 0;
                  if (null != nackCount) {
                    num15 = nackCount;
                  }
                  obj3.nackCount = num15;
                  obj3.fecPacketsReceived = num2;
                  obj3.fecPacketsDiscarded = num3;
                  obj3.mos = 0;
                  obj3.mosSum = 0;
                  obj3.mosCount = 0;
                  obj3.mosBuckets = [31, 27, 33, 4511, 31];
                  obj3.bufferStats = obj;
                  obj3.frameOpStats = obj;
                  const merged1 = Object.assign(obj);
                  self.inboundStats[self] = obj3;
                  obj4 = {};
                  const _performance = performance;
                  obj4.previousTimestampMs = performance.now();
                  obj4.previous = obj;
                  const _performance2 = performance;
                  obj4.currentTimestampMs = performance.now();
                  obj4.current = obj;
                  const accelerateRate = type.accelerateRate;
                  let num16 = 0;
                  if (null != accelerateRate) {
                    num16 = accelerateRate;
                  }
                  obj4.accelerateRateSum = num16;
                  const expandRate = type.expandRate;
                  let num17 = 0;
                  if (null != expandRate) {
                    num17 = expandRate;
                  }
                  obj4.expandRateSum = num17;
                  const preemptiveExpandRate = type.preemptiveExpandRate;
                  let num18 = 0;
                  if (null != preemptiveExpandRate) {
                    num18 = preemptiveExpandRate;
                  }
                  obj4.preemptiveExpandRateSum = num18;
                  const speechExpandRate = type.speechExpandRate;
                  let num19 = 0;
                  if (null != speechExpandRate) {
                    num19 = speechExpandRate;
                  }
                  obj4.speechExpandRateSum = num19;
                  obj4.numRateSamples = 1;
                  self.periodicInboundStats[self] = obj4;
                  const tmp23 = self;
                  const tmp58 = self;
                }
              }
            });
          });
          if (undefined !== rtp.audioDevice) {
            tmp2Result.sampleAudioDevice(rtp.audioDevice.input, tmp2Result.inputDeviceStats);
            tmp2Result.sampleAudioDevice(rtp.audioDevice.output, tmp2Result.outputDeviceStats);
          }
          let flag = false;
          if (tmp2Result.outboundStats.packetsSent > tmp2Result.outboundStats.packetsSent) {
            const duration = tmp2Result.duration;
            duration.speaking = duration.speaking + 1;
            flag = true;
          }
          const arr4 = callback(closure_2[8]);
          obj = { packetsReceived: 0 };
          let flag2 = false;
          if (arr.reduce(tmp2Result.inboundStats, (packetsReceived, packetsReceived2) => {
            packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
            return packetsReceived;
          }, obj).packetsReceived > reduced.packetsReceived) {
            const duration2 = tmp2Result.duration;
            duration2.listening = duration2.listening + 1;
            flag2 = true;
          }
          if (!flag) {
            flag = flag2;
          }
          if (flag) {
            const duration3 = tmp2Result.duration;
            duration3.participation = duration3.participation + 1;
          }
          const arr = callback(closure_2[8]);
        }
      };
      tmp7 = closure_1(closure_2[9]);
      tmp7 = new tmp7();
      tmp2Result.networkQuality = tmp7;
      tmp9 = closure_1(closure_2[10]);
      tmp9 = new tmp9();
      tmp2Result.systemResources = tmp9;
      tmp2Result.inboundStats = {};
      obj = {};
      histogram = new VoiceQuality(closure_2[6]).Histogram();
      obj.speakingAudioLevel = histogram;
      tmp2Result.outboundStats = obj;
      tmp2Result.duration = {};
      tmp2Result.periodicInboundStats = {};
      tmp2Result.inputDeviceStats = {};
      tmp2Result.outputDeviceStats = {};
      return tmp2Result;
    }
  }
  const arg1 = VoiceQuality;
  callback2(VoiceQuality, arg0);
  let obj = {
    key: "start",
    value() {
      const connection = this.connection;
      connection.on(VoiceQuality(closure_2[11]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "stop",
    value() {
      const connection = this.connection;
      connection.off(VoiceQuality(closure_2[11]).BaseConnectionEvent.Stats, this.sampleStats);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMosStats",
    value() {
      let obj = { "Bool(false)": false, "Bool(false)": true };
      let num = 0;
      obj.mosBuckets = [31, 27, 33, 4511, 31];
      const reduced = callback(closure_2[8]).reduce(this.inboundStats, (mosSum, mosSum2) => {
        mosSum.mosSum = mosSum.mosSum + mosSum2.mosSum;
        mosSum.mosCount = mosSum.mosCount + mosSum2.mosCount;
        let num = 0;
        do {
          let mosBuckets = mosSum.mosBuckets;
          mosBuckets[num] = mosBuckets[num] + mosSum2.mosBuckets[num];
          num = num + 1;
        } while (num < 5);
        return mosSum;
      }, obj);
      obj = {};
      if (reduced.mosCount > 0) {
        num = reduced.mosSum / reduced.mosCount;
      }
      obj.mos_mean = num;
      obj.mos_1 = reduced.mosBuckets[1];
      obj.mos_2 = reduced.mosBuckets[2];
      obj.mos_3 = reduced.mosBuckets[3];
      obj.mos_4 = reduced.mosBuckets[4];
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPacketStats",
    value() {
      const reduced = callback(closure_2[8]).reduce(this.inboundStats, (packetsReceived, packetsReceived2) => {
        packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
        packetsReceived.packetsReceivedLost = packetsReceived.packetsReceivedLost + packetsReceived2.packetsLost;
        packetsReceived.nackCount = packetsReceived.nackCount + packetsReceived2.nackCount;
        packetsReceived.fecPacketsReceived = packetsReceived.fecPacketsReceived + packetsReceived2.fecPacketsReceived;
        packetsReceived.fecPacketsDiscarded = packetsReceived.fecPacketsDiscarded + packetsReceived2.fecPacketsDiscarded;
        return packetsReceived;
      }, { numpad .: false, numpad /: null, num lock: "", scroll lock: null, getStartedFooterButtonsContainer: null });
      return { packets_sent: this.outboundStats.packetsSent, packets_sent_lost: this.outboundStats.packetsLost, packets_received: reduced.packetsReceived, packets_received_lost: reduced.packetsReceivedLost, num_nacks_sent: reduced.nackCount, fec_packets_received: reduced.fecPacketsReceived, fec_packets_discarded: reduced.fecPacketsDiscarded };
    }
  };
  items[4] = {
    key: "getBytesStats",
    value() {
      const self = this;
      const result = this.outboundStats.aggregationDurationMs / 1000;
      const obj = { bytes_sent: this.outboundStats.bytesSent, bytes_received: callback(closure_2[8]).reduce(this.inboundStats, (arg0, bytesReceived) => arg0 + bytesReceived.bytesReceived, 0) };
      let num = 0;
      if (result > 0) {
        const _Math = Math;
        num = Math.round(8 * self.outboundStats.bytesAvailable / result);
      }
      obj.outbound_bandwidth_estimate = num;
      let num2 = 0;
      if (result > 0) {
        const _Math2 = Math;
        num2 = Math.round(8 * self.outboundStats.bytesTarget / result);
      }
      obj.audio_target_bitrate = num2;
      return obj;
    }
  };
  items[5] = {
    key: "getNetworkStats",
    value() {
      const networkQuality = this.networkQuality;
      return networkQuality.getStats();
    }
  };
  items[6] = {
    key: "getSystemResourceStats",
    value() {
      const systemResources = this.systemResources;
      return systemResources.getStats();
    }
  };
  items[7] = {
    key: "getBufferStats",
    value() {
      const reduced = callback(closure_2[8]).reduce(this.inboundStats, (arg0, bufferStats) => {
        bufferStats = arg0;
        const audioJitterBufferHistogram = bufferStats.bufferStats.audioJitterBufferHistogram;
        if (audioJitterBufferHistogram.getSamples() > 0) {
          const audioJitterBufferHistogram2 = bufferStats.bufferStats.audioJitterBufferHistogram;
          let percentile = audioJitterBufferHistogram2.getPercentile(75);
        } else {
          percentile = null;
          if (null != bufferStats.bufferStats.audioJitterBuffer) {
            percentile = bufferStats.bufferStats.audioJitterBuffer.p75;
          }
        }
        let percentile1 = null;
        if (null != bufferStats) {
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
          const tmp4 = null != percentile && percentile > percentile1;
        }
        if (tmp3) {
          bufferStats = bufferStats.bufferStats;
        }
        return bufferStats;
      }, null);
      if (null == reduced) {
        if (null == reduced) {
          if (null == reduced) {
            let obj = {};
            obj = { audio_jitter_buffer: null, audio_jitter_target: null, audio_jitter_delay: null };
            let prop;
            if (null != reduced) {
              prop = reduced.relativeReceptionDelay;
            }
            let tmp12 = null;
            if (null != prop) {
              tmp12 = prop;
            }
            obj.relative_reception_delay = tmp12;
            let relativePlayoutDelay;
            if (null != reduced) {
              relativePlayoutDelay = reduced.relativePlayoutDelay;
            }
            let tmp14 = null;
            if (null != relativePlayoutDelay) {
              tmp14 = relativePlayoutDelay;
            }
            obj.relative_playout_delay = tmp14;
            const merged = Object.assign(closure_11(obj));
            return obj;
          } else {
            const audioJitterDelayHistogram = reduced.audioJitterDelayHistogram;
            if (audioJitterDelayHistogram.getSamples() > 0) {
              let prop1 = reduced.audioJitterDelayHistogram;
            } else {
              prop1 = null;
              if (null != reduced.audioJitterDelay) {
                prop1 = reduced.audioJitterDelay;
              }
            }
          }
        } else {
          const audioJitterTargetHistogram = reduced.audioJitterTargetHistogram;
          if (audioJitterTargetHistogram.getSamples() > 0) {
            let prop2 = reduced.audioJitterTargetHistogram;
          } else {
            prop2 = null;
            if (null != reduced.audioJitterTarget) {
              prop2 = reduced.audioJitterTarget;
            }
          }
        }
      } else {
        const audioJitterBufferHistogram = reduced.audioJitterBufferHistogram;
        if (audioJitterBufferHistogram.getSamples() > 0) {
          let prop3 = reduced.audioJitterBufferHistogram;
        } else {
          prop3 = null;
          if (null != reduced.audioJitterBuffer) {
            prop3 = reduced.audioJitterBuffer;
          }
        }
      }
    }
  };
  items[8] = {
    key: "getFrameOpStats",
    value() {
      const reduced = callback(closure_2[8]).reduce(this.inboundStats, (silent, frameOpStats) => {
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
      }, { "Bool(false)": 1091658877, "Bool(false)": 151597, "Bool(false)": 6258, "Bool(false)": 6144, "Bool(false)": -180289280, "Bool(false)": 1375732285, "Bool(false)": 1685947892 });
      return { frame_op_silent: reduced.silent, frame_op_normal: reduced.normal, frame_op_merged: reduced.merged, frame_op_expanded: reduced.expanded, frame_op_accelerated: reduced.accelerated, frame_op_preemptive_expanded: reduced.preemptiveExpanded, frame_op_cng: reduced.cng };
    }
  };
  items[9] = {
    key: "getDurationStats",
    value() {
      return { duration_listening: this.duration.listening, duration_speaking: this.duration.speaking, duration_participation: this.duration.participation, duration_connected: this.duration.connected };
    }
  };
  items[10] = {
    key: "getTransportStats",
    value() {
      return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
    }
  };
  items[11] = {
    key: "getE2EEStats",
    value() {
      const reduced = callback(closure_2[8]).reduce(this.inboundStats, (passthroughCount, passthroughCount2) => {
        passthroughCount = passthroughCount2.passthroughCount;
        let num = 0;
        if (null != passthroughCount) {
          num = passthroughCount;
        }
        passthroughCount.passthroughCount = passthroughCount.passthroughCount + num;
        const decryptSuccessCount = passthroughCount2.decryptSuccessCount;
        let num2 = 0;
        if (null != decryptSuccessCount) {
          num2 = decryptSuccessCount;
        }
        passthroughCount.decryptSuccessCount = passthroughCount.decryptSuccessCount + num2;
        const decryptFailureCount = passthroughCount2.decryptFailureCount;
        let num3 = 0;
        if (null != decryptFailureCount) {
          num3 = decryptFailureCount;
        }
        passthroughCount.decryptFailureCount = passthroughCount.decryptFailureCount + num3;
        const decryptDuration = passthroughCount2.decryptDuration;
        let num4 = 0;
        if (null != decryptDuration) {
          num4 = decryptDuration;
        }
        passthroughCount.decryptDuration = passthroughCount.decryptDuration + num4;
        const decryptAttempts = passthroughCount2.decryptAttempts;
        let num5 = 0;
        if (null != decryptAttempts) {
          num5 = decryptAttempts;
        }
        passthroughCount.decryptAttempts = passthroughCount.decryptAttempts + num5;
        const decryptMissingKeyCount = passthroughCount2.decryptMissingKeyCount;
        let num6 = 0;
        if (null != decryptMissingKeyCount) {
          num6 = decryptMissingKeyCount;
        }
        passthroughCount.decryptMissingKeyCount = passthroughCount.decryptMissingKeyCount + num6;
        const decryptInvalidNonceCount = passthroughCount2.decryptInvalidNonceCount;
        let num7 = 0;
        if (null != decryptInvalidNonceCount) {
          num7 = decryptInvalidNonceCount;
        }
        passthroughCount.decryptInvalidNonceCount = passthroughCount.decryptInvalidNonceCount + num7;
        const decryptFailureCount2 = passthroughCount2.decryptFailureCount;
        let num8 = 0;
        if (null != decryptFailureCount2) {
          num8 = decryptFailureCount2;
        }
        const decryptFailureBeforeSuccessCount = passthroughCount2.decryptFailureBeforeSuccessCount;
        let num9 = 0;
        if (null != decryptFailureBeforeSuccessCount) {
          num9 = decryptFailureBeforeSuccessCount;
        }
        passthroughCount.decryptFailureAfterSuccessCount = passthroughCount.decryptFailureAfterSuccessCount + (num8 - num9);
        return passthroughCount;
      }, { "Null": null, "Null": 0.6, "Null": "BounceOutRight", "Null": null, "Null": 0.6, "Null": "BounceOutLeft", "Null": null, "Bool(true)": 0.6 });
      return { decrypt_passthrough_count: reduced.passthroughCount, decrypt_success_count: reduced.decryptSuccessCount, decrypt_failure_count: reduced.decryptFailureCount, decrypt_duration: reduced.decryptDuration, decrypt_attempts: reduced.decryptAttempts, decrypt_missing_key_count: reduced.decryptMissingKeyCount, decrypt_invalid_nonce_count: reduced.decryptInvalidNonceCount, decrypt_failure_after_success_count: reduced.decryptFailureAfterSuccessCount, encrypt_passthrough_count: this.outboundStats.passthroughCount, encrypt_success_count: this.outboundStats.encryptSuccessCount, encrypt_failure_count: this.outboundStats.encryptFailureCount, encrypt_duration: this.outboundStats.encryptDuration, encrypt_attempts: this.outboundStats.encryptAttempts, encrypt_max_attempts: this.outboundStats.encryptMaxAttempts, encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount };
    }
  };
  items[12] = {
    key: "getAudioDeviceStats",
    value() {
      const self = this;
      const obj = {};
      const restartCount = this.inputDeviceStats.restartCount;
      let accumulated;
      if (null != restartCount) {
        accumulated = restartCount.accumulated;
      }
      obj.input_device_restart_count = accumulated;
      const restartCount2 = self.outputDeviceStats.restartCount;
      let accumulated1;
      if (null != restartCount2) {
        accumulated1 = restartCount2.accumulated;
      }
      obj.output_device_restart_count = accumulated1;
      obj.input_device_time_to_first_audio = self.inputDeviceStats.timeToFirstCallbackMs;
      obj.output_device_time_to_first_audio = self.outputDeviceStats.timeToFirstCallbackMs;
      const bufferViolations = self.inputDeviceStats.bufferViolations;
      let accumulated2;
      if (null != bufferViolations) {
        accumulated2 = bufferViolations.accumulated;
      }
      obj.input_device_buffer_overfull_count = accumulated2;
      const bufferViolations2 = self.outputDeviceStats.bufferViolations;
      let accumulated3;
      if (null != bufferViolations2) {
        accumulated3 = bufferViolations2.accumulated;
      }
      obj.output_device_buffer_underrun_count = accumulated3;
      obj.input_device_session_sample_rate = self.inputDeviceStats.sessionSampleRate;
      obj.output_device_session_sample_rate = self.outputDeviceStats.sessionSampleRate;
      obj.input_device_time_from_connect_to_first_audio_ms = self.inputDeviceStats.timeFromConnectToFirstCallbackMs;
      obj.output_device_time_from_connect_to_first_audio_ms = self.outputDeviceStats.timeFromConnectToFirstCallbackMs;
      return obj;
    }
  };
  items[13] = {
    key: "getAudioLevelStats",
    value() {
      const speakingAudioLevel = this.outboundStats.speakingAudioLevel;
      const report = speakingAudioLevel.getReport([]);
      return { outbound_audio_level_db_p1: report.percentiles[1], outbound_audio_level_db_p5: report.percentiles[5], outbound_audio_level_db_p10: report.percentiles[10], outbound_audio_level_db_p25: report.percentiles[25], outbound_audio_level_db_p50: report.percentiles[50], outbound_audio_level_db_p75: report.percentiles[75], outbound_audio_level_db_p90: report.percentiles[90], outbound_audio_level_db_p95: report.percentiles[95], outbound_audio_level_db_p99: report.percentiles[99], outbound_audio_level_db_max: report.max, outbound_audio_level_db_mean: report.mean };
    }
  };
  items[14] = {
    key: "getPeriodicStats",
    value() {
      let current;
      let currentTimestampMs;
      let numRateSamples;
      let previous;
      let previousTimestampMs;
      let tmp19;
      let tmp20;
      const self = this;
      const items = [];
      const entries = Object.entries(this.periodicInboundStats);
      let num = 0;
      if (0 < entries.length) {
        do {
          let tmp17 = closure_3;
          let tmp18 = closure_3(entries[num], 2);
          [tmp19, tmp20] = tmp18;
          ({ previous, current, currentTimestampMs, previousTimestampMs, numRateSamples } = tmp20);
          let tmp21 = tmp;
          let tmp22 = tmp2;
          let tmp23 = tmp3;
          let tmp24 = tmp4;
          let tmp25 = tmp5;
          let tmp26 = tmp6;
          let tmp27 = tmp7;
          let tmp28 = tmp8;
          let tmp29 = tmp9;
          let tmp30 = tmp10;
          let tmp31 = tmp11;
          let tmp32 = tmp12;
          let tmp33 = tmp13;
          let tmp34 = tmp14;
          let tmp35 = tmp15;
          let tmp36 = tmp16;
          if (undefined !== previousTimestampMs) {
            tmp21 = tmp;
            tmp22 = tmp2;
            tmp23 = tmp3;
            tmp24 = tmp4;
            tmp25 = tmp5;
            tmp26 = tmp6;
            tmp27 = tmp7;
            tmp28 = tmp8;
            tmp29 = tmp9;
            tmp30 = tmp10;
            tmp31 = tmp11;
            tmp32 = tmp12;
            tmp33 = tmp13;
            tmp34 = tmp14;
            tmp35 = tmp15;
            tmp36 = tmp16;
            if (currentTimestampMs > previousTimestampMs) {
              let diff = currentTimestampMs - previousTimestampMs;
              let obj = { userId: tmp19 };
              let silent2 = current.silent;
              let diff1 = silent2;
              if (null == silent2) {
                let silent = previous.silent;
                let num2 = 0;
                if (null != silent) {
                  num2 = silent;
                }
                diff1 = 0 - num2;
                let tmp2 = silent;
              }
              obj.silent = diff1;
              let normal = current.normal;
              let diff2 = normal;
              if (null == normal) {
                let normal2 = previous.normal;
                let num3 = 0;
                if (null != normal2) {
                  num3 = normal2;
                }
                diff2 = 0 - num3;
                let tmp4 = normal2;
              }
              obj.normal = diff2;
              let merged = current.merged;
              let diff3 = merged;
              if (null == merged) {
                let merged2 = previous.merged;
                let num4 = 0;
                if (null != merged2) {
                  num4 = merged2;
                }
                diff3 = 0 - num4;
                let tmp6 = merged2;
              }
              obj.merged = diff3;
              let expanded = current.expanded;
              let diff4 = expanded;
              if (null == expanded) {
                let expanded2 = previous.expanded;
                let num5 = 0;
                if (null != expanded2) {
                  num5 = expanded2;
                }
                diff4 = 0 - num5;
                let tmp8 = expanded2;
              }
              obj.expanded = diff4;
              let accelerated = current.accelerated;
              let diff5 = accelerated;
              if (null == accelerated) {
                let accelerated2 = previous.accelerated;
                let num6 = 0;
                if (null != accelerated2) {
                  num6 = accelerated2;
                }
                diff5 = 0 - num6;
                let tmp10 = accelerated2;
              }
              obj.accelerated = diff5;
              let preemptiveExpanded = current.preemptiveExpanded;
              let diff6 = preemptiveExpanded;
              if (null == preemptiveExpanded) {
                let preemptiveExpanded2 = previous.preemptiveExpanded;
                let num7 = 0;
                if (null != preemptiveExpanded2) {
                  num7 = preemptiveExpanded2;
                }
                diff6 = 0 - num7;
                let tmp12 = preemptiveExpanded2;
              }
              obj.preemptiveExpanded = diff6;
              let cng = current.cng;
              let diff7 = cng;
              if (null == cng) {
                let cng2 = previous.cng;
                let num8 = 0;
                if (null != cng2) {
                  num8 = cng2;
                }
                diff7 = 0 - num8;
                let tmp14 = cng2;
              }
              obj.cng = diff7;
              obj.accelerateRate = tmp20.accelerateRateSum / numRateSamples;
              obj.expandRate = tmp20.expandRateSum / numRateSamples;
              obj.preemptiveExpandRate = tmp20.preemptiveExpandRateSum / numRateSamples;
              obj.speechExpandRate = tmp20.speechExpandRateSum / numRateSamples;
              obj.durationMs = diff;
              tmp21 = silent2;
              tmp22 = tmp2;
              tmp23 = normal;
              tmp24 = tmp4;
              tmp25 = merged;
              tmp26 = tmp6;
              tmp27 = expanded;
              tmp28 = tmp8;
              tmp29 = accelerated;
              tmp30 = tmp10;
              tmp31 = preemptiveExpanded;
              tmp32 = tmp12;
              tmp33 = cng;
              tmp34 = tmp14;
              tmp35 = diff;
              tmp36 = obj;
              if (obj.normal + obj.merged + obj.expanded + obj.accelerated + obj.preemptiveExpanded > 0) {
                let arr = items.push(obj);
                tmp21 = silent2;
                tmp22 = tmp2;
                tmp23 = normal;
                tmp24 = tmp4;
                tmp25 = merged;
                tmp26 = tmp6;
                tmp27 = expanded;
                tmp28 = tmp8;
                tmp29 = accelerated;
                tmp30 = tmp10;
                tmp31 = preemptiveExpanded;
                tmp32 = tmp12;
                tmp33 = cng;
                tmp34 = tmp14;
                tmp35 = diff;
                tmp36 = obj;
              }
            }
          }
          self.periodicInboundStats[tmp19].accelerateRateSum = 0;
          self.periodicInboundStats[tmp19].expandRateSum = 0;
          self.periodicInboundStats[tmp19].preemptiveExpandRateSum = 0;
          self.periodicInboundStats[tmp19].speechExpandRateSum = 0;
          self.periodicInboundStats[tmp19].numRateSamples = 0;
          self.periodicInboundStats[tmp19].previous = current;
          self.periodicInboundStats[tmp19].previousTimestampMs = currentTimestampMs;
          num = num + 1;
          let tmp = tmp21;
          tmp2 = tmp22;
          let tmp3 = tmp23;
          tmp4 = tmp24;
          let tmp5 = tmp25;
          tmp6 = tmp26;
          let tmp7 = tmp27;
          tmp8 = tmp28;
          let tmp9 = tmp29;
          tmp10 = tmp30;
          let tmp11 = tmp31;
          tmp12 = tmp32;
          let tmp13 = tmp33;
          tmp14 = tmp34;
          let tmp15 = tmp35;
          let tmp16 = tmp36;
        } while (num < entries.length);
      }
      return items;
    }
  };
  items[15] = {
    key: "calculateMos",
    value(arg0, arg1) {
      const calculateRResult = this.calculateR(arg0, arg1);
      let num = 1;
      if (calculateRResult >= 0) {
        let num3 = 4.5;
        if (calculateRResult <= 100) {
          num3 = 1 + 0.035 * calculateRResult + 0.0000071 * calculateRResult * (calculateRResult - 60) * (100 - calculateRResult);
        }
        num = num3;
      }
      return num;
    }
  };
  items[16] = {
    key: "calculateR",
    value(arg0, arg1) {
      let num = 0;
      const result = 0.024 * arg0;
      if (arg0 > 177.3) {
        num = 0.11 * (arg0 - 177.3);
      }
      return 93.4 - (result + num) - (10 + 122 * arg1 / (arg1 + 10));
    }
  };
  return callback(VoiceQuality, items);
}(importDefault(dependencyMap[12]));
const result = arg1(dependencyMap[13]).fileFinishedImporting("lib/VoiceQuality.tsx");

export default tmp2;
export const VoiceQualityEvent = obj;
