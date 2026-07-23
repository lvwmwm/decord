// Module ID: 16382
// Function ID: 127835
// Name: useCreatorMonetizationEligibilityItems
// Dependencies: [5, 31, 653, 16383, 16384, 1212, 1920, 3821, 16385, 2]
// Exports: default

// Module 16382 (useCreatorMonetizationEligibilityItems)
import getSystemLocale from "getSystemLocale";
import result from "result";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0) {
  let obj = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  const onEligibilityBecameStale = obj.onEligibilityBecameStale;
  const actions = obj.actions;
  const sortedByIneligible = obj.sortedByIneligible;
  let isUserMFAEnabled;
  let isModerationMFAEnabled;
  let callback;
  let enableMFAHook;
  const isMFAEnabled = _require(actions[3]).useIsMFAEnabled();
  isUserMFAEnabled = isMFAEnabled.isUserMFAEnabled;
  isModerationMFAEnabled = isMFAEnabled.isModerationMFAEnabled;
  // CreateGeneratorClosureLongIndex (0x67)
  let items = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
  callback = isUserMFAEnabled.useCallback(sortedByIneligible(obj), items);
  let obj2 = _require(actions[3]);
  enableMFAHook = _require(actions[4]).useEnableMFAHook({ onEnableMFAClick: callback });
  const items1 = [arg0, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook, callback];
  return isUserMFAEnabled.useMemo(() => {
    let minimumOwnerAgeInYears;
    let minimumSize;
    if (null == lib) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize } = lib);
      let obj = { key: "no_violations_requirement" };
      const intl18 = lib(actions[5]).intl;
      obj.checkedLabel = intl18.string(lib(actions[5]).t["1lGNPZ"]);
      const intl19 = lib(actions[5]).intl;
      obj.uncheckedLabel = intl19.string(lib(actions[5]).t["D+gTJt"]);
      const intl20 = lib(actions[5]).intl;
      obj = { communityGuidelinesUrl: onEligibilityBecameStale(actions[6]).getArticleURL(isModerationMFAEnabled.PUBLIC_GUILD_GUILDLINES) };
      obj.description = intl20.format(lib(actions[5]).t.HFY0m6, obj);
      obj.checked = lib.noRecentViolations;
      let stringResult;
      if (!lib.noRecentViolations) {
        const intl = lib(actions[5]).intl;
        stringResult = intl.string(lib(actions[5]).t["xU2fl+"]);
      }
      obj.actionLabel = stringResult;
      let fn;
      if (!lib.noRecentViolations) {
        fn = () => {
          const tmp = onEligibilityBecameStale(actions[7]);
          return tmp(onEligibilityBecameStale(actions[6]).getSubmitRequestURL());
        };
      }
      obj.actionHandler = fn;
      const items = [obj];
      let tmp4 = null != minimumOwnerAgeInYears;
      if (tmp4) {
        tmp4 = null != lib.meetsOwnerAgeRequirement;
      }
      if (tmp4) {
        obj = { key: "owner_age_requirement" };
        const intl2 = lib(actions[5]).intl;
        obj.checkedLabel = intl2.string(lib(actions[5]).t["+F8haD"]);
        const intl3 = lib(actions[5]).intl;
        obj.uncheckedLabel = intl3.string(lib(actions[5]).t["5BwC/O"]);
        const intl4 = lib(actions[5]).intl;
        const obj1 = { minimumOwnerAgeInYears };
        obj.description = intl4.formatToPlainString(lib(actions[5]).t.DW1Vae, obj1);
        obj.checked = lib.meetsOwnerAgeRequirement;
        items.push(obj);
      }
      let tmp10 = null != minimumSize;
      if (tmp10) {
        tmp10 = null != lib.hasSufficientMembers;
      }
      if (tmp10) {
        const obj2 = { key: "member_count_requirement" };
        const intl5 = lib(actions[5]).intl;
        obj2.checkedLabel = intl5.string(lib(actions[5]).t.j7wXWo);
        const intl6 = lib(actions[5]).intl;
        obj2.uncheckedLabel = intl6.string(lib(actions[5]).t.W0suNz);
        const intl7 = lib(actions[5]).intl;
        const obj3 = { minimumSize };
        obj2.description = intl7.formatToPlainString(lib(actions[5]).t.up53zR, obj3);
        obj2.checked = lib.hasSufficientMembers;
        items.push(obj2);
      }
      let tmp17 = null != lib.minimumAgeInDays;
      if (tmp17) {
        tmp17 = null != lib.meetsServerAgeRequirement;
      }
      if (tmp17) {
        const obj4 = { key: "server_age_requirement" };
        const intl8 = lib(actions[5]).intl;
        obj4.checkedLabel = intl8.string(lib(actions[5]).t.mjbvWw);
        const intl9 = lib(actions[5]).intl;
        obj4.uncheckedLabel = intl9.string(lib(actions[5]).t["9BV6L6"]);
        const intl10 = lib(actions[5]).intl;
        const obj5 = { minimumAge: onEligibilityBecameStale(actions[8])(lib.minimumAgeInDays) };
        obj4.description = intl10.formatToPlainString(lib(actions[5]).t.Zwv84O, obj5);
        obj4.checked = lib.meetsServerAgeRequirement;
        items.push(obj4);
      }
      if (null != lib.weeklyCommunicators) {
        const obj6 = { key: "weekly_communicator_count_requirement" };
        const intl21 = lib(actions[5]).intl;
        obj6.checkedLabel = intl21.string(lib(actions[5]).t.Qw7qv4);
        const intl22 = lib(actions[5]).intl;
        obj6.uncheckedLabel = intl22.string(lib(actions[5]).t.b45kGG);
        const intl23 = lib(actions[5]).intl;
        obj6.description = intl23.string(lib(actions[5]).t.NbtjEC);
        obj6.checked = lib.weeklyCommunicators;
        items.push(obj6);
      }
      if (null != lib.hasMemberRetention) {
        const obj7 = { key: "member_retention_requirement" };
        const intl24 = lib(actions[5]).intl;
        obj7.checkedLabel = intl24.string(lib(actions[5]).t.Qvq39M);
        const intl25 = lib(actions[5]).intl;
        obj7.uncheckedLabel = intl25.string(lib(actions[5]).t.azHboI);
        const intl26 = lib(actions[5]).intl;
        obj7.description = intl26.string(lib(actions[5]).t.u4rCYO);
        obj7.checked = lib.hasMemberRetention;
        items.push(obj7);
      }
      const obj8 = { key: "nsfw_requirement" };
      const intl11 = lib(actions[5]).intl;
      obj8.checkedLabel = intl11.string(lib(actions[5]).t.bymfTb);
      const intl12 = lib(actions[5]).intl;
      obj8.uncheckedLabel = intl12.string(lib(actions[5]).t["718pRA"]);
      const intl13 = lib(actions[5]).intl;
      obj8.description = intl13.string(lib(actions[5]).t["5ZqX+j"]);
      obj8.checked = lib.notNSFW;
      items.push(obj8);
      if (null != lib.hasEnabled2FA) {
        let tmp31 = !lib.hasEnabled2FA;
        if (tmp31) {
          tmp31 = !isUserMFAEnabled;
        }
        if (tmp31) {
          let onEnableMFAClick;
          if (null != actions) {
            onEnableMFAClick = actions.onEnableMFAClick;
          }
          tmp31 = null != onEnableMFAClick;
        }
        let tmp36 = !lib.hasEnabled2FA;
        if (tmp36) {
          tmp36 = !isModerationMFAEnabled;
        }
        if (tmp36) {
          let prop;
          if (null != actions) {
            prop = actions.onRequireModeratorMFAClick;
          }
          tmp36 = null != prop;
        }
        if (!tmp31) {
          tmp31 = tmp36;
        }
        const obj9 = { key: "2fa_requirement" };
        const intl14 = lib(actions[5]).intl;
        obj9.checkedLabel = intl14.string(lib(actions[5]).t.NqVyFk);
        const intl15 = lib(actions[5]).intl;
        obj9.uncheckedLabel = intl15.string(lib(actions[5]).t.VcDNIV);
        const intl16 = lib(actions[5]).intl;
        const obj10 = { enableMFAHook };
        obj9.description = intl16.format(lib(actions[5]).t["7NzkfV"], obj10);
        obj9.checked = lib.hasEnabled2FA;
        let stringResult1;
        if (tmp31) {
          const intl17 = lib(actions[5]).intl;
          stringResult1 = intl17.string(lib(actions[5]).t.BU4Diu);
        }
        obj9.actionLabel = stringResult1;
        let tmp48;
        if (tmp31) {
          tmp48 = callback;
        }
        obj9.actionHandler = tmp48;
        items.push(obj9);
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
