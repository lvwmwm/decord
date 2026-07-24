// Module ID: 16324
// Function ID: 127031
// Name: PX_16
// Dependencies: [57, 31, 27, 8461, 8483, 7721, 33, 689, 4130, 8485, 1450, 8462, 566, 8463, 8482, 4098, 16325, 1934, 5583, 11911, 7636, 4541, 7574, 1212, 4086, 4126, 16326, 16330, 2]
// Exports: default

// Module 16324 (PX_16)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "GuildSettingsServerTagColorGrid";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BADGES } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_8 = require("_createForOfIteratorHelperLoose").space.PX_8;
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
_createForOfIteratorHelperLoose = { container: { flex: 1 }, containerContent: { paddingTop: 16, paddingHorizontal: PX_16 } };
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "flex-start", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.warning = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.warningText = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx");

export default function GuildSettingsModalServerTagCustomize(guildId) {
  guildId = guildId.guildId;
  let str;
  let badge;
  let stateFromStores2;
  let GuildProfileFetchStatus;
  let callback2;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(stateFromStores[9]);
  const result = obj.canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((fetchStatus(stateFromStores[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  let obj1 = guildId(stateFromStores[11]);
  let guildProfile = obj1.useGuildProfile(guildId);
  fetchStatus = guildProfile.fetchStatus;
  let obj2 = guildId(stateFromStores[12]);
  const items = [callback2];
  stateFromStores = obj2.useStateFromStores(items, () => callback2.getGuildProfile());
  let obj3 = guildId(stateFromStores[12]);
  const items1 = [callback2];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback2.getProps().originalProfile);
  let tag;
  if (null != stateFromStores) {
    tag = stateFromStores.tag;
  }
  str = "";
  if (null != tag) {
    str = tag;
  }
  badge = undefined;
  if (null != stateFromStores) {
    badge = stateFromStores.badge;
  }
  if (null == badge) {
    badge = BADGES[0];
  }
  const items2 = [guildId, fetchStatus];
  const effect = badge.useEffect(() => {
    if (fetchStatus === lib.NOT_FETCHED) {
      const guildProfile = guildId(stateFromStores[13]).getGuildProfile(guildId, false);
      const obj = guildId(stateFromStores[13]);
    }
  }, items2);
  let obj4 = guildId(stateFromStores[12]);
  const items3 = [callback2];
  stateFromStores2 = obj4.useStateFromStores(items3, () => {
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
  const tmp12 = str(badge.useState(stateFromStores2), 2);
  const first = tmp12[0];
  GuildProfileFetchStatus = tmp12[1];
  const items4 = [stateFromStores2];
  const effect1 = badge.useEffect(() => {
    lib(stateFromStores2);
  }, items4);
  const items5 = [guildId];
  const items6 = [guildId];
  const callback = badge.useCallback((tag) => {
    lib(null);
    let obj = fetchStatus(stateFromStores[14]);
    obj = { tag };
    obj.updateGuildProfile(guildId, obj);
  }, items5);
  const items7 = [guildId];
  const callback1 = badge.useCallback((badge) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badge };
    obj.updateGuildProfile(guildId, obj);
  }, items6);
  callback2 = badge.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    let obj = fetchStatus(stateFromStores[14]);
    obj = { badgeColorPrimary, badgeColorSecondary };
    obj.updateGuildProfile(guildId, obj);
  }, items7);
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
    if (fetchStatus !== GuildProfileFetchStatus.FETCHED) {
      return callback(guildId(stateFromStores[18]).SceneLoadingIndicator, {});
    } else if (null == guildProfile.guildProfile) {
      obj = {
        onRetry() {
              return guildId(stateFromStores[13]).getGuildProfile(guildId, true);
            }
      };
      return callback(fetchStatus(stateFromStores[19]), obj);
    } else if (null == stateFromStores) {
      return callback(guildId(stateFromStores[18]).SceneLoadingIndicator, {});
    } else {
      let tag1;
      if (null != stateFromStores1) {
        tag1 = stateFromStores1.tag;
      }
      let tmp23 = null != tag1 && "" !== stateFromStores1.tag && str !== stateFromStores1.tag;
      obj = { style: tmp.container };
      const items9 = [tmp.containerContent, guildId.contentContainerStyle];
      obj.contentContainerStyle = items9;
      obj1 = { spacing: fetchStatus(stateFromStores[7]).space.PX_24 };
      obj2 = {};
      obj3 = {};
      const intl = guildId(stateFromStores[23]).intl;
      obj3.label = intl.string(guildId(stateFromStores[23]).t.sOxim5);
      obj3.value = str;
      obj3.onChange = callback;
      obj3.placeholder = "WUMP";
      obj3.maxLength = 4;
      let tmp30;
      if (null != first) {
        tmp30 = first;
      }
      obj3.errorMessage = tmp30;
      const items10 = [callback(guildId(stateFromStores[22]).TextInput, obj3), ];
      if (tmp23) {
        obj4 = { accessible: true };
        const intl2 = guildId(stateFromStores[23]).intl;
        obj4.accessibilityLabel = intl2.string(guildId(stateFromStores[23]).t["4tVt6P"]);
        obj4.style = tmp.warning;
        const obj5 = { size: "sm", color: fetchStatus(stateFromStores[7]).colors.ICON_SUBTLE };
        const items11 = [callback(guildId(stateFromStores[24]).CircleInformationIcon, obj5), ];
        const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.warningText };
        const intl3 = guildId(stateFromStores[23]).intl;
        obj6.children = intl3.string(guildId(stateFromStores[23]).t["4tVt6P"]);
        items11[1] = callback(guildId(stateFromStores[25]).Text, obj6);
        obj4.children = items11;
        tmp23 = callback2(stateFromStores2, obj4);
      }
      items10[1] = tmp23;
      obj2.children = items10;
      const items12 = [callback2(stateFromStores2, obj2), , ];
      const obj7 = { guildId, selectedBadge: badge, onSelectBadge: callback1, cellSize: rounded };
      items12[1] = callback(fetchStatus(stateFromStores[26]), obj7);
      const obj8 = { badge };
      ({ badgeColorPrimary: obj14.primaryColor, badgeColorSecondary: obj14.secondaryColor } = stateFromStores);
      obj8.onSelectColor = callback2;
      obj8.onPressEyedropper = tmp20;
      obj8.cellSize = rounded;
      items12[2] = callback(fetchStatus(stateFromStores[27]), obj8);
      obj1.children = items12;
      obj.children = callback2(guildId(stateFromStores[21]).Stack, obj1);
      return callback(guildId(stateFromStores[20]).Form, obj);
    }
  } else {
    return null;
  }
};
