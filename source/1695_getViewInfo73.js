// Module ID: 1695
// Function ID: 18755
// Name: getViewInfo73
// Dependencies: []

// Module 1695 (getViewInfo73)
function getViewInfo73(viewConfig) {
  const obj = {};
  let uiViewClassName;
  if (null != viewConfig) {
    viewConfig = viewConfig.viewConfig;
    if (null != viewConfig) {
      uiViewClassName = viewConfig.uiViewClassName;
    }
  }
  obj.viewName = uiViewClassName;
  let _nativeTag;
  if (null != viewConfig) {
    _nativeTag = viewConfig._nativeTag;
  }
  obj.viewTag = _nativeTag;
  viewConfig = undefined;
  if (null != viewConfig) {
    viewConfig = viewConfig.viewConfig;
  }
  obj.viewConfig = viewConfig;
  return obj;
}
function getViewInfoLatest(_viewConfig) {
  const obj = {};
  let uiViewClassName;
  if (null != _viewConfig) {
    _viewConfig = _viewConfig._viewConfig;
    if (null != _viewConfig) {
      uiViewClassName = _viewConfig.uiViewClassName;
    }
  }
  obj.viewName = uiViewClassName;
  let __nativeTag;
  if (null != _viewConfig) {
    __nativeTag = _viewConfig.__nativeTag;
  }
  obj.viewTag = __nativeTag;
  _viewConfig = undefined;
  if (null != _viewConfig) {
    _viewConfig = _viewConfig._viewConfig;
  }
  obj.viewConfig = _viewConfig;
  return obj;
}
arg5.getViewInfo = function getViewInfo(findHostInstanceResult) {
  if (undefined !== findHostInstanceResult._nativeTag) {
    if (null !== findHostInstanceResult.__nativeTag) {
      let tmp3 = getViewInfo73(findHostInstanceResult);
    }
    return tmp3;
  }
  if (undefined !== findHostInstanceResult.__nativeTag) {
    if (null !== findHostInstanceResult.__nativeTag) {
      tmp3 = getViewInfoLatest(findHostInstanceResult);
    }
  }
  tmp3 = getViewInfo73(findHostInstanceResult);
};
