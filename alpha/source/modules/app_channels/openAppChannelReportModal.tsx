// Module ID: 13831
// Function ID: 13832
// Name: openAppChannelReportModal
// Dependencies: [5, 2046, 6760, 13832, 8055, 2]
// Exports: default

// Module 13831 (openAppChannelReportModal)
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6760 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_4, closure_5, contextualGuildId;

let obj = function _getApplication() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            const application = ApplicationStore.getApplication(closure_0);
            if (null != application) {
              if (ApplicationStore.isHydrated(closure_0)) {
                c5 = 3;
                const obj5 = { value: application, done: true };
                return obj5;
              }
            }
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj3.fetchApplication(closure_0), done: false };
            obj3 = ApplicationActionCreatorsDefault;
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: closure_130_4.getApplication(closure_0), done: true };
          return obj;
        }
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _openAppChannelReportModal() {
  obj = _asyncToGenerator(async (arg0, entrypoint, application) => {
    let guildId = arg0;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      function getApplication() {
        return closure_1_5(...arguments);
      }
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_4 = tmp;
              guildId = entrypoint;
              entrypoint = application;
              application = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: getApplication(guildId), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            application = value;
            if (null != application) {
              obj = { application, entrypoint, contextualGuildId, contextualChannelId: guildId.id };
              const showReportModalForApp = closure_133_0(closure_133_2[4]).showReportModalForApp;
              closure_133_0(closure_133_2[4]);
              guildId = guildId.getGuildId();
              contextualGuildId = guildId;
              if (guildId == null) {
                contextualGuildId = undefined;
              }
              const result = showReportModalForApp(obj);
            } else {
              closure_133_1(closure_133_2[3])();
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          c7 = 3;
          throw tmp25;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/app_channels/openAppChannelReportModal.tsx");

export default function openAppChannelReportModal() {
  return obj(...arguments);
};
