// Module ID: 13842
// Function ID: 13843
// Name: closeFrame
// Dependencies: [6775, 13843, 5626, 13844, 10765, 2]
// Exports: default

// Module 13842 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import leaveFrame from "leaveFrame" /* 10765 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13843 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13844 */;
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
