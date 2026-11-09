// Module ID: 15753
// Function ID: 15754
// Name: GuildPowerupsMarketingHeader
// Dependencies: [19, 17, 5345, 21, 5140, 575, 671, 5751, 15754, 14303, 14330, 1113, 2696, 15755, 2]
// Exports: default

// Module 15753 (GuildPowerupsMarketingHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Text_Text from "Text/Text" /* 5751 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 14303 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 14330 */;
import useMarketablePowerupPerksDefault from "useMarketablePowerupPerks" /* 15754 */;
import orderMarketablePerksForDisplayDefault from "orderMarketablePerksForDisplay" /* 15755 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5345 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let alphaResult;
let alphaResult1;
let obj2;
let obj4;
function PerkText(children) {
  return jsx(Text_Text.Text, { color: "text-overlay-light", variant: "body-sm/semibold", children: children.powerup.title });
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj4 };
obj2 = { padding: nativeDefault.space.PX_12, backgroundColor: alphaResult.hex() };
createStyles = createStyles.createStyles;
let obj3 = _modDef671("#000000");
alphaResult = obj3.alpha(0.18);
obj4 = { textAlign: "center", color: alphaResult1.hex() };
const obj6 = _modDef671("#FFFFFF");
alphaResult1 = obj6.alpha(0.5);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  let format;
  let v7lwpzR;
  guild = guild.guild;
  let tmp = closure_7();
  const arr = useMarketablePowerupPerksDefault(guild.id);
  const items = [guild.id];
  const effect = react.useEffect(() => {
    const tmp = guild;
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guild.id)) {
      const obj = GuildPowerupsActionCreators;
      const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp.id);
    }
  }, items);
  if (useHasAllocateBoostPermissionDefault(guild.id)) {
    let num;
    if (arr != null) {
      num = arr.length;
    }
    if (num == null) {
      num = 0;
    }
    if (0 !== num) {
      ({ style: tmp.text, variant: "body-sm/semibold", children: format(v7lwpzR, obj7) });
      const Text = guild(5751).Text;
      const intl = guild(1113).intl;
      format = intl.format;
      let str2 = "";
      v7lwpzR = tmp2(2696)["7lwpzR"];
      const tmp8 = guild;
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          const arr3 = orderMarketablePerksForDisplayDefault(arr);
          if (1 === arr3.length) {
            const obj3 = { powerup: arr3[0] };
            let format2Result = tmp6(PerkText, obj3);
          } else {
            const intl2 = tmp8(1113).intl;
            const format2 = intl2.format;
            const obj4 = { perk1: null, perk2: null };
            const MNO3sG = tmp2(2696).MNO3sG;
            format2Result = format2(MNO3sG, obj4);
          }
        }
      }
      return <tmp7 style={tmp.container}>{null}</tmp7>;
    }
  }
};
