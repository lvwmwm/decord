// Module ID: 5063
// Function ID: 43862
// Name: _updateOnboardingResponses
// Dependencies: [5, 57, 1909, 1348, 1917, 1849, 5058, 653, 3746, 4326, 507, 686, 1184, 5064, 22, 5065, 1327, 5068, 675, 4324, 5069, 21, 1360, 5072, 5080, 2]

// Module 5063 (_updateOnboardingResponses)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { ReadStateTypes } from "ReadStateTypes";
import importDefaultResult from "hasFlag";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function _updateOnboardingResponses(guildId, arg1) {
  let flag = arg1;
  const _require = guildId;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj;
  obj = undefined;
  if (!closure_5.isFullServerPreview(guildId)) {
    obj = store2;
    if (flag) {
      let onboardingPromptsForOnboarding = obj.getOnboardingPromptsForOnboarding(guildId);
    } else {
      onboardingPromptsForOnboarding = obj.getOnboardingPrompts(guildId);
    }
    onboardingResponses = store2.getOnboardingResponses(guildId);
    const mapped = onboardingPromptsForOnboarding.map((options) => {
      options = options.options;
      return options.filter((id) => outer1_1.includes(id.id));
    });
    const flatResult = mapped.flat();
    obj = {};
    obj = {};
    let item = onboardingPromptsForOnboarding.forEach((id) => {
      obj[id.id] = Date.now();
      const options = id.options;
      const item = options.forEach((id) => {
        const timestamp = Date.now();
        outer1_3[id.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = _require(obj[10]).HTTP;
    if (flag) {
      const obj1 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId) };
      const obj2 = { onboarding_responses: flatResult.map((id) => id.id), onboarding_prompts_seen: obj, onboarding_responses_seen: obj };
      obj1.body = obj2;
      obj1.rejectWithError = true;
      const postResult = HTTP.post(obj1);
      let catchPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: closure_0, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      }).catch((arg0) => {
        obj = callback(obj[12]);
        return obj.captureException(arg0);
      });
      const nextPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: closure_0, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
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
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: closure_0, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      }).catch((cause) => {
        obj = callback(obj[12]);
        obj = { cause };
        const error = new Error("Failed to update onboarding responses for guild " + closure_0 + ": " + cause.statusCode, obj);
        obj.captureException(error);
      });
      const nextPromise1 = HTTP.put(obj3).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: closure_0, options: body.body.onboarding_responses, prompts_seen: body.body.onboarding_prompts_seen, options_seen: body.body.onboarding_responses_seen };
          obj.dispatch(obj);
        }
      });
    }
    return catchPromise;
  }
}
({ AnalyticEvents: closure_10, AnalyticsPages: closure_11, Endpoints: closure_12 } = ME);
let obj = {
  selectOption(closure_0, id, id2, selected) {
    let tmp = id2;
    let dispatch = store2.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        let obj = importDefault(22);
        let withoutResult = obj.without(importDefault(22).map(dispatch.options, "id"), tmp);
        const arr2 = importDefault(22);
      } else {
        withoutResult = [];
      }
      dispatch = importDefault(686).dispatch;
      obj = { type: "GUILD_ONBOARDING_SELECT_OPTION", guildId: closure_0, promptId: id, optionId: tmp };
      tmp = selected;
      obj.selected = selected;
      obj.removedOptionIds = withoutResult;
      dispatch(obj);
      const tmp6 = importDefault(686);
    }
  },
  updateOnboardingResponses: require("hasFlag").debounce(_updateOnboardingResponses, 1000),
  updateRolesLocal(closure_0, addedRoleIds, removedRoleIds) {
    const selfMember = store.getSelfMember(closure_0);
    let roles;
    if (null != selfMember) {
      roles = selfMember.roles;
    }
    if (null == roles) {
      roles = [];
    }
    if (closure_5.isViewingRoles(closure_0)) {
      const obj5 = require(5064) /* _createForOfIteratorHelperLoose */;
      const obj6 = importDefault(22);
      const result = obj5.updateImpersonatedRoles(closure_0, obj6.difference(importDefault(22).union(roles, addedRoleIds), removedRoleIds));
      const obj7 = importDefault(22);
    } else {
      if (tmp2) {
        let obj = importDefault(686);
        obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: closure_0 };
        const obj3 = importDefault(22);
        obj.roles = obj3.difference(importDefault(22).union(roles, addedRoleIds), removedRoleIds);
        obj.addedRoleIds = addedRoleIds;
        obj.removedRoleIds = removedRoleIds;
        obj.dispatch(obj);
        const obj4 = importDefault(22);
      }
      tmp2 = addedRoleIds.length > 0 || removedRoleIds.length > 0;
    }
  },
  completeOnboarding(guildId, prompts) {
    let tmp = null;
    if (prompts.length > 0) {
      tmp = prompts[prompts.length - 1];
    }
    const selectedOptions = store2.getSelectedOptions(guildId);
    let obj = items1(5065);
    const selectedRoleIds = obj.getSelectedRoleIds(selectedOptions);
    let obj1 = items1(5065);
    const selectedChannelIds = obj1.getSelectedChannelIds(selectedOptions);
    if (store2.getEnabled(guildId)) {
      let defaultChannelIds = store2.getDefaultChannelIds(guildId);
    } else {
      defaultChannelIds = [];
    }
    let obj2 = items1(5065);
    const tmp5 = callback2(obj2.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
    const first = tmp5[0];
    const items = [...defaultChannelIds];
    const mapped = items.map((channelId) => outer1_6.getChannel(channelId));
    const found = mapped.filter(items1(1327).isNotNullish);
    const arr4 = tmp5[1];
    const obj4 = items1(5068);
    if (null == tmp) {
      items1 = [];
    } else {
      const options = tmp.options;
      items1 = options.map((id) => id.id);
    }
    const connections = store2.getConnections(guildId);
    const set = new Set(items);
    const providerConnectionState = items1(5065).getProviderConnectionState(connections);
    const obj5 = items1(5065);
    const applicationConnectionState = items1(5065).getApplicationConnectionState(connections);
    const obj6 = items1(5065);
    obj = {};
    const obj7 = importDefault(675);
    const merged = Object.assign(items1(4324).collectGuildAnalyticsMetadata(guildId));
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
    const obj9 = items1(4324);
    const obj10 = items1(5069);
    obj10.ackGuildFeature(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION, importDefault(21).fromTimestamp(Date.now()));
    _updateOnboardingResponses(guildId, true);
    if (closure_5.isFullServerPreview(guildId)) {
      const result = items1(5064).updateImpersonatedChannels(guildId, items, []);
      const obj12 = items1(5064);
      obj = { optInEnabled: true };
      const result1 = items1(5064).updateImpersonatedData(guildId, obj);
      const obj13 = items1(5064);
      const _Array = Array;
      const result2 = items1(5064).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
      currentUser = currentUser.getCurrentUser();
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
        const obj16 = items1(5064);
        obj2.flags = items1(1360).setFlag(num4, GuildMemberFlags.COMPLETED_ONBOARDING, true);
        obj1.memberOptions = obj2;
        const result3 = obj16.updateImpersonatedData(guildId, obj1);
        const obj19 = items1(1360);
      }
      const obj15 = items1(5064);
    }
  },
  onboardExistingMember(id, set) {
    set = new Set(set);
    if (store2.getEnabled(id)) {
      let defaultChannelIds = store2.getDefaultChannelIds(id);
    } else {
      defaultChannelIds = [];
    }
    const item = defaultChannelIds.forEach((arg0) => set.add(arg0));
    if (set.size > 0) {
      let obj = set(5072);
      const _Array = Array;
      obj = { page: constants2.GUILD_ONBOARDING };
      obj.bulkOptInChannels(id, Array.from(set), true, obj);
    }
  },
  finishOnboarding(closure_0) {
    let obj = importDefault(686);
    obj = { type: "GUILD_ONBOARDING_COMPLETE", guildId: closure_0 };
    obj.dispatch(obj);
  },
  setUserOnboardingStep(guildId, step) {
    let obj = importDefault(686);
    obj = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
    obj.dispatch(obj);
  },
  resetOnboarding(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      const currentUser = outer2_8.getCurrentUser();
      if (null != currentUser) {
        const member = outer2_7.getMember(outer1_0, currentUser.id);
        let flags;
        if (null != member) {
          flags = member.flags;
        }
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        let obj = callback(outer2_2[24]);
        obj = { flags: callback(outer2_2[22]).setFlag(num, outer2_13.COMPLETED_ONBOARDING, false) };
        yield obj.updateGuildSelfMember(outer1_0, obj);
        const obj3 = callback(outer2_2[22]);
      }
    })();
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;
