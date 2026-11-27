// Module ID: 11515
// Function ID: 11516
// Name: closeFrame
// Dependencies: [6936, 11516, 5687, 11517, 7691, 2]
// Exports: default

// Module 11515 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5687 */;
import leaveFrame from "leaveFrame" /* 7691 */;
import closeFramePopoutDefault from "closeFramePopout" /* 11516 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 11517 */;
import FramesStore from "FramesStore" /* 6936 */;
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
