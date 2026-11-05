// Module ID: 11113
// Function ID: 11114
// Name: conjurePreviewGameCapture
// Dependencies: [5, 6982, 11114, 11115, 11116, 1490, 2]
// Exports: hasConjurePreviewGameCapture, readConjurePreviewGameCapture

// Module 11113 (conjurePreviewGameCapture)
import conjureMediaTickets from "conjureMediaTickets" /* 11116 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6982 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11114 */;
import ConjureGameCapturesStore from "ConjureGameCapturesStore" /* 11115 */;
import size_mod from "module_2" /* 2 */;

let c2, c4, c6;

function getGameCaptureUrl() {
  return obj(...arguments);
}
let obj = function _getGameCaptureUrl() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
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
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getMediaTicket(closure_0), done: false };
            obj3 = conjureMediaTickets;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = value;
          ticket = closure_1.ticket;
          baseUrl = closure_1.baseUrl;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket, v: closure_0.image_etag };
          const self = this;
          const self2 = this;
          uRLSearchParams = new URLSearchParams(obj7);
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          c4 = 3;
          obj = { value: "" + baseUrl + "/agent/game-captures/" + encodeURIComponent(closure_0.id) + "?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp9) {
        c4 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchGameCapture() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c7;
    let c8;
    let closure_4;
    let closure_5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const _fetch = fetch;
    await getGameCaptureUrl(closure_0, closure_1);
    closure_0 = await fetch(arg1, { cache: "no-store" });
    if (!closure_0.ok) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("game capture fetch failed (" + closure_0.status + ")");
      throw error;
    }
    const tmp14 = closure_132_0(closure_132_1[5]);
    let closure_3 = tmp14;
    const readFileAsBase64 = tmp14.readFileAsBase64;
    await closure_0.blob();
    return readFileAsBase64(arg1);
  });
  return obj(...arguments);
};
obj = function _loadGameCapture() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function fetchGameCapture() {
      return closure_1_9(...arguments);
    }
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let combined;
        let get;
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
            let closure_3 = tmp;
            closure_1 = undefined;
            const _HermesInternal = HermesInternal;
            combined = "" + closure_0 + ":" + closure_1.id + ":" + closure_1.image_etag;
            value = map.get(combined);
            const tmp30 = closure_1;
            closure_1 = value;
            let tmp20 = value;
            const tmp29 = closure_0;
            if (null == value) {
              const tmp18 = fetchGameCapture(tmp29, tmp30);
              closure_1 = tmp18;
              get = map.set(combined, tmp18);
              tmp20 = tmp18;
            }
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj4 = { value: tmp20, done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c5 = 0;
          let closure_2 = closure_4;
          get = closure_131_8.get;
          if (get(combined) === closure_1) {
            get = closure_131_8;
            closure_131_8.delete(combined);
          }
          throw closure_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_4 = tmp21;
        if (0 === c5) {
          c7 = 3;
          throw tmp21;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function selectedGameCapture(applicationId) {
  if (ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== applicationId) {
    return null;
  } else {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    if (null != result) {
      if (result.preview_application_id === applicationId) {
        const selectedCapture = ConjureGameCapturesStore.getSelectedCapture(result.id);
        let tmp6 = null;
        if (null != selectedCapture) {
          tmp6 = { projectId: result.id, capture: selectedCapture };
          obj = { projectId: result.id, capture: selectedCapture };
        }
        return tmp6;
      }
    }
    return null;
  }
}
obj = function _readConjurePreviewGameCapture() {
  obj = _asyncToGenerator(async (arg0, value) => {
    function loadGameCapture() {
      return closure_1_10(...arguments);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let capture;
        let image;
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            capture = undefined;
            image = undefined;
            const tmp16 = selectedGameCapture(closure_0);
            if (null == tmp16) {
              c4 = 3;
              const obj3 = { value: { status: "capture_failed" }, done: true };
              return obj3;
            } else {
              capture = tmp16.capture;
              c3 = 1;
              c2 = 2;
              c4 = 1;
              const obj4 = { value: loadGameCapture(tmp16.projectId, capture), done: false };
              return obj4;
            }
          }
        } else if (1 === c2) {
          c3 = 0;
          c4 = 3;
          const obj5 = { value: { status: "capture_failed" }, done: true };
          return obj5;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          image = value;
          size = { status: "ok", image, width: capture.width, height: capture.height };
          c3 = 0;
          c4 = 3;
          const obj7 = { value: size, done: true };
          return obj7;
        }
      } catch (tmp8) {
        if (0 === c3) {
          c4 = 3;
          throw tmp8;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const map = new Map();
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewGameCapture.tsx");

export { getGameCaptureUrl };
export function hasConjurePreviewGameCapture(applicationId) {
  let tmp = null;
  if (ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() === applicationId) {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    tmp = null;
    if (null != result) {
      tmp = null;
      if (result.preview_application_id === applicationId) {
        const selectedCapture = ConjureGameCapturesStore.getSelectedCapture(result.id);
        let tmp6 = null;
        if (null != selectedCapture) {
          tmp6 = { projectId: result.id, capture: selectedCapture };
          obj = { projectId: result.id, capture: selectedCapture };
        }
        tmp = tmp6;
      }
    }
  }
  return null != tmp;
}
export function readConjurePreviewGameCapture() {
  return obj(...arguments);
}
