// Module ID: 8554
// Function ID: 68006
// Name: OrbsBadgeCoachmarkImg
// Dependencies: []
// Exports: default, useOrbsBadgeCoachmark

// Module 8554 (OrbsBadgeCoachmarkImg)
function OrbsBadgeCoachmarkImg() {
  const tmp = callback();
  let obj = { style: tmp.coachmarkImageContainer };
  obj = {};
  obj = { uri: importDefault(dependencyMap[4]) };
  obj.source = obj;
  obj.style = tmp.coachmarkImage;
  obj.children = <closure_5 {...obj} />;
  return <closure_4 {...obj} />;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ coachmarkImageContainer: { <string:3596066964>: null, <string:3638417373>: null }, coachmarkImage: {}, coachmarkDescription: { marginBottom: -10 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/native/OrbsBadgeCoachmark.tsx");

export default function OrbsBadgeCoachmark(badgeRef) {
  let obj = Object.create(null);
  obj.badgeRef = 0;
  const merged = Object.assign(badgeRef, obj);
  obj = arg1(dependencyMap[7]);
  const coachmark = obj.useCoachmark(badgeRef.badgeRef, merged);
  return null;
};
export const useOrbsBadgeCoachmark = function useOrbsBadgeCoachmark(disabled) {
  disabled = disabled.disabled;
  const arg1 = disabled;
  const tmp = callback();
  const importDefault = tmp;
  const items = [disabled, tmp.coachmarkDescription];
  let tmp3 = null;
  if (!disabled) {
    const obj = { props: tmp2 };
    tmp3 = obj;
  }
  return tmp3;
};
