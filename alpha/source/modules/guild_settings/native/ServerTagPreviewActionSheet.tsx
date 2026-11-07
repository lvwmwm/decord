// Module ID: 16038
// Function ID: 16039
// Name: ServerTagPreviewActionSheet
// Dependencies: [19, 17, 9126, 21, 5140, 575, 9127, 9128, 16039, 5374, 5751, 1113, 5758, 7271, 7426, 7382, 2]
// Exports: default

// Module 16038 (ServerTagPreviewActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import GuildProfileStore from "GuildProfileStore" /* 9126 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9128 */;
import GuildSettingsServerTagPreviewDefault from "GuildSettingsServerTagPreview" /* 16039 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
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
  let obj = guildId(9127);
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
    const obj4 = { variant: "body-md/medium", color: "text-muted", children: intl.string(guildId(1113).t.tmGHjc) };
    const Text = tmp2(5751).Text;
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
    const Button = tmp2(5758).Button;
    intl2 = tmp2(1113).intl;
    items1[1] = closure_6(Button, obj6);
    tmp7 = closure_7(View, obj3);
    tmp8 = closure_6;
  } else {
    tmp7 = closure_6(tmp2(7271).SceneLoadingIndicator, {});
    tmp8 = closure_6;
  }
  const obj7 = { children: items2 };
  const ActionSheet = tmp2(7426).ActionSheet;
  const obj13 = { title: intl3.string(guildId(1113).t["2QmKZ2"]) };
  const BottomSheetTitleHeader = tmp2(7382).BottomSheetTitleHeader;
  intl3 = tmp2(1113).intl;
  items2 = [tmp8(BottomSheetTitleHeader, obj13), tmp7];
  return closure_7(ActionSheet, obj7);
};
