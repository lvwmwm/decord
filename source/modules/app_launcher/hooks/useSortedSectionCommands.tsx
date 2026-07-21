// Module ID: 11246
// Function ID: 87526
// Name: useSortedSectionCommands
// Dependencies: []
// Exports: default

// Module 11246 (useSortedSectionCommands)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const CommandListSortOrder = arg1(dependencyMap[2]).CommandListSortOrder;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  let canSort;
  let popularSortedCommands;
  sectionId = sectionId.sectionId;
  const importDefault = sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  const importAll = commandsByActiveSection;
  const tmp = callback(React.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  const items = [commandsByActiveSection, sectionId];
  const memo = React.useMemo(() => {
    const found = commandsByActiveSection.find((section) => section.section.id === closure_0);
    let data;
    if (null != found) {
      data = found.data;
    }
    if (null == data) {
      data = [];
    }
    return data;
  }, items);
  ({ popularSortedCommands, canSort } = function usePopularSortedCommands(alphabeticalSortedCommands) {
    alphabeticalSortedCommands = alphabeticalSortedCommands.alphabeticalSortedCommands;
    const sectionId = alphabeticalSortedCommands;
    const items = [alphabeticalSortedCommands];
    return React.useMemo(() => {
      if (alphabeticalSortedCommands.length <= 1) {
        let obj = { popularSortedCommands: alphabeticalSortedCommands, canSort: false };
        return obj;
      } else {
        const alphabeticalSortedCommands = false;
        const mapped = alphabeticalSortedCommands.map((command, alphabeticalSortIndex) => {
          let tmp = closure_0;
          if (!closure_0) {
            tmp = null != command.global_popularity_rank;
          }
          closure_0 = tmp;
          return { command, alphabeticalSortIndex };
        });
        obj = {};
        if (alphabeticalSortedCommands) {
          const sorted = mapped.sort((command, command2) => {
            const global_popularity_rank = command.command.global_popularity_rank;
            const global_popularity_rank2 = command2.command.global_popularity_rank;
            if (null != global_popularity_rank) {
              if (null != global_popularity_rank2) {
                if (global_popularity_rank !== global_popularity_rank2) {
                  return global_popularity_rank - global_popularity_rank2;
                }
              }
              return command.alphabeticalSortIndex - command2.alphabeticalSortIndex;
            }
            if (null != global_popularity_rank) {
              return -1;
            } else if (null != global_popularity_rank2) {
              return 1;
            }
          });
          obj.popularSortedCommands = mapped.map((command) => command.command);
          obj.canSort = true;
          let tmp4 = obj;
        } else {
          obj.popularSortedCommands = alphabeticalSortedCommands;
          obj.canSort = false;
          tmp4 = obj;
        }
        return tmp4;
      }
    }, items);
  }({ alphabeticalSortedCommands: memo }));
  const callback = canSort;
  const items1 = [sectionId];
  const effect = React.useEffect(() => {
    let obj = commandsByActiveSection(tmp3[3]);
    obj = { dontRefetchMs: sectionId(tmp3[4]).Millis.DAY };
    const application = obj.getApplication(sectionId, obj);
  }, items1);
  const items2 = [canSort];
  const layoutEffect = React.useLayoutEffect(() => {
    if (canSort) {
      const tmp3 = tmp3(constants.POPULAR);
    }
  }, items2);
  if (CommandListSortOrder.POPULAR !== first) {
    const ALPHABETICAL = CommandListSortOrder.ALPHABETICAL;
    popularSortedCommands = memo;
  }
  const obj = { sortOrder: first, setSortOrder: tmp[1], commands: popularSortedCommands, canSort };
  return obj;
};
