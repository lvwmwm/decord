// Module ID: 13701
// Function ID: 13702
// Name: GuildPowerupsMarketingHeader
// Dependencies: [19, 17, 4967, 21, 5090, 587, 683, 558, 576, 5086, 13702, 12241, 12264, 13703, 1126, 2597, 2]

// Module 13701 (GuildPowerupsMarketingHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import intl3 from "intl" /* 1126 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12241 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12264 */;
import useMarketablePowerupPerksDefault from "useMarketablePowerupPerks" /* 13702 */;
import orderMarketablePerksForDisplayDefault from "orderMarketablePerksForDisplay" /* 13703 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4967 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let alphaResult;
let alphaResult1;
let obj2;
let obj4;
let tmp;
const Text_Text = tmp(5086);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj4 };
obj2 = { padding: nativeDefault.space.PX_12, backgroundColor: alphaResult.hex() };
createStyles = createStyles.createStyles;
let obj3 = _modDef683("#000000");
alphaResult = obj3.alpha(0.18);
obj4 = { textAlign: "center", color: alphaResult1.hex() };
const obj6 = _modDef683("#FFFFFF");
alphaResult1 = obj6.alpha(0.5);
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerkText(powerup) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  powerup = powerup.powerup;
  if (cResult[0] !== powerup.title) {
    const tmp6 = jsx(Text_Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: powerup.title });
    cResult[0] = powerup.title;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function PerkText(children) {
  return jsx(Text_Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsMarketingHeader(guild) {
  let arr;
  let container;
  let text;
  let tmp6;
  let tmp7;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(13);
  guild = guild.guild;
  const tmp4 = closure_7();
  arr = arr(13702)(guild.id);
  if (cResult[0] !== guild.id) {
    const fn = function s() {
      const tmp = guild;
      if (GuildPowerupsStore.shouldFetchCatalogForGuild(guild.id)) {
        const obj = GuildPowerupsActionCreators;
        const powerupCatalogForGuild = obj.fetchPowerupCatalogForGuild(tmp.id);
      }
    };
    const items = [guild.id];
    cResult[0] = guild.id;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (arr(12264)(guild.id)) {
    let num4;
    if (arr != null) {
      num4 = arr.length;
    }
    if (num4 == null) {
      num4 = 0;
    }
    if (0 !== num4) {
      let tmp10;
      let tmp11;
      if (cResult[3] !== arr) {
        function getPerkString() {
          if (null != arr) {
            if (0 !== arr.length) {
              let formatResult;
              const arr2 = orderMarketablePerksForDisplayDefault(arr);
              const tmp7 = importDefault;
              if (1 === arr2.length) {
                formatResult = <closure_8 powerup={arr2[0]} />;
              } else {
                const intl = intl3.intl;
                const format = intl.format;
                const obj = { perk1: null, perk2: null };
                const MNO3sG = tmp7(2597).MNO3sG;
                formatResult = format(MNO3sG, obj);
              }
              return formatResult;
            }
          }
          return "";
        }
        cResult[3] = arr;
        cResult[4] = getPerkString;
        tmp10 = getPerkString;
      } else {
        tmp10 = cResult[4];
      }
      ({ container, text } = tmp4);
      if (cResult[5] !== tmp10) {
        let intl = tmp(1126).intl;
        let format = intl.format;
        const obj2 = { perks: tmp10() };
        const v7lwpzR = tmp5(2597)["7lwpzR"];
        let formatResult = format(v7lwpzR, obj2);
        cResult[5] = tmp10;
        cResult[6] = formatResult;
        tmp11 = formatResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp4.text) {
        let tmp14;
        if (cResult[8] === tmp11) {
          tmp14 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          let tmp17;
          if (cResult[11] === tmp14) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
        const tmp20 = <View style={container}>{tmp14}</View>;
        cResult[10] = tmp4.container;
        cResult[11] = tmp14;
        cResult[12] = tmp20;
        tmp17 = tmp20;
      }
      const tmp16 = jsx(tmp(5086).Text, { style: text, variant: "text-sm/semibold", children: tmp11 });
      cResult[7] = tmp4.text;
      cResult[8] = tmp11;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
  }
}) : (function GuildPowerupsMarketingHeader(guild) {
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
      ({ style: tmp.text, variant: "text-sm/semibold", children: format(v7lwpzR, obj7) });
      const Text = guild(5086).Text;
      const intl = guild(1126).intl;
      format = intl.format;
      let str2 = "";
      v7lwpzR = tmp2(2597)["7lwpzR"];
      const tmp8 = guild;
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          const arr3 = orderMarketablePerksForDisplayDefault(arr);
          if (1 === arr3.length) {
            const obj3 = { powerup: arr3[0] };
            let format2Result = tmp6(closure_8, obj3);
          } else {
            const intl2 = tmp8(1126).intl;
            const format2 = intl2.format;
            const obj4 = { perk1: null, perk2: null };
            const MNO3sG = tmp2(2597).MNO3sG;
            format2Result = format2(MNO3sG, obj4);
          }
        }
      }
      return <tmp7 style={tmp.container}>{null}</tmp7>;
    }
  }
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default tmp3;
