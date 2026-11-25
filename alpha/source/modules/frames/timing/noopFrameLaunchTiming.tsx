// Module ID: 7655
// Function ID: 7656
// Name: noopFrameLaunchTiming
// Dependencies: [2]

// Module 7655 (noopFrameLaunchTiming)
import size from "module_2" /* 2 */;

const obj = {
  setStatus() {

  }
};
const frozen = Object.freeze(obj);
const obj2 = {
  frameId: "",
  launchId: "",
  span(PROXY_TICKET, fn) {
    return fn(frozen);
  },
  event() {

  },
  finish() {

  }
};
const frozen1 = Object.freeze(obj2);
const result = size.fileFinishedImporting("modules/frames/timing/noopFrameLaunchTiming.tsx");

export const NOOP_SPAN = frozen;
export const NOOP_FRAME_LAUNCH_TIMING = frozen1;
