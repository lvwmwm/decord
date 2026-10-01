// Module ID: 13457
// Function ID: 13458
// Name: ServerTagPreviewActionSheet
// Dependencies: [19, 17, 9028, 21, 4836, 576, 9029, 9030, 13458, 4800, 4832, 1115, 5281, 6460, 6618, 6570, 2]
// Exports: default

// Module 13457 (ServerTagPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildProfileStore from "GuildProfileStore" /* 9028 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9030 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 13458 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let obj = guildId(9029);
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
    const obj4 = { variant: "text-md/medium", color: "text-muted", children: intl.string(guildId(1115).t.tmGHjc) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1 = [closure_6(Text, obj4), ];
    const obj6 = {
      variant: "secondary",
      text: intl2.string(guildId(1115).t["5911Lb"]),
      onPress() {
          const obj = GuildProfileActionCreators;
          return obj.getGuildProfile(guildId, true);
        }
    };
    const Button = tmp2(5281).Button;
    intl2 = tmp2(1115).intl;
    items1[1] = closure_6(Button, obj6);
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(6460).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: items2 };
  const ActionSheet = tmp2(6618).ActionSheet;
  const obj13 = { title: intl3.string(guildId(1115).t["2QmKZ2"]) };
  const BottomSheetTitleHeader = tmp2(6570).BottomSheetTitleHeader;
  intl3 = tmp2(1115).intl;
  items2 = [tmp8(BottomSheetTitleHeader, obj13), tmp7];
  return closure_7(ActionSheet, obj7);
};
