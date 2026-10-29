// Module ID: 10851
// Function ID: 10852
// Name: conjurePreviewConnection
// Dependencies: [5, 1389, 6831, 10852, 10854, 10898, 10875, 584, 10899, 10839, 10829, 10832, 10903, 10831, 10905, 10906, 10907, 2]
// Exports: getOverlayBackgroundUrl, getPreviewScreenshotUrl, resetOverlayBackground, sendOverlayBackgroundBlur, uploadOverlayBackground

// Module 10851 (conjurePreviewConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureChatConnection from "conjureChatConnection" /* 10829 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10831 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10832 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 10852 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10854 */;
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 10875 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 10898 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10899 */;
import UserApplicationIdentityActionCreatorsDefault from "UserApplicationIdentityActionCreators" /* 10903 */;
import conjureMediaTickets from "conjureMediaTickets" /* 10905 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10906 */;
import conjurePreviewModeRequests from "conjurePreviewModeRequests" /* 10907 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import size from "module_2" /* 2 */;

let c0, closure_3, currentUser;

let obj = function _refetchWidgetData() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c2;
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            currentUser = currentUser.getCurrentUser();
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            if (null != id) {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: obj2.fetchUserApplicationIdentitiesWithProfiles(id), done: false };
              obj2 = UserApplicationIdentityActionCreatorsDefault;
              return obj5;
            }
          }
        } else if (1 === tmp3) {
          c2 = 0;
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
        }
        c0 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp9) {
        if (0 === c2) {
          c0 = 3;
          throw tmp9;
        } else {
          c1 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getPreviewScreenshotUrl() {
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
        return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
              return { value: "IconComponent", done: "IconComponent" };
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
        return { value: "IconComponent", done: "IconComponent" };
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
            return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
                const obj3 = c0(closure_1_2[5]);
                await obj3.awaitConjurePreviewClaim(closure_2_0, user.id);
                return arg1;
              });
              resolveUploadUrl = function resolveUploadUrl() {
                function getClientCaptureUploadUrl() {
                  return closure_1_13(...arguments);
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
            return { value: "IconComponent", done: "IconComponent" };
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
          return { value: "IconComponent", done: "IconComponent" };
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
                          const obj3 = c0(closure_1_2[5]);
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
            return { value: "IconComponent", done: "IconComponent" };
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
        return { value: "IconComponent", done: "IconComponent" };
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
  capture_preview(probe, projectId) {
    function relayCaptureRequest() {
      return obj(...arguments);
    }
    projectId = projectId.projectId;
    let tmp = true !== probe.probe;
    const ws = projectId.ws;
    if (tmp) {
      const spec = probe.spec;
      let mode;
      if (spec != null) {
        mode = spec.mode;
      }
      tmp = "widget" !== mode;
    }
    if (tmp) {
      obj = ConjurePreviewActionCreators;
      obj.wakeConjurePreview(projectId);
    }
    const promise = relayCaptureRequest(projectId, ws, probe);
    promise.catch(() => {

    });
  },
  control_preview(arg0, projectId) {
    function relayControlRequest() {
      return obj(...arguments);
    }
    projectId = projectId.projectId;
    const ws = projectId.ws;
    obj = ConjurePreviewActionCreators;
    obj.wakeConjurePreview(projectId);
    const promise = relayControlRequest(projectId, ws, arg0);
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
      const obj3 = ConjurePreviewActionCreators;
      obj3.wakeConjurePreview(projectId);
      const obj4 = conjurePreviewControlLease;
      const result = obj4.setConjureControlTuning(projectId, "tuning" === phase.mode);
      const obj5 = ConjurePlatformUtilsDefault;
      const result1 = obj5.beginPreviewOperation(projectId);
    } else {
      obj = conjurePreviewControlLease;
      const result2 = obj.setConjureControlTuning(projectId, false);
      const obj2 = ConjurePlatformUtilsDefault;
      obj2.endPreviewOperation(projectId);
    }
  },
  widget_refreshed() {
    function refetchWidgetData() {
      return obj(...arguments);
    }
    !refetchWidgetData();
  },
  overlay_background(blur, projectId) {
    projectId = projectId.projectId;
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_OVERLAY_BACKGROUND_SET", projectId, blur: blur.blur, imageEtag: blur.image_etag };
    obj.dispatch(obj2);
  }
};
let obj2 = {
  preview_app_published(has_activity, projectId) {
    projectId = projectId.projectId;
    const project = ConjureProjectStore.getProject(projectId);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    if (null != prop) {
      obj = ConjurePublishActionCreators;
      const result = obj.refreshPreviewApplication(prop);
      result.catch(() => {

      });
      const tmp4 = require;
      if (true === has_activity.has_activity) {
        const tmp4Result = tmp4(10839);
        const result1 = tmp4Result.prefetchConjurePreviewTicket(projectId, { known: true });
      }
    }
  },
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
export function sendOverlayBackgroundBlur(projectId, arg1) {
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
}
export function getPreviewScreenshotUrl() {
  return obj(...arguments);
}
export function uploadOverlayBackground() {
  return obj(...arguments);
}
export function resetOverlayBackground() {
  return obj(...arguments);
}
export function getOverlayBackgroundUrl() {
  return obj(...arguments);
}
