// Module ID: 17635
// Function ID: 17636
// Name: MidjourneyOnboardingManager
// Dependencies: [5, 13407, 1086, 6540, 13406, 6666, 2]

// Module 17635 (MidjourneyOnboardingManager)
import Constants from "Constants" /* 1086 */;
import MidjourneyOnboardingConstants from "MidjourneyOnboardingConstants" /* 13407 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let c1, c2;

const MIDJOURNEY_GUILD_ID = MidjourneyOnboardingConstants.MIDJOURNEY_GUILD_ID;
const Routes = Constants.Routes;
class MidjourneyOnboardingManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate };
    return applyArgumentsResult;
  }
  handleChannelCreate(channel) {
    channel = channel.channel;
    return (async (arg0, value) => {
      let closure_0;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj6 = tmp(c2[4]);
              const tmp19 = tmp;
              if (obj6.isEligibleForMidjourneyRedirect(channel)) {
                c1 = 1;
                const tmp19Result = tmp19(c2[4]);
                c2 = 1;
                const obj4 = { value: tmp19Result.hasRedirectedToGuild(MIDJOURNEY_GUILD_ID), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const tmp8 = c1(c2[5]);
            tmp8(Routes.CHANNEL(null, closure_128_0.id));
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c2 = 3;
          throw tmp15;
        }
      }
    })();
  }
}
const prototype = MidjourneyOnboardingManager.prototype;
const midjourneyOnboardingManager = new MidjourneyOnboardingManager();
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx");

export default midjourneyOnboardingManager;
