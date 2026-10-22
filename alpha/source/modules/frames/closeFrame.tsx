// Module ID: 13799
// Function ID: 13800
// Name: closeFrame
// Dependencies: [6760, 13800, 5612, 13801, 10742, 2]
// Exports: default

// Module 13799 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import leaveFrame from "leaveFrame" /* 10742 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13800 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13801 */;
import FramesStore from "FramesStore" /* 6760 */;
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
