// Module ID: 10875
// Function ID: 10876
// Name: ChannelFollowSuccessAlert
// Dependencies: [19, 17, 21, 10876, 10877, 10878, 10879, 10880, 10881, 1115, 4836, 4767, 4685, 6860, 12, 5300, 4832, 2]
// Exports: default

// Module 10875 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1115 */;
import useThemeDefault from "useTheme" /* 4767 */;
import AlertDefault from "Alert" /* 5300 */;
import AssetRegistry from "AssetRegistry" /* 10876 */;
import AssetRegistry2 from "AssetRegistry" /* 10877 */;
import AssetRegistry3 from "AssetRegistry" /* 10878 */;
import AssetRegistry4 from "AssetRegistry" /* 10879 */;
import AssetRegistry5 from "AssetRegistry" /* 10880 */;
import AssetRegistry6 from "AssetRegistry" /* 10881 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
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
let closure_9 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  let closure_0;
  let intl;
  let intl2;
  const tmp = closure_9();
  const tmp4 = useThemeDefault();
  let obj = require("shared");
  const tmp6 = obj.isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  items = [tmp6];
  const tmp5Result = require("module_6860");
  const stableMemo = tmp5Result.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(closure_0);
  }, items);
  const tmp5Result2 = require("module_6860");
  const stableMemo1 = tmp5Result2.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(items2);
  }, []);
  const obj2 = { confirmText: intl.string(require("intl").t["+IrDzN"]), children: items1 };
  const tmp2Result = AlertDefault;
  const merged = Object.assign(arg0);
  intl = tmp5(1115).intl;
  items1 = [, , ];
  const obj3 = { source: stableMemo, style: tmp.image };
  items1[0] = closure_4(Image, obj3);
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() };
  const Text = tmp5(4832).Text;
  items1[1] = closure_4(Text, obj4);
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: intl2.string(require("intl").t["2QbSea"]) };
  const Text2 = tmp5(4832).Text;
  intl2 = tmp5(1115).intl;
  items1[2] = closure_4(Text2, obj5);
  return closure_5(tmp2Result, obj2);
};
