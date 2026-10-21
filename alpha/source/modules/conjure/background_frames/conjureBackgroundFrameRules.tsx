// Module ID: 17875
// Function ID: 17876
// Name: conjureBackgroundFrameRules
// Dependencies: [4820, 6754, 1209, 17876, 15607, 6755, 13768, 15605, 5608, 10686, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 17875 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5608 */;
import FramesConstants from "FramesConstants" /* 6755 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10686 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13768 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15605 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6754 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17876 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15607 */;
import size from "module_2" /* 2 */;

const FrameIntent = FramesConstants.FrameIntent;
let result = size.fileFinishedImporting("modules/conjure/background_frames/conjureBackgroundFrameRules.tsx");

export const shouldRunInBackgroundOnRelease = function shouldRunInBackgroundOnRelease(frame) {
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
      const tmp10Result = tmp10(10686);
      tmp11 = !tmp10Result.isConjurePreviewSurface(frame.surface);
    }
    let isAppVisibleResult = !tmp11;
    if (tmp11) {
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
    result = surface.intent === FrameIntent.MAIN && surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    const tmp3 = surface.intent === FrameIntent.MAIN && surface.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
  }
  return result;
};
