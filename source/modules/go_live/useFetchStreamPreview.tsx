// Module ID: 10772
// Function ID: 83703
// Name: useFetchStreamPreview
// Dependencies: [31, 27, 33, 4126, 4963, 10744, 10740, 2, 57]
// Exports: default

// Module 10772 (useFetchStreamPreview)
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import module_33 from "module_33";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT";
import { BasicPermissions } from "useMyCurrentStageChannelRole";
import _slicedToArray from "_slicedToArray";

const result = _slicedToArray.fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(arg0, arg1, arg2) {
  let isLoading;
  let previewUrl;
  arg1 = arg0;
  const dependencyMap = arg1;
  const React = arg2;
  let getActivityIndicator = tmp;
  let obj = arg1(dependencyMap[6]);
  const items = [module_33];
  module_33 = obj.useStateFromStores(items, () => channel.getChannel(arg1));
  const items1 = [_createForOfIteratorHelperLoose];
  let stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    let canBasicChannelResult = null != module_33;
    if (canBasicChannelResult) {
      canBasicChannelResult = shouldFetchPreview.canBasicChannel(constants.CONNECT, module_33);
    }
    return canBasicChannelResult;
  });
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [NAV_BAR_HEIGHT];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items2, () => stateFromStores.getVoiceChannelId() === arg1);
  const obj3 = arg1(dependencyMap[6]);
  const items3 = [getActivityIndicator];
  const stateFromStoresObject = arg1(dependencyMap[6]).useStateFromStoresObject(items3, () => {
    const obj = {};
    let shouldFetchPreviewResult = !tmp;
    if (!tmp) {
      shouldFetchPreviewResult = tmp.shouldFetchPreview(arg0, arg1, arg2);
    }
    obj.shouldFetchPreview = shouldFetchPreviewResult;
    let previewURL = null;
    if (!tmp) {
      previewURL = tmp.getPreviewURL(arg0, arg1, arg2);
    }
    obj.previewUrl = previewURL;
    let isPreviewLoading = !tmp;
    if (!tmp) {
      isPreviewLoading = tmp.getIsPreviewLoading(arg0, arg1, arg2);
    }
    obj.isLoading = isPreviewLoading;
    return obj;
  });
  const shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
  _createForOfIteratorHelperLoose = shouldFetchPreview;
  ({ previewUrl, isLoading } = stateFromStoresObject);
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  NAV_BAR_HEIGHT = stateFromStores;
  const items4 = [shouldFetchPreview, arg1, arg0, arg2, null == arg1 || null == arg2, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = shouldFetchPreview;
    if (shouldFetchPreview) {
      tmp = !tmp;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const streamPreview = arg0(arg1[7]).fetchStreamPreview(arg0, arg1, arg2);
      const obj = arg0(arg1[7]);
    }
  }, items4);
  if (!(null == arg1 || null == arg2)) {
    if (stateFromStores) {
      obj = { previewUrl, isLoading };
    }
    return obj;
  }
  obj = { previewUrl: undefined, isLoading: false };
};
