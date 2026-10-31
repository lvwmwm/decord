// Module ID: 9157
// Function ID: 9158
// Name: InstantInviteEmptyState
// Dependencies: [19, 17, 9119, 21, 5014, 575, 504, 1187, 9158, 1113, 7105, 6980, 7561, 5624, 9120, 5634, 2]
// Exports: default

// Module 9157 (InstantInviteEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 7105 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9120 */;
import AssetRegistryDefault from "AssetRegistry" /* 9158 */;
import react from "react" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9119 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { padding: 16 }, emptyStateContainer: { padding: 0, marginBottom: 16 }, emptyStateArt: { marginBottom: 16 }, emptyStateTitle: { marginBottom: 4 }, linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 }, inviteInput: { flexShrink: 1 }, expireCaption: { marginBottom: 16 }, settingsButton: size };
size = { width: 48, height: 48, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default function InstantInviteEmptyState(link) {
  let formatResult;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let inviteSettings;
  let items1;
  let items2;
  let onCopy;
  let onPressSettings;
  let onShare;
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = closure_7();
  const items = [CreateInviteModalStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
  const obj2 = { style: tmp.container, children: items1 };
  const obj3 = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: AssetRegistryDefault, title: intl.string(stateFromStores(1113).t.tQc0l8), body: intl2.string(stateFromStores(1113).t.DXgdcD) };
  const RefreshEmptyState = stateFromStores(1187).RefreshEmptyState;
  intl = stateFromStores(1113).intl;
  intl2 = stateFromStores(1113).intl;
  items1 = [closure_5(RefreshEmptyState, obj3), , , ];
  const obj4 = { style: tmp.linkContainer, children: items2 };
  const obj5 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: str, style: tmp.inviteInput, forceAccessibleContainer: true, clearButtonVisibility: stateFromStores(1187).ClearButtonVisibility.NEVER };
  const tmp9 = FreeFormTextInputDefault;
  if (str == null) {
    str = "";
  }
  items2 = [closure_5(tmp9, obj5), ];
  const obj6 = { accessibilityLabel: intl3.string(stateFromStores(1113).t["3D5yo/"]), accessibilityRole: "button", onPress: onPressSettings, style: tmp.settingsButton, children: closure_5(stateFromStores(7561).SettingsIcon, {}) };
  const PressableOpacity = tmp2(6980).PressableOpacity;
  intl3 = tmp2(1113).intl;
  items2[1] = closure_5(PressableOpacity, obj6);
  items1[1] = closure_6(View, obj4);
  const obj7 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: formatResult };
  formatResult = null;
  const Text = tmp2(5624).Text;
  if (null != stateFromStores) {
    let dqPWMN;
    const tmp8Result = InstantInviteUtilsDefault;
    const maxAgeOptionByValue = tmp8Result.getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let str4 = maxAgeOptionByValue.descriptiveLabel;
      if (str4 == null) {
        str4 = "";
      }
      str3 = str4;
    }
    const getMaxUsesOptions = tmp8(9120).getMaxUsesOptions;
    const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
    let str5 = "";
    if (null != found) {
      let str6 = found.descriptiveLabel;
      if (str6 == null) {
        str6 = "";
      }
      str5 = str6;
    }
    if (0 === stateFromStores.maxAge) {
      dqPWMN = tmp2(1113).t["99ISmn"];
    } else {
      dqPWMN = tmp2(1113).t.dqPWMN;
    }
    const intl4 = tmp2(1113).intl;
    const obj8 = { maxAge: str3, maxUses: str5 };
    formatResult = intl4.format(dqPWMN, obj8);
  }
  items1[2] = closure_5(Text, obj7);
  const obj9 = { text: intl5.string(stateFromStores(1113).t.Ej3B3Y), onPress: onShare };
  const Button = tmp2(5634).Button;
  intl5 = tmp2(1113).intl;
  items1[3] = closure_5(Button, obj9);
  return closure_6(View, obj2);
};
