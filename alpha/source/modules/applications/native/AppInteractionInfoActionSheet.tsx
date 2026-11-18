// Module ID: 12115
// Function ID: 12116
// Name: AppInteractionInfoActionSheet
// Dependencies: [19, 1407, 4694, 1388, 21, 4823, 575, 7426, 1113, 6941, 7010, 5438, 504, 6865, 6956, 7233, 1187, 7978, 5051, 7259, 2]
// Exports: default

// Module 12115 (AppInteractionInfoActionSheet)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import UserActionCreators from "UserActionCreators" /* 6865 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7010 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7426 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7978 */;
import react_mod from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1407 */;
import GuildStore from "GuildStore" /* 4694 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4823 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
      const PressableOpacity = tmp2(6941).PressableOpacity;
      intl2 = tmp2(1113).intl;
      tmpResult = tmp(PressableOpacity, obj2);
    }
    return metroImportDefault(BottomSheetTitleHeader, obj);
  }, items);
  if (interactionMetadata != null) {
    const tmp4 = message;
    tmp3 = interactionMetadata.authorizing_integration_owners[message(undefined, 5438).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp3;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp6;
  if (interactionMetadata2 != null) {
    tmp6 = interactionMetadata2.authorizing_integration_owners[message(undefined, 5438).ApplicationIntegrationType.GUILD_INSTALL];
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
    const TableRow2 = tmp10(6956).TableRow;
    obj6 = { guild: stateFromStores1, size: message(7233).GuildIconSizes.SMALL_32 };
    tmp26 = onBack(7233);
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
      const TableRow = tmp10(6956).TableRow;
      obj9 = { user: stateFromStores, size: message(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      Avatar = tmp10(1187).Avatar;
      intl = tmp10(1113).intl;
      obj10 = { application: message.author.username };
      tmp23 = closure_7(TableRow, obj8);
    }
  }
  const obj11 = { header: memo, bodyStyles: tmp.body, children: tmp28(TableRowGroup, { hasIcons: true, children: items5 }) };
  const BottomSheet = tmp10(5051).BottomSheet;
  items5 = [tmp23, ];
  let tmp27Result = null;
  TableRowGroup = tmp10(7259).TableRowGroup;
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
    const TableRow3 = tmp10(6956).TableRow;
    obj13 = { user: tmp16, size: message(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    Avatar2 = tmp10(1187).Avatar;
    intl3 = tmp10(1113).intl;
    tmp27Result = tmp27(TableRow3, obj12);
  }
  items5[1] = tmp27Result;
  return closure_7(BottomSheet, obj11);
};
