// Module ID: 15941
// Function ID: 15942
// Name: HomeDrawerFolderRow
// Dependencies: [19, 17, 7050, 2067, 5750, 5017, 4855, 1074, 21, 4836, 504, 9613, 4832, 1115, 15942, 4698, 4695, 2]
// Exports: default

// Module 15941 (HomeDrawerFolderRow)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import BellSlashIcon2 from "BellSlashIcon" /* 9613 */;
import react from "react" /* 19 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7050 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let closure_12;
let unpackModuleId;
function Wrapper(folder) {
  let color;
  let str;
  let tmp14;
  let tmp20;
  folder = folder.folder;
  let stateFromStoresArray;
  let stateFromStoresArray2;
  let formatResult3;
  const expanded = folder.expanded;
  const tmp = closure_13();
  let closure_1 = tmp;
  let obj = stateFromStoresArray;
  const memo = stateFromStoresArray.useMemo(() => ({ isMuted: false }), []);
  let tmp3 = folder;
  let tmp4 = memo;
  let obj2 = folder(memo[10]);
  let items = [stateFromStoresArray2, UserGuildSettingsStore];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    let mentionCount;
    let muted;
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      let tmp2 = !muted.isMuted(item);
      muted.isMuted(item);
      if (tmp2) {
        tmp2 = mentionCount.getMentionCount(item) > 0;
      }
      return tmp2;
    });
  });
  const items1 = [formatResult3];
  const obj3 = folder(memo[10]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const first = stateFromStoresArray[0];
    let tmp2;
    if (null != first) {
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items2 = [stateFromStoresArray2, UserGuildSettingsStore];
  const obj4 = folder(memo[10]);
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items2, () => {
    let muted;
    const guildIds = folder.guildIds;
    return guildIds.filter((item) => {
      let hasUnreadResult = !muted.isMuted(item);
      muted.isMuted(item);
      if (hasUnreadResult) {
        hasUnreadResult = stateFromStoresArray2.hasUnread(item);
      }
      return hasUnreadResult;
    });
  });
  const items3 = [formatResult3];
  const obj5 = folder(memo[10]);
  const stateFromStores1 = obj5.useStateFromStores(items3, () => {
    const first = stateFromStoresArray1[0];
    let tmp2;
    if (null != first) {
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items4 = [VoiceStateStore, formatResult3, UserGuildSettingsStore];
  const obj6 = folder(memo[10]);
  stateFromStoresArray2 = obj6.useStateFromStoresArray(items4, () => {
    let voiceStates;
    const guildIds = folder.guildIds;
    return guildIds.filter(function(item) {
      let closure_0 = item;
      if (closure_8.isMuted(item)) {
        return false;
      } else {
        let afkChannelId;
        guild = guild.getGuild(item);
        let tmp3 = null;
        if (guild != null) {
          afkChannelId = guild.afkChannelId;
        }
        const _Set = Set;
        const self2 = this;
        const self = this;
        set = new Set();
        const _Object = Object;
        const values = Object.values(voiceStates.getVoiceStates(item));
        const tmp5 = set;
        for (const item10027 of values) {
          let tmp10 = item10027;
          let tmp11 = null != item10027.channelId;
          if (tmp11) {
            tmp11 = tmp10.channelId !== afkChannelId;
          }
          if (tmp11) {
            let addResult = set.add(tmp10.channelId);
          }
          continue;
        }
        const items = [];
        HermesBuiltin.arraySpread(items, tmp5, 0);
        return items.some((item) => {
          const isCategoryMutedResult = closure_2_8.isCategoryMuted(item, item);
          const tmp3 = !isCategoryMutedResult && !closure_2_8.isChannelMuted(item, item);
          return tmp3;
        });
      }
    });
  });
  const items5 = [formatResult3];
  const obj7 = folder(memo[10]);
  const stateFromStores2 = obj7.useStateFromStores(items5, () => {
    const first = stateFromStoresArray2[0];
    let tmp2;
    if (null != first) {
      const guild = GuildStore.getGuild(first);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  const items6 = [folder.folderName, memo, , ];
  ({ title: arr10[2], titleText: arr10[3] } = tmp);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let BellSlashIcon;
    let folderName;
    let items;
    if (memo.isMuted) {
      BellSlashIcon = BellSlashIcon2.BellSlashIcon;
    } else {
      BellSlashIcon = NOOP;
    }
    const obj = { style: closure_1.title, children: items };
    items = [unpackModuleId(BellSlashIcon, { size: "xs" }), ];
    const obj2 = { variant: "text-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: folderName };
    folderName = folder.folderName;
    const Text = Text_Text.Text;
    const tmp3 = closure_12;
    const tmp4 = View;
    const tmp5 = unpackModuleId;
    if (folderName == null) {
      const intl = intl5.intl;
      folderName = intl.string(intl5.t["JQ/1n3"]);
    }
    items[1] = tmp5(Text, obj2);
    return tmp3(tmp4, obj);
  }, items6);
  let intl = folder(memo[13]).intl;
  const obj8 = { num: folder.guildIds.length };
  const formatResult = intl.format(folder(memo[13]).t.knOfkb, obj8);
  formatResult3 = formatResult;
  let c7 = "text-muted";
  if (stateFromStoresArray.length > 0) {
    let tmp10 = null;
    if (null != stateFromStores) {
      const intl4 = tmp3(tmp4[13]).intl;
      const obj9 = { guildName: stateFromStores, count: stateFromStoresArray.length - 1 };
      const formatResult1 = intl4.format(tmp3(tmp4[13]).t.UoFb3H, obj9);
      formatResult3 = formatResult1;
      str = "text-muted";
      tmp14 = formatResult1;
    }
    const items7 = [tmp14, str];
    const memo2 = obj.useMemo(() => {
      const obj = { variant: "text-xs/medium", color, lineClamp: 1, children: formatResult3 };
      return unpackModuleId(Text_Text.Text, obj);
    }, items7);
    const obj10 = { title: memo1, subtitle: tmp20 };
    tmp20 = undefined;
    const HomeDrawerSharedItem = tmp3(tmp4[14]).HomeDrawerSharedItem;
    const tmp19 = closure_11;
    if (!expanded) {
      tmp20 = memo2;
    }
    return tmp19(HomeDrawerSharedItem, obj10);
  }
  if (stateFromStoresArray2.length > 0) {
    let tmp11 = null;
    if (null != stateFromStores2) {
      const intl3 = tmp3(tmp4[13]).intl;
      const obj11 = { guildName: stateFromStores2, count: stateFromStoresArray2.length - 1 };
      const formatResult2 = intl3.format(tmp3(tmp4[13]).t["0CRdJQ"], obj11);
      formatResult3 = formatResult2;
      c7 = "text-voice-connected";
      str = "text-voice-connected";
      tmp14 = formatResult2;
    }
  }
  let tmp12 = stateFromStoresArray1.length > 0;
  if (tmp12) {
    let tmp13 = null;
    tmp12 = null != stateFromStores1;
  }
  str = "text-muted";
  tmp14 = formatResult;
  if (tmp12) {
    const intl2 = tmp3(tmp4[13]).intl;
    const obj12 = { guildName: stateFromStores1, count: stateFromStoresArray1.length - 1 };
    formatResult3 = intl2.format(tmp3(tmp4[13]).t["3Pm7uY"], obj12);
    str = "text-muted";
    tmp14 = formatResult3;
  }
}
const View = react_native.View;
const NOOP = Constants.NOOP;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFolderRow.tsx");

export default function HomeDrawerFolderExpandedChildren(folderId) {
  folderId = folderId.folderId;
  const expanded = folderId.expanded;
  const items = [SortedGuildStore];
  const obj = folderId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guildFolderById = null;
    if (null != folderId) {
      guildFolderById = SortedGuildStore.getGuildFolderById(tmp);
    }
    return guildFolderById;
  });
  const MobileHomeDrawerExperiment = folderId(4698).MobileHomeDrawerExperiment;
  const enableHome = MobileHomeDrawerExperiment.useConfig({ location: "folder-expanded-children" }).enableHome;
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (enableHome) {
      tmp3 = null;
      if (!tmp2) {
        const obj2 = { folder: stateFromStores, expanded };
        tmp3 = closure_11(Wrapper, obj2);
      }
    }
  }
  return tmp3;
};
