// Module ID: 17752
// Function ID: 17753
// Name: ErrorDefinitions
// Dependencies: [9039, 17753, 17755, 17756, 17758, 17759, 17760, 17761, 17762, 17763, 17764, 17765, 17766, 17767, 17768, 17769, 17770, 17771, 2]

// Module 17752 (ErrorDefinitions)
import set from "set" /* 2 */;
import mapped from "mapped" /* 9039 */;
import AVErrorNoAudioInputDetectedDefinition from "AVErrorNoAudioInputDetectedDefinition" /* 17753 */;
import AVErrorNoInputDevicesDefinition from "AVErrorNoInputDevicesDefinition" /* 17755 */;
import AVErrorStreamViewLowFPSDefinition from "AVErrorStreamViewLowFPSDefinition" /* 17756 */;
import AVErrorStreamViewHighPacketLossDefinition from "AVErrorStreamViewHighPacketLossDefinition" /* 17758 */;
import AVErrorStreamSendHighPacketLossDefinition from "AVErrorStreamSendHighPacketLossDefinition" /* 17759 */;
import AVErrorStreamSendLowFPSDefinition from "AVErrorStreamSendLowFPSDefinition" /* 17760 */;
import AVErrorStreamBadNetworkQualityDefinition from "AVErrorStreamBadNetworkQualityDefinition" /* 17761 */;
import AVErrorStreamSoundshareFailedDefinition from "AVErrorStreamSoundshareFailedDefinition" /* 17762 */;
import AVErrorStreamFailedToStartDefinition from "AVErrorStreamFailedToStartDefinition" /* 17763 */;
import AVErrorStreamReconnectingDefinition from "AVErrorStreamReconnectingDefinition" /* 17764 */;
import AVErrorScreenshareOSErrorDefinition from "AVErrorScreenshareOSErrorDefinition" /* 17765 */;
import AVErrorAudioCaptureSampleRateMismatchDefinition from "AVErrorAudioCaptureSampleRateMismatchDefinition" /* 17766 */;
import AVErrorVideoStreamSenderReadyTimeoutDefinition from "AVErrorVideoStreamSenderReadyTimeoutDefinition" /* 17767 */;
import AVErrorVideoStreamReceiverReadyTimeoutDefinition from "AVErrorVideoStreamReceiverReadyTimeoutDefinition" /* 17768 */;
import AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition" /* 17769 */;
import AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition from "AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition" /* 17770 */;
import AVErrorCameraSendLowFPSDefinition from "AVErrorCameraSendLowFPSDefinition" /* 17771 */;

const obj = {};
obj[mapped.AVError.NO_AUDIO_INPUT_DETECTED] = AVErrorNoAudioInputDetectedDefinition.AVErrorNoAudioInputDetectedDefinition;
obj[mapped.AVError.NO_INPUT_DEVICES] = AVErrorNoInputDevicesDefinition.AVErrorNoInputDevicesDefinition;
obj[mapped.AVError.STREAM_VIEW_LOW_FPS] = AVErrorStreamViewLowFPSDefinition.AVErrorStreamViewLowFPSDefinition;
obj[mapped.AVError.STREAM_VIEW_HIGH_PACKET_LOSS] = AVErrorStreamViewHighPacketLossDefinition.AVErrorStreamViewHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_HIGH_PACKET_LOSS] = AVErrorStreamSendHighPacketLossDefinition.AVErrorStreamSendHighPacketLossDefinition;
obj[mapped.AVError.STREAM_SEND_LOW_FPS] = AVErrorStreamSendLowFPSDefinition.AVErrorStreamSendLowFPSDefinition;
obj[mapped.AVError.STREAM_BAD_NETWORK_QUALITY] = AVErrorStreamBadNetworkQualityDefinition.AVErrorStreamBadNetworkQualityDefinition;
obj[mapped.AVError.STREAM_SOUNDSHARE_FAILED] = AVErrorStreamSoundshareFailedDefinition.AVErrorStreamSoundshareFailedDefinition;
obj[mapped.AVError.STREAM_FAILED_TO_START] = AVErrorStreamFailedToStartDefinition.AVErrorStreamFailedToStartDefinition;
obj[mapped.AVError.STREAM_RECONNECTING] = AVErrorStreamReconnectingDefinition.AVErrorStreamReconnectingDefinition;
obj[mapped.AVError.SCREENSHARE_OS_ERROR] = AVErrorScreenshareOSErrorDefinition.AVErrorScreenshareOSErrorDefinition;
obj[mapped.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH] = AVErrorAudioCaptureSampleRateMismatchDefinition.AVErrorAudioCaptureSampleRateMismatchDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT] = AVErrorVideoStreamSenderReadyTimeoutDefinition.AVErrorVideoStreamSenderReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT] = AVErrorVideoStreamReceiverReadyTimeoutDefinition.AVErrorVideoStreamReceiverReadyTimeoutDefinition;
obj[mapped.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition.AVErrorVideoStreamSenderReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM] = AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition.AVErrorVideoStreamReceiverReadyTimeoutNoStreamDefinition;
obj[mapped.AVError.CAMERA_SEND_LOW_FPS] = AVErrorCameraSendLowFPSDefinition.AVErrorCameraSendLowFPSDefinition;
const result = set.fileFinishedImporting("modules/errors/av_errors/definitions/index.tsx");

export const ErrorDefinitions = obj;
