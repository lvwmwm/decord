// Module ID: 971
// Function ID: 10466
// Name: flushWithTimeout
// Dependencies: [5, 801, 845, 798, 970]
// Exports: flushIfServerless

// Module 971 (flushWithTimeout)
import asyncGeneratorStep from "asyncGeneratorStep";

function flushWithTimeout(arg0) {
  return _flushWithTimeout(...arguments);
}
async function _flushWithTimeout(arg0, arg1) {
  const debug = outer2_0(outer2_1[1]).debug;
  debug.log("Flushing events...");
  yield outer2_0(outer2_1[2]).flush(arg0);
  const debug2 = outer2_0(outer2_1[1]).debug;
  debug2.log("Done flushing events");
}
async function _flushIfServerless() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const timeout = first.timeout;
    let num = 2000;
    if (undefined !== timeout) {
      num = timeout;
    }
    if ("cloudflareWaitUntil" in first) {
      let cloudflareWaitUntil;
      if (null != first) {
        cloudflareWaitUntil = first.cloudflareWaitUntil;
      }
      if ("function" === typeof cloudflareWaitUntil) {
        first.cloudflareWaitUntil(outer2_3(num));
      }
    }
    if ("cloudflareCtx" in first) {
      const cloudflareCtx = first.cloudflareCtx;
      let waitUntil;
      if (null != cloudflareCtx) {
        waitUntil = cloudflareCtx.waitUntil;
      }
      if ("function" === typeof waitUntil) {
        const cloudflareCtx2 = first.cloudflareCtx;
        cloudflareCtx2.waitUntil(outer2_3(num));
      }
    }
    const _Symbol = Symbol;
    if (outer2_0(outer2_1[3]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")]) {
      outer2_0(outer2_1[4]).vercelWaitUntil(outer2_3(num));
      const obj2 = outer2_0(outer2_1[4]);
    } else {
      const _process = process;
      let tmp8 = "undefined" !== typeof process;
      if (tmp8) {
        const _process2 = process;
        let NETLIFY = process.env.FUNCTIONS_WORKER_RUNTIME;
        if (!NETLIFY) {
          const _process3 = process;
          NETLIFY = process.env.LAMBDA_TASK_ROOT;
        }
        if (!NETLIFY) {
          const _process4 = process;
          NETLIFY = process.env.K_SERVICE;
        }
        if (!NETLIFY) {
          const _process5 = process;
          NETLIFY = process.env.CF_PAGES;
        }
        if (!NETLIFY) {
          const _process6 = process;
          NETLIFY = process.env.VERCEL;
        }
        if (!NETLIFY) {
          const _process7 = process;
          NETLIFY = process.env.NETLIFY;
        }
        tmp8 = NETLIFY;
      }
      if (tmp8) {
        return yield outer2_3(num);
      }
    }
  }
  first = {};
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const flushIfServerless = function flushIfServerless() {
  return _flushIfServerless(...arguments);
};
