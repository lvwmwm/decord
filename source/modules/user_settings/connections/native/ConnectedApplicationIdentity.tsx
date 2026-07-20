// Module ID: 13735
// Function ID: 103898
// Name: ConnectedApplicationIdentity
// Dependencies: []
// Exports: default

// Module 13735 (ConnectedApplicationIdentity)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default function ConnectedApplicationIdentity(identity) {
  identity = identity.identity;
  const arg1 = identity;
  const token = identity.token;
  const importDefault = token;
  let dependencyMap;
  let closure_3;
  let callback;
  let React;
  let application;
  if (null != token) {
    application = token.application;
  }
  dependencyMap = application;
  let name;
  if (null != application) {
    name = application.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  closure_3 = str;
  let obj = arg1(dependencyMap[5]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(arg1(dependencyMap[6]).readStyles);
  const profile = identity.profile;
  let connection_visible;
  if (null != profile) {
    connection_visible = profile.connection_visible;
  }
  const tmp7 = callback(React.useState(null != connection_visible && connection_visible), 2);
  callback = tmp7[1];
  const intl = arg1(dependencyMap[7]).intl;
  obj = { provider: str };
  const formatResult = intl.format(arg1(dependencyMap[7]).t.VgqIPj, obj);
  React = formatResult;
  const items = [str, formatResult, token];
  let icon;
  callback = React.useCallback(() => {
    let obj = {};
    const items = [callback(identity(application[8]).Spacer, { size: 8 }), , , ];
    obj = { variant: "text-md/medium" };
    const intl = identity(application[7]).intl;
    obj = { provider: str };
    obj.children = intl.format(identity(application[7]).t.VgqIPj, obj);
    items[1] = callback(identity(application[9]).Text, obj);
    items[2] = callback(identity(application[8]).Spacer, { size: 16 });
    const obj1 = {};
    const intl2 = identity(application[7]).intl;
    obj1.children = intl2.format(identity(application[7]).t.COW3Xn, { platformName: str });
    items[3] = callback(token(application[10]), obj1);
    obj.children = items;
    const obj2 = { platformName: str };
    const tmp = token(application[10]);
    const tmp2 = callback2(closure_6, obj);
    const obj3 = {};
    const intl3 = identity(application[7]).intl;
    obj3.title = intl3.formatToPlainString(identity(application[7]).t.U5x12f, { name: str });
    obj3.body = formatResult;
    const intl4 = identity(application[7]).intl;
    obj3.cancelText = intl4.string(identity(application[7]).t.ETE/oC);
    obj3.children = tmp2;
    const intl5 = identity(application[7]).intl;
    obj3.confirmText = intl5.string(identity(application[7]).t.ppppRJ);
    obj3.onConfirm = function onConfirm() {
      if (null != closure_1) {
        callback(closure_2[12]).handleDeleteApp(closure_1);
        const obj = callback(closure_2[12]);
      }
    };
    obj3.confirmColor = token(application[13]).Colors.RED;
    token(application[11]).show(obj3);
  }, items);
  if (null != application) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = React.useMemo(() => {
    let obj = token(application[14]);
    obj = { id: identity.application_id };
    let icon;
    if (null != application) {
      icon = application.icon;
    }
    obj.icon = icon;
    obj.size = identity(application[15]).getIconSize(token(application[15]).Sizes.LARGE);
    obj.botIconFirst = false;
    return obj.getApplicationIconSource(obj);
  }, items1);
  const profile2 = identity.profile;
  let connection_visible1;
  () => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = str(tmp);
    return function() {
      return callback(...arguments);
    };
  }();
  if (null != profile2) {
    connection_visible1 = profile2.connection_visible;
  }
  const items2 = [connection_visible1, , ];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    obj = { accessible: true, accessibilityLabel: application.name };
    const items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj.style = items3;
    obj.size = importDefault(dependencyMap[15]).Sizes.LARGE;
    obj.source = memo;
    obj.disableColor = true;
    const tmp19 = importDefault(dependencyMap[15]);
    const obj1 = { Reflect: "y", op: "%Float16Array%", user: "getUpsellType" };
    const obj2 = { accessibilityRole: "button" };
    const intl2 = arg1(dependencyMap[7]).intl;
    obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[7]).t.DT39A+);
    obj2.onPress = callback;
    obj2.hitSlop = { marginTop: "key", marginVertical: "Text", maxHeight: "ix", maxWidth: "DARK" };
    obj2.disabled = null == token;
    const obj3 = { style: legacyClassComponentStyles.deleteConnectionIcon };
    const tmp20 = callback2(importDefault(dependencyMap[15]), obj);
    obj3.source = importDefault(dependencyMap[19]);
    obj2.children = callback2(importDefault(dependencyMap[15]), obj3);
    obj1.children = callback2(arg1(dependencyMap[18]).PressableOpacity, obj2);
    const obj4 = { style: legacyClassComponentStyles.container };
    const obj5 = { style: legacyClassComponentStyles.connectedAccountItem };
    const obj6 = { style: legacyClassComponentStyles.connectedAccountTopContainer };
    const tmp22 = importDefault(dependencyMap[15]);
    const obj7 = { label: application.name, icon: tmp20, trailing: callback2(arg1(dependencyMap[17]).Stack, obj1) };
    obj6.children = callback2(arg1(dependencyMap[20]).TableRow, obj7);
    const items4 = [callback2(View, obj6), ];
    const obj8 = {};
    const obj9 = { marginVertical: 8 };
    obj8.style = obj9;
    const obj10 = {};
    const intl3 = arg1(dependencyMap[7]).intl;
    obj10.label = intl3.string(arg1(dependencyMap[7]).t.f7yOAX);
    obj10.value = tmp7[0];
    obj10.onValueChange = tmp15;
    obj8.children = callback2(arg1(dependencyMap[21]).TableSwitchRow, obj10);
    items4[1] = callback2(View, obj8);
    obj5.children = items4;
    obj4.children = callback3(View, obj5);
    return callback2(View, obj4);
  }
  const tmp6 = null != connection_visible && connection_visible;
};
