// Module ID: 13946
// Function ID: 105965
// Name: MobileQuestPreviewControlBar
// Dependencies: []

// Module 13946 (MobileQuestPreviewControlBar)
class MobileQuestPreviewControlBar {
  constructor(arg0) {
    questId = global.questId;
    arg1 = questId;
    setQuestId = global.setQuestId;
    importDefault = setQuestId;
    refreshQuest = global.refreshQuest;
    dependencyMap = refreshQuest;
    tmp = closure_11();
    tmp2 = closure_4(importAll.useState(false), 2);
    first = tmp2[0];
    closure_3 = tmp2[1];
    obj = arg1(dependencyMap[9]);
    questsWithPreviewAccess = obj.useQuestsWithPreviewAccess();
    closure_4 = questsWithPreviewAccess;
    obj2 = arg1(dependencyMap[10]);
    items = [];
    items[0] = closure_7;
    items1 = [];
    items1[0] = questId;
    stateFromStores = obj2.useStateFromStores(items, () => {
      let fetchQuestPreviewError = null;
      if (null != questId) {
        fetchQuestPreviewError = callback3.getFetchQuestPreviewError(questId);
      }
      return fetchQuestPreviewError;
    }, items1);
    obj3 = arg1(dependencyMap[10]);
    items2 = [];
    items2[0] = closure_7;
    items3 = [];
    items3[0] = questId;
    stateFromStores1 = obj3.useStateFromStores(items2, () => {
      let result = null != questId;
      if (result) {
        result = callback3.isFetchingQuestPreview(questId);
      }
      return result;
    }, items3);
    items4 = [, ];
    items4[0] = questsWithPreviewAccess;
    items4[1] = questId;
    items5 = [];
    items5[0] = setQuestId;
    fn = (arg0) => {
      if (null != setQuestId) {
        setQuestId(arg0);
      }
    };
    memo = importAll.useMemo(() => {
      const mapped = questsWithPreviewAccess.map((config) => {
        const obj = {};
        config = config.config;
        let questName;
        if (null != config) {
          const messages = config.messages;
          if (null != messages) {
            questName = messages.questName;
          }
        }
        if (null == questName) {
          questName = config.id;
        }
        obj.label = "" + questName + " (" + config.id + ")";
        obj.value = config.id;
        return obj;
      });
      if (!tmp) {
        const obj = { label: questId, value: questId };
        mapped.unshift(obj);
      }
      return mapped;
    }, items4);
    // CreateGeneratorClosureLongIndex (0x67)
    callback = importAll.useCallback(fn, items5);
    items6 = [, ];
    items6[0] = questId;
    items6[1] = refreshQuest;
    callback1 = importAll.useCallback(closure_3(fn), items6);
    importAll = callback1;
    // CreateGeneratorClosureLongIndex (0x67)
    items7 = [, ];
    items7[0] = questId;
    items7[1] = refreshQuest;
    callback2 = importAll.useCallback(closure_3(items6), items7);
    View = callback2;
    // CreateGeneratorClosureLongIndex (0x67)
    items8 = [, ];
    items8[0] = questId;
    items8[1] = refreshQuest;
    callback3 = importAll.useCallback(closure_3(items7), items8);
    closure_7 = callback3;
    items9 = [, , , ];
    items9[0] = questId;
    items9[1] = callback1;
    items9[2] = callback2;
    items9[3] = callback3;
    obj = { style: tmp.container };
    callback4 = importAll.useCallback(() => {
      let obj = questId(refreshQuest[12]);
      obj = {};
      obj = {};
      const intl = questId(refreshQuest[13]).intl;
      obj.label = intl.string(questId(refreshQuest[13]).t.jQEfRT);
      obj.onPress = callback1;
      const items = [obj, , , ];
      const obj1 = {};
      const intl2 = questId(refreshQuest[13]).intl;
      obj1.label = intl2.string(questId(refreshQuest[13]).t.taqkwK);
      obj1.onPress = callback2;
      items[1] = obj1;
      const obj2 = {};
      const intl3 = questId(refreshQuest[13]).intl;
      obj2.label = intl3.string(questId(refreshQuest[13]).t.cKSLr4);
      obj2.onPress = callback3;
      items[2] = obj2;
      const obj3 = {};
      const intl4 = questId(refreshQuest[13]).intl;
      obj3.label = intl4.string(questId(refreshQuest[13]).t.rNGQfD);
      obj3.onPress = function onPress() {
        if (null != callback) {
          callback(closure_2[14]).copy(closure_8.QUEST_PREVIEW_TOOL_2(callback));
          const obj = callback(closure_2[14]);
        }
      };
      items[3] = obj3;
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    }, items9);
    tmp13 = jsxs;
    tmp14 = View;
    items10 = [, , ];
    items10[0] = jsx(importDefault(dependencyMap[15]), {});
    obj1 = { style: tmp.questInputContainer };
    obj2 = { style: tmp.searchField };
    tmp15 = jsxs;
    tmp16 = View;
    tmp17 = jsx;
    tmp18 = View;
    tmp19 = jsx;
    obj3 = { options: memo, value: questId, onChange: callback };
    intl = arg1(dependencyMap[13]).intl;
    obj3.placeholder = intl.string(arg1(dependencyMap[13]).t.Zw8jxn);
    obj3.allowCustomValue = true;
    tmp20 = stateFromStores1;
    if (!stateFromStores1) {
      tmp20 = first;
    }
    obj3.isDisabled = tmp20;
    obj2.children = tmp19(arg1(dependencyMap[16]).MobileSearchableSelect, obj3);
    items11 = [, ];
    items11[0] = tmp17(tmp18, obj2);
    obj4 = { style: tmp.iconsColumn };
    tmp21 = jsxs;
    tmp22 = View;
    tmp23 = jsx;
    obj5 = {};
    obj5.icon = jsx(arg1(dependencyMap[18]).RefreshIcon, {});
    intl2 = arg1(dependencyMap[13]).intl;
    obj5.accessibilityLabel = intl2.string(arg1(dependencyMap[13]).t.wzzjk9);
    obj5.onPress = refreshQuest;
    tmp24 = stateFromStores1;
    if (!stateFromStores1) {
      tmp25 = null;
      tmp24 = null == questId;
    }
    obj5.disabled = tmp24;
    obj5.loading = stateFromStores1;
    obj5.size = "sm";
    obj5.variant = "secondary";
    items12 = [, ];
    items12[0] = tmp23(arg1(dependencyMap[17]).IconButton, obj5);
    tmp27Result = null != questId;
    if (tmp27Result) {
      tmp28 = arg1;
      tmp29 = dependencyMap;
      tmp27 = jsx;
      obj6 = {};
      tmp30 = jsx;
      num = 19;
      obj6.icon = jsx(arg1(dependencyMap[19]).MoreVerticalIcon, {});
      intl3 = arg1(dependencyMap[13]).intl;
      obj6.accessibilityLabel = intl3.string(arg1(dependencyMap[13]).t.+1H47t);
      if (!stateFromStores1) {
        stateFromStores1 = first;
      }
      obj6.disabled = stateFromStores1;
      obj6.onPress = callback4;
      tmp27Result = tmp27(arg1(dependencyMap[17]).IconButton, obj6);
    }
    items12[1] = tmp27Result;
    obj4.children = items12;
    items11[1] = tmp21(tmp22, obj4);
    obj1.children = items11;
    items10[1] = tmp15(tmp16, obj1);
    tmp31 = null != stateFromStores;
    if (tmp31) {
      tmp32 = jsx;
      tmp33 = arg1;
      tmp34 = dependencyMap;
      num2 = 20;
      obj7 = {};
      obj7.style = tmp.errorText;
      obj7.children = stateFromStores.message;
      tmp31 = jsx(arg1(dependencyMap[20]).Text, obj7);
    }
    items10[2] = tmp31;
    obj.children = items10;
    return tmp13(tmp14, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const AppRoutes = arg1(dependencyMap[5]).AppRoutes;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { container: { <string:1674339712>: null, <string:1424677040>: null } };
obj = { gap: importDefault(dependencyMap[8]).space.PX_8 };
obj.questInputContainer = obj;
obj.searchField = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
const tmp2 = arg1(dependencyMap[6]);
obj.iconsColumn = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_8, paddingTop: importDefault(dependencyMap[8]).space.PX_4 };
const obj1 = { flexDirection: "row", gap: importDefault(dependencyMap[8]).space.PX_8, paddingTop: importDefault(dependencyMap[8]).space.PX_4 };
obj.errorText = { marginTop: importDefault(dependencyMap[8]).space.PX_4, zIndex: 1 };
let closure_11 = obj.createStyles(obj);
const obj2 = { marginTop: importDefault(dependencyMap[8]).space.PX_4, zIndex: 1 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewControlBar.tsx");

export default MobileQuestPreviewControlBar;
export { MobileQuestPreviewControlBar };
