// Module ID: 16917
// Function ID: 16918
// Name: AnalyticsLocationsProvider
// Dependencies: [19, 21, 7326, 2]
// Exports: AnalyticsLocationsProvider

// Module 16917 (AnalyticsLocationsProvider)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7326 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_analytics/AnalyticsLocationsProvider.tsx");

export function AnalyticsLocationsProvider(children) {
  const tmp = useAnalyticsLocationsDefault;
  return jsx(useAnalyticsLocations.LocationContext.Provider, { value: tmp(...children.newLocations).analyticsLocations, children: children.children });
}
