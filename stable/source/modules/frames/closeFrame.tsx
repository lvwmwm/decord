// Module ID: 15151
// Function ID: 15152
// Name: closeFrame
// Dependencies: [7019, 15152, 5967, 15153, 7349, 2]
// Exports: default

// Module 15151 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5967 */;
import leaveFrame from "leaveFrame" /* 7349 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15152 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15153 */;
import FramesStore from "FramesStore" /* 7019 */;
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
