// Module ID: 14608
// Function ID: 14609
// Name: closeFrame
// Dependencies: [6981, 14609, 5809, 14610, 11125, 2]
// Exports: default

// Module 14608 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import leaveFrame from "leaveFrame" /* 11125 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14609 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14610 */;
import FramesStore from "FramesStore" /* 6981 */;
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
