// Module ID: 14397
// Function ID: 14398
// Name: closeFrame
// Dependencies: [6846, 14398, 5675, 14399, 10938, 2]
// Exports: default

// Module 14397 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import leaveFrame from "leaveFrame" /* 10938 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14398 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14399 */;
import FramesStore from "FramesStore" /* 6846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/closeFrame.tsx");

export default function closeFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    closeFramePopoutDefault(frame.id);
    if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL) {
      const tmp7Result = leaveFrame;
      tmp7Result.leaveFrame(frame.id);
    } else {
      const tmp7Result2 = VoiceChannelAppActionCreators;
      tmp7Result2.closeVoiceChannelApp(frame.surface.channelId);
    }
  }
};
