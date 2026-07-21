// Module ID: 6673
// Function ID: 51382
// Name: useCountdown
// Dependencies: []
// Exports: default

// Module 6673 (useCountdown)
require(dependencyMap[0]).useCallback;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("hooks/useCountdown.tsx");

export default function useCountdown(expiresAt) {
  let num = arg1;
  let flag = arg3;
  const require = expiresAt;
  if (arg1 === undefined) {
    num = 1000;
  }
  const importDefault = arg2;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let useCallback;
  const obj = require(dependencyMap[1]);
  const diffAsUnitsResult = require(dependencyMap[1]).diffAsUnits(Date.now(), expiresAt);
  const forceUpdate = require(dependencyMap[2]).useForceUpdate();
  useCallback = forceUpdate;
  const items = [expiresAt, flag, forceUpdate, arg2];
  const obj2 = require(dependencyMap[2]);
  let tmp5 = null;
  const tmp3 = useCallback(() => {
    const diffAsUnitsResult = arg0(flag[1]).diffAsUnits(Date.now(), arg0);
    if (!tmp2) {
      forceUpdate();
      if (null != arg2) {
        arg2();
      }
    }
  }, items);
  if (!flag) {
    tmp5 = num;
  }
  importDefault(dependencyMap[3])(tmp3, tmp5);
  return diffAsUnitsResult;
};
