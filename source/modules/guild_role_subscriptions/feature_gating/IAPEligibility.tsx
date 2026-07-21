// Module ID: 5301
// Function ID: 44894
// Name: compareVersions
// Dependencies: []
// Exports: canUseRoleSubscriptionIAP, useCanUseRoleSubscriptionIAP

// Module 5301 (compareVersions)
function compareVersions(systemVersion, arg1) {
  const parts = systemVersion.split(".");
  const mapped = parts.map(Number);
  const parts1 = "13.2".split(".");
  const mapped1 = parts1.map(Number);
  const bound = Math.max(mapped.length, mapped1.length);
  let num = 0;
  if (0 < bound) {
    while (true) {
      let tmp2 = mapped[num];
      let num2 = 0;
      if (null != tmp2) {
        num2 = tmp2;
      }
      let tmp3 = mapped1[num];
      let num3 = 0;
      if (null != tmp3) {
        num3 = tmp3;
      }
      if (num2 < num3) {
        break;
      } else if (num2 > num3) {
        let num4 = 1;
        return 1;
      } else {
        num = num + 1;
      }
    }
    return -1;
  }
  return 0;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const items = [arg1(dependencyMap[2]).GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  if (obj.isIOS()) {
    const systemVersion = arg1(dependencyMap[4]).getSystemVersion();
    if (null != systemVersion) {
      if (-1 !== compareVersions(systemVersion, "13.2")) {
        const guild = guild.getGuild(guildId);
        const arg1 = guild;
        let everyResult = null != guild;
        if (everyResult) {
          everyResult = items.every((arg0) => {
            const features = guild.features;
            return features.has(arg0);
          });
        }
        return everyResult;
      }
    }
    return false;
  } else {
    return false;
  }
  const obj = arg1(dependencyMap[3]);
};
export const useCanUseRoleSubscriptionIAP = function useCanUseRoleSubscriptionIAP(guildId) {
  const arg1 = guildId;
  const memo = React.useMemo(() => {
    const systemVersion = arg0(closure_1[4]).getSystemVersion();
    let tmp2 = null != systemVersion;
    if (tmp2) {
      tmp2 = callback(systemVersion, "13.2") >= 0;
    }
    return tmp2;
  }, []);
  let memo1 = React.useMemo(() => arg0(closure_1[3]).isIOS(), []);
  const items = [closure_3];
  if (memo1) {
    memo1 = obj.useStateFromStores(items, () => {
      const guild = guild.getGuild(arg0);
      const arg0 = guild;
      let everyResult = null != guild;
      if (everyResult) {
        everyResult = closure_4.every((arg0) => {
          const features = guild.features;
          return features.has(arg0);
        });
      }
      return everyResult;
    });
  }
  if (memo1) {
    memo1 = memo;
  }
  return memo1;
};
