// Module ID: 16962
// Function ID: 16963
// Name: useVibegrationsPreviewMode
// Dependencies: [32, 19, 502, 558, 568, 504, 16963, 16964, 9285, 7410, 9590, 2]

// Module 16962 (useVibegrationsPreviewMode)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import useUserApplicationWidgetDataDefault from "useUserApplicationWidgetData" /* 16963 */;
import vibegrationsPreviewModes from "vibegrationsPreviewModes" /* 16964 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsPreviewMode.tsx");

export const useVibegrationsPreviewMode = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ applicationId, previewApplicationId, declaredActivity, mainCardOnly } = arg0);
  let tmp4 = undefined !== mainCardOnly;
  ({ installScope, ownerAuthorizationRevoked } = arg0);
  if (tmp4) {
    tmp4 = mainCardOnly;
  }
  [tmp6, tmp7] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(applicationId), 2);
  if (tmp8[0] !== applicationId) {
    tmp8[1](applicationId);
    tmp7(null);
  }
  let tmp11 = null;
  if (null != previewApplicationId) {
    tmp11 = null;
    if (previewApplicationId === applicationId) {
      tmp11 = previewApplicationId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    class T {
      constructor() {
        return closure_1_5.getId();
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp12 = items;
    tmp13 = T;
  } else {
    [tmp12, tmp13] = cResult;
  }
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const stateFromStores = initialize.useStateFromStores(tmp12, tmp13);
  const tmp17 = tmp11;
  const tmpResult = initialize;
  const applicationWidgetConfig = useUserApplicationWidgetDataDefault(stateFromStores, tmp17).applicationWidgetConfig;
  let surfaces;
  if (applicationWidgetConfig != null) {
    surfaces = applicationWidgetConfig.surfaces;
  }
  let tmp19;
  if (surfaces != null) {
    tmp19 = surfaces[tmp(undefined, 9285).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp19, widgetBottom: null, miniProfile: null };
  let tmp20;
  if (surfaces != null) {
    tmp20 = surfaces[tmp(undefined, 9285).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp20;
  let tmp21;
  if (surfaces != null) {
    tmp21 = surfaces[tmp(undefined, 9285).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp21;
  const result = vibegrationsPreviewModes.profileSurfaceAvailability(obj2);
  if (null == tmp11) {
    class T {
      constructor() {
        return closure_1_5.getId();
      }
    }
    const data = tmp(7410).useApplication(previewApplicationId).data;
    let tmp26 = null != previewApplicationId;
    if (tmp26) {
      let id;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      tmp26 = null != id;
    }
    const tmpResult8 = tmp(7410);
    const application = tmp(7410).useApplication(applicationId);
    if (!declaredActivity) {
      declaredActivity = tmp(9590).canLaunchFrame(tmp30);
      const tmpResult10 = tmp(9590);
    }
    const tmpResult9 = tmp(7410);
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp23, hasBotDm: tmp26, ownerAuthorizationRevoked };
    const result1 = tmp(16964).previewModeAvailability(obj3);
    let previewMode = null;
    if (!(null != applicationId && application.isLoading)) {
      previewMode = tmp(16964).resolvePreviewMode(tmp6, result1);
      const tmpResult12 = tmp(16964);
    }
    if (cResult[2] === result1) {
      if (cResult[3] === tmp31) {
        if (cResult[4] === previewMode) {
          if (cResult[5] === tmp11) {
            let tmp34 = cResult[6];
          }
          return tmp34;
        }
      }
    }
    const obj4 = { availability: result1, isResolving: null != applicationId && application.isLoading, activeMode: previewMode, setMode: tmp7, widgetApplicationId: tmp11 };
    cResult[2] = result1;
    cResult[3] = null != applicationId && application.isLoading;
    cResult[4] = previewMode;
    cResult[5] = tmp11;
    cResult[6] = obj4;
    tmp34 = obj4;
    const tmpResult11 = tmp(16964);
  }
}) : ((arg0) => {
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
    tmp14 = surfaces[tmp8(undefined, 9285).ApplicationWidgetConfigSurface.WIDGET_TOP];
  }
  const obj2 = { widgetTop: null != tmp14, widgetBottom: null, miniProfile: null };
  let tmp15;
  if (surfaces != null) {
    tmp15 = surfaces[tmp8(undefined, 9285).ApplicationWidgetConfigSurface.WIDGET_BOTTOM];
  }
  obj2.widgetBottom = null != tmp15;
  let tmp16;
  if (surfaces != null) {
    tmp16 = surfaces[tmp8(undefined, 9285).ApplicationWidgetConfigSurface.MINI_PROFILE];
  }
  obj2.miniProfile = null != tmp16;
  const result = vibegrationsPreviewModes.profileSurfaceAvailability(obj2);
  if (null == tmp7) {
    const data = tmp8(7410).useApplication(previewApplicationId).data;
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
    const tmp8Result6 = tmp8(7410);
    const application = tmp8(7410).useApplication(applicationId);
    if (!declaredActivity) {
      declaredActivity = tmp8(9590).canLaunchFrame(tmp25);
      const tmp8Result8 = tmp8(9590);
    }
    const tmp8Result7 = tmp8(7410);
    const obj3 = { installScope, hasFrame: declaredActivity, hasProfileWidget: tmp18, hasBotDm: tmp21, ownerAuthorizationRevoked };
    const result1 = tmp8(16964).previewModeAvailability(obj3);
    const obj4 = { availability: result1, isResolving: null != applicationId && application.isLoading, activeMode: null, setMode: null, widgetApplicationId: null };
    let previewMode = null;
    if (!(null != applicationId && application.isLoading)) {
      previewMode = tmp8(16964).resolvePreviewMode(tmp2, result1);
      const tmp8Result10 = tmp8(16964);
    }
    obj4.activeMode = previewMode;
    obj4.setMode = tmp3;
    obj4.widgetApplicationId = tmp7;
    return obj4;
  }
});
