// Module ID: 14599
// Function ID: 14600
// Name: closeFrame
// Dependencies: [6926, 14600, 5829, 14601, 11031, 2]
// Exports: default

// Module 14599 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5829 */;
import leaveFrame from "leaveFrame" /* 11031 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14600 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14601 */;
import FramesStore from "FramesStore" /* 6926 */;
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
