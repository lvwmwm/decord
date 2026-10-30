// Module ID: 18945
// Function ID: 18946
// Name: OrbsArcadeFrameHeaderInfo
// Dependencies: [19, 17, 2040, 16954, 21, 5009, 575, 5635, 504, 9532, 5619, 14449, 2]
// Exports: default

// Module 18945 (OrbsArcadeFrameHeaderInfo)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ButtonConstants from "ButtonConstants" /* 5635 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, namePill: obj3, nameText: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeFrameHeaderInfo.tsx");

export default function OrbsArcadeFrameHeaderInfo(gameId) {
  let heldRunChargeTotal;
  let items4;
  let obj6;
  gameId = gameId.gameId;
  const applicationId = gameId.applicationId;
  const tmp = closure_8();
  const items = [OrbsArcadeStore, ApplicationStore];
  const items1 = [gameId, applicationId];
  const obj = gameId(applicationId[8]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const game = OrbsArcadeStore.getGame(gameId);
    let name;
    if (game != null) {
      name = game.name;
    }
    if (name == null) {
      const application = ApplicationStore.getApplication(applicationId);
      let name1;
      if (application != null) {
        name1 = application.name;
      }
      name = name1;
    }
    return name;
  }, items1);
  const obj2 = gameId(applicationId[9]);
  const balance = obj2.useFetchVirtualCurrencyBalance().balance;
  const items2 = [OrbsArcadeStore];
  const obj3 = gameId(applicationId[8]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
  const items3 = [balance, stateFromStores1];
  let tmp9 = null;
  const obj4 = { style: tmp.container, children: items4 };
  const memo = balance.useMemo(() => {
    let bound = null;
    if (null != balance) {
      const _Math = Math;
      bound = Math.max(tmp - stateFromStores1, 0);
    }
    return bound;
  }, items3);
  const tmp7 = closure_7;
  if (null != stateFromStores) {
    tmp9 = null;
    if ("" !== stateFromStores) {
      const obj5 = { style: tmp.namePill, children: closure_6(gameId(applicationId[10]).Text, obj6) };
      obj6 = { variant: "text-sm/semibold", color: "none", lineClamp: 1, maxFontSizeMultiplier: 1, style: tmp.nameText, children: stateFromStores };
      tmp9 = closure_6(tmp8, obj5);
    }
  }
  items4 = [tmp9, closure_6(gameId(tmp3[11]).BalanceWidgetPill, { balance: memo })];
  return tmp7(stateFromStores1, obj4);
};
