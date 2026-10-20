// Module ID: 12135
// Function ID: 12136
// Name: conjureHistoryRequests
// Dependencies: [5, 11089, 11083, 12136, 11043, 2]
// Exports: createDatabaseRestorePoint, fetchDatabaseRestorePoints, fetchDatabaseRestoreWindow, fetchVersionHistory, restoreDatabaseToPoint, restoreDatabaseToTimestamp, restoreSourceHistoryEntry

// Module 12135 (conjureHistoryRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 11089 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c7, label;

let obj = function _fetchVersionHistory() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let obj6;
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
        let tmp;
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
            closure_0 = undefined;
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj6.fetchConjureWorker(closure_0, "/agent/source-history"), done: false };
            obj6 = conjureWorkerFetch;
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c2 = 2;
              c3 = 1;
              const obj7 = { value: closure_0.json(), done: false };
              return obj7;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("version history failed (" + closure_0.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let entries;
          tmp = value;
          const _Array = Array;
          if (Array.isArray(tmp.entries)) {
            entries = tmp.entries;
          } else {
            entries = [];
          }
          obj = { entries, previewSha, publishedSha };
          previewSha = null;
          if (typeof tmp.previewSha === "string") {
            previewSha = tmp.previewSha;
          }
          publishedSha = null;
          if (typeof tmp.publishedSha === "string") {
            publishedSha = tmp.publishedSha;
          }
          c3 = 3;
          const obj9 = { value: obj, done: true };
          return obj9;
        }
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreSourceHistoryEntry() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj12;
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
        let closure_2;
        let closure_3;
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
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal3 = HermesInternal;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj12.fetchConjureWorker(closure_0, "/agent/source-history/" + encodeURIComponent(closure_1) + "/restore", { method: "POST" }), done: false };
            obj12 = conjureWorkerFetch;
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
            closure_1 = value;
            if (closure_1.ok) {
              c4 = 3;
              c5 = 1;
              const obj7 = { value: closure_1.json(), done: false };
              return obj7;
            } else {
              c4 = 2;
              c5 = 1;
              const obj8 = { value: closure_1.text(), done: false };
              return obj8;
            }
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
            closure_2 = value.trim();
            let str3 = "";
            const _Error2 = Error;
            const status = closure_1.status;
            if ("" !== closure_2) {
              const _HermesInternal = HermesInternal;
              str3 = ": " + closure_2;
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
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_3 = value;
          if (null == closure_3.entry) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("version restore returned no commit");
            throw error;
          } else {
            if (true !== closure_3.live) {
              obj = closure_131_0(closure_131_1[2]);
              const result = obj.refreshPublishedProject(closure_0, { isPreview: true });
              result.catch(() => {

              });
            }
            c5 = 3;
            const obj11 = { value: closure_3.entry, done: true };
            return obj11;
          }
        }
      } catch (tmp23) {
        c5 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchDatabaseRestorePoints() {
  obj = _asyncToGenerator(async (arg0, environment) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj5;
      let obj6;
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
              closure_0 = undefined;
              environment = undefined;
              const obj4 = { query: obj6 };
              c3 = 1;
              c4 = 1;
              obj6 = { environment };
              const obj7 = { value: obj5.fetchConjureWorker(closure_0, "/agent/database/restore-points", obj4), done: false };
              obj5 = conjureWorkerFetch;
              return obj7;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_0 = value;
              if (closure_0.ok) {
                c3 = 2;
                c4 = 1;
                const obj9 = { value: closure_0.json(), done: false };
                return obj9;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore points failed (" + closure_0.status + ")");
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
            environment = value;
            const _Array = Array;
            if (Array.isArray(environment.restorePoints)) {
              restorePoints = environment.restorePoints;
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
  obj = _asyncToGenerator(async (arg0, environment) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj5;
      let obj6;
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
              closure_0 = undefined;
              const obj4 = { query: obj6 };
              c3 = 1;
              c4 = 1;
              obj6 = { environment };
              const obj7 = { value: obj5.fetchConjureWorker(closure_0, "/agent/database/restore-window", obj4), done: false };
              obj5 = conjureWorkerFetch;
              return obj7;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_0 = value;
              if (closure_0.ok) {
                c3 = 2;
                c4 = 1;
                const obj9 = { value: closure_0.json(), done: false };
                return obj9;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("restore window failed (" + closure_0.status + ")");
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
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    environment = value;
    label = arg2;
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
            closure_0 = undefined;
            environment = undefined;
            conjureWorkerFetch;
            const tmp25 = closure_0;
            if (null != label) {
              let obj7;
              if ("" !== label.trim()) {
                const obj4 = { environment, label };
                obj7 = obj4;
              }
              const obj5 = { method: "POST", json: obj7 };
              c4 = 1;
              c5 = 1;
              const obj6 = { value: tmp30(tmp25, "/agent/database/restore-points", obj5), done: false };
              return obj6;
            }
            obj7 = { environment };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_0 = value;
            if (closure_0.ok) {
              c4 = 2;
              c5 = 1;
              const obj9 = { value: closure_0.json(), done: false };
              return obj9;
            } else {
              const _Error2 = Error;
              const _HermesInternal = HermesInternal;
              const self3 = this;
              const self4 = this;
              const error = new Error("restore point create failed (" + closure_0.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          environment = value;
          if (null == environment.restorePoint) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error1 = new Error("restore point create returned nothing");
            throw error1;
          } else {
            c5 = 3;
            obj = { value: environment.restorePoint, done: true };
            return obj;
          }
        }
      } catch (tmp18) {
        c5 = 3;
        throw tmp18;
      }
    }
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
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        let closure_3;
        let closure_2;
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
            closure_3 = settleDatabaseRestore;
            closure_2 = closure_0;
            const _encodeURIComponent = encodeURIComponent;
            const _HermesInternal = HermesInternal;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: obj6.fetchConjureWorker(closure_0, "/agent/database/restore-points/" + encodeURIComponent(closure_1) + "/restore", { method: "POST" }), done: false };
            obj6 = conjureWorkerFetch;
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 3;
          obj = { value: closure_3(closure_2, value), done: true };
          return obj;
        }
      } catch (tmp6) {
        c5 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _restoreDatabaseToTimestamp() {
  obj = _asyncToGenerator(async (arg0, environment, timestampMs) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              closure_4 = settleDatabaseRestore;
              closure_3 = closure_0;
              const obj4 = { method: "POST", json: obj5 };
              c5 = 1;
              c6 = 1;
              obj5 = { environment, timestampMs };
              const obj7 = { value: obj6.fetchConjureWorker(closure_0, "/agent/database/restore", obj4), done: false };
              obj6 = conjureWorkerFetch;
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            c6 = 3;
            obj = { value: closure_4(closure_3, value), done: true };
            return obj;
          }
        } catch (tmp6) {
          c6 = 3;
          throw tmp6;
        }
      }
    })();
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/conjure/history/conjureHistoryRequests.tsx");

export const fetchVersionHistory = function fetchVersionHistory() {
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
