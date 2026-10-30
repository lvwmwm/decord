// Module ID: 17638
// Function ID: 17639
// Name: AnalyticsLocationsProvider
// Dependencies: [19, 21, 7320, 2]
// Exports: AnalyticsLocationsProvider

// Module 17638 (AnalyticsLocationsProvider)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7320 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_analytics/AnalyticsLocationsProvider.tsx");

export function AnalyticsLocationsProvider(children) {
  const tmp = useAnalyticsLocationsDefault;
  return jsx(useAnalyticsLocations.LocationContext.Provider, { value: tmp(...children.newLocations).analyticsLocations, children: children.children });
}
