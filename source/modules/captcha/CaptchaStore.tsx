// Module ID: 9483
// Function ID: 73837
// Name: useCaptchaStore
// Dependencies: [57, 621, 682, 6836, 6841, 2]
// Exports: flushCaptchaServeVolume, incrementCaptchaServeVolume, isCaptchaStoreVolumeEmpty

// Module 9483 (useCaptchaStore)
import _slicedToArray from "_slicedToArray";
import keys from "keys";

const require = arg1;
keys = keys.create(() => ({ captchaServeVolume: {} }));
const result = require("batchUpdates").fileFinishedImporting("modules/captcha/CaptchaStore.tsx");

export const useCaptchaStore = keys;
export const isCaptchaStoreVolumeEmpty = function isCaptchaStoreVolumeEmpty() {
  return 0 === Object.keys(keys.getState().captchaServeVolume).length;
};
export const incrementCaptchaServeVolume = function incrementCaptchaServeVolume(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState((arg0) => {
      let sum = arg0;
      if (null == outer1_0) {
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
        tmp3 = outer1_0 in sum.captchaServeVolume;
      }
    });
  });
};
export const flushCaptchaServeVolume = function flushCaptchaServeVolume() {
  let length;
  const entries = Object.entries(keys.getState().captchaServeVolume);
  let num = 0;
  if (0 < entries.length) {
    do {
      let tmp = callback;
      let tmp2 = callback(entries[num], 2);
      let tmp3 = importDefault;
      let tmp4 = dependencyMap;
      let obj = importDefault(6836);
      obj = {};
      let tmp5 = require;
      obj.name = require(6841) /* set */.MetricEvents.CAPTCHA_SERVE_VOLUME_DISTRIBUTION;
      let _HermesInternal = HermesInternal;
      let items = ["user_flow:" + tmp2[0]];
      obj.tags = items;
      let distributionResult = obj.distribution(obj, tmp2[1], true);
      num = num + 1;
      length = entries.length;
    } while (num < length);
  }
  require(682) /* batchUpdates */.batchUpdates(() => outer1_4.setState({ captchaServeVolume: {} }));
};
