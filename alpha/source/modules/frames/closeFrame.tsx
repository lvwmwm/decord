// Module ID: 11361
// Function ID: 11362
// Name: closeFrame
// Dependencies: [6810, 11362, 5561, 11363, 7561, 2]
// Exports: default

// Module 11361 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5561 */;
import leaveFrame from "leaveFrame" /* 7561 */;
import closeFramePopoutDefault from "closeFramePopout" /* 11362 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 11363 */;
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
