// Module ID: 17705
// Function ID: 17706
// Name: executeRunnable
// Dependencies: [5, 17706, 3, 13939, 8002, 15, 9, 10, 504, 2]
// Exports: default

// Module 17705 (executeRunnable)
import LoggerDefault from "Logger" /* 3 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 8002 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13939 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const NativeAppStartup = fn(17706);
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
    v2(8002).startBridgeTo("AppContainer:" + closure_129_0.toLowerCase());
    return closure_1(10).time("\u{1F3C3}", "Run", () => {
      const Emitter = closure_1(c3[8]).Emitter;
      return Emitter.batched(closure_1_1);
    });
  }));
};
