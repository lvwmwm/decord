// Module ID: 14571
// Function ID: 109788
// Name: SearchableSelectActionComponent
// Dependencies: []
// Exports: default

// Module 14571 (SearchableSelectActionComponent)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx");

export default function SearchableSelectActionComponent(defaultValues) {
  let executeStateUpdate;
  let visualState;
  const arg1 = defaultValues;
  let obj = arg1(dependencyMap[3]);
  const selectPlaceholder = obj.getSelectPlaceholder(defaultValues);
  let obj1 = arg1(dependencyMap[4]);
  const componentStateContext = obj1.useComponentStateContext();
  let modal;
  if (null != componentStateContext) {
    modal = componentStateContext.modal;
  }
  importDefault(dependencyMap[5])(null != modal, "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let channelId;
  const tmp2 = importDefault(dependencyMap[5]);
  if (null != componentStateContext) {
    channelId = componentStateContext.channelId;
  }
  importDefault(dependencyMap[5])(null != channelId, "SearchableSelectActionComponent must be used inside a channel");
  const channel = channel.getChannel(componentStateContext.channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp10 = null;
  if (null != guild_id) {
    tmp10 = guild_id;
  }
  const importDefault = tmp10;
  const items = [defaultValues.defaultValues, tmp10];
  let memo = React.useMemo(() => {
    let snowflakeSelectDefaultValues = arg0(customId[6]).getSnowflakeSelectDefaultValues(arg0.defaultValues, tmp10);
    if (null == snowflakeSelectDefaultValues) {
      snowflakeSelectDefaultValues = [];
    }
    return snowflakeSelectDefaultValues;
  }, items);
  let tmp11;
  if (memo.length > 0) {
    obj = { type: defaultValues.type, selectedOptions: memo };
    tmp11 = obj;
  }
  const componentState = componentStateContext.useComponentState(defaultValues, tmp11);
  const state = componentState.state;
  const customId = componentStateContext.modal.customId;
  const dependencyMap = customId;
  let type;
  ({ visualState, executeStateUpdate } = componentState);
  if (null != state) {
    type = state.type;
  }
  if (type !== arg1(dependencyMap[7]).ComponentType.USER_SELECT) {
    let type1;
    if (null != state) {
      type1 = state.type;
    }
    if (type1 !== arg1(dependencyMap[7]).ComponentType.ROLE_SELECT) {
      let type2;
      if (null != state) {
        type2 = state.type;
      }
      if (type2 !== arg1(dependencyMap[7]).ComponentType.MENTIONABLE_SELECT) {
        let type3;
        if (null != state) {
          type3 = state.type;
        }
      }
      const parents = componentStateContext.getParents(defaultValues);
      let first;
      if (null != parents) {
        first = parents[0];
      }
      let type4;
      if (null != first) {
        type4 = first.type;
      }
      let tmp28;
      if (type4 === arg1(dependencyMap[7]).ComponentType.LABEL) {
        tmp28 = first;
      }
      obj = { channelId: componentStateContext.channelId, guildId: tmp10, containerId: customId, onSubmit: executeStateUpdate, labelComponent: tmp28, allowEmpty: arg1(dependencyMap[3]).canSelectBeEmpty(defaultValues, "modal") };
      const React = obj;
      obj1 = {};
      const obj2 = {};
      const obj6 = arg1(dependencyMap[3]);
      const merged = Object.assign(defaultValues);
      obj2["placeholder"] = selectPlaceholder;
      obj2["state"] = visualState;
      const tmp33 = importDefault(dependencyMap[8]);
      obj2["selectedOptions"] = arg1(dependencyMap[9]).transformSearchableSelectOptions(memo, tmp10);
      obj1.model = obj2;
      obj1.onTap = function onTap() {
        if (arg0.type === arg0(customId[7]).ComponentType.CHANNEL_SELECT) {
          const _HermesInternal2 = HermesInternal;
          const obj3 = tmp10(customId[10]);
          let obj = { selectionActionComponent: arg0 };
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj);
          obj3.openLazy(arg0(customId[12])(customId[11], customId.paths), combined, obj);
          const tmp16 = arg0(customId[12])(customId[11], customId.paths);
        } else {
          obj = tmp10(customId[10]);
          const _HermesInternal = HermesInternal;
          obj = { selectionActionComponent: arg0 };
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj);
          obj.openLazy(arg0(customId[12])(customId[13], customId.paths), combined1, obj);
          const tmp4 = arg0(customId[12])(customId[13], customId.paths);
        }
      };
      return <tmp33 {...obj1} />;
    }
  }
  memo = state.selectedOptions;
};
