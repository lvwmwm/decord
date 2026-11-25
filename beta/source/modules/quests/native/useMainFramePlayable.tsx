// Module ID: 19219
// Function ID: 19220
// Name: useMainFramePlayable
// Dependencies: [6623, 16478, 6624, 504, 2]
// Exports: default

// Module 19219 (useMainFramePlayable)
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 6624 */;
import FramesStore from "FramesStore" /* 6623 */;
import PlayableStore from "PlayableStore" /* 16478 */;
import size from "module_2" /* 2 */;

let playableForFrame;

const asLaunched = FramesConstants.asLaunched;
const result = size.fileFinishedImporting("modules/quests/native/useMainFramePlayable.tsx");

export default function useMainFramePlayable() {
  let mainFrame;
  const obj = get_initialized;
  const items = [FramesStore, PlayableStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    playableForFrame = null;
    if (null != tmp) {
      playableForFrame = playableForFrame.getPlayableForFrame(tmp.id);
    }
    if (null != tmp) {
      return { frameId: null, playable: null };
    }
  });
  let tmp2 = null;
  if (null != stateFromStoresObject.frameId) {
    tmp2 = stateFromStoresObject;
  }
  return tmp2;
};
