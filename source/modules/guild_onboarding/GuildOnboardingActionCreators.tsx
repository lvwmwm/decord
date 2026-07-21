// Module ID: 5333
// Function ID: 45434
// Name: _updateOnboardingResponses
// Dependencies: []

// Module 5333 (_updateOnboardingResponses)
function _updateOnboardingResponses(guildId, arg1) {
  let flag = arg1;
  arg1 = guildId;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let dependencyMap;
  let closure_3;
  if (!closure_5.isFullServerPreview(guildId)) {
    let obj = store2;
    if (flag) {
      let onboardingPromptsForOnboarding = obj.getOnboardingPromptsForOnboarding(guildId);
    } else {
      onboardingPromptsForOnboarding = obj.getOnboardingPrompts(guildId);
    }
    onboardingResponses = store2.getOnboardingResponses(guildId);
    const mapped = onboardingPromptsForOnboarding.map((options) => {
      options = options.options;
      return options.filter((id) => closure_1.includes(id.id));
    });
    const flatResult = mapped.flat();
    obj = {};
    dependencyMap = obj;
    obj = {};
    closure_3 = obj;
    const item = onboardingPromptsForOnboarding.forEach((id) => {
      obj[id.id] = Date.now();
      const options = id.options;
      const item = options.forEach((id) => {
        const timestamp = Date.now();
        closure_3[id.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = arg1(dependencyMap[10]).HTTP;
    if (flag) {
      const obj1 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId) };
      const obj2 = { onboarding_responses: flatResult.map((id) => id.id), onboarding_prompts_seen: obj, onboarding_responses_seen: obj };
      obj1.body = obj2;
      obj1.rejectWithError = true;
      const postResult = HTTP.post(obj1);
      let catchPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          let obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: body, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      }).catch((arg0) => {
        const obj = callback(obj[12]);
        return obj.captureException(arg0);
      });
      const nextPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          let obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: body, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      });
    } else {
      const obj3 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId) };
      const obj4 = { onboarding_responses: flatResult.map((id) => id.id), onboarding_prompts_seen: obj, onboarding_responses_seen: obj };
      obj3.body = obj4;
      obj3.rejectWithError = false;
      const putResult = HTTP.put(obj3);
      catchPromise = HTTP.put(obj3).then((body) => {
        if (null != body.body) {
          let obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: body, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      }).catch((cause) => {
        let obj = callback(obj[12]);
        obj = { cause };
        const error = new Error("Failed to update onboarding responses for guild " + cause + ": " + cause.statusCode, obj);
        obj.captureException(error);
      });
      const nextPromise1 = HTTP.put(obj3).then((body) => {
        if (null != body.body) {
          let obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: body, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      });
    }
    return catchPromise;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ AnalyticEvents: closure_10, AnalyticsPages: closure_11, Endpoints: closure_12 } = arg1(dependencyMap[7]));
