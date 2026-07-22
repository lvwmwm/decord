// Module ID: 13670
// Function ID: 103521
// Name: ConnectGuardianCard
// Dependencies: []
// Exports: ConnectGuardianCard

// Module 13670 (ConnectGuardianCard)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).FAMILY_CENTER_REQUEST_QR_CODE_URL;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.compactContainer = { alignSelf: "center", gap: importDefault(dependencyMap[6]).space.PX_16 };
const obj2 = { mousemoveCb: "png", stretch: true, inCall: "/assets/images/native/community", padding: importDefault(dependencyMap[6]).space.PX_12, borderRadius: importDefault(dependencyMap[6]).radii.lg, borderColor: importDefault(dependencyMap[6]).colors.BORDER_NORMAL };
obj.card = obj2;
obj.countdown = { textAlign: "center" };
const obj3 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", paddingHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.divider = obj3;
obj.compactDividerFlush = { paddingHorizontal: 0 };
const obj4 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_NORMAL, borderWidth: "<string:2941583362>" };
obj.dividerLine = obj4;
const obj1 = { alignSelf: "center", gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.dividerText = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
obj.buttonGroup = { paddingTop: 0 };
let closure_9 = obj.createStyles(obj);
const obj5 = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/parent_tools/native/ConnectGuardianCard.tsx");

export const ConnectGuardianCard = function ConnectGuardianCard(linkCode) {
  let days;
  let expiresAt;
  let hours;
  let minutes;
  let seconds;
  let shareActions;
  linkCode = linkCode.linkCode;
  const arg1 = linkCode;
  ({ expiresAt, shareActions } = linkCode);
  if (shareActions === undefined) {
    shareActions = "none";
  }
  let importDefault;
  let dependencyMap;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  importDefault = stateFromStores;
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  dependencyMap = id;
  ({ days, hours, minutes, seconds } = importDefault(dependencyMap[8])(expiresAt));
  importDefault(dependencyMap[9])(expiresAt, linkCode.onRefresh);
  const items1 = [stateFromStores, linkCode];
  const callback = React.useCallback(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = "" !== linkCode;
    }
    if (tmp) {
      const result = linkCode(id[10]).shareGuardianConnectLink(stateFromStores, linkCode);
      const obj = linkCode(id[10]);
    }
  }, items1);
  const items2 = [id, linkCode];
  if (null == id) {
    return null;
  } else {
    const intl5 = arg1(dependencyMap[13]).intl;
    obj = { style: tmp.card };
    const tmp31 = callback(id, linkCode);
    obj = { align: "center", spacing: importDefault(dependencyMap[6]).space.PX_8 };
    const obj1 = { size: 160, text: tmp31 };
    const items3 = [callback2(arg1(dependencyMap[16]).QRCodeWithOverlay, obj1), ];
    const obj2 = { style: tmp.countdown, variant: "text-xs/normal" };
    const stringResult = intl5.string(importDefault(dependencyMap[14]).RfkLDs);
    const _HermesInternal = HermesInternal;
    obj2.children = "" + stringResult + " " + arg1(dependencyMap[18]).getTimeFormat(86400 * days + 3600 * hours + 60 * minutes + seconds);
    items3[1] = callback2(arg1(dependencyMap[17]).Text, obj2);
    obj.children = items3;
    obj.children = callback3(arg1(dependencyMap[15]).Stack, obj);
    const tmp40 = callback2(View, obj);
    if ("none" === shareActions) {
      return tmp40;
    } else {
      const obj3 = {};
      const items4 = [tmp.divider, ];
      let compactDividerFlush = tmp41;
      if ("compact" === shareActions) {
        compactDividerFlush = tmp.compactDividerFlush;
      }
      items4[1] = compactDividerFlush;
      obj3.style = items4;
      const obj4 = { style: tmp.dividerLine };
      const items5 = [callback2(View, obj4), , ];
      const obj5 = { style: tmp.dividerText };
      const intl = arg1(dependencyMap[13]).intl;
      const tmp14 = importDefault(dependencyMap[14]);
      obj5.children = intl.string("compact" === shareActions ? tmp14.XhROZk : tmp14.lggBOi);
      items5[1] = callback2(arg1(dependencyMap[17]).Text, obj5);
      const obj6 = { style: tmp.dividerLine };
      items5[2] = callback2(View, obj6);
      obj3.children = items5;
      const tmp42Result = callback3(View, obj3);
      if ("compact" === shareActions) {
        const obj7 = { style: tmp.compactContainer };
        const items6 = [tmp40, tmp42Result, ];
        const obj8 = {};
        const intl4 = arg1(dependencyMap[13]).intl;
        obj8.text = intl4.string(arg1(dependencyMap[13]).t.Ej3B3Y);
        const obj9 = { size: "md", color: importDefault(dependencyMap[6]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        obj8.icon = callback2(arg1(dependencyMap[20]).ShareIcon, obj9);
        obj8.disabled = "" === linkCode;
        obj8.onPress = callback;
        items6[2] = callback2(arg1(dependencyMap[19]).Button, obj8);
        obj7.children = items6;
        let tmp18Result = tmp18(View, obj7);
      } else {
        const obj10 = { spacing: importDefault(dependencyMap[6]).space.PX_32, style: tmp.container };
        const items7 = [tmp40, tmp42Result, ];
        const obj11 = { style: tmp.buttonGroup };
        const obj12 = {};
        const intl2 = arg1(dependencyMap[13]).intl;
        obj12.text = intl2.string(arg1(dependencyMap[13]).t.Ej3B3Y);
        obj12.disabled = "" === linkCode;
        obj12.onPress = callback;
        const items8 = [callback2(arg1(dependencyMap[19]).Button, obj12), ];
        const obj13 = {};
        const intl3 = arg1(dependencyMap[13]).intl;
        obj13.text = intl3.string(arg1(dependencyMap[13]).t.WqhZss);
        obj13.disabled = "" === linkCode;
        obj13.onPress = tmp7;
        items8[1] = callback2(arg1(dependencyMap[19]).Button, obj13);
        obj11.children = items8;
        items7[2] = tmp18(arg1(dependencyMap[21]).ButtonGroup, obj11);
        obj10.children = items7;
        tmp18Result = tmp18(arg1(dependencyMap[15]).Stack, obj10);
      }
      return tmp18Result;
    }
    const obj16 = arg1(dependencyMap[18]);
  }
  const tmp4 = importDefault(dependencyMap[8])(expiresAt);
};
