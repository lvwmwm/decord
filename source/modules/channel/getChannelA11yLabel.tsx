// Module ID: 8494
// Function ID: 67649
// Name: getStatusLabel
// Dependencies: [1352, 3767, 1849, 653, 1212, 4320, 4623, 3969, 7906, 2]
// Exports: default, getChannelA11yHint

// Module 8494 (getStatusLabel)
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return require(3969) /* conceal */.humanizeStatus(constants2.ONLINE);
  } else if (constants2.IDLE === status) {
    return require(3969) /* conceal */.humanizeStatus(constants2.IDLE);
  } else if (constants2.DND === status) {
    return require(3969) /* conceal */.humanizeStatus(constants2.DND);
  } else if (constants2.INVISIBLE === status) {
    return require(3969) /* conceal */.humanizeStatus(constants2.INVISIBLE);
  } else {
    return "";
  }
}
({ ChannelTypes: closure_6, StatusTypes: closure_7 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

export default function getChannelA11yLabel(mentionCount) {
  let activityNames;
  let channel;
  let embeddedActivitiesCount;
  let isIncomingCall;
  let isSubscriptionGated;
  let needSubscriptionToAccess;
  let unread;
  let voiceStates;
  ({ channel, unread } = mentionCount);
  if (unread === undefined) {
    unread = false;
  }
  let num = mentionCount.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ voiceStates, embeddedActivitiesCount, activityNames, isIncomingCall, isSubscriptionGated, needSubscriptionToAccess } = mentionCount);
  if (isIncomingCall === undefined) {
    isIncomingCall = false;
  }
  let flag = mentionCount.isOngoingCall;
  if (flag === undefined) {
    flag = false;
  }
  const voiceChannelStartTime = mentionCount.voiceChannelStartTime;
  let obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  const channelName = obj.computeChannelName(channel, closure_5, _isNativeReflectConstruct);
  if (importDefault(4623)(channel)) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const stringResult = intl.string(require(1212) /* getSystemLocale */.t["4qvAtn"]);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = require(1212) /* getSystemLocale */.t.TO8LYt;
    } else {
      const t5 = require(1212) /* getSystemLocale */.t;
      TO8LYt = unread ? t5.F2MZsu : t5.fYqXVY;
    }
  } else {
    if (constants.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = require(1212) /* getSystemLocale */.t.Lo0dCa;
      } else {
        const t4 = require(1212) /* getSystemLocale */.t;
        Lo0dCa = unread ? t4["fxxUo/"] : t4.lts3Ld;
      }
      const intl9 = require(1212) /* getSystemLocale */.intl;
      obj = { channelName, mentionCount: num };
      const items = [intl9.formatToPlainString(Lo0dCa, obj), ];
      const intl10 = require(1212) /* getSystemLocale */.intl;
      obj = { members: channel.recipients.length + 1 };
      items[1] = intl10.formatToPlainString(require(1212) /* getSystemLocale */.t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (constants.GUILD_STORE === type) {
      let g8ONM0 = require(1212) /* getSystemLocale */.t.Bo4msg;
    } else if (constants.GUILD_DIRECTORY === type) {
      g8ONM0 = require(1212) /* getSystemLocale */.t["92EAF2"];
    } else if (constants.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = require(1212) /* getSystemLocale */.t.sDKIpm;
      } else {
        const t3 = require(1212) /* getSystemLocale */.t;
        sDKIpm = unread ? t3.VM7z8f : t3.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (constants.GUILD_VOICE === type) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { channelName };
      const items1 = [intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.bkpadO, obj1)];
      if (num > 0) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const obj2 = { mentionCount: num };
        items1.push(intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["3l1GOx"], obj2));
      }
      if (unread) {
        const intl4 = require(1212) /* getSystemLocale */.intl;
        items1.push(intl4.string(require(1212) /* getSystemLocale */.t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((nick) => {
            nick = nick.nick;
            if (null == nick) {
              nick = outer1_0(outer1_2[7]).getName(tmp);
              const obj = outer1_0(outer1_2[7]);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (diff > 0) {
            const intl5 = require(1212) /* getSystemLocale */.intl;
            const obj3 = { overflow: diff };
            items1.push(intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.sfgpgr, obj3));
          }
          if (tmp29) {
            const intl6 = require(1212) /* getSystemLocale */.intl;
            const obj4 = { userCount: voiceStates.length, limit: userLimit };
            items1.push(intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["6qgTOF"], obj4));
          }
          tmp29 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl7 = require(1212) /* getSystemLocale */.intl;
        const obj5 = {};
        let obj6 = require(7906) /* calculateTimestampDurations */;
        obj6 = { start: voiceChannelStartTime };
        const _Date = Date;
        obj5.duration = obj6.formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl7.formatToPlainString(require(1212) /* getSystemLocale */.t.JQtsGh, obj5));
      }
      if (tmp37) {
        const intl8 = require(1212) /* getSystemLocale */.intl;
        const obj7 = { activeActivities: activityNames.join(", ") };
        items1.push(intl8.formatToPlainString(require(1212) /* getSystemLocale */.t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      tmp37 = null != activityNames && activityNames.length > 0;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      g8ONM0 = require(1212) /* getSystemLocale */.t.TPPk2T;
    } else if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      if (num > 0) {
        ZL7_I6 = require(1212) /* getSystemLocale */.t["ZL7+I6"];
      } else {
        const t2 = require(1212) /* getSystemLocale */.t;
        ZL7_I6 = unread ? t2.YlVvmc : t2["0nZpiF"];
      }
    } else if (num > 0) {
      g8ONM0 = require(1212) /* getSystemLocale */.t.g8ONM0;
    } else {
      const t = require(1212) /* getSystemLocale */.t;
      g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl11 = require(1212) /* getSystemLocale */.intl;
      const obj8 = { channelName, mentionCount: num };
      const items3 = [intl11.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (isIncomingCall) {
      const intl13 = require(1212) /* getSystemLocale */.intl;
      items4.push(intl13.string(require(1212) /* getSystemLocale */.t["fk1/bX"]));
    } else if (flag) {
      const intl12 = require(1212) /* getSystemLocale */.intl;
      items4.push(intl12.string(require(1212) /* getSystemLocale */.t["NGg/fm"]));
    }
    let tmp69 = null != embeddedActivitiesCount;
    if (tmp69) {
      tmp69 = embeddedActivitiesCount > 0;
    }
    if (tmp69) {
      const intl14 = require(1212) /* getSystemLocale */.intl;
      const obj9 = { activitiesCount: embeddedActivitiesCount };
      items4.push(intl14.formatToPlainString(require(1212) /* getSystemLocale */.t.O6PLYd, obj9));
    }
    const obj10 = { isSubscriptionGated, needSubscriptionToAccess };
    if (!obj10.isSubscriptionGated) {
      if (null != undefined) {
        items4.push(undefined);
      }
      if (null != stringResult) {
        items4.push(stringResult);
      }
      return items4.join(", ");
    } else {
      const intl15 = require(1212) /* getSystemLocale */.intl;
      const string = intl15.string;
      oj_HOs = require(1212) /* getSystemLocale */.t;
      if (tmp73) {
        oj_HOs = oj_HOs["oj+HOs"];
        let stringResult1 = string(oj_HOs);
      } else {
        stringResult1 = string(oj_HOs.xI3TQQ);
      }
    }
  }
};
export { getStatusLabel };
export const getChannelA11yHint = function getChannelA11yHint(userStatus) {
  let channel;
  let muted;
  userStatus = userStatus.userStatus;
  const items = [];
  ({ channel, muted } = userStatus);
  if (userStatus.isFavorite) {
    const intl = require(1212) /* getSystemLocale */.intl;
    items.push(intl.string(require(1212) /* getSystemLocale */.t.cCPjSK));
  }
  if (true === muted) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items.push(intl2.string(require(1212) /* getSystemLocale */.t.C4zCMb));
    return items.join(", ");
  } else {
    if (channel.type === constants.DM) {
      if (null != userStatus) {
        items.push(getStatusLabel(userStatus));
      }
    }
    let joined;
    if (items.length > 0) {
      joined = items.join(", ");
    }
    return joined;
  }
};
