// Module ID: 19426
// Function ID: 19427
// Name: useMainFramePlayable
// Dependencies: [6936, 16675, 6937, 504, 2]
// Exports: default

// Module 19426 (useMainFramePlayable)
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 6937 */;
import FramesStore from "FramesStore" /* 6936 */;
import PlayableStore from "PlayableStore" /* 16675 */;
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
