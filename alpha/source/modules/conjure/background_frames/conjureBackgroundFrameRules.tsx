// Module ID: 16627
// Function ID: 16628
// Name: conjureBackgroundFrameRules
// Dependencies: [4991, 6984, 1194, 16628, 11114, 6985, 11077, 16553, 5811, 11068, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 16627 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import FramesConstants from "FramesConstants" /* 6985 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11068 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 11077 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 16553 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4991 */;
import FramesStore from "FramesStore" /* 6984 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 16628 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11114 */;
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
      const tmp10Result = tmp10(11068);
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
