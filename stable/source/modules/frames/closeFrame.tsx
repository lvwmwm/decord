// Module ID: 14662
// Function ID: 14663
// Name: closeFrame
// Dependencies: [6934, 14663, 5831, 14664, 11047, 2]
// Exports: default

// Module 14662 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import leaveFrame from "leaveFrame" /* 11047 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14663 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14664 */;
import FramesStore from "FramesStore" /* 6934 */;
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
