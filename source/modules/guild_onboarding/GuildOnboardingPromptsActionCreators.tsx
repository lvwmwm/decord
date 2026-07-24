// Module ID: 5057
// Function ID: 43765
// Name: fetchOnboardingPrompts
// Dependencies: [5, 1194, 1917, 1838, 5058, 5059, 653, 3746, 675, 4324, 686, 507, 1360, 2]
// Exports: loadOnboardingPrompts, maybeFetchOnboardingPrompts

// Module 5057 (fetchOnboardingPrompts)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { serverApiResponseToClientState as closure_8 } from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function fetchOnboardingPrompts(guildId) {
  const _require = guildId;
  let obj = importDefault(686);
  obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = _require(507).HTTP;
  obj = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    const tmp = outer1_8(body.body);
    let closure_0 = tmp;
    let obj = outer1_1(outer1_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: closure_0 };
    const merged = Object.assign(tmp);
    return obj.dispatch(obj).then(() => tmp.prompts);
  }, (arg0) => {
    let obj = outer1_1(outer1_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: closure_0 };
    obj.dispatch(obj);
    return arg0;
  });
}
async function _maybeFetchOnboardingPrompts(arg0, arg1) {
  const id = outer2_4.getId();
  const member = outer2_5.getMember(arg0, id);
  let flags;
  if (null != member) {
    flags = member.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const hasFlagResult = outer2_0(outer2_2[12]).hasFlag(num, outer2_12.COMPLETED_ONBOARDING);
  const guild = outer2_6.getGuild(arg0);
  if (null != guild) {
    const features = guild.features;
    if (features.has(outer2_11.GUILD_ONBOARDING)) {
      const onboardingPrompts = outer2_7.getOnboardingPrompts(arg0);
      if (!shouldFetchPromptsResult) {
        if (onboardingPrompts.length > 0) {
          if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
            outer2_17(arg0);
            let resolved = Promise.resolve();
          } else {
            if (!hasFlagResult) {
              outer2_16(arg0);
            }
            resolved = Promise.resolve();
          }
          return resolved;
        }
      }
      const obj2 = yield outer2_14(arg0);
      const _Array = Array;
      if (Array.isArray(obj2)) {
        if (obj2.every((inOnboarding) => !inOnboarding.inOnboarding)) {
          outer2_17(arg0);
          let resolved1 = Promise.resolve();
        }
        return resolved1;
      }
      resolved1 = obj2;
      if (!hasFlagResult) {
        outer2_16(arg0);
        resolved1 = obj2;
      }
      shouldFetchPromptsResult = outer2_7.shouldFetchPrompts(arg0);
    }
  }
  return Promise.resolve();
}
function startOnboarding(guildId) {
  let obj = importDefault(686);
  obj = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj);
}
function _trackOnboardingDirectJoin(guildId) {
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  obj["step"] = c13;
  obj["required"] = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = {};
  const obj4 = importDefault(675);
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  obj["step"] = c13;
  obj["skipped"] = false;
  obj["is_final_step"] = true;
  obj["in_onboarding"] = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
}
({ AnalyticEvents: closure_9, Endpoints: closure_10, GuildFeatures: closure_11 } = ME);
let c13 = -2;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  let obj = importDefault(675);
  obj = {};
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  obj["has_new_prompts"] = false;
  obj["number_of_prompts"] = 0;
  obj.track(constants.GUILD_ONBOARDING_LOADED, obj);
};
export { fetchOnboardingPrompts };
export const maybeFetchOnboardingPrompts = function maybeFetchOnboardingPrompts(guildId) {
  return _maybeFetchOnboardingPrompts(...arguments);
};
export { startOnboarding };
export const CONNECTIONS_STEP = -3;
