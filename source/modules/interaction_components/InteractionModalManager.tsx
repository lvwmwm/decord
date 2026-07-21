// Module ID: 15942
// Function ID: 122252
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15942 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _handleInteractionModalCreate() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _handleInteractionModalCreate = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const AnalyticEvents = arg1(dependencyMap[8]).AnalyticEvents;
let tmp2 = (arg0) => {
  class InteractionModalManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, InteractionModalManager);
      items1 = [...items];
      obj = closure_6(InteractionModalManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      InteractionModalManager = tmp2Result;
      tmp2Result.iframeModalOpenTimeMs = undefined;
      tmp2Result.actions = {
        INTERACTION_MODAL_CREATE(arg0) {
              !function handleInteractionModalCreate(arg0) {
                return callback(...arguments);
              }(arg0);
            },
        INTERACTION_IFRAME_MODAL_CREATE(application) {
              tmp2Result.iframeModalOpenTimeMs = Date.now();
              callback(closure_2[15])(application);
              let obj = callback(closure_2[12]);
              obj = { type: "interaction_iframe_modal", application_id: application.application.id };
              obj.track(constants.OPEN_MODAL, obj);
            },
        INTERACTION_IFRAME_MODAL_CLOSE(applicationId) {
              const iframeModalOpenTimeMs = tmp2Result.iframeModalOpenTimeMs;
              let diff;
              if (null != iframeModalOpenTimeMs) {
                const _Date = Date;
                diff = Date.now() - iframeModalOpenTimeMs;
              }
              let obj = callback(closure_2[12]);
              obj = { type: "interaction_iframe_modal", application_id: applicationId.applicationId, duration_open_ms: diff };
              obj.track(constants.MODAL_DISMISSED, obj);
              tmp2Result.iframeModalOpenTimeMs = undefined;
            },
        RPC_APP_DISCONNECTED(application) {
              const iFrameModalApplicationId = uiStore.getIFrameModalApplicationId();
              let tmp3 = application.application.id === iFrameModalApplicationId;
              const iFrameModalKey = uiStore.getIFrameModalKey();
              if (tmp3) {
                tmp3 = null != iFrameModalApplicationId;
              }
              if (tmp3) {
                callback(closure_2[16])(iFrameModalApplicationId, iFrameModalKey);
              }
            }
      };
      return tmp2Result;
    }
  }
  const arg1 = InteractionModalManager;
  callback2(InteractionModalManager, arg0);
  return callback(InteractionModalManager);
}(importDefault(dependencyMap[17]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/interaction_components/InteractionModalManager.tsx");

export default tmp2;
export const INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE = "interaction_iframe_modal";
