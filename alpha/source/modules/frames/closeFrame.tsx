// Module ID: 14528
// Function ID: 14529
// Name: closeFrame
// Dependencies: [6966, 14529, 5795, 14530, 11076, 2]
// Exports: default

// Module 14528 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import leaveFrame from "leaveFrame" /* 11076 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14529 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14530 */;
import FramesStore from "FramesStore" /* 6966 */;
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
