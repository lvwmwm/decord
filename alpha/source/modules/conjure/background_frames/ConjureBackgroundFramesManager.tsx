// Module ID: 18771
// Function ID: 18772
// Name: ConjureBackgroundFramesManager
// Dependencies: [5, 7214, 5626, 18046, 2002, 2]

// Module 18771 (ConjureBackgroundFramesManager)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

let c3, c4;

function handleFrameLaunchStart() {
  return obj(...arguments);
}
let actions = function _handleFrameLaunchStart() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        let type;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            type = undefined;
            ({ applicationId: c0, frameId: c1, surface: c2 } = closure_0);
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
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
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
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
