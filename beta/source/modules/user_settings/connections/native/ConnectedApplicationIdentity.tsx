// Module ID: 14498
// Function ID: 14499
// Name: ConnectedApplicationIdentity
// Dependencies: [5, 32, 19, 17, 21, 4836, 14499, 1115, 1177, 4832, 9254, 5203, 14477, 5300, 1397, 5283, 8488, 7363, 9184, 5918, 5917, 6621, 2]
// Exports: default

// Module 14498 (ConnectedApplicationIdentity)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import Icon from "Icon" /* 5283 */;
import AlertDefault from "Alert" /* 5300 */;
import InfoBoxDefault from "InfoBox" /* 9254 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_1, v3;

let metroImportAll;
let metroImportDefault;
let tmp;
const IconDefault = tmp(5283);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default function ConnectedApplicationIdentity(identity) {
  let TableRowGroupContext;
  let body;
  let c4;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let obj6;
  let obj7;
  let obj9;
  let tmp6;
  identity = identity.identity;
  const token = identity.token;
  let str;
  _slicedToArray = undefined;
  react = undefined;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp2 = identity;
  let tmp3 = application;
  let obj = identity(application[5]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(identity(application[6]).readStyles);
  let obj2 = react;
  let profile = identity.profile;
  let flag;
  const useState = react.useState;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  [tmp6, c4] = _slicedToArray(useState(flag), 2);
  const tmp5 = _slicedToArray(useState(flag), 2);
  let intl = tmp2(tmp3[7]).intl;
  const formatResult = intl.format(tmp2(tmp3[7]).t.VgqIPj, { provider: str });
  react = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj2.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let obj3;
    let obj5;
    let obj7;
    let obj = { children: items };
    items = [metroImportDefault(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: intl.format(intl6.t.VgqIPj, obj3) };
    const Text = Text_Text.Text;
    intl = intl6.intl;
    obj3 = { provider: str };
    items[1] = metroImportDefault(Text, obj2);
    items[2] = metroImportDefault(native.Spacer, { size: 16 });
    const obj4 = { children: intl2.format(intl6.t.COW3Xn, obj5) };
    const tmp = InfoBoxDefault;
    intl2 = intl6.intl;
    obj5 = { platformName: str };
    items[3] = metroImportDefault(tmp, obj4);
    const tmp2 = metroImportAll(View, obj);
    const tmp3 = AlertActionCreatorsDefault;
    const show = tmp3.show;
    const obj6 = {
      title: intl3.formatToPlainString(intl6.t.U5x12f, obj7),
      body,
      cancelText: intl4.string(intl6.t["ETE/oC"]),
      children: tmp2,
      confirmText: intl5.string(intl6.t.ppppRJ),
      onConfirm() {
        if (null != token) {
          const obj = identity(application[12]);
          obj.handleDeleteApp(tmp);
        }
      },
      confirmColor: AlertDefault.Colors.RED
    };
    intl3 = intl6.intl;
    obj7 = { name: str };
    intl4 = intl6.intl;
    intl5 = intl6.intl;
    show(obj6);
  }, items);
  const useMemo = obj2.useMemo;
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = useMemo(() => {
    let icon;
    let obj2;
    const obj = { id: identity.application_id, icon, size: obj2.getIconSize(IconDefault.Sizes.LARGE), botIconFirst: false };
    icon = undefined;
    const getApplicationIconSource = AvatarUtilsDefault.getApplicationIconSource;
    AvatarUtilsDefault;
    if (application != null) {
      icon = application.icon;
    }
    obj2 = Icon;
    return getApplicationIconSource(obj);
  }, items1);
  let closure_0 = str((connection_visible) => {
    let c2 = 0;
    c4 = 0;
    let c3 = 0;
    return (function*(arg0, value) {
      let obj2;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              v3(connection_visible);
              c3 = 1;
              c2 = 2;
              v3 = 1;
              const obj5 = { connection_visible };
              const obj6 = { value: obj2.updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, obj5), done: false };
              obj2 = token(application[16]);
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const profile = connection_visible.profile;
              connection_visible = undefined;
              const tmp6 = v3;
              if (profile != null) {
                connection_visible = profile.connection_visible;
              }
              tmp6(true === connection_visible);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              return { value, done: true };
            } else {
              c3 = 0;
            }
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          if (0 === c3) {
            v3 = 3;
            throw tmp17;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  });
  const profile2 = identity.profile;
  let connection_visible;
  if (profile2 != null) {
    connection_visible = profile2.connection_visible;
  }
  const items2 = [connection_visible, , ];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    let obj3 = { accessible: true, accessibilityLabel: application.name, style: items3, size: token(tmp3[15]).Sizes.LARGE, source: memo, disableColor: true };
    items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    const tmp15 = token(tmp3[15]);
    const tmp16 = closure_7(tmp15, obj3);
    let obj4 = { size: "sm", variant: "icon-only", icon: closure_7(tmp2(tmp3[18]).XLargeBoldIcon, { size: "sm" }), accessibilityLabel: intl2.string(tmp2(tmp3[7]).t["DT39A+"]), onPress: callback };
    const IconButton = tmp2(tmp3[17]).IconButton;
    intl2 = tmp2(tmp3[7]).intl;
    let obj5 = { style: legacyClassComponentStyles.container, children: closure_7(View, obj6) };
    obj6 = { style: legacyClassComponentStyles.connectedAccountItem, children: closure_8(TableRowGroupContext, obj7) };
    const tmp17 = closure_7(IconButton, obj4);
    obj7 = { value: true, children: items4 };
    const obj8 = { style: legacyClassComponentStyles.connectedAccountHeader, children: closure_7(tmp2(tmp3[20]).TableRow, obj9) };
    TableRowGroupContext = tmp2(tmp3[19]).TableRowGroupContext;
    obj9 = { label: application.name, icon: tmp16, trailing: tmp17 };
    items4 = [closure_7(View, obj8), ];
    const obj10 = { label: intl3.string(tmp2(tmp3[7]).t.f7yOAX), value: tmp6, onValueChange: tmp12 };
    const TableSwitchRow = tmp2(tmp3[21]).TableSwitchRow;
    intl3 = tmp2(tmp3[7]).intl;
    items4[1] = closure_7(TableSwitchRow, obj10);
    return closure_7(View, obj5);
  }
};
