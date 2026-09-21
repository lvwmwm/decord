// Module ID: 9600
// Function ID: 9601
// Name: getCachedOrFetchActivityApplicationForLaunch
// Dependencies: [5, 4985, 2006, 2045, 9589, 9564, 9601, 2]
// Exports: default

// Module 9600 (getCachedOrFetchActivityApplicationForLaunch)
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9589 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 4985 */;
import ApplicationRecord from "ApplicationRecord" /* 2006 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
let closure_7 = async function _getCachedOrFetchActivityApplicationForLaunch(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          let activityConfigs;
          let applications;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          application = application.getApplication(closure_0);
          if (isUsableApplicationRecord(application)) {
            c5 = 3;
            const obj5 = { value: application, done: true };
            return obj5;
          } else {
            channel = channel.getChannel(tmp41);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            const obj6 = { guildId: guild_id };
            c4 = 1;
            c5 = 1;
            const obj8 = { value: EmbeddedActivitiesActionCreators.fetchShelf(obj6), done: false };
            return obj8;
          }
          tmp41 = closure_1;
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_1 = value;
          activityConfigs = closure_130_1.activityConfigs;
          applications = closure_130_1.applications;
          const obj10 = { applicationId: closure_130_0, activityConfigs, applications };
          closure_130_4 = closure_131_1(closure_131_2[5])(obj10);
          let application1;
          if (closure_130_4 != null) {
            application1 = closure_130_4.application;
          }
          if (tmp38(application1)) {
            let application2;
            if (closure_130_4 != null) {
              application2 = closure_130_4.application;
            }
            c5 = 3;
            const obj11 = { value: application2, done: true };
            return obj11;
          } else {
            c4 = 2;
            c5 = 1;
            const obj12 = { value: closure_131_0(closure_131_2[6]).fetchApplication(closure_130_0), done: false };
            return obj12;
          }
          tmp38 = closure_131_8;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        closure_130_5 = value;
        c5 = 3;
        const obj = { value: closure_131_5.createFromServer(closure_130_5), done: true };
        return obj;
      }
    } catch (tmp24) {
      c5 = tmp;
      throw tmp24;
    }
  }
};
function isUsableApplicationRecord(embeddedActivityConfig) {
  return null != embeddedActivityConfig && null != embeddedActivityConfig.embeddedActivityConfig;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx");

export default function getCachedOrFetchActivityApplicationForLaunch() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
