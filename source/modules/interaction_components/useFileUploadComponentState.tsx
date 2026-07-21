// Module ID: 15950
// Function ID: 122340
// Name: useFileUploadComponentState
// Dependencies: []
// Exports: useFileUploadComponentState

// Module 15950 (useFileUploadComponentState)
let closure_3 = importAll(dependencyMap[0]);
const DraftType = arg1(dependencyMap[1]).DraftType;
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

export const useFileUploadComponentState = function useFileUploadComponentState(maxValues) {
  const componentStateContext = arg1(dependencyMap[3]).useComponentStateContext();
  importDefault(dependencyMap[4])(null != componentStateContext, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  importDefault(dependencyMap[4])(null != channelId, "useFileUploadComponentState must be used inside a channel");
  const error = componentStateContext.useComponentState(maxValues);
  const state = error.state;
  const arg1 = state;
  const executeStateUpdate = error.executeStateUpdate;
  const importDefault = executeStateUpdate;
  const items = [state];
  const uploadIds = React.useMemo(() => {
    let type;
    if (null != state) {
      type = state.type;
    }
    if (type === state(uploadIds[5]).ComponentType.FILE_UPLOAD) {
      let uploadIds = state.uploadIds;
    } else {
      uploadIds = [];
    }
    return uploadIds;
  }, items);
  const dependencyMap = uploadIds;
  let uploads = uploads.getUploads(channelId, DraftType.InteractionModal);
  const React = uploads;
  const items1 = [uploadIds, uploads];
  const currentUploads = React.useMemo(() => {
    const mapped = uploadIds.map((arg0) => closure_3.find((id) => id.id === id));
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  const DraftType = currentUploads;
  const items2 = [executeStateUpdate];
  const setUploadIds = React.useCallback((uploadIds) => executeStateUpdate({ type: state(uploadIds[5]).ComponentType.FILE_UPLOAD, uploadIds }), items2);
  uploads = setUploadIds;
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = React.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((arg0) => closure_4.some((id) => id.id === id)));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error: error.error };
};
