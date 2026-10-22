// Module ID: 17945
// Function ID: 17946
// Name: conjureBackgroundFrameRules
// Dependencies: [4820, 6761, 1209, 17946, 15651, 6762, 13804, 15649, 5612, 10698, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 17945 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5612 */;
import FramesConstants from "FramesConstants" /* 6762 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10698 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13804 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15649 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6761 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 17946 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15651 */;
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
      const tmp10Result = tmp10(10698);
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
