// Module ID: 19853
// Function ID: 19854
// Name: InterestGuildJoinButton
// Dependencies: [19, 17, 21, 5141, 575, 5768, 1113, 2537, 2]
// Exports: default

// Module 19853 (InterestGuildJoinButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef2537 from "module_2537" /* 2537 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { button: obj2 };
obj2 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoinButton.tsx");

export default function InterestGuildJoinButton(guildId) {
  let VJlc0S;
  let formatToPlainString;
  let str2;
  let string;
  let tmp9;
  guildId = guildId.guildId;
  const joins = guildId.joins;
  let flag = guildId.fullWidth;
  const guildName = guildId.guildName;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const joined = react.useSyncExternalStore(joins.subscribe, joins.getSnapshot).joined;
  const hasItem = joined.includes(guildId);
  let button;
  if (!flag) {
    button = tmp.button;
  }
  let str = "sm";
  const Button = components_Button_Button.Button;
  if (flag) {
    str = "lg";
  }
  ({
    size: str,
    text: string(VJlc0S),
    accessibilityLabel: formatToPlainString(hasItem ? tmp9.t1du0D : tmp9.NOfX8z, { guild: guildName }),
    variant: str2,
    disabled: hasItem,
    onPress() {
      return joins.join(guildId);
    }
  });
  const intl = tmp6(1113).intl;
  string = intl.string;
  if (hasItem) {
    VJlc0S = _modDef2537.X4zfDg;
  } else {
    VJlc0S = tmp6(1113).t.VJlc0S;
  }
  const intl2 = tmp6(1113).intl;
  formatToPlainString = intl2.formatToPlainString;
  tmp9 = _modDef2537;
  str2 = "primary";
  if (hasItem) {
    str2 = "secondary";
  }
  return <tmp4 style={button}>{null}</tmp4>;
};
