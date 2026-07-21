// Module ID: 14708
// Function ID: 110944
// Name: Wrapper
// Dependencies: []
// Exports: default

// Module 14708 (Wrapper)
function Wrapper(folder) {
  folder = folder.folder;
  const arg1 = folder;
  const tmp = callback2();
  const importDefault = tmp;
  const memo = React.useMemo(() => ({ isMuted: false }), []);
  const dependencyMap = memo;
  let obj = arg1(dependencyMap[10]);
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
  const React = stateFromStoresArray;
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    const first = stateFromStoresArray[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  let obj2 = arg1(dependencyMap[10]);
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
  const View = stateFromStoresArray1;
  let obj3 = arg1(dependencyMap[10]);
  const items3 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    const first = stateFromStoresArray1[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items4 = [closure_9, closure_6, closure_8];
  const stateFromStoresArray2 = arg1(dependencyMap[10]).useStateFromStoresArray(items4, () => {
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
  closure_5 = stateFromStoresArray2;
  const obj5 = arg1(dependencyMap[10]);
  const items5 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[10]).useStateFromStores(items5, () => {
    const first = stateFromStoresArray2[0];
    let tmp2;
    if (null != first) {
      const guild = formatResult3.getGuild(first);
      let name;
      if (null != guild) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items6 = [folder.folderName, memo, , ];
  ({ title: arr10[2], titleText: arr10[3] } = tmp);
  const memo1 = React.useMemo(() => {
    if (memo.isMuted) {
      let BellSlashIcon = folder(memo[11]).BellSlashIcon;
    } else {
      BellSlashIcon = closure_10;
    }
    let obj = { style: tmp.title };
    const items = [callback(BellSlashIcon, { size: "xs" }), ];
    obj = { keFvXM: false, address-line1: false, guildId: false, justifyContent: false, style: tmp.titleText };
    let folderName = folder.folderName;
    if (null == folderName) {
      const intl = folder(memo[13]).intl;
      folderName = intl.string(folder(memo[13]).t.JQ/1n3);
    }
    obj.children = folderName;
    items[1] = callback(folder(memo[12]).Text, obj);
    obj.children = items;
    return closure_12(stateFromStoresArray1, obj);
  }, items6);
  const intl = arg1(dependencyMap[13]).intl;
  obj = { num: folder.guildIds.length };
  const formatResult = intl.format(arg1(dependencyMap[13]).t.knOfkb, obj);
  closure_6 = formatResult;
  let closure_7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = arg1(dependencyMap[13]).intl;
      obj = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(arg1(dependencyMap[13]).t.UoFb3H, obj);
      closure_6 = formatResult1;
      let tmp12 = formatResult1;
      let str = "text-muted";
    }
    const items7 = [tmp12, str];
    const memo2 = React.useMemo(() => {
      const obj = { -9223372036854775808: "7", 0: "channel-row", 0: "10", color: closure_7, children: formatResult3 };
      return callback(folder(memo[12]).Text, obj);
    }, items7);
    obj1 = { title: memo1 };
    let tmp27;
    if (!folder.expanded) {
      tmp27 = memo2;
    }
    obj1.subtitle = tmp27;
    return closure_11(arg1(dependencyMap[14]).HomeDrawerSharedItem, obj1);
  }
  if (stateFromStoresArray2.length > 0) {
    if (null != stateFromStores2) {
      const intl3 = arg1(dependencyMap[13]).intl;
      obj2 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
      const formatResult2 = intl3.format(arg1(dependencyMap[13]).t.0CRdJQ, obj2);
      closure_6 = formatResult2;
      closure_7 = "text-voice-connected";
      tmp12 = formatResult2;
      str = "text-voice-connected";
    }
  }
  let tmp10 = stateFromStoresArray1.length > 0;
  if (tmp10) {
    tmp10 = null != stateFromStores1;
  }
  tmp12 = formatResult;
  str = "text-muted";
  if (tmp10) {
    const intl2 = arg1(dependencyMap[13]).intl;
    obj3 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    const formatResult3 = intl2.format(arg1(dependencyMap[13]).t.3Pm7uY, obj3);
    closure_6 = formatResult3;
    tmp12 = formatResult3;
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
let closure_13 = arg1(dependencyMap[9]).createStyles({ title: { <string:3461472865>: "safety_user_sentiment_notice_dismissed_at", <string:1447977218>: "message", <string:1640807382>: null }, titleText: { flexShrink: 1 } });
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  const arg1 = folderId.folderId;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = guildFolderById.getGuildFolderById(folderId);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = arg1(dependencyMap[15]).MobileHomeDrawerExperiment;
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
