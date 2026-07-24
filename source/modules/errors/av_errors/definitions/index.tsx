// Module ID: 16573
// Function ID: 129271
// Name: ErrorDefinitions
// Dependencies: [8896, 16574, 16576, 16577, 16579, 16580, 16581, 16582, 16583, 16584, 16585, 16586, 16587, 16588, 16589, 16590, 16591, 16592, 2]

// Module 16573 (ErrorDefinitions)
const obj = {};
obj[require("validateUniqueErrorCodes").AVError.NO_AUDIO_INPUT_DETECTED] = require("AVErrorNoAudioInputDetectedDefinition").AVErrorNoAudioInputDetectedDefinition;
obj[require("validateUniqueErrorCodes").AVError.NO_INPUT_DEVICES] = require("AVErrorNoInputDevicesDefinition").AVErrorNoInputDevicesDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_VIEW_LOW_FPS] = require("AVErrorStreamViewLowFPSDefinition").AVErrorStreamViewLowFPSDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = require("AVErrorStreamViewHighPacketLossDefinition").AVErrorStreamViewHighPacketLossDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_SEND_HIGH_PACKET_LOSS] = require("AVErrorStreamSendHighPacketLossDefinition").AVErrorStreamSendHighPacketLossDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_SEND_LOW_FPS] = require("AVErrorStreamSendLowFPSDefinition").AVErrorStreamSendLowFPSDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_BAD_NETWORK_QUALITY] = require("AVErrorStreamBadNetworkQualityDefinition").AVErrorStreamBadNetworkQualityDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_SOUNDSHARE_FAILED] = require("AVErrorStreamSoundshareFailedDefinition").AVErrorStreamSoundshareFailedDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_FAILED_TO_START] = require("AVErrorStreamFailedToStartDefinition").AVErrorStreamFailedToStartDefinition;
obj[require("validateUniqueErrorCodes").AVError.STREAM_RECONNECTING] = require("AVErrorStreamReconnectingDefinition").AVErrorStreamReconnectingDefinition;
obj[require("validateUniqueErrorCodes").AVError.SCREENSHARE_OS_ERROR] = require("AVErrorScreenshareOSErrorDefinition").AVErrorScreenshareOSErrorDefinition;
obj[require("validateUniqueErrorCodes").AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = require("AVErrorAudioCaptureSampleRateMismatchDefinition").AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[require("validateUniqueErrorCodes").AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = require("AVErrorVideoStreamSenderReadyTimeoutDefinition").AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[require("validateUniqueErrorCodes").AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = require("AVErrorVideoStreamReceiverReadyTimeoutDefinition").AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[require("validateUniqueErrorCodes").AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = require("AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition").AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[require("validateUniqueErrorCodes").AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = require("AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition").AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[require("validateUniqueErrorCodes").AVError.CAMERA_SEND_LOW_FPS] = require("AVErrorCameraSendLowFPSDefinition").AVErrorCameraSendLowFPSDefinition;
const result = require("AVErrorNoInputDevicesDefinition").fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;
