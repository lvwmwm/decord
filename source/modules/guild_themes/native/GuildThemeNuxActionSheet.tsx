// Module ID: 14868
// Function ID: 112006
// Name: GuildThemeNuxActionSheet
// Dependencies: []
// Exports: default

// Module 14868 (GuildThemeNuxActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const ContentDismissActionType = arg1(dependencyMap[6]).ContentDismissActionType;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let importDefaultResult = importDefault(dependencyMap[8]);
importDefaultResult = new importDefaultResult("GuildThemeNuxActionSheet");
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { padding: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_8, paddingBottom: 0 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.title = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
const obj1 = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_8 };
obj.description = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_24 };
const obj2 = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_24 };
obj.options = { marginBottom: importDefault(dependencyMap[10]).space.PX_12 };
const obj3 = { marginBottom: importDefault(dependencyMap[10]).space.PX_12 };
obj.warning = { marginBottom: importDefault(dependencyMap[10]).space.PX_12 };
const obj4 = { marginBottom: importDefault(dependencyMap[10]).space.PX_12 };
obj.footer = { gap: importDefault(dependencyMap[10]).space.PX_8 };
let closure_13 = obj.createStyles(obj);
const obj5 = { gap: importDefault(dependencyMap[10]).space.PX_8 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default function GuildThemeNuxActionSheet(guildId) {
  let tmp5;
  let tmp7;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const importDefault = markAsDismissed;
  const tmp = callback5();
  const tmp2 = callback2(React.useState(arg1(closure_2[11]).getInitialGuildThemeNuxSelection), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
  [tmp5, closure_3] = callback2(React.useState(null), 2);
  const tmp4 = callback2(React.useState(null), 2);
  [tmp7, closure_4] = callback2(React.useState(false), 2);
  const React = React.useRef(false);
  const tmp8 = first === arg1(closure_2[12]).GuildThemeSourcePreference.PERSONAL;
  const View = tmp8;
  let obj = arg1(closure_2[13]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
  closure_7 = stateFromStores;
  let obj1 = arg1(closure_2[13]);
  const items1 = [closure_8];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guildThemeSnapshot = callback1.getGuildThemeSnapshot(guildId);
    let tmp2 = null;
    if (null != guildThemeSnapshot) {
      tmp2 = null;
      if (guildThemeSnapshot.enabled) {
        const themeSettings = guildThemeSnapshot.themeSettings;
        tmp2 = null;
        if (null != themeSettings) {
          tmp2 = themeSettings;
        }
      }
    }
    return tmp2;
  }, items2);
  const effect = React.useEffect(() => {
    if (stateFromStores !== guildId) {
      markAsDismissed(closure_2[14]).hideActionSheet("GuildThemeNuxActionSheet");
      const obj = markAsDismissed(closure_2[14]);
    }
  }, items3);
  const items4 = [markAsDismissed];
  const fn = (arg0) => {
    if (!ref.current) {
      ref.current = true;
      markAsDismissed(arg0);
    }
  };
  const callback = React.useCallback((arg0) => {
    callback2(null);
    callback(arg0);
  }, []);
  const callback1 = React.useCallback(fn, items4);
  closure_8 = callback1;
  // CreateGeneratorClosureLongIndex (0x67)
  const items5 = [guildId, tmp8, markAsDismissed, stateFromStores];
  const items6 = [callback1];
  const callback2 = React.useCallback(callback(fn), items5);
  const callback3 = React.useCallback(() => {
    callback1(constants.USER_DISMISS);
  }, items6);
  const intl = arg1(closure_2[15]).intl;
  const string = intl.string;
  const t = arg1(closure_2[15]).t;
  if (tmp8) {
    let stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t.cY+Oob);
  }
  obj = { startExpanded: true };
  const intl2 = arg1(closure_2[15]).intl;
  obj.dismissAccessibilityLabel = intl2.string(arg1(closure_2[15]).t.cpT0Cq);
  obj.onDismiss = callback3;
  obj.contentStyles = tmp.container;
  const items7 = [callback3(importDefault(closure_2[17]), { themeSettings: stateFromStores1, isPersonal: tmp8 }), , , , , , ];
  obj = { style: tmp.title };
  const intl3 = arg1(closure_2[15]).intl;
  obj.children = intl3.string(arg1(closure_2[15]).t.Q9zFy9);
  items7[1] = callback3(arg1(closure_2[18]).Text, obj);
  obj1 = { hasMaxConnections: 1, isBoostOnlySubscription: 1, style: tmp.description };
  const intl4 = arg1(closure_2[15]).intl;
  obj1.children = intl4.string(arg1(closure_2[15]).t.XLpBLj);
  items7[2] = callback3(arg1(closure_2[18]).Text, obj1);
  const obj2 = { style: tmp.options };
  const obj3 = { hasIcons: false, value: first, onChange: callback };
  const obj4 = {};
  const intl5 = arg1(closure_2[15]).intl;
  obj4.label = intl5.string(arg1(closure_2[15]).t.aN3RNQ);
  obj4.value = arg1(closure_2[12]).GuildThemeSourcePreference.GUILD;
  const items8 = [callback3(arg1(closure_2[20]).TableRadioRow, obj4), ];
  const obj5 = {};
  const intl6 = arg1(closure_2[15]).intl;
  obj5.label = intl6.string(arg1(closure_2[15]).t.js8y7t);
  obj5.value = arg1(closure_2[12]).GuildThemeSourcePreference.PERSONAL;
  items8[1] = callback3(arg1(closure_2[20]).TableRadioRow, obj5);
  obj3.children = items8;
  obj2.children = callback4(arg1(closure_2[19]).TableRadioGroup, obj3);
  items7[3] = callback3(View, obj2);
  let tmp18 = null;
  if (tmp8) {
    const obj6 = { style: tmp.warning };
    const obj7 = { messageType: arg1(closure_2[21]).HelpMessageTypes.WARNING, borderRadius: importDefault(closure_2[10]).radii.md };
    const intl7 = arg1(closure_2[15]).intl;
    obj7.children = intl7.string(arg1(closure_2[15]).t.tTHQAy);
    obj6.children = callback3(arg1(closure_2[21]).HelpMessage, obj7);
    tmp18 = callback3(View, obj6);
  }
  items7[4] = tmp18;
  let tmp24 = null;
  if (null != tmp5) {
    const obj8 = { style: tmp.warning };
    const obj9 = { messageType: arg1(closure_2[21]).HelpMessageTypes.ERROR, borderRadius: importDefault(closure_2[10]).radii.md, children: tmp5 };
    obj8.children = callback3(arg1(closure_2[21]).HelpMessage, obj9);
    tmp24 = callback3(View, obj8);
  }
  items7[5] = tmp24;
  const obj10 = { style: tmp.footer };
  const obj11 = { text: stringResult };
  let str = "primary";
  if (tmp8) {
    str = "secondary";
  }
  obj11.variant = str;
  obj11.loading = tmp7;
  obj11.disabled = tmp7;
  obj11.onPress = callback2;
  obj10.children = callback3(arg1(closure_2[22]).Button, obj11);
  items7[6] = callback3(View, obj10);
  obj.children = items7;
  return callback4(arg1(closure_2[16]).BottomSheet, obj);
};
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";
