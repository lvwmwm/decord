// Module ID: 15735
// Function ID: 15736
// Name: ServerTagPreviewActionSheet
// Dependencies: [19, 17, 9046, 21, 5014, 575, 9047, 9048, 15736, 5258, 5624, 1113, 5634, 7208, 7366, 7321, 2]
// Exports: default

// Module 15735 (ServerTagPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import GuildProfileStore from "GuildProfileStore" /* 9046 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9048 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 15736 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { error: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, alignItems: "center", rowGap: nativeDefault.space.PX_12 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let tmp7;
  let tmp8;
  guildId = guildId.guildId;
  const tmp = closure_8();
  let obj = guildId(9047);
  const guildProfile1 = obj.useGuildProfile(guildId);
  let guildProfile = guildProfile1.guildProfile;
  const items = [guildId];
  const fetchStatus = guildProfile1.fetchStatus;
  const effect = react.useEffect(() => {
    const obj = GuildProfileActionCreators;
    const guildProfile = obj.getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    const obj2 = {
      guildId,
      tag: null,
      badge: null,
      primaryColor: null,
      secondaryColor: null,
      isDirty: false,
      variant: "plain",
      onAdopted() {
          const obj = ActionSheetActionCreatorsDefault;
          return obj.hideActionSheet();
        }
    };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    tmp7 = closure_6(GuildSettingsServerTagPreviewDefault, obj2);
    tmp8 = closure_6;
  } else if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
    const obj3 = { style: tmp.error, children: items1 };
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(guildId(1113).t.tmGHjc) };
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    items1 = [closure_6(Text, obj4), ];
    const obj6 = {
      variant: "secondary",
      text: intl2.string(guildId(1113).t["5911Lb"]),
      onPress() {
          const obj = GuildProfileActionCreators;
          return obj.getGuildProfile(guildId, true);
        }
    };
    const Button = tmp2(5634).Button;
    intl2 = tmp2(1113).intl;
    items1[1] = closure_6(Button, obj6);
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(7208).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: items2 };
  const ActionSheet = tmp2(7366).ActionSheet;
  const obj13 = { title: intl3.string(guildId(1113).t["2QmKZ2"]) };
  const BottomSheetTitleHeader = tmp2(7321).BottomSheetTitleHeader;
  intl3 = tmp2(1113).intl;
  items2 = [tmp8(BottomSheetTitleHeader, obj13), tmp7];
  return closure_7(ActionSheet, obj7);
};
