// Module ID: 15419
// Function ID: 117645
// Name: EditLinkedLobby
// Dependencies: []
// Exports: default

// Module 15419 (EditLinkedLobby)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWER };
obj.screenContainer = obj;
obj.header = {};
const obj1 = { hideWhenScrolling: -600, autoCapitalize: 700, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.divider = obj1;
let closure_9 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditLinkedLobby.tsx");

export default function EditLinkedLobby(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const numScreensToPop = channel.numScreensToPop;
  const importDefault = numScreensToPop;
  let View;
  let closure_5;
  let callback1;
  let obj = arg1(dependencyMap[6]);
  const token = obj.useToken(importDefault(dependencyMap[5]).modules.mobile.TABLE_ROW_PADDING);
  const tmp2 = callback2();
  let obj1 = arg1(dependencyMap[7]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  const analyticsLocations = importDefault(dependencyMap[8])(importDefault(dependencyMap[9]).EDIT_CHANNEL_SYNCING).analyticsLocations;
  const React = analyticsLocations;
  let obj2 = arg1(dependencyMap[10]);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  const linkedLobby2 = channel.linkedLobby;
  let linked_at;
  const tmp4 = importDefault(dependencyMap[8]);
  if (null != linkedLobby2) {
    linked_at = linkedLobby2.linked_at;
  }
  View = linked_at;
  let obj3 = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const linkedLobby = channel.linkedLobby;
    let linked_by;
    if (null != linkedLobby) {
      linked_by = linkedLobby.linked_by;
    }
    return stateFromStores.getUser(linked_by);
  });
  closure_5 = stateFromStores;
  const items1 = [navigation, numScreensToPop];
  const callback = React.useCallback(() => {
    navigation.pop(numScreensToPop);
  }, items1);
  let name;
  const tmp7 = importDefault(dependencyMap[11])(channel, true);
  if (null != getOrFetchApplication) {
    name = getOrFetchApplication.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  const items2 = [stateFromStores, analyticsLocations, channel.id];
  const tmp11 = importDefault(dependencyMap[13]);
  callback1 = React.useCallback(() => {
    if (null != stateFromStores) {
      const obj = { userId: stateFromStores.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
      numScreensToPop(navigation[14])(obj);
    }
  }, items2);
  const items3 = [linked_at, stateFromStores, callback1];
  const memo = React.useMemo(() => {
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
                return callback2(callback(closure_2[16]).Text, { onPress: callback2, children }, arg1);
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
    obj1 = { spacing: importDefault(dependencyMap[5]).space.PX_24 };
    obj2 = { paddingHorizontal: token };
    obj1.style = obj2;
    obj3 = { style: tmp2.header };
    const obj4 = {};
    let obj10 = importDefault(dependencyMap[20]);
    ({ id: obj12.id, icon: obj12.icon } = getOrFetchApplication);
    obj4.source = obj10.getApplicationIconSource({});
    obj4.size = arg1(dependencyMap[19]).AvatarSizes.XXLARGE;
    const items4 = [callback1(arg1(dependencyMap[19]).Avatar, obj4), , ];
    const obj6 = { children: getOrFetchApplication.name };
    items4[1] = callback1(arg1(dependencyMap[16]).Text, obj6);
    let tmp23 = null != memo;
    if (tmp23) {
      const obj7 = {};
      const obj8 = { style: tmp2.divider };
      const items5 = [callback1(View, obj8), ];
      const obj9 = { cachedAt: true, edpbxy: true, children: memo };
      items5[1] = callback1(arg1(dependencyMap[16]).Text, obj9);
      obj7.children = items5;
      tmp23 = callback(closure_7, obj7);
    }
    items4[2] = tmp23;
    obj3.children = items4;
    const items6 = [callback(View, obj3), , ];
    obj10 = {};
    const intl = arg1(dependencyMap[15]).intl;
    const obj11 = { channelName: tmp7 };
    obj10.children = intl.format(arg1(dependencyMap[15]).t.DA9v5F, obj11);
    items6[1] = callback1(arg1(dependencyMap[16]).Text, obj10);
    const obj12 = { hasIcons: false };
    const obj13 = {};
    const intl2 = arg1(dependencyMap[15]).intl;
    obj13.label = intl2.string(arg1(dependencyMap[15]).t.LLWaxQ);
    obj13.variant = "danger";
    obj13.onPress = tmp11Result;
    obj12.children = callback1(arg1(dependencyMap[22]).TableRow, obj13);
    items6[2] = callback1(arg1(dependencyMap[21]).TableRowGroup, obj12);
    obj1.children = items6;
    obj.children = callback(arg1(dependencyMap[18]).Stack, obj1);
    tmp17Result = callback1(arg1(dependencyMap[17]).Form, obj);
    const obj5 = {};
    const tmp17 = callback1;
    const tmp22 = View;
  }
  return tmp17Result;
};
