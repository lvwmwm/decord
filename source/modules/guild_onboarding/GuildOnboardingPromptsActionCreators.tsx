// Module ID: 5328
// Function ID: 45325
// Name: fetchOnboardingPrompts
// Dependencies: []
// Exports: loadOnboardingPrompts, maybeFetchOnboardingPrompts

// Module 5328 (fetchOnboardingPrompts)
function fetchOnboardingPrompts(guildId) {
  const arg1 = guildId;
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = arg1(dependencyMap[11]).HTTP;
  obj = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    const tmp = callback2(body.body);
    body = tmp;
    let obj = callback(closure_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: body };
    const merged = Object.assign(tmp);
    return obj.dispatch(obj).then(() => tmp.prompts);
  }, (arg0) => {
    let obj = callback(closure_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: arg0 };
    obj.dispatch(obj);
    return arg0;
  });
}
async function _maybeFetchOnboardingPrompts(guildId, arg1) {
  const id = id.getId();
  const member = member.getMember(guildId, id);
  let flags;
  if (null != member) {
    flags = member.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const hasFlagResult = callback(closure_2[12]).hasFlag(num, constants2.COMPLETED_ONBOARDING);
  const guild = guild.getGuild(guildId);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.GUILD_ONBOARDING)) {
      const onboardingPrompts = closure_7.getOnboardingPrompts(guildId);
      if (!shouldFetchPromptsResult) {
        if (onboardingPrompts.length > 0) {
          if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
            callback3(guildId);
            let resolved = Promise.resolve();
          } else {
            if (!hasFlagResult) {
              callback2(guildId);
            }
            resolved = Promise.resolve();
          }
          return resolved;
        }
      }
      const obj2 = yield closure_14(guildId);
      const _Array = Array;
      if (Array.isArray(obj2)) {
        if (obj2.every((inOnboarding) => !inOnboarding.inOnboarding)) {
          callback3(guildId);
          let resolved1 = Promise.resolve();
        }
        return resolved1;
      }
      resolved1 = obj2;
      if (!hasFlagResult) {
        callback2(guildId);
        resolved1 = obj2;
      }
      const shouldFetchPromptsResult = closure_7.shouldFetchPrompts(guildId);
    }
  }
  return Promise.resolve();
}
function startOnboarding(guildId) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj);
}
function _trackOnboardingDirectJoin(guildId) {
  let obj = importDefault(dependencyMap[8]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[9]).collectGuildAnalyticsMetadata(guildId));
  obj["step"] = closure_13;
  obj["required"] = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
  const obj3 = arg1(dependencyMap[9]);
  obj = {};
  const obj4 = importDefault(dependencyMap[8]);
  const merged1 = Object.assign(arg1(dependencyMap[9]).collectGuildAnalyticsMetadata(guildId));
  obj["step"] = closure_13;
  obj["skipped"] = false;
  obj["is_final_step"] = true;
  obj["in_onboarding"] = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).serverApiResponseToClientState;
({ AnalyticEvents: closure_9, Endpoints: closure_10, GuildFeatures: closure_11 } = arg1(dependencyMap[6]));
const GuildMemberFlags = arg1(dependencyMap[7]).GuildMemberFlags;
let closure_13 = -2;
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  let obj = importDefault(dependencyMap[8]);
  obj = {};
  const merged = Object.assign(arg1(dependencyMap[9]).collectGuildAnalyticsMetadata(guildId));
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
