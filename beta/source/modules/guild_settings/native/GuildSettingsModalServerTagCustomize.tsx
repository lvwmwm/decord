// Module ID: 17388
// Function ID: 17389
// Name: GuildSettingsModalServerTagCustomize
// Dependencies: [32, 19, 17, 9028, 9049, 7386, 21, 576, 4836, 9051, 1479, 9029, 504, 9030, 9048, 4800, 17389, 1981, 6460, 9222, 8053, 5279, 6024, 1115, 4787, 4832, 17390, 17394, 2]
// Exports: default

// Module 17388 (GuildSettingsModalServerTagCustomize)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildTagConstants from "GuildTagConstants" /* 7386 */;
import GuildProfileStore from "GuildProfileStore" /* 9028 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9030 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
const View = react_native.View;
let GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
const BADGES = GuildTagConstants.BADGES;
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
const PX_16 = nativeDefault.space.PX_16;
let obj = { container: { flex: 1 }, containerContent: { paddingTop: 16, paddingHorizontal: PX_16 }, warning: obj2, warningText: { flex: 1 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "flex-start", marginTop: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTagCustomize.tsx");

export default function GuildSettingsModalServerTagCustomize(guildId) {
  let Stack;
  let _undefined;
  let c6;
  let intl;
  let intl2;
  let intl3;
  let items11;
  let items12;
  let items9;
  let obj7;
  let tmp16;
  guildId = guildId.guildId;
  let fetchStatus;
  let stateFromStores;
  let badge;
  let stateFromStores2;
  GuildProfileFetchStatus = undefined;
  let callback2;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = closure_13();
  let tmp2 = guildId;
  const tmp3 = stateFromStores;
  let obj = guildId(stateFromStores[9]);
  const result = obj.canUseMobileServerTagSettings(guildId);
  const rounded = Math.floor((fetchStatus(stateFromStores[10])().width - 2 * PX_16 - 4 * PX_8) / 5);
  let obj2 = guildId(stateFromStores[11]);
  const guildProfile1 = obj2.useGuildProfile(guildId);
  fetchStatus = guildProfile1.fetchStatus;
  let guildProfile = guildProfile1.guildProfile;
  const items = [callback2];
  const obj3 = guildId(stateFromStores[12]);
  stateFromStores = obj3.useStateFromStores(items, () => callback2.getGuildProfile());
  const items1 = [callback2];
  const obj4 = guildId(stateFromStores[12]);
  const stateFromStores1 = obj4.useStateFromStores(items1, () => callback2.getProps().originalProfile);
  let str;
  const tmp8 = callback2;
  if (stateFromStores != null) {
    str = stateFromStores.tag;
  }
  if (str == null) {
    str = "";
  }
  badge = undefined;
  if (stateFromStores != null) {
    badge = stateFromStores.badge;
  }
  if (badge == null) {
    badge = BADGES[0];
  }
  const items2 = [guildId, fetchStatus];
  const effect = badge.useEffect(() => {
    if (fetchStatus === GuildProfileFetchStatus.NOT_FETCHED) {
      const obj = GuildProfileActionCreators;
      const guildProfile = obj.getGuildProfile(guildId, false);
    }
  }, items2);
  const items3 = [tmp8];
  const tmp2Result = tmp2(tmp3[12]);
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    const profileError = callback2.getProfileError();
    let tmp = null;
    if (null != profileError) {
      tmp = null;
      if (429 !== profileError.status) {
        let anyErrorMessage = profileError.getAnyErrorMessage();
        if (anyErrorMessage == null) {
          anyErrorMessage = null;
        }
        tmp = anyErrorMessage;
      }
    }
    return tmp;
  });
  [tmp16, c6] = str(badge.useState(stateFromStores2), 2);
  const items4 = [stateFromStores2];
  str(badge.useState(stateFromStores2), 2);
  const effect1 = badge.useEffect(() => {
    _undefined(stateFromStores2);
  }, items4);
  const items5 = [guildId];
  const items6 = [guildId];
  const callback = badge.useCallback((tag) => {
    _undefined(null);
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { tag };
    obj.updateGuildProfile(guildId, obj2);
  }, items5);
  const items7 = [guildId];
  const callback1 = badge.useCallback((badge) => {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { badge };
    obj.updateGuildProfile(guildId, obj2);
  }, items6);
  callback2 = badge.useCallback((badgeColorPrimary, badgeColorSecondary) => {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { badgeColorPrimary, badgeColorSecondary };
    obj.updateGuildProfile(guildId, obj2);
  }, items7);
  const items8 = [badge, callback2, , , ];
  let badgeColorPrimary;
  if (stateFromStores != null) {
    badgeColorPrimary = stateFromStores.badgeColorPrimary;
  }
  items8[2] = badgeColorPrimary;
  let badgeColorSecondary;
  if (stateFromStores != null) {
    badgeColorSecondary = stateFromStores.badgeColorSecondary;
  }
  items8[3] = badgeColorSecondary;
  items8[4] = str;
  if (result) {
    if (fetchStatus !== GuildProfileFetchStatus.FETCHED) {
      return closure_9(tmp2(tmp3[18]).SceneLoadingIndicator, {});
    } else if (null == guildProfile) {
      const obj5 = {
        onRetry() {
              const obj = GuildProfileActionCreators;
              return obj.getGuildProfile(guildId, true);
            }
      };
      return closure_9(fetchStatus(tmp3[19]), obj5);
    } else if (null == stateFromStores) {
      return closure_9(tmp2(tmp3[18]).SceneLoadingIndicator, {});
    } else {
      let tag;
      if (stateFromStores1 != null) {
        tag = stateFromStores1.tag;
      }
      let tmp28Result = null != tag && "" !== stateFromStores1.tag && str !== stateFromStores1.tag;
      const obj6 = { style: tmp.container, contentContainerStyle: items9, children: closure_10(Stack, obj7) };
      items9 = [tmp.containerContent, contentContainerStyle];
      const Form = tmp2(tmp3[20]).Form;
      obj7 = { spacing: fetchStatus(tmp3[7]).space.PX_24, children: items12 };
      Stack = tmp2(tmp3[21]).Stack;
      const obj8 = { label: intl.string(tmp2(tmp3[23]).t.sOxim5), value: str, onChange: callback, placeholder: "WUMP", maxLength: 4, errorMessage: tmp16 };
      const TextInput = tmp2(tmp3[22]).TextInput;
      intl = tmp2(tmp3[23]).intl;
      const items10 = [closure_9(TextInput, obj8), ];
      if (tmp28Result) {
        const obj9 = { accessible: true, accessibilityLabel: intl2.string(tmp2(tmp3[23]).t["4tVt6P"]), style: tmp.warning, children: items11 };
        intl2 = tmp2(tmp3[23]).intl;
        const obj10 = { size: "sm", color: fetchStatus(tmp3[7]).colors.ICON_SUBTLE };
        const CircleInformationIcon = tmp2(tmp3[24]).CircleInformationIcon;
        items11 = [closure_9(CircleInformationIcon, obj10), ];
        const obj11 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.warningText, children: intl3.string(tmp2(tmp3[23]).t["4tVt6P"]) };
        const Text = tmp2(tmp3[25]).Text;
        intl3 = tmp2(tmp3[23]).intl;
        items11[1] = closure_9(Text, obj11);
        tmp28Result = tmp28(tmp29, obj9);
      }
      const obj12 = { children: items10 };
      items10[1] = tmp28Result;
      items12 = [closure_10(stateFromStores2, obj12), , ];
      const obj13 = { guildId, selectedBadge: badge, onSelectBadge: callback1, cellSize: rounded };
      items12[1] = closure_9(fetchStatus(tmp3[26]), obj13);
      const obj15 = { badge, primaryColor: null, secondaryColor: null, onSelectColor: callback2, onPressEyedropper: tmp23, cellSize: rounded };
      ({ badgeColorPrimary: obj14.primaryColor, badgeColorSecondary: obj14.secondaryColor } = stateFromStores);
      items12[2] = closure_9(fetchStatus(tmp3[27]), obj15);
      return closure_9(Form, obj6);
    }
  } else {
    return null;
  }
};
