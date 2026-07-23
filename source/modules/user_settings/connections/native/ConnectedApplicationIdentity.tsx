// Module ID: 13865
// Function ID: 106132
// Name: ConnectedApplicationIdentity
// Dependencies: [5, 57, 31, 27, 33, 4130, 13866, 1212, 1273, 4126, 8214, 4470, 13844, 4561, 1392, 4545, 12096, 4541, 4660, 7607, 5165, 5504, 2]
// Exports: default

// Module 13865 (ConnectedApplicationIdentity)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default function ConnectedApplicationIdentity(identity) {
  identity = identity.identity;
  const token = identity.token;
  let application;
  let str;
  let callback;
  let React;
  application = undefined;
  if (null != token) {
    application = token.application;
  }
  let name;
  if (null != application) {
    name = application.name;
  }
  str = "";
  if (null != name) {
    str = name;
  }
  let obj = identity(application[5]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(identity(application[6]).readStyles);
  const profile = identity.profile;
  let connection_visible;
  if (null != profile) {
    connection_visible = profile.connection_visible;
  }
  const tmp7 = callback(React.useState(null != connection_visible && connection_visible), 2);
  callback = tmp7[1];
  let intl = identity(application[7]).intl;
  obj = { provider: str };
  const formatResult = intl.format(identity(application[7]).t.VgqIPj, obj);
  React = formatResult;
  let items = [str, formatResult, token];
  let icon;
  callback = React.useCallback(() => {
    let obj = {};
    const items = [outer1_7(identity(application[8]).Spacer, { size: 8 }), , , ];
    obj = { variant: "text-md/medium" };
    const intl = identity(application[7]).intl;
    obj = { provider: str };
    obj.children = intl.format(identity(application[7]).t.VgqIPj, obj);
    items[1] = outer1_7(identity(application[9]).Text, obj);
    items[2] = outer1_7(identity(application[8]).Spacer, { size: 16 });
    const obj1 = {};
    const intl2 = identity(application[7]).intl;
    obj1.children = intl2.format(identity(application[7]).t.COW3Xn, { platformName: str });
    items[3] = outer1_7(token(application[10]), obj1);
    obj.children = items;
    const obj2 = { platformName: str };
    const tmp = token(application[10]);
    const tmp2 = outer1_8(outer1_6, obj);
    const obj3 = {};
    const intl3 = identity(application[7]).intl;
    obj3.title = intl3.formatToPlainString(identity(application[7]).t.U5x12f, { name: str });
    obj3.body = c5;
    const intl4 = identity(application[7]).intl;
    obj3.cancelText = intl4.string(identity(application[7]).t["ETE/oC"]);
    obj3.children = tmp2;
    const intl5 = identity(application[7]).intl;
    obj3.confirmText = intl5.string(identity(application[7]).t.ppppRJ);
    obj3.onConfirm = function onConfirm() {
      if (null != outer1_1) {
        identity(application[12]).handleDeleteApp(outer1_1);
        const obj = identity(application[12]);
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
  (() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = str(tmp);
    return function() {
      return callback(...arguments);
    };
  })();
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
    obj.size = token(application[15]).Sizes.LARGE;
    obj.source = memo;
    obj.disableColor = true;
    const tmp19 = token(application[15]);
    let obj1 = { spacing: 8, direction: "horizontal", align: "center" };
    let obj2 = { accessibilityRole: "button" };
    let intl2 = identity(application[7]).intl;
    obj2.accessibilityLabel = intl2.string(identity(application[7]).t["DT39A+"]);
    obj2.onPress = callback;
    obj2.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
    obj2.disabled = null == token;
    let obj3 = { style: legacyClassComponentStyles.deleteConnectionIcon };
    const tmp20 = callback2(token(application[15]), obj);
    obj3.source = token(application[19]);
    obj2.children = callback2(token(application[15]), obj3);
    obj1.children = callback2(identity(application[18]).PressableOpacity, obj2);
    const obj4 = { style: legacyClassComponentStyles.container };
    const obj5 = { style: legacyClassComponentStyles.connectedAccountItem };
    const obj6 = { style: legacyClassComponentStyles.connectedAccountTopContainer };
    const tmp22 = token(application[15]);
    const obj7 = { label: application.name, icon: tmp20, trailing: callback2(identity(application[17]).Stack, obj1) };
    obj6.children = callback2(identity(application[20]).TableRow, obj7);
    const items4 = [callback2(View, obj6), ];
    const obj8 = {};
    const obj9 = { marginVertical: 8 };
    obj8.style = obj9;
    const obj10 = {};
    let intl3 = identity(application[7]).intl;
    obj10.label = intl3.string(identity(application[7]).t.f7yOAX);
    obj10.value = tmp7[0];
    obj10.onValueChange = tmp15;
    obj8.children = callback2(identity(application[21]).TableSwitchRow, obj10);
    items4[1] = callback2(View, obj8);
    obj5.children = items4;
    obj4.children = callback3(View, obj5);
    return callback2(View, obj4);
  }
  const tmp6 = null != connection_visible && connection_visible;
};
