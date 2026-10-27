// Module ID: 13862
// Function ID: 13863
// Name: closeFrame
// Dependencies: [6776, 13863, 5627, 13864, 10769, 2]
// Exports: default

// Module 13862 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import leaveFrame from "leaveFrame" /* 10769 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13863 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13864 */;
import FramesStore from "FramesStore" /* 6776 */;
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
