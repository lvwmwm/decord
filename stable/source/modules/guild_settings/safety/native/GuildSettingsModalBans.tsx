// Module ID: 17457
// Function ID: 17458
// Name: GuildSettingsModalBans
// Dependencies: [32, 19, 17, 2073, 1378, 9026, 21, 4837, 588, 504, 6471, 2027, 5830, 5833, 9025, 5916, 1189, 5923, 1127, 6611, 4530, 6616, 6460, 17458, 6472, 7682, 6477, 6461, 2]
// Exports: default

// Module 17457 (GuildSettingsModalBans)
import nativeDefault from "native" /* 588 */;
import intl5 from "intl" /* 1127 */;
import fuzzysearchDefault from "fuzzysearch" /* 5830 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5833 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6616 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9026 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

let bans, bansVersion, props;

let c10;
let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerInner: obj2, searchField: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalBans.tsx");

export default function ConnectedGuildSettingsModalBans(guildId) {
  let intl;
  let intl2;
  let intl3;
  let items6;
  let obj6;
  let tmp15Result;
  let tmp18;
  guildId = guildId.guildId;
  bans = undefined;
  let setting;
  let users;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = closure_13();
  const tmp2 = guildId;
  let tmp3 = bans;
  let obj = guildId(bans[9]);
  let items = [GuildStore];
  let stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(bans[9]);
  let items1 = [GuildSettingsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
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
  let tmp6 = stateFromStores;
  bansVersion = stateFromStoresObject.bansVersion;
  let tmp7 = stateFromStores(bans[10])();
  const flattenResult = closure_6.flatten(contentContainerStyle);
  let paddingBottom;
  if (flattenResult != null) {
    paddingBottom = flattenResult.paddingBottom;
  }
  let num = 0;
  if (typeof paddingBottom === "number") {
    num = paddingBottom + tmp6(tmp3[8]).space.PX_16;
  }
  const DeveloperMode = tmp2(tmp3[11]).DeveloperMode;
  setting = DeveloperMode.useSetting();
  let items2 = [bans, bansVersion, searchQuery];
  const memo = setting.useMemo(() => {
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
  }, items2);
  users = memo.users;
  const items3 = [guildId];
  const sections = memo.sections;
  const effect = setting.useEffect(() => {
    let obj = GuildActionCreatorsDefault;
    const guildBansBatch = obj.fetchGuildBansBatch(guildId, 1000, null);
    return () => {
      const obj = stateFromStores(bans[14]);
      obj.setSearchQuery("");
    };
  }, items3);
  const items4 = [bans, setting, stateFromStores, users];
  const callback = setting.useCallback((arg0, arg1) => {
    let Avatar;
    let id;
    let obj3;
    let username;
    let username1;
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
      const tmp4 = closure_1_10;
      const tmp5 = guildId;
      let obj2 = {
        start: 0 === arg1,
        end: arg1 === arr.length - 1,
        icon: tmp4(Avatar, obj3),
        label: username,
        subLabel: username1,
        trailing: tmp4(tmp5(bans[17]).TableRowArrow, {}),
        onPress() {
            let intl;
            let intl2;
            let intl4;
            let obj4;
            if (null != stateFromStores) {
              let obj2 = {
                label: intl4.string(intl5.t.Mp6Z2l),
                isDestructive: true,
                onPress() {
                    const obj = stateFromStores(bans[13]);
                    obj.unbanUser(stateFromStores.id, user.id);
                  }
              };
              intl4 = intl5.intl;
              const items = [obj2];
              const tmp10 = setting;
              if (tmp10) {
                let obj = {
                  label: intl.string(intl5.t["/AXYnE"]),
                  onPress() {
                        const obj = guildId(bans[19]);
                        obj.copy(user.id);
                        const obj2 = guildId(bans[20]);
                        obj2.presentIdCopied();
                      }
                };
                const push = items.push;
                intl = tmp8(1127).intl;
                push(obj);
              }
              const obj3 = { title: intl2.formatToPlainString(intl5.t.XvAG5t, obj4), subtitle: null };
              const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
              showSimpleActionSheet2;
              intl2 = tmp8(1127).intl;
              obj4 = { user: user.username };
              const string = tmp8(1127).intl.string;
              if (null != stateFromStores.reason) {
                let reason;
                if ("" !== stateFromStores.reason) {
                  reason = tmp5.reason;
                }
                const _HermesInternal = HermesInternal;
                const obj5 = { key: "GuildSettingsUnban", header: obj3, options: items, hasIcons: false };
                obj3.subtitle = "" + tmp4 + ": " + reason;
                const result = showSimpleActionSheet(obj5);
              }
              const intl3 = tmp8(1127).intl;
              reason = intl3.string(tmp8(1127).t["t+2Zci"]);
            }
          }
      };
      const TableRow = guildId(bans[15]).TableRow;
      obj3 = { size: guildId(bans[16]).AvatarSizes.SMALL, user: users[arg1], guildId: id };
      Avatar = guildId(bans[16]).Avatar;
      id = undefined;
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
      tmp4Result = tmp4(TableRow, obj2);
    }
    return tmp4Result;
  }, items4);
  let tmp15 = closure_11;
  let tmp16 = closure_12;
  if (null == bans) {
    tmp15Result = closure_10(tmp2(tmp3[22]).SceneLoadingIndicator, {});
    tmp18 = closure_10;
  } else {
    let str = "";
    if ("" === searchQuery) {
      if (0 === users.length) {
        let obj3 = { Illustration: tmp2(tmp3[23]).BansEmpty, title: intl2.string(tmp2(tmp3[18]).t.ZEiY1D), body: intl3.string(tmp2(tmp3[18]).t.zfCsAw) };
        const EmptyState2 = tmp2(tmp3[16]).EmptyState;
        intl2 = tmp2(tmp3[18]).intl;
        intl3 = tmp2(tmp3[18]).intl;
        tmp15Result = closure_10(EmptyState2, obj3);
        tmp18 = closure_10;
      }
    }
    let obj4 = { style: tmp.containerInner, children: null };
    tmp18 = closure_10;
    let obj5 = { style: tmp.searchField, children: closure_10(tmp2(tmp3[24]).SearchField, obj6) };
    let tmp17 = users;
    obj6 = { size: "md", onChange: tmp14 };
    const items5 = [closure_10(users, obj5), ];
    if ("" !== searchQuery) {
      let tmp18Result;
      if (0 === users.length) {
        const obj7 = { Illustration: tmp2(tmp3[25]).NoResults, body: intl.string(tmp2(tmp3[18]).t.z3cK5j) };
        const EmptyState = tmp2(tmp3[16]).EmptyState;
        intl = tmp2(tmp3[18]).intl;
        tmp18Result = tmp18(EmptyState, obj7);
      }
      items5[1] = tmp18Result;
      obj4.children = items5;
      tmp15Result = tmp15(tmp17, obj4);
    }
    const obj8 = { sections, itemSize: tmp7, estimatedListSize: "windowSize", renderItem: callback, insetEnd: num };
    tmp18Result = tmp18(tmp6(tmp3[26]), obj8);
  }
  const obj9 = { children: items6 };
  items6 = [tmp15Result, tmp18(tmp2(tmp3[27]).NavScrim, {})];
  return tmp15(tmp16, obj9);
};
