// Module ID: 12279
// Function ID: 12280
// Name: GuildPowerupsBoostButton
// Dependencies: [19, 2086, 1390, 7112, 1085, 21, 558, 576, 504, 7102, 1398, 5966, 7111, 2]

// Module 12279 (GuildPowerupsBoostButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7102 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp13;
const GuildBoostingSubscribeButtonDefault = tmp13(7111);
const AnalyticsSections = Constants.AnalyticsSections;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBoostButton(guildId) {
  let boostSlots;
  let currentUser;
  let first;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(16);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = S;
    tmp6 = S;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items1 = [GuildBoostSlotStore];
    const fn = function _() {
      return boostSlots.boostSlots;
    };
    cResult[3] = items1;
    cResult[4] = fn;
    tmp9 = fn;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp9 = cResult[4];
  }
  const tmpResult3 = guildId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[5] = tmp12;
    tmp11 = tmp12;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmp14 = useFractionalPremiumInfoDefault(tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = E;
    tmp16 = E;
    tmp15 = items2;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    tmp16 = cResult[7];
  }
  const tmpResult4 = guildId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp15, tmp16);
  if (null != stateFromStores2) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== stateFromStores1) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const values = Object.values(stateFromStores1);
    const found = values.find((isAvailable) => isAvailable.isAvailable());
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = stateFromStores1;
    cResult[9] = found;
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[10] = tmp22;
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (null != stateFromStores) {
    class S {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    class E {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[11] = tmp14.fractionalState;
    cResult[12] = stateFromStores;
    cResult[13] = tmp18;
    cResult[14] = tmp19;
    cResult[15] = jsx(GuildBoostingSubscribeButtonDefault, { guild: null, previousGuildSubscriptionSlot: tmp19, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp14.fractionalState, onAvailableSlotPress: tmp21, premiumGroupRole: tmp18 });
    const tmp26 = jsx(GuildBoostingSubscribeButtonDefault, { guild: null, previousGuildSubscriptionSlot: tmp19, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp14.fractionalState, onAvailableSlotPress: tmp21, premiumGroupRole: tmp18 });
  }
  return null;
}) : (function GuildPowerupsBoostButton(guildId) {
  let UNSPECIFIED;
  let boostSlots;
  let currentUser;
  guildId = guildId.guildId;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [UserStore];
  const tmp6 = stateFromStores1(7102)({ forceFetch: true });
  const obj3 = guildId(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp = guildId;
  const tmp5 = stateFromStores1;
  if (null != stateFromStores2) {
    UNSPECIFIED = stateFromStores2.premiumGroupRole;
  } else {
    UNSPECIFIED = tmp(1398).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const items3 = [stateFromStores1];
  const memo = react.useMemo(() => {
    const values = Object.values(stateFromStores1);
    return values.find((isAvailable) => isAvailable.isAvailable());
  }, items3);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = jsx(tmp5(7111), { guild: stateFromStores, previousGuildSubscriptionSlot: memo, analyticsSection: AnalyticsSections.GUILD_POWERUPS_OVERVIEW_SIDEBAR, fractionalPremiumState: tmp6.fractionalState, onAvailableSlotPress: tmp9, premiumGroupRole: UNSPECIFIED });
  }
  return tmp10;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostButton.tsx");

export const GuildPowerupsBoostButton = tmp2;
