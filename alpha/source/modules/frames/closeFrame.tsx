// Module ID: 15176
// Function ID: 15177
// Name: closeFrame
// Dependencies: [7027, 15177, 5971, 15178, 7359, 2]
// Exports: default

// Module 15176 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import leaveFrame from "leaveFrame" /* 7359 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15177 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15178 */;
import FramesStore from "FramesStore" /* 7027 */;
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
