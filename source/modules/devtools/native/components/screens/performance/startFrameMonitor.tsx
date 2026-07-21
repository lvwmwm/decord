// Module ID: 14574
// Function ID: 109852
// Name: FRAME_BUDGET_MS
// Dependencies: [284214097]
// Exports: startFrameMonitor

// Module 14574 (FRAME_BUDGET_MS)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/devtools/native/components/screens/performance/startFrameMonitor.tsx");

export const FRAME_BUDGET_MS = 16.666666666666668;
export const startFrameMonitor = function startFrameMonitor() {
  let closure_0 = 0;
  let closure_1 = performance.now();
  let closure_2 = false;
  let closure_3 = 0;
  let closure_4 = 0;
  let closure_5 = 0;
  let closure_6 = 0;
  let closure_7 = false;
  function tick() {
    const nowResult = performance.now();
    if (closure_2) {
      const diff = nowResult - closure_1;
      closure_3 = closure_3 + 1;
      closure_6 = closure_6 + diff;
      if (diff > closure_5) {
        closure_5 = diff;
      }
      if (diff > 16.666666666666668) {
        closure_4 = closure_4 + 1;
      }
    } else {
      closure_2 = true;
    }
    closure_1 = nowResult;
    let closure_0 = requestAnimationFrame(tick);
  }
  closure_0 = requestAnimationFrame(tick);
  return {
    stop() {
      if (!closure_7) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(closure_0);
        closure_7 = true;
      }
      const obj = { frames: closure_3, dropped: closure_4 };
      let num = 0;
      if (closure_3 > 0) {
        num = closure_6 / closure_3;
      }
      obj.meanMs = num;
      obj.worstMs = closure_5;
      return obj;
    }
  };
};
