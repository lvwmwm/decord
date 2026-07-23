// Module ID: 10789
// Function ID: 83799
// Name: useFetchStreamPreview
// Dependencies: [31, 4311, 1348, 3758, 1906, 482, 566, 4309, 2]
// Exports: default

// Module 10789 (useFetchStreamPreview)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { BasicPermissions } from "sum";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(arg0, arg1, arg2) {
  let isLoading;
  let previewUrl;
  const _require = arg0;
  const dependencyMap = arg1;
  const React = arg2;
  let _isNativeReflectConstruct = tmp;
  let obj = _require(566);
  const items = [closure_4];
  closure_4 = obj.useStateFromStores(items, () => channel.getChannel(closure_1));
  const items1 = [shouldFetchPreview];
  let stateFromStores = _require(566).useStateFromStores(items1, () => {
    let canBasicChannelResult = null != closure_4;
    if (canBasicChannelResult) {
      canBasicChannelResult = shouldFetchPreview.canBasicChannel(outer1_7.CONNECT, closure_4);
    }
    return canBasicChannelResult;
  });
  const obj2 = _require(566);
  const items2 = [stateFromStores];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => stateFromStores.getVoiceChannelId() === closure_1);
  const obj3 = _require(566);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(566).useStateFromStoresObject(items3, () => {
    const obj = {};
    let shouldFetchPreviewResult = !tmp;
    if (!tmp) {
      shouldFetchPreviewResult = tmp.shouldFetchPreview(closure_0, closure_1, result);
    }
    obj.shouldFetchPreview = shouldFetchPreviewResult;
    let previewURL = null;
    if (!tmp) {
      previewURL = tmp.getPreviewURL(closure_0, closure_1, result);
    }
    obj.previewUrl = previewURL;
    let isPreviewLoading = !tmp;
    if (!tmp) {
      isPreviewLoading = tmp.getIsPreviewLoading(closure_0, closure_1, result);
    }
    obj.isLoading = isPreviewLoading;
    return obj;
  });
  shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
  ({ previewUrl, isLoading } = stateFromStoresObject);
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const items4 = [shouldFetchPreview, arg1, arg0, arg2, null == arg1 || null == arg2, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = shouldFetchPreview;
    if (shouldFetchPreview) {
      tmp = !_isNativeReflectConstruct;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const streamPreview = callback(table[7]).fetchStreamPreview(callback, table, result);
      const obj = callback(table[7]);
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
