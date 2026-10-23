// Module ID: 13822
// Function ID: 13823
// Name: closeFrame
// Dependencies: [6773, 13823, 5624, 13824, 10764, 2]
// Exports: default

// Module 13822 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5624 */;
import leaveFrame from "leaveFrame" /* 10764 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13823 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13824 */;
import FramesStore from "FramesStore" /* 6773 */;
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
