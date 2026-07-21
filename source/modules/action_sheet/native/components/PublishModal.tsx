// Module ID: 9851
// Function ID: 76252
// Name: PublishModal
// Dependencies: []
// Exports: default

// Module 9851 (PublishModal)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ View: closure_4, ActivityIndicator: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = { alertContainer: { paddingTop: 16 }, alertLoading: { bm: -16, cursor: -9 } };
obj = { "Null": null, "Null": null, "Null": null, color: arg1(dependencyMap[5]).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
obj.alertBodyText = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default function PublishModal(channelId) {
  const tmp = callback2();
  const tmp2 = callback(importDefault(dependencyMap[6])(channelId.channelId), 2);
  const first = tmp2[0];
  if (tmp2[1]) {
    let obj = { style: tmp.alertLoading };
    obj = { animating: true };
    obj.children = <closure_5 {...obj} />;
    return <closure_4 {...obj} />;
  } else {
    let guildsFollowing;
    if (null != first) {
      guildsFollowing = first.guildsFollowing;
    }
    let tmp6 = null != guildsFollowing;
    if (tmp6) {
      let guildsFollowing1;
      if (null != first) {
        guildsFollowing1 = first.guildsFollowing;
      }
      tmp6 = guildsFollowing1 > 0;
    }
    obj = { style: tmp.alertContainer };
    const obj1 = { style: tmp.alertBodyText };
    const intl = arg1(dependencyMap[8]).intl;
    if (tmp6) {
      const obj2 = {};
      let guildsFollowing2;
      if (null != first) {
        guildsFollowing2 = first.guildsFollowing;
      }
      let num3 = 0;
      if (null != guildsFollowing2) {
        num3 = guildsFollowing2;
      }
      obj2.numGuildsFollowing = num3;
      obj1.children = intl.format(tmp12(tmp13[8]).t.GCGrNP, obj2);
      let tmp14 = obj1;
    } else {
      obj1.children = intl.string(tmp12(tmp13[8]).t.8FpqOs);
      tmp14 = obj1;
    }
    obj.children = jsx(arg1(dependencyMap[7]).LegacyText, tmp14);
    return <closure_4 {...obj} />;
  }
};
