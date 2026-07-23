// Module ID: 12163
// Function ID: 95208
// Name: onCopy
// Dependencies: [31, 27, 8482, 33, 4130, 689, 566, 1273, 12164, 1212, 9002, 4660, 5791, 4126, 8483, 4543, 2]
// Exports: default

// Module 12163 (onCopy)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, emptyStateContainer: { padding: 0, marginBottom: 16 }, emptyStateArt: { marginBottom: 16 }, emptyStateTitle: { marginBottom: 4 }, linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 }, inviteInput: { flexShrink: 1 }, expireCaption: { marginBottom: 16 } };
_createForOfIteratorHelperLoose = { width: 48, height: 48, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.settingsButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function _default(link) {
  let onCopy;
  let onPressSettings;
  let onShare;
  link = link.link;
  ({ onCopy, onShare, onPressSettings } = link);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  _require = obj.useStateFromStores(items, () => outer1_4.getInviteSettings());
  obj = { style: tmp.container };
  obj = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: importDefault(12164) };
  let intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.tQc0l8);
  const intl2 = _require(1212).intl;
  obj.body = intl2.string(_require(1212).t.DXgdcD);
  const items1 = [callback(_require(1273).RefreshEmptyState, obj), , , ];
  const obj1 = { style: tmp.linkContainer };
  const obj2 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: null, style: null, forceAccessibleContainer: true };
  let str = "";
  if (null != link) {
    str = link;
  }
  obj2.value = str;
  obj2.style = tmp.inviteInput;
  obj2.clearButtonVisibility = _require(1273).ClearButtonVisibility.NEVER;
  const items2 = [callback(importDefault(9002), obj2), ];
  const obj3 = {};
  const intl3 = _require(1212).intl;
  obj3.accessibilityLabel = intl3.string(_require(1212).t["3D5yo/"]);
  obj3.accessibilityRole = "button";
  obj3.onPress = onPressSettings;
  obj3.style = tmp.settingsButton;
  obj3.children = callback(_require(5791).SettingsIcon, {});
  items2[1] = callback(_require(4660).PressableOpacity, obj3);
  obj1.children = items2;
  items1[1] = closure_6(View, obj1);
  const obj4 = {
    style: tmp.expireCaption,
    variant: "text-xs/medium",
    color: "text-muted",
    children: (() => {
      if (null == lib) {
        return null;
      } else {
        const maxAgeOptionByValue = outer1_1(outer1_2[14]).getMaxAgeOptionByValue(lib.maxAge);
        let str2 = "";
        let str = "";
        if (null != maxAgeOptionByValue) {
          const descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
          let tmp = str2;
          if (null != descriptiveLabel) {
            tmp = descriptiveLabel;
          }
          str = tmp;
        }
        const getMaxUsesOptions = outer1_1(outer1_2[14]).getMaxUsesOptions;
        const found = getMaxUsesOptions.find((value) => value.value === outer1_0.maxUses);
        if (null != found) {
          str2 = found.descriptiveLabel;
        }
        if (0 === lib.maxAge) {
          let dqPWMN = lib(outer1_2[9]).t["99ISmn"];
        } else {
          dqPWMN = lib(outer1_2[9]).t.dqPWMN;
        }
        const intl = lib(outer1_2[9]).intl;
        const obj = { maxAge: str, maxUses: str2 };
        return intl.format(dqPWMN, obj);
      }
    })()
  };
  items1[2] = callback(_require(4126).Text, obj4);
  const obj5 = {};
  const intl4 = _require(1212).intl;
  obj5.text = intl4.string(_require(1212).t.Ej3B3Y);
  obj5.onPress = onShare;
  items1[3] = callback(_require(4543).Button, obj5);
  obj.children = items1;
  return closure_6(View, obj);
};
