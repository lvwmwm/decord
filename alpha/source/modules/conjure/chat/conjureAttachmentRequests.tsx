// Module ID: 11295
// Function ID: 11296
// Name: conjureAttachmentRequests
// Dependencies: [5, 10748, 10747, 2]
// Exports: deleteStagedAttachment, importAttachmentFromUrl, isAttachmentAvailable, uploadAttachment

// Module 11295 (conjureAttachmentRequests)
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10748 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let body, url;

let obj = function _importAttachmentFromUrl() {
  obj = _asyncToGenerator(async (url, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj7;
      let obj8;
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
          let baseUrl;
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              url = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              closure_4 = undefined;
              value = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: obj7.mintWorkerTicket(url), done: false };
              obj7 = ConjureWorkerTickets;
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
              closure_1 = value;
              ticket = closure_1.ticket;
              baseUrl = closure_1.baseUrl;
              const _fetch = fetch;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket };
              const tmp43 = closure_131_10(baseUrl, "from-url");
              const uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal = HermesInternal;
              const request = { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(obj8) };
              const _JSON = JSON;
              obj8 = { url };
              const combined = "" + tmp43 + "?" + uRLSearchParams;
              c4 = 2;
              c5 = 1;
              const obj9 = { value: fetch(combined, request), done: false };
              return obj9;
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_4 = value;
              const data = closure_4.json();
              c4 = 3;
              c5 = 1;
              const obj11 = { value: data.catch(() => null), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            if (closure_4.ok) {
              if (null != value) {
                if ("id" in value) {
                  c5 = 3;
                  return { value, done: true };
                }
              }
            }
            let str3 = "";
            const _Error = Error;
            if (null != value) {
              str3 = "";
              if ("error" in value) {
                str3 = "";
                if (typeof value.error === "string") {
                  str3 = value.error;
                }
              }
            }
            const self = this;
            const self2 = this;
            const _Error1 = new _Error(str3);
            throw _Error1;
          }
        } catch (tmp28) {
          c5 = 3;
          throw tmp28;
        }
      }
    })();
  });
  return obj(...arguments);
};
function uploadAttachmentBytes() {
  return obj(...arguments);
}
obj = function _uploadAttachmentBytes() {
  obj = _asyncToGenerator(async (body, name, arg2, arg3) => {
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let obj13;
      let obj7;
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
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          let closure_7;
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
              body = name;
              name = closure_2;
              closure_2 = closure_3;
              closure_3 = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              closure_7 = undefined;
              c6 = 1;
              c7 = 1;
              const obj4 = { value: obj13.mintWorkerTicket(body), done: false };
              obj13 = ConjureWorkerTickets;
              return obj4;
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = value;
              ticket = closure_3.ticket;
              baseUrl = closure_3.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const obj6 = { ticket, name };
              uRLSearchParams = new URLSearchParams(obj6);
              const _fetch = fetch;
              const _HermesInternal2 = HermesInternal;
              let str3 = "application/octet-stream";
              const combined = "" + closure_133_10(baseUrl) + "?" + uRLSearchParams;
              if ("" !== closure_2) {
                str3 = closure_2;
              }
              const request = { method: "POST", headers: obj7, body };
              c6 = 2;
              c7 = 1;
              obj7 = { "content-type": str3 };
              const obj8 = { value: _fetch(combined, request), done: false };
              return obj8;
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_7 = value;
              if (closure_7.ok) {
                c6 = 3;
                c7 = 1;
                const obj10 = { value: closure_7.json(), done: false };
                return obj10;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("attachment upload failed (" + closure_7.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp13) {
          c7 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteStagedAttachment() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj4;
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
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
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
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: obj4.mintWorkerTicket(closure_0), done: false };
            obj4 = ConjureWorkerTickets;
            return obj5;
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
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj7 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj7);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            c4 = 2;
            c5 = 1;
            const obj8 = { value: fetch("" + closure_131_10(baseUrl, closure_0) + "?" + uRLSearchParams, { method: "DELETE", keepalive: true }), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = value;
          if (closure_5.ok) {
            c5 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("attachment cleanup failed (" + closure_5.status + ")");
            throw error;
          }
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
function getAttachmentUrl() {
  return obj(...arguments);
}
obj = function _getAttachmentUrl() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_3;
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
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
        let flag;
        let tmp;
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp4;
            flag = undefined;
            let obj5 = closure_2;
            if (closure_2 === undefined) {
              obj5 = {};
            }
            flag = obj5.download ?? false;
            tmp = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 2;
            c6 = 1;
            const obj7 = { value: obj3.getMediaTicket(closure_0), done: false };
            obj3 = closure_132_0(closure_132_1[2]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          tmp = value;
          ticket = tmp.ticket;
          baseUrl = tmp.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj9 = { ticket };
          const self = this;
          const self2 = this;
          uRLSearchParams = new URLSearchParams(obj9);
          const tmp33 = flag;
          if (tmp33) {
            const result = uRLSearchParams.set("download", "1");
          }
          const _HermesInternal = HermesInternal;
          c6 = 3;
          obj = { value: "" + closure_132_10(baseUrl, closure_1) + "?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp21) {
        c6 = 3;
        throw tmp21;
      }
    }
  });
  return obj(...arguments);
};
obj = function _isAttachmentAvailable() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_4;
        let probe;
        c5 = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_4 = undefined;
            probe = function probe() {
              return closure_1_3(...arguments);
            };
            obj = function _probe() {
              obj = closure_2_2(function*() {
                let c1;
                let c2;
                const _fetch = fetch;
                yield closure_1_7(closure_2_0, closure_2_1);
                return fetch(arg1, { method: "HEAD" });
              });
              return obj(...arguments);
            };
            c4 = 1;
            c5 = 1;
            const obj5 = { value: probe(), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_4 = value;
              if (401 === closure_4.status) {
                const obj2 = closure_131_0(closure_131_1[2]);
                obj2.retireMediaTicket(closure_0);
                c4 = 2;
                c5 = 1;
                const obj7 = { value: probe(), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = value;
          }
          if (404 === closure_4.status) {
            c5 = 3;
            return { value: false, done: true };
          } else if (closure_4.ok) {
            c5 = 3;
            return { value: true, done: true };
          } else {
            const tmp11 = globalThis;
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const str = ")";
            const self = this;
            const self2 = this;
            const error = new Error("attachment availability check failed (" + closure_4.status + ")");
            throw error;
          }
        }
      } catch (tmp24) {
        c5 = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
function attachmentEndpoint(arg0, arg1) {
  let combined;
  if (null == arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + arg0 + "/agent/attachments";
  } else {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + "/agent/attachments/" + encodeURIComponent(arg1);
  }
  return combined;
}
let result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentRequests.tsx");

export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const importAttachmentFromUrl = function importAttachmentFromUrl() {
  return obj(...arguments);
};
export { uploadAttachmentBytes };
export const deleteStagedAttachment = function deleteStagedAttachment() {
  return obj(...arguments);
};
export { getAttachmentUrl };
export const isAttachmentAvailable = function isAttachmentAvailable() {
  return obj(...arguments);
};
