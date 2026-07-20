// Module ID: 15573
// Function ID: 118855
// Dependencies: []

// Module 15573
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function InviteActivityButton(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3, closure_4];
  const items1 = [applicationId];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(closure_2[8])(closure_3, closure_4, applicationId), items1);
  const importDefault = stateFromStores;
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = {
      onPress() {
          let obj = stateFromStores(paths[4]);
          obj = { activity: stateFromStores };
          obj.openLazy(applicationId(paths[6])(paths[5], paths.paths), "ActivityInviteSheet-" + stateFromStores.session_id, obj);
        },
      icon: importDefault(dependencyMap[10])
    };
    const intl = arg1(dependencyMap[11]).intl;
    obj.text = intl.string(arg1(dependencyMap[11]).t.OzOM/q);
    const intl2 = arg1(dependencyMap[11]).intl;
    obj.accessibilityLabel = intl2.string(arg1(dependencyMap[11]).t.OzOM/q);
    obj.variant = "secondary-overlay";
    obj.size = "sm";
    obj.shrink = true;
    obj.maxFontSizeMultiplier = 1;
    tmp2 = jsx(arg1(dependencyMap[9]).Button, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/activities/panel/native/InviteActivityButton.tsx");

export default memoResult;
