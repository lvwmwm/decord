// Module ID: 15241
// Function ID: 15242
// Name: CheckpointActionCreators
// Dependencies: [5, 573, 15242, 1271, 15243, 2]
// Exports: fetchCheckpointData, toggleMute

// Module 15241 (CheckpointActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4;

let obj = function _fetchCheckpointData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_2;
    let flag;
    let closure_0 = arg0;
    if (1 === c4) {
      if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj10 = closure_130_1(closure_130_2[1]);
        obj10.dispatch({ type: "CHECKPOINT_FETCH_START" });
        if (flag) {
          const obj6 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: closure_130_0(closure_130_2[2]).MOCK_CHECKPOINT_STATS };
          const dispatch = closure_130_1(closure_130_2[1]).dispatch;
          const tmp20 = closure_130_1(closure_130_2[1]);
          dispatch(obj6);
        } else {
          let c3 = 1;
          const HTTP = closure_130_0(closure_130_2[3]).HTTP;
          c4 = 3;
          c5 = 1;
          const obj7 = { value: HTTP.get({ url: "/checkpoint", rejectWithError: true }), done: false };
          return obj7;
        }
      }
    } else if (2 === c4) {
      c3 = 0;
      const obj4 = closure_130_1(closure_130_2[1]);
      obj4.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c3 = 0;
      c5 = 3;
      const obj8 = { value, done: true };
      return obj8;
    } else {
      const body = value.body;
      let statsFromServerResult = null;
      const dispatch2 = closure_130_1(closure_130_2[1]).dispatch;
      const tmp34 = closure_130_1(closure_130_2[1]);
      if (null != body.stats) {
        obj = closure_130_0(closure_130_2[4]);
        statsFromServerResult = obj.statsFromServer(body.stats);
      }
      const obj9 = { type: "CHECKPOINT_FETCH_SUCCESS", stats: statsFromServerResult };
      dispatch2(obj9);
      c3 = 0;
    }
    await "HermesInternal";
    flag = closure_0;
    if (closure_0 === undefined) {
      flag = false;
    }
    return "flex";
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointActionCreators.tsx");

export const toggleMute = function toggleMute() {
  obj = DispatcherDefault;
  return obj.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
};
export const fetchCheckpointData = function fetchCheckpointData() {
  return obj(...arguments);
};
