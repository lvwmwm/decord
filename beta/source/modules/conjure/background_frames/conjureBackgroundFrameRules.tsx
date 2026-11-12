// Module ID: 16715
// Function ID: 16716
// Name: conjureBackgroundFrameRules
// Dependencies: [5018, 6934, 1194, 16716, 11084, 6935, 11046, 16640, 5831, 11037, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 16715 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5831 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11037 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 11046 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 16640 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import FramesStore from "FramesStore" /* 6934 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 16716 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11084 */;
import size from "module_2" /* 2 */;

const FrameIntent = FramesConstants.FrameIntent;
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrameRules.tsx");

export function shouldRunInBackgroundOnRelease(frame) {
  let isConjureApplicationResult = frameRunsInBackgroundDefault(frame, UnsyncedUserSettingsStore);
  if (isConjureApplicationResult) {
    const obj = validateConjureAppFrame;
    isConjureApplicationResult = obj.isConjureApplication(frame.applicationId);
  }
  if (isConjureApplicationResult) {
    const id = frame.id;
    const mainFrame = FramesStore.getMainFrame();
    isConjureApplicationResult = (null == mainFrame || mainFrame.id === id) && null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const tmp7 = (null == mainFrame || mainFrame.id === id) && null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  }
  let tmp9 = isConjureApplicationResult;
  if (tmp9) {
    let tmp11 = frame.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
    const tmp10 = require;
    if (tmp11) {
      const tmp10Result = tmp10(11037);
      tmp11 = !tmp10Result.isConjurePreviewSurface(frame.surface);
    }
    let isAppVisibleResult = !tmp11;
    if (tmp11) {
      isAppVisibleResult = VoiceChannelAppStore.isAppVisible(frame.surface.channelId, true);
    }
    tmp9 = isAppVisibleResult;
  }
  return tmp9;
}
export function isBuilderPreviewFrame(frame) {
  const obj = conjurePreviewSurface;
  let result = obj.isConjurePreviewSurface(frame.surface);
  if (!result) {
    const tmpResult = conjurePreviewSurface;
    result = tmpResult.isConjurePreviewOverlayFrame(frame);
  }
  if (!result) {
    result = frame.intent === FrameIntent.MAIN && frame.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    const tmp5 = frame.intent === FrameIntent.MAIN && frame.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
  }
  return result;
}
