// Module ID: 14937
// Function ID: 113844
// Name: registerGuildVisibilityMethod
// Dependencies: [9481, 1838, 4970, 2]
// Exports: registerFastListChannelVisibilityMethod, registerGuildVisibilityMethod

// Module 14937 (registerGuildVisibilityMethod)
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildsNodeType } from "_isNativeReflectConstruct";

let closure_0;
let closure_1;
({ setGetVisibleChannelIds: closure_0, setGetVisibleGuildIds: closure_1 } = SidebarVisibilityMethodStore);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx");

export const registerGuildVisibilityMethod = function registerGuildVisibilityMethod(fastListRef) {
  const current = fastListRef.current;
  if (null != current) {
    callback2(() => {
      if (null == store) {
        return [];
      } else {
        const items = store.getItems();
        store = store.getScrollPosition();
        const containerSize = store.containerSize;
        const guilds = outer1_2.getGuilds();
        const guildsTree = outer1_3.getGuildsTree();
        const _Set = Set;
        const set = new Set();
        let item = items.forEach((recyclerKey) => {
          node = node.getNode(recyclerKey.recyclerKey);
          if (undefined !== node) {
            const layoutStart = recyclerKey.layoutStart;
            let tmp3 = layoutStart + recyclerKey.layoutSize >= closure_0;
            if (tmp3) {
              tmp3 = layoutStart <= closure_0 + containerSize;
            }
            if (tmp3) {
              (function addGuildsInNode(node) {
                if (node.type === outer3_4.FOLDER) {
                  let children = node.children;
                } else {
                  children = [node];
                }
                const item = children.forEach((type) => {
                  let tmp = type.type === outer4_4.GUILD;
                  if (tmp) {
                    tmp = type.id in outer2_2;
                  }
                  if (tmp) {
                    outer2_4.add(type.id);
                  }
                });
              })(node);
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
  const callback = guildChannels;
  const current = ref.current;
  if (null != current) {
    callback(() => {
      if (null == containerSize) {
        return [];
      } else {
        const items = containerSize.getItems();
        const scrollPosition = containerSize.getScrollPosition();
        containerSize = containerSize.containerSize;
        const items1 = [];
        const item = items.forEach((section) => {
          channelFromSectionRow = channelFromSectionRow.getChannelFromSectionRow(section.section, section.item);
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
