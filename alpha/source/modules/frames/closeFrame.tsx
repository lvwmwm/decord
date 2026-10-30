// Module ID: 14344
// Function ID: 14345
// Name: closeFrame
// Dependencies: [6840, 14345, 5670, 14346, 10902, 2]
// Exports: default

// Module 14344 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14345 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14346 */;
import FramesStore from "FramesStore" /* 6840 */;
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
