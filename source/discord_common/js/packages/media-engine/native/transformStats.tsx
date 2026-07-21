// Module ID: 4270
// Function ID: 37358
// Name: convertAudioLevel
// Dependencies: []
// Exports: default

// Module 4270 (convertAudioLevel)
function convertAudioLevel(arg0) {
  return arg0 / 32768;
}
function sumBytes(rtpStats) {
  let headerBytes;
  if (null != rtpStats) {
    headerBytes = rtpStats.headerBytes;
  }
  let num = 0;
  if (null != headerBytes) {
    num = headerBytes;
  }
  let payloadBytes;
  if (null != rtpStats) {
    payloadBytes = rtpStats.payloadBytes;
  }
  let num2 = 0;
  if (null != payloadBytes) {
    num2 = payloadBytes;
  }
  let paddingBytes;
  const sum = num + num2;
  if (null != rtpStats) {
    paddingBytes = rtpStats.paddingBytes;
  }
  let num3 = 0;
  if (null != paddingBytes) {
    num3 = paddingBytes;
  }
  let headerBytes1;
  const sum1 = sum + num3;
  if (null != rtpStats) {
    const fec = rtpStats.fec;
    if (null != fec) {
      headerBytes1 = fec.headerBytes;
    }
  }
  let num4 = 0;
  if (null != headerBytes1) {
    num4 = headerBytes1;
  }
  let payloadBytes1;
  if (null != rtpStats) {
    const fec2 = rtpStats.fec;
    if (null != fec2) {
      payloadBytes1 = fec2.payloadBytes;
    }
  }
  let num5 = 0;
  if (null != payloadBytes1) {
    num5 = payloadBytes1;
  }
  let paddingBytes1;
  const sum2 = num4 + num5;
  if (null != rtpStats) {
    const fec3 = rtpStats.fec;
    if (null != fec3) {
      paddingBytes1 = fec3.paddingBytes;
    }
  }
  let num6 = 0;
  if (null != paddingBytes1) {
    num6 = paddingBytes1;
  }
  let headerBytes2;
  const sum3 = sum2 + num6;
  if (null != rtpStats) {
    const retransmitted = rtpStats.retransmitted;
    if (null != retransmitted) {
      headerBytes2 = retransmitted.headerBytes;
    }
  }
  let num7 = 0;
  if (null != headerBytes2) {
    num7 = headerBytes2;
  }
  let payloadBytes2;
  const sum4 = sum3 + num7;
  if (null != rtpStats) {
    const retransmitted2 = rtpStats.retransmitted;
    if (null != retransmitted2) {
      payloadBytes2 = retransmitted2.payloadBytes;
    }
  }
  let num8 = 0;
  if (null != payloadBytes2) {
    num8 = payloadBytes2;
  }
  let paddingBytes2;
  const sum5 = sum4 + num8;
  if (null != rtpStats) {
    const retransmitted3 = rtpStats.retransmitted;
    if (null != retransmitted3) {
      paddingBytes2 = retransmitted3.paddingBytes;
    }
  }
  let num9 = 0;
  if (null != paddingBytes2) {
    num9 = paddingBytes2;
  }
  let headerBytes3;
  const sum6 = sum5 + num9;
  if (null != rtpStats) {
    const transmitted = rtpStats.transmitted;
    if (null != transmitted) {
      headerBytes3 = transmitted.headerBytes;
    }
  }
  let num10 = 0;
  if (null != headerBytes3) {
    num10 = headerBytes3;
  }
  let payloadBytes3;
  const sum7 = sum6 + num10;
  if (null != rtpStats) {
    const transmitted2 = rtpStats.transmitted;
    if (null != transmitted2) {
      payloadBytes3 = transmitted2.payloadBytes;
    }
  }
  let num11 = 0;
  if (null != payloadBytes3) {
    num11 = payloadBytes3;
  }
  let paddingBytes3;
  const sum8 = sum7 + num11;
  if (null != rtpStats) {
    const transmitted3 = rtpStats.transmitted;
    if (null != transmitted3) {
      paddingBytes3 = transmitted3.paddingBytes;
    }
  }
  let num12 = 0;
  if (null != paddingBytes3) {
    num12 = paddingBytes3;
  }
  return sum8 + num12 + sum1;
}
function sumPackets(rtpStats) {
  let packets;
  if (null != rtpStats) {
    packets = rtpStats.packets;
  }
  let num = 0;
  if (null != packets) {
    num = packets;
  }
  let packets1;
  if (null != rtpStats) {
    const fec = rtpStats.fec;
    if (null != fec) {
      packets1 = fec.packets;
    }
  }
  let num2 = 0;
  if (null != packets1) {
    num2 = packets1;
  }
  let packets2;
  if (null != rtpStats) {
    const retransmitted = rtpStats.retransmitted;
    if (null != retransmitted) {
      packets2 = retransmitted.packets;
    }
  }
  let num3 = 0;
  if (null != packets2) {
    num3 = packets2;
  }
  let packets3;
  const sum = num2 + num3;
  if (null != rtpStats) {
    const transmitted = rtpStats.transmitted;
    if (null != transmitted) {
      packets3 = transmitted.packets;
    }
  }
  let num4 = 0;
  if (null != packets3) {
    num4 = packets3;
  }
  return sum + num4 + num;
}
function transformPlayoutStats(obj) {
  obj = {};
  for (const key10006 in arg0) {
    let tmp8 = key10006;
    let _Array = Array;
    let arr = arg0[key10006];
    if (Array.isArray(arg0[key10006])) {
      obj[key10006] = arr.map((arg0) => arg0 * closure_2);
      // continue
    } else {
      if (null == arr) {
        continue;
      } else {
        let tmp = arg0[key10006];
        obj = {};
        let _Math = Math;
        let tmp2 = closure_2;
        obj.last = Math.round(tmp.last * closure_2);
        let _Math2 = Math;
        let tmp3 = closure_2;
        obj.mean = Math.round(tmp.mean * closure_2);
        let _Math3 = Math;
        let tmp4 = closure_2;
        obj.p75 = Math.round(tmp.p75 * closure_2);
        let _Math4 = Math;
        let tmp5 = closure_2;
        obj.p95 = Math.round(tmp.p95 * closure_2);
        let _Math5 = Math;
        let tmp6 = closure_2;
        obj.p99 = Math.round(tmp.p99 * closure_2);
        let _Math6 = Math;
        let tmp7 = closure_2;
        obj.max = Math.round(tmp.max * closure_2);
        obj[key10006] = obj;
        // continue
      }
      continue;
    }
    continue;
  }
  return obj;
}
function transformOutboundVideoStats(video, any) {
  const substreams = video.substreams;
  const found = substreams.find((isRTX) => !isRTX.isRTX && !isRTX.isFlexFEC);
  if (null != found) {
    const substreams1 = video.substreams;
    const substreams2 = video.substreams;
    const reduced = substreams1.reduce((arg0, rtpStats) => arg0 + callback(rtpStats.rtpStats), 0);
    let obj = { type: "video", ssrc: found.ssrc };
    const reduced1 = substreams2.reduce((arg0, rtpStats) => arg0 + callback2(rtpStats.rtpStats), 0);
    obj.sinkWant = require(dependencyMap[0]).formatSinkWantStat(any, found.ssrc, true);
    const obj2 = require(dependencyMap[0]);
    obj.sinkWantAsInt = require(dependencyMap[0]).formatSinkWantAsInt(any, found.ssrc);
    obj = {};
    ({ codecPayloadType: obj4.id, codecName: obj4.name } = video);
    obj.codec = obj;
    obj.keyFrameInterval = video.keyFrameInterval;
    obj.bytesSent = reduced;
    obj.packetsSent = reduced1;
    const rtcpStats = found.rtcpStats;
    let packetsLost;
    if (null != rtcpStats) {
      packetsLost = rtcpStats.packetsLost;
    }
    let num2 = 0;
    if (null != packetsLost) {
      num2 = packetsLost;
    }
    obj.packetsLost = num2;
    const rtcpStats2 = found.rtcpStats;
    let fractionLost;
    if (null != rtcpStats2) {
      fractionLost = rtcpStats2.fractionLost;
    }
    let num3 = 0;
    if (null != fractionLost) {
      num3 = fractionLost;
    }
    obj.fractionLost = num3;
    ({ mediaBitrate: obj.bitrate, targetMediaBitrate: obj.bitrateTarget, encoderImplementationName: obj.encoderImplementationName, encodeUsage: obj.encodeUsage, avgEncodeTime: obj.averageEncodeTime } = video);
    obj = {};
    ({ height: obj5.height, width: obj5.width } = found);
    obj.resolution = obj;
    obj.framesSent = found.frameCounts.keyFrames + found.frameCounts.deltaFrames;
    obj.keyFramesEncoded = found.frameCounts.keyFrames;
    ({ framesEncoded: obj.framesEncoded, inputFrameRate: obj.frameRateInput, encodeFrameRate: obj.frameRateEncode } = video);
    const rtcpStats3 = found.rtcpStats;
    let firPackets;
    if (null != rtcpStats3) {
      firPackets = rtcpStats3.firPackets;
    }
    let num4 = 0;
    if (null != firPackets) {
      num4 = firPackets;
    }
    obj.firCount = num4;
    const rtcpStats4 = found.rtcpStats;
    let nackPackets;
    if (null != rtcpStats4) {
      nackPackets = rtcpStats4.nackPackets;
    }
    let num5 = 0;
    if (null != nackPackets) {
      num5 = nackPackets;
    }
    obj.nackCount = num5;
    const rtcpStats5 = found.rtcpStats;
    let pliPackets;
    if (null != rtcpStats5) {
      pliPackets = rtcpStats5.pliPackets;
    }
    let num6 = 0;
    if (null != pliPackets) {
      num6 = pliPackets;
    }
    obj.pliCount = num6;
    ({ qpSum: obj.qpSum, bwLimitedResolution: obj.bandwidthLimitedResolution, framesDroppedRateLimiter: obj.framesDroppedRateLimiter, framesDroppedEncoderQueue: obj.framesDroppedEncoderQueue, framesDroppedCongestionWindow: obj.framesDroppedCongestionWindow, framesDroppedEncoder: obj.framesDroppedEncoder, cpuLimitedResolution: obj.cpuLimitedResolution } = video);
    const encoderQualityStats = found.encoderQualityStats;
    let prop;
    if (null != encoderQualityStats) {
      prop = encoderQualityStats.imageQualityVmaf_v061;
    }
    let tmp12;
    if (null != prop) {
      tmp12 = prop;
    }
    obj.encoderQualityVmaf = tmp12;
    const encoderQualityStats2 = found.encoderQualityStats;
    let prop1;
    if (null != encoderQualityStats2) {
      prop1 = encoderQualityStats2.imageQualityWebrtcPsnrDb;
    }
    let tmp14;
    if (null != prop1) {
      tmp14 = prop1;
    }
    obj.encoderQualityPsnr = tmp14;
    const encoderQualityStats3 = found.encoderQualityStats;
    let decodeErrors;
    if (null != encoderQualityStats3) {
      decodeErrors = encoderQualityStats3.decodeErrors;
    }
    let tmp16;
    if (null != decodeErrors) {
      tmp16 = decodeErrors;
    }
    obj.qualityDecodeErrors = tmp16;
    const encoderQualityStats4 = found.encoderQualityStats;
    let decoderReboots;
    if (null != encoderQualityStats4) {
      decoderReboots = encoderQualityStats4.decoderReboots;
    }
    let tmp18;
    if (null != decoderReboots) {
      tmp18 = decoderReboots;
    }
    obj.qualityDecoderReboots = tmp18;
    const encoderQualityStats5 = found.encoderQualityStats;
    let scoreErrors;
    if (null != encoderQualityStats5) {
      scoreErrors = encoderQualityStats5.scoreErrors;
    }
    let tmp20;
    if (null != scoreErrors) {
      tmp20 = scoreErrors;
    }
    obj.qualityScoreErrors = tmp20;
    const encoderQualityStats6 = found.encoderQualityStats;
    let frameDrops;
    if (null != encoderQualityStats6) {
      frameDrops = encoderQualityStats6.frameDrops;
    }
    let tmp22;
    if (null != frameDrops) {
      tmp22 = frameDrops;
    }
    obj.qualityFrameDrops = tmp22;
    const encoderQualityStats7 = found.encoderQualityStats;
    let sizeMismatches;
    if (null != encoderQualityStats7) {
      sizeMismatches = encoderQualityStats7.sizeMismatches;
    }
    let tmp24;
    if (null != sizeMismatches) {
      tmp24 = sizeMismatches;
    }
    obj.qualitySizeMismatches = tmp24;
    ({ filter: obj.filter, passthroughCount: obj.passthroughCount, encryptSuccessCount: obj.encryptSuccessCount, encryptFailureCount: obj.encryptFailureCount, encryptDuration: obj.encryptDuration, encryptAttempts: obj.encryptAttempts, encryptMaxAttempts: obj.encryptMaxAttempts, encryptMissingKeyCount: obj.encryptMissingKeyCount, hqSimulcastStreamEncoded: obj.hqSimulcastStreamEncoded, lqSimulcastStreamEncoded: obj.lqSimulcastStreamEncoded, bwLimitedFrameRate: obj.bandwidthLimitedFrameRate } = video);
    const encoderQualityStats8 = found.encoderQualityStats;
    let freezeCount;
    if (null != encoderQualityStats8) {
      freezeCount = encoderQualityStats8.freezeCount;
    }
    obj.freezeCount = freezeCount;
    const encoderQualityStats9 = found.encoderQualityStats;
    let totalFreezesDuration;
    if (null != encoderQualityStats9) {
      totalFreezesDuration = encoderQualityStats9.totalFreezesDuration;
    }
    obj.totalFreezesDuration = totalFreezesDuration;
    const encoderQualityStats10 = found.encoderQualityStats;
    let totalFramesDuration;
    if (null != encoderQualityStats10) {
      totalFramesDuration = encoderQualityStats10.totalFramesDuration;
    }
    obj.totalFramesDuration = totalFramesDuration;
    const encoderQualityStats11 = found.encoderQualityStats;
    let interFrameEntropy;
    if (null != encoderQualityStats11) {
      interFrameEntropy = encoderQualityStats11.interFrameEntropy;
    }
    obj.videoEntropy = interFrameEntropy;
    const encoderQualityStats12 = found.encoderQualityStats;
    let prop2;
    if (null != encoderQualityStats12) {
      prop2 = encoderQualityStats12.consecutiveStaticColorFrames;
    }
    obj.consecutiveStaticColorFrames = prop2;
    const encoderQualityStats13 = found.encoderQualityStats;
    let minResolutionWidth;
    if (null != encoderQualityStats13) {
      minResolutionWidth = encoderQualityStats13.minResolutionWidth;
    }
    obj.minResolutionWidth = minResolutionWidth;
    const encoderQualityStats14 = found.encoderQualityStats;
    let minResolutionHeight;
    if (null != encoderQualityStats14) {
      minResolutionHeight = encoderQualityStats14.minResolutionHeight;
    }
    obj.minResolutionHeight = minResolutionHeight;
    return obj;
  }
}
function transformInboundVideoStats(height, any, any) {
  let obj = { type: "video", ssrc: height.ssrc };
  const tmp = sumBytes(height.rtpStats);
  const tmp2 = sumPackets(height.rtpStats);
  obj.sinkWant = require(dependencyMap[0]).formatSinkWantStat(any, height.ssrc, true);
  const obj2 = require(dependencyMap[0]);
  obj.sinkWantAsInt = require(dependencyMap[0]).formatSinkWantAsInt(any, height.ssrc);
  const obj3 = require(dependencyMap[0]);
  obj.sinkWantLocal = require(dependencyMap[0]).formatSinkWantStat(any, height.ssrc, true);
  const obj4 = require(dependencyMap[0]);
  obj.sinkWantLocalAsInt = require(dependencyMap[0]).formatSinkWantAsInt(any, height.ssrc);
  obj.codec = { id: height.codecPayloadType, name: height.codecName };
  obj.bytesReceived = tmp;
  obj.packetsReceived = tmp2;
  let packetsLost = height.rtpStats.packetsLost;
  if (null == packetsLost) {
    packetsLost = height.rtcpStats.packetsLost;
  }
  obj.packetsLost = packetsLost;
  obj.fractionLost = height.rtcpStats.fractionLost;
  ({ totalBitrate: obj.bitrate, jitterBuffer: obj.jitterBuffer, currentDelay: obj.currentDelay, targetDelay: obj.targetDelay, minPlayoutDelay: obj.minPlayoutDelay, renderDelay: obj.renderDelay, decode: obj.averageDecodeTime, totalDecode: obj.totalDecodeTime } = height);
  obj.resolution = { height: height.height, width: height.width };
  ({ decoderImplementationName: obj.decoderImplementationName, framesDecoded: obj.framesDecoded, framesDropped: obj.framesDropped, framesDecodeErrors: obj.framesDecodeErrors } = height);
  obj.framesReceived = height.frameCounts.keyFrames + height.frameCounts.deltaFrames;
  const networkFramesDropped = height.networkFramesDropped;
  let num = 0;
  if (null != networkFramesDropped) {
    num = networkFramesDropped;
  }
  obj.networkFramesDropped = num;
  obj.keyFramesDecoded = height.frameCounts.keyFrames;
  ({ decodeFrameRate: obj.frameRateDecode, networkFrameRate: obj.frameRateNetwork, renderFrameRate: obj.frameRateRender } = height);
  obj.firCount = height.rtcpStats.firPackets;
  obj.nackCount = height.rtcpStats.nackPackets;
  obj.pliCount = height.rtcpStats.pliPackets;
  ({ qpSum: obj.qpSum, freezeCount: obj.freezeCount, pauseCount: obj.pauseCount, totalFreezesDuration: obj.totalFreezesDuration, totalPausesDuration: obj.totalPausesDuration, totalFramesDuration: obj.totalFramesDuration, sumOfSquaredFramesDurations: obj.sumOfSquaredFramesDurations, passthroughCount: obj.passthroughCount, decryptSuccessCount: obj.decryptSuccessCount, decryptFailureCount: obj.decryptFailureCount, decryptDuration: obj.decryptDuration, decryptAttempts: obj.decryptAttempts, decryptMissingKeyCount: obj.decryptMissingKeyCount, decryptInvalidNonceCount: obj.decryptInvalidNonceCount, minResolutionWidth: obj.minResolutionWidth, minResolutionHeight: obj.minResolutionHeight } = height);
  if (null != arg3) {
    obj = {};
    ({ videoJitterBuffer: obj7.videoJitterBuffer, videoJitterDelay: obj7.videoJitterDelay, videoJitterTarget: obj7.videoJitterTarget } = arg3);
    obj = transformPlayoutStats(obj);
  } else {
    obj = {};
  }
  const merged = Object.assign(obj);
  return obj;
}
let closure_2 = 1000;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/media-engine/native/transformStats.tsx");

