// Module ID: 5031
// Function ID: 43322
// Name: compareVersions
// Dependencies: [31, 1838, 653, 477, 5032, 624, 2]
// Exports: canUseRoleSubscriptionIAP, useCanUseRoleSubscriptionIAP

// Module 5031 (compareVersions)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
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
let items = [require("ME").GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  if (obj.isIOS()) {
    const systemVersion = guild(5032).getSystemVersion();
    if (null != systemVersion) {
      if (-1 !== compareVersions(systemVersion, "13.2")) {
        guild = guild.getGuild(guildId);
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
  obj = guild(477);
};
export const useCanUseRoleSubscriptionIAP = function useCanUseRoleSubscriptionIAP(guildId) {
  const _require = guildId;
  const memo = React.useMemo(() => {
    const systemVersion = guildId(outer1_1[4]).getSystemVersion();
    let tmp2 = null != systemVersion;
    if (tmp2) {
      tmp2 = outer1_5(systemVersion, "13.2") >= 0;
    }
    return tmp2;
  }, []);
  let memo1 = React.useMemo(() => guildId(outer1_1[3]).isIOS(), []);
  const items = [_createForOfIteratorHelperLoose];
  if (memo1) {
    memo1 = obj.useStateFromStores(items, () => {
      guild = outer1_3.getGuild(guild);
      let everyResult = null != guild;
      if (everyResult) {
        everyResult = outer1_4.every((arg0) => {
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
