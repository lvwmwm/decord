// Module ID: 20601
// Function ID: 20602
// Name: GuildSettingsModalBans
// Dependencies: [32, 19, 17, 5177, 5238, 1388, 8405, 1072, 21, 5306, 575, 504, 5131, 5902, 6061, 7073, 6917, 8404, 7443, 1187, 7456, 1113, 7943, 6014, 7948, 7588, 20602, 7825, 8596, 7830, 5912, 2]
// Exports: default

// Module 20601 (GuildSettingsModalBans)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import fuzzysearchDefault from "fuzzysearch" /* 7073 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 7948 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8405 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let bans, bansVersion, props;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const Permissions = Constants.Permissions;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchField: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items8;
  let obj7;
  let tmp19;
  let tmp20Result;
  let tmp23;
  guildId = guildId.guildId;
  let stateFromStores1;
  let setting;
  let rounded;
  let users;
  let tmp = guildId;
  const tmp2 = stateFromStores1;
  const contentContainerStyle = guildId.contentContainerStyle;
  let obj = guildId(stateFromStores1[11]);
  let items = [users];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(stateFromStores1[11]);
  let items1 = [PermissionStore];
  let items2 = [stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(Permissions.BAN_MEMBERS, tmp);
    return canResult;
  }, items2);
  let obj3 = guildId(stateFromStores1[11]);
  const items3 = [GuildSettingsStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
    let str;
    props = props.getProps();
    const obj = { bans: props.bans, searchQuery: str, bansVersion: props.bansVersion };
    str = props.searchQuery;
    if (str == null) {
      str = "";
    }
    return obj;
  });
  bans = stateFromStoresObject.bans;
  const searchQuery = stateFromStoresObject.searchQuery;
  bansVersion = stateFromStoresObject.bansVersion;
  const flattenResult = rounded.flatten(contentContainerStyle);
  let paddingBottom;
  if (flattenResult != null) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if (typeof paddingBottom === "number") {
    let tmp28 = stateFromStores;
    num = paddingBottom + stateFromStores(tmp2[10]).space.PX_16;
  }
  let tmp8 = closure_15();
  const DeveloperMode = tmp(tmp2[12]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  const tmp10 = stateFromStores;
  const tmpResult = tmp(tmp2[13]);
  const token = tmpResult.useToken(stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_HEIGHT);
  const tmpResult5 = tmp(tmp2[13]);
  const token1 = tmpResult5.useToken(stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_PADDING);
  const tmpResult6 = tmp(tmp2[13]);
  const token2 = tmpResult6.useToken(stateFromStores(tmp2[10]).modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmpResult7 = tmp(tmp2[14]);
  const scaledTextLineHeight = tmpResult7.useScaledTextLineHeight(token2);
  const tmpResult8 = tmp(tmp2[14]);
  rounded = Math.ceil(Math.max(token, 2 * token1 + scaledTextLineHeight + tmpResult8.useScaledTextLineHeight("body-xs/medium")));
  const items4 = [bans, bansVersion, searchQuery];
  const memo = searchQuery.useMemo(() => {
    let items2;
    const items = [];
    let items1 = bans;
    if (bans == null) {
      items1 = [];
    }
    const tmp = items1[Symbol.iterator]();
    while (tmp !== undefined) {
      let user = UserStore.getUser(_slicedToArray(tmp2, 1)[0]);
      let tmp6 = user;
      if (null != user) {
        let str3 = searchQuery;
        let tmp9Result = 0 === searchQuery.length;
        if (!tmp9Result) {
          let tmp9 = fuzzysearchDefault;
          let str = tmp6.username;
          let formatted = str3.toLowerCase();
          tmp9Result = tmp9(formatted, str.toLowerCase());
        }
        if (!tmp9Result) {
          let tmp17Result = null != tmp6.globalName;
          if (tmp17Result) {
            let tmp17 = fuzzysearchDefault;
            let str2 = tmp6.globalName;
            let formatted1 = str3.toLowerCase();
            tmp17Result = tmp17(formatted1, str2.toLowerCase());
          }
          tmp9Result = tmp17Result;
        }
        if (tmp9Result) {
          let arr = items.push(tmp6);
        }
      }
      continue;
    }
    const sorted = items.sort((username, username2) => {
      const str = username.username;
      const formatted = str.toLowerCase();
      const str2 = username2.username;
      return formatted.localeCompare(str2.toLowerCase());
    });
    const obj = { users: items, sections: items2 };
    items2 = [items.length];
    return obj;
  }, items4);
  users = memo.users;
  const items5 = [guildId];
  const sections = memo.sections;
  const effect = searchQuery.useEffect(() => {
    let obj = GuildActionCreatorsDefault;
    const guildBansBatch = obj.fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      const obj = stateFromStores(stateFromStores1[17]);
      obj.setSearchQuery("");
    };
  }, items5);
  const items6 = [bans, stateFromStores1, setting, stateFromStores, rounded, users];
  const callback = searchQuery.useCallback((arg0, arg1) => {
    let Avatar;
    let id;
    let obj3;
    let tmp5;
    let username;
    let username1;
    let username2;
    const user = tmp;
    let obj = bans;
    let value;
    const arr = users;
    if (bans != null) {
      value = obj.get(tmp.id);
    }
    stateFromStores = value;
    let tmp4Result = null;
    if (null != value) {
      let tmp6 = stateFromStores1;
      let obj2 = {
        start: 0 === arg1,
        end: arg1 === arr.length - 1,
        height: rounded,
        icon: tmp4(Avatar, obj3),
        label: username,
        labelLineClamp: 1,
        subLabel: username1,
        subLabelLineClamp: 1,
        accessibilityLabel: username2,
        trailing: tmp4(tmp5(tmp6[20]).TableRowArrow, {}),
        onPress() {
            let intl;
            let intl2;
            if (null != stateFromStores) {
              const items = [];
              const tmp28 = stateFromStores1;
              if (tmp28) {
                let obj = {
                  label: intl.string(intl4.t.Mp6Z2l),
                  isDestructive: true,
                  onPress() {
                        const obj = stateFromStores(stateFromStores1[16]);
                        obj.unbanUser(stateFromStores.id, user.id);
                      }
                };
                const push = items.push;
                intl = intl4.intl;
                push(obj);
              }
              const tmp6 = setting;
              if (tmp6) {
                let obj2 = {
                  label: intl2.string(intl4.t["/AXYnE"]),
                  onPress() {
                        const obj = guildId(stateFromStores1[22]);
                        obj.copy(user.id);
                        const obj2 = guildId(stateFromStores1[23]);
                        obj2.presentIdCopied();
                      }
                };
                const push2 = items.push;
                intl2 = intl4.intl;
                push2(obj2);
              }
              const obj3 = { title: user.username, subtitle: null };
              const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
              showSimpleActionSheet2;
              const string = intl4.intl.string;
              if (null != stateFromStores.reason) {
                let reason;
                if ("" !== stateFromStores.reason) {
                  reason = tmp21.reason;
                }
                const _HermesInternal = HermesInternal;
                const obj4 = { key: "GuildSettingsBan", header: obj3, options: items, hasIcons: false };
                obj3.subtitle = "" + tmp20 + ": " + reason;
                const result = showSimpleActionSheet(obj4);
              }
              const intl3 = intl4.intl;
              reason = intl3.string(intl4.t["t+2Zci"]);
            }
          }
      };
      const TableRow = guildId(stateFromStores1[18]).TableRow;
      obj3 = { size: guildId(stateFromStores1[19]).AvatarSizes.SMALL, user: tmp, guildId: id };
      Avatar = guildId(stateFromStores1[19]).Avatar;
      id = undefined;
      tmp5 = guildId;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      username = tmp.globalName;
      if (username == null) {
        username = tmp.username;
      }
      username1 = null;
      if (null != users[arg1].globalName) {
        username1 = tmp.username;
      }
      if (null != users[arg1].globalName) {
        let _HermesInternal = HermesInternal;
        username2 = "" + tmp.globalName + ", " + tmp.username;
      } else {
        username2 = tmp.username;
      }
      tmp4Result = tmp4(TableRow, obj2);
    }
    return tmp4Result;
  }, items6);
  let tmp20 = closure_13;
  const tmp21 = closure_14;
  if (null == bans) {
    tmp20Result = closure_12(tmp(tmp2[25]).SceneLoadingIndicator, {});
    tmp23 = closure_12;
  } else {
    let str = "";
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj4 = { Illustration: tmp(tmp2[26]).BansEmpty, title: intl2.string(tmp(tmp2[21]).t.ZEiY1D), body: intl3.string(tmp(tmp2[21]).t.zfCsAw) };
        const EmptyState2 = tmp(tmp2[19]).EmptyState;
        intl2 = tmp(tmp2[21]).intl;
        intl3 = tmp(tmp2[21]).intl;
        tmp20Result = closure_12(EmptyState2, obj4);
        tmp23 = closure_12;
      }
    }
    const obj5 = { style: tmp8.containerInner, children: null };
    tmp23 = closure_12;
    const obj6 = { style: tmp8.searchField, children: closure_12(tmp(tmp2[27]).SearchBar, obj7) };
    obj7 = { size: "md", onChange: tmp19 };
    const items7 = [closure_12(setting, obj6), ];
    const tmp22 = setting;
    if ("" !== searchQuery) {
      let tmp23Result;
      if (0 === users.length) {
        const obj8 = { Illustration: tmp(tmp2[28]).NoResults, body: intl.string(tmp(tmp2[21]).t.z3cK5j) };
        const EmptyState = tmp(tmp2[19]).EmptyState;
        intl = tmp(tmp2[21]).intl;
        tmp23Result = tmp23(EmptyState, obj8);
      }
      items7[1] = tmp23Result;
      obj5.children = items7;
      tmp20Result = tmp20(tmp22, obj5);
    }
    const obj9 = { sections, itemSize: rounded, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp23Result = tmp23(tmp10(tmp2[29]), obj9);
  }
  const obj10 = { children: items8 };
  items8 = [tmp20Result, tmp23(tmp(tmp2[30]).NavScrim, {})];
  return tmp20(tmp21, obj10);
};
