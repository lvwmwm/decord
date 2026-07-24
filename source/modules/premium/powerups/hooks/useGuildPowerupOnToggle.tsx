// Module ID: 11596
// Function ID: 90235
// Name: useGuildPowerupOnToggle
// Dependencies: [57, 31, 11550, 2]
// Exports: default

// Module 11596 (useGuildPowerupOnToggle)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("guildPowerupsAckNotification").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  let _slicedToArray;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  [tmp2, _slicedToArray] = callback(React.useState(false), 2);
  let tmp3 = callback(React.useState(undefined), 2);
  React = tmp3[1];
  let tmp = callback(React.useState(false), 2);
  const items = [arg0, arg1];
  return {
    isLoading: tmp2,
    error: tmp3[0],
    onToggle: React.useCallback((arg0) => {
      if (null == skuId) {
        return Promise.resolve();
      } else {
        const tmp11 = callback(skuId[2]);
        callback2(true);
        callback3(undefined);
        const tmp = arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild;
        const tmpResult = arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild(callback, skuId.skuId);
        return arg0 ? tmp11.enablePowerupForGuild : tmp11.disablePowerupForGuild(callback, skuId.skuId).catch((body) => {
          body = body.body;
          let message;
          if (null != body) {
            message = body.message;
          }
          let tmp3;
          if (null != message) {
            tmp3 = message;
          }
          outer1_3(tmp3);
          throw body;
        }).finally(() => {
          outer1_2(false);
        });
      }
    }, items)
  };
};
