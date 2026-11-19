// Module ID: 13786
// Function ID: 13787
// Name: closeFrame
// Dependencies: [6502, 13787, 5436, 13788, 6834, 2]
// Exports: default

// Module 13786 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5436 */;
import leaveFrame from "leaveFrame" /* 6834 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13787 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13788 */;
import FramesStore from "FramesStore" /* 6502 */;
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
