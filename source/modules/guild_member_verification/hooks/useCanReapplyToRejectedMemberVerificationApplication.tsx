// Module ID: 9163
// Function ID: 71835
// Name: useCanReapplyToRejectedMemberVerificationApplication
// Dependencies: [5, 57, 31, 4115, 3948, 653, 566, 5128, 2]
// Exports: useCanReapplyToRejectedMemberVerificationApplication

// Module 9163 (useCanReapplyToRejectedMemberVerificationApplication)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx");

export const useCanReapplyToRejectedMemberVerificationApplication = function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
  const _require = guildId;
  const tmp = callback(React.useState(true), 2);
  let closure_1 = tmp[1];
  let obj = _require(callback[6]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let joinRequestGuild;
    if (null != closure_0) {
      joinRequestGuild = outer1_7.getJoinRequestGuild(closure_0);
    }
    return joinRequestGuild;
  });
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const items1 = [guildId, callback];
  const effect = React.useEffect(() => {
    if (null == closure_0) {
      callback(false);
    } else {
      callback(true);
      callback(closure_0);
    }
  }, items1);
  obj = {};
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  }
  obj.canReapply = hasItem;
  obj.isLoading = tmp[0];
  return obj;
};
