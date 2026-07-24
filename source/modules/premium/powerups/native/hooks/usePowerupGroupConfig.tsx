// Module ID: 11609
// Function ID: 90293
// Name: usePowerupGroupConfig
// Dependencies: [31, 1838, 566, 7934, 1212, 2230, 11610, 11611, 1327, 2]
// Exports: default

// Module 11609 (usePowerupGroupConfig)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx");

export default function usePowerupGroupConfig(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => {
    const guild = outer1_4.getGuild(callback);
    let guildSupportsTagsResult = null != guild;
    if (guildSupportsTagsResult) {
      guildSupportsTagsResult = callback(stateFromStores[3]).guildSupportsTags(guild);
      const obj = callback(stateFromStores[3]);
    }
    return guildSupportsTagsResult;
  });
  const items1 = [arg1, stateFromStores];
  return React.useMemo(() => {
    if ("guildTagsBadgePacks" === lib.group) {
      let obj = {};
      const intl = callback(stateFromStores[4]).intl;
      obj.title = intl.string(lib(stateFromStores[5]).KC9HRW);
      const intl2 = callback(stateFromStores[4]).intl;
      obj.description = intl2.string(lib(stateFromStores[5]).GJiSmP);
      obj = { staticUrl: lib(stateFromStores[6]), animatedUrl: lib(stateFromStores[7]) };
      obj.image = obj;
      let stringResult;
      if (!stateFromStores) {
        const intl3 = callback(stateFromStores[4]).intl;
        stringResult = intl3.string(lib(stateFromStores[5]).lvk1Gc);
      }
      obj.disabledReason = stringResult;
      obj.badge = undefined;
      obj.forceStaticImages = true;
      return obj;
    } else {
      obj = callback(stateFromStores[8]);
      obj.assertNever(lib.group);
    }
  }, items1);
};
