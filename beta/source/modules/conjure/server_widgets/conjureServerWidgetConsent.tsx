// Module ID: 15222
// Function ID: 15223
// Name: conjureServerWidgetConsent
// Dependencies: [5, 12582, 6932, 15223, 7886, 12581, 12584, 1113, 4026, 1242, 12411, 9017, 5807, 1378, 2]
// Exports: getConjureServerWidgetConsentRequest

// Module 15222 (conjureServerWidgetConsent)
import URLUtilsDefault from "URLUtils" /* 1378 */;
import WidgetActionCreatorsDefault from "WidgetActionCreators" /* 12584 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import WidgetStore from "WidgetStore" /* 12582 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c8, c9, closure_6, project_id;

let obj = function _exchangeConsentCode() {
  obj = _asyncToGenerator(async (project_id, code) => {
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj4;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              project_id = undefined;
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj4) };
              const _JSON = JSON;
              obj4 = { project_id, code };
              const obj5 = require("conjureWorkerOrigin");
              const combined = "" + obj5.getConjureWorkerOrigin() + "/agent/widget-consent";
              c3 = 1;
              c4 = 1;
              const obj6 = { value: fetch(combined, request), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            project_id = value;
            if (project_id.ok) {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("widget consent failed (" + project_id.status + ")");
              throw error;
            }
          }
        } catch (tmp12) {
          c4 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _addWidget() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c2 = 0;
    let c1 = 0;
    return (async function(arg0, value) {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const self2 = this;
              const self = this;
              const obj4 = { applicationId };
              const applicationWidget = new require("UserProfileApplicationWidgetTypes").ApplicationWidget(obj4);
              const hasPendingChangesResult = WidgetStore.hasPendingChanges();
              const obj6 = require("WidgetUtils");
              if (hasPendingChangesResult) {
                obj6.addWidgetToPending(applicationWidget);
              } else {
                const savedWidgets = obj6.getSavedWidgets();
                const found = savedWidgets.filter((getUniqueKey) => {
                  const uniqueKey = getUniqueKey.getUniqueKey();
                  return uniqueKey !== applicationWidget.getUniqueKey();
                });
                const items = [applicationWidget];
                const savePendingWidgets = require("WidgetActionCreators").savePendingWidgets;
                WidgetActionCreatorsDefault;
                HermesBuiltin.arraySpread(items, found, 1);
                c2 = 1;
                c1 = 1;
                const obj5 = { value: savePendingWidgets(items), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          c1 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _exchangeAndAdd() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    let c3;
    let c4;
    let intl;
    function exchangeConsentCode() {
      return closure_1_6(...arguments);
    }
    function addWidget() {
      return closure_1_8(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c7;
      try {
        let closure_5;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_5 = tmp;
            c3 = undefined;
            c4 = undefined;
            ({ onTurnedOn: c3, showToast: c4 } = closure_3);
            c8 = 1;
            c9 = 1;
            return { value: "flexDirection", done: true };
          }
        } else {
          let result;
          if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c7 = 1;
              result = exchangeConsentCode(closure_0, closure_2);
              c8 = 4;
              c9 = 1;
              const obj7 = { value: result, done: false };
              return obj7;
            }
          } else if (2 === c8) {
            c7 = 0;
            result = c4;
            const obj8 = { text: intl.string(closure_133_1(closure_133_2[8]).to9Sp4), variant: "critical" };
            intl = closure_133_0(closure_133_2[7]).intl;
            c4(obj8);
            c9 = 3;
            const obj9 = { value: undefined, done: true };
            return obj9;
          } else {
            if (3 === c8) {
              c7 = 0;
              closure_5 = closure_6;
              const obj5 = closure_133_1(closure_133_2[9]);
              obj5.captureException(closure_5);
            } else if (4 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                result = addWidget(closure_1);
                c8 = 5;
                c9 = 1;
                const obj11 = { value: result, done: false };
                return obj11;
              }
            } else if (5 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                c7 = 2;
                if (c3 != null) {
                  c3();
                }
                c7 = 0;
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c9 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj6 = closure_133_0(closure_133_2[10]);
            result = obj6.refreshApplicationWidget(closure_1);
            c8 = 6;
            c9 = 1;
            const obj13 = { value: result, done: false };
            return obj13;
          }
        }
      } catch (tmp37) {
        closure_6 = tmp37;
        if (0 === c7) {
          c9 = 3;
          throw tmp37;
        } else if (1 === tmp39) {
          c8 = 2;
        } else {
          c8 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _finishTurnOn() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3) => {
    function exchangeAndAdd() {
      return closure_1_9(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c7;
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp;
            let closure_4 = tmp4;
            closure_0 = closure_1;
            if (!set.has(closure_1)) {
              set.add(closure_1);
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: exchangeAndAdd(closure_0, closure_1, closure_2, closure_3), done: false };
              return obj4;
            }
          }
        } else if (1 === c8) {
          c7 = 0;
          closure_133_7.delete(closure_0);
          throw closure_6;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          closure_133_7.delete(closure_0);
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c7 = 0;
          closure_133_7.delete(closure_0);
        }
        c9 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp28) {
        closure_6 = tmp28;
        if (0 === c7) {
          c9 = 3;
          throw tmp28;
        } else {
          c8 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/server_widgets/conjureServerWidgetConsent.tsx");

export function getConjureServerWidgetConsentRequest(clientId, arg1) {
  let items;
  _require = clientId;
  let closure_1 = arg1;
  const result = ConjureProjectStore.findProjectByApplicationId(clientId);
  let id;
  if (result != null) {
    id = result.id;
  }
  let tmp3 = null;
  if (null != id) {
    obj = {
      clientId,
      scopes: items,
      responseType: "code",
      redirectUri: "https://127.0.0.1",
      integrationType: require("ApplicationIntegrationType").ApplicationIntegrationType.GUILD_INSTALL,
      callback(location) {
          function finishTurnOn() {
            return closure_1_10(...arguments);
          }
          let str = location.location;
          const toURLSafe = URLUtilsDefault.toURLSafe;
          URLUtilsDefault;
          if (str == null) {
            str = "";
          }
          const toURLSafeResult = toURLSafe(str);
          let value;
          if (toURLSafeResult != null) {
            const searchParams = toURLSafeResult.searchParams;
            value = searchParams.get("code");
          }
          if (null != value) {
            finishTurnOn(id, clientId, value, closure_1);
          }
          return true;
        }
    };
    items = [require("OAuth2Scopes").OAuth2Scopes.IDENTIFY, require("OAuth2Scopes").OAuth2Scopes.APPLICATION_IDENTITIES_WRITE];
    tmp3 = obj;
  }
  return tmp3;
}
