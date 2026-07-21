// Module ID: 11215
// Function ID: 87339
// Name: useTrackSearchItems
// Dependencies: []
// Exports: useTrackSearchItems

// Module 11215 (useTrackSearchItems)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(getApplicationIdFromApplicationItem, getImpressionPropsFromApplicationItem, first) {
  getImpressionPropsFromApplicationItem = getApplicationIdFromApplicationItem;
  const dependencyMap = getImpressionPropsFromApplicationItem;
  const React = first;
  let obj = getImpressionPropsFromApplicationItem(dependencyMap[1]);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let closure_4 = React.useRef({});
  let closure_5 = React.useRef(first);
  obj = {
    handleViewableItemsChanged: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== arg2) {
        ref.current = arg2;
        closure_4.current = {};
      }
      const item = viewableItems.forEach((isViewable) => {
        let applicationId;
        let commandId;
        if (isViewable.isViewable) {
          const tmp2 = callback(isViewable.item);
          if (null != tmp2) {
            if (null == ref.current[tmp2]) {
              ref.current[tmp2] = true;
              ({ applicationId, commandId } = callback2(isViewable.item));
              let obj = callback(callback2[2]);
              obj = { type: callback(callback2[3]).ImpressionTypes.VIEW, name: callback(callback2[3]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM };
              obj = { location: callback(callback2[4]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query: closure_2, source: closure_3 };
              obj.properties = obj;
              obj.trackImpression(obj, false);
              const tmp7 = callback2(isViewable.item);
            }
          }
        }
      });
    }, items)
  };
  const items = [entrypoint, getApplicationIdFromApplicationItem, getImpressionPropsFromApplicationItem, first];
  return obj;
};
