// Module ID: 15184
// Function ID: 15185
// Name: openActivityDMLauncher
// Dependencies: [5, 1504, 14145, 11315, 7263, 5620, 6794, 7396, 5145, 1631, 2]
// Exports: default

// Module 15184 (openActivityDMLauncher)
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1504 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let application, closure_5;

let obj = function _openActivityDMLauncher() {
  obj = _asyncToGenerator(async (applicationId, referrerId, arg2, arg3) => {
    let closure_2 = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0, value, arg2, arg3) => {
      let items;
      let obj12;
      let obj18;
      let obj3;
      let tmp58Result;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flag;
          let customId;
          let id;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              application = tmp;
              closure_5 = tmp4;
              flag = closure_4;
              if (closure_4 === undefined) {
                flag = false;
              }
              customId = undefined;
              application = undefined;
              id = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c7 = 2;
              c8 = 1;
              const obj6 = { value: obj12.getCustomActivityLinkParams(applicationId, closure_3, closure_2), done: false };
              obj12 = closure_134_0(closure_134_2[2]);
              return obj6;
            }
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              customId = value.customId;
              if (flag) {
                c7 = 3;
                c8 = 1;
                const obj8 = { value: tmp58Result.fetchApplication(applicationId), done: false };
                tmp58Result = closure_134_1(closure_134_2[6]);
                return obj8;
              } else {
                const obj9 = { applicationId, fromLink: true, customId, referrerId, analyticsLocations: items, commandOrigin: closure_134_0(closure_134_2[5]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED };
                const launch = closure_134_1(closure_134_2[3]).launch;
                items = [];
                closure_134_1(closure_134_2[3]);
                items[0] = closure_134_1(closure_134_2[4]).ACTIVITY_BOOKMARK;
                c7 = 4;
                c8 = 1;
                const obj10 = { value: launch(obj9), done: false };
                return obj10;
              }
            }
          } else {
            if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                application = value;
                const bot = application.bot;
                id = undefined;
                if (bot != null) {
                  id = bot.id;
                }
                if (null != id) {
                  c7 = 5;
                  c8 = 1;
                  const obj13 = { recipientIds: id };
                  const obj14 = { value: obj3.openPrivateChannel(obj13), done: false };
                  obj3 = closure_134_1(closure_134_2[7]);
                  return obj14;
                }
              }
            } else if (4 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              const obj17 = closure_134_0(closure_134_2[8]);
              const bestActiveInput = obj17.getBestActiveInput();
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj16 = { type: closure_134_0(closure_134_2[9]).KeyboardTypes.APP_LAUNCHER, context: obj18 };
                obj18 = { application, initialRouteName: closure_134_4.APPLICATION_VIEW, customId, referrerId };
                openCustomKeyboard(obj16);
              }
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp33) {
          c8 = 3;
          throw tmp33;
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
