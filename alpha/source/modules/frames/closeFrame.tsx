// Module ID: 14659
// Function ID: 14660
// Name: closeFrame
// Dependencies: [6904, 14660, 5801, 14661, 11024, 2]
// Exports: default

// Module 14659 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import leaveFrame from "leaveFrame" /* 11024 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14660 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14661 */;
import FramesStore from "FramesStore" /* 6904 */;
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
