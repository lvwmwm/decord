// Module ID: 11588
// Function ID: 11589
// Name: useTrackSearchItems
// Dependencies: [19, 10785, 8230, 1249, 6943, 2]
// Exports: useTrackSearchItems

// Module 11588 (useTrackSearchItems)
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, viewableItems;

let react = react_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, set) {
  let current;
  let items;
  _require = callback3;
  dependencyMap = memo1;
  react = set;
  let obj = require("AppLauncherContext");
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  let closure_4 = react.useRef({});
  const ref = react.useRef(set);
  let obj2 = {
    handleViewableItemsChanged: react.useCallback((viewableItems) => {
      let query;
      let source;
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== current) {
        ref.current = current;
        ref.current = {};
      }
      const item = viewableItems.forEach((isViewable) => {
        let applicationId;
        let commandId;
        let obj2;
        if (isViewable.isViewable) {
          const tmp2 = closure_1_0(isViewable.item);
          if (null != tmp2) {
            if (null == ref.current[tmp2]) {
              ref.current[tmp2] = true;
              ({ applicationId, commandId } = closure_1_1(isViewable.item));
              closure_1_1(isViewable.item);
              const obj = { type: closure_0(closure_1[3]).ImpressionTypes.VIEW, name: closure_0(closure_1[3]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: obj2 };
              const trackImpression = closure_0(closure_1[2]).trackImpression;
              closure_0(closure_1[2]);
              obj2 = { location: closure_0(closure_1[4]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
              trackImpression(obj, false);
            }
          }
        }
      });
    }, items)
  };
  items = [entrypoint, callback3, memo1, set];
  return obj2;
};
