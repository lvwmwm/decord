// Module ID: 9960
// Function ID: 76969
// Name: resetStoreState
// Dependencies: []
// Exports: default

// Module 9960 (resetStoreState)
function resetStoreState(guildId) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
  obj.dispatch(obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).ChannelNotificationSettingsFlags;
let closure_7 = {};
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_onboarding/useBatchUpdateSelectOption.tsx");

export default function useBatchUpdateSelectOption(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let pendingResponseOptions = store.getPendingResponseOptions(arg0);
    if (null == pendingResponseOptions) {
      pendingResponseOptions = closure_7;
    }
    return pendingResponseOptions;
  }, items1);
  const importDefault = stateFromStores;
  const items2 = [arg0];
  const effect = React.useEffect(() => {
    callback(arg0);
    return () => {
      callback(closure_0);
    };
  }, items2);
  const items3 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      const _Object = Object;
      tmp = 0 !== Object.keys(stateFromStores).length;
    }
    if (tmp) {
      const result = stateFromStores(closure_2[9]).updateOnboardingResponses(arg0);
      const obj = stateFromStores(closure_2[9]);
    }
  }, items3);
  obj = {
    handleSelectOption: React.useCallback((id, id2, selected) => {
      let addedChannelIds;
      let addedRoleIds;
      let removedChannelIds;
      let removedRoleIds;
      const onboardingResponses = store.getOnboardingResponses(id);
      let obj = { guildId: id, prompt: id, option: id2, selected, responses: onboardingResponses };
      ({ addedRoleIds, removedRoleIds } = function getRoles(singleSelect, roleIds, selected, onboardingResponses) {
        if (singleSelect.singleSelect) {
          if (selected) {
            const options = singleSelect.options;
            const found = options.find((id) => arg3.includes(id.id));
            roleIds = roleIds.roleIds;
            if (null == roleIds) {
              roleIds = [];
            }
            let roleIds1;
            if (null != found) {
              roleIds1 = found.roleIds;
            }
            if (null == roleIds1) {
              roleIds1 = [];
            }
            const obj4 = onboardingResponses(closure_2[5]);
            const differenceResult = onboardingResponses(closure_2[5]).difference(roleIds, roleIds1);
            let roleIds2;
            if (null != found) {
              roleIds2 = found.roleIds;
            }
            if (null == roleIds2) {
              roleIds2 = [];
            }
            let roleIds3 = roleIds.roleIds;
            if (null == roleIds3) {
              roleIds3 = [];
            }
            let differenceResult1 = onboardingResponses(closure_2[5]).difference(roleIds2, roleIds3);
            let items = differenceResult;
            const obj5 = onboardingResponses(closure_2[5]);
          }
          const obj = { addedRoleIds: items, removedRoleIds: differenceResult1 };
          return obj;
        }
        if (selected) {
          let roleIds4 = roleIds.roleIds;
          if (null == roleIds4) {
            roleIds4 = [];
          }
          differenceResult1 = [];
          items = roleIds4;
        } else {
          const options1 = singleSelect.options;
          const found1 = options1.filter((id) => arg3.includes(id.id));
          const found2 = found1.filter((id) => arg1.id !== id.id);
          const mapped = found1.map((roleIds) => roleIds.roleIds);
          const found3 = mapped.flat().filter(roleIds(closure_2[6]).isNotNullish);
          const mapped1 = found2.map((roleIds) => roleIds.roleIds);
          const flatResult = mapped.flat();
          items = [];
          const found4 = mapped1.flat().filter(roleIds(closure_2[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult1 = onboardingResponses(closure_2[5]).difference(found3, found4);
          const obj3 = onboardingResponses(closure_2[5]);
        }
      }(id, id2, selected, onboardingResponses));
      const tmp2 = function getRoles(singleSelect, roleIds, selected, onboardingResponses) {
        if (singleSelect.singleSelect) {
          if (selected) {
            const options = singleSelect.options;
            const found = options.find((id) => arg3.includes(id.id));
            roleIds = roleIds.roleIds;
            if (null == roleIds) {
              roleIds = [];
            }
            let roleIds1;
            if (null != found) {
              roleIds1 = found.roleIds;
            }
            if (null == roleIds1) {
              roleIds1 = [];
            }
            const obj4 = onboardingResponses(closure_2[5]);
            const differenceResult = onboardingResponses(closure_2[5]).difference(roleIds, roleIds1);
            let roleIds2;
            if (null != found) {
              roleIds2 = found.roleIds;
            }
            if (null == roleIds2) {
              roleIds2 = [];
            }
            let roleIds3 = roleIds.roleIds;
            if (null == roleIds3) {
              roleIds3 = [];
            }
            let differenceResult1 = onboardingResponses(closure_2[5]).difference(roleIds2, roleIds3);
            let items = differenceResult;
            const obj5 = onboardingResponses(closure_2[5]);
          }
          const obj = { addedRoleIds: items, removedRoleIds: differenceResult1 };
          return obj;
        }
        if (selected) {
          let roleIds4 = roleIds.roleIds;
          if (null == roleIds4) {
            roleIds4 = [];
          }
          differenceResult1 = [];
          items = roleIds4;
        } else {
          const options1 = singleSelect.options;
          const found1 = options1.filter((id) => arg3.includes(id.id));
          const found2 = found1.filter((id) => arg1.id !== id.id);
          const mapped = found1.map((roleIds) => roleIds.roleIds);
          const found3 = mapped.flat().filter(roleIds(closure_2[6]).isNotNullish);
          const mapped1 = found2.map((roleIds) => roleIds.roleIds);
          const flatResult = mapped.flat();
          items = [];
          const found4 = mapped1.flat().filter(roleIds(closure_2[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult1 = onboardingResponses(closure_2[5]).difference(found3, found4);
          const obj3 = onboardingResponses(closure_2[5]);
        }
      }(id, id2, selected, onboardingResponses);
      ({ addedChannelIds, removedChannelIds } = function getChannels(arg0) {
        let _prompt;
        let guildId;
        let option;
        let selected;
        ({ guildId, prompt: _prompt, option } = arg0);
        ({ selected, responses: closure_1 } = arg0);
        if (_prompt.singleSelect) {
          if (selected) {
            const options = _prompt.options;
            const found = options.find((id) => closure_1.includes(id.id));
            let channelIds = option.channelIds;
            if (null == channelIds) {
              channelIds = [];
            }
            let channelIds1;
            if (null != found) {
              channelIds1 = found.channelIds;
            }
            if (null == channelIds1) {
              channelIds1 = [];
            }
            const obj4 = callback2(closure_2[5]);
            const differenceResult = callback2(closure_2[5]).difference(channelIds, channelIds1);
            let channelIds2;
            if (null != found) {
              channelIds2 = found.channelIds;
            }
            if (null == channelIds2) {
              channelIds2 = [];
            }
            let channelIds3 = option.channelIds;
            if (null == channelIds3) {
              channelIds3 = [];
            }
            let differenceResult1 = callback2(closure_2[5]).difference(channelIds2, channelIds3);
            let items1 = differenceResult;
            const obj5 = callback2(closure_2[5]);
          }
          if (obj6.hasNotSetUpChannelOptIn(guildId)) {
            const push = items1.push;
            const items = [];
            HermesBuiltin.arraySpread(defaultChannelIds.getDefaultChannelIds(guildId), 0);
            HermesBuiltin.apply(items, items1);
          }
          const obj = { addedChannelIds: items1, removedChannelIds: differenceResult1 };
          return obj;
        }
        if (selected) {
          let channelIds4 = option.channelIds;
          if (null == channelIds4) {
            channelIds4 = [];
          }
          differenceResult1 = [];
          items1 = channelIds4;
        } else {
          const options1 = _prompt.options;
          const found1 = options1.filter((id) => closure_1.includes(id.id));
          const found2 = found1.filter((id) => option.id !== id.id);
          const mapped = found1.map((channelIds) => channelIds.channelIds);
          const found3 = mapped.flat().filter(option(closure_2[6]).isNotNullish);
          const mapped1 = found2.map((channelIds) => channelIds.channelIds);
          const flatResult = mapped.flat();
          items1 = [];
          const found4 = mapped1.flat().filter(option(closure_2[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult1 = callback2(closure_2[5]).difference(found3, found4);
          const obj3 = callback2(closure_2[5]);
        }
      }(obj));
      obj = {};
      const merged = Object.assign(addedChannelIds.reduce((arg0, arg1) => {
        const obj = {};
        const channelIdFlags = store.getChannelIdFlags(callback, arg1);
        obj.flags = callback(closure_2[10]).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        arg0[arg1] = obj;
        return arg0;
      }, {}));
      const merged1 = Object.assign(removedChannelIds.reduce((arg0, arg1) => {
        const obj = {};
        const channelIdFlags = store.getChannelIdFlags(callback, arg1);
        obj.flags = callback(closure_2[10]).setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
        arg0[arg1] = obj;
        return arg0;
      }, {}));
      const tmp3 = function getChannels(arg0) {
        let _prompt;
        let guildId;
        let option;
        let selected;
        ({ guildId, prompt: _prompt, option } = arg0);
        ({ selected, responses: closure_1 } = arg0);
        if (_prompt.singleSelect) {
          if (selected) {
            const options = _prompt.options;
            const found = options.find((id) => closure_1.includes(id.id));
            let channelIds = option.channelIds;
            if (null == channelIds) {
              channelIds = [];
            }
            let channelIds1;
            if (null != found) {
              channelIds1 = found.channelIds;
            }
            if (null == channelIds1) {
              channelIds1 = [];
            }
            const obj4 = callback2(closure_2[5]);
            const differenceResult = callback2(closure_2[5]).difference(channelIds, channelIds1);
            let channelIds2;
            if (null != found) {
              channelIds2 = found.channelIds;
            }
            if (null == channelIds2) {
              channelIds2 = [];
            }
            let channelIds3 = option.channelIds;
            if (null == channelIds3) {
              channelIds3 = [];
            }
            let differenceResult1 = callback2(closure_2[5]).difference(channelIds2, channelIds3);
            let items1 = differenceResult;
            const obj5 = callback2(closure_2[5]);
          }
          if (obj6.hasNotSetUpChannelOptIn(guildId)) {
            const push = items1.push;
            const items = [];
            HermesBuiltin.arraySpread(defaultChannelIds.getDefaultChannelIds(guildId), 0);
            HermesBuiltin.apply(items, items1);
          }
          const obj = { addedChannelIds: items1, removedChannelIds: differenceResult1 };
          return obj;
        }
        if (selected) {
          let channelIds4 = option.channelIds;
          if (null == channelIds4) {
            channelIds4 = [];
          }
          differenceResult1 = [];
          items1 = channelIds4;
        } else {
          const options1 = _prompt.options;
          const found1 = options1.filter((id) => closure_1.includes(id.id));
          const found2 = found1.filter((id) => option.id !== id.id);
          const mapped = found1.map((channelIds) => channelIds.channelIds);
          const found3 = mapped.flat().filter(option(closure_2[6]).isNotNullish);
          const mapped1 = found2.map((channelIds) => channelIds.channelIds);
          const flatResult = mapped.flat();
          items1 = [];
          const found4 = mapped1.flat().filter(option(closure_2[6]).isNotNullish);
          const flatResult1 = mapped1.flat();
          differenceResult1 = callback2(closure_2[5]).difference(found3, found4);
          const obj3 = callback2(closure_2[5]);
        }
      }(obj);
      const option = stateFromStores(closure_2[9]).selectOption(id, id.id, id2.id, selected);
      const obj3 = stateFromStores(closure_2[9]);
      obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId: id, overrides: obj };
      stateFromStores(closure_2[4]).dispatch(obj);
      const obj4 = stateFromStores(closure_2[4]);
      stateFromStores(closure_2[9]).updateRolesLocal(id, addedRoleIds, removedRoleIds);
    }, items4)
  };
  const items4 = [arg0];
  return obj;
};
