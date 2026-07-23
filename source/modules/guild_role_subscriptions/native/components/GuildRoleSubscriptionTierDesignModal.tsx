// Module ID: 16462
// Function ID: 128278
// Name: MemberPreviews
// Dependencies: [57, 31, 27, 14094, 653, 33, 4130, 689, 3834, 14127, 12905, 16436, 14116, 5489, 16419, 7494, 1212, 16425, 16463, 16428, 2]
// Exports: GuildRoleSubscriptionTierDesignTab, default

// Module 16462 (MemberPreviews)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { GuildRoleSubscriptionsTierScenes as closure_7 } from "MAX_SUBSCRIPTION_TIERS";
import { UPLOAD_SMALL_SIZE } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function MemberPreviews(role) {
  role = role.role;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3834) /* map */;
  const token = obj.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW, importDefault(689).themes.DARK);
  const token1 = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW, importDefault(689).themes.LIGHT);
  const obj2 = require(3834) /* map */;
  const token2 = require(3834) /* map */.useToken(importDefault(689).colors.TEXT_DEFAULT, importDefault(689).themes.DARK);
  const obj3 = require(3834) /* map */;
  obj = { style: tmp.memberPreviews };
  const token3 = require(3834) /* map */.useToken(importDefault(689).colors.TEXT_DEFAULT, importDefault(689).themes.LIGHT);
  const items = [, , ];
  ({ member: arr[0], memberLight: arr[1] } = tmp);
  items[2] = { backgroundColor: token1 };
  const items1 = [callback2(require(14127) /* GuildRoleSubscriptionMemberPreview */.GuildRoleSubscriptionMemberPreview, { style: items, textStyle: { color: token3 }, role }), ];
  const items2 = [, , ];
  ({ member: arr3[0], memberDark: arr3[1] } = tmp);
  items2[2] = { backgroundColor: token };
  items1[1] = callback2(require(14127) /* GuildRoleSubscriptionMemberPreview */.GuildRoleSubscriptionMemberPreview, { style: items2, textStyle: { color: token2 }, role });
  obj.children = items1;
  return callback3(View, obj);
}
function Content() {
  let editStateId;
  let guildId;
  let tmp4;
  let tmp5;
  const tmp = role(12905)();
  let obj = _require(16436);
  const editStateContext = obj.useEditStateContext();
  ({ editStateId, guildId } = editStateContext);
  let obj1 = importAll(14116);
  [tmp4, tmp5] = callback(obj1.useRoleColor(editStateId, guildId), 2);
  let obj2 = importAll(14116);
  _require = callback(obj2.useRoleIcon(editStateId, guildId), 2)[1];
  let obj3 = importAll(14116);
  role = obj3.useRole(editStateId, guildId);
  const items = [role];
  const customIconSrc = React.useMemo(() => {
    let roleIconData = callback(outer1_3[13]).getRoleIconData(role);
    if (null == roleIconData) {
      roleIconData = {};
    }
    return roleIconData;
  }, items).customIconSrc;
  let tmp7;
  if (null != customIconSrc) {
    obj = { uri: customIconSrc };
    tmp7 = obj;
  }
  const tmp3 = callback(obj1.useRoleColor(editStateId, guildId), 2);
  const roleSubscriptionSettingsDisabled = _require(16419).useRoleSubscriptionSettingsDisabled();
  obj = {};
  const items1 = [callback2(MemberPreviews, { role }), , , , ];
  obj1 = { style: tmp.header };
  const obj6 = _require(16419);
  const intl = _require(1212).intl;
  obj1.children = intl.string(_require(1212).t.sEr1zr);
  items1[1] = callback2(role(7494), obj1);
  obj2 = {};
  const tmp9 = role(7494);
  const intl2 = _require(1212).intl;
  obj2.description = intl2.string(_require(1212).t.Glqj9m);
  obj2.image = tmp7;
  obj2.imageUploadSize = UPLOAD_SMALL_SIZE;
  obj2.previewShape = _require(16425).PreviewShape.SQUIRCLE;
  obj2.previewResizeMode = "cover";
  obj2.setImage = function setImage(icon) {
    return callback({ icon: icon.uri, unicodeEmoji: undefined });
  };
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items1[2] = callback2(role(16425), obj2);
  obj3 = { style: tmp.header };
  const tmp10 = role(16425);
  const intl3 = _require(1212).intl;
  obj3.children = intl3.string(_require(1212).t["W7hH+z"]);
  items1[3] = callback2(role(7494), obj3);
  items1[4] = callback2(role(16463), { color: tmp4, onChange: tmp5, disabled: roleSubscriptionSettingsDisabled });
  obj.children = items1;
  return callback3(closure_11, obj);
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { memberPreviews: { paddingHorizontal: 16, paddingTop: 26 } };
_createForOfIteratorHelperLoose = { padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.none, borderWidth: 0, borderLeftWidth: 1, borderRightWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.member = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.memberLight = { borderTopLeftRadius: 8, borderTopRightRadius: 8, borderTopWidth: 1 };
_createForOfIteratorHelperLoose.memberDark = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderBottomWidth: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierDesignModal.tsx");

export default function GuildRoleSubscriptionTierDesignModal(arg0) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.AbcgTx);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(require(1212) /* getSystemLocale */.t.YAUjGn);
  obj.canProceedToNextStep = true;
  obj.nextStep = constants.CONFIRMATION;
  const merged = Object.assign(arg0);
  obj["children"] = callback2(Content, {});
  return callback2(importDefault(16428), obj);
};
export const GuildRoleSubscriptionTierDesignTab = function GuildRoleSubscriptionTierDesignTab() {
  return callback2(Content, {});
};
