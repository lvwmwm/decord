// Module ID: 15149
// Function ID: 15150
// Name: closeFrame
// Dependencies: [7019, 15150, 5977, 15151, 7349, 2]
// Exports: default

// Module 15149 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5977 */;
import leaveFrame from "leaveFrame" /* 7349 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15150 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15151 */;
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
