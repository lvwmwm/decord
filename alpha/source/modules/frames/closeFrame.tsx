// Module ID: 15039
// Function ID: 15040
// Name: closeFrame
// Dependencies: [6956, 15040, 5914, 15041, 7285, 2]
// Exports: default

// Module 15039 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5914 */;
import leaveFrame from "leaveFrame" /* 7285 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15040 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15041 */;
import FramesStore from "FramesStore" /* 6956 */;
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
