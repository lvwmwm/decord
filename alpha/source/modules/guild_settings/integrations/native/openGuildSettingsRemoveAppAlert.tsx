// Module ID: 19918
// Function ID: 19919
// Name: openGuildSettingsRemoveAppAlert
// Dependencies: [5, 32, 19, 2164, 21, 504, 6940, 12454, 8531, 1112, 18544, 6021, 5603, 6017, 2]
// Exports: default

// Module 19918 (openGuildSettingsRemoveAppAlert)
import useAlertStore from "useAlertStore" /* 6017 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2164 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2, id;

let c9;
let metroImportAll;
let metroImportDefault;
function RemoveAppAlert(guildId) {
  let _undefined;
  let application;
  let c5;
  let closure_4;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj5;
  let obj6;
  let obj9;
  let tmp11Result;
  let tmp15;
  let tmp9;
  guildId = guildId.guildId;
  ({ integrationId: importDefault, application } = guildId.app);
  _slicedToArray = undefined;
  react = undefined;
  let ref;
  let obj = function _disableIntegration() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let v1;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              c3 = 1;
              const obj2 = c1(closure_2[8]);
              c1 = 2;
              c4 = 1;
              const obj5 = { value: obj2.disableIntegration(guildId, importDefault), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_6.current = null;
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_6.current = null;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_6.current = null;
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c4 = 3;
            throw tmp17;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  function removeIntegration() {
    function disableIntegration() {
      return obj(...arguments);
    }
    if (ref.current == null) {
      ref.current = disableIntegration();
    }
    return ref.current;
  }
  obj = function _remove() {
    obj = _asyncToGenerator(async function(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c2;
        try {
          let closure_0;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_1 = tmp;
              closure_0 = undefined;
              _undefined(null);
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: removeIntegration(), done: false };
              return obj4;
            }
          } else if (1 === c3) {
            c2 = 0;
            const intl = closure_0(c2[9]).intl;
            closure_0 = intl.string(closure_0(c2[9]).t.A4Mnst);
            closure_129_5(closure_0);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(closure_0);
            throw error;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp18) {
          if (0 === c2) {
            c4 = 3;
            throw tmp18;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = guildId;
  const tmp2 = application;
  obj = guildId(application[5]);
  const items = [ref];
  const items1 = [application.id];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.isHydrated(application.id), items1);
  [first, _slicedToArray] = react.useState(false);
  const items2 = [application.id, stateFromStores];
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_0 = tmp;
                id = 1;
                c1 = 2;
                c3 = 1;
                const obj5 = { value: obj2.fetchApplication(id.id), done: false };
                obj2 = closure_2_0(application[6]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                id = 0;
                closure_1_4(true);
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                id = 0;
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                id = 0;
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp11) {
            if (0 === id) {
              c3 = 3;
              throw tmp11;
            } else {
              c1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = stateFromStores;
    if (!tmp) {
      load();
    }
  }, items2);
  let obj2 = guildId(application[7]);
  const conjureServerApp = obj2.useConjureServerApp(guildId, application.id);
  [tmp9, c5] = _slicedToArray(react.useState(null), 2);
  const tmp8 = _slicedToArray(react.useState(null), 2);
  ref = react.useRef(null);
  if (null != conjureServerApp) {
    let obj3 = { app: conjureServerApp, applicationId: application.id, onPlainConfirm: removeIntegration };
    return obj(tmp(tmp2[10]).ConjureRemoveBotAlert, obj3);
  } else {
    const tmp11 = obj;
    let obj4 = { title: intl.formatToPlainString(tmp(tmp2[9]).t["rL9d/1"], obj5), content: intl2.format(tmp(tmp2[9]).t.FGE8ya, obj6), extraContent: tmp11Result, actions: obj(removeIntegration, obj9) };
    const AlertModal = tmp(tmp2[11]).AlertModal;
    intl = tmp(tmp2[9]).intl;
    obj5 = { applicationName: application.name };
    intl2 = tmp(tmp2[9]).intl;
    tmp11Result = undefined;
    obj6 = { applicationName: application.name };
    if (null != tmp9) {
      const obj7 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp9 };
      tmp11Result = tmp11(tmp(tmp2[12]).Text, obj7);
    }
    const obj8 = {
      variant: "destructive",
      text: intl3.string(tmp(tmp2[9]).t.ebGf4m),
      disabled: !stateFromStores && !first,
      loading: tmp15,
      onPress: function remove() {
          return obj(...arguments);
        }
    };
    const AlertActionButton = tmp(tmp2[11]).AlertActionButton;
    intl3 = tmp(tmp2[9]).intl;
    obj9 = { children: items3 };
    tmp15 = !stateFromStores && !first || undefined;
    items3 = [tmp11(AlertActionButton, obj8), ];
    const obj10 = { variant: "secondary", text: intl4.string(tmp(tmp2[9]).t["ETE/oC"]) };
    const AlertActionButton2 = tmp(tmp2[11]).AlertActionButton;
    intl4 = tmp(tmp2[9]).intl;
    items3[1] = tmp11(AlertActionButton2, obj10);
    return tmp11(AlertModal, obj4);
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/openGuildSettingsRemoveAppAlert.tsx");

export default function openGuildSettingsRemoveAppAlert(arg0) {
  const openAlert = useAlertStore.openAlert;
  const obj = {};
  useAlertStore;
  const merged = Object.assign(arg0);
  openAlert("GuildSettingsRemoveApp", metroImportDefault(RemoveAppAlert, obj));
};
