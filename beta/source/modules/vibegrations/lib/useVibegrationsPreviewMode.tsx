// Module ID: 16270
// Function ID: 16271
// Name: useVibegrationsPreviewMode
// Dependencies: [32, 19, 502, 504, 16271, 16272, 8473, 6584, 8783, 2]
// Exports: useVibegrationsPreviewMode

// Module 16270 (useVibegrationsPreviewMode)
import get_initialized from "get initialized" /* 504 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6584 */;
import canLaunchFrame from "canLaunchFrame" /* 8783 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 16271 */;
import vibegrationsPreviewModes from "vibegrationsPreviewModes" /* 16272 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPreviewMode.tsx");

export const useVibegrationsPreviewMode = function useVibegrationsPreviewMode(arg0) {
  let applicationId;
  let data2;
  let declaredActivity;
  let installScope;
  let isLoading;
  let mainCardOnly;
  let ownerAuthorizationRevoked;
  let previewApplicationId;
  let previewMode;
  let tmp16;
  let tmp17;
  let tmp2;
  let tmp3;
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (mainCardOnly === undefined) {
    mainCardOnly = false;
  }
  [tmp2, tmp3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp4 = _slicedToArray(react.useState(applicationId), 2);
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
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp11 = useUserApplicationWidgetDataDefault;
  const applicationWidgetConfig = tmp11(stateFromStores, tmp7).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp15;
  const profileSurfaceAvailability = vibegrationsPreviewModes.profileSurfaceAvailability;
  vibegrationsPreviewModes;
  if (surfaces != null) {
    tmp15 = surfaces[tmp8(undefined, 8473).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp15, widgetBottom: null != tmp16, miniProfile: null != tmp17 };
  tmp16 = undefined;
  if (surfaces != null) {
    tmp16 = surfaces[tmp8(undefined, 8473).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  tmp17 = undefined;
  if (surfaces != null) {
    tmp17 = surfaces[tmp8(undefined, 8473).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  const result = profileSurfaceAvailability(obj2);
  const tmp19 = null != tmp7 && (mainCardOnly ? result.hasMainCard : result.hasAny);
  const useApplication = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const data = useApplication(previewApplicationId).data;
  let tmp22 = null != previewApplicationId;
  if (tmp22) {
    let id;
    if (data != null) {
      const bot = data.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    tmp22 = null != id;
  }
  const useApplication2 = ApplicationActionCreators.useApplication;
  ApplicationActionCreators;
  const application2 = useApplication2(applicationId);
  ({ data: data2, isLoading } = application2);
  if (!declaredActivity) {
    const tmp8Result8 = canLaunchFrame;
    declaredActivity = tmp8Result8.canLaunchFrame(data2);
  }
  const tmp8Result9 = vibegrationsPreviewModes;
  const result1 = tmp8Result9.previewModeAvailability({ installScope, hasFrame: declaredActivity, hasProfileWidget: tmp19, hasBotDm: tmp22, ownerAuthorizationRevoked });
  const obj3 = { availability: result1, isResolving: null != applicationId && isLoading && null == data2, activeMode: previewMode, setMode: tmp3, widgetApplicationId: tmp7 };
  previewMode = null;
  if (!(null != applicationId && isLoading && null == data2)) {
    const tmp8Result10 = vibegrationsPreviewModes;
    previewMode = tmp8Result10.resolvePreviewMode(tmp2, result1);
  }
  return obj3;
};
