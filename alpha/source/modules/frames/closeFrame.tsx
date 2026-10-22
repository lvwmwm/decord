// Module ID: 13785
// Function ID: 13786
// Name: closeFrame
// Dependencies: [6761, 13786, 5612, 13787, 10735, 2]
// Exports: default

// Module 13785 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import leaveFrame from "leaveFrame" /* 10735 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13786 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13787 */;
import FramesStore from "FramesStore" /* 6761 */;
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
