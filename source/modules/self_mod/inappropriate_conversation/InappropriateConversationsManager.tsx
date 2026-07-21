// Module ID: 16371
// Function ID: 126428
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16371 (_isNativeReflectConstruct)
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
  const rounded1 = Math.round(100 * closure_9);
  const rounded2 = Math.round(100 * closure_8);
  if (rounded <= 0) {
    closure_8 = (rounded2 + rounded) / 100;
    closure_7.volume = importDefault(dependencyMap[6])(closure_8, 0, 0.5);
  }
  clearInterval(closure_10);
  let tmp9 = 0 === rounded1;
  if (tmp9) {
    tmp9 = null != arg1;
  }
  if (tmp9) {
    arg1();
  }
}
function fadeOut(pause) {
  const importDefault = pause;
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  let closure_9 = 0;
  let closure_1 = getVolumeChangeAmount();
  const interval = setInterval(() => {
    callback(closure_1, arg0);
  }, 100);
}
function fadeIn() {
  if (null != interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
  }
  closure_7.loop();
  let closure_9 = 0.5;
  let closure_0 = getVolumeChangeAmount();
  const interval = setInterval(() => {
    callback(closure_0);
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
  return 0.2 * (closure_9 - closure_8);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = arg1(dependencyMap[5]).createSound("vibing_wumpus", "vibing_wumpus", 0);
let closure_8 = 0;
let closure_9 = 0;
let closure_10 = null;
let tmp2 = (arg0) => {
  class InappropriateConversationsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, InappropriateConversationsManager);
      items1 = [...items];
      obj = closure_5(InappropriateConversationsManager);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { VIBING_WUMPUS_PLAY_MUSIC: closure_14, VIBING_WUMPUS_STOP_MUSIC: closure_16, VIBING_WUMPUS_PAUSE_MUSIC: closure_15 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const importDefault = InappropriateConversationsManager;
  callback2(InappropriateConversationsManager, arg0);
  return callback(InappropriateConversationsManager);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/self_mod/inappropriate_conversation/InappropriateConversationsManager.tsx");

export default tmp2;
