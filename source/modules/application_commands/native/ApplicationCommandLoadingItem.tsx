// Module ID: 11424
// Function ID: 88933
// Name: ApplicationCommandLoadingItem
// Dependencies: []
// Exports: default

// Module 11424 (ApplicationCommandLoadingItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const AUTOCOMPLETE_ROW_HEIGHT = arg1(dependencyMap[2]).AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = {};
  obj = { size: "TiktokNeutralIcon", text: "png", grow: true, variant: "/assets/design/components/Icon/native/redesign/generated/images", height: Math.max(arg0 * AUTOCOMPLETE_ROW_HEIGHT, AUTOCOMPLETE_ROW_HEIGHT) };
  obj.applicationCommandLoadingItem = obj;
  obj.applicationCommandLoadingLeftWrapper = {};
  obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
  obj.applicationCommandLoadingName = obj;
  const obj1 = { "Null": null, "Null": 0, "Null": null, "Null": 0, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
  obj.applicationCommandLoadingDescription = obj1;
  obj.applicationCommandLoadingSectionName = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/application_commands/native/ApplicationCommandLoadingItem.tsx");

export default function ApplicationCommandLoadingItem() {
  let obj = arg1(dependencyMap[6]);
  const tmp = callback3(obj.useFontScale());
  obj = { style: tmp.applicationCommandLoadingItem };
  obj = { style: tmp.applicationCommandLoadingLeftWrapper };
  const items = [callback(View, { style: tmp.applicationCommandLoadingName }), callback(View, { style: tmp.applicationCommandLoadingDescription })];
  obj.children = items;
  const items1 = [callback2(View, obj), callback(View, { style: tmp.applicationCommandLoadingSectionName })];
  obj.children = items1;
  return callback2(View, obj);
};
