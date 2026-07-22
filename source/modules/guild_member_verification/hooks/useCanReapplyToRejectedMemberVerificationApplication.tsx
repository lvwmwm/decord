// Module ID: 9156
// Function ID: 71794
// Name: useCanReapplyToRejectedMemberVerificationApplication
// Dependencies: []
// Exports: useCanReapplyToRejectedMemberVerificationApplication

// Module 9156 (useCanReapplyToRejectedMemberVerificationApplication)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_member_verification/hooks/useCanReapplyToRejectedMemberVerificationApplication.tsx");

export const useCanReapplyToRejectedMemberVerificationApplication = function useCanReapplyToRejectedMemberVerificationApplication(guildId) {
  const arg1 = guildId;
  const tmp = callback(React.useState(true), 2);
  let closure_1 = tmp[1];
  let obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let joinRequestGuild;
    if (null != arg0) {
      joinRequestGuild = joinRequestGuild.getJoinRequestGuild(arg0);
    }
    return joinRequestGuild;
  });
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback2(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  const dependencyMap = callback;
  const items1 = [guildId, callback];
  const effect = React.useEffect(() => {
    if (null == arg0) {
      callback(false);
    } else {
      callback(true);
      callback(arg0);
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
