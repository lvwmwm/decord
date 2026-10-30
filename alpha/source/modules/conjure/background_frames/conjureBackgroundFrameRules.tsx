// Module ID: 18621
// Function ID: 18622
// Name: conjureBackgroundFrameRules
// Dependencies: [4857, 6840, 1195, 18622, 16249, 6841, 14362, 16247, 5670, 10863, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 18621 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5670 */;
import FramesConstants from "FramesConstants" /* 6841 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10863 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 14362 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 16247 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import FramesStore from "FramesStore" /* 6840 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 18622 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16249 */;
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
      const tmp10Result = tmp10(10863);
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
