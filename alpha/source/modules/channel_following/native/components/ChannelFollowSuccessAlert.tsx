// Module ID: 12138
// Function ID: 12139
// Name: ChannelFollowSuccessAlert
// Dependencies: [19, 21, 12139, 12140, 12141, 12142, 12143, 12144, 1126, 5091, 558, 576, 4992, 4930, 12, 7156, 6163, 5087, 5395, 2]

// Module 12138 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import intl3 from "intl" /* 1126 */;
import useThemeDefault from "useTheme" /* 4992 */;
import AlertDefault from "Alert" /* 5395 */;
import FastImageDefault from "FastImage" /* 6163 */;
import AssetRegistry from "AssetRegistry" /* 12139 */;
import AssetRegistry2 from "AssetRegistry" /* 12140 */;
import AssetRegistry3 from "AssetRegistry" /* 12141 */;
import AssetRegistry4 from "AssetRegistry" /* 12142 */;
import AssetRegistry5 from "AssetRegistry" /* 12143 */;
import AssetRegistry6 from "AssetRegistry" /* 12144 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let items = [AssetRegistry, AssetRegistry2, AssetRegistry3];
let items1 = [AssetRegistry4, AssetRegistry5, AssetRegistry6];
let items2 = [
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["w2o/60"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.FiAvKg);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.vKUFek);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.veQl5T);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.Pxb7BR);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["W03w++"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["95HTb5"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["+XFelz"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.hedHel);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.jgC65t);
  }
];
let closure_8 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelFollowSuccessAlert(arg0) {
  let closure_0;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = closure_8();
  const tmp6 = useThemeDefault();
  const obj2 = require("shared");
  const tmp7 = obj2.isThemeDark(tmp6) ? items1 : items;
  _require = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function x() {
      const obj = _modDef12;
      return obj.sample(closure_0);
    };
    items = [tmp7];
    cResult[0] = tmp7;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = require("module_7156");
  const stableMemo = tmpResult.useStableMemo(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const obj = _modDef12;
      return obj.sample(items2);
    };
    items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp12 = items1;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmpResult2 = require("module_7156");
  const stableMemo1 = tmpResult2.useStableMemo(tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t["+IrDzN"]);
    cResult[5] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp4.image) {
    let tmp16;
    let tmp18;
    if (cResult[7] === stableMemo) {
      tmp16 = cResult[8];
    }
    const header = tmp4.header;
    if (cResult[9] !== stableMemo1) {
      const stableMemo1Result = stableMemo1();
      cResult[9] = stableMemo1;
      cResult[10] = stableMemo1Result;
      tmp18 = stableMemo1Result;
    } else {
      tmp18 = cResult[10];
    }
    if (cResult[11] === tmp4.header) {
      let tmp20;
      let tmp23;
      let tmp25;
      if (cResult[12] === tmp18) {
        tmp20 = cResult[13];
      }
      const _Symbol = Symbol;
      const text = tmp4.text;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(require("intl").t["2QbSea"]);
        cResult[14] = stringResult1;
        tmp23 = stringResult1;
      } else {
        tmp23 = cResult[14];
      }
      if (cResult[15] !== tmp4.text) {
        const obj3 = { style: text, variant: "text-md/medium", color: "text-muted", children: tmp23 };
        const tmp27 = closure_3(require("Text/Text").Text, obj3);
        cResult[15] = tmp4.text;
        cResult[16] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[16];
      }
      if (cResult[17] === arg0) {
        if (cResult[18] === tmp25) {
          if (cResult[19] === tmp16) {
            let tmp29;
            if (cResult[20] === tmp20) {
              tmp29 = cResult[21];
            }
            return tmp29;
          }
        }
      }
      const obj4 = { confirmText: tmp14, children: items2 };
      const tmp5Result = AlertDefault;
      const merged = Object.assign(arg0);
      items2 = [tmp16, tmp20, tmp25];
      const tmp35 = closure_4(tmp5Result, obj4);
      cResult[17] = arg0;
      cResult[18] = tmp25;
      cResult[19] = tmp16;
      cResult[20] = tmp20;
      cResult[21] = tmp35;
      tmp29 = tmp35;
    }
    const obj5 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp18 };
    const tmp22 = closure_3(require("Text/Text").Text, obj5);
    cResult[11] = tmp4.header;
    cResult[12] = tmp18;
    cResult[13] = tmp22;
    tmp20 = tmp22;
  }
  const obj6 = { source: stableMemo, style: tmp4.image };
  const tmp17 = closure_3(FastImageDefault, obj6);
  cResult[6] = tmp4.image;
  cResult[7] = stableMemo;
  cResult[8] = tmp17;
  tmp16 = tmp17;
}) : (function ChannelFollowSuccessAlert(arg0) {
  let closure_0;
  let intl;
  let intl2;
  const tmp = closure_8();
  const tmp4 = useThemeDefault();
  let obj = require("shared");
  const tmp6 = obj.isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  items = [tmp6];
  const tmp5Result = require("module_7156");
  const stableMemo = tmp5Result.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(closure_0);
  }, items);
  const tmp5Result2 = require("module_7156");
  const stableMemo1 = tmp5Result2.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(items2);
  }, []);
  const obj2 = { confirmText: intl.string(require("intl").t["+IrDzN"]), children: items1 };
  const tmp2Result = AlertDefault;
  const merged = Object.assign(arg0);
  intl = tmp5(1126).intl;
  items1 = [, , ];
  const obj3 = { source: stableMemo, style: tmp.image };
  items1[0] = closure_3(FastImageDefault, obj3);
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() };
  const Text = tmp5(5087).Text;
  items1[1] = closure_3(Text, obj4);
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: intl2.string(require("intl").t["2QbSea"]) };
  const Text2 = tmp5(5087).Text;
  intl2 = tmp5(1126).intl;
  items1[2] = closure_3(Text2, obj5);
  return closure_4(tmp2Result, obj2);
});
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default tmp4;
