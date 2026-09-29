// Module ID: 17240
// Function ID: 17241
// Name: executeRunnable
// Dependencies: [5, 17241, 3, 13380, 7341, 15, 9, 10, 504, 2]
// Exports: default

// Module 17240 (executeRunnable)
import LoggerDefault from "Logger" /* 3 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7341 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13380 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const NativeAppStartup = fn(17241);
({ init: hasOwnProperty, applicationReady: metroRequire } = NativeAppStartup);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  new LoggerDefault(arg0).log("Loading the " + arg0 + " Discord runnable");
  const obj = new LoggerDefault(arg0);
  PauseGatewaySocketAll.setIsPaused(false);
  const combined = "executeRunnable:" + arg0;
  return RequestGatewaySocketAll.withRequest(combined, asyncGeneratorStep(async () => {
    closure_0(15).identifyWebSocket();
    const init = closure_1(9).init;
    await init.measureAsync(closure_1_5);
    await promise.promise;
    const _HermesInternal = HermesInternal;
    v2(7341).startBridgeTo("AppContainer:" + closure_129_0.toLowerCase());
    return closure_1(10).time("\u{1F3C3}", "Run", () => {
      const Emitter = closure_1(c3[8]).Emitter;
      return Emitter.batched(closure_1_1);
    });
  }));
};
