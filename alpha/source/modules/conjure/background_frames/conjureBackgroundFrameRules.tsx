// Module ID: 15625
// Function ID: 15626
// Name: conjureBackgroundFrameRules
// Dependencies: [4642, 6504, 1193, 15626, 14613, 6505, 6833, 15549, 5438, 6824, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 15625 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5438 */;
import FramesConstants from "FramesConstants" /* 6505 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6824 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 6833 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15549 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4642 */;
import FramesStore from "FramesStore" /* 6504 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 15626 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14613 */;
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
      const tmp10Result = tmp10(6824);
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
