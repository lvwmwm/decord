// Module ID: 13804
// Function ID: 13805
// Name: closeFrame
// Dependencies: [6531, 13805, 5467, 13806, 6864, 2]
// Exports: default

// Module 13804 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5467 */;
import leaveFrame from "leaveFrame" /* 6864 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13805 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13806 */;
import FramesStore from "FramesStore" /* 6531 */;
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
