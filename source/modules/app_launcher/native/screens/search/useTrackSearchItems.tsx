// Module ID: 11226
// Function ID: 87414
// Name: useTrackSearchItems
// Dependencies: [31, 10884, 8559, 480, 6755, 2]
// Exports: useTrackSearchItems

// Module 11226 (useTrackSearchItems)
import result from "result";

const require = arg1;
const result = require("trackImpression").fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(getApplicationIdFromApplicationItem, getImpressionPropsFromApplicationItem, first) {
  const _require = getApplicationIdFromApplicationItem;
  const dependencyMap = getImpressionPropsFromApplicationItem;
  const React = first;
  let obj = _require(10884);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let closure_4 = React.useRef({});
  let closure_5 = React.useRef(first);
  obj = {
    handleViewableItemsChanged: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== result) {
        ref.current = result;
        closure_4.current = {};
      }
      const item = viewableItems.forEach((isViewable) => {
        let applicationId;
        let commandId;
        if (isViewable.isViewable) {
          const tmp2 = outer1_0(isViewable.item);
          if (null != tmp2) {
            if (null == outer1_4.current[tmp2]) {
              outer1_4.current[tmp2] = true;
              ({ applicationId, commandId } = outer1_1(isViewable.item));
              let obj = callback(8559);
              obj = { type: callback(480).ImpressionTypes.VIEW, name: callback(480).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM };
              obj = { location: callback(6755).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query: outer1_2, source: outer1_3 };
              obj.properties = obj;
              obj.trackImpression(obj, false);
              const tmp7 = outer1_1(isViewable.item);
            }
          }
        }
      });
    }, items)
  };
  items = [entrypoint, getApplicationIdFromApplicationItem, getImpressionPropsFromApplicationItem, first];
  return obj;
};
