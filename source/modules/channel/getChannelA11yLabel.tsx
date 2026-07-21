// Module ID: 8443
// Function ID: 67372
// Name: getStatusLabel
// Dependencies: []
// Exports: default, getChannelA11yHint

// Module 8443 (getStatusLabel)
function getStatusLabel(status) {
  if (constants2.ONLINE === status) {
    return require(dependencyMap[7]).humanizeStatus(constants2.ONLINE);
  } else if (constants2.IDLE === status) {
    return require(dependencyMap[7]).humanizeStatus(constants2.IDLE);
  } else if (constants2.DND === status) {
    return require(dependencyMap[7]).humanizeStatus(constants2.DND);
  } else if (constants2.INVISIBLE === status) {
    return require(dependencyMap[7]).humanizeStatus(constants2.INVISIBLE);
  } else {
    return "";
  }
}
const THREAD_CHANNEL_TYPES = require(dependencyMap[0]).THREAD_CHANNEL_TYPES;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ ChannelTypes: closure_6, StatusTypes: closure_7 } = _module);
const _module1 = require(dependencyMap[9]);
const result = _module1.fileFinishedImporting("modules/channel/getChannelA11yLabel.tsx");

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
  let obj = require(dependencyMap[5]);
  const channelName = obj.computeChannelName(channel, closure_5, closure_4);
  if (importDefault(dependencyMap[6])(channel)) {
    const intl = require(dependencyMap[4]).intl;
    const stringResult = intl.string(require(dependencyMap[4]).t.4qvAtn);
  }
  const type = channel.type;
  if (constants.DM === type) {
    if (num > 0) {
      let TO8LYt = require(dependencyMap[4]).t.TO8LYt;
    } else {
      const t5 = require(dependencyMap[4]).t;
      TO8LYt = unread ? t5.F2MZsu : t5.fYqXVY;
    }
  } else {
    if (constants.GROUP_DM === type) {
      if (num > 0) {
        let Lo0dCa = require(dependencyMap[4]).t.Lo0dCa;
      } else {
        const t4 = require(dependencyMap[4]).t;
        Lo0dCa = unread ? t4.fxxUo/ : t4.lts3Ld;
      }
      const intl9 = require(dependencyMap[4]).intl;
      obj = { channelName, mentionCount: num };
      const items = [intl9.formatToPlainString(Lo0dCa, obj), ];
      const intl10 = require(dependencyMap[4]).intl;
      obj = { members: channel.recipients.length + 1 };
      items[1] = intl10.formatToPlainString(require(dependencyMap[4]).t.CxSA5N, obj);
      let joined = items.join(", ");
    } else if (constants.GUILD_STORE === type) {
      let g8ONM0 = require(dependencyMap[4]).t.Bo4msg;
    } else if (constants.GUILD_DIRECTORY === type) {
      g8ONM0 = require(dependencyMap[4]).t.92EAF2;
    } else if (constants.GUILD_ANNOUNCEMENT === type) {
      if (num > 0) {
        let sDKIpm = require(dependencyMap[4]).t.sDKIpm;
      } else {
        const t3 = require(dependencyMap[4]).t;
        sDKIpm = unread ? t3.VM7z8f : t3.WJ3MPt;
      }
      g8ONM0 = sDKIpm;
    } else if (constants.GUILD_VOICE === type) {
      const intl2 = require(dependencyMap[4]).intl;
      const obj1 = { channelName };
      const items1 = [intl2.formatToPlainString(require(dependencyMap[4]).t.bkpadO, obj1)];
      if (num > 0) {
        const intl3 = require(dependencyMap[4]).intl;
        const obj2 = { mentionCount: num };
        items1.push(intl3.formatToPlainString(require(dependencyMap[4]).t.3l1GOx, obj2));
      }
      if (unread) {
        const intl4 = require(dependencyMap[4]).intl;
        items1.push(intl4.string(require(dependencyMap[4]).t.x5zAGZ));
      }
      const userLimit = channel.userLimit;
      if (null != voiceStates) {
        if (voiceStates.length > 0) {
          const diff = voiceStates.length - 3;
          const substr = voiceStates.slice(0, 3);
          const mapped = substr.map((nick) => {
            nick = nick.nick;
            if (null == nick) {
              nick = callback(closure_2[7]).getName(tmp);
              const obj = callback(closure_2[7]);
            }
            return nick;
          });
          items1.push(mapped.join(", "));
          if (diff > 0) {
            const intl5 = require(dependencyMap[4]).intl;
            const obj3 = { overflow: diff };
            items1.push(intl5.formatToPlainString(require(dependencyMap[4]).t.sfgpgr, obj3));
          }
          if (tmp29) {
            const intl6 = require(dependencyMap[4]).intl;
            const obj4 = { userCount: voiceStates.length, limit: userLimit };
            items1.push(intl6.formatToPlainString(require(dependencyMap[4]).t.6qgTOF, obj4));
          }
          const tmp29 = null != userLimit && userLimit > 0;
        }
      }
      if (null != voiceChannelStartTime) {
        const intl7 = require(dependencyMap[4]).intl;
        const obj5 = {};
        let obj6 = require(dependencyMap[8]);
        obj6 = { start: voiceChannelStartTime };
        const _Date = Date;
        obj5.duration = obj6.formatActiveA11yTimestamp(obj6, Date.now());
        items1.push(intl7.formatToPlainString(require(dependencyMap[4]).t.JQtsGh, obj5));
      }
      if (tmp37) {
        const intl8 = require(dependencyMap[4]).intl;
        const obj7 = { activeActivities: activityNames.join(", ") };
        items1.push(intl8.formatToPlainString(require(dependencyMap[4]).t.LmYuHT, obj7));
      }
      joined = items1.join(", ");
      const tmp37 = null != activityNames && activityNames.length > 0;
    } else if (constants.GUILD_STAGE_VOICE === type) {
      g8ONM0 = require(dependencyMap[4]).t.TPPk2T;
    } else if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      if (num > 0) {
        ZL7+I6 = require(dependencyMap[4]).t.ZL7+I6;
      } else {
        const t2 = require(dependencyMap[4]).t;
        ZL7+I6 = unread ? t2.YlVvmc : t2.0nZpiF;
      }
    } else if (num > 0) {
      g8ONM0 = require(dependencyMap[4]).t.g8ONM0;
    } else {
      const t = require(dependencyMap[4]).t;
      g8ONM0 = unread ? t.smf1CZ : t.s0JADj;
    }
    if (null != joined) {
      const items2 = [joined];
      let items4 = items2;
    } else if (null != g8ONM0) {
      const intl11 = require(dependencyMap[4]).intl;
      const obj8 = { channelName, mentionCount: num };
      const items3 = [intl11.formatToPlainString(g8ONM0, obj8)];
      items4 = items3;
    } else {
      items4 = [];
    }
    if (isIncomingCall) {
      const intl13 = require(dependencyMap[4]).intl;
      items4.push(intl13.string(require(dependencyMap[4]).t.fk1/bX));
    } else if (flag) {
      const intl12 = require(dependencyMap[4]).intl;
      items4.push(intl12.string(require(dependencyMap[4]).t.NGg/fm));
    }
    let tmp69 = null != embeddedActivitiesCount;
    if (tmp69) {
      tmp69 = embeddedActivitiesCount > 0;
    }
    if (tmp69) {
      const intl14 = require(dependencyMap[4]).intl;
      const obj9 = { activitiesCount: embeddedActivitiesCount };
      items4.push(intl14.formatToPlainString(require(dependencyMap[4]).t.O6PLYd, obj9));
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
      const intl15 = require(dependencyMap[4]).intl;
      const string = intl15.string;
      oj+HOs = require(dependencyMap[4]).t;
      if (tmp73) {
        oj+HOs = oj_HOs.oj+HOs;
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
    const intl = require(dependencyMap[4]).intl;
    items.push(intl.string(require(dependencyMap[4]).t.cCPjSK));
  }
  if (true === muted) {
    const intl2 = require(dependencyMap[4]).intl;
    items.push(intl2.string(require(dependencyMap[4]).t.C4zCMb));
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
