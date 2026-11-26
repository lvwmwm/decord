// Module ID: 9095
// Function ID: 9096
// Name: nitroFetchOnWorklet
// Dependencies: [5, 1708, 9090, 9091, 9092]
// Exports: nitroFetchOnWorklet

// Module 9095 (nitroFetchOnWorklet)
import _mod1708 from "module_1708" /* 1708 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c7, c8, workletRuntime;

let obj = function _nitroFetchOnWorklet() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    let bodyBytes;
    let bodyString;
    let obj5;
    function ensureWorkletRuntime(runtimeName) {
      let str = runtimeName;
      if (runtimeName === undefined) {
        str = "nitro-fetch";
      }
      try {
        if (workletRuntime == null) {
          workletRuntime = closure_1_0(closure_1_1[1]).createWorkletRuntime(str);
        }
        return workletRuntime;
      } catch (err) {
        const _console = console;
        console.warn("react-native-worklets not available");
      }
    }
    function pnpm_workletJs1Factory(items) {
      let tmp;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
      function pnpm_workletJs1() {
        let bodyBytes;
        let bodyString;
        const client = closure_1_0.createClient();
        const response = client.requestSync(closure_1_1(workletRuntime, closure_1_3));
        const response1 = { url: response.url, status: response.status, statusText: response.statusText, ok: response.ok, redirected: response.redirected, headers: response.headers, bodyBytes, bodyString };
        bodyBytes = undefined;
        if (closure_1_4) {
          bodyBytes = response.bodyBytes;
        }
        bodyString = undefined;
        if (!closure_1_4) {
          bodyString = response.bodyString;
        }
        return closure_1_5(response1);
      }
      items = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
      pnpm_workletJs1.__closure = items;
      pnpm_workletJs1.__workletHash = 9135180058708;
      pnpm_workletJs1.__initData = tmp;
      return pnpm_workletJs1;
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c8 === 2) {
      c8 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str2 = "nitroFetchOnWorklet: no runtime, mapping on JS thread";
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c6;
        try {
          let runOnRuntimeAsync;
          let closure_5;
          let config;
          c8 = 2;
          const tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              runOnRuntimeAsync = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              config = undefined;
              let preferBytes;
              if (closure_3 != null) {
                preferBytes = tmp56.preferBytes;
              }
              closure_5 = true === preferBytes;
              c6 = 1;
              let runtimeName;
              if (closure_3 != null) {
                runtimeName = tmp56.runtimeName;
              }
              closure_4 = ensureWorkletRuntime(runtimeName);
              runOnRuntimeAsync = _mod1708.runOnRuntimeAsync;
              c6 = 0;
            }
          } else if (1 === tmp4) {
            c6 = 0;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              config = value;
              let response = { url: config.url, status: config.status, statusText: config.statusText, ok: config.ok, redirected: config.redirected, headers: config.headers, bodyBytes, bodyString };
              bodyBytes = undefined;
              const tmp45 = closure_2;
              if (closure_5) {
                const tmp5 = closure_4;
                const tmp6 = config;
                bodyBytes = config.bodyBytes;
              }
              bodyString = undefined;
              if (!closure_5) {
                bodyString = config.bodyString;
              }
              c8 = 3;
              const obj6 = { value: tmp45(response), done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
          const tmp17 = runOnRuntimeAsync;
          if (tmp17) {
            const tmp18 = closure_4;
            if (tmp18) {
              let items = [closure_133_4, closure_133_0(closure_133_1[3]).NitroFetchHybrid, closure_133_0(closure_133_1[4]).buildNitroRequestPure, closure_0, closure_1, closure_5, closure_2];
              c7 = 3;
              c8 = 1;
              const obj8 = { value: runOnRuntimeAsync(closure_4, pnpm_workletJs1Factory(items)), done: false };
              return obj8;
            }
          }
          let _console = console;
          const warnResult = console.warn("nitroFetchOnWorklet: no runtime, mapping on JS thread");
          c7 = 2;
          c8 = 1;
          const obj9 = { value: obj5.nitroFetchRaw(closure_0, closure_1), done: false };
          obj5 = closure_133_0(closure_133_1[2]);
          return obj9;
        } catch (tmp37) {
          if (0 === c6) {
            c8 = 3;
            throw tmp37;
          } else {
            c7 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = { code: "(function pnpm_workletJs1(){let[NitroFetchHybrid,buildNitroRequestPure,input,init,preferBytes,mapWorklet]=this.__closure;const nitroFetchClient=NitroFetchHybrid.createClient();const request=buildNitroRequestPure(input,init);const res=nitroFetchClient.requestSync(request);const payload={url:res.url,status:res.status,statusText:res.statusText,ok:res.ok,redirected:res.redirected,headers:res.headers,bodyBytes:preferBytes?res.bodyBytes:undefined,bodyString:preferBytes?undefined:res.bodyString};return mapWorklet(payload);})" };

export function nitroFetchOnWorklet(arg0, arg1, arg2, arg3) {
  return obj(...arguments);
}
