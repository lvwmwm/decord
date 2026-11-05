// Module ID: 18894
// Function ID: 18895
// Name: ICYMIWaterwheelsRow
// Dependencies: [19, 21, 18895, 18861, 2]
// Exports: default

// Module 18894 (ICYMIWaterwheelsRow)
import Fragment from "Fragment" /* 21 */;
import WaterwheelsCard from "WaterwheelsCard" /* 18861 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 18895 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIWaterwheelsRow.tsx");

export default function ICYMIWaterwheelsRow(card) {
  card = card.card;
  const obj = useWaterwheelsActions;
  const onAction = obj.useWaterwheelsActions();
  return jsx(WaterwheelsCard.WaterwheelsCard, { card, onAction });
};
