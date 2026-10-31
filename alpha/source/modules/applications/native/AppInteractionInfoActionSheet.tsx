// Module ID: 14524
// Function ID: 14525
// Name: AppInteractionInfoActionSheet
// Dependencies: [19, 1397, 4885, 1383, 21, 5014, 575, 7321, 1113, 6980, 7002, 5651, 504, 8752, 6975, 6957, 1187, 8750, 5272, 7060, 2]
// Exports: default

// Module 14524 (AppInteractionInfoActionSheet)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7002 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import UserActionCreators from "UserActionCreators" /* 8752 */;
import react_mod from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1397 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let metroImportAll;
let metroImportDefault;
let obj2;
let react = react_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { body: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  let Avatar;
  let Avatar2;
  let TableRowGroup;
  let closure_2;
  let closure_3;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let obj10;
  let obj13;
  let obj6;
  let obj7;
  let obj9;
  let onBack;
  let tmp23;
  let tmp26;
  let tmp28;
  message = message.message;
  ({ guildId, onBack } = message);
  dependencyMap = undefined;
  react = undefined;
  let stateFromStores;
  let id;
  let obj = react;
  const items = [onBack];
  let tmp = closure_9();
  const interactionMetadata = message.interactionMetadata;
  let tmp3;
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let tmpResult;
    const obj = { title: intl.string(intl4.t.brw6oR), leading: tmpResult };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl4.intl;
    tmpResult = null != onBack;
    if (tmpResult) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl4.t["13/7kX"]), onPress: tmp4, children: metroImportDefault(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }) };
      const PressableOpacity = tmp2(6980).PressableOpacity;
      intl2 = tmp2(1113).intl;
      tmpResult = tmp(PressableOpacity, obj2);
    }
    return metroImportDefault(BottomSheetTitleHeader, obj);
  }, items);
  if (interactionMetadata != null) {
    const tmp4 = message;
    tmp3 = interactionMetadata.authorizing_integration_owners[message(undefined, 5651).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp3;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp6;
  if (interactionMetadata2 != null) {
    tmp6 = interactionMetadata2.authorizing_integration_owners[message(undefined, 5651).ApplicationIntegrationType.GUILD_INSTALL];
  }
  react = tmp6;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  let obj2 = message(504);
  const items1 = [id];
  stateFromStores = obj2.useStateFromStores(items1, () => UserStore.getUser(closure_2));
  const items2 = [stateFromStores];
  const obj3 = message(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
  const items3 = [id];
  const obj4 = message(504);
  const stateFromStores2 = obj4.useStateFromStores(items3, () => UserStore.getUser(id));
  id = stateFromStores2;
  const items4 = [stateFromStores, tmp3];
  const effect = obj.useEffect(() => {
    const tmp = null == stateFromStores && null != closure_2;
    if (tmp) {
      const obj = UserActionCreators;
      const user = obj.getUser(closure_2);
    }
  }, items4);
  let tmp16 = stateFromStores2;
  if (null == stateFromStores2) {
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    const tmp17 = id;
    if (interactionMetadata4 != null) {
      user = interactionMetadata4.user;
    }
    const self = this;
    const self2 = this;
    const tmp172 = new tmp17(user);
    id = tmp172;
    tmp16 = tmp172;
  }
  if (null != stateFromStores1) {
    const obj5 = { icon: closure_7(tmp26, obj6), label: stateFromStores1.name, subLabel: intl2.formatToPlainString(message(1113).t.ShLXXB, obj7) };
    const TableRow2 = tmp10(6975).TableRow;
    obj6 = { guild: stateFromStores1, size: message(6957).GuildIconSizes.SMALL_32 };
    tmp26 = onBack(6957);
    intl2 = tmp10(1113).intl;
    obj7 = { application: message.author.username };
    tmp23 = closure_7(TableRow2, obj5);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      const obj8 = {
        icon: closure_7(Avatar, obj9),
        label: stateFromStores.username,
        subLabel: intl.formatToPlainString(message(1113).t.ShLXXB, obj10),
        onPress() {
              const obj = { userId: stateFromStores.id, channelId: message.channel_id };
              return showUserProfileActionSheetDefault(obj);
            },
        arrow: true
      };
      const TableRow = tmp10(6975).TableRow;
      obj9 = { user: stateFromStores, size: message(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      Avatar = tmp10(1187).Avatar;
      intl = tmp10(1113).intl;
      obj10 = { application: message.author.username };
      tmp23 = closure_7(TableRow, obj8);
    }
  }
  const obj11 = { header: memo, bodyStyles: tmp.body, children: tmp28(TableRowGroup, { hasIcons: true, children: items5 }) };
  BottomSheet = tmp10(5272).BottomSheet;
  items5 = [tmp23, ];
  let tmp27Result = null;
  TableRowGroup = tmp10(7060).TableRowGroup;
  tmp28 = closure_8;
  if (null != tmp16) {
    const obj12 = {
      icon: closure_7(Avatar2, obj13),
      label: tmp16.username,
      subLabel: intl3.string(message(1113).t["04gxNg"]),
      onPress() {
          const obj = { userId: id.id, channelId: message.channel_id };
          return showUserProfileActionSheetDefault(obj);
        },
      arrow: true
    };
    const TableRow3 = tmp10(6975).TableRow;
    obj13 = { user: tmp16, size: message(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    Avatar2 = tmp10(1187).Avatar;
    intl3 = tmp10(1113).intl;
    tmp27Result = tmp27(TableRow3, obj12);
  }
  items5[1] = tmp27Result;
  return closure_7(BottomSheet, obj11);
};
