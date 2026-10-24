// Module ID: 18767
// Function ID: 18768
// Name: ConjureBackgroundFramesManager
// Dependencies: [5, 7214, 5626, 18042, 2002, 2]

// Module 18767 (ConjureBackgroundFramesManager)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let c3;

function handleFrameLaunchStart() {
  return obj(...arguments);
}
let actions = function _handleFrameLaunchStart() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let closure_1;
    let closure_0 = arg0;
    if (1 === c3) {
      if (arg0 === 1) {
        let c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else if (type.type === closure_130_0(closure_130_1[2]).EmbeddedSurfaceType.MAIN) {
        c3 = 2;
        c4 = 1;
        const obj5 = { value: closure_130_0(closure_130_1[4])(closure_130_1[3], closure_130_1.paths), done: false };
        return obj5;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      const obj = { value, done: true };
      return obj;
    } else {
      const result = value.closeBackgroundedConjureAppFrames(c0, c1);
    }
    await "IconComponent";
    ({ applicationId: c0, frameId: c1, surface: c2 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
class ConjureBackgroundFramesManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    actions = { FRAME_LAUNCH_START: handleFrameLaunchStart };
    applyArgumentsResult.actions = actions;
    return applyArgumentsResult;
  }
}
const conjureBackgroundFramesManager = new ConjureBackgroundFramesManager();
let result = size.fileFinishedImporting("modules/conjure/background_frames/ConjureBackgroundFramesManager.tsx");

export default conjureBackgroundFramesManager;
