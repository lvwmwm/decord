// Module ID: 15583
// Function ID: 120141
// Name: EditLinkedLobby
// Dependencies: [31, 27, 1849, 33, 4130, 689, 3834, 1456, 5462, 5482, 5468, 4320, 566, 10200, 8537, 1212, 4126, 7636, 4541, 1273, 1392, 5501, 5165, 2]
// Exports: default

// Module 15583 (EditLinkedLobby)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.screenContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { alignItems: "center", marginTop: 8, marginBottom: 32, gap: 12 };
let obj1 = { height: 1, width: 48, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.divider = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  channel = channel.channel;
  const numScreensToPop = channel.numScreensToPop;
  let linked_at;
  let stateFromStores;
  let callback1;
  let obj = channel(navigation[6]);
  const token = obj.useToken(numScreensToPop(navigation[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj1 = channel(navigation[7]);
  navigation = obj1.useNavigation();
  const analyticsLocations = numScreensToPop(navigation[8])(numScreensToPop(navigation[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  let obj2 = channel(navigation[10]);
  let linkedLobby = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  linked_at = undefined;
  const tmp4 = numScreensToPop(navigation[8]);
  if (null != linkedLobby2) {
    linked_at = linkedLobby2.linked_at;
  }
  let obj3 = channel(navigation[12]);
  const items = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (null != linkedLobby) {
      linked_by = linkedLobby.linked_by;
    }
    return stateFromStores.getUser(linked_by);
  });
  const items1 = [navigation, numScreensToPop];
  const callback = analyticsLocations.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let name;
  const tmp7 = numScreensToPop(navigation[11])(channel, true);
  if (null != getOrFetchApplication) {
    name = getOrFetchApplication.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmp11 = numScreensToPop(navigation[13]);
  callback1 = analyticsLocations.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { userId: stateFromStores.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      numScreensToPop(navigation[14])(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = analyticsLocations.useMemo(() => {
    if (null == linked_at) {
      return null;
    } else {
      const _Date = Date;
      const date = new Date(linked_at);
      if (null != stateFromStores) {
        const intl2 = channel(navigation[15]).intl;
        let obj = {
          username: stateFromStores.username,
          usernameHook(children) {
                const obj = { onPress: outer1_6, variant: "text-sm/semibold", color: "text-strong", children };
                return callback1(channel(navigation[16]).Text, obj, arg1);
              },
          linkedAtDate: date
        };
        let formatResult = intl2.format(channel(navigation[15]).t.uV2AkA, obj);
      } else {
        const intl = channel(navigation[15]).intl;
        obj = { linkedAtDate: date };
        formatResult = intl.formatToPlainString(channel(navigation[15]).t.EyygeM, obj);
      }
      return formatResult;
    }
  }, items3);
  let tmp17Result = null;
  if (null != getOrFetchApplication) {
    obj = { style: tmp2.screenContainer };
    obj = { paddingTop: 16 };
    obj.contentContainerStyle = obj;
    obj1 = { spacing: numScreensToPop(navigation[5]).space.PX_24 };
    obj2 = { paddingHorizontal: token };
    obj1.style = obj2;
    obj3 = { style: tmp2.header };
    const obj4 = {};
    let obj10 = numScreensToPop(navigation[20]);
    ({ id: obj12.id, icon: obj12.icon } = getOrFetchApplication);
    obj4.source = obj10.getApplicationIconSource({});
    obj4.size = channel(navigation[19]).AvatarSizes.XXLARGE;
    const items4 = [callback1(channel(navigation[19]).Avatar, obj4), , ];
    const obj6 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: getOrFetchApplication.name };
    items4[1] = callback1(channel(navigation[16]).Text, obj6);
    let tmp23 = null != memo;
    if (tmp23) {
      const obj7 = {};
      const obj8 = { style: tmp2.divider };
      const items5 = [callback1(linked_at, obj8), ];
      const obj9 = { variant: "text-sm/medium", color: "text-subtle", children: memo };
      items5[1] = callback1(channel(navigation[16]).Text, obj9);
      obj7.children = items5;
      tmp23 = callback(closure_7, obj7);
    }
    items4[2] = tmp23;
    obj3.children = items4;
    const items6 = [callback(linked_at, obj3), , ];
    obj10 = { variant: "text-sm/normal", color: "text-default" };
    let intl = channel(navigation[15]).intl;
    const obj11 = { channelName: tmp7 };
    obj10.children = intl.format(channel(navigation[15]).t.DA9v5F, obj11);
    items6[1] = callback1(channel(navigation[16]).Text, obj10);
    const obj12 = { hasIcons: false };
    const obj13 = {};
    let intl2 = channel(navigation[15]).intl;
    obj13.label = intl2.string(channel(navigation[15]).t.LLWaxQ);
    obj13.variant = "danger";
    obj13.onPress = tmp11Result;
    obj12.children = callback1(channel(navigation[22]).TableRow, obj13);
    items6[2] = callback1(channel(navigation[21]).TableRowGroup, obj12);
    obj1.children = items6;
    obj.children = callback(channel(navigation[18]).Stack, obj1);
    tmp17Result = callback1(channel(navigation[17]).Form, obj);
    const obj5 = {};
    const tmp17 = callback1;
    const tmp22 = linked_at;
  }
  return tmp17Result;
};
