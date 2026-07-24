// Module ID: 16126
// Function ID: 124923
// Name: useFileUploadComponentState
// Dependencies: [31, 4468, 4467, 7885, 44, 1881, 2]
// Exports: useFileUploadComponentState

// Module 16126 (useFileUploadComponentState)
import result from "result";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

export const useFileUploadComponentState = function useFileUploadComponentState(maxValues) {
  const componentStateContext = state(uploadIds[3]).useComponentStateContext();
  executeStateUpdate(uploadIds[4])(null != componentStateContext, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  executeStateUpdate(uploadIds[4])(null != channelId, "useFileUploadComponentState must be used inside a channel");
  const error = componentStateContext.useComponentState(maxValues);
  state = error.state;
  executeStateUpdate = error.executeStateUpdate;
  const items = [state];
  uploadIds = uploads.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    if (type === state(uploadIds[5]).ComponentType.FILE_UPLOAD) {
      uploadIds = state.uploadIds;
    } else {
      uploadIds = [];
    }
    return uploadIds;
  }, items);
  uploads = setUploadIds.getUploads(channelId, currentUploads.InteractionModal);
  const items1 = [uploadIds, uploads];
  currentUploads = uploads.useMemo(() => {
    const mapped = uploadIds.map((arg0) => {
      let closure_0 = arg0;
      return outer1_3.find((id) => id.id === closure_0);
    });
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  const items2 = [executeStateUpdate];
  setUploadIds = uploads.useCallback((uploadIds) => executeStateUpdate({ type: state(uploadIds[5]).ComponentType.FILE_UPLOAD, uploadIds }), items2);
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = uploads.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((arg0) => {
        let closure_0 = arg0;
        return outer1_4.some((id) => id.id === closure_0);
      }));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error: error.error };
};
