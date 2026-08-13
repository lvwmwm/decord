// Module ID: 11539
// Function ID: 11540
// Name: TrackSectionHeader
// Dependencies: [11530, 9399, 503, 2]
// Exports: default

// Module 11539 (TrackSectionHeader)
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
  importDefault(9399)(obj, obj, items);
  return children;
};
