// Module ID: 11410
// Function ID: 11411
// Name: removeConjureServerApp
// Dependencies: [5, 11411, 4809, 1126, 3849, 2]
// Exports: default

// Module 11410 (removeConjureServerApp)
import ConjureActionCreators from "ConjureActionCreators" /* 11411 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _removeConjureServerApp() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj7;
    let unpublishProjectResult;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let targetAppName;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp2;
            targetAppName = undefined;
            const obj4 = { guildId: closure_0.guildId, alsoRemovePreviewBot: true };
            const obj8 = ConjureActionCreators;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: unpublishProjectResult.catch(() => null), done: false };
            unpublishProjectResult = obj8.unpublishProject(closure_0.projectId, obj4);
            return obj5;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          targetAppName = value;
          let ok;
          if (targetAppName != null) {
            ok = targetAppName.ok;
          }
          let flag2 = true === ok;
          if (flag2) {
            const open = closure_131_1(closure_131_2[2]).open;
            const tmp11 = closure_131_1(closure_131_2[2]);
            const intl = closure_131_0(closure_131_2[3]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const rest = closure_0.rest;
            let appName;
            const SNFGxP = closure_131_1(closure_131_2[4]).SNFGxP;
            if (rest != null) {
              appName = rest.appName;
            }
            targetAppName = appName;
            if (appName == null) {
              targetAppName = closure_0.targetAppName;
            }
            obj = { text: formatToPlainString(SNFGxP, obj7), variant: "success" };
            obj7 = { app: targetAppName, server: closure_0.guildName };
            open("CONJURE_APP_REMOVED", obj);
            flag2 = true;
          }
          c5 = 3;
          const obj9 = { value: flag2, done: true };
          return obj9;
        }
      } catch (tmp23) {
        c5 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/projects/native/removeConjureServerApp.tsx");

export default function removeConjureServerApp() {
  return obj(...arguments);
};
