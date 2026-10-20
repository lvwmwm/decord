// Module ID: 17794
// Function ID: 17795
// Name: conjureBackgroundFrameRules
// Dependencies: [4799, 6726, 1209, 17795, 15535, 6727, 15533, 5587, 11031, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 17794 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5587 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11031 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15533 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4799 */;
import FramesStore from "FramesStore" /* 6726 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17795 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15535 */;
import FramesConstants from "FramesConstants" /* 6727 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
({ FrameIntent: metroImportDefault, isLaunched: metroImportAll } = FramesConstants);
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrameRules.tsx");

export const shouldRunInBackgroundOnRelease = function shouldRunInBackgroundOnRelease(frame) {
  let allowConjureRunInBackground = metroImportAll(frame) && frame.data.runsInBackground && UnsyncedUserSettingsStore.allowConjureRunInBackground;
  if (allowConjureRunInBackground) {
    const obj = validateConjureAppFrame;
    allowConjureRunInBackground = obj.isConjureApplication(frame.applicationId);
  }
  if (allowConjureRunInBackground) {
    const id = frame.id;
    const mainFrame = FramesStore.getMainFrame();
    allowConjureRunInBackground = (null == mainFrame || mainFrame.id === id) && null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const tmp7 = (null == mainFrame || mainFrame.id === id) && null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  }
  let tmp9 = allowConjureRunInBackground;
  if (tmp9) {
    let tmp12 = frame.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL;
    const tmp10 = require;
    if (tmp12) {
      const tmp10Result = tmp10(11031);
      tmp12 = !tmp10Result.isConjurePreviewSurface(frame.surface);
    }
    let isAppVisibleResult = !tmp12;
    if (tmp12) {
      isAppVisibleResult = VoiceChannelAppStore.isAppVisible(frame.surface.channelId, true);
    }
    tmp9 = isAppVisibleResult;
  }
  return tmp9;
};
export const isBuilderPreviewFrame = function isBuilderPreviewFrame(surface) {
  const obj = conjurePreviewSurface;
  let result = obj.isConjurePreviewSurface(surface.surface);
  if (!result) {
    result = surface.intent === metroImportDefault.MAIN && surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    const tmp3 = surface.intent === metroImportDefault.MAIN && surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
  }
  return result;
};
