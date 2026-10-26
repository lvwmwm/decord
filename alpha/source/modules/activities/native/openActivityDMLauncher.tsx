// Module ID: 15232
// Function ID: 15233
// Name: openActivityDMLauncher
// Dependencies: [5, 1504, 14192, 11360, 7278, 5634, 6809, 7411, 5159, 1631, 2]
// Exports: default

// Module 15232 (openActivityDMLauncher)
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1504 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let application, applicationId, closure_2, linkChannelId, referrerId;

let obj = function _openActivityDMLauncher() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c4;
      let isDeepLink;
      let items;
      let obj12;
      let obj18;
      let obj3;
      let tmp55Result;
      if (linkChannelId === 2) {
        linkChannelId = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          let customId;
          let id;
          linkChannelId = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              linkChannelId = 3;
              throw value;
            } else if (arg0 === 2) {
              linkChannelId = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              let closure_1 = tmp4;
              applicationId = undefined;
              referrerId = undefined;
              c2 = undefined;
              c3 = undefined;
              linkChannelId = undefined;
              isDeepLink = undefined;
              ({ applicationId: c0, referrerId: c1, customId: c2, linkId: c3, channelId: c4, isDeepLink } = closure_0);
              if (isDeepLink === undefined) {
                isDeepLink = false;
              }
              customId = undefined;
              application = undefined;
              id = undefined;
              c3 = 1;
              linkChannelId = 1;
              return { value: "Reflect", done: null };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              linkChannelId = 3;
              throw value;
            } else if (arg0 === 2) {
              linkChannelId = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              linkChannelId = 1;
              const obj6 = { value: obj12.getCustomActivityLinkParams(applicationId, c3, c2), done: false };
              obj12 = closure_130_0(closure_130_2[2]);
              return obj6;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              linkChannelId = 3;
              throw value;
            } else if (arg0 === 2) {
              linkChannelId = 3;
              return { value, done: true };
            } else {
              customId = value.customId;
              if (isDeepLink) {
                c3 = 3;
                linkChannelId = 1;
                const obj8 = { value: tmp55Result.fetchApplication(applicationId), done: false };
                tmp55Result = closure_130_1(closure_130_2[6]);
                return obj8;
              } else {
                const obj9 = { applicationId, fromLink: true, linkChannelId, customId, referrerId, analyticsLocations: items, commandOrigin: closure_130_0(closure_130_2[5]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED };
                const launch = closure_130_1(closure_130_2[3]).launch;
                items = [];
                closure_130_1(closure_130_2[3]);
                items[0] = closure_130_1(closure_130_2[4]).ACTIVITY_BOOKMARK;
                c3 = 4;
                linkChannelId = 1;
                const obj10 = { value: launch(obj9), done: false };
                return obj10;
              }
            }
          } else {
            if (3 === c3) {
              if (arg0 === 1) {
                linkChannelId = 3;
                throw value;
              } else if (arg0 === 2) {
                linkChannelId = 3;
                return { value, done: true };
              } else {
                application = value;
                const bot = application.bot;
                id = undefined;
                if (bot != null) {
                  id = bot.id;
                }
                if (null != id) {
                  c3 = 5;
                  linkChannelId = 1;
                  const obj13 = { recipientIds: id };
                  const obj14 = { value: obj3.openPrivateChannel(obj13), done: false };
                  obj3 = closure_130_1(closure_130_2[7]);
                  return obj14;
                }
              }
            } else if (4 === c3) {
              if (arg0 === 1) {
                linkChannelId = 3;
                throw value;
              } else if (arg0 === 2) {
                linkChannelId = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              linkChannelId = 3;
              throw value;
            } else if (arg0 === 2) {
              linkChannelId = 3;
              return { value, done: true };
            } else {
              const obj17 = closure_130_0(closure_130_2[8]);
              const bestActiveInput = obj17.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj16 = { type: closure_130_0(closure_130_2[9]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
                obj18 = { application, initialRouteName: closure_130_4.APPLICATION_VIEW, customId, referrerId };
                openCustomKeyboard(obj16);
              }
            }
            linkChannelId = 3;
            return { value: "IconComponent", done: "+352" };
          }
        } catch (tmp30) {
          linkChannelId = 3;
          throw tmp30;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const result = size.fileFinishedImporting("modules/activities/native/openActivityDMLauncher.tsx");

export default function openActivityDMLauncher() {
  return obj(...arguments);
};
