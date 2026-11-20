// Module ID: 12419
// Function ID: 12420
// Name: useCheckpointCharacterExit
// Dependencies: [32, 19, 4795, 12393, 504, 7272, 2]
// Exports: default

// Module 12419 (useCheckpointCharacterExit)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import CheckpointTransitionConstants from "CheckpointTransitionConstants" /* 12393 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ CHECKPOINT_CHARACTER_EXIT_TEXTURE_TIMEOUT_MS: metroRequire, CHECKPOINT_CHARACTER_EXIT_ZOOM_DURATION_MS: metroImportDefault } = CheckpointTransitionConstants);
const constants = { NONE: "none", LOADING_TEXTURES: "loading_textures", BEAMING: "beaming" };
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCharacterExit.tsx");

export default function useCheckpointCharacterExit(onExitFinished) {
  let closure_1;
  let closure_3;
  let closure_4;
  let first;
  onExitFinished = onExitFinished.onExitFinished;
  first = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_5;
  const onExitPlaying = onExitFinished.onExitPlaying;
  const items = [closure_5];
  const obj = onExitFinished(first[4]);
  importDefault = obj.useStateFromStores(items, () => closure_5.useReducedMotion);
  [first, _slicedToArray] = react.useState(constants.NONE);
  const tmp3 = require("useStableCallback")(() => {
    closure_3(constants.NONE);
    onExitFinished();
  });
  react = tmp3;
  const items1 = [first, tmp3];
  const effect = react.useEffect(() => {
    if (first !== constants.NONE) {
      const timeout = setTimeout(closure_4, tmp === tmp2.BEAMING ? metroImportDefault : metroRequire);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const tmp5 = require("useStableCallback")(() => {
    const tmp = closure_1;
    if (tmp) {
      onExitFinished();
    } else {
      closure_3(constants.LOADING_TEXTURES);
    }
  });
  const tmp6 = require("useStableCallback")(() => {
    closure_3((arg0) => {
      let BEAMING = arg0;
      if (arg0 === constants.LOADING_TEXTURES) {
        BEAMING = constants.BEAMING;
      }
      return BEAMING;
    });
  });
  const tmp7 = require("useStableCallback")(onExitPlaying);
  closure_5 = tmp7;
  const items2 = [first, tmp7];
  const effect1 = react.useEffect(() => {
    if (first === constants.BEAMING) {
      closure_5();
    }
  }, items2);
  return { isCharacterExiting: first !== constants.NONE, startExit: tmp5, handleExitPlaying: tmp6 };
};
