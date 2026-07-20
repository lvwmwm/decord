// Module ID: 11780
// Function ID: 91473
// Name: ForumDisplaySettingsActionSheet
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11780 (ForumDisplaySettingsActionSheet)
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import result from "result";

({ useForumChannelStoreApi: closure_6, useForumChannelStore: closure_7 } = result);
({ jsx: closure_8, jsxs: closure_9 } = result);
result = result.fileFinishedImporting("modules/forums/native/ForumDisplaySettingsActionSheet.tsx");

export default function ForumDisplaySettingsActionSheet(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const importDefault = stateFromStores;
  const tmp = callback3(channelId);
  const sortOrder = tmp.sortOrder;
  const dependencyMap = sortOrder;
  const layoutType = tmp.layoutType;
  const callback = layoutType;
  const tagSetting = tmp.tagSetting;
  const React = callback2();
  const tmp2 = callback(React.useState(sortOrder), 2);
  closure_5 = tmp2[0];
  const callback2 = tmp2[1];
  [closure_7, closure_8] = callback(React.useState(layoutType), 2);
  const tmp3 = callback(React.useState(layoutType), 2);
  [closure_9, closure_10] = callback(React.useState(tagSetting), 2);
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  let obj2 = arg1(dependencyMap[10]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (null != stateFromStores) {
      if (sortOrder !== closure_5) {
        let obj = channelId(sortOrder[11]);
        obj = {};
        ({ guild_id: obj2.guildId, id: obj2.channelId } = stateFromStores);
        obj.sortOrder = closure_5;
        const result = obj.trackForumSortOrderUpdated(obj);
      }
      if (layoutType !== closure_7) {
        obj = {};
        ({ guild_id: obj4.guildId, id: obj4.channelId } = stateFromStores);
        obj.forumLayout = closure_7;
        const result1 = channelId(sortOrder[11]).trackForumLayoutUpdated(obj);
        const obj3 = channelId(sortOrder[11]);
      }
      const state = store.getState();
      state.setLayoutType(channelId, closure_7);
      const state1 = store.getState();
      state1.setSortOrder(channelId, closure_5);
      const state2 = store.getState();
      state2.setTagSetting(channelId, closure_9);
    }
  });
  [][0] = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { scrollable: true };
    obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj.title = intl.string(arg1(dependencyMap[5]).t.xyYt8A);
    const obj1 = { onPress: tmp9 };
    const intl2 = arg1(dependencyMap[5]).intl;
    obj1.label = intl2.string(arg1(dependencyMap[5]).t.yBZMsQ);
    obj.leading = callback4(arg1(dependencyMap[14]).ActionSheetHeaderPressableText, obj1);
    obj.header = callback4(arg1(dependencyMap[13]).BottomSheetTitleHeader, obj);
    obj2 = {};
    const obj3 = { direction: "vertical", spacing: importDefault(dependencyMap[17]).space.PX_16 };
    const obj4 = {
      groupRef: ref,
      hasIcons: false,
      defaultValue: sortOrder,
      onChange(arg0) {
          callback(arg0);
        }
    };
    const intl3 = arg1(dependencyMap[5]).intl;
    obj4.title = intl3.string(arg1(dependencyMap[5]).t.f8wNDl);
    const intl4 = arg1(dependencyMap[5]).intl;
    obj4.accessibilityLabel = intl4.string(arg1(dependencyMap[5]).t.f8wNDl);
    const obj5 = {};
    const intl5 = arg1(dependencyMap[5]).intl;
    obj5.label = intl5.string(arg1(dependencyMap[5]).t.jOPmcI);
    obj5.value = arg1(dependencyMap[6]).ThreadSortOrder.LATEST_ACTIVITY;
    const items1 = [obj5, ];
    const obj6 = {};
    const intl6 = arg1(dependencyMap[5]).intl;
    obj6.label = intl6.string(arg1(dependencyMap[5]).t.UIltXd);
    obj6.value = arg1(dependencyMap[6]).ThreadSortOrder.CREATION_DATE;
    items1[1] = obj6;
    obj4.children = items1.map((label) => {
      const value = label.value;
      return callback2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
    });
    const items2 = [callback4(arg1(dependencyMap[18]).TableRadioGroup, obj4), , ];
    let tmp16 = null;
    if (stateFromStores.isForumChannel()) {
      const obj7 = {
        groupRef: ref1,
        hasIcons: false,
        defaultValue: layoutType,
        onChange(arg0) {
              callback2(arg0);
            }
      };
      const intl7 = arg1(dependencyMap[5]).intl;
      obj7.title = intl7.string(arg1(dependencyMap[5]).t.mFMDSq);
      const intl8 = arg1(dependencyMap[5]).intl;
      obj7.accessibilityLabel = intl8.string(arg1(dependencyMap[5]).t.h850Ss);
      const obj8 = {};
      const intl9 = arg1(dependencyMap[5]).intl;
      obj8.label = intl9.string(arg1(dependencyMap[5]).t.NJFr+g);
      obj8.value = arg1(dependencyMap[7]).ForumLayout.LIST;
      const items3 = [obj8, ];
      const obj9 = {};
      const intl10 = arg1(dependencyMap[5]).intl;
      obj9.label = intl10.string(arg1(dependencyMap[5]).t.wKeggb);
      obj9.value = arg1(dependencyMap[7]).ForumLayout.GRID;
      items3[1] = obj9;
      obj7.children = items3.map((label) => {
        const value = label.value;
        return callback2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp16 = callback4(arg1(dependencyMap[18]).TableRadioGroup, obj7);
    }
    items2[1] = tmp16;
    let tmp20 = null;
    if (tmp10) {
      const obj10 = {
        groupRef: ref2,
        hasIcons: false,
        defaultValue: tagSetting,
        onChange(arg0) {
              callback3(arg0);
            }
      };
      const intl11 = arg1(dependencyMap[5]).intl;
      obj10.title = intl11.string(arg1(dependencyMap[5]).t.Paxaug);
      const intl12 = arg1(dependencyMap[5]).intl;
      obj10.accessibilityLabel = intl12.string(arg1(dependencyMap[5]).t.f8wNDl);
      const obj11 = {};
      const intl13 = arg1(dependencyMap[5]).intl;
      obj11.label = intl13.string(arg1(dependencyMap[5]).t.rQ0ctQ);
      obj11.value = arg1(dependencyMap[8]).ThreadSearchTagSetting.MATCH_SOME;
      const items4 = [obj11, ];
      const obj12 = {};
      const intl14 = arg1(dependencyMap[5]).intl;
      obj12.label = intl14.string(arg1(dependencyMap[5]).t.FCXUu0);
      obj12.value = arg1(dependencyMap[8]).ThreadSearchTagSetting.MATCH_ALL;
      items4[1] = obj12;
      obj10.children = items4.map((label) => {
        const value = label.value;
        return callback2(channelId(sortOrder[19]).TableRadioRow, { label: label.label, value }, value);
      });
      tmp20 = callback4(arg1(dependencyMap[18]).TableRadioGroup, obj10);
    }
    items2[2] = tmp20;
    obj3.children = items2;
    obj2.children = closure_9(arg1(dependencyMap[16]).Stack, obj3);
    obj.children = callback4(arg1(dependencyMap[15]).BottomSheetScrollView, obj2);
    return callback4(arg1(dependencyMap[12]).ActionSheet, obj);
  }
  const tmp4 = callback(React.useState(tagSetting), 2);
};
