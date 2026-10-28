// Module ID: 13879
// Function ID: 13880
// Name: closeFrame
// Dependencies: [6807, 13880, 5658, 13881, 10798, 2]
// Exports: default

// Module 13879 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5658 */;
import leaveFrame from "leaveFrame" /* 10798 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13880 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13881 */;
import FramesStore from "FramesStore" /* 6807 */;
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
