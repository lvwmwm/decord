// Module ID: 11633
// Function ID: 11634
// Name: conjureAttachmentRequests
// Dependencies: [5, 11077, 11076, 2]
// Exports: deleteStagedAttachment, importAttachmentFromUrl, isAttachmentAvailable, listStoredAttachments, uploadAttachment

// Module 11633 (conjureAttachmentRequests)
import conjureWorkerFetch from "conjureWorkerFetch" /* 11077 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _listStoredAttachments() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj5;
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
            c2 = 1;
            c3 = 1;
            const obj4 = { value: obj5.fetchConjureWorker(closure_0, attachmentPath()), done: false };
            obj5 = conjureWorkerFetch;
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
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
              const error = new Error("attachment list failed (" + closure_0.status + ")");
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
          c3 = 3;
          obj = { value: value.attachments, done: true };
          return obj;
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
obj = function _importAttachmentFromUrl() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_1;
    let obj5;
    let obj8;
    let closure_0 = arg0;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = undefined;
            value = undefined;
            const obj4 = { method: "POST", json: obj5 };
            obj5 = { url: value };
            c3 = 1;
            c4 = 1;
            const obj6 = { value: obj8.fetchConjureWorker(closure_0, attachmentPath("from-url"), obj4), done: false };
            obj8 = conjureWorkerFetch;
            return obj6;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            const data = closure_0.json();
            c3 = 2;
            c4 = 1;
            const obj9 = { value: data.catch(() => null), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          if (closure_0.ok) {
            if (null != value) {
              if ("id" in value) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
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
      } catch (tmp24) {
        c4 = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
function uploadAttachmentBytes() {
  return obj(...arguments);
}
obj = function _uploadAttachmentBytes() {
  obj = _asyncToGenerator(async (arg0, arg1, name, arg3) => {
    let closure_4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let c5 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2, arg3) {
      let obj4;
      let obj5;
      let tmp18;
      const fetchConjureWorker = conjureWorkerFetch.fetchConjureWorker;
      const request = { method: "POST", query: obj4, headers: obj5, body: tmp18 };
      let str3 = "application/octet-stream";
      obj4 = { name };
      conjureWorkerFetch;
      const tmp17 = closure_0;
      tmp18 = closure_1;
      const tmp20 = closure_3;
      const tmp25 = attachmentPath();
      if ("" !== closure_3) {
        str3 = tmp20;
      }
      obj5 = { "content-type": str3 };
      closure_0 = await fetchConjureWorker(tmp17, tmp25, request);
      if (!closure_0.ok) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("attachment upload failed (" + closure_0.status + ")");
        throw error;
      }
      await closure_0.json();
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _deleteStagedAttachment() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = value;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj2.fetchConjureWorker(closure_0, attachmentPath(closure_1), { method: "DELETE", keepalive: true }), done: false };
            obj2 = conjureWorkerFetch;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          if (closure_0.ok) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("attachment cleanup failed (" + closure_0.status + ")");
            throw error;
          }
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
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
            return { value: "test", done: true };
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
          const tmp34 = flag;
          if (tmp34) {
            const result = uRLSearchParams.set("download", "1");
          }
          const _HermesInternal = HermesInternal;
          c6 = 3;
          obj = { value: "" + baseUrl + closure_132_11(closure_1) + "?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp22) {
        c6 = 3;
        throw tmp22;
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
                yield closure_1_8(closure_2_0, closure_2_1);
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
function attachmentPath(arg0) {
  let str = "/agent/attachments";
  if (null != arg0) {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    str = "/agent/attachments/" + encodeURIComponent(arg0);
  }
  return str;
}
let result = size.fileFinishedImporting("modules/conjure/chat/conjureAttachmentRequests.tsx");

export const uploadAttachment = function uploadAttachment(arg0, name) {
  return uploadAttachmentBytes(arg0, name, name.name, name.type);
};
export const listStoredAttachments = function listStoredAttachments() {
  return obj(...arguments);
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
