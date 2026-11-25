// Module ID: 11460
// Function ID: 11461
// Name: closeFrame
// Dependencies: [6905, 11461, 5656, 11462, 7660, 2]
// Exports: default

// Module 11460 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5656 */;
import leaveFrame from "leaveFrame" /* 7660 */;
import closeFramePopoutDefault from "closeFramePopout" /* 11461 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 11462 */;
import FramesStore from "FramesStore" /* 6905 */;
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
