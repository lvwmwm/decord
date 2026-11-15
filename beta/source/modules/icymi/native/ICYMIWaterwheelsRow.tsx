// Module ID: 19038
// Function ID: 19039
// Name: ICYMIWaterwheelsRow
// Dependencies: [19, 21, 19039, 19005, 2]
// Exports: default

// Module 19038 (ICYMIWaterwheelsRow)
import Fragment from "Fragment" /* 21 */;
import WaterwheelsCard from "WaterwheelsCard" /* 19005 */;
import useWaterwheelsActions from "useWaterwheelsActions" /* 19039 */;
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
