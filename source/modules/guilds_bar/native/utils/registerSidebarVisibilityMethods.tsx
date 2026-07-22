// Module ID: 14774
// Function ID: 111355
// Name: registerGuildVisibilityMethod
// Dependencies: []
// Exports: registerFastListChannelVisibilityMethod, registerGuildVisibilityMethod

// Module 14774 (registerGuildVisibilityMethod)
const _module = require(dependencyMap[0]);
({ setGetVisibleChannelIds: closure_0, setGetVisibleGuildIds: closure_1 } = _module);
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = importDefault(dependencyMap[2]);
const GuildsNodeType = require(dependencyMap[2]).GuildsNodeType;
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx");

export const registerGuildVisibilityMethod = function registerGuildVisibilityMethod(fastListRef) {
  const current = fastListRef.current;
  if (null != current) {
    callback(() => {
      if (null == store) {
        return [];
      } else {
        const items = store.getItems();
        const store = store.getScrollPosition();
        const containerSize = store.containerSize;
        const guilds = guilds.getGuilds();
        const guildsTree = guildsTree.getGuildsTree();
        const _Set = Set;
        const set = new Set();
        const item = items.forEach((recyclerKey) => {
          const node = node.getNode(recyclerKey.recyclerKey);
          if (undefined !== node) {
            const layoutStart = recyclerKey.layoutStart;
            let tmp3 = layoutStart + recyclerKey.layoutSize >= closure_0;
            if (tmp3) {
              tmp3 = layoutStart <= closure_0 + containerSize;
            }
            if (tmp3) {
              function addGuildsInNode(node) {
                if (node.type === constants.FOLDER) {
                  let children = node.children;
                } else {
                  children = [node];
                }
                const item = children.forEach((type) => {
                  let tmp = type.type === set.GUILD;
                  if (tmp) {
                    tmp = type.id in closure_2;
                  }
                  if (tmp) {
                    set.add(type.id);
                  }
                });
              }(node);
            }
          }
        });
        const _Array = Array;
        return Array.from(set);
      }
    });
  }
};
export const registerFastListChannelVisibilityMethod = function registerFastListChannelVisibilityMethod(ref, guildChannels) {
  const current = ref.current;
  if (null != current) {
    guildChannels(() => {
      if (null == current) {
        return [];
      } else {
        const items = current.getItems();
        const scrollPosition = current.getScrollPosition();
        const current = current.containerSize;
        const items1 = [];
        const item = items.forEach((section) => {
          const channelFromSectionRow = channelFromSectionRow.getChannelFromSectionRow(section.section, section.item);
          let channel;
          if (null != channelFromSectionRow) {
            channel = channelFromSectionRow.channel;
          }
          while (true) {
            let tmp4 = channel;
            let tmp5 = null;
            if (null != tmp3) {
              let layoutStart = section.layoutStart;
              let tmp7 = channelFromSectionRow;
              let tmp8 = layoutStart + section.layoutSize >= channelFromSectionRow;
              let tmp9 = tmp8;
              if (tmp8) {
                let tmp10 = layoutStart;
                let tmp11 = channelFromSectionRow;
                let tmp12 = containerSize;
                tmp9 = tmp6 <= channelFromSectionRow + containerSize;
              }
              if (tmp9) {
                let tmp13 = items1;
                let tmp14 = channel;
                let arr = items1.push(tmp3.id);
              }
            }
          }
        });
        return items1;
      }
    });
  }
};
