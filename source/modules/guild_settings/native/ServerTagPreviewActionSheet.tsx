// Module ID: 12805
// Function ID: 98121
// Name: ServerTagPreviewActionSheet
// Dependencies: []
// Exports: default

// Module 12805 (ServerTagPreviewActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const GuildProfileFetchStatus = arg1(dependencyMap[2]).GuildProfileFetchStatus;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_24, alignItems: "center", rowGap: importDefault(dependencyMap[5]).space.PX_12 };
obj.error = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let obj = arg1(dependencyMap[6]);
  let guildProfile = obj.useGuildProfile(guildId);
  guildProfile = guildProfile.guildProfile;
  const items = [guildId];
  const effect = React.useEffect(() => {
    const guildProfile = guildId(closure_2[7]).getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    obj = { guildId };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    obj.isDirty = false;
    obj.variant = "plain";
    obj.onAdopted = function onAdopted() {
      return callback(closure_2[9]).hideActionSheet();
    };
    let tmp7 = callback(importDefault(dependencyMap[8]), obj);
  } else if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    obj = { style: tmp.error };
    const obj1 = { cachedAt: "FrameEffect_02-4_Out", edpbxy: 0 };
    const intl = arg1(dependencyMap[11]).intl;
    obj1.children = intl.string(arg1(dependencyMap[11]).t.tmGHjc);
    const items1 = [callback(arg1(dependencyMap[10]).Text, obj1), ];
    const obj2 = { variant: "secondary" };
    const intl2 = arg1(dependencyMap[11]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[11]).t.5911Lb);
    obj2.onPress = function onPress() {
      return guildId(closure_2[7]).getGuildProfile(guildId, true);
    };
    items1[1] = callback(arg1(dependencyMap[12]).Button, obj2);
    obj.children = items1;
    tmp7 = callback2(View, obj);
  } else {
    tmp7 = callback(arg1(dependencyMap[13]).SceneLoadingIndicator, {});
  }
  const obj3 = {};
  const obj4 = {};
  const intl3 = arg1(dependencyMap[11]).intl;
  obj4.title = intl3.string(arg1(dependencyMap[11]).t.2QmKZ2);
  const items2 = [callback(arg1(dependencyMap[15]).BottomSheetTitleHeader, obj4), tmp7];
  obj3.children = items2;
  return callback2(arg1(dependencyMap[14]).ActionSheet, obj3);
};
