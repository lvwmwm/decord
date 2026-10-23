// Module ID: 18011
// Function ID: 18012
// Name: conjureBackgroundFrameRules
// Dependencies: [4820, 6773, 1209, 18012, 15685, 6774, 13841, 15683, 5624, 10727, 2]
// Exports: isBuilderPreviewFrame, shouldRunInBackgroundOnRelease

// Module 18011 (conjureBackgroundFrameRules)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5624 */;
import FramesConstants from "FramesConstants" /* 6774 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10727 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 13841 */;
import validateConjureAppFrame from "validateConjureAppFrame" /* 15683 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import FramesStore from "FramesStore" /* 6773 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;
import VoiceChannelAppStore from "VoiceChannelAppStore" /* 18012 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15685 */;
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
      const tmp10Result = tmp10(10727);
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
export const isBuilderPreviewFrame = function isBuilderPreviewFrame(frame) {
  const obj = conjurePreviewSurface;
  let result = obj.isConjurePreviewSurface(frame.surface);
  if (!result) {
    result = frame.intent === FrameIntent.MAIN && frame.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
    const tmp3 = frame.intent === FrameIntent.MAIN && frame.applicationId === ConjureBuilderPreviewStore.getLastBuilderPreviewApplicationId();
  }
  return result;
};
