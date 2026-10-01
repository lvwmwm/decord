// Module ID: 9522
// Function ID: 9523
// Name: useFetchStreamPreview
// Dependencies: [19, 4980, 2045, 4469, 2099, 1085, 504, 4978, 2]
// Exports: default

// Module 9522 (useFetchStreamPreview)
import Constants from "Constants" /* 1085 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import react_mod from "react" /* 19 */;
import ApplicationStreamPreviewStore from "ApplicationStreamPreviewStore" /* 4980 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, dependencyMap;

let react = react_mod;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/go_live/useFetchStreamPreview.tsx");

export default function useFetchStreamPreview(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let isLoading;
  let previewUrl;
  let shouldFetchPreview;
  _require = arg0;
  dependencyMap = arg1;
  react = arg2;
  let tmp = null == arg1 || null == arg2;
  let closure_3 = tmp;
  let obj = require("get initialized");
  const items = [closure_4];
  closure_4 = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const items1 = [shouldFetchPreview];
  const obj2 = require("get initialized");
  let stateFromStores = obj2.useStateFromStores(items1, () => {
    const canBasicChannelResult = null != closure_4 && PermissionStore.canBasicChannel(BasicPermissions.CONNECT, tmp);
    return canBasicChannelResult;
  });
  const items2 = [stateFromStores];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => SelectedChannelStore.getVoiceChannelId() === closure_1);
  const items3 = [closure_3];
  const obj4 = require("get initialized");
  const stateFromStoresObject = obj4.useStateFromStoresObject(items3, () => {
    let previewURL;
    let isPreviewLoading = !closure_3;
    let shouldFetchPreviewResult = isPreviewLoading;
    if (!closure_3) {
      shouldFetchPreviewResult = ApplicationStreamPreviewStore.shouldFetchPreview(closure_0, closure_1, closure_2);
    }
    const obj = { shouldFetchPreview: shouldFetchPreviewResult, previewUrl: previewURL, isLoading: isPreviewLoading };
    previewURL = null;
    if (!closure_3) {
      previewURL = ApplicationStreamPreviewStore.getPreviewURL(closure_0, closure_1, closure_2);
    }
    if (!closure_3) {
      isPreviewLoading = ApplicationStreamPreviewStore.getIsPreviewLoading(closure_0, closure_1, closure_2);
    }
    return obj;
  });
  shouldFetchPreview = stateFromStoresObject.shouldFetchPreview;
  ({ previewUrl, isLoading } = stateFromStoresObject);
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  const items4 = [shouldFetchPreview, arg1, arg0, arg2, tmp, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = shouldFetchPreview && !closure_3 && stateFromStores;
    if (tmp) {
      const obj = StreamActionCreators;
      const streamPreview = obj.fetchStreamPreview(closure_0, closure_1, closure_2);
    }
  }, items4);
  if (!tmp) {
    let obj5;
    if (stateFromStores) {
      obj5 = { previewUrl, isLoading };
    }
    return obj5;
  }
  obj5 = { previewUrl: "flex", isLoading: true };
};
