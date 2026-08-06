// Module ID: 11401
// Function ID: 11402
// Name: TrackSectionHeader
// Dependencies: [11392, 9267, 503, 2]
// Exports: default

// Module 11401 (TrackSectionHeader)
import handleDismissWithDismissed from "handleDismissWithDismissed";

const require = arg1;
const result = require("encodeProperties").fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  let children;
  let numItems;
  let numVisibleItems;
  let sectionName;
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: null, name: null, properties: null };
  obj[0] = require(503) /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = require(503) /* encodeProperties */.ImpressionNames.APP_LAUNCHER_SECTION;
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: handleDismissWithDismissed.entrypoint() };
  obj[2] = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  importDefault(9267)(obj, obj, items);
  return children;
};
