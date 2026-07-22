// Module ID: 14362
// Function ID: 108444
// Name: useHasExpiredShopBlocks
// Dependencies: []
// Exports: useHasExpiredShopBlocks

// Module 14362 (useHasExpiredShopBlocks)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));
const MAX_TIMEOUT_MS = arg1(dependencyMap[2]).MAX_TIMEOUT_MS;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/collectibles/hooks/useHasExpiredShopBlocks.tsx");

export const useHasExpiredShopBlocks = (arg0, arg1, arg2) => {
  arg1 = arg0;
  const dependencyMap = arg1;
  const callback = arg2;
  const tmp = callback(callback3(false), 2);
  const callback2 = tmp[1];
  const items = [arg1, arg2, arg0];
  callback2(() => {
    const tmp = function getNextBlockExpiration(closure_0) {
      closure_0 = null;
      const item = closure_0.forEach((type) => {
        if (type.type === _null(closure_1[3]).ShopBlockType.IMMERSIVE_BANNER) {
          let time = null;
          if (null != type.endTime) {
            const endTime2 = type.endTime;
            time = endTime2.getTime();
          }
          let time1 = time;
        } else {
          time1 = null;
          if (type.type === _null(closure_1[3]).ShopBlockType.COUNTDOWN_TIMER) {
            const endTime = type.endTime;
            time1 = endTime.getTime();
          }
        }
        let tmp5 = null == _null;
        if (!tmp5) {
          let tmp6 = null != time1;
          if (tmp6) {
            tmp6 = time1 < _null;
          }
          tmp5 = tmp6;
        }
        if (tmp5) {
          const _null = time1;
        }
      });
      return closure_0;
    }(timeout);
    if (!arg1) {
      if (!arg2) {
        if (null != tmp) {
          const _Date = Date;
          const diff = tmp - Date.now();
          if (diff <= 0) {
            callback(true);
          } else {
            callback(false);
            const _setTimeout = setTimeout;
            const _Math = Math;
            const timeout = setTimeout(() => {
              callback(true);
            }, Math.min(closure_5, diff));
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
    callback(false);
  }, items);
  return tmp[0];
};
