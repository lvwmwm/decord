// Module ID: 12051
// Function ID: 12052
// Name: GuildPowerupsNotificationContainer
// Dependencies: [17, 21, 4836, 576, 6401, 4832, 12052, 12053, 1115, 2519, 12056, 2]
// Exports: default

// Module 12051 (GuildPowerupsNotificationContainer)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef2519 from "module_2519" /* 2519 */;
import Text_Text from "Text/Text" /* 4832 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 12052 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 12053 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function Tier3OverrideNotice(text) {
  let Text;
  let str;
  text = text.text;
  const tmp = closure_6();
  const obj2 = { style: tmp.staffContainer, children: React3(Text, { variant: str, children: text }) };
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  str = "text-sm/medium";
  Text = Text_Text.Text;
  const tmp4 = View;
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  return React3(tmp4, obj2);
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
  let str2;
  let tmp9Result;
  guildId = guildId.guildId;
  const tmp = closure_6();
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    let str = "text-subtle";
    const obj2 = { style: tmp.container, children: items };
    const Text = tmp6(4832).Text;
    const tmp10 = View;
    const tmp9 = hasOwnProperty;
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { color: str, variant: str2, children: intl.string(_modDef2519["3FRirU"]) };
    str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    intl = tmp6(1115).intl;
    items = [React3(Text, obj3), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj4 = { text: tmp4.text };
      shouldShow = tmp11(Tier3OverrideNotice, obj4);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj9 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = tmp11(tmp2(12056), obj9);
    }
    items[2] = shouldShow2;
    tmp9Result = tmp9(tmp10, obj2);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};
