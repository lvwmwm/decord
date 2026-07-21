// Module ID: 16152
// Function ID: 124492
// Name: PX_16
// Dependencies: []
// Exports: default

// Module 16152 (PX_16)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const GuildProfileFetchStatus = arg1(dependencyMap[3]).GuildProfileFetchStatus;
let closure_7 = importDefault(dependencyMap[4]);
const BADGES = arg1(dependencyMap[5]).BADGES;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const PX_8 = importDefault(dependencyMap[7]).space.PX_8;
const PX_16 = importDefault(dependencyMap[7]).space.PX_16;
let obj = arg1(dependencyMap[8]);
obj = { container: { flex: 1 }, containerContent: { paddingTop: 16, paddingHorizontal: PX_16 } };
obj = { gap: importDefault(dependencyMap[7]).space.PX_8, marginTop: importDefault(dependencyMap[7]).space.PX_8, padding: importDefault(dependencyMap[7]).space.PX_12, borderRadius: importDefault(dependencyMap[7]).radii.md, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_SUBTLE };
obj.warning = obj;
obj.warningText = { flex: 1 };
let closure_13 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx");

export default function GuildSettingsModalServerTagCustomize(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let callback;
  let React;
  let View;
  let constants;
  let closure_7;
  const tmp = callback4();
  let obj = arg1(dependencyMap[9]);
  const result = obj.canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((importDefault(dependencyMap[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  let obj1 = arg1(dependencyMap[11]);
  const guildProfile = obj1.useGuildProfile(guildId);
  const fetchStatus = guildProfile.fetchStatus;
  const importDefault = fetchStatus;
  let obj2 = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj2.useStateFromStores(items, () => callback2.getGuildProfile());
  const dependencyMap = stateFromStores;
  let obj3 = arg1(dependencyMap[12]);
  const items1 = [closure_7];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback2.getProps().originalProfile);
  let tag;
  if (null != stateFromStores) {
    tag = stateFromStores.tag;
  }
  let str = "";
  if (null != tag) {
    str = tag;
  }
  callback = str;
  let badge;
  if (null != stateFromStores) {
    badge = stateFromStores.badge;
  }
  if (null == badge) {
    badge = BADGES[0];
  }
  React = badge;
  const items2 = [guildId, fetchStatus];
  const effect = React.useEffect(() => {
    if (fetchStatus === lib.NOT_FETCHED) {
      const guildProfile = guildId(stateFromStores[13]).getGuildProfile(guildId, false);
      const obj = guildId(stateFromStores[13]);
    }
  }, items2);
  let obj4 = arg1(dependencyMap[12]);
  const items3 = [closure_7];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => {
    const profileError = callback2.getProfileError();
    let tmp = null;
    if (null != profileError) {
      tmp = null;
      if (429 !== profileError.status) {
        const anyErrorMessage = profileError.getAnyErrorMessage();
        let tmp3 = null;
        if (null != anyErrorMessage) {
          tmp3 = anyErrorMessage;
        }
        tmp = tmp3;
      }
    }
    return tmp;
  });
  View = stateFromStores2;
  const tmp12 = callback(React.useState(stateFromStores2), 2);
  const first = tmp12[0];
  constants = tmp12[1];
  const items4 = [stateFromStores2];
  const effect1 = React.useEffect(() => {
    lib(stateFromStores2);
  }, items4);
  const items5 = [guildId];
  const items6 = [guildId];
  callback = React.useCallback((tag) => {
    lib(null);
    let obj = fetchStatus(stateFromStores[14]);
    obj = { tag };
    obj.updateGuildProfile(guildId, obj);
  }, items5);
  const items7 = [guildId];
  const callback1 = React.useCallback((badge) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badge };
    obj.updateGuildProfile(guildId, obj);
  }, items6);
  const callback2 = React.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badgeColorPrimary, badgeColorSecondary };
    obj.updateGuildProfile(guildId, obj);
  }, items7);
  closure_7 = callback2;
  const items8 = [badge, callback2, , , ];
  let badgeColorPrimary;
  if (null != stateFromStores) {
    badgeColorPrimary = stateFromStores.badgeColorPrimary;
  }
  items8[2] = badgeColorPrimary;
  let badgeColorSecondary;
  if (null != stateFromStores) {
    badgeColorSecondary = stateFromStores.badgeColorSecondary;
  }
  items8[3] = badgeColorSecondary;
  items8[4] = str;
  if (result) {
    if (fetchStatus !== constants.FETCHED) {
      return callback2(arg1(dependencyMap[18]).SceneLoadingIndicator, {});
    } else if (null == guildProfile.guildProfile) {
      obj = {
        onRetry() {
              return guildId(stateFromStores[13]).getGuildProfile(guildId, true);
            }
      };
      return callback2(importDefault(dependencyMap[19]), obj);
    } else if (null == stateFromStores) {
      return callback2(arg1(dependencyMap[18]).SceneLoadingIndicator, {});
    } else {
      let tag1;
      if (null != stateFromStores1) {
        tag1 = stateFromStores1.tag;
      }
      let tmp23 = null != tag1 && "" !== stateFromStores1.tag && str !== stateFromStores1.tag;
      obj = { style: tmp.container };
      const items9 = [tmp.containerContent, guildId.contentContainerStyle];
      obj.contentContainerStyle = items9;
      obj1 = { spacing: importDefault(dependencyMap[7]).space.PX_24 };
      obj2 = {};
      obj3 = {};
      const intl = arg1(dependencyMap[23]).intl;
      obj3.label = intl.string(arg1(dependencyMap[23]).t.sOxim5);
      obj3.value = str;
      obj3.onChange = callback;
      obj3.placeholder = "WUMP";
      obj3.maxLength = 4;
      let tmp30;
      if (null != first) {
        tmp30 = first;
      }
      obj3.errorMessage = tmp30;
      const items10 = [callback2(arg1(dependencyMap[22]).TextInput, obj3), ];
      if (tmp23) {
        obj4 = { accessible: true };
        const intl2 = arg1(dependencyMap[23]).intl;
        obj4.accessibilityLabel = intl2.string(arg1(dependencyMap[23]).t.4tVt6P);
        obj4.style = tmp.warning;
        const obj5 = { size: "sm", color: importDefault(dependencyMap[7]).colors.ICON_SUBTLE };
        const items11 = [callback2(arg1(dependencyMap[24]).CircleInformationIcon, obj5), ];
        const obj6 = { hasMaxConnections: true, isBoostOnlySubscription: true, style: tmp.warningText };
        const intl3 = arg1(dependencyMap[23]).intl;
        obj6.children = intl3.string(arg1(dependencyMap[23]).t.4tVt6P);
        items11[1] = callback2(arg1(dependencyMap[25]).Text, obj6);
        obj4.children = items11;
        tmp23 = callback3(View, obj4);
      }
      items10[1] = tmp23;
      obj2.children = items10;
      const items12 = [callback3(View, obj2), , ];
      const obj7 = { guildId, selectedBadge: badge, onSelectBadge: callback1, cellSize: rounded };
      items12[1] = callback2(importDefault(dependencyMap[26]), obj7);
      const obj8 = { badge };
      ({ badgeColorPrimary: obj14.primaryColor, badgeColorSecondary: obj14.secondaryColor } = stateFromStores);
      obj8.onSelectColor = callback2;
      obj8.onPressEyedropper = tmp20;
      obj8.cellSize = rounded;
      items12[2] = callback2(importDefault(dependencyMap[27]), obj8);
      obj1.children = items12;
      obj.children = callback3(arg1(dependencyMap[21]).Stack, obj1);
      return callback2(arg1(dependencyMap[20]).Form, obj);
    }
  } else {
    return null;
  }
};
