// Module ID: 16275
// Function ID: 126682
// Name: GuildSettingsModalServerTag
// Dependencies: [5, 57, 31, 27, 8417, 1838, 8439, 653, 7632, 33, 4130, 689, 1456, 8441, 566, 8418, 7845, 8419, 8438, 3830, 1212, 11512, 4021, 5087, 5788, 1529, 4471, 1273, 5585, 11884, 4126, 5503, 5504, 5165, 4541, 12922, 7495, 12920, 16276, 2]
// Exports: default

// Module 16275 (GuildSettingsModalServerTag)
import closure_3 from "_createForOfIteratorHelperLoose";
import _slicedToArray from "_slicedToArray";
import TableRowGroupTitle from "TableRowGroupTitle";
import { AppState } from "Button";
import { GuildProfileFetchStatus } from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildSettingsSections } from "ME";
import items from "items";
import jsxProd from "TableRowInner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ BADGES: closure_11, GuildTagBadgeSize: closure_12 } = items);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { paddingTop: 16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.containerContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.description = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("result").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTag.tsx");

export default function GuildSettingsModalServerTag(guildId) {
  let badgeColorPrimary;
  let fetchStatus;
  let guildProfile;
  guildId = guildId.guildId;
  let GuildProfileFetchStatus;
  let result1;
  let c9;
  let ref;
  let callback1;
  let c12;
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(1456);
  const navigation = obj.useNavigation();
  let obj1 = guildId(8441);
  const result = obj1.canUseMobileServerTagSettings(guildId);
  const dependencyMap = result;
  let obj2 = guildId(566);
  const items = [result1];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => result1.getGuild(guildId), items1);
  let obj3 = guildId(8418);
  guildProfile = obj3.useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile);
  let obj4 = guildId(566);
  const items2 = [c9];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => _undefined.getGuildProfile());
  let obj5 = guildId(566);
  const items3 = [c9];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => _undefined.getProps().originalProfile);
  const tmp8 = stateFromStores2(first.useState(false), 2);
  first = tmp8[0];
  let closure_6 = tmp8[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    let obj6 = guildId(7845);
    guildSupportsTagsResult = obj6.guildSupportsTags(stateFromStores);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (null != stateFromStores1) {
    tag = stateFromStores1.tag;
  }
  let obj7 = guildId(8441);
  result1 = obj7.isServerTagDraftDirty(stateFromStores1, stateFromStores2);
  let tmp16 = null != stateFromStores1;
  if (tmp16) {
    let tmp17 = null == stateFromStores1.tag;
    if (!tmp17) {
      tmp17 = "" !== stateFromStores1.tag;
    }
    tmp16 = tmp17;
  }
  let tmp18 = result1;
  if (result1) {
    tmp18 = tmp16;
  }
  c9 = tmp18;
  const items4 = [guildId];
  const effect = first.useEffect(() => {
    if (!result1) {
      let obj = guildId(result[17]);
      obj = { respectBackoff: true };
      const guildProfile = obj.getGuildProfile(guildId, true, obj);
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = first.useEffect(() => {
    let closure_0 = closure_6.addEventListener("change", (arg0) => {
      if (!tmp) {
        let obj = guildId(result[17]);
        obj = { respectBackoff: true };
        const guildProfile = obj.getGuildProfile(closure_0, true, obj);
      }
    });
    return () => closure_0.remove();
  }, items5);
  const items6 = [guildId, stateFromStores2];
  callback = first.useCallback((arg0) => {
    const updateGuildProfile = navigation(result[18]).updateGuildProfile;
    if (arg0) {
      let obj = {};
      let tag;
      if (null != stateFromStores2) {
        tag = stateFromStores2.tag;
      }
      let str = "";
      if (null != tag) {
        str = tag;
      }
      obj.tag = str;
      let badge;
      if (null != stateFromStores2) {
        badge = stateFromStores2.badge;
      }
      if (null == badge) {
        badge = callback1[0];
      }
      obj.badge = badge;
      let badgeColorPrimary;
      if (null != stateFromStores2) {
        badgeColorPrimary = stateFromStores2.badgeColorPrimary;
      }
      let tmp16 = null;
      if (null != badgeColorPrimary) {
        tmp16 = badgeColorPrimary;
      }
      obj.badgeColorPrimary = tmp16;
      let badgeColorSecondary;
      if (null != stateFromStores2) {
        badgeColorSecondary = stateFromStores2.badgeColorSecondary;
      }
      let tmp20 = null;
      if (null != badgeColorSecondary) {
        tmp20 = badgeColorSecondary;
      }
      obj.badgeColorSecondary = tmp20;
      updateGuildProfile(tmp2, obj);
    } else {
      obj = { tag: null };
      updateGuildProfile(tmp2, obj);
    }
  }, items6);
  ref = first.useRef(false);
  // CreateGeneratorClosureLongIndex (0x67)
  const items7 = [stateFromStores1, guildId, tmp18, result, navigation];
  callback1 = first.useCallback(stateFromStores1(ref), items7);
  const items8 = [guildId];
  c12 = tmp25;
  const items9 = [navigation, result, fetchStatus === GuildProfileFetchStatus.FETCHED, guildSupportsTagsResult, first, tmp18, callback1];
  const callback2 = first.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: guildId(result[22]).GUILD_POWERUP_TAG_SKU_ID };
    navigation(result[21])(obj);
  }, items8);
  const effect2 = first.useEffect(() => {
    if (closure_2) {
      if (c12) {
        if (c7) {
          let setOptionsResult = {
            headerRight: first ? (() => callback(guildId(result[23]).HeaderSubmittingIndicator, {})) : (() => {
                    const obj = {};
                    const intl = guildId(result[20]).intl;
                    obj.text = intl.string(guildId(result[20]).t["R3BPH+"]);
                    obj.onPress = outer1_11;
                    obj.disabled = !outer1_9;
                    return callback(guildId(result[24]).HeaderActionButton, obj);
                  })
          };
          setOptionsResult = navigation.setOptions(setOptionsResult);
        }
      }
    }
    navigation.setOptions({ headerRight: undefined });
  }, items9);
  const items10 = [guildId, stateFromStores2];
  callback = first.useCallback(() => {
    let obj = navigation(result[18]);
    obj = {};
    let tag;
    if (null != stateFromStores2) {
      tag = stateFromStores2.tag;
    }
    let tmp4 = null;
    if (null != tag) {
      tmp4 = tag;
    }
    obj.tag = tmp4;
    let badge;
    if (null != stateFromStores2) {
      badge = stateFromStores2.badge;
    }
    let tmp7 = null;
    if (null != badge) {
      tmp7 = badge;
    }
    obj.badge = tmp7;
    let badgeColorPrimary;
    if (null != stateFromStores2) {
      badgeColorPrimary = stateFromStores2.badgeColorPrimary;
    }
    let tmp10 = null;
    if (null != badgeColorPrimary) {
      tmp10 = badgeColorPrimary;
    }
    obj.badgeColorPrimary = tmp10;
    let badgeColorSecondary;
    if (null != stateFromStores2) {
      badgeColorSecondary = stateFromStores2.badgeColorSecondary;
    }
    let tmp13 = null;
    if (null != badgeColorSecondary) {
      tmp13 = badgeColorSecondary;
    }
    obj.badgeColorSecondary = tmp13;
    obj.updateGuildProfile(guildId, obj);
  }, items10);
  let tmp28 = result1;
  if (result1) {
    tmp28 = !first;
  }
  navigation(1529)(tmp28, (data) => {
    const action = data.data.action;
    let obj = navigation(result[26]);
    obj = {};
    const intl = guildId(result[20]).intl;
    obj.title = intl.string(guildId(result[20]).t.zhHtEX);
    const intl2 = guildId(result[20]).intl;
    obj.body = intl2.string(guildId(result[20]).t.BVVy6y);
    const intl3 = guildId(result[20]).intl;
    obj.confirmText = intl3.string(guildId(result[20]).t.Ywt4w9);
    obj.confirmColor = guildId(result[27]).ButtonColors.RED;
    const intl4 = guildId(result[20]).intl;
    obj.cancelText = intl4.string(guildId(result[20]).t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      outer1_13();
      outer1_1.dispatch(action);
    };
    obj.show(obj);
  });
  if (result) {
    if (tmp25) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        obj = {
          onRetry() {
                  return guildId(result[17]).getGuildProfile(guildId, true);
                }
        };
        return callback(navigation(11884), obj);
      } else if (null == stateFromStores1) {
        return callback(guildId(5585).SceneLoadingIndicator, {});
      } else {
        let tmp33;
        if (tmp14) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              obj = { variant: "text-md/normal", color: "text-muted", children: stateFromStores1.tag };
              tmp33 = callback(guildId(4126).Text, obj);
            }
          }
        }
        obj1 = {};
        let intl = guildId(1212).intl;
        obj1.title = intl.string(guildId(1212).t["2QmKZ2"]);
        obj1.hasIcons = false;
        obj2 = {};
        let intl2 = guildId(1212).intl;
        obj2.label = intl2.string(guildId(1212).t["w/mIMw"]);
        obj2.value = tmp14;
        obj2.onValueChange = callback;
        obj2.disabled = !guildSupportsTagsResult;
        const items11 = [callback(guildId(5504).TableSwitchRow, obj2), ];
        obj3 = {};
        let intl3 = guildId(1212).intl;
        obj3.label = intl3.string(guildId(1212).t.oPzTHw);
        obj3.arrow = true;
        let tmp41 = !tmp14;
        if (tmp14) {
          tmp41 = !guildSupportsTagsResult;
        }
        obj3.disabled = tmp41;
        obj3.onPress = function onPress() {
          return navigation.navigate(ref.TAG_CUSTOMIZE);
        };
        let tmp43Result;
        if (null != tmp33) {
          obj4 = { direction: "horizontal", align: "center", spacing: navigation(689).space.PX_4 };
          let tmp48Result = null != stateFromStores1.badge;
          if (tmp48Result) {
            obj5 = {};
            ({ badge: obj14.badge, badgeColorPrimary } = stateFromStores1);
            let tmp51;
            if (null != badgeColorPrimary) {
              tmp51 = badgeColorPrimary;
            }
            obj5.primaryTintColor = tmp51;
            let badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            let tmp52;
            if (null != badgeColorSecondary) {
              tmp52 = badgeColorSecondary;
            }
            obj5.secondaryTintColor = tmp52;
            ({ SIZE_16: obj14.width, SIZE_16: obj14.height } = c12);
            tmp48Result = callback(guildId(12922).GuildBadge, obj5);
            const tmp48 = callback;
          }
          const items12 = [tmp48Result, tmp33];
          obj4.children = items12;
          tmp43Result = closure_14(guildId(4541).Stack, obj4);
          const tmp43 = closure_14;
        }
        obj3.trailing = tmp43Result;
        items11[1] = callback(guildId(5165).TableRow, obj3);
        obj1.children = items11;
        const tmp37Result = closure_14(guildId(5503).TableRowGroup, obj1);
        obj6 = { style: tmp.container };
        const items13 = [tmp.containerContent, guildId.contentContainerStyle];
        obj6.contentContainerStyle = items13;
        obj7 = { spacing: navigation(689).space.PX_16 };
        if (guildSupportsTagsResult) {
          const obj8 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description };
          let intl4 = guildId(1212).intl;
          obj8.children = intl4.string(guildId(1212).t["qVCnq+"]);
          const items14 = [tmp61(guildId(4126).Text, obj8), tmp37Result, , ];
          const obj9 = { variant: "eyebrow", color: "text-muted", style: tmp.description, accessibilityRole: "header" };
          const intl5 = guildId(1212).intl;
          obj9.children = intl5.string(guildId(1212).t.SKNnqq);
          items14[2] = tmp61(guildId(4126).Text, obj9);
          const obj10 = { guildId };
          ({ tag: obj20.tag, badge: obj20.badge, badgeColorPrimary: obj20.primaryColor, badgeColorSecondary: obj20.secondaryColor } = stateFromStores1);
          obj10.isDirty = result1;
          items14[3] = tmp61(tmp59(12920), obj10);
          obj7.children = items14;
          let tmp62 = obj7;
        } else {
          const obj11 = { guildId, onUnlockPress: callback2 };
          const items15 = [tmp61(tmp59(16276), obj11), tmp37Result];
          obj7.children = items15;
          tmp62 = obj7;
        }
        obj6.children = closure_14(guildId(4541).Stack, tmp62);
        return callback(guildId(7495).Form, obj6);
      }
    } else {
      return callback(guildId(5585).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
  const tmp27 = navigation(1529);
};
