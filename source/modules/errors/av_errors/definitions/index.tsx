// Module ID: 16386
// Function ID: 126639
// Name: ErrorDefinitions
// Dependencies: []

// Module 16386 (ErrorDefinitions)
const obj = {};
obj[require(dependencyMap[0]).AVError.NO_AUDIO_INPUT_DETECTED] = require(dependencyMap[1]).AVErrorNoAudioInputDetectedDefinition;
obj[require(dependencyMap[0]).AVError.NO_INPUT_DEVICES] = require(dependencyMap[2]).AVErrorNoInputDevicesDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_VIEW_LOW_FPS] = require(dependencyMap[3]).AVErrorStreamViewLowFPSDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = require(dependencyMap[4]).AVErrorStreamViewHighPacketLossDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_SEND_HIGH_PACKET_LOSS] = require(dependencyMap[5]).AVErrorStreamSendHighPacketLossDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_SEND_LOW_FPS] = require(dependencyMap[6]).AVErrorStreamSendLowFPSDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_BAD_NETWORK_QUALITY] = require(dependencyMap[7]).AVErrorStreamBadNetworkQualityDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_SOUNDSHARE_FAILED] = require(dependencyMap[8]).AVErrorStreamSoundshareFailedDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_FAILED_TO_START] = require(dependencyMap[9]).AVErrorStreamFailedToStartDefinition;
obj[require(dependencyMap[0]).AVError.STREAM_RECONNECTING] = require(dependencyMap[10]).AVErrorStreamReconnectingDefinition;
obj[require(dependencyMap[0]).AVError.SCREENSHARE_OS_ERROR] = require(dependencyMap[11]).AVErrorScreenshareOSErrorDefinition;
obj[require(dependencyMap[0]).AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = require(dependencyMap[12]).AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[require(dependencyMap[0]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = require(dependencyMap[13]).AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[require(dependencyMap[0]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = require(dependencyMap[14]).AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[require(dependencyMap[0]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = require(dependencyMap[15]).AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[require(dependencyMap[0]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = require(dependencyMap[16]).AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[require(dependencyMap[0]).AVError.CAMERA_SEND_LOW_FPS] = require(dependencyMap[17]).AVErrorCameraSendLowFPSDefinition;
const _module = require(dependencyMap[18]);
const result = _module.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;
