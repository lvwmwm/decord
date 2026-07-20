// Module ID: 11551
// Function ID: 89900
// Name: useGuildPowerupOnToggle
// Dependencies: []
// Exports: default

// Module 11551 (useGuildPowerupOnToggle)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  let tmp2;
  arg1 = arg0;
  const dependencyMap = arg1;
  [tmp2, closure_2] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(undefined), 2);
  const React = tmp3[1];
  const tmp = callback(React.useState(false), 2);
  const items = [arg0, arg1];
  return {
    isLoading: tmp2,
    error: tmp3[0],
    onToggle: React.useCallback((arg0) => {
      if (null == arg1) {
        return Promise.resolve();
      } else {
        const tmp11 = arg0(arg1[2]);
        callback(true);
        callback2(undefined);
        const tmp = arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild;
        const tmpResult = arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild(arg0, arg1.skuId);
        return arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild(arg0, arg1.skuId).catch((body) => {
          body = body.body;
          let message;
          if (null != body) {
            message = body.message;
          }
          let tmp3;
          if (null != message) {
            tmp3 = message;
          }
          closure_3(tmp3);
          throw body;
        }).finally(() => {
          callback(false);
        });
      }
    }, items)
  };
};
