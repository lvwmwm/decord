// Module ID: 16674
// Function ID: 16675
// Name: IntegrationsSettingsEditLinkedLobby
// Dependencies: [19, 17, 1372, 21, 4836, 576, 4531, 1485, 6583, 6603, 6589, 4989, 504, 10395, 7624, 1115, 4832, 8053, 5279, 1177, 1397, 5999, 5917, 2]
// Exports: default

// Module 16674 (IntegrationsSettingsEditLinkedLobby)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, header: { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 }, divider: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
size = { height: 1, width: 48, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  let Stack;
  let TableRow;
  let intl;
  let intl2;
  let items4;
  let items5;
  let items6;
  let obj16;
  let obj18;
  let obj5;
  let obj6;
  let obj9;
  let tmp3Result2;
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  navigation = undefined;
  let linked_at;
  let stateFromStores;
  let callback1;
  const tmp = channel;
  let obj = channel(navigation[6]);
  const token = obj.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp5 = closure_9();
  let obj2 = channel(navigation[7]);
  navigation = obj2.useNavigation();
  const tmp7 = numScreensToPop(navigation[8]);
  const analyticsLocations = tmp7(numScreensToPop(navigation[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  let linkedLobby = channel.linkedLobby;
  let application_id;
  const useGetOrFetchApplication = channel(navigation[10]).useGetOrFetchApplication;
  const tmp8 = channel(navigation[10]);
  if (linkedLobby != null) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  linked_at = undefined;
  const tmp11 = numScreensToPop(navigation[11])(channel, true);
  if (linkedLobby2 != null) {
    linked_at = linkedLobby2.linked_at;
  }
  const items = [stateFromStores];
  const tmpResult = tmp(navigation[12]);
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    const getUser = UserStore.getUser;
    if (linkedLobby != null) {
      linked_by = linkedLobby.linked_by;
    }
    return getUser(linked_by);
  });
  const items1 = [navigation, numScreensToPop];
  const callback = analyticsLocations.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let str;
  const id = channel.id;
  const tmp3Result = numScreensToPop(navigation[13]);
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmp3ResultResult = tmp3Result(id, str, callback);
  callback1 = obj4.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { userId: tmp.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = obj4.useMemo(function() {
    let onPress;
    if (null == linked_at) {
      return null;
    } else {
      let formatResult;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(linked_at);
      if (null != stateFromStores) {
        const intl2 = intl3.intl;
        const obj2 = {
          username: tmp15.username,
          usernameHook(children, arg1) {
                const obj = { onPress, variant: "text-sm/semibold", color: "text-strong", children };
                return callback1(channel(navigation[16]).Text, obj, arg1);
              },
          linkedAtDate: date
        };
        formatResult = intl2.format(intl3.t.uV2AkA, obj2);
      } else {
        const intl = intl3.intl;
        let obj = { linkedAtDate: date };
        formatResult = intl.formatToPlainString(intl3.t.EyygeM, obj);
      }
      return formatResult;
    }
  }, items3);
  let tmp20Result = null;
  if (null != getOrFetchApplication) {
    const obj3 = { style: tmp5.screenContainer, contentContainerStyle: { paddingTop: 16 }, children: closure_8(Stack, obj5) };
    const Form = tmp(tmp2[17]).Form;
    obj5 = { spacing: numScreensToPop(navigation[5]).space.PX_24, style: obj6, children: items6 };
    Stack = tmp(tmp2[18]).Stack;
    obj6 = { paddingHorizontal: token };
    const obj7 = { style: tmp5.header, children: items4 };
    const obj8 = { source: tmp3Result2.getApplicationIconSource(obj9), size: tmp(navigation[19]).AvatarSizes.XXLARGE };
    const Avatar = tmp(tmp2[19]).Avatar;
    obj9 = { id: null, icon: null };
    ({ id: obj11.id, icon: obj11.icon } = getOrFetchApplication);
    tmp3Result2 = numScreensToPop(navigation[20]);
    items4 = [callback1(Avatar, obj8), , ];
    const obj10 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
    items4[1] = callback1(tmp(navigation[16]).Text, obj10);
    let tmp21Result = null != memo;
    if (tmp21Result) {
      const obj12 = { children: items5 };
      const obj13 = { style: tmp5.divider };
      items5 = [callback1(linked_at, obj13), ];
      const obj14 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
      items5[1] = callback1(tmp(navigation[16]).Text, obj14);
      tmp21Result = tmp21(closure_7, obj12);
    }
    items4[2] = tmp21Result;
    items6 = [closure_8(linked_at, obj7), , ];
    const obj15 = { variant: "text-sm/normal", color: "text-default", children: intl.format(tmp(navigation[15]).t.DA9v5F, obj16) };
    const Text = tmp(tmp2[16]).Text;
    intl = tmp(tmp2[15]).intl;
    obj16 = { channelName: tmp11 };
    items6[1] = callback1(Text, obj15);
    const obj17 = { hasIcons: false, children: callback1(TableRow, obj18) };
    const TableRowGroup = tmp(tmp2[21]).TableRowGroup;
    obj18 = { label: intl2.string(tmp(navigation[15]).t.LLWaxQ), variant: "danger", onPress: tmp3ResultResult };
    TableRow = tmp(tmp2[22]).TableRow;
    intl2 = tmp(tmp2[15]).intl;
    items6[2] = callback1(TableRowGroup, obj17);
    tmp20Result = tmp20(Form, obj3);
  }
  return tmp20Result;
};
