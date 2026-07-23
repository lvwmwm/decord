// Module ID: 12919
// Function ID: 100277
// Name: ServerTagPreviewActionSheet
// Dependencies: [31, 27, 8417, 33, 4130, 689, 8418, 8419, 12920, 4098, 4126, 1212, 4543, 5585, 5500, 5186, 2]
// Exports: default

// Module 12919 (ServerTagPreviewActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center", rowGap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.error = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/native/ServerTagPreviewActionSheet.tsx");

export default function ServerTagPreviewActionSheet(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(8418);
  let guildProfile = obj.useGuildProfile(guildId);
  guildProfile = guildProfile.guildProfile;
  const items = [guildId];
  const effect = React.useEffect(() => {
    const guildProfile = guildId(outer1_2[7]).getGuildProfile(guildId, false, { respectBackoff: true });
  }, items);
  if (null != guildProfile) {
    obj = { guildId };
    ({ tag: obj5.tag, badge: obj5.badge, badgeColorPrimary: obj5.primaryColor, badgeColorSecondary: obj5.secondaryColor } = guildProfile);
    obj.isDirty = false;
    obj.variant = "plain";
    obj.onAdopted = function onAdopted(arg0) {
      return outer1_1(outer1_2[9]).hideActionSheet();
    };
    let tmp7 = callback(importDefault(12920), obj);
  } else if (guildProfile.fetchStatus === GuildProfileFetchStatus.FETCHED) {
    obj = { style: tmp.error };
    const obj1 = { variant: "text-md/medium", color: "text-muted" };
    const intl = guildId(1212).intl;
    obj1.children = intl.string(guildId(1212).t.tmGHjc);
    const items1 = [callback(guildId(4126).Text, obj1), ];
    const obj2 = { variant: "secondary" };
    const intl2 = guildId(1212).intl;
    obj2.text = intl2.string(guildId(1212).t["5911Lb"]);
    obj2.onPress = function onPress() {
      return guildId(outer1_2[7]).getGuildProfile(guildId, true);
    };
    items1[1] = callback(guildId(4543).Button, obj2);
    obj.children = items1;
    tmp7 = callback2(View, obj);
  } else {
    tmp7 = callback(guildId(5585).SceneLoadingIndicator, {});
  }
  const obj3 = {};
  const obj4 = {};
  const intl3 = guildId(1212).intl;
  obj4.title = intl3.string(guildId(1212).t["2QmKZ2"]);
  const items2 = [callback(guildId(5186).BottomSheetTitleHeader, obj4), tmp7];
  obj3.children = items2;
  return callback2(guildId(5500).ActionSheet, obj3);
};
