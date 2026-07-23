// Module ID: 14834
// Function ID: 113185
// Name: Wrapper
// Dependencies: [31, 27, 6879, 1838, 4970, 4325, 4146, 653, 33, 4130, 566, 10202, 4126, 1212, 14835, 3987, 3984, 2]
// Exports: default

// Module 14834 (Wrapper)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
const require = arg1;
function Wrapper(folder) {
  folder = folder.folder;
  let tmp = callback2();
  const importDefault = tmp;
  const memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  let obj = folder(memo[10]);
  let items = [stateFromStoresArray2, closure_8];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((id) => {
      let tmp = !outer2_8.isMuted(id);
      if (tmp) {
        tmp = stateFromStoresArray2.getMentionCount(id) > 0;
      }
      return tmp;
    });
  });
  let obj1 = folder(memo[10]);
  const items1 = [formatResult3];
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
  let obj2 = folder(memo[10]);
  const items2 = [stateFromStoresArray2, closure_8];
  const stateFromStoresArray1 = obj2.useStateFromStoresArray(items2, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((id) => {
      let hasUnreadResult = !outer2_8.isMuted(id);
      if (hasUnreadResult) {
        hasUnreadResult = stateFromStoresArray2.hasUnread(id);
      }
      return hasUnreadResult;
    });
  });
  let obj3 = folder(memo[10]);
  const items3 = [formatResult3];
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
  const items4 = [closure_9, formatResult3, closure_8];
  stateFromStoresArray2 = folder(memo[10]).useStateFromStoresArray(items4, () => {
    const guildIds = folder.guildIds;
    return guildIds.filter((guildId) => {
      let closure_0 = guildId;
      if (outer2_8.isMuted(guildId)) {
        return false;
      } else {
        const guild = formatResult3.getGuild(guildId);
        if (null != guild) {
          const afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const set = new Set();
        const _Object = Object;
        const values = Object.values(outer2_9.getVoiceStates(guildId));
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
          let tmp = !outer3_8.isCategoryMuted(closure_0, arg0);
          if (tmp) {
            tmp = !outer3_8.isChannelMuted(closure_0, arg0);
          }
          return tmp;
        });
      }
    });
  });
  const obj5 = folder(memo[10]);
  const items5 = [formatResult3];
  const stateFromStores2 = folder(memo[10]).useStateFromStores(items5, () => {
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
  const memo1 = stateFromStoresArray.useMemo(() => {
    if (memo.isMuted) {
      let BellSlashIcon = folder(memo[11]).BellSlashIcon;
    } else {
      BellSlashIcon = outer1_10;
    }
    let obj = { style: tmp.title };
    const items = [outer1_11(BellSlashIcon, { size: "xs" }), ];
    obj = { variant: "text-md/medium", style: tmp.titleText, lineClamp: 1, color: "text-default" };
    let folderName = folder.folderName;
    if (null == folderName) {
      const intl = folder(memo[13]).intl;
      folderName = intl.string(folder(memo[13]).t["JQ/1n3"]);
    }
    obj.children = folderName;
    items[1] = outer1_11(folder(memo[12]).Text, obj);
    obj.children = items;
    return outer1_12(stateFromStoresArray1, obj);
  }, items6);
  let intl = folder(memo[13]).intl;
  obj = { num: folder.guildIds.length };
  const formatResult = intl.format(folder(memo[13]).t.knOfkb, obj);
  formatResult3 = formatResult;
  let c7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    if (null != stateFromStores) {
      const intl4 = folder(memo[13]).intl;
      obj = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(folder(memo[13]).t.UoFb3H, obj);
      formatResult3 = formatResult1;
      let tmp12 = formatResult1;
      let str = "text-muted";
    }
    const items7 = [tmp12, str];
    const memo2 = stateFromStoresArray.useMemo(() => {
      const obj = { variant: "text-xs/medium", color: c7, lineClamp: 1, children: formatResult3 };
      return outer1_11(folder(memo[12]).Text, obj);
    }, items7);
    obj1 = { title: memo1 };
    let tmp27;
    if (!folder.expanded) {
      tmp27 = memo2;
    }
    obj1.subtitle = tmp27;
    return closure_11(folder(memo[14]).HomeDrawerSharedItem, obj1);
  }
  if (stateFromStoresArray2.length > 0) {
    if (null != stateFromStores2) {
      const intl3 = folder(memo[13]).intl;
      obj2 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
      const formatResult2 = intl3.format(folder(memo[13]).t["0CRdJQ"], obj2);
      formatResult3 = formatResult2;
      c7 = "text-voice-connected";
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
    const intl2 = folder(memo[13]).intl;
    obj3 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    formatResult3 = intl2.format(folder(memo[13]).t["3Pm7uY"], obj3);
    tmp12 = formatResult3;
    str = "text-muted";
  }
}
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  folderId = folderId.folderId;
  let obj = folderId(566);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = outer1_7.getGuildFolderById(folderId);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(3987).MobileHomeDrawerExperiment;
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
