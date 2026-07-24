// Module ID: 11245
// Function ID: 87574
// Name: TrackSectionHeader
// Dependencies: [8225, 8604, 480, 2]
// Exports: default

// Module 11245 (TrackSectionHeader)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("isThrottled").fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  let children;
  let numItems;
  let numVisibleItems;
  let sectionName;
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.APP_LAUNCHER_SECTION };
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: _isNativeReflectConstruct.entrypoint() };
  obj.properties = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  importDefault(8604)(obj, obj, items);
  return children;
};
