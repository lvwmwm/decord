// Module ID: 9677
// Function ID: 75328
// Name: GiftingBadgeInfoActionSheet
// Dependencies: []
// Exports: default

// Module 9677 (GiftingBadgeInfoActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).getSingleRequirementThreshold;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { alignItems: "center", paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.headerContainer = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8 };
obj.title = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
const obj2 = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.description = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
const obj4 = { 1925026477: null, -1346530010: null, rowGap: importDefault(dependencyMap[7]).space.PX_8 };
obj.tierCards = obj4;
const obj5 = { "Null": "RTC_CONNECTION_LOSS_RATE", "Null": "handleJoinThreadVoice", padding: importDefault(dependencyMap[7]).space.PX_8 };
obj.tierCard = obj5;
const obj3 = { textAlign: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_16 };
obj.iconWrapper = { paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
let closure_11 = obj.createStyles(obj);
const obj6 = { paddingVertical: importDefault(dependencyMap[7]).space.PX_8 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/premium/gifting/native/GiftingBadgeInfoActionSheet.tsx");

export default function GiftingBadgeInfoActionSheet() {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => badgeById.getBadgeById(tmp(closure_2[10]).BadgeId.GIFTING));
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_5];
  const importDefault = obj1.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const effect = React.useEffect(() => {
    callback(closure_2[11]).track(constants.GIFTING_BADGE_INFO_ACTION_SHEET_OPENED);
  }, []);
  obj = { 1891290120: null, -475247768: null };
  obj = {};
  const items2 = [tmp.container, ];
  obj1 = { paddingBottom: importDefault(dependencyMap[8])().bottom + importDefault(dependencyMap[7]).space.PX_16 };
  items2[1] = obj1;
  obj.style = items2;
  const obj2 = { style: tmp.headerContainer };
  const obj3 = { 9223372036854775807: null, 9223372036854775807: "9dd37f954b23d7c3c7ed4428be93436f", -9223372036854775808: "ClydeIcon", 1602121198: "png", style: tmp.title };
  const intl = arg1(dependencyMap[14]).intl;
  obj3.children = intl.string(importDefault(dependencyMap[15]).0MB2C6);
  const items3 = [callback(arg1(dependencyMap[13]).Text, obj3), ];
  const obj4 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj4.children = intl2.string(importDefault(dependencyMap[15]).k9sNVH);
  items3[1] = callback(arg1(dependencyMap[13]).Text, obj4);
  obj2.children = items3;
  const items4 = [callback2(View, obj2), ];
  const obj5 = { style: tmp.tierCards };
  let mapped;
  if (null != stateFromStores) {
    const tiers = stateFromStores.tiers;
    if (null != tiers) {
      mapped = tiers.map((children) => {
        if (callback) {
          let simple_icon_url2 = children.complex_icon_static_url;
          if (null == simple_icon_url2) {
            simple_icon_url2 = children.simple_icon_url;
          }
          let simple_icon_url = simple_icon_url2;
        } else {
          simple_icon_url = children.complex_icon_animated_url;
          if (null == simple_icon_url) {
            simple_icon_url = children.complex_icon_static_url;
          }
          if (null == simple_icon_url) {
            simple_icon_url = children.simple_icon_url;
          }
        }
        const tmp3 = callback2(children);
        let obj = { style: tmp.tierCard };
        let tmp6 = null != simple_icon_url;
        if (tmp6) {
          obj = { style: tmp.iconWrapper };
          obj = { icon: simple_icon_url, size: 58 };
          obj.children = callback3(callback(closure_2[16]), obj);
          tmp6 = callback3(closure_4, obj);
        }
        const items = [tmp6, callback3(tmp(closure_2[13]).Text, { children: children.name }), ];
        let tmp12 = null != tmp3;
        if (tmp12) {
          const obj2 = {};
          const intl = tmp(closure_2[14]).intl;
          const obj3 = { count: tmp3 };
          obj2.children = intl.formatToPlainString(callback(closure_2[15]).qvx9E4, obj3);
          tmp12 = callback3(tmp(closure_2[13]).Text, obj2);
        }
        items[2] = tmp12;
        obj.children = items;
        return closure_10(closure_4, obj, children.key);
      });
    }
  }
  obj5.children = mapped;
  items4[1] = callback(View, obj5);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[12]).BottomSheet, obj);
};
