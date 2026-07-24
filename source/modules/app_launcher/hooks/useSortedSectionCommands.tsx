// Module ID: 11286
// Function ID: 87829
// Name: useSortedSectionCommands
// Dependencies: [57, 31, 11287, 11221, 664, 2]
// Exports: default

// Module 11286 (useSortedSectionCommands)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { CommandListSortOrder } from "CommandListSortOrder";

const result = require("CommandListSortOrder").fileFinishedImporting("modules/app_launcher/hooks/useSortedSectionCommands.tsx");

export default function useSortedSectionCommands(sectionId) {
  let canSort;
  let popularSortedCommands;
  sectionId = sectionId.sectionId;
  const commandsByActiveSection = sectionId.commandsByActiveSection;
  let tmp = canSort(React.useState(CommandListSortOrder.ALPHABETICAL), 2);
  const first = tmp[0];
  const dependencyMap = tmp3;
  let items = [commandsByActiveSection, sectionId];
  const memo = React.useMemo(() => {
    const found = commandsByActiveSection.find((section) => section.section.id === outer1_0);
    let data;
    if (null != found) {
      data = found.data;
    }
    if (null == data) {
      data = [];
    }
    return data;
  }, items);
  ({ popularSortedCommands, canSort } = (function usePopularSortedCommands(alphabeticalSortedCommands) {
    alphabeticalSortedCommands = alphabeticalSortedCommands.alphabeticalSortedCommands;
    const items = [alphabeticalSortedCommands];
    return outer1_4.useMemo(() => {
      if (alphabeticalSortedCommands.length <= 1) {
        let obj = { popularSortedCommands: alphabeticalSortedCommands, canSort: false };
        return obj;
      } else {
        alphabeticalSortedCommands = false;
        const mapped = alphabeticalSortedCommands.map((command, alphabeticalSortIndex) => {
          let tmp = c0;
          if (!c0) {
            tmp = null != command.global_popularity_rank;
          }
          c0 = tmp;
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
  })({ alphabeticalSortedCommands: memo }));
  const items1 = [sectionId];
  const effect = React.useEffect(() => {
    let obj = commandsByActiveSection(tmp3[3]);
    obj = { dontRefetchMs: sectionId(tmp3[4]).Millis.DAY };
    const application = obj.getApplication(sectionId, obj);
  }, items1);
  const items2 = [canSort];
  const layoutEffect = React.useLayoutEffect(() => {
    if (canSort) {
      tmp3 = tmp3(outer1_5.POPULAR);
    }
  }, items2);
  if (CommandListSortOrder.POPULAR !== first) {
    const ALPHABETICAL = CommandListSortOrder.ALPHABETICAL;
    popularSortedCommands = memo;
  }
  let obj = { sortOrder: first, setSortOrder: tmp[1], commands: popularSortedCommands, canSort };
  return obj;
};
