// Module ID: 16265
// Function ID: 125661
// Name: useCreatorMonetizationEligibilityItems
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16265 (useCreatorMonetizationEligibilityItems)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import { HelpdeskArticles } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationEligibilityItems.tsx");

export default function useCreatorMonetizationEligibilityItems(arg0) {
  let obj = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    obj = {};
  }
  const onEligibilityBecameStale = obj.onEligibilityBecameStale;
  const importDefault = onEligibilityBecameStale;
  const actions = obj.actions;
  const dependencyMap = actions;
  const sortedByIneligible = obj.sortedByIneligible;
  let callback = sortedByIneligible;
  let React;
  let HelpdeskArticles;
  callback = undefined;
  let enableMFAHook;
  const isMFAEnabled = arg1(dependencyMap[3]).useIsMFAEnabled();
  const isUserMFAEnabled = isMFAEnabled.isUserMFAEnabled;
  React = isUserMFAEnabled;
  const isModerationMFAEnabled = isMFAEnabled.isModerationMFAEnabled;
  HelpdeskArticles = isModerationMFAEnabled;
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [isUserMFAEnabled, isModerationMFAEnabled, onEligibilityBecameStale, actions];
  callback = React.useCallback(callback(obj), items);
  const obj2 = arg1(dependencyMap[3]);
  enableMFAHook = arg1(dependencyMap[4]).useEnableMFAHook({ onEnableMFAClick: callback });
  const items1 = [arg0, sortedByIneligible, isUserMFAEnabled, actions, isModerationMFAEnabled, enableMFAHook, callback];
  return React.useMemo((self) => {
    let minimumOwnerAgeInYears;
    let minimumSize;
    if (null == self) {
      return null;
    } else {
      ({ minimumOwnerAgeInYears, minimumSize } = self);
      let obj = { key: "no_violations_requirement" };
      const intl18 = self(actions[5]).intl;
      obj.checkedLabel = intl18.string(self(actions[5]).t.1lGNPZ);
      const intl19 = self(actions[5]).intl;
      obj.uncheckedLabel = intl19.string(self(actions[5]).t.D+gTJt);
      const intl20 = self(actions[5]).intl;
      obj = { communityGuidelinesUrl: onEligibilityBecameStale(actions[6]).getArticleURL(isModerationMFAEnabled.PUBLIC_GUILD_GUILDLINES) };
      obj.description = intl20.format(self(actions[5]).t.HFY0m6, obj);
      obj.checked = self.noRecentViolations;
      let stringResult;
      if (!self.noRecentViolations) {
        const intl = self(actions[5]).intl;
        stringResult = intl.string(self(actions[5]).t.xU2fl+);
      }
      obj.actionLabel = stringResult;
      let fn;
      if (!self.noRecentViolations) {
        fn = () => {
          const tmp = callback(closure_2[7]);
          return tmp(callback(closure_2[6]).getSubmitRequestURL());
        };
      }
      obj.actionHandler = fn;
      const items = [obj];
      let tmp4 = null != minimumOwnerAgeInYears;
      if (tmp4) {
        tmp4 = null != self.meetsOwnerAgeRequirement;
      }
      if (tmp4) {
        obj = { key: "owner_age_requirement" };
        const intl2 = self(actions[5]).intl;
        obj.checkedLabel = intl2.string(self(actions[5]).t.+F8haD);
        const intl3 = self(actions[5]).intl;
        obj.uncheckedLabel = intl3.string(self(actions[5]).t.5BwC/O);
        const intl4 = self(actions[5]).intl;
        const obj1 = { minimumOwnerAgeInYears };
        obj.description = intl4.formatToPlainString(self(actions[5]).t.DW1Vae, obj1);
        obj.checked = self.meetsOwnerAgeRequirement;
        items.push(obj);
      }
      let tmp10 = null != minimumSize;
      if (tmp10) {
        tmp10 = null != self.hasSufficientMembers;
      }
      if (tmp10) {
        const obj2 = { key: "member_count_requirement" };
        const intl5 = self(actions[5]).intl;
        obj2.checkedLabel = intl5.string(self(actions[5]).t.j7wXWo);
        const intl6 = self(actions[5]).intl;
        obj2.uncheckedLabel = intl6.string(self(actions[5]).t.W0suNz);
        const intl7 = self(actions[5]).intl;
        const obj3 = { minimumSize };
        obj2.description = intl7.formatToPlainString(self(actions[5]).t.up53zR, obj3);
        obj2.checked = self.hasSufficientMembers;
        items.push(obj2);
      }
      let tmp17 = null != self.minimumAgeInDays;
      if (tmp17) {
        tmp17 = null != self.meetsServerAgeRequirement;
      }
      if (tmp17) {
        const obj4 = { key: "server_age_requirement" };
        const intl8 = self(actions[5]).intl;
        obj4.checkedLabel = intl8.string(self(actions[5]).t.mjbvWw);
        const intl9 = self(actions[5]).intl;
        obj4.uncheckedLabel = intl9.string(self(actions[5]).t.9BV6L6);
        const intl10 = self(actions[5]).intl;
        const obj5 = { minimumAge: onEligibilityBecameStale(actions[8])(self.minimumAgeInDays) };
        obj4.description = intl10.formatToPlainString(self(actions[5]).t.Zwv84O, obj5);
        obj4.checked = self.meetsServerAgeRequirement;
        items.push(obj4);
      }
      if (null != self.weeklyCommunicators) {
        const obj6 = { key: "weekly_communicator_count_requirement" };
        const intl21 = self(actions[5]).intl;
        obj6.checkedLabel = intl21.string(self(actions[5]).t.Qw7qv4);
        const intl22 = self(actions[5]).intl;
        obj6.uncheckedLabel = intl22.string(self(actions[5]).t.b45kGG);
        const intl23 = self(actions[5]).intl;
        obj6.description = intl23.string(self(actions[5]).t.NbtjEC);
        obj6.checked = self.weeklyCommunicators;
        items.push(obj6);
      }
      if (null != self.hasMemberRetention) {
        const obj7 = { key: "member_retention_requirement" };
        const intl24 = self(actions[5]).intl;
        obj7.checkedLabel = intl24.string(self(actions[5]).t.Qvq39M);
        const intl25 = self(actions[5]).intl;
        obj7.uncheckedLabel = intl25.string(self(actions[5]).t.azHboI);
        const intl26 = self(actions[5]).intl;
        obj7.description = intl26.string(self(actions[5]).t.u4rCYO);
        obj7.checked = self.hasMemberRetention;
        items.push(obj7);
      }
      const obj8 = { key: "nsfw_requirement" };
      const intl11 = self(actions[5]).intl;
      obj8.checkedLabel = intl11.string(self(actions[5]).t.bymfTb);
      const intl12 = self(actions[5]).intl;
      obj8.uncheckedLabel = intl12.string(self(actions[5]).t.718pRA);
      const intl13 = self(actions[5]).intl;
      obj8.description = intl13.string(self(actions[5]).t.5ZqX+j);
      obj8.checked = self.notNSFW;
      items.push(obj8);
      if (null != self.hasEnabled2FA) {
        let tmp31 = !self.hasEnabled2FA;
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
        let tmp36 = !self.hasEnabled2FA;
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
        const intl14 = self(actions[5]).intl;
        obj9.checkedLabel = intl14.string(self(actions[5]).t.NqVyFk);
        const intl15 = self(actions[5]).intl;
        obj9.uncheckedLabel = intl15.string(self(actions[5]).t.VcDNIV);
        const intl16 = self(actions[5]).intl;
        const obj10 = { enableMFAHook };
        obj9.description = intl16.format(self(actions[5]).t.7NzkfV, obj10);
        obj9.checked = self.hasEnabled2FA;
        let stringResult1;
        if (tmp31) {
          const intl17 = self(actions[5]).intl;
          stringResult1 = intl17.string(self(actions[5]).t.BU4Diu);
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
