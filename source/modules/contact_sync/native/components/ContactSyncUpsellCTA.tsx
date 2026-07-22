// Module ID: 12750
// Function ID: 97798
// Dependencies: []

// Module 12750
const dismissUpsellCTA = arg1(dependencyMap[1]).dismissUpsellCTA;
const importAllResult = importAll(dependencyMap[0]);
({ AnalyticEvents: closure_4, AnalyticsSections: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let obj = {};
obj = { padding: 12, borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_7 = arg1(dependencyMap[4]).createStyles(obj);
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function ContactSyncUpsellCTA(location) {
  const arg1 = location.location;
  const obj = {
    onPress() {
      let obj = callback(closure_2[7]);
      obj = { type: constants2.CONTACT_SYNC_MODAL };
      obj = {};
      let str = "Friends List Upsell";
      let str2 = "Friends List Upsell";
      if (null != location) {
        str2 = location;
      }
      obj.page = str2;
      obj.location = obj;
      obj.track(constants.OPEN_MODAL, obj);
      const obj1 = {};
      if (null != location) {
        str = location;
      }
      obj1.page = str;
      location(closure_2[8]).openContactSyncModal({}, obj1);
    },
    onLongPress() {
      let obj = location(closure_2[9]);
      obj = { 0: "<string:1912602975>", 9223372036854775807: "accessibilityLabel", 9223372036854775807: "String" };
      obj = {};
      const intl = location(closure_2[10]).intl;
      obj.label = intl.string(location(closure_2[10]).t.WAI6xu);
      obj.onPress = function onPress() {
        callback();
      };
      const items = [obj];
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items
  };
  const items = [callback().container, location.style];
  obj.iconSource = importDefault(dependencyMap[11]);
  const intl = arg1(dependencyMap[10]).intl;
  obj.title = intl.string(arg1(dependencyMap[10]).t.T6Rfd9);
  const intl2 = arg1(dependencyMap[10]).intl;
  obj.subtitle = intl2.string(arg1(dependencyMap[10]).t.c6KIpg);
  return jsx(arg1(dependencyMap[6]).FormCTA, obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
