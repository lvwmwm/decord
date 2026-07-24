// Module ID: 16551
// Function ID: 129029
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 10276, 4270, 5078, 2]

// Module 16551 (_isNativeReflectConstruct)
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import clamp from "clamp";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import createSound from "createSound";
import tmp2 from "AutomaticLifecycleManager";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function fade(arg0, arg1) {
  const rounded = Math.round(100 * arg0);
  const rounded1 = Math.round(100 * c9);
  const rounded2 = Math.round(100 * closure_8);
  if (rounded <= 0) {
    closure_8 = (rounded2 + rounded) / 100;
    closure_7.volume = importDefault(4270)(closure_8, 0, 0.5);
  }
  clearInterval(c10);
  let tmp9 = 0 === rounded1;
  if (tmp9) {
    tmp9 = null != arg1;
  }
  if (tmp9) {
    arg1();
  }
}
function fadeOut(pause) {
  let closure_0 = pause;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  let c9 = 0;
  let closure_1 = getVolumeChangeAmount();
  interval = setInterval(() => {
    outer1_12(closure_1, closure_0);
  }, 100);
}
function fadeIn() {
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_7.loop();
  let c9 = 0.5;
  let closure_0 = getVolumeChangeAmount();
  interval = setInterval(() => {
    outer1_12(closure_0);
  }, 100);
}
function handlePauseMusic() {
  const pause = closure_7.pause;
  fadeOut(pause.bind(closure_7));
}
function handleStopMusic() {
  const stop = closure_7.stop;
  fadeOut(stop.bind(closure_7));
}
function getVolumeChangeAmount() {
  return 0.2 * (c9 - c8);
}
let closure_7 = createSound.createSound("vibing_wumpus", "vibing_wumpus", 0);
let c8 = 0;
let c9 = 0;
let c10 = null;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx");

export default tmp2;
