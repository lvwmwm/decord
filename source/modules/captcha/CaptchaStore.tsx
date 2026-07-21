// Module ID: 9439
// Function ID: 73574
// Name: useCaptchaStore
// Dependencies: [620167168, 344260608, 94568448, 119603200, 131072, 1904017408]
// Exports: flushCaptchaServeVolume, incrementCaptchaServeVolume, isCaptchaStoreVolumeEmpty

// Module 9439 (useCaptchaStore)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = obj.create(() => ({ captchaServeVolume: {} }));
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = obj;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(obj.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[2]).batchUpdates(() => {
    state.setState((arg0) => {
      let sum = arg0;
      if (null == closure_0) {
        return sum;
      } else {
        let obj = {};
        obj = {};
        const merged = Object.assign(sum.captchaServeVolume);
        if (tmp3) {
          sum = sum.captchaServeVolume[tmp6] + 1;
          obj[tmp6] = sum;
          obj.captchaServeVolume = obj;
          let tmp7 = obj;
        } else {
          obj[tmp6] = 1;
          obj.captchaServeVolume = obj;
          tmp7 = obj;
        }
        const tmp3 = closure_0 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  let length;
  let obj;
  const entries = Object.entries(obj.getState().captchaServeVolume);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = closure_3;
      let tmp2 = closure_3(entries[num], 2);
      let tmp3 = closure_1;
      let tmp4 = closure_2;
      obj = closure_1(closure_2[3]);
      obj = {};
      let tmp5 = closure_0;
      obj.name = closure_0(closure_2[4]).MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
      let _HermesInternal = HermesInternal;
      let items = ["user_flow:" + tmp2[0]];
      obj.tags = items;
      let distributionResult = obj.distribution(obj, tmp2[1], true);
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  arg1(dependencyMap[2]).batchUpdates(() => state.setState({ captchaServeVolume: {} }));
};
