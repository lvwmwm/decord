// Module ID: 14633
// Function ID: 14634
// Name: closeFrame
// Dependencies: [6901, 14634, 5799, 14635, 11015, 2]
// Exports: default

// Module 14633 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5799 */;
import leaveFrame from "leaveFrame" /* 11015 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14634 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14635 */;
import FramesStore from "FramesStore" /* 6901 */;
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
