// Module ID: 20017
// Function ID: 20018
// Name: InterestPickedGames
// Dependencies: [19, 17, 21, 575, 5170, 15243, 13688, 1113, 2534, 9626, 5874, 5783, 2]
// Exports: default

// Module 20017 (InterestPickedGames)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5783 */;
import FastImageDefault from "FastImage" /* 5874 */;
import useGameRecordsDefault from "useGameRecords" /* 15243 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
let obj2;
let size;
let size1;
({ PixelRatio: c3, View: closure_4 } = react_native);
const jsx = Fragment.jsx;
const PX_24 = nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
const obj = { container: obj2, icon: size, fallback: size1 };
obj2 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: PX_24, height: PX_24, borderRadius: nativeDefault.radii.sm };
size1 = { width: PX_24, height: PX_24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickedGames.tsx");

export default function InterestPickedGames(gameIds) {
  let closure_1;
  let formatToPlainString;
  let icon;
  let mapped;
  let obj3;
  let z5uqej;
  importDefault = undefined;
  gameIds = gameIds.gameIds;
  let tmp = closure_7();
  _require = tmp;
  const arr = useGameRecordsDefault(gameIds);
  if (0 === arr.length) {
    return null;
  } else {
    const _Math = Math;
    importDefault = Math.ceil(PX_24 * closure_3.get());
    let tmp9 = closure_4;
    ({
      "aria-label": formatToPlainString(z5uqej, obj3),
      shape: require("ClipView").CutoutShape.RoundedRect,
      size: PX_24,
      gap: nativeDefault.space.PX_4 / 2,
      depthX: 0.25,
      children: arr.map((getIconURL) => {
          let name;
          let tmp9;
          let iconURL = getIconURL.getIconURL(closure_1);
          const tmp = closure_1;
          if (iconURL == null) {
            iconURL = getIconURL.getCoverURL(tmp);
          }
          if (null != iconURL) {
            const obj3 = { uri: iconURL };
            tmp9 = jsx(FastImageDefault, { accessible: false, source: obj3, style: icon.icon, resizeMode: "cover" }, getIconURL.id);
          } else {
            ({ variant: "body-xs/semibold", lineClamp: 1, children: name.slice(0, 1) });
            name = getIconURL.name;
            const Text = Text_Text.Text;
            tmp9 = <React3 key={arg0.id} accessible={false} style={closure_0.fallback}>{null}</React3>;
          }
          return tmp9;
        })
    });
    const Pile = require("Pile").Pile;
    const intl = require("intl").intl;
    formatToPlainString = intl.formatToPlainString;
    obj3 = { games: mapped.join(", ") };
    z5uqej = tmp2(2534).z5uqej;
    mapped = arr.map((name) => name.name);
    return <closure_4 style={tmp.container}>{null}</closure_4>;
  }
};
