// Module ID: 16582
// Function ID: 16583
// Name: GroupDMRecipientLimitTitle
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1364, 11086, 4531, 1115, 4832, 8122, 11670, 2]
// Exports: default

// Module 16582 (GroupDMRecipientLimitTitle)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11086 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11670 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp6;
({ Pressable: c3, View: closure_4 } = react_native);
const MAX_GROUP_DM_PARTICIPANTS = Constants.MAX_GROUP_DM_PARTICIPANTS;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: { textAlign: "center", fontSize: 18 }, subtitleRow: obj2, subtitle: { textAlign: "center" }, nitroWheelIcon: { transform: tmp6 } };
obj2 = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
tmp6 = undefined;
if (PlatformUtils.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp6 = items;
}
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default function GroupDMRecipientLimitTitle(arg0) {
  let items1;
  let memberCount;
  let recipientLimit;
  let rect;
  let str2;
  let title;
  let tmp15Result2;
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp = closure_9();
  const obj = GroupDMNitroUpsellModel;
  const groupDMNitroAudience = obj.useGroupDMNitroAudience();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  const obj4 = useToken;
  let token2 = obj4.useToken(nativeDefault.colors.TEXT_SUBTLE);
  let str = "text-subtle";
  if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
    if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
      str = "premium-nitro-pink-text";
    }
    str2 = str;
  } else {
    str2 = str;
    if (memberCount >= recipientLimit) {
      str2 = "text-feedback-critical";
    }
  }
  const intl = tmp2(1115).intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t["9EQix0"], { numMembers: memberCount, maxMemberLimit: recipientLimit });
  const items = [, ];
  const obj5 = { lineClamp: 1, variant: token, color: "mobile-text-heading-primary", style: tmp.title, maxFontSizeMultiplier: 2, children: title };
  items[0] = metroRequire(Text_Text.Text, obj5);
  let tmp15Result = null;
  const obj6 = { style: tmp.subtitleRow, children: items1 };
  const tmp14 = metroImportAll;
  if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
    const NitroWheelIcon = tmp2(8122).NitroWheelIcon;
    if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
      token2 = token1;
    }
    const obj7 = { size: "xxs", color: token2, style: tmp.nitroWheelIcon, accessible: false };
    tmp15Result = tmp15(NitroWheelIcon, obj7);
  }
  items1 = [tmp15Result, ];
  const obj8 = { children: items };
  const obj9 = { lineClamp: 1, variant: "text-xs/medium", color: str2, style: tmp.subtitle, maxFontSizeMultiplier: 2, children: formatToPlainStringResult };
  items1[1] = metroRequire(Text_Text.Text, obj9);
  items[1] = metroImportDefault(React3, obj6);
  const tmp13Result = metroImportDefault(tmp14, obj8);
  if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
    const _HermesInternal = HermesInternal;
    const obj10 = { accessible: true, accessibilityRole: "button", accessibilityLabel: "" + title + ", " + formatToPlainStringResult, hitSlop: rect, onPress: openGroupDMNitroCapInfoActionSheetDefault, children: tmp13Result };
    rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
    tmp15Result2 = tmp15(_false, obj10);
  } else {
    const obj11 = { accessible: true, accessibilityRole: "header", children: tmp13Result };
    tmp15Result2 = tmp15(tmp16, obj11);
  }
  return tmp15Result2;
};
