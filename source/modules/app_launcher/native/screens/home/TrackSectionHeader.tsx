// Module ID: 11198
// Function ID: 87207
// Name: TrackSectionHeader
// Dependencies: []
// Exports: default

// Module 11198 (TrackSectionHeader)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  let children;
  let numItems;
  let numVisibleItems;
  let sectionName;
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: arg1(dependencyMap[2]).ImpressionTypes.VIEW, name: arg1(dependencyMap[2]).ImpressionNames.APP_LAUNCHER_SECTION };
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: closure_3.entrypoint() };
  obj.properties = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  importDefault(dependencyMap[1])(obj, obj, items);
  return children;
};
