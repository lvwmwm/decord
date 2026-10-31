// Module ID: 14382
// Function ID: 14383
// Name: closeFrame
// Dependencies: [6846, 14383, 5675, 14384, 10927, 2]
// Exports: default

// Module 14382 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5675 */;
import leaveFrame from "leaveFrame" /* 10927 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14383 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14384 */;
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
