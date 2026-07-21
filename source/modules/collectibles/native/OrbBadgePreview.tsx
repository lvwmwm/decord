// Module ID: 8749
// Function ID: 69147
// Name: OrbBadgePreview
// Dependencies: []
// Exports: OrbBadgePreview

// Module 8749 (OrbBadgePreview)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_5 = arg1(dependencyMap[3]).createStyles({ container: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = function OrbBadgePreview() {
  let obj = arg1(dependencyMap[4]);
  obj = { style: callback().container };
  const currentUser = obj.useCurrentUser();
  obj = { compact: true, user: currentUser };
  const tmp = callback();
  const tmp3 = importDefault(dependencyMap[5]);
  const items = [arg1(dependencyMap[6]).createOrbProfileBadge()];
  obj.additionalBadges = items;
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.bxcI6Y);
  obj.children = <tmp3 {...obj} />;
  return <View {...obj} />;
};
