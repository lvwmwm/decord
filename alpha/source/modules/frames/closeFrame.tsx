// Module ID: 13846
// Function ID: 13847
// Name: closeFrame
// Dependencies: [6775, 13847, 5626, 13848, 10766, 2]
// Exports: default

// Module 13846 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import leaveFrame from "leaveFrame" /* 10766 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13847 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13848 */;
import FramesStore from "FramesStore" /* 6775 */;
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
