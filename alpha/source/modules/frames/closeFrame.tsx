// Module ID: 14314
// Function ID: 14315
// Name: closeFrame
// Dependencies: [6833, 14315, 5664, 14316, 10879, 2]
// Exports: default

// Module 14314 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14315 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14316 */;
import FramesStore from "FramesStore" /* 6833 */;
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
