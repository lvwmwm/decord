// Module ID: 9761
// Function ID: 9762
// Name: ShinyButton
// Dependencies: [19, 21, 4836, 576, 5282, 1177, 9762, 2]
// Exports: default

// Module 9761 (ShinyButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import BaseTextButton2 from "BaseTextButton" /* 5282 */;
import AssetRegistryDefault from "AssetRegistry" /* 9762 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, sparkleIcon: { marginRight: 4, tintColor: nativeDefault.colors.WHITE }, disabled: { opacity: 0.5 } };
obj2 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
({ marginRight: 4, tintColor: nativeDefault.colors.WHITE });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  let disabled;
  let items1;
  let loading;
  let onPress;
  ({ loading, disabled, onPress } = style);
  style = style.style;
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  const merged = Object.assign(style, Object.assign({ style: 0, loading: 0, disabled: 0, onPress: 0 }));
  const tmp2 = closure_4();
  const items = [tmp2.container, style];
  let tmp3Result;
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  if (!loading) {
    const obj2 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, style: items1 };
    const Icon = tmp4(1177).Icon;
    items1 = [tmp2.sparkleIcon, ];
    if (disabled) {
      disabled = tmp2.disabled;
    }
    items1[1] = disabled;
    tmp3Result = tmp3(Icon, obj2);
  }
  const merged1 = Object.assign(merged);
  return <BaseTextButton onPress={onPress} pillStyle={items} loading={loading} disabled={disabled} icon={tmp3Result} />;
};
