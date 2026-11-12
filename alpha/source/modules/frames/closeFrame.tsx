// Module ID: 15035
// Function ID: 15036
// Name: closeFrame
// Dependencies: [6956, 15036, 5914, 15037, 7285, 2]
// Exports: default

// Module 15035 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5914 */;
import leaveFrame from "leaveFrame" /* 7285 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15036 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15037 */;
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