export default function transformStats(mediaEngineConnectionId, arg1, any) {
  let audio;
  let inboundBitrateEstimate;
  let video;
  let videos;
  const require = any;
  const dependencyMap = arg3;
  let closure_2 = null;
  let convertAudioLevel = null;
  let parsed = arg1;
  if ("string" === typeof arg1) {
    const _JSON = JSON;
    parsed = JSON.parse(arg1);
  }
  const items = [];
  const sumBytes = items;
  if (null != parsed.outbound) {
    ({ audio, video, videos } = parsed.outbound);
    if (null != audio) {
      let num = 0;
      if (null != convertAudioLevel) {
        num = convertAudioLevel;
      }
      convertAudioLevel = num + audio.bytesSent;
      let obj = { type: "audio", ssrc: audio.ssrc };
      let obj1 = require(dependencyMap[0]);
      obj.sinkWant = obj1.formatSinkWantStat(any, audio.ssrc, false);
      let obj2 = require(dependencyMap[0]);
      obj.sinkWantAsInt = obj2.formatSinkWantAsInt(any, audio.ssrc);
      obj = {};
      ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
      obj.codec = obj;
      ({ bytesSent: obj.bytesSent, packetsSent: obj.packetsSent } = audio);
      const _Math = Math;
      obj.packetsLost = Math.max(0, audio.packetsLost);
      obj.fractionLost = 100 * audio.fractionLost;
      obj.audioLevel = convertAudioLevel(audio.audioLevel);
      ({ mediaBitrate: obj.bitrate, targetMediaBitrate: obj.bitrateTarget, speaking: obj.audioDetected, framesCaptured: obj.framesCaptured, framesRendered: obj.framesRendered, noiseCancellerFrames: obj.noiseCancellerFrames, noiseCancellerProcessTime: obj.noiseCancellerProcessTime, voiceActivityDetectorProcessTime: obj.voiceActivityDetectorProcessTime, passthroughCount: obj.passthroughCount, encryptSuccessCount: obj.encryptSuccessCount, encryptFailureCount: obj.encryptFailureCount, encryptDuration: obj.encryptDuration, encryptAttempts: obj.encryptAttempts, encryptMaxAttempts: obj.encryptMaxAttempts, encryptMissingKeyCount: obj.encryptMissingKeyCount, pttQueueLatencyMicrosSamples: obj.pttQueueLatencyMicrosSamples, sampleRateMismatchPercent: obj.sampleRateMismatchPercent, currentSampleRate: obj.currentSampleRate } = audio);
      items.push(obj);
    }
    if (null != videos) {
      const item = videos.forEach((arg0) => {
        const tmp = callback3(arg0, arg2);
        if (null != tmp) {
          let num = 0;
          if (null != closure_3) {
            num = closure_3;
          }
          closure_3 = num + tmp.bytesSent;
          items.push(tmp);
        }
      });
    } else if (null != video) {
      const tmp9 = transformOutboundVideoStats(video, any);
      if (null != tmp9) {
        let num3 = 0;
        if (null != convertAudioLevel) {
          num3 = convertAudioLevel;
        }
        convertAudioLevel = num3 + tmp9.bytesSent;
        items.push(tmp9);
      }
    }
  }
  obj = {};
  const sumPackets = obj;
  if (null != parsed.inbound) {
    const inbound = parsed.inbound;
    const item1 = inbound.forEach((id) => {
      let audio;
      let playout;
      let video;
      let videos;
      id = id.id;
      const arg2 = id;
      ({ audio, video, videos, playout } = id);
      const arg3 = playout;
      obj[id] = [];
      if (null == audio) {
        if (null != videos) {
          const item = videos.forEach((rtpStats) => {
            const tmp = callback2(rtpStats, id, playout, playout);
            if (null != tmp) {
              let num = 0;
              if (null != closure_2) {
                num = closure_2;
              }
              closure_2 = num + callback(rtpStats.rtpStats);
              let arr = closure_5[closure_0];
              arr = arr.push(tmp);
              const tmp3 = callback(rtpStats.rtpStats);
            }
          });
        } else if (null != video) {
          const tmp15 = callback4(video, arg2, arg3, playout);
          if (null != tmp15) {
            let num3 = 0;
            if (null != closure_2) {
              num3 = closure_2;
            }
            closure_2 = num3 + items(video.rtpStats);
            let arr = obj[id].push(tmp15);
            const arr2 = obj[id];
            const tmp17 = items(video.rtpStats);
          }
        }
      } else {
        let num = 0;
        if (null != closure_2) {
          num = closure_2;
        }
        closure_2 = num + audio.bytesReceived;
        arr = obj[id];
        let obj = { type: "audio", ssrc: audio.ssrc };
        let obj2 = arg2(arg3[0]);
        obj.sinkWant = obj2.formatSinkWantStat(arg2, audio.ssrc, false);
        obj.sinkWantAsInt = arg2(arg3[0]).formatSinkWantAsInt(arg2, audio.ssrc);
        obj = {};
        ({ codecPayloadType: obj4.id, codecName: obj4.name } = audio);
        obj.codec = obj;
        ({ bytesReceived: obj.bytesReceived, packetsReceived: obj.packetsReceived, packetsLost: obj.packetsLost } = audio);
        obj.fractionLost = 100 * audio.fractionLost;
        ({ fecPacketsReceived: obj.fecPacketsReceived, fecPacketsDiscarded: obj.fecPacketsDiscarded } = audio);
        obj.audioLevel = callback(audio.audioLevel);
        ({ speaking: obj.audioDetected, currentSampleRate: obj.currentSampleRate, jitter: obj.jitter, jitterBuffer: obj.jitterBuffer, jitterBufferPreferred: obj.jitterBufferPreferred, decodingCNG: obj.decodingCNG, decodingMutedOutput: obj.decodingMutedOutput, decodingNormal: obj.decodingNormal, decodingPLC: obj.decodingPLC, decodingPLCCNG: obj.decodingPLCCNG, nackCount: obj.nackCount } = audio);
        obj.accelerateRate = 100 * audio.accelerateRate;
        obj.expandRate = 100 * audio.expandRate;
        obj.preemptiveExpandRate = 100 * audio.preemptiveExpandRate;
        obj.speechExpandRate = 100 * audio.speechExpandRate;
        obj.secondaryDecodedRate = 100 * audio.secondaryDecodedRate;
        ({ opSilence: obj.opSilence, opNormal: obj.opNormal, opMerge: obj.opMerge, opExpand: obj.opExpand, opAccelerate: obj.opAccelerate, opPreemptiveExpand: obj.opPreemptiveExpand, opCNG: obj.opCNG, delayEstimate: obj.delayEstimate, passthroughCount: obj.passthroughCount, decryptSuccessCount: obj.decryptSuccessCount, decryptFailureCount: obj.decryptFailureCount, decryptDuration: obj.decryptDuration, decryptAttempts: obj.decryptAttempts, decryptMissingKeyCount: obj.decryptMissingKeyCount, decryptInvalidNonceCount: obj.decryptInvalidNonceCount } = audio);
        if (null != playout) {
          ({ audioJitterBuffer: obj6.audioJitterBuffer, audioJitterBufferSamples: obj6.audioJitterBufferSamples, audioJitterDelay: obj6.audioJitterDelay, audioJitterDelaySamples: obj6.audioJitterDelaySamples, audioJitterTarget: obj6.audioJitterTarget, audioJitterTargetSamples: obj6.audioJitterTargetSamples, audioPlayoutUnderruns: obj6.audioPlayoutUnderruns, relativeReceptionDelay: obj6.relativeReceptionDelay, relativePlayoutDelay: obj6.relativePlayoutDelay } = playout);
          obj2 = callback2({});
          const obj1 = {};
        } else {
          obj2 = {};
        }
        const merged = Object.assign(obj2);
        obj = arr.push(obj);
        const obj3 = arg2(arg3[0]);
      }
    });
  }
  const transport = parsed.transport;
  obj1 = {};
  if (null != transport) {
    ({ sendBandwidth: obj6.availableOutgoingBitrate, rtt: obj6.ping, decryptionFailures: obj6.decryptionFailures } = transport);
    if (null != transport.routingFailures) {
      obj1.routingFailures = transport.routingFailures;
    }
    ({ localAddress: obj6.localAddress, pacerDelay: obj6.pacerDelay } = transport);
    if (null != transport.receiverReports) {
      obj1.receiverReports = transport.receiverReports;
    }
    ({ receiverBitrateEstimate: obj6.receiverBitrateEstimate, outboundBitrateEstimate: obj6.outboundBitrateEstimate, inboundBitrateEstimate } = transport);
    let num4 = 0;
    if (null != inboundBitrateEstimate) {
      num4 = inboundBitrateEstimate;
    }
    obj1.inboundBitrateEstimate = num4;
    ({ packetsReceived: obj6.packetsReceived, packetsSent: obj6.packetsSent } = transport);
    if (null != transport.secureFramesProtocolVersion) {
      obj1.secureFramesProtocolVersion = transport.secureFramesProtocolVersion;
    }
  }
  let bytesReceived;
  if (null != transport) {
    bytesReceived = transport.bytesReceived;
  }
  let tmp15 = null != bytesReceived;
  if (!tmp15) {
    let tmp17 = null != closure_2;
    if (tmp17) {
      const _Number = Number;
      tmp17 = !Number.isNaN(closure_2);
    }
    tmp15 = tmp17;
  }
  if (tmp15) {
    let bytesReceived1;
    if (null != transport) {
      bytesReceived1 = transport.bytesReceived;
    }
    if (null == bytesReceived1) {
      bytesReceived1 = closure_2;
    }
    let tmp21;
    if (null != bytesReceived1) {
      tmp21 = bytesReceived1;
    }
    obj1.bytesReceived = tmp21;
  }
  let bytesSent;
  if (null != transport) {
    bytesSent = transport.bytesSent;
  }
  let tmp23 = null != bytesSent;
  if (!tmp23) {
    let tmp25 = null != convertAudioLevel;
    if (tmp25) {
      const _Number2 = Number;
      tmp25 = !Number.isNaN(convertAudioLevel);
    }
    tmp23 = tmp25;
  }
  if (tmp23) {
    let bytesSent1;
    if (null != transport) {
      bytesSent1 = transport.bytesSent;
    }
    if (null == bytesSent1) {
      bytesSent1 = convertAudioLevel;
    }
    let tmp29;
    if (null != bytesSent1) {
      tmp29 = bytesSent1;
    }
    obj1.bytesSent = tmp29;
  }
  const camera = parsed.camera;
  obj2 = { mediaEngineConnectionId, transport: obj1, screenshare: parsed.screenshare };
  let tmp30 = null;
  if (null != camera) {
    ({ capturedFramesDropped: obj8.capturedFramesDropped, capturedFramesCount: obj8.capturedFramesCount, capturedFramesMean: obj8.capturedFramesMean, capturedFramesStdev: obj8.capturedFramesStdev } = camera);
    tmp30 = {};
    const obj3 = {};
  }
  obj2.camera = tmp30;
  obj2.clips = parsed.clips;
  obj2.audioDevice = parsed.audioDevice;
  obj2.rtp = { inbound: obj, outbound: items };
  return obj2;
};
