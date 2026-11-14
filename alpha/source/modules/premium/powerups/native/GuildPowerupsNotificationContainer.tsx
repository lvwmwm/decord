// Module ID: 10762
// Function ID: 10763
// Name: GuildPowerupsNotificationContainer
// Dependencies: [17, 21, 5306, 575, 5929, 10763, 10764, 1113, 2733, 10767, 2]
// Exports: default

// Module 10762 (GuildPowerupsNotificationContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef2733 from "module_2733" /* 2733 */;
import Text_Text from "Text/Text" /* 5929 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 10763 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 10764 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function Tier3OverrideNotice(text) {
  text = text.text;
  const obj = { style: closure_6().staffContainer, children: React3(Text_Text.Text, { variant: "body-sm/normal", children: text }) };
  return React3(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, staffContainer: obj3 };
obj2 = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  let intl;
  let items;
  let tmp7Result;
  guildId = guildId.guildId;
  const tmp = closure_6();
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  if (tmp4.shouldShow) {
    const obj = { style: tmp.container, children: items };
    const obj2 = { color: "text-strong", variant: "heading-lg/semibold", children: intl.string(_modDef2733["3FRirU"]) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items = [React3(Text, obj2), , ];
    let shouldShow = tmp4.shouldShow;
    const tmp7 = hasOwnProperty;
    const tmp8 = View;
    if (shouldShow) {
      const obj3 = { text: tmp4.text };
      shouldShow = tmp9(Tier3OverrideNotice, obj3);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj7 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj4.powerupNames, warnings: obj4.warnings } = tmp5);
      shouldShow2 = tmp9(tmp2(10767), obj7);
    }
    items[2] = shouldShow2;
    tmp7Result = tmp7(tmp8, obj);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};
