// Module ID: 11203
// Function ID: 11204
// Name: ChannelFollowSuccessAlert
// Dependencies: [19, 21, 11204, 11205, 11206, 11207, 11208, 11209, 1113, 5014, 5253, 5021, 10573, 12, 6030, 5717, 5624, 2]
// Exports: default

// Module 11203 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import intl3 from "intl" /* 1113 */;
import useThemeDefault from "useTheme" /* 5253 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AlertDefault from "Alert" /* 6030 */;
import AssetRegistry from "AssetRegistry" /* 11204 */;
import AssetRegistry2 from "AssetRegistry" /* 11205 */;
import AssetRegistry3 from "AssetRegistry" /* 11206 */;
import AssetRegistry4 from "AssetRegistry" /* 11207 */;
import AssetRegistry5 from "AssetRegistry" /* 11208 */;
import AssetRegistry6 from "AssetRegistry" /* 11209 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let items = [AssetRegistry, AssetRegistry2, AssetRegistry3];
let items1 = [AssetRegistry4, AssetRegistry5, AssetRegistry6];
const items2 = [
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
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  let closure_0;
  let intl;
  let intl2;
  const tmp = closure_8();
  const tmp4 = useThemeDefault();
  let obj = require("shared");
  const tmp6 = obj.isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  items = [tmp6];
  const tmp5Result = require("module_10573");
  const stableMemo = tmp5Result.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(closure_0);
  }, items);
  const tmp5Result2 = require("module_10573");
  const stableMemo1 = tmp5Result2.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(items2);
  }, []);
  const obj2 = { confirmText: intl.string(require("intl").t["+IrDzN"]), children: items1 };
  const tmp2Result = AlertDefault;
  const merged = Object.assign(arg0);
  intl = tmp5(1113).intl;
  items1 = [, , ];
  const obj3 = { source: stableMemo, style: tmp.image };
  items1[0] = closure_3(FastImageDefault, obj3);
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() };
  const Text = tmp5(5624).Text;
  items1[1] = closure_3(Text, obj4);
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: intl2.string(require("intl").t["2QbSea"]) };
  const Text2 = tmp5(5624).Text;
  intl2 = tmp5(1113).intl;
  items1[2] = closure_3(Text2, obj5);
  return closure_4(tmp2Result, obj2);
};
