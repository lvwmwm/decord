// Module ID: 11772
// Function ID: 11773
// Name: conjureHistoryRequests
// Dependencies: [5, 10748, 10741, 11773, 10745, 2]
// Exports: createDatabaseRestorePoint, fetchDatabaseRestorePoints, fetchDatabaseRestoreWindow, fetchSourceHistory, restoreDatabaseToPoint, restoreDatabaseToTimestamp, restoreSourceHistoryEntry

// Module 11772 (conjureHistoryRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6;

function fetchVersionHistory() {
  return obj(...arguments);
}
let obj = function _fetchVersionHistory() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj8;
    let previewSha;
    let publishedSha;
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_4;
        let closure_5;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = ConjureWorkerTickets;
            return obj4;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            ticket = closure_0.ticket;
            baseUrl = closure_0.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c2 = 2;
            c3 = 1;
            const obj7 = { value: fetch("" + baseUrl + "/agent/source-history?" + uRLSearchParams), done: false };
            return obj7;
          }
        } else if (2 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_4 = value;
            if (closure_4.ok) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: closure_4.json(), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("version history failed (" + closure_4.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          let entries;
          closure_5 = value;
          const _Array = Array;
          if (Array.isArray(closure_5.entries)) {
            entries = closure_5.entries;
          } else {
            entries = [];
          }
          obj = { entries, previewSha, publishedSha };
          previewSha = null;
          if (typeof closure_5.previewSha === "string") {
            previewSha = closure_5.previewSha;
          }
          publishedSha = null;
          if (typeof closure_5.publishedSha === "string") {
            publishedSha = closure_5.publishedSha;
          }
          c3 = 3;
          const obj12 = { value: obj, done: true };
          return obj12;
        }
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchSourceHistory() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    await fetchVersionHistory(closure_0);
    return arg1.entries;
  });
  return obj(...arguments);
};
obj = function _restoreSourceHistoryEntry() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_2;
    let obj11;
    let closure_0 = arg0;
    let closure_1 = value;
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
      try {
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_6;
        let closure_7;
        let closure_8;
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
            let closure_3 = tmp4;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            closure_8 = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj11.mintWorkerTicket(closure_0), done: false };
            obj11 = ConjureWorkerTickets;
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            tmp = value;
            ticket = tmp.ticket;
            baseUrl = tmp.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj7 = { ticket };
            const self5 = this;
            const self6 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal3 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + baseUrl + "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
            return obj8;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_6 = value;
            if (closure_6.ok) {
              c4 = 4;
              c5 = 1;
              const obj10 = { value: closure_6.json(), done: false };
              return obj10;
            } else {
              c4 = 3;
              c5 = 1;
              const obj12 = { value: closure_6.text(), done: false };
              return obj12;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_7 = value.trim();
            let str3 = "";
            const _Error2 = Error;
            const status = closure_6.status;
            if ("" !== closure_7) {
              const _HermesInternal = HermesInternal;
              str3 = ": " + closure_7;
            }
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const _Error21 = new _Error2("version restore failed (" + status + ")" + str3);
            throw _Error21;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_8 = value;
          if (null == closure_8.entry) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("version restore returned no commit");
            throw error;
          } else {
            if (true !== closure_8.live) {
              obj = closure_131_0(closure_131_1[2]);
              const result = obj.refreshPublishedProject(closure_0, { isPreview: true });
              result.catch(() => {

              });
            }
            c5 = 3;
            const obj15 = { value: closure_8.entry, done: true };
            return obj15;
          }
        }
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestorePoints() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj7;
      if (c4 === 2) {
        c4 = 3;
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
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
          let closure_6;
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
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore points failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            let restorePoints;
            closure_6 = value;
            const _Array = Array;
            if (Array.isArray(closure_6.restorePoints)) {
              restorePoints = closure_6.restorePoints;
            } else {
              restorePoints = [];
            }
            c4 = 3;
            return { value: restorePoints, done: true };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestoreWindow() {
  obj = _asyncToGenerator(async (environment, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj7;
      if (c4 === 2) {
        c4 = 3;
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
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_5;
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
              environment = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_5 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(environment), done: false };
              obj7 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, environment };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              c3 = 2;
              c4 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-window?" + uRLSearchParams), done: false };
              return obj8;
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (closure_5.ok) {
                c3 = 3;
                c4 = 1;
                const obj10 = { value: closure_5.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore window failed (" + closure_5.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            c4 = 3;
            return { value, done: true };
          }
        } catch (tmp14) {
          c4 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createDatabaseRestorePoint() {
  obj = _asyncToGenerator(async (environment, label, arg2) => {
    let closure_2 = arg2;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value, arg2) {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
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
          let ticket;
          let closure_6;
          let closure_7;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              environment = label;
              label = closure_2;
              closure_2 = undefined;
              ticket = undefined;
              let baseUrl;
              let uRLSearchParams;
              closure_6 = undefined;
              closure_7 = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj9.mintWorkerTicket(environment), done: false };
              obj9 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self5 = this;
              const self6 = this;
              const obj6 = { ticket };
              uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal2 = HermesInternal;
              const _fetch = fetch;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: null };
              if (null != label) {
                let obj10;
                if ("" !== label.trim()) {
                  obj10 = { environment, label };
                  const obj7 = { environment, label };
                }
                request.body = tmp49(obj10);
                c4 = 2;
                c5 = 1;
                const obj8 = { value: _fetch(tmp47, request), done: false };
                return obj8;
              }
              obj10 = { environment };
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_6 = value;
              if (closure_6.ok) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_6.json(), done: false };
                return obj12;
              } else {
                const _Error2 = Error;
                const _HermesInternal = HermesInternal;
                const self3 = this;
                const self4 = this;
                const error = new Error("restore point create failed (" + closure_6.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_7 = value;
            if (null == closure_7.restorePoint) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error1 = new Error("restore point create returned nothing");
              throw error1;
            } else {
              c5 = 3;
              return { value: closure_7.restorePoint, done: true };
            }
          }
        } catch (tmp30) {
          c5 = 3;
          throw tmp30;
        }
      }
    })();
  });
  return obj(...arguments);
};
function settleDatabaseRestore() {
  return obj(...arguments);
}
obj = function _settleDatabaseRestore() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let str;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_2 = tmp4;
            str = undefined;
            value = undefined;
            if (closure_1.ok) {
              str = "";
              if (202 !== closure_1.status) {
                const obj3 = closure_131_0(closure_131_1[3]);
                value = obj3.databaseRestoreResultFromStatus(closure_1.status, str);
                if (value.ok) {
                  const obj4 = closure_131_0(closure_131_1[4]);
                  const result = obj4.reloadConjureProjectFrames(closure_0);
                  c5 = 0;
                }
              }
            }
            c6 = 1;
            c7 = 1;
            const obj6 = { value: closure_1.text(), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            str = value.trim();
          }
        } else {
          c5 = 0;
        }
        c7 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp20) {
        let closure_4 = tmp20;
        if (0 === c5) {
          c7 = 3;
          throw tmp20;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToPoint() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj5;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
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
      try {
        let closure_2;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            let closure_5 = tmp;
            closure_2 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c6 = 1;
            c7 = 1;
            const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
            obj5 = ConjureWorkerTickets;
            return obj4;
          }
        } else {
          let closure_3;
          if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              ticket = closure_2.ticket;
              baseUrl = closure_2.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              closure_3 = closure_132_10;
              closure_2 = closure_0;
              const _fetch = fetch;
              const _encodeURIComponent = encodeURIComponent;
              const _HermesInternal = HermesInternal;
              c6 = 2;
              c7 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/database/restore-points/" + encodeURIComponent(closure_1) + "/restore?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c7 = 3;
            obj = { value: closure_3(closure_2, value), done: true };
            return obj;
          }
        }
      } catch (tmp11) {
        c7 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToTimestamp() {
  obj = _asyncToGenerator(async (arg0, environment, timestampMs) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    return (async function(arg0, value, arg2) {
      let obj5;
      let obj8;
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
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp4;
              closure_6 = tmp;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c7 = 1;
              c8 = 1;
              const obj4 = { value: obj5.mintWorkerTicket(closure_0), done: false };
              obj5 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self = this;
              const self2 = this;
              const obj7 = { ticket };
              uRLSearchParams = new URLSearchParams(obj7);
              closure_4 = closure_133_10;
              closure_3 = closure_0;
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { environment, timestampMs };
              const combined = "" + baseUrl + "/agent/database/restore?" + uRLSearchParams;
              c7 = 2;
              c8 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            c8 = 3;
            obj = { value: closure_4(closure_3, value), done: true };
            return obj;
          }
        } catch (tmp12) {
          c8 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRequests.tsx");

export { fetchVersionHistory };
export const fetchSourceHistory = function fetchSourceHistory() {
  return obj(...arguments);
};
export const restoreSourceHistoryEntry = function restoreSourceHistoryEntry() {
  return obj(...arguments);
};
export const fetchDatabaseRestorePoints = function fetchDatabaseRestorePoints() {
  return obj(...arguments);
};
export const fetchDatabaseRestoreWindow = function fetchDatabaseRestoreWindow() {
  return obj(...arguments);
};
export const createDatabaseRestorePoint = function createDatabaseRestorePoint() {
  return obj(...arguments);
};
export const restoreDatabaseToPoint = function restoreDatabaseToPoint() {
  return obj(...arguments);
};
export const restoreDatabaseToTimestamp = function restoreDatabaseToTimestamp() {
  return obj(...arguments);
};
