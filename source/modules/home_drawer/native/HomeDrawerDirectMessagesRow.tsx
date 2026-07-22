// Module ID: 14724
// Function ID: 111055
// Name: HomeDrawerDMsRow
// Dependencies: []
// Exports: default

// Module 14724 (HomeDrawerDMsRow)
function HomeDrawerDMsRow() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5, closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((arg0) => status.getStatus(arg0) !== constants.OFFLINE).length;
  });
  let tmp3 = null;
  if (stateFromStores > 0) {
    obj = { style: tmp.subtitle };
    obj = { style: tmp.onlineDot };
    const items1 = [callback(View, obj), ];
    const obj1 = { 803799044: 3309567, 1269170180: 601874432, 711589892: 4319821 };
    const intl = arg1(dependencyMap[10]).intl;
    const obj2 = { numFriends: stateFromStores };
    obj1.children = intl.format(arg1(dependencyMap[10]).t.N5UIKr, obj2);
    items1[1] = callback(arg1(dependencyMap[9]).Text, obj1);
    obj.children = items1;
    tmp3 = callback2(View, obj);
  }
  const obj3 = {};
  const obj4 = { 803799044: true, 1269170180: true, 711589892: true };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[10]).t.YUU0RF);
  obj3.title = callback(arg1(dependencyMap[9]).Text, obj4);
  obj3.subtitle = tmp3;
  return callback(arg1(dependencyMap[11]).HomeDrawerSharedItem, obj3);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const StatusTypes = arg1(dependencyMap[4]).StatusTypes;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { subtitle: { "Bool(false)": "safety_user_sentiment_notice_dismissed_at", "Bool(false)": "message", "Bool(false)": null } };
obj = { "Null": 800, "Null": 16, borderRadius: importDefault(dependencyMap[7]).radii.round, backgroundColor: importDefault(dependencyMap[7]).colors.TEXT_STATUS_ONLINE };
obj.onlineDot = obj;
let closure_9 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = arg1(dependencyMap[12]).MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = callback(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
};
