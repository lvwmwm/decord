// Module ID: 16959
// Function ID: 16960
// Name: useVibegrationsPreviewMode
// Dependencies: [32, 19, 502, 504, 16960, 16961, 9287, 7408, 9594, 2]
// Exports: useVibegrationsPreviewMode

// Module 16959 (useVibegrationsPreviewMode)
import initialize from "initialize" /* 504 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 16960 */;
import vibegrationsPreviewModes from "vibegrationsPreviewModes" /* 16961 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPreviewMode.tsx");

export const useVibegrationsPreviewMode = function useVibegrationsPreviewMode(arg0) {
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (mainCardOnly === undefined) {
    mainCardOnly = false;
  }
  [tmp2, tmp3] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(applicationId), 2);
  if (tmp4[0] !== applicationId) {
    tmp4[1](applicationId);
    tmp3(null);
  }
  let tmp7 = null;
  if (null != previewApplicationId) {
    tmp7 = null;
    if (previewApplicationId === applicationId) {
      tmp7 = previewApplicationId;
    }
  }
  const tmp = _slicedToArray(noop.useState(null), 2);
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const tmp12 = tmp7;
  const applicationWidgetConfig = useUserApplicationWidgetDataDefault(stateFromStores, tmp12).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp14;
  if (surfaces != null) {
    tmp14 = surfaces[tmp8(undefined, 9287).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp14, widgetBottom: null, miniProfile: null };
  let tmp15;
  if (surfaces != null) {
    tmp15 = surfaces[tmp8(undefined, 9287).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp15;
  let tmp16;
  if (surfaces != null) {
    tmp16 = surfaces[tmp8(undefined, 9287).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp16;
  const result = vibegrationsPreviewModes.profileSurfaceAvailability(obj2);
  if (null == tmp7) {
    const data = tmp8(7408).useApplication(previewApplicationId).data;
    let tmp21 = null != previewApplicationId;
    if (tmp21) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp21 = null != id;
    }
    const tmp8Result6 = tmp8(7408);
    const application = tmp8(7408).useApplication(applicationId);
    if (!declaredActivity) {
      declaredActivity = tmp8(9594).canLaunchFrame(tmp25);
      const tmp8Result8 = tmp8(9594);
    }
    const tmp8Result7 = tmp8(7408);
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp18, hasBotDm: tmp21, ownerAuthorizationRevoked };
    const result1 = tmp8(16961).previewModeAvailability(obj3);
    const obj4 = { availability: result1, isResolving: null != applicationId && application.isLoading, activeMode: null, setMode: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && application.isLoading)) {
      previewMode = tmp8(16961).resolvePreviewMode(tmp2, result1);
      const tmp8Result10 = tmp8(16961);
    }
    obj4.activeMode = previewMode;
    obj4.setMode = tmp3;
    obj4.widgetApplicationId = tmp7;
    return obj4;
  }
};
