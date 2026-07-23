// Module ID: 14686
// Function ID: 111952
// Name: SearchableSelectActionComponent
// Dependencies: [31, 1348, 33, 4353, 7794, 44, 7802, 1881, 14684, 7804, 4098, 10972, 1934, 10968, 2]
// Exports: default

// Module 14686 (SearchableSelectActionComponent)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/actions/SearchableSelectActionComponent.tsx");

export default function SearchableSelectActionComponent(defaultValues) {
  let executeStateUpdate;
  let visualState;
  const _require = defaultValues;
  let obj = _require(customId[3]);
  const selectPlaceholder = obj.getSelectPlaceholder(defaultValues);
  let obj1 = _require(customId[4]);
  const componentStateContext = obj1.useComponentStateContext();
  let modal;
  if (null != componentStateContext) {
    modal = componentStateContext.modal;
  }
  importDefault(customId[5])(null != modal, "SearchableSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let channelId;
  const tmp2 = importDefault(customId[5]);
  if (null != componentStateContext) {
    channelId = componentStateContext.channelId;
  }
  importDefault(customId[5])(null != channelId, "SearchableSelectActionComponent must be used inside a channel");
  channel = channel.getChannel(componentStateContext.channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp10 = null;
  if (null != guild_id) {
    tmp10 = guild_id;
  }
  importDefault = tmp10;
  const items = [defaultValues.defaultValues, tmp10];
  let memo = obj.useMemo(() => {
    let snowflakeSelectDefaultValues = defaultValues(customId[6]).getSnowflakeSelectDefaultValues(defaultValues.defaultValues, closure_1);
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
  customId = componentStateContext.modal.customId;
  let type;
  ({ visualState, executeStateUpdate } = componentState);
  if (null != state) {
    type = state.type;
  }
  if (type !== _require(customId[7]).ComponentType.USER_SELECT) {
    let type1;
    if (null != state) {
      type1 = state.type;
    }
    if (type1 !== _require(customId[7]).ComponentType.ROLE_SELECT) {
      let type2;
      if (null != state) {
        type2 = state.type;
      }
      if (type2 !== _require(customId[7]).ComponentType.MENTIONABLE_SELECT) {
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
      if (type4 === _require(customId[7]).ComponentType.LABEL) {
        tmp28 = first;
      }
      obj = { channelId: componentStateContext.channelId, guildId: tmp10, containerId: customId, onSubmit: executeStateUpdate, labelComponent: tmp28, allowEmpty: _require(customId[3]).canSelectBeEmpty(defaultValues, "modal") };
      obj1 = {};
      const obj2 = {};
      const obj6 = _require(customId[3]);
      let merged = Object.assign(defaultValues);
      obj2["placeholder"] = selectPlaceholder;
      obj2["state"] = visualState;
      const tmp33 = importDefault(customId[8]);
      obj2["selectedOptions"] = _require(customId[9]).transformSearchableSelectOptions(memo, tmp10);
      obj1.model = obj2;
      obj1.onTap = function onTap() {
        if (defaultValues.type === defaultValues(customId[7]).ComponentType.CHANNEL_SELECT) {
          const _HermesInternal2 = HermesInternal;
          const obj3 = tmp10(customId[10]);
          let obj = { selectionActionComponent: defaultValues };
          const combined = "ChannelSelectComponentActionSheet:" + customId;
          const merged = Object.assign(obj);
          obj3.openLazy(defaultValues(customId[12])(customId[11], customId.paths), combined, obj);
          const tmp16 = defaultValues(customId[12])(customId[11], customId.paths);
        } else {
          obj = tmp10(customId[10]);
          const _HermesInternal = HermesInternal;
          obj = { selectionActionComponent: defaultValues };
          const combined1 = "MentionableSelectComponentActionSheet:" + customId;
          const merged1 = Object.assign(obj);
          obj.openLazy(defaultValues(customId[12])(customId[13], customId.paths), combined1, obj);
          const tmp4 = defaultValues(customId[12])(customId[13], customId.paths);
        }
      };
      return <tmp33 />;
    }
  }
  memo = state.selectedOptions;
};
