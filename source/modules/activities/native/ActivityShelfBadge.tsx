// Module ID: 11194
// Function ID: 87215
// Name: ActivityShelfBadge
// Dependencies: []
// Exports: default

// Module 11194 (ActivityShelfBadge)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { color: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017920974029, props: 173030603526584200000000, application: 203543514636766860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, props: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000437025033151076, assign: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021729236909603, replace: 219625859662622850000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[5]).colors.STATUS_POSITIVE_BACKGROUND };
obj.badge = obj;
obj.newBadge = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_NOTIFICATION_BACKGROUND };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_NOTIFICATION_BACKGROUND };
obj.updatedBadge = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BADGE_BACKGROUND_BRAND };
obj.elevationShadow = arg1(dependencyMap[6]).generateBoxShadowStyle(arg1(dependencyMap[6]).FOUR_DP_ELEVATION_SHADOW_PARAMS);
obj.badgeText = { fontFamily: arg1(dependencyMap[2]).Fonts.DISPLAY_EXTRABOLD };
let closure_4 = obj.createStyles(obj);
const obj6 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/native/ActivityShelfBadge.tsx");

export default function ActivityShelfBadge(arg0) {
  let labelType;
  let replacementStyles;
  ({ labelType, replacementStyles } = arg0);
  const tmp = callback();
  if (null == replacementStyles) {
    replacementStyles = tmp.badge;
  }
  if (labelType === arg1(dependencyMap[7]).EmbeddedActivityLabelTypes.NEW) {
    let obj = {};
    const items = [replacementStyles, , ];
    ({ newBadge: arr[1], elevationShadow: arr[2] } = tmp);
    obj.style = items;
    obj = { style: tmp.badgeText };
    const intl = arg1(dependencyMap[9]).intl;
    obj.children = intl.string(arg1(dependencyMap[9]).t.y2b7CA);
    obj.children = jsx(arg1(dependencyMap[8]).Text, obj);
    let tmp6 = <View {...obj} />;
  } else {
    tmp6 = null;
    if (labelType === arg1(dependencyMap[7]).EmbeddedActivityLabelTypes.UPDATED) {
      obj = {};
      const items1 = [replacementStyles, , ];
      ({ updatedBadge: arr2[1], elevationShadow: arr2[2] } = tmp);
      obj.style = items1;
      const obj1 = { style: tmp.badgeText };
      const intl2 = arg1(dependencyMap[9]).intl;
      obj1.children = intl2.string(arg1(dependencyMap[9]).t./qdhkk);
      obj.children = jsx(arg1(dependencyMap[8]).Text, obj1);
      tmp6 = <View {...obj} />;
    }
  }
  return tmp6;
};
