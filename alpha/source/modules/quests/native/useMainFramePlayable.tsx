// Module ID: 19262
// Function ID: 19263
// Name: useMainFramePlayable
// Dependencies: [6502, 16525, 6503, 504, 2]
// Exports: default

// Module 19262 (useMainFramePlayable)
import get_initialized from "get initialized" /* 504 */;
import FramesConstants from "FramesConstants" /* 6503 */;
import FramesStore from "FramesStore" /* 6502 */;
import PlayableStore from "PlayableStore" /* 16525 */;
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
