// Module ID: 12412
// Function ID: 12413
// Name: OverflowMenuComponentActionSheet
// Dependencies: [19, 21, 6395, 8824, 5257, 12413, 7546, 6140, 12414, 2118, 2]
// Exports: default

// Module 12412 (OverflowMenuComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import TableRowGroup2 from "TableRowGroup" /* 6140 */;
import ComponentStateContext from "ComponentStateContext" /* 8824 */;
import renderComponents from "renderComponents" /* 12414 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

function OverflowMenuSheetContent(component) {
  let hasIcons;
  component = component.component;
  const getOverflowMenuComponentActionSheetKey = component(6395).getOverflowMenuComponentActionSheetKey;
  const tmp = component(6395);
  let obj = component(8824);
  const overflowMenuComponentActionSheetKey = getOverflowMenuComponentActionSheetKey(obj.useComponentContainerId(), component.id);
  const groups = component.groups;
  dependencyMap = groups.some((components) => {
    components = components.components;
    return components.some((emoji) => null != emoji.emoji);
  });
  let items = [overflowMenuComponentActionSheetKey];
  const items1 = [component];
  const callback = react.useCallback((loading) => {
    if (!loading.loading) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(overflowMenuComponentActionSheetKey);
    }
  }, items);
  const memo = react.useMemo(() => {
    const items = [component];
    return items;
  }, items1);
  let obj2 = component(12413);
  const isComponentTreeLoading = obj2.useIsComponentTreeLoading(memo, callback);
  const groups1 = component.groups;
  const ActionSheet = component(7546).ActionSheet;
  return <ActionSheet>{groups1.map((label, index) => {
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const components = label.components;
    const obj2 = renderComponents;
    return <TableRowGroup key={arg1} title={arg0.label} hasIcons={hasIcons}>{obj2.renderComponents(components.filter((type) => type.type === component(hasIcons[9]).ComponentType.MENU_ACTION_ITEM))}</TableRowGroup>;
  })}</ActionSheet>;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/components/OverflowMenuComponentActionSheet.tsx");

export default function OverflowMenuComponentActionSheet(arg0) {
  let component;
  let containerProps;
  ({ component, containerProps } = arg0);
  const ComponentStateContextProvider = ComponentStateContext.ComponentStateContextProvider;
  const merged = Object.assign(containerProps);
  return <ComponentStateContextProvider><OverflowMenuSheetContent component={component} /></ComponentStateContextProvider>;
};
