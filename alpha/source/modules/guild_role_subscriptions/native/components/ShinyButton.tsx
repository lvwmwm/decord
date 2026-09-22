// Module ID: 10565
// Function ID: 10566
// Name: ShinyButton
// Dependencies: [19, 21, 4757, 576, 5188, 1177, 10566, 2]
// Exports: default

// Module 10565 (ShinyButton)
import nativeDefault from "native" /* 576 */;
import BaseTextButton from "BaseTextButton" /* 5188 */;
import _modDef10566 from "module_10566" /* 10566 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { container: { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT }, sparkleIcon: null, disabled: null };
const obj3 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT };
obj2.sparkleIcon = { marginRight: 4, tintColor: nativeDefault.colors.WHITE };
obj2.disabled = { opacity: 0.5 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ShinyButton.tsx");

export default function ShinyButton(style) {
  ({ loading, disabled, onPress } = style);
  if (onPress === undefined) {
    onPress = function c() {

    };
  }
  const merged = Object.assign(style, Object.assign({ style: 0, loading: 0, disabled: 0, onPress: 0 }));
  const tmp2 = closure_4();
  const obj = { onPress, pillStyle: null, loading, disabled, icon: null };
  const items = [tmp2.container, style.style];
  obj.pillStyle = items;
  let tmp3Result;
  if (!loading) {
    const obj2 = { size: tmp4(1177).Icon.Sizes.REFRESH_SMALL_16, source: _modDef10566, style: null };
    const items1 = [tmp2.sparkleIcon, ];
    if (disabled) {
      disabled = tmp2.disabled;
    }
    items1[1] = disabled;
    obj2.style = items1;
    tmp3Result = tmp3(tmp4(1177).Icon, obj2);
  }
  obj.icon = tmp3Result;
  const merged1 = Object.assign(merged);
  return jsx(BaseTextButton.BaseTextButton, { onPress, pillStyle: null, loading, disabled, icon: null });
};
