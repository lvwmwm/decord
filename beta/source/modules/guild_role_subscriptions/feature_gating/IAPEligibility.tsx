// Module ID: 5811
// Function ID: 5812
// Name: IAPEligibility
// Dependencies: [19, 2067, 1074, 1364, 5812, 563, 2]
// Exports: canUseRoleSubscriptionIAP, useCanUseRoleSubscriptionIAP

// Module 5811 (IAPEligibility)
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const getSystemVersion = tmp(5812);
let c4 = "13.2";
let items = [Constants.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = getSystemVersion;
    const str = tmpResult.getSystemVersion();
    if (null != str) {
      const parts = str.split(".");
      const _Number = Number;
      const mapped = parts.map(Number);
      const parts1 = v132.split(".");
      const _Number2 = Number;
      const mapped1 = parts1.map(Number);
      const _Math = Math;
      const bound = Math.max(mapped.length, mapped1.length);
      let num4 = 0;
      let num3 = 0;
      if (0 < bound) {
        while (true) {
          let num = mapped[num4];
          if (num == null) {
            num = 0;
          }
          let num2 = mapped1[num4];
          if (num2 == null) {
            num2 = 0;
          }
          num3 = -1;
          if (num < num2) {
            break;
          } else {
            num3 = 1;
            if (num > num2) {
              break;
            } else {
              let sum = num4 + 1;
              num4 = sum;
              num3 = 0;
              if (sum >= bound) {
                break;
              }
            }
          }
        }
      }
      if (-1 !== num3) {
        const guild = GuildStore.getGuild(guildId);
        const everyResult = null != guild && items.every((item) => {
          const features = guild.features;
          return features.has(item);
        });
        return everyResult;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const useCanUseRoleSubscriptionIAP = function useCanUseRoleSubscriptionIAP(guildId) {
  _require = guildId;
  const memo = react.useMemo(() => {
    const obj = guildId(dependencyMap[4]);
    const str = obj.getSystemVersion();
    let tmp = null != str;
    if (tmp) {
      const parts = str.split(".");
      const _Number = Number;
      const mapped = parts.map(Number);
      const parts1 = v132.split(".");
      const _Number2 = Number;
      const mapped1 = parts1.map(Number);
      const _Math = Math;
      const bound = Math.max(mapped.length, mapped1.length);
      let num4 = 0;
      let num5 = 0;
      if (0 < bound) {
        while (true) {
          let num6 = mapped[num4];
          if (num6 == null) {
            num6 = 0;
          }
          let num7 = mapped1[num4];
          if (num7 == null) {
            num7 = 0;
          }
          num5 = -1;
          if (num6 < num7) {
            break;
          } else {
            num5 = 1;
            if (num6 > num7) {
              break;
            } else {
              let sum = num4 + 1;
              num4 = sum;
              num5 = 0;
              if (sum >= bound) {
                break;
              }
            }
          }
        }
      }
      tmp = num5 >= 0;
    }
    return tmp;
  }, []);
  let memo1 = react.useMemo(() => {
    const obj = guildId(dependencyMap[3]);
    return obj.isIOS();
  }, []);
  let obj = require("useStateFromStores");
  items = [GuildStore];
  if (memo1) {
    memo1 = obj.useStateFromStores(items, () => {
      const guild = GuildStore.getGuild(guildId);
      const everyResult = null != guild && items.every((item) => {
        const features = guild.features;
        return features.has(item);
      });
      return everyResult;
    });
  }
  if (memo1) {
    memo1 = memo;
  }
  return memo1;
};
