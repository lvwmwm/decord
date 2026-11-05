// Module ID: 14622
// Function ID: 14623
// Name: closeFrame
// Dependencies: [6984, 14623, 5811, 14624, 11078, 2]
// Exports: default

// Module 14622 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import leaveFrame from "leaveFrame" /* 11078 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14623 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14624 */;
import FramesStore from "FramesStore" /* 6984 */;
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
