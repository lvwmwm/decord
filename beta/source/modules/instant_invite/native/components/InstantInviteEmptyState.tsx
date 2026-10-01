// Module ID: 9308
// Function ID: 9309
// Name: InstantInviteEmptyState
// Dependencies: [19, 17, 9276, 21, 4836, 576, 504, 1177, 9309, 1115, 6358, 5435, 6798, 4832, 9277, 5281, 2]
// Exports: default

// Module 9308 (InstantInviteEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 6358 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 9277 */;
import AssetRegistryDefault from "AssetRegistry" /* 9309 */;
import react from "react" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9276 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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

export default function _default(link) {
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
  const obj3 = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: AssetRegistryDefault, title: intl.string(stateFromStores(1115).t.tQc0l8), body: intl2.string(stateFromStores(1115).t.DXgdcD) };
  const RefreshEmptyState = stateFromStores(1177).RefreshEmptyState;
  intl = stateFromStores(1115).intl;
  intl2 = stateFromStores(1115).intl;
  items1 = [closure_5(RefreshEmptyState, obj3), , , ];
  const obj4 = { style: tmp.linkContainer, children: items2 };
  const obj5 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: str, style: tmp.inviteInput, forceAccessibleContainer: true, clearButtonVisibility: stateFromStores(1177).ClearButtonVisibility.NEVER };
  const tmp9 = FreeFormTextInputDefault;
  if (str == null) {
    str = "";
  }
  items2 = [closure_5(tmp9, obj5), ];
  const obj6 = { accessibilityLabel: intl3.string(stateFromStores(1115).t["3D5yo/"]), accessibilityRole: "button", onPress: onPressSettings, style: tmp.settingsButton, children: closure_5(stateFromStores(6798).SettingsIcon, {}) };
  const PressableOpacity = tmp2(5435).PressableOpacity;
  intl3 = tmp2(1115).intl;
  items2[1] = closure_5(PressableOpacity, obj6);
  items1[1] = closure_6(View, obj4);
  const obj7 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: formatResult };
  formatResult = null;
  const Text = tmp2(4832).Text;
  if (null != stateFromStores) {
    let dqPWMN;
    const tmp8Result = InstantInviteUtilsDefault;
    const maxAgeOptionByValue = tmp8Result.getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str2 = "";
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
      if (descriptiveLabel == null) {
        descriptiveLabel = str2;
      }
      str3 = descriptiveLabel;
    }
    const getMaxUsesOptions = tmp8(9277).getMaxUsesOptions;
    const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
    if (null != found) {
      str2 = found.descriptiveLabel;
    }
    if (0 === stateFromStores.maxAge) {
      dqPWMN = tmp2(1115).t["99ISmn"];
    } else {
      dqPWMN = tmp2(1115).t.dqPWMN;
    }
    const intl4 = tmp2(1115).intl;
    const obj8 = { maxAge: str3, maxUses: str2 };
    formatResult = intl4.format(dqPWMN, obj8);
  }
  items1[2] = closure_5(Text, obj7);
  const obj9 = { text: intl5.string(stateFromStores(1115).t.Ej3B3Y), onPress: onShare };
  const Button = tmp2(5281).Button;
  intl5 = tmp2(1115).intl;
  items1[3] = closure_5(Button, obj9);
  return closure_6(View, obj2);
};
