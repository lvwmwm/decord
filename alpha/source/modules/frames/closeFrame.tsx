// Module ID: 13755
// Function ID: 13756
// Name: closeFrame
// Dependencies: [6504, 13756, 5438, 13757, 6834, 2]
// Exports: default

// Module 13755 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import leaveFrame from "leaveFrame" /* 6834 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13756 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13757 */;
import FramesStore from "FramesStore" /* 6504 */;
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
