// Module ID: 18838
// Function ID: 18839
// Name: CheckboxActionComponent
// Dependencies: [19, 21, 8595, 38, 2000, 14059, 2]

// Module 18838 (CheckboxActionComponent)
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import Server from "Server" /* 2000 */;
import ComponentStateContext from "ComponentStateContext" /* 8595 */;
import Checkbox from "Checkbox" /* 14059 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(function CheckboxActionComponent(type) {
  type = type.type;
  let obj = ComponentStateContext;
  const componentStateContext = obj.useComponentStateContext();
  _modDef38(null != componentStateContext, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let tmp5;
  const useComponentState = componentStateContext.useComponentState;
  if (null != type.default) {
    tmp5 = { type, value: type.default };
    const obj2 = { type, value: type.default };
  }
  const componentState = useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items = [state, type];
  const memo = react.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = iter.type;
    }
    return type === type && state.value;
  }, items);
  const parents = componentStateContext.getParents(type);
  let first;
  if (parents != null) {
    first = parents[0];
  }
  let type1;
  if (first != null) {
    type1 = first.type;
  }
  let tmp11;
  if (type1 === Server.ComponentType.LABEL) {
    tmp11 = first;
  }
  _modDef38(null != tmp11, "CheckboxActionComponent must be a child of a Label component");
  return jsx(Checkbox.Checkbox, {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle: function onChange(value) {
      const obj = { type, value };
      executeStateUpdate(obj);
    }
  });
});
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/CheckboxActionComponent.tsx");

export default memoResult;
