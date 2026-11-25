// Module ID: 19919
// Function ID: 19920
// Name: ConjureServerAppsSection
// Dependencies: [5, 19, 21, 12454, 5693, 1112, 4244, 18544, 19917, 11508, 575, 2]
// Exports: default

// Module 19919 (ConjureServerAppsSection)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 11508 */;
import GuildSettingsModalIntegrationsAppsDefault from "GuildSettingsModalIntegrationsApps" /* 19917 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let app, closure_3;

let obj = function _removeApp() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let user = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0, value, arg2) => {
      let c1;
      let c2;
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c1 = undefined;
              user = undefined;
              ({ integrationId: c1, application: c2 } = closure_1);
              closure_3 = closure_2;
              app = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c5 = 2;
              c6 = 1;
              const obj6 = { value: obj4.loadConjureServerApp(closure_0, user.id), done: false };
              obj4 = closure_132_0(closure_132_2[3]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            app = value;
            if (null != app) {
              const obj8 = {
                app,
                applicationId: user.id,
                onPlainConfirm() {
                          return closure_1_3(closure_1_1);
                        }
              };
              obj = closure_132_0(closure_132_2[7]);
              const result = obj.openConjureRemoveBotAlert(obj8);
            } else {
              const presentError = closure_132_0(closure_132_2[4]).presentError;
              closure_132_0(closure_132_2[4]);
              const intl = closure_132_0(closure_132_2[5]).intl;
              presentError(intl.string(closure_132_1(closure_132_2[6]).PJ2Fkn));
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp30) {
          c6 = 3;
          throw tmp30;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/conjure/server_apps/native/ConjureServerAppsSection.tsx");

export default function ConjureServerAppsSection(apps) {
  ({ guildId: require, onRemoveIntegration: importDefault } = apps);
  apps = apps.apps;
  const intl = intl2.intl;
  return <tmp title={intl.string(_modDef4244.EPSYTs)} apps={apps} renderIcon={function renderIcon(application) {
    ConjureAppSheetIconDefault;
    return <tmp application={arg0} size={24} radius={nativeDefault.radii.xs} />;
  }} onRemove={function onRemove(arg0) {
    function removeApp() {
      return closure_1_5(...arguments);
    }
    !removeApp(require, arg0, importDefault);
  }} />;
};
