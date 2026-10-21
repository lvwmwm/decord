// Module ID: 13749
// Function ID: 13750
// Name: closeFrame
// Dependencies: [6754, 13750, 5608, 13751, 10723, 2]
// Exports: default

// Module 13749 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5608 */;
import leaveFrame from "leaveFrame" /* 10723 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13750 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13751 */;
import FramesStore from "FramesStore" /* 6754 */;
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
