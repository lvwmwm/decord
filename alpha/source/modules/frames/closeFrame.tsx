// Module ID: 13877
// Function ID: 13878
// Name: closeFrame
// Dependencies: [6623, 13878, 5557, 13879, 6953, 2]
// Exports: default

// Module 13877 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import leaveFrame from "leaveFrame" /* 6953 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13878 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13879 */;
import FramesStore from "FramesStore" /* 6623 */;
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
