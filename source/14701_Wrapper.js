// Module ID: 14701
// Function ID: 110920
// Name: Wrapper
// Dependencies: []
// Exports: default

// Module 14701 (Wrapper)
function Wrapper(folder) {
  folder = folder.folder;
  const arg1 = folder;
  const memo = React.useMemo(() => ({ isMuted: false }), []);
  const importDefault = memo;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5, closure_8];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((id) => {
      let tmp = !muted.isMuted(id);
      if (tmp) {
        tmp = mentionCount.getMentionCount(id) > 0;
      }
      return tmp;
    });
  });
  const dependencyMap = stateFromStoresArray;
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    const first = stateFromStoresArray[0];
    let tmp2;
    if (null != first) {
      const guild = store.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  let obj2 = arg1(dependencyMap[9]);
  const items2 = [closure_5, closure_8];
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((id) => {
      let hasUnreadResult = !muted.isMuted(id);
      if (hasUnreadResult) {
        hasUnreadResult = closure_5.hasUnread(id);
      }
      return hasUnreadResult;
    });
  });
  const React = stateFromStoresArray1;
  let obj3 = arg1(dependencyMap[9]);
  const items3 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    const first = stateFromStoresArray1[0];
    let tmp2;
    if (null != first) {
      const guild = store.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items4 = [closure_9, closure_6, closure_8];
  const stateFromStoresArray2 = arg1(dependencyMap[9]).useStateFromStoresArray(items4, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((guildId) => {
      if (muted.isMuted(guildId)) {
        return false;
      } else {
        const guild = guild.getGuild(guildId);
        if (null != guild) {
          const afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const set = new Set();
        const _Object = Object;
        const values = Object.values(voiceStates.getVoiceStates(guildId));
        for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
          let tmp9 = values[num2];
          let tmp10 = null != tmp9.channelId && tmp9.channelId !== afkChannelId;
          if (tmp10) {
            let addResult = set.add(tmp9.channelId);
          }
        }
        const items = [];
        HermesBuiltin.arraySpread(set, 0);
        return items.some((arg0) => {
          let tmp = !closure_8.isCategoryMuted(arg0, arg0);
          if (tmp) {
            tmp = !closure_8.isChannelMuted(arg0, arg0);
          }
          return tmp;
        });
      }
    });
  });
  const View = stateFromStoresArray2;
  const obj5 = arg1(dependencyMap[9]);
  const items5 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[9]).useStateFromStores(items5, () => {
    const first = stateFromStoresArray2[0];
    let tmp2;
    if (null != first) {
      const guild = store.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items6 = [folder.folderName, memo];
  const memo1 = React.useMemo(() => {
    if (memo.isMuted) {
      let BellSlashIcon = folder(stateFromStoresArray[10]).BellSlashIcon;
    } else {
      BellSlashIcon = closure_10;
    }
    let obj = { style: {} };
    const items = [callback(BellSlashIcon, { size: "xs" }), ];
    obj = {};
    let folderName = folder.folderName;
    if (null == folderName) {
      const intl = folder(stateFromStoresArray[12]).intl;
      folderName = intl.string(folder(stateFromStoresArray[12]).t.JQ/1n3);
    }
    obj.children = folderName;
    items[1] = callback(folder(stateFromStoresArray[11]).Text, obj);
    obj.children = items;
    return closure_12(stateFromStoresArray2, obj);
  }, items6);
  const intl = arg1(dependencyMap[12]).intl;
  obj = { num: folder.guildIds.length };
  const formatResult = intl.format(arg1(dependencyMap[12]).t.knOfkb, obj);
  closure_5 = formatResult;
  closure_6 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = arg1(dependencyMap[12]).intl;
      obj = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(arg1(dependencyMap[12]).t.UoFb3H, obj);
      closure_5 = formatResult1;
      let tmp11 = formatResult1;
      let str = "text-muted";
    }
    const items7 = [tmp11, str];
    const memo2 = React.useMemo(() => {
      const obj = { 9223372036854775807: "10", 9223372036854775807: "channel-row", 9223372036854775807: "11", color: closure_6, children: formatResult3 };
      return callback(folder(stateFromStoresArray[11]).Text, obj);
    }, items7);
    obj1 = { title: memo1 };
    let tmp26;
    if (!folder.expanded) {
      tmp26 = memo2;
    }
    obj1.subtitle = tmp26;
    return closure_11(arg1(dependencyMap[13]).HomeDrawerSharedItem, obj1);
  }
  if (stateFromStoresArray2.length > 0) {
    if (null != stateFromStores2) {
      const intl3 = arg1(dependencyMap[12]).intl;
      obj2 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
      const formatResult2 = intl3.format(arg1(dependencyMap[12]).t.0CRdJQ, obj2);
      closure_5 = formatResult2;
      closure_6 = "text-voice-connected";
      tmp11 = formatResult2;
      str = "text-voice-connected";
    }
  }
  let tmp9 = stateFromStoresArray1.length > 0;
  if (tmp9) {
    tmp9 = null != stateFromStores1;
  }
  tmp11 = formatResult;
  str = "text-muted";
  if (tmp9) {
    const intl2 = arg1(dependencyMap[12]).intl;
    obj3 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    const formatResult3 = intl2.format(arg1(dependencyMap[12]).t.3Pm7uY, obj3);
    closure_5 = formatResult3;
    tmp11 = formatResult3;
    str = "text-muted";
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const NOOP = arg1(dependencyMap[7]).NOOP;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  const arg1 = folderId.folderId;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = guildFolderById.getGuildFolderById(folderId);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = arg1(dependencyMap[14]).MobileHomeDrawerExperiment;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome) {
      tmp3 = null;
      if (!tmp2) {
        obj = { folder: stateFromStores, expanded: folderId.expanded };
        tmp3 = callback(Wrapper, obj);
      }
    }
  }
  return tmp3;
};
