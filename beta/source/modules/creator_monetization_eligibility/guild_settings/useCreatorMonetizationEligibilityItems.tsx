// Module ID: 17515
// Function ID: 17516
// Name: useCreatorMonetizationEligibilityItems
// Dependencies: [5, 19, 1074, 17516, 17517, 1115, 2111, 4519, 17518, 2]
// Exports: default

// Module 17515 (useCreatorMonetizationEligibilityItems)
import Constants from "Constants" /* 1074 */;
import intl27 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, closure_0;

const HelpdeskArticles = Constants.HelpdeskArticles;
let result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0) {
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onEligibilityBecameStale = obj.onEligibilityBecameStale;
  const actions = obj.actions;
  const sortedByIneligible = obj.sortedByIneligible;
  let obj2 = require("useIsMFAEnabled");
  const isMFAEnabled = obj2.useIsMFAEnabled();
  const isUserMFAEnabled = isMFAEnabled.isUserMFAEnabled;
  const isModerationMFAEnabled = isMFAEnabled.isModerationMFAEnabled;
  let items = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
  let onEnableMFAClick = isUserMFAEnabled.useCallback(sortedByIneligible(function*(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            const tmp19 = isUserMFAEnabled;
            if (tmp19) {
              const tmp7 = isModerationMFAEnabled;
              if (!tmp7) {
                let result;
                const tmp8 = actions;
                if (actions != null) {
                  const onRequireModeratorMFAClick = tmp8.onRequireModeratorMFAClick;
                  if (onRequireModeratorMFAClick != null) {
                    result = onRequireModeratorMFAClick();
                  }
                }
                c1 = 1;
                c2 = 1;
                const obj4 = { value: result, done: false };
                return obj4;
              }
            } else {
              let onEnableMFAClickResult;
              const tmp4 = actions;
              if (actions != null) {
                onEnableMFAClick = tmp4.onEnableMFAClick;
                if (onEnableMFAClick != null) {
                  onEnableMFAClickResult = onEnableMFAClick();
                }
              }
              c1 = 2;
              c2 = 1;
              const obj5 = { value: onEnableMFAClickResult, done: false };
              return obj5;
            }
          }
        } else if (1 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        if (closure_128_1 != null) {
          tmp12();
        }
        c2 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp15) {
        c2 = 3;
        throw tmp15;
      }
    }
  }), items);
  let obj3 = require("useEnableMFAHook");
  const enableMFAHook = obj3.useEnableMFAHook({ onEnableMFAClick });
  const items1 = [arg0, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook, onEnableMFAClick];
  return isUserMFAEnabled.useMemo(() => {
    let HFY0m6;
    let Zwv84O;
    let fn;
    let format;
    let formatToPlainString;
    let intl11;
    let intl12;
    let intl13;
    let intl14;
    let intl15;
    let intl16;
    let intl18;
    let intl19;
    let intl2;
    let intl21;
    let intl22;
    let intl23;
    let intl24;
    let intl25;
    let intl26;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    let intl8;
    let intl9;
    let minimumOwnerAgeInYears;
    let minimumSize;
    let noRecentViolations;
    let obj12;
    let obj14;
    let obj3;
    let obj4;
    let obj6;
    let obj8;
    let stringResult;
    let stringResult1;
    let tmp18;
    let tmp = closure_0;
    if (null == closure_0) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize, noRecentViolations } = tmp);
      const obj2 = { key: "no_violations_requirement", checkedLabel: intl18.string(intl27.t["1lGNPZ"]), uncheckedLabel: intl19.string(intl27.t["D+gTJt"]), description: format(HFY0m6, obj3), checked: tmp.noRecentViolations, actionLabel: stringResult, actionHandler: fn };
      intl18 = intl27.intl;
      intl19 = intl27.intl;
      const intl20 = intl27.intl;
      format = intl20.format;
      obj3 = { communityGuidelinesUrl: obj12.getArticleURL(HelpdeskArticles.PUBLIC_GUILD_GUILDLINES) };
      HFY0m6 = intl27.t.HFY0m6;
      stringResult = undefined;
      obj12 = HelpdeskUtilsDefault;
      const tmp25 = importDefault;
      if (!noRecentViolations) {
        const intl = tmp23(1115).intl;
        stringResult = intl.string(tmp23(1115).t["xU2fl+"]);
      }
      fn = undefined;
      if (!noRecentViolations) {
        fn = () => {
          const tmp = onEligibilityBecameStale(actions[7]);
          const obj = onEligibilityBecameStale(actions[6]);
          return tmp(obj.getSubmitRequestURL());
        };
      }
      const items = [obj2];
      const tmp3 = null != minimumOwnerAgeInYears && null != tmp.meetsOwnerAgeRequirement;
      if (tmp3) {
        let obj = { key: "owner_age_requirement", checkedLabel: intl2.string(intl27.t["+F8haD"]), uncheckedLabel: intl3.string(intl27.t["5BwC/O"]), description: intl4.formatToPlainString(intl27.t.DW1Vae, obj4), checked: tmp.meetsOwnerAgeRequirement };
        const push = items.push;
        intl2 = tmp23(1115).intl;
        intl3 = tmp23(1115).intl;
        intl4 = tmp23(1115).intl;
        obj4 = { minimumOwnerAgeInYears };
        push(obj);
      }
      const tmp5 = null != minimumSize && null != tmp.hasSufficientMembers;
      if (tmp5) {
        const push2 = items.push;
        const obj5 = { key: "member_count_requirement", checkedLabel: intl5.string(intl27.t.j7wXWo), uncheckedLabel: intl6.string(intl27.t.W0suNz), description: intl7.formatToPlainString(intl27.t.up53zR, obj6), checked: tmp.hasSufficientMembers };
        intl5 = tmp23(1115).intl;
        intl6 = tmp23(1115).intl;
        intl7 = tmp23(1115).intl;
        obj6 = { minimumSize };
        push2(obj5);
      }
      const tmp7 = null != tmp.minimumAgeInDays && null != tmp.meetsServerAgeRequirement;
      if (tmp7) {
        const push3 = items.push;
        const obj7 = { key: "server_age_requirement", checkedLabel: intl8.string(intl27.t.mjbvWw), uncheckedLabel: intl9.string(intl27.t["9BV6L6"]), description: formatToPlainString(Zwv84O, obj8), checked: tmp.meetsServerAgeRequirement };
        intl8 = tmp23(1115).intl;
        intl9 = tmp23(1115).intl;
        const intl10 = tmp23(1115).intl;
        formatToPlainString = intl10.formatToPlainString;
        obj8 = { minimumAge: tmp25(17518)(tmp.minimumAgeInDays) };
        Zwv84O = tmp23(1115).t.Zwv84O;
        push3(obj7);
      }
      if (null != tmp.weeklyCommunicators) {
        const push6 = items.push;
        const obj9 = { key: "weekly_communicator_count_requirement", checkedLabel: intl21.string(intl27.t.Qw7qv4), uncheckedLabel: intl22.string(intl27.t.b45kGG), description: intl23.string(intl27.t.NbtjEC), checked: tmp.weeklyCommunicators };
        intl21 = tmp23(1115).intl;
        intl22 = tmp23(1115).intl;
        intl23 = tmp23(1115).intl;
        push6(obj9);
      }
      if (null != tmp.hasMemberRetention) {
        const push7 = items.push;
        const obj10 = { key: "member_retention_requirement", checkedLabel: intl24.string(intl27.t.Qvq39M), uncheckedLabel: intl25.string(intl27.t.azHboI), description: intl26.string(intl27.t.u4rCYO), checked: tmp.hasMemberRetention };
        intl24 = tmp23(1115).intl;
        intl25 = tmp23(1115).intl;
        intl26 = tmp23(1115).intl;
        push7(obj10);
      }
      const push4 = items.push;
      const obj11 = { key: "nsfw_requirement", checkedLabel: intl11.string(intl27.t.bymfTb), uncheckedLabel: intl12.string(intl27.t["718pRA"]), description: intl13.string(intl27.t["5ZqX+j"]), checked: tmp.notNSFW };
      intl11 = tmp23(1115).intl;
      intl12 = tmp23(1115).intl;
      intl13 = tmp23(1115).intl;
      push4(obj11);
      if (null != tmp.hasEnabled2FA) {
        let tmp11 = !tmp.hasEnabled2FA && !isUserMFAEnabled;
        if (tmp11) {
          onEnableMFAClick = undefined;
          if (actions != null) {
            onEnableMFAClick = actions.onEnableMFAClick;
          }
          tmp11 = null != onEnableMFAClick;
        }
        let tmp13 = !tmp.hasEnabled2FA && !isModerationMFAEnabled;
        if (tmp13) {
          let prop;
          if (actions != null) {
            prop = actions.onRequireModeratorMFAClick;
          }
          tmp13 = null != prop;
        }
        if (!tmp11) {
          tmp11 = tmp13;
        }
        const push5 = items.push;
        const obj13 = { key: "2fa_requirement", checkedLabel: intl14.string(intl27.t.NqVyFk), uncheckedLabel: intl15.string(intl27.t.VcDNIV), description: intl16.format(intl27.t["7NzkfV"], obj14), checked: tmp.hasEnabled2FA, actionLabel: stringResult1, actionHandler: tmp18 };
        intl14 = tmp23(1115).intl;
        intl15 = tmp23(1115).intl;
        intl16 = tmp23(1115).intl;
        stringResult1 = undefined;
        obj14 = { enableMFAHook };
        if (tmp11) {
          const intl17 = tmp23(1115).intl;
          stringResult1 = intl17.string(tmp23(1115).t.BU4Diu);
        }
        tmp18 = undefined;
        if (tmp11) {
          tmp18 = callback;
        }
        push5(obj13);
      }
      if (true === sortedByIneligible) {
        const sorted = items.sort((checked) => {
          let num = -1;
          if (checked.checked) {
            num = 0;
          }
          return num;
        });
      }
      return items;
    }
  }, items1);
};