const GuildMemberFlags = arg1(dependencyMap[8]).GuildMemberFlags;
const ReadStateTypes = arg1(dependencyMap[9]).ReadStateTypes;
const obj = {
  selectOption(guildId, id, id2, selected) {
    let tmp = id2;
    let dispatch = store2.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        let obj = importDefault(dependencyMap[14]);
        let withoutResult = obj.without(importDefault(dependencyMap[14]).map(dispatch.options, "id"), tmp);
        const arr2 = importDefault(dependencyMap[14]);
      } else {
        withoutResult = [];
      }
      dispatch = importDefault(dependencyMap[11]).dispatch;
      obj = { type: "GUILD_ONBOARDING_SELECT_OPTION", guildId, promptId: id, optionId: tmp };
      tmp = selected;
      obj.selected = selected;
      obj.removedOptionIds = withoutResult;
      dispatch(obj);
      const tmp6 = importDefault(dependencyMap[11]);
    }
  }
};
const tmp2 = arg1(dependencyMap[7]);
obj.updateOnboardingResponses = importDefault(dependencyMap[14]).debounce(_updateOnboardingResponses, 1000);
obj.updateRolesLocal = function updateRolesLocal(guildId, addedRoleIds, removedRoleIds) {
  const selfMember = store.getSelfMember(guildId);
  let roles;
  if (null != selfMember) {
    roles = selfMember.roles;
  }
  if (null == roles) {
    roles = [];
  }
  if (closure_5.isViewingRoles(guildId)) {
    const obj5 = addedRoleIds(dependencyMap[13]);
    const obj6 = importDefault(dependencyMap[14]);
    const result = obj5.updateImpersonatedRoles(guildId, obj6.difference(importDefault(dependencyMap[14]).union(roles, addedRoleIds), removedRoleIds));
    const obj7 = importDefault(dependencyMap[14]);
  } else {
    if (tmp2) {
      let obj = importDefault(dependencyMap[11]);
      obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId };
      const obj3 = importDefault(dependencyMap[14]);
      obj.roles = obj3.difference(importDefault(dependencyMap[14]).union(roles, addedRoleIds), removedRoleIds);
      obj.addedRoleIds = addedRoleIds;
      obj.removedRoleIds = removedRoleIds;
      obj.dispatch(obj);
      const obj4 = importDefault(dependencyMap[14]);
    }
    const tmp2 = addedRoleIds.length > 0 || removedRoleIds.length > 0;
  }
};
obj.completeOnboarding = function completeOnboarding(guildId, prompts) {
  let tmp = null;
  if (prompts.length > 0) {
    tmp = prompts[prompts.length - 1];
  }
  const selectedOptions = store2.getSelectedOptions(guildId);
  let obj = prompts(dependencyMap[15]);
  const selectedRoleIds = obj.getSelectedRoleIds(selectedOptions);
  let obj1 = prompts(dependencyMap[15]);
  const selectedChannelIds = obj1.getSelectedChannelIds(selectedOptions);
  if (store2.getEnabled(guildId)) {
    let defaultChannelIds = store2.getDefaultChannelIds(guildId);
  } else {
    defaultChannelIds = [];
  }
  let obj2 = prompts(dependencyMap[15]);
  const tmp5 = callback2(obj2.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  const first = tmp5[0];
  const items = [...defaultChannelIds];
  const mapped = items.map((channelId) => channel.getChannel(channelId));
  const found = mapped.filter(prompts(dependencyMap[16]).isNotNullish);
  const arr4 = tmp5[1];
  const obj4 = prompts(dependencyMap[17]);
  if (null == tmp) {
    let items1 = [];
  } else {
    const options = tmp.options;
    items1 = options.map((id) => id.id);
  }
  prompts = items1;
  const connections = store2.getConnections(guildId);
  const set = new Set(items);
  const providerConnectionState = prompts(dependencyMap[15]).getProviderConnectionState(connections);
  const obj5 = prompts(dependencyMap[15]);
  const applicationConnectionState = prompts(dependencyMap[15]).getApplicationConnectionState(connections);
  const obj6 = prompts(dependencyMap[15]);
  obj = {};
  const obj7 = importDefault(dependencyMap[18]);
  const merged = Object.assign(prompts(dependencyMap[19]).collectGuildAnalyticsMetadata(guildId));
  obj["step"] = prompts.length - 1;
  let num2 = 0;
  if (null != tmp) {
    num2 = selectedOptions.filter((id) => items1.includes(id.id)).length;
  }
  obj["options_selected"] = num2;
  obj["skipped"] = items1.length > 0;
  obj["back"] = false;
  obj["in_onboarding"] = true;
  obj["is_final_step"] = true;
  obj["roles_granted"] = selectedRoleIds.size;
  obj["channels_granted"] = obj4.getFlattenedChannels(guildId, set, found, true).length;
  obj["guild_onboarding_covered_channel_ids"] = first.map((id) => id.id);
  obj["guild_onboarding_uncovered_channel_ids"] = arr4.map((id) => id.id);
  obj["provider_connections_connected"] = providerConnectionState.connected;
  obj["provider_connections_not_connected"] = providerConnectionState.notConnected;
  obj["application_connections_connected"] = applicationConnectionState.connected;
  obj["application_connections_not_connected"] = applicationConnectionState.notConnected;
  obj7.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
  const obj9 = prompts(dependencyMap[19]);
  const obj10 = prompts(dependencyMap[20]);
  obj10.ackGuildFeature(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION, importDefault(dependencyMap[21]).fromTimestamp(Date.now()));
  _updateOnboardingResponses(guildId, true);
  if (closure_5.isFullServerPreview(guildId)) {
    const result = prompts(dependencyMap[13]).updateImpersonatedChannels(guildId, items, []);
    const obj12 = prompts(dependencyMap[13]);
    obj = { optInEnabled: true };
    const result1 = prompts(dependencyMap[13]).updateImpersonatedData(guildId, obj);
    const obj13 = prompts(dependencyMap[13]);
    const _Array = Array;
    const result2 = prompts(dependencyMap[13]).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const member = store.getMember(guildId, currentUser.id);
      let flags;
      if (null != member) {
        flags = member.flags;
      }
      let num4 = 0;
      if (null != flags) {
        num4 = flags;
      }
      obj1 = {};
      obj2 = {};
      const obj16 = prompts(dependencyMap[13]);
      obj2.flags = prompts(dependencyMap[22]).setFlag(num4, GuildMemberFlags.COMPLETED_ONBOARDING, true);
      obj1.memberOptions = obj2;
      const result3 = obj16.updateImpersonatedData(guildId, obj1);
      const obj19 = prompts(dependencyMap[22]);
    }
    const obj15 = prompts(dependencyMap[13]);
  }
};
obj.onboardExistingMember = function onboardExistingMember(id, set) {
  set = new Set(set);
  if (store2.getEnabled(id)) {
    let defaultChannelIds = store2.getDefaultChannelIds(id);
  } else {
    defaultChannelIds = [];
  }
  const item = defaultChannelIds.forEach((arg0) => set.add(arg0));
  if (set.size > 0) {
    let obj = set(dependencyMap[23]);
    const _Array = Array;
    obj = { page: constants2.GUILD_ONBOARDING };
    obj.bulkOptInChannels(id, Array.from(set), true, obj);
  }
};
obj.finishOnboarding = function finishOnboarding(guildId) {
  let obj = importDefault(dependencyMap[11]);
  obj = { type: "GUILD_ONBOARDING_COMPLETE", guildId };
  obj.dispatch(obj);
};
obj.setUserOnboardingStep = function setUserOnboardingStep(guildId, step) {
  let obj = importDefault(dependencyMap[11]);
  obj = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
  obj.dispatch(obj);
};
obj.resetOnboarding = function resetOnboarding(arg0) {
  const arg1 = arg0;
  return callback(async () => {
    const currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const member = member.getMember(callback, currentUser.id);
      let flags;
      if (null != member) {
        flags = member.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      let obj = callback(closure_2[24]);
      obj = { flags: callback(closure_2[22]).setFlag(num, constants.COMPLETED_ONBOARDING, false) };
      yield obj.updateGuildSelfMember(closure_0, obj);
      const obj3 = callback(closure_2[22]);
    }
  })();
};
const importDefaultResult = importDefault(dependencyMap[14]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;
