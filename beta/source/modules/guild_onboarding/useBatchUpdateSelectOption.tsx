// Module ID: 11049
// Function ID: 11050
// Name: useBatchUpdateSelectOption
// Dependencies: [19, 5017, 6521, 1084, 573, 12, 1370, 11050, 504, 6526, 1385, 2]
// Exports: default

// Module 11049 (useBatchUpdateSelectOption)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6526 */;
import OptInOnboardingUtils from "OptInOnboardingUtils" /* 11050 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6521 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
let closure_7 = {};
let result = size.fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default function useBatchUpdateSelectOption(guildId) {
  let items4;
  _require = guildId;
  let obj = require("get initialized");
  let items = [GuildOnboardingPromptsStore];
  let items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let pendingResponseOptions = GuildOnboardingPromptsStore.getPendingResponseOptions(guildId);
    if (pendingResponseOptions == null) {
      pendingResponseOptions = closure_7;
    }
    return pendingResponseOptions;
  }, items1);
  let items2 = [guildId];
  const effect = react.useEffect(() => {
    let obj = DispatcherDefault;
    let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
    obj.dispatch(obj2);
    return () => {
      const obj = stateFromStores(dependencyMap[4]);
      const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
      obj.dispatch(obj2);
    };
  }, items2);
  const items3 = [guildId, stateFromStores];
  const effect1 = react.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      const _Object = Object;
      tmp2 = 0 !== Object.keys(tmp).length;
    }
    if (tmp2) {
      const obj = GuildOnboardingActionCreatorsDefault;
      const result = obj.updateOnboardingResponses(guildId);
    }
  }, items3);
  let obj2 = {
    handleSelectOption: react.useCallback((singleSelect, roleIds, selected) => {
      let difference2Result;
      let items2;
      let obj = GuildOnboardingPromptsStore;
      const onboardingResponses = GuildOnboardingPromptsStore.getOnboardingResponses(guildId);
      guildId = roleIds;
      if (singleSelect.singleSelect) {
        let difference4Result;
        let items1;
        if (selected) {
          const options = singleSelect.options;
          const found = options.find((id) => onboardingResponses.includes(id.id));
          roleIds = roleIds.roleIds;
          const difference = _modDef12.difference;
          _modDef12;
          if (roleIds == null) {
            roleIds = [];
          }
          let roleIds1;
          if (found != null) {
            roleIds1 = found.roleIds;
          }
          if (roleIds1 == null) {
            roleIds1 = [];
          }
          let roleIds2;
          const differenceResult = difference(roleIds, roleIds1);
          const difference2 = tmp11(12).difference;
          _modDef12;
          if (found != null) {
            roleIds2 = found.roleIds;
          }
          if (roleIds2 == null) {
            roleIds2 = [];
          }
          let roleIds3 = roleIds.roleIds;
          if (roleIds3 == null) {
            roleIds3 = [];
          }
          difference2Result = difference2(roleIds2, roleIds3);
          items2 = differenceResult;
        }
        guildId = roleIds;
        if (singleSelect.singleSelect) {
          if (selected) {
            const options1 = singleSelect.options;
            const found1 = options1.find((id) => onboardingResponses.includes(id.id));
            let channelIds = roleIds.channelIds;
            const difference3 = _modDef12.difference;
            _modDef12;
            if (channelIds == null) {
              channelIds = [];
            }
            let channelIds1;
            if (found1 != null) {
              channelIds1 = found1.channelIds;
            }
            if (channelIds1 == null) {
              channelIds1 = [];
            }
            let channelIds2;
            const difference3Result = difference3(channelIds, channelIds1);
            const difference4 = tmp24(12).difference;
            _modDef12;
            if (found1 != null) {
              channelIds2 = found1.channelIds;
            }
            if (channelIds2 == null) {
              channelIds2 = [];
            }
            let channelIds3 = roleIds.channelIds;
            if (channelIds3 == null) {
              channelIds3 = [];
            }
            difference4Result = difference4(channelIds2, channelIds3);
            items1 = difference3Result;
          }
          const obj8 = OptInOnboardingUtils;
          if (obj8.hasNotSetUpChannelOptIn(guildId)) {
            const push = items1.push;
            const items = [];
            HermesBuiltin.arraySpread(items, obj.getDefaultChannelIds(guildId), 0);
            HermesBuiltin.apply(push, items, items1);
          }
          let obj2 = {};
          const merged = Object.assign(items1.reduce((acc, item) => {
            let channelIdFlags;
            let obj2;
            const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true) };
            channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
            acc[item] = obj;
            obj2 = closure_0(dependencyMap[10]);
            return acc;
          }, {}));
          const merged1 = Object.assign(difference4Result.reduce((acc, item) => {
            let channelIdFlags;
            let obj2;
            const obj = { flags: obj2.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false) };
            channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_1_0, item);
            acc[item] = obj;
            obj2 = closure_0(dependencyMap[10]);
            return acc;
          }, {}));
          const obj10 = GuildOnboardingActionCreatorsDefault;
          const option = obj10.selectOption(tmp2, singleSelect.id, roleIds.id, selected);
          const obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: obj2 };
          const obj11 = DispatcherDefault;
          obj11.dispatch(obj3);
          const obj13 = GuildOnboardingActionCreatorsDefault;
          obj13.updateRolesLocal(guildId, items2, difference2Result);
        }
        if (selected) {
          let channelIds4 = roleIds.channelIds;
          if (channelIds4 == null) {
            channelIds4 = [];
          }
          difference4Result = [];
          items1 = channelIds4;
        } else {
          const options2 = singleSelect.options;
          const found2 = options2.filter((id) => onboardingResponses.includes(id.id));
          const found3 = found2.filter((id) => id.id !== id.id);
          const mapped = found2.map((channelIds) => channelIds.channelIds);
          const flatResult = mapped.flat();
          const found4 = flatResult.filter(GlobalUtils.isNotNullish);
          const mapped1 = found3.map((channelIds) => channelIds.channelIds);
          items1 = [];
          const flatResult1 = mapped1.flat();
          const found5 = flatResult1.filter(GlobalUtils.isNotNullish);
          const obj7 = _modDef12;
          difference4Result = obj7.difference(found4, found5);
        }
      }
      if (selected) {
        let roleIds4 = roleIds.roleIds;
        if (roleIds4 == null) {
          roleIds4 = [];
        }
        difference2Result = [];
        items2 = roleIds4;
      } else {
        const options3 = singleSelect.options;
        const found6 = options3.filter((id) => onboardingResponses.includes(id.id));
        const found7 = found6.filter((id) => id.id !== id.id);
        const mapped2 = found6.map((roleIds) => roleIds.roleIds);
        const flatResult2 = mapped2.flat();
        const found8 = flatResult2.filter(GlobalUtils.isNotNullish);
        const mapped3 = found7.map((roleIds) => roleIds.roleIds);
        items2 = [];
        const flatResult3 = mapped3.flat();
        const found9 = flatResult3.filter(GlobalUtils.isNotNullish);
        const obj4 = _modDef12;
        difference2Result = obj4.difference(found8, found9);
      }
    }, items4)
  };
  items4 = [guildId];
  return obj2;
};
