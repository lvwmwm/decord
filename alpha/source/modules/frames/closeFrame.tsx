// Module ID: 14081
// Function ID: 14082
// Name: closeFrame
// Dependencies: [6810, 14082, 5662, 14083, 10803, 2]
// Exports: default

// Module 14081 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5662 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14082 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14083 */;
import FramesStore from "FramesStore" /* 6810 */;
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
