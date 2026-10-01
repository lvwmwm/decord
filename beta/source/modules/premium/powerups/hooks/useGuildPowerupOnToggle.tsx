// Module ID: 12032
// Function ID: 12033
// Name: useGuildPowerupOnToggle
// Dependencies: [32, 19, 11984, 2]
// Exports: default

// Module 12032 (useGuildPowerupOnToggle)
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 11984 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupOnToggle.tsx");

export default function useGuildPowerupOnToggle(arg0, arg1) {
  let closure_3;
  let items;
  let tmp2;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, _slicedToArray] = tmp;
  const tmp3 = _slicedToArray(react.useState(undefined), 2);
  react = tmp3[1];
  const obj = {
    isLoading: tmp2,
    error: tmp3[0],
    onToggle: react.useCallback((arg0) => {
      let tmp;
      if (null == closure_1) {
        return Promise.resolve();
      } else {
        const tmp5 = GuildPowerupsActionCreators;
        const tmp6 = arg0 ? tmp5.enablePowerupForGuild : tmp5.disablePowerupForGuild;
        _slicedToArray(true);
        closure_3(undefined);
        const tmp6Result = tmp6(closure_0, tmp.skuId);
        const catchPromise = tmp6Result.catch((error) => {
          const body = error.body;
          let message;
          const tmp = closure_1_3;
          if (body != null) {
            message = body.message;
          }
          tmp(message);
          throw error;
        });
        return catchPromise.finally(() => {
          closure_1_2(false);
        });
      }
    }, items)
  };
  items = [arg0, arg1];
  return obj;
};
