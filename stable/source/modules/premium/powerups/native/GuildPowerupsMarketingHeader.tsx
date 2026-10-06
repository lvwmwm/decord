// Module ID: 13118
// Function ID: 13119
// Name: GuildPowerupsMarketingHeader
// Dependencies: [19, 17, 4725, 21, 4837, 588, 684, 558, 576, 4833, 13119, 11892, 11917, 13120, 1127, 2522, 2]

// Module 13118 (GuildPowerupsMarketingHeader)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import _modDef684 from "module_684" /* 684 */;
import intl3 from "intl" /* 1127 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 11892 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11917 */;
import useMarketablePowerupPerksDefault from "useMarketablePowerupPerks" /* 13119 */;
import orderMarketablePerksForDisplayDefault from "orderMarketablePerksForDisplay" /* 13120 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4725 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guild, powerup;

let alphaResult;
let alphaResult1;
let obj2;
let obj4;
let tmp;
const Text_Text = tmp(4833);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj4 };
obj2 = { padding: nativeDefault.space.PX_12, backgroundColor: alphaResult.hex() };
createStyles = createStyles.createStyles;
let obj3 = _modDef684("#000000");
alphaResult = obj3.alpha(0.18);
obj4 = { textAlign: "center", color: alphaResult1.hex() };
const obj6 = _modDef684("#FFFFFF");
alphaResult1 = obj6.alpha(0.5);
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((powerup) => {
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
}) : ((children) => jsx(Text_Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title }));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let arr;
  let container;
  let text;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp = guild;
  let obj = guild(576);
  const cResult = obj.c(13);
  guild = guild.guild;
  let tmp4 = closure_7();
  arr = arr(13119)(guild.id);
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
  if (arr(11917)(guild.id)) {
    let num4;
    if (arr != null) {
      num4 = arr.length;
    }
    if (num4 == null) {
      num4 = 0;
    }
    if (0 !== num4) {
      if (cResult[3] !== arr) {
        class F {
          constructor() {
            if (null != arr) {
              if (0 !== arr.length) {
                let formatResult;
                const arr2 = orderMarketablePerksForDisplayDefault(arr);
                const tmp4 = importDefault;
                if (1 === arr2.length) {
                  formatResult = <closure_8 powerup={arr2[0]} />;
                } else {
                  const intl = intl3.intl;
                  const format = intl.format;
                  const obj2 = { perk1: null, perk2: null };
                  const MNO3sG = tmp4(2522).MNO3sG;
                  formatResult = format(MNO3sG, obj2);
                }
                return formatResult;
              }
            }
            return "";
          }
        }
        cResult[3] = arr;
        cResult[4] = F;
      } else {
        class F {
          constructor() {
            if (null != arr) {
              if (0 !== arr.length) {
                let formatResult;
                const arr2 = orderMarketablePerksForDisplayDefault(arr);
                const tmp4 = importDefault;
                if (1 === arr2.length) {
                  formatResult = <closure_8 powerup={arr2[0]} />;
                } else {
                  const intl = intl3.intl;
                  const format = intl.format;
                  const obj2 = { perk1: null, perk2: null };
                  const MNO3sG = tmp4(2522).MNO3sG;
                  formatResult = format(MNO3sG, obj2);
                }
                return formatResult;
              }
            }
            return "";
          }
        }
      }
      ({ container, text } = tmp4);
      if (cResult[5] !== tmp10) {
        class F {
          constructor() {
            if (null != arr) {
              if (0 !== arr.length) {
                let formatResult;
                const arr2 = orderMarketablePerksForDisplayDefault(arr);
                const tmp4 = importDefault;
                if (1 === arr2.length) {
                  formatResult = <closure_8 powerup={arr2[0]} />;
                } else {
                  const intl = intl3.intl;
                  const format = intl.format;
                  const obj2 = { perk1: null, perk2: null };
                  const MNO3sG = tmp4(2522).MNO3sG;
                  formatResult = format(MNO3sG, obj2);
                }
                return formatResult;
              }
            }
            return "";
          }
        }
        let format = tmp12.format;
        let obj2 = { perks: tmp10() };
        const v7lwpzR = tmp5(2522)["7lwpzR"];
        let formatResult = format(v7lwpzR, obj2);
        cResult[5] = tmp10;
        cResult[6] = formatResult;
      } else {
        class F {
          constructor() {
            if (null != arr) {
              if (0 !== arr.length) {
                let formatResult;
                const arr2 = orderMarketablePerksForDisplayDefault(arr);
                const tmp4 = importDefault;
                if (1 === arr2.length) {
                  formatResult = <closure_8 powerup={arr2[0]} />;
                } else {
                  const intl = intl3.intl;
                  const format = intl.format;
                  const obj2 = { perk1: null, perk2: null };
                  const MNO3sG = tmp4(2522).MNO3sG;
                  formatResult = format(MNO3sG, obj2);
                }
                return formatResult;
              }
            }
            return "";
          }
        }
      }
      if (cResult[7] === tmp4.text) {
        class F {
          constructor() {
            if (null != arr) {
              if (0 !== arr.length) {
                let formatResult;
                const arr2 = orderMarketablePerksForDisplayDefault(arr);
                const tmp4 = importDefault;
                if (1 === arr2.length) {
                  formatResult = <closure_8 powerup={arr2[0]} />;
                } else {
                  const intl = intl3.intl;
                  const format = intl.format;
                  const obj2 = { perk1: null, perk2: null };
                  const MNO3sG = tmp4(2522).MNO3sG;
                  formatResult = format(MNO3sG, obj2);
                }
                return formatResult;
              }
            }
            return "";
          }
        }
        if (cResult[10] === tmp4.container) {
          class F {
            constructor() {
              if (null != arr) {
                if (0 !== arr.length) {
                  let formatResult;
                  const arr2 = orderMarketablePerksForDisplayDefault(arr);
                  const tmp4 = importDefault;
                  if (1 === arr2.length) {
                    formatResult = <closure_8 powerup={arr2[0]} />;
                  } else {
                    const intl = intl3.intl;
                    const format = intl.format;
                    const obj2 = { perk1: null, perk2: null };
                    const MNO3sG = tmp4(2522).MNO3sG;
                    formatResult = format(MNO3sG, obj2);
                  }
                  return formatResult;
                }
              }
              return "";
            }
          }
          return tmp18;
        }
        const tmp21 = <View style={container}>{tmp15}</View>;
        cResult[10] = tmp4.container;
        cResult[11] = tmp15;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      cResult[7] = tmp4.text;
      cResult[8] = tmp11;
      cResult[9] = jsx(tmp(4833).Text, { style: text, variant: "text-sm/semibold", children: tmp11 });
      const tmp17 = jsx(tmp(4833).Text, { style: text, variant: "text-sm/semibold", children: tmp11 });
    }
  }
}) : ((guild) => {
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
      const Text = guild(4833).Text;
      const intl = guild(1127).intl;
      format = intl.format;
      let str2 = "";
      v7lwpzR = tmp2(2522)["7lwpzR"];
      const tmp8 = guild;
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          const arr3 = orderMarketablePerksForDisplayDefault(arr);
          if (1 === arr3.length) {
            const obj3 = { powerup: arr3[0] };
            let format2Result = tmp6(closure_8, obj3);
          } else {
            const intl2 = tmp8(1127).intl;
            const format2 = intl2.format;
            const obj4 = { perk1: null, perk2: null };
            const MNO3sG = tmp2(2522).MNO3sG;
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
