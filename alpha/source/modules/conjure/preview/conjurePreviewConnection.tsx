// Module ID: 10929
// Function ID: 10930
// Name: conjurePreviewConnection
// Dependencies: [5, 10930, 10974, 10955, 584, 10916, 10919, 10975, 10918, 10981, 10984, 10985, 2]
// Exports: getOverlayBackgroundUrl, getPreviewScreenshotUrl, resetOverlayBackground, sendOverlayBackgroundBlur, uploadOverlayBackground

// Module 10929 (conjurePreviewConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureChatConnection from "conjureChatConnection" /* 10916 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10918 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10919 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10930 */;
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 10955 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10974 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10975 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10981 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10984 */;
import conjurePreviewModeRequests from "conjurePreviewModeRequests" /* 10985 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, closure_3;

let obj = function _getPreviewScreenshotUrl() {
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
        return { value: "IconComponent", done: null };
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
          const obj7 = { ticket };
          const self = this;
          const self2 = this;
          uRLSearchParams = new URLSearchParams(obj7);
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          c4 = 3;
          obj = { value: "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_0) + "?" + uRLSearchParams, done: true };
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
obj = function _uploadOverlayBackground() {
  obj = _asyncToGenerator(async (arg0, body) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj2;
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
              const request = { method: "PUT", body };
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj2.fetchConjureWorker(closure_0, "/agent/overlay-background", request), done: false };
              obj2 = conjureWorkerFetch;
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
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
              const error = new Error("overlay background upload failed (" + closure_0.status + ")");
              throw error;
            }
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _resetOverlayBackground() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj2;
    let closure_0 = arg0;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.fetchConjureWorker(closure_0, "/agent/overlay-background", { method: "DELETE" }), done: false };
            obj2 = conjureWorkerFetch;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          if (closure_0.ok) {
            c3 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error = new Error("overlay background reset failed (" + closure_0.status + ")");
            throw error;
          }
        }
      } catch (tmp15) {
        c3 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getOverlayBackgroundUrl() {
  obj = _asyncToGenerator(async (v, arg1) => {
    let closure_0;
    let closure_1 = arg1;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj3;
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
          let v;
          let ticket;
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
              v = closure_1;
              closure_1 = undefined;
              ticket = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.getMediaTicket(v), done: false };
              obj3 = conjureMediaTickets;
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            const _URLSearchParams = URLSearchParams;
            const self = this;
            const self2 = this;
            const baseUrl = closure_1.baseUrl;
            const obj7 = { ticket, v };
            const uRLSearchParams = new URLSearchParams(obj7);
            const _HermesInternal = HermesInternal;
            c4 = 3;
            obj = { value: "" + baseUrl + "/agent/overlay-background?" + uRLSearchParams, done: true };
            return obj;
          }
        } catch (tmp9) {
          c4 = 3;
          throw tmp9;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _relayCaptureRequest() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const str2 = "widget";
      if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let resolveUploadUrl;
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              resolveUploadUrl = undefined;
              let closure_4;
              const _Date = Date;
              const timestamp = Date.now();
              let tmp15 = true !== closure_2.probe;
              if (tmp15) {
                const spec = tmp33.spec;
                let mode;
                if (spec != null) {
                  mode = spec.mode;
                }
                tmp15 = "widget" === mode;
              }
              if (tmp15) {
                const obj2 = conjurePreviewModeRequests;
                const conjurePreviewMode = obj2.requestConjurePreviewMode(tmp31, "widget");
              }
              c6 = 1;
              const obj6 = {
                probe: null,
                spec: null,
                build: null,
                onAccepted() {
                            return closure_1_4(...arguments);
                          },
                resolveUploadUrl
              };
              ({ probe: obj3.probe, spec: obj3.spec, build: obj3.build } = closure_2);
              const relayPreviewCapture = ConjurePlatformUtilsDefault.relayPreviewCapture;
              const id = tmp33.id;
              closure_4 = _asyncToGenerator(async () => {
                let c1;
                let v3;
                closure_2_1.sendCaptureAck(user.id, "accepted");
                const obj3 = c0(closure_1_2[2]);
                await obj3.awaitConjurePreviewClaim(closure_2_0, user.id);
                return arg1;
              });
              resolveUploadUrl = function resolveUploadUrl() {
                function getClientCaptureUploadUrl() {
                  return closure_1_10(...arguments);
                }
                return getClientCaptureUploadUrl(closure_1_0);
              };
              c4 = 2;
              c7 = 1;
              const obj10 = { value: relayPreviewCapture(closure_0, id, obj6), done: false };
              return obj10;
            }
          } else {
            if (1 === tmp3) {
              c6 = 0;
              resolveUploadUrl = { status: "failed" };
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              resolveUploadUrl = value;
              c6 = 0;
            }
            resolveUploadUrl = closure_1;
            const sendCaptureAckResult = closure_1.sendCaptureAck(closure_2.id, resolveUploadUrl.status, resolveUploadUrl.code, resolveUploadUrl.message);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp23) {
          let closure_5 = tmp23;
          if (0 === c6) {
            c7 = 3;
            throw tmp23;
          } else {
            c4 = 1;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _relayControlRequest() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const user = arg2;
    let c4 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let id;
      let request;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = undefined;
              const _Date = Date;
              const timestamp = Date.now();
              c6 = 1;
              const obj5 = ConjurePlatformUtilsDefault;
              ({ id, request } = user);
              c4 = 2;
              c7 = 1;
              const obj4 = {
                value: obj5.relayPreviewControl(closure_0, id, request, _asyncToGenerator(async () => {
                          let c1;
                          let v3;
                          closure_2_1.sendControlAck(user.id, "accepted");
                          const obj3 = c0(closure_1_2[2]);
                          await obj3.awaitConjurePreviewClaim(closure_2_0, user.id);
                          return null != arg1;
                        })),
                done: false
              };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c6 = 0;
              closure_1.sendControlAck(user.id, "failed", undefined, "the client could not drive the preview frame");
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = value;
              if ("completed" === closure_3.status) {
                closure_1.sendControlAck(user.id, "completed", closure_3.response);
              } else if ("failed" === closure_3.status) {
                closure_1.sendControlAck(user.id, "failed", undefined, closure_3.message);
              } else {
                closure_1.sendControlAck(user.id, "unavailable");
              }
              c6 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp27) {
          closure_5 = tmp27;
          if (0 === c6) {
            c7 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getClientCaptureUploadUrl() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj3;
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            ticket = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj3.getMediaTicket(closure_0), done: false };
            obj3 = conjureMediaTickets;
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          ticket = closure_0.ticket;
          const _URLSearchParams = URLSearchParams;
          const obj7 = { ticket };
          const self = this;
          const self2 = this;
          const baseUrl = closure_0.baseUrl;
          const uRLSearchParams = new URLSearchParams(obj7);
          const _HermesInternal = HermesInternal;
          c3 = 3;
          obj = { value: "" + baseUrl + "/agent/screenshots?" + uRLSearchParams, done: true };
          return obj;
        }
      } catch (tmp8) {
        c3 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = {
  capture_preview(arg0, projectId) {
    function relayCaptureRequest() {
      return obj(...arguments);
    }
    const promise = relayCaptureRequest(projectId.projectId, projectId.ws, arg0);
    promise.catch(() => {

    });
  },
  control_preview(arg0, projectId) {
    function relayControlRequest() {
      return obj(...arguments);
    }
    const promise = relayControlRequest(projectId.projectId, projectId.ws, arg0);
    promise.catch(() => {

    });
  },
  control_abort(arg0, projectId) {
    projectId = projectId.projectId;
    obj = ConjurePlatformUtilsDefault;
    obj.abortPreviewControl(projectId);
  },
  control_claim(id, projectId) {
    projectId = projectId.projectId;
    obj = conjurePreviewClaims;
    const conjurePreviewClaim = obj.resolveConjurePreviewClaim(projectId, id.id);
  },
  capture_claim(id, projectId) {
    projectId = projectId.projectId;
    obj = conjurePreviewClaims;
    const conjurePreviewClaim = obj.resolveConjurePreviewClaim(projectId, id.id, id.upload_token);
  },
  preview_operation(phase, projectId) {
    projectId = projectId.projectId;
    if ("begin" === phase.phase) {
      const obj3 = conjurePreviewControlLease;
      const result = obj3.setConjureControlTuning(projectId, "tuning" === phase.mode);
      const obj4 = ConjurePlatformUtilsDefault;
      const result1 = obj4.beginPreviewOperation(projectId);
    } else {
      obj = conjurePreviewControlLease;
      const result2 = obj.setConjureControlTuning(projectId, false);
      const obj2 = ConjurePlatformUtilsDefault;
      obj2.endPreviewOperation(projectId);
    }
  },
  overlay_background(blur, projectId) {
    projectId = projectId.projectId;
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_OVERLAY_BACKGROUND_SET", projectId, blur: blur.blur, imageEtag: blur.image_etag };
    obj.dispatch(obj2);
  }
};
let obj2 = {
  preview_ready(integration_installed, projectId) {
    projectId = projectId.projectId;
    obj = conjureChatConnection;
    obj.appendTurnStep(projectId, integration_installed);
    let tmp4;
    if (null != integration_installed.integration_installed) {
      if (null != integration_installed.bot_permissions_changed) {
        const obj4 = { integrationInstalled: null, botPermissionsChanged: null };
        ({ integration_installed: obj2.integrationInstalled, bot_permissions_changed: obj2.botPermissionsChanged } = integration_installed);
        tmp4 = obj4;
      }
    }
    const tmp5 = null != tmp4 && null != integration_installed.project && null != integration_installed.has_activity;
    if (tmp5) {
      const obj6 = {};
      const applyPublishedPreview = ConjureActionCreators.applyPublishedPreview;
      ConjureActionCreators;
      const merged = Object.assign(tmp4);
      ({ project: obj3.project, has_activity: obj3.hasActivity } = integration_installed);
      const result = applyPublishedPreview(projectId, obj6);
    }
    const tmpResult2 = ConjurePublishActionCreators;
    const result1 = tmpResult2.refreshPublishedProject(projectId, { isPreview: true, install: tmp4 });
    result1.catch(() => {

    });
  }
};
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewConnection.tsx");

export const previewFrameHandlers = obj;
export const previewStepHandlers = obj2;
export const sendOverlayBackgroundBlur = function sendOverlayBackgroundBlur(projectId, arg1) {
  obj = conjureProjectSockets;
  const conjureSocket = obj.getConjureSocket(projectId);
  if (null == conjureSocket) {
    return false;
  } else {
    try {
      const result = conjureSocket.sendOverlayBackgroundBlur(arg1);
      return true;
    } catch (err) {
      return false;
    }
  }
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl() {
  return obj(...arguments);
};
export const uploadOverlayBackground = function uploadOverlayBackground() {
  return obj(...arguments);
};
export const resetOverlayBackground = function resetOverlayBackground() {
  return obj(...arguments);
};
export const getOverlayBackgroundUrl = function getOverlayBackgroundUrl() {
  return obj(...arguments);
};
